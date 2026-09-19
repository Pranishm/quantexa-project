from __future__ import annotations

import numpy as np
import pandas as pd
import pytest


def make_frame(closes, start: str = "2020-01-01") -> pd.DataFrame:
    closes = np.asarray(closes, dtype="float64")
    idx = pd.bdate_range(start, periods=len(closes))
    df = pd.DataFrame(
        {"open": closes, "high": closes, "low": closes, "close": closes, "volume": 0.0},
        index=idx,
    )
    df.index.name = "date"
    return df


def random_walk(n: int = 600, seed: int = 0, annual_vol: float = 0.25, drift: float = 0.0) -> pd.DataFrame:
    rng = np.random.default_rng(seed)
    sigma = annual_vol / np.sqrt(252)
    steps = rng.normal(drift / 252, sigma, n)
    return make_frame(100.0 * np.exp(np.cumsum(steps)))


@pytest.fixture
def frame_factory():
    return make_frame


@pytest.fixture
def walk():
    return random_walk
