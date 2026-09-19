"""Look-ahead bias audit.

Two independent checks:

1. **Causal test** - recompute the signal on ``prices.iloc[:t+1]`` for a sample
   of bars t and compare with the signal computed on the full history. Any
   difference means the full-history computation saw bars it could not have
   known about. This is a hard pass/fail.

2. **Lag test** - rerun the backtest with one extra bar of execution delay. An
   honest edge degrades gracefully. An edge that evaporates entirely was living
   in information the strategy should not have had.

The causal test is the one that catches centered rolling windows, ``shift(-n)``
and reverse rolling - the constructs that produced unreproducible trades in the
surveyed repositories.
"""

from __future__ import annotations

from dataclasses import dataclass, asdict
from typing import Any

import numpy as np
import pandas as pd

from app.engine.simulator import BacktestConfig, run_backtest
from app.engine.strategies.base import Strategy

TOLERANCE = 1e-9


@dataclass
class CausalTestResult:
    samples: int
    mismatches: int
    passed: bool
    first_failures: list[dict[str, Any]]
    note: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


def causal_test(
    prices: pd.DataFrame,
    strategy: Strategy,
    samples: int = 40,
    seed: int = 0,
) -> CausalTestResult:
    """Assert signal[t] is unchanged when the future is removed."""
    full = strategy.signal(prices)
    n = len(prices)
    warmup = min(max(strategy.warmup + 2, 2), max(n - 1, 2))

    if n - warmup < 2:
        return CausalTestResult(0, 0, False, [], "Not enough bars to audit after warm-up.")

    rng = np.random.default_rng(seed)
    candidates = np.arange(warmup, n)
    picks = (
        candidates
        if len(candidates) <= samples
        else np.sort(rng.choice(candidates, size=samples, replace=False))
    )

    failures: list[dict[str, Any]] = []
    mismatches = 0
    for t in picks:
        t = int(t)
        truncated = strategy.signal(prices.iloc[: t + 1])
        got = float(truncated.iloc[-1])
        want = float(full.iloc[t])
        got_nan, want_nan = np.isnan(got), np.isnan(want)
        if got_nan and want_nan:
            continue
        # A signal that is NaN in real time but a number in hindsight is a leak,
        # and NaN comparisons are False, so this case needs its own branch.
        if got_nan != want_nan or abs(got - want) > TOLERANCE:
            mismatches += 1
            if len(failures) < 5:
                failures.append(
                    {
                        "date": prices.index[t].strftime("%Y-%m-%d"),
                        "bar": t,
                        "signal_with_full_history": want,
                        "signal_with_data_up_to_bar": got,
                    }
                )

    passed = mismatches == 0
    note = (
        f"{len(picks)} of {n} bars re-derived from truncated history; signals identical."
        if passed
        else (
            f"{mismatches} of {len(picks)} sampled signals changed once future bars were "
            "removed. The backtest is using information it could not have had."
        )
    )
    return CausalTestResult(int(len(picks)), int(mismatches), passed, failures, note)


@dataclass
class LagTestResult:
    base_cagr: float
    lagged_cagr: float
    cagr_delta: float
    base_sharpe: float
    lagged_sharpe: float
    sharpe_delta: float
    sharpe_retention: float
    fragile: bool
    note: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


def lag_test(
    prices: pd.DataFrame,
    strategy: Strategy,
    config: BacktestConfig | None = None,
    extra_lag: int = 1,
) -> LagTestResult:
    """Compare next-bar execution with one additional bar of delay."""
    cfg = config or BacktestConfig()
    base_cfg = BacktestConfig(**{**cfg.to_dict(), "execution_lag": cfg.execution_lag})
    slow_cfg = BacktestConfig(**{**cfg.to_dict(), "execution_lag": cfg.execution_lag + extra_lag})

    base = run_backtest(prices, strategy, base_cfg)
    slow = run_backtest(prices, strategy, slow_cfg)

    b_sharpe = float(base.metrics["sharpe"])
    l_sharpe = float(slow.metrics["sharpe"])
    retention = (l_sharpe / b_sharpe) if b_sharpe > 0 and np.isfinite(b_sharpe) else float("nan")

    fragile = bool(b_sharpe > 0.5 and np.isfinite(retention) and retention < 0.5)
    if fragile:
        note = (
            "Most of the edge disappears with one extra bar of delay. That is the "
            "signature of a signal that depends on information arriving too late to trade."
        )
    elif np.isfinite(retention):
        note = f"Sharpe retains {retention * 100:.0f}% of its value with an extra bar of delay."
    else:
        note = "Base Sharpe is not positive, so retention is not meaningful."

    return LagTestResult(
        base_cagr=float(base.metrics["cagr"]),
        lagged_cagr=float(slow.metrics["cagr"]),
        cagr_delta=float(slow.metrics["cagr"] - base.metrics["cagr"]),
        base_sharpe=b_sharpe,
        lagged_sharpe=l_sharpe,
        sharpe_delta=float(l_sharpe - b_sharpe),
        sharpe_retention=float(retention),
        fragile=fragile,
        note=note,
    )


def audit(
    prices: pd.DataFrame,
    strategy: Strategy,
    config: BacktestConfig | None = None,
    samples: int = 40,
) -> dict[str, Any]:
    """Run both checks and produce the badge the UI renders."""
    causal = causal_test(prices, strategy, samples=samples)
    lag = lag_test(prices, strategy, config)

    if not causal.passed:
        verdict, badge = "fail", "Look-ahead detected"
    elif lag.fragile:
        verdict, badge = "warn", "No look-ahead, but lag-fragile"
    else:
        verdict, badge = "pass", "No look-ahead"

    return {
        "strategy": strategy.descriptor,
        "causal_test": causal.to_dict(),
        "lag_test": lag.to_dict(),
        "verdict": verdict,
        "badge": badge,
        "explanation": (
            "The causal test recomputes each sampled signal using only the bars available "
            "at that moment. The lag test reruns the whole backtest one bar later. "
            "A strategy passes only when its signals are reproducible in real time."
        ),
    }


def random_walk_control(
    strategy: Strategy,
    n_walks: int = 30,
    n_bars: int = 750,
    seed: int = 42,
    config: BacktestConfig | None = None,
    annual_vol: float = 0.30,
    periods_per_year: int = 252,
) -> dict[str, Any]:
    """Run the strategy on driftless random walks.

    Nobody has an edge on a random walk. A strategy that reliably makes money
    here is reporting a bug, not skill, so the mean CAGR across walks should sit
    at or below zero once costs are paid.
    """
    cfg = config or BacktestConfig(periods_per_year=periods_per_year)
    rng = np.random.default_rng(seed)
    sigma = annual_vol / np.sqrt(periods_per_year)

    cagrs: list[float] = []
    sharpes: list[float] = []
    for _ in range(n_walks):
        steps = rng.normal(0.0, sigma, n_bars)
        close = 100.0 * np.exp(np.cumsum(steps))
        idx = pd.bdate_range("2015-01-01", periods=n_bars)
        frame = pd.DataFrame(
            {"open": close, "high": close, "low": close, "close": close, "volume": 0.0},
            index=idx,
        )
        frame.index.name = "date"
        result = run_backtest(frame, strategy, cfg)
        cagrs.append(float(result.metrics["cagr"]))
        sharpes.append(float(result.metrics["sharpe"]))

    arr = np.array([c for c in cagrs if np.isfinite(c)])
    sh = np.array([s for s in sharpes if np.isfinite(s)])
    return {
        "walks": n_walks,
        "bars_per_walk": n_bars,
        "mean_cagr": float(arr.mean()) if arr.size else float("nan"),
        "median_cagr": float(np.median(arr)) if arr.size else float("nan"),
        "positive_fraction": float((arr > 0).mean()) if arr.size else float("nan"),
        "mean_sharpe": float(sh.mean()) if sh.size else float("nan"),
        "note": (
            "On driftless synthetic prices a sound engine returns roughly zero before "
            "costs and slightly negative after them. A clearly positive mean is evidence "
            "of look-ahead bias in the engine itself."
        ),
    }
