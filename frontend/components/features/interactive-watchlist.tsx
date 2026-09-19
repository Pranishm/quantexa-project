"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Star, TrendingUp, TrendingDown, ArrowUpRight, Bell, Plus, Trash2 } from "lucide-react";
import { marketHub, type AssetKey, ASSET_PROFILES } from "@/lib/market-data-hub";
import { useUserTerminalStore } from "@/lib/user-store";

export function InteractiveWatchlist() {
  const router = useRouter();
  const { watchlist, removeFromWatchlist, addToWatchlist, isInWatchlist, createAlert } = useUserTerminalStore();
  const [filterQuery, setFilterQuery] = useState("");
  const [pulsingSymbols, setPulsingSymbols] = useState<Record<string, "UP" | "DOWN">>({});
  const [alertModalAsset, setAlertModalAsset] = useState<AssetKey | null>(null);
  const [alertPriceInput, setAlertPriceInput] = useState("");

  const allAssets: AssetKey[] = ["BTC", "SOL", "GOLD", "NVDA"];

  // Detect live tick price changes and trigger subtle pulse (Rule 108 & 109)
  useEffect(() => {
    return marketHub.subscribe(() => {
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
      }, 700);

      return () => clearTimeout(timer);
    });
  }, []);

  const displayedSymbols = allAssets.filter((sym) => {
    const name = ASSET_PROFILES[sym].name.toLowerCase();
    const query = filterQuery.toLowerCase();
    return sym.toLowerCase().includes(query) || name.includes(query);
  });

  const handleCreateAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alertModalAsset || !alertPriceInput) return;
    const target = parseFloat(alertPriceInput);
    const curr = marketHub.getPrice(alertModalAsset);
    const cond = target >= curr ? "ABOVE" : "BELOW";

    createAlert(alertModalAsset, cond, target, `User alert via watchlist`);
    setAlertModalAsset(null);
    setAlertPriceInput("");
  };

  return (
    <div className="clay-card p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-3 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-[var(--accent)] fill-current" />
          <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider">
            WATCHLIST &amp; REALTIME QUOTES
          </span>
        </div>
        <span className="text-[10px] text-[var(--text-muted)] font-sans">
          Live tick interpolator · Click row for deep dive
        </span>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center justify-between gap-2">
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder="Filter assets (BTC, SOL, GOLD, NVDA)..."
          className="w-full px-3 py-1.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
        />
      </div>

      {/* Watchlist Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[var(--border)] text-[10px] text-[var(--text-muted)] uppercase font-sans">
              <th className="py-2">Asset</th>
              <th className="py-2">Price</th>
              <th className="py-2">24h Change</th>
              <th className="py-2">Volume</th>
              <th className="py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {displayedSymbols.map((sym) => {
              const profile = ASSET_PROFILES[sym];
              const metrics = marketHub.getMetrics(sym);
              const price = metrics ? metrics.currentPrice : profile.basePrice;
              const changePercent = metrics ? metrics.changePercent : 1.25;
              const isUp = changePercent >= 0;
              const pulse = pulsingSymbols[sym];
              const isStarred = isInWatchlist(sym);

              return (
                <tr
                  key={sym}
                  className={`hover:bg-[var(--bg-hover)] transition-colors group ${
                    pulse === "UP" ? "bg-[var(--positive)]/10" : pulse === "DOWN" ? "bg-[var(--negative)]/10" : ""
                  }`}
                >
                  <td
                    onClick={() => router.push(`/app/assets/${sym.toLowerCase()}`)}
                    className="py-2.5 cursor-pointer flex items-center gap-2 font-bold text-[var(--text-primary)]"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: profile.color }}
                    />
                    <span>{sym}</span>
                    <span className="text-[10px] text-[var(--text-muted)] font-normal font-sans hidden sm:inline">
                      {profile.name}
                    </span>
                  </td>

                  <td
                    onClick={() => router.push(`/app/assets/${sym.toLowerCase()}`)}
                    className="py-2.5 cursor-pointer font-bold transition-transform"
                  >
                    <span className={pulse === "UP" ? "text-[var(--positive)]" : pulse === "DOWN" ? "text-[var(--negative)]" : "text-[var(--text-primary)]"}>
                      ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </td>

                  <td
                    onClick={() => router.push(`/app/assets/${sym.toLowerCase()}`)}
                    className="py-2.5 cursor-pointer"
                  >
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold inline-flex items-center gap-0.5 ${
                        isUp ? "text-[var(--positive)] bg-[var(--positive-bg)]" : "text-[var(--negative)] bg-[var(--negative-bg)]"
                      }`}
                    >
                      {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {isUp ? `+${changePercent}%` : `${changePercent}%`}
                    </span>
                  </td>

                  <td
                    onClick={() => router.push(`/app/assets/${sym.toLowerCase()}`)}
                    className="py-2.5 cursor-pointer text-[10px] text-[var(--text-muted)]"
                  >
                    ${((metrics ? metrics.volume24h : 120000) / 1000).toFixed(0)}K
                  </td>

                  <td className="py-2.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setAlertModalAsset(sym);
                          setAlertPriceInput(price.toString());
                        }}
                        title="Set Price Alert"
                        className="p-1 rounded-lg clay-button text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        <Bell className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (isStarred) removeFromWatchlist(sym);
                          else addToWatchlist(sym);
                        }}
                        title={isStarred ? "Remove from Watchlist" : "Add to Watchlist"}
                        className={`p-1 rounded-lg clay-button transition-colors ${
                          isStarred ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <Star className={`w-3.5 h-3.5 ${isStarred ? "fill-current" : ""}`} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Quick Alert Modal */}
      {alertModalAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="clay-card w-full max-w-sm rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl space-y-4 font-mono text-xs">
            <h3 className="font-bold text-[var(--text-primary)] text-sm">
              Create Price Alert: {alertModalAsset}/USD
            </h3>
            <p className="text-[11px] text-[var(--text-muted)] font-sans">
              Triggers a persistent system notification when the deterministic market feed crosses your target.
            </p>

            <form onSubmit={handleCreateAlertSubmit} className="space-y-3">
              <div>
                <label className="block text-[10px] text-[var(--text-muted)] uppercase mb-1">Target Price ($)</label>
                <input
                  type="number"
                  step="any"
                  required
                  value={alertPriceInput}
                  onChange={(e) => setAlertPriceInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] font-bold focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setAlertModalAsset(null)}
                  className="px-3 py-1.5 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-[var(--accent)] text-white font-bold"
                >
                  Set Alert
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
