"""Position sizing.

Every sizer reads only trailing data, so the weight at bar t is decidable at
bar t. The simulator still applies its one-bar execution lag on top.
"""

from __future__ import annotations

from typing import Any

import numpy as np
import pandas as pd

METHODS = ("fixed", "vol_target", "half_kelly")


def _fixed(signal: pd.Series, fraction: float = 1.0, **_: Any) -> pd.Series:
    return signal * float(fraction)


def _vol_target(
    signal: pd.Series,
    returns: pd.Series,
    target_vol: float = 0.15,
    window: int = 30,
    max_weight: float = 1.0,
    periods_per_year: int = 252,
    **_: Any,
) -> pd.Series:
    """w_t = min(w_max, sigma_target / sigma_hat_t).

    sigma_hat is the trailing annualised volatility of the *asset*, so the
    strategy takes a smaller position when the market gets noisy.
    """
    realised = returns.rolling(window=int(window), min_periods=int(window)).std(ddof=1) * np.sqrt(
        periods_per_year
    )
    scale = (float(target_vol) / realised.replace(0.0, np.nan)).clip(upper=float(max_weight))
    return (signal * scale).fillna(0.0)


def _half_kelly(
    signal: pd.Series,
    returns: pd.Series,
    window: int = 60,
    cap: float = 1.0,
    **_: Any,
) -> pd.Series:
    """f = 0.5 * mu / sigma^2 from a trailing window, clipped to [0, cap].

    Direction comes from the signal; Kelly only sets the magnitude.
    """
    w = int(window)
    mu = returns.rolling(window=w, min_periods=w).mean()
    var = returns.rolling(window=w, min_periods=w).var(ddof=1)
    f = 0.5 * mu / var.replace(0.0, np.nan)
    f = f.clip(lower=0.0, upper=float(cap))
    return (signal * f).fillna(0.0)


def apply_sizing(
    signal: pd.Series,
    returns: pd.Series,
    method: str = "fixed",
    params: dict[str, Any] | None = None,
    periods_per_year: int = 252,
) -> pd.Series:
    """Turn a directional signal in [-1, 1] into a target portfolio weight."""
    params = dict(params or {})
    params.setdefault("periods_per_year", periods_per_year)

    if method == "fixed":
        weight = _fixed(signal, **params)
    elif method == "vol_target":
        weight = _vol_target(signal, returns, **params)
    elif method == "half_kelly":
        weight = _half_kelly(signal, returns, **params)
    else:
        raise ValueError(f"Unknown sizing method {method!r}. Available: {', '.join(METHODS)}")

    return weight.astype("float64").fillna(0.0).clip(-1.0, 1.0)
