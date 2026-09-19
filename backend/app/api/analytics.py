"""Metrics and correlation endpoints."""

from __future__ import annotations

from datetime import date
from typing import Any

from fastapi import APIRouter, HTTPException, Query

from app.api.deps import window_prices
from app.config import ASSETS, DEFAULT_SYMBOLS, DISCLAIMER, blended_periods_per_year
from app.data.align import align_closes, coverage
from app.data.cache import load_many
from app.quant import risk
from app.quant.correlation import correlation_breaks, correlation_matrix, covariance_matrix
from app.quant.indicators import (
    drawdown_series,
    ema,
    rolling_volatility,
    simple_returns,
    sma,
)
from app.schemas import sanitize

router = APIRouter(tags=["analytics"])


@router.get("/metrics", summary="Risk and performance metrics per asset")
def get_metrics(
    symbols: list[str] = Query(default=list(DEFAULT_SYMBOLS)),
    start: date | None = None,
    end: date | None = None,
    benchmark: str | None = Query(default=None, description="Symbol to measure beta against"),
    risk_free: float = Query(default=0.0, ge=-0.1, le=0.5),
) -> dict[str, Any]:
    unknown = [s for s in symbols if s not in ASSETS]
    if unknown:
        raise HTTPException(status_code=422, detail=f"Unknown symbols: {', '.join(unknown)}")

    bench_returns = None
    if benchmark:
        if benchmark not in ASSETS:
            raise HTTPException(status_code=422, detail=f"Unknown benchmark {benchmark!r}")
        bench_prices, _ = window_prices(benchmark, start, end)
        bench_returns = simple_returns(bench_prices["close"])

    rows = []
    for symbol in symbols:
        prices, meta = window_prices(symbol, start, end)
        returns = simple_returns(prices["close"])
        summary = risk.summarise(
            returns,
            meta["periods_per_year"],
            risk_free=risk_free,
            benchmark_returns=bench_returns if benchmark and benchmark != symbol else None,
            equity=prices["close"],
        )
        rows.append({"meta": meta, "metrics": summary})

    return sanitize(
        {
            "benchmark": benchmark,
            "assets": rows,
            "note": (
                "Each asset is annualised on its own calendar: Bitcoin uses N=365, "
                "Gold and NVDA use N=252. Using 252 for Bitcoin would understate its "
                "volatility and Sharpe by about 17%."
            ),
            "disclaimer": DISCLAIMER,
        }
    )


@router.get("/asset/{symbol:path}/analytics", summary="Indicator panel for one asset")
def get_asset_analytics(
    symbol: str,
    start: date | None = None,
    end: date | None = None,
    sma_windows: list[int] = Query(default=[50, 200]),
    ema_windows: list[int] = Query(default=[20]),
    vol_window: int = Query(default=30, ge=5, le=250),
    histogram_bins: int = Query(default=40, ge=5, le=120),
) -> dict[str, Any]:
    prices, meta = window_prices(symbol, start, end, min_bars=10)
    close = prices["close"]
    returns = simple_returns(close)
    ppy = meta["periods_per_year"]

    overlays = {f"sma_{w}": sma(close, w) for w in sma_windows}
    overlays.update({f"ema_{w}": ema(close, w) for w in ema_windows})

    import numpy as np

    clean = returns.dropna()
    counts, edges = np.histogram(clean.to_numpy(), bins=histogram_bins)

    return sanitize(
        {
            "meta": meta,
            "dates": [d.strftime("%Y-%m-%d") for d in close.index],
            "close": [float(v) for v in close.to_numpy()],
            "overlays": {
                name: [None if v != v else float(v) for v in series.to_numpy()]
                for name, series in overlays.items()
            },
            "returns": [None if v != v else float(v) for v in returns.to_numpy()],
            "rolling_volatility": [
                None if v != v else float(v)
                for v in rolling_volatility(returns, vol_window, ppy).to_numpy()
            ],
            "drawdown": [float(v) for v in drawdown_series(close).to_numpy()],
            "returns_histogram": {
                "counts": [int(c) for c in counts],
                "edges": [float(e) for e in edges],
            },
            "metrics": risk.summarise(returns, ppy, equity=close),
            "disclaimer": DISCLAIMER,
        }
    )


@router.get("/correlation", summary="Correlation matrix, rolling windows and breaks")
def get_correlation(
    symbols: list[str] = Query(default=list(DEFAULT_SYMBOLS)),
    window: int = Query(default=60, ge=10, le=500),
    baseline: int = Query(default=252, ge=30, le=1000),
    threshold: float = Query(default=2.0, ge=0.5, le=6.0),
    start: date | None = None,
    end: date | None = None,
) -> dict[str, Any]:
    unknown = [s for s in symbols if s not in ASSETS]
    if unknown:
        raise HTTPException(status_code=422, detail=f"Unknown symbols: {', '.join(unknown)}")
    if len(symbols) < 2:
        raise HTTPException(status_code=422, detail="Correlation needs at least two symbols")

    frames = load_many(symbols)
    closes = align_closes(frames)
    if start is not None:
        closes = closes[closes.index >= str(start)]
    if end is not None:
        closes = closes[closes.index <= str(end)]
    if len(closes) < window + 5:
        raise HTTPException(
            status_code=422,
            detail=f"Only {len(closes)} common bars; need more than {window} for this window.",
        )

    ppy = blended_periods_per_year(symbols)
    return sanitize(
        {
            "matrix": correlation_matrix(closes),
            "covariance": covariance_matrix(closes, ppy),
            "rolling": correlation_breaks(closes, window, baseline, threshold),
            "coverage": coverage({s: frames[s] for s in symbols}),
            "periods_per_year": ppy,
            "note": (
                "Correlations use simple returns on the inner join of trading calendars. "
                "A break is flagged when the rolling correlation sits more than "
                f"{threshold} standard deviations from its trailing {baseline}-bar mean, "
                "where that baseline is shifted one bar so it contains only prior history."
            ),
            "disclaimer": DISCLAIMER,
        }
    )

@router.get("/portfolio", summary="Calculate optimal portfolio weights")
def get_portfolio(
    symbols: list[str] = Query(default=list(DEFAULT_SYMBOLS)),
    method: str = Query(default="Equal Weight"),
    risk_free: float = Query(default=0.04),
    start: date | None = None,
    end: date | None = None,
) -> dict[str, Any]:
    from app.quant.portfolio import calculate_weights, portfolio_statistics
    
    unknown = [s for s in symbols if s not in ASSETS]
    if unknown:
        raise HTTPException(status_code=422, detail=f"Unknown symbols: {', '.join(unknown)}")
    if len(symbols) < 2:
        raise HTTPException(status_code=422, detail="Portfolio needs at least two symbols")

    frames = load_many(symbols)
    closes = align_closes(frames)
    if start is not None:
        closes = closes[closes.index >= str(start)]
    if end is not None:
        closes = closes[closes.index <= str(end)]
        
    returns = closes.pct_change().dropna()
    if returns.empty:
        raise HTTPException(status_code=422, detail="No common returns available.")

    weights = calculate_weights(returns, method, risk_free)
    expected_return, vol, sharpe = portfolio_statistics(weights.to_numpy(), returns, risk_free)
    
    portfolio_returns = returns[weights.index] @ weights.to_numpy()
    wealth = (1 + portfolio_returns).cumprod() - 1

    return sanitize(
        {
            "method": method,
            "weights": weights.to_dict(),
            "expected_return": expected_return,
            "volatility": vol,
            "sharpe": sharpe,
            "historical_growth": {
                "dates": [d.strftime("%Y-%m-%d") for d in wealth.index],
                "returns": [float(v) for v in wealth.to_numpy()],
            },
            "disclaimer": DISCLAIMER,
        }
    )

@router.get("/montecarlo", summary="Monte Carlo scenario engine")
def get_montecarlo(
    symbol: str,
    days: int = Query(default=252, ge=10, le=1000),
    simulations: int = Query(default=1000, ge=100, le=5000),
    initial_capital: float = Query(default=10000.0, ge=100),
    seed: int = Query(default=42),
    start: date | None = None,
    end: date | None = None,
) -> dict[str, Any]:
    from app.engine.montecarlo import monte_carlo_band

    prices, _ = window_prices(symbol, start, end)
    returns = simple_returns(prices["close"]).dropna()

    band = monte_carlo_band(
        returns,
        n_paths=simulations,
        block_size=days,
        initial_capital=initial_capital,
        seed=seed,
    )
    band["disclaimer"] = DISCLAIMER
    return sanitize(band)

@router.post("/report", summary="AI Research Report")
def post_report(payload: dict[str, Any]) -> dict[str, Any]:
    from app.engine.reports import create_report, optional_ai_rewrite
    
    asset = payload.get("asset", "Unknown")
    metrics_asset = payload.get("metrics_asset", {})
    metrics_strategy = payload.get("metrics_strategy", {})
    strategy = payload.get("strategy", "Unknown")
    regimes = payload.get("regimes", [])

    report = create_report(asset, metrics_asset, metrics_strategy, strategy, regimes)
    ai_report = optional_ai_rewrite(report)
    
    return sanitize({
        "deterministic_report": report,
        "ai_report": ai_report,
        "final_report": ai_report if ai_report else report,
        "disclaimer": DISCLAIMER,
    })
