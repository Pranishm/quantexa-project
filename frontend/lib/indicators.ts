import type { OHLCVBar } from "./demo-data/ohlcv";

export type IndicatorType =
  | "SMA"
  | "EMA"
  | "RSI"
  | "MACD"
  | "ATR"
  | "ADX"
  | "BOLLINGER"
  | "VWAP"
  | "STOCHASTIC"
  | "MOMENTUM"
  | "ROC"
  | "DONCHIAN"
  | "KELTNER";

export interface IndicatorConfig {
  id: string;
  type: IndicatorType;
  name: string;
  enabled: boolean;
  color: string;
  params: Record<string, number>;
  pane: "main" | "sub";
}

export const DEFAULT_INDICATOR_CONFIGS: IndicatorConfig[] = [
  { id: "sma-20", type: "SMA", name: "SMA 20", enabled: true, color: "#8877FF", params: { period: 20 }, pane: "main" },
  { id: "sma-50", type: "SMA", name: "SMA 50", enabled: false, color: "#E4B64D", params: { period: 50 }, pane: "main" },
  { id: "ema-20", type: "EMA", name: "EMA 20", enabled: false, color: "#00E5FF", params: { period: 20 }, pane: "main" },
  { id: "ema-200", type: "EMA", name: "EMA 200", enabled: false, color: "#FF6572", params: { period: 200 }, pane: "main" },
  { id: "rsi-14", type: "RSI", name: "RSI 14", enabled: false, color: "#8877FF", params: { period: 14, overbought: 70, oversold: 30 }, pane: "sub" },
  { id: "macd-std", type: "MACD", name: "MACD (12,26,9)", enabled: false, color: "#00E5FF", params: { fast: 12, slow: 26, signal: 9 }, pane: "sub" },
  { id: "atr-14", type: "ATR", name: "ATR 14", enabled: false, color: "#F7931A", params: { period: 14 }, pane: "sub" },
  { id: "adx-14", type: "ADX", name: "ADX 14", enabled: false, color: "#E4B64D", params: { period: 14 }, pane: "sub" },
  { id: "bb-20", type: "BOLLINGER", name: "Bollinger Bands (20,2)", enabled: false, color: "rgba(136,119,255,0.7)", params: { period: 20, stdDev: 2 }, pane: "main" },
  { id: "vwap", type: "VWAP", name: "VWAP", enabled: false, color: "#FF9800", params: {}, pane: "main" },
  { id: "stoch-14", type: "STOCHASTIC", name: "Stochastic (14,3,3)", enabled: false, color: "#00E5FF", params: { kPeriod: 14, dPeriod: 3, smooth: 3 }, pane: "sub" },
  { id: "mom-10", type: "MOMENTUM", name: "Momentum 10", enabled: false, color: "#14F195", params: { period: 10 }, pane: "sub" },
  { id: "roc-12", type: "ROC", name: "ROC 12", enabled: false, color: "#9D00FF", params: { period: 12 }, pane: "sub" },
  { id: "donchian-20", type: "DONCHIAN", name: "Donchian Channels 20", enabled: false, color: "rgba(0,229,255,0.7)", params: { period: 20 }, pane: "main" },
  { id: "keltner-20", type: "KELTNER", name: "Keltner Channels (20,2)", enabled: false, color: "rgba(228,182,77,0.7)", params: { period: 20, multiplier: 2, atrPeriod: 10 }, pane: "main" },
];

// ---------------------------------------------------------------------------
// Math Calculations
// ---------------------------------------------------------------------------

// 1. Simple Moving Average (SMA)
export function calculateSMA(bars: OHLCVBar[], period: number): (number | null)[] {
  return bars.map((_, i) => {
    if (i < period - 1) return null;
    const slice = bars.slice(i - period + 1, i + 1);
    const sum = slice.reduce((acc, b) => acc + b.close, 0);
    return Number((sum / period).toFixed(2));
  });
}

// 2. Exponential Moving Average (EMA)
export function calculateEMA(bars: OHLCVBar[], period: number): (number | null)[] {
  const k = 2 / (period + 1);
  const result: (number | null)[] = [];
  let prev: number | null = null;

  for (let i = 0; i < bars.length; i++) {
    if (i < period - 1) {
      result.push(null);
      continue;
    }
    if (i === period - 1) {
      const sum = bars.slice(0, period).reduce((acc, b) => acc + b.close, 0);
      const init = sum / period;
      result.push(Number(init.toFixed(2)));
      prev = init;
      continue;
    }
    const val: number = bars[i].close * k + (prev ?? bars[i].close) * (1 - k);
    result.push(Number(val.toFixed(2)));
    prev = val;
  }
  return result;
}

// 3. Relative Strength Index (RSI)
export function calculateRSI(bars: OHLCVBar[], period = 14): (number | null)[] {
  const result: (number | null)[] = [];
  let avgGain = 0;
  let avgLoss = 0;

  for (let i = 0; i < bars.length; i++) {
    if (i === 0) {
      result.push(null);
      continue;
    }
    const delta = bars[i].close - bars[i - 1].close;
    const gain = Math.max(0, delta);
    const loss = Math.max(0, -delta);

    if (i <= period) {
      avgGain = (avgGain * (i - 1) + gain) / i;
      avgLoss = (avgLoss * (i - 1) + loss) / i;
      if (i < period) {
        result.push(null);
      } else {
        const rs = avgGain / (avgLoss || 0.0001);
        result.push(Number((100 - 100 / (1 + rs)).toFixed(2)));
      }
    } else {
      avgGain = (avgGain * (period - 1) + gain) / period;
      avgLoss = (avgLoss * (period - 1) + loss) / period;
      const rs = avgGain / (avgLoss || 0.0001);
      result.push(Number((100 - 100 / (1 + rs)).toFixed(2)));
    }
  }
  return result;
}

// 4. Moving Average Convergence Divergence (MACD)
export function calculateMACD(bars: OHLCVBar[], fast = 12, slow = 26, signal = 9) {
  const fastEma = calculateEMA(bars, fast);
  const slowEma = calculateEMA(bars, slow);

  const macdLine: (number | null)[] = bars.map((_, i) => {
    const f = fastEma[i];
    const s = slowEma[i];
    return f !== null && s !== null ? Number((f - s).toFixed(2)) : null;
  });

  const signalLine: (number | null)[] = [];
  let prevS: number | null = null;
  const k = 2 / (signal + 1);
  let count = 0;
  let seedSum = 0;

  for (const v of macdLine) {
    if (v === null) {
      signalLine.push(null);
      continue;
    }
    count++;
    if (count <= signal) {
      seedSum += v;
      if (count === signal) {
        prevS = seedSum / signal;
        signalLine.push(Number(prevS.toFixed(2)));
      } else {
        signalLine.push(null);
      }
    } else {
      const s: number = v * k + (prevS ?? v) * (1 - k);
      signalLine.push(Number(s.toFixed(2)));
      prevS = s;
    }
  }

  const histogram = macdLine.map((m, i) => {
    const s = signalLine[i];
    return m !== null && s !== null ? Number((m - s).toFixed(2)) : null;
  });

  return { macd: macdLine, signal: signalLine, histogram };
}

// 5. Average True Range (ATR)
export function calculateATR(bars: OHLCVBar[], period = 14): (number | null)[] {
  const tr: number[] = [];
  for (let i = 0; i < bars.length; i++) {
    if (i === 0) {
      tr.push(bars[i].high - bars[i].low);
      continue;
    }
    const hl = bars[i].high - bars[i].low;
    const hc = Math.abs(bars[i].high - bars[i - 1].close);
    const lc = Math.abs(bars[i].low - bars[i - 1].close);
    tr.push(Math.max(hl, hc, lc));
  }

  const atr: (number | null)[] = [];
  let prevAtr = 0;
  for (let i = 0; i < bars.length; i++) {
    if (i < period - 1) {
      atr.push(null);
      continue;
    }
    if (i === period - 1) {
      prevAtr = tr.slice(0, period).reduce((a, b) => a + b, 0) / period;
      atr.push(Number(prevAtr.toFixed(2)));
      continue;
    }
    prevAtr = (prevAtr * (period - 1) + tr[i]) / period;
    atr.push(Number(prevAtr.toFixed(2)));
  }
  return atr;
}

// 6. Average Directional Index (ADX)
export function calculateADX(bars: OHLCVBar[], period = 14) {
  const tr = calculateATR(bars, 1).map((v) => v ?? 0);
  const plusDM: number[] = [];
  const minusDM: number[] = [];

  for (let i = 0; i < bars.length; i++) {
    if (i === 0) {
      plusDM.push(0);
      minusDM.push(0);
      continue;
    }
    const upMove = bars[i].high - bars[i - 1].high;
    const downMove = bars[i - 1].low - bars[i].low;

    plusDM.push(upMove > downMove && upMove > 0 ? upMove : 0);
    minusDM.push(downMove > upMove && downMove > 0 ? downMove : 0);
  }

  const smoothedTR = calculateEMA(bars.map((b, i) => ({ ...b, close: tr[i] })), period);
  const smoothedPlusDM = calculateEMA(bars.map((b, i) => ({ ...b, close: plusDM[i] })), period);
  const smoothedMinusDM = calculateEMA(bars.map((b, i) => ({ ...b, close: minusDM[i] })), period);

  const plusDI: (number | null)[] = [];
  const minusDI: (number | null)[] = [];
  const dx: (number | null)[] = [];

  for (let i = 0; i < bars.length; i++) {
    const sTr = smoothedTR[i];
    const sPlus = smoothedPlusDM[i];
    const sMinus = smoothedMinusDM[i];

    if (!sTr || sTr === 0 || sPlus === null || sMinus === null) {
      plusDI.push(null);
      minusDI.push(null);
      dx.push(null);
      continue;
    }

    const pDI = (sPlus / sTr) * 100;
    const mDI = (sMinus / sTr) * 100;
    plusDI.push(Number(pDI.toFixed(2)));
    minusDI.push(Number(mDI.toFixed(2)));

    const diff = Math.abs(pDI - mDI);
    const sum = pDI + mDI;
    dx.push(sum === 0 ? 0 : (diff / sum) * 100);
  }

  const adx = calculateEMA(bars.map((b, i) => ({ ...b, close: dx[i] ?? 0 })), period);
  return { adx, plusDI, minusDI };
}

// 7. Bollinger Bands
export function calculateBollingerBands(bars: OHLCVBar[], period = 20, stdDev = 2) {
  const upper: (number | null)[] = [];
  const middle: (number | null)[] = [];
  const lower: (number | null)[] = [];

  for (let i = 0; i < bars.length; i++) {
    if (i < period - 1) {
      upper.push(null);
      middle.push(null);
      lower.push(null);
      continue;
    }
    const slice = bars.slice(i - period + 1, i + 1);
    const avg = slice.reduce((s, b) => s + b.close, 0) / period;
    const variance = slice.reduce((s, b) => s + (b.close - avg) ** 2, 0) / period;
    const sigma = Math.sqrt(variance);

    middle.push(Number(avg.toFixed(2)));
    upper.push(Number((avg + stdDev * sigma).toFixed(2)));
    lower.push(Number((avg - stdDev * sigma).toFixed(2)));
  }

  return { upper, middle, lower };
}

// 8. Volume Weighted Average Price (VWAP)
export function calculateVWAP(bars: OHLCVBar[]): (number | null)[] {
  let cumulativeTypicalVol = 0;
  let cumulativeVol = 0;

  return bars.map((b) => {
    const typicalPrice = (b.high + b.low + b.close) / 3;
    cumulativeTypicalVol += typicalPrice * b.volume;
    cumulativeVol += b.volume;
    return cumulativeVol > 0 ? Number((cumulativeTypicalVol / cumulativeVol).toFixed(2)) : null;
  });
}

// 9. Stochastic Oscillator (%K and %D)
export function calculateStochastic(bars: OHLCVBar[], kPeriod = 14, dPeriod = 3, smooth = 3) {
  const rawK: (number | null)[] = [];

  for (let i = 0; i < bars.length; i++) {
    if (i < kPeriod - 1) {
      rawK.push(null);
      continue;
    }
    const slice = bars.slice(i - kPeriod + 1, i + 1);
    let highestHigh = -Infinity;
    let lowestLow = Infinity;
    for (const b of slice) {
      if (b.high > highestHigh) highestHigh = b.high;
      if (b.low < lowestLow) lowestLow = b.low;
    }
    const range = highestHigh - lowestLow;
    const k = range === 0 ? 50 : ((bars[i].close - lowestLow) / range) * 100;
    rawK.push(k);
  }

  // Smooth %K
  const smoothedK: (number | null)[] = [];
  for (let i = 0; i < bars.length; i++) {
    if (i < kPeriod + smooth - 2) {
      smoothedK.push(null);
      continue;
    }
    const valid = rawK.slice(i - smooth + 1, i + 1).filter((v): v is number => v !== null);
    smoothedK.push(valid.length > 0 ? Number((valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(2)) : null);
  }

  // %D is SMA of smoothed %K
  const d: (number | null)[] = [];
  for (let i = 0; i < bars.length; i++) {
    if (i < kPeriod + smooth + dPeriod - 3) {
      d.push(null);
      continue;
    }
    const valid = smoothedK.slice(i - dPeriod + 1, i + 1).filter((v): v is number => v !== null);
    d.push(valid.length > 0 ? Number((valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(2)) : null);
  }

  return { k: smoothedK, d };
}

// 10. Momentum
export function calculateMomentum(bars: OHLCVBar[], period = 10): (number | null)[] {
  return bars.map((b, i) => {
    if (i < period) return null;
    return Number((b.close - bars[i - period].close).toFixed(2));
  });
}

// 11. Rate of Change (ROC %)
export function calculateROC(bars: OHLCVBar[], period = 12): (number | null)[] {
  return bars.map((b, i) => {
    if (i < period) return null;
    const prev = bars[i - period].close;
    return prev === 0 ? 0 : Number((((b.close - prev) / prev) * 100).toFixed(2));
  });
}

// 12. Donchian Channels
export function calculateDonchianChannels(bars: OHLCVBar[], period = 20) {
  const upper: (number | null)[] = [];
  const lower: (number | null)[] = [];
  const middle: (number | null)[] = [];

  for (let i = 0; i < bars.length; i++) {
    if (i < period - 1) {
      upper.push(null);
      lower.push(null);
      middle.push(null);
      continue;
    }
    const slice = bars.slice(i - period + 1, i + 1);
    let hh = -Infinity;
    let ll = Infinity;
    for (const b of slice) {
      if (b.high > hh) hh = b.high;
      if (b.low < ll) ll = b.low;
    }
    upper.push(Number(hh.toFixed(2)));
    lower.push(Number(ll.toFixed(2)));
    middle.push(Number(((hh + ll) / 2).toFixed(2)));
  }

  return { upper, lower, middle };
}

// 13. Keltner Channels
export function calculateKeltnerChannels(bars: OHLCVBar[], period = 20, multiplier = 2, atrPeriod = 10) {
  const middle = calculateEMA(bars, period);
  const atr = calculateATR(bars, atrPeriod);

  const upper: (number | null)[] = [];
  const lower: (number | null)[] = [];

  for (let i = 0; i < bars.length; i++) {
    const m = middle[i];
    const a = atr[i];
    if (m === null || a === null) {
      upper.push(null);
      lower.push(null);
    } else {
      upper.push(Number((m + multiplier * a).toFixed(2)));
      lower.push(Number((m - multiplier * a).toFixed(2)));
    }
  }

  return { upper, middle, lower };
}
