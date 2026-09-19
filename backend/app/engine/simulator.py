"""Backtest simulator.

Timing convention, stated once and enforced everywhere:

    signal_t      decided at bar t from data up to and including bar t
    position_t    = signal_(t - lag), lag defaults to 1
    gross_t       = position_t * r_t          (r_t = P_t / P_(t-1) - 1)
    turnover_t    = |position_t - position_(t-1)|
    cost_t        = turnover_t * (fee + slippage) / 10_000
    net_t         = gross_t - cost_t
    equity_t      = equity_(t-1) * (1 + net_t)

Because position_t earns r_t, the trade was executed at the close of bar t-1.
The trade ledger uses exactly that price, which is why a short from 100 to 50
books +50%, not +100%.
"""

from __future__ import annotations

from dataclasses import asdict, dataclass, field
from typing import Any

import numpy as np
import pandas as pd

from app.engine.benchmark import buy_and_hold
from app.engine.costs import CostModel, turnover_from_positions
from app.engine.sizing import apply_sizing
from app.engine.strategies.base import Strategy
from app.quant import risk
from app.quant.indicators import drawdown_series, simple_returns


@dataclass
class BacktestConfig:
    initial_capital: float = 10_000.0
    fee_bps: float = 5.0
    slippage_bps: float = 2.0
    sizing: str = "fixed"
    sizing_params: dict[str, Any] = field(default_factory=dict)
    periods_per_year: int = 252
    risk_free: float = 0.0
    #: Bars between deciding a signal and holding the position. 1 = next bar.
    execution_lag: int = 1

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class Trade:
    entry_date: str
    exit_date: str | None
    direction: str
    entry_price: float
    exit_price: float
    weight: float
    return_pct: float
    net_pnl: float
    bars_held: int
    open_at_end: bool

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class BacktestResult:
    strategy: dict[str, Any]
    config: dict[str, Any]
    index: pd.DatetimeIndex
    close: pd.Series
    signal: pd.Series
    target_weight: pd.Series
    position: pd.Series
    gross_return: pd.Series
    cost: pd.Series
    net_return: pd.Series
    equity: pd.Series
    benchmark_equity: pd.Series
    trades: list[Trade]
    metrics: dict[str, Any]
    benchmark_metrics: dict[str, Any]
    summary: dict[str, Any]

    def to_dict(self, include_series: bool = True) -> dict[str, Any]:
        out: dict[str, Any] = {
            "strategy": self.strategy,
            "config": self.config,
            "metrics": self.metrics,
            "benchmark_metrics": self.benchmark_metrics,
            "summary": self.summary,
            "trades": [t.to_dict() for t in self.trades],
        }
        if include_series:
            out["series"] = {
                "dates": [d.strftime("%Y-%m-%d") for d in self.index],
                "close": _nums(self.close),
                "signal": _nums(self.signal),
                "position": _nums(self.position),
                "equity": _nums(self.equity),
                "benchmark_equity": _nums(self.benchmark_equity),
                "drawdown": _nums(drawdown_series(self.equity)),
                "net_return": _nums(self.net_return),
                "cost": _nums(self.cost),
            }
        return out


def _nums(series: pd.Series) -> list[float | None]:
    return [None if pd.isna(v) else float(v) for v in series.to_numpy()]


def build_trades(
    position: pd.Series,
    close: pd.Series,
    equity: pd.Series,
) -> list[Trade]:
    """Walk the position series and book one trade per continuous holding.

    A trade runs from the first bar the position is non-zero with a given sign
    to the last bar before it changes sign or returns to flat. Entry price is
    the close of the bar *before* the position became effective, because that
    is the bar at whose close the order filled.
    """
    trades: list[Trade] = []
    pos = position.to_numpy()
    px = close.to_numpy()
    eq = equity.to_numpy()
    idx = position.index

    n = len(pos)
    i = 0
    while i < n:
        if pos[i] == 0.0 or np.isnan(pos[i]):
            i += 1
            continue
        sign = np.sign(pos[i])
        start = i
        weights = []
        while i < n and pos[i] != 0.0 and np.sign(pos[i]) == sign:
            weights.append(abs(pos[i]))
            i += 1
        end = i - 1

        if start == 0:
            # Cannot happen with execution_lag >= 1, but stay safe.
            continue

        entry_price = float(px[start - 1])
        exit_price = float(px[end])
        open_at_end = end == n - 1

        if sign > 0:
            ret = (exit_price - entry_price) / entry_price
            direction = "long"
        else:
            # The fix for the doubled short return: short 100 -> cover 50 is +50%.
            ret = (entry_price - exit_price) / entry_price
            direction = "short"

        net_pnl = float(eq[end] - eq[start - 1])

        trades.append(
            Trade(
                entry_date=idx[start - 1].strftime("%Y-%m-%d"),
                exit_date=idx[end].strftime("%Y-%m-%d"),
                direction=direction,
                entry_price=entry_price,
                exit_price=exit_price,
                weight=float(np.mean(weights)) if weights else 0.0,
                return_pct=float(ret),
                net_pnl=net_pnl,
                bars_held=int(end - start + 1),
                open_at_end=bool(open_at_end),
            )
        )
    return trades


def run_backtest(
    prices: pd.DataFrame,
    strategy: Strategy,
    config: BacktestConfig | None = None,
) -> BacktestResult:
    """Simulate one strategy on one asset."""
    cfg = config or BacktestConfig()
    if prices.empty:
        raise ValueError("No price data supplied to the simulator.")

    close = prices["close"].astype("float64")
    returns = simple_returns(close)

    signal = strategy.signal(prices).reindex(close.index).fillna(0.0)
    target = apply_sizing(
        signal,
        returns,
        method=cfg.sizing,
        params=cfg.sizing_params,
        periods_per_year=cfg.periods_per_year,
    )

    lag = max(1, int(cfg.execution_lag))
    position = target.shift(lag).fillna(0.0)

    costs = CostModel(cfg.fee_bps, cfg.slippage_bps)
    turnover = turnover_from_positions(position)
    cost = turnover * costs.rate

    gross = (position * returns).fillna(0.0)
    net = gross - cost
    equity = cfg.initial_capital * (1.0 + net).cumprod()

    benchmark_equity = buy_and_hold(close, cfg.initial_capital)
    benchmark_returns = simple_returns(benchmark_equity)

    trades = build_trades(position, close, equity)

    metrics = risk.summarise(
        net,
        cfg.periods_per_year,
        risk_free=cfg.risk_free,
        benchmark_returns=benchmark_returns,
        equity=equity,
    )
    benchmark_metrics = risk.summarise(
        benchmark_returns,
        cfg.periods_per_year,
        risk_free=cfg.risk_free,
        equity=benchmark_equity,
    )

    gross_equity = cfg.initial_capital * (1.0 + gross).cumprod()
    wins = [t for t in trades if t.return_pct > 0]
    exposure = float((position != 0).mean())

    summary = {
        "trades": len(trades),
        "winning_trades": len(wins),
        "trade_win_rate": (len(wins) / len(trades)) if trades else float("nan"),
        "total_turnover": float(turnover.sum()),
        "total_cost_currency": float((cost * equity.shift(1).fillna(cfg.initial_capital)).sum()),
        "total_cost_fraction": float(cost.sum()),
        "gross_total_return": float(gross_equity.iloc[-1] / cfg.initial_capital - 1.0),
        "net_total_return": float(equity.iloc[-1] / cfg.initial_capital - 1.0),
        "cost_drag": float(
            gross_equity.iloc[-1] / cfg.initial_capital - equity.iloc[-1] / cfg.initial_capital
        ),
        "time_in_market": exposure,
        "avg_holding_bars": float(np.mean([t.bars_held for t in trades])) if trades else 0.0,
        "excess_cagr_vs_benchmark": metrics["cagr"] - benchmark_metrics["cagr"],
        "excess_sharpe_vs_benchmark": metrics["sharpe"] - benchmark_metrics["sharpe"],
    }

    return BacktestResult(
        strategy=strategy.descriptor,
        config=cfg.to_dict(),
        index=close.index,
        close=close,
        signal=signal,
        target_weight=target,
        position=position,
        gross_return=gross,
        cost=cost,
        net_return=net,
        equity=equity,
        benchmark_equity=benchmark_equity,
        trades=trades,
        metrics=metrics,
        benchmark_metrics=benchmark_metrics,
        summary=summary,
    )


# ---------------------------------------------------------------------------
# Multi-asset portfolio
# ---------------------------------------------------------------------------

REBALANCE_RULES = ("none", "monthly", "quarterly", "annual")


def _rebalance_mask(index: pd.DatetimeIndex, rule: str) -> np.ndarray:
    mask = np.zeros(len(index), dtype=bool)
    if rule == "none":
        return mask
    series = pd.Series(index, index=index)
    if rule == "monthly":
        key = series.dt.to_period("M")
    elif rule == "quarterly":
        key = series.dt.to_period("Q")
    elif rule == "annual":
        key = series.dt.to_period("Y")
    else:
        raise ValueError(f"Unknown rebalance rule {rule!r}")
    first_of_period = ~key.duplicated()
    mask = np.array(first_of_period.to_numpy(), dtype=bool, copy=True)
    mask[0] = False  # bar 0 is the initial allocation, not a rebalance
    return mask


def run_portfolio(
    closes: pd.DataFrame,
    weights: dict[str, float],
    *,
    rebalance: str = "none",
    initial_capital: float = 10_000.0,
    fee_bps: float = 5.0,
    slippage_bps: float = 2.0,
    periods_per_year: int = 252,
    risk_free: float = 0.0,
) -> dict[str, Any]:
    """Multi-asset portfolio with correct compounding and weight drift.

    Two fixes over the surveyed implementation:

    * ``R_t = sum_i w_(i,t-1) * r_(i,t)`` on *simple* returns. Summing weighted
      log returns across assets is not a portfolio return.
    * Between rebalances weights drift with prices
      (``w_(i,t) = w_(i,t-1)(1 + r_(i,t)) / (1 + R_t)``), so "no rebalancing"
      really is buy-and-hold rather than a frozen weight vector.
    """
    if closes.empty:
        raise ValueError("No aligned price data for the portfolio.")

    symbols = [s for s in closes.columns if s in weights]
    if not symbols:
        raise ValueError("None of the requested symbols are present in the price frame.")

    target = np.array([float(weights[s]) for s in symbols], dtype="float64")
    total = target.sum()
    if total <= 0:
        raise ValueError("Portfolio weights must sum to a positive number.")
    target = target / total

    px = closes[symbols].astype("float64")
    rets = px.pct_change().fillna(0.0).to_numpy()
    n_bars, n_assets = rets.shape

    rate = (float(fee_bps) + float(slippage_bps)) / 10_000.0
    rebal = _rebalance_mask(px.index, rebalance)

    weight_path = np.zeros((n_bars, n_assets), dtype="float64")
    port_returns = np.zeros(n_bars, dtype="float64")
    costs = np.zeros(n_bars, dtype="float64")

    w = target.copy()
    weight_path[0] = w
    costs[0] = float(np.abs(target).sum()) * rate  # cost of establishing the book
    port_returns[0] = -costs[0]

    for t in range(1, n_bars):
        r_t = rets[t]
        # Previous bar's weights earn this bar's returns.
        R_t = float(np.dot(w, r_t))
        # Weights drift with realised prices.
        drifted = w * (1.0 + r_t) / (1.0 + R_t) if (1.0 + R_t) != 0 else w.copy()

        cost_t = 0.0
        if rebal[t]:
            cost_t = float(np.abs(target - drifted).sum()) * rate
            drifted = target.copy()

        w = drifted
        weight_path[t] = w
        costs[t] = cost_t
        port_returns[t] = R_t - cost_t

    index = px.index
    port_series = pd.Series(port_returns, index=index)
    equity = initial_capital * (1.0 + port_series).cumprod()

    # True buy-and-hold reference: each sleeve compounds on its own.
    bh_equity = (px / px.iloc[0] * target).sum(axis=1) * initial_capital
    bh_returns = bh_equity.pct_change().fillna(0.0)

    metrics = risk.summarise(
        port_series, periods_per_year, risk_free=risk_free, equity=equity
    )
    bh_metrics = risk.summarise(
        bh_returns, periods_per_year, risk_free=risk_free, equity=bh_equity
    )

    return {
        "symbols": symbols,
        "target_weights": {s: float(w) for s, w in zip(symbols, target)},
        "rebalance": rebalance,
        "metrics": metrics,
        "buy_and_hold_metrics": bh_metrics,
        "total_cost_fraction": float(costs.sum()),
        "series": {
            "dates": [d.strftime("%Y-%m-%d") for d in index],
            "equity": [float(v) for v in equity.to_numpy()],
            "buy_and_hold_equity": [float(v) for v in bh_equity.to_numpy()],
            "weights": {
                sym: [float(v) for v in weight_path[:, i]] for i, sym in enumerate(symbols)
            },
        },
    }
