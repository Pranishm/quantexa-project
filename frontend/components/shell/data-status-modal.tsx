"use client";

import { X, CheckCircle2, Activity, Database, Cpu, ShieldCheck } from "lucide-react";
import { useMarketSimulation } from "@/lib/market-simulation";

interface DataStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DataStatusModal({ isOpen, onClose }: DataStatusModalProps) {
  const { lastTick, latencyMs, tickCount } = useMarketSimulation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div 
        className="clay-card-elevated w-full max-w-md p-6 rounded-3xl space-y-5 border border-[var(--border-strong)] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--positive)] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[var(--positive)] absolute" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] pl-2">
              QUANTORA DATA STATUS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Grid */}
        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-xl clay-recessed-sm">
            <span className="text-[var(--text-secondary)]">Provider</span>
            <span className="font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
              <Database className="w-3 h-3 text-[var(--accent)]" />
              Quantora Demo Feed
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl clay-recessed-sm">
            <span className="text-[var(--text-secondary)]">Connection Status</span>
            <span className="font-semibold text-[var(--positive)] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Connected (Simulated Stream)
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl clay-recessed-sm">
            <span className="text-[var(--text-secondary)]">Round-Trip Latency</span>
            <span className="font-mono font-bold text-[var(--text-primary)]">{latencyMs} ms</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl clay-recessed-sm">
            <span className="text-[var(--text-secondary)]">Last Tick Dispatched</span>
            <span className="font-mono text-[var(--text-secondary)]">
              {lastTick.toTimeString().slice(0, 8)} UTC ({tickCount} ticks)
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl clay-recessed-sm">
            <span className="text-[var(--text-secondary)]">Coverage / Universe</span>
            <span className="font-mono font-semibold text-[var(--text-primary)]">4 / 4 Active Assets</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl clay-recessed-sm">
            <span className="text-[var(--text-secondary)]">Mathematical Mode</span>
            <span className="font-mono font-semibold text-[var(--accent)]">Deterministic Seed (2026)</span>
          </div>
        </div>

        {/* Note */}
        <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] text-[var(--text-muted)] leading-relaxed">
          The platform operates on a synchronized pseudo-stochastic model seeded for consistency across backtesting, regime analysis, and AI reasoning.
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 clay-button bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-semibold rounded-xl"
        >
          Close Status Monitor
        </button>
      </div>
    </div>
  );
}
