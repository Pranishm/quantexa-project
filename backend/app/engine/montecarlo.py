"""Block-bootstrap Monte Carlo bands.

Resampling individual days destroys autocorrelation and volatility clustering,
which flatters the strategy. Resampling *blocks* of consecutive days keeps the
local structure intact, so the band is a fairer picture of what luck could have
done with the same return process.
"""

from __future__ import annotations

from typing import Any

import numpy as np
import pandas as pd


def block_bootstrap_paths(
    returns: pd.Series,
    n_paths: int = 1000,
    block_size: int = 20,
    initial_capital: float = 10_000.0,
    seed: int = 0,
) -> np.ndarray:
    """Return an (n_paths, n_bars) array of resampled equity curves."""
    r = pd.Series(returns).astype("float64").replace([np.inf, -np.inf], np.nan).fillna(0.0)
    values = r.to_numpy()
    n = len(values)
    if n == 0:
        return np.zeros((0, 0))

    block = max(1, min(int(block_size), n))
    n_blocks = int(np.ceil(n / block))
    rng = np.random.default_rng(seed)

    starts = rng.integers(0, max(n - block + 1, 1), size=(n_paths, n_blocks))
    offsets = np.arange(block)
    idx = (starts[:, :, None] + offsets[None, None, :]).reshape(n_paths, -1)[:, :n]
    idx = np.clip(idx, 0, n - 1)

    sampled = values[idx]
    return initial_capital * np.cumprod(1.0 + sampled, axis=1)


def monte_carlo_band(
    returns: pd.Series,
    n_paths: int = 1000,
    block_size: int = 20,
    initial_capital: float = 10_000.0,
    lower: float = 5.0,
    upper: float = 95.0,
    seed: int = 0,
) -> dict[str, Any]:
    """Percentile envelope plus a distribution of terminal outcomes."""
    paths = block_bootstrap_paths(returns, n_paths, block_size, initial_capital, seed)
    if paths.size == 0:
        return {"available": False, "reason": "no returns to resample"}

    finals = paths[:, -1]
    actual_final = float(initial_capital * np.prod(1.0 + pd.Series(returns).fillna(0.0).to_numpy()))

    index = pd.Series(returns).index
    return {
        "available": True,
        "paths": int(n_paths),
        "block_size": int(block_size),
        "dates": [pd.Timestamp(d).strftime("%Y-%m-%d") for d in index],
        "lower": [float(v) for v in np.percentile(paths, lower, axis=0)],
        "median": [float(v) for v in np.percentile(paths, 50, axis=0)],
        "upper": [float(v) for v in np.percentile(paths, upper, axis=0)],
        "lower_pct": lower,
        "upper_pct": upper,
        "final_equity": {
            "actual": actual_final,
            "p5": float(np.percentile(finals, 5)),
            "p25": float(np.percentile(finals, 25)),
            "median": float(np.percentile(finals, 50)),
            "p75": float(np.percentile(finals, 75)),
            "p95": float(np.percentile(finals, 95)),
            "probability_of_loss": float((finals < initial_capital).mean()),
        },
        "note": (
            "Blocks of consecutive bars are resampled with replacement, so volatility "
            "clustering survives the shuffle. The band shows the range of outcomes the "
            "same return process could plausibly have produced."
        ),
    }
