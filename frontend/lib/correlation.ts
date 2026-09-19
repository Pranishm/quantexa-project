import { marketHub, type AssetKey } from "./market-data-hub";

export interface CorrelationMatrixResult {
  assets: AssetKey[];
  matrix: Record<AssetKey, Record<AssetKey, number>>;
  timeframe: string;
  sampleSize: number;
}

export interface RollingCorrelationPoint {
  time: string;
  correlation: number;
}

export interface AssetRiskReturn {
  asset: AssetKey;
  totalReturn: number;
  cagr: number;
  annualizedVol: number;
  sharpe: number;
  maxDrawdown: number;
}

export interface RelationshipLink {
  source: AssetKey;
  target: AssetKey;
  correlation: number;
  strength: "STRONG_POS" | "MODERATE_POS" | "NEUTRAL" | "MODERATE_NEG" | "STRONG_NEG";
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function calculateDailyReturns(bars: { close: number; time: string }[]): { time: string; return: number }[] {
  const returns: { time: string; return: number }[] = [];
  for (let i = 1; i < bars.length; i++) {
    const prev = bars[i - 1].close;
    const curr = bars[i].close;
    returns.push({
      time: bars[i].time,
      return: prev === 0 ? 0 : Math.log(curr / prev),
    });
  }
  return returns;
}

function pearsonCorrelation(x: number[], y: number[]): number {
  const n = Math.min(x.length, y.length);
  if (n < 2) return 0;

  const sliceX = x.slice(0, n);
  const sliceY = y.slice(0, n);

  const meanX = sliceX.reduce((a, b) => a + b, 0) / n;
  const meanY = sliceY.reduce((a, b) => a + b, 0) / n;

  let num = 0;
  let denX = 0;
  let denY = 0;

  for (let i = 0; i < n; i++) {
    const dx = sliceX[i] - meanX;
    const dy = sliceY[i] - meanY;
    num += dx * dy;
    denX += dx * dx;
    denY += dy * dy;
  }

  const den = Math.sqrt(denX * denY);
  if (den === 0) return 0;
  return Number(Math.max(-1, Math.min(1, num / den)).toFixed(2));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Compute the full pairwise Pearson correlation matrix for the specified assets and timeframe.
 */
export function calculateCorrelationMatrix(
  assets: AssetKey[] = ["BTC", "SOL", "GOLD", "NVDA"],
  timeframe: string = "1Y",
): CorrelationMatrixResult {
  const returnMap: Record<AssetKey, Record<string, number>> = {} as any;

  for (const a of assets) {
    const bars = marketHub.getBars(a, timeframe);
    const rets = calculateDailyReturns(bars);
    returnMap[a] = {};
    for (const r of rets) {
      returnMap[a][r.time] = r.return;
    }
  }

  // Align dates across all assets
  const firstAsset = assets[0];
  const allDates = Object.keys(returnMap[firstAsset] || {}).sort();
  const commonDates = allDates.filter((date) => assets.every((a) => returnMap[a][date] !== undefined));

  const matrix: Record<AssetKey, Record<AssetKey, number>> = {} as any;

  for (const a1 of assets) {
    matrix[a1] = {} as any;
    const vector1 = commonDates.map((d) => returnMap[a1][d]);

    for (const a2 of assets) {
      if (a1 === a2) {
        matrix[a1][a2] = 1.0;
      } else {
        const vector2 = commonDates.map((d) => returnMap[a2][d]);
        matrix[a1][a2] = pearsonCorrelation(vector1, vector2);
      }
    }
  }

  return {
    assets,
    matrix,
    timeframe,
    sampleSize: commonDates.length,
  };
}

/**
 * Compute rolling correlation between two assets over a given window size (20, 30, 60, 90 days).
 */
export function calculateRollingCorrelation(
  assetA: AssetKey = "BTC",
  assetB: AssetKey = "SOL",
  windowDays: number = 30,
  timeframe: string = "1Y",
): RollingCorrelationPoint[] {
  const barsA = marketHub.getBars(assetA, timeframe);
  const barsB = marketHub.getBars(assetB, timeframe);

  const retsA = calculateDailyReturns(barsA);
  const retsB = calculateDailyReturns(barsB);

  const mapB = new Map(retsB.map((r) => [r.time, r.return]));
  const aligned: { time: string; a: number; b: number }[] = [];

  for (const r of retsA) {
    if (mapB.has(r.time)) {
      aligned.push({ time: r.time, a: r.return, b: mapB.get(r.time)! });
    }
  }

  const result: RollingCorrelationPoint[] = [];

  for (let i = windowDays; i <= aligned.length; i++) {
    const slice = aligned.slice(i - windowDays, i);
    const vecA = slice.map((s) => s.a);
    const vecB = slice.map((s) => s.b);
    const corr = pearsonCorrelation(vecA, vecB);
    result.push({
      time: aligned[i - 1].time,
      correlation: corr,
    });
  }

  return result;
}

/**
 * Compute risk and return statistics for all selected assets.
 */
export function calculateRiskReturnComparison(
  assets: AssetKey[] = ["BTC", "SOL", "GOLD", "NVDA"],
  timeframe: string = "1Y",
): AssetRiskReturn[] {
  return assets.map((a) => {
    const bars = marketHub.getBars(a, timeframe);
    if (bars.length < 2) {
      return { asset: a, totalReturn: 0, cagr: 0, annualizedVol: 0, sharpe: 0, maxDrawdown: 0 };
    }

    const startPrice = bars[0].close;
    const endPrice = bars[bars.length - 1].close;
    const totalReturn = ((endPrice - startPrice) / startPrice) * 100;

    const days = bars.length;
    const years = Math.max(0.08, days / 252);
    const cagr = (Math.pow(endPrice / startPrice, 1 / years) - 1) * 100;

    // Daily returns
    const dailyRets: number[] = [];
    for (let i = 1; i < bars.length; i++) {
      dailyRets.push((bars[i].close - bars[i - 1].close) / bars[i - 1].close);
    }
    const meanRet = dailyRets.reduce((acc, v) => acc + v, 0) / dailyRets.length;
    const variance = dailyRets.reduce((acc, v) => acc + (v - meanRet) ** 2, 0) / dailyRets.length;
    const dailyVol = Math.sqrt(variance);
    const annualizedVol = dailyVol * Math.sqrt(252) * 100;

    // Sharpe (assuming 3% risk-free rate)
    const rf = 0.03;
    const excessReturn = cagr / 100 - rf;
    const sharpe = annualizedVol > 0 ? Number((excessReturn / (annualizedVol / 100)).toFixed(2)) : 0;

    // Max Drawdown
    let peak = startPrice;
    let maxDd = 0;
    for (const b of bars) {
      if (b.close > peak) peak = b.close;
      const dd = ((b.close - peak) / peak) * 100;
      if (dd < maxDd) maxDd = dd;
    }

    return {
      asset: a,
      totalReturn: Number(totalReturn.toFixed(2)),
      cagr: Number(cagr.toFixed(2)),
      annualizedVol: Number(annualizedVol.toFixed(2)),
      sharpe,
      maxDrawdown: Number(maxDd.toFixed(2)),
    };
  });
}

/**
 * Generate network relationship links from correlation matrix.
 */
export function getRelationshipLinks(matrix: Record<AssetKey, Record<AssetKey, number>>): RelationshipLink[] {
  const assets = Object.keys(matrix) as AssetKey[];
  const links: RelationshipLink[] = [];

  for (let i = 0; i < assets.length; i++) {
    for (let j = i + 1; j < assets.length; j++) {
      const a1 = assets[i];
      const a2 = assets[j];
      const corr = matrix[a1][a2] ?? 0;

      let strength: RelationshipLink["strength"] = "NEUTRAL";
      if (corr >= 0.6) strength = "STRONG_POS";
      else if (corr >= 0.25) strength = "MODERATE_POS";
      else if (corr <= -0.5) strength = "STRONG_NEG";
      else if (corr <= -0.2) strength = "MODERATE_NEG";

      links.push({ source: a1, target: a2, correlation: corr, strength });
    }
  }

  return links;
}
