"use client";

import { Activity, ArrowUpRight, ArrowDownRight, Layers, BarChart3, ChevronRight, Filter, Settings, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

// Mock Data
const ASSETS = [
  { sym: "BTC", name: "Bitcoin", price: 104284.50, change: 2.41, vol: "41.8%", color: "#8776FF", status: "Aligned" },
  { sym: "SOL", name: "Solana", price: 238.67, change: 3.18, vol: "58.2%", color: "#35D39A", status: "Aligned" },
  { sym: "GOLD", name: "Gold (GC=F)", price: 2672.81, change: 0.72, vol: "14.2%", color: "#E4B64D", status: "Aligned" },
  { sym: "NVDA", name: "NVIDIA", price: 178.30, change: -0.84, vol: "36.4%", color: "#FF6572", status: "Interpolated" },
];

const METRICS = [
  { label: "Total Sessions Processed", value: "842,910" },
  { label: "Data Alignment Rate", value: "99.8%" },
  { label: "Forward Fill Ops", value: "1,204" },
  { label: "Data Quality Score", value: "A+" },
];

export default function MarketsPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <Layers className="w-6 h-6 text-[var(--accent)]" />
            Multi-Asset Data Processing
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Ingest and align Gold, BTC, SOL, and NVDA sessions into one clean research universe.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="clay-button p-2 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <Filter className="w-4 h-4" />
          </button>
          <button className="clay-button p-2 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <Settings className="w-4 h-4" />
          </button>
          <button 
            onClick={handleRefresh}
            className="clay-button px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            Sync Feeds
          </button>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {METRICS.map((m, i) => (
          <div key={i} className="clay-card p-4 rounded-2xl border border-[var(--border)]">
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">{m.label}</div>
            <div className="text-2xl font-bold text-[var(--text-primary)] mt-1">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Asset Universe (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              Aligned Asset Universe
            </h2>
            <div className="text-[10px] text-[var(--positive)] font-mono font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse" />
              LIVE DATA STREAM
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ASSETS.map((asset) => (
              <div key={asset.sym} className="clay-card p-5 rounded-2xl border border-[var(--border)] space-y-4 hover:border-[var(--accent)]/50 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-inner" style={{ backgroundColor: `${asset.color}20`, color: asset.color }}>
                      {asset.sym}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--text-primary)] leading-tight">{asset.name}</div>
                      <div className="text-[10px] font-mono text-[var(--text-muted)]">{asset.sym}/USD</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                </div>

                <div>
                  <div className="text-2xl font-bold font-mono text-[var(--text-primary)] flex items-center gap-2">
                    ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className={`text-xs font-mono font-bold flex items-center gap-1 ${asset.change >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                    {asset.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {Math.abs(asset.change)}%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[var(--border)]">
                  <div className="clay-recessed p-2 rounded-lg bg-[var(--bg-recessed)]">
                    <div className="text-[9px] font-mono text-[var(--text-muted)]">VOLATILITY</div>
                    <div className="text-xs font-bold text-[var(--text-primary)] font-mono">{asset.vol}</div>
                  </div>
                  <div className="clay-recessed p-2 rounded-lg bg-[var(--bg-recessed)]">
                    <div className="text-[9px] font-mono text-[var(--text-muted)]">ALIGNMENT</div>
                    <div className="text-xs font-bold text-[var(--text-primary)] font-mono">{asset.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Processing Log (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="px-2">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              Synchronization Log
            </h2>
          </div>
          
          <div className="clay-card rounded-2xl border border-[var(--border)] h-[calc(100%-2rem)] flex flex-col overflow-hidden min-h-[300px]">
            <div className="p-4 border-b border-[var(--border)] bg-[var(--bg-surface)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                <Activity className="w-4 h-4 text-[var(--accent)]" />
                <span>Engine Pipeline Status</span>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-[10px] bg-[var(--bg-recessed)]">
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)]">14:22:01</span>
                <span className="text-[var(--positive)]">[SUCCESS]</span>
                <span className="text-[var(--text-secondary)]">Fetched 1M candles from Binance API (BTC).</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)]">14:22:05</span>
                <span className="text-[var(--positive)]">[SUCCESS]</span>
                <span className="text-[var(--text-secondary)]">Fetched 1M candles from Binance API (SOL).</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)]">14:22:12</span>
                <span className="text-[var(--positive)]">[SUCCESS]</span>
                <span className="text-[var(--text-secondary)]">Fetched daily equities data (NVDA) from Yahoo.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)]">14:22:15</span>
                <span className="text-[var(--warning)]">[WARN]</span>
                <span className="text-[var(--text-secondary)]">NVDA market closed on weekends. Applying forward-fill interpolation to align with crypto timeframe.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)]">14:22:18</span>
                <span className="text-[var(--positive)]">[SUCCESS]</span>
                <span className="text-[var(--text-secondary)]">Fetched commodities data (GC=F) from Yahoo.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)]">14:22:20</span>
                <span className="text-[var(--warning)]">[WARN]</span>
                <span className="text-[var(--text-secondary)]">Gold market closed on weekends. Applying forward-fill interpolation.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)]">14:22:25</span>
                <span className="text-[var(--accent)]">[ALIGN]</span>
                <span className="text-[var(--text-primary)] font-bold">Constructed universal multi-asset DataFrame. Rows: 214,500. NaNs: 0.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
