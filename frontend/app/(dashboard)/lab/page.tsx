"use client";

import { useState } from "react";
import { Cpu, Settings2, Plus, Zap, BarChart3, Activity } from "lucide-react";

export default function LabPage() {
  const [activeAsset, setActiveAsset] = useState("BTC");
  const [indicators, setIndicators] = useState([
    { id: 1, name: "Simple Moving Average", params: "Length: 20", color: "var(--accent)" },
    { id: 2, name: "Exponential Moving Average", params: "Length: 50", color: "var(--warning)" },
  ]);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <Cpu className="w-6 h-6 text-[var(--accent)]" />
            Quantitative Indicator Engine
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Compute SMA, EMA, Sharpe, volatility, drawdown, and signal features for every asset.
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Indicator Builder (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              Active Math Pipeline
            </h2>
          </div>
          
          <div className="clay-card p-4 rounded-2xl border border-[var(--border)] space-y-3">
            {indicators.map(ind => (
              <div key={ind.id} className="p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] border-l-4" style={{ borderLeftColor: ind.color }}>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-[var(--text-primary)]">{ind.name}</div>
                  <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"><Settings2 className="w-4 h-4" /></button>
                </div>
                <div className="text-[10px] font-mono text-[var(--text-secondary)] mt-1">{ind.params}</div>
              </div>
            ))}
            
            <button className="w-full py-3 rounded-xl border border-dashed border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all flex items-center justify-center gap-2 text-xs font-bold">
              <Plus className="w-4 h-4" /> Add Indicator Layer
            </button>
          </div>

          <div className="clay-card p-4 rounded-2xl border border-[var(--border)] space-y-4">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono flex items-center gap-2">
              <Zap className="w-4 h-4 text-[var(--warning)]" /> Derived Signals
            </h2>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center p-2 rounded-lg bg-[var(--bg-recessed)]">
                <span className="text-[var(--text-secondary)]">SMA Crossover</span>
                <span className="text-[var(--positive)] font-bold">BULLISH (+1)</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-[var(--bg-recessed)]">
                <span className="text-[var(--text-secondary)]">RSI Divergence</span>
                <span className="text-[var(--text-muted)] font-bold">NEUTRAL (0)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Chart Canvas (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="px-2">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              Vectorized Price Output
            </h2>
          </div>
          
          <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
            <div className="h-[400px] rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] relative overflow-hidden flex flex-col justify-end">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-8 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-full border-b border-[var(--border)]/30"></div>
                ))}
              </div>
              
              {/* Fake price line */}
              <svg width="100%" height="100%" className="absolute inset-0 preserveAspectRatio-none drop-shadow-[0_4px_12px_rgba(135,118,255,0.4)]">
                <path d="M0,350 Q100,280 200,310 T400,200 T600,250 T800,100" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
                {/* Fake SMA 20 */}
                <path d="M0,340 Q100,290 200,320 T400,220 T600,260 T800,120" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />
                {/* Fake EMA 50 */}
                <path d="M0,330 Q100,300 200,330 T400,250 T600,280 T800,150" fill="none" stroke="var(--warning)" strokeWidth="2" strokeDasharray="8 4" />
              </svg>
            </div>
            
            <div className="flex items-center gap-6 text-xs font-mono font-bold px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-[var(--text-primary)]"></div> {activeAsset} Close Price
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-[var(--accent)] border-t-2 border-dashed border-[var(--accent)]"></div> SMA (20)
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-[var(--warning)] border-t-2 border-dashed border-[var(--warning)]"></div> EMA (50)
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
