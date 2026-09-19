"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, FileText } from "lucide-react";

import { api, ApiError } from "@/lib/api";
import type {
  AssetSymbol,
  BacktestResponse,
  MetricsResponse,
  StrategyName,
} from "@/lib/types";
import { useSettings } from "@/lib/store";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const ASSETS: { value: AssetSymbol; label: string }[] = [
  { value: "BTC-USD", label: "Bitcoin (BTC-USD)" },
  { value: "GC=F", label: "Gold (GC=F)" },
  { value: "NVDA", label: "NVIDIA (NVDA)" },
];

const STRATEGIES: { value: StrategyName; label: string }[] = [
  { value: "sma_cross", label: "SMA Crossover" },
  { value: "ema_trend", label: "EMA Trend" },
  { value: "momentum", label: "Momentum" },
  { value: "mean_reversion", label: "Mean Reversion" },
];

const fmtPct = (v: number | undefined | null): string => {
  if (v == null) return "N/A";
  const s = (v * 100).toFixed(2);
  return v >= 0 ? `+${s}%` : `${s}%`;
};

const fmtNum = (v: number | undefined | null, d = 2): string =>
  v == null ? "N/A" : v.toFixed(d);

export function ReportView() {
  const { settings } = useSettings();

  const [asset, setAsset] = useState<AssetSymbol>(settings.symbol);
  const [strategy, setStrategy] = useState<StrategyName>(settings.strategy);

  // Generate = run a REAL backtest against the API, then render the deterministic
  // research report from those actual results. No fabricated numbers anywhere.
  const generateReport = useMutation({
    mutationFn: async () => {
      const request = {
        symbol: asset,
        strategy,
        params: {},
        allow_short: false,
        initial_capital: settings.initialCapital,
        fee_bps: settings.feeBps,
        slippage_bps: settings.slippageBps,
        sizing: "fixed" as const,
        sizing_params: {},
        start: settings.start ?? undefined,
        end: settings.end ?? undefined,
        include_monte_carlo: false,
        include_bias_audit: false,
      };

      const [metrics, backtest] = await Promise.all([
        api.metrics({ symbols: [asset], benchmark: null }),
        api.backtest(request),
      ]);

      const assetMetrics =
        metrics.assets.find((a) => a.meta.symbol === asset)?.metrics ??
        metrics.assets[0]?.metrics;

      const payload = {
        asset,
        strategy: STRATEGIES.find((s) => s.value === strategy)?.label ?? strategy,
        metrics_asset: {
          total_return: assetMetrics?.total_return,
          annual_return: assetMetrics?.cagr,
          annual_volatility: assetMetrics?.annualised_volatility,
          sharpe_ratio: assetMetrics?.sharpe,
          sortino_ratio: assetMetrics?.sortino,
          max_drawdown: assetMetrics?.max_drawdown,
          win_rate: assetMetrics?.win_rate,
        },
        metrics_strategy: {
          total_return: backtest.metrics?.total_return,
          annual_volatility: backtest.metrics?.annualised_volatility,
          sharpe_ratio: backtest.metrics?.sharpe,
          max_drawdown: backtest.metrics?.max_drawdown,
        },
        regimes: [] as { regime: string; total_return: number; volatility: number; sharpe: number; max_drawdown: number }[],
      };

      // The backend's /report endpoint is a formatting service: it renders the
      // numbers it receives. Since it currently cannot compute anything itself,
      // render the report client-side from the real backtest + metrics results.
      const pct = (x: number | null | undefined) =>
        x == null ? "N/A" : `${(x * 100).toFixed(2)}%`;

      const report = `# Quantitative Research Report

## Asset

**${asset}**

## Historical Profile

- Total return: **${pct(assetMetrics?.total_return)}**
- Annualized return: **${pct(assetMetrics?.cagr)}**
- Annualized volatility: **${pct(assetMetrics?.annualised_volatility)}**
- Sharpe ratio: **${fmtNum(assetMetrics?.sharpe)}**
- Sortino ratio: **${fmtNum(assetMetrics?.sortino)}**
- Maximum drawdown: **${pct(assetMetrics?.max_drawdown)}**
- Positive-return days: **${pct(assetMetrics?.win_rate)}**

## Strategy

Selected strategy: **${STRATEGIES.find((s) => s.value === strategy)?.label ?? strategy}**

- Strategy total return (net): **${pct(backtest.metrics?.total_return)}**
- Strategy volatility: **${pct(backtest.metrics?.annualised_volatility)}**
- Strategy Sharpe: **${fmtNum(backtest.metrics?.sharpe)}**
- Strategy maximum drawdown: **${pct(backtest.metrics?.max_drawdown)}**
- Trades executed: **${backtest.summary?.trades ?? "N/A"}**
- Trade win rate: **${pct(backtest.summary?.trade_win_rate)}**

## Strategy vs Benchmark

| Metric | Strategy | Buy & Hold |
|---|---|---|
| Total return | ${pct(backtest.metrics?.total_return)} | ${pct(backtest.benchmark_metrics?.total_return)} |
| Sharpe ratio | ${fmtNum(backtest.metrics?.sharpe)} | ${fmtNum(backtest.benchmark_metrics?.sharpe)} |
| Max drawdown | ${pct(backtest.metrics?.max_drawdown)} | ${pct(backtest.benchmark_metrics?.max_drawdown)} |

## Research Limitations

Historical backtest results do not guarantee future performance.
Results change with sample period, transaction costs, parameter choices,
market conditions, data quality and execution assumptions.

This platform is intended for quantitative research and historical
analysis rather than personalized investment advice.
`;
      return { report, backtest: backtest as BacktestResponse | undefined };
    },
  });

  const errorText =
    generateReport.error instanceof ApiError
      ? generateReport.error.message
      : generateReport.error
        ? "Failed to generate the report. Is the backend running?"
        : null;

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
        <select
          value={asset}
          onChange={(e) => setAsset(e.target.value as AssetSymbol)}
          className="bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] px-3 py-1.5 rounded text-sm outline-none"
        >
          {ASSETS.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value as StrategyName)}
          className="bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] px-3 py-1.5 rounded text-sm outline-none"
        >
          {STRATEGIES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        <button
          onClick={() => generateReport.mutate()}
          disabled={generateReport.isPending}
          className="bg-[var(--accent)] text-white px-4 py-1.5 rounded text-sm font-bold uppercase tracking-wide hover:opacity-90 disabled:opacity-50"
        >
          {generateReport.isPending ? "Running backtest..." : "Generate Report"}
        </button>
      </motion.div>

      {errorText && (
        <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs text-[var(--negative)]">
          <AlertTriangle className="w-4 h-4" />
          <span>{errorText}</span>
        </motion.div>
      )}

      {generateReport.data && (
        <motion.div variants={itemVariants} className="glass-panel p-6 border border-[var(--border)] rounded-2xl bg-[var(--bg-surface)]">
          <div className="flex items-center gap-2 mb-6 border-b border-[var(--border)] pb-4">
            <FileText className="w-4 h-4 text-[var(--accent)]" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Quantitative Summary
            </h2>
          </div>
          <pre className="whitespace-pre-wrap text-sm text-[var(--text-primary)] font-sans leading-relaxed">
            {generateReport.data.report}
          </pre>
          <div className="mt-8 pt-4 border-t border-[var(--border)] text-[10px] uppercase text-[var(--text-muted)]">
            {generateReport.data.backtest?.disclaimer ??
              "Historical research only — not investment advice."}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
