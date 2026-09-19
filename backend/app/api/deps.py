"""Shared helpers for the API routers."""

from __future__ import annotations

from datetime import date
from typing import Any

import pandas as pd
from fastapi import HTTPException

from app.config import ASSETS, DATA_START, get_asset, periods_per_year
from app.data.cache import load_prices


def window_prices(
    symbol: str,
    start: date | None = None,
    end: date | None = None,
    min_bars: int = 2,
) -> tuple[pd.DataFrame, dict[str, Any]]:
    """Load one asset, apply the date window, and describe the provenance."""
    # Check the registry before touching the loader: an unknown ticker is a 404,
    # not an outage, and must never reach the live data source.
    if symbol not in ASSETS:
        raise HTTPException(
            status_code=404,
            detail=f"Unknown symbol {symbol!r}. Available: {', '.join(ASSETS)}",
        )

    try:
        prices, report, source = load_prices(symbol)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=503, detail=f"Price data unavailable: {exc}") from exc

    if start is not None:
        prices = prices[prices.index >= pd.Timestamp(start)]
    if end is not None:
        prices = prices[prices.index <= pd.Timestamp(end)]

    if len(prices) < min_bars:
        raise HTTPException(
            status_code=422,
            detail=(
                f"Only {len(prices)} bars of {symbol} in the requested window; "
                f"at least {min_bars} are needed."
            ),
        )

    asset = get_asset(symbol)
    meta = {
        "symbol": symbol,
        "name": asset.name,
        "asset_class": asset.asset_class,
        "periods_per_year": periods_per_year(symbol),
        "source": source,
        "bars": int(len(prices)),
        "start": prices.index[0].strftime("%Y-%m-%d"),
        "end": prices.index[-1].strftime("%Y-%m-%d"),
        "validation": report.to_dict(),
        "data_start_setting": DATA_START,
    }
    return prices, meta
