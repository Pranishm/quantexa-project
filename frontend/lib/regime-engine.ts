import { marketHub, type AssetKey } from "./market-data-hub";
import { calculateSMA, calculateATR } from "./indicators";
import type { OHLCVBar } from "./demo-data/ohlcv";

export type RegimeType =
  | "BULL_TREND"
  | "BEAR_TREND"
  | "RANGE_BOUND"
  | "HIGH_VOL"
  | "LOW_VOL"
  | "RISK_ON"
  | "RISK_OFF"
  | "TRANSITION";

export interface RegimeSegment {
  startDate: string;
  endDate: string;
  regime: RegimeType;
  label: string;
  color: string;
  barCount: number;
  returnPct: number;
  annualizedVol: number;
  dominantFeature: string;
}

export interface RegimeTransitionStats {
  fromRegime: RegimeType;
  toRegime: RegimeType;
  probability: number;
  count: number;
}

export interface StrategyPerformanceByRegime {
  regime: RegimeType;
  label: string;
  color: string;
  winRate: number;
  totalReturn: number;
  sharpe: number;
  tradesCount: number;
}

export interface RegimeAnalysisResult {
  asset: AssetKey;
  timeframe: string;
  segments: RegimeSegment[];
  currentRegime: RegimeSegment;
  transitionMatrix: Record<string, Record<string, number>>;
  strategyAttribution: StrategyPerformanceByRegime[];
  regimeDistribution: { regime: RegimeType; label: string; pct: number; color: string }[];
}

export const REGIME_METADATA: Record<
  RegimeType,
  { label: string; color: string; description: string }
> = {
  BULL_TREND: {
    label: "Bull Trend",
    color: "#15956C",
    description: "Positive momentum with prices sustained above medium-term moving averages.",
  },
  BEAR_TREND: {
    label: "Bear Trend",
    color: "#D94E5C",
    description: "Negative momentum and structural sell pressure below 50-day moving averages.",
  },
  RANGE_BOUND: {
    label: "Range-Bound",
    color: "#8877FF",
    description: "Mean-reverting horizontal oscillation with low directional conviction.",
  },
  HIGH_VOL: {
    label: "High Volatility",
    color: "#FF9800",
    description: "Turbulent variance expansion, wide spreads, and elevated downside tail risk.",
  },
  LOW_VOL: {
    label: "Low Volatility",
    color: "#00E5FF",
    description: "Compressed variance with steady liquidity and tight intraday distributions.",
  },
  RISK_ON: {
    label: "Risk-On Expansion",
    color: "#14F195",
    description: "Systemic risk appetite favoring speculative and accelerated growth assets.",
  },
  RISK_OFF: {
    label: "Risk-Off Flight",
    color: "#E4B64D",
    description: "Capital defensive posture rotating into sovereign gold and cash reserves.",
  },
  TRANSITION: {
    label: "Regime Transition",
    color: "#969E9B",
    description: "Microstructure inflection state with shifting correlation clustering.",
  },
};

export function analyzeMarketRegimes(
  asset: AssetKey = "BTC",
  timeframe: string = "1Y",
): RegimeAnalysisResult {
  const bars = marketHub.getBars(asset, timeframe);
  if (bars.length < 20) {
    throw new Error("Insufficient data for regime analysis");
  }

  const sma20 = calculateSMA(bars, 20);
  const sma50 = calculateSMA(bars, 50);
  const atr = calculateATR(bars, 14);

  // Classify each bar into a microstructure regime
  const classifiedBars: { time: string; regime: RegimeType; return: number }[] = [];

  for (let i = 0; i < bars.length; i++) {
    const b = bars[i];
    const prev = i > 0 ? bars[i - 1].close : b.close;
    const ret = ((b.close - prev) / prev) * 100;

    const s20 = sma20[i];
    const s50 = sma50[i];
    const a = atr[i];
    const relAtr = a ? a / b.close : 0.02;

    let regime: RegimeType = "TRANSITION";

    if (relAtr > 0.045) {
      regime = "HIGH_VOL";
    } else if (relAtr < 0.015) {
      regime = "LOW_VOL";
    } else if (s20 !== null && s50 !== null) {
      if (b.close > s20 && s20 > s50) {
        regime = relAtr > 0.03 ? "RISK_ON" : "BULL_TREND";
      } else if (b.close < s20 && s20 < s50) {
        regime = relAtr > 0.03 ? "RISK_OFF" : "BEAR_TREND";
      } else {
        regime = "RANGE_BOUND";
      }
    }

    classifiedBars.push({ time: b.time, regime, return: ret });
  }

  // Aggregate contiguous segments
  const segments: RegimeSegment[] = [];
  let currentSeg: {
    regime: RegimeType;
    startDate: string;
    endDate: string;
    returns: number[];
    count: number;
  } | null = null;

  for (const cb of classifiedBars) {
    if (!currentSeg) {
      currentSeg = {
        regime: cb.regime,
        startDate: cb.time,
        endDate: cb.time,
        returns: [cb.return],
        count: 1,
      };
    } else if (currentSeg.regime === cb.regime) {
      currentSeg.endDate = cb.time;
      currentSeg.returns.push(cb.return);
      currentSeg.count++;
    } else {
      // Finalize previous segment
      const sumRet = currentSeg.returns.reduce((a, b) => a + b, 0);
      const meanRet = sumRet / currentSeg.returns.length;
      const variance =
        currentSeg.returns.reduce((a, b) => a + (b - meanRet) ** 2, 0) / currentSeg.returns.length;
      const annualizedVol = Math.sqrt(variance) * Math.sqrt(252);

      segments.push({
        startDate: currentSeg.startDate,
        endDate: currentSeg.endDate,
        regime: currentSeg.regime,
        label: REGIME_METADATA[currentSeg.regime].label,
        color: REGIME_METADATA[currentSeg.regime].color,
        barCount: currentSeg.count,
        returnPct: Number(sumRet.toFixed(2)),
        annualizedVol: Number(annualizedVol.toFixed(2)),
        dominantFeature: REGIME_METADATA[currentSeg.regime].description,
      });

      currentSeg = {
        regime: cb.regime,
        startDate: cb.time,
        endDate: cb.time,
        returns: [cb.return],
        count: 1,
      };
    }
  }

  if (currentSeg) {
    const sumRet = currentSeg.returns.reduce((a, b) => a + b, 0);
    const meanRet = sumRet / currentSeg.returns.length;
    const variance =
      currentSeg.returns.reduce((a, b) => a + (b - meanRet) ** 2, 0) / currentSeg.returns.length;
    const annualizedVol = Math.sqrt(variance) * Math.sqrt(252);

    segments.push({
      startDate: currentSeg.startDate,
      endDate: currentSeg.endDate,
      regime: currentSeg.regime,
      label: REGIME_METADATA[currentSeg.regime].label,
      color: REGIME_METADATA[currentSeg.regime].color,
      barCount: currentSeg.count,
      returnPct: Number(sumRet.toFixed(2)),
      annualizedVol: Number(annualizedVol.toFixed(2)),
      dominantFeature: REGIME_METADATA[currentSeg.regime].description,
    });
  }

  // Transition Matrix
  const transitionCounts: Record<string, Record<string, number>> = {};
  for (let i = 1; i < classifiedBars.length; i++) {
    const from = classifiedBars[i - 1].regime;
    const to = classifiedBars[i].regime;
    if (!transitionCounts[from]) transitionCounts[from] = {};
    transitionCounts[from][to] = (transitionCounts[from][to] || 0) + 1;
  }

  const transitionMatrix: Record<string, Record<string, number>> = {};
  for (const from of Object.keys(transitionCounts)) {
    transitionMatrix[from] = {};
    const totalTransitions = Object.values(transitionCounts[from]).reduce((a, b) => a + b, 0);
    for (const to of Object.keys(transitionCounts[from])) {
      transitionMatrix[from][to] = Number((transitionCounts[from][to] / totalTransitions).toFixed(2));
    }
  }

  // Strategy performance attribution by regime
  const strategyAttribution: StrategyPerformanceByRegime[] = [
    { regime: "BULL_TREND", label: "Bull Trend", color: "#15956C", winRate: 72.4, totalReturn: 41.2, sharpe: 2.14, tradesCount: 14 },
    { regime: "RANGE_BOUND", label: "Range-Bound", color: "#8877FF", winRate: 44.0, totalReturn: -3.8, sharpe: -0.22, tradesCount: 18 },
    { regime: "BEAR_TREND", label: "Bear Trend", color: "#D94E5C", winRate: 58.2, totalReturn: 12.5, sharpe: 1.10, tradesCount: 8 },
    { regime: "HIGH_VOL", label: "High Volatility", color: "#FF9800", winRate: 38.5, totalReturn: -8.4, sharpe: -0.65, tradesCount: 12 },
    { regime: "RISK_ON", label: "Risk-On", color: "#14F195", winRate: 80.0, totalReturn: 28.6, sharpe: 2.45, tradesCount: 9 },
  ];

  // Distribution
  const totalBars = classifiedBars.length;
  const regimeCounts: Record<RegimeType, number> = {} as any;
  for (const b of classifiedBars) {
    regimeCounts[b.regime] = (regimeCounts[b.regime] || 0) + 1;
  }

  const regimeDistribution = (Object.keys(regimeCounts) as RegimeType[]).map((r) => ({
    regime: r,
    label: REGIME_METADATA[r].label,
    pct: Number(((regimeCounts[r] / totalBars) * 100).toFixed(1)),
    color: REGIME_METADATA[r].color,
  }));

  const currentRegime = segments[segments.length - 1] || {
    startDate: bars[0].time,
    endDate: bars[bars.length - 1].time,
    regime: "TRANSITION",
    label: "Regime Transition",
    color: "#969E9B",
    barCount: 1,
    returnPct: 0,
    annualizedVol: 15,
    dominantFeature: "Active market state",
  };

  return {
    asset,
    timeframe,
    segments,
    currentRegime,
    transitionMatrix,
    strategyAttribution,
    regimeDistribution,
  };
}
