"""Market data endpoints."""

from __future__ import annotations

from datetime import date
from typing import Any

from fastapi import APIRouter, HTTPException, Query

from app.api.deps import window_prices
from app.config import ASSETS, DEFAULT_SYMBOLS, DISCLAIMER
from app.data.align import coverage
from app.data.cache import load_many, read_manifest
from app.engine.strategies import available_strategies
from app.schemas import sanitize

router = APIRouter(tags=["market"])


@router.get("/assets", summary="List the tradable universe")
def get_assets() -> dict[str, Any]:
    manifest = read_manifest()
    items = []
    for symbol, asset in ASSETS.items():
        entry = manifest.get("assets", {}).get(symbol, {})
        items.append(
            {
                "symbol": asset.symbol,
                "name": asset.name,
                "asset_class": asset.asset_class,
                "periods_per_year": asset.periods_per_year,
                "description": asset.description,
                "cached_rows": entry.get("rows"),
                "cached_start": entry.get("start"),
                "cached_end": entry.get("end"),
            }
        )
    return sanitize(
        {
            "assets": items,
            "snapshot_generated_at": manifest.get("generated_at"),
            "strategies": available_strategies(),
            "disclaimer": DISCLAIMER,
        }
    )


@router.get("/prices/{symbol:path}", summary="Daily OHLCV for one asset")
def get_prices(
    symbol: str,
    start: date | None = None,
    end: date | None = None,
    limit: int | None = Query(default=None, ge=1, le=10_000),
) -> dict[str, Any]:
    prices, meta = window_prices(symbol, start, end)
    if limit:
        prices = prices.iloc[-limit:]
    return sanitize(
        {
            "meta": meta,
            "candles": [
                {
                    "date": idx.strftime("%Y-%m-%d"),
                    "open": float(row.open),
                    "high": float(row.high),
                    "low": float(row.low),
                    "close": float(row.close),
                    "volume": float(row.volume) if row.volume == row.volume else None,
                }
                for idx, row in prices.iterrows()
            ],
            "disclaimer": DISCLAIMER,
        }
    )


@router.get("/coverage", summary="How much data survives the cross-asset join")
def get_coverage(symbols: list[str] = Query(default=list(DEFAULT_SYMBOLS))) -> dict[str, Any]:
    unknown = [s for s in symbols if s not in ASSETS]
    if unknown:
        raise HTTPException(status_code=422, detail=f"Unknown symbols: {', '.join(unknown)}")
    frames = load_many(symbols)
    return sanitize(
        {
            "coverage": coverage(frames),
            "note": (
                "Cross-asset analysis uses an inner join on common dates. Bitcoin trades "
                "on weekends, so its weekend bars are dropped when it is paired with "
                "Gold or NVDA rather than forward-filling the others."
            ),
        }
    )
