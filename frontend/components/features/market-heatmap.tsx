"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { TrendingUp, TrendingDown, ArrowUpRight, Flame, Layers } from "lucide-react";
import { marketHub, type AssetKey, ASSET_PROFILES } from "@/lib/market-data-hub";

export type HeatmapRange = "1D" | "1W" | "1M" | "3M" | "YTD";

interface HeatmapTileData {
  symbol: AssetKey;
  name: string;
  price: number;
  changePercent: number;
  changeAmount: number;
  volume: number;
  relativePerformanceScore: number; // 0 - 100
  assetClass: string;
}

export function MarketHeatmap() {
  const router = useRouter();
  const [range, setRange] = useState<HeatmapRange>("1M");
  const [hoveredTile, setHoveredTile] = useState<HeatmapTileData | null>(null);

  const symbols: AssetKey[] = ["BTC", "SOL", "GOLD", "NVDA"];

  // Compute actual percentage change and relative metrics from historical bars for selected range
  const tilesData: HeatmapTileData[] = useMemo(() => {
    return symbols.map((sym) => {
      const bars = marketHub.getBars(sym, range === "YTD" ? "1Y" : range);
      const metrics = marketHub.getMetrics(sym);
      const currentPrice = metrics ? metrics.currentPrice : ASSET_PROFILES[sym].basePrice;

      if (bars.length < 2) {
        return {
          symbol: sym,
          name: ASSET_PROFILES[sym].name,
          price: currentPrice,
          changePercent: 0,
          changeAmount: 0,
          volume: 10000,
          relativePerformanceScore: 50,
          assetClass: ASSET_PROFILES[sym].assetClass,
        };
      }

      const startBar = bars[0];
      const startPrice = startBar.close || 1;
      const changeAmount = currentPrice - startPrice;
      const changePercent = Number((((currentPrice - startPrice) / startPrice) * 100).toFixed(2));
      const totalVolume = bars.reduce((acc, b) => acc + b.volume, 0);

      // Score relative to asset universe
      const relScore = Math.max(10, Math.min(95, Math.round(50 + changePercent * 1.5)));

      return {
        symbol: sym,
        name: ASSET_PROFILES[sym].name,
        price: currentPrice,
        changePercent,
        changeAmount: Number(changeAmount.toFixed(ASSET_PROFILES[sym].decimals)),
        volume: totalVolume,
        relativePerformanceScore: relScore,
        assetClass: ASSET_PROFILES[sym].assetClass,
      };
    });
  }, [range, marketHub.getPrice("BTC")]);

  return (
    <div className="clay-card p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4 font-mono text-xs">
      {/* Top Header & Range Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-[var(--accent)]" />
          <div>
            <h3 className="font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider">
              MULTI-ASSET MARKET HEATMAP
            </h3>
            <p className="text-[10px] text-[var(--text-muted)] font-sans">
              Calculated dynamically from live bar returns. Click tile to open Asset Deep Dive.
            </p>
          </div>
        </div>

        {/* Range Buttons (1D, 1W, 1M, 3M, YTD) */}
        <div className="flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs">
          {(["1D", "1W", "1M", "3M", "YTD"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-2.5 py-0.5 rounded-lg transition-colors ${
                range === r
                  ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Heatmap Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {tilesData.map((tile) => {
          const isUp = tile.changePercent >= 0;
          const isSelected = hoveredTile?.symbol === tile.symbol;

          // Color gradient intensity based on actual return
          let tileBg = "bg-[var(--bg-elevated)]";
          let badgeCol = "text-[var(--positive)] bg-[var(--positive-bg)] border-[var(--positive-border)]";
          if (tile.changePercent > 5) {
            tileBg = "bg-[var(--positive)]/15 border-[var(--positive)]/30";
          } else if (tile.changePercent > 0) {
            tileBg = "bg-[var(--positive)]/10 border-[var(--positive)]/20";
          } else if (tile.changePercent < -5) {
            tileBg = "bg-[var(--negative)]/15 border-[var(--negative)]/30";
            badgeCol = "text-[var(--negative)] bg-[var(--negative-bg)] border-[var(--negative-border)]";
          } else if (tile.changePercent < 0) {
            tileBg = "bg-[var(--negative)]/10 border-[var(--negative)]/20";
            badgeCol = "text-[var(--negative)] bg-[var(--negative-bg)] border-[var(--negative-border)]";
          }

          return (
            <div
              key={tile.symbol}
              onClick={() => router.push(`/app/assets/${tile.symbol.toLowerCase()}`)}
              onMouseEnter={() => setHoveredTile(tile)}
              onMouseLeave={() => setHoveredTile(null)}
              className={`p-4 rounded-2xl cursor-pointer border transition-all select-none relative overflow-hidden clay-card hover:-translate-y-1 hover:shadow-xl ${tileBg}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-[var(--text-primary)]">{tile.symbol}</span>
                  <div className="text-[10px] text-[var(--text-muted)] font-sans">{tile.name}</div>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border flex items-center gap-0.5 ${badgeCol}`}>
                  {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {isUp ? `+${tile.changePercent}%` : `${tile.changePercent}%`}
                </span>
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-lg font-bold text-[var(--text-primary)]">
                  ${tile.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
                <span className="text-[10px] text-[var(--text-muted)]">
                  {range} Window
                </span>
              </div>

              {/* Relative performance bar */}
              <div className="mt-2.5 pt-2 border-t border-[var(--border)] space-y-1">
                <div className="flex justify-between text-[9px] text-[var(--text-muted)]">
                  <span>Relative Strength</span>
                  <span>{tile.relativePerformanceScore} / 100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[var(--bg-recessed)] overflow-hidden">
                  <div
                    style={{ width: `${tile.relativePerformanceScore}%` }}
                    className={`h-full rounded-full ${isUp ? "bg-[var(--positive)]" : "bg-[var(--negative)]"}`}
                  />
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                <span>Vol: ${(tile.volume / 1000000).toFixed(1)}M</span>
                <span className="text-[var(--accent)] hover:underline flex items-center gap-0.5">
                  Deep Dive <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
