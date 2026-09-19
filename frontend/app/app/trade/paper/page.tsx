"use client";

import { useState, useEffect } from "react";
import {
  Wallet,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  PlusCircle,
  FileText,
  DollarSign
} from "lucide-react";
import Link from "next/link";
import { marketHub, type AssetKey } from "@/lib/market-data-hub";
import {
  paperTradingEngine,
  type PaperPortfolio,
  type PaperOrder,
  type PaperPosition,
  type OrderSide,
  type OrderType
} from "@/lib/paper-trading";

export default function PaperTradingPage() {
  const [portfolio, setPortfolio] = useState<PaperPortfolio>(paperTradingEngine.getPortfolio());
  const [symbol, setSymbol] = useState<AssetKey>("BTC");
  const [side, setSide] = useState<OrderSide>("BUY");
  const [orderType, setOrderType] = useState<OrderType>("MARKET");
  const [quantity, setQuantity] = useState<string>("0.25");
  const [limitPrice, setLimitPrice] = useState<string>("");
  const [stopPrice, setStopPrice] = useState<string>("");
  const [orderNotification, setOrderNotification] = useState<{ msg: string; success: boolean } | null>(null);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState<PaperOrder | null>(null);

  // Subscribe to reactive paper engine updates
  useEffect(() => {
    return paperTradingEngine.subscribe(() => {
      setPortfolio({ ...paperTradingEngine.getPortfolio() });
    });
  }, []);

  const livePrice = marketHub.getPrice(symbol);
  const numQty = parseFloat(quantity) || 0;
  const numLimit = parseFloat(limitPrice) || livePrice;
  const targetExecPrice = orderType === "LIMIT" ? numLimit : livePrice;
  const estimatedNotional = numQty * targetExecPrice;
  const estimatedFee = estimatedNotional * 0.0005; // 5 bps
  const estimatedSlippage = estimatedNotional * 0.0002; // 2 bps

  const handleExecuteOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const result = paperTradingEngine.submitOrder({
      symbol,
      side,
      type: orderType,
      quantity: numQty,
      limitPrice: orderType === "LIMIT" ? numLimit : undefined,
      stopPrice: orderType === "STOP" ? parseFloat(stopPrice) : undefined,
    });

    setOrderNotification({ msg: result.message, success: result.success });
    setTimeout(() => {
      setOrderNotification(null);
    }, 4500);
  };

  const handleClosePosition = (sym: AssetKey) => {
    const pos = portfolio.positions[sym];
    if (!pos || pos.quantity <= 0) return;

    const result = paperTradingEngine.submitOrder({
      symbol: sym,
      side: "SELL",
      type: "MARKET",
      quantity: pos.quantity,
    });

    setOrderNotification({ msg: result.message, success: result.success });
    setTimeout(() => setOrderNotification(null), 4500);
  };

  const basePriceInt = Math.floor(livePrice);
  const activePositionsList = Object.values(portfolio.positions).filter((p) => p && p.quantity > 0);
  const totalUnrealized = activePositionsList.reduce((acc, p) => acc + p.unrealizedPnl, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Simulation Banner (Rule 5 & 136) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2.5 clay-card rounded-2xl border border-[var(--warning-border)] bg-[var(--warning-bg)]/20 text-xs gap-2">
        <div className="flex items-center gap-2 font-mono">
          <span className="px-2 py-0.5 rounded-full bg-[var(--warning)] text-white font-bold text-[10px]">
            PAPER / SIMULATED TRADING
          </span>
          <span className="text-[var(--text-secondary)] font-sans">
            Virtual capital sandbox with simulated slippage, exchange fees, and live mark-to-market valuation.
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <button
            type="button"
            onClick={() => paperTradingEngine.resetPortfolio(100000)}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 hover:underline"
          >
            <RotateCcw className="w-3 h-3" /> Reset $100K
          </button>
          <Link href="/app/trade/portfolio" className="text-[var(--accent)] hover:underline font-medium">
            Portfolio Analytics →
          </Link>
        </div>
      </div>

      {/* Header & Portfolio Metric Strip */}
      <div className="flex flex-col lg:flex-row lg:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] font-mono">
            PAPER TRADING DESK
          </h1>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Real-time simulated execution with fee attribution, slippage simulation, and persistent order matching.
          </p>
        </div>

        {/* Portfolio Top Readout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="clay-card p-2.5 rounded-xl border border-[var(--border)] text-right">
            <div className="text-[10px] text-[var(--text-muted)]">Portfolio Value</div>
            <div className="text-base font-bold text-[var(--text-primary)]">
              ${portfolio.portfolioValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div className="clay-card p-2.5 rounded-xl border border-[var(--border)] text-right">
            <div className="text-[10px] text-[var(--text-muted)]">Available Cash</div>
            <div className="text-base font-bold text-[var(--positive)]">
              ${portfolio.cash.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div className="clay-card p-2.5 rounded-xl border border-[var(--border)] text-right">
            <div className="text-[10px] text-[var(--text-muted)]">Unrealized P&amp;L</div>
            <div className={`text-base font-bold ${totalUnrealized >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
              {totalUnrealized >= 0 ? `+$${totalUnrealized.toFixed(2)}` : `-$${Math.abs(totalUnrealized).toFixed(2)}`}
            </div>
          </div>
          <div className="clay-card p-2.5 rounded-xl border border-[var(--border)] text-right">
            <div className="text-[10px] text-[var(--text-muted)]">Realized P&amp;L</div>
            <div className={`text-base font-bold ${portfolio.totalRealizedPnl >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
              {portfolio.totalRealizedPnl >= 0 ? `+$${portfolio.totalRealizedPnl.toFixed(2)}` : `-$${Math.abs(portfolio.totalRealizedPnl).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {orderNotification && (
        <div
          className={`clay-card p-3 rounded-xl border font-mono text-xs flex items-center justify-between animate-in fade-in ${
            orderNotification.success
              ? "border-[var(--positive-border)] bg-[var(--positive-bg)] text-[var(--positive)]"
              : "border-[var(--negative-border)] bg-[var(--negative-bg)] text-[var(--negative)]"
          }`}
        >
          <div className="flex items-center gap-2 font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>{orderNotification.msg}</span>
          </div>
          <span className="text-[10px] text-[var(--text-muted)] uppercase">
            {orderNotification.success ? "EXECUTION COMPLETE" : "EXECUTION REJECTED"}
          </span>
        </div>
      )}

      {/* Order Entry + Simulated Market Depth */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Order Ticket Form (4 Cols) */}
        <div className="lg:col-span-4 clay-surface p-5 rounded-3xl space-y-4 text-xs border border-[var(--border)]">
          <div className="border-b border-[var(--border)] pb-2">
            <h2 className="text-xs font-bold text-[var(--text-primary)] font-mono uppercase tracking-wider">
              SIMULATED ORDER TICKET
            </h2>
            <div className="text-[10px] text-[var(--text-muted)]">Live pricing · 5 bps fee · 2 bps slippage</div>
          </div>

          <form onSubmit={handleExecuteOrder} className="space-y-3 font-mono">
            <div>
              <label className="block text-[var(--text-muted)] text-[10px] uppercase font-semibold mb-1">
                Asset
              </label>
              <select
                value={symbol}
                onChange={(e) => setSymbol(e.target.value as AssetKey)}
                className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-2 text-[var(--text-primary)] focus:outline-none border border-[var(--border)] cursor-pointer"
              >
                <option value="BTC">BTC / USD (${marketHub.getPrice("BTC").toLocaleString()})</option>
                <option value="SOL">SOL / USD (${marketHub.getPrice("SOL").toLocaleString()})</option>
                <option value="GOLD">GOLD / USD (${marketHub.getPrice("GOLD").toLocaleString()})</option>
                <option value="NVDA">NVDA Corp (${marketHub.getPrice("NVDA").toLocaleString()})</option>
              </select>
            </div>

            {/* Side Tabs */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSide("BUY")}
                className={`py-2 rounded-xl font-bold text-xs transition-all ${
                  side === "BUY"
                    ? "bg-[var(--positive)] text-[#0B0D0F] shadow-sm"
                    : "clay-button text-[var(--text-secondary)] border border-[var(--border)]"
                }`}
              >
                BUY / LONG
              </button>
              <button
                type="button"
                onClick={() => setSide("SELL")}
                className={`py-2 rounded-xl font-bold text-xs transition-all ${
                  side === "SELL"
                    ? "bg-[var(--negative)] text-white shadow-sm"
                    : "clay-button text-[var(--text-secondary)] border border-[var(--border)]"
                }`}
              >
                SELL / SHORT
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[var(--text-muted)] text-[10px] uppercase font-semibold mb-1">
                  Order Type
                </label>
                <select
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value as OrderType)}
                  className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-2 text-[var(--text-primary)] focus:outline-none border border-[var(--border)]"
                >
                  <option value="MARKET">Market</option>
                  <option value="LIMIT">Limit</option>
                  <option value="STOP">Stop</option>
                </select>
              </div>

              <div>
                <label className="block text-[var(--text-muted)] text-[10px] uppercase font-semibold mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  step="any"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-2 text-[var(--text-primary)] focus:outline-none border border-[var(--border)] font-bold"
                />
              </div>
            </div>

            {orderType === "LIMIT" && (
              <div>
                <label className="block text-[var(--text-muted)] text-[10px] uppercase font-semibold mb-1">
                  Limit Price ($)
                </label>
                <input
                  type="number"
                  step="any"
                  value={limitPrice || livePrice}
                  onChange={(e) => setLimitPrice(e.target.value)}
                  className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-2 text-[var(--text-primary)] focus:outline-none border border-[var(--border)] font-bold"
                />
              </div>
            )}

            <div className="pt-2 border-t border-[var(--border)] space-y-1 text-[11px]">
              <div className="flex justify-between text-[var(--text-secondary)]">
                <span>Estimated Notional:</span>
                <span className="font-bold text-[var(--text-primary)]">
                  ${estimatedNotional.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between text-[var(--text-muted)]">
                <span>Fee (5 bps):</span>
                <span>${estimatedFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[var(--text-muted)]">
                <span>Simulated Slippage:</span>
                <span>${estimatedSlippage.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={estimatedNotional <= 0 || (side === "BUY" && estimatedNotional + estimatedFee > portfolio.cash)}
              className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all uppercase tracking-wider ${
                side === "BUY"
                  ? "bg-[var(--positive)] text-[#0B0D0F] hover:opacity-90 active:scale-[0.98]"
                  : "bg-[var(--negative)] text-white hover:opacity-90 active:scale-[0.98]"
              } disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              EXECUTE {side} ({quantity} {symbol})
            </button>
          </form>
        </div>

        {/* Order Book & Positions / Orders (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Simulated Market Depth */}
          <div className="clay-surface p-5 rounded-3xl border border-[var(--border)] space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
              <div>
                <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider">
                  SIMULATED L2 ORDER BOOK
                </span>
                <div className="text-[10px] text-[var(--text-muted)] font-sans">
                  {symbol}/USD Simulated Market Depth Profile
                </div>
              </div>
              <span className="text-[10px] text-[var(--positive)] flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse" />
                MARK: ${livePrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Depth Ladder */}
            <div className="grid grid-cols-2 gap-4 text-[11px]">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] text-[var(--text-muted)] pb-1 border-b border-[var(--border)] font-semibold">
                  <span>BID PRICE</span>
                  <span>SIZE ({symbol})</span>
                </div>
                <div className="flex justify-between items-center py-1 px-2 rounded-lg bg-[var(--positive-bg)] relative overflow-hidden border border-[var(--positive-border)]">
                  <span className="font-bold text-[var(--positive)]">${(basePriceInt - 2).toLocaleString()}</span>
                  <span className="text-[var(--text-primary)] font-semibold">28.4</span>
                  <div className="absolute left-0 top-0 bottom-0 bg-[var(--positive)]/10 w-[70%]" />
                </div>
                <div className="flex justify-between items-center py-1 px-2 rounded-lg bg-[var(--positive-bg)] relative overflow-hidden border border-[var(--positive-border)]">
                  <span className="font-bold text-[var(--positive)]">${(basePriceInt - 4).toLocaleString()}</span>
                  <span className="text-[var(--text-primary)] font-semibold">41.2</span>
                  <div className="absolute left-0 top-0 bottom-0 bg-[var(--positive)]/10 w-[85%]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] text-[var(--text-muted)] pb-1 border-b border-[var(--border)] font-semibold">
                  <span>ASK PRICE</span>
                  <span>SIZE ({symbol})</span>
                </div>
                <div className="flex justify-between items-center py-1 px-2 rounded-lg bg-[var(--negative-bg)] relative overflow-hidden border border-[var(--negative-border)]">
                  <span className="font-bold text-[var(--negative)]">${(basePriceInt + 2).toLocaleString()}</span>
                  <span className="text-[var(--text-primary)] font-semibold">22.8</span>
                  <div className="absolute right-0 top-0 bottom-0 bg-[var(--negative)]/10 w-[60%]" />
                </div>
                <div className="flex justify-between items-center py-1 px-2 rounded-lg bg-[var(--negative-bg)] relative overflow-hidden border border-[var(--negative-border)]">
                  <span className="font-bold text-[var(--negative)]">${(basePriceInt + 4).toLocaleString()}</span>
                  <span className="text-[var(--text-primary)] font-semibold">39.5</span>
                  <div className="absolute right-0 top-0 bottom-0 bg-[var(--negative)]/10 w-[80%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Active Positions Table */}
          <div className="clay-card p-5 rounded-3xl border border-[var(--border)] space-y-3">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 font-mono text-xs">
              <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider">
                ACTIVE PAPER POSITIONS
              </span>
              <span className="text-[var(--text-muted)]">{activePositionsList.length} HOLDINGS</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[var(--border)] text-[var(--text-muted)] text-[10px]">
                    <th className="pb-2">ASSET</th>
                    <th className="pb-2">SIDE</th>
                    <th className="pb-2">QTY</th>
                    <th className="pb-2">ENTRY</th>
                    <th className="pb-2">CURRENT</th>
                    <th className="pb-2">NOTIONAL</th>
                    <th className="pb-2">UNREALIZED P&amp;L</th>
                    <th className="pb-2 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] text-[var(--text-primary)]">
                  {activePositionsList.map((pos) => {
                    const isProfitable = pos.unrealizedPnl >= 0;
                    return (
                      <tr key={pos.symbol} className="hover:bg-[var(--bg-hover)] transition-colors">
                        <td className="py-2.5 font-bold">{pos.symbol}</td>
                        <td className="py-2.5">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[var(--positive-bg)] text-[var(--positive)]">
                            {pos.side}
                          </span>
                        </td>
                        <td className="py-2.5">{pos.quantity}</td>
                        <td className="py-2.5">${pos.averageEntryPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5">${pos.currentPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5">${pos.notional.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5">
                          <span className={`font-bold ${isProfitable ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                            {isProfitable ? `+$${pos.unrealizedPnl.toFixed(2)}` : `-$${Math.abs(pos.unrealizedPnl).toFixed(2)}`}
                            {" "}
                            ({pos.unrealizedPnlPct > 0 ? `+${pos.unrealizedPnlPct}%` : `${pos.unrealizedPnlPct}%`})
                          </span>
                        </td>
                        <td className="py-2.5 text-right">
                          <button
                            onClick={() => handleClosePosition(pos.symbol)}
                            className="px-2.5 py-1 clay-button rounded-lg text-[10px] text-[var(--negative)] hover:bg-[var(--negative)] hover:text-white transition-all font-bold"
                          >
                            CLOSE
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  {activePositionsList.length === 0 && (
                    <tr>
                      <td colSpan={8} className="py-4 text-center text-xs text-[var(--text-muted)]">
                        No active positions. Execute a buy order above to start paper trading.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order History (Rule 124) */}
          <div className="clay-card p-5 rounded-3xl border border-[var(--border)] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
              <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider">
                SIMULATED ORDER HISTORY ({portfolio.orders.length})
              </span>
              <span className="text-[10px] text-[var(--text-muted)]">Click order for fill breakdown</span>
            </div>

            <div className="overflow-x-auto max-h-56 overflow-y-auto">
              <table className="w-full text-left text-[11px]">
                <thead className="text-[10px] text-[var(--text-muted)] border-b border-[var(--border)] uppercase">
                  <tr>
                    <th className="py-2">Order ID</th>
                    <th className="py-2">Asset</th>
                    <th className="py-2">Side</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Qty</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Status</th>
                    <th className="py-2 text-right">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {portfolio.orders.map((ord) => (
                    <tr
                      key={ord.id}
                      onClick={() => setSelectedOrderDetails(ord)}
                      className="hover:bg-[var(--bg-hover)] cursor-pointer transition-colors"
                    >
                      <td className="py-1.5 font-bold text-[var(--accent)]">{ord.id}</td>
                      <td className="py-1.5 font-bold">{ord.symbol}</td>
                      <td className="py-1.5">
                        <span className={ord.side === "BUY" ? "text-[var(--positive)] font-bold" : "text-[var(--negative)] font-bold"}>
                          {ord.side}
                        </span>
                      </td>
                      <td className="py-1.5 text-[var(--text-secondary)]">{ord.type}</td>
                      <td className="py-1.5">{ord.quantity}</td>
                      <td className="py-1.5">${ord.filledPrice ?? ord.requestedPrice}</td>
                      <td className="py-1.5">
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-[var(--positive-bg)] text-[var(--positive)] font-bold">
                          {ord.status}
                        </span>
                      </td>
                      <td className="py-1.5 text-right text-[var(--text-muted)]">${ord.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrderDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="clay-card w-full max-w-sm rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
              <h3 className="font-bold text-[var(--text-primary)]">Order Details: {selectedOrderDetails.id}</h3>
              <button
                onClick={() => setSelectedOrderDetails(null)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Asset Pair:</span>
                <span className="font-bold">{selectedOrderDetails.symbol} / USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Side:</span>
                <span className={selectedOrderDetails.side === "BUY" ? "text-[var(--positive)] font-bold" : "text-[var(--negative)] font-bold"}>
                  {selectedOrderDetails.side}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Order Type:</span>
                <span>{selectedOrderDetails.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Execution Status:</span>
                <span className="text-[var(--positive)] font-bold">{selectedOrderDetails.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Executed Fill Price:</span>
                <span className="font-bold">${selectedOrderDetails.filledPrice ?? selectedOrderDetails.requestedPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Exchange Commission (5 bps):</span>
                <span>${selectedOrderDetails.fee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Simulated Slippage (2 bps):</span>
                <span>${selectedOrderDetails.slippage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Timestamp:</span>
                <span>{selectedOrderDetails.createdAt}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedOrderDetails(null)}
              className="w-full py-2 rounded-xl bg-[var(--accent)] text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
