"use client";

import { useState } from "react";
import { Activity, Calendar, ChevronDown, Play, Settings2 } from "lucide-react";
import type { AssetSymbol, StrategyName } from "@/lib/types";

const ASSETS: { symbol: AssetSymbol; label: string; color: string }[] = [
  { symbol: "GC=F", label: "Gold (XAU)", color: "var(--neo-gold)" },
  { symbol: "BTC-USD", label: "Bitcoin (BTC)", color: "var(--neo-blue)" },
  { symbol: "NVDA", label: "NVIDIA", color: "var(--neo-mint)" },
];

const STRATEGIES: { name: StrategyName; label: string }[] = [
  { name: "sma_cross", label: "SMA Cross" },
  { name: "ema_trend", label: "EMA Trend" },
  { name: "momentum", label: "Momentum" },
  { name: "mean_reversion", label: "Mean Reversion" },
];

interface ControlBarProps {
  symbol: AssetSymbol;
  strategy: StrategyName;
  startDate: string;
  endDate: string;
  loading?: boolean;
  onSymbolChange: (s: AssetSymbol) => void;
  onStrategyChange: (s: StrategyName) => void;
  onStartDateChange: (d: string) => void;
  onEndDateChange: (d: string) => void;
  onRun: () => void;
}

export function ControlBar({
  symbol,
  strategy,
  startDate,
  endDate,
  loading,
  onSymbolChange,
  onStrategyChange,
  onStartDateChange,
  onEndDateChange,
  onRun,
}: ControlBarProps) {
  const [assetOpen, setAssetOpen] = useState(false);
  const [stratOpen, setStratOpen] = useState(false);

  const currentAsset = ASSETS.find((a) => a.symbol === symbol) ?? ASSETS[0];
  const currentStrat = STRATEGIES.find((s) => s.name === strategy) ?? STRATEGIES[0];

  return (
    <div className="glass-panel p-3 flex flex-wrap items-center gap-3">
      {/* Asset Selector */}
      <div className="relative">
        <button
          onClick={() => { setAssetOpen(!assetOpen); setStratOpen(false); }}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[var(--neo-border)] hover:border-[rgba(148,163,184,0.25)] transition-all text-sm"
        >
          <span className="w-2 h-2 rounded-full" style={{ background: currentAsset.color }} />
          <span className="font-medium text-[var(--text-primary)]">{currentAsset.label}</span>
          <ChevronDown className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </button>

        {assetOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 py-1 rounded-xl glass-panel z-50 border border-[var(--neo-border)]">
            {ASSETS.map((a) => (
              <button
                key={a.symbol}
                onClick={() => { onSymbolChange(a.symbol); setAssetOpen(false); }}
                className={`w-full text-left px-3 py-2 flex items-center gap-2 text-sm hover:bg-[rgba(255,255,255,0.05)] transition-colors ${
                  a.symbol === symbol ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: a.color }} />
                {a.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Strategy Selector */}
      <div className="relative">
        <button
          onClick={() => { setStratOpen(!stratOpen); setAssetOpen(false); }}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[var(--neo-border)] hover:border-[rgba(148,163,184,0.25)] transition-all text-sm"
        >
          <Settings2 className="w-3.5 h-3.5 text-[var(--neo-blue)]" />
          <span className="font-medium text-[var(--text-primary)]">{currentStrat.label}</span>
          <ChevronDown className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </button>

        {stratOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 py-1 rounded-xl glass-panel z-50 border border-[var(--neo-border)]">
            {STRATEGIES.map((s) => (
              <button
                key={s.name}
                onClick={() => { onStrategyChange(s.name); setStratOpen(false); }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-[rgba(255,255,255,0.05)] transition-colors ${
                  s.name === strategy ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Date Range */}
      <div className="flex items-center gap-2">
        <Calendar className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="px-2 py-1.5 rounded-lg bg-[rgba(15,23,42,0.6)] border border-[var(--neo-border)] text-xs text-[var(--text-primary)] font-mono focus:outline-none focus:border-[var(--neo-blue)] transition-colors"
        />
        <span className="text-[var(--text-muted)] text-xs">→</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="px-2 py-1.5 rounded-lg bg-[rgba(15,23,42,0.6)] border border-[var(--neo-border)] text-xs text-[var(--text-primary)] font-mono focus:outline-none focus:border-[var(--neo-blue)] transition-colors"
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Run Button */}
      <button
        onClick={onRun}
        disabled={loading}
        className="flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm transition-all disabled:opacity-50"
        style={{
          background: loading
            ? "rgba(96, 165, 250, 0.15)"
            : "linear-gradient(135deg, #60A5FA, #818CF8)",
          color: "#fff",
          boxShadow: loading ? "none" : "0 4px 20px rgba(96, 165, 250, 0.3)",
        }}
      >
        {loading ? (
          <>
            <Activity className="w-4 h-4 animate-spin" />
            Running…
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Run Backtest
          </>
        )}
      </button>
    </div>
  );
}
