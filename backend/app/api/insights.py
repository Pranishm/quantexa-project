"""Rule-based plain-English insight cards.

Deterministic rules over computed statistics - no language model, nothing
generated. Every card carries the numbers it was derived from so a reader can
check the claim rather than trust it.
"""

from __future__ import annotations

from datetime import date
from typing import Any

import numpy as np
from fastapi import APIRouter, HTTPException, Query

from app.api.deps import window_prices
from app.config import ASSETS, DEFAULT_SYMBOLS, DISCLAIMER, blended_periods_per_year, get_asset
from app.data.align import align_closes
from app.data.cache import load_many
from app.quant import risk
from app.quant.correlation import correlation_breaks, correlation_matrix
from app.quant.indicators import drawdown_series, simple_returns, sma
from app.quant.regimes import classify
from app.schemas import sanitize

router = APIRouter(tags=["insights"])


def _pct(x: float) -> str:
    return f"{x * 100:+.1f}%"


def _card(
    card_id: str,
    title: str,
    body: str,
    tone: str = "neutral",
    tags: list[str] | None = None,
    evidence: dict[str, Any] | None = None,
) -> dict[str, Any]:
    return {
        "id": card_id,
        "title": title,
        "body": body,
        "tone": tone,
        "tags": tags or [],
        "evidence": evidence or {},
    }


@router.get("/insights", summary="Plain-English observations derived from the data")
def get_insights(
    symbols: list[str] = Query(default=list(DEFAULT_SYMBOLS)),
    start: date | None = None,
    end: date | None = None,
    correlation_window: int = Query(default=60, ge=10, le=250),
) -> dict[str, Any]:
    unknown = [s for s in symbols if s not in ASSETS]
    if unknown:
        raise HTTPException(status_code=422, detail=f"Unknown symbols: {', '.join(unknown)}")

    cards: list[dict[str, Any]] = []
    per_asset: dict[str, dict[str, Any]] = {}

    for symbol in symbols:
        prices, meta = window_prices(symbol, start, end, min_bars=30)
        close = prices["close"]
        returns = simple_returns(close)
        ppy = meta["periods_per_year"]
        summary = risk.summarise(returns, ppy, equity=close)
        dd = drawdown_series(close)
        per_asset[symbol] = {
            "meta": meta,
            "metrics": summary,
            "close": close,
            "returns": returns,
            "drawdown_now": float(dd.iloc[-1]),
            "sma200": sma(close, 200),
        }

    # -- ranking ---------------------------------------------------------
    ranked = sorted(
        per_asset.items(),
        key=lambda kv: (kv[1]["metrics"]["cagr"] if np.isfinite(kv[1]["metrics"]["cagr"]) else -99),
        reverse=True,
    )
    if len(ranked) >= 2:
        best_sym, best = ranked[0]
        worst_sym, worst = ranked[-1]
        cards.append(
            _card(
                "performance_spread",
                f"{get_asset(best_sym).name} led, {get_asset(worst_sym).name} lagged",
                (
                    f"Over the window, {best_sym} compounded at {_pct(best['metrics']['cagr'])} a year "
                    f"against {_pct(worst['metrics']['cagr'])} for {worst_sym}. The gap is "
                    f"{_pct(best['metrics']['cagr'] - worst['metrics']['cagr'])} annualised."
                ),
                tone="info",
                tags=["performance"],
                evidence={
                    "best": {"symbol": best_sym, "cagr": best["metrics"]["cagr"]},
                    "worst": {"symbol": worst_sym, "cagr": worst["metrics"]["cagr"]},
                },
            )
        )

    # -- risk-adjusted ranking ------------------------------------------
    by_sharpe = sorted(
        per_asset.items(),
        key=lambda kv: (kv[1]["metrics"]["sharpe"] if np.isfinite(kv[1]["metrics"]["sharpe"]) else -99),
        reverse=True,
    )
    top_sym, top = by_sharpe[0]
    if np.isfinite(top["metrics"]["sharpe"]):
        cards.append(
            _card(
                "best_risk_adjusted",
                f"{top_sym} paid the most per unit of risk",
                (
                    f"{top_sym} earned a Sharpe of {top['metrics']['sharpe']:.2f} on "
                    f"{_pct(top['metrics']['annualised_volatility'])} annualised volatility. "
                    f"Its worst peak-to-trough fall was {_pct(top['metrics']['max_drawdown'])}."
                ),
                tone="info",
                tags=["risk"],
                evidence={"symbol": top_sym, "metrics": top["metrics"]},
            )
        )

    # -- annualisation note ---------------------------------------------
    crypto = [s for s in symbols if get_asset(s).periods_per_year == 365]
    if crypto:
        sym = crypto[0]
        m = per_asset[sym]["metrics"]
        vol_365 = m["annualised_volatility"]
        vol_252 = vol_365 * np.sqrt(252 / 365)
        cards.append(
            _card(
                "calendar_note",
                f"{sym} is annualised on 365 days, not 252",
                (
                    f"{sym} trades every calendar day, so its volatility annualises to "
                    f"{_pct(vol_365)}. Applying the 252-day equity convention would report "
                    f"{_pct(vol_252)} instead - understating risk by "
                    f"{_pct(vol_365 - vol_252)} of volatility."
                ),
                tone="warning",
                tags=["methodology"],
                evidence={"symbol": sym, "vol_365": vol_365, "vol_252_wrong": vol_252},
            )
        )

    # -- drawdown status -------------------------------------------------
    for symbol, data in per_asset.items():
        now = data["drawdown_now"]
        if now < -0.10:
            cards.append(
                _card(
                    f"drawdown_{symbol}",
                    f"{symbol} is {_pct(now)} below its high",
                    (
                        f"{symbol} last closed {_pct(now)} under its running peak. Its deepest "
                        f"fall in this window was {_pct(data['metrics']['max_drawdown'])}, which "
                        f"took {data['metrics']['max_drawdown_bars']} bars to recover or is "
                        "still open."
                    ),
                    tone="warning" if now < -0.25 else "neutral",
                    tags=["drawdown"],
                    evidence={"symbol": symbol, "current_drawdown": now},
                )
            )

    # -- trend status ----------------------------------------------------
    for symbol, data in per_asset.items():
        ma = data["sma200"]
        if ma.notna().any():
            last_close = float(data["close"].iloc[-1])
            last_ma = float(ma.dropna().iloc[-1])
            above = last_close > last_ma
            cards.append(
                _card(
                    f"trend_{symbol}",
                    f"{symbol} is trading {'above' if above else 'below'} its 200-day average",
                    (
                        f"Last close {last_close:,.2f} against a 200-bar SMA of {last_ma:,.2f}, "
                        f"a gap of {_pct(last_close / last_ma - 1)}."
                    ),
                    tone="positive" if above else "warning",
                    tags=["trend"],
                    evidence={"symbol": symbol, "close": last_close, "sma_200": last_ma},
                )
            )

    # -- correlation ------------------------------------------------------
    if len(symbols) >= 2:
        frames = load_many(symbols)
        closes = align_closes(frames)
        if start is not None:
            closes = closes[closes.index >= str(start)]
        if end is not None:
            closes = closes[closes.index <= str(end)]

        if len(closes) > correlation_window + 5:
            matrix = correlation_matrix(closes)
            m = np.array(matrix["matrix"])
            syms = matrix["symbols"]
            iu = np.triu_indices(len(syms), k=1)
            if iu[0].size:
                values = m[iu]
                strongest = int(np.argmax(np.abs(values)))
                a, b = syms[iu[0][strongest]], syms[iu[1][strongest]]
                rho = float(values[strongest])
                cards.append(
                    _card(
                        "correlation_strongest",
                        f"{a} and {b} move together most closely",
                        (
                            f"Their full-window correlation is {rho:+.2f} on "
                            f"{matrix['bars']} common trading days. "
                            + (
                                "That is loose enough that they still diversify each other."
                                if abs(rho) < 0.5
                                else "At this level they offer limited diversification."
                            )
                        ),
                        tone="neutral",
                        tags=["correlation"],
                        evidence={"pair": f"{a}|{b}", "correlation": rho, "bars": matrix["bars"]},
                    )
                )

            breaks = correlation_breaks(closes, correlation_window, 252, 2.0)
            events = breaks["events"]
            if events:
                latest = events[-1]
                cards.append(
                    _card(
                        "correlation_break",
                        f"Correlation break: {latest['asset_a']} and {latest['asset_b']}",
                        latest["message"]
                        + f" There have been {len(events)} such episodes in this window.",
                        tone="warning",
                        tags=["correlation", "alert"],
                        evidence={"latest": latest, "total_events": len(events)},
                    )
                )

    # -- regime -----------------------------------------------------------
    for symbol, data in per_asset.items():
        prices, meta = window_prices(symbol, start, end, min_bars=30)
        if len(prices) < 260:
            continue
        panel = classify(prices, meta["periods_per_year"])
        current = panel["regime"].dropna()
        if current.empty:
            continue
        label = str(current.iloc[-1])
        run = 0
        for value in reversed(current.tolist()):
            if value == label:
                run += 1
            else:
                break
        cards.append(
            _card(
                f"regime_{symbol}",
                f"{symbol} is in a {label.lower()} regime",
                (
                    f"{symbol} has been in the {label} regime for {run} bars. Regimes are "
                    "labelled from the 200-bar trend and 30-bar volatility against its "
                    "expanding median, using only data available at each bar."
                ),
                tone="neutral",
                tags=["regime"],
                evidence={"symbol": symbol, "regime": label, "bars_in_regime": run},
            )
        )

    return sanitize(
        {
            "generated_from": {
                "symbols": symbols,
                "start": str(start) if start else None,
                "end": str(end) if end else None,
            },
            "cards": cards,
            "method": (
                "Every card is produced by a deterministic rule over computed statistics. "
                "No text is generated by a model, and each card carries the numbers behind it."
            ),
            "disclaimer": DISCLAIMER,
        }
    )
