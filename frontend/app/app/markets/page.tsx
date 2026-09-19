"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles, Activity } from "lucide-react";

const ASSET_CATALOG = [
  { symbol: "BTC", name: "Bitcoin / USD", category: "Crypto", price: "$104,284.32", change: "+2.41%", up: true, vol: "42.1%", sharpe: "1.42", regime: "Trending" },
  { symbol: "NVDA", name: "NVIDIA Corporation", category: "Equities", price: "$124.75", change: "+3.42%", up: true, vol: "51.8%", sharpe: "1.18", regime: "Expansion" },
  { symbol: "GOLD", name: "Gold Futures", category: "Commodities", price: "$2,580.60", change: "+0.65%", up: true, vol: "18.4%", sharpe: "0.92", regime: "Low Volatility" },
  { symbol: "SOL", name: "Solana / USD", category: "Crypto", price: "$152.40", change: "-1.20%", up: false, vol: "68.3%", sharpe: "0.87", regime: "Chop / Range" },
  { symbol: "AAPL", name: "Apple Inc.", category: "Equities", price: "$228.30", change: "-0.45%", up: false, vol: "21.5%", sharpe: "1.05", regime: "Sideways" },
  { symbol: "MSFT", name: "Microsoft Corporation", category: "Equities", price: "$435.20", change: "+0.85%", up: true, vol: "24.1%", sharpe: "1.34", regime: "Trending" },
  { symbol: "ETH", name: "Ethereum / USD", category: "Crypto", price: "$2,610.15", change: "+1.85%", up: true, vol: "58.2%", sharpe: "0.98", regime: "Transition" },
];

export default function MarketsHubPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"ALL" | "Equities" | "Crypto" | "Commodities">("ALL");
  const [search, setSearch] = useState("");

  const filteredAssets = ASSET_CATALOG.filter((a) => {
    const matchesTab = activeTab === "ALL" || a.category === activeTab;
    const matchesSearch = a.symbol.toLowerCase().includes(search.toLowerCase()) || a.name.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">MARKET OVERVIEW & UNIVERSE</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Cross-asset directory of equities, cryptocurrencies, and commodities monitored in the Quantora station.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/app/markets/cross-asset"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#101318] hover:bg-[#151920] border border-[#20252C] rounded text-xs text-[#F4F5F7] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7868FF]" />
            <span>Cross-Asset Map</span>
          </Link>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0B0D10] border border-[#20252C] rounded-md p-3">
        <div className="flex items-center gap-1">
          {(["ALL", "Equities", "Crypto", "Commodities"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#151920] border border-[#7868FF] text-[#F4F5F7]"
                  : "bg-transparent text-[#A8AFB8] hover:text-[#F4F5F7]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-[#68717C] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by symbol or name..."
            className="w-full bg-[#101318] border border-[#20252C] rounded pl-9 pr-3 py-1.5 text-xs text-[#F4F5F7] placeholder-[#68717C] focus:border-[#7868FF] focus:outline-none"
          />
        </div>
      </div>

      {/* Institutional Table */}
      <div className="border border-[#20252C] rounded-md bg-[#080A0D] overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-[#20252C] bg-[#0B0D10] text-[#68717C] text-[10px] uppercase tracking-wider">
              <th className="py-2.5 px-3 font-semibold">ASSET</th>
              <th className="py-2.5 px-3 font-semibold">CLASS</th>
              <th className="py-2.5 px-3 font-semibold">PRICE</th>
              <th className="py-2.5 px-3 font-semibold">1D CHANGE</th>
              <th className="py-2.5 px-3 font-semibold">VOLATILITY (30D)</th>
              <th className="py-2.5 px-3 font-semibold">SHARPE</th>
              <th className="py-2.5 px-3 font-semibold">REGIME</th>
              <th className="py-2.5 px-3 font-semibold text-right">WORKSTATION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#20252C] font-mono">
            {filteredAssets.map((asset) => (
              <tr key={asset.symbol} className="hover:bg-[#101318]/50 transition-colors">
                <td className="py-3 px-3">
                  <div className="font-bold text-[#F4F5F7]">{asset.symbol}</div>
                  <div className="text-[10px] text-[#68717C] font-sans">{asset.name}</div>
                </td>
                <td className="py-3 px-3 font-sans text-[#A8AFB8]">{asset.category}</td>
                <td className="py-3 px-3 text-[#F4F5F7] font-semibold">{asset.price}</td>
                <td className={`py-3 px-3 font-semibold ${asset.up ? "text-[#36C98F]" : "text-[#E85D68]"}`}>
                  {asset.change}
                </td>
                <td className="py-3 px-3 text-[#A8AFB8]">{asset.vol}</td>
                <td className="py-3 px-3 text-[#F4F5F7] font-bold">{asset.sharpe}</td>
                <td className="py-3 px-3 font-sans">
                  <span className="px-2 py-0.5 rounded bg-[#101318] border border-[#20252C] text-[#A8AFB8] text-[11px]">
                    {asset.regime}
                  </span>
                </td>
                <td className="py-3 px-3 text-right font-sans">
                  <Link
                    href={`/app/markets/asset/${asset.symbol}`}
                    className="inline-flex items-center gap-1 text-[#7868FF] hover:text-[#FFFFFF] text-xs font-medium transition-colors"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight className="w-3 h-3" />
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
