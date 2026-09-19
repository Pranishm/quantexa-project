"""Look-ahead bias tests.

The suite works in both directions:

* every shipped strategy must pass the causal test, and
* deliberately leaky strategies - built from the exact constructs found in the
  surveyed repositories - must be *caught* by it.

A bias audit that never fails is not evidence of anything, so the negative
controls matter as much as the positive ones.
"""

from __future__ import annotations

import numpy as np
import pandas as pd
import pytest

from app.engine.bias_audit import audit, causal_test, lag_test, random_walk_control
from app.engine.simulator import BacktestConfig, run_backtest
from app.engine.strategies import build_strategy
from app.engine.strategies.base import Strategy
from tests.conftest import make_frame, random_walk

SHIPPED = [
    ("sma_cross", {"short_window": 20, "long_window": 100}),
    ("ema_trend", {"span": 50}),
    ("momentum", {"lookback": 90}),
    ("mean_reversion", {"window": 20, "entry_z": 2.0, "exit_z": 0.0}),
]


# --------------------------------------------------------------------------
# Negative controls: strategies that really do cheat
# --------------------------------------------------------------------------

class OracleNextBar(Strategy):
    """Reads tomorrow's return. The purest possible look-ahead."""

    name = "_oracle"
    label = "Oracle (leaky control)"
    param_spec = {}

    def indicators(self, prices):
        return pd.DataFrame({"next_return": prices["close"].shift(-1) / prices["close"] - 1.0})

    def signal(self, prices):
        return self._clip(np.sign(prices["close"].shift(-1) / prices["close"] - 1.0))

    def rule_text(self, row, signal):
        return "cheats"


class CenteredWindow(Strategy):
    """rolling(center=True) - half the window is in the future."""

    name = "_centered"
    label = "Centered rolling (leaky control)"
    param_spec = {"window": (5, 50, 21)}

    def indicators(self, prices):
        w = int(self.params["window"])
        return pd.DataFrame(
            {"centered_mean": prices["close"].rolling(w, center=True, min_periods=w).mean()}
        )

    def signal(self, prices):
        panel = self.indicators(prices)
        return self._clip(np.sign(prices["close"] - panel["centered_mean"]))

    def rule_text(self, row, signal):
        return "cheats"


class ShiftMinusTwo(Strategy):
    """shift(-2): the swing/order-block construct from the surveyed repo."""

    name = "_shift_minus_two"
    label = "shift(-2) (leaky control)"
    param_spec = {}

    def indicators(self, prices):
        return pd.DataFrame({"future_close": prices["close"].shift(-2)})

    def signal(self, prices):
        return self._clip(np.sign(prices["close"].shift(-2) - prices["close"]))

    def rule_text(self, row, signal):
        return "cheats"


class FullSampleMedian(Strategy):
    """Compares against a median of the WHOLE sample, including the future.

    Subtle: nothing is shifted, but the threshold itself was not knowable at
    the time. This is why the regime detector uses an expanding median.
    """

    name = "_full_median"
    label = "Full-sample median (leaky control)"
    param_spec = {"window": (5, 60, 30)}

    def indicators(self, prices):
        w = int(self.params["window"])
        vol = prices["close"].pct_change().rolling(w, min_periods=w).std(ddof=1)
        return pd.DataFrame({"vol": vol, "threshold": vol.median()})

    def signal(self, prices):
        panel = self.indicators(prices)
        return self._clip(np.sign(panel["threshold"] - panel["vol"]))

    def rule_text(self, row, signal):
        return "cheats"


LEAKY = [OracleNextBar, CenteredWindow, ShiftMinusTwo, FullSampleMedian]


# --------------------------------------------------------------------------
# The audit catches every leak
# --------------------------------------------------------------------------

@pytest.mark.parametrize("cls", LEAKY, ids=lambda c: c.name)
def test_causal_test_catches_leaky_strategies(cls):
    prices = random_walk(500, seed=101)
    result = causal_test(prices, cls(allow_short=True), samples=60)
    assert result.passed is False, f"{cls.name} slipped past the causal test"
    assert result.mismatches > 0
    assert result.first_failures, "a failing audit must show the offending bars"


@pytest.mark.parametrize("cls", LEAKY, ids=lambda c: c.name)
def test_audit_verdict_is_fail_for_leaky_strategies(cls):
    prices = random_walk(500, seed=102)
    report = audit(prices, cls(allow_short=True), BacktestConfig(fee_bps=0, slippage_bps=0), samples=40)
    assert report["verdict"] == "fail"
    assert report["badge"] == "Look-ahead detected"


def test_oracle_makes_impossible_money_on_a_random_walk():
    """Sanity check on the methodology itself.

    If a cheating strategy did NOT print fake profit on a driftless random
    walk, the random-walk control would be worthless as a detector.
    """
    prices = random_walk(750, seed=103)
    result = run_backtest(
        prices, OracleNextBar(allow_short=True), BacktestConfig(fee_bps=0, slippage_bps=0)
    )
    assert result.metrics["cagr"] > 1.0
    assert result.metrics["sharpe"] > 5.0


# --------------------------------------------------------------------------
# Every shipped strategy is causal
# --------------------------------------------------------------------------

@pytest.mark.parametrize("name,params", SHIPPED, ids=[s[0] for s in SHIPPED])
@pytest.mark.parametrize("allow_short", [False, True], ids=["long_only", "long_short"])
def test_shipped_strategies_pass_the_causal_test(name, params, allow_short):
    prices = random_walk(800, seed=7)
    strat = build_strategy(name, params, allow_short=allow_short)
    result = causal_test(prices, strat, samples=60)
    assert result.passed, f"{name}: {result.mismatches} signals changed - {result.first_failures}"
    assert result.samples > 0


@pytest.mark.parametrize("name,params", SHIPPED, ids=[s[0] for s in SHIPPED])
def test_shipped_strategies_are_causal_on_real_market_data(name, params):
    """Same check against the committed snapshot, not just synthetic prices."""
    from app.data.cache import load_prices

    prices, _report, _source = load_prices("NVDA")
    if len(prices) < 300:
        pytest.skip("price snapshot unavailable")
    strat = build_strategy(name, params, allow_short=True)
    result = causal_test(prices, strat, samples=40)
    assert result.passed, f"{name}: {result.first_failures}"


def test_truncating_history_never_changes_an_earlier_signal():
    """Stronger than sampling: compare whole signal prefixes."""
    prices = random_walk(400, seed=8)
    for name, params in SHIPPED:
        strat = build_strategy(name, params, allow_short=True)
        full = strat.signal(prices)
        partial = strat.signal(prices.iloc[:250])
        pd.testing.assert_series_equal(
            full.iloc[:250], partial, check_freq=False,
            obj=f"{name} signal prefix",
        )


def test_mean_reversion_state_machine_is_path_independent():
    """A stateful strategy must reach the same state from the same history."""
    prices = random_walk(500, seed=9)
    strat = build_strategy("mean_reversion", {"window": 20, "entry_z": 2.0}, allow_short=True)
    for cut in (120, 240, 360, 480):
        assert float(strat.signal(prices.iloc[:cut]).iloc[-1]) == pytest.approx(
            float(strat.signal(prices).iloc[cut - 1])
        )


# --------------------------------------------------------------------------
# Random-walk control: no edge where none can exist
# --------------------------------------------------------------------------

@pytest.mark.parametrize("name,params", SHIPPED, ids=[s[0] for s in SHIPPED])
def test_no_strategy_makes_money_on_driftless_random_walks(name, params):
    strat = build_strategy(name, params, allow_short=True)
    control = random_walk_control(
        strat, n_walks=25, n_bars=600, seed=2024,
        config=BacktestConfig(fee_bps=5, slippage_bps=2),
    )
    # With costs paid, the honest expectation is zero-to-negative.
    assert control["mean_cagr"] < 0.02, f"{name} shows a suspicious edge on noise: {control}"
    assert 0.2 < control["positive_fraction"] < 0.8, (
        f"{name} wins on {control['positive_fraction']:.0%} of random walks, "
        "which is not what chance looks like"
    )


def test_random_walk_control_flags_a_leaky_engine():
    """The control must be able to fail, or it proves nothing."""
    control = random_walk_control(
        OracleNextBar(allow_short=True), n_walks=10, n_bars=400, seed=5,
        config=BacktestConfig(fee_bps=0, slippage_bps=0),
    )
    assert control["mean_cagr"] > 1.0
    assert control["positive_fraction"] == 1.0


# --------------------------------------------------------------------------
# Lag test
# --------------------------------------------------------------------------

def test_lag_test_reports_both_runs():
    prices = random_walk(600, seed=11)
    strat = build_strategy("sma_cross", {"short_window": 20, "long_window": 60})
    result = lag_test(prices, strat, BacktestConfig(fee_bps=5, slippage_bps=2))
    assert np.isfinite(result.base_cagr)
    assert np.isfinite(result.lagged_cagr)
    assert result.cagr_delta == pytest.approx(result.lagged_cagr - result.base_cagr)


def test_lag_test_marks_an_oracle_as_fragile():
    """An edge built on future data collapses the moment you delay it."""
    prices = random_walk(600, seed=12)
    result = lag_test(
        prices, OracleNextBar(allow_short=True), BacktestConfig(fee_bps=0, slippage_bps=0)
    )
    assert result.base_sharpe > 5.0
    assert result.sharpe_retention < 0.5
    assert result.fragile is True


def test_full_audit_passes_for_a_shipped_strategy():
    prices = random_walk(700, seed=13)
    strat = build_strategy("sma_cross", {"short_window": 20, "long_window": 100})
    report = audit(prices, strat, BacktestConfig(fee_bps=5, slippage_bps=2), samples=40)
    assert report["causal_test"]["passed"] is True
    assert report["verdict"] in ("pass", "warn")
    assert report["badge"] != "Look-ahead detected"
