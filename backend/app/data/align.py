"""Calendar alignment and price-data validation.

Two rules enforced here:

1. Single-asset statistics use that asset's own calendar.
2. Cross-asset work (correlation, portfolios) uses an *inner join* on common
   dates. Forward-filling Gold onto Bitcoin's weekend bars would invent
   zero-return days and silently deflate Gold's volatility and its correlation
   with everything else.
"""

from __future__ import annotations

from dataclasses import dataclass, field, asdict
from typing import Any

import pandas as pd

from app.config import get_asset


@dataclass
class ValidationReport:
    symbol: str
    rows: int
    start: str | None
    end: str | None
    duplicate_dates_dropped: int = 0
    unsorted_fixed: bool = False
    nan_closes_dropped: int = 0
    non_positive_closes_dropped: int = 0
    gaps: list[dict[str, Any]] = field(default_factory=list)
    ok: bool = True

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


def _expected_max_gap_days(symbol: str) -> int:
    """Largest bar-to-bar spacing that is unremarkable for this asset."""
    asset = get_asset(symbol)
    # Crypto trades daily; anything over a day is a real hole. Exchange-traded
    # assets routinely skip weekends plus a holiday, so allow four days.
    return 1 if asset.periods_per_year == 365 else 4


def validate_prices(df: pd.DataFrame, symbol: str) -> tuple[pd.DataFrame, ValidationReport]:
    """Clean a raw OHLCV frame and describe what had to be repaired.

    Returns the cleaned frame plus a report. The report is surfaced through the
    API so data problems are visible rather than silently absorbed.
    """
    report = ValidationReport(symbol=symbol, rows=0, start=None, end=None)

    if df is None or df.empty:
        report.ok = False
        return pd.DataFrame(columns=["open", "high", "low", "close", "volume"]), report

    out = df.copy()

    if not isinstance(out.index, pd.DatetimeIndex):
        out.index = pd.to_datetime(out.index)
    out.index = out.index.tz_localize(None) if out.index.tz is not None else out.index
    out.index.name = "date"

    if not out.index.is_monotonic_increasing:
        out = out.sort_index()
        report.unsorted_fixed = True

    dupes = int(out.index.duplicated().sum())
    if dupes:
        out = out[~out.index.duplicated(keep="last")]
        report.duplicate_dates_dropped = dupes

    before = len(out)
    out = out[out["close"].notna()]
    report.nan_closes_dropped = before - len(out)

    before = len(out)
    out = out[out["close"] > 0]
    report.non_positive_closes_dropped = before - len(out)

    if out.empty:
        report.ok = False
        return out, report

    # Record calendar holes worth mentioning.
    max_gap = _expected_max_gap_days(symbol)
    deltas = out.index.to_series().diff().dt.days
    for date, gap in deltas[deltas > max_gap].items():
        prev = out.index[out.index.get_loc(date) - 1]
        report.gaps.append(
            {
                "from": prev.strftime("%Y-%m-%d"),
                "to": date.strftime("%Y-%m-%d"),
                "days": int(gap),
            }
        )

    report.rows = len(out)
    report.start = out.index[0].strftime("%Y-%m-%d")
    report.end = out.index[-1].strftime("%Y-%m-%d")
    return out, report


def align_closes(frames: dict[str, pd.DataFrame], column: str = "close") -> pd.DataFrame:
    """Inner-join one column across assets onto their common dates."""
    if not frames:
        return pd.DataFrame()
    series = {sym: df[column].rename(sym) for sym, df in frames.items() if not df.empty}
    if not series:
        return pd.DataFrame()
    aligned = pd.concat(series.values(), axis=1, join="inner")
    return aligned.dropna(how="any").sort_index()


def coverage(frames: dict[str, pd.DataFrame]) -> dict[str, Any]:
    """Describe how much data survives the inner join."""
    aligned = align_closes(frames)
    per_asset = {sym: int(len(df)) for sym, df in frames.items()}
    return {
        "per_asset_rows": per_asset,
        "common_rows": int(len(aligned)),
        "common_start": aligned.index[0].strftime("%Y-%m-%d") if not aligned.empty else None,
        "common_end": aligned.index[-1].strftime("%Y-%m-%d") if not aligned.empty else None,
        "dropped_by_join": {
            sym: int(rows - len(aligned)) for sym, rows in per_asset.items()
        },
    }
