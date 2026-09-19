"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  TrendingUp,
  Sliders,
  Shield,
  Activity,
  Layers,
  FlaskConical,
  BarChart2,
  Maximize2,
  RefreshCw,
  Globe,
  DollarSign,
  PieChart,
  Cpu,
  ArrowUpRight,
  ArrowDownRight,
  Info
} from "lucide-react";
import { QuantoraChart } from "@/components/charts/quantora-chart";


export type AssetKey = "bitcoin" | "solana" | "gold" | "nvidia";

interface AssetConfig {
  key: AssetKey;
  name: string;
  symbol: string;
  ticker: string;
  route: string;
  price: string;
  change: string;
  up: boolean;
  volume24h: string;
  marketCap: string;
  assetClass: string;
  benchmarkSymbol: string;
  tabs: string[];
}

const ASSET_REGISTRY: Record<AssetKey, AssetConfig> = {
  bitcoin: {
    key: "bitcoin",
    name: "BITCOIN",
    symbol: "BTC",
    ticker: "BTC / USD",
    route: "/app/assets/bitcoin",
    price: "$104,284.32",
    change: "+2.41%",
    up: true,
    volume24h: "$48.2B",
    marketCap: "$2.06T",
    assetClass: "Digital Commodity / Crypto",
    benchmarkSymbol: "BTC-USD",
    tabs: ["Price", "Technical", "Risk", "On-Chain", "Research"],
  },
  solana: {
    key: "solana",
    name: "SOLANA",
    symbol: "SOL",
    ticker: "SOL / USD",
    route: "/app/assets/solana",
    price: "$152.40",
    change: "-1.20%",
    up: false,
    volume24h: "$4.15B",
    marketCap: "$71.2B",
    assetClass: "Layer-1 Infrastructure",
    benchmarkSymbol: "SOL-USD",
    tabs: ["Price", "Technical", "Risk", "Network", "Research"],
  },
  gold: {
    key: "gold",
    name: "GOLD",
    symbol: "XAU",
    ticker: "XAU / USD",
    route: "/app/assets/gold",
    price: "$2,580.60",
    change: "+0.65%",
    up: true,
    volume24h: "$32.4B",
    marketCap: "$17.4T",
    assetClass: "Physical Reserve Commodity",
    benchmarkSymbol: "GC=F",
    tabs: ["Price", "Technical", "Risk", "Macro", "Research"],
  },
  nvidia: {
    key: "nvidia",
    name: "NVIDIA",
    symbol: "NVDA",
    ticker: "NVDA",
    route: "/app/assets/nvidia",
    price: "$124.75",
    change: "+3.42%",
    up: true,
    volume24h: "$18.6B",
    marketCap: "$3.07T",
    assetClass: "Semiconductor & AI Compute",
    benchmarkSymbol: "NVDA",
    tabs: ["Price", "Technical", "Fundamental", "Risk", "Research"],
  },
};


export function AssetWorkstation({ assetKey }: { assetKey: AssetKey }) {
  const router = useRouter();
  const asset = ASSET_REGISTRY[assetKey] || ASSET_REGISTRY.bitcoin;

  const [activeTab, setActiveTab] = useState<string>("Price");
  const [hoverData, setHoverData] = useState<{ date: string; price: number } | null>(null);

  // Switch tab if current tab does not exist on target asset
  useEffect(() => {
    if (!asset.tabs.includes(activeTab)) {
      setActiveTab(asset.tabs[0]);
    }
  }, [asset, activeTab]);

  // Map asset key → chart symbol
  const SYMBOL_MAP: Record<AssetKey, "BTC" | "SOL" | "GOLD" | "NVDA"> = {
    bitcoin: "BTC",
    solana: "SOL",
    gold: "GOLD",
    nvidia: "NVDA",
  };
  const chartSymbol = SYMBOL_MAP[assetKey];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1580px] mx-auto transition-opacity duration-300">
      {/* 1. SEAMLESS TOP ASSET SWITCHER BAR */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-1.5 flex items-center justify-between overflow-x-auto no-scrollbar clay-card">
        <div className="flex items-center gap-1 min-w-max">
          {(Object.keys(ASSET_REGISTRY) as AssetKey[]).map((key) => {
            const item = ASSET_REGISTRY[key];
            const isSelected = item.key === assetKey;
            return (
              <Link
                key={key}
                href={item.route}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all clay-interactive ${
                  isSelected
                    ? "bg-[var(--bg-elevated)] text-[var(--text-primary)] clay-recessed border border-[var(--accent)]/40"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-[var(--accent)]" : "bg-[var(--text-muted)]"
                  }`}
                />
                <span className="tracking-wide font-semibold">{item.name}</span>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">({item.symbol})</span>
                <span
                  className={`font-mono text-[10px] ml-1 ${
                    item.up ? "text-[var(--positive)]" : "text-[var(--negative)]"
                  }`}
                >
                  {item.change}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3 text-xs text-[var(--text-muted)] pr-2">
          <span>Benchmark: {asset.benchmarkSymbol}</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span className="font-medium text-[var(--positive)] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]" /> Market Open
          </span>
        </div>
      </div>

      {/* 2. DEDICATED ASSET HEADER & DIRECT STRATEGY ACTION */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 clay-card">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              {asset.name}
            </h1>
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)]">
              {asset.ticker}
            </span>
            <span className="text-[11px] text-[var(--text-muted)] font-medium">
              {asset.assetClass}
            </span>
          </div>

          <div className="flex items-baseline gap-3 mt-2">
            <span className="text-3xl md:text-4xl font-mono font-bold tracking-tight text-[var(--text-primary)]">
              {hoverData ? `$${hoverData.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : asset.price}
            </span>
            <span
              className={`text-sm font-mono font-semibold flex items-center ${
                asset.up ? "text-[var(--positive)]" : "text-[var(--negative)]"
              }`}
            >
              {asset.up ? <ArrowUpRight className="w-4 h-4 mr-0.5" /> : <ArrowDownRight className="w-4 h-4 mr-0.5" />}
              {asset.change}
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              {hoverData ? hoverData.date : "24H Change"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-4 px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-xs clay-recessed-sm">
            <div>
              <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">24H Volume</div>
              <div className="font-mono font-medium text-[var(--text-primary)]">{asset.volume24h}</div>
            </div>
            <div className="h-6 w-px bg-[var(--border)]" />
            <div>
              <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Market Cap</div>
              <div className="font-mono font-medium text-[var(--text-primary)]">{asset.marketCap}</div>
            </div>
          </div>

          {/* Direct Quantitative Engine Connection */}
          <Link
            href={`/app/research/strategy-lab?asset=${asset.symbol}`}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white text-xs font-medium rounded-lg clay-button-primary"
          >
            <FlaskConical className="w-3.5 h-3.5" />
            <span>CREATE STRATEGY</span>
          </Link>
        </div>
      </div>

      {/* 3. TABS BAR */}
      <div className="flex items-center gap-1 border-b border-[var(--border)] pb-2 overflow-x-auto no-scrollbar">
        {asset.tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all clay-interactive ${
              activeTab === tab
                ? "bg-[var(--bg-surface)] text-[var(--accent)] clay-recessed-sm font-semibold"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 4. MAIN WORKSPACE GRID: 70% Chart + 30% Right Structure Rail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Price Chart & Indicators */}
        <div className="lg:col-span-8 space-y-4">
          <div className="clay-card overflow-hidden rounded-xl border border-[var(--border)]">
            {/* QUANTORA Professional Chart Engine */}
            <QuantoraChart
              symbol={chartSymbol}
              showTrades={false}
              height={380}
              defaultTimeframe="1Y"
              defaultMode="CANDLE"
              defaultIndicators={["SMA20", "SMA50", "VOLUME"]}
            />
          </div>

          {/* ASSET-SPECIFIC QUANTITATIVE MODULE */}
          {assetKey === "bitcoin" && (
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card">
              <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                <span>Bitcoin Historical Regimes & Macro Cycle</span>
                <span className="text-[var(--positive)] font-mono">Cycle 4 / Post-Halving Expansion</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Active Addresses</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">1,084,200</div>
                  <div className="text-[10px] text-[var(--positive)] font-mono">+3.8% (30D)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Network Hashrate</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">682 EH/s</div>
                  <div className="text-[10px] text-[var(--positive)] font-mono">All-Time High</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Exchange Netflow</div>
                  <div className="font-mono text-sm text-[var(--positive)] font-bold mt-0.5">-14,280 BTC</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">Net Outflow (Accumulation)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">30D Realized Vol</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">41.8%</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">Below 3Y Mean (58%)</div>
                </div>
              </div>
            </div>
          )}

          {assetKey === "solana" && (
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card">
              <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                <span>Solana High-Throughput Network Metrics</span>
                <span className="text-[var(--accent)] font-mono">TPS 2,840</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Daily DEX Volume</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">$2.41B</div>
                  <div className="text-[10px] text-[var(--positive)] font-mono">+12.4% vs Ethereum</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Active Validators</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">1,482</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">Nakamoto Coeff: 21</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Fee Revenue (24H)</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">$1.84M</div>
                  <div className="text-[10px] text-[var(--positive)] font-mono">Priority fees 68%</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Beta vs Bitcoin</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">1.64</div>
                  <div className="text-[10px] text-[var(--negative)] font-mono">High Elasticity</div>
                </div>
              </div>
            </div>
          )}

          {assetKey === "gold" && (
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card">
              <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                <span>Gold Sovereign Reserves & Macro Sensitivity</span>
                <span className="text-[var(--positive)] font-mono">Central Bank Accumulation</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Gold ↔ BTC Correlation</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">+0.18</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">Low Cross-Asset Coupling</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Gold ↔ Real 10Y Yield</div>
                  <div className="font-mono text-sm text-[var(--negative)] font-bold mt-0.5">-0.68</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">Classical inverse link</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Central Bank Demand</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">1,037 tonnes</div>
                  <div className="text-[10px] text-[var(--positive)] font-mono">Multi-Decade High</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Annualized Volatility</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">14.2%</div>
                  <div className="text-[10px] text-[var(--positive)] font-mono">Lowest in Basket</div>
                </div>
              </div>
            </div>
          )}

          {assetKey === "nvidia" && (
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card">
              <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                <span>NVIDIA Institutional Fundamentals & AI Compute Cycle</span>
                <span className="text-[var(--positive)] font-mono">Data Center Revenue +154% YoY</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Gross Margin (GAAP)</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">75.1%</div>
                  <div className="text-[10px] text-[var(--positive)] font-mono">Blackwell Architecture</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Forward P/E</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">34.8×</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">EPS Estimate $4.10</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Operating Margin</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">62.8%</div>
                  <div className="text-[10px] text-[var(--positive)] font-mono">Elite Capital Return</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                  <div className="text-[10px] text-[var(--text-muted)]">Institutional Ownership</div>
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5">67.4%</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">Overweight Index Weight</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Market Structure & Risk Rails */}
        <div className="lg:col-span-4 space-y-4">
          {/* Market Structure Rail */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-4 space-y-3 clay-card">
            <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              {asset.name} Market Structure
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-[var(--border)]">
                <span className="text-[var(--text-secondary)]">Trend Structure</span>
                <span className="font-mono font-medium text-[var(--positive)]">Bullish Expansion</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[var(--border)]">
                <span className="text-[var(--text-secondary)]">Momentum (14D)</span>
                <span className="font-mono font-medium text-[var(--text-primary)]">+8.42%</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[var(--border)]">
                <span className="text-[var(--text-secondary)]">Current Drawdown</span>
                <span className="font-mono font-medium text-[var(--negative)]">-4.12%</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[var(--border)]">
                <span className="text-[var(--text-secondary)]">Beta vs SPX</span>
                <span className="font-mono font-medium text-[var(--text-primary)]">
                  {assetKey === "bitcoin" ? "1.82" : assetKey === "nvidia" ? "1.74" : assetKey === "gold" ? "0.14" : "2.10"}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-[var(--text-secondary)]">Liquidity Profile</span>
                <span className="font-mono font-medium text-[var(--positive)]">Institutional Grade</span>
              </div>
            </div>
          </div>

          {/* Quantitative Risk Profile */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-4 space-y-3 clay-card">
            <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              Quantitative Risk Metrics
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                <div className="text-[10px] text-[var(--text-muted)]">Sharpe Ratio</div>
                <div className="font-mono text-sm font-bold text-[var(--text-primary)]">1.64</div>
              </div>
              <div className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                <div className="text-[10px] text-[var(--text-muted)]">Sortino Ratio</div>
                <div className="font-mono text-sm font-bold text-[var(--text-primary)]">2.18</div>
              </div>
              <div className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                <div className="text-[10px] text-[var(--text-muted)]">Max Historical DD</div>
                <div className="font-mono text-sm font-bold text-[var(--negative)]">-34.2%</div>
              </div>
              <div className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
                <div className="text-[10px] text-[var(--text-muted)]">VaR (95% 1D)</div>
                <div className="font-mono text-sm font-bold text-[var(--text-primary)]">-2.8%</div>
              </div>
            </div>
          </div>

          {/* Direct Research Pipeline CTA */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-4 text-xs space-y-3 clay-card">
            <div className="flex items-center gap-2 font-medium text-[var(--text-primary)]">
              <FlaskConical className="w-4 h-4 text-[var(--accent)]" />
              <span>Research Pipeline Workflow</span>
            </div>
            <div className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              Feed {asset.name} historical tick data directly into the Quantora algorithmic backtester, stress-test under 6 regime shifts, and verify zero look-ahead bias.
            </div>
            <Link
              href={`/app/research/backtest?asset=${asset.symbol}`}
              className="block text-center py-2 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] border border-[var(--border)] text-[var(--text-primary)] font-medium transition-all clay-interactive"
            >
              Launch Backtest with {asset.symbol} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
