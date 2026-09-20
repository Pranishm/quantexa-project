"use client";

import { useState } from "react";
import { BarChart3, Play, Download, Clock, DollarSign, Activity } from "lucide-react";

export default function BacktestPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [showResults, setShowResults] = useState(true); // Default true for demo

  const handleRun = () => {
    setIsRunning(true);
    setShowResults(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-[var(--accent)]" />
            Strategy Backtesting Engine
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Replay rule-based strategies on historical data with next-bar fills and transaction cost drag.
          </p>
        </div>
        <button 
          onClick={handleRun}
          className="clay-button px-6 py-2.5 rounded-xl bg-[var(--accent)] text-white text-sm font-bold flex items-center gap-2 shadow-[0_0_15px_var(--accent)] hover:opacity-90 transition-opacity"
        >
          <Play className={`w-4 h-4 ${isRunning ? 'animate-pulse' : ''}`} fill="currentColor" />
          {isRunning ? "Simulating Market..." : "Run Vectorized Backtest"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Config (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="clay-card rounded-2xl border border-[var(--border)] p-5 space-y-4">
            <h2 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono border-b border-[var(--border)] pb-2">
              Parameters
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <label className="text-xs text-[var(--text-secondary)] font-bold">Strategy Model</label>
                <select className="w-full mt-1 p-2 rounded-lg bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] font-mono text-xs">
                  <option>Dual Moving Average Crossover</option>
                  <option>Mean Reversion (Bollinger)</option>
                  <option>Momentum Breakout</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-[var(--text-secondary)] font-bold">Asset Universe</label>
                <select className="w-full mt-1 p-2 rounded-lg bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] font-mono text-xs">
                  <option>Bitcoin (BTC/USD)</option>
                  <option>NVIDIA (NVDA)</option>
                  <option>Gold (GC=F)</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-[var(--text-secondary)] font-bold">Fast Length</label>
                  <input type="number" defaultValue={20} className="w-full mt-1 p-2 rounded-lg bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] font-mono text-xs" />
                </div>
                <div>
                  <label className="text-xs text-[var(--text-secondary)] font-bold">Slow Length</label>
                  <input type="number" defaultValue={50} className="w-full mt-1 p-2 rounded-lg bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] font-mono text-xs" />
                </div>
              </div>
            </div>
          </div>

          <div className="clay-card rounded-2xl border border-[var(--border)] p-5 space-y-4">
            <h2 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono border-b border-[var(--border)] pb-2">
              Execution Friction
            </h2>
            <div className="space-y-3 text-sm font-mono">
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-secondary)] text-xs">Commission</span>
                <span className="text-[var(--text-primary)]">0.10%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-secondary)] text-xs">Slippage</span>
                <span className="text-[var(--text-primary)]">0.05%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-secondary)] text-xs">Initial Capital</span>
                <span className="text-[var(--positive)] font-bold">$100,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          {isRunning && (
            <div className="h-full min-h-[400px] clay-card rounded-2xl border border-[var(--border)] flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 rounded-full border-4 border-[var(--accent)]/30 border-t-[var(--accent)] animate-spin"></div>
              <div className="font-mono text-xs text-[var(--text-muted)] animate-pulse">Running vectorized backtest engine over 840,000 historical rows...</div>
            </div>
          )}

          {!isRunning && showResults && (
            <>
              {/* Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Net Profit", val: "+$42,108.50", tone: "text-[var(--positive)]" },
                  { label: "CAGR", val: "18.4%", tone: "text-[var(--text-primary)]" },
                  { label: "Max Drawdown", val: "-14.2%", tone: "text-[var(--negative)]" },
                  { label: "Sharpe Ratio", val: "1.68", tone: "text-[var(--accent)]" },
                ].map(m => (
                  <div key={m.label} className="clay-card p-4 rounded-2xl border border-[var(--border)]">
                    <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">{m.label}</div>
                    <div className={`text-xl sm:text-2xl font-bold font-mono mt-1 ${m.tone}`}>{m.val}</div>
                  </div>
                ))}
              </div>

              {/* Equity Curve */}
              <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                    Compounded Equity Curve
                  </h2>
                  <button className="clay-button p-2 rounded-lg bg-[var(--bg-recessed)] text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs flex items-center gap-2">
                    <Download className="w-3.5 h-3.5" /> CSV
                  </button>
                </div>
                
                <div className="h-64 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] relative overflow-hidden flex items-end p-0">
                   <svg width="100%" height="100%" preserveAspectRatio="none" className="drop-shadow-[0_4px_12px_rgba(22,199,132,0.3)]">
                      {/* Gradient fill */}
                      <defs>
                        <linearGradient id="eqGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--positive)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="var(--positive)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,256 L0,200 Q100,220 200,150 T400,180 T600,100 T800,40 L800,256 Z" fill="url(#eqGrad)" />
                      {/* Line */}
                      <path d="M0,200 Q100,220 200,150 T400,180 T600,100 T800,40" fill="none" stroke="var(--positive)" strokeWidth="3" />
                      
                      {/* Buy/Sell markers */}
                      <circle cx="200" cy="150" r="4" fill="var(--accent)" />
                      <circle cx="400" cy="180" r="4" fill="var(--negative)" />
                      <circle cx="600" cy="100" r="4" fill="var(--accent)" />
                   </svg>
                </div>

                <div className="flex items-center gap-6 text-[10px] font-mono pt-2">
                   <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--positive)]"></span>Strategy Equity</div>
                   <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>Long Entry</div>
                   <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--negative)]"></span>Short / Exit</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
