/**
 * QUANTORA DETERMINISTIC DEMO DATA ENGINE
 * Seed: QUANTORA_DEMO_2026
 * 
 * Provides a single, internally consistent, mathematically coherent data universe
 * across all pages, charts, backtests, autopsy, regimes, and AI Copilot reasoning.
 */

export interface AssetRecord {
  symbol: string;
  name: string;
  assetClass: "Crypto" | "Commodity" | "Equity";
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  volatility: string;
  sharpe: number;
  maxDrawdown: number;
  regime: string;
  trend: "Trending" | "Bullish" | "Pullback" | "Mean-Reverting";
  lastUpdated: string;
  sparkline: number[];
  basePrice: number;
}

export interface CorrelationEdge {
  source: string;
  target: string;
  correlation: number;
  strength: "strong" | "moderate" | "weak";
  sentiment: "positive" | "neutral" | "inverse";
  description: string;
}

export interface BacktestResult {
  strategyName: string;
  asset: string;
  timeframe: string;
  initialCapital: number;
  finalEquity: number;
  totalReturn: number;
  cagr: number;
  sharpe: number;
  sortino: number;
  maxDrawdown: number;
  winRate: number;
  profitFactor: number;
  tradeCount: number;
  totalFees: number;
  totalSlippage: number;
  equityCurve: { date: string; equity: number; benchmark: number; drawdown: number }[];
  autopsy: {
    regimeAttribution: { regime: string; pctProfit: number; note: string }[];
    profitConcentration: { top5TradesPct: number; remainingTradesPct: number; bestTradeProfit: string };
    costImpact: { grossReturn: number; afterFees: number; afterSlippage: number; bpsDeduction: number };
  };
}

export interface RegimeSlice {
  year: string;
  period: string;
  regime: "BEAR / HIGH VOL" | "RECOVERY" | "BULL / LOW VOL" | "BULL / HIGH VOL" | "TRANSITION";
  durationDays: number;
  strategyReturn: number;
  winRate: number;
  maxDrawdown: number;
  color: string;
  description: string;
}

export interface RobustnessPoint {
  fastSma: number;
  slowSma: number;
  sharpe: number;
  totalReturn: number;
  maxDrawdown: number;
  stabilityScore: number;
}

// -------------------------------------------------------------
// 1. CORE UNIVERSE
// -------------------------------------------------------------
export const DEMO_ASSETS: Record<string, AssetRecord> = {
  BTC: {
    symbol: "BTC",
    name: "Bitcoin",
    assetClass: "Crypto",
    price: 104284.50,
    basePrice: 104284.50,
    change: 2456.20,
    changePercent: 2.41,
    volume: "$48.2B",
    marketCap: "$2.05T",
    volatility: "41.8%",
    sharpe: 1.42,
    maxDrawdown: -18.3,
    regime: "Trending",
    trend: "Trending",
    lastUpdated: "Just now",
    sparkline: [96200, 97400, 99100, 98200, 101400, 102900, 104284],
  },
  GOLD: {
    symbol: "GOLD",
    name: "Gold Futures",
    assetClass: "Commodity",
    price: 2672.40,
    basePrice: 2672.40,
    change: 19.10,
    changePercent: 0.72,
    volume: "$18.4B",
    marketCap: "$17.4T",
    volatility: "14.2%",
    sharpe: 1.08,
    maxDrawdown: -8.6,
    regime: "Low Volatility",
    trend: "Bullish",
    lastUpdated: "Just now",
    sparkline: [2590, 2610, 2635, 2620, 2650, 2664, 2672],
  },
  SOL: {
    symbol: "SOL",
    name: "Solana",
    assetClass: "Crypto",
    price: 238.60,
    basePrice: 238.60,
    change: 7.35,
    changePercent: 3.18,
    volume: "$8.9B",
    marketCap: "$114.2B",
    volatility: "64.2%",
    sharpe: 1.22,
    maxDrawdown: -28.4,
    regime: "Expansion",
    trend: "Trending",
    lastUpdated: "Just now",
    sparkline: [214, 218, 225, 220, 231, 234, 238],
  },
  NVDA: {
    symbol: "NVDA",
    name: "NVIDIA Corp",
    assetClass: "Equity",
    price: 178.25,
    basePrice: 178.25,
    change: -1.50,
    changePercent: -0.84,
    volume: "$34.1B",
    marketCap: "$3.42T",
    volatility: "48.1%",
    sharpe: 1.35,
    maxDrawdown: -22.4,
    regime: "Pullback",
    trend: "Pullback",
    lastUpdated: "Just now",
    sparkline: [184, 186, 189, 182, 180, 179, 178],
  },
};

// -------------------------------------------------------------
// 2. CROSS-ASSET CORRELATION MATRIX (BY TIMEFRAME)
// -------------------------------------------------------------
export const CORRELATION_MATRICES: Record<string, CorrelationEdge[]> = {
  "1M": [
    { source: "BTC", target: "SOL", correlation: 0.82, strength: "strong", sentiment: "positive", description: "High digital asset liquidity coupling" },
    { source: "BTC", target: "NVDA", correlation: 0.54, strength: "moderate", sentiment: "positive", description: "Tech beta & risk-on equity factor" },
    { source: "BTC", target: "GOLD", correlation: 0.18, strength: "weak", sentiment: "neutral", description: "Monetary debasement hedge overlap" },
    { source: "SOL", target: "NVDA", correlation: 0.49, strength: "moderate", sentiment: "positive", description: "High-beta growth basket affinity" },
    { source: "SOL", target: "GOLD", correlation: 0.08, strength: "weak", sentiment: "neutral", description: "Virtually orthogonal price action" },
    { source: "GOLD", target: "NVDA", correlation: -0.28, strength: "moderate", sentiment: "inverse", description: "Real rates & equity duration divergence" },
  ],
  "3M": [
    { source: "BTC", target: "SOL", correlation: 0.79, strength: "strong", sentiment: "positive", description: "Broad digital sector correlation" },
    { source: "BTC", target: "NVDA", correlation: 0.61, strength: "strong", sentiment: "positive", description: "AI & compute infrastructure sentiment" },
    { source: "BTC", target: "GOLD", correlation: 0.22, strength: "weak", sentiment: "neutral", description: "Store-of-value regime alignment" },
    { source: "SOL", target: "NVDA", correlation: 0.52, strength: "moderate", sentiment: "positive", description: "Aggressive growth co-movement" },
    { source: "SOL", target: "GOLD", correlation: 0.04, strength: "weak", sentiment: "neutral", description: "Zero statistical dependency" },
    { source: "GOLD", target: "NVDA", correlation: -0.34, strength: "moderate", sentiment: "inverse", description: "Flight to safety vs growth tech" },
  ],
  "6M": [
    { source: "BTC", target: "SOL", correlation: 0.76, strength: "strong", sentiment: "positive", description: "Ecosystem rotation" },
    { source: "BTC", target: "NVDA", correlation: 0.48, strength: "moderate", sentiment: "positive", description: "Liquidity cycle synchronization" },
    { source: "BTC", target: "GOLD", correlation: 0.29, strength: "weak", sentiment: "positive", description: "Reserve asset re-allocation" },
    { source: "SOL", target: "NVDA", correlation: 0.41, strength: "moderate", sentiment: "positive", description: "Risk asset momentum" },
    { source: "SOL", target: "GOLD", correlation: -0.11, strength: "weak", sentiment: "inverse", description: "Speculative vs hard money divergence" },
    { source: "GOLD", target: "NVDA", correlation: -0.22, strength: "weak", sentiment: "inverse", description: "Macro hedging pressure" },
  ],
  "1Y": [
    { source: "BTC", target: "SOL", correlation: 0.74, strength: "strong", sentiment: "positive", description: "Annual crypto sector beta" },
    { source: "BTC", target: "NVDA", correlation: 0.51, strength: "moderate", sentiment: "positive", description: "Trailing equity risk correlation" },
    { source: "BTC", target: "GOLD", correlation: 0.31, strength: "moderate", sentiment: "positive", description: "Inflation hedge convergence" },
    { source: "SOL", target: "NVDA", correlation: 0.44, strength: "moderate", sentiment: "positive", description: "Speculative tech co-movement" },
    { source: "SOL", target: "GOLD", correlation: -0.05, strength: "weak", sentiment: "neutral", description: "Orthogonal performance" },
    { source: "GOLD", target: "NVDA", correlation: -0.18, strength: "weak", sentiment: "inverse", description: "Safe haven vs risk duration" },
  ],
  "MAX": [
    { source: "BTC", target: "SOL", correlation: 0.71, strength: "strong", sentiment: "positive", description: "Structural digital asset coupling" },
    { source: "BTC", target: "NVDA", correlation: 0.46, strength: "moderate", sentiment: "positive", description: "Long-term tech liquidity linkage" },
    { source: "BTC", target: "GOLD", correlation: 0.35, strength: "moderate", sentiment: "positive", description: "Monetary debasement correlation" },
    { source: "SOL", target: "NVDA", correlation: 0.38, strength: "moderate", sentiment: "positive", description: "Beta expansion cycle" },
    { source: "SOL", target: "GOLD", correlation: -0.02, strength: "weak", sentiment: "neutral", description: "Decoupled asset classes" },
    { source: "GOLD", target: "NVDA", correlation: -0.15, strength: "weak", sentiment: "inverse", description: "Defensive vs tech growth polarity" },
  ],
};

// -------------------------------------------------------------
// 3. CANONICAL PREDEFINED BACKTEST (BTC TREND FOLLOWING)
// -------------------------------------------------------------
export const CANONICAL_BACKTEST: BacktestResult = {
  strategyName: "BTC Trend Following (SMA 20/50)",
  asset: "BTC/USD",
  timeframe: "1D",
  initialCapital: 100000,
  finalEquity: 134210,
  totalReturn: 34.2,
  cagr: 28.4,
  sharpe: 1.42,
  sortino: 1.88,
  maxDrawdown: -12.8,
  winRate: 62.8,
  profitFactor: 1.94,
  tradeCount: 184,
  totalFees: 2410,
  totalSlippage: 700,
  equityCurve: [
    { date: "Jan 2024", equity: 100000, benchmark: 100000, drawdown: 0.0 },
    { date: "Mar 2024", equity: 106400, benchmark: 103200, drawdown: -1.2 },
    { date: "May 2024", equity: 112100, benchmark: 105800, drawdown: -2.4 },
    { date: "Jul 2024", equity: 118900, benchmark: 108400, drawdown: -4.1 },
    { date: "Sep 2024", equity: 115200, benchmark: 107100, drawdown: -12.8 },
    { date: "Nov 2024", equity: 124600, benchmark: 112000, drawdown: -3.5 },
    { date: "Jan 2025", equity: 129800, benchmark: 115400, drawdown: -2.1 },
    { date: "Mar 2025", equity: 134210, benchmark: 118900, drawdown: -1.4 },
  ],
  autopsy: {
    regimeAttribution: [
      { regime: "Bull / Low Volatility", pctProfit: 68.4, note: "Sustained upward trend capture with minimal whipsaw" },
      { regime: "High Volatility Regimes", pctProfit: 21.7, note: "Momentum breakouts before volatility compression" },
      { regime: "Low Volatility Chop", pctProfit: 9.9, note: "Small gains with position sizing curtailed by Kelly rule" },
    ],
    profitConcentration: {
      top5TradesPct: 61.2,
      remainingTradesPct: 38.8,
      bestTradeProfit: "+$8,420 (Oct 2024 Breakout)",
    },
    costImpact: {
      grossReturn: 41.8,
      afterFees: 39.4,
      afterSlippage: 38.7,
      bpsDeduction: 310,
    },
  },
};

// -------------------------------------------------------------
// 4. PRESET RESEARCH SCENARIOS (ONE-CLICK DEMO)
// -------------------------------------------------------------
export const PRESET_SCENARIOS = [
  {
    id: "preset-btc-trend",
    title: "BTC Trend Following",
    subtitle: "SMA 20/50 Dual Moving Average",
    asset: "BTC/USD",
    timeframe: "1D",
    returnPct: "+34.2%",
    sharpe: 1.42,
    maxDd: "-12.8%",
    trades: 184,
    description: "Captures macro trend expansions while cutting exposure during consolidation regimes.",
    route: "/app/research/backtest?preset=btc-trend",
  },
  {
    id: "preset-gold-meanrev",
    title: "Gold Mean Reversion",
    subtitle: "RSI 14 + 2σ Bollinger Envelopes",
    asset: "GOLD/USD",
    timeframe: "1D",
    returnPct: "+21.4%",
    sharpe: 1.08,
    maxDd: "-8.6%",
    trades: 96,
    description: "Exploits physical gold range-bound oscillations with strict stop-loss boundaries.",
    route: "/app/research/backtest?preset=gold-meanrev",
  },
  {
    id: "preset-nvda-momentum",
    title: "NVDA Momentum Breakout",
    subtitle: "EMA 12/26 + Volume Surge Gate",
    asset: "NVDA/USD",
    timeframe: "1D",
    returnPct: "+58.9%",
    sharpe: 1.35,
    maxDd: "-22.4%",
    trades: 142,
    description: "High-beta equity momentum targeting institutional accumulation candles.",
    route: "/app/research/backtest?preset=nvda-momentum",
  },
  {
    id: "preset-multi-rotation",
    title: "Multi-Asset Rotation",
    subtitle: "Cross-Asset Volatility Parity",
    asset: "BTC + SOL + GOLD + NVDA",
    timeframe: "1W",
    returnPct: "+42.8%",
    sharpe: 1.64,
    maxDd: "-11.2%",
    trades: 68,
    description: "Dynamically rebalances across digital assets, tech equities, and physical reserves.",
    route: "/app/research/backtest?preset=multi-rotation",
  },
];

// -------------------------------------------------------------
// 5. HISTORICAL REGIME ENGINE TIMELINE
// -------------------------------------------------------------
export const DEMO_REGIMES: RegimeSlice[] = [
  {
    year: "2022",
    period: "Q1–Q4 2022",
    regime: "BEAR / HIGH VOL",
    durationDays: 365,
    strategyReturn: -4.2,
    winRate: 48.0,
    maxDrawdown: -16.4,
    color: "var(--negative)",
    description: "Macro tightening cycle. System preserved capital by flipping to cash hedge.",
  },
  {
    year: "2023",
    period: "Q1–Q3 2023",
    regime: "RECOVERY",
    durationDays: 270,
    strategyReturn: 14.8,
    winRate: 58.2,
    maxDrawdown: -9.1,
    color: "var(--warning)",
    description: "Base formation across digital assets and commodity support validation.",
  },
  {
    year: "2024",
    period: "Q4 2023–Q2 2024",
    regime: "BULL / LOW VOL",
    durationDays: 214,
    strategyReturn: 24.8,
    winRate: 63.0,
    maxDrawdown: -8.4,
    color: "var(--positive)",
    description: "Spot ETF institutional inflow expansion with steady upward trend persistence.",
  },
  {
    year: "2025",
    period: "Q3 2024–Q4 2025",
    regime: "BULL / HIGH VOL",
    durationDays: 320,
    strategyReturn: 31.4,
    winRate: 64.5,
    maxDrawdown: -14.2,
    color: "var(--accent)",
    description: "Accelerated volatility breakouts and aggressive momentum run-ups.",
  },
  {
    year: "2026",
    period: "Current (2026)",
    regime: "TRANSITION",
    durationDays: 80,
    strategyReturn: 6.2,
    winRate: 59.0,
    maxDrawdown: -5.1,
    color: "var(--neutral)",
    description: "Consolidation plateau near all-time highs; selective momentum exposure.",
  },
];

// -------------------------------------------------------------
// 6. ROBUSTNESS SURFACE EXPERIMENTS (FAST SMA × SLOW SMA)
// -------------------------------------------------------------
export const ROBUSTNESS_GRID: RobustnessPoint[] = [
  { fastSma: 10, slowSma: 50, sharpe: 0.91, totalReturn: 42.1, maxDrawdown: -24.2, stabilityScore: 68 },
  { fastSma: 10, slowSma: 100, sharpe: 1.02, totalReturn: 48.4, maxDrawdown: -21.8, stabilityScore: 74 },
  { fastSma: 10, slowSma: 150, sharpe: 0.98, totalReturn: 45.2, maxDrawdown: -22.5, stabilityScore: 71 },
  { fastSma: 10, slowSma: 200, sharpe: 0.94, totalReturn: 41.0, maxDrawdown: -25.1, stabilityScore: 65 },

  { fastSma: 20, slowSma: 50, sharpe: 1.18, totalReturn: 58.2, maxDrawdown: -19.4, stabilityScore: 82 },
  { fastSma: 20, slowSma: 100, sharpe: 1.25, totalReturn: 64.1, maxDrawdown: -18.2, stabilityScore: 86 },
  { fastSma: 20, slowSma: 150, sharpe: 1.21, totalReturn: 61.5, maxDrawdown: -19.0, stabilityScore: 84 },
  { fastSma: 20, slowSma: 200, sharpe: 1.14, totalReturn: 54.8, maxDrawdown: -20.2, stabilityScore: 79 },

  { fastSma: 30, slowSma: 50, sharpe: 1.31, totalReturn: 68.2, maxDrawdown: -17.8, stabilityScore: 92 },
  { fastSma: 30, slowSma: 100, sharpe: 1.40, totalReturn: 81.5, maxDrawdown: -16.8, stabilityScore: 96 }, // Global Optimal
  { fastSma: 30, slowSma: 150, sharpe: 1.34, totalReturn: 74.0, maxDrawdown: -17.2, stabilityScore: 91 },
  { fastSma: 30, slowSma: 200, sharpe: 1.22, totalReturn: 63.8, maxDrawdown: -18.9, stabilityScore: 83 },

  { fastSma: 40, slowSma: 50, sharpe: 1.05, totalReturn: 49.5, maxDrawdown: -21.4, stabilityScore: 75 },
  { fastSma: 40, slowSma: 100, sharpe: 1.19, totalReturn: 59.2, maxDrawdown: -19.8, stabilityScore: 81 },
  { fastSma: 40, slowSma: 150, sharpe: 1.24, totalReturn: 65.0, maxDrawdown: -18.5, stabilityScore: 85 },
  { fastSma: 40, slowSma: 200, sharpe: 1.16, totalReturn: 56.4, maxDrawdown: -20.1, stabilityScore: 78 },

  { fastSma: 50, slowSma: 100, sharpe: 1.01, totalReturn: 46.2, maxDrawdown: -23.0, stabilityScore: 72 },
  { fastSma: 50, slowSma: 150, sharpe: 1.09, totalReturn: 51.4, maxDrawdown: -21.1, stabilityScore: 76 },
  { fastSma: 50, slowSma: 200, sharpe: 1.04, totalReturn: 48.0, maxDrawdown: -22.3, stabilityScore: 73 },
];

// -------------------------------------------------------------
// 7. REAL-TIME ACTIVITY STREAM
// -------------------------------------------------------------
export const DEMO_ACTIVITIES = [
  { id: "act-1", time: "22:04", title: "Backtest completed", detail: "BTC SMA 20/50 (+34.2% Return, 1.42 Sharpe)", type: "backtest" },
  { id: "act-2", time: "22:03", title: "Robustness experiment finished", detail: "400 parameter combinations simulated across 2019–2026", type: "robustness" },
  { id: "act-3", time: "22:01", title: "Regime analysis updated", detail: "5 macro regimes detected with Markov transition matrix", type: "regime" },
  { id: "act-4", time: "21:58", title: "Market X-Ray refreshed", detail: "Cross-asset correlation matrix computed (6 edges calibrated)", type: "xray" },
  { id: "act-5", time: "21:45", title: "Integrity audit passed", detail: "0 look-ahead leakages • T+1 execution latency verified", type: "integrity" },
];
