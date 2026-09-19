"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { ChartCard } from "@/components/charts/chart-card";
import { EChart, Heatmap, PriceChart, TimeSeriesChart } from "@/components/charts/lazy";
import type { RibbonSpec } from "@/components/charts/price-chart";
import type { TsSeries } from "@/components/charts/time-series-chart";
import { BiasBadge } from "@/components/features/backtest/bias-badge";
import { BacktestControls } from "@/components/features/backtest/controls";
import { ReplayControls } from "@/components/features/lab/replay";
import { RobustnessScoreCard } from "@/components/features/lab/robustness-score";
import { InfoTip } from "@/components/info-tip";
import { PageHeader } from "@/components/page-header";
import { ChartSkeleton, EmptyState, ErrorState } from "@/components/states";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BENCHMARK, INK, REGIME_ORDER, STATUS, SURFACE, assetColor, assetName, regimeFill } from "@/lib/colors";
import { compactMoney, date, integer, num, pct, signedPct } from "@/lib/format";
import { useBacktest, useRegimes, useRobustness } from "@/lib/queries";
import { toRequest, useSettings } from "@/lib/store";
import { useRangeWindow } from "@/lib/use-range";

const formatSharpe = (v: number) => num(v, 2);
const formatMoney = (v: number) => compactMoney(v);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export function LabView() {
  const settings = useSettings((s) => s.settings);
  const request = useMemo(() => toRequest(settings), [settings]);
  const { range } = useRangeWindow();

  const backtest = useBacktest(request);
  const [tab, setTab] = useState("robustness");
  // Robustness is a heavy grid search, so it only runs once its tab is opened.
  const [robustnessAsked, setRobustnessAsked] = useState(false);
  const robustness = useRobustness(request, robustnessAsked || tab === "robustness");
  const regimes = useRegimes(settings.symbol, range, settings.strategy, tab === "regimes");

  const color = assetColor(settings.symbol);
  const data = backtest.data;

  // --- replay --------------------------------------------------------------
  const total = data?.series.dates.length ?? 0;
  const [cursor, setCursor] = useState<number | null>(null);
  const effectiveCursor = cursor === null ? total : Math.min(cursor, total);

  const replaySlice = useMemo(() => {
    if (!data) return null;
    const n = effectiveCursor;
    const s = data.series;
    return {
      dates: s.dates.slice(0, n),
      close: s.close.slice(0, n),
      equity: s.equity.slice(0, n),
      benchmark: s.benchmark_equity.slice(0, n),
    };
  }, [data, effectiveCursor]);

  const replaySeries: TsSeries[] = useMemo(
    () =>
      replaySlice
        ? [
            { id: "strategy", label: "Strategy", color, values: replaySlice.equity },
            { id: "benchmark", label: "Buy and hold", color: BENCHMARK, values: replaySlice.benchmark, dashed: true },
          ]
        : [],
    [replaySlice, color],
  );

  // --- parameter grid ------------------------------------------------------
  const grid = robustness.data?.parameter_grid;
  const heatmap = useMemo(() => {
    if (!grid?.available || !grid.heatmap) return null;
    const h = grid.heatmap;
    const best = grid.best
      ? {
          x: h.x.indexOf(grid.best.params[h.x_key]),
          y: h.y.indexOf(grid.best.params[h.y_key]),
        }
      : null;
    const cell = new Map(grid.results.map((r) => [`${r.params[h.x_key]}|${r.params[h.y_key]}`, r]));
    return {
      x: h.x.map(String),
      y: h.y.map(String),
      // heatmap wants values[y][x]; the API already ships z in that shape
      z: h.z,
      xKey: h.x_key,
      yKey: h.y_key,
      best: best && best.x >= 0 && best.y >= 0 ? best : null,
      detail: (xi: number, yi: number) => {
        const r = cell.get(`${h.x[xi]}|${h.y[yi]}`);
        return r
          ? `CAGR ${signedPct(r.cagr)} · max DD ${pct(r.max_drawdown)} · ${integer(r.trades)} trades`
          : undefined;
      },
      limit: Math.max(0.5, ...h.z.flat().map((v) => Math.abs(v ?? 0))),
    };
  }, [grid]);

  // --- cost sweep ----------------------------------------------------------
  const sweep = robustness.data?.cost_sweep;
  const costOption = useMemo(() => {
    if (!sweep?.available) return null;
    const bps = sweep.points.map((p) => p.bps);
    const sharpes = sweep.points.map((p) => p.sharpe);
    const benchmark = sweep.benchmark_sharpe;
    const breakEven = sweep.break_even_bps;
    return {
      animation: false,
      grid: { left: 48, right: 18, top: 18, bottom: 42 },
      tooltip: {
        trigger: "axis",
        formatter: (p: { dataIndex: number }[]) => {
          const i = p[0].dataIndex;
          const pt = sweep.points[i];
          return `${pt.bps} bps<br/>Sharpe <b>${num(pt.sharpe)}</b><br/>CAGR ${signedPct(pt.cagr)}`;
        },
      },
      xAxis: {
        type: "category",
        data: bps.map(String),
        name: "round-trip cost (bps)",
        nameLocation: "middle",
        nameGap: 28,
        nameTextStyle: { color: INK.muted },
        axisLabel: { color: INK.muted },
      },
      yAxis: { type: "value", name: "Sharpe", nameTextStyle: { color: INK.muted }, axisLabel: { color: INK.muted } },
      series: [
        {
          type: "line",
          data: sharpes,
          smooth: false,
          symbol: "circle",
          symbolSize: 8,
          lineStyle: { width: 2, color },
          itemStyle: { color, borderColor: SURFACE, borderWidth: 2 },
          markLine: {
            symbol: "none",
            silent: true,
            data: [
              ...(benchmark !== null
                ? [
                    {
                      yAxis: benchmark,
                      lineStyle: { color: BENCHMARK, width: 1, type: "dashed" as const },
                      label: {
                        formatter: `buy and hold ${num(benchmark)}`,
                        color: INK.secondary,
                        position: "insideEndTop" as const,
                      },
                    },
                  ]
                : []),
              ...(breakEven !== null && breakEven > 0
                ? [
                    {
                      xAxis: bps.findIndex((b) => b >= breakEven),
                      lineStyle: { color: STATUS.warning, width: 1 },
                      label: {
                        formatter: `break-even ${breakEven} bps`,
                        color: STATUS.warning,
                        position: "end" as const,
                      },
                    },
                  ]
                : []),
            ],
          },
        },
      ],
    };
  }, [sweep, color]);

  // --- regimes -------------------------------------------------------------
  const ribbon: RibbonSpec | null = useMemo(
    () => (regimes.data ? { regimes: regimes.data.series.regime, fill: regimeFill } : null),
    [regimes.data],
  );

  const wf = robustness.data?.walk_forward;

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <PageHeader
          title="Lab"
          description="The tests that decide whether a backtest is an edge or an artefact: parameter stability, cost tolerance, unseen data, regimes, and a bar-by-bar replay."
        />
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start">
        <motion.div variants={itemVariants} className="lg:sticky lg:top-20">
          <BacktestControls compact />
        </motion.div>

        <motion.div variants={itemVariants} className="min-w-0 space-y-6">
          {backtest.error ? (
            <ErrorState error={backtest.error} title="Backtest failed" onRetry={() => void backtest.refetch()} />
          ) : null}

          <Tabs
            value={tab}
            onValueChange={(v) => {
              setTab(v);
              if (v === "robustness") setRobustnessAsked(true);
            }}
          >
            <TabsList className="w-full">
              <TabsTrigger value="robustness">Robustness</TabsTrigger>
              <TabsTrigger value="regimes">Regimes</TabsTrigger>
              <TabsTrigger value="audit">Bias audit</TabsTrigger>
              <TabsTrigger value="replay">Replay</TabsTrigger>
            </TabsList>

            {/* ---------------- robustness ---------------- */}
            <TabsContent value="robustness" className="mt-6 space-y-6">
              {robustness.error ? (
                <ErrorState
                  error={robustness.error}
                  title="Robustness run failed"
                  onRetry={() => void robustness.refetch()}
                />
              ) : null}

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
                  <CardHeader className="px-4">
                    <CardTitle className="flex items-center gap-1.5 text-base font-medium text-[var(--color-ink)]">
                      Overfitting meter
                      <InfoTip label="About the score">
                        Three independent checks, weighted into one number: is the Sharpe real once the parameter search
                        is charged for (Deflated Sharpe), do neighbouring parameters work too (stability), and does it
                        survive data it was never fitted on (walk-forward)?
                      </InfoTip>
                    </CardTitle>
                    <CardDescription className="text-xs text-[var(--color-ink-dim)]">Higher is better. Every part is shown.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4">
                    {robustness.data ? (
                      <RobustnessScoreCard score={robustness.data.score} />
                    ) : (
                      <Skeleton className="h-64 w-full" />
                    )}
                  </CardContent>
                </Card>

                <ChartCard
                  title="Cost break-even"
                  description={sweep?.note ?? "Sharpe as trading costs rise from 0 to 50 bps."}
                  legend={[
                    { label: "Strategy", color },
                    { label: "Buy and hold", color: BENCHMARK },
                  ]}
                  refreshing={robustness.isPlaceholderData}
                  table={
                    sweep?.available
                      ? {
                          csvName: "cost-sweep.csv",
                          rows: sweep.points,
                          columns: [
                            { key: "bps", label: "Cost (bps)", align: "right", value: (r) => r.bps },
                            {
                              key: "sharpe",
                              label: "Sharpe",
                              align: "right",
                              value: (r) => r.sharpe,
                              display: (r) => num(r.sharpe),
                            },
                            {
                              key: "cagr",
                              label: "CAGR",
                              align: "right",
                              value: (r) => r.cagr,
                              display: (r) => signedPct(r.cagr),
                            },
                            {
                              key: "beats",
                              label: "Beats buy & hold",
                              value: (r) => (r.beats_benchmark ? "yes" : "no"),
                            },
                          ],
                        }
                      : undefined
                  }
                >
                  {costOption ? (
                    <EChart option={costOption} height={300} ariaLabel="Sharpe ratio as trading costs increase" />
                  ) : (
                    <ChartSkeleton height={300} />
                  )}
                </ChartCard>
              </div>

              <ChartCard
                title="Parameter grid"
                description={
                  grid?.available
                    ? `Sharpe for ${integer(grid.combinations)} parameter combinations. A lone bright cell in a dark field is a fluke; a broad plateau is an edge.`
                    : "Sharpe across the parameter grid."
                }
                refreshing={robustness.isPlaceholderData}
                table={
                  grid?.available
                    ? {
                        csvName: "parameter-grid.csv",
                        rows: grid.results,
                        columns: [
                          ...Object.keys(grid.results[0]?.params ?? {}).map((k) => ({
                            key: k,
                            label: k,
                            align: "right" as const,
                            value: (r: (typeof grid.results)[number]) => r.params[k],
                          })),
                          {
                            key: "sharpe",
                            label: "Sharpe",
                            align: "right" as const,
                            value: (r: (typeof grid.results)[number]) => r.sharpe,
                            display: (r: (typeof grid.results)[number]) => num(r.sharpe),
                          },
                          {
                            key: "cagr",
                            label: "CAGR",
                            align: "right" as const,
                            value: (r: (typeof grid.results)[number]) => r.cagr,
                            display: (r: (typeof grid.results)[number]) => signedPct(r.cagr),
                          },
                          {
                            key: "trades",
                            label: "Trades",
                            align: "right" as const,
                            value: (r: (typeof grid.results)[number]) => r.trades,
                          },
                        ],
                      }
                    : undefined
                }
                footer={
                  grid?.available ? (
                    <>
                      Best:{" "}
                      {Object.entries(grid.best?.params ?? {})
                        .map(([k, v]) => `${k} ${v}`)
                        .join(", ")}{" "}
                      at Sharpe {num(grid.best?.sharpe)}. Neighbours keep {pct(grid.plateau_stability, 0)} of it.
                    </>
                  ) : null
                }
              >
                {heatmap ? (
                  <Heatmap
                    xLabels={heatmap.x}
                    yLabels={heatmap.y}
                    values={heatmap.z}
                    limit={heatmap.limit}
                    format={formatSharpe}
                    xName={heatmap.xKey}
                    yName={heatmap.yKey}
                    detail={heatmap.detail}
                    highlight={heatmap.best}
                    height={360}
                    ariaLabel="Heatmap of Sharpe ratio across the strategy's parameter grid"
                  />
                ) : robustness.isPending ? (
                  <ChartSkeleton height={360} />
                ) : (
                  <EmptyState>
                    This strategy has a single parameter, so there is no two-dimensional grid to draw.
                  </EmptyState>
                )}
              </ChartCard>

              <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
                <CardHeader className="px-4">
                  <CardTitle className="flex items-center gap-1.5 text-base font-medium text-[var(--color-ink)]">
                    Walk-forward
                    <InfoTip label="About walk-forward">
                      Parameters are chosen on an expanding training window, then traded on the following year, which
                      the search never saw. Efficiency is out-of-sample CAGR ÷ in-sample CAGR; above 0.5 is respectable.
                    </InfoTip>
                  </CardTitle>
                  <CardDescription className="text-xs text-[var(--color-ink-dim)]">
                    {wf?.note ?? "Each fold trains, then trades unseen data."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4">
                  {!wf?.available ? (
                    robustness.isPending ? (
                      <Skeleton className="h-48 w-full" />
                    ) : (
                      <EmptyState>Not enough history for a walk-forward split in this window.</EmptyState>
                    )
                  ) : (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 text-sm">
                        <span className="text-ink">
                          Efficiency <span className="tnum font-semibold">{num(wf.walk_forward_efficiency)}</span>
                        </span>
                        <span className="text-ink-3">
                          in-sample {signedPct(wf.mean_in_sample_cagr)} → out-of-sample{" "}
                          {signedPct(wf.mean_out_of_sample_cagr)}
                        </span>
                        <span className="text-ink-2 capitalize">{wf.verdict}</span>
                      </div>
                      <div className="max-h-72 overflow-auto">
                        <Table>
                          <caption className="sr-only">Walk-forward folds with chosen parameters and results</caption>
                          <TableHeader className="sticky top-0 bg-surface">
                            <TableRow>
                              <TableHead className="text-xs">Test window</TableHead>
                              <TableHead className="text-xs">Chosen on train</TableHead>
                              <TableHead className="text-right text-xs">In-sample</TableHead>
                              <TableHead className="text-right text-xs">Out-of-sample</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {wf.folds.map((f, i) => (
                              <TableRow key={i}>
                                <TableCell className="tnum text-xs whitespace-nowrap">
                                  {date(f.test_start)} → {date(f.test_end)}
                                </TableCell>
                                <TableCell className="tnum text-xs text-ink-3">
                                  {Object.entries(f.chosen_params)
                                    .map(([k, v]) => `${k} ${v}`)
                                    .join(", ")}
                                </TableCell>
                                <TableCell className="tnum text-right text-xs text-ink-3">
                                  {signedPct(f.in_sample_cagr)}
                                </TableCell>
                                <TableCell className="tnum text-right text-xs">
                                  <span className={(f.out_of_sample_cagr ?? 0) >= 0 ? "text-good" : "text-serious"}>
                                    {signedPct(f.out_of_sample_cagr)}
                                  </span>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* ---------------- regimes ---------------- */}
            <TabsContent value="regimes" className="mt-6 space-y-6">
              {regimes.error ? (
                <ErrorState
                  error={regimes.error}
                  title="Could not load regimes"
                  onRetry={() => void regimes.refetch()}
                />
              ) : null}

              <ChartCard
                title="Regime ribbon"
                description={
                  regimes.data
                    ? `${regimes.data.definition.trend} ${regimes.data.definition.volatility}`
                    : "Trend and volatility regimes under the price."
                }
                legend={REGIME_ORDER.map((r) => ({ label: r, color: regimeFill(r), kind: "box" as const }))}
                refreshing={regimes.isPlaceholderData}
              >
                {regimes.data && ribbon ? (
                  <PriceChart
                    mode="line"
                    dates={regimes.data.series.dates}
                    close={regimes.data.series.close}
                    lineColor={color}
                    ribbon={ribbon}
                    height={400}
                    log
                    resetKey={`${settings.symbol}-regimes`}
                    ariaLabel={`${assetName(settings.symbol)} price with a regime ribbon underneath`}
                  />
                ) : (
                  <ChartSkeleton height={400} />
                )}
              </ChartCard>

              <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
                <CardHeader className="px-4">
                  <CardTitle className="text-base font-medium text-[var(--color-ink)]">How the strategy behaves per regime</CardTitle>
                  <CardDescription className="text-xs text-[var(--color-ink-dim)]">
                    Regimes are labelled causally: the volatility median expands through time, because a full-sample
                    median would already know the future.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4">
                  {!regimes.data ? (
                    <Skeleton className="h-56 w-full" />
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <caption className="sr-only">Strategy and benchmark statistics within each regime</caption>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-xs">Regime</TableHead>
                            <TableHead className="text-right text-xs">Share</TableHead>
                            <TableHead className="text-right text-xs">Benchmark (ann.)</TableHead>
                            <TableHead className="text-right text-xs">Benchmark Sharpe</TableHead>
                            <TableHead className="text-right text-xs">Strategy (ann.)</TableHead>
                            <TableHead className="text-right text-xs">Strategy Sharpe</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {regimes.data.stats.map((s) => (
                            <TableRow key={s.regime}>
                              <TableCell className="text-xs whitespace-nowrap">
                                <span className="inline-flex items-center gap-2">
                                  <span
                                    aria-hidden
                                    className="size-2.5 rounded-[2px]"
                                    style={{ background: regimeFill(s.regime) }}
                                  />
                                  {s.regime}
                                </span>
                              </TableCell>
                              <TableCell className="tnum text-right text-xs text-ink-3">{pct(s.share, 0)}</TableCell>
                              <TableCell className="tnum text-right text-xs">
                                {signedPct(s.benchmark_annualised)}
                              </TableCell>
                              <TableCell className="tnum text-right text-xs text-ink-3">
                                {num(s.benchmark_sharpe)}
                              </TableCell>
                              <TableCell className="tnum text-right text-xs">
                                {signedPct(s.strategy_annualised ?? null)}
                              </TableCell>
                              <TableCell className="tnum text-right text-xs text-ink-3">
                                {num(s.strategy_sharpe ?? null)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>

              {regimes.data?.hmm?.available ? (
                <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
                  <CardHeader className="px-4">
                    <CardTitle className="text-base font-medium text-[var(--color-ink)]">HMM regimes (exploratory)</CardTitle>
                    <CardDescription className="text-xs text-[var(--color-ink-dim)]">{regimes.data.hmm.caveat}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4">
                    <div className="overflow-x-auto">
                      <Table>
                        <caption className="sr-only">Hidden Markov Model states</caption>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-xs">State</TableHead>
                            <TableHead className="text-right text-xs">Share</TableHead>
                            <TableHead className="text-right text-xs">Return (ann.)</TableHead>
                            <TableHead className="text-right text-xs">Volatility</TableHead>
                            <TableHead className="text-right text-xs">Sharpe</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {(regimes.data.hmm.states ?? []).map((s) => (
                            <TableRow key={s.state}>
                              <TableCell className="text-xs">{s.state}</TableCell>
                              <TableCell className="tnum text-right text-xs text-ink-3">{pct(s.share, 0)}</TableCell>
                              <TableCell className="tnum text-right text-xs">
                                {signedPct(s.mean_return_annualised)}
                              </TableCell>
                              <TableCell className="tnum text-right text-xs">{pct(s.volatility_annualised)}</TableCell>
                              <TableCell className="tnum text-right text-xs">{num(s.sharpe)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              ) : null}
            </TabsContent>

            {/* ---------------- bias audit ---------------- */}
            <TabsContent value="audit" className="mt-6 space-y-6">
              {data?.bias_audit ? (
                <BiasBadge audit={data.bias_audit} />
              ) : backtest.isPending ? (
                <Skeleton className="h-40 rounded-lg" />
              ) : null}

              <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
                <CardHeader className="px-4">
                  <CardTitle className="text-base font-medium text-[var(--color-ink)]">What these tests rule out</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 px-4 text-sm text-ink-2">
                  <p>
                    <strong className="text-ink">Causal test.</strong> For a sample of bars, the strategy&apos;s signal
                    is recomputed using only the data that existed up to that bar. If a recomputed signal differs from
                    the one the full-history run produced, the strategy was reading the future. This is the failure
                    found in two of the three surveyed repositories.
                  </p>
                  <p>
                    <strong className="text-ink">Lag test.</strong> The whole backtest is rerun with one extra bar of
                    delay. A genuine edge degrades gently; an artefact of same-bar execution collapses.
                  </p>
                  <p>
                    <strong className="text-ink">Random-walk control.</strong> The same rule is run on synthetic prices
                    with no predictable structure. A strategy that reliably makes money there is reporting a bug, not a
                    skill.
                  </p>
                  <p className="border-t border-hairline pt-3 text-xs text-ink-3">
                    The engine also enforces the rule structurally: a signal decided on bar <em>t</em> sets the position
                    for bar <em>t+1</em>, and costs are charged on the bar the position actually changes.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ---------------- replay ---------------- */}
            <TabsContent value="replay" className="mt-6 space-y-6">
              <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
                <CardHeader className="px-4">
                  <CardTitle className="text-base font-medium text-[var(--color-ink)]">Replay</CardTitle>
                  <CardDescription className="text-xs text-[var(--color-ink-dim)]">
                    Step through the backtest one bar at a time. The charts are given only the bars up to the cursor, so
                    nothing after it can be on screen.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4">
                  {data ? (
                    <ReplayControls
                      total={total}
                      dates={data.series.dates}
                      cursor={effectiveCursor}
                      onCursor={setCursor}
                    />
                  ) : (
                    <Skeleton className="h-28 w-full" />
                  )}
                </CardContent>
              </Card>

              <div className="grid gap-6 xl:grid-cols-2">
                <ChartCard title="Price so far" description="Only bars up to the replay cursor.">
                  {replaySlice && replaySlice.dates.length > 1 ? (
                    <PriceChart
                      mode="line"
                      dates={replaySlice.dates}
                      close={replaySlice.close}
                      lineColor={color}
                      height={300}
                      follow
                      resetKey={`replay-${settings.symbol}`}
                      ariaLabel="Price up to the current replay bar"
                    />
                  ) : (
                    <ChartSkeleton height={300} />
                  )}
                </ChartCard>

                <ChartCard
                  title={
                    <span className="flex items-center gap-1.5">
                      Equity so far
                      <InfoTip label="About benchmark comparison">
                        Pitting your algorithmic strategy against a simple Buy-and-Hold benchmark (e.g., just buying NVIDIA and leaving it alone). If a complex momentum strategy underperforms a basic buy-and-hold approach after accounting for transaction costs and risk, the strategy is flawed.
                      </InfoTip>
                    </span>
                  }
                  description="The curve as it would have looked on that day, with no knowledge of what came next."
                  legend={[
                    { label: "Strategy", color },
                    { label: "Buy and hold", color: BENCHMARK },
                  ]}
                >
                  {replaySlice && replaySlice.dates.length > 1 ? (
                    <TimeSeriesChart
                      dates={replaySlice.dates}
                      series={replaySeries}
                      height={300}
                      format={formatMoney}
                      baseline={settings.initialCapital}
                      resetKey={`replay-eq-${settings.symbol}`}
                      ariaLabel="Equity curve up to the current replay bar"
                    />
                  ) : (
                    <ChartSkeleton height={300} />
                  )}
                </ChartCard>
              </div>

              {cursor !== null ? (
                <Button variant="outline" size="sm" onClick={() => setCursor(null)}>
                  Show the whole history again
                </Button>
              ) : null}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
}
