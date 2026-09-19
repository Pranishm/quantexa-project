"""SQLite database layer for Quantora: Accounts, Sessions, Trades, Portfolio, and Audit Logs."""

from __future__ import annotations

import hashlib
import os
import sqlite3
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Optional

DB_DIR = Path(__file__).resolve().parent.parent.parent / "data_cache"
DB_DIR.mkdir(parents=True, exist_ok=True)
DB_PATH = DB_DIR / "quantora.db"


def get_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(str(DB_PATH), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn


def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode("utf-8")).hexdigest()


def init_db() -> None:
    conn = get_connection()
    cursor = conn.cursor()

    # 1. Users table
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            full_name TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'trader',
            tier TEXT NOT NULL DEFAULT 'Pro',
            virtual_balance REAL NOT NULL DEFAULT 100000.00,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )
        """
    )

    # 2. Login Sessions table
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            email TEXT NOT NULL,
            full_name TEXT NOT NULL,
            role TEXT NOT NULL,
            tier TEXT NOT NULL,
            ip_address TEXT DEFAULT '127.0.0.1',
            user_agent TEXT DEFAULT 'Quantora Terminal/2026',
            created_at TEXT NOT NULL,
            expires_at TEXT NOT NULL,
            is_active INTEGER NOT NULL DEFAULT 1,
            FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
        )
        """
    )

    # 3. Paper Trading Orders table
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS trades (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            symbol TEXT NOT NULL,
            side TEXT NOT NULL, -- BUY or SELL
            order_type TEXT NOT NULL DEFAULT 'MARKET', -- MARKET or LIMIT
            quantity REAL NOT NULL,
            price REAL NOT NULL,
            total_value REAL NOT NULL,
            status TEXT NOT NULL DEFAULT 'EXECUTED',
            executed_at TEXT NOT NULL,
            pnl REAL DEFAULT 0.0,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
        """
    )

    # 4. Portfolio Holdings table
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS portfolio (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            symbol TEXT NOT NULL,
            quantity REAL NOT NULL,
            avg_entry_price REAL NOT NULL,
            current_value REAL NOT NULL,
            unrealized_pnl REAL NOT NULL DEFAULT 0.0,
            updated_at TEXT NOT NULL,
            UNIQUE(user_id, symbol),
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
        """
    )

    # 5. Governance & Activity Audit Logs table
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS audit_logs (
            id TEXT PRIMARY KEY,
            user_id TEXT,
            action TEXT NOT NULL,
            details TEXT NOT NULL,
            ip_address TEXT DEFAULT '127.0.0.1',
            timestamp TEXT NOT NULL
        )
        """
    )

    conn.commit()

    # Seed Default Quant Accounts if not present
    now = datetime.now(timezone.utc).isoformat()
    default_accounts = [
        (
            "usr_trader_01",
            "trader.desk@quantora.io",
            hash_password("trader123"),
            "Alexander Vance (Desk Trader)",
            "trader",
            "Pro",
            100000.00,
            now,
            now,
        ),
        (
            "usr_admin_01",
            "admin.gov@quantora.io",
            hash_password("admin123"),
            "System Administrator (Governance Desk)",
            "admin",
            "Enterprise",
            500000.00,
            now,
            now,
        ),
        (
            "usr_research_01",
            "dr.vance@quantora.ai",
            hash_password("research123"),
            "Dr. Alexander Vance (Lead Researcher)",
            "pro_researcher",
            "Pro",
            250000.00,
            now,
            now,
        ),
    ]

    for acc in default_accounts:
        cursor.execute(
            """
            INSERT OR IGNORE INTO users (id, email, password_hash, full_name, role, tier, virtual_balance, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            acc,
        )

    # Seed initial portfolio holdings for trader
    initial_holdings = [
        ("hold_btc_01", "usr_trader_01", "BTC-USD", 0.45, 96500.0, 0.45 * 104280.0, (104280.0 - 96500.0) * 0.45, now),
        ("hold_nvda_01", "usr_trader_01", "NVDA", 120.0, 162.5, 120.0 * 178.25, (178.25 - 162.5) * 120.0, now),
        ("hold_gold_01", "usr_trader_01", "GC=F", 8.0, 2610.0, 8.0 * 2672.4, (2672.4 - 2610.0) * 8.0, now),
    ]
    for h in initial_holdings:
        cursor.execute(
            """
            INSERT OR IGNORE INTO portfolio (id, user_id, symbol, quantity, avg_entry_price, current_value, unrealized_pnl, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            h,
        )

    # Seed initial trade executions
    initial_trades = [
        ("trd_01", "usr_trader_01", "BTC-USD", "BUY", "MARKET", 0.45, 96500.0, 43425.0, "EXECUTED", now, 3501.0),
        ("trd_02", "usr_trader_01", "NVDA", "BUY", "LIMIT", 120.0, 162.5, 19500.0, "EXECUTED", now, 1890.0),
        ("trd_03", "usr_trader_01", "GC=F", "BUY", "MARKET", 8.0, 2610.0, 20880.0, "EXECUTED", now, 499.2),
    ]
    for t in initial_trades:
        cursor.execute(
            """
            INSERT OR IGNORE INTO trades (id, user_id, symbol, side, order_type, quantity, price, total_value, status, executed_at, pnl)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            t,
        )

    conn.commit()
    conn.close()


# ── AUTH & SESSION HELPERS ───────────────────────────────────────────────────


def authenticate_user(email: str, password: str) -> Optional[dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    pwd_hash = hash_password(password)
    cursor.execute(
        "SELECT id, email, full_name, role, tier, virtual_balance, created_at FROM users WHERE lower(email) = lower(?) AND password_hash = ?",
        (email.strip(), pwd_hash),
    )
    row = cursor.fetchone()
    conn.close()
    if row:
        return dict(row)
    return None


def get_user_by_role(role: str) -> Optional[dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, email, full_name, role, tier, virtual_balance, created_at FROM users WHERE role = ? ORDER BY id ASC LIMIT 1",
        (role,),
    )
    row = cursor.fetchone()
    conn.close()
    if row:
        return dict(row)
    return None


def create_user_session(
    user: dict[str, Any], ip_address: str = "127.0.0.1", user_agent: str = "Quantora Terminal/2026"
) -> dict[str, Any]:
    conn = get_connection()
    cursor = conn.cursor()
    token = f"sess_{uuid.uuid4().hex}"
    now = datetime.now(timezone.utc).isoformat()
    # 30 day expiration
    expires_at = datetime.now(timezone.utc).replace(year=datetime.now().year + 1).isoformat()

    cursor.execute(
        """
        INSERT INTO sessions (token, user_id, email, full_name, role, tier, ip_address, user_agent, created_at, expires_at, is_active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
        """,
        (
            token,
            user["id"],
            user["email"],
            user["full_name"],
            user["role"],
            user["tier"],
            ip_address,
            user_agent,
            now,
            expires_at,
        ),
    )

    # Log login audit
    cursor.execute(
        """
        INSERT INTO audit_logs (id, user_id, action, details, ip_address, timestamp)
        VALUES (?, ?, ?, ?, ?, ?)
        """,
        (
            f"aud_{uuid.uuid4().hex[:12]}",
            user["id"],
            "LOGIN_SESSION_CREATED",
            f"Session initiated for {user['email']} (Role: {user['role']})",
            ip_address,
            now,
        ),
    )

    conn.commit()
    conn.close()

    return {
        "token": token,
        "user": user,
        "expires_at": expires_at,
        "created_at": now,
    }


def get_session_by_token(token: str) -> Optional[dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        SELECT s.token, s.user_id, s.email, s.full_name, s.role, s.tier, s.ip_address, s.user_agent, s.created_at, s.expires_at, s.is_active,
               u.virtual_balance
        FROM sessions s
        JOIN users u ON s.user_id = u.id
        WHERE s.token = ? AND s.is_active = 1
        """,
        (token,),
    )
    row = cursor.fetchone()
    conn.close()
    if row:
        return dict(row)
    return None


def list_active_sessions() -> list[dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        SELECT token, user_id, email, full_name, role, tier, ip_address, user_agent, created_at, expires_at
        FROM sessions
        WHERE is_active = 1
        ORDER BY created_at DESC
        LIMIT 50
        """
    )
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]


def revoke_session(token: str) -> bool:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE sessions SET is_active = 0 WHERE token = ?", (token,))
    affected = cursor.rowcount > 0
    conn.commit()
    conn.close()
    return affected


# ── TRADING & PORTFOLIO HELPERS ──────────────────────────────────────────────


def get_user_portfolio(user_id: str) -> dict[str, Any]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT virtual_balance FROM users WHERE id = ?", (user_id,))
    u_row = cursor.fetchone()
    cash = u_row["virtual_balance"] if u_row else 100000.0

    cursor.execute("SELECT * FROM portfolio WHERE user_id = ?", (user_id,))
    positions = [dict(r) for r in cursor.fetchall()]

    total_position_val = sum(p["current_value"] for p in positions)
    total_unrealized_pnl = sum(p["unrealized_pnl"] for p in positions)
    total_equity = cash + total_position_val

    conn.close()
    return {
        "user_id": user_id,
        "cash_balance": round(cash, 2),
        "positions_value": round(total_position_val, 2),
        "total_equity": round(total_equity, 2),
        "total_unrealized_pnl": round(total_unrealized_pnl, 2),
        "positions": positions,
    }


def record_trade(
    user_id: str,
    symbol: str,
    side: str,
    quantity: float,
    price: float,
    order_type: str = "MARKET",
) -> dict[str, Any]:
    conn = get_connection()
    cursor = conn.cursor()
    total_val = quantity * price
    trade_id = f"trd_{uuid.uuid4().hex[:12]}"
    now = datetime.now(timezone.utc).isoformat()

    # Check cash if BUY
    cursor.execute("SELECT virtual_balance FROM users WHERE id = ?", (user_id,))
    user_row = cursor.fetchone()
    if not user_row:
        conn.close()
        raise ValueError("User not found")

    balance = user_row["virtual_balance"]
    if side == "BUY" and balance < total_val:
        conn.close()
        raise ValueError(f"Insufficient virtual buying power: Balance ${balance:,.2f} < ${total_val:,.2f}")

    # Deduct or credit cash
    new_balance = balance - total_val if side == "BUY" else balance + total_val
    cursor.execute("UPDATE users SET virtual_balance = ?, updated_at = ? WHERE id = ?", (new_balance, now, user_id))

    # Insert Trade Record
    cursor.execute(
        """
        INSERT INTO trades (id, user_id, symbol, side, order_type, quantity, price, total_value, status, executed_at, pnl)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'EXECUTED', ?, 0.0)
        """,
        (trade_id, user_id, symbol, side, order_type, quantity, price, total_val, now),
    )

    # Update Portfolio Position
    cursor.execute("SELECT * FROM portfolio WHERE user_id = ? AND symbol = ?", (user_id, symbol))
    pos = cursor.fetchone()

    if pos:
        old_qty = pos["quantity"]
        old_avg = pos["avg_entry_price"]
        if side == "BUY":
            new_qty = old_qty + quantity
            new_avg = ((old_qty * old_avg) + (quantity * price)) / new_qty if new_qty > 0 else price
        else:
            new_qty = max(0.0, old_qty - quantity)
            new_avg = old_avg

        cur_val = new_qty * price
        unrealized = (price - new_avg) * new_qty
        cursor.execute(
            """
            UPDATE portfolio
            SET quantity = ?, avg_entry_price = ?, current_value = ?, unrealized_pnl = ?, updated_at = ?
            WHERE user_id = ? AND symbol = ?
            """,
            (new_qty, new_avg, cur_val, unrealized, now, user_id, symbol),
        )
    else:
        if side == "BUY":
            hold_id = f"hold_{uuid.uuid4().hex[:12]}"
            cursor.execute(
                """
                INSERT INTO portfolio (id, user_id, symbol, quantity, avg_entry_price, current_value, unrealized_pnl, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, 0.0, ?)
                """,
                (hold_id, user_id, symbol, quantity, price, total_val, now),
            )

    conn.commit()
    conn.close()

    return {
        "trade_id": trade_id,
        "symbol": symbol,
        "side": side,
        "quantity": quantity,
        "price": price,
        "total_value": total_val,
        "executed_at": now,
        "new_balance": round(new_balance, 2),
    }


def list_user_trades(user_id: str) -> list[dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM trades WHERE user_id = ? ORDER BY executed_at DESC LIMIT 100", (user_id,))
    trades = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return trades


def list_audit_logs() -> list[dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM audit_logs ORDER BY timestamp DESC LIMIT 100")
    logs = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return logs
