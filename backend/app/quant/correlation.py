"""Correlation matrix, rolling correlation, and break detection.

All correlations are computed on *simple* returns over the inner join of the
assets' calendars. Forward-filling one asset onto another's trading days would
manufacture zero-return bars and bias every correlation toward zero.
"""

from __future__ import annotations

from itertools import combinations
from typing import Any

import numpy as np
import pandas as pd

from app.quant.indicators import simple_returns


def returns_frame(closes: pd.DataFrame) -> pd.DataFrame:
    """Simple returns on the common calendar, first bar dropped."""
    return closes.astype("float64").pct_change().dropna(how="any")


def correlation_matrix(closes: pd.DataFrame, method: str = "pearson") -> dict[str, Any]:
    rets = returns_frame(closes)
    if rets.empty:
        return {"symbols": [], "matrix": [], "bars": 0}
    matrix = rets.corr(method=method)
    symbols = list(matrix.columns)
    return {
        "symbols": symbols,
        "matrix": [[float(matrix.loc[a, b]) for b in symbols] for a in symbols],
        "bars": int(len(rets)),
        "start": rets.index[0].strftime("%Y-%m-%d"),
        "end": rets.index[-1].strftime("%Y-%m-%d"),
        "method": method,
    }


def covariance_matrix(closes: pd.DataFrame, periods_per_year: int = 252) -> dict[str, Any]:
    rets = returns_frame(closes)
    cov = rets.cov() * periods_per_year
    symbols = list(cov.columns)
    return {
        "symbols": symbols,
        "matrix": [[float(cov.loc[a, b]) for b in symbols] for a in symbols],
        "annualised": True,
    }


def rolling_correlation(closes: pd.DataFrame, window: int = 60) -> pd.DataFrame:
    """One column per asset pair, labelled 'A|B'."""
    rets = returns_frame(closes)
    out: dict[str, pd.Series] = {}
    for a, b in combinations(rets.columns, 2):
        out[f"{a}|{b}"] = rets[a].rolling(window, min_periods=window).corr(rets[b])
    if not out:
        return pd.DataFrame(index=rets.index)
    return pd.DataFrame(out)


def correlation_breaks(
    closes: pd.DataFrame,
    window: int = 60,
    baseline: int = 252,
    threshold: float = 2.0,
) -> dict[str, Any]:
    """Flag when a rolling correlation departs from its own trailing norm.

        z = (rho_w - trailing_mean(rho_w)) / trailing_std(rho_w)

    The trailing mean and standard deviation are shifted by one bar so the
    baseline contains only history the observer already had. Comparing today's
    correlation against a window that includes today would be mildly
    self-referential; comparing it against the *full* sample would be outright
    look-ahead.
    """
    rolling = rolling_correlation(closes, window)
    if rolling.empty:
        return {"window": window, "baseline": baseline, "threshold": threshold, "pairs": {}, "events": []}

    prior = rolling.shift(1)
    mean = prior.rolling(baseline, min_periods=max(baseline // 4, 20)).mean()
    std = prior.rolling(baseline, min_periods=max(baseline // 4, 20)).std(ddof=1)
    z = (rolling - mean) / std.replace(0.0, np.nan)

    pairs: dict[str, Any] = {}
    events: list[dict[str, Any]] = []

    for pair in rolling.columns:
        series = rolling[pair]
        zs = z[pair]
        pairs[pair] = {
            "dates": [d.strftime("%Y-%m-%d") for d in series.index],
            "correlation": [None if pd.isna(v) else float(v) for v in series.to_numpy()],
            "zscore": [None if pd.isna(v) else float(v) for v in zs.to_numpy()],
            "baseline_mean": [None if pd.isna(v) else float(v) for v in mean[pair].to_numpy()],
            "latest": None if pd.isna(series.iloc[-1]) else float(series.iloc[-1]),
            "latest_z": None if pd.isna(zs.iloc[-1]) else float(zs.iloc[-1]),
        }

        breached = zs[zs.abs() > threshold]
        # Collapse consecutive breach bars into one event per episode.
        last_date: pd.Timestamp | None = None
        for date, value in breached.items():
            if last_date is not None and (date - last_date).days <= window // 2:
                last_date = date
                continue
            a, b = pair.split("|")
            events.append(
                {
                    "pair": pair,
                    "asset_a": a,
                    "asset_b": b,
                    "date": date.strftime("%Y-%m-%d"),
                    "correlation": float(series.loc[date]),
                    "baseline_mean": float(mean[pair].loc[date]),
                    "zscore": float(value),
                    "direction": "decoupling" if value < 0 else "converging",
                    "message": (
                        f"{a}/{b} {window}-day correlation moved to {series.loc[date]:+.2f}, "
                        f"{abs(value):.1f} standard deviations from its trailing "
                        f"{baseline}-bar average of {mean[pair].loc[date]:+.2f}."
                    ),
                }
            )
            last_date = date

    events.sort(key=lambda e: e["date"])
    return {
        "window": window,
        "baseline": baseline,
        "threshold": threshold,
        "pairs": pairs,
        "events": events,
    }
