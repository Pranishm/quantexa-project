"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { TimeSeriesChart } from "@/components/charts/lazy";
import { ChartCard } from "@/components/charts/chart-card";
import type { TsSeries } from "@/components/charts/time-series-chart";
import { InsightCards } from "@/components/features/insight-cards";
import { MetricsTable, type MetricColumn } from "@/components/features/metrics-table";
import { PriceCard } from "@/components/features/price-cards";
import { RangeToggle } from "@/components/features/range-toggle";
import { ChartSkeleton, ErrorState } from "@/components/states";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ASSET_ORDER, assetColor, assetName } from "@/lib/colors";
import { date, num } from "@/lib/format";
import { useInsights, useMetrics, usePricesMany } from "@/lib/queries";
import { alignCloses, rebase } from "@/lib/series";
import type { AssetSymbol } from "@/lib/types";
import { useRangeWindow } from "@/lib/use-range";

const INSIGHTS_COLLAPSED = 6;
const formatIndexed = (v: number) => num(v, v >= 1000 ? 0 : 1);

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

export function OverviewView() {
  const { range, ready } = useRangeWindow();
  const prices = usePricesMany(ASSET_ORDER, range, ready);
  const metrics = useMetrics(ASSET_ORDER, range, null, ready);
  const insights = useInsights(range, ready);

  const [log, setLog] = useState(true);
  const [showAllInsights, setShowAllInsights] = useState(false);

  const growth = useMemo(() => {
    const responses = prices.data;
    if (responses.some((r) => !r)) return null;
    const candles = Object.fromEntries(ASSET_ORDER.map((s, i) => [s, responses[i]!.candles])) as Record<
      AssetSymbol,
      NonNullable<(typeof responses)[number]>["candles"]
    >;
    const { dates, closes } = alignCloses(candles);
    const series: TsSeries[] = ASSET_ORDER.map((s) => ({
      id: s,
      label: assetName(s),
      color: assetColor(s),
      values: rebase(closes[s]),
    }));
    return { dates, series };
  }, [prices.data]);

  const table = useMemo(
    () =>
      growth
        ? {
          csvName: "growth-of-100.csv",
          rows: growth.dates.map((d, i) => ({ d, v: growth.series.map((s) => s.values[i]) })),
          columns: [
            { key: "date", label: "Date", value: (r: { d: string }) => r.d },
            ...growth.series.map((s, i) => ({
              key: s.id,
              label: `${s.label} (base 100)`,
              align: "right" as const,
              value: (r: { v: (number | null)[] }) =>
                r.v[i] === null ? null : Number((r.v[i] as number).toFixed(2)),
              display: (r: { v: (number | null)[] }) => num(r.v[i], 1),
            })),
          ],
        }
        : undefined,
    [growth],
  );

  const metricColumns: MetricColumn[] = useMemo(
    () =>
      (metrics.data?.assets ?? []).map((a) => ({
        id: a.meta.symbol,
        label: assetName(a.meta.symbol),
        color: assetColor(a.meta.symbol),
        metrics: a.metrics,
      })),
    [metrics.data],
  );

  const cards = insights.data?.cards ?? [];
  const visibleCards = showAllInsights ? cards : cards.slice(0, INSIGHTS_COLLAPSED);

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Top Controls */}
      <div className="flex justify-between items-center bg-[var(--color-panel)] border border-[var(--color-line)] rounded-2xl p-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-[var(--color-ink-dim)]">Date Range</span>
          <RangeToggle />
        </div>
      </div>

      {/* Top row: Balances / Coins style Price Cards */}
      <motion.section variants={itemVariants} className="grid gap-6 md:grid-cols-3">
        {prices.error ? (
          <ErrorState
            className="md:col-span-3 glass-panel p-6"
            error={prices.error}
            onRetry={prices.refetch}
            title="Could not load prices"
          />
        ) : prices.isPending ? (
          ASSET_ORDER.map((s) => <Skeleton key={s} className="h-40 rounded-2xl bg-[var(--color-panel)]" />)
        ) : (
          ASSET_ORDER.map((s, i) => (
            <motion.div whileHover={{ scale: 1.02 }} key={s} className="glass-panel overflow-hidden relative">
              {/* Background glow per asset */}
              <div className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full" style={{ backgroundColor: assetColor(s) }} />
              <PriceCard symbol={s} candles={prices.data[i]!.candles} />
            </motion.div>
          ))
        )}
      </motion.section>

      {/* Main Charts Area */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Left Col: Main Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2 glass-panel p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Profile Chart (Growth of 100)</h2>
            <div className="flex items-center gap-2">
              <Switch id="growth-log" checked={log} onCheckedChange={setLog} />
              <Label htmlFor="growth-log" className="text-xs text-ink-dim">Log scale</Label>
            </div>
          </div>

          <div className="relative">
            {prices.error ? null : growth ? (
              <TimeSeriesChart
                dates={growth.dates}
                series={growth.series}
                height={380}
                log={log}
                baseline={100}
                resetKey={`${range.start ?? "max"}`}
                format={formatIndexed}
                ariaLabel="Line chart of Gold, Bitcoin and NVIDIA indexed to 100"
              />
            ) : (
              <ChartSkeleton height={380} />
            )}
          </div>
        </motion.div>

        {/* Right Col: Metrics / Token List */}
        <motion.div variants={itemVariants} className="glass-panel p-6">
          <h2 className="text-lg font-bold mb-6">Risk & Performance</h2>
          {metrics.error ? (
            <ErrorState error={metrics.error} onRetry={() => void metrics.refetch()} title="Could not load metrics" />
          ) : metrics.isPending ? (
            <Skeleton className="h-64 w-full bg-white/5" />
          ) : (
            <MetricsTable columns={metricColumns} caption="Risk and performance metrics by asset" />
          )}
        </motion.div>

      </div>

      {/* Insights */}
      <motion.section variants={itemVariants} aria-labelledby="insights-heading" className="glass-panel p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 id="insights-heading" className="text-lg font-bold">Market Insights</h2>
            <p className="text-sm text-[var(--color-ink-dim)] mt-1">
              {insights.data?.method ?? "Plain-English observations derived by fixed rules."}
            </p>
          </div>
        </div>

        {insights.error ? (
          <ErrorState error={insights.error} onRetry={() => void insights.refetch()} title="Could not load insights" />
        ) : insights.isPending ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }, (_, i) => (
              <Skeleton key={i} className="h-32 rounded-xl bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <InsightCards cards={visibleCards} />
            {cards.length > INSIGHTS_COLLAPSED ? (
              <Button variant="outline" size="sm" onClick={() => setShowAllInsights((v) => !v)} className="bg-transparent border-[var(--color-line)] text-white hover:bg-white/10 mt-4 rounded-full px-6">
                {showAllInsights ? "Show fewer" : `See all (${cards.length})`}
              </Button>
            ) : null}
          </div>
        )}
      </motion.section>
    </motion.div>
  );
}
