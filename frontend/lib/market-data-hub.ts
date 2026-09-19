"use client";

import { useState, useEffect } from "react";
import { ALL_OHLCV, barsByTimeframe, type OHLCVBar } from "./demo-data/ohlcv";

export type AssetKey = "BTC" | "SOL" | "GOLD" | "NVDA" | "1INCH" | "ETH";

export interface AssetProfile {
  symbol: AssetKey;
  ticker: string;
  name: string;
  assetClass: "crypto" | "commodity" | "equity";
  decimals: number;
  currency: string;
  basePrice: number;
  description: string;
  color: string;
}

export const ASSET_PROFILES: Record<AssetKey, AssetProfile> = {
  BTC: {
    symbol: "BTC",
    ticker: "BTC/USD",
    name: "Bitcoin",
    assetClass: "crypto",
    decimals: 2,
    currency: "$",
    basePrice: 104284.5,
    description: "Decentralized digital monetary store of value and macro liquidity benchmark.",
    color: "#F7931A",
  },
  SOL: {
    symbol: "SOL",
    ticker: "SOL/USD",
    name: "Solana",
    assetClass: "crypto",
    decimals: 2,
    currency: "$",
    basePrice: 238.6,
    description: "High-throughput layer-1 consensus blockchain for decentralized finance.",
    color: "#14F195",
  },
  GOLD: {
    symbol: "GOLD",
    ticker: "XAU/USD",
    name: "Gold Spot",
    assetClass: "commodity",
    decimals: 2,
    currency: "$",
    basePrice: 2672.4,
    description: "Physical sovereign monetary reserve and systemic inflation hedge.",
    color: "#E4B64D",
  },
  NVDA: {
    symbol: "NVDA",
    ticker: "NVDA",
    name: "NVIDIA Corp.",
    assetClass: "equity",
    decimals: 2,
    currency: "$",
    basePrice: 178.25,
    description: "Semiconductor manufacturer powering generative AI and accelerated computing.",
    color: "#76B900",
  },
  "1INCH": {
    symbol: "1INCH",
    ticker: "1INCH/USD",
    name: "1inch Network",
    assetClass: "crypto",
    decimals: 4,
    currency: "$",
    basePrice: 0.0971,
    description: "Decentralized DEX aggregator and algorithmic liquidity routing protocol.",
    color: "#2B82F6",
  },
  ETH: {
    symbol: "ETH",
    ticker: "ETH/USD",
    name: "Ethereum",
    assetClass: "crypto",
    decimals: 2,
    currency: "$",
    basePrice: 3845.5,
    description: "Global decentralized smart contract compute layer and ecosystem foundation.",
    color: "#627EEA",
  },
};

export interface MarketMetrics {
  currentPrice: number;
  previousClose: number;
  changeAmount: number;
  changePercent: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  tickDirection: "UP" | "DOWN" | "FLAT";
  lastTickTime: string;
}

export interface NormalizedDataPoint {
  time: string;
  price: number;
  normalized: number; // Base 100
  returnPct: number;
  drawdownPct: number;
  volume: number;
}

// ---------------------------------------------------------------------------
// Seeded deterministic tick engine
// ---------------------------------------------------------------------------
let tickSeed = 42;
function pseudoRandom() {
  tickSeed = (tickSeed * 9301 + 49297) % 233280;
  return tickSeed / 233280;
}

class MarketDataHub {
  private static instance: MarketDataHub;
  private currentPrices: Record<AssetKey, number>;
  private activeCandles: Record<AssetKey, OHLCVBar>;
  private metrics: Record<AssetKey, MarketMetrics>;
  private listeners: Set<() => void> = new Set();
  private timer: NodeJS.Timeout | null = null;
  private connectionStatus: "DEMO_STREAM" | "LIVE" | "RECONNECTING" | "OFFLINE" = "DEMO_STREAM";
  private latencyMs = 34;

  private constructor() {
    this.currentPrices = {
      BTC: ASSET_PROFILES.BTC.basePrice,
      SOL: ASSET_PROFILES.SOL.basePrice,
      GOLD: ASSET_PROFILES.GOLD.basePrice,
      NVDA: ASSET_PROFILES.NVDA.basePrice,
      "1INCH": ASSET_PROFILES["1INCH"].basePrice,
      ETH: ASSET_PROFILES.ETH.basePrice,
    };

    const nowStr = new Date().toISOString().slice(0, 10);
    this.activeCandles = {
      BTC: { time: nowStr, open: 103850, high: 104520, low: 103400, close: 104284.5, volume: 84500 },
      SOL: { time: nowStr, open: 234.2, high: 241.5, low: 232.8, close: 238.6, volume: 380200 },
      GOLD: { time: nowStr, open: 2664.1, high: 2678.5, low: 2661.0, close: 2672.4, volume: 14200 },
      NVDA: { time: nowStr, open: 176.4, high: 180.2, low: 175.8, close: 178.25, volume: 1950000 },
      "1INCH": { time: nowStr, open: 0.0905, high: 0.0975, low: 0.0904, close: 0.0971, volume: 24349000 },
      ETH: { time: nowStr, open: 3810.0, high: 3865.0, low: 3795.0, close: 3845.5, volume: 450000 },
    };

    this.metrics = {} as Record<AssetKey, MarketMetrics>;
    for (const key of Object.keys(ASSET_PROFILES) as AssetKey[]) {
      this.recalculateMetrics(key, "FLAT");
    }

    this.startStreaming();
  }

  public static getInstance(): MarketDataHub {
    if (!MarketDataHub.instance) {
      MarketDataHub.instance = new MarketDataHub();
    }
    return MarketDataHub.instance;
  }

  private recalculateMetrics(asset: AssetKey, direction: "UP" | "DOWN" | "FLAT") {
    const bars = ALL_OHLCV[asset];
    const prevBar = bars && bars.length > 1 ? bars[bars.length - 2] : null;
    const prevClose = prevBar ? prevBar.close : ASSET_PROFILES[asset].basePrice * 0.985;
    const current = this.currentPrices[asset];
    const changeAmount = current - prevClose;
    const changePercent = (changeAmount / prevClose) * 100;
    const candle = this.activeCandles[asset];

    this.metrics[asset] = {
      currentPrice: current,
      previousClose: prevClose,
      changeAmount: Number(changeAmount.toFixed(ASSET_PROFILES[asset].decimals)),
      changePercent: Number(changePercent.toFixed(2)),
      high24h: candle ? Math.max(candle.high, current) : current,
      low24h: candle ? Math.min(candle.low, current) : current,
      volume24h: candle ? candle.volume : 0,
      tickDirection: direction,
      lastTickTime: new Date().toLocaleTimeString(),
    };
  }

  public startStreaming() {
    if (this.timer || typeof window === "undefined") return;

    this.timer = setInterval(() => {
      // Pick 1-2 assets to tick deterministically
      const assets: AssetKey[] = ["BTC", "SOL", "GOLD", "NVDA"];
      const targetAsset = assets[Math.floor(pseudoRandom() * assets.length)];
      
      const assetProfile = ASSET_PROFILES[targetAsset];
      const maxDeltaRatio = targetAsset === "BTC" ? 0.0003 : targetAsset === "SOL" ? 0.0005 : targetAsset === "GOLD" ? 0.00015 : 0.0004;
      const rawDelta = (pseudoRandom() - 0.485) * (assetProfile.basePrice * maxDeltaRatio);
      const delta = Number(rawDelta.toFixed(assetProfile.decimals));

      const oldPrice = this.currentPrices[targetAsset];
      let newPrice = Number((oldPrice + delta).toFixed(assetProfile.decimals));
      if (newPrice <= 0) newPrice = oldPrice;

      const direction: "UP" | "DOWN" | "FLAT" = delta > 0 ? "UP" : delta < 0 ? "DOWN" : "FLAT";
      this.currentPrices[targetAsset] = newPrice;

      // Update active candle
      const candle = this.activeCandles[targetAsset];
      if (candle) {
        candle.close = newPrice;
        if (newPrice > candle.high) candle.high = newPrice;
        if (newPrice < candle.low) candle.low = newPrice;
        candle.volume += Math.floor(pseudoRandom() * 15 + 1);
      }

      this.recalculateMetrics(targetAsset, direction);
      this.latencyMs = 28 + Math.floor(pseudoRandom() * 12);

      // Notify subscribers
      this.notify();
    }, 1800);
  }

  public stopStreaming() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  // API Accessors
  public getPrice(asset: AssetKey): number {
    return this.currentPrices[asset];
  }

  public getMetrics(asset: AssetKey): MarketMetrics {
    return this.metrics[asset];
  }

  public getAllMetrics(): Record<AssetKey, MarketMetrics> {
    return { ...this.metrics };
  }

  public getActiveCandle(asset: AssetKey): OHLCVBar {
    return { ...this.activeCandles[asset] };
  }

  public getConnectionStatus() {
    return {
      status: this.connectionStatus,
      label: "● DEMO STREAM",
      latencyMs: this.latencyMs,
      provider: "Quantora Simulated Feed (Deterministic Tick Engine)",
      lastHeartbeat: new Date().toISOString(),
    };
  }

  /**
   * Retrieves historical OHLCV bars for an asset, filtered by timeframe or date range,
   * merged seamlessly with the active live candle.
   */
  public getBars(asset: AssetKey, timeframe: string = "1Y", startDate?: string, endDate?: string): OHLCVBar[] {
    const rawBars = ALL_OHLCV[asset] || [];
    let bars = barsByTimeframe(rawBars, timeframe);

    if (startDate) {
      bars = bars.filter((b) => b.time >= startDate);
    }
    if (endDate) {
      bars = bars.filter((b) => b.time <= endDate);
    }

    if (bars.length === 0) return rawBars;

    // Attach active candle as the latest bar
    const lastBar = bars[bars.length - 1];
    const liveCandle = this.activeCandles[asset];
    if (liveCandle && lastBar.time !== liveCandle.time) {
      return [...bars, liveCandle];
    } else if (liveCandle && lastBar.time === liveCandle.time) {
      const updated = [...bars];
      updated[updated.length - 1] = { ...liveCandle };
      return updated;
    }

    return bars;
  }

  /**
   * Calculate normalized performance (Base 100), returns, and drawdown series.
   */
  public getNormalizedPerformance(asset: AssetKey, timeframe: string = "1Y"): NormalizedDataPoint[] {
    const bars = this.getBars(asset, timeframe);
    if (bars.length === 0) return [];

    const baseClose = bars[0].close || 1;
    let peak = baseClose;

    return bars.map((b, i) => {
      const prevClose = i > 0 ? bars[i - 1].close : b.close;
      const returnPct = ((b.close - prevClose) / prevClose) * 100;
      const normalized = (b.close / baseClose) * 100;
      if (b.close > peak) peak = b.close;
      const drawdownPct = ((b.close - peak) / peak) * 100;

      return {
        time: b.time,
        price: b.close,
        normalized: Number(normalized.toFixed(2)),
        returnPct: Number(returnPct.toFixed(2)),
        drawdownPct: Number(drawdownPct.toFixed(2)),
        volume: b.volume,
      };
    });
  }

  /**
   * Compare multiple assets with normalized base-100 series over identical timestamps.
   */
  public getMultiAssetComparison(assets: AssetKey[], timeframe: string = "1Y") {
    const result: Record<AssetKey, NormalizedDataPoint[]> = {} as any;
    for (const a of assets) {
      result[a] = this.getNormalizedPerformance(a, timeframe);
    }
    return result;
  }
}

export const marketHub = MarketDataHub.getInstance();

// React hook for reactive UI updates
export function useMarketData(asset?: AssetKey) {
  const [_, setTick] = useState(0);

  useEffect(() => {
    return marketHub.subscribe(() => {
      setTick((t) => t + 1);
    });
  }, []);

  return {
    metrics: asset ? marketHub.getMetrics(asset) : marketHub.getAllMetrics(),
    price: asset ? marketHub.getPrice(asset) : undefined,
    activeCandle: asset ? marketHub.getActiveCandle(asset) : undefined,
    connection: marketHub.getConnectionStatus(),
    getBars: (a: AssetKey, tf?: string, start?: string, end?: string) => marketHub.getBars(a, tf, start, end),
    getNormalizedPerformance: (a: AssetKey, tf?: string) => marketHub.getNormalizedPerformance(a, tf),
    getMultiAssetComparison: (assets: AssetKey[], tf?: string) => marketHub.getMultiAssetComparison(assets, tf),
  };
}
