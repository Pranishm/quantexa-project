"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import { API_BASE } from "@/lib/api";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export function ReportView() {
  const [asset, setAsset] = useState("BTC-USD");
  const [strategy, setStrategy] = useState("SMA Crossover");

  const generateReport = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${API_BASE}/api/analytics/report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asset,
          strategy,
          metrics_asset: {
            total_return: 1.45,
            annual_return: 0.22,
            annual_volatility: 0.65,
            sharpe_ratio: 0.85,
            sortino_ratio: 1.1,
            max_drawdown: -0.55,
            win_rate: 0.52,
          },
          metrics_strategy: {
            total_return: 0.85,
            annual_volatility: 0.45,
            sharpe_ratio: 1.05,
            max_drawdown: -0.35,
          },
          regimes: [
            { regime: "Bull / High Vol", total_return: 0.15, volatility: 0.70, sharpe: 1.2, max_drawdown: -0.20 }
          ]
        }),
      });
      if (!res.ok) throw new Error("Failed to generate report");
      return res.json();
    },
  });

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
        <select
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          className="bg-[var(--color-panel)] border border-[var(--color-line)] text-[var(--color-ink)] px-3 py-1.5 rounded text-sm outline-none"
        >
          <option value="BTC-USD">BTC-USD</option>
          <option value="NVDA">NVDA</option>
          <option value="GC=F">GC=F</option>
        </select>
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          className="bg-[var(--color-panel)] border border-[var(--color-line)] text-[var(--color-ink)] px-3 py-1.5 rounded text-sm outline-none"
        >
          <option value="SMA Crossover">SMA Crossover</option>
          <option value="EMA Trend">EMA Trend</option>
          <option value="Mean Reversion">Mean Reversion</option>
        </select>
        
        <button
          onClick={() => generateReport.mutate()}
          disabled={generateReport.isPending}
          className="bg-[var(--color-signal)] text-black px-4 py-1.5 rounded text-sm font-bold uppercase tracking-wide hover:opacity-90 disabled:opacity-50"
        >
          {generateReport.isPending ? "Generating..." : "Generate AI Report"}
        </button>
      </motion.div>

      {generateReport.error && <div className="text-red-500">Failed to generate report.</div>}
      
      {generateReport.data && (
        <motion.div variants={itemVariants} className="glass-panel p-6">
          <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-line)] pb-4">
            <span className="grid h-5 w-5 place-items-center rounded bg-[var(--color-signal)] text-black text-xs font-bold">AI</span>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-ink)]">
              {generateReport.data.ai_report ? "AI Analyst Rewrite" : "Quantitative Summary"}
            </h2>
          </div>
          <pre className="whitespace-pre-wrap text-sm text-[var(--color-ink)] font-sans leading-relaxed">
            {generateReport.data.final_report}
          </pre>
          <div className="mt-8 pt-4 border-t border-[var(--color-line)] text-[10px] uppercase text-[var(--color-ink-faint)]">
            {generateReport.data.disclaimer}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
