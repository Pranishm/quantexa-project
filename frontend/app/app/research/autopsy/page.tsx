"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, AlertTriangle, ArrowRight, Activity, Calendar, ShieldCheck, PieChart, Percent, DollarSign } from "lucide-react";
import Link from "next/link";
import { CANONICAL_BACKTEST } from "@/lib/demo-data";

const FAILURE_PERIODS = [
  {
    period: "May 2021 – Jul 2021",
    regime: "Sideways Chop / High Volatility",
    drawdown: "-12.8%",
    cause: "Multiple whipsaw cross entries during range-bound consolidation after May liquidation events.",
    attribution: "-$5,420.00",
    resolution: "Applying an ATR threshold filter suppresses 4 false breakout triggers.",
  },
  {
    period: "Nov 2021 – Jan 2022",
    regime: "Sharp Macro Reversal",
    drawdown: "-10.4%",
    cause: "Lagging exit on 200 SMA delayed capital protection during the initial cycle top decline.",
    attribution: "-$4,850.00",
    resolution: "Integrating trailing parabolic stop-loss cuts peak exit lag by 8 bars.",
  },
  {
    period: "Aug 2023 – Oct 2023",
    regime: "Low Volatility Rangebound Compression",
    drawdown: "-3.6%",
    cause: "Extended low-volume summer drift below moving averages causing incremental fee friction.",
    attribution: "-$1,940.00",
    resolution: "Halving position sizing when 30-day realized volatility compresses below 20%.",
  },
];

export default function StrategyAutopsyPage() {
  const router = useRouter();
  const [animProgress, setAnimProgress] = useState(0);

  const { autopsy } = CANONICAL_BACKTEST;

  useEffect(() => {
    const t = setTimeout(() => setAnimProgress(1), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">STRATEGY AUTOPSY</h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]">
              PERFORMANCE DECOMPOSITION
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs mt-1">
            <span className="font-semibold text-[var(--text-primary)]">{CANONICAL_BACKTEST.strategyName}</span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="font-mono text-[var(--text-secondary)]">{CANONICAL_BACKTEST.asset}</span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="font-mono text-[var(--positive)] font-bold">+{CANONICAL_BACKTEST.totalReturn}% Net</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/app/research/regimes"
            className="flex items-center gap-1.5 px-3.5 py-1.5 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-primary)] rounded-xl font-semibold transition-colors"
          >
            <span>Inspect Regime Engine</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
          </Link>
        </div>
      </div>

      {/* 12. THREE QUANTITATIVE AUTOPSY PANELS (WHY IT WORKED, CONCENTRATION, COST IMPACT) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PANEL 1: WHY IT WORKED (REGIME PROFIT BREAKDOWN) */}
        <div className="clay-card p-5 rounded-2xl space-y-4">
          <div className="border-b border-[var(--border)] pb-2.5 flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--positive)]" />
              WHY IT WORKED
            </span>
            <span className="text-[10px] font-mono text-[var(--positive)]">REGIME ALPHA</span>
          </div>

          <div className="space-y-3.5 text-xs">
            {autopsy.regimeAttribution.map((reg, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[var(--text-primary)] font-semibold">{reg.regime}</span>
                  <span className="font-mono font-bold text-[var(--positive)]">{reg.pctProfit}%</span>
                </div>
                <div className="w-full h-2 rounded-full clay-recessed-sm overflow-hidden p-0.5">
                  <div
                    style={{ width: `${animProgress ? reg.pctProfit : 0}%` }}
                    className="h-full bg-[var(--positive)] rounded-full transition-all duration-700 ease-out"
                  />
                </div>
                <div className="text-[10px] text-[var(--text-muted)] leading-relaxed pt-0.5">
                  {reg.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL 2: PROFIT CONCENTRATION */}
        <div className="clay-card p-5 rounded-2xl space-y-4">
          <div className="border-b border-[var(--border)] pb-2.5 flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              PROFIT CONCENTRATION
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">TRADE DISTRIBUTION</span>
          </div>

          <div className="space-y-4 text-xs">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[var(--text-primary)] font-semibold">Top 5 Trades</span>
                <span className="font-mono font-bold text-[var(--accent)]">
                  {autopsy.profitConcentration.top5TradesPct}%
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full clay-recessed-sm overflow-hidden p-0.5">
                <div
                  style={{ width: `${animProgress ? autopsy.profitConcentration.top5TradesPct : 0}%` }}
                  className="h-full bg-[var(--accent)] rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_var(--accent)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[var(--text-secondary)]">Remaining {CANONICAL_BACKTEST.tradeCount - 5} Trades</span>
                <span className="font-mono font-semibold text-[var(--text-secondary)]">
                  {autopsy.profitConcentration.remainingTradesPct}%
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full clay-recessed-sm overflow-hidden p-0.5">
                <div
                  style={{ width: `${animProgress ? autopsy.profitConcentration.remainingTradesPct : 0}%` }}
                  className="h-full bg-[var(--text-muted)] rounded-full transition-all duration-700 ease-out"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl clay-recessed-sm space-y-1">
              <div className="text-[10px] text-[var(--text-muted)] font-mono">STANDOUT OUTLIER:</div>
              <div className="text-xs font-bold text-[var(--text-primary)]">{autopsy.profitConcentration.bestTradeProfit}</div>
              <div className="text-[10px] text-[var(--text-secondary)]">
                Warning: high profit concentration indicates heavy tail-dependence on volatile breakouts.
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 3: COST IMPACT & FRICTION DEDUCTIONS */}
        <div className="clay-card p-5 rounded-2xl space-y-4">
          <div className="border-b border-[var(--border)] pb-2.5 flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--warning)]" />
              COST IMPACT
            </span>
            <span className="text-[10px] font-mono text-[var(--negative)]">-310 BPS TOTAL</span>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-secondary)]">Gross Cumulative Return</span>
                <span className="font-mono font-bold text-[var(--text-primary)]">+{autopsy.costImpact.grossReturn}%</span>
              </div>
              <div className="w-full h-2 rounded-full clay-recessed-sm overflow-hidden p-0.5">
                <div
                  style={{ width: `${animProgress ? 100 : 0}%` }}
                  className="h-full bg-[var(--text-primary)] rounded-full transition-all duration-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-secondary)]">After Broker Fees (5 bps)</span>
                <span className="font-mono font-semibold text-[var(--text-primary)]">+{autopsy.costImpact.afterFees}%</span>
              </div>
              <div className="w-full h-2 rounded-full clay-recessed-sm overflow-hidden p-0.5">
                <div
                  style={{ width: `${animProgress ? (autopsy.costImpact.afterFees / autopsy.costImpact.grossReturn) * 100 : 0}%` }}
                  className="h-full bg-[var(--accent)] rounded-full transition-all duration-700"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-primary)] font-semibold">After Slippage (10 bps)</span>
                <span className="font-mono font-bold text-[var(--positive)]">+{autopsy.costImpact.afterSlippage}%</span>
              </div>
              <div className="w-full h-2 rounded-full clay-recessed-sm overflow-hidden p-0.5">
                <div
                  style={{ width: `${animProgress ? (autopsy.costImpact.afterSlippage / autopsy.costImpact.grossReturn) * 100 : 0}%` }}
                  className="h-full bg-[var(--positive)] rounded-full transition-all duration-900"
                />
              </div>
            </div>

            <div className="text-[10px] text-[var(--text-muted)] pt-1 border-t border-[var(--border)]">
              Execution realism survived. 92.5% of gross alpha converted to net terminal equity.
            </div>
          </div>
        </div>
      </div>

      {/* 2. CHRONOLOGICAL FAILURE ANALYSIS */}
      <div className="clay-surface p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
          <div>
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[var(--negative)]" />
              CHRONOLOGICAL FAILURE DIAGNOSTIC
            </span>
            <div className="text-[10px] text-[var(--text-muted)] mt-0.5">
              Root-cause attribution for the 3 largest drawdown drawdowns across the 2019–2026 backtest window.
            </div>
          </div>
          <span className="text-[10px] font-mono text-[var(--negative)] font-bold">3 ISOLATED EPISODES</span>
        </div>

        <div className="space-y-3">
          {FAILURE_PERIODS.map((f, idx) => (
            <div key={idx} className="p-4 rounded-xl clay-card space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[var(--text-primary)]">{f.period}</span>
                  <span className="text-[10px] text-[var(--accent)] font-mono bg-[var(--accent-muted)] px-2 py-0.5 rounded-full font-semibold">
                    {f.regime}
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-[var(--text-muted)]">Impact: <strong className="text-[var(--negative)]">{f.attribution}</strong></span>
                  <span className="px-2 py-0.5 rounded-full bg-[var(--negative-bg)] text-[var(--negative)] font-bold">{f.drawdown}</span>
                </div>
              </div>

              <div className="text-xs text-[var(--text-secondary)] leading-relaxed">
                <strong className="text-[var(--text-primary)]">Cause:</strong> {f.cause}
              </div>

              <div className="p-2.5 rounded-lg clay-recessed-sm text-[11px] text-[var(--positive)] flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span><strong>Resolution:</strong> {f.resolution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
