"""AI quantitative research report generation."""

from __future__ import annotations

import os
from typing import Any

import pandas as pd


def create_report(
    asset: str,
    metrics_asset: dict[str, Any],
    metrics_strategy: dict[str, Any],
    strategy: str,
    regimes: list[dict[str, Any]],
) -> str:
    """Generate a deterministic quantitative research report."""

    def pct(x: float | None) -> str:
        if x is None or pd.isna(x):
            return "N/A"
        return f"{x * 100:.2f}%"

    regime_text = "No sufficient regime observations."
    if regimes:
        lines = []
        for row in regimes:
            lines.append(
                f"- {row.get('regime', 'Unknown')}: "
                f"return {pct(row.get('total_return'))}, "
                f"volatility {pct(row.get('volatility'))}, "
                f"Sharpe {row.get('sharpe', 0):.2f}, "
                f"max drawdown {pct(row.get('max_drawdown'))}"
            )
        regime_text = "\n".join(lines)

    return f"""
# QuantX Quantitative Research Report

## Asset

**{asset}**

## Historical Profile

- Total return: **{pct(metrics_asset.get('total_return'))}**
- Annualized return: **{pct(metrics_asset.get('annual_return'))}**
- Annualized volatility: **{pct(metrics_asset.get('annual_volatility'))}**
- Sharpe ratio: **{metrics_asset.get('sharpe_ratio', 0):.2f}**
- Sortino ratio: **{metrics_asset.get('sortino_ratio', 0):.2f}**
- Maximum drawdown: **{pct(metrics_asset.get('max_drawdown'))}**
- Positive-return days: **{pct(metrics_asset.get('win_rate'))}**

## Strategy

Selected strategy:

**{strategy}**

- Strategy return: **{pct(metrics_strategy.get('total_return'))}**
- Strategy volatility: **{pct(metrics_strategy.get('annual_volatility'))}**
- Strategy Sharpe: **{metrics_strategy.get('sharpe_ratio', 0):.2f}**
- Strategy maximum drawdown: **{pct(metrics_strategy.get('max_drawdown'))}**

## Market Regimes

{regime_text}

## Quantitative Interpretation

The results describe historical observations under the selected
sample period, strategy parameters and transaction-cost assumptions.

Strategy performance should be considered together with volatility,
drawdown, benchmark performance, market regime and parameter robustness.

## Research Limitations

Historical backtest results do not guarantee future performance.

Results can change with:

- sample period
- transaction costs
- parameter choices
- market conditions
- data quality
- execution assumptions

This platform is intended for quantitative research and historical
analysis rather than personalized investment advice.
"""


def optional_ai_rewrite(report: str) -> str | None:
    """Optionally rewrite the report using OpenAI if configured."""
    api_key = os.getenv("OPENAI_API_KEY")
    model = os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview")

    if not api_key:
        return None

    try:
        from openai import OpenAI
    except ImportError:
        return None

    try:
        client = OpenAI(api_key=api_key)
        response = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are a professional quantitative analyst. Rewrite the provided "
                        "quantitative research report to be more narrative and professional. "
                        "Preserve all numerical metrics exactly as provided. Do not give "
                        "personalized investment advice or guaranteed future predictions. "
                        "Keep it structured with markdown headings."
                    ),
                },
                {"role": "user", "content": report},
            ],
            temperature=0.2,
        )
        return response.choices[0].message.content
    except Exception as e:
        import logging

        log = logging.getLogger("quantexa.reports")
        log.error("AI rewrite failed: %s", e)
        return None
