import type { Candle } from "./types";

/**
 * Inner join on common dates. Bitcoin trades on weekends and Gold and NVIDIA do
 * not, so comparing them means dropping the weekend bars rather than
 * forward-filling the others, which would invent returns that never happened.
 */
export function alignCloses<K extends string>(
  candles: Record<K, Candle[]>,
): { dates: string[]; closes: Record<K, number[]> } {
  const keys = Object.keys(candles) as K[];
  if (keys.length === 0) return { dates: [], closes: {} as Record<K, number[]> };

  const lookups = keys.map((k) => new Map(candles[k].map((c) => [c.date, c.close])));
  const dates = candles[keys[0]].map((c) => c.date).filter((d) => lookups.every((m) => m.has(d)));

  const closes = {} as Record<K, number[]>;
  keys.forEach((k, i) => {
    closes[k] = dates.map((d) => lookups[i].get(d) as number);
  });
  return { dates, closes };
}

/** Index a series to `base` at its first value, so different price scales share one axis. */
export function rebase(values: number[], base = 100): number[] {
  const first = values[0];
  if (!first) return values.map(() => NaN);
  return values.map((v) => (v / first) * base);
}

export const last = <T>(xs: T[]): T | undefined => xs[xs.length - 1];

/** Fractional change over the final `bars` bars. */
export function changeOver(values: number[], bars: number): number | null {
  if (values.length <= bars) return null;
  const from = values[values.length - 1 - bars];
  return from ? values[values.length - 1] / from - 1 : null;
}
