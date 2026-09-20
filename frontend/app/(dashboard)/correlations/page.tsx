"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Settings2, Info } from "lucide-react";

const ASSETS = ["BTC", "SOL", "NVDA", "GOLD"];

// Pre-computed fake correlation matrix
const CORRELATIONS: Record<string, Record<string, number>> = {
  BTC: { BTC: 1.0, SOL: 0.82, NVDA: 0.45, GOLD: 0.12 },
  SOL: { BTC: 0.82, SOL: 1.0, NVDA: 0.38, GOLD: -0.05 },
  NVDA: { BTC: 0.45, SOL: 0.38, NVDA: 1.0, GOLD: -0.18 },
  GOLD: { BTC: 0.12, SOL: -0.05, NVDA: -0.18, GOLD: 1.0 },
};

export default function CorrelationsPage() {
  const [timeframe, setTimeframe] = useState("1Y");

  const getColor = (value: number) => {
    if (value === 1) return "bg-[var(--bg-recessed)] text-[var(--text-muted)]";
    if (value > 0.7) return "bg-[var(--positive)]/20 text-[var(--positive)] border border-[var(--positive)]/30";
    if (value > 0.3) return "bg-[var(--positive)]/10 text-[var(--positive)]/80";
    if (value > -0.3) return "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border)]";
    if (value > -0.7) return "bg-[var(--negative)]/10 text-[var(--negative)]/80";
    return "bg-[var(--negative)]/20 text-[var(--negative)] border border-[var(--negative)]/30";
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[var(--accent)]" />
            Cross-Asset Correlation Matrix
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Analyze decoupling and rolling beta between crypto, equities, and hard assets.
          </p>
        </div>
        <div className="flex items-center gap-2 clay-recessed p-1 rounded-xl bg-[var(--bg-recessed)] text-xs font-mono font-bold">
          {["1M", "3M", "1Y", "ALL"].map(tf => (
            <button 
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1.5 rounded-lg transition-all ${timeframe === tf ? 'bg-[var(--accent)] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Heatmap (7 cols) */}
        <div className="xl:col-span-7 clay-card rounded-2xl border border-[var(--border)] p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              Pearson Correlation (Daily Returns)
            </h2>
            <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"><Settings2 className="w-4 h-4" /></button>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-[400px]">
              {/* Header row */}
              <div className="grid grid-cols-5 gap-2 mb-2">
                <div className="h-10"></div>
                {ASSETS.map(a => (
                  <div key={a} className="h-10 flex items-center justify-center font-mono font-bold text-sm text-[var(--text-primary)]">
                    {a}
                  </div>
                ))}
              </div>
              
              {/* Data rows */}
              <div className="space-y-2">
                {ASSETS.map(rowAsset => (
                  <div key={rowAsset} className="grid grid-cols-5 gap-2">
                    <div className="h-14 flex items-center justify-start font-mono font-bold text-sm text-[var(--text-primary)]">
                      {rowAsset}
                    </div>
                    {ASSETS.map(colAsset => {
                      const val = CORRELATIONS[rowAsset][colAsset];
                      return (
                        <div key={`${rowAsset}-${colAsset}`} className={`h-14 rounded-xl flex flex-col items-center justify-center transition-all ${getColor(val)}`}>
                          <span className="font-mono font-bold">{val === 1 ? "-" : val.toFixed(2)}</span>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] text-xs font-mono">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[var(--positive)]/20 border border-[var(--positive)]/30" />
                <span className="text-[var(--text-secondary)]">Highly Correlated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[var(--bg-surface)] border border-[var(--border)]" />
                <span className="text-[var(--text-secondary)]">Uncorrelated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[var(--negative)]/20 border border-[var(--negative)]/30" />
                <span className="text-[var(--text-secondary)]">Inverse</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rolling Beta / Insights (5 cols) */}
        <div className="xl:col-span-5 space-y-6">
          <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              <Info className="w-4 h-4 text-[var(--accent)]" />
              Intelligence Engine Insights
            </div>
            
            <div className="space-y-3">
              <div className="p-4 rounded-xl clay-recessed bg-[var(--bg-recessed)] border-l-4 border-l-[var(--positive)] text-sm text-[var(--text-secondary)] leading-relaxed">
                <span className="font-bold text-[var(--text-primary)]">Crypto Beta is high.</span> BTC and SOL exhibit strong structural correlation (0.82) over the {timeframe} window, suggesting macro-driven liquidity rather than token-specific catalysts.
              </div>
              
              <div className="p-4 rounded-xl clay-recessed bg-[var(--bg-recessed)] border-l-4 border-l-[var(--accent)] text-sm text-[var(--text-secondary)] leading-relaxed">
                <span className="font-bold text-[var(--text-primary)]">Tech decoupling.</span> NVDA's correlation with BTC has dropped from 0.65 to 0.45 recently, indicating tech equities and crypto are pricing different risk models.
              </div>
              
              <div className="p-4 rounded-xl clay-recessed bg-[var(--bg-recessed)] border-l-4 border-l-[var(--warning)] text-sm text-[var(--text-secondary)] leading-relaxed">
                <span className="font-bold text-[var(--text-primary)]">Gold is an effective hedge.</span> Gold maintains near-zero or slightly negative correlation to all risk assets, making it an ideal portfolio stabilizer.
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 py-3 mt-2 rounded-xl border border-[var(--border)] text-[var(--text-primary)] font-bold text-xs hover:border-[var(--accent)] transition-colors">
              Generate Advanced Report
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
