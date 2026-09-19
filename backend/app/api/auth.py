"""Authentication and Session Management API router."""

from __future__ import annotations

from typing import Any, Optional
from fastapi import APIRouter, Header, HTTPException, Request
from pydantic import BaseModel

from app.db.database import (
    authenticate_user,
    create_user_session,
    get_session_by_token,
    get_user_by_role,
    list_active_sessions,
    revoke_session,
)

router = APIRouter(prefix="/auth", tags=["auth"])


class LoginRequest(BaseModel):
    email: str
    password: str


class SplitSessionRequest(BaseModel):
    role: str  # "trader" or "admin"


class RegisterRequest(BaseModel):
    email: str
    password: str
    full_name: str
    role: Optional[str] = "trader"


@router.post("/login", summary="Sign in with credentials")
def login(req: LoginRequest, request: Request) -> dict[str, Any]:
    user = authenticate_user(req.email, req.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    ip = request.client.host if request.client else "127.0.0.1"
    ua = request.headers.get("user-agent", "Quantora Terminal")
    session = create_user_session(user, ip_address=ip, user_agent=ua)

    return {
        "status": "authenticated",
        "token": session["token"],
        "user": session["user"],
        "expires_at": session["expires_at"],
    }


@router.post("/split-session", summary="Instant 1-click station session dispatch")
def split_session(req: SplitSessionRequest, request: Request) -> dict[str, Any]:
    target_role = "admin" if req.role.lower() == "admin" else "trader"
    user = get_user_by_role(target_role)

    if not user:
        raise HTTPException(status_code=404, detail=f"No default account found for role {target_role}")

    ip = request.client.host if request.client else "127.0.0.1"
    ua = request.headers.get("user-agent", "Quantora Terminal / Instant Split Entry")
    session = create_user_session(user, ip_address=ip, user_agent=ua)

    return {
        "status": "authenticated",
        "token": session["token"],
        "user": session["user"],
        "expires_at": session["expires_at"],
        "station": "TRADING" if target_role == "trader" else "RESEARCH",
    }


@router.get("/me", summary="Validate and fetch active session")
def get_current_session(authorization: Optional[str] = Header(None)) -> dict[str, Any]:
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing Authorization header")

    token = authorization.replace("Bearer ", "").strip()
    session = get_session_by_token(token)
    if not session:
        raise HTTPException(status_code=401, detail="Session expired or invalid")

    return {
        "status": "valid",
        "session": session,
    }


@router.get("/sessions", summary="List all active terminal sessions (Security & Governance)")
def get_active_sessions() -> list[dict[str, Any]]:
    return list_active_sessions()


@router.post("/logout", summary="Deactivate current session")
def logout(authorization: Optional[str] = Header(None)) -> dict[str, Any]:
    if authorization:
        token = authorization.replace("Bearer ", "").strip()
        revoke_session(token)
    return {"status": "logged_out"}


@router.delete("/sessions/{token}", summary="Revoke an active session (Admin / Security)")
def delete_session(token: str) -> dict[str, Any]:
    success = revoke_session(token)
    return {"status": "revoked" if success else "not_found"}
