"""HTTP contract tests.

These run the real FastAPI app against the committed offline snapshot, so they
need no network. They pin down what the frontend relies on: strict JSON (no
NaN), correct status codes, per-asset annualisation, and the two engine rules
that matter most, checked here from the *response* rather than from internals:

* the position on bar t is the signal from bar t-1
* costs can only reduce the return
"""

from __future__ import annotations

import json
import math

import numpy as np
import pytest
from fastapi.testclient import TestClient

from app.config import DISCLAIMER
from app.main import app

client = TestClient(app)

SMALL_GRID = {"short_window": [10, 20], "long_window": [60, 100]}


def strict_json(response):
    """Parse the way a browser does: NaN and Infinity literals are errors."""

    def reject(token: str):
        raise AssertionError(f"non-standard JSON constant {token!r} in response body")

    return json.loads(response.text, parse_constant=reject)


@pytest.fixture(scope="module")
def backtest():
    r = client.post(
        "/api/backtest",
        json={"symbol": "NVDA", "strategy": "sma_cross", "params": {"short_window": 10, "long_window": 60}},
    )
    assert r.status_code == 200, r.text
    return strict_json(r)


# --- meta / market -------------------------------------------------------


def test_health_reports_the_snapshot():
    body = client.get("/api/health").json()
    assert body["status"] == "ok"
    assert set(body["assets"]) == {"GC=F", "BTC-USD", "NVDA"}
    assert body["disclaimer"] == DISCLAIMER


def test_assets_use_per_asset_calendars():
    assets = {a["symbol"]: a for a in client.get("/api/assets").json()["assets"]}
    assert assets["BTC-USD"]["periods_per_year"] == 365
    assert assets["NVDA"]["periods_per_year"] == 252
    assert assets["GC=F"]["periods_per_year"] == 252


def test_assets_advertise_every_strategy_with_parameter_ranges():
    strategies = {s["name"]: s for s in client.get("/api/assets").json()["strategies"]}
    assert set(strategies) == {"sma_cross", "ema_trend", "momentum", "mean_reversion"}
    spec = strategies["sma_cross"]["params"]["short_window"]
    assert {"min", "max", "default"} <= set(spec)


def test_prices_limit_returns_the_latest_bars_in_order():
    body = client.get("/api/prices/BTC-USD", params={"limit": 5}).json()
    dates = [c["date"] for c in body["candles"]]
    assert len(dates) == 5
    assert dates == sorted(dates)
    assert body["meta"]["periods_per_year"] == 365


@pytest.mark.parametrize("path", ["/api/prices/FOO", "/api/asset/FOO/analytics"])
def test_unknown_symbol_is_a_404_not_an_outage(path):
    """503 tells a client to retry later; an unknown ticker is simply not found."""
    assert client.get(path).status_code == 404


# --- analytics -----------------------------------------------------------


def test_bitcoin_volatility_is_annualised_with_365_not_252():
    """Recomputed from the raw prices endpoint, independent of the metrics code."""
    candles = client.get("/api/prices/BTC-USD").json()["candles"]
    close = np.array([c["close"] for c in candles])
    r = close[1:] / close[:-1] - 1.0

    metrics = client.get("/api/metrics", params={"symbols": ["BTC-USD"]}).json()
    reported = metrics["assets"][0]["metrics"]["annualised_volatility"]

    assert reported == pytest.approx(r.std(ddof=1) * math.sqrt(365), rel=1e-9)
    assert reported != pytest.approx(r.std(ddof=1) * math.sqrt(252), rel=1e-3)


def test_correlation_matrix_is_a_valid_correlation_matrix():
    body = strict_json(client.get("/api/correlation", params={"window": 60}))
    m = np.array(body["matrix"]["matrix"])
    assert m.shape == (3, 3)
    assert np.allclose(m, m.T)
    assert np.allclose(np.diag(m), 1.0)
    assert np.all(np.abs(m) <= 1.0 + 1e-12)
    assert body["rolling"]["window"] == 60


def test_correlation_needs_two_assets():
    r = client.get("/api/correlation", params={"symbols": ["NVDA"]})
    assert r.status_code == 422


def test_asset_analytics_series_are_aligned():
    body = strict_json(client.get("/api/asset/NVDA/analytics"))
    n = len(body["dates"])
    assert n == len(body["close"]) == len(body["returns"]) == len(body["drawdown"])
    assert all(len(v) == n for v in body["overlays"].values())
    assert max(body["drawdown"]) <= 0.0
    assert sum(body["returns_histogram"]["counts"]) == n - 1


# --- backtest ------------------------------------------------------------


def test_backtest_response_is_strict_json_with_the_disclaimer(backtest):
    assert backtest["disclaimer"] == DISCLAIMER


def test_backtest_echoes_the_effective_parameters(backtest):
    assert backtest["strategy"]["params"] == {"short_window": 10, "long_window": 60}


def test_position_is_the_previous_bars_signal(backtest):
    """The core rule, verified from the payload itself."""
    s = backtest["series"]
    signal, position = np.array(s["signal"]), np.array(s["position"])
    assert position[0] == 0.0
    assert np.allclose(position[1:], signal[:-1])


def test_series_are_aligned_and_equity_reconciles(backtest):
    s = backtest["series"]
    n = len(s["dates"])
    assert all(len(s[k]) == n for k in ("close", "signal", "position", "equity", "drawdown", "net_return"))
    assert s["equity"][-1] == pytest.approx(backtest["metrics"]["final_equity"])
    assert s["equity"][0] == pytest.approx(10_000.0)


def test_costs_only_ever_reduce_the_return(backtest):
    summary = backtest["summary"]
    assert summary["gross_total_return"] >= summary["net_total_return"]
    assert summary["total_cost_currency"] >= 0.0
    assert min(backtest["series"]["cost"]) >= 0.0


def test_backtest_returns_the_indicator_panel_the_strategy_traded_on(backtest):
    """The chart overlays must be the backend's own numbers, not a browser re-derivation."""
    ind = backtest["indicators"]
    n = len(backtest["series"]["dates"])
    assert {"sma_short", "sma_long"} <= set(ind)
    assert all(len(v) == n for v in ind.values())
    assert ind["sma_short"][0] is None  # warm-up bars are null, not NaN

    # Cross-check one bar against the explain endpoint, which computes the same panel independently.
    i = n - 50
    at = backtest["series"]["dates"][i]
    explained = client.post(
        "/api/backtest/explain",
        json={"symbol": "NVDA", "strategy": "sma_cross", "params": {"short_window": 10, "long_window": 60}, "at": at},
    ).json()
    assert ind["sma_short"][i] == pytest.approx(explained["indicators"]["sma_short"])
    assert ind["sma_long"][i] == pytest.approx(explained["indicators"]["sma_long"])


def test_monte_carlo_band_is_ordered(backtest):
    mc = backtest["monte_carlo"]
    assert mc["available"] is True
    lower, median, upper = (np.array(mc[k]) for k in ("lower", "median", "upper"))
    assert len(lower) == len(backtest["series"]["dates"])
    assert np.all(lower <= median + 1e-6)
    assert np.all(median <= upper + 1e-6)


def test_backtest_carries_a_passing_bias_audit(backtest):
    audit = backtest["bias_audit"]
    assert audit["verdict"] == "pass"
    assert audit["causal_test"]["passed"] is True
    assert audit["causal_test"]["mismatches"] == 0


def test_unknown_strategy_parameter_is_rejected_not_silently_dropped():
    """A typo must not quietly run a different backtest than the one asked for."""
    r = client.post("/api/backtest", json={"strategy": "sma_cross", "params": {"short": 10, "long": 60}})
    assert r.status_code == 422
    assert "short" in r.json()["detail"]
    assert "short_window" in r.json()["detail"]  # tells the caller what is valid


@pytest.mark.parametrize("value", [0, -3, 2.5])
def test_window_parameters_must_be_positive_whole_numbers(value):
    r = client.post("/api/backtest", json={"params": {"short_window": value}})
    assert r.status_code == 422
    assert "short_window" in r.json()["detail"]


@pytest.mark.parametrize(
    "sizing, params",
    [("vol_target", {"target": 0.1}), ("fixed", {"target_vol": 0.1}), ("half_kelly", {"fraction": 0.5})],
)
def test_unknown_sizing_parameter_is_rejected(sizing, params):
    r = client.post("/api/backtest", json={"sizing": sizing, "sizing_params": params})
    assert r.status_code == 422
    assert "sizing" in str(r.json()["detail"]).lower()


def test_valid_sizing_parameters_are_accepted():
    r = client.post(
        "/api/backtest",
        json={
            "sizing": "vol_target",
            "sizing_params": {"target_vol": 0.2, "window": 20, "max_weight": 1.0},
            "include_monte_carlo": False,
            "include_bias_audit": False,
        },
    )
    assert r.status_code == 200, r.text


def test_sma_cross_rejects_an_inverted_window_pair():
    r = client.post("/api/backtest", json={"params": {"short_window": 90, "long_window": 30}})
    assert r.status_code == 422
    assert "short_window" in r.json()["detail"]


def test_window_shorter_than_the_warmup_is_rejected():
    r = client.post("/api/backtest", json={"start": "2026-08-01", "end": "2026-08-20"})
    assert r.status_code == 422


def test_inverted_date_range_is_rejected():
    r = client.post("/api/backtest", json={"start": "2026-01-01", "end": "2025-01-01"})
    assert r.status_code == 422


# --- explain -------------------------------------------------------------


def test_explain_shows_indicators_and_the_execution_delay():
    r = client.post(
        "/api/backtest/explain",
        json={"symbol": "NVDA", "strategy": "sma_cross", "at": "2024-03-15"},
    )
    assert r.status_code == 200, r.text
    body = strict_json(r)
    assert {"sma_short", "sma_long"} <= set(body["indicators"])
    assert body["execution"]["position_effective_from"] > body["execution"]["signal_decided_on"]


def test_explain_rejects_a_date_that_is_not_a_bar():
    r = client.post("/api/backtest/explain", json={"symbol": "NVDA", "at": "2024-03-16"})  # Saturday
    assert r.status_code == 422


# --- robustness ----------------------------------------------------------


def test_robustness_returns_grid_cost_sweep_walk_forward_and_score():
    r = client.post(
        "/api/robustness",
        json={"symbol": "NVDA", "strategy": "sma_cross", "grid": SMALL_GRID},
    )
    assert r.status_code == 200, r.text
    body = strict_json(r)
    assert body["parameter_grid"]["heatmap"]["x_key"] in SMALL_GRID
    assert len(body["cost_sweep"]["points"]) >= 2
    assert body["walk_forward"]["fold_count"] >= 1
    score = body["score"]
    assert 0.0 <= score["score"] <= 100.0
    assert sum(c["weight"] for c in score["components"].values()) == pytest.approx(1.0)


def test_robustness_computes_the_grid_and_walk_forward_once(monkeypatch):
    """The score must reuse the grid and walk-forward already computed for the response."""
    import app.api.backtest as api_mod
    import app.engine.robustness as rob_mod

    calls = {"parameter_grid": 0, "walk_forward": 0}

    def counting(name):
        real = getattr(rob_mod, name)

        def wrapper(*args, **kwargs):
            calls[name] += 1
            return real(*args, **kwargs)

        return wrapper

    for name in calls:
        wrapped = counting(name)
        monkeypatch.setattr(rob_mod, name, wrapped)
        monkeypatch.setattr(api_mod, name, wrapped)

    r = client.post("/api/robustness", json={"symbol": "NVDA", "grid": SMALL_GRID})
    assert r.status_code == 200, r.text
    assert calls == {"parameter_grid": 1, "walk_forward": 1}


def test_score_is_still_returned_when_the_heavy_sections_are_switched_off():
    r = client.post(
        "/api/robustness",
        json={
            "symbol": "NVDA",
            "grid": SMALL_GRID,
            "include_grid": False,
            "include_walk_forward": False,
            "include_cost_sweep": False,
        },
    )
    body = strict_json(r)
    assert "parameter_grid" not in body and "walk_forward" not in body
    assert body["score"]["components"]["walk_forward_efficiency"]["weight"] == pytest.approx(0.3)


def test_bias_audit_endpoint_includes_the_random_walk_control():
    r = client.post("/api/bias-audit", json={"symbol": "BTC-USD", "strategy": "momentum"})
    body = strict_json(r)
    assert body["verdict"] == "pass"
    assert body["random_walk_control"]["walks"] > 0


# --- regimes / portfolio / insights --------------------------------------


def test_regime_segments_are_ordered_and_stats_partition_the_sample():
    body = strict_json(client.get("/api/regimes", params={"symbol": "NVDA", "include_hmm": False}))
    segs = body["segments"]
    assert segs and all(a["end"] <= b["start"] or a["end"] < b["start"] for a, b in zip(segs, segs[1:]))
    assert sum(s["share"] for s in body["stats"]) == pytest.approx(1.0)
    assert {s["regime"] for s in body["stats"]} == {
        "Bull / Low vol", "Bull / High vol", "Bear / Low vol", "Bear / High vol",
    }


def test_no_rebalancing_portfolio_is_buy_and_hold_apart_from_the_entry_cost():
    body = strict_json(client.post("/api/portfolio", json={"rebalance": "none"}))
    a = body["metrics"]["final_equity"]
    b = body["buy_and_hold_metrics"]["final_equity"]
    assert a == pytest.approx(b, rel=5e-3)
    assert a <= b  # paying to enter can only cost money


def test_monthly_rebalancing_changes_the_path_and_costs_money():
    none = strict_json(client.post("/api/portfolio", json={"rebalance": "none"}))
    monthly = strict_json(client.post("/api/portfolio", json={"rebalance": "monthly"}))
    assert monthly["metrics"]["final_equity"] != pytest.approx(none["metrics"]["final_equity"], rel=1e-6)
    assert monthly["total_cost_fraction"] > none["total_cost_fraction"]


def test_portfolio_rejects_an_unknown_symbol():
    r = client.post("/api/portfolio", json={"weights": {"FOO": 1.0}})
    assert r.status_code == 422


def test_insight_cards_are_well_formed_and_unique():
    body = strict_json(client.get("/api/insights"))
    cards = body["cards"]
    assert cards
    ids = [c["id"] for c in cards]
    assert len(ids) == len(set(ids))
    assert all(c["title"] and c["body"] and c["tone"] for c in cards)


# --- CORS ----------------------------------------------------------------


def _preflight(origin: str):
    return client.options(
        "/api/backtest",
        headers={"Origin": origin, "Access-Control-Request-Method": "POST"},
    )


@pytest.mark.parametrize(
    "origin",
    [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",  # a production `next start` on any spare port
        "http://127.0.0.1:5173",
        "https://quantexa-abc.vercel.app",
    ],
)
def test_cors_allows_local_dev_ports_and_vercel_previews(origin):
    """Pinning two hardcoded ports breaks the moment the dev server picks another one."""
    assert _preflight(origin).headers.get("access-control-allow-origin") == origin


@pytest.mark.parametrize(
    "origin",
    [
        "https://evil.example.com",
        "http://localhost.evil.com",
        "https://quantexa-abc.vercel.app.evil.com",
    ],
)
def test_cors_rejects_other_origins(origin):
    assert "access-control-allow-origin" not in _preflight(origin).headers
