"use client";

import {
  AreaSeries,
  LineSeries,
  PriceScaleMode,
  createSeriesMarkers,
  type IRange,
  type ISeriesApi,
  type LineData,
  type Logical,
  type MouseEventParams,
  type SeriesType,
  type Time,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

import { INK, SURFACE, withAlpha } from "@/lib/colors";
import { num } from "@/lib/format";

import {
  BandPrimitive,
  LineStyle,
  isAlive,
  paintReadout,
  safe,
  safeRemove,
  timeKey,
  toTime,
  useLwChart,
  type ReadoutItem,
} from "./lw";

export interface TsMarker {
  date: string;
  text?: string;
  color?: string;
  position?: "aboveBar" | "belowBar";
  shape?: "circle" | "square" | "arrowUp" | "arrowDown";
  /** Multiplier on the default marker size. */
  size?: number;
}

export interface TsSeries {
  id: string;
  label: string;
  color: string;
  /** Aligned to `dates`. Null leaves a gap (warm-up bars). */
  values: (number | null)[];
  kind?: "line" | "area";
  /** Fill from the line up to the top instead of down to the bottom: for drawdown. */
  invertArea?: boolean;
  width?: 1 | 2 | 3;
  dashed?: boolean;
  markers?: TsMarker[];
}

export interface TsBand {
  /** The series whose price scale the band is drawn against. */
  ownerId: string;
  lower: number[];
  upper: number[];
  color: string;
}

export interface TimeSeriesChartProps {
  dates: string[];
  /** Memoise this in the parent: a new array identity rebuilds the series. */
  series: TsSeries[];
  ariaLabel: string;
  height?: number;
  /** Readout and crosshair label. */
  format?: (value: number) => string;
  /** Axis ticks. Defaults to `format`; use fewer decimals here to keep the axis quiet. */
  axisFormat?: (value: number) => string;
  log?: boolean;
  /** Draw a reference line, e.g. 100 for an indexed chart or 0 for drawdown. */
  baseline?: number | null;
  band?: TsBand | null;
  /** Changing this resets zoom; keeping it the same preserves the visible range across data updates. */
  resetKey?: string;
  onCrosshairDate?: (date: string | null) => void;
}

// A default parameter like `(v) => ...` would be a new function on every render, and `format` is an
// effect dependency, so the chart would rebuild its series each time the parent re-rendered.
const defaultFormat = (v: number) => num(v, 2);

export function TimeSeriesChart({
  dates,
  series,
  ariaLabel,
  height = 320,
  format = defaultFormat,
  axisFormat,
  log = false,
  baseline = null,
  band = null,
  resetKey = "",
  onCrosshairDate,
}: TimeSeriesChartProps) {
  const { ref, chart } = useLwChart(height);
  const readoutRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<IRange<Logical> | null>(null);
  const lastKey = useRef<string | null>(null);
  const crosshairCb = useRef(onCrosshairDate);
  useEffect(() => {
    crosshairCb.current = onCrosshairDate;
  }, [onCrosshairDate]);

  useEffect(() => {
    if (isAlive(chart)) safe(() => chart.applyOptions({ height }));
  }, [chart, height]);

  useEffect(() => {
    if (!isAlive(chart)) return;

    chart.applyOptions({ localization: { priceFormatter: axisFormat ?? format } });
    // Chart-level options: unlike chart.priceScale("right"), this does not require a pane that still has a
    // series, and the cleanup below removes every series before this effect runs again.
    chart.applyOptions({ rightPriceScale: { mode: log ? PriceScaleMode.Logarithmic : PriceScaleMode.Normal } });

    const created: { spec: TsSeries; api: ISeriesApi<SeriesType, Time> }[] = [];
    const dispose: (() => void)[] = [];

    for (const spec of series) {
      const shared = {
        priceLineVisible: false,
        lastValueVisible: true,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: SURFACE,
        crosshairMarkerBorderWidth: 2,
      };
      const api: ISeriesApi<SeriesType, Time> =
        spec.kind === "area"
          ? chart.addSeries(AreaSeries, {
              ...shared,
              lineColor: spec.color,
              lineWidth: spec.width ?? 2,
              topColor: withAlpha(spec.color, spec.invertArea ? 0.02 : 0.28),
              bottomColor: withAlpha(spec.color, spec.invertArea ? 0.28 : 0.02),
              invertFilledArea: spec.invertArea ?? false,
            })
          : chart.addSeries(LineSeries, {
              ...shared,
              color: spec.color,
              lineWidth: spec.width ?? 2,
              lineStyle: spec.dashed ? LineStyle.Dashed : LineStyle.Solid,
            });

      const data: LineData<Time>[] = [];
      for (let i = 0; i < dates.length; i++) {
        const v = spec.values[i];
        if (v !== null && v !== undefined && Number.isFinite(v)) data.push({ time: toTime(dates[i]), value: v });
      }
      api.setData(data);

      if (spec.markers?.length) {
        const plugin = createSeriesMarkers(
          api,
          spec.markers.map((m) => ({
            time: toTime(m.date),
            position: m.position ?? "aboveBar",
            shape: m.shape ?? "circle",
            color: m.color ?? spec.color,
            text: m.text,
            size: m.size ?? 1,
          })),
        );
        dispose.push(() => safe(() => plugin.detach()));
      }
      created.push({ spec, api });
    }

    if (baseline !== null && created[0]) {
      created[0].api.createPriceLine({
        price: baseline,
        color: INK.muted,
        lineWidth: 1,
        lineStyle: LineStyle.Solid,
        axisLabelVisible: false,
        title: "",
      });
    }

    if (band) {
      const owner = created.find((c) => c.spec.id === band.ownerId)?.api;
      if (owner) {
        const primitive = new BandPrimitive(
          dates.map((d, i) => ({ time: toTime(d), upper: band.upper[i], lower: band.lower[i] })),
          withAlpha(band.color, 0.16),
        );
        owner.attachPrimitive(primitive);
        dispose.push(() => safe(() => owner.detachPrimitive(primitive)));
      }
    }

    // Keep the user's zoom while data updates in place; reset it when the subject changes.
    const scale = chart.timeScale();
    if (lastKey.current !== resetKey || !rangeRef.current) scale.fitContent();
    else scale.setVisibleLogicalRange(rangeRef.current);
    lastKey.current = resetKey;
    const onRange = (r: IRange<Logical> | null) => {
      rangeRef.current = r;
    };
    scale.subscribeVisibleLogicalRangeChange(onRange);

    const lastIndex = dates.length - 1;
    const restingReadout = () => {
      const items: ReadoutItem[] = created.flatMap(({ spec }) => {
        for (let i = lastIndex; i >= 0; i--) {
          const v = spec.values[i];
          if (v !== null && v !== undefined) return [{ label: spec.label, value: format(v), color: spec.color }];
        }
        return [];
      });
      paintReadout(readoutRef.current, dates[lastIndex] ?? "", items);
    };
    restingReadout();

    const onMove = (param: MouseEventParams<Time>) => {
      const key = timeKey(param.time);
      if (key === null) {
        restingReadout();
        crosshairCb.current?.(null);
        return;
      }
      const items: ReadoutItem[] = created.flatMap(({ spec, api }) => {
        const point = param.seriesData.get(api) as { value?: number } | undefined;
        return point?.value !== undefined ? [{ label: spec.label, value: format(point.value), color: spec.color }] : [];
      });
      paintReadout(readoutRef.current, key, items);
      crosshairCb.current?.(key);
    };
    chart.subscribeCrosshairMove(onMove);

    return () => {
      safe(() => chart.unsubscribeCrosshairMove(onMove));
      safe(() => scale.unsubscribeVisibleLogicalRangeChange(onRange));
      dispose.forEach((fn) => fn());
      safeRemove(
        chart,
        created.map((c) => c.api),
      );
    };
  }, [chart, dates, series, format, axisFormat, log, baseline, band, resetKey]);

  return (
    <div className="relative" style={{ height }}>
      <div ref={ref} role="img" aria-label={ariaLabel} className="h-full w-full" />
      <div
        ref={readoutRef}
        aria-hidden
        className="pointer-events-none absolute top-2 left-3 z-10 flex max-w-[calc(100%-5rem)] flex-wrap gap-x-3 gap-y-0.5 border border-hairline bg-surface/90 px-2 py-1 text-xs"
      />
    </div>
  );
}
