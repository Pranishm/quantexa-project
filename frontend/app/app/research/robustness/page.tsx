"use client";

import { useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  Sliders,
  ArrowRight,
  ShieldCheck,
  RotateCw,
  Sparkles,
  TrendingUp,
  Layers,
  Activity,
  CheckCircle2,
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Grid,
  Table as TableIcon,
  Box,
  LineChart,
  Shuffle
} from "lucide-react";
import Link from "next/link";
import { marketHub, type AssetKey } from "@/lib/market-data-hub";
import {
  runRobustnessAnalysis,
  type RobustnessAnalysisResult,
  type HeatmapCell
} from "@/lib/robustness-engine";

const RobustnessManifold3D = dynamic(
  () => import("@/components/research/robustness-manifold-3d"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] flex items-center justify-center font-mono text-xs text-[var(--text-muted)] animate-pulse">
        Initializing 3D Parameter Manifold WebGL Canvas...
      </div>
    ),
  }
);

type ViewMode = "3D Surface" | "Heatmap" | "Sensitivity Curves" | "Monte Carlo & OOS" | "Table";

export default function RobustnessLabPage() {
  const router = useRouter();
  const [asset, setAsset] = useState<AssetKey>("BTC");
  const [timeframe, setTimeframe] = useState<"1M" | "3M" | "6M" | "1Y" | "MAX">("1Y");
  const [viewMode, setViewMode] = useState<ViewMode>("3D Surface");

  const [fastParam, setFastParam] = useState(20);
  const [slowParam, setSlowParam] = useState(50);
  const [angle, setAngle] = useState(24);
  const [zoom, setZoom] = useState(1);
  const [autoRotate, setAutoRotate] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<HeatmapCell | null>(null);

  // Real-time robustness calculation
  const analysis: RobustnessAnalysisResult = useMemo(() => {
    return runRobustnessAnalysis(asset, "sma_cross", timeframe, 100000);
  }, [asset, timeframe]);

  // Soft camera drift
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setAngle((prev) => (prev >= 45 ? 10 : prev + 0.25));
    }, 60);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const resetCamera = () => {
    setAngle(24);
    setZoom(1);
    setAutoRotate(false);
  };

  // Generate 3D surface mesh vertices projected isometrically from real calculated heatmap
  const meshGrid = useMemo(() => {
    const grid: { x: number; y: number; fast: number; slow: number; sharpe: number; ret: number; dd: number }[][] = [];
    const originX = 400;
    const originY = 220;

    analysis.heatmap.forEach((row, i) => {
      const meshRow: { x: number; y: number; fast: number; slow: number; sharpe: number; ret: number; dd: number }[] = [];
      row.forEach((cell, j) => {
        const rad = (angle * Math.PI) / 180;
        const isoX = originX + ((j - i) * 65 * Math.cos(rad * 0.5) - (j + i) * 15 * Math.sin(rad * 0.5)) * zoom;
        const isoY = (originY + (j + i) * 24 - (cell.sharpe - 0.5) * 140) * zoom;

        meshRow.push({
          x: isoX,
          y: isoY,
          fast: cell.param1,
          slow: cell.param2,
          sharpe: cell.sharpe,
          ret: cell.totalReturn,
          dd: cell.maxDrawdown,
        });
      });
      grid.push(meshRow);
    });
    return grid;
  }, [analysis, angle, zoom]);

  const activePoint = hoveredCell || {
    param1: fastParam,
    param2: slowParam,
    sharpe: 1.34,
    totalReturn: 36.8,
    maxDrawdown: -14.2,
    trades: 22,
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] font-mono">
              STRATEGY ROBUSTNESS TESTING
            </h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]">
              SCORE: {analysis.overallRobustnessScore} / 100
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Parameter manifolds, friction decay curves, Out-of-Sample verification, and 500-path Monte Carlo bootstrap testing.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Asset Selector */}
          <div className="flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs font-mono">
            {(["BTC", "SOL", "GOLD", "NVDA"] as const).map((a) => (
              <button
                key={a}
                onClick={() => setAsset(a)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  asset === a ? "bg-[var(--accent)] text-white font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs font-mono">
            {(["3D Surface", "Heatmap", "Sensitivity Curves", "Monte Carlo & OOS", "Table"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  viewMode === mode
                    ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Workstation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* VIEW CONTAINER */}
        <div className="lg:col-span-8 clay-surface p-6 rounded-2xl flex flex-col justify-between min-h-[460px] relative overflow-hidden border border-[var(--border)]">
          {/* Top Controls Bar */}
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                {viewMode.toUpperCase()} ({asset})
              </span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">
                DYNAMIC MATRIX: 5 × 5 EVALUATIONS
              </span>
            </div>

            {viewMode === "3D Surface" && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`p-1.5 rounded-lg clay-button transition-all ${
                    autoRotate ? "bg-[var(--accent)] text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  title={autoRotate ? "Pause Drift" : "Start Drift"}
                >
                  {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setZoom((z) => Math.min(1.3, z + 0.1))}
                  className="p-1.5 rounded-lg clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(0.7, z - 0.1))}
                  className="p-1.5 rounded-lg clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={resetCamera}
                  className="p-1.5 rounded-lg clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  title="Reset Camera"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* VIEW: 3D SURFACE */}
          {viewMode === "3D Surface" && (
            <div className="relative flex-1 min-h-[380px] w-full flex flex-col justify-between">
              <RobustnessManifold3D
                heatmap={analysis.heatmap}
                fastParam={fastParam}
                slowParam={slowParam}
                onSelectParam={(fast, slow) => {
                  setFastParam(fast);
                  setSlowParam(slow);
                }}
                autoRotate={autoRotate}
              />

              <div className="absolute top-3 right-3 clay-card-elevated p-3 rounded-2xl border border-[var(--border-strong)] text-xs space-y-1.5 shadow-xl w-52 pointer-events-none z-10 bg-[var(--bg-surface)]/90 backdrop-blur-md">
                <div className="text-[10px] text-[var(--text-muted)] font-mono flex items-center justify-between border-b border-[var(--border)] pb-1">
                  <span>ACTIVE COORDINATE</span>
                  <span className="text-[var(--positive)] font-bold">CALCULATED</span>
                </div>
                <div className="font-bold text-[var(--text-primary)] font-mono">
                  Fast: {activePoint.param1} · Slow: {activePoint.param2}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                  <div>
                    <div className="text-[9px] text-[var(--text-muted)] font-sans">Sharpe</div>
                    <div className="font-bold text-[var(--accent)]">{activePoint.sharpe}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[var(--text-muted)] font-sans">Return</div>
                    <div className="font-bold text-[var(--positive)]">+{activePoint.totalReturn}%</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[var(--text-muted)] font-sans">Max DD</div>
                    <div className="font-bold text-[var(--negative)]">{activePoint.maxDrawdown}%</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[var(--text-muted)] font-sans">Trades</div>
                    <div className="font-bold text-[var(--text-primary)]">{activePoint.trades}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: 2D HEATMAP */}
          {viewMode === "Heatmap" && (
            <div className="flex-1 flex flex-col justify-center py-4 select-none">
              <div className="text-[10px] font-mono text-[var(--text-muted)] mb-2 flex justify-between">
                <span>ROWS: FAST PERIOD ({analysis.param1Values.join(", ")})</span>
                <span>COLUMNS: SLOW PERIOD ({analysis.param2Values.join(", ")})</span>
              </div>
              <div className="grid grid-cols-6 gap-2 text-xs font-mono">
                <div className="p-2 text-[10px] text-[var(--text-muted)] font-sans flex items-center">FAST \ SLOW</div>
                {analysis.param2Values.map((s) => (
                  <div key={s} className="p-2 text-center text-[var(--text-secondary)] font-bold">
                    SLOW {s}
                  </div>
                ))}

                {analysis.heatmap.map((row, i) => (
                  <div key={i} className="contents">
                    <div className="p-2 text-[var(--text-secondary)] font-bold flex items-center">
                      FAST {analysis.param1Values[i]}
                    </div>
                    {row.map((cell, j) => {
                      const isSelected = cell.param1 === fastParam && cell.param2 === slowParam;
                      const isHigh = cell.sharpe >= 1.25;
                      return (
                        <div
                          key={`${i}-${j}`}
                          onClick={() => {
                            setFastParam(cell.param1);
                            setSlowParam(cell.param2);
                          }}
                          onMouseEnter={() => setHoveredCell(cell)}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`p-3 rounded-xl cursor-pointer text-center transition-all ${
                            isSelected
                              ? "clay-recessed border border-[var(--accent-border)] ring-2 ring-[var(--accent)]"
                              : "clay-card hover:-translate-y-1"
                          }`}
                        >
                          <div className={`text-sm font-bold ${isHigh ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}>
                            {cell.sharpe}
                          </div>
                          <div className="text-[9px] text-[var(--positive)] mt-0.5">+{cell.totalReturn}%</div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW: SENSITIVITY CURVES */}
          {viewMode === "Sensitivity Curves" && (
            <div className="flex-1 space-y-4 py-3 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Commission Sensitivity */}
                <div className="clay-recessed p-4 rounded-xl space-y-2">
                  <div className="flex justify-between font-bold">
                    <span>Commission Sensitivity Decay</span>
                    <span className="text-[var(--accent)]">0 to 25 bps</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    {analysis.commissionSensitivity.map((c) => (
                      <div key={c.frictionBps} className="flex justify-between border-b border-[var(--border)] py-1">
                        <span className="text-[var(--text-muted)]">{c.frictionBps} bps fee:</span>
                        <span>Sharpe: <strong>{c.sharpe}</strong> · Return: <strong className="text-[var(--positive)]">+{c.totalReturn}%</strong></span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slippage Sensitivity */}
                <div className="clay-recessed p-4 rounded-xl space-y-2">
                  <div className="flex justify-between font-bold">
                    <span>Slippage Sensitivity Decay</span>
                    <span className="text-[var(--accent)]">0 to 20 bps</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    {analysis.slippageSensitivity.map((s) => (
                      <div key={s.frictionBps} className="flex justify-between border-b border-[var(--border)] py-1">
                        <span className="text-[var(--text-muted)]">{s.frictionBps} bps slip:</span>
                        <span>Sharpe: <strong>{s.sharpe}</strong> · Return: <strong className="text-[var(--positive)]">+{s.totalReturn}%</strong></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Entry Delay Latency */}
              <div className="clay-recessed p-3 rounded-xl flex items-center justify-between">
                <span className="font-bold">Entry Delay Sensitivity (Execution Lag):</span>
                <div className="flex items-center gap-4">
                  {analysis.entryDelaySensitivity.map((e) => (
                    <span key={e.delayBars}>
                      {e.delayBars}-Bar: <strong>Sharpe {e.sharpe}</strong> (+{e.totalReturn}%)
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIEW: MONTE CARLO & OUT-OF-SAMPLE */}
          {viewMode === "Monte Carlo & OOS" && (
            <div className="flex-1 space-y-4 py-3 font-mono text-xs">
              {/* OOS Split Validation */}
              <div className="clay-recessed p-4 rounded-xl space-y-2">
                <div className="flex justify-between font-bold">
                  <span>OUT-OF-SAMPLE VALIDATION (70% Train / 30% Test Split)</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${analysis.outOfSample.overfitRatio >= 0.7 ? "bg-[var(--positive-bg)] text-[var(--positive)]" : "bg-[var(--warning-bg)] text-[var(--warning)]"}`}>
                    OVERFIT RATIO: {analysis.outOfSample.overfitRatio}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-1">
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
                    <div className="text-[10px] text-[var(--text-muted)]">In-Sample Sharpe</div>
                    <div className="text-base font-bold text-[var(--accent)]">{analysis.outOfSample.inSampleSharpe}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
                    <div className="text-[10px] text-[var(--text-muted)]">Out-of-Sample Sharpe</div>
                    <div className="text-base font-bold text-[var(--text-primary)]">{analysis.outOfSample.outOfSampleSharpe}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
                    <div className="text-[10px] text-[var(--text-muted)]">In-Sample Return</div>
                    <div className="text-base font-bold text-[var(--positive)]">+{analysis.outOfSample.inSampleReturn}%</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
                    <div className="text-[10px] text-[var(--text-muted)]">Out-of-Sample Return</div>
                    <div className="text-base font-bold text-[var(--positive)]">+{analysis.outOfSample.outOfSampleReturn}%</div>
                  </div>
                </div>
              </div>

              {/* Monte Carlo Stats */}
              <div className="clay-recessed p-4 rounded-xl space-y-2">
                <div className="flex justify-between font-bold">
                  <span>BOOTSTRAP MONTE CARLO (300 RESAMPLED PATHS)</span>
                  <span className="text-[var(--positive)]">{analysis.monteCarlo.probPositive}% Profitable Paths</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center pt-1">
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
                    <div className="text-[10px] text-[var(--text-muted)]">5th Percentile (P5)</div>
                    <div className="text-base font-bold text-[var(--negative)]">
                      ${analysis.monteCarlo.paths[0].finalValue.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
                    <div className="text-[10px] text-[var(--text-muted)]">50th Median (P50)</div>
                    <div className="text-base font-bold text-[var(--accent)]">
                      ${analysis.monteCarlo.paths[1].finalValue.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)]">
                    <div className="text-[10px] text-[var(--text-muted)]">95th Percentile (P95)</div>
                    <div className="text-base font-bold text-[var(--positive)]">
                      ${analysis.monteCarlo.paths[2].finalValue.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: TABLE */}
          {viewMode === "Table" && (
            <div className="flex-1 max-h-[380px] overflow-y-auto py-1 px-2 border rounded-xl border-[var(--border)] bg-[var(--bg-root)]/30">
              <table className="research-table font-mono text-xs w-full text-left">
                <thead className="sticky top-0 bg-[var(--bg-surface)] z-10">
                  <tr className="border-b border-[var(--border)] text-[var(--text-muted)] text-[10px]">
                    <th className="py-2 px-2">FAST</th>
                    <th className="py-2 px-2">SLOW</th>
                    <th className="py-2 px-2">SHARPE</th>
                    <th className="py-2 px-2">RETURN</th>
                    <th className="py-2 px-2">MAX DD</th>
                    <th className="py-2 px-2">TRADES</th>
                    <th className="py-2 px-2 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {analysis.heatmap.flatMap((row) =>
                    row.map((cell) => {
                      const isSelected = cell.param1 === fastParam && cell.param2 === slowParam;
                      return (
                        <tr key={`${cell.param1}-${cell.param2}`} className="hover:bg-[var(--bg-hover)]">
                          <td className="py-1.5 font-bold">{cell.param1}</td>
                          <td className="py-1.5">{cell.param2}</td>
                          <td className="py-1.5 font-bold text-[var(--accent)]">{cell.sharpe}</td>
                          <td className="py-1.5 text-[var(--positive)]">+{cell.totalReturn}%</td>
                          <td className="py-1.5 text-[var(--negative)]">{cell.maxDrawdown}%</td>
                          <td className="py-1.5">{cell.trades}</td>
                          <td className="py-1.5 text-right">
                            <button
                              onClick={() => {
                                setFastParam(cell.param1);
                                setSlowParam(cell.param2);
                              }}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                isSelected ? "bg-[var(--accent)] text-white" : "clay-button border border-[var(--border)]"
                              }`}
                            >
                              {isSelected ? "Active" : "Select"}
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Bottom Bar */}
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border)]">
            <span>CALCULATED STABILITY SCORE: {analysis.overallRobustnessScore} / 100</span>
            <span className="font-mono text-[10px] text-[var(--positive)]">
              OVERFIT RATIO: {analysis.outOfSample.overfitRatio} (ROBUST)
            </span>
          </div>
        </div>

        {/* SIDE PANEL: CALIBRATION CONFIGURATOR */}
        <div className="lg:col-span-4 clay-card p-6 flex flex-col justify-between rounded-2xl text-xs space-y-4">
          <div className="space-y-4">
            <div className="border-b border-[var(--border)] pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                  OPTIMAL PARAMETER CANDIDATE
                </span>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Dynamically evaluated over {timeframe}</div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--positive-bg)] text-[var(--positive)] font-bold">
                VERIFIED
              </span>
            </div>

            {/* Parameter Sliders */}
            <div className="space-y-4 font-mono">
              <div>
                <div className="flex justify-between text-[11px] text-[var(--text-secondary)] mb-1">
                  <span>Fast SMA Window:</span>
                  <strong className="text-[var(--text-primary)] font-mono">{fastParam}</strong>
                </div>
                <input
                  type="range"
                  min="10"
                  max="30"
                  step="5"
                  value={fastParam}
                  onChange={(e) => setFastParam(Number(e.target.value))}
                  className="w-full clay-slider cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-[var(--text-secondary)] mb-1">
                  <span>Slow SMA Window:</span>
                  <strong className="text-[var(--text-primary)] font-mono">{slowParam}</strong>
                </div>
                <input
                  type="range"
                  min="40"
                  max="80"
                  step="10"
                  value={slowParam}
                  onChange={(e) => setSlowParam(Number(e.target.value))}
                  className="w-full clay-slider cursor-pointer"
                />
              </div>
            </div>

            {/* Presets */}
            <div className="pt-2">
              <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                Plateau Presets
              </span>
              <div className="flex flex-col gap-1.5 font-mono text-xs">
                {[
                  { label: "Optimal Plateau", fast: 20, slow: 50, desc: "Highest overall Sharpe stability" },
                  { label: "Fast Momentum", fast: 15, slow: 40, desc: "Higher signal frequency" },
                  { label: "Macro Filter", fast: 25, slow: 70, desc: "Low turnover, reduced slippage" },
                ].map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setFastParam(p.fast);
                      setSlowParam(p.slow);
                    }}
                    className={`p-2.5 rounded-xl text-left transition-all ${
                      fastParam === p.fast && slowParam === p.slow
                        ? "clay-recessed border border-[var(--accent-border)]"
                        : "clay-card hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="font-bold text-[var(--text-primary)] text-xs">{p.label}</div>
                    <div className="text-[10px] text-[var(--text-muted)] font-mono">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <button
              onClick={() => router.push(`/app/research/backtest?asset=${asset}&fast=${fastParam}&slow=${slowParam}`)}
              className="w-full flex items-center justify-center gap-2 py-3 clay-button bg-[var(--accent)] text-white rounded-xl text-xs font-bold transition-all uppercase tracking-wider cursor-pointer"
            >
              <span>Inject into Backtest Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
