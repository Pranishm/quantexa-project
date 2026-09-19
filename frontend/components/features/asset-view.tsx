"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { ChartCard } from "@/components/charts/chart-card";
import { EChart, PriceChart, TimeSeriesChart } from "@/components/charts/lazy";
import type { PriceOverlay } from "@/components/charts/price-chart";
import type { TsSeries } from "@/components/charts/time-series-chart";
import { MetricsTable } from "@/components/features/metrics-table";
import { RangeToggle } from "@/components/features/range-toggle";
import { PageHeader } from "@/components/page-header";
import { Stat } from "@/components/stat";
import { ChartSkeleton, ErrorState } from "@/components/states";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ASSET_ORDER, INK, OVERLAY, assetColor, assetName } from "@/lib/colors";
import { date, pct, price, signedPct } from "@/lib/format";
import { useAssetAnalytics, usePrices } from "@/lib/queries";
import { changeOver } from "@/lib/series";
import type { AssetSymbol } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useRangeWindow } from "@/lib/use-range";

const OVERLAYS = [
  { key: "sma_50", label: "SMA 50", color: OVERLAY[0] },
  { key: "sma_200", label: "SMA 200", color: OVERLAY[1] },
  { key: "ema_20", label: "EMA 20", color: OVERLAY[2] },
] as const;

// Module-level so the identity is stable; charts rebuild their series when a formatter changes.
const formatPct = (v: number) => pct(v, 1);
const axisPct = (v: number) => pct(v, 0);
const formatPctSigned = (v: number) => signedPct(v, 1);
const axisPctSigned = (v: number) => signedPct(v, 0);

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

export function AssetView({ symbol }: { symbol: AssetSymbol }) {
  const { range, ready } = useRangeWindow();
  const prices = usePrices(symbol, range, ready);
  const analytics = useAssetAnalytics(symbol, range, ready);
  const [shown, setShown] = useState<string[]>(OVERLAYS.map((o) => o.key));
  // A multi-year history spans orders of magnitude (NVDA rose ~40x), so log is the readable default.
  const [log, setLog] = useState(true);

  const color = assetColor(symbol);
  const a = analytics.data;
  const candles = prices.data?.candles;
  const refreshing = prices.isPlaceholderData || analytics.isPlaceholderData;

  // Candle arrays are built once per data change so the chart is not rebuilt on unrelated renders.
  const ohlc = useMemo(() => {
    if (!candles) return null;
    return {
      dates: candles.map((c) => c.date),
      open: candles.map((c) => c.open),
      high: candles.map((c) => c.high),
      low: candles.map((c) => c.low),
      close: candles.map((c) => c.close),
    };
  }, [candles]);

  const overlays: PriceOverlay[] = useMemo(() => {
    if (!ohlc || !a) return [];
    // Align by date rather than trusting both responses have identical length.
    const at = new Map(a.dates.map((d, i) => [d, i]));
    return OVERLAYS.filter((o) => shown.includes(o.key) && a.overlays[o.key]).map((o) => ({
      id: o.key,
      label: o.label,
      color: o.color,
      values: ohlc.dates.map((d) => {
        const i = at.get(d);
        return i === undefined ? null : a.overlays[o.key][i];
      }),
    }));
  }, [ohlc, a, shown]);

  const priceTable = useMemo(
    () =>
      ohlc && candles
        ? {
            csvName: `${symbol}-prices.csv`,
            rows: candles,
            columns: [
              { key: "date", label: "Date", value: (c: (typeof candles)[number]) => c.date },
              ...(["open", "high", "low", "close"] as const).map((k) => ({
                key: k,
                label: k[0].toUpperCase() + k.slice(1),
                align: "right" as const,
                value: (c: (typeof candles)[number]) => c[k],
                display: (c: (typeof candles)[number]) => price(c[k]),
              })),
            ],
          }
        : undefined,
    [ohlc, candles, symbol],
  );

  const volSeries: TsSeries[] = useMemo(
    () => (a ? [{ id: "vol", label: "30-bar volatility", color, values: a.rolling_volatility, kind: "line" }] : []),
    [a, color],
  );
  const ddSeries: TsSeries[] = useMemo(
    () => (a ? [{ id: "dd", label: "Drawdown", color, values: a.drawdown, kind: "area", invertArea: true }] : []),
    [a, color],
  );

  const seriesTable = (label: string, values: (number | null)[] | undefined, csvName: string) =>
    a && values
      ? {
          csvName,
          rows: a.dates.map((d, i) => ({ d, v: values[i] })),
          columns: [
            { key: "date", label: "Date", value: (r: { d: string }) => r.d },
            {
              key: "v",
              label,
              align: "right" as const,
              value: (r: { v: number | null }) => r.v,
              display: (r: { v: number | null }) => pct(r.v, 2),
            },
          ],
        }
      : undefined;

  // --- returns histogram ------------------------------------------------------------
  const histogram = useMemo(() => {
    if (!a) return null;
    const { counts, edges } = a.returns_histogram;
    const centres = counts.map((_, i) => (edges[i] + edges[i + 1]) / 2);
    const var95 = a.metrics.var_95;
    // The bin that contains -VaR, so the loss threshold can be marked on the category axis.
    const varBin = var95 === null ? -1 : centres.findIndex((_, i) => -var95 >= edges[i] && -var95 < edges[i + 1]);
    const step = Math.max(1, Math.ceil(counts.length / 8));

    const option = {
      animation: false,
      grid: { left: 44, right: 12, top: 16, bottom: 30 },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow", shadowStyle: { color: "rgba(255,255,255,0.06)" } },
        formatter: (p: { dataIndex: number }[]) => {
          const i = p[0].dataIndex;
          return `${pct(edges[i], 2)} to ${pct(edges[i + 1], 2)}<br/><b>${counts[i].toLocaleString()}</b> bars`;
        },
      },
      xAxis: {
        type: "category",
        data: centres.map((c) => pct(c, 1)),
        axisLabel: { interval: (i: number) => i % step === 0, color: INK.muted },
      },
      yAxis: { type: "value", axisLabel: { color: INK.muted } },
      series: [
        {
          type: "bar",
          data: counts,
          itemStyle: { color, borderRadius: [2, 2, 0, 0] },
          barCategoryGap: "14%",
          markLine:
            varBin >= 0
              ? {
                  symbol: "none",
                  silent: true,
                  lineStyle: { color: INK.secondary, width: 1, type: "solid" },
                  label: { formatter: "VaR 95%", color: INK.secondary, position: "end" },
                  data: [{ xAxis: varBin }],
                }
              : undefined,
        },
      ],
    };

    const rows = counts.map((n, i) => ({ from: edges[i], to: edges[i + 1], n }));
    return { option, rows };
  }, [a, color]);

  const m = a?.metrics;
  const lastClose = ohlc?.close[ohlc.close.length - 1];
  const oneYear = ohlc
    ? changeOver(ohlc.close, Math.min(a?.meta.periods_per_year ?? 252, ohlc.close.length - 1))
    : null;

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <PageHeader
        title={
          <span className="flex flex-wrap items-center gap-3">
            <span aria-hidden className="size-3 rounded-full" style={{ background: color }} />
            {assetName(symbol)}
            <span className="text-lg font-normal text-ink-3">{symbol}</span>
          </span>
        }
        description={
          a
            ? `${a.meta.name}. Annualised with N = ${a.meta.periods_per_year} periods per year${
                a.meta.periods_per_year === 365 ? " because it trades every calendar day" : ""
              }. ${a.meta.bars.toLocaleString()} bars from ${date(a.meta.start)} to ${date(a.meta.end)}.`
            : "Price history, indicators and risk for one asset."
        }
        actions={<RangeToggle />}
      />
      </motion.div>

      {/* Asset switcher */}
      <motion.nav variants={itemVariants} aria-label="Choose an asset" className="flex flex-wrap gap-2">
        {ASSET_ORDER.map((s) => {
          const routeParam = s === "GC=F" ? "GOLD" : s === "BTC-USD" ? "BTC" : s;
          const isSelected = s === symbol || routeParam === symbol;
          return (
            <Link
              key={s}
              href={`/app/markets/asset/${routeParam}`}
              aria-current={isSelected ? "page" : undefined}
              className={cn(
                "inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors",
                isSelected
                  ? "border-[#7868FF] bg-[#101318] text-[#F4F5F7]"
                  : "border-[#20252C] bg-[#080A0D] text-[#A8AFB8] hover:text-[#F4F5F7] hover:bg-[#101318]",
              )}
            >
              <span aria-hidden className="size-2 rounded-full" style={{ background: assetColor(s) }} />
              {assetName(s)} ({routeParam})
            </Link>
          );
        })}
      </motion.nav>

      {analytics.error || prices.error ? (
        <ErrorState
          error={analytics.error ?? prices.error}
          title="Could not load this asset"
          onRetry={() => {
            void analytics.refetch();
            void prices.refetch();
          }}
        />
      ) : null}

      {/* Headline numbers */}
      <motion.div variants={itemVariants}>
        <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
          <CardContent className="grid grid-cols-2 gap-x-6 gap-y-5 px-4 sm:grid-cols-3 lg:grid-cols-6">
            {m && lastClose !== undefined ? (
            <>
              <Stat
                label="Latest close"
                value={`$${price(lastClose)}`}
                sub={ohlc ? date(ohlc.dates[ohlc.dates.length - 1]) : undefined}
                accent={color}
              />
              <Stat label="Last 12 months" value={signedPct(oneYear, 1)} sub="close to close" />
              <Stat label="CAGR" value={signedPct(m.cagr)} sub="since window start" />
              <Stat
                label="Volatility"
                value={pct(m.annualised_volatility)}
                sub={`annualised, N = ${m.periods_per_year}`}
              />
              <Stat label="Sharpe" value={m.sharpe === null ? "n/a" : m.sharpe.toFixed(2)} sub="risk-free 0%" />
              <Stat
                label="Max drawdown"
                value={pct(m.max_drawdown)}
                sub={`${m.max_drawdown_bars.toLocaleString()} bars deep`}
              />
            </>
          ) : (
            Array.from({ length: 6 }, (_, i) => <Skeleton key={i} className="h-16" />)
          )}
        </CardContent>
      </Card>
      </motion.div>

      {/* Candles + indicators */}
      <motion.div variants={itemVariants}>
        <ChartCard
          title="Price"
          description="Hollow candle: closed up. Filled candle: closed down. Direction is in the shape, not only the colour."
        legend={overlays.map((o) => ({ label: o.label, color: o.color }))}
        table={priceTable}
        refreshing={refreshing}
        actions={
          <>
            <div className="flex items-center gap-2">
              <Switch id="price-log" checked={log} onCheckedChange={setLog} />
              <Label htmlFor="price-log" className="text-xs text-ink-2">
                Log scale
              </Label>
            </div>
            <ToggleGroup
              type="multiple"
              variant="outline"
              size="sm"
              spacing={0}
              value={shown}
              onValueChange={setShown}
              aria-label="Indicator overlays"
            >
              {OVERLAYS.map((o) => (
                <ToggleGroupItem key={o.key} value={o.key} aria-label={`Show ${o.label}`}>
                  {o.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </>
        }
      >
        {ohlc ? (
          <PriceChart
            mode="candles"
            dates={ohlc.dates}
            open={ohlc.open}
            high={ohlc.high}
            low={ohlc.low}
            close={ohlc.close}
            overlays={overlays}
            height={440}
            log={log}
            resetKey={`${symbol}-${range.start ?? "max"}`}
            ariaLabel={`Candlestick chart of ${assetName(symbol)} with moving-average overlays`}
          />
        ) : (
          <ChartSkeleton height={440} />
        )}
      </ChartCard>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Rolling volatility"
          description={`30-bar standard deviation of returns, annualised with N = ${a?.meta.periods_per_year ?? "…"}.`}
          table={seriesTable("Volatility", a?.rolling_volatility, `${symbol}-rolling-volatility.csv`)}
          refreshing={refreshing}
        >
          {a ? (
            <TimeSeriesChart
              dates={a.dates}
              series={volSeries}
              height={260}
              format={formatPct}
              axisFormat={axisPct}
              resetKey={`${symbol}-${range.start ?? "max"}`}
              ariaLabel={`Rolling 30-bar volatility of ${assetName(symbol)}`}
            />
          ) : (
            <ChartSkeleton height={260} />
          )}
        </ChartCard>

        <ChartCard
          title="Drawdown"
          description={
            m?.drawdown_trough
              ? `Deepest fall ${pct(m.max_drawdown)}: peak ${date(m.drawdown_peak)}, trough ${date(m.drawdown_trough)}, ${
                  m.drawdown_recovery ? `recovered ${date(m.drawdown_recovery)}` : "not yet recovered"
                }.`
              : "Fall from the running peak."
          }
          table={seriesTable("Drawdown", a?.drawdown, `${symbol}-drawdown.csv`)}
          refreshing={refreshing}
        >
          {a ? (
            <TimeSeriesChart
              dates={a.dates}
              series={ddSeries}
              height={260}
              baseline={0}
              format={formatPctSigned}
              axisFormat={axisPctSigned}
              resetKey={`${symbol}-${range.start ?? "max"}`}
              ariaLabel={`Drawdown of ${assetName(symbol)} from its running peak`}
            />
          ) : (
            <ChartSkeleton height={260} />
          )}
        </ChartCard>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Distribution of returns"
          description="How many bars fell in each return bucket. The line marks the 95% one-bar value at risk."
          table={
            histogram
              ? {
                  csvName: `${symbol}-return-histogram.csv`,
                  rows: histogram.rows,
                  columns: [
                    {
                      key: "from",
                      label: "From",
                      align: "right",
                      value: (r) => r.from,
                      display: (r) => pct(r.from, 2),
                    },
                    { key: "to", label: "To", align: "right", value: (r) => r.to, display: (r) => pct(r.to, 2) },
                    { key: "n", label: "Bars", align: "right", value: (r) => r.n },
                  ],
                }
              : undefined
          }
          refreshing={refreshing}
        >
          {histogram ? (
            <EChart option={histogram.option} height={260} ariaLabel={`Histogram of ${assetName(symbol)} returns`} />
          ) : (
            <ChartSkeleton height={260} />
          )}
        </ChartCard>

        <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
          <CardHeader className="px-4">
            <CardTitle className="text-base font-medium text-[var(--color-ink)]">Statistics</CardTitle>
            <CardDescription className="text-xs text-[var(--color-ink-dim)]">
              All figures use simple returns on this asset&apos;s own calendar.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4">
            {m ? (
              <MetricsTable
                caption={`Statistics for ${assetName(symbol)}`}
                columns={[{ id: symbol, label: assetName(symbol), color, metrics: m }]}
              />
            ) : (
              <Skeleton className="h-64 w-full" />
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
