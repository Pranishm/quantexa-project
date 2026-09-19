"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Play, 
  RotateCcw, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Sliders, 
  FileText,
  Sparkles,
  ChevronDown,
  BarChart2,
  TrendingUp,
  Info,
  Bookmark,
  Scale,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { marketHub, type AssetKey } from "@/lib/market-data-hub";
import {
  runBacktestSimulation,
  saveStrategy,
  getSavedStrategies,
  type StrategyId,
  type BacktestResult,
  type BacktestTradeRecord,
  type SavedStrategy
} from "@/lib/backtest-engine";
import { QuantoraChart } from "@/components/charts/quantora-chart";

const PROCEDURAL_STEPS = [
  { label: "QUEUED", detail: "Validating input parameters & capital constraints" },
  { label: "RUNNING", detail: "Loading market bars from institutional cache" },
  { label: "CALCULATING RETURNS", detail: "Computing dual-indicator signals & position entries" },
  { label: "CALCULATING RISK", detail: "Applying transaction fee & adverse slippage friction" },
  { label: "CALCULATING TRADES", detail: "Resolving exit triggers & mark-to-market accounting" },
  { label: "FINALIZING", detail: "Compiling Sharpe, Sortino, drawdown & benchmark curves" },
  { label: "COMPLETED", detail: "Simulation finalized with verified audit trail" },
];

function BacktestRunnerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [asset, setAsset] = useState<AssetKey>("BTC");
  const [strategyId, setStrategyId] = useState<StrategyId>("sma_cross");
  const [fastPeriod, setFastPeriod] = useState(20);
  const [slowPeriod, setSlowPeriod] = useState(50);
  const [capital, setCapital] = useState(100000);
  const [commissionBps, setCommissionBps] = useState(5);
  const [slippageBps, setSlippageBps] = useState(3);
  const [timeframe, setTimeframe] = useState<"1M" | "3M" | "6M" | "1Y" | "3Y" | "MAX">("1Y");

  const [chartMode, setChartMode] = useState<"EQUITY" | "DRAWDOWN" | "BENCHMARK" | "CANDLE">("EQUITY");
  const [indicatorsOpen, setIndicatorsOpen] = useState(false);
  const [activeIndicators, setActiveIndicators] = useState<string[]>(["SMA", "EMA", "VOLUME"]);
  const [hoveredTrade, setHoveredTrade] = useState<BacktestTradeRecord | null>(null);

  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [activeResult, setActiveResult] = useState<BacktestResult | null>(null);
  const [savedStrategies, setSavedStrategies] = useState<SavedStrategy[]>([]);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [stratNameInput, setStratNameInput] = useState("");
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Live market quote
  const { metrics } = marketHub.getAllMetrics ? { metrics: marketHub.getAllMetrics() } : { metrics: {} as any };
  const currentAssetMetrics = marketHub.getMetrics(asset);

  // Load saved strategies on mount
  useEffect(() => {
    setSavedStrategies(getSavedStrategies());
  }, []);

  // Run initial backtest calculation on mount
  useEffect(() => {
    try {
      const initial = runBacktestSimulation({
        asset,
        strategyId,
        timeframe,
        initialCapital: capital,
        params: { fastPeriod, slowPeriod },
        sizing: "fixed",
        sizingValue: 0.95,
        commissionBps,
        slippageBps,
        spreadBps: 2,
      });
      setActiveResult(initial);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleRunBacktest = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < PROCEDURAL_STEPS.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        try {
          const res = runBacktestSimulation({
            asset,
            strategyId,
            timeframe,
            initialCapital: capital,
            params: { fastPeriod, slowPeriod },
            sizing: "fixed",
            sizingValue: 0.95,
            commissionBps,
            slippageBps,
            spreadBps: 2,
          });
          setActiveResult(res);
        } catch (e) {
          console.error(e);
        }
        setIsRunning(false);
      }
    }, 180);
  };

  const handleSaveStrategy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stratNameInput.trim()) return;

    const saved = saveStrategy({
      name: stratNameInput.trim(),
      asset,
      strategyId,
      params: { fastPeriod, slowPeriod },
      initialCapital: capital,
      timeframe,
      lastSharpe: activeResult?.sharpe,
      lastTotalReturn: activeResult?.totalReturn,
    });

    setSavedStrategies(getSavedStrategies());
    setSaveModalOpen(false);
    setStratNameInput("");
    setSaveSuccessMsg(`Strategy "${saved.name}" saved to My Strategies.`);
    setTimeout(() => setSaveSuccessMsg(null), 3500);
  };

  const res = activeResult;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-2">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] font-mono">
              STRATEGY BACKTESTING ENGINE
            </h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--positive-bg)] text-[var(--positive)] font-bold border border-[var(--positive-border)] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse" />
              DYNAMIC CALCULATIONS · 2024 — 2026
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-bold text-[var(--accent)] font-mono">
              {asset} · {strategyId === "sma_cross" ? "SMA Dual Crossover" : strategyId === "ema_trend" ? "EMA Trend Filter" : strategyId === "momentum" ? "Momentum Breakout" : "Mean Reversion"}
            </span>
            <span className="text-xs text-[var(--text-secondary)]">— Deterministic historical execution modeling</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSaveModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-primary)] rounded-xl font-semibold transition-colors border border-[var(--border)]"
          >
            <Bookmark className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Save Strategy</span>
          </button>
          <Link
            href="/app/research/robustness"
            className="flex items-center gap-1.5 px-3.5 py-1.5 clay-button bg-[var(--accent)] text-white text-xs rounded-xl font-semibold transition-colors shadow-sm"
          >
            <span>Robustness Lab</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {saveSuccessMsg && (
        <div className="p-3 rounded-2xl bg-[var(--positive)]/10 border border-[var(--positive)]/30 text-xs font-mono text-[var(--positive)] flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* 2. Interactive Strategy Controls */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 clay-card p-4 text-xs rounded-2xl border border-[var(--border)]">
        <div>
          <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold">
            ASSET
          </label>
          <select
            value={asset}
            onChange={(e) => setAsset(e.target.value as AssetKey)}
            className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none cursor-pointer text-xs border border-[var(--border)]"
          >
            <option value="BTC">BTC / USD</option>
            <option value="SOL">SOL / USD</option>
            <option value="GOLD">GOLD (XAU)</option>
            <option value="NVDA">NVDA Corp</option>
          </select>
        </div>

        <div>
          <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold">
            STRATEGY
          </label>
          <select
            value={strategyId}
            onChange={(e) => setStrategyId(e.target.value as StrategyId)}
            className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none cursor-pointer truncate text-xs border border-[var(--border)]"
          >
            <option value="sma_cross">SMA Crossover</option>
            <option value="ema_trend">EMA Trend</option>
            <option value="momentum">Momentum Breakout</option>
            <option value="mean_reversion">Mean Reversion</option>
          </select>
        </div>

        <div>
          <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold">
            FAST / LOOKBACK
          </label>
          <input
            type="number"
            value={fastPeriod}
            onChange={(e) => setFastPeriod(Math.max(2, parseInt(e.target.value) || 2))}
            className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none text-xs border border-[var(--border)]"
          />
        </div>

        <div>
          <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold">
            SLOW / FILTER
          </label>
          <input
            type="number"
            value={slowPeriod}
            onChange={(e) => setSlowPeriod(Math.max(5, parseInt(e.target.value) || 5))}
            className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none text-xs border border-[var(--border)]"
          />
        </div>

        <div>
          <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold">
            CAPITAL ($)
          </label>
          <input
            type="number"
            value={capital}
            step="5000"
            onChange={(e) => setCapital(Math.max(1000, parseInt(e.target.value) || 10000))}
            className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none text-xs border border-[var(--border)]"
          />
        </div>

        <div>
          <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold">
            FRICTION (BPS)
          </label>
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={commissionBps}
              title="Commission bps"
              onChange={(e) => setCommissionBps(parseInt(e.target.value) || 0)}
              className="w-1/2 clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2 py-1.5 text-[var(--text-primary)] font-mono text-xs border border-[var(--border)]"
            />
            <input
              type="number"
              value={slippageBps}
              title="Slippage bps"
              onChange={(e) => setSlippageBps(parseInt(e.target.value) || 0)}
              className="w-1/2 clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2 py-1.5 text-[var(--text-primary)] font-mono text-xs border border-[var(--border)]"
            />
          </div>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleRunBacktest}
            disabled={isRunning}
            className="w-full py-2 clay-button rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.98] border border-[var(--accent-border)] bg-[var(--bg-elevated)] hover:bg-[var(--accent)] hover:text-white transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[var(--accent)]" />
            <span>{isRunning ? "Simulating..." : "RUN BACKTEST ▶"}</span>
          </button>
        </div>
      </div>

      {/* 3. Procedural Execution Sequence Progress */}
      {isRunning && (
        <div className="clay-card-elevated p-6 rounded-2xl space-y-3 font-mono text-xs border border-[var(--border-strong)] animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-[var(--text-secondary)] text-xs font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
              EXECUTING QUANTITATIVE BACKTEST STAGES
            </span>
            <span className="text-[var(--accent)] font-bold">
              STAGE {currentStepIndex + 1} OF {PROCEDURAL_STEPS.length}
            </span>
          </div>

          <div className="h-2 w-full clay-recessed rounded-full overflow-hidden p-0.5">
            <div
              style={{ width: `${((currentStepIndex + 1) / PROCEDURAL_STEPS.length) * 100}%` }}
              className="h-full bg-[var(--accent)] rounded-full transition-all duration-200 shadow-[0_0_8px_var(--accent)]"
            />
          </div>

          <div className="space-y-1.5 pt-2">
            {PROCEDURAL_STEPS.map((step, idx) => {
              if (idx > currentStepIndex) return null;
              const isCurrent = idx === currentStepIndex;

              return (
                <div key={idx} className="flex items-center justify-between text-xs animate-in fade-in slide-in-from-left-2 duration-150">
                  <span className={isCurrent ? "text-[var(--accent)] font-bold" : "text-[var(--text-primary)]"}>
                    {isCurrent ? "►" : "✓"} {step.label}
                  </span>
                  <span className="text-[10px] text-[var(--positive)]">{step.detail}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Results & Performance Breakdown */}
      {res && !isRunning && (
        <div className="space-y-6">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-xs font-mono">
            <div className="clay-card p-3 rounded-xl border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">Total Return</div>
              <div className={`text-lg font-bold mt-0.5 ${res.totalReturn >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                {res.totalReturn >= 0 ? `+${res.totalReturn}%` : `${res.totalReturn}%`}
              </div>
            </div>
            <div className="clay-card p-3 rounded-xl border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">CAGR</div>
              <div className="text-lg font-bold text-[var(--text-primary)] mt-0.5">{res.cagr}%</div>
            </div>
            <div className="clay-card p-3 rounded-xl border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">Sharpe Ratio</div>
              <div className="text-lg font-bold text-[var(--accent)] mt-0.5">{res.sharpe}</div>
            </div>
            <div className="clay-card p-3 rounded-xl border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">Sortino Ratio</div>
              <div className="text-lg font-bold text-[var(--text-primary)] mt-0.5">{res.sortino}</div>
            </div>
            <div className="clay-card p-3 rounded-xl border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">Max Drawdown</div>
              <div className="text-lg font-bold text-[var(--negative)] mt-0.5">{res.maxDrawdown}%</div>
            </div>
            <div className="clay-card p-3 rounded-xl border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">Win Rate</div>
              <div className="text-lg font-bold text-[var(--text-primary)] mt-0.5">{res.winRate}%</div>
            </div>
            <div className="clay-card p-3 rounded-xl border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">Profit Factor</div>
              <div className="text-lg font-bold text-[var(--text-primary)] mt-0.5">{res.profitFactor}</div>
            </div>
            <div className="clay-card p-3 rounded-xl border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">Total Trades</div>
              <div className="text-lg font-bold text-[var(--text-secondary)] mt-0.5">{res.totalTrades}</div>
            </div>
          </div>

          {/* Strategy vs Benchmark Comparison Card (Rule 6) */}
          <div className="clay-card p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-bold text-[var(--text-primary)] uppercase">
                  STRATEGY VS. BUY &amp; HOLD BENCHMARK
                </span>
              </div>
              <span className="text-[10px] text-[var(--text-muted)]">
                Same Asset ({res.asset}) · Starting Capital ${res.initialCapital.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1 text-center">
              <div className="clay-recessed p-2.5 rounded-xl">
                <div className="text-[10px] text-[var(--text-muted)]">Metric</div>
                <div className="font-bold mt-1 text-[var(--text-primary)]">Strategy</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Benchmark</div>
              </div>
              <div className="clay-recessed p-2.5 rounded-xl">
                <div className="text-[10px] text-[var(--text-muted)]">Total Return</div>
                <div className="font-bold mt-1 text-[var(--positive)]">+{res.totalReturn}%</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">+{res.benchmarkMetrics.totalReturn}%</div>
              </div>
              <div className="clay-recessed p-2.5 rounded-xl">
                <div className="text-[10px] text-[var(--text-muted)]">Max Drawdown</div>
                <div className="font-bold mt-1 text-[var(--negative)]">{res.maxDrawdown}%</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{res.benchmarkMetrics.maxDrawdown}%</div>
              </div>
              <div className="clay-recessed p-2.5 rounded-xl">
                <div className="text-[10px] text-[var(--text-muted)]">Sharpe Ratio</div>
                <div className="font-bold mt-1 text-[var(--accent)]">{res.sharpe}</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{res.benchmarkMetrics.sharpe}</div>
              </div>
              <div className="clay-recessed p-2.5 rounded-xl">
                <div className="text-[10px] text-[var(--text-muted)]">Alpha Spread</div>
                <div className={`font-bold mt-1 ${res.totalReturn >= res.benchmarkMetrics.totalReturn ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                  {res.totalReturn >= res.benchmarkMetrics.totalReturn ? "+" : ""}{(res.totalReturn - res.benchmarkMetrics.totalReturn).toFixed(2)}%
                </div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Excess Net Return</div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="clay-surface p-6 rounded-3xl space-y-4 border border-[var(--border)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border)] pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                    {chartMode === "EQUITY" ? "CALCULATED EQUITY CURVE" : chartMode === "DRAWDOWN" ? "UNDERWATER DRAWDOWN" : chartMode === "BENCHMARK" ? "STRATEGY VS BENCHMARK" : "PRICE CANDLESTICK"}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1 font-mono">
                  <span className="text-xl font-bold text-[var(--text-primary)]">${res.finalEquity.toLocaleString()}</span>
                  <span className={`text-xs font-bold ${res.totalReturn >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                    {res.totalReturn >= 0 ? `+${res.totalReturn}%` : `${res.totalReturn}%`}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)]">
                    Fees: ${res.totalFees} · Slippage: ${res.totalSlippage}
                  </span>
                </div>
              </div>

              {/* View Selector */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center p-0.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono">
                  {(["EQUITY", "DRAWDOWN", "BENCHMARK", "CANDLE"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setChartMode(m)}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        chartMode === m
                          ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-sm"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                <div className="flex items-center p-0.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[10px] font-mono">
                  {(["1M", "3M", "6M", "1Y", "3Y", "MAX"] as const).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf as any)}
                      className={`px-2 py-0.5 rounded-lg transition-all ${
                        timeframe === tf
                          ? "bg-[var(--accent)] text-white font-bold"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Render Selected Chart View */}
            {chartMode === "CANDLE" ? (
              <div className="-mx-6 -mb-6">
                <QuantoraChart
                  symbol={res.asset}
                  showTrades={true}
                  defaultTimeframe="ALL"
                  defaultMode="CANDLE"
                  height={420}
                />
              </div>
            ) : (
              <div className="h-72 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 800 240" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="60" x2="800" y2="60" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="120" x2="800" y2="120" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="180" x2="800" y2="180" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />

                  {chartMode === "DRAWDOWN" ? (
                    (() => {
                      const pts = res.drawdownCurve;
                      const minDd = Math.min(-30, res.maxDrawdown * 1.2);
                      const path = pts.map((p, i) => {
                        const x = (i / (pts.length - 1)) * 800;
                        const y = (p.drawdownPct / minDd) * 200 + 20;
                        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                      }).join(" ");

                      return (
                        <>
                          <path d={`${path} L 800,20 L 0,20 Z`} fill="var(--negative)" fillOpacity="0.25" />
                          <path d={path} fill="none" stroke="var(--negative)" strokeWidth="2" />
                        </>
                      );
                    })()
                  ) : (
                    (() => {
                      const pts = res.equityCurve;
                      const minEq = Math.min(...pts.map((p) => p.equity), ...res.benchmarkCurve.map((b) => b.equity)) * 0.95;
                      const maxEq = Math.max(...pts.map((p) => p.equity), ...res.benchmarkCurve.map((b) => b.equity)) * 1.05;
                      const range = maxEq - minEq || 1;

                      // Benchmark Curve
                      const benchPath = res.benchmarkCurve.map((b, i) => {
                        const x = (i / (res.benchmarkCurve.length - 1)) * 800;
                        const y = 220 - ((b.equity - minEq) / range) * 200;
                        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                      }).join(" ");

                      // Strategy Curve
                      const stratPath = pts.map((p, i) => {
                        const x = (i / (pts.length - 1)) * 800;
                        const y = 220 - ((p.equity - minEq) / range) * 200;
                        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                      }).join(" ");

                      return (
                        <>
                          {/* Benchmark */}
                          <path d={benchPath} fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

                          {/* Strategy Fill & Stroke */}
                          <path d={`${stratPath} L 800,240 L 0,240 Z`} fill="var(--accent)" fillOpacity="0.15" />
                          <path d={stratPath} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
                        </>
                      );
                    })()
                  )}
                </svg>

                <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1">
                  <span>{res.startDate}</span>
                  <span>{chartMode === "BENCHMARK" ? "Purple: Strategy · Muted Dashed: Buy & Hold Benchmark" : `${res.totalTrades} Executed Trades`}</span>
                  <span>{res.endDate}</span>
                </div>
              </div>
            )}
          </div>

          {/* Trade History Log Table */}
          <div className="clay-card p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
              <span className="font-bold text-[var(--text-primary)] uppercase">
                EXECUTED TRADE HISTORY ({res.trades.length} Fills)
              </span>
              <span className="text-[10px] text-[var(--text-muted)]">
                Net Profit Factor: {res.profitFactor} · Win Rate: {res.winRate}%
              </span>
            </div>

            <div className="overflow-x-auto max-h-64 overflow-y-auto">
              <table className="w-full text-left text-[11px]">
                <thead className="text-[10px] text-[var(--text-muted)] border-b border-[var(--border)] uppercase">
                  <tr>
                    <th className="py-2">ID</th>
                    <th className="py-2">Entry</th>
                    <th className="py-2">Exit</th>
                    <th className="py-2">Buy Price</th>
                    <th className="py-2">Exit Price</th>
                    <th className="py-2">Hold</th>
                    <th className="py-2">Fees</th>
                    <th className="py-2 text-right">Net P&amp;L</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {res.trades.map((t) => (
                    <tr key={t.id} className="hover:bg-[var(--bg-hover)] transition-colors">
                      <td className="py-1.5 font-bold text-[var(--accent)]">{t.id}</td>
                      <td className="py-1.5 text-[var(--text-secondary)]">{t.entryDate}</td>
                      <td className="py-1.5 text-[var(--text-secondary)]">{t.exitDate}</td>
                      <td className="py-1.5">${t.entryPrice.toLocaleString()}</td>
                      <td className="py-1.5">${t.exitPrice.toLocaleString()}</td>
                      <td className="py-1.5 text-[var(--text-muted)]">{t.holdingDays}d</td>
                      <td className="py-1.5 text-[var(--text-muted)]">${t.fees}</td>
                      <td className={`py-1.5 text-right font-bold ${t.netPnl >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                        {t.netPnl >= 0 ? `+$${t.netPnl.toLocaleString()}` : `-$${Math.abs(t.netPnl).toLocaleString()}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Save Strategy Modal */}
      {saveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="clay-card w-full max-w-md rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-[var(--text-primary)]">Save Current Strategy</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Persist strategy parameters, asset selection, and risk bounds to your institutional workspace.
            </p>

            <form onSubmit={handleSaveStrategy} className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-[var(--text-muted)] uppercase mb-1">Strategy Name</label>
                <input
                  type="text"
                  required
                  value={stratNameInput}
                  onChange={(e) => setStratNameInput(e.target.value)}
                  placeholder="e.g. BTC Trend Alpha 20/50"
                  className="w-full px-3 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="clay-recessed p-3 rounded-xl space-y-1 text-[11px] text-[var(--text-secondary)]">
                <div>Asset: <span className="font-bold text-[var(--text-primary)]">{asset}</span></div>
                <div>Fast: <span className="font-bold text-[var(--text-primary)]">{fastPeriod}</span> · Slow: <span className="font-bold text-[var(--text-primary)]">{slowPeriod}</span></div>
                <div>Capital: <span className="font-bold text-[var(--text-primary)]">${capital.toLocaleString()}</span></div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSaveModalOpen(false)}
                  className="px-3 py-1.5 rounded-xl text-xs border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-[var(--accent)] text-white font-bold text-xs"
                >
                  Save Strategy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BacktestPage() {
  return (
    <Suspense fallback={<div className="p-6 text-xs text-[var(--text-muted)] font-mono">Loading Backtest Engine...</div>}>
      <BacktestRunnerContent />
    </Suspense>
  );
}
