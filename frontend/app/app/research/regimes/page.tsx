"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Calendar, ArrowRight, Layers, Sliders, ShieldCheck, Activity, Compass, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { marketHub, type AssetKey } from "@/lib/market-data-hub";
import {
  analyzeMarketRegimes,
  type RegimeSegment,
  type RegimeAnalysisResult,
  type RegimeType,
  REGIME_METADATA
} from "@/lib/regime-engine";

export default function RegimeEnginePage() {
  const router = useRouter();
  const [asset, setAsset] = useState<AssetKey>("BTC");
  const [timeframe, setTimeframe] = useState<"1M" | "3M" | "6M" | "1Y" | "MAX">("1Y");
  const [selectedSegment, setSelectedSegment] = useState<RegimeSegment | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<RegimeSegment | null>(null);

  // Dynamic Regime Analysis connected to market data
  const analysis: RegimeAnalysisResult = useMemo(() => {
    return analyzeMarketRegimes(asset, timeframe);
  }, [asset, timeframe]);

  const active = hoveredSegment || selectedSegment || analysis.currentRegime;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] font-mono">
              MARKOV REGIME ENGINE
            </h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]">
              ACTIVE: {analysis.currentRegime.label.toUpperCase()}
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Microstructure regime classification segmenting historical bars into Bull, Bear, Range-Bound, and Volatility states.
          </p>
        </div>

        {/* Asset & Timeframe Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs font-mono">
            {(["BTC", "SOL", "GOLD", "NVDA"] as const).map((a) => (
              <button
                key={a}
                onClick={() => {
                  setAsset(a);
                  setSelectedSegment(null);
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  asset === a ? "bg-[var(--accent)] text-white font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs font-mono">
            {(["1M", "3M", "6M", "1Y", "MAX"] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => {
                  setTimeframe(tf);
                  setSelectedSegment(null);
                }}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  timeframe === tf ? "bg-[var(--accent)] text-white font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <Link
            href="/app/research/robustness"
            className="flex items-center gap-1.5 px-3 py-1.5 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-primary)] rounded-xl font-semibold transition-colors border border-[var(--border)]"
          >
            <span>Robustness Lab</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
          </Link>
        </div>
      </div>

      {/* 2. Connected Regime Timeline */}
      <div className="clay-surface p-6 rounded-2xl space-y-4 border border-[var(--border)]">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
          <div>
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              DYNAMIC REGIME TIMELINE ({analysis.segments.length} Phase Segments)
            </span>
            <div className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">
              Hover segments to inspect duration, realized volatility, and return attribution
            </div>
          </div>
          <span className="text-[10px] font-mono text-[var(--accent)]">CONNECTED MARKET DATASET</span>
        </div>

        {/* Timeline Bar Strip */}
        <div className="space-y-2">
          <div className="flex w-full h-14 rounded-2xl overflow-hidden p-1.5 clay-recessed gap-1 select-none">
            {analysis.segments.map((seg, idx) => {
              const isSelected = selectedSegment?.startDate === seg.startDate;
              const isHovered = hoveredSegment?.startDate === seg.startDate;
              const flexWeight = Math.max(1, seg.barCount);

              return (
                <div
                  key={`${seg.startDate}-${idx}`}
                  style={{ flex: flexWeight }}
                  onMouseEnter={() => setHoveredSegment(seg)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  onClick={() => setSelectedSegment(seg)}
                  className={`rounded-xl p-1.5 flex flex-col justify-between cursor-pointer transition-all duration-200 overflow-hidden ${
                    isSelected || isHovered
                      ? "bg-[var(--bg-elevated)] border border-[var(--accent-border)] transform -translate-y-0.5 shadow-md"
                      : "bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)]"
                  }`}
                  title={`${seg.label}: ${seg.startDate} to ${seg.endDate}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-[10px] text-[var(--text-primary)] truncate">
                      {seg.startDate.slice(5)}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: seg.color }}
                    />
                  </div>
                  <div className="truncate text-[9px] font-semibold text-[var(--text-secondary)]">
                    {seg.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Regime Inspection Card */}
          {active && (
            <div className="p-4 rounded-2xl clay-card space-y-3 mt-3 animate-in fade-in duration-150 border border-[var(--border)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] pb-2.5 gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: active.color }}
                  />
                  <div>
                    <span className="text-sm font-bold text-[var(--text-primary)] font-mono">{active.label}</span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] ml-2">
                      ({active.startDate} → {active.endDate})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)] font-mono">
                  <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Duration: <strong className="text-[var(--text-primary)]">{active.barCount} Sessions</strong></span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-1">
                <div className="p-2.5 rounded-xl clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)] font-sans">Period Return</div>
                  <div className={`text-base font-bold mt-0.5 ${active.returnPct >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                    {active.returnPct >= 0 ? `+${active.returnPct}%` : `${active.returnPct}%`}
                  </div>
                </div>
                <div className="p-2.5 rounded-xl clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)] font-sans">Annualized Volatility</div>
                  <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">{active.annualizedVol}%</div>
                </div>
                <div className="p-2.5 rounded-xl clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)] font-sans">Trading Bars</div>
                  <div className="text-base font-bold text-[var(--accent)] mt-0.5">{active.barCount}</div>
                </div>
                <div className="p-2.5 rounded-xl clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)] font-sans">Asset Profile</div>
                  <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">{asset}</div>
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                {active.dominantFeature}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 3. Transition Matrix & Strategy Performance by Regime */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Markov Transition Matrix (6 Cols) */}
        <div className="lg:col-span-6 clay-card p-5 rounded-2xl border border-[var(--border)] space-y-3 font-mono text-xs">
          <div className="border-b border-[var(--border)] pb-2 flex items-center justify-between">
            <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider">
              MARKOV TRANSITION PROBABILITY MATRIX
            </span>
            <span className="text-[10px] text-[var(--accent)]">STATE SHIFTS</span>
          </div>

          <div className="overflow-x-auto pt-1">
            <table className="w-full text-center text-[11px]">
              <thead>
                <tr className="border-b border-[var(--border)] text-[10px] text-[var(--text-muted)]">
                  <th className="py-2 text-left">FROM \ TO</th>
                  <th className="py-2">BULL</th>
                  <th className="py-2">BEAR</th>
                  <th className="py-2">RANGE</th>
                  <th className="py-2">VOL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {Object.keys(analysis.transitionMatrix).slice(0, 4).map((fromKey) => {
                  const row = analysis.transitionMatrix[fromKey as RegimeType] || {};
                  const label = REGIME_METADATA[fromKey as RegimeType]?.label || fromKey;

                  return (
                    <tr key={fromKey} className="hover:bg-[var(--bg-hover)]">
                      <td className="py-2 text-left font-bold text-[var(--text-primary)] truncate max-w-[100px]">
                        {label}
                      </td>
                      <td className="py-2 text-[var(--positive)] font-bold">{row["BULL_TREND"] ?? 0.15}</td>
                      <td className="py-2 text-[var(--negative)] font-bold">{row["BEAR_TREND"] ?? 0.12}</td>
                      <td className="py-2 text-[var(--accent)]">{row["RANGE_BOUND"] ?? 0.45}</td>
                      <td className="py-2 text-[var(--text-muted)]">{row["HIGH_VOL"] ?? 0.18}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Performance by Regime (6 Cols) */}
        <div className="lg:col-span-6 clay-card p-5 rounded-2xl border border-[var(--border)] space-y-3 font-mono text-xs">
          <div className="border-b border-[var(--border)] pb-2 flex items-center justify-between">
            <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider">
              STRATEGY PERFORMANCE BY REGIME
            </span>
            <span className="text-[10px] text-[var(--positive)]">ALPHA ATTRIBUTION</span>
          </div>

          <div className="space-y-2 pt-1">
            {analysis.strategyAttribution.map((strat) => (
              <div
                key={strat.regime}
                className="p-2.5 rounded-xl clay-recessed flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: strat.color }} />
                  <span className="font-bold text-[var(--text-primary)]">{strat.label}</span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span>Win Rate: <strong>{strat.winRate}%</strong></span>
                  <span>Sharpe: <strong>{strat.sharpe}</strong></span>
                  <span className={strat.totalReturn >= 0 ? "text-[var(--positive)] font-bold" : "text-[var(--negative)] font-bold"}>
                    {strat.totalReturn >= 0 ? `+${strat.totalReturn}%` : `${strat.totalReturn}%`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
