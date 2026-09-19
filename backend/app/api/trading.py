"""Paper Trading, Portfolio and Execution database API router."""

from __future__ import annotations

from typing import Any, Optional
from fastapi import APIRouter, Header, HTTPException
from pydantic import BaseModel, Field

from app.db.database import (
    get_session_by_token,
    get_user_portfolio,
    list_audit_logs,
    list_user_trades,
    record_trade,
)

router = APIRouter(prefix="/trading", tags=["trading"])


class OrderRequest(BaseModel):
    symbol: str
    side: str = Field(..., pattern="^(BUY|SELL|buy|sell)$")
    quantity: float = Field(..., gt=0)
    price: float = Field(..., gt=0)
    order_type: str = Field(default="MARKET", pattern="^(MARKET|LIMIT|market|limit)$")


def resolve_user_id(authorization: Optional[str]) -> str:
    if authorization:
        token = authorization.replace("Bearer ", "").strip()
        session = get_session_by_token(token)
        if session:
            return session["user_id"]
    # Fallback to default desk trader
    return "usr_trader_01"


@router.get("/portfolio", summary="Get database-backed user portfolio and equity")
def get_portfolio(authorization: Optional[str] = Header(None)) -> dict[str, Any]:
    user_id = resolve_user_id(authorization)
    return get_user_portfolio(user_id)


@router.post("/order", summary="Execute paper trade order and persist in database")
def create_order(req: OrderRequest, authorization: Optional[str] = Header(None)) -> dict[str, Any]:
    user_id = resolve_user_id(authorization)
    try:
        trade = record_trade(
            user_id=user_id,
            symbol=req.symbol.upper(),
            side=req.side.upper(),
            quantity=req.quantity,
            price=req.price,
            order_type=req.order_type.upper(),
        )
        return {
            "status": "executed",
            "trade": trade,
        }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/orders", summary="Get trade execution history from database")
def get_trades(authorization: Optional[str] = Header(None)) -> list[dict[str, Any]]:
    user_id = resolve_user_id(authorization)
    return list_user_trades(user_id)


@router.get("/activity", summary="Get system governance and trading audit logs")
def get_activity() -> list[dict[str, Any]]:
    return list_audit_logs()
