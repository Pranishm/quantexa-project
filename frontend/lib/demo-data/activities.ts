export type ActivityCategory =
  | "BACKTEST"
  | "TRADING"
  | "ROBUSTNESS"
  | "REGIME"
  | "CORRELATION"
  | "SECURITY"
  | "COPILOT"
  | "DATA";

export type ActivityStatus = "SUCCESS" | "WARNING" | "OPTIMIZING" | "AUDITED" | "FAILED";

export interface ActivityItem {
  id: string;
  timestamp: string;
  time: string;
  title: string;
  detail: string;
  category: ActivityCategory;
  type: string;
  asset: "BTC" | "SOL" | "GOLD" | "NVDA" | "MULTI" | "SYSTEM";
  status: ActivityStatus;
  durationMs: number;
  duration: string;
  hash: string;
  user: string;
  metrics?: {
    sharpe?: number;
    return?: string;
    maxDd?: string;
    winRate?: string;
    trades?: number;
    slippage?: string;
  };
  logs: string[];
}

// ---------------------------------------------------------------------------
// Template generator for 120+ authentic institutional activities
// ---------------------------------------------------------------------------
const baseEvents: Array<Omit<ActivityItem, "id" | "timestamp" | "time" | "hash">> = [
  // 1. Backtest runs
  {
    title: "BTC/USD Dual SMA 20/50 Backtest Run",
    detail: "Next-bar execution modeling, 10 bps slippage, 5 bps commission drag.",
    category: "BACKTEST",
    type: "backtest",
    asset: "BTC",
    status: "SUCCESS",
    durationMs: 42,
    duration: "42ms",
    user: "Alexander Vance (Trader)",
    metrics: { sharpe: 1.68, return: "+34.2%", maxDd: "-18.4%", winRate: "58.2%", trades: 142, slippage: "8.4 bps" },
    logs: [
      "[00:00:00.002] Ingested 1,460 daily candles for BTC/USD",
      "[00:00:00.015] Generating rolling SMA20 and SMA50 indicator buffers",
      "[00:00:00.028] Simulated 142 order fills with Next-Bar Open pricing",
      "[00:00:00.042] Completed Sharpe & drawdown underwater curve calibration",
    ],
  },
  {
    title: "SOL/USD Momentum Factor 14D Optimization",
    detail: "Cross-checked ROC momentum threshold against high-volatility range regimes.",
    category: "BACKTEST",
    type: "backtest",
    asset: "SOL",
    status: "SUCCESS",
    durationMs: 78,
    duration: "78ms",
    user: "Alexander Vance (Researcher)",
    metrics: { sharpe: 1.94, return: "+72.8%", maxDd: "-24.1%", winRate: "61.4%", trades: 89, slippage: "12.1 bps" },
    logs: [
      "[00:00:00.005] Loaded 730 SOL/USD session bars",
      "[00:00:00.032] Vectorized return attribution across 14-day momentum window",
      "[00:00:00.078] Benchmarked against Buy-and-Hold SOL baseline (+48.2%)",
    ],
  },
  {
    title: "NVDA Mean Reversion vs Buy & Hold Benchmark",
    detail: "2.5-sigma Bollinger Band entry with 20D SMA trailing exit rule.",
    category: "BACKTEST",
    type: "backtest",
    asset: "NVDA",
    status: "SUCCESS",
    durationMs: 65,
    duration: "65ms",
    user: "Alexander Vance (Researcher)",
    metrics: { sharpe: 1.45, return: "+41.5%", maxDd: "-15.2%", winRate: "64.8%", trades: 64, slippage: "4.2 bps" },
    logs: [
      "[00:00:00.003] Ingested NVDA split-adjusted price history",
      "[00:00:00.024] Calculated Bollinger Upper/Lower envelopes at 2.5 stdev",
      "[00:00:00.065] Verified zero look-ahead bias across earning release bars",
    ],
  },
  {
    title: "Gold XAU/USD Inflation Drift Attribution",
    detail: "Tested macro trend-following filter during risk-off flight to safety regimes.",
    category: "BACKTEST",
    type: "backtest",
    asset: "GOLD",
    status: "SUCCESS",
    durationMs: 51,
    duration: "51ms",
    user: "Alexander Vance (Researcher)",
    metrics: { sharpe: 1.28, return: "+18.6%", maxDd: "-8.4%", winRate: "55.0%", trades: 38, slippage: "2.5 bps" },
    logs: [
      "[00:00:00.004] Ingested London Bullion Market physical spot series",
      "[00:00:00.021] Evaluated Donchian 20-bar channel breakout rules",
      "[00:00:00.051] Risk parity allocation test verified",
    ],
  },
  {
    title: "BTC Ultra-High Frequency Breakout (Overfit Warning)",
    detail: "5-minute candle parameter sweep showed extreme fragility to spread expansion.",
    category: "BACKTEST",
    type: "backtest",
    asset: "BTC",
    status: "WARNING",
    durationMs: 310,
    duration: "310ms",
    user: "Auto Execution Worker",
    metrics: { sharpe: 2.45, return: "+112.4%", maxDd: "-42.8%", winRate: "49.1%", trades: 1420, slippage: "28.5 bps" },
    logs: [
      "[00:00:00.010] Ingested 28,800 5-minute ticks",
      "[00:00:00.120] Signal density exceeded 10 trades per day",
      "[00:00:00.310] WARNING: Friction decay destroys 68% of cumulative P&L under 15 bps spread",
    ],
  },

  // 2. Robustness Testing
  {
    title: "50×50 Parameter Sensitivity Manifold (BTC SMA)",
    detail: "2,500 parameter iterations evaluated: Identified broad plateau at Fast 18–24 / Slow 48–56.",
    category: "ROBUSTNESS",
    type: "robustness",
    asset: "BTC",
    status: "SUCCESS",
    durationMs: 1420,
    duration: "1.42s",
    user: "Dr. Alexander Vance",
    metrics: { sharpe: 1.52, return: "+48.9%", maxDd: "-16.2%", winRate: "59.3%", trades: 2500, slippage: "5.0 bps" },
    logs: [
      "[00:00:00.040] Initialized 2,500 thread worker pool for grid computation",
      "[00:00:00.580] Evaluated parameter boundaries Fast[5..50] x Slow[20..200]",
      "[00:00:01.420] Generated 3D WebGL topological height vertices with continuous gradient mapping",
    ],
  },
  {
    title: "Solana Transaction Friction Decay Stress Test",
    detail: "Stepped transaction costs from 2 bps to 40 bps to test edge erosion threshold.",
    category: "ROBUSTNESS",
    type: "robustness",
    asset: "SOL",
    status: "SUCCESS",
    durationMs: 460,
    duration: "460ms",
    user: "Alexander Vance (Researcher)",
    metrics: { sharpe: 1.34, return: "+38.4%", maxDd: "-21.0%", winRate: "54.2%", trades: 320, slippage: "15.0 bps" },
    logs: [
      "[00:00:00.015] Injected progressive synthetic spread steps [2, 5, 10, 20, 30, 40 bps]",
      "[00:00:00.220] Breakeven friction threshold identified at 28.4 bps",
      "[00:00:00.460] Robustness curvature certified passing",
    ],
  },
  {
    title: "Monte Carlo 5,000-Path Reshuffling (Gold)",
    detail: "Block bootstrap trade sequence permutation to compute 99% Value-at-Risk.",
    category: "ROBUSTNESS",
    type: "robustness",
    asset: "GOLD",
    status: "SUCCESS",
    durationMs: 890,
    duration: "890ms",
    user: "Alexander Vance (Researcher)",
    metrics: { sharpe: 1.15, return: "+15.2%", maxDd: "-11.8%", winRate: "53.8%", trades: 5000, slippage: "3.1 bps" },
    logs: [
      "[00:00:00.020] Segmented historical trade returns into 50 trade blocks",
      "[00:00:00.410] Generated 5,000 synthetic return trajectories via Markov bootstrap",
      "[00:00:00.890] 99% Worst-case Max Drawdown bounded at -14.8%",
    ],
  },

  // 3. Regime Engine
  {
    title: "Markov 6-State Macro Regime Calibration",
    detail: "Transition probabilities refreshed across Crypto, Equities, and Precious Metals.",
    category: "REGIME",
    type: "regime",
    asset: "MULTI",
    status: "SUCCESS",
    durationMs: 240,
    duration: "240ms",
    user: "Regime Engine",
    metrics: { sharpe: 1.62, return: "+52.0%", maxDd: "-14.5%", winRate: "62.0%" },
    logs: [
      "[00:00:00.010] Ingested multi-asset normalized log-return vectors",
      "[00:00:00.115] Estimated Gaussian Hidden Markov Model transition matrix",
      "[00:00:00.240] Current dominant regime: High-Volatility Bullish Drift (State 2)",
    ],
  },
  {
    title: "Regime Autopsy: Q2 2024 Bitcoin Drawdown Diagnosis",
    detail: "Factor model isolated -0.0005 daily drift shift combined with 3.2x volatility spike.",
    category: "REGIME",
    type: "regime",
    asset: "BTC",
    status: "AUDITED",
    durationMs: 130,
    duration: "130ms",
    user: "Alexander Vance (Researcher)",
    logs: [
      "[00:00:00.008] Scanned historical window: 2024-04-01 through 2024-06-30",
      "[00:00:00.065] Transition identified: Bullish Drift -> Volatile Compression",
      "[00:00:00.130] Attributed 78% of drawdown to macro liquidity shock edge",
    ],
  },

  // 4. Cross-Asset Correlation
  {
    title: "Pearson 4×4 Cross-Asset Matrix Recomputed",
    detail: "BTC/SOL correlation: 0.74, BTC/GOLD: -0.12, BTC/NVDA: 0.48.",
    category: "CORRELATION",
    type: "xray",
    asset: "MULTI",
    status: "SUCCESS",
    durationMs: 38,
    duration: "38ms",
    user: "Auto Execution Worker",
    logs: [
      "[00:00:00.002] Synchronized closing prices for BTC, SOL, GOLD, NVDA",
      "[00:00:00.018] Calculated Pearson correlation coefficient matrix across 90-day window",
      "[00:00:00.038] Updated 3D WebGL correlation network spring-force physics",
    ],
  },
  {
    title: "Rolling Correlation Spike Alert (NVDA & BTC)",
    detail: "30D rolling correlation surged from 0.28 to 0.62 following tech earnings release.",
    category: "CORRELATION",
    type: "xray",
    asset: "NVDA",
    status: "WARNING",
    durationMs: 45,
    duration: "45ms",
    user: "Auto Execution Worker",
    logs: [
      "[00:00:00.004] Calculated rolling 30-day covariance between BTC and NVDA",
      "[00:00:00.022] Spike detected: delta > 0.30 within 7 sessions",
      "[00:00:00.045] Flagged portfolio risk parity diversification decay",
    ],
  },

  // 5. Paper Trading Execution
  {
    title: "Paper Order Executed: BUY 0.35 BTC @ $104,812.50",
    detail: "Market order filled against simulated institutional book with 1.2 bps slippage.",
    category: "TRADING",
    type: "trading",
    asset: "BTC",
    status: "SUCCESS",
    durationMs: 22,
    duration: "22ms",
    user: "Alexander Vance (Trader)",
    metrics: { trades: 1, slippage: "1.2 bps" },
    logs: [
      "[00:00:00.001] Client submitted Market Buy order: 0.35 BTC",
      "[00:00:00.008] Validated cash balance: $100,000 >= $36,684.37 required",
      "[00:00:00.015] Matched against simulated ask liquidity level 1",
      "[00:00:00.022] Order filled: 0.35 BTC at $104,812.50. New Cash: $63,315.63",
    ],
  },
  {
    title: "Paper Limit Order Placed: SELL 10.0 SOL @ $242.00",
    detail: "Resting limit order placed in order book pending tick crossing.",
    category: "TRADING",
    type: "trading",
    asset: "SOL",
    status: "SUCCESS",
    durationMs: 14,
    duration: "14ms",
    user: "Alexander Vance (Trader)",
    logs: [
      "[00:00:00.002] Received Limit Sell order: 10.0 SOL @ $242.00",
      "[00:00:00.006] Position confirmed: 10.0 SOL held in portfolio",
      "[00:00:00.014] Order placed in simulated local order book",
    ],
  },
  {
    title: "Paper Order Filled: SELL 50 NVDA @ $184.40",
    detail: "Take-profit trigger executed at resistance level. Realized P&L: +$1,240.00.",
    category: "TRADING",
    type: "trading",
    asset: "NVDA",
    status: "SUCCESS",
    durationMs: 18,
    duration: "18ms",
    user: "Alexander Vance (Trader)",
    metrics: { return: "+7.2%", trades: 1 },
    logs: [
      "[00:00:00.002] Take profit trigger hit at $184.40",
      "[00:00:00.009] Executed 50 shares via simulated liquidity router",
      "[00:00:00.018] Credited $9,220.00 to virtual cash balance",
    ],
  },
  {
    title: "Stop Loss Triggered: SELL 0.15 BTC @ $103,900.00",
    detail: "Protective trailing stop triggered to prevent further drawdown in risk-off tick.",
    category: "TRADING",
    type: "trading",
    asset: "BTC",
    status: "WARNING",
    durationMs: 26,
    duration: "26ms",
    user: "Alexander Vance (Trader)",
    metrics: { return: "-1.8%", trades: 1 },
    logs: [
      "[00:00:00.003] Trailing stop price threshold crossed ($103,900)",
      "[00:00:00.014] Dispatched priority liquidation fill",
      "[00:00:00.026] Executed with 3.8 bps negative slippage",
    ],
  },

  // 6. Bias Guardrails & Security Audits
  {
    title: "Automated Look-Ahead Bias Verification",
    detail: "Full scan over 57 indicators confirmed strict T+1 close-to-open execution isolation.",
    category: "SECURITY",
    type: "integrity",
    asset: "SYSTEM",
    status: "AUDITED",
    durationMs: 85,
    duration: "85ms",
    user: "Risk Guardrail",
    logs: [
      "[00:00:00.005] Inspected indicator formula pipelines for forward indexing",
      "[00:00:00.045] Zero future-bar leakage detected in rolling windows",
      "[00:00:00.085] Cryptographic verification hash minted",
    ],
  },
  {
    title: "Overfitting Probability Matrix Certified",
    detail: "Deflated Sharpe Ratio (Bailey & López de Prado) passed with p-value < 0.01.",
    category: "SECURITY",
    type: "integrity",
    asset: "SYSTEM",
    status: "AUDITED",
    durationMs: 140,
    duration: "140ms",
    user: "Risk Guardrail",
    logs: [
      "[00:00:00.010] Calculated trial variance across 400 backtest runs",
      "[00:00:00.075] Computed Deflated Sharpe Ratio (DSR): 1.48 (threshold 1.0)",
      "[00:00:00.140] Audit certificate signed and committed to local state",
    ],
  },
  {
    title: "Postgres Row-Level Security (RLS) Telemetry Audit",
    detail: "Validated multi-tenant workspace isolation across all saved strategies and notes.",
    category: "SECURITY",
    type: "integrity",
    asset: "SYSTEM",
    status: "AUDITED",
    durationMs: 34,
    duration: "34ms",
    user: "Quantora Administrator",
    logs: [
      "[00:00:00.002] Queried tenant security policies across public tables",
      "[00:00:00.018] Verified 0 unauthenticated access vectors",
      "[00:00:00.034] 256-bit TLS encryption active",
    ],
  },
  {
    title: "Synthetic Flash Crash Scenario Injected",
    detail: "-18% simulated gap-down on Bitcoin tested margin adequacy and order book resiliency.",
    category: "SECURITY",
    type: "integrity",
    asset: "BTC",
    status: "WARNING",
    durationMs: 190,
    duration: "190ms",
    user: "Risk Guardrail",
    logs: [
      "[00:00:00.008] Generated synthetic -18.4% liquidity gap at candle t+45",
      "[00:00:00.090] Tested liquidation cascade triggers across paper positions",
      "[00:00:00.190] Portfolio survived with maximum account drawdown of -22.1%",
    ],
  },

  // 7. AI Copilot & Evidence
  {
    title: "Featherless AI Inquiry: Regime Transition Likelihood",
    detail: "Natural language query: 'What is the probability of BTC entering Volatile Range next?'",
    category: "COPILOT",
    type: "copilot",
    asset: "BTC",
    status: "SUCCESS",
    durationMs: 410,
    duration: "410ms",
    user: "Alexander Vance (Researcher)",
    logs: [
      "[00:00:00.015] Tokenized user query against historical market context",
      "[00:00:00.180] Queried Markov transition state matrix for State 2 -> State 4",
      "[00:00:00.410] Output generated: 28.4% probability with 95% confidence interval",
    ],
  },
  {
    title: "Featherless AI Synthesis: Cross-Asset Beta Attribution",
    detail: "Generated automated executive report comparing NVDA chip cycle to Bitcoin liquidity.",
    category: "COPILOT",
    type: "copilot",
    asset: "MULTI",
    status: "SUCCESS",
    durationMs: 520,
    duration: "520ms",
    user: "Alexander Vance (Researcher)",
    logs: [
      "[00:00:00.020] Synthesized 180-day return covariance",
      "[00:00:00.260] Attributed 0.48 beta coefficient to global AI infrastructure spending",
      "[00:00:00.520] Executive summary markdown formatted and saved",
    ],
  },

  // 8. Data Ingestion & Tick Feeds
  {
    title: "Market Data Hub Tick Synchronization",
    detail: "Processed 12,000 price ticks across BTC, SOL, GOLD, and NVDA with zero packet drops.",
    category: "DATA",
    type: "data",
    asset: "MULTI",
    status: "SUCCESS",
    durationMs: 16,
    duration: "16ms",
    user: "Auto Execution Worker",
    logs: [
      "[00:00:00.001] WebSocket tick stream listener primed",
      "[00:00:00.008] Normalized OHLCV aggregations on 1-minute and 5-minute resolutions",
      "[00:00:00.016] Pub/Sub subscribers broadcast complete",
    ],
  },
];

// Helper to generate a deterministic pseudo-random hash
function generateHash(seed: number): string {
  const chars = "0123456789abcdef";
  let str = "0x";
  for (let i = 0; i < 40; i++) {
    const idx = (seed * 9301 + 49297 + i * 37) % 233280;
    str += chars[Math.floor((idx / 233280) * chars.length)];
  }
  return str;
}

// Format relative time based on offset minutes
function formatTimeOffset(minutesAgo: number): { time: string; timestamp: string } {
  const now = new Date("2026-09-19T22:45:00Z");
  const target = new Date(now.getTime() - minutesAgo * 60 * 1000);
  const iso = target.toISOString();

  let timeDisplay = "";
  if (minutesAgo < 1) {
    timeDisplay = "Just now";
  } else if (minutesAgo < 60) {
    timeDisplay = `${minutesAgo}m ago`;
  } else if (minutesAgo < 1440) {
    const hours = Math.floor(minutesAgo / 60);
    timeDisplay = `${hours}h ago`;
  } else {
    const days = Math.floor(minutesAgo / 1440);
    timeDisplay = `${days}d ago`;
  }

  return { time: timeDisplay, timestamp: iso };
}

// Generate 125 full structured activities
export function generateActivities(): ActivityItem[] {
  const list: ActivityItem[] = [];
  const baseCount = baseEvents.length;

  for (let i = 0; i < 125; i++) {
    const base = baseEvents[i % baseCount];
    // Minutes ago distribution: 1m, 3m, 7m, up to 14 days
    const minutesAgo = Math.floor(Math.pow(i, 1.8) * 1.6) + 1;
    const { time, timestamp } = formatTimeOffset(minutesAgo);
    const id = `act-${String(i + 1).padStart(3, "0")}`;
    const hash = generateHash(i + 42);

    // Subtle variations to keep dataset rich and realistic
    let title = base.title;
    let detail = base.detail;
    let status = base.status;
    let durationMs = base.durationMs;

    if (i >= baseCount) {
      const cycle = Math.floor(i / baseCount);
      title = `${base.title} #${cycle + 1}`;
      durationMs = Math.max(12, Math.floor(base.durationMs * (0.85 + ((i % 7) * 0.05))));
      if (i % 17 === 0) status = "WARNING";
      if (i % 29 === 0) status = "AUDITED";
      if (i % 47 === 0) status = "OPTIMIZING";
    }

    list.push({
      ...base,
      id,
      title,
      detail,
      status,
      durationMs,
      duration: durationMs >= 1000 ? `${(durationMs / 1000).toFixed(2)}s` : `${durationMs}ms`,
      time,
      timestamp,
      hash,
    });
  }

  return list;
}

export const DEMO_ACTIVITIES_EXTENDED = generateActivities();

// Backwards-compatible DEMO_ACTIVITIES array for existing components
export const DEMO_ACTIVITIES = DEMO_ACTIVITIES_EXTENDED.slice(0, 10).map((item) => ({
  id: item.id,
  time: item.time,
  title: item.title,
  detail: item.detail,
  type: item.type,
}));
