"""Buy-and-hold reference."""

from __future__ import annotations

import pandas as pd

from app.quant import risk
from app.quant.indicators import simple_returns


def buy_and_hold(close: pd.Series, initial_capital: float = 10_000.0) -> pd.Series:
    """Equity from holding one unit of the asset for the whole window."""
    px = close.astype("float64")
    if px.empty:
        return px
    return initial_capital * px / px.iloc[0]


def buy_and_hold_metrics(
    close: pd.Series,
    periods_per_year: int,
    initial_capital: float = 10_000.0,
    risk_free: float = 0.0,
) -> dict:
    equity = buy_and_hold(close, initial_capital)
    return risk.summarise(
        simple_returns(equity), periods_per_year, risk_free=risk_free, equity=equity
    )
