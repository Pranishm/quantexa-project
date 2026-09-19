"""Static configuration: asset registry, calendars, and filesystem paths.

The per-asset ``periods_per_year`` is the single most important number in this
file. Hardcoding 252 everywhere is one of the bugs found in the surveyed
repositories: Bitcoin trades every calendar day, so annualising its volatility
with sqrt(252) understates it by roughly 17%.
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parent.parent
CACHE_DIR = BACKEND_ROOT / "data_cache"
CACHE_DIR.mkdir(parents=True, exist_ok=True)

#: First date pulled for every asset.
DATA_START = "2018-01-01"

TRADING_DAYS_EXCHANGE = 252
TRADING_DAYS_CALENDAR = 365


@dataclass(frozen=True)
class Asset:
    symbol: str
    name: str
    asset_class: str
    periods_per_year: int
    description: str


ASSETS: dict[str, Asset] = {
    "GC=F": Asset(
        symbol="GC=F",
        name="Gold Futures",
        asset_class="commodity",
        periods_per_year=TRADING_DAYS_EXCHANGE,
        description="COMEX continuous front-month gold future, exchange calendar.",
    ),
    "BTC-USD": Asset(
        symbol="BTC-USD",
        name="Bitcoin",
        asset_class="crypto",
        periods_per_year=TRADING_DAYS_CALENDAR,
        description="Bitcoin in USD. Trades every calendar day, so N=365.",
    ),
    "NVDA": Asset(
        symbol="NVDA",
        name="NVIDIA Corporation",
        asset_class="equity",
        periods_per_year=TRADING_DAYS_EXCHANGE,
        description="US-listed equity on the NASDAQ calendar.",
    ),
}

DEFAULT_SYMBOLS: tuple[str, ...] = tuple(ASSETS)

#: Annualised risk-free rate used by Sharpe/Sortino unless overridden.
DEFAULT_RISK_FREE = 0.0

DISCLAIMER = "Historical results are not a guarantee of future returns."


def get_asset(symbol: str) -> Asset:
    try:
        return ASSETS[symbol]
    except KeyError:
        known = ", ".join(ASSETS)
        raise KeyError(f"Unknown symbol {symbol!r}. Known symbols: {known}") from None


def periods_per_year(symbol: str) -> int:
    """Annualisation factor N for a single asset."""
    return get_asset(symbol).periods_per_year


def blended_periods_per_year(symbols: list[str] | tuple[str, ...]) -> int:
    """Annualisation factor for a multi-asset basket.

    Cross-asset work runs on an inner join of calendars, so the effective
    number of bars per year is the *smallest* of the members: a Gold/BTC
    portfolio only trades on the days Gold trades.
    """
    if not symbols:
        return TRADING_DAYS_EXCHANGE
    return min(periods_per_year(s) for s in symbols)
