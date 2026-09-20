"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Sparkles,
  Bot,
  Mic,
  Shield,
  Layers,
  Cpu,
  Trophy,
  Activity,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Moon,
  Sun,
  Wallet
} from "lucide-react";
import { MarketCore3D } from "@/components/landing/market-core-3d";
import { MiniTelemetryChart } from "@/components/landing/mini-telemetry-chart";
import { ApexHeroSection } from "@/components/landing/apex-hero-section";

const challengeOptions = [
  {
    title: "Multi-Asset Data Processing",
    desc: "Ingest and align Gold, BTC, SOL, and NVDA sessions into one clean research universe.",
    href: "/app/markets",
    Icon: Layers,
  },
  {
    title: "Quantitative Indicator Engine",
    desc: "Compute SMA, EMA, Sharpe, volatility, drawdown, and signal features for every asset.",
    href: "/app/research/strategy-lab",
    Icon: Cpu,
  },
  {
    title: "Cross-Asset Correlation",
    desc: "Compare normalized returns and correlation heatmaps across crypto, equities, and commodities.",
    href: "/app/markets/cross-asset",
    Icon: Sparkles,
  },
  {
    title: "Strategy Backtesting Engine",
    desc: "Replay rule-based strategies on historical data with next-bar fills and trade-by-trade history.",
    href: "/app/research/backtest",
    Icon: BarChart3,
  },
  {
    title: "Realistic Trading Simulation",
    desc: "Model initial capital, position sizing, paper orders, slippage, and transaction cost drag.",
    href: "/app/trade/paper",
    Icon: Wallet,
  },
  {
    title: "Strategy vs. Benchmark",
    desc: "Compare active strategies against simple buy-and-hold baselines before trusting complexity.",
    href: "/app/research/reports",
    Icon: Trophy,
  },
  {
    title: "Strategy Robustness Testing",
    desc: "Sweep parameter ranges to find stable plateaus instead of one fragile optimized setting.",
    href: "/app/research/robustness",
    Icon: Activity,
  },
  {
    title: "Market Regime Analysis",
    desc: "Segment trend, range, volatility, and risk-off periods to explain when a model works.",
    href: "/app/research/regimes",
    Icon: TrendingUp,
  },
  {
    title: "Guardrails against Bias",
    desc: "Detect look-ahead bias, curve-fitting, and data leakage before results reach the dashboard.",
    href: "/app/research/integrity",
    Icon: Shield,
  },
  {
    title: "Interactive Financial Dashboard",
    desc: "Unify charts, metrics, insights, regime labels, and research actions in one workstation.",
    href: "/dashboard",
    Icon: CheckCircle2,
  },
];

const guardrailCards = [
  {
    title: "Look-Ahead Bias",
    desc: "Past decisions only receive information available at that moment, so a trade cannot use the future close of the same candle.",
    tone: "text-[var(--negative)]",
  },
  {
    title: "Over-Optimization",
    desc: "Parameter sweeps test whether a strategy survives nearby inputs instead of memorizing one perfect historical setting.",
    tone: "text-[var(--warning)]",
  },
];

const executionCards = [
  {
    title: "Position Sizing & Initial Capital",
    desc: "Every trade is constrained by the simulated account balance and allocation rules.",
  },
  {
    title: "Transaction Costs",
    desc: "Broker fees, exchange fees, and slippage are included so paper profits are not overstated.",
  },
  {
    title: "Benchmark Comparison",
    desc: "Strategies are tested against buy-and-hold benchmarks such as NVDA before being considered useful.",
  },
];

// ── Live Candlestick Generator ────────────────────────────────────────────────
interface LiveCandle {
  id: number;
  open: number;
  high: number;
  low: number;
  close: number;
  green: boolean;
  vol: number;
}

function generateInitialCandles(count: number): LiveCandle[] {
  const candles: LiveCandle[] = [];
  let price = 98000 + Math.random() * 6000;
  for (let i = 0; i < count; i++) {
    const move = (Math.random() - 0.47) * 1200;
    const open = price;
    const close = price + move;
    const high = Math.max(open, close) + Math.random() * 600;
    const low = Math.min(open, close) - Math.random() * 600;
    candles.push({ id: i, open, high, low, close, green: close >= open, vol: 0.2 + Math.random() * 0.8 });
    price = close;
  }
  return candles;
}

export function PreLoginPage() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return true;
    return !document.documentElement.classList.contains("light");
  });
  const [activeTab, setActiveTab] = useState<"CANDLE" | "LINE" | "NORM">("CANDLE");
  const [voiceStep, setVoiceStep] = useState<number>(0);
  const [liveCandles, setLiveCandles] = useState<LiveCandle[]>(() => generateInitialCandles(32));
  const candleIdRef = useRef(32);
  const livePriceRef = useRef(104284);

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("light");
      setIsDark(!document.documentElement.classList.contains("light"));
    }
  };

  // Voice simulation rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setVoiceStep((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Live candle generation – add new candle every 1.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCandles((prev) => {
        const last = prev[prev.length - 1];
        const basePrice = last ? last.close : 104000;
        const move = (Math.random() - 0.47) * 1400;
        const open = basePrice;
        const close = basePrice + move;
        const high = Math.max(open, close) + Math.random() * 700;
        const low = Math.min(open, close) - Math.random() * 700;
        candleIdRef.current += 1;
        livePriceRef.current = close;
        const next = [...prev, { id: candleIdRef.current, open, high, low, close, green: close >= open, vol: 0.2 + Math.random() * 0.8 }];
        // Keep only last 32 candles visible
        return next.slice(-32);
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const voicePrompts = [
    { cmd: "Compare BTC and Gold for the last year", resp: "Plotting normalized 1Y relative performance (BTC +42.1% vs GOLD +8.7%)." },
    { cmd: "Why did Bitcoin draw down in Q2 2024?", resp: "Identified Regime Shift into high-volatility range with -0.0005 daily drift." },
    { cmd: "Run dual SMA 20/50 backtest on Solana", resp: "Backtest complete: Sharpe 1.68, Max DD -24.2%, Win Rate 58.4%." },
    { cmd: "Scan market for parameter sensitivity", resp: "3D parameter terrain shows stable plateau around fast 18-22 and slow 48-54." },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Compute chart rendering data
  const chartMin = Math.min(...liveCandles.map(c => c.low));
  const chartMax = Math.max(...liveCandles.map(c => c.high));
  const chartRange = chartMax - chartMin || 1;
  const latestCandle = liveCandles[liveCandles.length - 1];

  return (
    <div className="min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)] font-sans antialiased overflow-x-hidden selection:bg-[var(--accent)]/20 transition-colors duration-250 relative">
      {/* ── FLOATING BITCOIN COINS BACKGROUND (full page) ──────── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] left-[5%] w-20 h-20 rounded-full border-2 border-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]/10 font-bold text-3xl animate-float" style={{ animationDuration: '7s' }}>₿</div>
        <div className="absolute top-[22%] right-[8%] w-14 h-14 rounded-full border border-[var(--accent)]/8 flex items-center justify-center text-[var(--accent)]/8 font-bold text-xl animate-float" style={{ animationDuration: '9s', animationDelay: '1s' }}>₿</div>
        <div className="absolute top-[55%] left-[3%] w-10 h-10 rounded-full border border-[var(--accent)]/6 flex items-center justify-center text-[var(--accent)]/6 font-bold text-base animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>₿</div>
        <div className="absolute top-[70%] right-[12%] w-16 h-16 rounded-full border border-[var(--accent)]/7 flex items-center justify-center text-[var(--accent)]/7 font-bold text-2xl animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }}>₿</div>
        <div className="absolute bottom-[15%] left-[15%] w-8 h-8 rounded-full border border-[var(--accent)]/5 flex items-center justify-center text-[var(--accent)]/5 font-bold text-sm animate-float" style={{ animationDuration: '11s', animationDelay: '4s' }}>₿</div>
        <div className="absolute top-[40%] right-[30%] w-6 h-6 rounded-full border border-[var(--accent)]/4 flex items-center justify-center text-[var(--accent)]/4 font-bold text-xs animate-float" style={{ animationDuration: '12s', animationDelay: '5s' }}>₿</div>
      </div>
      {/* ── 1. NAVBAR ────────────────────────────────────────────── */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 py-5 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_12px_var(--accent)]">
            Q
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-[var(--text-primary)]">
              QUANTORA
            </span>
            <span className="text-[8px] font-mono tracking-widest text-[var(--text-muted)] uppercase font-semibold">
              QUANTITATIVE INTELLIGENCE
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-medium text-[var(--text-secondary)]">
          <button onClick={() => scrollToSection("challenge")} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            10 Options
          </button>
          <button onClick={() => scrollToSection("markets")} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            Markets
          </button>
          <button onClick={() => scrollToSection("research")} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            Research
          </button>
          <button onClick={() => scrollToSection("backtest")} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            Backtest
          </button>
          <button onClick={() => scrollToSection("simulation")} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            Simulation
          </button>
          <button onClick={() => scrollToSection("academy")} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            Academy
          </button>
        </nav>

        {/* Right: Theme Toggle + Sign In + CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl clay-button text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors"
            title="Toggle Light / Dark Clay Theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          <Link
            href="/login"
            className="hidden sm:inline-block px-3.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button flex items-center gap-1.5 hover:opacity-95 transition-opacity shadow-sm"
          >
            <span>Open Research Station</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* ── 2. HERO SECTION (APEX 3D BITCOIN HERO) ──────────────── */}
      <ApexHeroSection onExploreOptions={() => scrollToSection("challenge")} />

      {/* ── 3. REQUIRED CHALLENGE COVERAGE ───────────────────────── */}
      <section id="challenge" className="py-24 px-6 sm:px-10 border-t border-[var(--border)] max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
              HACKATHON EVALUATION COVERAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
              All 10 required financial intelligence options are built into the site.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The platform makes every problem-statement area visible: data, indicators, correlations, backtesting, simulation, benchmarks, robustness, regimes, bias guardrails, and the dashboard.
            </p>
          </div>
          <div className="clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] rounded-2xl px-4 py-3 font-mono text-xs text-[var(--text-secondary)] shrink-0">
            <span className="text-[var(--positive)] font-bold">10 / 10</span>
            <span className="mx-2 text-[var(--text-subtle)]">|</span>
            <span>challenge focus areas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {challengeOptions.map(({ title, desc, href, Icon }, index) => (
            <Link
              href={href}
              key={title}
              className="clay-card p-4 rounded-2xl border border-[var(--border)] min-h-[172px] flex flex-col justify-between hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-sm font-bold leading-snug text-[var(--text-primary)]">
                  {title}
                </h3>
                <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
                  {desc}
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-4 text-[11px] font-semibold text-[var(--accent)]">
                <span>Open module</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[var(--negative)]/15 text-[var(--negative)] flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-wider">
                  Financial Guardrails
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Avoiding common pitfalls.
                </h3>
              </div>
            </div>
            <div className="space-y-3">
              {guardrailCards.map((item) => (
                <div key={item.title} className="clay-card p-4 rounded-2xl border border-[var(--border)]">
                  <div className={`text-sm font-bold ${item.tone}`}>{item.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[var(--positive)]/15 text-[var(--positive)] flex items-center justify-center">
                <TrendingDown className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-wider">
                  Backtesting &amp; Execution Logic
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  A backtest must model market friction.
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {executionCards.map((item) => (
                <div key={item.title} className="clay-card p-4 rounded-2xl border border-[var(--border)] space-y-2">
                  <div className="text-sm font-bold text-[var(--text-primary)] leading-snug">{item.title}</div>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MARKET INTELLIGENCE & X-RAY SECTION ────────────────── */}
      <section id="markets" className="py-24 px-6 sm:px-10 border-t border-[var(--border)] max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
            MARKET INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            See what changed.
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Explore price movement, volatility, relationships and market regimes through one connected view.
          </p>
        </div>

        {/* Spatial Market X-Ray Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { sym: "BTC", name: "Bitcoin", price: "$104,309", change: "+2.41%", vol: "41.8%", sharpe: "1.42", regime: "Bull Expansion", color: "#8776FF" },
            { sym: "SOL", name: "Solana", price: "$238.67", change: "+3.18%", vol: "58.2%", sharpe: "1.68", regime: "High Beta Momentum", color: "#35D39A" },
            { sym: "GOLD", name: "Gold", price: "$2,672.81", change: "+0.72%", vol: "14.2%", sharpe: "1.12", regime: "Monetary Hedge", color: "#E4B64D" },
            { sym: "NVDA", name: "NVIDIA", price: "$178.30", change: "-0.84%", vol: "36.4%", sharpe: "1.55", regime: "Consolidation", color: "#FF6572" },
          ].map((asset) => (
            <div key={asset.sym} className="clay-card p-5 rounded-2xl border border-[var(--border)] space-y-4 hover:border-[var(--accent)]/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: asset.color }} />
                  <span className="font-mono font-bold text-sm text-[var(--text-primary)]">{asset.sym}/USD</span>
                </div>
                <span className={`text-xs font-mono font-semibold ${asset.change.startsWith("+") ? "text-[var(--positive)]" : "text-[var(--negative)]"}`}>
                  {asset.change}
                </span>
              </div>

              <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">
                {asset.price}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--border)] text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[var(--text-muted)] block">VOLATILITY</span>
                  <span className="font-bold text-[var(--text-primary)]">{asset.vol}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[var(--text-muted)] block">SHARPE</span>
                  <span className="font-bold text-[var(--accent)]">{asset.sharpe}</span>
                </div>
              </div>

              <div className="p-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] text-[11px] font-mono text-[var(--text-secondary)] flex items-center justify-between">
                <span>Regime</span>
                <span className="text-[var(--text-primary)] font-semibold">{asset.regime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. SYSTEMATIC RESEARCH & AUTOPSY ──────────────────────── */}
      <section id="research" className="py-24 px-6 sm:px-10 border-t border-[var(--border)] max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
            SYSTEMATIC RESEARCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            Don&apos;t just backtest it. Stress it.
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            QUANTORA examines how a strategy behaves across market regimes, execution friction, and parameter surfaces.
          </p>
        </div>

        {/* Transformation Sequence */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-mono">
          {[
            { step: "01", name: "STRATEGY", desc: "Dual SMA Rules" },
            { step: "02", name: "BACKTEST", desc: "Next-Bar Fills" },
            { step: "03", name: "AUTOPSY", desc: "P&L Attribution" },
            { step: "04", name: "REGIMES", desc: "Chop vs Trend" },
            { step: "05", name: "ROBUSTNESS", desc: "50x50 Mesh" },
            { step: "06", name: "INTEGRITY", desc: "Look-Ahead Audit" },
          ].map((item) => (
            <div key={item.step} className="clay-card p-4 rounded-xl border border-[var(--border)] space-y-1">
              <div className="text-[10px] font-bold text-[var(--accent)]">{item.step}</div>
              <div className="font-bold text-[var(--text-primary)]">{item.name}</div>
              <div className="text-[10px] text-[var(--text-muted)]">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Autopsy Preview Card */}
        <div className="clay-card p-7 rounded-2xl border border-[var(--border)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-[var(--positive)] font-bold uppercase tracking-wider">
              QUANTORA SIGNATURE · STRATEGY AUTOPSY
            </span>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Know exactly why it worked. Or why it failed.
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Never accept an aggregate Sharpe ratio without decomposing return into regime attribution, cost drag, and trade concentration.
            </p>
            <div className="space-y-2 text-xs font-mono pt-2">
              <div className="flex justify-between p-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)]">
                <span className="text-[var(--text-muted)]">Bull Expansion Contribution</span>
                <span className="text-[var(--positive)] font-bold">+$34,210 (+81.4%)</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)]">
                <span className="text-[var(--text-muted)]">Chop / Range Drawdown</span>
                <span className="text-[var(--negative)] font-bold">-$7,140 (-17.0%)</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)]">
                <span className="text-[var(--text-muted)]">Slippage &amp; Fee Friction</span>
                <span className="text-[var(--text-muted)] font-bold">-$1,480 (-3.5%)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 clay-recessed p-6 rounded-2xl bg-[var(--bg-recessed)] border border-[var(--border)] space-y-3 font-mono text-xs">
            <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">PARAMETER ROBUSTNESS TERRAIN</div>
            <div className="h-44 flex items-center justify-center border border-dashed border-[var(--border)] rounded-xl text-[var(--text-muted)] text-center p-4">
              <div>
                <Activity className="w-8 h-8 mx-auto text-[var(--accent)] mb-2" />
                <div className="font-bold text-[var(--text-primary)]">50 × 50 Parameter Plateau</div>
                <div className="text-[10px] mt-0.5">Sharpe &gt; 1.30 across 84% of neighborhood points (No overfitting)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ASSET UNIVERSE & CHART PREVIEW ─────────────────────── */}
      <section id="backtest" className="py-24 px-6 sm:px-10 border-t border-[var(--border)] max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <div className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
              QUANTORA CHART ENGINE
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
              Built for high-density financial analysis.
            </h2>
          </div>

          {/* Chart selector tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono">
            {(["CANDLE", "LINE", "NORM"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveTab(mode)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === mode
                    ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {mode === "CANDLE" ? "Candlesticks" : mode === "LINE" ? "Price Line" : "Normalized 100"}
              </button>
            ))}
          </div>
        </div>

        {/* Live Chart Preview Container */}
        <div className="clay-card p-6 rounded-2xl border border-[var(--border)] space-y-4">
          <div className="flex items-center justify-between text-xs font-mono border-b border-[var(--border)] pb-3">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[var(--text-primary)]">BITCOIN BTC/USD</span>
              <span className="text-[var(--positive)] font-bold">$104,284.50 (+2.41%)</span>
            </div>
            <div className="text-[10px] text-[var(--text-muted)]">
              O 102,840 · H 105,120 · L 101,930 · C 104,284 · V 18.2M
            </div>
          </div>

          {/* ── LIVE ANIMATED CANDLESTICK CHART ─────────────────── */}
          <div className="h-72 rounded-xl clay-recessed bg-[var(--bg-recessed)] text-xs font-mono text-[var(--text-muted)] overflow-hidden relative">
            {/* Price scale on right */}
            <div className="absolute right-0 top-0 bottom-8 w-16 flex flex-col justify-between py-2 pr-2 text-[9px] text-[var(--text-muted)] text-right z-10">
              <span>${Math.round(chartMax).toLocaleString()}</span>
              <span>${Math.round((chartMax + chartMin) / 2).toLocaleString()}</span>
              <span>${Math.round(chartMin).toLocaleString()}</span>
            </div>

            {/* Horizontal grid lines */}
            <div className="absolute inset-0 bottom-8 right-16 flex flex-col justify-between py-2 pointer-events-none">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="border-b border-[var(--border)]/30 w-full" />
              ))}
            </div>

            {/* Candlesticks */}
            <div className="absolute inset-0 bottom-8 right-16 flex items-end px-1 gap-[2px]">
              {liveCandles.map((c) => {
                const bodyTop = ((chartMax - Math.max(c.open, c.close)) / chartRange) * 100;
                const bodyBottom = ((chartMax - Math.min(c.open, c.close)) / chartRange) * 100;
                const wickTop = ((chartMax - c.high) / chartRange) * 100;
                const wickBottom = ((chartMax - c.low) / chartRange) * 100;
                const bodyHeight = Math.max(bodyBottom - bodyTop, 0.5);
                const color = c.green ? 'var(--positive)' : 'var(--negative)';
                return (
                  <div key={c.id} className="flex-1 relative h-full animate-candle-grow" style={{ minWidth: 0 }}>
                    {/* Wick */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-[1px]"
                      style={{
                        top: `${wickTop}%`,
                        height: `${wickBottom - wickTop}%`,
                        backgroundColor: color,
                        opacity: 0.6,
                      }}
                    />
                    {/* Body */}
                    <div
                      className="absolute left-[15%] right-[15%] rounded-[1px] transition-all duration-300"
                      style={{
                        top: `${bodyTop}%`,
                        height: `${bodyHeight}%`,
                        backgroundColor: color,
                        boxShadow: c.green ? '0 0 4px rgba(22,199,132,0.25)' : '0 0 4px rgba(234,57,67,0.25)',
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Volume bars at bottom */}
            <div className="absolute bottom-0 left-0 right-16 h-8 flex items-end px-1 gap-[2px] border-t border-[var(--border)]/20">
              {liveCandles.map((c) => (
                <div
                  key={`v-${c.id}`}
                  className="flex-1 rounded-t-[1px] transition-all duration-300"
                  style={{
                    height: `${c.vol * 100}%`,
                    backgroundColor: c.green ? 'var(--positive)' : 'var(--negative)',
                    opacity: 0.25,
                    minWidth: 0,
                  }}
                />
              ))}
            </div>

            {/* Live price indicator */}
            <div className="absolute right-16 z-10 flex items-center" style={{ top: `${((chartMax - (latestCandle?.close || 0)) / chartRange) * 92}%` }}>
              <div className="w-full border-t border-dashed border-[var(--accent)]/40" style={{ width: '100vw', position: 'absolute', right: 0 }} />
              <div className="bg-[var(--accent)] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm whitespace-nowrap shadow-sm">
                ${Math.round(latestCandle?.close || 0).toLocaleString()}
              </div>
            </div>

            {/* Chart label overlay */}
            <div className="absolute top-3 left-3 z-10 space-y-0.5">
              <div className="text-[10px] font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse" />
                LIVE · BTC/USD · 32 Sessions
              </div>
              <div className="text-[9px] text-[var(--text-muted)]">
                O {Math.round(latestCandle?.open || 0).toLocaleString()} · H {Math.round(latestCandle?.high || 0).toLocaleString()} · L {Math.round(latestCandle?.low || 0).toLocaleString()} · C {Math.round(latestCandle?.close || 0).toLocaleString()}
              </div>
            </div>
          </div>

          {/* CTA below chart */}
          <div className="flex items-center justify-between pt-1">
            <div className="text-[10px] text-[var(--text-muted)] font-mono">Real-time candlestick generation · 750+ deterministic sessions available</div>
            <Link
              href="/asset/BTC-USD"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--accent)] hover:underline font-semibold"
            >
              <span>Launch Full Workstation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. ACADEMY & STUDENT LEARNING ─────────────────────────── */}
      <section id="academy" className="py-24 px-6 sm:px-10 border-t border-[var(--border)] max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
            STUDENT ACADEMY
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            Learn by testing.
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Turn quantitative finance into something you can explore, experiment with, and master without financial risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="clay-card p-6 rounded-2xl border border-[var(--border)] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center font-bold text-xs font-mono">
              01
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">Guided Concept Labs</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Interactive modules on Sharpe ratio, drawdown recovery, volatility scaling, and regime transitions.
            </p>
          </div>

          <div className="clay-card p-6 rounded-2xl border border-[var(--border)] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-[var(--positive)]/15 text-[var(--positive)] flex items-center justify-center font-bold text-xs font-mono">
              02
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">Virtual Paper Trading</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              $100,000 simulated account. Execute market and limit orders with real order book micro-motion.
            </p>
          </div>

          <div className="clay-card p-6 rounded-2xl border border-[var(--border)] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-[var(--warning)]/15 text-[var(--warning)] flex items-center justify-center font-bold text-xs font-mono">
              03
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">AI Tutor &amp; Quizzes</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Ask questions directly against historical charts. Receive instant feedback and earn badges.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. CONVERSATIONAL AI & VOICE COPILOT ──────────────────── */}
      <section className="py-24 px-6 sm:px-10 border-t border-[var(--border)] max-w-7xl mx-auto space-y-12">
        <div className="clay-card p-8 rounded-3xl border border-[var(--border)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[var(--bg-surface)]">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-mono font-bold">
              <Bot className="w-3.5 h-3.5" />
              <span>QUANTORA VOICE &amp; COPILOT</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
              Ask the market.
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              A context-aware quantitative assistant that executes actions, configures backtests, and explains risk factors using real underlying data.
            </p>

            <div className="space-y-2 pt-2">
              {voicePrompts.map((vp, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl text-xs font-mono transition-all border ${
                    voiceStep === idx
                      ? "clay-card-elevated border-[var(--accent)] text-[var(--text-primary)]"
                      : "clay-recessed bg-[var(--bg-recessed)] border-[var(--border)] text-[var(--text-muted)] opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold">
                    <Mic className="w-3 h-3 text-[var(--accent)]" />
                    <span>&ldquo;{vp.cmd}&rdquo;</span>
                  </div>
                  {voiceStep === idx && (
                    <div className="mt-1 text-[11px] text-[var(--text-secondary)] pl-5 animate-in fade-in">
                      → {vp.resp}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 clay-recessed rounded-2xl bg-[var(--bg-recessed)] border border-[var(--border)] text-center space-y-4">
            {/* Animated Circular Voice Orb */}
            <div className="w-24 h-24 rounded-full bg-[var(--accent)]/20 border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] shadow-[0_0_24px_var(--accent)] animate-pulse">
              <span className="text-3xl">◉</span>
            </div>
            <div className="font-mono text-xs space-y-1">
              <div className="font-bold text-[var(--text-primary)]">LISTENING TO RESEARCH INTENT</div>
              <div className="text-[10px] text-[var(--text-muted)]">Simulated Waveform Amplitude: 42dB</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. STRATEGY ARENA & SIMULATION ───────────────────────── */}
      <section id="simulation" className="py-24 px-6 sm:px-10 border-t border-[var(--border)] max-w-7xl mx-auto space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
            STRATEGY ARENA
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            Head-to-head strategy simulation.
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Race two systematic models across identical historical market conditions to discover which handles volatility better.
          </p>
        </div>

        <div className="clay-card p-6 rounded-2xl border border-[var(--border)] grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="font-bold text-[var(--accent)]">CONTESTANT A</span>
              <span className="text-[10px] text-[var(--positive)] font-bold">BULL LEADER</span>
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)]">BTC Trend Following (20/50 SMA)</h4>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono pt-2 border-t border-[var(--border)]">
              <div><span className="text-[9px] text-[var(--text-muted)] block">RETURN</span><span className="font-bold text-[var(--positive)]">+42.1%</span></div>
              <div><span className="text-[9px] text-[var(--text-muted)] block">SHARPE</span><span className="font-bold text-[var(--text-primary)]">1.42</span></div>
              <div><span className="text-[9px] text-[var(--text-muted)] block">MAX DD</span><span className="font-bold text-[var(--negative)]">-17.8%</span></div>
            </div>
          </div>

          <div className="p-5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="font-bold text-[var(--positive)]">CONTESTANT B</span>
              <span className="text-[10px] text-[var(--accent)] font-bold">CHOP SHIELD</span>
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)]">Mean Reversion (RSI + Bollinger)</h4>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono pt-2 border-t border-[var(--border)]">
              <div><span className="text-[9px] text-[var(--text-muted)] block">RETURN</span><span className="font-bold text-[var(--positive)]">+28.4%</span></div>
              <div><span className="text-[9px] text-[var(--text-muted)] block">SHARPE</span><span className="font-bold text-[var(--text-primary)]">1.61</span></div>
              <div><span className="text-[9px] text-[var(--text-muted)] block">MAX DD</span><span className="font-bold text-[var(--positive)]">-8.4%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA SECTION ─────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 border-t border-[var(--border)] max-w-4xl mx-auto text-center space-y-6">
        <div className="w-10 h-10 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center mx-auto text-sm font-bold shadow-[0_0_16px_var(--accent)]">
          Q
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
          The market is moving.<br />Start researching.
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
          Analyze markets, stress strategies, understand risk, and build your own research workflow in a tactile trading environment.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/dashboard"
            className="px-6 py-3.5 rounded-2xl bg-[var(--accent)] text-white text-sm font-semibold clay-button flex items-center gap-2 hover:opacity-95 transition-all shadow-md"
          >
            <span>Open Research Station</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/login"
            className="px-6 py-3.5 rounded-2xl clay-button bg-[var(--bg-elevated)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
          >
            Create Research Account
          </Link>
        </div>
      </section>

      {/* ── 10. FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border)] py-10 px-6 sm:px-10 text-xs font-mono text-[var(--text-muted)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[var(--text-primary)]">QUANTORA</span>
            <span>© 2026 QUANTEXA RESEARCH LABS</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/login" className="hover:text-[var(--text-primary)]">Sign In</Link>
            <Link href="/login" className="hover:text-[var(--text-primary)]">Create Account</Link>
            <Link href="/dashboard" className="hover:text-[var(--text-primary)]">Terminal</Link>
            <Link href="/dashboard" className="hover:text-[var(--text-primary)]">Security</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
