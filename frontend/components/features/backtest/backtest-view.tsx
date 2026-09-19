"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { ChartCard } from "@/components/charts/chart-card";
import { PriceChart, TimeSeriesChart } from "@/components/charts/lazy";
import type { TradeMarker } from "@/components/charts/price-chart";
import type { TsBand, TsSeries } from "@/components/charts/time-series-chart";
import { BiasBadge } from "@/components/features/backtest/bias-badge";
import { BacktestControls } from "@/components/features/backtest/controls";
import { TradeExplainer } from "@/components/features/backtest/trade-explainer";
import { MetricsTable } from "@/components/features/metrics-table";
import { InfoTip } from "@/components/info-tip";
import { PageHeader } from "@/components/page-header";
import { Delta, Stat } from "@/components/stat";
import { ChartSkeleton, ErrorState } from "@/components/states";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BENCHMARK, INK, assetColor, assetName } from "@/lib/colors";
import { compactMoney, date, integer, money, num, pct, price, signedPct } from "@/lib/format";
import { useBacktest } from "@/lib/queries";
import { toRequest, useSettings } from "@/lib/store";
import { cn } from "@/lib/utils";

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

export function BacktestView() {
  const settings = useSettings((s) => s.settings);
  const request = useMemo(() => toRequest(settings), [settings]);
  const { data, error, isPending, isPlaceholderData, refetch } = useBacktest(request);
  const [explainAt, setExplainAt] = useState<string | null>(null);

  const color = assetColor(settings.symbol);

  const priceData = useMemo(() => {
    if (!data) return null;
    const s = data.series;
    return { dates: s.dates, close: s.close };
  }, [data]);

  /** Every change in position is a marker: the bar the trade was executed on. */
  const markers: TradeMarker[] = useMemo(() => {
    if (!data) return [];
    const { dates, position } = data.series;
    const out: TradeMarker[] = [];
    for (let i = 1; i < position.length; i++) {
      const from = position[i - 1];
      const to = position[i];
      if (to === from) continue;
      // The signal that caused this change was decided on the previous bar.
      out.push({ id: dates[i], date: dates[i - 1], side: to > from ? "buy" : "sell" });
    }
    return out;
  }, [data]);

  const overlays = useMemo(() => {
    if (!data) return [];
    const palette = ["#9085e9", "#d55181", "#c3c2b7"];
    // Indicators that live on the price scale can be drawn over the price; z-scores and spreads cannot.
    const ON_PRICE = new Set(["sma_short", "sma_long", "ema"]);
    return Object.entries(data.indicators)
      .filter(([key]) => ON_PRICE.has(key))
      .map(([key, values], i) => ({
        id: key,
        label: key === "sma_short" ? "Fast SMA" : key === "sma_long" ? "Slow SMA" : "EMA",
        color: palette[i % palette.length],
        values,
      }));
  }, [data]);

  const equitySeries: TsSeries[] = useMemo(() => {
    if (!data) return [];
    return [
      { id: "strategy", label: "Strategy", color, values: data.series.equity },
      { id: "benchmark", label: "Buy and hold", color: BENCHMARK, values: data.series.benchmark_equity, dashed: true },
    ];
  }, [data, color]);

  const band: TsBand | null = useMemo(() => {
    const mc = data?.monte_carlo;
    if (!mc?.available) return null;
    return { ownerId: "strategy", lower: mc.lower, upper: mc.upper, color };
  }, [data, color]);

  const equityTable = useMemo(
    () =>
      data
        ? {
            csvName: `${settings.symbol}-${settings.strategy}-equity.csv`,
            rows: data.series.dates.map((d, i) => ({
              d,
              e: data.series.equity[i],
              b: data.series.benchmark_equity[i],
              p: data.series.position[i],
            })),
            columns: [
              { key: "date", label: "Date", value: (r: { d: string }) => r.d },
              {
                key: "equity",
                label: "Strategy",
                align: "right" as const,
                value: (r: { e: number }) => Number(r.e.toFixed(2)),
                display: (r: { e: number }) => money(r.e),
              },
              {
                key: "benchmark",
                label: "Buy and hold",
                align: "right" as const,
                value: (r: { b: number }) => Number(r.b.toFixed(2)),
                display: (r: { b: number }) => money(r.b),
              },
              {
                key: "position",
                label: "Position",
                align: "right" as const,
                value: (r: { p: number }) => r.p,
                display: (r: { p: number }) => num(r.p, 2),
              },
            ],
          }
        : undefined,
    [data, settings.symbol, settings.strategy],
  );

  const onMarkerClick = useCallback((m: TradeMarker) => setExplainAt(m.date), []);

  const summary = data?.summary;
  const metrics = data?.metrics;

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <PageHeader
          title="Backtest"
          description="Signals are decided on each bar's close and traded on the next one. Costs are charged when the position actually changes."
        />
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start">
        <motion.div variants={itemVariants} className="lg:sticky lg:top-20">
          <BacktestControls />
        </motion.div>

        <div className="min-w-0 space-y-6">
          {error ? <ErrorState error={error} title="Backtest failed" onRetry={() => void refetch()} /> : null}

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
              <CardContent
              className={cn(
                "grid grid-cols-2 gap-x-6 gap-y-5 px-4 sm:grid-cols-4",
                isPlaceholderData && "is-refreshing",
              )}
            >
              {metrics && summary && data ? (
                <>
                  <Stat
                    label="Final equity"
                    value={money(metrics.final_equity)}
                    sub={`from ${money(settings.initialCapital)}`}
                    accent={color}
                  />
                  <Stat
                    label="CAGR"
                    value={signedPct(metrics.cagr)}
                    sub={
                      <Delta
                        value={summary.excess_cagr_vs_benchmark}
                        text={`${signedPct(summary.excess_cagr_vs_benchmark)} vs buy and hold`}
                      />
                    }
                  />
                  <Stat
                    label="Sharpe"
                    value={num(metrics.sharpe)}
                    sub={`buy and hold ${num(data.benchmark_metrics.sharpe)}`}
                  />
                  <Stat
                    label="Max drawdown"
                    value={pct(metrics.max_drawdown)}
                    sub={`${integer(metrics.max_drawdown_bars)} bars deep`}
                  />
                </>
              ) : (
                Array.from({ length: 4 }, (_, i) => <Skeleton key={i} className="h-16" />)
              )}
            </CardContent>
          </Card>
          </motion.div>

          {/* Bias audit */}
          <motion.div variants={itemVariants}>
            {data?.bias_audit ? (
              <BiasBadge audit={data.bias_audit} />
            ) : isPending ? (
              <Skeleton className="h-36 rounded-lg" />
            ) : null}
          </motion.div>

          {/* Equity */}
          <motion.div variants={itemVariants}>
            <ChartCard
            title="Equity curve"
            description={
              data?.monte_carlo?.available
                ? `Shaded band: the 5th to 95th percentile of ${integer(data.monte_carlo.paths)} block-bootstrap resamples of this strategy's own returns.`
                : "Strategy against buy and hold."
            }
            legend={[
              { label: "Strategy", color },
              { label: "Buy and hold", color: BENCHMARK },
              ...(band ? [{ label: "Monte Carlo 5–95%", color, kind: "band" as const }] : []),
            ]}
            table={equityTable}
            refreshing={isPlaceholderData}
          >
            {data ? (
              <TimeSeriesChart
                dates={data.series.dates}
                series={equitySeries}
                band={band}
                height={320}
                format={formatMoney}
                baseline={settings.initialCapital}
                resetKey={`${settings.symbol}-${settings.start ?? ""}-${settings.end ?? ""}`}
                ariaLabel="Equity curve of the strategy against buy and hold, with a Monte Carlo band"
              />
            ) : (
              <ChartSkeleton height={320} />
            )}
          </ChartCard>
          </motion.div>

          {/* Price with trades */}
          <motion.div variants={itemVariants}>
            <ChartCard
            title="Trades on the chart"
            description="Arrows mark the bar the position changed on. Click one to see the signal that caused it."
            legend={[
              { label: "Close", color: INK.primary },
              ...overlays.map((o) => ({ label: o.label, color: o.color })),
              { label: "Entry", color: "#0ca30c", kind: "up" as const },
              { label: "Exit", color: "#d03b3b", kind: "down" as const },
            ]}
            refreshing={isPlaceholderData}
            footer={
              explainAt ? null : markers.length ? (
                <>Click any arrow to explain that trade.</>
              ) : (
                <>This strategy never changed position in this window.</>
              )
            }
          >
            {priceData ? (
              <PriceChart
                mode="line"
                dates={priceData.dates}
                close={priceData.close}
                lineColor={INK.primary}
                overlays={overlays}
                markers={markers}
                onMarkerClick={onMarkerClick}
                height={360}
                resetKey={`${settings.symbol}-${settings.start ?? ""}-${settings.end ?? ""}`}
                ariaLabel={`${assetName(settings.symbol)} price with entry and exit markers`}
              />
            ) : (
              <ChartSkeleton height={360} />
            )}
          </ChartCard>
          </motion.div>

          {explainAt ? <TradeExplainer request={request} at={explainAt} onClose={() => setExplainAt(null)} /> : null}

          {/* Trade ledger */}
          <motion.div variants={itemVariants}>
            <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
              <CardHeader className="px-4">
                <CardTitle className="text-base font-medium text-[var(--color-ink)]">Trades</CardTitle>
                <CardDescription className="text-xs text-[var(--color-ink-dim)]">
                  {summary
                  ? `${integer(summary.trades)} trades, ${pct(summary.trade_win_rate, 0)} profitable. Costs took ${money(summary.total_cost_currency)} (${pct(summary.total_cost_fraction, 2)} of capital).`
                  : "Every completed round trip."}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4">
              {!data ? (
                <Skeleton className="h-64 w-full" />
              ) : data.trades.length === 0 ? (
                <p className="text-sm text-ink-3">No trades in this window.</p>
              ) : (
                <div className="max-h-96 overflow-auto">
                  <Table>
                    <caption className="sr-only">Completed trades with entry, exit and return</caption>
                    <TableHeader className="sticky top-0 bg-surface">
                      <TableRow>
                        <TableHead className="text-xs">Entry</TableHead>
                        <TableHead className="text-xs">Exit</TableHead>
                        <TableHead className="text-xs">Side</TableHead>
                        <TableHead className="text-right text-xs">In</TableHead>
                        <TableHead className="text-right text-xs">Out</TableHead>
                        <TableHead className="text-right text-xs">Bars</TableHead>
                        <TableHead className="text-right text-xs">Return</TableHead>
                        <TableHead className="text-right text-xs">P&amp;L</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.trades.map((t, i) => (
                        <TableRow key={`${t.entry_date}-${i}`}>
                          <TableCell className="tnum text-xs whitespace-nowrap">{date(t.entry_date)}</TableCell>
                          <TableCell className="tnum text-xs whitespace-nowrap">
                            {t.open_at_end ? <span className="text-ink-3">open</span> : date(t.exit_date)}
                          </TableCell>
                          <TableCell className="text-xs capitalize">{t.direction}</TableCell>
                          <TableCell className="tnum text-right text-xs">{price(t.entry_price)}</TableCell>
                          <TableCell className="tnum text-right text-xs">{price(t.exit_price)}</TableCell>
                          <TableCell className="tnum text-right text-xs text-ink-3">{integer(t.bars_held)}</TableCell>
                          <TableCell className="tnum text-right text-xs">
                            <span className={t.return_pct >= 0 ? "text-good" : "text-serious"}>
                              {signedPct(t.return_pct, 1)}
                            </span>
                          </TableCell>
                          <TableCell className="tnum text-right text-xs">{money(t.net_pnl)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
          </motion.div>

          {/* Metrics comparison */}
          <motion.div variants={itemVariants}>
            <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
              <CardHeader className="px-4">
                <CardTitle className="flex items-center gap-1.5 text-base font-medium text-[var(--color-ink)]">
                Strategy versus buy and hold
                <InfoTip label="About this comparison">
                  Both columns run on the same bars and the same calendar. Buy and hold pays no trading costs after its
                  single entry, so beating it has to survive the fees charged on every position change.
                </InfoTip>
              </CardTitle>
              <CardDescription className="text-xs text-[var(--color-ink-dim)]">Bold marks the better value in each row.</CardDescription>
            </CardHeader>
            <CardContent className="px-4">
              {data ? (
                <MetricsTable
                  highlightBest
                  caption="Strategy metrics compared with buy and hold"
                  columns={[
                    { id: "strategy", label: "Strategy", color, metrics: data.metrics },
                    { id: "benchmark", label: "Buy and hold", color: BENCHMARK, metrics: data.benchmark_metrics },
                  ]}
                />
              ) : (
                <Skeleton className="h-64 w-full" />
              )}
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
