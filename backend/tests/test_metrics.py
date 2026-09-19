"""Metric tests with hand-computed expected values."""

from __future__ import annotations

import math

import numpy as np
import pandas as pd
import pytest

from app.quant import indicators as ind
from app.quant import risk


def _dates(n: int) -> pd.DatetimeIndex:
    return pd.bdate_range("2020-01-01", periods=n)


# --------------------------------------------------------------------------
# indicators
# --------------------------------------------------------------------------

def test_simple_and_log_returns():
    prices = pd.Series([100.0, 110.0, 99.0], index=_dates(3))
    simple = ind.simple_returns(prices)
    assert simple.iloc[1] == pytest.approx(0.10)
    assert simple.iloc[2] == pytest.approx(-0.10)

    logs = ind.log_returns(prices)
    assert logs.iloc[1] == pytest.approx(math.log(1.10))
    # log returns add, simple returns compound
    assert logs.sum() == pytest.approx(math.log(99.0 / 100.0))


def test_cumulative_return_compounds():
    r = pd.Series([np.nan, 0.10, -0.10], index=_dates(3))
    cum = ind.cumulative_returns(r)
    assert cum.iloc[-1] == pytest.approx(1.10 * 0.90 - 1.0)


def test_sma_needs_full_window():
    prices = pd.Series([1.0, 2.0, 3.0, 4.0], index=_dates(4))
    out = ind.sma(prices, 3)
    assert out.iloc[:2].isna().all()
    assert out.iloc[2] == pytest.approx(2.0)
    assert out.iloc[3] == pytest.approx(3.0)


def test_ema_recursion_uses_alpha_two_over_n_plus_one():
    # span=3 -> alpha=0.5. EMA: 1, 1.5, 2.25, 3.125 (first two masked).
    prices = pd.Series([1.0, 2.0, 3.0, 4.0], index=_dates(4))
    out = ind.ema(prices, 3)
    assert out.iloc[:2].isna().all()
    assert out.iloc[2] == pytest.approx(2.25)
    assert out.iloc[3] == pytest.approx(3.125)


def test_zscore_matches_definition():
    prices = pd.Series([10.0, 12.0, 14.0, 8.0], index=_dates(4))
    z = ind.zscore(prices, 3)
    window = prices.iloc[1:4]
    expected = (8.0 - window.mean()) / window.std(ddof=1)
    assert z.iloc[3] == pytest.approx(expected)


def test_indicators_never_reference_future_bars():
    """Truncating the series must not change earlier indicator values."""
    rng = np.random.default_rng(7)
    prices = pd.Series(100 * np.exp(np.cumsum(rng.normal(0, 0.01, 300))), index=_dates(300))
    for fn in (lambda p: ind.sma(p, 20), lambda p: ind.ema(p, 20),
               lambda p: ind.momentum(p, 30), lambda p: ind.zscore(p, 20)):
        full = fn(prices)
        partial = fn(prices.iloc[:200])
        pd.testing.assert_series_equal(full.iloc[:200], partial, check_freq=False)


# --------------------------------------------------------------------------
# risk
# --------------------------------------------------------------------------

def test_cagr_doubling_over_one_year():
    equity = pd.Series(np.linspace(1.0, 2.0, 253), index=_dates(253))
    assert risk.cagr(equity, 252) == pytest.approx(1.0)


def test_sharpe_matches_formula():
    rng = np.random.default_rng(3)
    r = pd.Series(rng.normal(0.0005, 0.01, 500), index=_dates(500))
    expected = r.mean() / r.std(ddof=1) * math.sqrt(252)
    assert risk.sharpe(r, 252) == pytest.approx(expected)


def test_annualisation_factor_actually_changes_the_answer():
    """The 252-vs-365 bug: same returns, different N, ~17% difference."""
    rng = np.random.default_rng(11)
    r = pd.Series(rng.normal(0.0005, 0.02, 800), index=_dates(800))
    s252 = risk.sharpe(r, 252)
    s365 = risk.sharpe(r, 365)
    assert s365 / s252 == pytest.approx(math.sqrt(365 / 252))
    v252 = ind.annualised_volatility(r, 252)
    v365 = ind.annualised_volatility(r, 365)
    assert v365 / v252 == pytest.approx(math.sqrt(365 / 252))
    # Using 252 for a daily-traded asset understates vol by ~17%.
    assert (v365 - v252) / v365 == pytest.approx(1 - math.sqrt(252 / 365), abs=1e-6)


def test_sortino_only_penalises_downside():
    r_mixed = pd.Series([0.02, -0.01, 0.02, -0.01] * 50, index=_dates(200))
    r_upside = pd.Series([0.02, 0.005, 0.02, -0.01] * 50, index=_dates(200))
    # Adding upside volatility must not reduce Sortino the way it reduces Sharpe.
    assert risk.sortino(r_upside, 252) > risk.sortino(r_mixed, 252)


def test_drawdown_stats_on_handmade_curve():
    equity = pd.Series([100.0, 120.0, 60.0, 90.0, 130.0], index=_dates(5))
    stats = risk.drawdown_stats(equity)
    assert stats.max_drawdown == pytest.approx(-0.5)
    assert stats.peak_date == equity.index[1].strftime("%Y-%m-%d")
    assert stats.trough_date == equity.index[2].strftime("%Y-%m-%d")
    assert stats.recovery_date == equity.index[4].strftime("%Y-%m-%d")
    assert stats.max_drawdown_bars == 3
    assert stats.longest_drawdown_bars == 2


def test_drawdown_never_recovered_reports_no_recovery_date():
    equity = pd.Series([100.0, 150.0, 80.0, 90.0], index=_dates(4))
    stats = risk.drawdown_stats(equity)
    assert stats.recovery_date is None
    assert stats.max_drawdown == pytest.approx(80.0 / 150.0 - 1.0)


def test_calmar_is_cagr_over_abs_mdd():
    equity = pd.Series([100.0, 120.0, 60.0, 130.0], index=_dates(4))
    expected = risk.cagr(equity, 252) / 0.5
    assert risk.calmar(equity, 252) == pytest.approx(expected)


def test_historical_var_and_cvar():
    r = pd.Series(
        [-0.10, -0.05, -0.02, 0.0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.10],
        index=_dates(10),
    )
    # numpy linear interpolation at the 5th percentile: -0.10 + 0.45*0.05
    assert risk.historical_var(r, 0.95) == pytest.approx(0.0775)
    # only -0.10 sits at or below that cutoff
    assert risk.historical_cvar(r, 0.95) == pytest.approx(0.10)
    assert risk.historical_cvar(r, 0.95) >= risk.historical_var(r, 0.95)


def test_beta_of_a_doubled_series_is_two():
    rng = np.random.default_rng(5)
    bench = pd.Series(rng.normal(0, 0.01, 400), index=_dates(400))
    asset = 2.0 * bench + 0.0001
    assert risk.beta(asset, bench) == pytest.approx(2.0)


def test_beta_uses_only_overlapping_dates():
    idx = _dates(100)
    bench = pd.Series(np.random.default_rng(1).normal(0, 0.01, 100), index=idx)
    asset = (1.5 * bench).iloc[20:]
    assert risk.beta(asset, bench) == pytest.approx(1.5)


def test_psr_rises_with_sample_length():
    rng = np.random.default_rng(13)
    short = pd.Series(rng.normal(0.001, 0.01, 60), index=_dates(60))
    long = pd.Series(np.tile(short.to_numpy(), 20), index=_dates(1200))
    # same shape, 20x the evidence
    assert risk.probabilistic_sharpe(long) > risk.probabilistic_sharpe(short)
    assert 0.0 <= risk.probabilistic_sharpe(short) <= 1.0


def test_expected_max_sharpe_grows_with_number_of_trials():
    rng = np.random.default_rng(17)
    trials = rng.normal(0.0, 0.05, 200).tolist()
    few = risk.expected_max_sharpe(trials[:5])
    many = risk.expected_max_sharpe(trials)
    assert many > few > 0


def test_deflated_sharpe_is_never_above_psr():
    rng = np.random.default_rng(19)
    r = pd.Series(rng.normal(0.0008, 0.01, 500), index=_dates(500))
    trials = rng.normal(0.02, 0.04, 120).tolist()
    psr = risk.probabilistic_sharpe(r)
    dsr = risk.deflated_sharpe(r, trials)
    assert dsr <= psr
    assert 0.0 <= dsr <= 1.0


def test_summarise_returns_every_documented_field():
    rng = np.random.default_rng(23)
    r = pd.Series(rng.normal(0.0004, 0.012, 600), index=_dates(600))
    bench = pd.Series(rng.normal(0.0003, 0.010, 600), index=_dates(600))
    out = risk.summarise(r, 365, benchmark_returns=bench)
    for key in (
        "cagr", "annualised_volatility", "sharpe", "sortino", "max_drawdown",
        "calmar", "var_95", "cvar_95", "beta", "probabilistic_sharpe",
        "longest_drawdown_bars", "win_rate",
    ):
        assert key in out, key
    assert out["periods_per_year"] == 365
