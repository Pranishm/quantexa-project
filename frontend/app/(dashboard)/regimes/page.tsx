"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, Maximize2, AlertTriangle, Layers, Calendar } from "lucide-react";

// Mock Regime Timeline Data
const REGIMES = [
  { id: 1, type: "BULL_TREND", name: "Bull Expansion", start: "Jan 24", end: "Mar 24", return: "+42.5%", color: "var(--positive)" },
  { id: 2, type: "HIGH_VOL", name: "High Volatility", start: "Mar 24", end: "May 24", return: "-12.1%", color: "var(--warning)" },
  { id: 3, type: "RANGE", name: "Range Bound", start: "May 24", end: "Aug 24", return: "+1.2%", color: "var(--text-muted)" },
  { id: 4, type: "BEAR_TREND", name: "Bear Drawdown", start: "Aug 24", end: "Sep 24", return: "-18.4%", color: "var(--negative)" },
  { id: 5, type: "BULL_TREND", name: "Bull Expansion", start: "Sep 24", end: "Present", return: "+28.1%", color: "var(--positive)" },
];

export default function RegimesPage() {
  const [activeAsset, setActiveAsset] = useState("BTC");

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <Layers className="w-6 h-6 text-[var(--accent)]" />
            Market Regime Analysis
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Segment trend, range, volatility, and risk-off periods to explain when a model works.
          </p>
        </div>
        <div className="flex items-center gap-2 clay-recessed p-1 rounded-xl bg-[var(--bg-recessed)] text-xs font-mono font-bold">
          {["BTC", "SOL", "NVDA", "GOLD"].map(asset => (
            <button 
              key={asset}
              onClick={() => setActiveAsset(asset)}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeAsset === asset ? 'bg-[var(--accent)] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
            >
              {asset}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Area (span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                Regime-Adjusted Price Action
              </h2>
              <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--text-muted)]">
                <Calendar className="w-3.5 h-3.5" />
                2024 YTD
              </div>
            </div>

            {/* Fake Chart with colored background zones */}
            <div className="h-64 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] relative overflow-hidden flex">
              {REGIMES.map((r, i) => (
                <div 
                  key={r.id} 
                  className="h-full relative border-r border-[var(--border)]/30 group transition-all"
                  style={{ 
                    flex: r.type === "RANGE" ? '1.5' : '1',
                    backgroundColor: `color-mix(in srgb, ${r.color} 5%, transparent)`
                  }}
                >
                  <div className="absolute top-2 left-2 text-[9px] font-mono font-bold opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: r.color }}>
                    {r.name}
                  </div>
                  
                  {/* Fake price line segment */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <svg width="100%" height="100%" preserveAspectRatio="none" className="opacity-70 stroke-[1.5px]" style={{ stroke: r.color, fill: 'none' }}>
                        {r.type === "BULL_TREND" && <path d="M0,80 Q20,60 50,40 T100,20" />}
                        {r.type === "HIGH_VOL" && <path d="M0,20 Q20,90 40,10 T60,80 T80,30 T100,50" />}
                        {r.type === "RANGE" && <path d="M0,50 Q20,40 40,60 T60,40 T80,55 T100,45" />}
                        {r.type === "BEAR_TREND" && <path d="M0,45 Q20,60 50,80 T100,95" />}
                     </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-[10px] font-mono pt-2">
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--positive)]"></span>Trend (Bull)</div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--negative)]"></span>Trend (Bear)</div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--warning)]"></span>High Volatility</div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--text-muted)]"></span>Range / Chop</div>
            </div>
          </div>
        </div>

        {/* Sidebar: Regime Statistics */}
        <div className="space-y-6">
          <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              Regime Distribution
            </h2>
            
            <div className="space-y-3">
              {[
                { name: "Bull Expansion", pct: 45, icon: TrendingUp, color: "var(--positive)" },
                { name: "Range Bound", pct: 30, icon: Maximize2, color: "var(--text-muted)" },
                { name: "High Volatility", pct: 15, icon: AlertTriangle, color: "var(--warning)" },
                { name: "Bear Drawdown", pct: 10, icon: TrendingDown, color: "var(--negative)" },
              ].map(item => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                      <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                      {item.name}
                    </span>
                    <span className="font-bold text-[var(--text-primary)]">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[var(--bg-recessed)] overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] space-y-3">
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Quantora Insight</div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Trend-following strategies historically lose capital during the <span className="font-bold text-[var(--text-primary)]">Range Bound</span> regime. 
              The algorithm detected a transition to this regime in May 2024, acting as an early warning to cut exposure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
