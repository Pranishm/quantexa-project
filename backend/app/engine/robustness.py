"""Robustness analysis: parameter grids, cost sweeps, walk-forward.

The headline output is a single 0-100 score built from three things that are
hard to fake at once:

* **Deflated Sharpe** - is the Sharpe still credible after charging for the
  number of parameter sets that were tried?
* **Plateau stability** - does the best cell sit on a broad plateau, or is it a
  lone spike surrounded by losers?
* **Walk-forward efficiency** - does out-of-sample performance survive?

A strategy can buy any one of these with luck. Buying all three is hard.
"""

from __future__ import annotations

from itertools import product
from typing import Any, Iterable

import numpy as np
import pandas as pd

from app.engine.benchmark import buy_and_hold
from app.engine.simulator import BacktestConfig, run_backtest
from app.engine.strategies import build_strategy
from app.quant import risk
from app.quant.indicators import simple_returns

DEFAULT_GRIDS: dict[str, dict[str, list[float]]] = {
    "sma_cross": {
        "short_window": [5, 10, 15, 20, 30, 40, 50],
        "long_window": [50, 75, 100, 125, 150, 175, 200],
    },
    "ema_trend": {"span": [10, 20, 30, 50, 75, 100, 150, 200]},
    "momentum": {"lookback": [20, 40, 60, 90, 120, 160, 200, 250]},
    "mean_reversion": {
        "window": [10, 20, 30, 45, 60, 90, 120],
        "entry_z": [1.0, 1.5, 2.0, 2.5, 3.0],
    },
}


def _valid(name: str, combo: dict[str, float]) -> bool:
    """Reject nonsensical parameter pairs before spending a backtest on them."""
    if name == "sma_cross":
        return combo["short_window"] < combo["long_window"]
    return True


def _combos(name: str, grid: dict[str, list[float]]) -> list[dict[str, float]]:
    keys = list(grid)
    out = []
    for values in product(*(grid[k] for k in keys)):
        combo = dict(zip(keys, values))
        if _valid(name, combo):
            out.append(combo)
    return out


def parameter_grid(
    prices: pd.DataFrame,
    strategy_name: str,
    config: BacktestConfig,
    grid: dict[str, list[float]] | None = None,
    allow_short: bool = False,
) -> dict[str, Any]:
    """Backtest every parameter combination and return a Sharpe surface."""
    grid = grid or DEFAULT_GRIDS.get(strategy_name, {})
    if not grid:
        return {"available": False, "reason": f"no parameter grid defined for {strategy_name}"}

    combos = _combos(strategy_name, grid)
    rows: list[dict[str, Any]] = []
    trial_sharpes: list[float] = []

    for combo in combos:
        strat = build_strategy(strategy_name, combo, allow_short=allow_short)
        try:
            result = run_backtest(prices, strat, config)
        except Exception:  # noqa: BLE001 - a bad combo must not kill the sweep
            continue
        sharpe = float(result.metrics["sharpe"])
        per_period = risk.per_period_sharpe(result.net_return, config.risk_free, config.periods_per_year)
        trial_sharpes.append(per_period)
        rows.append(
            {
                "params": combo,
                "sharpe": sharpe,
                "cagr": float(result.metrics["cagr"]),
                "max_drawdown": float(result.metrics["max_drawdown"]),
                "trades": int(result.summary["trades"]),
            }
        )

    if not rows:
        return {"available": False, "reason": "every parameter combination failed"}

    sharpes = np.array([r["sharpe"] for r in rows], dtype="float64")
    finite = sharpes[np.isfinite(sharpes)]
    best_i = int(np.nanargmax(np.where(np.isfinite(sharpes), sharpes, -np.inf)))
    best = rows[best_i]

    keys = list(grid)
    axes = {k: sorted({r["params"][k] for r in rows}) for k in keys}

    heatmap: dict[str, Any] = {"axes": axes, "keys": keys}
    if len(keys) == 2:
        x_key, y_key = keys
        z = [
            [
                next(
                    (
                        r["sharpe"]
                        for r in rows
                        if r["params"][x_key] == x and r["params"][y_key] == y
                    ),
                    None,
                )
                for x in axes[x_key]
            ]
            for y in axes[y_key]
        ]
        heatmap["z"] = [[None if v is None or not np.isfinite(v) else float(v) for v in row] for row in z]
        heatmap["x"] = axes[x_key]
        heatmap["y"] = axes[y_key]
        heatmap["x_key"] = x_key
        heatmap["y_key"] = y_key
        stability = _plateau_stability(np.array(z, dtype="float64"))
    else:
        key = keys[0]
        heatmap["x"] = axes[key]
        heatmap["y"] = ["sharpe"]
        heatmap["x_key"] = key
        heatmap["y_key"] = "metric"
        line = np.array(
            [next((r["sharpe"] for r in rows if r["params"][key] == x), np.nan) for x in axes[key]],
            dtype="float64",
        )
        heatmap["z"] = [[None if not np.isfinite(v) else float(v) for v in line]]
        stability = _plateau_stability(line.reshape(1, -1))

    return {
        "available": True,
        "strategy": strategy_name,
        "combinations": len(rows),
        "results": rows,
        "heatmap": heatmap,
        "best": best,
        "sharpe_mean": float(finite.mean()) if finite.size else float("nan"),
        "sharpe_std": float(finite.std(ddof=1)) if finite.size > 1 else float("nan"),
        "positive_fraction": float((finite > 0).mean()) if finite.size else float("nan"),
        "plateau_stability": stability,
        "trial_sharpes": trial_sharpes,
    }


def _plateau_stability(z: np.ndarray) -> float:
    """How much of the best cell's Sharpe survives in its neighbours.

    1.0 means the neighbourhood is as good as the peak (a plateau). Near 0
    means the peak is an isolated spike, which is what overfitting looks like
    on a heatmap.
    """
    if z.size == 0 or not np.isfinite(z).any():
        return float("nan")
    flat = np.where(np.isfinite(z), z, -np.inf)
    peak_pos = np.unravel_index(int(np.argmax(flat)), z.shape)
    peak = float(z[peak_pos])
    if not np.isfinite(peak) or peak <= 0:
        return 0.0

    rows, cols = z.shape
    neighbours = []
    for dr in (-1, 0, 1):
        for dc in (-1, 0, 1):
            if dr == 0 and dc == 0:
                continue
            r, c = peak_pos[0] + dr, peak_pos[1] + dc
            if 0 <= r < rows and 0 <= c < cols and np.isfinite(z[r, c]):
                neighbours.append(float(z[r, c]))
    if not neighbours:
        return 0.0
    return float(np.clip(np.mean(neighbours) / peak, 0.0, 1.0))


def cost_sweep(
    prices: pd.DataFrame,
    strategy_name: str,
    params: dict[str, Any],
    config: BacktestConfig,
    bps_levels: Iterable[float] = (0, 2, 5, 10, 15, 20, 25, 30, 40, 50),
    allow_short: bool = False,
) -> dict[str, Any]:
    """Sharpe and CAGR as a function of round-trip cost, with the break-even."""
    strat = build_strategy(strategy_name, params, allow_short=allow_short)
    close = prices["close"]
    bh_equity = buy_and_hold(close, config.initial_capital)
    bh = risk.summarise(
        simple_returns(bh_equity), config.periods_per_year, equity=bh_equity
    )
    bh_sharpe = float(bh["sharpe"])
    bh_cagr = float(bh["cagr"])

    points = []
    for bps in bps_levels:
        cfg = BacktestConfig(**{**config.to_dict(), "fee_bps": float(bps), "slippage_bps": 0.0})
        result = run_backtest(prices, strat, cfg)
        points.append(
            {
                "bps": float(bps),
                "sharpe": float(result.metrics["sharpe"]),
                "cagr": float(result.metrics["cagr"]),
                "net_total_return": float(result.summary["net_total_return"]),
                "beats_benchmark": bool(result.metrics["sharpe"] > bh_sharpe),
            }
        )

    break_even = None
    for prev, curr in zip(points, points[1:]):
        if prev["beats_benchmark"] and not curr["beats_benchmark"]:
            # Linear interpolation between the two bracketing cost levels.
            y0, y1 = prev["sharpe"] - bh_sharpe, curr["sharpe"] - bh_sharpe
            if y0 != y1:
                break_even = float(prev["bps"] + (curr["bps"] - prev["bps"]) * y0 / (y0 - y1))
            else:
                break_even = float(curr["bps"])
            break

    if break_even is None and points and not points[0]["beats_benchmark"]:
        break_even = 0.0

    return {
        "available": True,
        "points": points,
        "benchmark_sharpe": bh_sharpe,
        "benchmark_cagr": bh_cagr,
        "break_even_bps": break_even,
        "note": (
            "The strategy does not beat buy-and-hold even at zero cost."
            if break_even == 0.0
            else f"The strategy stops beating buy-and-hold on a Sharpe basis at roughly "
            f"{break_even:.1f} bps of round-trip cost."
            if break_even is not None
            else "The strategy beats buy-and-hold across the whole cost range tested."
        ),
    }


def walk_forward(
    prices: pd.DataFrame,
    strategy_name: str,
    config: BacktestConfig,
    grid: dict[str, list[float]] | None = None,
    test_bars: int | None = None,
    min_train_bars: int | None = None,
    allow_short: bool = False,
) -> dict[str, Any]:
    """Expanding-window walk-forward with one-year out-of-sample blocks.

    Each fold picks the best parameters on everything known so far, then trades
    the next year with them untouched. The stitched out-of-sample curve is the
    only performance figure here that was never optimised.
    """
    grid = grid or DEFAULT_GRIDS.get(strategy_name, {})
    if not grid:
        return {"available": False, "reason": f"no parameter grid defined for {strategy_name}"}

    n = len(prices)
    ppy = config.periods_per_year
    test_bars = int(test_bars or ppy)
    min_train_bars = int(min_train_bars or ppy * 2)

    if n < min_train_bars + test_bars:
        return {"available": False, "reason": "not enough history for a walk-forward"}

    combos = _combos(strategy_name, grid)
    folds: list[dict[str, Any]] = []
    oos_returns: list[pd.Series] = []

    start = min_train_bars
    while start + test_bars <= n:
        train = prices.iloc[:start]
        test = prices.iloc[start : start + test_bars]

        best_combo, best_sharpe, best_is_cagr = None, -np.inf, float("nan")
        for combo in combos:
            strat = build_strategy(strategy_name, combo, allow_short=allow_short)
            try:
                res = run_backtest(train, strat, config)
            except Exception:  # noqa: BLE001
                continue
            s = float(res.metrics["sharpe"])
            if np.isfinite(s) and s > best_sharpe:
                best_combo, best_sharpe, best_is_cagr = combo, s, float(res.metrics["cagr"])

        if best_combo is None:
            start += test_bars
            continue

        strat = build_strategy(strategy_name, best_combo, allow_short=allow_short)
        oos = run_backtest(test, strat, config)
        oos_returns.append(oos.net_return)

        folds.append(
            {
                "train_start": train.index[0].strftime("%Y-%m-%d"),
                "train_end": train.index[-1].strftime("%Y-%m-%d"),
                "test_start": test.index[0].strftime("%Y-%m-%d"),
                "test_end": test.index[-1].strftime("%Y-%m-%d"),
                "chosen_params": best_combo,
                "in_sample_sharpe": best_sharpe,
                "in_sample_cagr": best_is_cagr,
                "out_of_sample_sharpe": float(oos.metrics["sharpe"]),
                "out_of_sample_cagr": float(oos.metrics["cagr"]),
                "out_of_sample_return": float(oos.summary["net_total_return"]),
            }
        )
        start += test_bars

    if not folds:
        return {"available": False, "reason": "no complete walk-forward folds"}

    is_cagrs = np.array([f["in_sample_cagr"] for f in folds], dtype="float64")
    oos_cagrs = np.array([f["out_of_sample_cagr"] for f in folds], dtype="float64")
    is_mean = float(np.nanmean(is_cagrs))
    oos_mean = float(np.nanmean(oos_cagrs))
    efficiency = float(oos_mean / is_mean) if is_mean not in (0.0,) and np.isfinite(is_mean) else float("nan")

    stitched = pd.concat(oos_returns) if oos_returns else pd.Series(dtype="float64")
    stitched_equity = config.initial_capital * (1.0 + stitched.fillna(0.0)).cumprod()
    stitched_metrics = (
        risk.summarise(stitched, ppy, equity=stitched_equity) if len(stitched) else {}
    )

    return {
        "available": True,
        "folds": folds,
        "fold_count": len(folds),
        "mean_in_sample_cagr": is_mean,
        "mean_out_of_sample_cagr": oos_mean,
        "walk_forward_efficiency": efficiency,
        "verdict": (
            "strong" if np.isfinite(efficiency) and efficiency >= 0.5
            else "weak" if np.isfinite(efficiency) else "unclear"
        ),
        "stitched_out_of_sample": {
            "dates": [d.strftime("%Y-%m-%d") for d in stitched_equity.index],
            "equity": [float(v) for v in stitched_equity.to_numpy()],
            "metrics": stitched_metrics,
        },
        "note": (
            "Walk-forward efficiency is mean out-of-sample CAGR divided by mean "
            "in-sample CAGR. Above 0.5 is respectable; near or below zero means the "
            "in-sample result did not survive contact with unseen data."
        ),
    }


def robustness_score(
    prices: pd.DataFrame,
    strategy_name: str,
    params: dict[str, Any],
    config: BacktestConfig,
    grid: dict[str, list[float]] | None = None,
    allow_short: bool = False,
    sweep: dict[str, Any] | None = None,
    wf: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Combine DSR, plateau stability and walk-forward efficiency into 0-100.

    ``sweep`` and ``wf`` are the outputs of :func:`parameter_grid` and
    :func:`walk_forward`. Pass them in when the caller already has them: they
    are by far the most expensive part, and computing them twice doubles the
    latency of the robustness endpoint for no change in the answer.
    """
    strat = build_strategy(strategy_name, params, allow_short=allow_short)
    base = run_backtest(prices, strat, config)

    if sweep is None:
        sweep = parameter_grid(prices, strategy_name, config, grid, allow_short)
    if wf is None:
        wf = walk_forward(prices, strategy_name, config, grid, allow_short=allow_short)

    trial_sharpes = sweep.get("trial_sharpes", []) if sweep.get("available") else []
    dsr = risk.deflated_sharpe(base.net_return, trial_sharpes) if trial_sharpes else float("nan")
    psr = risk.probabilistic_sharpe(base.net_return)
    stability = sweep.get("plateau_stability", float("nan")) if sweep.get("available") else float("nan")
    efficiency = wf.get("walk_forward_efficiency", float("nan")) if wf.get("available") else float("nan")

    dsr_component = float(np.clip(dsr, 0.0, 1.0) * 100) if np.isfinite(dsr) else 0.0
    stability_component = float(np.clip(stability, 0.0, 1.0) * 100) if np.isfinite(stability) else 0.0
    wfe_component = float(np.clip(efficiency, 0.0, 1.0) * 100) if np.isfinite(efficiency) else 0.0

    score = 0.4 * dsr_component + 0.3 * stability_component + 0.3 * wfe_component

    components = {
        "Deflated Sharpe": dsr_component,
        "parameter stability": stability_component,
        "walk-forward efficiency": wfe_component,
    }
    weakest_name = min(components, key=components.get)
    weakest = components[weakest_name]

    if score >= 70:
        verdict, summary = "robust", "Survives cost, parameter perturbation and unseen data."
    elif score >= 40:
        verdict, summary = "mixed", "Holds up on some tests but not all. Treat with caution."
    else:
        verdict, summary = "fragile", "Looks like an artefact of parameter search rather than an edge."

    # A high average must not paper over one failing leg: a strategy that looks
    # significant in-sample but does not survive walk-forward is not robust.
    if verdict == "robust" and weakest < 25:
        verdict = "mixed"
        summary = (
            f"Scores well overall, but {weakest_name} is weak. A strong average across "
            "the other tests does not make up for one leg that fails."
        )

    return {
        "score": float(round(score, 1)),
        "verdict": verdict,
        "summary": summary,
        "components": {
            "deflated_sharpe": {
                "value": None if not np.isfinite(dsr) else float(dsr),
                "score": round(dsr_component, 1),
                "weight": 0.4,
                "label": "Deflated Sharpe",
                "explanation": (
                    f"Probability the Sharpe is genuine after charging for "
                    f"{len(trial_sharpes)} parameter sets tried."
                ),
            },
            "plateau_stability": {
                "value": None if not np.isfinite(stability) else float(stability),
                "score": round(stability_component, 1),
                "weight": 0.3,
                "label": "Parameter stability",
                "explanation": "How much of the best cell's Sharpe its neighbours keep.",
            },
            "walk_forward_efficiency": {
                "value": None if not np.isfinite(efficiency) else float(efficiency),
                "score": round(wfe_component, 1),
                "weight": 0.3,
                "label": "Walk-forward efficiency",
                "explanation": "Out-of-sample CAGR divided by in-sample CAGR.",
            },
        },
        "weakest_component": weakest_name,
        "probabilistic_sharpe": None if not np.isfinite(psr) else float(psr),
        "observed_sharpe": float(base.metrics["sharpe"]),
        "trials": len(trial_sharpes),
    }
