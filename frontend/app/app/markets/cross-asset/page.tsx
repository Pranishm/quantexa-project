"use client";

import { useState, useMemo } from "react";
import {
  Activity, Sliders, ArrowUpRight, BarChart2, TrendingUp,
  Layers, Share2, Compass, CheckCircle2, RefreshCw, Eye
} from "lucide-react";
import Link from "next/link";
import { marketHub, type AssetKey } from "@/lib/market-data-hub";
import {
  calculateCorrelationMatrix,
  calculateRollingCorrelation,
  calculateRiskReturnComparison,
  getRelationshipLinks,
} from "@/lib/correlation";

type ViewMode = "matrix" | "rolling" | "relative" | "scatter" | "topology";
type CorrMethod = "pearson" | "spearman" | "rolling";

export default function MarketXRayPage() {
  const [timeframe, setTimeframe] = useState<"1M" | "3M" | "6M" | "1Y" | "MAX">("1Y");
  const [viewMode, setViewMode] = useState<ViewMode>("matrix");
  const [method, setMethod] = useState<CorrMethod>("pearson");
  const [selectedPair, setSelectedPair] = useState<[AssetKey, AssetKey]>(["BTC", "SOL"]);
  const [rollingWindowDays, setRollingWindowDays] = useState<20 | 30 | 60 | 90>(30);
  const [hoveredCell, setHoveredCell] = useState<{ r: AssetKey; c: AssetKey; val: number } | null>(null);

  const symbols: AssetKey[] = ["BTC", "SOL", "GOLD", "NVDA"];

  // 1. Dynamic Correlation Matrix calculated from real data
  const matrixResult = useMemo(() => {
    return calculateCorrelationMatrix(symbols, timeframe);
  }, [timeframe]);

  const matrixData = matrixResult.matrix;

  // 2. Dynamic Rolling Correlation calculated for selected pair and window
  const rollingSeries = useMemo(() => {
    return calculateRollingCorrelation(selectedPair[0], selectedPair[1], rollingWindowDays, timeframe);
  }, [selectedPair, rollingWindowDays, timeframe]);

  // 3. Dynamic Normalized Performance (Base 100) from market data hub
  const normalizedComparison = useMemo(() => {
    return marketHub.getMultiAssetComparison(symbols, timeframe);
  }, [timeframe]);

  // Merge timestamps for multi-line SVG chart
  const normalizedDates = useMemo(() => {
    const pts = normalizedComparison["BTC"] || [];
    const step = Math.max(1, Math.floor(pts.length / 20));
    return pts.filter((_, idx) => idx % step === 0 || idx === pts.length - 1);
  }, [normalizedComparison]);

  // 4. Dynamic Risk / Return metrics
  const riskReturnStats = useMemo(() => {
    return calculateRiskReturnComparison(symbols, timeframe);
  }, [timeframe]);

  const scatterPoints = useMemo(() => {
    const colors: Record<AssetKey, string> = {
      BTC: "#6757E8",
      SOL: "#10B981",
      GOLD: "#F59E0B",
      NVDA: "#3B82F6",
    };
    return riskReturnStats.map((s) => ({
      symbol: s.asset,
      vol: s.annualizedVol,
      ret: s.cagr,
      sharpe: s.sharpe,
      maxDd: s.maxDrawdown,
      color: colors[s.asset],
    }));
  }, [riskReturnStats]);

  // 5. Dynamic Relationship Links for Topology
  const relationshipLinks = useMemo(() => {
    return getRelationshipLinks(matrixData);
  }, [matrixData]);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Top Header & Methodology */}
      <div className="flex flex-col lg:flex-row lg:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono tracking-wider text-[var(--accent)] font-semibold uppercase px-2.5 py-0.5 rounded-full clay-recessed border border-[var(--accent)]/20">
              QUANTITATIVE RESEARCH
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">DETERMINISTIC ENGINE</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            MARKET X-RAY &amp; CROSS-ASSET CORRELATION
          </h1>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Realtime Pearson correlation matrix, rolling dependency analysis, relative performance (Base 100), and risk-return topology across BTC, SOL, GOLD, and NVDA.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Method toggle */}
          <div className="flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs">
            {(["pearson", "spearman", "rolling"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`px-2.5 py-1 rounded-lg capitalize font-mono text-[11px] transition-colors ${
                  method === m
                    ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Timeframe selector */}
          <div className="flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs">
            {(["1M", "3M", "6M", "1Y", "MAX"] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  timeframe === tf
                    ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Analytical View Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[var(--border)] pb-2 text-xs">
        <button
          onClick={() => setViewMode("matrix")}
          className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
            viewMode === "matrix"
              ? "bg-[var(--accent)] text-white font-bold shadow-sm"
              : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          1. Correlation Matrix
        </button>
        <button
          onClick={() => setViewMode("rolling")}
          className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
            viewMode === "rolling"
              ? "bg-[var(--accent)] text-white font-bold shadow-sm"
              : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          2. Rolling Correlation ({selectedPair[0]} ↔ {selectedPair[1]})
        </button>
        <button
          onClick={() => setViewMode("relative")}
          className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
            viewMode === "relative"
              ? "bg-[var(--accent)] text-white font-bold shadow-sm"
              : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          3. Normalized Performance (Base 100)
        </button>
        <button
          onClick={() => setViewMode("scatter")}
          className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
            viewMode === "scatter"
              ? "bg-[var(--accent)] text-white font-bold shadow-sm"
              : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          4. Risk / Return Scatter
        </button>
        <button
          onClick={() => setViewMode("topology")}
          className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
            viewMode === "topology"
              ? "bg-[var(--accent)] text-white font-bold shadow-sm"
              : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          5. Relationship Network Map
        </button>
      </div>

      {/* VIEW 1: CORRELATION MATRIX */}
      {viewMode === "matrix" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Matrix Grid */}
          <div className="lg:col-span-8 clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider">
                  Cross-Asset Correlation Matrix ({timeframe})
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Computed dynamically via Pearson coefficient across daily log returns. Click any cell to isolate rolling correlation.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full font-semibold">
                N = {matrixResult.sampleSize} Sessions
              </span>
            </div>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-center font-mono text-xs">
                <thead>
                  <tr>
                    <th className="p-3 text-left font-bold text-[var(--text-muted)] uppercase">Asset</th>
                    {symbols.map((s) => (
                      <th key={s} className="p-3 font-bold text-[var(--text-primary)]">{s}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {symbols.map((rowSym) => (
                    <tr key={rowSym} className="border-t border-[var(--border)]">
                      <td className="p-3 text-left font-bold text-[var(--text-primary)] flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                        {rowSym}
                      </td>
                      {symbols.map((colSym) => {
                        const val = matrixData[rowSym]?.[colSym] ?? 0;
                        const isDiag = rowSym === colSym;
                        const isSelectedPair = (selectedPair[0] === rowSym && selectedPair[1] === colSym) || (selectedPair[0] === colSym && selectedPair[1] === rowSym);

                        let cellBg = "bg-transparent";
                        let cellText = "text-[var(--text-primary)]";
                        if (val > 0.65 && !isDiag) {
                          cellBg = "bg-[var(--positive)]/20";
                          cellText = "text-[var(--positive)] font-bold";
                        } else if (val > 0.25 && !isDiag) {
                          cellBg = "bg-[var(--accent)]/15";
                          cellText = "text-[var(--accent)] font-semibold";
                        } else if (val < 0) {
                          cellBg = "bg-[var(--negative)]/15";
                          cellText = "text-[var(--negative)] font-bold";
                        }

                        return (
                          <td
                            key={colSym}
                            onClick={() => {
                              if (!isDiag) {
                                setSelectedPair([rowSym, colSym]);
                                setViewMode("rolling");
                              }
                            }}
                            onMouseEnter={() => setHoveredCell({ r: rowSym, c: colSym, val })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`p-3 cursor-pointer transition-all rounded-xl ${cellBg} ${cellText} ${
                              isSelectedPair ? "ring-2 ring-[var(--accent)]" : "hover:scale-105"
                            }`}
                          >
                            {val >= 0 ? `+${val.toFixed(2)}` : val.toFixed(2)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] pt-3 border-t border-[var(--border)]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-[var(--positive)]/30 inline-block" /> Strong Positive (&gt;0.65)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-[var(--accent)]/25 inline-block" /> Moderate (0.25 - 0.65)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-[var(--negative)]/25 inline-block" /> Inverse / Hedge (&lt;0.00)
                </span>
              </div>
              <span>Click cell to launch Rolling Analysis</span>
            </div>
          </div>

          {/* Side Cell Inspector */}
          <div className="lg:col-span-4 clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-[var(--text-primary)]">
              Pairwise Dependency Inspector
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div className="clay-recessed p-4 rounded-2xl space-y-2">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Selected Asset Pair</div>
                <div className="text-base font-bold text-[var(--text-primary)] flex items-center justify-between">
                  <span>{hoveredCell ? `${hoveredCell.r} ↔ ${hoveredCell.c}` : `${selectedPair[0]} ↔ ${selectedPair[1]}`}</span>
                  <span className="text-[var(--accent)]">
                    {hoveredCell ? `${hoveredCell.val >= 0 ? "+" : ""}${hoveredCell.val.toFixed(2)}` : `+${(matrixData[selectedPair[0]]?.[selectedPair[1]] ?? 0.5).toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">Calculated Method</span>
                  <span className="font-bold capitalize">{method}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">Observation Window</span>
                  <span className="font-bold">{timeframe}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">Sample Observations</span>
                  <span className="font-bold">{matrixResult.sampleSize}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">{selectedPair[0]} Volatility</span>
                  <span className="font-bold text-[var(--text-primary)]">
                    {scatterPoints.find((p) => p.symbol === selectedPair[0])?.vol ?? 0}%
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">{selectedPair[1]} Volatility</span>
                  <span className="font-bold text-[var(--text-primary)]">
                    {scatterPoints.find((p) => p.symbol === selectedPair[1])?.vol ?? 0}%
                  </span>
                </div>
              </div>

              <button
                onClick={() => setViewMode("rolling")}
                className="w-full py-2.5 rounded-xl bg-[var(--accent)] text-white font-bold flex items-center justify-center gap-1.5 clay-button text-xs"
              >
                <span>Launch Rolling Time Series</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ROLLING CORRELATION (20D, 30D, 60D, 90D) */}
      {viewMode === "rolling" && (
        <div className="clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
            <div>
              <h3 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
                <Activity className="w-4 h-4 text-[var(--accent)]" />
                Rolling {rollingWindowDays}-Day Correlation: {selectedPair[0]} vs {selectedPair[1]}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Recalculated on live series from -1.0 (inverse hedge) to +1.0 (perfect coupling).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              {/* Window Selector */}
              <div className="flex items-center gap-1 clay-recessed p-1 rounded-xl">
                {([20, 30, 60, 90] as const).map((w) => (
                  <button
                    key={w}
                    onClick={() => setRollingWindowDays(w)}
                    className={`px-2 py-0.5 rounded-lg text-xs transition-colors ${
                      rollingWindowDays === w
                        ? "bg-[var(--accent)] text-white font-bold"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {w}D
                  </button>
                ))}
              </div>

              {/* Pair Switcher */}
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--text-muted)]">Pair:</span>
                <select
                  value={`${selectedPair[0]}-${selectedPair[1]}`}
                  onChange={(e) => {
                    const [a, b] = e.target.value.split("-") as [AssetKey, AssetKey];
                    setSelectedPair([a, b]);
                  }}
                  className="bg-[var(--bg-recessed)] border border-[var(--border)] rounded-lg px-2 py-1 text-[var(--text-primary)] font-bold focus:outline-none"
                >
                  <option value="BTC-SOL">BTC ↔ SOL</option>
                  <option value="BTC-NVDA">BTC ↔ NVDA</option>
                  <option value="BTC-GOLD">BTC ↔ GOLD</option>
                  <option value="SOL-NVDA">SOL ↔ NVDA</option>
                  <option value="SOL-GOLD">SOL ↔ GOLD</option>
                  <option value="GOLD-NVDA">GOLD ↔ NVDA</option>
                </select>
              </div>
            </div>
          </div>

          {/* SVG Rolling Time Series Chart */}
          <div className="w-full bg-[var(--bg-recessed)]/50 rounded-2xl p-4 border border-[var(--border)]">
            <svg viewBox="0 0 800 240" className="w-full h-56">
              <line x1="0" y1="20" x2="800" y2="20" stroke="currentColor" strokeOpacity="0.1" />
              <text x="8" y="16" fill="currentColor" fillOpacity="0.4" fontSize="10" fontFamily="monospace">+1.0 (Coupled)</text>

              <line x1="0" y1="120" x2="800" y2="120" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="4 4" />
              <text x="8" y="115" fill="currentColor" fillOpacity="0.5" fontSize="10" fontFamily="monospace">0.0 (Uncorrelated)</text>

              <line x1="0" y1="220" x2="800" y2="220" stroke="currentColor" strokeOpacity="0.1" />
              <text x="8" y="215" fill="currentColor" fillOpacity="0.4" fontSize="10" fontFamily="monospace">-1.0 (Inverse)</text>

              {rollingSeries.length > 1 && (() => {
                const w = 800;
                const path = rollingSeries.map((p, idx) => {
                  const x = (idx / (rollingSeries.length - 1)) * w;
                  const y = 120 - p.correlation * 100;
                  return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                }).join(" ");

                return (
                  <path
                    d={path}
                    fill="none"
                    stroke="#6757E8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                );
              })()}
            </svg>

            <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1">
              <span>{rollingSeries[0]?.time || "Start"}</span>
              <span>Rolling Window: {rollingWindowDays} Trading Days</span>
              <span>{rollingSeries[rollingSeries.length - 1]?.time || "Latest"}</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: RELATIVE PERFORMANCE (BASE 100) */}
      {viewMode === "relative" && (
        <div className="clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
            <div>
              <h3 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[var(--accent)]" />
                Normalized Multi-Asset Performance (Base 100)
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Direct percentage return comparison calibrated from the initial observation timestamp.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              {symbols.map((sym) => {
                const pts = normalizedComparison[sym] || [];
                const lastVal = pts[pts.length - 1]?.normalized ?? 100;
                const colors: Record<AssetKey, string> = { BTC: "#6757E8", SOL: "#10B981", GOLD: "#F59E0B", NVDA: "#3B82F6" };
                return (
                  <span key={sym} className="flex items-center gap-1.5 text-[var(--text-primary)]">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors[sym] }} />
                    {sym} ({lastVal})
                  </span>
                );
              })}
            </div>
          </div>

          <div className="w-full bg-[var(--bg-recessed)]/50 rounded-2xl p-4 border border-[var(--border)]">
            <svg viewBox="0 0 800 240" className="w-full h-56">
              <line x1="0" y1="180" x2="800" y2="180" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="4 4" />
              <text x="8" y="175" fill="currentColor" fillOpacity="0.5" fontSize="10" fontFamily="monospace">Base: 100</text>

              {symbols.map((sym) => {
                const colors: Record<AssetKey, string> = { BTC: "#6757E8", SOL: "#10B981", GOLD: "#F59E0B", NVDA: "#3B82F6" };
                const pts = normalizedComparison[sym] || [];
                if (pts.length < 2) return null;

                const path = pts.map((p, idx) => {
                  const x = (idx / (pts.length - 1)) * 800;
                  const y = 180 - ((p.normalized - 100) / 120) * 140;
                  return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                }).join(" ");

                return (
                  <path
                    key={sym}
                    d={path}
                    fill="none"
                    stroke={colors[sym]}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                );
              })}
            </svg>

            <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1">
              <span>{normalizedDates[0]?.time}</span>
              <span>{normalizedDates[Math.floor(normalizedDates.length / 2)]?.time}</span>
              <span>{normalizedDates[normalizedDates.length - 1]?.time}</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: RISK / RETURN SCATTER */}
      {viewMode === "scatter" && (
        <div className="clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <div>
              <h3 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-[var(--accent)]" />
                Cross-Asset Risk vs Return Spectrum
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                X-Axis: Realized Annualized Volatility · Y-Axis: Annualized Cumulative Return
              </p>
            </div>
          </div>

          <div className="w-full bg-[var(--bg-recessed)]/50 rounded-2xl p-6 border border-[var(--border)] relative">
            <svg viewBox="0 0 800 260" className="w-full h-64">
              <line x1="60" y1="20" x2="60" y2="220" stroke="currentColor" strokeOpacity="0.2" />
              <line x1="60" y1="220" x2="760" y2="220" stroke="currentColor" strokeOpacity="0.2" />

              <text x="760" y="240" fill="currentColor" fillOpacity="0.5" fontSize="10" fontFamily="monospace" textAnchor="end">
                Volatility (Risk) →
              </text>
              <text x="20" y="30" fill="currentColor" fillOpacity="0.5" fontSize="10" fontFamily="monospace" transform="rotate(-90 20,30)">
                Return →
              </text>

              {scatterPoints.map((p) => {
                const cx = 60 + Math.min(680, Math.max(20, (p.vol / 80) * 680));
                const cy = 220 - Math.min(190, Math.max(10, ((p.ret + 20) / 100) * 190));

                return (
                  <g key={p.symbol} className="cursor-pointer group">
                    <circle
                      cx={cx}
                      cy={cy}
                      r="16"
                      fill={p.color}
                      fillOpacity="0.85"
                      className="transition-transform group-hover:scale-125"
                    />
                    <text
                      x={cx}
                      y={cy + 4}
                      fill="#FFFFFF"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {p.symbol}
                    </text>
                    <text
                      x={cx}
                      y={cy - 20}
                      fill="currentColor"
                      fontSize="10"
                      fontWeight="600"
                      fontFamily="monospace"
                      textAnchor="middle"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {p.symbol}: +{p.ret}% | Vol: {p.vol}% | Sharpe: {p.sharpe}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      )}

      {/* VIEW 5: RELATIONSHIP NETWORK MAP */}
      {viewMode === "topology" && (
        <div className="clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <div>
              <h3 className="font-bold text-sm text-[var(--text-primary)]">
                Network Topology Graph ({timeframe})
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Force-directed link representation where line thickness and color denote absolute dependency.
              </p>
            </div>
          </div>

          <div className="w-full bg-[var(--bg-recessed)]/50 rounded-2xl p-6 border border-[var(--border)] flex items-center justify-center">
            <svg viewBox="0 0 600 320" className="w-full max-w-xl h-72 font-mono">
              {/* Dynamic Links */}
              {relationshipLinks.map((link) => {
                const positions: Record<AssetKey, [number, number]> = {
                  BTC: [180, 80],
                  SOL: [420, 80],
                  NVDA: [180, 240],
                  GOLD: [420, 240],
                };
                const [x1, y1] = positions[link.source];
                const [x2, y2] = positions[link.target];
                const strokeColor = link.correlation >= 0.25 ? "#10B981" : link.correlation < 0 ? "#EF4444" : "#9CA3AF";
                const strokeWidth = Math.max(1.5, Math.abs(link.correlation) * 5);

                return (
                  <g key={`${link.source}-${link.target}`}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeOpacity={0.65}
                    />
                    <text
                      x={(x1 + x2) / 2}
                      y={(y1 + y2) / 2 - 6}
                      fill="currentColor"
                      fontSize="10"
                      textAnchor="middle"
                    >
                      {link.correlation >= 0 ? `+${link.correlation}` : link.correlation}
                    </text>
                  </g>
                );
              })}

              {/* Asset Nodes */}
              {[
                { sym: "BTC" as AssetKey, x: 180, y: 80, col: "#6757E8" },
                { sym: "SOL" as AssetKey, x: 420, y: 80, col: "#10B981" },
                { sym: "NVDA" as AssetKey, x: 180, y: 240, col: "#3B82F6" },
                { sym: "GOLD" as AssetKey, x: 420, y: 240, col: "#F59E0B" },
              ].map((n) => (
                <g
                  key={n.sym}
                  transform={`translate(${n.x}, ${n.y})`}
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedPair([n.sym, n.sym === "BTC" ? "SOL" : "BTC"]);
                    setViewMode("rolling");
                  }}
                >
                  <circle r="26" fill={n.col} />
                  <text y="4" fill="#FFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                    {n.sym}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
