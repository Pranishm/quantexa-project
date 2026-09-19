"""Parquet snapshot store with a DuckDB query layer.

Load order is cache-first: Parquet snapshot, then CSV fallback, then the
network. That ordering is what makes the demo work with no internet. Pass
``refresh=True`` to go to the network first and rewrite the snapshot.
"""

from __future__ import annotations

import json
import logging
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import pandas as pd

from app.config import CACHE_DIR, DATA_START, DEFAULT_SYMBOLS
from app.data.align import ValidationReport, validate_prices
from app.data.sources import fetch_csv, fetch_yfinance, safe_name, write_csv

log = logging.getLogger(__name__)

PARQUET_DIR = CACHE_DIR / "parquet"
MANIFEST = CACHE_DIR / "manifest.json"

_MEMO: dict[str, tuple[pd.DataFrame, ValidationReport, str]] = {}


def parquet_path(symbol: str) -> Path:
    return PARQUET_DIR / f"{safe_name(symbol)}.parquet"


def _read_parquet(symbol: str) -> pd.DataFrame:
    path = parquet_path(symbol)
    if not path.exists():
        raise FileNotFoundError(path)
    df = pd.read_parquet(path)
    df.index = pd.to_datetime(df.index)
    df.index.name = "date"
    return df


def write_snapshot(symbol: str, df: pd.DataFrame) -> Path:
    PARQUET_DIR.mkdir(parents=True, exist_ok=True)
    path = parquet_path(symbol)
    df.to_parquet(path)
    write_csv(symbol, df)
    return path


def load_prices(
    symbol: str,
    *,
    refresh: bool = False,
    start: str = DATA_START,
    end: str | None = None,
) -> tuple[pd.DataFrame, ValidationReport, str]:
    """Return (clean OHLCV, validation report, source label).

    ``source`` is one of ``live``, ``parquet-cache`` or ``csv-fallback`` and is
    passed through to the UI so nobody mistakes a stale snapshot for today's
    prices.
    """
    key = f"{symbol}:{start}:{end}:{refresh}"
    if not refresh and key in _MEMO:
        return _MEMO[key]

    df: pd.DataFrame | None = None
    source = "unavailable"
    errors: list[str] = []

    attempts = (
        [("live", lambda: fetch_yfinance(symbol, start, end))]
        if refresh
        else [
            ("parquet-cache", lambda: _read_parquet(symbol)),
            ("live", lambda: fetch_yfinance(symbol, start, end)),
            ("csv-fallback", lambda: fetch_csv(symbol)),
        ]
    )

    for label, loader in attempts:
        try:
            candidate = loader()
            if candidate is not None and not candidate.empty:
                df, source = candidate, label
                break
        except Exception as exc:  # noqa: BLE001 - each source may fail differently
            errors.append(f"{label}: {type(exc).__name__}: {exc}")
            log.debug("source %s failed for %s: %s", label, symbol, exc)

    if df is None:
        raise RuntimeError(
            f"Could not load prices for {symbol!r}. Tried -> " + " | ".join(errors)
        )

    if source == "live":
        write_snapshot(symbol, df)

    clean, report = validate_prices(df, symbol)

    if start:
        clean = clean[clean.index >= pd.Timestamp(start)]
    if end:
        clean = clean[clean.index <= pd.Timestamp(end)]

    result = (clean, report, source)
    _MEMO[key] = result
    return result


def load_many(
    symbols: list[str] | tuple[str, ...] = DEFAULT_SYMBOLS,
    *,
    refresh: bool = False,
    start: str = DATA_START,
    end: str | None = None,
) -> dict[str, pd.DataFrame]:
    out: dict[str, pd.DataFrame] = {}
    for sym in symbols:
        df, _report, _source = load_prices(sym, refresh=refresh, start=start, end=end)
        out[sym] = df
    return out


def refresh_all(symbols: list[str] | tuple[str, ...] = DEFAULT_SYMBOLS) -> dict[str, Any]:
    """Re-download every asset and rewrite the committed snapshot."""
    _MEMO.clear()
    entries: dict[str, Any] = {}
    for sym in symbols:
        try:
            df, report, source = load_prices(sym, refresh=True)
            entries[sym] = {
                "rows": int(len(df)),
                "start": report.start,
                "end": report.end,
                "source": source,
                "gaps": len(report.gaps),
            }
        except Exception as exc:  # noqa: BLE001
            entries[sym] = {"error": f"{type(exc).__name__}: {exc}"}
    manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "assets": entries,
    }
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    return manifest


def read_manifest() -> dict[str, Any]:
    if MANIFEST.exists():
        return json.loads(MANIFEST.read_text())
    return {"generated_at": None, "assets": {}}


def duckdb_closes(
    symbols: list[str] | tuple[str, ...] = DEFAULT_SYMBOLS,
    start: str | None = None,
    end: str | None = None,
) -> pd.DataFrame:
    """Inner-join closing prices across assets using DuckDB over the Parquet cache.

    Equivalent to ``align.align_closes`` but executed in SQL; used by the
    correlation endpoints so the join happens close to the data.
    """
    import duckdb

    available = [s for s in symbols if parquet_path(s).exists()]
    if not available:
        return pd.DataFrame()

    con = duckdb.connect()
    try:
        selects = []
        for i, sym in enumerate(available):
            alias = f"t{i}"
            selects.append((alias, sym, str(parquet_path(sym))))

        first_alias, _first_sym, first_path = selects[0]
        cols = ", ".join(
            f'{alias}.close AS "{sym}"' for alias, sym, _ in selects
        )
        sql = f"SELECT {first_alias}.date AS date, {cols} FROM read_parquet('{first_path}') {first_alias}"
        for alias, _sym, path in selects[1:]:
            sql += (
                f" JOIN read_parquet('{path}') {alias} "
                f"ON {alias}.date = {first_alias}.date"
            )
        where = []
        if start:
            where.append(f"{first_alias}.date >= DATE '{start}'")
        if end:
            where.append(f"{first_alias}.date <= DATE '{end}'")
        if where:
            sql += " WHERE " + " AND ".join(where)
        sql += f" ORDER BY {first_alias}.date"

        df = con.execute(sql).fetch_df()
    finally:
        con.close()

    if df.empty:
        return df
    df["date"] = pd.to_datetime(df["date"])
    return df.set_index("date").sort_index()
