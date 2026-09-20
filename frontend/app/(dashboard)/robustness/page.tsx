"use client";

import { Activity, Target, ShieldAlert, Cpu } from "lucide-react";

export default function RobustnessPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <Activity className="w-6 h-6 text-[var(--accent)]" />
            Parameter Robustness Testing
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Sweep parameter ranges to find stable plateaus instead of fragile, over-optimized settings.
          </p>
        </div>
        <button className="clay-button px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold">
          Run 50x50 Matrix Sweep
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Heatmap Area (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                Sharpe Ratio Topography
              </h2>
              <div className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-recessed)] px-2 py-1 rounded-lg">
                Y: Fast SMA (10-30) · X: Slow SMA (40-60)
              </div>
            </div>

            {/* Fake 3D / Heatmap Mesh representation */}
            <div className="aspect-[16/9] rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] relative overflow-hidden flex flex-col">
               {/* 20x20 grid of div squares colored by a function */}
               <div className="flex-1 grid grid-cols-10 grid-rows-10 gap-0 opacity-80 mix-blend-screen">
                  {[...Array(100)].map((_, i) => {
                    const row = Math.floor(i / 10);
                    const col = i % 10;
                    // Create a "plateau" around center-right
                    const dist = Math.sqrt(Math.pow(row - 4, 2) + Math.pow(col - 7, 2));
                    let color = "var(--negative)";
                    if (dist < 2) color = "var(--positive)";
                    else if (dist < 4) color = "var(--accent)";
                    else if (dist < 6) color = "var(--warning)";
                    
                    return (
                      <div key={i} className="w-full h-full border border-[var(--bg-root)]/10" style={{ backgroundColor: color, opacity: 0.15 + (10-dist)*0.08 }}></div>
                    )
                  })}
               </div>
               
               {/* Overlay targeting crosshair */}
               <div className="absolute top-[45%] left-[75%] w-6 h-6 border-2 border-white rounded-full flex items-center justify-center animate-pulse shadow-[0_0_10px_white]">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
               </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <Target className="w-4 h-4 text-[var(--positive)]" /> Selected: <span className="font-bold text-[var(--text-primary)]">Fast 18, Slow 52</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-muted)]">Neighborhood Stability:</span>
                <span className="font-bold text-[var(--positive)]">High (84%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Insights (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[var(--negative)]" />
              Overfitting Warning
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                The absolute highest Sharpe ratio (2.1) occurs at <span className="font-mono text-xs font-bold text-[var(--text-primary)]">Fast 12, Slow 41</span>.
              </p>
              <p className="p-3 bg-[var(--negative)]/10 border-l-2 border-[var(--negative)] text-[var(--negative)] font-bold text-xs">
                However, moving parameters by just +1 causes performance to collapse by 60%. This is an over-optimized, fragile peak.
              </p>
              <p>
                The model intelligently selects the broader <span className="text-[var(--positive)] font-bold">green plateau</span> (Sharpe 1.6) where performance is highly stable across neighboring parameter values.
              </p>
            </div>
          </div>
          
          <div className="p-5 rounded-2xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] space-y-3">
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Engine Stats</div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between"><span>Permutations</span><span className="font-bold text-[var(--text-primary)]">2,500</span></div>
              <div className="flex justify-between"><span>Compute Time</span><span className="font-bold text-[var(--accent)]">4.2s (Vectorized)</span></div>
              <div className="flex justify-between"><span>Hardware</span><span className="font-bold text-[var(--text-muted)]">WebAssembly/SIMD</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
