"use client";

import { Trophy, ArrowDown, Activity, ArrowUp } from "lucide-react";

export default function AutopsyPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <Trophy className="w-6 h-6 text-[var(--accent)]" />
            Strategy vs. Benchmark (Autopsy)
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Compare active strategies against simple buy-and-hold baselines before trusting complexity.
          </p>
        </div>
        <button className="clay-button px-4 py-2 rounded-xl border border-[var(--border)] text-[var(--text-primary)] text-xs font-semibold hover:border-[var(--accent)] transition-all">
          Export Full Autopsy PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Strategy vs Benchmark Chart */}
        <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              Return Comparison (1Y)
            </h2>
          </div>
          
          <div className="h-64 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] relative overflow-hidden p-4">
             {/* Simple Line SVG for Demo */}
             <svg width="100%" height="100%" preserveAspectRatio="none">
                {/* Benchmark (Buy & Hold) */}
                <path d="M0,200 L100,180 L200,190 L300,150 L400,100 L500,50 L600,10" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeDasharray="4 4" />
                {/* Active Strategy */}
                <path d="M0,200 L100,170 L200,170 L300,130 L400,90 L500,80 L600,40" fill="none" stroke="var(--accent)" strokeWidth="3" />
             </svg>
             <div className="absolute top-4 left-4 space-y-1 text-xs font-mono font-bold">
               <div className="flex items-center gap-2"><div className="w-3 h-0.5 bg-[var(--accent)]"></div> Active Strategy (+68%)</div>
               <div className="flex items-center gap-2 text-[var(--text-muted)]"><div className="w-3 h-0.5 bg-[var(--text-muted)] border-t border-dashed"></div> Buy & Hold (+82%)</div>
             </div>
          </div>
        </div>

        {/* Alpha Decomposition */}
        <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
          <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
            P&L Attribution (Why it underperformed)
          </h2>
          
          <div className="space-y-3">
            <div className="flex justify-between p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)]">
              <span className="text-sm text-[var(--text-secondary)] font-medium">Underlying Asset Return (Beta)</span>
              <span className="text-[var(--positive)] font-bold text-sm">+$82,000</span>
            </div>
            
            <div className="flex justify-between p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)]">
              <div className="flex flex-col">
                <span className="text-sm text-[var(--text-secondary)] font-medium">Timing Alpha (Whipsaw Loss)</span>
                <span className="text-[10px] text-[var(--text-muted)] mt-0.5">Strategy exited right before 3 major rallies</span>
              </div>
              <span className="text-[var(--negative)] font-bold text-sm">-$12,400</span>
            </div>

            <div className="flex justify-between p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)]">
               <div className="flex flex-col">
                <span className="text-sm text-[var(--text-secondary)] font-medium">Execution Friction (Fees + Slippage)</span>
                <span className="text-[10px] text-[var(--text-muted)] mt-0.5">342 trades @ 0.15% avg cost per round trip</span>
              </div>
              <span className="text-[var(--negative)] font-bold text-sm">-$1,600</span>
            </div>
          </div>
          
          <div className="p-4 bg-[var(--negative)]/10 rounded-xl border border-[var(--negative)]/20 text-sm font-medium text-[var(--negative)]">
            <div className="flex items-center gap-2 mb-1">
              <ArrowDown className="w-4 h-4" /> Final Verdict
            </div>
            This strategy generates negative alpha. You are taking on active trading risk and paying fees to underperform a simple buy-and-hold portfolio.
          </div>
        </div>
      </div>
    </div>
  );
}
