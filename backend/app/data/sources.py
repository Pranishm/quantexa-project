"""Price sources: yfinance for live data, CSV for an offline fallback."""

from __future__ import annotations

import logging
import warnings
from pathlib import Path

import pandas as pd

from app.config import CACHE_DIR, DATA_START

log = logging.getLogger(__name__)

OHLCV = ["open", "high", "low", "close", "volume"]
CSV_DIR = CACHE_DIR / "csv"


def _normalise(raw: pd.DataFrame, symbol: str) -> pd.DataFrame:
    """Reduce a yfinance frame to lowercase OHLCV on a naive DatetimeIndex."""
    if raw is None or raw.empty:
        return pd.DataFrame(columns=OHLCV)

    df = raw.copy()

    # yfinance returns MultiIndex columns ("Close", "NVDA") for downloads and
    # flat columns for Ticker().history(). Handle both.
    if isinstance(df.columns, pd.MultiIndex):
        levels = df.columns.get_level_values(-1)
        if symbol in set(levels):
            df = df.xs(symbol, axis=1, level=-1)
        else:
            df.columns = df.columns.get_level_values(0)

    df.columns = [str(c).lower().replace(" ", "_") for c in df.columns]
    if "adj_close" in df.columns and "close" not in df.columns:
        df = df.rename(columns={"adj_close": "close"})

    for col in OHLCV:
        if col not in df.columns:
            df[col] = pd.NA

    df = df[OHLCV].astype("float64")
    df.index = pd.to_datetime(df.index)
    if df.index.tz is not None:
        df.index = df.index.tz_localize(None)
    df.index.name = "date"
    return df.sort_index()


def fetch_yfinance(symbol: str, start: str = DATA_START, end: str | None = None) -> pd.DataFrame:
    """Download daily OHLCV. Raises on failure so callers can fall back."""
    import yfinance as yf

    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        raw = yf.download(
            symbol,
            start=start,
            end=end,
            interval="1d",
            auto_adjust=True,
            progress=False,
            threads=False,
        )
    df = _normalise(raw, symbol)
    if df.empty:
        raise RuntimeError(f"yfinance returned no rows for {symbol!r}")
    return df


def csv_path(symbol: str) -> Path:
    return CSV_DIR / f"{safe_name(symbol)}.csv"


def safe_name(symbol: str) -> str:
    """Filesystem-safe stem for a ticker ('GC=F' -> 'GC_F')."""
    return "".join(ch if ch.isalnum() else "_" for ch in symbol)


def fetch_csv(symbol: str) -> pd.DataFrame:
    """Read a committed CSV snapshot. Raises if absent."""
    path = csv_path(symbol)
    if not path.exists():
        raise FileNotFoundError(f"No CSV fallback at {path}")
    df = pd.read_csv(path, index_col=0, parse_dates=True)
    return _normalise(df, symbol)


def write_csv(symbol: str, df: pd.DataFrame) -> Path:
    CSV_DIR.mkdir(parents=True, exist_ok=True)
    path = csv_path(symbol)
    df.to_csv(path)
    return path
