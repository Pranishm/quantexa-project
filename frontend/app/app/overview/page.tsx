"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  ArrowRight, 
  Layers, 
  BarChart3, 
  Sliders,
  ShieldCheck,
  Compass,
  Sparkles,
  Play,
  Clock
} from "lucide-react";
import { DEMO_ASSETS, PRESET_SCENARIOS, DEMO_ACTIVITIES } from "@/lib/demo-data";
import { useMarketSimulation } from "@/lib/market-simulation";
import { useWorkspaceModeStore } from "@/lib/workspace-mode";
import { useWorkspace } from "@/components/context/workspace-context";
import { TradingWorkspace } from "@/components/workspaces/trading-workspace";
import { LearningWorkspace } from "@/components/workspaces/learning-workspace";
import { AdminWorkspace } from "@/components/workspaces/admin-workspace";
import { QuantoraChart } from "@/components/charts/quantora-chart";
import { MarketHeatmap } from "@/components/features/market-heatmap";
import { InteractiveWatchlist } from "@/components/features/interactive-watchlist";

const MARKET_CONTEXT = [
  { label: "Market Regime", value: "Trend Expansion", note: "Multi-asset momentum positive", status: "positive" },
  { label: "Realized Volatility", value: "24.8%", note: "Normal historical range", status: "neutral" },
  { label: "Market Breadth", value: "+1.84 Ratio", note: "68% components above 50 SMA", status: "positive" },
  { label: "Cross-Asset Momentum", value: "+4.12σ", note: "Strong tech & digital beta", status: "positive" },
  { label: "Systemic Correlation", value: "+0.42", note: "Moderate clustering", status: "neutral" },
  { label: "Tail Risk VaR (95%)", value: "-2.14% 1D", note: "Within Basel parameters", status: "neutral" },
];

export default function OverviewPage() {
  const router = useRouter();
  const [activeAsset, setActiveAsset] = useState<string>("BTC");
  const [timeframe, setTimeframe] = useState<"1D" | "1W" | "1M" | "3M" | "1Y" | "ALL">("1M");

  const marketSim = useMarketSimulation();
  const { mode: workspaceMode, setMode: setWorkspaceMode } = useWorkspaceModeStore();
  const { role, mode } = useWorkspace();

  const selected = marketSim.assets[activeAsset] || DEMO_ASSETS["BTC"];

  // Role & Mode tailored workstation rendering
  if (mode === "TRADING" || role === "trader") {
    return (
      <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
        <TradingWorkspace />
      </div>
    );
  }

  if (role === "admin") {
    return (
      <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
        <AdminWorkspace />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* 24. ONE-CLICK LIVE RESEARCH HERO CALLOUT */}
      <div className="clay-card-elevated p-5 rounded-2xl border border-[var(--accent-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[var(--bg-elevated)] relative overflow-hidden">
        <div className="space-y-1 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
            <span className="text-[10px] font-mono text-[var(--accent)] uppercase font-bold tracking-wider">
              READY-TO-RUN QUANTITATIVE SCENARIO
            </span>
          </div>
          <h2 className="text-sm md:text-base font-bold text-[var(--text-primary)]">
            Explore Live Research Experiment: <span className="text-[var(--accent)]">BTC Trend Following</span>
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            SMA 20/50 dual moving average calibrated over 2019–2026 dataset with T+1 execution friction modeling.
          </p>
        </div>

        <div className="flex items-center gap-4 z-10 font-mono text-xs">
          <div className="text-right hidden sm:block">
            <div className="text-[10px] text-[var(--text-muted)] font-sans">Total Return</div>
            <div className="text-base font-bold text-[var(--positive)]">+34.2%</div>
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-[10px] text-[var(--text-muted)] font-sans">Sharpe Ratio</div>
            <div className="text-base font-bold text-[var(--accent)]">1.42</div>
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-[10px] text-[var(--text-muted)] font-sans">Max Drawdown</div>
            <div className="text-base font-bold text-[var(--negative)]">-12.8%</div>
          </div>
          <Link
            href="/app/research/backtest?preset=btc-trend"
            className="flex items-center gap-2 px-4 py-2.5 clay-button-primary rounded-xl text-xs font-bold transition-all uppercase tracking-wider whitespace-nowrap cursor-pointer shadow-lg"
          >
            <span>Open Research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 19. Mode Status Badge & Direct Switcher */}
      <div className="flex items-center justify-between px-4 py-2.5 clay-card rounded-2xl border border-[var(--border)] text-xs">
        <div className="flex items-center gap-2 font-mono">
          <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-bold">
            WORKSPACE: {workspaceMode.toUpperCase()} MODE
          </span>
          <span className="text-[var(--text-secondary)] font-sans hidden sm:inline">
            {workspaceMode === "trading" && "Trading-terminal layout with candles, simulated depth, watchlist & order history."}
            {workspaceMode === "research" && "Dense analytical environment with factor attribution, backtest manifolds, and cross-regime metrics."}
            {workspaceMode === "learning" && "Socratic quantitative education environment with guided derivations and AI Tutor support."}
          </span>
        </div>
        <div className="flex items-center gap-1 font-mono text-[10px]">
          {(["research", "trading", "learning"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setWorkspaceMode(m)}
              className={`px-2.5 py-1 rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                workspaceMode === m
                  ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                  : "clay-button text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* 20. TRADING MODE DASHBOARD (When Trading Mode is active) */}
      {workspaceMode === "trading" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Candlestick Chart View */}
            <div className="lg:col-span-8 clay-surface p-6 rounded-3xl space-y-4 border border-[var(--border)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[var(--text-primary)]">{activeAsset}/USD</span>
                  <span className={`text-xs font-bold ${selected.changePercent >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                    {selected.changePercent >= 0 ? `+${selected.changePercent}% ▲` : `${selected.changePercent}% ▼`}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] ml-2">CANDLESTICK L2 FEED</span>
                </div>
                <div className="flex items-center gap-1 text-[10px]">
                  {["1D", "1W", "1M", "1Y"].map((tf) => (
                    <button key={tf} className="px-2.5 py-0.5 rounded-lg clay-button text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Candlestick Bars */}
              <div className="h-56 flex items-end justify-between gap-3 px-2 pt-4">
                {[
                  { open: 101200, high: 102400, low: 100800, close: 102100, bull: true },
                  { open: 102100, high: 103100, low: 101900, close: 102800, bull: true },
                  { open: 102800, high: 103200, low: 102200, close: 102400, bull: false },
                  { open: 102400, high: 103600, low: 102300, close: 103400, bull: true },
                  { open: 103400, high: 104100, low: 103000, close: 103850, bull: true },
                  { open: 103850, high: 104400, low: 103500, close: 104284, bull: true },
                ].map((c, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div
                      style={{ height: "45%" }}
                      className={`w-[1.5px] mb-1 ${c.bull ? "bg-[#15956C]/60 dark:bg-[#35D39A]/60" : "bg-[#D94E5C]/60 dark:bg-[#FF6572]/60"}`}
                    />
                    <div
                      style={{ height: "35%" }}
                      className={`w-full max-w-[32px] rounded-sm ${c.bull ? "bg-[#15956C] dark:bg-[#35D39A]" : "bg-[#D94E5C] dark:bg-[#FF6572]"}`}
                    />
                  </div>
                ))}
              </div>

              {/* Volume Bars */}
              <div className="pt-2 border-t border-[var(--border)]">
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase mb-1">TRADING VOLUME</div>
                <div className="h-10 flex items-end justify-between gap-3 px-2">
                  {[1200, 1800, 950, 2100, 1900, 2400].map((v, idx) => (
                    <div
                      key={idx}
                      style={{ height: `${(v / 2400) * 100}%` }}
                      className="flex-1 max-w-[32px] bg-[var(--positive)]/30 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Watchlist */}
            <div className="lg:col-span-4 clay-surface p-5 rounded-3xl space-y-3 border border-[var(--border)] font-mono">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                <span className="text-xs font-bold text-[var(--text-primary)] uppercase">WATCHLIST</span>
                <span className="text-[10px] text-[var(--text-muted)]">4 CORE ASSETS</span>
              </div>
              <div className="space-y-2">
                {Object.values(marketSim.assets).map((a) => (
                  <div
                    key={a.symbol}
                    onClick={() => setActiveAsset(a.symbol)}
                    className={`p-3 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                      a.symbol === activeAsset
                        ? "clay-recessed bg-[var(--bg-recessed)] border border-[var(--accent-border)]"
                        : "clay-card hover:bg-[var(--bg-hover)] border border-[var(--border)]"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)]">{a.symbol}/USD</div>
                      <div className="text-[10px] text-[var(--text-muted)] font-sans">{a.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[var(--text-primary)]">${a.price.toLocaleString()}</div>
                      <div className={`text-[10px] font-bold ${a.changePercent >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                        {a.changePercent >= 0 ? `+${a.changePercent}% ▲` : `${a.changePercent}% ▼`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. Institutional Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">MARKET OVERVIEW</h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--positive-bg)] text-[var(--positive)] font-bold">
              ● DEMO STREAM
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            A cross-asset view of market microstructure, volatility drift, and systemic coupling.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-[11px] text-[var(--text-muted)]">FEED:</span>
          <span className="text-[11px] font-mono text-[var(--text-primary)] clay-recessed-sm px-2.5 py-0.5 rounded-lg">
            QUANTORA HIGH-FREQUENCY L2 (SIMULATED)
          </span>
          <span className="text-[11px] font-mono text-[var(--positive)] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse" />
            {marketSim.latencyMs}ms LATENCY
          </span>
        </div>
      </div>

      {/* 2. Molded Clay Market Cards (BTC, GOLD, SOL, NVDA) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            MOLDED MARKET CARDS (LIVE INTERPOLATING)
          </div>
          <span className="text-[10px] text-[var(--text-muted)] font-mono">CLICK TO SWITCH CHART</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(marketSim.assets).map((asset) => {
            const isCurrent = asset.symbol === activeAsset;
            const isUp = asset.changePercent >= 0;
            return (
              <div
                key={asset.symbol}
                onClick={() => setActiveAsset(asset.symbol)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 select-none ${
                  isCurrent
                    ? "clay-surface-recessed border border-[var(--accent-border)] transform translate-y-0.5"
                    : "clay-card hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--text-primary)] tracking-wide">
                    {asset.symbol}/USD
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    isCurrent 
                      ? "bg-[var(--accent)] text-white" 
                      : "bg-[var(--bg-hover)] text-[var(--text-secondary)]"
                  }`}>
                    {asset.regime}
                  </span>
                </div>
                <div className="text-xl font-bold font-mono text-[var(--text-primary)] mt-2">
                  ${asset.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[var(--border)]">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-xs font-mono font-semibold ${
                        isUp ? "text-[var(--positive)]" : "text-[var(--negative)]"
                      }`}
                    >
                      {isUp ? `+${asset.changePercent}%` : `${asset.changePercent}%`}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)]">24h</span>
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)]">
                    Sharpe: <strong className="text-[var(--text-secondary)]">{asset.sharpe}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Main Analytical Workspace (Interactive Lightweight Charts + Context Rail) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Market Visualization */}
        <div className="lg:col-span-8">
          <QuantoraChart symbol={activeAsset} height={420} />
        </div>

        {/* Right Side: MARKET CONTEXT & LIVE ACTIVITY */}
        <div className="lg:col-span-4 space-y-6">
          {/* Market Context Card */}
          <div className="clay-card p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">MARKET CONTEXT</span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">{marketSim.latencyMs}ms REFRESH</span>
            </div>

            <div className="divide-y divide-[var(--border)]">
              {MARKET_CONTEXT.map((ctx, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-[var(--text-primary)] font-medium">{ctx.label}</div>
                    <div className="text-[10px] text-[var(--text-muted)]">{ctx.note}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-semibold text-[var(--text-primary)]">{ctx.value}</div>
                    <div
                      className={`text-[9px] font-medium ${
                        ctx.status === "positive"
                          ? "text-[var(--positive)]"
                          : ctx.status === "negative"
                          ? "text-[var(--negative)]"
                          : "text-[var(--neutral)]"
                      }`}
                    >
                      {ctx.status.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 27. Real-Time Research Activity Stream */}
          <div className="clay-card p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                RESEARCH ACTIVITY
              </span>
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <span className="text-[var(--positive)] font-bold">STREAM LIVE</span>
                <span className="text-[var(--text-muted)]">•</span>
                <Link href="/app/account/activity" className="text-[var(--accent)] hover:underline font-semibold">
                  Full Audit Log (125) →
                </Link>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              {DEMO_ACTIVITIES.map((act) => (
                <div key={act.id} className="p-2.5 rounded-xl clay-recessed-sm space-y-0.5">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-[var(--accent)] font-bold">{act.title}</span>
                    <span className="text-[var(--text-muted)]">{act.time}</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-secondary)]">{act.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Watchlist & Market Heatmap Integration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <InteractiveWatchlist />
        </div>
        <div className="lg:col-span-7">
          <MarketHeatmap />
        </div>
      </div>

      {/* 23. PRESET RESEARCH SCENARIOS (4 READY-MADE EXPERIMENTS) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
            PREDEFINED RESEARCH SCENARIOS
          </div>
          <span className="text-[10px] font-mono text-[var(--text-muted)]">ONE-CLICK BENCHMARKS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRESET_SCENARIOS.map((scen) => (
            <div
              key={scen.id}
              onClick={() => router.push(scen.route)}
              className="clay-card p-4 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all space-y-2 select-none"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--text-primary)]">{scen.title}</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold">
                  {scen.timeframe}
                </span>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] truncate">{scen.subtitle}</div>
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border)] font-mono text-xs">
                <div>
                  <span className="text-[9px] text-[var(--text-muted)] block font-sans">Return</span>
                  <span className="font-bold text-[var(--positive)]">{scen.returnPct}</span>
                </div>
                <div>
                  <span className="text-[9px] text-[var(--text-muted)] block font-sans">Sharpe</span>
                  <span className="font-bold text-[var(--accent)]">{scen.sharpe}</span>
                </div>
                <div>
                  <span className="text-[9px] text-[var(--text-muted)] block font-sans">Max DD</span>
                  <span className="font-bold text-[var(--negative)]">{scen.maxDd}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
