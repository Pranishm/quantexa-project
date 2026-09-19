"""Strategy interface.

The contract every strategy signs:

    signal(prices).loc[t] may use prices.loc[:t] and nothing else.

The simulator then applies ``position_t = signal_(t-1)``. Strategies therefore
never need to shift anything themselves, and the bias audit can verify the
contract mechanically by recomputing on ``prices.iloc[:t+1]``.
"""

from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any, ClassVar

import numpy as np
import pandas as pd


class Strategy(ABC):
    name: ClassVar[str] = "base"
    label: ClassVar[str] = "Base"
    #: parameter name -> (min, max, default) for the UI and the robustness grid
    param_spec: ClassVar[dict[str, tuple[float, float, float]]] = {}

    def __init__(self, allow_short: bool = False, **params: Any) -> None:
        self.allow_short = bool(allow_short)

        # A misspelt parameter must fail loudly. Dropping it would quietly run a
        # backtest with the defaults, which is not the one the caller asked for.
        unknown = sorted(set(params) - set(self.param_spec))
        if unknown:
            valid = ", ".join(self.param_spec) or "none"
            raise ValueError(
                f"Unknown parameter(s) for {self.name}: {', '.join(unknown)}. Valid parameters: {valid}."
            )

        merged: dict[str, Any] = {k: v[2] for k, v in self.param_spec.items()}
        merged.update(params)
        self.params = {k: self._coerce(k, v, self.param_spec[k][2]) for k, v in merged.items()}
        self.check_params()

    @staticmethod
    def _coerce(name: str, value: Any, default: Any) -> Any:
        """Finite numbers only. Parameters whose default is an int are window lengths."""
        if isinstance(value, bool) or not isinstance(value, (int, float, np.integer, np.floating)):
            raise ValueError(f"{name} must be a number, got {value!r}.")
        value = float(value)
        if not np.isfinite(value):
            raise ValueError(f"{name} must be finite, got {value}.")
        if isinstance(default, int):
            if value < 1 or value != int(value):
                raise ValueError(f"{name} must be a whole number of at least 1, got {value:g}.")
            return int(value)
        return value

    def check_params(self) -> None:
        """Cross-parameter rules. Subclasses override and raise ValueError."""

    def __repr__(self) -> str:  # pragma: no cover - debugging aid
        inner = ", ".join(f"{k}={v}" for k, v in self.params.items())
        return f"{type(self).__name__}({inner}, allow_short={self.allow_short})"

    @property
    def descriptor(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "label": self.label,
            "params": dict(self.params),
            "allow_short": self.allow_short,
        }

    @abstractmethod
    def indicators(self, prices: pd.DataFrame) -> pd.DataFrame:
        """Backward-looking indicator panel aligned to `prices`."""

    @abstractmethod
    def signal(self, prices: pd.DataFrame) -> pd.Series:
        """Target position in [-1, 1] decided with data up to and including each bar."""

    @abstractmethod
    def rule_text(self, row: pd.Series, signal: float) -> str:
        """Plain-English description of why this bar produced this signal."""

    @property
    def warmup(self) -> int:
        """Bars required before the first usable signal."""
        numeric = [v for v in self.params.values() if isinstance(v, (int, float))]
        return int(max(numeric)) if numeric else 0

    def explain(self, prices: pd.DataFrame, timestamp: Any) -> dict[str, Any]:
        """Indicator values and the rule that fired at one bar."""
        ts = pd.Timestamp(timestamp)
        panel = self.indicators(prices)
        sig = self.signal(prices)
        if ts not in panel.index:
            raise KeyError(f"{ts.date()} is not a bar in this price series")
        row = panel.loc[ts]
        value = float(sig.loc[ts])
        return {
            "date": ts.strftime("%Y-%m-%d"),
            "close": float(prices.loc[ts, "close"]),
            "signal": value,
            "rule": self.rule_text(row, value),
            "indicators": {
                k: (None if pd.isna(v) else float(v)) for k, v in row.items()
            },
            "strategy": self.descriptor,
        }

    # -- helpers ---------------------------------------------------------
    def _clip(self, raw: pd.Series) -> pd.Series:
        """Apply the long-only constraint and clamp into [-1, 1]."""
        out = raw.astype("float64").fillna(0.0)
        if not self.allow_short:
            out = out.clip(lower=0.0)
        return out.clip(-1.0, 1.0)


_REGISTRY: dict[str, type[Strategy]] = {}


def register(cls: type[Strategy]) -> type[Strategy]:
    _REGISTRY[cls.name] = cls
    return cls


def build_strategy(name: str, params: dict[str, Any] | None = None, allow_short: bool = False) -> Strategy:
    try:
        cls = _REGISTRY[name]
    except KeyError:
        known = ", ".join(sorted(_REGISTRY))
        raise KeyError(f"Unknown strategy {name!r}. Available: {known}") from None
    return cls(allow_short=allow_short, **(params or {}))


def available_strategies() -> list[dict[str, Any]]:
    out = []
    for name, cls in sorted(_REGISTRY.items()):
        out.append(
            {
                "name": name,
                "label": cls.label,
                "params": {
                    k: {"min": v[0], "max": v[1], "default": v[2]}
                    for k, v in cls.param_spec.items()
                },
            }
        )
    return out
