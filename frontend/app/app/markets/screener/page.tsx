"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Filter, ArrowUpDown, ArrowRight, Download, Search, Check } from "lucide-react";

interface ScreenedAsset {
  symbol: string;
  name: string;
  assetClass: "Equity" | "Crypto" | "Commodity";
  price: number;
  change1D: number;
  vol30D: number;
  sharpe: number;
  maxDd: number;
  rsi: number;
  regime: string;
}

const ASSET_UNIVERSE: ScreenedAsset[] = [
  { symbol: "NVDA", name: "NVIDIA Corp.", assetClass: "Equity", price: 124.75, change1D: 3.42, vol30D: 51.8, sharpe: 1.18, maxDd: -14.2, rsi: 64.2, regime: "Expansion" },
  { symbol: "BTC", name: "Bitcoin", assetClass: "Crypto", price: 104284.32, change1D: 2.41, vol30D: 42.1, sharpe: 1.42, maxDd: -18.3, rsi: 68.1, regime: "Trending" },
  { symbol: "GOLD", name: "Gold Futures", assetClass: "Commodity", price: 2580.60, change1D: 0.65, vol30D: 18.4, sharpe: 0.92, maxDd: -5.1, rsi: 54.0, regime: "Safe Haven" },
  { symbol: "SOL", name: "Solana", assetClass: "Crypto", price: 152.40, change1D: -1.20, vol30D: 68.3, sharpe: 0.87, maxDd: -28.4, rsi: 46.5, regime: "Chop / Range" },
  { symbol: "AAPL", name: "Apple Inc.", assetClass: "Equity", price: 228.30, change1D: -0.45, vol30D: 21.4, sharpe: 1.05, maxDd: -9.8, rsi: 49.2, regime: "Low Volatility" },
  { symbol: "MSFT", name: "Microsoft Corp.", assetClass: "Equity", price: 435.20, change1D: 0.85, vol30D: 24.6, sharpe: 1.34, maxDd: -8.4, rsi: 58.4, regime: "Trending" },
  { symbol: "ETH", name: "Ethereum", assetClass: "Crypto", price: 2610.15, change1D: 1.85, vol30D: 58.2, sharpe: 0.98, maxDd: -24.1, rsi: 52.8, regime: "Transition" },
];

export default function ScreenerPage() {
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState<string>("All");
  const [minSharpe, setMinSharpe] = useState<number>(0);
  const [sortBy, setSortBy] = useState<keyof ScreenedAsset>("sharpe");
  const [sortAsc, setSortAsc] = useState(false);

  const filteredAssets = useMemo(() => {
    return ASSET_UNIVERSE.filter((a) => {
      const matchSearch = a.symbol.toLowerCase().includes(search.toLowerCase()) || a.name.toLowerCase().includes(search.toLowerCase());
      const matchClass = selectedClass === "All" || a.assetClass === selectedClass;
      const matchSharpe = a.sharpe >= minSharpe;
      return matchSearch && matchClass && matchSharpe;
    }).sort((a, b) => {
      const vA = a[sortBy];
      const vB = b[sortBy];
      if (typeof vA === "number" && typeof vB === "number") {
        return sortAsc ? vA - vB : vB - vA;
      }
      return sortAsc ? String(vA).localeCompare(String(vB)) : String(vB).localeCompare(String(vA));
    });
  }, [search, selectedClass, minSharpe, sortBy, sortAsc]);

  const handleSort = (field: keyof ScreenedAsset) => {
    if (sortBy === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">QUANTITATIVE SCREENER</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Filter and rank cross-asset universes by statistical momentum, realized volatility, and risk-adjusted efficiency.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-[#68717C]">UNIVERSE:</span>
          <span className="text-[11px] font-mono text-[#F4F5F7] bg-[#101318] border border-[#20252C] px-2 py-0.5 rounded">
            {filteredAssets.length} of {ASSET_UNIVERSE.length} MATCHED
          </span>
        </div>
      </div>

      {/* Control Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 bg-[#0B0D10] border border-[#20252C] rounded-md p-3 text-xs">
        {/* Search */}
        <div className="flex items-center gap-2 bg-[#101318] border border-[#20252C] rounded px-2.5 py-1.5 focus-within:border-[#7868FF]">
          <Search className="w-3.5 h-3.5 text-[#68717C]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search symbol or name..."
            className="w-full bg-transparent text-xs text-[#F4F5F7] placeholder-[#68717C] focus:outline-none"
          />
        </div>

        {/* Asset Class Filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-[#68717C] text-[11px]">Class:</span>
          <div className="flex gap-1 flex-1">
            {(["All", "Equity", "Crypto", "Commodity"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setSelectedClass(c)}
                className={`px-2 py-1 rounded text-[11px] transition-colors flex-1 ${
                  selectedClass === c ? "bg-[#151920] border border-[#7868FF] text-[#F4F5F7]" : "bg-[#101318] border border-[#20252C] text-[#A8AFB8] hover:text-[#F4F5F7]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Sharpe Filter */}
        <div className="flex items-center gap-2">
          <span className="text-[#68717C] text-[11px] whitespace-nowrap">Min Sharpe:</span>
          <select
            value={minSharpe}
            onChange={(e) => setMinSharpe(Number(e.target.value))}
            className="w-full bg-[#101318] border border-[#20252C] text-[#F4F5F7] rounded px-2 py-1 focus:outline-none"
          >
            <option value={0}>All (&ge; 0.0)</option>
            <option value={1.0}>&ge; 1.0 (Adequate)</option>
            <option value={1.2}>&ge; 1.2 (Good)</option>
            <option value={1.5}>&ge; 1.5 (High Alpha)</option>
          </select>
        </div>

        {/* Reset / Export */}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => {
              setSearch("");
              setSelectedClass("All");
              setMinSharpe(0);
            }}
            className="px-3 py-1 bg-[#101318] hover:bg-[#151920] border border-[#20252C] rounded text-[11px] text-[#A8AFB8] hover:text-[#F4F5F7]"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Screener Results Table */}
      <div className="overflow-x-auto border border-[#20252C] rounded-md bg-[#080A0D]">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-[#20252C] bg-[#0B0D10] text-[#68717C] text-[10px] uppercase tracking-wider">
              <th className="py-2.5 px-3 cursor-pointer hover:text-[#F4F5F7]" onClick={() => handleSort("symbol")}>
                <div className="flex items-center gap-1">
                  <span>ASSET</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-2.5 px-3">CLASS</th>
              <th className="py-2.5 px-3 cursor-pointer hover:text-[#F4F5F7]" onClick={() => handleSort("price")}>
                <div className="flex items-center gap-1">
                  <span>PRICE</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-2.5 px-3 cursor-pointer hover:text-[#F4F5F7]" onClick={() => handleSort("change1D")}>
                <div className="flex items-center gap-1">
                  <span>1D CHG</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-2.5 px-3 cursor-pointer hover:text-[#F4F5F7]" onClick={() => handleSort("vol30D")}>
                <div className="flex items-center gap-1">
                  <span>VOL (30D)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-2.5 px-3 cursor-pointer hover:text-[#F4F5F7]" onClick={() => handleSort("sharpe")}>
                <div className="flex items-center gap-1">
                  <span>SHARPE</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-2.5 px-3 cursor-pointer hover:text-[#F4F5F7]" onClick={() => handleSort("maxDd")}>
                <div className="flex items-center gap-1">
                  <span>MAX DD</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-2.5 px-3">RSI (14)</th>
              <th className="py-2.5 px-3">REGIME</th>
              <th className="py-2.5 px-3 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#20252C] font-mono">
            {filteredAssets.map((row) => (
              <tr key={row.symbol} className="hover:bg-[#101318]/60 transition-colors">
                <td className="py-3 px-3">
                  <div className="font-bold text-[#F4F5F7]">{row.symbol}</div>
                  <div className="text-[10px] text-[#68717C] font-sans">{row.name}</div>
                </td>
                <td className="py-3 px-3 font-sans text-[#A8AFB8]">{row.assetClass}</td>
                <td className="py-3 px-3 text-[#F4F5F7] font-semibold">
                  ${row.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
                <td className={`py-3 px-3 font-semibold ${row.change1D >= 0 ? "text-[#36C98F]" : "text-[#E85D68]"}`}>
                  {row.change1D >= 0 ? `+${row.change1D}%` : `${row.change1D}%`}
                </td>
                <td className="py-3 px-3 text-[#A8AFB8]">{row.vol30D}%</td>
                <td className="py-3 px-3 text-[#F4F5F7] font-bold">{row.sharpe.toFixed(2)}</td>
                <td className="py-3 px-3 text-[#E85D68]">{row.maxDd}%</td>
                <td className="py-3 px-3 text-[#A8AFB8]">{row.rsi}</td>
                <td className="py-3 px-3 font-sans">
                  <span className="px-2 py-0.5 rounded bg-[#101318] border border-[#20252C] text-[#A8AFB8] text-[11px]">
                    {row.regime}
                  </span>
                </td>
                <td className="py-3 px-3 text-right font-sans">
                  <Link
                    href={`/app/markets/asset/${row.symbol}`}
                    className="inline-flex items-center gap-1 text-[#7868FF] hover:text-[#FFFFFF] text-xs font-medium transition-colors"
                  >
                    <span>Analyze</span>
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
