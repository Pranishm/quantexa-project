"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Trash2, ArrowRight, TrendingUp, Sparkles, Folder } from "lucide-react";

interface WatchlistItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  up: boolean;
  volatility: string;
  sharpe: string;
  beta: string;
}

const WATCHLISTS: Record<string, WatchlistItem[]> = {
  "Crypto": [
    { symbol: "BTC", name: "Bitcoin", price: "$104,284.32", change: "+2.41%", up: true, volatility: "42.1%", sharpe: "1.42", beta: "1.82" },
    { symbol: "SOL", name: "Solana", price: "$152.40", change: "-1.20%", up: false, volatility: "68.3%", sharpe: "0.87", beta: "2.10" },
  ],
  "Long-Term": [
    { symbol: "GOLD", name: "Gold (Physical Reserve)", price: "$2,580.60", change: "+0.65%", up: true, volatility: "18.4%", sharpe: "0.92", beta: "0.14" },
    { symbol: "BTC", name: "Bitcoin", price: "$104,284.32", change: "+2.41%", up: true, volatility: "42.1%", sharpe: "1.42", beta: "1.82" },
  ],
  "Research": [
    { symbol: "NVDA", name: "NVIDIA Corp", price: "$124.75", change: "+3.42%", up: true, volatility: "51.8%", sharpe: "1.18", beta: "1.74" },
    { symbol: "BTC", name: "Bitcoin", price: "$104,284.32", change: "+2.41%", up: true, volatility: "42.1%", sharpe: "1.42", beta: "1.82" },
  ],
  "High Volatility": [
    { symbol: "SOL", name: "Solana", price: "$152.40", change: "-1.20%", up: false, volatility: "68.3%", sharpe: "0.87", beta: "2.10" },
    { symbol: "NVDA", name: "NVIDIA Corp", price: "$124.75", change: "+3.42%", up: true, volatility: "51.8%", sharpe: "1.18", beta: "1.74" },
  ],
};

export default function WatchlistsPage() {
  const [activeTab, setActiveTab] = useState<string>("Primary Alpha Core");
  const [lists, setLists] = useState(WATCHLISTS);

  const currentItems = lists[activeTab] || [];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">RESEARCH WATCHLISTS</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Organized portfolios of cross-asset symbols monitored for statistical breakdown and volatility expansion.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#101318] hover:bg-[#151920] border border-[#20252C] rounded text-xs text-[#F4F5F7]">
            <Plus className="w-3.5 h-3.5 text-[#7868FF]" />
            <span>New Watchlist</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#20252C] pb-2 overflow-x-auto">
        {Object.keys(lists).map((listName) => (
          <button
            key={listName}
            onClick={() => setActiveTab(listName)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === listName
                ? "bg-[#101318] border border-[#7868FF] text-[#F4F5F7]"
                : "bg-transparent text-[#A8AFB8] hover:text-[#F4F5F7]"
            }`}
          >
            <Folder className="w-3.5 h-3.5 text-[#68717C]" />
            <span>{listName}</span>
            <span className="text-[10px] bg-[#080A0D] px-1.5 py-0.2 rounded text-[#68717C] font-mono">
              {lists[listName].length}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="border border-[#20252C] rounded-md bg-[#080A0D] overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-[#20252C] bg-[#0B0D10] text-[#68717C] text-[10px] uppercase tracking-wider">
              <th className="py-2.5 px-3">ASSET</th>
              <th className="py-2.5 px-3">PRICE</th>
              <th className="py-2.5 px-3">1D CHANGE</th>
              <th className="py-2.5 px-3">VOLATILITY (30D)</th>
              <th className="py-2.5 px-3">SHARPE</th>
              <th className="py-2.5 px-3">BETA (VS SPY)</th>
              <th className="py-2.5 px-3 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#20252C] font-mono">
            {currentItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#101318]/50 transition-colors">
                <td className="py-3 px-3">
                  <div className="font-bold text-[#F4F5F7]">{item.symbol}</div>
                  <div className="text-[10px] text-[#68717C] font-sans">{item.name}</div>
                </td>
                <td className="py-3 px-3 text-[#F4F5F7] font-semibold">{item.price}</td>
                <td className={`py-3 px-3 font-semibold ${item.up ? "text-[#36C98F]" : "text-[#E85D68]"}`}>
                  {item.change}
                </td>
                <td className="py-3 px-3 text-[#A8AFB8]">{item.volatility}</td>
                <td className="py-3 px-3 text-[#F4F5F7]">{item.sharpe}</td>
                <td className="py-3 px-3 text-[#A8AFB8]">{item.beta}</td>
                <td className="py-3 px-3 text-right font-sans">
                  {(() => {
                    const dest = item.symbol === "BTC"
                      ? "/app/assets/bitcoin"
                      : item.symbol === "SOL"
                      ? "/app/assets/solana"
                      : item.symbol === "GOLD"
                      ? "/app/assets/gold"
                      : "/app/assets/nvidia";
                    return (
                      <Link
                        href={dest}
                        className="inline-flex items-center gap-1 text-[var(--accent)] hover:text-[var(--text-primary)] text-xs font-semibold px-2.5 py-1 rounded bg-[var(--bg-elevated)] border border-[var(--border)] mr-2 clay-button"
                      >
                        <span>Analyze</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    );
                  })()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
