"""Backtest, robustness, regime and bias-audit endpoints."""

from __future__ import annotations

from datetime import date
from typing import Any

import pandas as pd
from fastapi import APIRouter, HTTPException, Query

from app.api.deps import window_prices
from app.config import ASSETS, DEFAULT_SYMBOLS, DISCLAIMER, blended_periods_per_year
from app.data.align import align_closes
from app.data.cache import load_many
from app.engine.bias_audit import audit, random_walk_control
from app.engine.montecarlo import monte_carlo_band
from app.engine.robustness import (
    DEFAULT_GRIDS,
    cost_sweep,
    parameter_grid,
    robustness_score,
    walk_forward,
)
from app.engine.simulator import BacktestConfig, run_backtest, run_portfolio
from app.engine.strategies import build_strategy
from app.quant.indicators import simple_returns
from app.quant.regimes import classify, hmm_regimes, ribbon, stats_by_regime
from app.schemas import BacktestRequest, ExplainRequest, PortfolioRequest, RobustnessRequest, sanitize

router = APIRouter(tags=["backtest"])


def _config(req: BacktestRequest | RobustnessRequest, periods_per_year: int) -> BacktestConfig:
    return BacktestConfig(
        initial_capital=req.initial_capital,
        fee_bps=req.fee_bps,
        slippage_bps=req.slippage_bps,
        sizing=getattr(req, "sizing", "fixed"),
        sizing_params=dict(getattr(req, "sizing_params", {}) or {}),
        periods_per_year=periods_per_year,
        risk_free=getattr(req, "risk_free", 0.0),
        execution_lag=1,
    )


@router.post("/backtest", summary="Run one strategy on one asset")
def post_backtest(req: BacktestRequest) -> dict[str, Any]:
    prices, meta = window_prices(req.symbol, req.start, req.end, min_bars=30)
    cfg = _config(req, meta["periods_per_year"])
    strategy = build_strategy(req.strategy, req.params, allow_short=req.allow_short)

    if len(prices) <= strategy.warmup + 5:
        raise HTTPException(
            status_code=422,
            detail=(
                f"{req.strategy} needs about {strategy.warmup} warm-up bars but the window "
                f"only has {len(prices)}."
            ),
        )

    result = run_backtest(prices, strategy, cfg)
    payload = result.to_dict()
    payload["meta"] = meta
    payload["disclaimer"] = DISCLAIMER

    # The panel the strategy actually traded on, aligned to series.dates. Charts
    # overlay this rather than re-deriving indicators in the browser.
    panel = strategy.indicators(prices).reindex(result.equity.index)
    payload["indicators"] = {
        column: [None if v != v else float(v) for v in panel[column].to_numpy()]
        for column in panel.columns
    }

    if req.include_monte_carlo:
        payload["monte_carlo"] = monte_carlo_band(
            result.net_return,
            n_paths=req.monte_carlo_paths,
            block_size=req.monte_carlo_block,
            initial_capital=req.initial_capital,
        )
    if req.include_bias_audit:
        payload["bias_audit"] = audit(prices, strategy, cfg, samples=req.bias_audit_samples)

    return sanitize(payload)


@router.post("/backtest/explain", summary="Explain the signal at one bar")
def post_explain(req: ExplainRequest) -> dict[str, Any]:
    prices, meta = window_prices(req.symbol, req.start, req.end, min_bars=30)
    strategy = build_strategy(req.strategy, req.params, allow_short=req.allow_short)
    cfg = _config(req, meta["periods_per_year"])

    ts = pd.Timestamp(req.at)
    if ts not in prices.index:
        raise HTTPException(status_code=422, detail=f"{req.at} is not a trading bar for {req.symbol}")

    try:
        explanation = strategy.explain(prices, ts)
    except KeyError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc

    result = run_backtest(prices, strategy, cfg)
    pos_loc = prices.index.get_loc(ts)

    explanation["execution"] = {
        "signal_decided_on": ts.strftime("%Y-%m-%d"),
        "position_effective_from": (
            prices.index[pos_loc + 1].strftime("%Y-%m-%d") if pos_loc + 1 < len(prices) else None
        ),
        "position_held_on_this_bar": float(result.position.loc[ts]),
        "target_weight_set_on_this_bar": float(result.target_weight.loc[ts]),
        "cost_charged_on_this_bar": float(result.cost.loc[ts]),
        "equity_on_this_bar": float(result.equity.loc[ts]),
        "note": (
            "The signal on this bar is decided from data up to and including this bar. "
            "It is traded at the next bar, so the position shown here was set by the "
            "previous bar's signal."
        ),
    }
    return sanitize(explanation)


@router.post("/robustness", summary="Parameter grid, cost sweep and walk-forward")
def post_robustness(req: RobustnessRequest) -> dict[str, Any]:
    prices, meta = window_prices(req.symbol, req.start, req.end, min_bars=100)
    cfg = _config(req, meta["periods_per_year"])
    grid = req.grid or DEFAULT_GRIDS.get(req.strategy)

    payload: dict[str, Any] = {
        "meta": meta,
        "strategy": req.strategy,
        "params": req.params,
        "grid_used": grid,
        "disclaimer": DISCLAIMER,
    }

    # The score needs the grid and the walk-forward whichever sections the caller
    # asked to see, and they dominate the run time, so compute each exactly once.
    sweep = parameter_grid(prices, req.strategy, cfg, grid, req.allow_short)
    wf = walk_forward(prices, req.strategy, cfg, grid, allow_short=req.allow_short)

    if req.include_grid:
        payload["parameter_grid"] = sweep
    if req.include_cost_sweep:
        levels = req.cost_levels or [0, 2, 5, 10, 15, 20, 25, 30, 40, 50]
        payload["cost_sweep"] = cost_sweep(
            prices, req.strategy, req.params, cfg, levels, req.allow_short
        )
    if req.include_walk_forward:
        payload["walk_forward"] = wf

    payload["score"] = robustness_score(
        prices, req.strategy, req.params, cfg, grid, req.allow_short, sweep=sweep, wf=wf
    )
    return sanitize(payload)


@router.post("/bias-audit", summary="Causal test and lag test for one strategy")
def post_bias_audit(req: BacktestRequest) -> dict[str, Any]:
    prices, meta = window_prices(req.symbol, req.start, req.end, min_bars=30)
    cfg = _config(req, meta["periods_per_year"])
    strategy = build_strategy(req.strategy, req.params, allow_short=req.allow_short)

    report = audit(prices, strategy, cfg, samples=req.bias_audit_samples)
    report["random_walk_control"] = random_walk_control(
        strategy, n_walks=20, n_bars=600, config=cfg,
        periods_per_year=meta["periods_per_year"],
    )
    report["meta"] = meta
    report["disclaimer"] = DISCLAIMER
    return sanitize(report)


@router.get("/regimes", summary="Trend and volatility regimes with per-regime stats")
def get_regimes(
    symbol: str = Query(default="NVDA"),
    start: date | None = None,
    end: date | None = None,
    trend_window: int = Query(default=200, ge=20, le=400),
    vol_window: int = Query(default=30, ge=5, le=250),
    strategy: str | None = Query(default=None),
    include_hmm: bool = Query(default=True),
    hmm_states: int = Query(default=3, ge=2, le=5),
) -> dict[str, Any]:
    prices, meta = window_prices(symbol, start, end, min_bars=trend_window + 20)
    ppy = meta["periods_per_year"]
    panel = classify(prices, ppy, trend_window, vol_window)

    benchmark_returns = simple_returns(prices["close"]).fillna(0.0)
    strategy_returns = None
    strategy_desc = None
    if strategy:
        strat = build_strategy(strategy, {}, allow_short=False)
        result = run_backtest(prices, strat, BacktestConfig(periods_per_year=ppy))
        strategy_returns = result.net_return
        strategy_desc = strat.descriptor

    payload: dict[str, Any] = {
        "meta": meta,
        "strategy": strategy_desc,
        "segments": ribbon(panel),
        "series": {
            "dates": [d.strftime("%Y-%m-%d") for d in panel.index],
            "close": [float(v) for v in panel["close"].to_numpy()],
            "trend_ma": [None if v != v else float(v) for v in panel["trend_ma"].to_numpy()],
            "volatility": [None if v != v else float(v) for v in panel["volatility"].to_numpy()],
            "vol_median": [None if v != v else float(v) for v in panel["vol_median"].to_numpy()],
            "regime": [v if isinstance(v, str) else None for v in panel["regime"]],
        },
        "stats": stats_by_regime(panel, strategy_returns, benchmark_returns, ppy),
        "definition": {
            "trend": f"Bull when close is above its {trend_window}-bar SMA.",
            "volatility": (
                f"High when {vol_window}-bar annualised volatility exceeds its expanding "
                "median. The median expands rather than using the full sample, because "
                "the full-sample median would not have been knowable at the time."
            ),
        },
        "disclaimer": DISCLAIMER,
    }
    if include_hmm:
        payload["hmm"] = hmm_regimes(prices, hmm_states, ppy)
    return sanitize(payload)


@router.post("/portfolio", summary="Multi-asset portfolio with drifting weights")
def post_portfolio(req: PortfolioRequest) -> dict[str, Any]:
    symbols = list(req.weights)
    frames = load_many(symbols)
    closes = align_closes(frames)
    if req.start is not None:
        closes = closes[closes.index >= str(req.start)]
    if req.end is not None:
        closes = closes[closes.index <= str(req.end)]
    if len(closes) < 30:
        raise HTTPException(status_code=422, detail="Not enough common bars for a portfolio")

    ppy = blended_periods_per_year(symbols)
    out = run_portfolio(
        closes,
        req.weights,
        rebalance=req.rebalance,
        initial_capital=req.initial_capital,
        fee_bps=req.fee_bps,
        slippage_bps=req.slippage_bps,
        periods_per_year=ppy,
    )
    out["periods_per_year"] = ppy
    out["note"] = (
        "Portfolio returns are the weighted sum of SIMPLE asset returns using the "
        "previous bar's weights. Between rebalances the weights drift with prices, so "
        "'no rebalancing' is genuine buy-and-hold rather than a frozen weight vector."
    )
    out["disclaimer"] = DISCLAIMER
    return sanitize(out)
