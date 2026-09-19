"use client";

import { ArrowDown, ArrowUp, CheckCircle2, AlertTriangle } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { ChartCard } from "@/components/charts/chart-card";
import { Heatmap, TimeSeriesChart } from "@/components/charts/lazy";
import type { TsSeries } from "@/components/charts/time-series-chart";
import { RangeToggle } from "@/components/features/range-toggle";
import { InfoTip } from "@/components/info-tip";
import { PageHeader } from "@/components/page-header";
import { ChartSkeleton, ErrorState } from "@/components/states";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { INK, OVERLAY, assetColor, assetName } from "@/lib/colors";
import { date, num, signed } from "@/lib/format";
import { useCorrelation } from "@/lib/queries";
import type { CorrelationBreak } from "@/lib/types";
import { useRangeWindow } from "@/lib/use-range";
import { cn } from "@/lib/utils";

const WINDOWS = [30, 60, 90, 120] as const;
const EVENTS_COLLAPSED = 10;

/** Pairs are not assets, so their lines take the two validated overlay hues and neutral ink. */
const PAIR_COLORS = [OVERLAY[0], OVERLAY[1], OVERLAY[2]];

const formatCorr = (v: number) => num(v, 2);
const axisCorr = (v: number) => num(v, 1);

const pairLabel = (key: string) =>
  key
    .split("|")
    .map((s) => assetName(s))
    .join(" ↔ ");

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

export function CorrelationsView() {
  const { range, ready } = useRangeWindow();
  const [windowBars, setWindowBars] = useState<number>(60);
  const [showAll, setShowAll] = useState(false);
  /** "all" draws every pair; a pair key isolates it with its own one-year norm. */
  const [focus, setFocus] = useState<string>("all");
  const correlation = useCorrelation(windowBars, range, ready);
  const data = correlation.data;

  const pairKeys = useMemo(() => (data ? Object.keys(data.rolling.pairs) : []), [data]);

  const lines = useMemo(() => {
    if (!data || pairKeys.length === 0) return null;
    const dates = data.rolling.pairs[pairKeys[0]].dates;
    const visible = focus === "all" || !pairKeys.includes(focus) ? pairKeys : [focus];
    const isolated = visible.length === 1;

    const series: TsSeries[] = visible.flatMap((key) => {
      const pair = data.rolling.pairs[key];
      // Align by date in case a pair's series is not the same length as the first.
      const at = new Map(pair.dates.map((d, j) => [d, j]));
      const align = (values: (number | null)[]) =>
        dates.map((d) => {
          const j = at.get(d);
          return j === undefined ? null : values[j];
        });
      const color = PAIR_COLORS[pairKeys.indexOf(key) % PAIR_COLORS.length];

      const line: TsSeries = {
        id: key,
        label: pairLabel(key),
        color,
        values: align(pair.correlation),
        // White, not the line colour: a same-hue arrow disappears into three overlapping lines.
        markers: data.rolling.events
          .filter((e) => e.pair === key)
          .map((e) => ({
            date: e.date,
            color: INK.primary,
            size: 2,
            shape: e.direction === "converging" ? ("arrowUp" as const) : ("arrowDown" as const),
            position: e.direction === "converging" ? ("belowBar" as const) : ("aboveBar" as const),
          })),
      };

      // Alone, a pair also shows the trailing one-year norm the breaks are measured against.
      return isolated
        ? [
            line,
            {
              id: `${key}-norm`,
              label: `${data.rolling.baseline}-bar norm`,
              color: INK.muted,
              values: align(pair.baseline_mean),
              dashed: true,
              width: 1 as const,
            },
          ]
        : [line];
    });
    return { dates, series };
  }, [data, pairKeys, focus]);

  const linesTable = useMemo(
    () =>
      lines
        ? {
            csvName: `rolling-correlation-${windowBars}.csv`,
            rows: lines.dates.map((d, i) => ({ d, v: lines.series.map((s) => s.values[i]) })),
            columns: [
              { key: "date", label: "Date", value: (r: { d: string }) => r.d },
              ...lines.series.map((s, i) => ({
                key: s.id,
                label: s.label,
                align: "right" as const,
                value: (r: { v: (number | null)[] }) => r.v[i],
                display: (r: { v: (number | null)[] }) => num(r.v[i], 3),
              })),
            ],
          }
        : undefined,
    [lines, windowBars],
  );

  const matrix = useMemo(() => {
    if (!data) return null;
    const labels = data.matrix.symbols.map(assetName);
    const rows = data.matrix.symbols.map((symbol, y) => ({ symbol, label: labels[y], v: data.matrix.matrix[y] }));
    return {
      labels,
      values: data.matrix.matrix,
      table: {
        csvName: "correlation-matrix.csv",
        rows,
        columns: [
          { key: "asset", label: "", value: (r: (typeof rows)[number]) => r.label },
          ...labels.map((l, x) => ({
            key: l,
            label: l,
            align: "right" as const,
            value: (r: (typeof rows)[number]) => r.v[x],
            display: (r: (typeof rows)[number]) => num(r.v[x], 3),
          })),
        ],
      },
    };
  }, [data]);

  const events = useMemo(
    () => (data ? [...data.rolling.events].sort((a, b) => (a.date < b.date ? 1 : -1)) : []),
    [data],
  );
  const visibleEvents = showAll ? events : events.slice(0, EVENTS_COLLAPSED);
  const threshold = data?.rolling.threshold ?? 2;

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <PageHeader
          title="Correlations"
          description="How closely the three assets move together, and when that relationship changes. Returns are aligned on the dates all three traded."
          actions={
          <>
            <ToggleGroup
              type="single"
              variant="outline"
              size="sm"
              spacing={0}
              value={String(windowBars)}
              onValueChange={(v) => v && setWindowBars(Number(v))}
              aria-label="Rolling window length in bars"
            >
              {WINDOWS.map((w) => (
                <ToggleGroupItem key={w} value={String(w)} aria-label={`${w}-bar rolling window`}>
                  {w}d
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <RangeToggle />
          </>
        }
      />
      </motion.div>

      {correlation.error ? (
        <ErrorState
          error={correlation.error}
          title="Could not load correlations"
          onRetry={() => void correlation.refetch()}
        />
      ) : null}

      {/* Where each pair stands right now */}
      <motion.section variants={itemVariants} aria-label="Current state of each pair" className="grid gap-3 md:grid-cols-3">
        {data
          ? pairKeys.map((key) => {
              const pair = data.rolling.pairs[key];
              const z = pair.latest_z;
              const broken = z !== null && Math.abs(z) > threshold;
              const [a, b] = key.split("|");
              return (
                <Card key={key} className="bg-[var(--color-panel)] border-[var(--color-line)] py-4">
                  <CardContent className="space-y-2 px-4">
                    <div className="caption flex items-center gap-2">
                      <span className="flex -space-x-1" aria-hidden>
                        <span className="size-2.5 ring-2 ring-[var(--color-panel)]" style={{ background: assetColor(a) }} />
                        <span className="size-2.5 ring-2 ring-[var(--color-panel)]" style={{ background: assetColor(b) }} />
                      </span>
                      <span className="font-medium text-[var(--color-ink-dim)]">{pairLabel(key)}</span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-3xl font-medium tracking-tight text-ink">
                        {signed(pair.latest, 2)}
                      </span>
                      <span className="text-xs text-ink-3">{windowBars}-bar correlation</span>
                    </div>
                    <div className={cn("flex items-center gap-1.5 text-sm", broken ? "text-warning" : "text-ink-2")}>
                      {broken ? (
                        <AlertTriangle aria-hidden className="size-4" />
                      ) : (
                        <CheckCircle2 aria-hidden className="size-4 text-good" />
                      )}
                      <span className="tnum">
                        z = {signed(z, 1)} ·{" "}
                        {broken ? "Break: unusual versus its own past year" : "Within its normal range"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          : Array.from({ length: 3 }, (_, i) => <Skeleton key={i} className="h-[126px] rounded-xl" />)}
      </motion.section>

      <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Matrix */}
        <ChartCard
          title="Correlation matrix"
          description={
            data
              ? `Pearson correlation of daily simple returns, ${data.matrix.bars.toLocaleString()} common dates from ${date(data.matrix.start)} to ${date(data.matrix.end)}.`
              : "Pearson correlation of daily simple returns."
          }
          table={matrix?.table}
          refreshing={correlation.isPlaceholderData}
          footer={
            data ? (
              <>
                Bitcoin also trades weekends, so {data.coverage.dropped_by_join["BTC-USD"]?.toLocaleString() ?? "some"}{" "}
                of its bars are left out to keep the comparison honest.
              </>
            ) : null
          }
        >
          {matrix ? (
            <Heatmap
              xLabels={matrix.labels}
              yLabels={matrix.labels}
              values={matrix.values}
              limit={1}
              format={formatCorr}
              height={320}
              ariaLabel="Heatmap of pairwise return correlations between Gold, Bitcoin and NVIDIA"
            />
          ) : (
            <ChartSkeleton height={320} />
          )}
        </ChartCard>

        {/* Rolling */}
        <ChartCard
          title={`Rolling ${windowBars}-bar correlation`}
          description={
            <>
              Arrows mark a break: the correlation sits more than {threshold} standard deviations from its own trailing
              one-year average.{" "}
              <InfoTip label="How a break is detected">
                z = (ρ − mean of the previous {data?.rolling.baseline ?? 252} bars of ρ) ÷ their standard deviation. The
                baseline is shifted back one bar so it holds only history the market had already produced.
              </InfoTip>
            </>
          }
          actions={
            <ToggleGroup
              type="single"
              variant="outline"
              size="sm"
              spacing={0}
              value={focus}
              onValueChange={(v) => v && setFocus(v)}
              aria-label="Which pair to draw"
            >
              <ToggleGroupItem value="all" aria-label="Show all pairs">
                All
              </ToggleGroupItem>
              {pairKeys.map((key) => (
                <ToggleGroupItem key={key} value={key} aria-label={`Show only ${pairLabel(key)}`}>
                  {pairLabel(key)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          }
          legend={[
            ...(lines?.series.map((s) => ({ label: s.label, color: s.color })) ?? []),
            { label: "Converging break", color: INK.primary, kind: "up" as const },
            { label: "Decoupling break", color: INK.primary, kind: "down" as const },
          ]}
          table={linesTable}
          refreshing={correlation.isPlaceholderData}
        >
          {lines ? (
            <TimeSeriesChart
              dates={lines.dates}
              series={lines.series}
              height={320}
              baseline={0}
              format={formatCorr}
              axisFormat={axisCorr}
              resetKey={`${windowBars}-${focus}-${range.start ?? "max"}`}
              ariaLabel={`Rolling ${windowBars}-bar correlation for each pair of assets, with break markers`}
            />
          ) : (
            <ChartSkeleton height={320} />
          )}
        </ChartCard>
      </motion.div>

      {/* Break log */}
      <motion.div variants={itemVariants}>
        <Card className="border border-[var(--color-line)] bg-[var(--color-panel)] py-4">
          <CardHeader className="px-4">
            <CardTitle className="text-base font-medium text-[var(--color-ink)]">Correlation breaks</CardTitle>
            <CardDescription className="text-xs text-[var(--color-ink-dim)]">
              {data
              ? `${events.length} flagged across all pairs. Newest first.`
              : "Days a pair's correlation moved out of its normal range."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 px-4">
          {!data ? (
            <Skeleton className="h-48 w-full" />
          ) : events.length === 0 ? (
            <p className="text-sm text-ink-3">No breaks at this window and threshold.</p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <Table>
                  <caption className="sr-only">
                    Days on which a pair&apos;s rolling correlation broke from its norm
                  </caption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">Date</TableHead>
                      <TableHead className="text-xs">Pair</TableHead>
                      <TableHead className="text-xs">Move</TableHead>
                      <TableHead className="text-right text-xs">Correlation</TableHead>
                      <TableHead className="text-right text-xs">1-year norm</TableHead>
                      <TableHead className="text-right text-xs">z-score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {visibleEvents.map((e) => (
                      <EventRow key={`${e.pair}-${e.date}`} event={e} />
                    ))}
                  </TableBody>
                </Table>
              </div>
              {events.length > EVENTS_COLLAPSED ? (
                <Button variant="outline" size="sm" onClick={() => setShowAll((v) => !v)} className="text-[var(--color-ink)] border-[var(--color-line)] hover:bg-[var(--color-panel-2)]">
                  {showAll ? "Show fewer" : `Show all ${events.length}`}
                </Button>
              ) : null}
            </>
          )}
        </CardContent>
      </Card>
      </motion.div>
    </motion.div>
  );
}

function EventRow({ event: e }: { event: CorrelationBreak }) {
  const converging = e.direction === "converging";
  const Icon = converging ? ArrowUp : ArrowDown;
  return (
    <TableRow>
      <TableCell className="tnum text-sm whitespace-nowrap">{date(e.date)}</TableCell>
      <TableCell className="text-sm whitespace-nowrap">{pairLabel(e.pair)}</TableCell>
      <TableCell className="text-sm whitespace-nowrap text-ink-2">
        <span className="inline-flex items-center gap-1">
          <Icon aria-hidden className="size-3.5" />
          {converging ? "Converging" : "Decoupling"}
        </span>
      </TableCell>
      <TableCell className="tnum text-right text-sm">{signed(e.correlation, 2)}</TableCell>
      <TableCell className="tnum text-right text-sm text-ink-2">{signed(e.baseline_mean, 2)}</TableCell>
      <TableCell className="tnum text-right text-sm">{signed(e.zscore, 1)}</TableCell>
    </TableRow>
  );
}
