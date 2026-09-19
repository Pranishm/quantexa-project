"""EMA trend filter: long while price holds above its exponential average."""

from __future__ import annotations

import numpy as np
import pandas as pd

from app.engine.strategies.base import Strategy, register
from app.quant.indicators import ema


@register
class EmaTrend(Strategy):
    name = "ema_trend"
    label = "EMA Trend"
    param_spec = {"span": (10, 200, 50)}

    def indicators(self, prices: pd.DataFrame) -> pd.DataFrame:
        close = prices["close"]
        line = ema(close, int(self.params["span"]))
        return pd.DataFrame({"ema": line, "close": close, "gap_pct": (close / line - 1.0) * 100.0})

    def signal(self, prices: pd.DataFrame) -> pd.Series:
        panel = self.indicators(prices)
        raw = np.sign(panel["close"] - panel["ema"])
        raw = raw.where(panel["ema"].notna())
        return self._clip(raw)

    def rule_text(self, row: pd.Series, signal: float) -> str:
        e, c = row.get("ema"), row.get("close")
        if pd.isna(e):
            return "Warm-up: the EMA has not accumulated enough bars yet."
        side = "above" if c > e else "below"
        stance = {1.0: "long", -1.0: "short", 0.0: "flat"}.get(float(signal), f"{signal:.2f}")
        return (
            f"Close {c:,.2f} is {side} EMA({int(self.params['span'])}) = {e:,.2f} "
            f"({row.get('gap_pct', float('nan')):+.2f}%), so the target is {stance}."
        )
