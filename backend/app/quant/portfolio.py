"""Portfolio optimization and allocation."""

from __future__ import annotations

import numpy as np
import pandas as pd
from scipy.optimize import minimize


def portfolio_statistics(
    weights: np.ndarray,
    returns: pd.DataFrame,
    risk_free: float,
    trading_days: int = 252,
) -> tuple[float, float, float]:
    """Calculate expected return, volatility, and Sharpe ratio for a portfolio."""
    expected_return = returns.mean() * trading_days
    covariance = returns.cov() * trading_days

    annual_return = float(weights @ expected_return)
    annual_volatility = float(np.sqrt(weights @ covariance.to_numpy() @ weights))

    sharpe = (
        (annual_return - risk_free) / annual_volatility
        if annual_volatility > 0
        else np.nan
    )

    return annual_return, annual_volatility, sharpe


def calculate_weights(
    returns: pd.DataFrame,
    method: str,
    risk_free: float,
) -> pd.Series:
    """Calculate portfolio weights using the specified allocation method."""
    n = returns.shape[1]

    if method == "Equal Weight":
        return pd.Series(np.repeat(1 / n, n), index=returns.columns)

    if method == "Inverse Volatility":
        volatility = returns.std()
        inverse = 1 / volatility.replace(0, np.nan)
        weights = inverse / inverse.sum()
        return weights.fillna(1 / n)

    # Maximum Sharpe
    initial = np.repeat(1 / n, n)
    bounds = [(0, 1) for _ in range(n)]
    constraint = {"type": "eq", "fun": lambda x: np.sum(x) - 1}

    result = minimize(
        lambda x: -portfolio_statistics(x, returns, risk_free)[2],
        initial,
        method="SLSQP",
        bounds=bounds,
        constraints=constraint,
        options={"maxiter": 1000, "ftol": 1e-10},
    )

    weights = result.x if result.success else initial
    return pd.Series(weights, index=returns.columns)
