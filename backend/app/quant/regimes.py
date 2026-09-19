"""Market regime labelling.

Trend:      bull when close > SMA(200), bear otherwise.
Volatility: high when 30-bar volatility exceeds its **expanding** median.

The expanding median matters. Taking the median of the whole sample and
labelling history against it is look-ahead: in 2019 nobody knew what the median
volatility of 2018-2026 would turn out to be. The expanding median only ever
uses bars that had already happened.
"""

from __future__ import annotations

from typing import Any

import numpy as np
import pandas as pd

from app.quant import risk
from app.quant.indicators import rolling_volatility, simple_returns, sma

TREND_WINDOW = 200
VOL_WINDOW = 30

REGIME_LABELS = {
    ("bull", "low"): "Bull / Low vol",
    ("bull", "high"): "Bull / High vol",
    ("bear", "low"): "Bear / Low vol",
    ("bear", "high"): "Bear / High vol",
}

REGIME_COLORS = {
    "Bull / Low vol": "#16a34a",
    "Bull / High vol": "#65a30d",
    "Bear / Low vol": "#d97706",
    "Bear / High vol": "#dc2626",
}


def classify(
    prices: pd.DataFrame,
    periods_per_year: int = 252,
    trend_window: int = TREND_WINDOW,
    vol_window: int = VOL_WINDOW,
    min_history: int = 60,
) -> pd.DataFrame:
    """Per-bar regime labels using only trailing information."""
    close = prices["close"].astype("float64")
    rets = simple_returns(close)

    trend_ma = sma(close, trend_window)
    trend = pd.Series(
        np.where(close > trend_ma, "bull", "bear"), index=close.index, dtype="object"
    ).where(trend_ma.notna())

    vol = rolling_volatility(rets, vol_window, periods_per_year)
    # Expanding median: at bar t, the median of every vol reading up to t.
    vol_median = vol.expanding(min_periods=min_history).median()
    vol_state = pd.Series(
        np.where(vol > vol_median, "high", "low"), index=close.index, dtype="object"
    ).where(vol.notna() & vol_median.notna())

    label = pd.Series(
        [
            REGIME_LABELS.get((t, v)) if isinstance(t, str) and isinstance(v, str) else None
            for t, v in zip(trend, vol_state)
        ],
        index=close.index,
        dtype="object",
    )

    return pd.DataFrame(
        {
            "close": close,
            "trend_ma": trend_ma,
            "trend": trend,
            "volatility": vol,
            "vol_median": vol_median,
            "vol_state": vol_state,
            "regime": label,
        }
    )


def ribbon(panel: pd.DataFrame) -> list[dict[str, Any]]:
    """Contiguous regime runs, ready to draw as bands under the price chart."""
    segments: list[dict[str, Any]] = []
    current: str | None = None
    start: pd.Timestamp | None = None
    prev: pd.Timestamp | None = None

    for date, label in panel["regime"].items():
        value = label if isinstance(label, str) else None
        if value != current:
            if current is not None and start is not None:
                segments.append(
                    {
                        "regime": current,
                        "color": REGIME_COLORS.get(current, "#64748b"),
                        "start": start.strftime("%Y-%m-%d"),
                        "end": prev.strftime("%Y-%m-%d"),
                    }
                )
            current, start = value, date
        prev = date

    if current is not None and start is not None and prev is not None:
        segments.append(
            {
                "regime": current,
                "color": REGIME_COLORS.get(current, "#64748b"),
                "start": start.strftime("%Y-%m-%d"),
                "end": prev.strftime("%Y-%m-%d"),
            }
        )
    return segments


def stats_by_regime(
    panel: pd.DataFrame,
    strategy_returns: pd.Series | None,
    benchmark_returns: pd.Series,
    periods_per_year: int,
) -> list[dict[str, Any]]:
    """Strategy versus buy-and-hold inside each regime."""
    rows: list[dict[str, Any]] = []
    labels = panel["regime"]

    for label in [v for v in REGIME_LABELS.values()]:
        mask = labels == label
        bars = int(mask.sum())
        if bars == 0:
            continue
        bench = benchmark_returns[mask.reindex(benchmark_returns.index, fill_value=False)]
        row: dict[str, Any] = {
            "regime": label,
            "color": REGIME_COLORS.get(label, "#64748b"),
            "bars": bars,
            "share": float(bars / len(labels.dropna())) if labels.notna().any() else 0.0,
            "benchmark_mean_return": float(bench.mean()) if len(bench) else float("nan"),
            "benchmark_annualised": float(bench.mean() * periods_per_year) if len(bench) else float("nan"),
            "benchmark_volatility": float(bench.std(ddof=1) * np.sqrt(periods_per_year)) if len(bench) > 1 else float("nan"),
            "benchmark_sharpe": risk.sharpe(bench, periods_per_year) if len(bench) > 2 else float("nan"),
        }
        if strategy_returns is not None:
            strat = strategy_returns[mask.reindex(strategy_returns.index, fill_value=False)]
            row.update(
                {
                    "strategy_mean_return": float(strat.mean()) if len(strat) else float("nan"),
                    "strategy_annualised": float(strat.mean() * periods_per_year) if len(strat) else float("nan"),
                    "strategy_volatility": float(strat.std(ddof=1) * np.sqrt(periods_per_year)) if len(strat) > 1 else float("nan"),
                    "strategy_sharpe": risk.sharpe(strat, periods_per_year) if len(strat) > 2 else float("nan"),
                    "strategy_win_rate": float((strat > 0).mean()) if len(strat) else float("nan"),
                }
            )
        rows.append(row)
    return rows


def hmm_regimes(
    prices: pd.DataFrame,
    n_states: int = 3,
    periods_per_year: int = 252,
    seed: int = 0,
) -> dict[str, Any]:
    """Hidden Markov Model regimes (exploratory).

    Fitted on the whole sample, which makes the labels *descriptive, not
    tradable*: a state assigned to 2019 used 2026 data to decide where the
    state boundaries sit. It is shown as a lens on history, and the response
    says so explicitly. It never feeds a backtest.
    """
    try:
        from hmmlearn.hmm import GaussianHMM
    except ImportError:  # pragma: no cover
        return {"available": False, "reason": "hmmlearn is not installed"}

    close = prices["close"].astype("float64")
    rets = simple_returns(close)
    vol = rolling_volatility(rets, 20, periods_per_year)
    features = pd.concat([rets.rename("r"), vol.rename("v")], axis=1).dropna()
    if len(features) < 200:
        return {"available": False, "reason": "not enough history to fit an HMM"}

    X = features.to_numpy()
    model = GaussianHMM(
        n_components=int(n_states),
        covariance_type="full",
        n_iter=200,
        random_state=seed,
    )
    try:
        model.fit(X)
        states = model.predict(X)
    except Exception as exc:  # pragma: no cover - numerical failure
        return {"available": False, "reason": f"HMM did not converge: {exc}"}

    series = pd.Series(states, index=features.index)

    # Order states by mean return so state numbering is stable and readable.
    means = {int(s): float(features.loc[series == s, "r"].mean()) for s in np.unique(states)}
    order = sorted(means, key=lambda s: means[s])
    rank = {s: i for i, s in enumerate(order)}
    names = (
        {0: "Risk-off", 1: "Neutral", 2: "Risk-on"}
        if n_states == 3
        else {i: f"State {i + 1}" for i in range(n_states)}
    )

    labelled = series.map(lambda s: names.get(rank[int(s)], f"State {rank[int(s)] + 1}"))

    summary = []
    for state in order:
        mask = series == state
        r = features.loc[mask, "r"]
        summary.append(
            {
                "state": names.get(rank[state], f"State {rank[state] + 1}"),
                "bars": int(mask.sum()),
                "share": float(mask.mean()),
                "mean_return_annualised": float(r.mean() * periods_per_year),
                "volatility_annualised": float(r.std(ddof=1) * np.sqrt(periods_per_year)),
                "sharpe": risk.sharpe(r, periods_per_year),
            }
        )

    panel = pd.DataFrame({"regime": labelled})
    return {
        "available": True,
        "n_states": int(n_states),
        "in_sample": True,
        "caveat": (
            "Fitted on the full sample, so these labels are descriptive rather than "
            "tradable. A state shown in 2019 was assigned with knowledge of later data. "
            "The rule-based regimes above are the causal ones."
        ),
        "segments": ribbon(panel),
        "states": summary,
    }
