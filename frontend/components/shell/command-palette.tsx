"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  TrendingUp,
  FlaskConical,
  Cpu,
  Layers,
  Network,
  ShieldCheck,
  Sliders,
  ArrowRight,
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "Navigation" | "Assets" | "Strategies";
  title: string;
  subtitle?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const COMMANDS: CommandItem[] = [
  // Navigation
  { id: "nav-overview", category: "Navigation", title: "Dashboard Overview", subtitle: "Multi-asset metrics, insights and price trends", href: "/dashboard", icon: Layers },
  { id: "nav-correlations", category: "Navigation", title: "Correlation Matrix", subtitle: "Cross-asset correlation heatmap and rolling windows", href: "/correlations", icon: Network },
  { id: "nav-backtest", category: "Navigation", title: "Backtest Studio", subtitle: "Next-bar backtesting with costs, sizing and bias audit", href: "/backtest", icon: Cpu },
  { id: "nav-lab", category: "Navigation", title: "Strategy Lab", subtitle: "Strategies, robustness sweeps and market regimes", href: "/lab", icon: FlaskConical },
  { id: "nav-montecarlo", category: "Navigation", title: "Monte Carlo", subtitle: "Block-bootstrap confidence intervals on equity paths", href: "/montecarlo", icon: Layers },
  { id: "nav-portfolio", category: "Navigation", title: "Portfolio Simulator", subtitle: "Weights, rebalancing rules and portfolio equity curve", href: "/portfolio", icon: Sliders },
  { id: "nav-report", category: "Navigation", title: "Research Report", subtitle: "Generated quantitative summary and disclaimer", href: "/report", icon: ShieldCheck },

  // Assets
  { id: "asset-btc", category: "Assets", title: "Bitcoin (BTC-USD)", subtitle: "Crypto · daily bars · 365 periods/year", href: "/asset/BTC-USD", icon: TrendingUp },
  { id: "asset-gold", category: "Assets", title: "Gold (GC=F)", subtitle: "Commodity · daily bars · 252 periods/year", href: "/asset/GC%3DF", icon: TrendingUp },
  { id: "asset-nvda", category: "Assets", title: "NVIDIA (NVDA)", subtitle: "Equity · daily bars · 252 periods/year", href: "/asset/NVDA", icon: TrendingUp },

  // Strategies
  { id: "strat-sma", category: "Strategies", title: "SMA Crossover", subtitle: "Dual moving-average trend following", href: "/backtest?strategy=sma_cross", icon: FlaskConical },
  { id: "strat-ema", category: "Strategies", title: "EMA Trend", subtitle: "Exponential moving-average trend filter", href: "/backtest?strategy=ema_trend", icon: FlaskConical },
  { id: "strat-momentum", category: "Strategies", title: "Momentum", subtitle: "Lookback return momentum entry", href: "/backtest?strategy=momentum", icon: FlaskConical },
  { id: "strat-meanrev", category: "Strategies", title: "Mean Reversion", subtitle: "RSI-based pullback entry", href: "/backtest?strategy=mean_reversion", icon: FlaskConical },
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

      <div className="relative w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10 flex flex-col">
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border)]">
          <Search className="w-5 h-5 text-[var(--accent)] mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search assets (BTC, GOLD, NVDA), strategies, tools..."
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none"
          />
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-elevated)] px-2 py-0.5 rounded border border-[var(--border)] shrink-0">
            <span>ESC</span>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[var(--border)]/50">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-[var(--text-muted)]">
              No assets, strategies or tools matching &ldquo;{query}&rdquo;
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
                      ? "bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg ${isSelected ? "bg-[var(--accent)] text-white" : "bg-[var(--bg-elevated)] text-[var(--text-secondary)]"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">{item.title}</span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)]">
                          {item.category}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-xs text-[var(--text-muted)] truncate mt-0.5">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ml-2 shrink-0 transition-transform ${isSelected ? "text-[var(--accent)] translate-x-1" : "text-[var(--text-muted)]/40"}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Command Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>esc Close</span>
          </div>
          <span className="text-[10px] text-[var(--accent)]">QUANTORAX Command Palette</span>
        </div>
      </div>
    </div>
  );
}
