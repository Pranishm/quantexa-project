"""Z-score mean reversion.

Stateful by design: enter long when the z-score drops below -entry_z, hold
until it climbs back to exit_z. The state machine walks the bars in order and
each step reads only that bar's z-score, so it stays causal.
"""

from __future__ import annotations

import numpy as np
import pandas as pd

from app.engine.strategies.base import Strategy, register
from app.quant.indicators import zscore


@register
class MeanReversion(Strategy):
    name = "mean_reversion"
    label = "Mean Reversion (z-score)"
    param_spec = {"window": (10, 120, 20), "entry_z": (1.0, 4.0, 2.0), "exit_z": (0.0, 2.0, 0.0)}

    def indicators(self, prices: pd.DataFrame) -> pd.DataFrame:
        window = int(self.params["window"])
        z = zscore(prices["close"], window)
        return pd.DataFrame({"zscore": z})

    def signal(self, prices: pd.DataFrame) -> pd.Series:
        z = self.indicators(prices)["zscore"]
        entry = float(self.params["entry_z"])
        exit_level = float(self.params["exit_z"])

        out = np.zeros(len(z), dtype="float64")
        position = 0.0
        values = z.to_numpy()
        for i in range(len(values)):
            zt = values[i]
            if np.isnan(zt):
                out[i] = 0.0
                position = 0.0
                continue
            if position == 0.0:
                if zt < -entry:
                    position = 1.0
                elif self.allow_short and zt > entry:
                    position = -1.0
            elif position > 0.0 and zt >= exit_level:
                position = 0.0
            elif position < 0.0 and zt <= -exit_level:
                position = 0.0
            out[i] = position
        return self._clip(pd.Series(out, index=z.index))

    def rule_text(self, row: pd.Series, signal: float) -> str:
        z = row.get("zscore")
        if pd.isna(z):
            return "Warm-up: the z-score window is not full yet."
        entry = float(self.params["entry_z"])
        exit_level = float(self.params["exit_z"])
        if signal > 0:
            return f"z = {z:+.2f}; holding long (entry below -{entry:.2f}, exit at {exit_level:+.2f})."
        if signal < 0:
            return f"z = {z:+.2f}; holding short (entry above +{entry:.2f}, exit at {-exit_level:+.2f})."
        return f"z = {z:+.2f}; flat, no entry threshold breached."
