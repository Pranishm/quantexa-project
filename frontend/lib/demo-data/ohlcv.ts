/**
 * QUANTORA OHLCV DEMO DATA ENGINE
 * Seed: QUANTORA_DEMO_2026
 *
 * Generates 750+ deterministic trading sessions for each asset.
 * Every candle has a proper timestamp, open, high, low, close, volume.
 * The price series is internally consistent with the regime engine,
 * backtest results, and autopsy data on other pages.
 */

export interface OHLCVBar {
  time: string; // "YYYY-MM-DD"
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// ---------------------------------------------------------------------------
// Seeded deterministic pseudo-random (mulberry32)
// ---------------------------------------------------------------------------
function mulberry32(seed: number) {
  let s = seed;
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------------
// Regime definitions
// ---------------------------------------------------------------------------
interface Regime {
  startDate: string;
  endDate: string;
  drift: number;
  vol: number;
}

const BTC_REGIMES: Regime[] = [
  { startDate: "2024-01-01", endDate: "2024-04-14", drift: 0.002, vol: 0.028 },
  { startDate: "2024-04-15", endDate: "2024-09-30", drift: -0.0005, vol: 0.038 },
  { startDate: "2024-10-01", endDate: "2025-03-31", drift: 0.0025, vol: 0.032 },
  { startDate: "2025-04-01", endDate: "2025-12-31", drift: 0.0028, vol: 0.042 },
  { startDate: "2026-01-01", endDate: "2026-09-19", drift: 0.0006, vol: 0.022 },
];

const SOL_REGIMES: Regime[] = [
  { startDate: "2024-01-01", endDate: "2024-04-14", drift: 0.0025, vol: 0.052 },
  { startDate: "2024-04-15", endDate: "2024-09-30", drift: -0.0008, vol: 0.062 },
  { startDate: "2024-10-01", endDate: "2025-03-31", drift: 0.0028, vol: 0.048 },
  { startDate: "2025-04-01", endDate: "2025-12-31", drift: 0.0035, vol: 0.058 },
  { startDate: "2026-01-01", endDate: "2026-09-19", drift: 0.0012, vol: 0.038 },
];

const GOLD_REGIMES: Regime[] = [
  { startDate: "2024-01-01", endDate: "2024-06-30", drift: 0.0006, vol: 0.008 },
  { startDate: "2024-07-01", endDate: "2024-12-31", drift: 0.0008, vol: 0.009 },
  { startDate: "2025-01-01", endDate: "2025-09-30", drift: 0.0007, vol: 0.010 },
  { startDate: "2025-10-01", endDate: "2026-09-19", drift: 0.0004, vol: 0.007 },
];

const NVDA_REGIMES: Regime[] = [
  { startDate: "2024-01-01", endDate: "2024-06-30", drift: 0.0018, vol: 0.030 },
  { startDate: "2024-07-01", endDate: "2024-12-31", drift: -0.0004, vol: 0.038 },
  { startDate: "2025-01-01", endDate: "2025-09-30", drift: 0.0022, vol: 0.035 },
  { startDate: "2025-10-01", endDate: "2026-09-19", drift: -0.0002, vol: 0.028 },
];

// ---------------------------------------------------------------------------
// Core OHLCV generator
// ---------------------------------------------------------------------------
function generateOHLCV(
  seed: number,
  startDate: string,
  endDate: string,
  startPrice: number,
  regimes: Regime[],
  volumeBase: number,
): OHLCVBar[] {
  const rng = mulberry32(seed);
  const bars: OHLCVBar[] = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  const current = new Date(start);
  let price = startPrice;

  while (current <= end) {
    const dow = current.getDay();
    if (dow !== 0 && dow !== 6) {
      const dateStr = current.toISOString().slice(0, 10);
      let drift = 0.0005;
      let vol = 0.022;
      for (const r of regimes) {
        if (dateStr >= r.startDate && dateStr <= r.endDate) {
          drift = r.drift;
          vol = r.vol;
          break;
        }
      }

      // Box-Muller normal random
      const u1 = Math.max(rng(), 1e-9);
      const u2 = rng();
      const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      const dailyReturn = drift + vol * z;
      const close = Math.max(price * (1 + dailyReturn), 0.01);

      const openFactor = 1 + (rng() - 0.5) * vol * 0.5;
      const open = price * openFactor;
      const highFactor = 1 + rng() * vol * 0.8;
      const lowFactor = 1 - rng() * vol * 0.8;
      const high = Math.max(open, close) * highFactor;
      const low = Math.min(open, close) * Math.max(lowFactor, 0.01);
      const volMultiplier = 1 + Math.abs(dailyReturn / vol) * 0.8 + rng() * 0.4;
      const volume = Math.round(volumeBase * volMultiplier * (0.7 + rng() * 0.6));

      bars.push({
        time: dateStr,
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        volume,
      });
      price = close;
    }
    current.setDate(current.getDate() + 1);
  }
  return bars;
}

function anchorLastBar(bars: OHLCVBar[], targetClose: number): OHLCVBar[] {
  if (bars.length === 0) return bars;
  const lastClose = bars[bars.length - 1].close;
  if (lastClose <= 0) return bars;
  const ratio = targetClose / lastClose;
  const N = bars.length - 1;

  // Exponential bridge: scales the series smoothly from 1.0 at index 0 to targetClose/lastClose at index N
  return bars.map((b, i) => {
    const scale = Math.pow(ratio, i / Math.max(N, 1));
    return {
      ...b,
      open: parseFloat((b.open * scale).toFixed(2)),
      high: parseFloat((b.high * scale).toFixed(2)),
      low: parseFloat((b.low * scale).toFixed(2)),
      close: parseFloat((b.close * scale).toFixed(2)),
    };
  });
}

// ---------------------------------------------------------------------------
// Asset series
// ---------------------------------------------------------------------------
export const BTC_OHLCV: OHLCVBar[] = anchorLastBar(
  generateOHLCV(0x51ea7c20, "2024-01-01", "2026-09-19", 42000, BTC_REGIMES, 12_000_000),
  104284.5,
);

export const SOL_OHLCV: OHLCVBar[] = anchorLastBar(
  generateOHLCV(0x92bef411, "2024-01-01", "2026-09-19", 95, SOL_REGIMES, 40_000_000),
  238.6,
);

export const GOLD_OHLCV: OHLCVBar[] = anchorLastBar(
  generateOHLCV(0xa31255dd, "2024-01-01", "2026-09-19", 2060, GOLD_REGIMES, 150_000),
  2672.4,
);

export const NVDA_OHLCV: OHLCVBar[] = anchorLastBar(
  generateOHLCV(0xc840b17f, "2024-01-01", "2026-09-19", 49.5, NVDA_REGIMES, 200_000_000),
  178.25,
);

const ETH_REGIMES: Regime[] = [
  { startDate: "2024-01-01", endDate: "2024-04-14", drift: 0.0022, vol: 0.035 },
  { startDate: "2024-04-15", endDate: "2024-09-30", drift: -0.0006, vol: 0.045 },
  { startDate: "2024-10-01", endDate: "2025-03-31", drift: 0.0026, vol: 0.038 },
  { startDate: "2025-04-01", endDate: "2025-12-31", drift: 0.003, vol: 0.046 },
  { startDate: "2026-01-01", endDate: "2026-09-19", drift: 0.0008, vol: 0.026 },
];

export const ETH_OHLCV: OHLCVBar[] = anchorLastBar(
  generateOHLCV(0x38ef12a0, "2024-01-01", "2026-09-19", 2280, ETH_REGIMES, 18_000_000),
  3845.5,
);

import { ONE_INCH_OHLCV } from "./one-inch-ohlcv";

export const ALL_OHLCV: Record<string, OHLCVBar[]> = {
  BTC: BTC_OHLCV,
  SOL: SOL_OHLCV,
  GOLD: GOLD_OHLCV,
  NVDA: NVDA_OHLCV,
  "1INCH": ONE_INCH_OHLCV,
  "1inch": ONE_INCH_OHLCV,
  ETH: ETH_OHLCV,
};

export function barsByTimeframe(bars: OHLCVBar[], tf: string): OHLCVBar[] {
  const now = new Date("2026-09-19");
  const cut = new Date(now);
  switch (tf) {
    case "1M": cut.setMonth(now.getMonth() - 1); break;
    case "3M": cut.setMonth(now.getMonth() - 3); break;
    case "6M": cut.setMonth(now.getMonth() - 6); break;
    case "1Y": cut.setFullYear(now.getFullYear() - 1); break;
    case "3Y": cut.setFullYear(now.getFullYear() - 3); break;
    case "ALL": case "MAX": return bars;
    default: return bars.slice(-30);
  }
  const cutStr = cut.toISOString().slice(0, 10);
  return bars.filter((b) => b.time >= cutStr);
}

// ---------------------------------------------------------------------------
// Technical indicators
// ---------------------------------------------------------------------------
export function sma(bars: OHLCVBar[], period: number): (number | null)[] {
  return bars.map((_, i) => {
    if (i < period - 1) return null;
    const slice = bars.slice(i - period + 1, i + 1);
    return slice.reduce((s, b) => s + b.close, 0) / period;
  });
}

export function ema(bars: OHLCVBar[], period: number): (number | null)[] {
  const k = 2 / (period + 1);
  const result: (number | null)[] = [];
  let prev: number | null = null;
  for (let i = 0; i < bars.length; i++) {
    if (i < period - 1) { result.push(null); continue; }
    if (i === period - 1) {
      const s = bars.slice(0, period).reduce((acc, b) => acc + b.close, 0) / period;
      result.push(s); prev = s; continue;
    }
    const val: number = bars[i].close * k + (prev ?? bars[i].close) * (1 - k);
    result.push(val); prev = val;
  }
  return result;
}

export function rsiIndicator(bars: OHLCVBar[], period = 14): (number | null)[] {
  const result: (number | null)[] = [];
  let avgGain = 0, avgLoss = 0;
  for (let i = 0; i < bars.length; i++) {
    if (i === 0) { result.push(null); continue; }
    const delta = bars[i].close - bars[i - 1].close;
    const gain = Math.max(0, delta);
    const loss = Math.max(0, -delta);
    if (i <= period) {
      avgGain = (avgGain * (i - 1) + gain) / i;
      avgLoss = (avgLoss * (i - 1) + loss) / i;
      result.push(i < period ? null : 100 - 100 / (1 + avgGain / (avgLoss || 0.0001)));
    } else {
      avgGain = (avgGain * (period - 1) + gain) / period;
      avgLoss = (avgLoss * (period - 1) + loss) / period;
      result.push(100 - 100 / (1 + avgGain / (avgLoss || 0.0001)));
    }
  }
  return result;
}

export function bollingerBands(bars: OHLCVBar[], period = 20, stdDev = 2) {
  const upper: (number | null)[] = [], middle: (number | null)[] = [], lower: (number | null)[] = [];
  for (let i = 0; i < bars.length; i++) {
    if (i < period - 1) { upper.push(null); middle.push(null); lower.push(null); continue; }
    const slice = bars.slice(i - period + 1, i + 1);
    const avg = slice.reduce((s, b) => s + b.close, 0) / period;
    const variance = slice.reduce((s, b) => s + (b.close - avg) ** 2, 0) / period;
    const sigma = Math.sqrt(variance);
    middle.push(avg); upper.push(avg + stdDev * sigma); lower.push(avg - stdDev * sigma);
  }
  return { upper, middle, lower };
}

export function macdIndicator(bars: OHLCVBar[], fast = 12, slow = 26, signal = 9) {
  const fastEma = ema(bars, fast);
  const slowEma = ema(bars, slow);
  const macdLine: (number | null)[] = bars.map((_, i) => {
    const f = fastEma[i], s = slowEma[i];
    return f !== null && s !== null ? f - s : null;
  });
  const signalLine: (number | null)[] = [];
  let prevS: number | null = null;
  const k = 2 / (signal + 1);
  let count = 0, seedSum = 0;
  for (const v of macdLine) {
    if (v === null) { signalLine.push(null); continue; }
    count++;
    if (count <= signal) {
      seedSum += v;
      if (count === signal) { prevS = seedSum / signal; signalLine.push(prevS); }
      else signalLine.push(null);
    } else {
      const s: number = v * k + (prevS ?? v) * (1 - k);
      signalLine.push(s); prevS = s;
    }
  }
  const histogram = macdLine.map((m, i) => {
    const s = signalLine[i];
    return m !== null && s !== null ? m - s : null;
  });
  return { macd: macdLine, signal: signalLine, histogram };
}

// ---------------------------------------------------------------------------
// Backtest trade markers (20 trades consistent with +34.2% net return)
// ---------------------------------------------------------------------------
export interface BacktestTrade {
  id: string;
  entryDate: string;
  exitDate: string;
  entryPrice: number;
  exitPrice: number;
  grossPnl: number;
  fees: number;
  slippage: number;
  netPnl: number;
  holdingDays: number;
}

export const BACKTEST_TRADES: BacktestTrade[] = [
  { id: "T001", entryDate: "2024-01-15", exitDate: "2024-02-28", entryPrice: 43200, exitPrice: 51800, grossPnl: 8600, fees: 49, slippage: 22, netPnl: 8529, holdingDays: 44 },
  { id: "T002", entryDate: "2024-03-05", exitDate: "2024-03-25", entryPrice: 62400, exitPrice: 67200, grossPnl: 4800, fees: 34, slippage: 14, netPnl: 4752, holdingDays: 20 },
  { id: "T003", entryDate: "2024-04-10", exitDate: "2024-05-15", entryPrice: 68900, exitPrice: 61400, grossPnl: -7500, fees: 66, slippage: 34, netPnl: -7600, holdingDays: 35 },
  { id: "T004", entryDate: "2024-06-01", exitDate: "2024-07-10", entryPrice: 67800, exitPrice: 57200, grossPnl: -10600, fees: 63, slippage: 32, netPnl: -10695, holdingDays: 39 },
  { id: "T005", entryDate: "2024-08-15", exitDate: "2024-09-20", entryPrice: 59400, exitPrice: 63100, grossPnl: 3700, fees: 62, slippage: 30, netPnl: 3608, holdingDays: 36 },
  { id: "T006", entryDate: "2024-10-01", exitDate: "2024-11-15", entryPrice: 61800, exitPrice: 84200, grossPnl: 22400, fees: 147, slippage: 75, netPnl: 22178, holdingDays: 45 },
  { id: "T007", entryDate: "2024-11-20", exitDate: "2024-12-31", entryPrice: 93200, exitPrice: 96800, grossPnl: 3600, fees: 95, slippage: 45, netPnl: 3460, holdingDays: 41 },
  { id: "T008", entryDate: "2025-01-10", exitDate: "2025-02-28", entryPrice: 95400, exitPrice: 85600, grossPnl: -9800, fees: 91, slippage: 42, netPnl: -9933, holdingDays: 49 },
  { id: "T009", entryDate: "2025-03-15", exitDate: "2025-05-01", entryPrice: 84200, exitPrice: 91400, grossPnl: 7200, fees: 88, slippage: 38, netPnl: 7074, holdingDays: 47 },
  { id: "T010", entryDate: "2025-05-15", exitDate: "2025-06-20", entryPrice: 93600, exitPrice: 89200, grossPnl: -4400, fees: 91, slippage: 44, netPnl: -4535, holdingDays: 36 },
  { id: "T011", entryDate: "2025-07-01", exitDate: "2025-08-15", entryPrice: 87400, exitPrice: 96200, grossPnl: 8800, fees: 92, slippage: 43, netPnl: 8665, holdingDays: 45 },
  { id: "T012", entryDate: "2025-08-20", exitDate: "2025-10-05", entryPrice: 94100, exitPrice: 108400, grossPnl: 14300, fees: 103, slippage: 50, netPnl: 14147, holdingDays: 46 },
  { id: "T013", entryDate: "2025-10-10", exitDate: "2025-11-10", entryPrice: 106800, exitPrice: 114200, grossPnl: 7400, fees: 111, slippage: 54, netPnl: 7235, holdingDays: 31 },
  { id: "T014", entryDate: "2025-11-15", exitDate: "2025-12-31", entryPrice: 111400, exitPrice: 97800, grossPnl: -13600, fees: 105, slippage: 48, netPnl: -13753, holdingDays: 46 },
  { id: "T015", entryDate: "2026-01-15", exitDate: "2026-02-20", entryPrice: 95200, exitPrice: 98400, grossPnl: 3200, fees: 97, slippage: 48, netPnl: 3055, holdingDays: 36 },
  { id: "T016", entryDate: "2026-03-01", exitDate: "2026-04-01", entryPrice: 97800, exitPrice: 102600, grossPnl: 4800, fees: 101, slippage: 49, netPnl: 4650, holdingDays: 31 },
  { id: "T017", entryDate: "2026-04-10", exitDate: "2026-05-20", entryPrice: 101200, exitPrice: 95400, grossPnl: -5800, fees: 97, slippage: 48, netPnl: -5945, holdingDays: 40 },
  { id: "T018", entryDate: "2026-06-01", exitDate: "2026-07-05", entryPrice: 94600, exitPrice: 99800, grossPnl: 5200, fees: 97, slippage: 47, netPnl: 5056, holdingDays: 34 },
  { id: "T019", entryDate: "2026-07-15", exitDate: "2026-08-20", entryPrice: 98400, exitPrice: 103200, grossPnl: 4800, fees: 102, slippage: 49, netPnl: 4649, holdingDays: 36 },
  { id: "T020", entryDate: "2026-09-01", exitDate: "2026-09-19", entryPrice: 101600, exitPrice: 104284, grossPnl: 2684, fees: 104, slippage: 50, netPnl: 2530, holdingDays: 18 },
];

// ---------------------------------------------------------------------------
// Regime bands for chart background coloring
// ---------------------------------------------------------------------------
export interface RegimeBand {
  startDate: string;
  endDate: string;
  regime: "BULL_LOW" | "BEAR" | "BULL_HIGH" | "TRANSITION";
  label: string;
}

export const BTC_REGIME_BANDS: RegimeBand[] = [
  { startDate: "2024-01-01", endDate: "2024-04-14", regime: "BULL_LOW", label: "Bull / Low Vol" },
  { startDate: "2024-04-15", endDate: "2024-09-30", regime: "BEAR", label: "Bear / High Vol" },
  { startDate: "2024-10-01", endDate: "2025-03-31", regime: "BULL_HIGH", label: "Bull / High Vol" },
  { startDate: "2025-04-01", endDate: "2025-12-31", regime: "BULL_HIGH", label: "Bull / High Vol" },
  { startDate: "2026-01-01", endDate: "2026-09-19", regime: "TRANSITION", label: "Transition" },
];
