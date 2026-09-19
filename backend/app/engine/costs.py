"""Transaction costs in basis points.

    cost_t = |position_t - position_(t-1)| * notional * (fee + slippage) / 10_000

Charged on the *execution* bar: the bar where the new position first earns a
return. Charging on the signal bar (one bar early) is a small but real timing
mismatch found in one of the surveyed repositories.
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np
import pandas as pd


@dataclass(frozen=True)
class CostModel:
    fee_bps: float = 0.0
    slippage_bps: float = 0.0

    @property
    def total_bps(self) -> float:
        return float(self.fee_bps) + float(self.slippage_bps)

    @property
    def rate(self) -> float:
        """Cost per unit of turnover, as a fraction."""
        return self.total_bps / 10_000.0

    def charge(self, turnover: pd.Series | np.ndarray | float, notional: float = 1.0):
        """Cost for a given amount of turnover."""
        if isinstance(turnover, (int, float)):
            return abs(float(turnover)) * notional * self.rate
        return np.abs(turnover) * notional * self.rate


def turnover_from_positions(position: pd.Series) -> pd.Series:
    """|change in position| per bar, counting the initial entry from flat."""
    t = position.astype("float64").diff().abs()
    if len(t):
        t.iloc[0] = abs(float(position.iloc[0]))
    return t.fillna(0.0)
