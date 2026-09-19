"use client";

import { useState, useEffect } from "react";
import { DEMO_ASSETS, type AssetRecord } from "./demo-data";

// Seeded pseudorandom generator for deterministic oscillation
function seededDrift(step: number, freq: number, amp: number): number {
  return Math.sin(step * freq) * amp;
}

export interface MarketState {
  assets: Record<string, AssetRecord>;
  lastTick: Date;
  latencyMs: number;
  tickCount: number;
}

let globalTick = 0;
const subscribers = new Set<(state: MarketState) => void>();

let currentMarketState: MarketState = {
  assets: { ...DEMO_ASSETS },
  lastTick: new Date(),
  latencyMs: 42,
  tickCount: 0,
};

// Global interval running every 2.4 seconds
let timer: NodeJS.Timeout | null = null;

function ensureSimulationLoop() {
  if (typeof window === "undefined" || timer) return;

  timer = setInterval(() => {
    globalTick += 1;
    const now = new Date();

    const updatedAssets: Record<string, AssetRecord> = {};

    for (const [sym, asset] of Object.entries(currentMarketState.assets)) {
      // Deterministic smooth drift
      const freq = sym === "BTC" ? 0.25 : sym === "SOL" ? 0.35 : sym === "GOLD" ? 0.15 : 0.28;
      const maxDelta = asset.basePrice * 0.00035; // tiny fractions of a percent
      const delta = seededDrift(globalTick, freq, maxDelta);

      const newPrice = Number((asset.basePrice + delta).toFixed(sym === "BTC" || sym === "GOLD" ? 2 : 2));
      const diff = newPrice - asset.basePrice;
      const pct = Number(((diff / asset.basePrice) * 100).toFixed(2));

      // Append point to sparkline, keep length 7
      const sparkline = [...asset.sparkline.slice(1), newPrice];

      updatedAssets[sym] = {
        ...asset,
        price: newPrice,
        change: Number(diff.toFixed(2)),
        changePercent: Number((asset.changePercent + pct * 0.1).toFixed(2)),
        sparkline,
        lastUpdated: "Just now",
      };
    }

    currentMarketState = {
      assets: updatedAssets,
      lastTick: now,
      latencyMs: 38 + Math.floor(Math.sin(globalTick) * 6),
      tickCount: globalTick,
    };

    subscribers.forEach((cb) => cb(currentMarketState));
  }, 2400);
}

export function useMarketSimulation() {
  const [state, setState] = useState<MarketState>(currentMarketState);

  useEffect(() => {
    ensureSimulationLoop();
    subscribers.add(setState);
    return () => {
      subscribers.delete(setState);
    };
  }, []);

  return state;
}

export function getMarketState(): MarketState {
  return currentMarketState;
}
