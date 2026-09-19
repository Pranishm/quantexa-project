"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  TrendingUp, 
  FlaskConical, 
  Cpu, 
  ShieldCheck, 
  BookOpen, 
  Trophy, 
  Bot, 
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "Navigation" | "Assets" | "Strategies" | "Actions";
  title: string;
  subtitle?: string;
  href: string;
  icon: any;
}

const COMMANDS: CommandItem[] = [
  // Navigation
  { id: "nav-overview", category: "Navigation", title: "Market X-Ray Overview", subtitle: "Live macro shifts, regime changes & telemetry", href: "/app/overview", icon: Layers },
  { id: "nav-markets", category: "Navigation", title: "Markets & Multi-Asset", subtitle: "Stocks, Crypto, Commodities & Screener", href: "/app/markets", icon: TrendingUp },
  { id: "nav-cross-asset", category: "Navigation", title: "Cross-Asset Correlation Map", subtitle: "BTC ↔ NVDA ↔ GOLD ↔ SOL interactive graph", href: "/app/markets/cross-asset", icon: Sparkles },
  { id: "nav-strategy-lab", category: "Navigation", title: "Strategy Lab", subtitle: "Visual no-code rule builder & AI strategy generation", href: "/app/research/strategy-lab", icon: FlaskConical },
  { id: "nav-backtest", category: "Navigation", title: "Backtest Runner", subtitle: "High-precision walk-forward & next-period simulator", href: "/app/research/backtest", icon: Cpu },
  { id: "nav-autopsy", category: "Navigation", title: "Strategy Autopsy", subtitle: "Regime profit attribution & trade concentration", href: "/app/research/autopsy", icon: ShieldCheck },
  { id: "nav-robustness", category: "Navigation", title: "Robustness Lab", subtitle: "Parameter surface heatmap & sensitivity testing", href: "/app/research/robustness", icon: Cpu },
  { id: "nav-integrity", category: "Navigation", title: "Backtest Integrity Diagnostic", subtitle: "Look-ahead bias, data leakage & 8-point score", href: "/app/research/integrity", icon: ShieldCheck },
  { id: "nav-paper", category: "Navigation", title: "Paper Trading Terminal", subtitle: "$100,000 virtual execution & risk controls", href: "/app/trade/paper", icon: TrendingUp },
  { id: "nav-portfolio", category: "Navigation", title: "Live Portfolio Analytics", subtitle: "Sharpe, Sortino, VaR & asset allocation", href: "/app/trade/portfolio", icon: Layers },
  { id: "nav-learn", category: "Navigation", title: "Quantora Academy & AI Tutor", subtitle: "Structured quant curriculum with interactive quizzes", href: "/app/learn", icon: BookOpen },
  { id: "nav-play", category: "Navigation", title: "Market Scenarios & Arena", subtitle: "Simulated volatility shocks and competitive replay", href: "/app/play", icon: Trophy },
  { id: "nav-copilot", category: "Navigation", title: "Featherless AI Assistant", subtitle: "Structured quantitative reasoning & research tools", href: "/app/assist/copilot", icon: Bot },

  // Assets
  { id: "asset-nvda", category: "Assets", title: "NVIDIA (NVDA)", subtitle: "$124.75 · Semiconductor / AI Hardware Leader", href: "/app/markets/asset/NVDA", icon: TrendingUp },
  { id: "asset-btc", category: "Assets", title: "Bitcoin (BTC/USD)", subtitle: "$64,820 · Digital Store of Value / Macro Crypto", href: "/app/markets/asset/BTC", icon: TrendingUp },
  { id: "asset-sol", category: "Assets", title: "Solana (SOL/USD)", subtitle: "$152.40 · High-Throughput Layer 1 Ecosystem", href: "/app/markets/asset/SOL", icon: TrendingUp },
  { id: "asset-gold", category: "Assets", title: "Gold Spot (XAU/USD)", subtitle: "$2,580.60 · Safe Haven Commodity", href: "/app/markets/asset/GOLD", icon: TrendingUp },

  // Strategies
  { id: "strat-sma", category: "Strategies", title: "SMA 20/50 Trend Following", subtitle: "Canonical trend-following with dynamic risk sizing", href: "/app/research/backtest?strategy=sma", icon: FlaskConical },
  { id: "strat-rsi", category: "Strategies", title: "RSI 30/70 Mean Reversion", subtitle: "Statistical pullback entry during rangebound regimes", href: "/app/research/backtest?strategy=rsi", icon: FlaskConical },
  { id: "strat-vol", category: "Strategies", title: "Volatility Breakout (ATR/Bollinger)", subtitle: "Regime-conditioned breakout expansion strategy", href: "/app/research/backtest?strategy=vol", icon: FlaskConical },

  // Actions
  { id: "act-report", category: "Actions", title: "Generate Research Report Card", subtitle: "Instant shareable PDF/PNG strategy report", href: "/app/research/reports", icon: Sparkles },
  { id: "act-tutor", category: "Actions", title: "Launch AI Quant Tutor", subtitle: "Interactive explanation of Sharpe & Sortino ratios", href: "/app/learn/tutor", icon: BookOpen },
];

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = COMMANDS.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q)) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent, or toggle
        }
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          router.push(filtered[selectedIndex].href);
          onClose();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-2xl bg-[#080B10] border border-[rgba(124,108,255,0.25)] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(124,108,255,0.15)] overflow-hidden z-10 flex flex-col">
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#0C1016]">
          <Search className="w-5 h-5 text-[#7C6CFF] mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search assets (NVDA, BTC, GOLD), strategies, autopsy, regimes..."
            className="w-full bg-transparent text-sm text-[#F5F7FA] placeholder-[#69727E] outline-none"
          />
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#69727E] bg-white/5 px-2 py-0.5 rounded border border-white/10 shrink-0">
            <span>ESC</span>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#69727E]">
              No quantitative models, assets or routes matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[rgba(124,108,255,0.12)] border border-[rgba(124,108,255,0.3)] text-[#F5F7FA]"
                      : "text-[#B7BEC8] hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg ${isSelected ? "bg-[#7C6CFF] text-white" : "bg-white/5 text-[#B7BEC8]"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold tracking-tight text-[#F5F7FA]">{item.title}</span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-white/5 text-[#69727E]">
                          {item.category}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-xs text-[#69727E] truncate mt-0.5">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ml-2 shrink-0 transition-transform ${isSelected ? "text-[#7C6CFF] translate-x-1" : "text-white/20"}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Command Footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#050608] border-t border-white/5 text-[11px] font-mono text-[#69727E]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>esc Close</span>
          </div>
          <span className="text-[10px] text-[#7C6CFF]">QUANTORA Command Matrix</span>
        </div>
      </div>
    </div>
  );
}
