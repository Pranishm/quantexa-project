"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  Plus, 
  Trash2, 
  ArrowRight, 
  TrendingUp, 
  TrendingDown, 
  Sparkles, 
  Folder, 
  Search, 
  Bell, 
  Star, 
  ShieldCheck,
  BarChart3,
  Layers
} from "lucide-react";
import { marketHub, type AssetKey, ASSET_PROFILES } from "@/lib/market-data-hub";
import { useUserTerminalStore } from "@/lib/user-store";

interface WatchlistItem {
  symbol: AssetKey;
  name: string;
  volatility: string;
  sharpe: string;
  beta: string;
  category: string;
}

const STATIC_METRICS: Record<AssetKey, { name: string; volatility: string; sharpe: string; beta: string; category: string }> = {
  BTC: { name: "Bitcoin (Store of Value)", volatility: "42.1%", sharpe: "1.42", beta: "1.82", category: "Digital Asset" },
  SOL: { name: "Solana (High-Throughput L1)", volatility: "68.3%", sharpe: "0.87", beta: "2.10", category: "Smart Contracts" },
  GOLD: { name: "Gold Spot (Physical Reserve)", volatility: "18.4%", sharpe: "0.92", beta: "0.14", category: "Hard Commodity" },
  NVDA: { name: "NVIDIA Corp (AI Compute Leader)", volatility: "51.8%", sharpe: "1.18", beta: "1.74", category: "Semiconductors" },
  "1INCH": { name: "1inch Network (DEX Aggregator)", volatility: "64.2%", sharpe: "1.15", beta: "1.85", category: "DeFi Infrastructure" },
  ETH: { name: "Ethereum (Smart Contract Layer)", volatility: "48.6%", sharpe: "1.24", beta: "1.22", category: "Digital Asset" },
};

const WATCHLIST_GROUPS: Record<string, AssetKey[]> = {
  "Primary Alpha Core": ["BTC", "SOL", "GOLD", "NVDA", "1INCH", "ETH"],
  "Digital Assets": ["BTC", "SOL", "1INCH", "ETH"],
  "Macro & Reserves": ["GOLD", "BTC"],
  "High Volatility": ["SOL", "NVDA", "1INCH"],
  "Equities & Hardware": ["NVDA"],
};

export default function WatchlistsPage() {
  const [activeTab, setActiveTab] = useState<string>("Primary Alpha Core");
  const [lists, setLists] = useState<Record<string, AssetKey[]>>(WATCHLIST_GROUPS);
  const [filterQuery, setFilterQuery] = useState("");
  const [liveTickCounter, setLiveTickCounter] = useState(0);
  const [pulsingSymbols, setPulsingSymbols] = useState<Record<string, "UP" | "DOWN">>({});

  const { isInWatchlist, addToWatchlist, removeFromWatchlist, createAlert } = useUserTerminalStore();

  // Quick alert state
  const [alertAsset, setAlertAsset] = useState<AssetKey | null>(null);
  const [alertPrice, setAlertPrice] = useState("");

  // Subscribe to live deterministic market data feed
  useEffect(() => {
    const unsub = marketHub.subscribe(() => {
      setLiveTickCounter((c) => c + 1);
      const allMetrics = marketHub.getAllMetrics();
      const newPulses: Record<string, "UP" | "DOWN"> = {};

      for (const [sym, m] of Object.entries(allMetrics)) {
        if (m.tickDirection !== "FLAT") {
          newPulses[sym] = m.tickDirection;
        }
      }

      setPulsingSymbols(newPulses);
      const timer = setTimeout(() => {
        setPulsingSymbols({});
      }, 600);

      return () => clearTimeout(timer);
    });
    return unsub;
  }, []);

  const currentSymbols = lists[activeTab] || WATCHLIST_GROUPS["Primary Alpha Core"];

  const filteredSymbols = useMemo(() => {
    return currentSymbols.filter((sym) => {
      const q = filterQuery.toLowerCase();
      const name = STATIC_METRICS[sym]?.name.toLowerCase() || "";
      return sym.toLowerCase().includes(q) || name.includes(q);
    });
  }, [currentSymbols, filterQuery, liveTickCounter]);

  const handleCreateAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alertAsset || !alertPrice) return;
    const target = parseFloat(alertPrice);
    const curr = marketHub.getPrice(alertAsset);
    const cond = target >= curr ? "ABOVE" : "BELOW";

    createAlert(alertAsset, cond, target, `Watchlist custom threshold alert`);
    setAlertAsset(null);
    setAlertPrice("");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono tracking-wider text-[var(--accent)] font-semibold uppercase px-2.5 py-0.5 rounded-full clay-recessed border border-[var(--accent)]/20">
              PORTFOLIO SURVEILLANCE
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
              LIVE TICK INTERPOLATOR ACTIVE
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            INSTITUTIONAL RESEARCH WATCHLISTS
          </h1>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Realtime surveillance of cross-asset baskets monitored for factor breakdown, volatility expansion, and Sharpe divergence.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/app/markets/cross-asset"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[var(--border)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] clay-button"
          >
            <BarChart3 className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Market X-Ray</span>
          </Link>
        </div>
      </div>

      {/* Top 4 Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
          <span className="text-[10px] text-[var(--text-muted)] uppercase font-mono block">Tracked Symbols</span>
          <div className="text-xl font-extrabold text-[var(--text-primary)] font-mono mt-0.5">
            {currentSymbols.length} Assets
          </div>
          <span className="text-[10px] text-[var(--accent)] font-medium mt-1 block">
            {activeTab}
          </span>
        </div>

        <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
          <span className="text-[10px] text-[var(--text-muted)] uppercase font-mono block">Top Alpha Leader</span>
          <div className="text-xl font-extrabold text-[#00E599] font-mono mt-0.5">
            BTC (Sharpe 1.42)
          </div>
          <span className="text-[10px] text-[var(--text-muted)] mt-1 block">
            Annualized Vol: 42.1%
          </span>
        </div>

        <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
          <span className="text-[10px] text-[var(--text-muted)] uppercase font-mono block">Defensive Anchor</span>
          <div className="text-xl font-extrabold text-[var(--text-primary)] font-mono mt-0.5">
            GOLD (Beta 0.14)
          </div>
          <span className="text-[10px] text-[var(--text-muted)] mt-1 block">
            Lowest Drawdown: -5.4%
          </span>
        </div>

        <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
          <span className="text-[10px] text-[var(--text-muted)] uppercase font-mono block">Surveillance Engine</span>
          <div className="text-xl font-extrabold text-[var(--accent)] font-mono mt-0.5">
            100% Deterministic
          </div>
          <span className="text-[10px] text-[var(--text-muted)] mt-1 block">
            Zero synthetic drift
          </span>
        </div>
      </div>

      {/* Main Watchlist Container */}
      <div className="clay-card rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 space-y-4 shadow-sm">
        {/* Top Controls: Tabs + Search Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
          {/* Watchlist Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {Object.keys(lists).map((listName) => {
              const count = lists[listName].length;
              const isActive = activeTab === listName;
              return (
                <button
                  key={listName}
                  onClick={() => setActiveTab(listName)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                      : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Folder className="w-3.5 h-3.5 opacity-70" />
                  <span>{listName}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-[var(--bg-recessed)] text-[var(--text-muted)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search assets (e.g. BTC, Solana)..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
        </div>

        {/* Watchlist Table */}
        <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--bg-recessed)]/40">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] text-[10px] uppercase tracking-wider font-sans">
                <th className="py-3 px-4">ASSET</th>
                <th className="py-3 px-4">PRICE</th>
                <th className="py-3 px-4">24H CHANGE</th>
                <th className="py-3 px-4">VOLATILITY (30D)</th>
                <th className="py-3 px-4">SHARPE RATIO</th>
                <th className="py-3 px-4">BETA (VS SPY)</th>
                <th className="py-3 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] font-mono">
              {filteredSymbols.map((sym) => {
                const meta = STATIC_METRICS[sym];
                const profile = ASSET_PROFILES[sym];
                const liveMetrics = marketHub.getMetrics(sym);
                const price = liveMetrics ? liveMetrics.currentPrice : profile.basePrice;
                const change = liveMetrics ? liveMetrics.changePercent : 1.2;
                const isPos = change >= 0;
                const pulse = pulsingSymbols[sym];
                const isStarred = isInWatchlist(sym);

                const dest =
                  sym === "BTC"
                    ? "/app/assets/bitcoin"
                    : sym === "SOL"
                    ? "/app/assets/solana"
                    : sym === "GOLD"
                    ? "/app/assets/gold"
                    : "/app/assets/nvidia";

                return (
                  <tr
                    key={sym}
                    className={`hover:bg-[var(--bg-hover)] transition-colors ${
                      pulse === "UP"
                        ? "bg-[var(--positive)]/10"
                        : pulse === "DOWN"
                        ? "bg-[var(--negative)]/10"
                        : ""
                    }`}
                  >
                    {/* Asset Name */}
                    <td className="py-3 px-4">
                      <Link href={dest} className="flex items-center gap-2.5 group">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: profile.color }}
                        />
                        <div>
                          <div className="font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                            {sym}
                          </div>
                          <div className="text-[10px] text-[var(--text-muted)] font-sans">
                            {meta.name}
                          </div>
                        </div>
                      </Link>
                    </td>

                    {/* Price */}
                    <td className="py-3 px-4 font-bold text-sm text-[var(--text-primary)]">
                      ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>

                    {/* 24h Change */}
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center gap-1 font-bold text-[11px] px-2 py-0.5 rounded-md ${
                          isPos ? "bg-emerald-500/15 text-[#00E599]" : "bg-rose-500/15 text-[#FF3B69]"
                        }`}
                      >
                        {isPos ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {isPos ? `+${change}%` : `${change}%`}
                      </span>
                    </td>

                    {/* Volatility */}
                    <td className="py-3 px-4 text-[var(--text-secondary)]">
                      {meta.volatility}
                    </td>

                    {/* Sharpe */}
                    <td className="py-3 px-4">
                      <span
                        className={`font-bold px-2 py-0.5 rounded-md text-[11px] ${
                          parseFloat(meta.sharpe) >= 1.0
                            ? "text-[#00E599] bg-emerald-500/10"
                            : "text-[#3B82F6] bg-blue-500/10"
                        }`}
                      >
                        {meta.sharpe}
                      </span>
                    </td>

                    {/* Beta */}
                    <td className="py-3 px-4 text-[var(--text-muted)]">
                      {meta.beta}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right font-sans">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setAlertAsset(sym);
                            setAlertPrice(price.toString());
                          }}
                          title="Set Price Alert"
                          className="p-1.5 rounded-lg clay-button text-[var(--text-muted)] hover:text-[var(--accent)]"
                        >
                          <Bell className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (isStarred) removeFromWatchlist(sym);
                            else addToWatchlist(sym);
                          }}
                          title={isStarred ? "Remove from Favorites" : "Add to Favorites"}
                          className={`p-1.5 rounded-lg clay-button transition-colors ${
                            isStarred ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                          }`}
                        >
                          <Star className={`w-3.5 h-3.5 ${isStarred ? "fill-current" : ""}`} />
                        </button>

                        <Link
                          href={dest}
                          className="inline-flex items-center gap-1 text-[var(--accent)] hover:text-white hover:bg-[var(--accent)] text-xs font-semibold px-2.5 py-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] transition-all clay-button ml-1"
                        >
                          <span>Analyze</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filteredSymbols.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-xs text-[var(--text-muted)]">
                    No assets matched your filter query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Alert Modal */}
      {alertAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="clay-card w-full max-w-sm rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl space-y-4 font-mono text-xs">
            <h3 className="font-bold text-[var(--text-primary)] text-sm flex items-center gap-2">
              <Bell className="w-4 h-4 text-[var(--accent)]" />
              <span>Create Alert: {alertAsset}/USD</span>
            </h3>
            <p className="text-[11px] text-[var(--text-muted)] font-sans">
              Triggers a persistent system notification when the deterministic market feed crosses your target price.
            </p>

            <form onSubmit={handleCreateAlert} className="space-y-3">
              <div>
                <label className="block text-[10px] text-[var(--text-muted)] uppercase mb-1 font-mono">
                  Target Price ($)
                </label>
                <input
                  type="number"
                  step="any"
                  required
                  value={alertPrice}
                  onChange={(e) => setAlertPrice(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] font-bold focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setAlertAsset(null)}
                  className="px-3 py-1.5 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] clay-button"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-[var(--accent)] text-white font-bold clay-button"
                >
                  Confirm Alert
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
