"""Pydantic request models and JSON sanitising.

NaN and Infinity are not valid JSON. pandas produces both routinely (warm-up
bars, zero-variance windows, undefined Calmar), so every response passes
through :func:`sanitize`, which turns them into ``null``. Without this the API
emits ``NaN`` literals that browsers refuse to parse.
"""

from __future__ import annotations

import math
from datetime import date
from typing import Any, Literal

import numpy as np
from pydantic import BaseModel, Field, field_validator, model_validator

from app.config import ASSETS, DEFAULT_SYMBOLS
from app.engine.sizing import METHODS as SIZING_METHODS

StrategyName = Literal["sma_cross", "ema_trend", "momentum", "mean_reversion"]
SizingMethod = Literal["fixed", "vol_target", "half_kelly"]
RebalanceRule = Literal["none", "monthly", "quarterly", "annual"]

#: Parameters each sizer actually reads. The sizers swallow unknown keywords, so a
#: typo would otherwise be dropped silently and the backtest would run on defaults.
SIZING_PARAM_KEYS: dict[str, frozenset[str]] = {
    "fixed": frozenset({"fraction"}),
    "vol_target": frozenset({"target_vol", "window", "max_weight"}),
    "half_kelly": frozenset({"window", "cap"}),
}


def sanitize(obj: Any) -> Any:
    """Recursively replace NaN/Inf with None and numpy scalars with Python ones."""
    if isinstance(obj, dict):
        return {k: sanitize(v) for k, v in obj.items()}
    if isinstance(obj, (list, tuple)):
        return [sanitize(v) for v in obj]
    if isinstance(obj, (np.floating, np.integer, np.bool_)):
        obj = obj.item()
    if isinstance(obj, float):
        return None if (math.isnan(obj) or math.isinf(obj)) else obj
    if isinstance(obj, (np.ndarray,)):
        return [sanitize(v) for v in obj.tolist()]
    return obj


def _check_symbol(value: str) -> str:
    if value not in ASSETS:
        raise ValueError(f"Unknown symbol {value!r}. Available: {', '.join(ASSETS)}")
    return value


class SymbolQuery(BaseModel):
    symbol: str

    @field_validator("symbol")
    @classmethod
    def valid(cls, v: str) -> str:
        return _check_symbol(v)


class DateWindow(BaseModel):
    start: date | None = Field(default=None, description="Inclusive first bar")
    end: date | None = Field(default=None, description="Inclusive last bar")


class BacktestRequest(DateWindow):
    symbol: str = Field(default="NVDA", description="Asset ticker")
    strategy: StrategyName = "sma_cross"
    params: dict[str, float] = Field(default_factory=dict)
    allow_short: bool = False

    initial_capital: float = Field(default=10_000.0, gt=0)
    fee_bps: float = Field(default=5.0, ge=0, le=500)
    slippage_bps: float = Field(default=2.0, ge=0, le=500)
    risk_free: float = Field(default=0.0, ge=-0.1, le=0.5)

    sizing: SizingMethod = "fixed"
    sizing_params: dict[str, float] = Field(default_factory=dict)

    include_monte_carlo: bool = True
    monte_carlo_paths: int = Field(default=1000, ge=50, le=5000)
    monte_carlo_block: int = Field(default=20, ge=1, le=250)
    include_bias_audit: bool = True
    bias_audit_samples: int = Field(default=40, ge=5, le=250)

    @field_validator("symbol")
    @classmethod
    def valid_symbol(cls, v: str) -> str:
        return _check_symbol(v)

    @field_validator("sizing")
    @classmethod
    def valid_sizing(cls, v: str) -> str:
        if v not in SIZING_METHODS:
            raise ValueError(f"Unknown sizing method {v!r}")
        return v

    @model_validator(mode="after")
    def valid_sizing_params(self) -> "BacktestRequest":
        allowed = SIZING_PARAM_KEYS[self.sizing]
        unknown = sorted(set(self.sizing_params) - allowed)
        if unknown:
            raise ValueError(
                f"Unknown sizing_params for sizing={self.sizing!r}: {', '.join(unknown)}. "
                f"Valid: {', '.join(sorted(allowed))}."
            )
        return self


class RobustnessRequest(DateWindow):
    symbol: str = "NVDA"
    strategy: StrategyName = "sma_cross"
    params: dict[str, float] = Field(default_factory=dict)
    allow_short: bool = False
    fee_bps: float = Field(default=5.0, ge=0, le=500)
    slippage_bps: float = Field(default=2.0, ge=0, le=500)
    initial_capital: float = Field(default=10_000.0, gt=0)
    grid: dict[str, list[float]] | None = None
    cost_levels: list[float] | None = None
    include_walk_forward: bool = True
    include_grid: bool = True
    include_cost_sweep: bool = True

    @field_validator("symbol")
    @classmethod
    def valid_symbol(cls, v: str) -> str:
        return _check_symbol(v)


class PortfolioRequest(DateWindow):
    weights: dict[str, float] = Field(
        default_factory=lambda: {s: 1.0 / len(DEFAULT_SYMBOLS) for s in DEFAULT_SYMBOLS}
    )
    rebalance: RebalanceRule = "none"
    initial_capital: float = Field(default=10_000.0, gt=0)
    fee_bps: float = Field(default=5.0, ge=0, le=500)
    slippage_bps: float = Field(default=2.0, ge=0, le=500)

    @field_validator("weights")
    @classmethod
    def valid_weights(cls, v: dict[str, float]) -> dict[str, float]:
        if not v:
            raise ValueError("Supply at least one weight")
        for symbol in v:
            _check_symbol(symbol)
        if sum(v.values()) <= 0:
            raise ValueError("Weights must sum to a positive number")
        return v


class ExplainRequest(BacktestRequest):
    """A backtest request plus the bar to explain."""

    at: date
