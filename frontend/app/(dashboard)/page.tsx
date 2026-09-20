"use client";

import Link from "next/link";
import { TrendingUp, Network, Brain, Activity, ArrowRight, ShieldAlert, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function DashboardOverview() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Research Overview
        </h1>
        <p className="text-[var(--text-secondary)] text-sm max-w-2xl">
          Welcome to Quantora. Access your real-time asset analytics, strategy backtests, and AI-driven market insights from the command center.
        </p>
      </div>

      {/* Main Bento Grid */}
      <div className="bento-grid">
        
        {/* Main Telemetry Panel (Spans 2 columns on tablet, 8 on desktop) */}
        <motion.div 
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
          className="glass-panel p-6 flex flex-col md:col-span-2 xl:col-span-8 xl:row-span-2 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity className="w-32 h-32 text-[var(--accent)]" />
          </div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Live Market Telemetry</h2>
              <p className="text-xs text-[var(--text-muted)]">Real-time asset monitoring</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto relative z-10">
            {[
              { label: "BTC/USD", val: "$104,846", change: "+2.41%", pos: true },
              { label: "NVDA", val: "$184.20", change: "+2.14%", pos: true },
              { label: "GC=F (Gold)", val: "$2,674", change: "+0.42%", pos: true },
              { label: "VIX", val: "14.2", change: "-5.10%", pos: false },
            ].map((asset, i) => (
              <Link href={`/asset/${asset.label.split('/')[0].split(' ')[0]}`} key={i} className="bg-[var(--bg-elevated)] border border-[var(--border)] p-4 rounded-xl hover:border-[var(--border-strong)] transition-colors clay-interactive">
                <div className="text-xs font-semibold text-[var(--text-secondary)] mb-1">{asset.label}</div>
                <div className="text-lg font-bold font-mono text-[var(--text-primary)]">{asset.val}</div>
                <div className={`text-xs font-bold font-mono mt-2 ${asset.pos ? 'text-[var(--positive)]' : 'text-[var(--negative)]'}`}>
                  {asset.change}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* AI Copilot Widget (Spans 1 col on tablet, 4 on desktop) */}
        <motion.div 
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
          className="glass-panel p-6 flex flex-col md:col-span-1 xl:col-span-4 xl:row-span-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/20">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <h2 className="font-semibold text-[var(--text-primary)]">Featherless AI</h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mb-6 flex-1">
            Run quantitative analysis, query market regimes, and audit strategies using Featherless AI.
          </p>
          <Link href="/copilot" className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-sm font-medium hover:bg-[var(--bg-hover)] transition-colors clay-button">
            <span>Open Copilot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* System Status Widget (Spans 1 col on tablet, 4 on desktop) */}
        <motion.div 
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="glass-panel p-6 flex flex-col md:col-span-1 xl:col-span-4 xl:row-span-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[var(--positive)]/10 flex items-center justify-center">
              <ShieldAlert className="w-4 h-4 text-[var(--positive)]" />
            </div>
            <h2 className="font-semibold text-[var(--text-primary)]">System Status</h2>
          </div>
          <div className="space-y-3 mt-auto">
            <div className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-2">
              <span className="text-[var(--text-secondary)]">Trading Engine</span>
              <span className="text-[var(--positive)] font-mono font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse" />
                ONLINE
              </span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-2">
              <span className="text-[var(--text-secondary)]">Featherless AI</span>
              <span className="text-[var(--positive)] font-mono font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse" />
                CONNECTED
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[var(--text-secondary)]">Market Data</span>
              <span className="text-[var(--text-primary)] font-mono">12ms sync</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Tools */}
        <motion.div 
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="md:col-span-2 xl:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Link href="/backtest" className="glass-panel p-5 flex items-center gap-4 hover:border-[var(--accent)]/50 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Cpu className="w-5 h-5 text-[var(--text-primary)]" />
            </div>
            <div>
              <div className="font-semibold text-[var(--text-primary)] text-sm">Backtest Studio</div>
              <div className="text-xs text-[var(--text-muted)]">Run historical simulations</div>
            </div>
          </Link>
          <Link href="/correlations" className="glass-panel p-5 flex items-center gap-4 hover:border-[var(--accent)]/50 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Network className="w-5 h-5 text-[var(--text-primary)]" />
            </div>
            <div>
              <div className="font-semibold text-[var(--text-primary)] text-sm">Correlations Matrix</div>
              <div className="text-xs text-[var(--text-muted)]">Analyze cross-asset beta</div>
            </div>
          </Link>
          <Link href="/lab" className="glass-panel p-5 flex items-center gap-4 hover:border-[var(--accent)]/50 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Activity className="w-5 h-5 text-[var(--text-primary)]" />
            </div>
            <div>
              <div className="font-semibold text-[var(--text-primary)] text-sm">Strategy Lab</div>
              <div className="text-xs text-[var(--text-muted)]">Build quant algorithms</div>
            </div>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
