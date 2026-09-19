"""Simulator tests: execution timing, costs, trade ledger, portfolio math.

Each test targets one of the defects found in the surveyed repositories.
"""

from __future__ import annotations

import numpy as np
import pandas as pd
import pytest

from app.engine.costs import CostModel, turnover_from_positions
from app.engine.simulator import BacktestConfig, build_trades, run_backtest, run_portfolio
from app.engine.strategies import build_strategy
from app.engine.strategies.base import Strategy, register
from app.quant.indicators import simple_returns
from tests.conftest import make_frame, random_walk


class AlwaysLong(Strategy):
    name = "_always_long"
    label = "Always long (test)"
    param_spec = {}

    def indicators(self, prices):
        return pd.DataFrame(index=prices.index)

    def signal(self, prices):
        return pd.Series(1.0, index=prices.index)

    def rule_text(self, row, signal):
        return "always long"


class AlwaysShort(AlwaysLong):
    name = "_always_short"

    def signal(self, prices):
        return pd.Series(-1.0, index=prices.index)


# --------------------------------------------------------------------------
# Rule 1: signals use data up to bar t, positions take effect at bar t+1
# --------------------------------------------------------------------------

def test_position_is_the_lagged_target_weight():
    prices = random_walk(200, seed=1)
    strat = build_strategy("sma_cross", {"short_window": 10, "long_window": 30})
    result = run_backtest(prices, strat, BacktestConfig(fee_bps=0, slippage_bps=0))
    pd.testing.assert_series_equal(
        result.position, result.target_weight.shift(1).fillna(0.0), check_names=False
    )
    assert result.position.iloc[0] == 0.0


def test_no_weight_is_ever_applied_to_its_own_bar_return():
    """The multi-asset look-ahead bug: today's signal on today's return."""
    prices = random_walk(300, seed=2)
    strat = build_strategy("sma_cross", {"short_window": 5, "long_window": 20})
    cfg = BacktestConfig(fee_bps=0, slippage_bps=0)
    result = run_backtest(prices, strat, cfg)

    returns = simple_returns(prices["close"]).fillna(0.0)
    honest = (result.position * returns).fillna(0.0)
    leaky = (result.target_weight * returns).fillna(0.0)

    pd.testing.assert_series_equal(result.gross_return, honest, check_names=False)
    # The two differ, and the leaky version is the flattering one.
    assert not np.allclose(honest.to_numpy(), leaky.to_numpy())


def test_equity_matches_hand_computation():
    """100 -> 110 -> 99, always long, 10bp round cost. Equity must be 9891.00."""
    prices = make_frame([100.0, 110.0, 99.0])
    cfg = BacktestConfig(initial_capital=10_000.0, fee_bps=6.0, slippage_bps=4.0)
    result = run_backtest(prices, AlwaysLong(), cfg)

    assert list(result.position) == [0.0, 1.0, 1.0]
    assert result.cost.tolist() == pytest.approx([0.0, 0.001, 0.0])
    assert result.net_return.tolist() == pytest.approx([0.0, 0.099, -0.10])
    assert result.equity.iloc[-1] == pytest.approx(9891.0)


# --------------------------------------------------------------------------
# Rule 3: cost = |delta position| x notional x (fee + slippage) / 10000
# --------------------------------------------------------------------------

def test_cost_model_arithmetic():
    model = CostModel(fee_bps=5.0, slippage_bps=2.0)
    assert model.total_bps == 7.0
    # flipping from +1 to -1 is 2.0 of turnover
    assert model.charge(2.0, notional=10_000.0) == pytest.approx(14.0)


def test_turnover_counts_the_initial_entry():
    pos = pd.Series([0.5, 0.5, -0.5, 0.0])
    assert turnover_from_positions(pos).tolist() == pytest.approx([0.5, 0.0, 1.0, 0.5])


def test_costs_are_charged_on_the_execution_bar_not_the_signal_bar():
    prices = make_frame([100.0, 101.0, 102.0, 103.0])
    result = run_backtest(prices, AlwaysLong(), BacktestConfig(fee_bps=10.0, slippage_bps=0.0))
    # target weight turns on at bar 0; position (and therefore the charge)
    # lands on bar 1, the first bar that actually earns a return.
    assert result.target_weight.iloc[0] == 1.0
    assert result.cost.iloc[0] == 0.0
    assert result.cost.iloc[1] == pytest.approx(0.001)


def test_higher_costs_can_only_reduce_equity():
    prices = random_walk(400, seed=3)
    strat = build_strategy("sma_cross", {"short_window": 5, "long_window": 20})
    cheap = run_backtest(prices, strat, BacktestConfig(fee_bps=0, slippage_bps=0))
    dear = run_backtest(prices, strat, BacktestConfig(fee_bps=25, slippage_bps=25))
    assert dear.equity.iloc[-1] < cheap.equity.iloc[-1]
    assert dear.summary["cost_drag"] > cheap.summary["cost_drag"]


# --------------------------------------------------------------------------
# Rule 5: short trade return = (entry - exit) / entry
# --------------------------------------------------------------------------

def test_short_from_100_to_50_books_fifty_percent_not_one_hundred():
    """The doubled-short-return bug in the surveyed trade table."""
    prices = make_frame([100.0, 100.0, 50.0])
    result = run_backtest(
        prices, AlwaysShort(allow_short=True), BacktestConfig(fee_bps=0, slippage_bps=0)
    )
    assert len(result.trades) == 1
    trade = result.trades[0]
    assert trade.direction == "short"
    assert trade.entry_price == pytest.approx(100.0)
    assert trade.exit_price == pytest.approx(50.0)
    assert trade.return_pct == pytest.approx(0.50)
    assert trade.return_pct != pytest.approx(1.00)


def test_long_trade_return_uses_the_execution_price():
    prices = make_frame([100.0, 120.0, 150.0])
    result = run_backtest(prices, AlwaysLong(), BacktestConfig(fee_bps=0, slippage_bps=0))
    trade = result.trades[0]
    assert trade.entry_price == pytest.approx(100.0)  # close of the bar before entry
    assert trade.exit_price == pytest.approx(150.0)
    assert trade.return_pct == pytest.approx(0.50)


def test_trade_return_agrees_with_the_equity_curve():
    """The ledger and the equity curve must tell the same story."""
    prices = make_frame([100.0, 90.0, 80.0, 120.0])
    result = run_backtest(
        prices, AlwaysShort(allow_short=True), BacktestConfig(fee_bps=0, slippage_bps=0)
    )
    trade = result.trades[0]
    equity_move = result.equity.iloc[-1] / result.equity.iloc[0] - 1.0
    # A -100% weighted short compounds bar by bar, so it cannot equal the simple
    # price-based figure exactly, but the sign and rough size must agree.
    assert np.sign(trade.net_pnl) == np.sign(equity_move)
    assert trade.net_pnl == pytest.approx(
        float(result.equity.iloc[-1] - result.equity.iloc[0])
    )


def test_open_trade_at_the_end_is_flagged():
    prices = make_frame([100.0, 110.0, 120.0])
    result = run_backtest(prices, AlwaysLong(), BacktestConfig(fee_bps=0, slippage_bps=0))
    assert result.trades[-1].open_at_end is True


def test_build_trades_splits_on_direction_flip():
    idx = pd.bdate_range("2020-01-01", periods=6)
    position = pd.Series([0.0, 1.0, 1.0, -1.0, -1.0, 0.0], index=idx)
    close = pd.Series([10.0, 11.0, 12.0, 13.0, 9.0, 8.0], index=idx)
    equity = pd.Series([100.0, 110.0, 120.0, 130.0, 90.0, 80.0], index=idx)
    trades = build_trades(position, close, equity)
    assert [t.direction for t in trades] == ["long", "short"]
    assert trades[0].entry_price == pytest.approx(10.0)
    assert trades[0].exit_price == pytest.approx(12.0)
    assert trades[1].entry_price == pytest.approx(12.0)
    assert trades[1].exit_price == pytest.approx(9.0)
    assert trades[1].return_pct == pytest.approx((12.0 - 9.0) / 12.0)


# --------------------------------------------------------------------------
# Rule 4: portfolio return = sum of PREVIOUS weights x SIMPLE returns
# --------------------------------------------------------------------------

def test_portfolio_return_uses_simple_returns_and_drifting_weights():
    """50/50, +10%/-10% then -10%/+10%. Correct answer: 0.9900 of capital.

    Summing weighted *log* returns across assets gets this wrong; so does
    freezing the weights instead of letting them drift.
    """
    idx = pd.bdate_range("2020-01-01", periods=3)
    closes = pd.DataFrame(
        {
            "A": [100.0, 110.0, 99.0],
            "B": [100.0, 90.0, 99.0],
        },
        index=idx,
    )
    out = run_portfolio(
        closes, {"A": 0.5, "B": 0.5}, rebalance="none",
        initial_capital=1.0, fee_bps=0, slippage_bps=0,
    )
    assert out["series"]["equity"][-1] == pytest.approx(0.99, abs=1e-12)


def test_summing_weighted_log_returns_gives_a_different_and_wrong_answer():
    """A: +50% twice, B: -30% twice, 50/50, no rebalancing.

    Correct buy-and-hold: 0.5*2.25 + 0.5*0.49 = 1.3700 of capital.
    Summing weighted log returns collapses to exp(ln(1.5) + ln(0.7)) = 1.0500,
    understating the result by 23 percentage points.
    """
    idx = pd.bdate_range("2020-01-01", periods=3)
    closes = pd.DataFrame(
        {"A": [100.0, 150.0, 225.0], "B": [100.0, 70.0, 49.0]}, index=idx
    )
    out = run_portfolio(
        closes, {"A": 0.5, "B": 0.5}, rebalance="none",
        initial_capital=1.0, fee_bps=0, slippage_bps=0,
    )
    assert out["series"]["equity"][-1] == pytest.approx(1.37)

    log_sum = float(
        np.exp((0.5 * np.log(closes / closes.shift(1))).sum(axis=1).fillna(0.0).cumsum()).iloc[-1]
    )
    assert log_sum == pytest.approx(1.05)
    assert abs(log_sum - 1.37) > 0.3


def test_weights_drift_between_rebalances():
    idx = pd.bdate_range("2020-01-01", periods=2)
    closes = pd.DataFrame({"A": [100.0, 110.0], "B": [100.0, 90.0]}, index=idx)
    out = run_portfolio(
        closes, {"A": 0.5, "B": 0.5}, rebalance="none",
        initial_capital=1.0, fee_bps=0, slippage_bps=0,
    )
    # R_1 = 0, so w_A = 0.5 * 1.10 / 1.0 = 0.55
    assert out["series"]["weights"]["A"][-1] == pytest.approx(0.55)
    assert out["series"]["weights"]["B"][-1] == pytest.approx(0.45)
    assert out["series"]["weights"]["A"][-1] + out["series"]["weights"]["B"][-1] == pytest.approx(1.0)


def test_no_rebalancing_really_is_buy_and_hold():
    """Frozen weights are not buy-and-hold: A +50%/+50%, B -30%/-30%.

    True buy-and-hold ends at 137.0 per 100 invested; holding the weight vector
    fixed and rebalancing daily lands at 121.0.
    """
    idx = pd.bdate_range("2020-01-01", periods=3)
    closes = pd.DataFrame(
        {"A": [100.0, 150.0, 225.0], "B": [100.0, 70.0, 49.0]}, index=idx
    )
    out = run_portfolio(
        closes, {"A": 0.5, "B": 0.5}, rebalance="none",
        initial_capital=100.0, fee_bps=0, slippage_bps=0,
    )
    assert out["series"]["equity"][-1] == pytest.approx(137.0)
    assert out["series"]["buy_and_hold_equity"][-1] == pytest.approx(137.0)

    frozen = 100.0 * np.prod(
        [1 + 0.5 * 0.5 + 0.5 * -0.3, 1 + 0.5 * 0.5 + 0.5 * -0.3]
    )
    assert frozen == pytest.approx(121.0)
    assert out["series"]["equity"][-1] != pytest.approx(frozen)


def test_rebalancing_costs_money_and_changes_the_path():
    idx = pd.bdate_range("2020-01-01", periods=400)
    rng = np.random.default_rng(9)
    a = 100 * np.exp(np.cumsum(rng.normal(0.0004, 0.02, 400)))
    b = 100 * np.exp(np.cumsum(rng.normal(0.0001, 0.01, 400)))
    closes = pd.DataFrame({"A": a, "B": b}, index=idx)

    never = run_portfolio(closes, {"A": 0.5, "B": 0.5}, rebalance="none",
                          initial_capital=100.0, fee_bps=10, slippage_bps=0)
    monthly = run_portfolio(closes, {"A": 0.5, "B": 0.5}, rebalance="monthly",
                            initial_capital=100.0, fee_bps=10, slippage_bps=0)
    assert monthly["total_cost_fraction"] > never["total_cost_fraction"]
    assert monthly["series"]["equity"][-1] != pytest.approx(never["series"]["equity"][-1])


def test_portfolio_weights_are_normalised():
    idx = pd.bdate_range("2020-01-01", periods=5)
    closes = pd.DataFrame({"A": np.linspace(100, 120, 5), "B": np.linspace(100, 90, 5)}, index=idx)
    out = run_portfolio(closes, {"A": 3.0, "B": 1.0}, initial_capital=1.0,
                        fee_bps=0, slippage_bps=0)
    assert out["target_weights"]["A"] == pytest.approx(0.75)
    assert out["target_weights"]["B"] == pytest.approx(0.25)


# --------------------------------------------------------------------------
# Rule 6: output completeness
# --------------------------------------------------------------------------

def test_result_reports_gross_and_net_and_turnover():
    prices = random_walk(500, seed=4)
    strat = build_strategy("sma_cross", {"short_window": 10, "long_window": 40})
    result = run_backtest(prices, strat, BacktestConfig(fee_bps=10, slippage_bps=5))
    s = result.summary
    for key in ("trades", "total_turnover", "gross_total_return", "net_total_return",
                "cost_drag", "time_in_market", "trade_win_rate"):
        assert key in s
    assert s["gross_total_return"] > s["net_total_return"]
    assert s["total_turnover"] > 0
    assert 0.0 <= s["time_in_market"] <= 1.0


def test_always_long_with_zero_costs_equals_buy_and_hold():
    prices = random_walk(300, seed=5)
    result = run_backtest(prices, AlwaysLong(), BacktestConfig(fee_bps=0, slippage_bps=0))
    # One bar of warm-up: the position only starts at bar 1.
    ratio = result.equity.iloc[-1] / result.benchmark_equity.iloc[-1]
    assert ratio == pytest.approx(prices["close"].iloc[0] / prices["close"].iloc[0], abs=1e-9)


def test_sizing_methods_scale_exposure():
    prices = random_walk(500, seed=6)
    strat = build_strategy("sma_cross", {"short_window": 10, "long_window": 40})
    base = BacktestConfig(fee_bps=0, slippage_bps=0)
    full = run_backtest(prices, strat, base)
    half = run_backtest(
        prices, strat,
        BacktestConfig(fee_bps=0, slippage_bps=0, sizing="fixed", sizing_params={"fraction": 0.5}),
    )
    assert half.position.abs().max() == pytest.approx(0.5 * full.position.abs().max())

    vt = run_backtest(
        prices, strat,
        BacktestConfig(fee_bps=0, slippage_bps=0, sizing="vol_target",
                       sizing_params={"target_vol": 0.10, "window": 30, "max_weight": 1.0}),
    )
    assert vt.position.abs().max() <= 1.0
    assert vt.position.abs().max() > 0

    hk = run_backtest(
        prices, strat,
        BacktestConfig(fee_bps=0, slippage_bps=0, sizing="half_kelly",
                       sizing_params={"window": 60, "cap": 1.0}),
    )
    assert hk.position.abs().max() <= 1.0
