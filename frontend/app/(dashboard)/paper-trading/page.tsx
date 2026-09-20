"use client";

import { Wallet, ArrowDownRight, ArrowUpRight, Clock, Activity, Target } from "lucide-react";
import { useState } from "react";

export default function PaperTradingPage() {
  const [balance, setBalance] = useState(100000);
  const [positions, setPositions] = useState([
    { sym: "BTC/USD", side: "LONG", size: 0.5, entry: 101250, current: 104284.50, pnl: 1517.25, pnlPct: 1.50 },
    { sym: "NVDA", side: "SHORT", size: 100, entry: 180.50, current: 178.30, pnl: 220.00, pnlPct: 1.22 }
  ]);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <Wallet className="w-6 h-6 text-[var(--accent)]" />
            Realistic Trading Simulation
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Model initial capital, position sizing, paper orders, slippage, and transaction cost drag.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="clay-button px-4 py-2 rounded-xl bg-[var(--negative)]/10 text-[var(--negative)] border border-[var(--negative)]/20 text-xs font-semibold">
            Reset Account
          </button>
          <button className="clay-button px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold shadow-[0_0_15px_var(--accent)]">
            Deploy Bot
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Account Summary & Order Book (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top Account Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="clay-card p-4 rounded-2xl border border-[var(--border)]">
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Account Balance</div>
              <div className="text-2xl font-bold text-[var(--text-primary)] mt-1">${balance.toLocaleString()}</div>
            </div>
            <div className="clay-card p-4 rounded-2xl border border-[var(--border)]">
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Unrealized P&L</div>
              <div className="text-2xl font-bold text-[var(--positive)] mt-1">+$1,737.25</div>
            </div>
            <div className="clay-card p-4 rounded-2xl border border-[var(--border)]">
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Margin Used</div>
              <div className="text-2xl font-bold text-[var(--text-primary)] mt-1">15.2%</div>
            </div>
          </div>

          <div className="clay-card rounded-2xl border border-[var(--border)] p-0 overflow-hidden">
            <div className="p-4 border-b border-[var(--border)] bg-[var(--bg-surface)] flex justify-between items-center">
              <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                Active Open Positions
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-mono">
                <thead className="bg-[var(--bg-recessed)] text-[10px] text-[var(--text-muted)] uppercase">
                  <tr>
                    <th className="p-4 font-bold">Asset</th>
                    <th className="p-4 font-bold">Side</th>
                    <th className="p-4 font-bold">Size</th>
                    <th className="p-4 font-bold">Entry Price</th>
                    <th className="p-4 font-bold">Current Price</th>
                    <th className="p-4 font-bold text-right">Unrealized P&L</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] text-xs text-[var(--text-primary)]">
                  {positions.map((p, i) => (
                    <tr key={i} className="hover:bg-[var(--bg-recessed)]/50 transition-colors">
                      <td className="p-4 font-bold">{p.sym}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${p.side === 'LONG' ? 'bg-[var(--positive)]/10 text-[var(--positive)]' : 'bg-[var(--negative)]/10 text-[var(--negative)]'}`}>
                          {p.side}
                        </span>
                      </td>
                      <td className="p-4">{p.size}</td>
                      <td className="p-4">${p.entry.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                      <td className="p-4">${p.current.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                      <td className={`p-4 text-right font-bold ${p.pnl >= 0 ? 'text-[var(--positive)]' : 'text-[var(--negative)]'}`}>
                        {p.pnl >= 0 ? '+' : '-'}${Math.abs(p.pnl).toLocaleString(undefined, {minimumFractionDigits: 2})} ({p.pnlPct}%)
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-[10px] text-[var(--text-muted)] hover:text-[var(--negative)] border border-[var(--border)] hover:border-[var(--negative)] px-2 py-1 rounded transition-colors">
                          Close
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Execution Panel (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4 bg-[var(--bg-surface)]">
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono flex items-center gap-2">
              <Activity className="w-4 h-4 text-[var(--accent)]" />
              Manual Execution
            </h2>
            
            <div className="space-y-4 pt-2">
              <div>
                <label className="text-xs text-[var(--text-secondary)] font-bold font-mono">Asset</label>
                <select className="w-full mt-1 p-3 rounded-lg bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] font-mono text-sm">
                  <option>BTC/USD</option>
                  <option>NVDA</option>
                  <option>SOL/USD</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button className="py-2 rounded-lg bg-[var(--positive)]/10 text-[var(--positive)] border border-[var(--positive)]/20 font-bold text-sm hover:bg-[var(--positive)] hover:text-white transition-colors">
                  BUY (LONG)
                </button>
                <button className="py-2 rounded-lg bg-[var(--negative)]/10 text-[var(--negative)] border border-[var(--negative)]/20 font-bold text-sm hover:bg-[var(--negative)] hover:text-white transition-colors">
                  SELL (SHORT)
                </button>
              </div>

              <div>
                <label className="text-xs text-[var(--text-secondary)] font-bold font-mono">Order Type</label>
                <div className="flex gap-2 mt-1">
                  <button className="flex-1 py-1.5 rounded-md bg-[var(--accent)] text-white text-xs font-bold font-mono shadow-sm">MARKET</button>
                  <button className="flex-1 py-1.5 rounded-md bg-[var(--bg-recessed)] text-[var(--text-muted)] border border-[var(--border)] text-xs font-bold font-mono hover:text-[var(--text-primary)]">LIMIT</button>
                </div>
              </div>

              <div>
                <label className="text-xs text-[var(--text-secondary)] font-bold font-mono">Size</label>
                <div className="relative mt-1">
                  <input type="number" defaultValue="1" className="w-full p-3 rounded-lg bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] font-mono text-sm pr-12" />
                  <span className="absolute right-3 top-3 text-[var(--text-muted)] font-mono text-sm">BTC</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[var(--bg-recessed)] border border-[var(--border)] space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Est. Value</span>
                  <span className="text-[var(--text-primary)]">$104,284.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Est. Slippage (0.05%)</span>
                  <span className="text-[var(--negative)]">-$52.14</span>
                </div>
                <div className="flex justify-between border-t border-[var(--border)] pt-2">
                  <span className="text-[var(--text-muted)] font-bold">Total Cost</span>
                  <span className="text-[var(--text-primary)] font-bold">$104,336.64</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
