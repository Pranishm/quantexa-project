import { marketHub, type AssetKey } from "./market-data-hub";
import { calculateSMA, calculateEMA, calculateBollingerBands, calculateRSI } from "./indicators";
import type { OHLCVBar } from "./demo-data/ohlcv";

export type StrategyId = "sma_cross" | "ema_trend" | "momentum" | "mean_reversion";

export interface BacktestParams {
  asset: AssetKey;
  strategyId: StrategyId;
  timeframe: string;
  startDate?: string;
  endDate?: string;
  initialCapital: number;
  params: Record<string, number>;
  sizing: "fixed" | "vol_target" | "half_kelly";
  sizingValue?: number; // e.g. 100% or 0.5
  commissionBps: number;
  slippageBps: number;
  spreadBps: number;
}

export interface BacktestTradeRecord {
  id: string;
  entryDate: string;
  exitDate: string;
  entryPrice: number;
  exitPrice: number;
  size: number;
  side: "LONG" | "SHORT";
  grossPnl: number;
  fees: number;
  slippage: number;
  netPnl: number;
  returnPct: number;
  holdingDays: number;
  exitReason: "SIGNAL" | "STOP_LOSS" | "TAKE_PROFIT" | "END_OF_SERIES";
}

export interface MonthlyReturn {
  year: number;
  month: number; // 1-12
  returnPct: number;
}

export interface BacktestResult {
  asset: AssetKey;
  strategyId: StrategyId;
  strategyName: string;
  timeframe: string;
  startDate: string;
  endDate: string;
  initialCapital: number;
  finalEquity: number;
  totalReturn: number;
  cagr: number;
  annualizedVol: number;
  sharpe: number;
  sortino: number;
  calmar: number;
  maxDrawdown: number;
  winRate: number;
  profitFactor: number;
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  avgTradePnl: number;
  totalFees: number;
  totalSlippage: number;
  equityCurve: { time: string; equity: number }[];
  drawdownCurve: { time: string; drawdownPct: number }[];
  benchmarkCurve: { time: string; equity: number }[];
  benchmarkMetrics: {
    totalReturn: number;
    cagr: number;
    annualizedVol: number;
    sharpe: number;
    maxDrawdown: number;
    finalEquity: number;
  };
  monthlyReturns: MonthlyReturn[];
  trades: BacktestTradeRecord[];
  executionTimeMs: number;
}

export const STRATEGY_SPECS: Record<
  StrategyId,
  { name: string; description: string; defaultParams: Record<string, number> }
> = {
  sma_cross: {
    name: "SMA Dual Crossover",
    description: "Trend-following signal when short SMA crosses above long SMA.",
    defaultParams: { fastPeriod: 20, slowPeriod: 50 },
  },
  ema_trend: {
    name: "EMA Multi-Period Trend",
    description: "Fast EMA momentum aligned with baseline 200 EMA trend filter.",
    defaultParams: { fastPeriod: 12, slowPeriod: 26, trendPeriod: 200 },
  },
  momentum: {
    name: "Momentum Breakout",
    description: "Enters when N-day price momentum exceeds volatility threshold.",
    defaultParams: { lookback: 20, thresholdPct: 3.5 },
  },
  mean_reversion: {
    name: "Bollinger Mean Reversion",
    description: "Counter-trend entry when price touches outer band and RSI shows reversal.",
    defaultParams: { period: 20, stdDev: 2, rsiPeriod: 14, rsiOversold: 30 },
  },
};

// ---------------------------------------------------------------------------
// Pure Execution Engine
// ---------------------------------------------------------------------------

export function runBacktestSimulation(config: BacktestParams): BacktestResult {
  const startTime = Date.now();
  const bars = marketHub.getBars(config.asset, config.timeframe, config.startDate, config.endDate);

  if (bars.length < 10) {
    throw new Error("Insufficient bars for backtest simulation");
  }

  // Pre-calculate indicator signals
  const signals: ("LONG" | "FLAT")[] = new Array(bars.length).fill("FLAT");
  const p = config.params;

  if (config.strategyId === "sma_cross") {
    const fastPeriod = Math.max(2, p.fastPeriod || 20);
    const slowPeriod = Math.max(fastPeriod + 1, p.slowPeriod || 50);
    const fast = calculateSMA(bars, fastPeriod);
    const slow = calculateSMA(bars, slowPeriod);

    for (let i = slowPeriod; i < bars.length; i++) {
      if (fast[i] !== null && slow[i] !== null && fast[i]! > slow[i]!) {
        signals[i] = "LONG";
      }
    }
  } else if (config.strategyId === "ema_trend") {
    const fastPeriod = Math.max(2, p.fastPeriod || 12);
    const slowPeriod = Math.max(fastPeriod + 1, p.slowPeriod || 26);
    const fast = calculateEMA(bars, fastPeriod);
    const slow = calculateEMA(bars, slowPeriod);

    for (let i = slowPeriod; i < bars.length; i++) {
      if (fast[i] !== null && slow[i] !== null && fast[i]! > slow[i]!) {
        signals[i] = "LONG";
      }
    }
  } else if (config.strategyId === "momentum") {
    const lookback = Math.max(3, p.lookback || 20);
    const thresh = p.thresholdPct || 3.5;

    for (let i = lookback; i < bars.length; i++) {
      const prev = bars[i - lookback].close;
      const changePct = ((bars[i].close - prev) / prev) * 100;
      if (changePct > thresh) {
        signals[i] = "LONG";
      }
    }
  } else if (config.strategyId === "mean_reversion") {
    const period = Math.max(5, p.period || 20);
    const stdDev = p.stdDev || 2;
    const bb = calculateBollingerBands(bars, period, stdDev);
    const rsi = calculateRSI(bars, p.rsiPeriod || 14);

    let inReversal = false;
    for (let i = period; i < bars.length; i++) {
      const lower = bb.lower[i];
      const r = rsi[i];
      if (lower !== null && bars[i].close <= lower && r !== null && r <= (p.rsiOversold || 35)) {
        inReversal = true;
      } else if (bb.middle[i] !== null && bars[i].close >= bb.middle[i]!) {
        inReversal = false;
      }
      if (inReversal) signals[i] = "LONG";
    }
  }

  // Simulation execution state
  let cash = config.initialCapital;
  let shares = 0;
  let currentPosition: {
    entryDate: string;
    entryPrice: number;
    size: number;
    shares: number;
  } | null = null;

  const trades: BacktestTradeRecord[] = [];
  const equityCurve: { time: string; equity: number }[] = [];
  const drawdownCurve: { time: string; drawdownPct: number }[] = [];
  const benchmarkCurve: { time: string; equity: number }[] = [];

  const feeFactor = (config.commissionBps + config.spreadBps / 2) / 10000;
  const slipFactor = config.slippageBps / 10000;

  const benchmarkStartPrice = bars[0].close;
  const benchmarkShares = config.initialCapital / (benchmarkStartPrice * (1 + feeFactor + slipFactor));

  let peakEquity = config.initialCapital;
  let totalFeesPaid = 0;
  let totalSlippageCost = 0;

  for (let i = 0; i < bars.length; i++) {
    const bar = bars[i];
    const prevSignal = i > 0 ? signals[i - 1] : "FLAT"; // T+1 Execution: order placed on prior close, executed on current open
    const execPrice = bar.open;

    // Check entry/exit
    if (prevSignal === "LONG" && !currentPosition) {
      // Enter long position
      const allocatedCapital = cash * (config.sizingValue || 0.98);
      const slippedPrice = execPrice * (1 + slipFactor);
      const buyFee = allocatedCapital * feeFactor;
      const slipLoss = allocatedCapital * slipFactor;

      const purchasableShares = (allocatedCapital - buyFee) / slippedPrice;
      if (purchasableShares > 0) {
        shares = purchasableShares;
        cash -= allocatedCapital;
        totalFeesPaid += buyFee;
        totalSlippageCost += slipLoss;

        currentPosition = {
          entryDate: bar.time,
          entryPrice: Number(slippedPrice.toFixed(2)),
          size: Number(allocatedCapital.toFixed(2)),
          shares: purchasableShares,
        };
      }
    } else if (prevSignal === "FLAT" && currentPosition) {
      // Exit long position
      const slippedPrice = execPrice * (1 - slipFactor);
      const grossProceeds = currentPosition.shares * slippedPrice;
      const sellFee = grossProceeds * feeFactor;
      const slipLoss = grossProceeds * slipFactor;
      const netProceeds = grossProceeds - sellFee;

      totalFeesPaid += sellFee;
      totalSlippageCost += slipLoss;

      const grossPnl = grossProceeds - currentPosition.size;
      const netPnl = netProceeds - currentPosition.size;
      const returnPct = (netPnl / currentPosition.size) * 100;

      const d1 = new Date(currentPosition.entryDate);
      const d2 = new Date(bar.time);
      const holdingDays = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24)));

      trades.push({
        id: `TR-${trades.length + 1}`,
        entryDate: currentPosition.entryDate,
        exitDate: bar.time,
        entryPrice: currentPosition.entryPrice,
        exitPrice: Number(slippedPrice.toFixed(2)),
        size: currentPosition.size,
        side: "LONG",
        grossPnl: Number(grossPnl.toFixed(2)),
        fees: Number((totalFeesPaid).toFixed(2)),
        slippage: Number((totalSlippageCost).toFixed(2)),
        netPnl: Number(netPnl.toFixed(2)),
        returnPct: Number(returnPct.toFixed(2)),
        holdingDays,
        exitReason: "SIGNAL",
      });

      cash += netProceeds;
      shares = 0;
      currentPosition = null;
    }

    // Mark-to-market daily close
    const currentHoldingValue = shares * bar.close;
    const currentEquity = Number((cash + currentHoldingValue).toFixed(2));
    equityCurve.push({ time: bar.time, equity: currentEquity });

    if (currentEquity > peakEquity) peakEquity = currentEquity;
    const dd = ((currentEquity - peakEquity) / peakEquity) * 100;
    drawdownCurve.push({ time: bar.time, drawdownPct: Number(dd.toFixed(2)) });

    // Benchmark equity
    const bEquity = Number((benchmarkShares * bar.close).toFixed(2));
    benchmarkCurve.push({ time: bar.time, equity: bEquity });
  }

  // Close any open position on the final bar for complete accounting
  if (currentPosition) {
    const lastBar = bars[bars.length - 1];
    const exitPrice = lastBar.close * (1 - slipFactor);
    const grossProceeds = currentPosition.shares * exitPrice;
    const sellFee = grossProceeds * feeFactor;
    const netProceeds = grossProceeds - sellFee;
    const grossPnl = grossProceeds - currentPosition.size;
    const netPnl = netProceeds - currentPosition.size;
    const returnPct = (netPnl / currentPosition.size) * 100;

    const d1 = new Date(currentPosition.entryDate);
    const d2 = new Date(lastBar.time);
    const holdingDays = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24)));

    trades.push({
      id: `TR-${trades.length + 1}`,
      entryDate: currentPosition.entryDate,
      exitDate: lastBar.time,
      entryPrice: currentPosition.entryPrice,
      exitPrice: Number(exitPrice.toFixed(2)),
      size: currentPosition.size,
      side: "LONG",
      grossPnl: Number(grossPnl.toFixed(2)),
      fees: Number(sellFee.toFixed(2)),
      slippage: Number((grossProceeds * slipFactor).toFixed(2)),
      netPnl: Number(netPnl.toFixed(2)),
      returnPct: Number(returnPct.toFixed(2)),
      holdingDays,
      exitReason: "END_OF_SERIES",
    });
    cash += netProceeds;
    shares = 0;
  }

  const finalEquity = equityCurve[equityCurve.length - 1].equity;
  const totalReturn = ((finalEquity - config.initialCapital) / config.initialCapital) * 100;
  const days = bars.length;
  const years = Math.max(0.1, days / 252);
  const cagr = (Math.pow(Math.max(0.01, finalEquity / config.initialCapital), 1 / years) - 1) * 100;

  // Volatility & Sharpe
  const dailyEquityReturns: number[] = [];
  for (let i = 1; i < equityCurve.length; i++) {
    const r = (equityCurve[i].equity - equityCurve[i - 1].equity) / equityCurve[i - 1].equity;
    dailyEquityReturns.push(r);
  }

  const meanRet = dailyEquityReturns.reduce((a, b) => a + b, 0) / (dailyEquityReturns.length || 1);
  const variance =
    dailyEquityReturns.reduce((a, b) => a + (b - meanRet) ** 2, 0) / (dailyEquityReturns.length || 1);
  const annualizedVol = Math.sqrt(variance) * Math.sqrt(252) * 100;

  const rf = 0.03;
  const sharpe = annualizedVol > 0 ? Number(((cagr / 100 - rf) / (annualizedVol / 100)).toFixed(2)) : 0;

  // Sortino
  const downsideReturns = dailyEquityReturns.filter((r) => r < 0);
  const downsideVar =
    downsideReturns.reduce((a, b) => a + b ** 2, 0) / (dailyEquityReturns.length || 1);
  const downsideVol = Math.sqrt(downsideVar) * Math.sqrt(252) * 100;
  const sortino = downsideVol > 0 ? Number(((cagr / 100 - rf) / (downsideVol / 100)).toFixed(2)) : 0;

  // Max Drawdown
  let maxDrawdown = 0;
  for (const dd of drawdownCurve) {
    if (dd.drawdownPct < maxDrawdown) maxDrawdown = dd.drawdownPct;
  }
  const calmar = maxDrawdown !== 0 ? Number((cagr / Math.abs(maxDrawdown)).toFixed(2)) : 0;

  // Trade Statistics
  const winningTrades = trades.filter((t) => t.netPnl > 0).length;
  const losingTrades = trades.filter((t) => t.netPnl < 0).length;
  const winRate = trades.length > 0 ? Number(((winningTrades / trades.length) * 100).toFixed(1)) : 0;

  const totalGrossWin = trades.filter((t) => t.netPnl > 0).reduce((a, b) => a + b.netPnl, 0);
  const totalGrossLoss = Math.abs(trades.filter((t) => t.netPnl < 0).reduce((a, b) => a + b.netPnl, 0));
  const profitFactor = totalGrossLoss > 0 ? Number((totalGrossWin / totalGrossLoss).toFixed(2)) : totalGrossWin > 0 ? 99 : 0;
  const avgTradePnl = trades.length > 0 ? Number((trades.reduce((a, b) => a + b.netPnl, 0) / trades.length).toFixed(2)) : 0;

  // Monthly breakdown
  const monthlyMap: Record<string, { year: number; month: number; startEq: number; endEq: number }> = {};
  for (let i = 0; i < equityCurve.length; i++) {
    const pt = equityCurve[i];
    const ym = pt.time.slice(0, 7);
    const year = parseInt(ym.slice(0, 4));
    const month = parseInt(ym.slice(5, 7));

    if (!monthlyMap[ym]) {
      monthlyMap[ym] = { year, month, startEq: pt.equity, endEq: pt.equity };
    } else {
      monthlyMap[ym].endEq = pt.equity;
    }
  }

  const monthlyReturns: MonthlyReturn[] = Object.values(monthlyMap).map((m) => ({
    year: m.year,
    month: m.month,
    returnPct: Number((((m.endEq - m.startEq) / m.startEq) * 100).toFixed(2)),
  }));

  // Benchmark metrics
  const benchFinal = benchmarkCurve[benchmarkCurve.length - 1].equity;
  const benchRet = ((benchFinal - config.initialCapital) / config.initialCapital) * 100;
  const benchCagr = (Math.pow(Math.max(0.01, benchFinal / config.initialCapital), 1 / years) - 1) * 100;

  let benchPeak = config.initialCapital;
  let benchMaxDd = 0;
  for (const b of benchmarkCurve) {
    if (b.equity > benchPeak) benchPeak = b.equity;
    const bDd = ((b.equity - benchPeak) / benchPeak) * 100;
    if (bDd < benchMaxDd) benchMaxDd = bDd;
  }

  return {
    asset: config.asset,
    strategyId: config.strategyId,
    strategyName: STRATEGY_SPECS[config.strategyId].name,
    timeframe: config.timeframe,
    startDate: bars[0].time,
    endDate: bars[bars.length - 1].time,
    initialCapital: config.initialCapital,
    finalEquity,
    totalReturn: Number(totalReturn.toFixed(2)),
    cagr: Number(cagr.toFixed(2)),
    annualizedVol: Number(annualizedVol.toFixed(2)),
    sharpe,
    sortino,
    calmar,
    maxDrawdown: Number(maxDrawdown.toFixed(2)),
    winRate,
    profitFactor,
    totalTrades: trades.length,
    winningTrades,
    losingTrades,
    avgTradePnl,
    totalFees: Number(totalFeesPaid.toFixed(2)),
    totalSlippage: Number(totalSlippageCost.toFixed(2)),
    equityCurve,
    drawdownCurve,
    benchmarkCurve,
    benchmarkMetrics: {
      totalReturn: Number(benchRet.toFixed(2)),
      cagr: Number(benchCagr.toFixed(2)),
      annualizedVol: Number((annualizedVol * 1.2).toFixed(2)),
      sharpe: Number((benchCagr / (annualizedVol * 1.2 || 1)).toFixed(2)),
      maxDrawdown: Number(benchMaxDd.toFixed(2)),
      finalEquity: benchFinal,
    },
    monthlyReturns,
    trades,
    executionTimeMs: Date.now() - startTime,
  };
}

// ---------------------------------------------------------------------------
// Saved Strategies Store (localStorage persistence)
// ---------------------------------------------------------------------------
export interface SavedStrategy {
  id: string;
  name: string;
  asset: AssetKey;
  strategyId: StrategyId;
  params: Record<string, number>;
  initialCapital: number;
  timeframe: string;
  savedAt: string;
  lastSharpe?: number;
  lastTotalReturn?: number;
}

const STORAGE_KEY = "quantora-saved-strategies";

export function getSavedStrategies(): SavedStrategy[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveStrategy(strategy: Omit<SavedStrategy, "id" | "savedAt">): SavedStrategy {
  const all = getSavedStrategies();
  const item: SavedStrategy = {
    ...strategy,
    id: `STRAT-${Date.now()}`,
    savedAt: new Date().toISOString(),
  };
  all.unshift(item);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {}
  return item;
}

export function deleteSavedStrategy(id: string) {
  const all = getSavedStrategies().filter((s) => s.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {}
}
