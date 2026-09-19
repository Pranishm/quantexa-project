"use client";

import { marketHub, type AssetKey } from "./market-data-hub";

export type OrderSide = "BUY" | "SELL";
export type OrderType = "MARKET" | "LIMIT" | "STOP";
export type OrderStatus = "PENDING" | "FILLED" | "CANCELLED" | "REJECTED";

export interface PaperOrder {
  id: string;
  symbol: AssetKey;
  side: OrderSide;
  type: OrderType;
  quantity: number;
  requestedPrice: number;
  filledPrice?: number;
  status: OrderStatus;
  createdAt: string;
  filledAt?: string;
  fee: number;
  slippage: number;
  notional: number;
}

export interface PaperPosition {
  symbol: AssetKey;
  side: "LONG" | "SHORT";
  quantity: number;
  averageEntryPrice: number;
  currentPrice: number;
  notional: number;
  unrealizedPnl: number;
  unrealizedPnlPct: number;
  realizedPnl: number;
}

export interface PaperPortfolio {
  initialCapital: number;
  cash: number;
  positions: Record<AssetKey, PaperPosition>;
  orders: PaperOrder[];
  totalRealizedPnl: number;
  totalFeesPaid: number;
  portfolioValue: number;
  lastUpdated: string;
}

const STORAGE_KEY = "quantora-paper-trading-state";

const DEFAULT_PORTFOLIO: PaperPortfolio = {
  initialCapital: 100000,
  cash: 100000,
  positions: {
    BTC: {
      symbol: "BTC",
      side: "LONG",
      quantity: 0.25,
      averageEntryPrice: 98200.0,
      currentPrice: 104284.5,
      notional: 26071.12,
      unrealizedPnl: 1521.12,
      unrealizedPnlPct: 6.19,
      realizedPnl: 450.0,
    },
    SOL: {
      symbol: "SOL",
      side: "LONG",
      quantity: 40.0,
      averageEntryPrice: 228.4,
      currentPrice: 238.6,
      notional: 9544.0,
      unrealizedPnl: 408.0,
      unrealizedPnlPct: 4.46,
      realizedPnl: 120.0,
    },
    GOLD: {
      symbol: "GOLD",
      side: "LONG",
      quantity: 5.0,
      averageEntryPrice: 2640.0,
      currentPrice: 2672.4,
      notional: 13362.0,
      unrealizedPnl: 162.0,
      unrealizedPnlPct: 1.23,
      realizedPnl: 80.0,
    },
    NVDA: {
      symbol: "NVDA",
      side: "LONG",
      quantity: 80.0,
      averageEntryPrice: 172.5,
      currentPrice: 178.25,
      notional: 14260.0,
      unrealizedPnl: 460.0,
      unrealizedPnlPct: 3.33,
      realizedPnl: 210.0,
    },
  },
  orders: [
    {
      id: "ORD-101",
      symbol: "BTC",
      side: "BUY",
      type: "MARKET",
      quantity: 0.25,
      requestedPrice: 98200,
      filledPrice: 98212,
      status: "FILLED",
      createdAt: "2026-09-15T14:30:00Z",
      filledAt: "2026-09-15T14:30:01Z",
      fee: 12.28,
      slippage: 3.0,
      notional: 24553.0,
    },
  ],
  totalRealizedPnl: 860.0,
  totalFeesPaid: 31.42,
  portfolioValue: 103411.12,
  lastUpdated: new Date().toISOString(),
};

class PaperTradingEngine {
  private static instance: PaperTradingEngine;
  private state: PaperPortfolio;
  private listeners: Set<() => void> = new Set();

  private constructor() {
    this.state = this.loadFromStorage();
    this.recalculatePortfolio();

    // Subscribe to live market hub ticks to update positions mark-to-market
    if (typeof window !== "undefined") {
      marketHub.subscribe(() => {
        this.updateMarkToMarket();
      });
    }
  }

  public static getInstance(): PaperTradingEngine {
    if (!PaperTradingEngine.instance) {
      PaperTradingEngine.instance = new PaperTradingEngine();
    }
    return PaperTradingEngine.instance;
  }

  private loadFromStorage(): PaperPortfolio {
    if (typeof window === "undefined") return { ...DEFAULT_PORTFOLIO };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch {}
    return { ...DEFAULT_PORTFOLIO };
  }

  private saveToStorage() {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch {}
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  public subscribe(fn: () => void): () => void {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  public getPortfolio(): PaperPortfolio {
    return this.state;
  }

  private recalculatePortfolio() {
    let positionsValue = 0;
    for (const [sym, pos] of Object.entries(this.state.positions)) {
      if (pos && pos.quantity > 0) {
        const livePrice = marketHub.getPrice(sym as AssetKey) || pos.averageEntryPrice;
        pos.currentPrice = livePrice;
        pos.notional = Number((pos.quantity * livePrice).toFixed(2));
        pos.unrealizedPnl = Number((pos.notional - pos.quantity * pos.averageEntryPrice).toFixed(2));
        pos.unrealizedPnlPct = Number(
          (((livePrice - pos.averageEntryPrice) / pos.averageEntryPrice) * 100).toFixed(2),
        );
        positionsValue += pos.notional;
      }
    }

    this.state.portfolioValue = Number((this.state.cash + positionsValue).toFixed(2));
    this.state.lastUpdated = new Date().toISOString();
    this.saveToStorage();
    this.notify();
  }

  private updateMarkToMarket() {
    let hasChanged = false;
    let positionsValue = 0;

    for (const [sym, pos] of Object.entries(this.state.positions)) {
      if (pos && pos.quantity > 0) {
        const livePrice = marketHub.getPrice(sym as AssetKey);
        if (livePrice && livePrice !== pos.currentPrice) {
          pos.currentPrice = livePrice;
          pos.notional = Number((pos.quantity * livePrice).toFixed(2));
          pos.unrealizedPnl = Number((pos.notional - pos.quantity * pos.averageEntryPrice).toFixed(2));
          pos.unrealizedPnlPct = Number(
            (((livePrice - pos.averageEntryPrice) / pos.averageEntryPrice) * 100).toFixed(2),
          );
          hasChanged = true;
        }
        positionsValue += pos.notional;
      }
    }

    // Check pending limit/stop orders against live price
    for (const ord of this.state.orders) {
      if (ord.status === "PENDING") {
        const currentPrice = marketHub.getPrice(ord.symbol);
        if (ord.type === "LIMIT") {
          if (ord.side === "BUY" && currentPrice <= ord.requestedPrice) {
            this.executeFill(ord, ord.requestedPrice);
            hasChanged = true;
          } else if (ord.side === "SELL" && currentPrice >= ord.requestedPrice) {
            this.executeFill(ord, ord.requestedPrice);
            hasChanged = true;
          }
        } else if (ord.type === "STOP") {
          if (ord.side === "SELL" && currentPrice <= ord.requestedPrice) {
            this.executeFill(ord, currentPrice);
            hasChanged = true;
          }
        }
      }
    }

    if (hasChanged) {
      this.state.portfolioValue = Number((this.state.cash + positionsValue).toFixed(2));
      this.state.lastUpdated = new Date().toISOString();
      this.saveToStorage();
      this.notify();
    }
  }

  private executeFill(ord: PaperOrder, fillPrice: number) {
    const feeBps = 0.0005; // 5 bps
    const notional = ord.quantity * fillPrice;
    const fee = notional * feeBps;

    ord.filledPrice = Number(fillPrice.toFixed(2));
    ord.status = "FILLED";
    ord.filledAt = new Date().toISOString();
    ord.fee = Number(fee.toFixed(2));
    ord.notional = Number(notional.toFixed(2));

    this.state.totalFeesPaid += fee;

    const currentPos = this.state.positions[ord.symbol];

    if (ord.side === "BUY") {
      this.state.cash -= notional + fee;
      if (!currentPos || currentPos.quantity === 0) {
        this.state.positions[ord.symbol] = {
          symbol: ord.symbol,
          side: "LONG",
          quantity: ord.quantity,
          averageEntryPrice: fillPrice,
          currentPrice: fillPrice,
          notional,
          unrealizedPnl: 0,
          unrealizedPnlPct: 0,
          realizedPnl: currentPos ? currentPos.realizedPnl : 0,
        };
      } else {
        const totalQty = currentPos.quantity + ord.quantity;
        const totalCost = currentPos.quantity * currentPos.averageEntryPrice + notional;
        currentPos.quantity = totalQty;
        currentPos.averageEntryPrice = Number((totalCost / totalQty).toFixed(2));
      }
    } else {
      // SELL
      if (currentPos && currentPos.quantity >= ord.quantity) {
        const proceeds = notional - fee;
        this.state.cash += proceeds;
        const costBasis = ord.quantity * currentPos.averageEntryPrice;
        const realized = notional - costBasis;
        currentPos.realizedPnl += Number(realized.toFixed(2));
        this.state.totalRealizedPnl += Number(realized.toFixed(2));
        currentPos.quantity = Number((currentPos.quantity - ord.quantity).toFixed(4));
      }
    }
  }

  /**
   * Submit an order (Market, Limit, Stop).
   */
  public submitOrder(params: {
    symbol: AssetKey;
    side: OrderSide;
    type: OrderType;
    quantity: number;
    limitPrice?: number;
    stopPrice?: number;
  }): { success: boolean; message: string; order?: PaperOrder } {
    const livePrice = marketHub.getPrice(params.symbol);
    const targetPrice =
      params.type === "MARKET" ? livePrice : (params.limitPrice || params.stopPrice || livePrice);

    const notional = params.quantity * targetPrice;
    const fee = notional * 0.0005;

    // Validation
    if (params.quantity <= 0) {
      return { success: false, message: "Quantity must be greater than zero." };
    }

    if (params.side === "BUY") {
      if (notional + fee > this.state.cash) {
        return {
          success: false,
          message: `Insufficient virtual cash. Required: $${(notional + fee).toFixed(2)}, Available: $${this.state.cash.toFixed(2)}`,
        };
      }
    } else {
      // SELL validation
      const existingPos = this.state.positions[params.symbol];
      if (!existingPos || existingPos.quantity < params.quantity) {
        return {
          success: false,
          message: `Insufficient holding. Available: ${existingPos ? existingPos.quantity : 0} ${params.symbol}`,
        };
      }
    }

    const order: PaperOrder = {
      id: `ORD-${Date.now().toString().slice(-6)}`,
      symbol: params.symbol,
      side: params.side,
      type: params.type,
      quantity: params.quantity,
      requestedPrice: targetPrice,
      status: params.type === "MARKET" ? "FILLED" : "PENDING",
      createdAt: new Date().toISOString(),
      fee: Number(fee.toFixed(2)),
      slippage: Number((notional * 0.0002).toFixed(2)),
      notional: Number(notional.toFixed(2)),
    };

    if (params.type === "MARKET") {
      // Immediate execution with slight slippage
      const slipFactor = params.side === "BUY" ? 1.0002 : 0.9998;
      const fillPrice = targetPrice * slipFactor;
      this.executeFill(order, fillPrice);
    }

    this.state.orders.unshift(order);
    this.recalculatePortfolio();

    return {
      success: true,
      message:
        params.type === "MARKET"
          ? `ORDER FILLED: ${params.side} ${params.quantity} ${params.symbol} @ $${order.filledPrice}`
          : `ORDER PLACED: ${params.side} ${params.type} ${params.quantity} ${params.symbol} @ $${targetPrice}`,
      order,
    };
  }

  public cancelOrder(orderId: string): boolean {
    const ord = this.state.orders.find((o) => o.id === orderId);
    if (ord && ord.status === "PENDING") {
      ord.status = "CANCELLED";
      this.saveToStorage();
      this.notify();
      return true;
    }
    return false;
  }

  public resetPortfolio(newCapital: number = 100000) {
    this.state = {
      initialCapital: newCapital,
      cash: newCapital,
      positions: {} as any,
      orders: [],
      totalRealizedPnl: 0,
      totalFeesPaid: 0,
      portfolioValue: newCapital,
      lastUpdated: new Date().toISOString(),
    };
    this.saveToStorage();
    this.notify();
  }

  public addVirtualFunds(amount: number) {
    this.state.cash += amount;
    this.recalculatePortfolio();
  }
}

export const paperTradingEngine = PaperTradingEngine.getInstance();
