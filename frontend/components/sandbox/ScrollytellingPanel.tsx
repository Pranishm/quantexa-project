"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Shield,
  AlertTriangle,
  Zap,
  Target,
  BarChart3,
  Flame,
  type LucideIcon,
} from "lucide-react";
import type { Num } from "@/lib/types";

interface NarrativeCard {
  id: string;
  icon: LucideIcon;
  iconColor: string;
  title: string;
  body: string;
  accentBorder: string;
}

function AnimatedCard({ card, index }: { card: NarrativeCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });

  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="p-4 rounded-2xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all group shadow-sm"
      style={{ borderLeft: `3px solid ${card.accentBorder}` }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: `${card.iconColor}15` }}
        >
          <Icon className="w-4 h-4" style={{ color: card.iconColor }} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-[var(--text-primary)] mb-1 tracking-wide">
            {card.title}
          </h4>
          <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
            {card.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ---------- Narrative generation from backtest data ----------

function generateNarratives(data: {
  strategyName?: string;
  symbol?: string;
  totalReturn?: Num;
  sharpe?: Num;
  maxDrawdown?: Num;
  cagr?: Num;
  trades?: number;
  winRate?: Num;
  timeInMarket?: Num;
  benchmarkReturn?: Num;
  calmar?: Num;
}): NarrativeCard[] {
  const cards: NarrativeCard[] = [];
  const {
    strategyName = "Strategy",
    symbol = "Asset",
    totalReturn,
    sharpe,
    maxDrawdown,
    cagr,
    trades,
    winRate,
    timeInMarket,
    benchmarkReturn,
    calmar,
  } = data;

  // 1. Overall performance
  if (totalReturn != null) {
    const isPositive = totalReturn > 0;
    cards.push({
      id: "perf",
      icon: isPositive ? TrendingUp : TrendingDown,
      iconColor: isPositive ? "#34D399" : "#F87171",
      title: isPositive ? "Positive Total Return" : "Negative Performance",
      body: `The ${strategyName} strategy on ${symbol} delivered a ${isPositive ? "+" : ""}${(totalReturn * 100).toFixed(1)}% net total return${
        benchmarkReturn != null
          ? `, compared to ${(benchmarkReturn * 100).toFixed(1)}% for buy-and-hold`
          : ""
      }. ${
        isPositive
          ? "The strategy captured upside while managing risk through systematic signal generation."
          : "This underperformance may indicate poor regime fit or excessive trading costs."
      }`,
      accentBorder: isPositive ? "#34D399" : "#F87171",
    });
  }

  // 2. Risk-adjusted returns
  if (sharpe != null) {
    const quality = sharpe > 1 ? "strong" : sharpe > 0.5 ? "moderate" : sharpe > 0 ? "weak" : "negative";
    cards.push({
      id: "sharpe",
      icon: Target,
      iconColor: "#60A5FA",
      title: `Sharpe Ratio: ${sharpe.toFixed(2)}`,
      body: `The risk-adjusted performance is ${quality}. ${
        sharpe > 1
          ? "A Sharpe above 1.0 is considered excellent for a long-only systematic strategy. The returns justify the volatility taken."
          : sharpe > 0
            ? "The strategy generates positive excess returns per unit of risk, though there may be room for improvement through parameter optimization."
            : "The strategy is not adequately compensating for the risk taken. Consider regime-specific deployment."
      }`,
      accentBorder: "#60A5FA",
    });
  }

  // 3. Drawdown analysis
  if (maxDrawdown != null) {
    const severe = Math.abs(maxDrawdown) > 0.3;
    cards.push({
      id: "drawdown",
      icon: severe ? AlertTriangle : Shield,
      iconColor: severe ? "#F87171" : "#34D399",
      title: `Max Drawdown: ${(maxDrawdown * 100).toFixed(1)}%`,
      body: severe
        ? `A ${(Math.abs(maxDrawdown) * 100).toFixed(0)}% peak-to-trough decline is significant. During severe bear regimes, the strategy failed to exit positions quickly enough. This drawdown would have tested investor discipline and margin requirements.`
        : `The ${(Math.abs(maxDrawdown) * 100).toFixed(0)}% maximum drawdown is well-contained. The strategy's signal generation helped avoid the worst of the downturns, preserving capital during volatile periods.`,
      accentBorder: severe ? "#F87171" : "#34D399",
    });
  }

  // 4. Trading activity
  if (trades != null && winRate != null) {
    cards.push({
      id: "trades",
      icon: Zap,
      iconColor: "#FFD700",
      title: `${trades} Trades · ${(winRate * 100).toFixed(0)}% Win Rate`,
      body: `The strategy executed ${trades} round-trip trades with a ${(winRate * 100).toFixed(0)}% win rate. ${
        winRate > 0.5
          ? "More than half the trades were profitable, suggesting the entry signals have genuine predictive power."
          : "Despite a sub-50% win rate, the strategy may still be profitable if winning trades are significantly larger than losses (positive expectancy)."
      }`,
      accentBorder: "#FFD700",
    });
  }

  // 5. Time in market
  if (timeInMarket != null) {
    cards.push({
      id: "time-in-market",
      icon: BarChart3,
      iconColor: "#818CF8",
      title: `Time in Market: ${(timeInMarket * 100).toFixed(0)}%`,
      body:
        timeInMarket > 0.8
          ? "The strategy was invested most of the time, behaving close to a buy-and-hold approach. Its value comes from the timing of exits rather than entry frequency."
          : timeInMarket > 0.4
            ? "A balanced exposure — the strategy sits on the sidelines during uncertain regimes, re-entering when trend signals confirm. This reduces drawdowns at the cost of missing some rallies."
            : "The strategy is highly selective, spending most of the time in cash. Returns per day invested should be evaluated to see if the timing adds value.",
      accentBorder: "#818CF8",
    });
  }

  // 6. CAGR + Calmar
  if (cagr != null && calmar != null) {
    cards.push({
      id: "calmar",
      icon: Flame,
      iconColor: "#FB923C",
      title: `CAGR ${(cagr * 100).toFixed(1)}% · Calmar ${calmar.toFixed(2)}`,
      body: `The compounded annual growth rate of ${(cagr * 100).toFixed(1)}% combined with a Calmar ratio of ${calmar.toFixed(2)} ${
        calmar > 1
          ? "indicates strong risk-adjusted compounding — the annualized return exceeds the max drawdown."
          : "suggests the drawdown risk is significant relative to the compounding rate. Position sizing adjustments could improve this ratio."
      }`,
      accentBorder: "#FB923C",
    });
  }

  // Fallback if no data
  if (cards.length === 0) {
    cards.push({
      id: "empty",
      icon: Target,
      iconColor: "#60A5FA",
      title: "Run a Backtest",
      body: "Configure an asset and strategy above, then hit 'Run Backtest' to see a narrative breakdown of the results.",
      accentBorder: "#60A5FA",
    });
  }

  return cards;
}

// ---------- Exported component ----------

interface ScrollytellingPanelProps {
  backtestData?: {
    strategyName?: string;
    symbol?: string;
    totalReturn?: Num;
    sharpe?: Num;
    maxDrawdown?: Num;
    cagr?: Num;
    trades?: number;
    winRate?: Num;
    timeInMarket?: Num;
    benchmarkReturn?: Num;
    calmar?: Num;
  };
  className?: string;
}

export function ScrollytellingPanel({
  backtestData,
  className = "",
}: ScrollytellingPanelProps) {
  const narratives = generateNarratives(backtestData ?? {});

  return (
    <div className={`clay-card rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] flex flex-col overflow-hidden shadow-sm ${className}`}>
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-[var(--border)] flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <h3 className="text-xs font-bold text-[var(--text-primary)] tracking-wider uppercase font-mono">
              STRATEGY NARRATIVE
            </h3>
          </div>
          <p className="text-[10px] text-[var(--text-muted)] mt-0.5 font-sans">
            Deterministic AI factor synthesis · {narratives.length} insights
          </p>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]">
          FEATHERLESS
        </span>
      </div>

      {/* Scrollable narrative cards */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0 custom-scrollbar">
        {narratives.map((card, i) => (
          <AnimatedCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </div>
  );
}
