"""Time-series momentum: long when the trailing k-bar return is positive."""

from __future__ import annotations

import numpy as np
import pandas as pd

from app.engine.strategies.base import Strategy, register
from app.quant.indicators import momentum as mom


@register
class Momentum(Strategy):
    name = "momentum"
    label = "Momentum"
    param_spec = {"lookback": (20, 250, 90)}

    def indicators(self, prices: pd.DataFrame) -> pd.DataFrame:
        k = int(self.params["lookback"])
        value = mom(prices["close"], k)
        return pd.DataFrame({"momentum": value, "momentum_pct": value * 100.0})

    def signal(self, prices: pd.DataFrame) -> pd.Series:
        panel = self.indicators(prices)
        raw = np.sign(panel["momentum"])
        raw = raw.where(panel["momentum"].notna())
        return self._clip(raw)

    def rule_text(self, row: pd.Series, signal: float) -> str:
        m = row.get("momentum")
        if pd.isna(m):
            return "Warm-up: fewer bars than the momentum lookback."
        stance = {1.0: "long", -1.0: "short", 0.0: "flat"}.get(float(signal), f"{signal:.2f}")
        return (
            f"{int(self.params['lookback'])}-bar return is {m * 100:+.2f}%, "
            f"so the target is {stance}."
        )
