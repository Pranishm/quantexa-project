"""Risk and performance metrics.

Annualisation takes ``periods_per_year`` as an explicit argument everywhere.
Nothing here assumes 252.
"""

from __future__ import annotations

import math
from dataclasses import dataclass, asdict
from typing import Any, Sequence

import numpy as np
import pandas as pd
from scipy import stats

from app.quant.indicators import drawdown_series, equity_curve

EULER_GAMMA = 0.5772156649015329


def _clean(returns: pd.Series) -> pd.Series:
    return pd.Series(returns).astype("float64").replace([np.inf, -np.inf], np.nan).dropna()


def per_period_sharpe(returns: pd.Series, risk_free: float = 0.0, periods_per_year: int = 252) -> float:
    """Sharpe in per-bar units (not annualised). Used by PSR/DSR."""
    r = _clean(returns)
    if len(r) < 2:
        return float("nan")
    sd = r.std(ddof=1)
    if sd == 0 or not np.isfinite(sd):
        return float("nan")
    excess = r.mean() - risk_free / periods_per_year
    return float(excess / sd)


def sharpe(returns: pd.Series, periods_per_year: int, risk_free: float = 0.0) -> float:
    """(mean(r) - rf/N) / std(r) * sqrt(N)."""
    sr = per_period_sharpe(returns, risk_free, periods_per_year)
    return float(sr * math.sqrt(periods_per_year)) if np.isfinite(sr) else float("nan")


def sortino(returns: pd.Series, periods_per_year: int, risk_free: float = 0.0) -> float:
    """Downside deviation uses sqrt(mean(min(r,0)^2)) over ALL bars, not just losers."""
    r = _clean(returns)
    if len(r) < 2:
        return float("nan")
    downside = np.minimum(r.to_numpy(), 0.0)
    dd = math.sqrt(float(np.mean(downside**2)))
    if dd == 0:
        return float("inf") if r.mean() > 0 else float("nan")
    excess = r.mean() - risk_free / periods_per_year
    return float(excess / dd * math.sqrt(periods_per_year))


def cagr(equity: pd.Series, periods_per_year: int) -> float:
    """(V_end / V_start)^(N/T) - 1 where T is the number of bars elapsed."""
    eq = pd.Series(equity).astype("float64").dropna()
    if len(eq) < 2 or eq.iloc[0] <= 0:
        return float("nan")
    periods = len(eq) - 1
    if periods <= 0:
        return float("nan")
    growth = eq.iloc[-1] / eq.iloc[0]
    if growth <= 0:
        return -1.0
    return float(growth ** (periods_per_year / periods) - 1.0)


@dataclass
class DrawdownStats:
    max_drawdown: float
    peak_date: str | None
    trough_date: str | None
    recovery_date: str | None
    max_drawdown_bars: int
    longest_drawdown_bars: int


def drawdown_stats(equity: pd.Series) -> DrawdownStats:
    """Worst drawdown plus how long the account stayed under water."""
    eq = pd.Series(equity).astype("float64").dropna()
    if eq.empty:
        return DrawdownStats(float("nan"), None, None, None, 0, 0)

    dd = drawdown_series(eq)
    trough_idx = dd.idxmin()
    max_dd = float(dd.min())

    running_max = eq.cummax()
    peak_slice = eq.loc[:trough_idx]
    peak_idx = peak_slice[peak_slice == running_max.loc[trough_idx]].index[-1]

    after = eq.loc[trough_idx:]
    recovered = after[after >= running_max.loc[trough_idx]]
    recovery_idx = recovered.index[0] if len(recovered) else None

    pos = {d: i for i, d in enumerate(eq.index)}
    end_pos = pos[recovery_idx] if recovery_idx is not None else len(eq) - 1
    max_dd_bars = end_pos - pos[peak_idx]

    # Longest continuous under-water stretch anywhere in the curve.
    under = (dd < -1e-12).to_numpy()
    longest = run = 0
    for flag in under:
        run = run + 1 if flag else 0
        longest = max(longest, run)

    def fmt(idx: Any) -> str | None:
        if idx is None:
            return None
        return pd.Timestamp(idx).strftime("%Y-%m-%d")

    return DrawdownStats(
        max_drawdown=max_dd,
        peak_date=fmt(peak_idx),
        trough_date=fmt(trough_idx),
        recovery_date=fmt(recovery_idx),
        max_drawdown_bars=int(max_dd_bars),
        longest_drawdown_bars=int(longest),
    )


def calmar(equity: pd.Series, periods_per_year: int) -> float:
    growth = cagr(equity, periods_per_year)
    mdd = drawdown_stats(equity).max_drawdown
    if not np.isfinite(growth) or not np.isfinite(mdd) or mdd == 0:
        return float("nan")
    return float(growth / abs(mdd))


def historical_var(returns: pd.Series, level: float = 0.95) -> float:
    """Positive number: the loss not exceeded with `level` confidence."""
    r = _clean(returns)
    if r.empty:
        return float("nan")
    return float(-np.quantile(r.to_numpy(), 1.0 - level))


def historical_cvar(returns: pd.Series, level: float = 0.95) -> float:
    """Mean loss in the tail beyond VaR."""
    r = _clean(returns)
    if r.empty:
        return float("nan")
    cutoff = np.quantile(r.to_numpy(), 1.0 - level)
    tail = r[r <= cutoff]
    if tail.empty:
        return float("nan")
    return float(-tail.mean())


def beta(asset_returns: pd.Series, benchmark_returns: pd.Series) -> float:
    """cov(r_s, r_b) / var(r_b) on the overlapping dates only."""
    joined = pd.concat(
        [pd.Series(asset_returns).rename("a"), pd.Series(benchmark_returns).rename("b")],
        axis=1,
        join="inner",
    ).replace([np.inf, -np.inf], np.nan).dropna()
    if len(joined) < 3:
        return float("nan")
    var_b = joined["b"].var(ddof=1)
    if var_b == 0 or not np.isfinite(var_b):
        return float("nan")
    return float(joined["a"].cov(joined["b"]) / var_b)


def probabilistic_sharpe(
    returns: pd.Series,
    sr_benchmark: float = 0.0,
    observed_sr: float | None = None,
) -> float:
    """PSR = Phi( (SR - SR*) * sqrt(T-1) / sqrt(1 - g3*SR + (g4-1)/4 * SR^2) ).

    SR and SR* are both in *per-period* units. g3 is skew, g4 is raw (not
    excess) kurtosis. Answers: what is the probability the true Sharpe exceeds
    SR*, given this sample's length and shape?
    """
    r = _clean(returns)
    T = len(r)
    if T < 4:
        return float("nan")
    sr = per_period_sharpe(r) if observed_sr is None else observed_sr
    if not np.isfinite(sr):
        return float("nan")
    g3 = float(stats.skew(r.to_numpy(), bias=False))
    g4 = float(stats.kurtosis(r.to_numpy(), fisher=False, bias=False))
    variance = 1.0 - g3 * sr + (g4 - 1.0) / 4.0 * sr**2
    if variance <= 0 or not np.isfinite(variance):
        return float("nan")
    z = (sr - sr_benchmark) * math.sqrt(T - 1) / math.sqrt(variance)
    return float(stats.norm.cdf(z))


def expected_max_sharpe(trial_sharpes: Sequence[float]) -> float:
    """SR* - the Sharpe you would expect from the *best* of K random trials.

    SR* = sqrt(Var(SR_k)) * ((1-g)*Phi^-1(1 - 1/K) + g*Phi^-1(1 - 1/(K*e)))
    """
    arr = np.asarray([s for s in trial_sharpes if np.isfinite(s)], dtype="float64")
    K = len(arr)
    if K < 2:
        return 0.0
    sd = float(np.std(arr, ddof=1))
    if sd == 0 or not np.isfinite(sd):
        return 0.0
    term = (1.0 - EULER_GAMMA) * stats.norm.ppf(1.0 - 1.0 / K) + EULER_GAMMA * stats.norm.ppf(
        1.0 - 1.0 / (K * math.e)
    )
    return float(sd * term)


def deflated_sharpe(returns: pd.Series, trial_sharpes: Sequence[float]) -> float:
    """PSR measured against the best-of-K benchmark instead of zero.

    Try 200 parameter combinations on noise and the winner will look good; DSR
    is what is left after charging for that search.
    """
    sr_star = expected_max_sharpe(trial_sharpes)
    return probabilistic_sharpe(returns, sr_benchmark=sr_star)


def summarise(
    returns: pd.Series,
    periods_per_year: int,
    *,
    risk_free: float = 0.0,
    benchmark_returns: pd.Series | None = None,
    initial_capital: float = 1.0,
    equity: pd.Series | None = None,
) -> dict[str, Any]:
    """Full metric block for one return stream."""
    r = pd.Series(returns).astype("float64")
    eq = equity_curve(r, initial_capital) if equity is None else pd.Series(equity).astype("float64")
    dd = drawdown_stats(eq)
    clean = _clean(r)

    out: dict[str, Any] = {
        "periods_per_year": int(periods_per_year),
        "bars": int(len(clean)),
        "start": clean.index[0].strftime("%Y-%m-%d") if len(clean) and hasattr(clean.index[0], "strftime") else None,
        "end": clean.index[-1].strftime("%Y-%m-%d") if len(clean) and hasattr(clean.index[-1], "strftime") else None,
        "total_return": float(eq.iloc[-1] / eq.iloc[0] - 1.0) if len(eq) > 1 else float("nan"),
        "cagr": cagr(eq, periods_per_year),
        "annualised_volatility": float(clean.std(ddof=1) * math.sqrt(periods_per_year)) if len(clean) > 1 else float("nan"),
        "sharpe": sharpe(r, periods_per_year, risk_free),
        "sortino": sortino(r, periods_per_year, risk_free),
        "max_drawdown": dd.max_drawdown,
        "max_drawdown_bars": dd.max_drawdown_bars,
        "longest_drawdown_bars": dd.longest_drawdown_bars,
        "drawdown_peak": dd.peak_date,
        "drawdown_trough": dd.trough_date,
        "drawdown_recovery": dd.recovery_date,
        "calmar": calmar(eq, periods_per_year),
        "var_95": historical_var(r, 0.95),
        "cvar_95": historical_cvar(r, 0.95),
        "skew": float(stats.skew(clean.to_numpy(), bias=False)) if len(clean) > 3 else float("nan"),
        "kurtosis": float(stats.kurtosis(clean.to_numpy(), fisher=True, bias=False)) if len(clean) > 3 else float("nan"),
        "win_rate": float((clean > 0).mean()) if len(clean) else float("nan"),
        "probabilistic_sharpe": probabilistic_sharpe(r),
        "final_equity": float(eq.iloc[-1]) if len(eq) else float("nan"),
    }
    if benchmark_returns is not None:
        out["beta"] = beta(r, benchmark_returns)
    return out
