"""Price indicators and return transforms.

Every rolling window here is backward-looking. There are no centered windows,
no ``shift(-n)``, and no reverse rolling: those are exactly the constructs that
leaked future prices in the surveyed repositories.
"""

from __future__ import annotations

import numpy as np
import pandas as pd


def simple_returns(prices: pd.Series) -> pd.Series:
    """r_t = P_t / P_(t-1) - 1. The only return type safe to combine across assets."""
    return prices.astype("float64").pct_change()


def log_returns(prices: pd.Series) -> pd.Series:
    """l_t = ln(P_t / P_(t-1)). Single-asset statistics only."""
    p = prices.astype("float64")
    return np.log(p / p.shift(1))


def cumulative_returns(returns: pd.Series) -> pd.Series:
    """Compounded growth of 1 unit, minus 1."""
    return (1.0 + returns.fillna(0.0)).cumprod() - 1.0


def equity_curve(returns: pd.Series, initial: float = 1.0) -> pd.Series:
    return initial * (1.0 + returns.fillna(0.0)).cumprod()


def sma(prices: pd.Series, window: int) -> pd.Series:
    return prices.astype("float64").rolling(window=window, min_periods=window).mean()


def ema(prices: pd.Series, window: int) -> pd.Series:
    """alpha = 2 / (n + 1), seeded so the first n-1 values stay NaN."""
    out = prices.astype("float64").ewm(span=window, adjust=False, min_periods=window).mean()
    return out


def rolling_volatility(returns: pd.Series, window: int, periods_per_year: int | None = None) -> pd.Series:
    """Rolling standard deviation, annualised when N is supplied."""
    vol = returns.rolling(window=window, min_periods=window).std(ddof=1)
    if periods_per_year:
        vol = vol * np.sqrt(periods_per_year)
    return vol


def annualised_volatility(returns: pd.Series, periods_per_year: int) -> float:
    r = returns.dropna()
    if len(r) < 2:
        return float("nan")
    return float(r.std(ddof=1) * np.sqrt(periods_per_year))


def rolling_return(prices: pd.Series, window: int) -> pd.Series:
    """Trailing total return over `window` bars."""
    p = prices.astype("float64")
    return p / p.shift(window) - 1.0


def momentum(prices: pd.Series, lookback: int) -> pd.Series:
    """P_t / P_(t-k) - 1."""
    return rolling_return(prices, lookback)


def zscore(prices: pd.Series, window: int) -> pd.Series:
    """(P_t - SMA_n) / rolling std of price over the same window."""
    p = prices.astype("float64")
    mean = p.rolling(window=window, min_periods=window).mean()
    std = p.rolling(window=window, min_periods=window).std(ddof=1)
    return (p - mean) / std.replace(0.0, np.nan)


def drawdown_series(equity: pd.Series) -> pd.Series:
    """DD_t = V_t / max(V_s, s <= t) - 1, always <= 0."""
    running_max = equity.cummax()
    return equity / running_max - 1.0
