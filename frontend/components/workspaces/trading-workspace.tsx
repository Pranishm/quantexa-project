"use client";

import { useState, useEffect } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  Sliders, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { QuantoraChart } from "@/components/charts/quantora-chart";
import { useWorkspace } from "@/components/context/workspace-context";

interface Position {
  id: string;
  symbol: string;
  side: "BUY" | "SELL";
  size: number;
  entryPrice: number;
  currentPrice: number;
  unrealizedPnL: number;
  unrealizedPnLPct: number;
}

export function TradingWorkspace() {
  const { virtualBalance, executeVirtualTrade } = useWorkspace();
  const [selectedAsset, setSelectedAsset] = useState<"BTC" | "SOL" | "GOLD" | "NVDA">("BTC");
  const [orderSide, setOrderSide] = useState<"BUY" | "SELL">("BUY");
  const [orderType, setOrderType] = useState<"MARKET" | "LIMIT">("MARKET");
  const [quantity, setQuantity] = useState<number>(0.1);
  const [positions, setPositions] = useState<Position[]>([
    {
      id: "POS-104",
      symbol: "BTC",
      side: "BUY",
      size: 0.5,
      entryPrice: 98450.0,
      currentPrice: 104284.5,
      unrealizedPnL: 2917.25,
      unrealizedPnLPct: 5.92,
    },
    {
      id: "POS-102",
      symbol: "SOL",
      side: "BUY",
      size: 25.0,
      entryPrice: 224.1,
      currentPrice: 238.67,
      unrealizedPnL: 364.25,
      unrealizedPnLPct: 6.5,
    },
  ]);
  const [orderSuccessMsg, setOrderSuccessMsg] = useState<string | null>(null);

  const assetPrices: Record<string, { price: number; changePct: number; name: string }> = {
    BTC: { price: 104284.5, changePct: 2.41, name: "Bitcoin (BTC/USD)" },
    SOL: { price: 238.67, changePct: 3.18, name: "Solana (SOL/USD)" },
    GOLD: { price: 2672.81, changePct: 0.72, name: "Gold (XAU/USD)" },
    NVDA: { price: 178.3, changePct: -0.84, name: "NVIDIA (NVDA)" },
  };

  const currentAsset = assetPrices[selectedAsset];

  // Dynamic simulated order book
  const [orderBook, setOrderBook] = useState<{
    asks: { price: number; size: number; total: number }[];
    bids: { price: number; size: number; total: number }[];
  }>({
    asks: [
      { price: 104320.0, size: 1.45, total: 4.85 },
      { price: 104310.5, size: 0.82, total: 3.4 },
      { price: 104295.0, size: 2.15, total: 2.58 },
      { price: 104288.0, size: 0.43, total: 0.43 },
    ],
    bids: [
      { price: 104280.0, size: 1.12, total: 1.12 },
      { price: 104272.5, size: 2.45, total: 3.57 },
      { price: 104260.0, size: 1.88, total: 5.45 },
      { price: 104245.0, size: 3.2, total: 8.65 },
    ],
  });

  // Micro-motion in order book
  useEffect(() => {
    const timer = setInterval(() => {
      setOrderBook((prev) => {
        const base = currentAsset.price;
        const spread = base * 0.00015;
        return {
          asks: [
            { price: +(base + spread * 4).toFixed(2), size: +(0.5 + Math.random() * 2).toFixed(2), total: 4.8 },
            { price: +(base + spread * 3).toFixed(2), size: +(0.4 + Math.random() * 1.5).toFixed(2), total: 3.2 },
            { price: +(base + spread * 2).toFixed(2), size: +(0.8 + Math.random() * 2).toFixed(2), total: 2.1 },
            { price: +(base + spread * 1).toFixed(2), size: +(0.2 + Math.random() * 1).toFixed(2), total: 0.5 },
          ],
          bids: [
            { price: +(base - spread * 1).toFixed(2), size: +(0.3 + Math.random() * 1.2).toFixed(2), total: 0.6 },
            { price: +(base - spread * 2).toFixed(2), size: +(0.9 + Math.random() * 2.2).toFixed(2), total: 2.4 },
            { price: +(base - spread * 3).toFixed(2), size: +(1.2 + Math.random() * 1.8).toFixed(2), total: 4.2 },
            { price: +(base - spread * 4).toFixed(2), size: +(2.1 + Math.random() * 3).toFixed(2), total: 7.5 },
          ],
        };
      });
    }, 2800);
    return () => clearInterval(timer);
  }, [currentAsset.price]);

  const handlePlaceOrder = () => {
    const cost = quantity * currentAsset.price;
    if (cost > virtualBalance) {
      alert("Insufficient virtual capital for this order.");
      return;
    }

    executeVirtualTrade(orderSide === "BUY" ? cost : -cost);

    const newPos: Position = {
      id: `POS-${Math.floor(100 + Math.random() * 900)}`,
      symbol: selectedAsset,
      side: orderSide,
      size: quantity,
      entryPrice: currentAsset.price,
      currentPrice: currentAsset.price,
      unrealizedPnL: 0,
      unrealizedPnLPct: 0,
    };

    setPositions([newPos, ...positions]);
    setOrderSuccessMsg(`Paper ${orderSide} ${quantity} ${selectedAsset} executed at $${currentAsset.price.toLocaleString()}`);
    setTimeout(() => setOrderSuccessMsg(null), 3500);
  };

  return (
    <div className="space-y-6">
      {/* ── TOP ASSET TICKER STRIP ───────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(["BTC", "SOL", "GOLD", "NVDA"] as const).map((sym) => {
          const item = assetPrices[sym];
          const isSelected = selectedAsset === sym;
          const isUp = item.changePct >= 0;
          return (
            <button
              key={sym}
              onClick={() => setSelectedAsset(sym)}
              className={`p-3 rounded-2xl text-left transition-all border ${
                isSelected
                  ? "clay-card-elevated border-[var(--accent)] bg-[var(--bg-surface)] shadow-md"
                  : "clay-card bg-[var(--bg-surface)] border-[var(--border)] hover:border-[var(--accent)]/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">{sym}/USD</span>
                <span className={`text-[10px] font-mono font-semibold flex items-center ${isUp ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                  {isUp ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                  {isUp ? `+${item.changePct}%` : `${item.changePct}%`}
                </span>
              </div>
              <div className="text-sm sm:text-base font-bold font-mono text-[var(--text-primary)] mt-1">
                ${item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-[10px] text-[var(--text-muted)] truncate mt-0.5">{item.name}</div>
            </button>
          );
        })}
      </div>

      {/* ── MAIN WORKSPACE GRID ──────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Left Column: Full Candlestick Chart Engine (8 cols) */}
        <div className="xl:col-span-8 space-y-6">
          <div className="clay-card rounded-2xl border border-[var(--border)] overflow-hidden">
            <QuantoraChart
              symbol={selectedAsset}
              defaultMode="CANDLE"
              defaultTimeframe="1M"
              defaultIndicators={["SMA20", "SMA50", "VOLUME"]}
              height={500}
            />
          </div>

          {/* Open Positions Table */}
          <div className="clay-card p-5 rounded-2xl border border-[var(--border)] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-[var(--accent)]" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                  Simulated Paper Positions ({positions.length})
                </h4>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Real-Time Mark to Market</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="text-[10px] text-[var(--text-muted)] uppercase border-b border-[var(--border)]">
                    <th className="pb-2">Symbol</th>
                    <th className="pb-2">Side</th>
                    <th className="pb-2">Size</th>
                    <th className="pb-2">Entry</th>
                    <th className="pb-2">Current</th>
                    <th className="pb-2 text-right">Unrealized P&L</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {positions.map((pos) => {
                    const isProfitable = pos.unrealizedPnL >= 0;
                    return (
                      <tr key={pos.id} className="hover:bg-[var(--bg-hover)]/30 transition-colors">
                        <td className="py-2.5 font-bold text-[var(--text-primary)]">{pos.symbol}/USD</td>
                        <td className="py-2.5">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${pos.side === "BUY" ? "bg-[var(--positive)]/15 text-[var(--positive)]" : "bg-[var(--negative)]/15 text-[var(--negative)]"}`}>
                            {pos.side}
                          </span>
                        </td>
                        <td className="py-2.5 text-[var(--text-primary)]">{pos.size}</td>
                        <td className="py-2.5 text-[var(--text-muted)]">${pos.entryPrice.toLocaleString()}</td>
                        <td className="py-2.5 text-[var(--text-primary)]">${pos.currentPrice.toLocaleString()}</td>
                        <td className={`py-2.5 text-right font-bold ${isProfitable ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                          {isProfitable ? `+$${pos.unrealizedPnL.toFixed(2)}` : `-$${Math.abs(pos.unrealizedPnL).toFixed(2)}`}
                          <span className="text-[10px] ml-1.5 opacity-80">({isProfitable ? "+" : ""}{pos.unrealizedPnLPct}%)</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Order Book + Paper Order Ticket (4 cols) */}
        <div className="xl:col-span-4 space-y-6">
          {/* Order Ticket */}
          <div className="clay-card p-5 rounded-2xl border border-[var(--border)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Paper Order Ticket
              </span>
              <span className="text-[10px] font-mono text-[var(--accent)] font-semibold">
                ${virtualBalance.toLocaleString("en-US")} USD Sandbox
              </span>
            </div>

            {/* Buy / Sell Tabs */}
            <div className="grid grid-cols-2 gap-1 p-1 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)]">
              <button
                onClick={() => setOrderSide("BUY")}
                className={`py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  orderSide === "BUY"
                    ? "bg-[var(--positive)] text-white shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                BUY / LONG
              </button>
              <button
                onClick={() => setOrderSide("SELL")}
                className={`py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  orderSide === "SELL"
                    ? "bg-[var(--negative)] text-white shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                SELL / SHORT
              </button>
            </div>

            {/* Order Type */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--text-secondary)]">Type</span>
              <div className="flex gap-1.5">
                {(["MARKET", "LIMIT"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setOrderType(t)}
                    className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold ${
                      orderType === t
                        ? "bg-[var(--bg-elevated)] border-[var(--accent)] text-[var(--accent)]"
                        : "border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[var(--text-secondary)]">Quantity</span>
                <span className="text-[var(--text-muted)]">{selectedAsset}</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={quantity}
                  onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-sm font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-[var(--text-muted)]">
                <span>Estimated Price</span>
                <span>${currentAsset.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[var(--text-muted)]">
                <span>Notional Value</span>
                <span>${(quantity * currentAsset.price).toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between font-bold text-[var(--text-primary)] pt-1 border-t border-[var(--border)]">
                <span>Required Margin</span>
                <span>${(quantity * currentAsset.price * 0.1).toFixed(2)} (10x)</span>
              </div>
            </div>

            {orderSuccessMsg && (
              <div className="p-2.5 rounded-xl bg-[var(--positive)]/15 border border-[var(--positive)]/30 text-[var(--positive)] text-[11px] font-mono flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{orderSuccessMsg}</span>
              </div>
            )}

            <button
              onClick={handlePlaceOrder}
              className={`w-full py-3 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-white clay-button transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                orderSide === "BUY" ? "bg-[var(--positive)] hover:opacity-90" : "bg-[var(--negative)] hover:opacity-90"
              }`}
            >
              <span>Execute {orderSide} {selectedAsset}</span>
            </button>
          </div>

          {/* Live Order Book */}
          <div className="clay-card p-5 rounded-2xl border border-[var(--border)] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Order Book
              </span>
              <span className="text-[10px] text-[var(--text-muted)]">Spread: 0.015%</span>
            </div>

            {/* Asks (Red) */}
            <div className="space-y-1">
              {orderBook.asks.map((a, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] relative py-0.5">
                  <div
                    className="absolute right-0 top-0 bottom-0 bg-[var(--negative)]/10 rounded"
                    style={{ width: `${(a.total / 6) * 100}%` }}
                  />
                  <span className="text-[var(--negative)] z-10">${a.price.toFixed(2)}</span>
                  <span className="text-[var(--text-muted)] z-10">{a.size}</span>
                </div>
              ))}
            </div>

            {/* Current Price Divider */}
            <div className="py-1.5 my-1 border-y border-[var(--border)] flex items-center justify-between font-bold text-sm">
              <span className="text-[var(--text-primary)]">${currentAsset.price.toLocaleString()}</span>
              <span className="text-[10px] text-[var(--positive)]">● MARKET MATCH</span>
            </div>

            {/* Bids (Green) */}
            <div className="space-y-1">
              {orderBook.bids.map((b, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] relative py-0.5">
                  <div
                    className="absolute right-0 top-0 bottom-0 bg-[var(--positive)]/10 rounded"
                    style={{ width: `${(b.total / 9) * 100}%` }}
                  />
                  <span className="text-[var(--positive)] z-10">${b.price.toFixed(2)}</span>
                  <span className="text-[var(--text-muted)] z-10">{b.size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
