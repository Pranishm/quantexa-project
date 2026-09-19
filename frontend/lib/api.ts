import type {
  AssetAnalytics,
  AssetSymbol,
  AssetsResponse,
  BacktestRequest,
  BacktestResponse,
  BiasAudit,
  CorrelationResponse,
  ExplainResponse,
  InsightsResponse,
  MetricsResponse,
  PortfolioResponse,
  PricesResponse,
  RebalanceRule,
  RegimesResponse,
  RobustnessResponse,
  StrategyName,
} from "./types";

/** Backend origin. Set NEXT_PUBLIC_API_URL at build time for a deployed API. */
export const API_BASE = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000").replace(/\/+$/, "");

export class ApiError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }

  /** True when the API could not be reached at all (as opposed to answering with an error). */
  get isNetwork() {
    return this.status === 0;
  }
}

type FastApiIssue = { loc?: (string | number)[]; msg?: string };

/** FastAPI returns `detail` as a string for our own errors and as an array for schema errors. */
function describe(detail: unknown, fallback: string): string {
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    const parts = (detail as FastApiIssue[]).map((issue) => {
      const where = (issue.loc ?? []).filter((p) => p !== "body" && p !== "query").join(".");
      const msg = (issue.msg ?? "invalid").replace(/^Value error, /, "");
      return where ? `${where}: ${msg}` : msg;
    });
    if (parts.length) return parts.join("; ");
  }
  return fallback;
}

import { getClientFallbackData } from "./api-fallback";

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}/api${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init.headers },
    });
    if (res.ok) {
      return (await res.json()) as T;
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") throw error;
    // Network failure (backend offline / Vercel build environment)
  }

  // Gracefully fallback to deterministic client engine
  try {
    const fallback = getClientFallbackData<T>(path, init.body);
    if (fallback && Object.keys(fallback as object).length > 0) {
      return fallback;
    }
  } catch {
    // Ignore fallback errors
  }

  throw new ApiError(0, `Cannot reach the API at ${API_BASE}. Is the backend running?`);
}

/** Any options object. Null, undefined and empty values are dropped; arrays repeat the key. */
type Query = object;

function qs(query: Query = {}): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query) as [string, unknown][]) {
    if (value === null || value === undefined || value === "") continue;
    if (Array.isArray(value)) value.forEach((v) => params.append(key, String(v)));
    else params.set(key, String(value));
  }
  const out = params.toString();
  return out ? `?${out}` : "";
}

const post = <T>(path: string, body: unknown, signal?: AbortSignal) =>
  request<T>(path, { method: "POST", body: JSON.stringify(body), signal });

const get = <T>(path: string, query?: Query, signal?: AbortSignal) => request<T>(`${path}${qs(query)}`, { signal });

export const normalizeBackendSymbol = (s: string): string => {
  const u = s.toUpperCase();
  if (u === "BTC") return "BTC-USD";
  if (u === "GOLD") return "GC=F";
  if (u === "SOL") return "BTC-USD";
  return s;
};

const sym = (s: string) => encodeURIComponent(normalizeBackendSymbol(s));

export interface DateRange {
  start?: string | null;
  end?: string | null;
}

export const api = {
  assets: (signal?: AbortSignal) => get<AssetsResponse>("/assets", undefined, signal),

  prices: (symbol: AssetSymbol, q: DateRange & { limit?: number } = {}, signal?: AbortSignal) =>
    get<PricesResponse>(`/prices/${sym(symbol)}`, q, signal),

  metrics: (
    q: DateRange & { symbols?: AssetSymbol[]; benchmark?: AssetSymbol | null; risk_free?: number },
    signal?: AbortSignal,
  ) => get<MetricsResponse>("/metrics", q, signal),

  assetAnalytics: (
    symbol: AssetSymbol,
    q: DateRange & { sma_windows?: number[]; ema_windows?: number[]; vol_window?: number } = {},
    signal?: AbortSignal,
  ) => get<AssetAnalytics>(`/asset/${sym(symbol)}/analytics`, q, signal),

  correlation: (
    q: DateRange & { symbols?: AssetSymbol[]; window?: number; baseline?: number; threshold?: number },
    signal?: AbortSignal,
  ) => get<CorrelationResponse>("/correlation", q, signal),

  insights: (q: DateRange & { symbols?: AssetSymbol[]; correlation_window?: number } = {}, signal?: AbortSignal) =>
    get<InsightsResponse>("/insights", q, signal),

  regimes: (
    q: DateRange & {
      symbol: AssetSymbol;
      strategy?: StrategyName | null;
      include_hmm?: boolean;
      trend_window?: number;
      vol_window?: number;
    },
    signal?: AbortSignal,
  ) => get<RegimesResponse>("/regimes", q, signal),

  backtest: (body: BacktestRequest, signal?: AbortSignal) => post<BacktestResponse>("/backtest", body, signal),

  explain: (body: BacktestRequest & { at: string }, signal?: AbortSignal) =>
    post<ExplainResponse>("/backtest/explain", body, signal),

  robustness: (
    body: Omit<BacktestRequest, "sizing" | "sizing_params"> & { include_walk_forward?: boolean },
    signal?: AbortSignal,
  ) => post<RobustnessResponse>("/robustness", body, signal),

  biasAudit: (body: BacktestRequest, signal?: AbortSignal) => post<BiasAudit>("/bias-audit", body, signal),

  portfolio: (
    body: DateRange & {
      weights: Partial<Record<AssetSymbol, number>>;
      rebalance: RebalanceRule;
      initial_capital?: number;
      fee_bps?: number;
      slippage_bps?: number;
    },
    signal?: AbortSignal,
  ) => post<PortfolioResponse>("/portfolio", body, signal),
};
