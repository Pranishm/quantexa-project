"use client";

import { useState } from "react";
import { Activity, ShieldCheck, Download, Filter, Clock, ArrowUpRight, Search, CheckCircle2 } from "lucide-react";
import { DEMO_ACTIVITIES } from "@/lib/demo-data";
import Link from "next/link";

export default function AccountActivityPage() {
  const [filterType, setFilterType] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = DEMO_ACTIVITIES.filter((item) => {
    if (filterType !== "ALL" && item.type !== filterType) return false;
    if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase()) && !item.detail.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono tracking-wider text-quant-violet dark:text-quant-violet-bright font-semibold uppercase px-2 py-0.5 rounded-full clay-recessed border border-quant-violet/20">
              TRUST / AUDIT TELEMETRY
            </span>
            <span className="text-xs text-quant-muted font-mono">CRYPTOGRAPHIC LOG</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-quant-primary">
            Research & Execution Activity
          </h1>
          <p className="text-sm text-quant-muted mt-1">
            Immutable quantitative audit trail recording backtest runs, parameter grid explorations, and regime updates.
          </p>
        </div>

        <button
          onClick={() => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(DEMO_ACTIVITIES, null, 2));
            const dlAnchor = document.createElement("a");
            dlAnchor.setAttribute("href", dataStr);
            dlAnchor.setAttribute("download", "quantora_activity_audit.json");
            dlAnchor.click();
          }}
          className="clay-card-interactive px-4 py-2 rounded-xl text-xs font-mono text-quant-primary flex items-center gap-2 border border-quant-border/30 hover:text-quant-violet"
        >
          <Download className="w-3.5 h-3.5" />
          Export JSON Audit
        </button>
      </div>

      {/* Filters & Search */}
      <div className="clay-card p-4 rounded-2xl border border-quant-border/30 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-quant-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search audit trail..."
              className="w-full pl-9 pr-3 py-1.5 text-xs font-mono rounded-xl clay-recessed bg-transparent border border-quant-border/40 text-quant-primary focus:outline-none focus:border-quant-violet"
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-start md:self-auto overflow-x-auto w-full md:w-auto">
          {["ALL", "BACKTEST", "ROBUSTNESS", "REGIME", "XRAY"].map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                filterType === t
                  ? "bg-quant-violet text-white font-semibold shadow-sm"
                  : "clay-card-interactive text-quant-muted hover:text-quant-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="clay-card p-6 rounded-3xl border border-quant-border/30 space-y-4">
        <div className="divide-y divide-quant-border/20">
          {filtered.map((item) => (
            <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl clay-recessed flex items-center justify-center text-quant-violet shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-quant-primary">{item.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full clay-recessed text-quant-muted uppercase">
                      {item.type}
                    </span>
                  </div>
                  <div className="text-xs text-quant-muted font-mono mt-1">{item.detail}</div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-xs font-mono text-quant-muted flex items-center gap-1 justify-end">
                  <Clock className="w-3 h-3" />
                  {item.time}
                </div>
                <div className="text-[10px] font-mono text-emerald-500 mt-1 flex items-center gap-1 justify-end">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
