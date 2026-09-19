"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase, ArrowUpRight, ArrowDownRight, Shield, Layers, PieChart } from "lucide-react";

const POSITIONS = [
  { symbol: "BTC", name: "Bitcoin", allocation: "42.0%", size: "0.48 BTC", entryPrice: "$92,400.00", markPrice: "$104,284.32", val: "$50,056.47", pnl: "+$5,704.47", pnlPct: "+12.86%", up: true },
  { symbol: "NVDA", name: "NVIDIA Corp.", allocation: "33.5%", size: "320 Shares", entryPrice: "$114.20", markPrice: "$124.75", val: "$39,920.00", pnl: "+$3,376.00", pnlPct: "+9.24%", up: true },
  { symbol: "GOLD", name: "Gold Spot", allocation: "24.5%", size: "11.3 oz", entryPrice: "$2,480.00", markPrice: "$2,580.60", val: "$29,160.78", pnl: "+$1,136.78", pnlPct: "+4.06%", up: true },
];

export default function PortfolioAnalyticsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Simulation Banner (Section 33) */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#101318] border border-[#20252C] rounded text-xs">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-[#D8A94A]/10 text-[#D8A94A] font-mono text-[10px] font-bold">
            SIMULATION
          </span>
          <span className="text-[#A8AFB8]">
            Paper trading portfolio environment. Fictitious capital used for quantitative forward-testing.
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#68717C]">INITIAL CAPITAL: $100,000.00</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">PORTFOLIO ANALYTICS</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Real-time factor attribution, risk decomposition, and position analytics.
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs text-[#68717C]">TOTAL NET LIQUIDATION</div>
          <div className="text-2xl font-bold font-mono text-[#F4F5F7]">$119,137.25</div>
          <div className="text-xs font-mono text-[#36C98F] font-semibold">+$19,137.25 (+19.14%)</div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-[#0B0D10] border border-[#20252C] rounded p-3">
          <div className="text-[10px] text-[#68717C] uppercase tracking-wider">Portfolio Sharpe</div>
          <div className="text-lg font-bold font-mono text-[#F4F5F7] mt-1">1.68</div>
          <div className="text-[10px] text-[#36C98F] mt-0.5">Rf = 3.5% Annualized</div>
        </div>
        <div className="bg-[#0B0D10] border border-[#20252C] rounded p-3">
          <div className="text-[10px] text-[#68717C] uppercase tracking-wider">Max Drawdown</div>
          <div className="text-lg font-bold font-mono text-[#F4F5F7] mt-1">-5.84%</div>
          <div className="text-[10px] text-[#A8AFB8] mt-0.5">Peak-to-Trough</div>
        </div>
        <div className="bg-[#0B0D10] border border-[#20252C] rounded p-3">
          <div className="text-[10px] text-[#68717C] uppercase tracking-wider">Portfolio Beta</div>
          <div className="text-lg font-bold font-mono text-[#F4F5F7] mt-1">1.14</div>
          <div className="text-[10px] text-[#A8AFB8] mt-0.5">Benchmarked vs SPY</div>
        </div>
        <div className="bg-[#0B0D10] border border-[#20252C] rounded p-3">
          <div className="text-[10px] text-[#68717C] uppercase tracking-wider">Value at Risk (95%)</div>
          <div className="text-lg font-bold font-mono text-[#F4F5F7] mt-1">-$2,410.00</div>
          <div className="text-[10px] text-[#A8AFB8] mt-0.5">1-Day Historical Sim</div>
        </div>
      </div>

      {/* Asset Allocations Bar */}
      <div className="bg-[#0B0D10] border border-[#20252C] rounded p-4 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-[#F4F5F7]">TARGET WEIGHT ALLOCATION</span>
          <span className="text-[#68717C] font-mono">100% DEPLOYED</span>
        </div>
        <div className="h-3 w-full bg-[#101318] rounded flex overflow-hidden">
          <div style={{ width: "42%" }} className="bg-[#3987e5]" title="BTC 42%" />
          <div style={{ width: "33.5%" }} className="bg-[#199e70]" title="NVDA 33.5%" />
          <div style={{ width: "24.5%" }} className="bg-[#c98500]" title="GOLD 24.5%" />
        </div>
        <div className="flex items-center gap-6 text-[11px] text-[#A8AFB8] pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3987e5]" />
            <span>BTC (42.0%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#199e70]" />
            <span>NVDA (33.5%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c98500]" />
            <span>GOLD (24.5%)</span>
          </div>
        </div>
      </div>

      {/* Open Positions Table */}
      <div className="space-y-2">
        <div className="text-[10px] font-semibold text-[#68717C] uppercase tracking-wider">
          ACTIVE POSITIONS & MARK-TO-MARKET LEDGER
        </div>
        <div className="border border-[#20252C] rounded-md bg-[#080A0D] overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#20252C] bg-[#0B0D10] text-[#68717C] text-[10px] uppercase tracking-wider">
                <th className="py-2.5 px-3">ASSET</th>
                <th className="py-2.5 px-3">WEIGHT</th>
                <th className="py-2.5 px-3">POSITION SIZE</th>
                <th className="py-2.5 px-3">ENTRY PRICE</th>
                <th className="py-2.5 px-3">MARK PRICE</th>
                <th className="py-2.5 px-3">MARKET VALUE</th>
                <th className="py-2.5 px-3">UNREALIZED PNL</th>
                <th className="py-2.5 px-3 text-right">RETURN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#20252C] font-mono">
              {POSITIONS.map((pos) => (
                <tr key={pos.symbol} className="hover:bg-[#101318]/50 transition-colors">
                  <td className="py-3 px-3">
                    <div className="font-bold text-[#F4F5F7]">{pos.symbol}</div>
                    <div className="text-[10px] text-[#68717C] font-sans">{pos.name}</div>
                  </td>
                  <td className="py-3 px-3 text-[#A8AFB8]">{pos.allocation}</td>
                  <td className="py-3 px-3 text-[#F4F5F7]">{pos.size}</td>
                  <td className="py-3 px-3 text-[#A8AFB8]">{pos.entryPrice}</td>
                  <td className="py-3 px-3 text-[#F4F5F7] font-semibold">{pos.markPrice}</td>
                  <td className="py-3 px-3 text-[#F4F5F7]">{pos.val}</td>
                  <td className={`py-3 px-3 font-semibold ${pos.up ? "text-[#36C98F]" : "text-[#E85D68]"}`}>
                    {pos.pnl}
                  </td>
                  <td className={`py-3 px-3 text-right font-semibold ${pos.up ? "text-[#36C98F]" : "text-[#E85D68]"}`}>
                    {pos.pnlPct}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
