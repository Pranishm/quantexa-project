"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Activity, Sliders, ArrowUpRight, BarChart2, TrendingUp,
  Layers, Share2, Compass, CheckCircle2, RefreshCw, Eye, Zap, Radio
} from "lucide-react";
import Link from "next/link";
import { marketHub, type AssetKey } from "@/lib/market-data-hub";
import { useMarketSimulation } from "@/lib/market-simulation";
import {
  calculateCorrelationMatrix,
  calculateRollingCorrelation,
  calculateRiskReturnComparison,
  getRelationshipLinks,
} from "@/lib/correlation";

type ViewMode = "matrix" | "rolling" | "relative" | "scatter" | "topology";
type CorrMethod = "pearson" | "spearman" | "rolling";

export default function MarketXRayPage() {
  const marketSim = useMarketSimulation();
  const [liveTickCounter, setLiveTickCounter] = useState(0);

  // Subscribe to live tick engine
  useEffect(() => {
    const unsub = marketHub.subscribe(() => {
      setLiveTickCounter((prev) => prev + 1);
    });
    return unsub;
  }, []);

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
  }, [timeframe, liveTickCounter]);

  const matrixData = matrixResult.matrix;

  // 2. Dynamic Rolling Correlation calculated for selected pair and window
  const rollingSeries = useMemo(() => {
    return calculateRollingCorrelation(selectedPair[0], selectedPair[1], rollingWindowDays, timeframe);
  }, [selectedPair, rollingWindowDays, timeframe, liveTickCounter]);

  // 3. Dynamic Normalized Performance (Base 100) from market data hub
  const normalizedComparison = useMemo(() => {
    return marketHub.getMultiAssetComparison(symbols, timeframe);
  }, [timeframe, liveTickCounter]);

  // Merge timestamps for multi-line SVG chart
  const normalizedDates = useMemo(() => {
    const pts = normalizedComparison["BTC"] || [];
    const step = Math.max(1, Math.floor(pts.length / 20));
    return pts.filter((_, idx) => idx % step === 0 || idx === pts.length - 1);
  }, [normalizedComparison]);

  // 4. Dynamic Risk / Return metrics
  const riskReturnStats = useMemo(() => {
    return calculateRiskReturnComparison(symbols, timeframe);
  }, [timeframe, liveTickCounter]);

  const scatterPoints = useMemo(() => {
    const colors: Record<AssetKey, string> = {
      BTC: "#6757E8",
      SOL: "#10B981",
      GOLD: "#F59E0B",
      NVDA: "#3B82F6",
      "1INCH": "#2B82F6",
      ETH: "#627EEA",
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
            <span className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping" />
              LIVE TICK ENGINE · {marketSim.latencyMs}ms REFRESH
            </span>
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

      {/* ── LIVE MULTI-ASSET STREAM BAR ──────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {symbols.map((sym) => {
          const assetData = marketSim.assets[sym] || {
            price: sym === "BTC" ? 104846.2 : sym === "SOL" ? 184.5 : sym === "GOLD" ? 2740.1 : 128.4,
            changePercent: 1.85,
            high: 105000,
            low: 102000,
            volume: 24500000,
          };
          const isPos = assetData.changePercent >= 0;
          return (
            <div
              key={sym}
              className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] flex items-center justify-between shadow-sm hover:scale-[1.01] transition-all"
            >
              <div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-muted)] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
                  <span className="font-bold text-[var(--text-primary)]">{sym}</span>
                  <span>/ USD</span>
                </div>
                <div className="text-base font-extrabold text-[var(--text-primary)] font-mono mt-0.5">
                  ${assetData.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                    isPos ? "bg-emerald-500/15 text-[#00E599]" : "bg-rose-500/15 text-[#FF3B69]"
                  }`}
                >
                  {isPos ? `+${assetData.changePercent}%` : `${assetData.changePercent}%`}
                </span>
                <div className="text-[9px] font-mono text-[var(--text-muted)] mt-1">
                  Vol: {assetData.volume}
                </div>
              </div>
            </div>
          );
        })}
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
                const colors: Record<AssetKey, string> = { BTC: "#6757E8", SOL: "#10B981", GOLD: "#F59E0B", NVDA: "#3B82F6", "1INCH": "#2B82F6", ETH: "#627EEA" };
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
                const colors: Record<AssetKey, string> = { BTC: "#6757E8", SOL: "#10B981", GOLD: "#F59E0B", NVDA: "#3B82F6", "1INCH": "#2B82F6", ETH: "#627EEA" };
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

      {/* VIEW 4: RISK / RETURN SCATTER (MARKOWITZ FRONTIER) */}
      {viewMode === "scatter" && (
        <div className="clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] pb-3.5 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="font-bold text-sm text-[var(--text-primary)] tracking-wide font-mono">
                  CROSS-ASSET RISK VS RETURN EFFICIENT FRONTIER
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]">
                  MARKOWITZ SPACE
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                X-Axis: Realized Annualized Volatility (Risk) · Y-Axis: Compound Annual Growth Rate (CAGR Return) · {timeframe} Window
              </p>
            </div>

            {/* Sharpe benchmarks legend */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Sharpe Rating:</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-[#00E599] font-bold text-[10px] border border-emerald-500/20">
                &gt; 1.0 (Strong)
              </span>
              <span className="px-2 py-0.5 rounded-md bg-blue-500/15 text-[#3B82F6] font-bold text-[10px] border border-blue-500/20">
                0.5 – 1.0 (Moderate)
              </span>
              <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-[#F59E0B] font-bold text-[10px] border border-amber-500/20">
                &lt; 0.5 (High Drag)
              </span>
            </div>
          </div>

          {/* SVG Canvas with Full Axes, Quadrants & Sharpe Rays */}
          <div className="w-full bg-[var(--bg-recessed)]/70 rounded-2xl p-4 sm:p-6 border border-[var(--border)] relative overflow-hidden">
            <svg viewBox="0 0 880 340" className="w-full h-80 font-mono select-none">
              <defs>
                <linearGradient id="optGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E599" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#00E599" stopOpacity="0.01" />
                </linearGradient>
                <linearGradient id="subGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF3B69" stopOpacity="0.01" />
                  <stop offset="100%" stopColor="#FF3B69" stopOpacity="0.06" />
                </linearGradient>
              </defs>

              {/* Quadrant Background Shading */}
              <rect x="75" y="30" width="370" height="190" fill="url(#optGrad)" rx="8" />
              <rect x="445" y="220" width="380" height="70" fill="url(#subGrad)" rx="8" />

              {/* Quadrant Labels */}
              <text x="85" y="48" fill="#00E599" fillOpacity="0.6" fontSize="9" fontWeight="bold" letterSpacing="1">
                ▲ OPTIMAL QUADRANT (HIGH RETURN / LOW RISK)
              </text>
              <text x="460" y="48" fill="currentColor" fillOpacity="0.3" fontSize="9" fontWeight="bold" letterSpacing="1">
                ▲ AGGRESSIVE ALPHA (HIGH RETURN / HIGH VOL)
              </text>
              <text x="85" y="280" fill="currentColor" fillOpacity="0.35" fontSize="9" fontWeight="bold" letterSpacing="1">
                ▼ DEFENSIVE PRESERVATION (LOW RETURN / LOW VOL)
              </text>
              <text x="460" y="280" fill="#FF3B69" fillOpacity="0.5" fontSize="9" fontWeight="bold" letterSpacing="1">
                ▼ SUB-OPTIMAL DRAG (LOW RETURN / HIGH VOL)
              </text>

              {/* Sharpe Reference Rays from origin (75, 220) */}
              <line x1="75" y1="220" x2="745" y2="30" stroke="currentColor" strokeOpacity="0.15" strokeDasharray="5 5" />
              <text x="750" y="34" fill="currentColor" fillOpacity="0.4" fontSize="9">Sharpe = 1.0 (Capital Allocation Line)</text>

              {/* Horizontal Gridlines & Y-Axis Scale */}
              {[
                { label: "+100%", y: 40 },
                { label: "+75%",  y: 85 },
                { label: "+50%",  y: 130 },
                { label: "+25%",  y: 175 },
                { label: "0% Return", y: 220, bold: true },
                { label: "-25%", y: 265 },
              ].map((g, i) => (
                <g key={i}>
                  <line
                    x1="75"
                    y1={g.y}
                    x2="830"
                    y2={g.y}
                    stroke="currentColor"
                    strokeOpacity={g.bold ? 0.4 : 0.12}
                    strokeDasharray={g.bold ? undefined : "3 3"}
                  />
                  <text
                    x="65"
                    y={g.y + 3.5}
                    fill="currentColor"
                    fillOpacity={g.bold ? 0.9 : 0.45}
                    fontSize="9.5"
                    fontWeight={g.bold ? "bold" : "normal"}
                    textAnchor="end"
                  >
                    {g.label}
                  </text>
                </g>
              ))}

              {/* Vertical Gridlines & X-Axis Scale */}
              {[
                { label: "0%",  x: 75 },
                { label: "20%", x: 226 },
                { label: "40%", x: 377 },
                { label: "60%", x: 528 },
                { label: "80%", x: 679 },
                { label: "100% Vol", x: 830, bold: true },
              ].map((g, i) => (
                <g key={i}>
                  <line
                    x1={g.x}
                    y1="30"
                    x2={g.x}
                    y2="290"
                    stroke="currentColor"
                    strokeOpacity={g.bold ? 0.35 : 0.1}
                    strokeDasharray="3 3"
                  />
                  <text
                    x={g.x}
                    y="306"
                    fill="currentColor"
                    fillOpacity={g.bold ? 0.85 : 0.5}
                    fontSize="9.5"
                    fontWeight={g.bold ? "bold" : "normal"}
                    textAnchor="middle"
                  >
                    {g.label}
                  </text>
                </g>
              ))}

              {/* X & Y Main Axis Labels */}
              <text x="450" y="325" fill="currentColor" fillOpacity="0.75" fontSize="10" fontWeight="bold" textAnchor="middle">
                ANNUALIZED REALIZED VOLATILITY (RISK) →
              </text>
              <text x="18" y="145" fill="currentColor" fillOpacity="0.75" fontSize="10" fontWeight="bold" transform="rotate(-90 18,145)" textAnchor="middle">
                CAGR RETURN (ANNUALIZED) →
              </text>

              {/* Scatter Asset Nodes with Distinct Non-Overlapping Coordinates & Permanent Pills */}
              {scatterPoints.map((p, idx) => {
                // X mapping: 0% at 75, 100% at 830 -> span = 755
                const cx = 75 + Math.min(755, Math.max(15, (p.vol / 100) * 755));
                // Y mapping: 0% at 220, 100% at 40 -> span = 180
                const cy = 220 - ((p.ret) / 100) * 180;

                // Dedicated badge offset so tags never overlap
                const pillOffsets: Record<string, { dx: number; dy: number }> = {
                  GOLD: { dx: 18, dy: -28 },
                  BTC:  { dx: 18, dy: -26 },
                  SOL:  { dx: -180, dy: -26 },
                  NVDA: { dx: 18, dy: -26 },
                };
                const offset = pillOffsets[p.symbol] || { dx: 18, dy: -26 };

                return (
                  <g key={p.symbol} className="cursor-pointer group">
                    {/* Pulsing Aura */}
                    <circle cx={cx} cy={cy} r="22" fill={p.color} fillOpacity="0.15" />
                    
                    {/* Outer Border */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="15"
                      fill={p.color}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      className="transition-transform group-hover:scale-115"
                    />

                    {/* Symbol Text inside circle */}
                    <text
                      x={cx}
                      y={cy + 3.5}
                      fill="#FFFFFF"
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {p.symbol.slice(0, 3)}
                    </text>

                    {/* Connector stem */}
                    <line
                      x1={cx}
                      y1={cy}
                      x2={cx + offset.dx + (offset.dx < 0 ? 150 : 0)}
                      y2={cy + offset.dy + 10}
                      stroke={p.color}
                      strokeWidth="1.5"
                      strokeOpacity="0.7"
                    />

                    {/* Permanent Callout Pill */}
                    <rect
                      x={cx + offset.dx}
                      y={cy + offset.dy}
                      width="168"
                      height="24"
                      rx="6"
                      fill="var(--bg-surface)"
                      stroke={p.color}
                      strokeWidth="1.5"
                      className="shadow-md"
                    />

                    <text
                      x={cx + offset.dx + 8}
                      y={cy + offset.dy + 15}
                      fill="var(--text-primary)"
                      fontSize="9.5"
                      fontWeight="bold"
                    >
                      <tspan fill={p.color} fontWeight="900">{p.symbol}</tspan>
                      <tspan fill="currentColor" fillOpacity="0.8"> · CAGR: </tspan>
                      <tspan fill={p.ret >= 0 ? "#00E599" : "#FF3B69"}>
                        {p.ret >= 0 ? `+${p.ret}%` : `${p.ret}%`}
                      </tspan>
                      <tspan fill="currentColor" fillOpacity="0.5"> | </tspan>
                      <tspan fill="currentColor" fillOpacity="0.8">S: {p.sharpe}</tspan>
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 4-Asset Comparative Institutional Risk & Return Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {scatterPoints.map((p) => {
              const sharpeRating =
                p.sharpe >= 1.0
                  ? { label: "Strong Alpha", color: "text-[#00E599] bg-emerald-500/10 border-emerald-500/20" }
                  : p.sharpe >= 0.5
                  ? { label: "Moderate", color: "text-[#3B82F6] bg-blue-500/10 border-blue-500/20" }
                  : { label: "High Risk Drag", color: "text-[#F59E0B] bg-amber-500/10 border-amber-500/20" };

              const profiles: Record<string, { role: string; desc: string }> = {
                BTC: { role: "Liquid Macro Asset", desc: "Digital store of value with convex upside and intermediate drawdowns." },
                SOL: { role: "High-Beta Layer 1", desc: "Extreme momentum and volatility; requires systematic trend-filtering." },
                GOLD: { role: "Defensive Reserve", desc: "Low correlation to equities; optimal portfolio ballast during shocks." },
                NVDA: { role: "AI Mega-Cap Tech", desc: "Dominant earnings momentum with concentrated semiconductor cyclicality." },
              };
              const prof = profiles[p.symbol] || { role: "Cross-Asset", desc: "Quantitative asset stream." };

              return (
                <div
                  key={p.symbol}
                  className="clay-recessed p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-recessed)]/60 space-y-3 hover:border-[var(--accent)]/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                      <span className="font-bold text-sm text-[var(--text-primary)]">{p.symbol}</span>
                      <span className="text-[10px] text-[var(--text-muted)]">/ USD</span>
                    </div>
                    <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md border ${sharpeRating.color}`}>
                      {sharpeRating.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                    <div className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]">
                      <span className="text-[9px] text-[var(--text-muted)] uppercase block">CAGR Return</span>
                      <span className={`text-sm font-extrabold ${p.ret >= 0 ? "text-[#00E599]" : "text-[#FF3B69]"}`}>
                        {p.ret >= 0 ? `+${p.ret}%` : `${p.ret}%`}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]">
                      <span className="text-[9px] text-[var(--text-muted)] uppercase block">Annualized Vol</span>
                      <span className="text-sm font-extrabold text-[var(--text-primary)]">
                        {p.vol}%
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]">
                      <span className="text-[9px] text-[var(--text-muted)] uppercase block">Sharpe Ratio</span>
                      <span className="text-sm font-extrabold text-[var(--accent)]">
                        {p.sharpe}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]">
                      <span className="text-[9px] text-[var(--text-muted)] uppercase block">Max Drawdown</span>
                      <span className="text-sm font-extrabold text-[#FF3B69]">
                        {p.maxDd}%
                      </span>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-[var(--border)]/60 text-[10px] text-[var(--text-secondary)] font-sans leading-relaxed">
                    <strong className="text-[var(--text-primary)] block font-mono text-[9px] uppercase tracking-wider mb-0.5">
                      {prof.role}
                    </strong>
                    {prof.desc}
                  </div>
                </div>
              );
            })}
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
                  "1INCH": [80, 160],
                  ETH: [520, 160],
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
