"""FastAPI application entry point."""

from __future__ import annotations

import logging
from typing import Any

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.api import analytics, backtest, insights, market, ai
from app.config import ASSETS, DISCLAIMER
from app.data.cache import read_manifest

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("quantexa")

DESCRIPTION = """
A multi-asset backtesting and research API for Gold (GC=F), Bitcoin (BTC-USD)
and NVIDIA (NVDA).

**Two rules the engine enforces everywhere**

* Signals are decided with data up to bar *t*; positions take effect at bar
  *t+1*. No weight is ever applied to the same bar's return.
* Annualisation is per asset. Bitcoin uses N=365, Gold and NVDA use N=252.

Every backtest can return a bias audit that re-derives its own signals from
truncated history, so the no-look-ahead claim is checked rather than asserted.
"""

app = FastAPI(
    title="Quantexa Backtesting API",
    description=DESCRIPTION,
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Any loopback port, plus Vercel preview deployments. Pinning a couple of ports
# breaks as soon as the dev server picks a different one (or a production build
# is served alongside it), and the anchors keep look-alikes such as
# "http://localhost.evil.com" from matching.
ALLOWED_ORIGIN_REGEX = r"^(https://[A-Za-z0-9-]+\.vercel\.app|http://(localhost|127\.0\.0\.1)(:\d+)?)$"

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=ALLOWED_ORIGIN_REGEX,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(market.router, prefix="/api")
app.include_router(analytics.router, prefix="/api")
app.include_router(backtest.router, prefix="/api")
app.include_router(insights.router, prefix="/api")
app.include_router(ai.router, prefix="/api")


@app.get("/api/health", tags=["meta"], summary="Liveness and snapshot status")
def health() -> dict[str, Any]:
    manifest = read_manifest()
    return {
        "status": "ok",
        "assets": list(ASSETS),
        "snapshot_generated_at": manifest.get("generated_at"),
        "snapshot": manifest.get("assets", {}),
        "disclaimer": DISCLAIMER,
    }


@app.get("/", include_in_schema=False)
def root() -> dict[str, Any]:
    return {
        "name": "Quantexa Backtesting API",
        "docs": "/docs",
        "health": "/api/health",
        "disclaimer": DISCLAIMER,
    }


@app.exception_handler(ValueError)
async def value_error_handler(request: Request, exc: ValueError) -> JSONResponse:
    """Surface bad strategy/parameter input as 422 rather than a 500."""
    log.warning("ValueError on %s: %s", request.url.path, exc)
    return JSONResponse(status_code=422, content={"detail": str(exc)})


@app.exception_handler(KeyError)
async def key_error_handler(request: Request, exc: KeyError) -> JSONResponse:
    log.warning("KeyError on %s: %s", request.url.path, exc)
    return JSONResponse(status_code=422, content={"detail": str(exc).strip("'\"")})
