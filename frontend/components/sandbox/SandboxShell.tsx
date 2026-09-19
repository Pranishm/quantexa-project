"use client";

import { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Sparkles } from "lucide-react";

import { api } from "@/lib/api";
import type { AssetSymbol, StrategyName, Num } from "@/lib/types";

import { ControlBar } from "./ControlBar";
import { MacroChart } from "./MacroChart";
import { MetricsCard } from "./MetricsCard";
import { ScrollytellingPanel } from "./ScrollytellingPanel";

// Dynamically import the 3D component to avoid SSR issues with Three.js
const CorrelationNetwork3D = dynamic(
  () => import("./CorrelationNetwork3D").then((m) => m.CorrelationNetwork3D),
  {
    ssr: false,
    loading: () => (
      <div className="clay-card rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] flex items-center justify-center min-h-[320px]">
        <Loader2 className="w-6 h-6 animate-spin text-[var(--accent)]" />
      </div>
    ),
  }
);

/** Format a number with a sign prefix and percentage */
const pct = (v: Num | undefined, decimals = 1): string => {
  if (v == null) return "—";
  const s = (v * 100).toFixed(decimals);
  return v >= 0 ? `+${s}%` : `${s}%`;
};

const fmtNum = (v: Num | undefined, decimals = 2): string => {
  if (v == null) return "—";
  return v.toFixed(decimals);
};

const fmtCurrency = (v: Num | undefined): string => {
  if (v == null) return "—";
  return `$${v.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

export function SandboxShell() {
  // Control bar state
  const [symbol, setSymbol] = useState<AssetSymbol>("BTC-USD");
  const [strategy, setStrategy] = useState<StrategyName>("sma_cross");
  const [startDate, setStartDate] = useState("2019-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");
  const [runKey, setRunKey] = useState(0); // forces refetch

  // Build the backtest request
  const backtestReq = useMemo(
    () => ({
      symbol,
      strategy,
      params: {},
      allow_short: false,
      initial_capital: 10_000,
      fee_bps: 5,
      slippage_bps: 2,
      sizing: "fixed" as const,
      sizing_params: {},
      start: startDate || undefined,
      end: endDate || undefined,
      include_monte_carlo: false,
      include_bias_audit: false,
    }),
    [symbol, strategy, startDate, endDate, runKey]
  );

  // Fetch price data
  const pricesQuery = useQuery({
    queryKey: ["sandbox-prices", symbol, startDate, endDate, runKey],
    queryFn: ({ signal }) =>
      api.prices(symbol, { start: startDate || undefined, end: endDate || undefined }, signal),
    staleTime: 10 * 60_000,
  });

  // Fetch analytics (overlays)
  const analyticsQuery = useQuery({
    queryKey: ["sandbox-analytics", symbol, startDate, endDate, runKey],
    queryFn: ({ signal }) =>
      api.assetAnalytics(
        symbol,
        { start: startDate || undefined, end: endDate || undefined },
        signal
      ),
    staleTime: 10 * 60_000,
  });

  // Fetch backtest
  const backtestQuery = useQuery({
    queryKey: ["sandbox-backtest", backtestReq, runKey],
    queryFn: ({ signal }) => api.backtest(backtestReq, signal),
    staleTime: 10 * 60_000,
  });

  // Fetch correlation data
  const corrQuery = useQuery({
    queryKey: ["sandbox-correlation", startDate, endDate, runKey],
    queryFn: ({ signal }) =>
      api.correlation(
        { start: startDate || undefined, end: endDate || undefined, window: 60 },
        signal
      ),
    staleTime: 10 * 60_000,
  });

  const handleRun = useCallback(() => {
    setRunKey((k) => k + 1);
  }, []);

  const isLoading =
    pricesQuery.isFetching ||
    backtestQuery.isFetching ||
    analyticsQuery.isFetching;

  // Extract backtest metrics for cards and scrollytelling
  const bt = backtestQuery.data;
  const metrics = bt?.metrics;
  const summary = bt?.summary;
  const benchMetrics = bt?.benchmark_metrics;

  // Sparkline from equity curve
  const equitySparkline = useMemo(() => {
    if (!bt?.series?.equity) return undefined;
    const eq = bt.series.equity;
    // Downsample to ~30 points for the sparkline
    const step = Math.max(1, Math.floor(eq.length / 30));
    return eq.filter((_, i) => i % step === 0);
  }, [bt?.series?.equity]);

  const drawdownSparkline = useMemo(() => {
    if (!bt?.series?.drawdown) return undefined;
    const dd = bt.series.drawdown;
    const step = Math.max(1, Math.floor(dd.length / 30));
    return dd.filter((_, i) => i % step === 0);
  }, [bt?.series?.drawdown]);

  // Build scrollytelling data
  const scrollData = useMemo(
    () =>
      bt
        ? {
            strategyName: bt.strategy?.label ?? strategy,
            symbol,
            totalReturn: metrics?.total_return,
            sharpe: metrics?.sharpe,
            maxDrawdown: metrics?.max_drawdown,
            cagr: metrics?.cagr,
            trades: summary?.trades,
            winRate: summary?.trade_win_rate,
            timeInMarket: summary?.time_in_market,
            benchmarkReturn: benchMetrics?.total_return,
            calmar: metrics?.calmar,
          }
        : undefined,
    [bt, symbol, strategy, metrics, summary, benchMetrics]
  );

  // Error display component
  const ErrorCard = ({ message }: { message: string }) => (
    <div className="clay-card rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-4 text-center">
      <p className="text-xs text-[var(--negative)] font-medium">{message}</p>
      <p className="text-[10px] text-[var(--text-muted)] mt-1">
        Deterministic fallback data stream active
      </p>
    </div>
  );

  return (
    <div className="min-h-screen p-4 md:p-6 bg-[var(--bg-root)] text-[var(--text-primary)] font-sans">
      {/* Page title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#60A5FA] to-[#818CF8] flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                Research Sandbox
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-[#00E599] font-bold border border-emerald-500/25">
                ● LIVE DETERMINISTIC FEED
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              Multi-asset backtest research with 3D correlation visualization and macro event markers.
            </p>
          </div>
        </div>
      </div>

      {/* Control Bar — full width */}
      <div className="mb-4">
        <ControlBar
          symbol={symbol}
          strategy={strategy}
          startDate={startDate}
          endDate={endDate}
          loading={isLoading}
          onSymbolChange={setSymbol}
          onStrategyChange={setStrategy}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onRun={handleRun}
        />
      </div>

      {/* === BENTO GRID === */}
      <div className="bento-grid xl:grid-cols-12 xl:grid-rows-[1fr_auto]">
        {/* Main chart — spans 8 cols on XL */}
        <div className="xl:col-span-8 xl:row-span-1 min-h-[480px]">
          {pricesQuery.data ? (
            <MacroChart
              candles={pricesQuery.data.candles}
              overlays={analyticsQuery.data?.overlays}
              dates={analyticsQuery.data?.dates}
              symbol={symbol}
              className="h-full"
            />
          ) : (
            <div className="clay-card rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] flex flex-col items-center justify-center h-full min-h-[480px] p-8 text-center space-y-3">
              <Loader2 className="w-8 h-8 animate-spin text-[var(--accent)]" />
              <div className="text-xs font-mono text-[var(--text-secondary)]">Initializing Multi-Asset Historical Stream...</div>
            </div>
          )}
        </div>

        {/* Scrollytelling sidebar — spans 4 cols on XL */}
        <div className="xl:col-span-4 xl:row-span-1 min-h-[480px] max-h-[600px]">
          <ScrollytellingPanel
            backtestData={scrollData}
            className="h-full"
          />
        </div>

        {/* Metrics row — 4 cards spanning bottom */}
        <div className="xl:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricsCard
            title="Total Return"
            value={pct(metrics?.total_return)}
            trend={
              metrics?.total_return != null
                ? metrics.total_return > 0
                  ? "up"
                  : "down"
                : "neutral"
            }
            trendValue={
              summary?.excess_cagr_vs_benchmark != null
                ? `${pct(summary.excess_cagr_vs_benchmark)} vs B&H`
                : undefined
            }
            sparklineData={equitySparkline}
            sparklineColor={
              metrics?.total_return != null && metrics.total_return >= 0
                ? "var(--neo-mint)"
                : "var(--neo-coral)"
            }
          />
          <MetricsCard
            title="Sharpe Ratio"
            value={fmtNum(metrics?.sharpe)}
            trend={
              metrics?.sharpe != null
                ? metrics.sharpe > 0.5
                  ? "up"
                  : metrics.sharpe < 0
                    ? "down"
                    : "neutral"
                : "neutral"
            }
            accentColor="var(--neo-blue)"
          />
          <MetricsCard
            title="Max Drawdown"
            value={pct(metrics?.max_drawdown)}
            trend="down"
            sparklineData={drawdownSparkline}
            sparklineColor="var(--neo-coral)"
            accentColor="var(--neo-coral)"
          />
          <MetricsCard
            title="Final Equity"
            value={fmtCurrency(metrics?.final_equity)}
            subtitle={`${summary?.trades ?? 0} trades`}
            trend={
              metrics?.final_equity != null
                ? metrics.final_equity > 10_000
                  ? "up"
                  : "down"
                : "neutral"
            }
            accentColor="var(--neo-gold)"
          />
        </div>

        {/* 3D Correlation Network — bottom right */}
        <div className="xl:col-span-4 min-h-[380px]">
          <CorrelationNetwork3D
            matrix={corrQuery.data?.matrix}
            symbols={corrQuery.data?.matrix?.symbols}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
