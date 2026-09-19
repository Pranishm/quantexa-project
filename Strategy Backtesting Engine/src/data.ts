// Deterministic synthetic market data for QUANTORA — a research/demo environment.
// Seeded so every render is reproducible (mirrors the platform's "reproducible experiment" ethos).

export type Asset = {
  sym: string;
  name: string;
  price: number;
  chg: number; // pct
  vol: string; // 24h volume label
  volaty: number; // annualized vol %
  regime: string;
  periodsPerYear: number; // 365 for BTC, 252 for equities/gold
  color: string;
};

export const ASSETS: Asset[] = [
  { sym: 'BTC', name: 'Bitcoin', price: 108421.55, chg: 2.41, vol: '$41.2B', volaty: 58.4, regime: 'High Volatility', periodsPerYear: 365, color: '#f5b544' },
  { sym: 'NVDA', name: 'NVIDIA', price: 174.03, chg: -1.12, vol: '$28.9B', volaty: 43.1, regime: 'Bull Trend', periodsPerYear: 252, color: '#35d07f' },
  { sym: 'GOLD', name: 'Gold · GC=F', price: 3084.20, chg: 0.38, vol: '$9.4B', volaty: 14.7, regime: 'Low Volatility', periodsPerYear: 252, color: '#9b8cff' },
  { sym: 'SOL', name: 'Solana', price: 214.88, chg: 3.21, vol: '$6.1B', volaty: 71.2, regime: 'High Volatility', periodsPerYear: 365, color: '#4cc4e0' },
];

// mulberry32 PRNG
function rng(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Candle = { i: number; date: string; close: number; sma: number; ema: number; bench: number };

// Generate a price series with trend + regime shifts. `drift` and `vol` tune character.
export function series(seed: number, n = 180, start = 100, drift = 0.0006, vol = 0.02): Candle[] {
  const r = rng(seed);
  const out: Candle[] = [];
  let p = start;
  const closes: number[] = [];
  const base = new Date(2026, 8, 19).getTime();
  for (let i = 0; i < n; i++) {
    // regime-ish drift oscillation
    const wave = Math.sin(i / 22) * 0.0011;
    const shock = r() < 0.04 ? (r() - 0.5) * vol * 4 : 0;
    const ret = drift + wave + (r() - 0.5) * vol + shock;
    p = Math.max(1, p * (1 + ret));
    closes.push(p);
    const d = new Date(base - (n - 1 - i) * 86400000);
    out.push({
      i,
      date: `${d.getMonth() + 1}/${d.getDate()}`,
      close: +p.toFixed(2),
      sma: 0,
      ema: 0,
      bench: +(start * (p / closes[0])).toFixed(2),
    });
  }
  // SMA(20) and EMA(20)
  const win = 20;
  const k = 2 / (win + 1);
  let ema = closes[0];
  for (let i = 0; i < n; i++) {
    const s = closes.slice(Math.max(0, i - win + 1), i + 1);
    out[i].sma = +(s.reduce((a, b) => a + b, 0) / s.length).toFixed(2);
    ema = i === 0 ? closes[0] : closes[i] * k + ema * (1 - k);
    out[i].ema = +ema.toFixed(2);
  }
  return out;
}

// Equity curve: strategy vs buy & hold
export type EquityPoint = { i: number; date: string; strategy: number; benchmark: number; lo: number; hi: number };
export function equityCurve(seed: number, n = 180): EquityPoint[] {
  const s = series(seed, n, 100000, 0.0011, 0.016);
  const b = series(seed + 7, n, 100000, 0.0007, 0.02);
  return s.map((pt, i) => {
    const strat = pt.close;
    const band = strat * (0.04 + (i / n) * 0.09);
    return {
      i,
      date: pt.date,
      strategy: +strat.toFixed(0),
      benchmark: +b[i].close.toFixed(0),
      lo: +(strat - band).toFixed(0),
      hi: +(strat + band).toFixed(0),
    };
  });
}

export const CORR = {
  labels: ['BTC', 'NVDA', 'GOLD', 'SOL'],
  matrix: [
    [1.0, 0.61, 0.32, 0.84],
    [0.61, 1.0, -0.08, 0.55],
    [0.32, -0.08, 1.0, 0.19],
    [0.84, 0.55, 0.19, 1.0],
  ],
};

// Robustness parameter heatmap — Sharpe across fast/slow MA grid
export const FAST_MA = [10, 15, 20, 25, 30];
export const SLOW_MA = [40, 50, 60, 70, 80];
export const ROBUST: number[][] = [
  [0.62, 0.67, 0.71, 0.69, 0.63],
  [0.7, 0.76, 0.79, 0.75, 0.69],
  [0.74, 0.84, 0.82, 0.78, 0.71],
  [0.71, 0.8, 0.81, 0.77, 0.7],
  [0.68, 0.75, 0.77, 0.73, 0.67],
];

export type Regime = { label: string; span: number; kind: 'bull' | 'bear' | 'side' | 'highvol'; ret: number; sharpe: number };
export const REGIMES: Regime[] = [
  { label: '2021 Bull', span: 20, kind: 'bull', ret: 72, sharpe: 1.82 },
  { label: '2022 Bear', span: 16, kind: 'bear', ret: -8, sharpe: -0.41 },
  { label: '2023 Recovery', span: 18, kind: 'bull', ret: 41, sharpe: 1.14 },
  { label: '2024 High-Vol', span: 14, kind: 'highvol', ret: 21, sharpe: 0.92 },
  { label: '2025 Sideways', span: 17, kind: 'side', ret: -3, sharpe: -0.22 },
  { label: '2026 Bull', span: 15, kind: 'bull', ret: 34, sharpe: 1.47 },
];

export const REGIME_COLORS: Record<Regime['kind'], string> = {
  bull: '#35d07f',
  bear: '#ff5c72',
  side: '#5f656d',
  highvol: '#f5b544',
};

export type Trade = { date: string; action: 'BUY' | 'SELL'; price: number; size: string; pnl: number | null; reason: string };
export const TRADES: Trade[] = [
  { date: '2024-01-04', action: 'BUY', price: 44210, size: '25%', pnl: null, reason: 'SMA(20) crossed above SMA(50)' },
  { date: '2024-03-12', action: 'SELL', price: 71880, size: '25%', pnl: 6042, reason: 'SMA(20) crossed below SMA(50)' },
  { date: '2024-06-21', action: 'BUY', price: 63140, size: '25%', pnl: null, reason: 'SMA(20) crossed above SMA(50)' },
  { date: '2024-09-08', action: 'SELL', price: 54020, size: '25%', pnl: -2280, reason: 'Stop: trend reversal' },
  { date: '2025-02-15', action: 'BUY', price: 96540, size: '25%', pnl: null, reason: 'SMA(20) crossed above SMA(50)' },
  { date: '2025-11-30', action: 'SELL', price: 104200, size: '25%', pnl: 1915, reason: 'SMA(20) crossed below SMA(50)' },
];

// Strategy Autopsy — performance attribution. Decomposes the headline return into
// the forces that actually produced it, plus where the strategy bled.
export type Driver = { factor: string; contribution: number; note: string };
export const AUTOPSY_DRIVERS: Driver[] = [
  { factor: 'Trend capture', contribution: 58.4, note: 'Held through the 2021 & 2026 bull legs' },
  { factor: 'Regime timing', contribution: 24.1, note: 'Exited most of the 2022 drawdown early' },
  { factor: 'Volatility sizing', contribution: 9.7, note: 'Trimmed exposure into high-σ windows' },
  { factor: 'Mean-reversion legs', contribution: 4.9, note: 'Marginal edge in 2025 sideways tape' },
  { factor: 'Slippage & fees', contribution: -6.9, note: 'Friction on 48 round-trips' },
  { factor: 'Whipsaw / late exits', contribution: -6.0, note: 'Sept-2024 trend reversal stop' },
];

// Monthly return grid (rows = year, cols = quarter proxy) for the autopsy time-attribution.
export const AUTOPSY_MONTHS = {
  years: ['2021', '2022', '2023', '2024', '2025', '2026'],
  quarters: ['Q1', 'Q2', 'Q3', 'Q4'],
  grid: [
    [18.2, 9.4, -4.1, 22.6],
    [-3.2, -6.8, 4.1, -1.9],
    [11.7, 5.2, 8.4, 9.1],
    [7.3, -5.4, 3.8, 6.2],
    [2.1, -1.4, 0.8, -2.3],
    [14.6, 8.9, 6.1, 0.0],
  ] as number[][],
};

// AI Copilot — evidence-grounded. Every answer carries structured evidence, assumptions
// and limitations, and is produced by authorized tool calls, never invented.
export type CopilotEvidence = { type: string; label: string; value: string; tone?: 'up' | 'down' | 'neutral' };
export type CopilotTurn = {
  role: 'user' | 'quantora';
  text: string;
  tools?: string[];
  evidence?: CopilotEvidence[];
  assumptions?: string[];
  limitations?: string[];
};
export const COPILOT_THREAD: CopilotTurn[] = [
  { role: 'user', text: 'Why did the SMA crossover on BTC beat buy-and-hold?' },
  {
    role: 'quantora',
    text: 'Under the selected assumptions, the strategy returned +84.2% net vs +51.0% for buy-and-hold. The edge is almost entirely regime timing: it side-stepped most of the 2022 drawdown while staying invested through the 2021 and 2026 bull legs. It is not a raw return-picking edge — gross alpha before that timing is small.',
    tools: ['run_backtest', 'run_autopsy', 'get_backtest'],
    evidence: [
      { type: 'backtest_metric', label: 'Net return', value: '+84.2%', tone: 'up' },
      { type: 'benchmark_metric', label: 'Buy & hold', value: '+51.0%', tone: 'neutral' },
      { type: 'attribution', label: 'Regime timing', value: '+24.1%', tone: 'up' },
      { type: 'backtest_metric', label: 'Max drawdown', value: '−18.3%', tone: 'down' },
    ],
    assumptions: ['Signals at bar t execute at t+1 open', 'Commission 0.15% + slippage 0.05% per fill'],
    limitations: ['Single asset, single 2020–2026 window', 'Not walk-forward validated across all folds'],
  },
  { role: 'user', text: 'Is this just curve-fitting?' },
  {
    role: 'quantora',
    text: 'Probably not, but treat it as provisional. The 20/50 configuration sits inside a smooth high-Sharpe neighborhood rather than an isolated spike, and parameter stability scores 0.86. The deflated Sharpe (0.71 across 25 trials) survives the multiple-testing haircut. Parameter sensitivity is flagged WARNING — monitor before trusting it live.',
    tools: ['run_robustness', 'run_integrity'],
    evidence: [
      { type: 'robustness', label: 'Parameter stability', value: '0.86', tone: 'up' },
      { type: 'robustness', label: 'Deflated Sharpe', value: '0.71', tone: 'neutral' },
      { type: 'integrity', label: 'Sensitivity check', value: 'WARNING', tone: 'down' },
    ],
    assumptions: ['Robustness swept over 5×5 fast/slow MA grid'],
    limitations: ['Curve-fit risk cannot be fully excluded from historical data alone'],
  },
];

export const AUDIT_LOG = [
  { t: '12:42:18', event: 'AUTH_LOGIN', actor: 'USR_4821', result: 'SUCCESS', trace: 'REQ_8F21A' },
  { t: '12:41:52', event: 'BACKTEST_EXECUTED', actor: 'USR_4821', result: 'SUCCESS', trace: 'QNT_82A91' },
  { t: '12:39:07', event: 'AI_TOOL_CALL · run_robustness', actor: 'QUANT', result: 'SUCCESS', trace: 'AI_1D4C2' },
  { t: '12:35:44', event: 'ORDER_SIMULATED · BTC', actor: 'USR_4821', result: 'FILLED', trace: 'PT_55B10' },
  { t: '12:30:19', event: 'STRATEGY_MODIFIED', actor: 'USR_4821', result: 'SUCCESS', trace: 'ST_9910F' },
  { t: '12:22:03', event: 'MFA_VERIFIED', actor: 'USR_4821', result: 'SUCCESS', trace: 'REQ_44A0C' },
];
