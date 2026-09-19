import { create } from "zustand";

import type { BacktestRequest, SizingMethod, StrategyName, StrategySpec, AssetSymbol } from "./types";

export type RangePreset = "max" | "5y" | "3y" | "1y";

/** Backtest controls, shared by the Backtest and Lab pages so both analyse the same strategy. */
export interface Settings {
  symbol: AssetSymbol;
  strategy: StrategyName;
  /** Overrides only. An empty object means "the strategy's defaults". */
  params: Record<string, number>;
  allowShort: boolean;
  feeBps: number;
  slippageBps: number;
  initialCapital: number;
  sizing: SizingMethod;
  sizingParams: Record<string, number>;
  start: string | null;
  end: string | null;
}

export const DEFAULT_SETTINGS: Settings = {
  symbol: "NVDA",
  strategy: "sma_cross",
  params: {},
  allowShort: false,
  feeBps: 5,
  slippageBps: 2,
  initialCapital: 10_000,
  sizing: "fixed",
  sizingParams: {},
  start: null,
  end: null,
};

interface Store {
  settings: Settings;
  /** Window for the Overview and Correlations pages. */
  range: RangePreset;
  patch: (partial: Partial<Settings>) => void;
  setStrategy: (name: StrategyName) => void;
  setSizing: (method: SizingMethod) => void;
  setRange: (range: RangePreset) => void;
  reset: () => void;
}

export const useSettings = create<Store>()((set) => ({
  settings: DEFAULT_SETTINGS,
  range: "max",
  patch: (partial) => set((s) => ({ settings: { ...s.settings, ...partial } })),
  // Parameters do not carry across strategies: a "window" for one is not a "window" for another.
  setStrategy: (strategy) => set((s) => ({ settings: { ...s.settings, strategy, params: {} } })),
  setSizing: (sizing) => set((s) => ({ settings: { ...s.settings, sizing, sizingParams: {} } })),
  setRange: (range) => set({ range }),
  reset: () => set({ settings: DEFAULT_SETTINGS }),
}));

/** Defaults from the strategy spec with the user's overrides on top. */
export function resolveParams(
  spec: StrategySpec | undefined,
  overrides: Record<string, number>,
): Record<string, number> {
  if (!spec) return { ...overrides };
  const out: Record<string, number> = {};
  for (const [key, range] of Object.entries(spec.params)) out[key] = overrides[key] ?? range.default;
  return out;
}

export function toRequest(settings: Settings, extra: Partial<BacktestRequest> = {}): BacktestRequest {
  return {
    symbol: settings.symbol,
    strategy: settings.strategy,
    params: settings.params,
    allow_short: settings.allowShort,
    initial_capital: settings.initialCapital,
    fee_bps: settings.feeBps,
    slippage_bps: settings.slippageBps,
    sizing: settings.sizing,
    sizing_params: settings.sizingParams,
    start: settings.start,
    end: settings.end,
    ...extra,
  };
}

/** First date of a preset window, counted back from the last available bar. */
export function rangeStart(range: RangePreset, latest: string | null | undefined): string | null {
  if (range === "max" || !latest) return null;
  const years = range === "5y" ? 5 : range === "3y" ? 3 : 1;
  const d = new Date(`${latest.slice(0, 10)}T00:00:00Z`);
  d.setUTCFullYear(d.getUTCFullYear() - years);
  return d.toISOString().slice(0, 10);
}
