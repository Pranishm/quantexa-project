"use client";

import { useState, useEffect, useRef } from "react";
import {
  Trophy, Play, Zap, RefreshCw, ArrowUpRight, CheckCircle2,
  Sliders, Shield, BarChart3, TrendingUp, AlertTriangle, Layers, Activity
} from "lucide-react";
import { PRESET_SCENARIOS, CANONICAL_BACKTEST } from "@/lib/demo-data";
import Link from "next/link";

interface ContenderStrategy {
  id: string;
  name: string;
  asset: string;
  type: string;
  description: string;
  netReturn: number;
  sharpe: number;
  maxDrawdown: number;
  trades: number;
  costImpact: number;
  regimeBull: number;
  regimeHighVol: number;
  regimeRange: number;
  color: string;
  curve: number[];
}

const STRATEGIES: ContenderStrategy[] = [
  {
    id: "btc-trend",
    name: "Strategy A: BTC Trend Following (20/50 SMA)",
    asset: "BTC/USD",
    type: "Trend Following",
    description: "Multi-timeframe SMA crossover with volatility breakout filter and dynamic stop-loss.",
    netReturn: 34.2,
    sharpe: 1.62,
    maxDrawdown: -14.2,
    trades: 20,
    costImpact: -1.8,
    regimeBull: 28.4,
    regimeHighVol: -4.1,
    regimeRange: 9.9,
    color: "#6757E8",
    curve: [
      100, 102, 101, 104, 103, 106, 108, 107, 111, 114, 112, 116, 115, 119,
      122, 120, 118, 123, 126, 124, 128, 131, 129, 133, 132, 135, 134.2
    ]
  },
  {
    id: "gold-meanrev",
    name: "Strategy B: Gold Mean Reversion (Bollinger + RSI)",
    asset: "GOLD/USD",
    type: "Mean Reversion",
    description: "Statistical arbitrage trading extreme band deviations in precious metals with regime gating.",
    netReturn: 18.7,
    sharpe: 1.34,
    maxDrawdown: -8.4,
    trades: 34,
    costImpact: -2.9,
    regimeBull: 8.2,
    regimeHighVol: 6.9,
    regimeRange: 12.4,
    color: "#F59E0B",
    curve: [
      100, 101, 102, 101.5, 103, 102.5, 104, 105, 104.5, 106, 107, 106.5, 108,
      109, 108.5, 110, 111, 110.5, 112, 113, 112.5, 114, 115, 116, 117, 118, 118.7
    ]
  },
  {
    id: "sol-momentum",
    name: "Strategy C: SOL High-Beta Momentum Breakout",
    asset: "SOL/USD",
    type: "Momentum",
    description: "Aggressive breakout strategy exploiting volatility expansion with 2.5x ATR trailing stop.",
    netReturn: 52.8,
    sharpe: 1.48,
    maxDrawdown: -26.1,
    trades: 48,
    costImpact: -4.6,
    regimeBull: 46.2,
    regimeHighVol: 18.3,
    regimeRange: -11.7,
    color: "#10B981",
    curve: [
      100, 97, 103, 101, 108, 105, 114, 110, 122, 118, 127, 121, 135, 128,
      142, 134, 148, 139, 155, 146, 160, 151, 158, 149, 156, 150, 152.8
    ]
  },
  {
    id: "nvda-factor",
    name: "Strategy D: NVDA Semiconductor Regime Alpha",
    asset: "NVDA",
    type: "Factor Momentum",
    description: "Machine-learning factor rank tracking computing hardware capex cycles and earnings revisions.",
    netReturn: 27.5,
    sharpe: 1.55,
    maxDrawdown: -16.8,
    trades: 26,
    costImpact: -1.4,
    regimeBull: 24.1,
    regimeHighVol: -2.3,
    regimeRange: 5.7,
    color: "#3B82F6",
    curve: [
      100, 103, 102, 105, 108, 106, 110, 112, 111, 115, 117, 116, 119, 122,
      120, 123, 125, 122, 124, 126, 124, 127, 128, 126, 128, 127, 127.5
    ]
  }
];

const SIM_STAGES = [
  "INITIALIZING ARENA ENGINE",
  "LOADING CANONICAL 2026 MARKET DATA",
  "SIMULATING STRATEGY A EXECUTION",
  "SIMULATING STRATEGY B EXECUTION",
  "APPLYING REGIME SHIFTS (BULL / RANGE / VOL)",
  "CALCULATING SLIPPAGE & TRANSACTION COSTS",
  "TOURNAMENT EXECUTION COMPLETED"
];

export default function ArenaPage() {
  const [stratAId, setStratAId] = useState("btc-trend");
  const [stratBId, setStratBId] = useState("gold-meanrev");
  const [capital, setCapital] = useState("100000");
  const [universe, setUniverse] = useState("BTC, SOL, GOLD, NVDA");

  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [raceProgress, setRaceProgress] = useState(1); // 0 to 1
  const [hasCompleted, setHasCompleted] = useState(true);

  const stratA = STRATEGIES.find((s) => s.id === stratAId) || STRATEGIES[0];
  const stratB = STRATEGIES.find((s) => s.id === stratBId) || STRATEGIES[1];

  const runTournament = () => {
    setIsSimulating(true);
    setHasCompleted(false);
    setRaceProgress(0);
    setCurrentStageIdx(0);

    let stage = 0;
    const stageInterval = setInterval(() => {
      stage++;
      if (stage < SIM_STAGES.length) {
        setCurrentStageIdx(stage);
      } else {
        clearInterval(stageInterval);
      }
    }, 450);

    // Progressive curve animation
    let prog = 0;
    const raceInterval = setInterval(() => {
      prog += 0.04;
      if (prog >= 1) {
        setRaceProgress(1);
        setIsSimulating(false);
        setHasCompleted(true);
        clearInterval(raceInterval);
      } else {
        setRaceProgress(prog);
      }
    }, 100);
  };

  // Generate SVG path for equity curve
  const renderCurve = (points: number[], progress: number, color: string) => {
    const totalPoints = points.length;
    const visibleCount = Math.max(2, Math.floor(totalPoints * progress));
    const activeSlice = points.slice(0, visibleCount);

    const min = 90;
    const max = 160;
    const width = 800;
    const height = 260;

    const pathData = activeSlice.map((val, idx) => {
      const x = (idx / (totalPoints - 1)) * width;
      const y = height - ((val - min) / (max - min)) * (height - 30) - 15;
      return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");

    return (
      <path
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-75"
      />
    );
  };

  const winner = stratA.netReturn > stratB.netReturn ? stratA : stratB;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Top Header & Simulation Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono tracking-wider text-[var(--accent)] font-semibold uppercase px-2.5 py-0.5 rounded-full clay-recessed border border-[var(--accent)]/20">
              STRATEGY SIMULATION ARENA
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">DETERMINISTIC 2026 UNIVERSE</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Strategy vs Strategy Tournament
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            Simulate head-to-head strategy performance under identical historical market regimes, slippage, and fees. Race equity curves along the canonical timeline.
          </p>
        </div>

        {/* Global simulation action */}
        <div className="flex items-center gap-3">
          <button
            onClick={runTournament}
            disabled={isSimulating}
            className="px-6 py-2.5 rounded-xl font-medium text-sm text-white bg-[var(--accent)] hover:opacity-95 flex items-center gap-2 clay-button transition-all disabled:opacity-50 shadow-lg shadow-[var(--accent)]/20"
          >
            {isSimulating ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <span>Simulating Tournament...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Run Strategy Simulation</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tournament Parameters Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 clay-card p-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] text-xs">
        <div>
          <label className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
            Market Universe
          </label>
          <div className="mt-1 font-mono font-semibold text-[var(--text-primary)]">
            BTC, SOL, GOLD, NVDA (4 Assets)
          </div>
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
            Virtual Capital
          </label>
          <select
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            className="mt-1 w-full bg-[var(--bg-recessed)] border border-[var(--border)] rounded-lg px-2.5 py-1 font-mono text-[var(--text-primary)] focus:outline-none"
          >
            <option value="50000">$50,000 Paper Capital</option>
            <option value="100000">$100,000 Paper Capital (Default)</option>
            <option value="250000">$250,000 Paper Capital</option>
          </select>
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
            Execution Friction
          </label>
          <div className="mt-1 font-mono font-semibold text-[var(--text-primary)]">
            5 bps Slippage + 2 bps Maker/Taker
          </div>
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
            Historical Horizon
          </label>
          <div className="mt-1 font-mono font-semibold text-[var(--text-primary)]">
            2019 – 2026 (750+ OHLCV Bars)
          </div>
        </div>
      </div>

      {/* Stage Progression Banner (If Simulating) */}
      {isSimulating && (
        <div className="clay-card p-4 rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/5 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--accent)]">
            <span className="font-bold flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              {SIM_STAGES[currentStageIdx]}
            </span>
            <span>Step {currentStageIdx + 1} of {SIM_STAGES.length}</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] transition-all duration-300"
              style={{ width: `${((currentStageIdx + 1) / SIM_STAGES.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Head-to-Head Selectors: STRATEGY A vs STRATEGY B */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Strategy A Card */}
        <div className="clay-card p-6 rounded-3xl border-2 border-[var(--accent)]/40 bg-[var(--bg-surface)] space-y-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                CONTENDER A
              </span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
              {stratA.asset}
            </span>
          </div>

          <div>
            <label className="text-[10px] text-[var(--text-muted)] uppercase font-bold">Select Strategy</label>
            <select
              value={stratAId}
              onChange={(e) => setStratAId(e.target.value)}
              className="w-full mt-1 bg-[var(--bg-recessed)] border border-[var(--border)] rounded-xl px-3 py-2 text-sm font-semibold text-[var(--text-primary)] focus:outline-none"
            >
              {STRATEGIES.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{stratA.description}</p>

          <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-[var(--border)] font-mono">
            <div className="clay-recessed p-2.5 rounded-xl">
              <div className="text-[10px] text-[var(--text-muted)]">Net Return</div>
              <div className="text-base font-bold text-[var(--positive)] mt-0.5">+{stratA.netReturn}%</div>
            </div>
            <div className="clay-recessed p-2.5 rounded-xl">
              <div className="text-[10px] text-[var(--text-muted)]">Sharpe</div>
              <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">{stratA.sharpe}</div>
            </div>
            <div className="clay-recessed p-2.5 rounded-xl">
              <div className="text-[10px] text-[var(--text-muted)]">Max DD</div>
              <div className="text-base font-bold text-[var(--negative)] mt-0.5">{stratA.maxDrawdown}%</div>
            </div>
          </div>
        </div>

        {/* VS Badge in Center */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full clay-card border border-[var(--border)] bg-[var(--bg-surface)] items-center justify-center font-bold text-xs text-[var(--text-primary)] shadow-2xl">
          VS
        </div>

        {/* Strategy B Card */}
        <div className="clay-card p-6 rounded-3xl border-2 border-amber-500/40 bg-[var(--bg-surface)] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                CONTENDER B
              </span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 font-semibold">
              {stratB.asset}
            </span>
          </div>

          <div>
            <label className="text-[10px] text-[var(--text-muted)] uppercase font-bold">Select Strategy</label>
            <select
              value={stratBId}
              onChange={(e) => setStratBId(e.target.value)}
              className="w-full mt-1 bg-[var(--bg-recessed)] border border-[var(--border)] rounded-xl px-3 py-2 text-sm font-semibold text-[var(--text-primary)] focus:outline-none"
            >
              {STRATEGIES.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{stratB.description}</p>

          <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-[var(--border)] font-mono">
            <div className="clay-recessed p-2.5 rounded-xl">
              <div className="text-[10px] text-[var(--text-muted)]">Net Return</div>
              <div className="text-base font-bold text-[var(--positive)] mt-0.5">+{stratB.netReturn}%</div>
            </div>
            <div className="clay-recessed p-2.5 rounded-xl">
              <div className="text-[10px] text-[var(--text-muted)]">Sharpe</div>
              <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">{stratB.sharpe}</div>
            </div>
            <div className="clay-recessed p-2.5 rounded-xl">
              <div className="text-[10px] text-[var(--text-muted)]">Max DD</div>
              <div className="text-base font-bold text-[var(--negative)] mt-0.5">{stratB.maxDrawdown}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Equity Curve Race Canvas */}
      <div className="clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
          <div>
            <h3 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[var(--accent)]" />
              Tournament Timeline & Equity Race (Normalized to 100)
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Real-time comparative trajectory simulated across historical regime windows (2019 – 2026).
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--text-primary)] font-semibold">{stratA.name.split(":")[0]}</span>
              <span className="text-[var(--positive)] font-bold">+{stratA.netReturn}%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 rounded-full bg-amber-500" />
              <span className="text-[var(--text-primary)] font-semibold">{stratB.name.split(":")[0]}</span>
              <span className="text-[var(--positive)] font-bold">+{stratB.netReturn}%</span>
            </div>
          </div>
        </div>

        {/* SVG Race Track */}
        <div className="w-full overflow-hidden relative bg-[var(--bg-recessed)]/50 rounded-2xl p-4 border border-[var(--border)]">
          <svg viewBox="0 0 800 260" className="w-full h-56">
            {/* Grid lines */}
            <line x1="0" y1="50" x2="800" y2="50" stroke="currentColor" strokeOpacity="0.08" />
            <line x1="0" y1="110" x2="800" y2="110" stroke="currentColor" strokeOpacity="0.08" />
            <line x1="0" y1="170" x2="800" y2="170" stroke="currentColor" strokeOpacity="0.08" />
            <line x1="0" y1="230" x2="800" y2="230" stroke="currentColor" strokeOpacity="0.08" />

            {/* Baseline 100 */}
            <line x1="0" y1="215" x2="800" y2="215" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 4" />
            <text x="8" y="210" fill="currentColor" fillOpacity="0.4" fontSize="10" fontFamily="monospace">Base: 100</text>

            {/* Strategy A Curve */}
            {renderCurve(stratA.curve, raceProgress, stratA.color)}

            {/* Strategy B Curve */}
            {renderCurve(stratB.curve, raceProgress, stratB.color)}

            {/* Current head marker for Strategy A */}
            {raceProgress > 0.05 && (
              <circle
                cx={((Math.max(2, Math.floor(stratA.curve.length * raceProgress)) - 1) / (stratA.curve.length - 1)) * 800}
                cy={260 - ((stratA.curve[Math.min(stratA.curve.length - 1, Math.floor(stratA.curve.length * raceProgress))] - 90) / 70) * 230 - 15}
                r="5"
                fill={stratA.color}
                className="animate-ping"
              />
            )}
          </svg>

          <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1">
            <span>2019 Regime Inception</span>
            <span>2021 Bull Expansion</span>
            <span>2022 Deleveraging Shock</span>
            <span>2024 ETF Inflow Cycle</span>
            <span>2026 Target Terminal</span>
          </div>
        </div>

        {/* Winner Announcement Banner */}
        {hasCompleted && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center font-bold">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[var(--text-primary)] text-sm">
                  Tournament Winner: {winner.name}
                </div>
                <div className="text-[var(--text-muted)]">
                  Outperformed by {(Math.abs(stratA.netReturn - stratB.netReturn)).toFixed(1)}% net alpha with a Sharpe of {winner.sharpe}.
                </div>
              </div>
            </div>

            <Link
              href="/app/research/backtest"
              className="px-4 py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] border border-[var(--border)] text-[var(--text-primary)] font-semibold flex items-center gap-1.5 clay-button shrink-0"
            >
              <span>Inspect Full Backtest Autopsy</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
            </Link>
          </div>
        )}
      </div>

      {/* Head-to-Head Comparative Metrics Breakdown */}
      <div className="clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
        <h3 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[var(--accent)]" />
          Factor Breakdown & Stress Attribution
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono text-left">
            <thead>
              <tr className="border-b border-[var(--border)] text-[var(--text-muted)]">
                <th className="pb-3 font-semibold">Analytical Metric</th>
                <th className="pb-3 font-semibold text-[var(--accent)]">{stratA.name.split(":")[0]}</th>
                <th className="pb-3 font-semibold text-amber-500">{stratB.name.split(":")[0]}</th>
                <th className="pb-3 font-semibold text-right">Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] text-[var(--text-primary)]">
              <tr>
                <td className="py-3 font-medium">Net Cumulative Return</td>
                <td className="py-3 font-bold text-[var(--positive)]">+{stratA.netReturn}%</td>
                <td className="py-3 font-bold text-[var(--positive)]">+{stratB.netReturn}%</td>
                <td className="py-3 text-right font-bold text-[var(--accent)]">
                  {stratA.netReturn > stratB.netReturn ? "Contender A (+15.5%)" : "Contender B"}
                </td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Sharpe Ratio (Risk Adjusted)</td>
                <td className="py-3 font-bold">{stratA.sharpe}</td>
                <td className="py-3 font-bold">{stratB.sharpe}</td>
                <td className="py-3 text-right font-bold text-[var(--accent)]">
                  {stratA.sharpe > stratB.sharpe ? "Contender A (+0.28)" : "Contender B"}
                </td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Maximum Peak-to-Trough Drawdown</td>
                <td className="py-3 text-[var(--negative)] font-bold">{stratA.maxDrawdown}%</td>
                <td className="py-3 text-[var(--negative)] font-bold">{stratB.maxDrawdown}%</td>
                <td className="py-3 text-right font-bold text-amber-500">
                  {Math.abs(stratA.maxDrawdown) < Math.abs(stratB.maxDrawdown) ? "Contender A" : "Contender B (Lower Drawdown)"}
                </td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Execution Friction (Fees & Slippage)</td>
                <td className="py-3 font-mono">{stratA.costImpact}%</td>
                <td className="py-3 font-mono">{stratB.costImpact}%</td>
                <td className="py-3 text-right font-bold text-[var(--accent)]">
                  {Math.abs(stratA.costImpact) < Math.abs(stratB.costImpact) ? "Contender A (Lower Friction)" : "Contender B"}
                </td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Bull Market Regime Performance</td>
                <td className="py-3 font-bold text-[var(--positive)]">+{stratA.regimeBull}%</td>
                <td className="py-3 font-bold text-[var(--positive)]">+{stratB.regimeBull}%</td>
                <td className="py-3 text-right font-bold text-[var(--accent)]">
                  {stratA.regimeBull > stratB.regimeBull ? "Contender A (+20.2%)" : "Contender B"}
                </td>
              </tr>
              <tr>
                <td className="py-3 font-medium">High Volatility Regime Resilience</td>
                <td className="py-3 text-[var(--negative)]">{stratA.regimeHighVol}%</td>
                <td className="py-3 text-[var(--positive)] font-bold">+{stratB.regimeHighVol}%</td>
                <td className="py-3 text-right font-bold text-amber-500">
                  {stratA.regimeHighVol > stratB.regimeHighVol ? "Contender A" : "Contender B (Flight to Safety)"}
                </td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Consolidation / Range Performance</td>
                <td className="py-3 font-bold">+{stratA.regimeRange}%</td>
                <td className="py-3 font-bold text-[var(--positive)]">+{stratB.regimeRange}%</td>
                <td className="py-3 text-right font-bold text-amber-500">
                  {stratA.regimeRange > stratB.regimeRange ? "Contender A" : "Contender B (Mean Reversion Alpha)"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
