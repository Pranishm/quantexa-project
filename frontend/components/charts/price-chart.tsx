"use client";

import {
  CandlestickSeries,
  HistogramSeries,
  LineSeries,
  PriceScaleMode,
  createSeriesMarkers,
  type CandlestickData,
  type HistogramData,
  type IRange,
  type ISeriesApi,
  type LineData,
  type Logical,
  type MouseEventParams,
  type SeriesMarker,
  type SeriesType,
  type Time,
  type WhitespaceData,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

import { INK, STATUS, SURFACE } from "@/lib/colors";
import { price as fmtPrice } from "@/lib/format";

import {
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

export interface PriceOverlay {
  id: string;
  label: string;
  color: string;
  values: (number | null)[];
  dashed?: boolean;
}

export interface TradeMarker {
  id: string;
  date: string;
  side: "buy" | "sell";
  text?: string;
}

export interface RibbonSpec {
  regimes: (string | null)[];
  fill: (regime: string) => string;
}

export interface PriceChartProps {
  mode: "candles" | "line";
  dates: string[];
  close: number[];
  open?: number[];
  high?: number[];
  low?: number[];
  /** Line colour in `line` mode (the asset's colour). */
  lineColor?: string;
  /** Memoise in the parent: a new array identity rebuilds the series. */
  overlays?: PriceOverlay[];
  markers?: TradeMarker[];
  /** Fired when a click lands within a few bars of a marker. */
  onMarkerClick?: (marker: TradeMarker) => void;
  /** Coloured band under the price, sharing its time axis. */
  ribbon?: RibbonSpec | null;
  ariaLabel: string;
  height?: number;
  log?: boolean;
  resetKey?: string;
  /** Keep the newest bar in view as data grows (replay). */
  follow?: boolean;
}

const RIBBON_PANE_HEIGHT = 26;
/**
 * Hit radius in SCREEN PIXELS, not bars. A multi-year chart packs thousands of
 * bars into a few hundred pixels, so a radius counted in bars would be a
 * fraction of a pixel wide and effectively unclickable.
 */
const CLICK_RADIUS_PX = 14;

export function PriceChart({
  mode,
  dates,
  close,
  open,
  high,
  low,
  lineColor = INK.primary,
  overlays = [],
  markers = [],
  onMarkerClick,
  ribbon = null,
  ariaLabel,
  height = 420,
  log = false,
  resetKey = "",
  follow = false,
}: PriceChartProps) {
  const { ref, chart } = useLwChart(height);
  const readoutRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<IRange<Logical> | null>(null);
  const lastKey = useRef<string | null>(null);
  const clickCb = useRef(onMarkerClick);
  useEffect(() => {
    clickCb.current = onMarkerClick;
  }, [onMarkerClick]);

  useEffect(() => {
    if (isAlive(chart)) safe(() => chart.applyOptions({ height }));
  }, [chart, height]);

  useEffect(() => {
    if (!isAlive(chart) || dates.length === 0) return;

    chart.applyOptions({ localization: { priceFormatter: (v: number) => fmtPrice(v) } });
    // Chart-level options: unlike chart.priceScale("right"), this does not require a pane that still has a
    // series, and the cleanup below removes every series before this effect runs again.
    chart.applyOptions({ rightPriceScale: { mode: log ? PriceScaleMode.Logarithmic : PriceScaleMode.Normal } });

    const created: ISeriesApi<SeriesType, Time>[] = [];
    const dispose: (() => void)[] = [];

    // --- main series ------------------------------------------------------------
    let main: ISeriesApi<SeriesType, Time>;
    if (mode === "candles" && open && high && low) {
      // Up candles are hollow and down candles are filled, so direction survives without colour.
      const candles = chart.addSeries(CandlestickSeries, {
        upColor: SURFACE,
        borderUpColor: STATUS.good,
        wickUpColor: STATUS.good,
        downColor: STATUS.critical,
        borderDownColor: STATUS.critical,
        wickDownColor: STATUS.critical,
        borderVisible: true,
        priceLineVisible: false,
      });
      const data: CandlestickData<Time>[] = dates.map((d, i) => ({
        time: toTime(d),
        open: open[i],
        high: high[i],
        low: low[i],
        close: close[i],
      }));
      candles.setData(data);
      main = candles;
    } else {
      const line = chart.addSeries(LineSeries, {
        color: lineColor,
        lineWidth: 2,
        priceLineVisible: false,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: SURFACE,
        crosshairMarkerBorderWidth: 2,
      });
      const data: LineData<Time>[] = dates.map((d, i) => ({ time: toTime(d), value: close[i] }));
      line.setData(data);
      main = line;
    }
    created.push(main);

    // --- indicator overlays -----------------------------------------------------
    const overlayApis: { spec: PriceOverlay; api: ISeriesApi<SeriesType, Time> }[] = [];
    for (const spec of overlays) {
      const api = chart.addSeries(LineSeries, {
        color: spec.color,
        lineWidth: 2,
        lineStyle: spec.dashed ? LineStyle.Dashed : LineStyle.Solid,
        priceLineVisible: false,
        lastValueVisible: false,
        crosshairMarkerVisible: false,
      });
      const data: LineData<Time>[] = [];
      for (let i = 0; i < dates.length; i++) {
        const v = spec.values[i];
        if (v !== null && v !== undefined && Number.isFinite(v)) data.push({ time: toTime(dates[i]), value: v });
      }
      api.setData(data);
      created.push(api);
      overlayApis.push({ spec, api });
    }

    // --- trade markers ------------------------------------------------------------
    const dateIndex = new Map(dates.map((d, i) => [d, i]));
    const placed = markers
      .filter((m) => dateIndex.has(m.date))
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

    if (placed.length) {
      const plugin = createSeriesMarkers(
        main,
        placed.map((m): SeriesMarker<Time> => ({
          time: toTime(m.date),
          position: m.side === "buy" ? "belowBar" : "aboveBar",
          shape: m.side === "buy" ? "arrowUp" : "arrowDown",
          color: m.side === "buy" ? STATUS.good : STATUS.critical,
          text: m.text ?? (m.side === "buy" ? "B" : "S"),
          size: 1,
        })),
      );
      dispose.push(() => safe(() => plugin.detach()));
    }

    // --- regime ribbon: a second pane on the same time axis ----------------------------
    if (ribbon) {
      const band = chart.addSeries(
        HistogramSeries,
        {
          base: 0,
          priceLineVisible: false,
          lastValueVisible: false,
          priceFormat: { type: "custom", formatter: () => "" },
          autoscaleInfoProvider: () => ({ priceRange: { minValue: 0, maxValue: 1 } }),
        },
        1,
      );
      const data: (HistogramData<Time> | WhitespaceData<Time>)[] = dates.map((d, i) => {
        const regime = ribbon.regimes[i];
        return regime ? { time: toTime(d), value: 1, color: ribbon.fill(regime) } : { time: toTime(d) };
      });
      band.setData(data);
      created.push(band);
      safe(() => {
        chart.priceScale("right", 1).applyOptions({ visible: false });
        chart.panes()[1]?.setHeight(RIBBON_PANE_HEIGHT);
      });
    }

    // --- viewport -----------------------------------------------------------------
    const scale = chart.timeScale();
    if (lastKey.current !== resetKey || !rangeRef.current) scale.fitContent();
    else scale.setVisibleLogicalRange(rangeRef.current);
    if (follow) scale.scrollToRealTime();
    lastKey.current = resetKey;
    const onRange = (r: IRange<Logical> | null) => {
      rangeRef.current = r;
    };
    scale.subscribeVisibleLogicalRangeChange(onRange);

    // --- readout ------------------------------------------------------------------
    const items = (i: number): ReadoutItem[] => {
      const out: ReadoutItem[] =
        mode === "candles" && open && high && low
          ? [
              { label: "O", value: fmtPrice(open[i]) },
              { label: "H", value: fmtPrice(high[i]) },
              { label: "L", value: fmtPrice(low[i]) },
              { label: "C", value: fmtPrice(close[i]) },
            ]
          : [{ label: "Close", value: fmtPrice(close[i]), color: lineColor }];
      for (const { spec } of overlayApis) {
        const v = spec.values[i];
        if (v !== null && v !== undefined) out.push({ label: spec.label, value: fmtPrice(v), color: spec.color });
      }
      return out;
    };
    const lastIndex = dates.length - 1;
    paintReadout(readoutRef.current, dates[lastIndex], items(lastIndex));

    const onMove = (param: MouseEventParams<Time>) => {
      const key = timeKey(param.time);
      const i = key === null ? undefined : dateIndex.get(key);
      if (i === undefined) paintReadout(readoutRef.current, dates[lastIndex], items(lastIndex));
      else paintReadout(readoutRef.current, dates[i], items(i));
    };
    chart.subscribeCrosshairMove(onMove);

    // --- click a marker to explain the trade -----------------------------------------------
    const onClick = (param: MouseEventParams<Time>) => {
      if (!clickCb.current || !param.point) return;
      // Measure the distance to each marker in pixels so the hit area is the same
      // physical size whether the chart shows one month or ten years.
      const scale = chart.timeScale();
      let best: { marker: TradeMarker; distance: number } | null = null;
      for (const m of placed) {
        const x = scale.timeToCoordinate(toTime(m.date));
        if (x === null) continue;
        const distance = Math.abs(x - param.point.x);
        if (distance <= CLICK_RADIUS_PX && (best === null || distance < best.distance)) {
          best = { marker: m, distance };
        }
      }
      if (best) clickCb.current(best.marker);
    };
    chart.subscribeClick(onClick);

    return () => {
      safe(() => chart.unsubscribeCrosshairMove(onMove));
      safe(() => chart.unsubscribeClick(onClick));
      safe(() => scale.unsubscribeVisibleLogicalRangeChange(onRange));
      dispose.forEach((fn) => fn());
      safeRemove(chart, created);
    };
  }, [chart, mode, dates, close, open, high, low, lineColor, overlays, markers, ribbon, log, resetKey, follow]);

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
