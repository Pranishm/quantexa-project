"use client";

import { keepPreviousData, useQueries, useQuery } from "@tanstack/react-query";

import { api, ApiError, type DateRange } from "./api";
import type { AssetSymbol, BacktestRequest, RebalanceRule, StrategyName } from "./types";

/** A 4xx is the caller's mistake and will not fix itself; anything else gets one more try. */
export const shouldRetry = (failures: number, error: unknown) =>
  error instanceof ApiError && error.status >= 400 && error.status < 500 ? false : failures < 1;

/** The data is a snapshot, so results stay fresh for a long time. */
const STALE = 10 * 60_000;

export const useAssets = () =>
  useQuery({ queryKey: ["assets"], queryFn: ({ signal }) => api.assets(signal), staleTime: Infinity });

export const usePrices = (symbol: AssetSymbol, range: DateRange = {}, enabled = true) =>
  useQuery({
    queryKey: ["prices", symbol, range.start ?? null, range.end ?? null],
    queryFn: ({ signal }) => api.prices(symbol, range, signal),
    enabled,
    staleTime: STALE,
    placeholderData: keepPreviousData,
  });

/** Several assets at once. Uses useQueries because a loop of hooks would break the rules of hooks. */
export const usePricesMany = (symbols: AssetSymbol[], range: DateRange = {}, enabled = true) =>
  useQueries({
    queries: symbols.map((symbol) => ({
      queryKey: ["prices", symbol, range.start ?? null, range.end ?? null],
      queryFn: ({ signal }: { signal: AbortSignal }) => api.prices(symbol, range, signal),
      staleTime: STALE,
      enabled,
    })),
    combine: (results) => ({
      data: results.map((r) => r.data),
      isPending: results.some((r) => r.isPending),
      error: results.find((r) => r.error)?.error ?? null,
      refetch: () => results.forEach((r) => void r.refetch()),
    }),
  });

export const useMetrics = (
  symbols: AssetSymbol[],
  range: DateRange = {},
  benchmark?: AssetSymbol | null,
  enabled = true,
) =>
  useQuery({
    queryKey: ["metrics", symbols, range.start ?? null, range.end ?? null, benchmark ?? null],
    queryFn: ({ signal }) => api.metrics({ symbols, benchmark, ...range }, signal),
    enabled,
    staleTime: STALE,
    placeholderData: keepPreviousData,
  });

export const useAssetAnalytics = (symbol: AssetSymbol, range: DateRange = {}, enabled = true) =>
  useQuery({
    queryKey: ["asset-analytics", symbol, range.start ?? null, range.end ?? null],
    queryFn: ({ signal }) => api.assetAnalytics(symbol, range, signal),
    enabled,
    staleTime: STALE,
    placeholderData: keepPreviousData,
  });

export const useCorrelation = (window: number, range: DateRange = {}, enabled = true) =>
  useQuery({
    queryKey: ["correlation", window, range.start ?? null, range.end ?? null],
    queryFn: ({ signal }) => api.correlation({ window, ...range }, signal),
    enabled,
    staleTime: STALE,
    placeholderData: keepPreviousData,
  });

export const useInsights = (range: DateRange = {}, enabled = true) =>
  useQuery({
    queryKey: ["insights", range.start ?? null, range.end ?? null],
    queryFn: ({ signal }) => api.insights(range, signal),
    enabled,
    staleTime: STALE,
    placeholderData: keepPreviousData,
  });

export const useBacktest = (request: BacktestRequest) =>
  useQuery({
    queryKey: ["backtest", request],
    queryFn: ({ signal }) => api.backtest(request, signal),
    staleTime: STALE,
    // Keep the last result on screen (faded) while a changed setting recomputes.
    placeholderData: keepPreviousData,
  });

export const useExplain = (request: BacktestRequest, at: string | null) =>
  useQuery({
    queryKey: ["explain", request, at],
    queryFn: ({ signal }) =>
      api.explain({ ...request, at: at as string, include_monte_carlo: false, include_bias_audit: false }, signal),
    enabled: at !== null,
    staleTime: STALE,
  });

export const useRobustness = (request: BacktestRequest, enabled: boolean) => {
  // Sizing does not affect the robustness maths, so leave it out of the key and the body.
  const { sizing: _sizing, sizing_params: _sizingParams, ...body } = request;
  void _sizing;
  void _sizingParams;
  return useQuery({
    queryKey: ["robustness", body],
    queryFn: ({ signal }) => api.robustness(body, signal),
    enabled,
    staleTime: STALE,
    placeholderData: keepPreviousData,
  });
};

export const useRegimes = (symbol: AssetSymbol, range: DateRange, strategy: StrategyName | null, enabled = true) =>
  useQuery({
    queryKey: ["regimes", symbol, range.start ?? null, range.end ?? null, strategy],
    queryFn: ({ signal }) => api.regimes({ symbol, strategy, include_hmm: true, ...range }, signal),
    enabled,
    staleTime: STALE,
    placeholderData: keepPreviousData,
  });

export const usePortfolio = (
  weights: Partial<Record<AssetSymbol, number>>,
  rebalance: RebalanceRule,
  range: DateRange = {},
) =>
  useQuery({
    queryKey: ["portfolio", weights, rebalance, range.start ?? null, range.end ?? null],
    queryFn: ({ signal }) => api.portfolio({ weights, rebalance, ...range }, signal),
    staleTime: STALE,
    placeholderData: keepPreviousData,
  });
