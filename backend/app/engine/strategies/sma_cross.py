"""SMA crossover: long while the fast average sits above the slow one."""

from __future__ import annotations

import numpy as np
import pandas as pd

from app.engine.strategies.base import Strategy, register
from app.quant.indicators import sma


@register
class SmaCross(Strategy):
    name = "sma_cross"
    label = "SMA Crossover"
    param_spec = {"short_window": (5, 50, 20), "long_window": (50, 200, 100)}

    def check_params(self) -> None:
        short, long = self.params["short_window"], self.params["long_window"]
        if short >= long:
            raise ValueError(
                f"short_window ({short}) must be smaller than long_window ({long}); "
                "otherwise the 'fast' average is the slower one and the signal inverts."
            )

    def indicators(self, prices: pd.DataFrame) -> pd.DataFrame:
        close = prices["close"]
        short = sma(close, int(self.params["short_window"]))
        long = sma(close, int(self.params["long_window"]))
        return pd.DataFrame({"sma_short": short, "sma_long": long, "spread": short - long})

    def signal(self, prices: pd.DataFrame) -> pd.Series:
        panel = self.indicators(prices)
        raw = np.sign(panel["spread"])
        raw = raw.where(panel[["sma_short", "sma_long"]].notna().all(axis=1))
        return self._clip(raw)

    def rule_text(self, row: pd.Series, signal: float) -> str:
        s, l = row.get("sma_short"), row.get("sma_long")
        if pd.isna(s) or pd.isna(l):
            return "Warm-up: not enough bars for both moving averages yet."
        side = "above" if s > l else "below"
        stance = {1.0: "long", -1.0: "short", 0.0: "flat"}.get(float(signal), f"{signal:.2f}")
        return (
            f"SMA({int(self.params['short_window'])}) = {s:,.2f} is {side} "
            f"SMA({int(self.params['long_window'])}) = {l:,.2f}, so the target is {stance}."
        )
