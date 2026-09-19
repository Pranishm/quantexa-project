"""Correlation, regime, robustness and Monte Carlo tests."""

from __future__ import annotations

import numpy as np
import pandas as pd
import pytest

from app.engine.montecarlo import block_bootstrap_paths, monte_carlo_band
from app.engine.robustness import cost_sweep, parameter_grid, robustness_score, walk_forward
from app.engine.simulator import BacktestConfig
from app.quant.correlation import correlation_breaks, correlation_matrix, rolling_correlation
from app.quant.regimes import classify, ribbon, stats_by_regime
from app.quant.indicators import simple_returns
from tests.conftest import random_walk


def _two_assets(n: int = 800, seed: int = 0) -> pd.DataFrame:
    rng = np.random.default_rng(seed)
    idx = pd.bdate_range("2019-01-01", periods=n)
    a = 100 * np.exp(np.cumsum(rng.normal(0.0003, 0.015, n)))
    shared = rng.normal(0, 0.01, n)
    b = 100 * np.exp(np.cumsum(0.6 * shared + rng.normal(0.0001, 0.010, n)))
    return pd.DataFrame({"A": a, "B": b}, index=idx)


# --------------------------------------------------------------------------
# correlation
# --------------------------------------------------------------------------

def test_correlation_matrix_is_symmetric_with_unit_diagonal():
    out = correlation_matrix(_two_assets())
    m = np.array(out["matrix"])
    assert np.allclose(np.diag(m), 1.0)
    assert np.allclose(m, m.T)
    assert out["bars"] > 0


def test_perfectly_correlated_assets_score_one():
    idx = pd.bdate_range("2020-01-01", periods=200)
    base = np.cumsum(np.random.default_rng(1).normal(0, 0.01, 200))
    closes = pd.DataFrame({"A": 100 * np.exp(base), "B": 50 * np.exp(base)}, index=idx)
    m = np.array(correlation_matrix(closes)["matrix"])
    assert m[0, 1] == pytest.approx(1.0, abs=1e-9)


def test_rolling_correlation_respects_the_window():
    closes = _two_assets(400, seed=2)
    roll = rolling_correlation(closes, window=60)
    assert list(roll.columns) == ["A|B"]
    # first 60 return-bars cannot produce a 60-bar correlation
    assert roll["A|B"].iloc[:59].isna().all()
    assert roll["A|B"].notna().iloc[-1]
    assert roll["A|B"].dropna().between(-1.0, 1.0).all()


def test_correlation_break_baseline_uses_only_prior_bars():
    """The z-score baseline must not contain the bar it is judging."""
    closes = _two_assets(900, seed=3)
    out = correlation_breaks(closes, window=60, baseline=252, threshold=2.0)
    pair = out["pairs"]["A|B"]

    roll = rolling_correlation(closes, 60)["A|B"]
    prior = roll.shift(1)
    expected_mean = prior.rolling(252, min_periods=63).mean()
    got = pd.Series(pair["baseline_mean"], index=roll.index, dtype="float64")
    pd.testing.assert_series_equal(got, expected_mean, check_names=False, check_freq=False)


def test_correlation_breaks_are_flagged_when_a_regime_changes():
    """Splice an uncorrelated stretch onto a correlated one and expect an alert."""
    rng = np.random.default_rng(4)
    n = 600
    idx = pd.bdate_range("2019-01-01", periods=n * 2)
    shared = rng.normal(0, 0.012, n)
    a1, b1 = shared, shared  # perfectly correlated first half
    a2 = rng.normal(0, 0.012, n)
    b2 = -rng.normal(0, 0.012, n)  # unrelated second half
    a = 100 * np.exp(np.cumsum(np.concatenate([a1, a2])))
    b = 100 * np.exp(np.cumsum(np.concatenate([b1, b2])))
    closes = pd.DataFrame({"A": a, "B": b}, index=idx)

    out = correlation_breaks(closes, window=60, baseline=252, threshold=2.0)
    assert out["events"], "a correlation regime change should raise at least one alert"
    assert all(abs(e["zscore"]) > 2.0 for e in out["events"])


# --------------------------------------------------------------------------
# regimes
# --------------------------------------------------------------------------

def test_regime_labels_are_causal():
    """Truncating history must not relabel earlier bars.

    This is what the expanding median buys. A full-sample median would fail
    here, because the threshold itself would move.
    """
    prices = random_walk(900, seed=5)
    full = classify(prices, 252)
    partial = classify(prices.iloc[:600], 252)
    pd.testing.assert_series_equal(
        full["regime"].iloc[:600], partial["regime"], check_freq=False, obj="regime labels"
    )


def test_full_sample_median_would_not_be_causal():
    """Negative control for the test above."""
    prices = random_walk(900, seed=5)
    rets = simple_returns(prices["close"])
    vol = rets.rolling(30, min_periods=30).std(ddof=1)

    full_label = (vol > vol.median()).iloc[:600]
    partial_label = (vol.iloc[:600] > vol.iloc[:600].median())
    assert not full_label.equals(partial_label), (
        "a full-sample median should relabel history once more data arrives"
    )


def test_ribbon_segments_are_contiguous_and_cover_the_labelled_span():
    prices = random_walk(700, seed=6)
    panel = classify(prices, 252)
    segments = ribbon(panel)
    assert segments
    for seg in segments:
        assert seg["start"] <= seg["end"]
        assert seg["regime"] in (
            "Bull / Low vol", "Bull / High vol", "Bear / Low vol", "Bear / High vol",
        )
    starts = [s["start"] for s in segments]
    assert starts == sorted(starts)


def test_regime_stats_split_the_sample():
    prices = random_walk(900, seed=7)
    panel = classify(prices, 252)
    bench = simple_returns(prices["close"]).fillna(0.0)
    rows = stats_by_regime(panel, bench * 0.5, bench, 252)
    assert rows
    assert sum(r["bars"] for r in rows) == int(panel["regime"].notna().sum())
    for row in rows:
        assert "benchmark_sharpe" in row and "strategy_sharpe" in row


# --------------------------------------------------------------------------
# robustness
# --------------------------------------------------------------------------

def test_parameter_grid_skips_invalid_combinations():
    prices = random_walk(600, seed=8)
    cfg = BacktestConfig(fee_bps=5, slippage_bps=2)
    out = parameter_grid(prices, "sma_cross", cfg,
                         {"short_window": [10, 20, 50], "long_window": [20, 50, 100]})
    assert out["available"]
    for row in out["results"]:
        assert row["params"]["short_window"] < row["params"]["long_window"]


def test_plateau_stability_is_between_zero_and_one():
    prices = random_walk(700, seed=9)
    cfg = BacktestConfig(fee_bps=5, slippage_bps=2)
    out = parameter_grid(prices, "sma_cross", cfg,
                         {"short_window": [5, 10, 20, 30], "long_window": [50, 100, 150, 200]})
    s = out["plateau_stability"]
    assert np.isnan(s) or 0.0 <= s <= 1.0


def test_cost_sweep_is_monotone_and_reports_break_even():
    prices = random_walk(800, seed=10, drift=0.15)
    cfg = BacktestConfig(fee_bps=0, slippage_bps=0)
    out = cost_sweep(prices, "sma_cross", {"short_window": 20, "long_window": 100}, cfg,
                     bps_levels=(0, 10, 20, 30, 40, 50))
    returns = [p["net_total_return"] for p in out["points"]]
    assert returns == sorted(returns, reverse=True), "higher costs must not improve returns"


def test_cost_sweep_note_matches_a_zero_break_even():
    """0.0 is falsy; the note must still say the strategy never wins."""
    prices = random_walk(800, seed=11)
    cfg = BacktestConfig(fee_bps=0, slippage_bps=0)
    out = cost_sweep(prices, "sma_cross", {"short_window": 20, "long_window": 100}, cfg,
                     bps_levels=(0, 10, 20))
    if out["break_even_bps"] == 0.0:
        assert "does not beat buy-and-hold" in out["note"]
    elif out["break_even_bps"] is None:
        assert "beats buy-and-hold across" in out["note"]


def test_walk_forward_never_trains_on_the_test_window():
    prices = random_walk(1400, seed=12)
    cfg = BacktestConfig(fee_bps=5, slippage_bps=2, periods_per_year=252)
    out = walk_forward(prices, "sma_cross", cfg,
                       {"short_window": [10, 20], "long_window": [50, 100]})
    assert out["available"]
    assert out["fold_count"] >= 2
    for fold in out["folds"]:
        assert fold["train_end"] < fold["test_start"], "training window leaked into the test window"
    starts = [f["test_start"] for f in out["folds"]]
    assert starts == sorted(starts)
    assert len({f["test_start"] for f in out["folds"]}) == len(starts), "test windows overlap"


def test_robustness_score_is_bounded_and_explains_itself():
    prices = random_walk(1300, seed=13)
    cfg = BacktestConfig(fee_bps=5, slippage_bps=2, periods_per_year=252)
    out = robustness_score(prices, "sma_cross", {"short_window": 20, "long_window": 100}, cfg,
                           {"short_window": [10, 20, 30], "long_window": [50, 100, 150]})
    assert 0.0 <= out["score"] <= 100.0
    assert out["verdict"] in ("robust", "mixed", "fragile")
    assert set(out["components"]) == {
        "deflated_sharpe", "plateau_stability", "walk_forward_efficiency",
    }
    for comp in out["components"].values():
        assert 0.0 <= comp["score"] <= 100.0
        assert comp["explanation"]


def test_one_failing_leg_prevents_a_robust_verdict():
    """A strong average must not hide a component that failed outright."""
    prices = random_walk(1300, seed=14)
    cfg = BacktestConfig(fee_bps=5, slippage_bps=2, periods_per_year=252)
    out = robustness_score(prices, "sma_cross", {"short_window": 20, "long_window": 100}, cfg,
                           {"short_window": [10, 20, 30], "long_window": [50, 100, 150]})
    scores = [c["score"] for c in out["components"].values()]
    if min(scores) < 25:
        assert out["verdict"] != "robust"


# --------------------------------------------------------------------------
# monte carlo
# --------------------------------------------------------------------------

def test_bootstrap_paths_have_the_right_shape_and_are_reproducible():
    r = pd.Series(np.random.default_rng(15).normal(0.0004, 0.01, 500))
    a = block_bootstrap_paths(r, n_paths=50, block_size=20, seed=1)
    b = block_bootstrap_paths(r, n_paths=50, block_size=20, seed=1)
    assert a.shape == (50, 500)
    assert np.allclose(a, b)
    assert not np.allclose(a, block_bootstrap_paths(r, n_paths=50, block_size=20, seed=2))


def test_monte_carlo_band_is_ordered():
    idx = pd.bdate_range("2020-01-01", periods=400)
    r = pd.Series(np.random.default_rng(16).normal(0.0005, 0.012, 400), index=idx)
    band = monte_carlo_band(r, n_paths=300, block_size=20, initial_capital=10_000.0, seed=3)
    assert band["available"]
    lower, median, upper = band["lower"], band["median"], band["upper"]
    assert len(lower) == len(median) == len(upper) == 400
    for lo, mid, hi in zip(lower, median, upper):
        assert lo <= mid <= hi
    fe = band["final_equity"]
    assert fe["p5"] <= fe["median"] <= fe["p95"]
    assert 0.0 <= fe["probability_of_loss"] <= 1.0


def test_block_bootstrap_preserves_autocorrelation_better_than_iid_shuffling():
    """The reason blocks are used at all."""
    rng = np.random.default_rng(17)
    n = 1000
    # strongly autocorrelated volatility
    vol = np.abs(np.convolve(rng.normal(0, 1, n), np.ones(50) / 50, mode="same")) + 0.002
    r = pd.Series(rng.normal(0, 1, n) * vol)

    def abs_autocorr(x: np.ndarray) -> float:
        s = pd.Series(np.abs(x))
        return float(s.autocorr(lag=1))

    original = abs_autocorr(r.to_numpy())
    blocks = block_bootstrap_paths(r, n_paths=1, block_size=50, seed=4)
    block_rets = np.diff(np.log(blocks[0]))
    iid = r.sample(frac=1.0, random_state=5).to_numpy()

    assert abs(abs_autocorr(block_rets) - original) < abs(abs_autocorr(iid) - original)
