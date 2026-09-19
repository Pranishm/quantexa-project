"use client";

import { useState } from "react";
import { Bell, Plus, Trash2, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface AlertRule {
  id: string;
  symbol: string;
  condition: string;
  metric: string;
  status: "ARMED" | "TRIGGERED" | "MUTED";
  lastChecked: string;
  actionRoute: string;
}

const ALERTS: AlertRule[] = [
  {
    id: "al-1",
    symbol: "NVDA",
    condition: "Realized 30D Volatility expands > 50.0%",
    metric: "Current: 51.8%",
    status: "TRIGGERED",
    lastChecked: "2 mins ago",
    actionRoute: "/app/markets/asset/NVDA",
  },
  {
    id: "al-2",
    symbol: "BTC",
    condition: "Markov Regime transition from Trending to Chop/Range",
    metric: "Current: Trending (P=0.88)",
    status: "ARMED",
    lastChecked: "5 mins ago",
    actionRoute: "/app/research/regimes",
  },
  {
    id: "al-3",
    symbol: "GOLD",
    condition: "Correlation vs SPY drops below -0.25",
    metric: "Current: -0.18",
    status: "ARMED",
    lastChecked: "12 mins ago",
    actionRoute: "/app/markets/cross-asset",
  },
  {
    id: "al-4",
    symbol: "PORTFOLIO",
    condition: "Cumulative Peak-to-Trough Drawdown exceeds -8.0%",
    metric: "Current: -5.84%",
    status: "ARMED",
    lastChecked: "Just now",
    actionRoute: "/app/trade/portfolio",
  },
];

export default function AlertsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">QUANTITATIVE ALERTS & SIGNALS</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Automated statistical condition monitors, tail-risk triggers, and regime transition webhooks.
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#101318] hover:bg-[#151920] border border-[#20252C] rounded text-xs text-[#F4F5F7]">
          <Plus className="w-3.5 h-3.5 text-[#7868FF]" />
          <span>Create Alert Rule</span>
        </button>
      </div>

      {/* Rules Table */}
      <div className="border border-[#20252C] rounded-md bg-[#080A0D] overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-[#20252C] bg-[#0B0D10] text-[#68717C] text-[10px] uppercase tracking-wider">
              <th className="py-2.5 px-3">TARGET</th>
              <th className="py-2.5 px-3">CONDITION TRIGGER</th>
              <th className="py-2.5 px-3">CURRENT READING</th>
              <th className="py-2.5 px-3">STATUS</th>
              <th className="py-2.5 px-3">LAST AUDIT</th>
              <th className="py-2.5 px-3 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#20252C] font-mono">
            {ALERTS.map((rule) => (
              <tr key={rule.id} className="hover:bg-[#101318]/50 transition-colors">
                <td className="py-3 px-3 font-bold text-[#F4F5F7]">{rule.symbol}</td>
                <td className="py-3 px-3 font-sans text-[#F4F5F7]">{rule.condition}</td>
                <td className="py-3 px-3 text-[#A8AFB8]">{rule.metric}</td>
                <td className="py-3 px-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      rule.status === "TRIGGERED"
                        ? "bg-[#D8A94A]/15 text-[#D8A94A] border border-[#D8A94A]/30"
                        : rule.status === "ARMED"
                        ? "bg-[#36C98F]/15 text-[#36C98F] border border-[#36C98F]/30"
                        : "bg-[#151920] text-[#68717C] border border-[#20252C]"
                    }`}
                  >
                    {rule.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-[#68717C]">{rule.lastChecked}</td>
                <td className="py-3 px-3 text-right font-sans">
                  <Link
                    href={rule.actionRoute}
                    className="inline-flex items-center gap-1 text-[#7868FF] hover:text-[#FFFFFF] text-xs font-medium"
                  >
                    <span>Inspect</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
