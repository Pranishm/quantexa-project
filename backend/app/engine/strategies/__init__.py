"""Strategy package. Importing it registers every built-in strategy."""

from app.engine.strategies.base import (  # noqa: F401
    Strategy,
    available_strategies,
    build_strategy,
    register,
)
from app.engine.strategies.ema_trend import EmaTrend  # noqa: F401
from app.engine.strategies.mean_reversion import MeanReversion  # noqa: F401
from app.engine.strategies.momentum import Momentum  # noqa: F401
from app.engine.strategies.sma_cross import SmaCross  # noqa: F401

__all__ = [
    "Strategy",
    "SmaCross",
    "EmaTrend",
    "Momentum",
    "MeanReversion",
    "build_strategy",
    "available_strategies",
    "register",
]
