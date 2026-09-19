/**
 * Response types for the Quantexa API.
 *
 * The backend converts NaN and Infinity to `null` before serialising (they are
 * not valid JSON), so every numeric statistic that can be undefined is `Num`.
 */

export type Num = number | null;

export type AssetSymbol = "GC=F" | "BTC-USD" | "NVDA" | "BTC" | "SOL" | "GOLD";
export type StrategyName = "sma_cross" | "ema_trend" | "momentum" | "mean_reversion";
export type SizingMethod = "fixed" | "vol_target" | "half_kelly";
export type RebalanceRule = "none" | "monthly" | "quarterly" | "annual";

// --- market ---------------------------------------------------------------

export interface AssetInfo {
  symbol: AssetSymbol;
  name: string;
  asset_class: "commodity" | "crypto" | "equity";
  periods_per_year: number;
  description: string;
  cached_rows: number | null;
  cached_start: string | null;
  cached_end: string | null;
}

export interface StrategyParamSpec {
  min: number;
  max: number;
  default: number;
}

export interface StrategySpec {
  name: StrategyName;
  label: string;
  params: Record<string, StrategyParamSpec>;
}

export interface AssetsResponse {
  assets: AssetInfo[];
  snapshot_generated_at: string | null;
  strategies: StrategySpec[];
  disclaimer: string;
}

export interface ValidationReport {
  symbol: string;
  rows: number;
  start: string;
  end: string;
  duplicate_dates_dropped: number;
  unsorted_fixed: boolean;
  nan_closes_dropped: number;
  non_positive_closes_dropped: number;
  gaps: unknown[];
  ok: boolean;
}

export interface DataMeta {
  symbol: AssetSymbol;
  name: string;
  asset_class: string;
  periods_per_year: number;
  source: string;
  bars: number;
  start: string;
  end: string;
  validation: ValidationReport;
  data_start_setting: string;
}

export interface Candle {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: Num;
}

export interface PricesResponse {
  meta: DataMeta;
  candles: Candle[];
  disclaimer: string;
}

// --- analytics ------------------------------------------------------------

export interface Metrics {
  periods_per_year: number;
  bars: number;
  start: string;
  end: string;
  total_return: Num;
  cagr: Num;
  annualised_volatility: Num;
  sharpe: Num;
  sortino: Num;
  max_drawdown: Num;
  max_drawdown_bars: number;
  longest_drawdown_bars: number;
  drawdown_peak: string | null;
  drawdown_trough: string | null;
  drawdown_recovery: string | null;
  calmar: Num;
  var_95: Num;
  cvar_95: Num;
  skew: Num;
  kurtosis: Num;
  win_rate: Num;
  probabilistic_sharpe: Num;
  final_equity: Num;
  beta?: Num;
}

export interface MetricsResponse {
  benchmark: string | null;
  assets: { meta: DataMeta; metrics: Metrics }[];
  note: string;
  disclaimer: string;
}

export interface AssetAnalytics {
  meta: DataMeta;
  dates: string[];
  close: number[];
  overlays: Record<string, Num[]>;
  returns: Num[];
  rolling_volatility: Num[];
  drawdown: number[];
  returns_histogram: { counts: number[]; edges: number[] };
  metrics: Metrics;
  disclaimer: string;
}

export interface CorrelationBreak {
  pair: string;
  asset_a: string;
  asset_b: string;
  date: string;
  correlation: number;
  baseline_mean: number;
  zscore: number;
  direction: "converging" | "decoupling";
  message: string;
}

export interface RollingPair {
  dates: string[];
  correlation: Num[];
  zscore: Num[];
  baseline_mean: Num[];
  latest: Num;
  latest_z: Num;
}

export interface CorrelationResponse {
  matrix: { symbols: string[]; matrix: Num[][]; bars: number; start: string; end: string; method: string };
  covariance: { symbols: string[]; matrix: Num[][]; annualised: boolean };
  rolling: {
    window: number;
    baseline: number;
    threshold: number;
    pairs: Record<string, RollingPair>;
    events: CorrelationBreak[];
  };
  coverage: {
    per_asset_rows: Record<string, number>;
    common_rows: number;
    common_start: string;
    common_end: string;
    dropped_by_join: Record<string, number>;
  };
  periods_per_year: number;
  note: string;
  disclaimer: string;
}

export type InsightTone = "info" | "neutral" | "positive" | "warning";

export interface InsightCard {
  id: string;
  title: string;
  body: string;
  tone: InsightTone;
  tags: string[];
  evidence: Record<string, unknown>;
}

export interface InsightsResponse {
  generated_from: { symbols: string[]; start: string | null; end: string | null };
  cards: InsightCard[];
  method: string;
  disclaimer: string;
}

// --- backtest -------------------------------------------------------------

export interface StrategyDescriptor {
  name: StrategyName;
  label: string;
  params: Record<string, number>;
  allow_short: boolean;
}

export interface Trade {
  entry_date: string;
  exit_date: string;
  direction: "long" | "short";
  entry_price: number;
  exit_price: number;
  weight: number;
  return_pct: number;
  net_pnl: number;
  bars_held: number;
  open_at_end: boolean;
}

export interface BacktestSeries {
  dates: string[];
  close: number[];
  signal: number[];
  position: number[];
  equity: number[];
  benchmark_equity: number[];
  drawdown: number[];
  net_return: number[];
  cost: number[];
}

export interface BacktestSummary {
  trades: number;
  winning_trades: number;
  trade_win_rate: Num;
  total_turnover: number;
  total_cost_currency: number;
  total_cost_fraction: number;
  gross_total_return: Num;
  net_total_return: Num;
  cost_drag: Num;
  time_in_market: Num;
  avg_holding_bars: Num;
  excess_cagr_vs_benchmark: Num;
  excess_sharpe_vs_benchmark: Num;
}

export interface MonteCarlo {
  available: boolean;
  paths: number;
  block_size: number;
  dates: string[];
  lower: number[];
  median: number[];
  upper: number[];
  lower_pct: number;
  upper_pct: number;
  final_equity: {
    actual: Num;
    p5: Num;
    p25: Num;
    median: Num;
    p75: Num;
    p95: Num;
    probability_of_loss: Num;
  };
  note: string;
}

export interface BiasAudit {
  strategy: StrategyDescriptor;
  causal_test: {
    samples: number;
    mismatches: number;
    passed: boolean;
    first_failures: unknown[];
    note: string;
  };
  lag_test: {
    base_cagr: Num;
    lagged_cagr: Num;
    cagr_delta: Num;
    base_sharpe: Num;
    lagged_sharpe: Num;
    sharpe_delta: Num;
    sharpe_retention: Num;
    fragile: boolean;
    note: string;
  };
  verdict: "pass" | "fail" | "warn";
  badge: string;
  explanation: string;
  random_walk_control?: {
    walks: number;
    bars_per_walk: number;
    mean_cagr: Num;
    median_cagr: Num;
    positive_fraction: Num;
    mean_sharpe: Num;
    note: string;
  };
}

export interface BacktestConfigEcho {
  initial_capital: number;
  fee_bps: number;
  slippage_bps: number;
  sizing: SizingMethod;
  sizing_params: Record<string, number>;
  periods_per_year: number;
  risk_free: number;
  execution_lag: number;
}

export interface BacktestResponse {
  strategy: StrategyDescriptor;
  config: BacktestConfigEcho;
  metrics: Metrics;
  benchmark_metrics: Metrics;
  summary: BacktestSummary;
  trades: Trade[];
  series: BacktestSeries;
  /** The strategy's own indicator panel, aligned to `series.dates`. Warm-up bars are null. */
  indicators: Record<string, Num[]>;
  meta: DataMeta;
  monte_carlo?: MonteCarlo;
  bias_audit?: BiasAudit;
  disclaimer: string;
}

export interface BacktestRequest {
  symbol: AssetSymbol;
  strategy: StrategyName;
  params: Record<string, number>;
  allow_short: boolean;
  initial_capital: number;
  fee_bps: number;
  slippage_bps: number;
  sizing: SizingMethod;
  sizing_params: Record<string, number>;
  start?: string | null;
  end?: string | null;
  include_monte_carlo?: boolean;
  monte_carlo_paths?: number;
  monte_carlo_block?: number;
  include_bias_audit?: boolean;
  bias_audit_samples?: number;
}

export interface ExplainResponse {
  date: string;
  close: number;
  signal: number;
  rule: string;
  indicators: Record<string, Num>;
  strategy: StrategyDescriptor;
  execution: {
    signal_decided_on: string;
    position_effective_from: string | null;
    position_held_on_this_bar: number;
    target_weight_set_on_this_bar: number;
    cost_charged_on_this_bar: number;
    equity_on_this_bar: number;
    note: string;
  };
}

// --- robustness -----------------------------------------------------------

export interface GridCell {
  params: Record<string, number>;
  sharpe: Num;
  cagr: Num;
  max_drawdown: Num;
  trades: number;
}

export interface ParameterGrid {
  available: boolean;
  strategy: StrategyName;
  combinations: number;
  results: GridCell[];
  heatmap: {
    axes: Record<string, number[]>;
    keys: string[];
    z: Num[][];
    x: number[];
    y: number[];
    x_key: string;
    y_key: string;
  } | null;
  best: GridCell | null;
  sharpe_mean: Num;
  sharpe_std: Num;
  positive_fraction: Num;
  plateau_stability: Num;
  trial_sharpes: number[];
}

export interface CostSweep {
  available: boolean;
  points: { bps: number; sharpe: Num; cagr: Num; net_total_return: Num; beats_benchmark: boolean }[];
  benchmark_sharpe: Num;
  benchmark_cagr: Num;
  break_even_bps: Num;
  note: string;
}

export interface WalkForwardFold {
  train_start: string;
  train_end: string;
  test_start: string;
  test_end: string;
  chosen_params: Record<string, number>;
  in_sample_sharpe: Num;
  in_sample_cagr: Num;
  out_of_sample_sharpe: Num;
  out_of_sample_cagr: Num;
  out_of_sample_return: Num;
}

export interface WalkForward {
  available: boolean;
  folds: WalkForwardFold[];
  fold_count: number;
  mean_in_sample_cagr: Num;
  mean_out_of_sample_cagr: Num;
  walk_forward_efficiency: Num;
  verdict: "strong" | "weak" | "mixed" | string;
  stitched_out_of_sample: { dates: string[]; equity: number[]; metrics: Metrics } | null;
  note: string;
}

export interface ScoreComponent {
  value: Num;
  score: number;
  weight: number;
  label: string;
  explanation: string;
}

export interface RobustnessScore {
  score: number;
  verdict: "robust" | "mixed" | "fragile";
  summary: string;
  components: {
    deflated_sharpe: ScoreComponent;
    plateau_stability: ScoreComponent;
    walk_forward_efficiency: ScoreComponent;
  };
  weakest_component: string;
  probabilistic_sharpe: Num;
  observed_sharpe: Num;
  trials: number;
}

export interface RobustnessResponse {
  meta: DataMeta;
  strategy: StrategyName;
  params: Record<string, number>;
  grid_used: Record<string, number[]> | null;
  parameter_grid?: ParameterGrid;
  cost_sweep?: CostSweep;
  walk_forward?: WalkForward;
  score: RobustnessScore;
  disclaimer: string;
}

// --- regimes / portfolio ----------------------------------------------------

export type RegimeName = "Bull / Low vol" | "Bull / High vol" | "Bear / Low vol" | "Bear / High vol";

export interface RegimeSegment {
  regime: string;
  color: string;
  start: string;
  end: string;
}

export interface RegimeStat {
  regime: RegimeName | string;
  color: string;
  bars: number;
  share: number;
  benchmark_mean_return: Num;
  benchmark_annualised: Num;
  benchmark_volatility: Num;
  benchmark_sharpe: Num;
  strategy_mean_return?: Num;
  strategy_annualised?: Num;
  strategy_volatility?: Num;
  strategy_sharpe?: Num;
  strategy_win_rate?: Num;
}

export interface HmmState {
  state: string;
  bars: number;
  share: number;
  mean_return_annualised: Num;
  volatility_annualised: Num;
  sharpe: Num;
}

export interface RegimesResponse {
  meta: DataMeta;
  strategy: StrategyDescriptor | null;
  segments: RegimeSegment[];
  series: {
    dates: string[];
    close: number[];
    trend_ma: Num[];
    volatility: Num[];
    vol_median: Num[];
    regime: (string | null)[];
  };
  stats: RegimeStat[];
  definition: { trend: string; volatility: string };
  hmm?: {
    available: boolean;
    reason?: string;
    n_states?: number;
    in_sample?: boolean;
    caveat?: string;
    segments?: RegimeSegment[];
    states?: HmmState[];
  };
  disclaimer: string;
}

export interface PortfolioResponse {
  symbols: string[];
  target_weights: Record<string, number>;
  rebalance: RebalanceRule;
  metrics: Metrics;
  buy_and_hold_metrics: Metrics;
  total_cost_fraction: number;
  series: {
    dates: string[];
    equity: number[];
    buy_and_hold_equity: number[];
    weights: Record<string, number[]>;
  };
  periods_per_year: number;
  note: string;
  disclaimer: string;
}
