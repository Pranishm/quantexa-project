"use client";

import {
  ColorType,
  CrosshairMode,
  LineStyle,
  createChart,
  type DeepPartial,
  type IChartApi,
  type IChartApiBase,
  type IPrimitivePaneRenderer,
  type IPrimitivePaneView,
  type ISeriesApi,
  type ISeriesPrimitive,
  type ChartOptions,
  type SeriesAttachedParameter,
  type SeriesType,
  type Time,
} from "lightweight-charts";
import { useCallback, useState } from "react";

import { INK, SURFACE } from "@/lib/colors";
import { date as formatDate } from "@/lib/format";

export { LineStyle };

export const toTime = (date: string) => date as Time;

/**
 * Normalise a `Time` back to the 'YYYY-MM-DD' key we indexed our data by.
 *
 * The library does not promise to hand back the same representation it was
 * given: a string time can return as a BusinessDay object, and `String(...)` on
 * that yields "[object Object]", so every lookup silently misses.
 */
export function timeKey(time: Time | undefined): string | null {
  if (time === undefined || time === null) return null;
  if (typeof time === "string") return time;
  if (typeof time === "number") return new Date(time * 1000).toISOString().slice(0, 10);
  if (typeof time === "object" && "year" in time) {
    const { year, month, day } = time;
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }
  return null;
}

/** Canvas text cannot resolve CSS variables, so charts need a literal font stack. */
export const CHART_FONT = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace';

/** Solid hairline grid, recessive axes, no decoration. */
export function baseOptions(height: number): DeepPartial<ChartOptions> {
  return {
    height,
    autoSize: false,
    layout: {
      background: { type: ColorType.Solid, color: SURFACE },
      textColor: INK.muted,
      fontFamily: CHART_FONT,
      fontSize: 12,
      attributionLogo: true,
    },
    grid: {
      vertLines: { color: INK.hairline, style: LineStyle.Solid },
      horzLines: { color: INK.hairline, style: LineStyle.Solid },
    },
    rightPriceScale: { borderColor: INK.rule, scaleMargins: { top: 0.08, bottom: 0.08 } },
    timeScale: { borderColor: INK.rule, timeVisible: false, rightOffset: 4, minBarSpacing: 0.05 },
    crosshair: {
      mode: CrosshairMode.Normal,
      vertLine: { color: INK.muted, width: 1, style: LineStyle.Solid, labelBackgroundColor: "#333333" },
      horzLine: { color: INK.muted, width: 1, style: LineStyle.Solid, labelBackgroundColor: "#333333" },
    },
    // Wheel zoom would trap the page scroll whenever the pointer is over a chart. Zoom by dragging an axis or pinching.
    handleScale: { mouseWheel: false, pinch: true, axisPressedMouseMove: true },
    handleScroll: { mouseWheel: false, pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: false },
  };
}

/**
 * Charts disposed by a re-mount. React can still run a queued effect against the
 * old instance, and every call on a removed chart throws from deep inside the
 * library, so consumers check `isAlive` before touching one.
 */
const disposed = new WeakSet<IChartApi>();

export const isAlive = (chart: IChartApi | null): chart is IChartApi => chart !== null && !disposed.has(chart);

/**
 * Creates a chart when the container mounts and disposes it when it unmounts.
 * A ref callback with a cleanup (React 19) does this without an effect that sets state.
 */
export function useLwChart(height: number) {
  const [chart, setChart] = useState<IChartApi | null>(null);

  const ref = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return;
      const created = createChart(el, { ...baseOptions(height), width: el.clientWidth });
      setChart(created);

      const observer = new ResizeObserver(() => {
        // A queued resize can arrive after disposal; applying width would throw.
        if (disposed.has(created)) return;
        const width = el.clientWidth;
        if (width > 0) safe(() => created.applyOptions({ width }));
      });
      observer.observe(el);

      return () => {
        observer.disconnect();
        disposed.add(created);
        safe(() => created.remove());
      };
    },
    // Height is applied by the caller through applyOptions; a new height must not rebuild the chart.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { ref, chart };
}

/** Removing a series after the chart was disposed throws; unmount order makes that routine. */
export function safeRemove(chart: IChartApiBase<Time>, series: ISeriesApi<SeriesType, Time>[]) {
  for (const s of series) {
    try {
      chart.removeSeries(s);
    } catch {
      /* chart already disposed */
    }
  }
}

export function safe(fn: () => void) {
  try {
    fn();
  } catch {
    /* chart already disposed */
  }
}

// --- crosshair readout -----------------------------------------------------------

export interface ReadoutItem {
  label: string;
  value: string;
  color?: string;
}

/**
 * Writes the readout straight to the DOM. Mouse moves fire dozens of times a
 * second; routing them through React state would re-render the card each time.
 */
export function paintReadout(el: HTMLElement | null, heading: string, items: ReadoutItem[]) {
  if (!el) return;
  const nodes: Node[] = [];

  const head = document.createElement("span");
  head.className = "text-ink-2";
  head.textContent = /^\d{4}-\d{2}-\d{2}$/.test(heading) ? formatDate(heading) : heading;
  nodes.push(head);

  for (const item of items) {
    const wrap = document.createElement("span");
    wrap.className = "inline-flex items-center gap-1";
    if (item.color) {
      const dot = document.createElement("span");
      dot.style.cssText = `width:8px;height:8px;background:${item.color};display:inline-block`;
      wrap.appendChild(dot);
    }
    const label = document.createElement("span");
    label.className = "text-ink-3";
    label.textContent = item.label;
    const value = document.createElement("span");
    value.className = "tnum text-ink";
    value.textContent = item.value;
    wrap.append(label, value);
    nodes.push(wrap);
  }
  el.replaceChildren(...nodes);
}

// --- Monte Carlo band as a series primitive ------------------------------------------

interface BandPoint {
  time: Time;
  upper: number;
  lower: number;
}

interface BitmapScope {
  context: CanvasRenderingContext2D;
  horizontalPixelRatio: number;
  verticalPixelRatio: number;
}

interface CanvasTarget {
  useBitmapCoordinateSpace: (cb: (scope: BitmapScope) => void) => void;
}

class BandRenderer implements IPrimitivePaneRenderer {
  constructor(
    private readonly coords: { x: number; upper: number; lower: number }[],
    private readonly fill: string,
  ) {}

  draw(target: CanvasTarget) {
    target.useBitmapCoordinateSpace(({ context: ctx, horizontalPixelRatio: hr, verticalPixelRatio: vr }) => {
      if (this.coords.length < 2) return;
      ctx.beginPath();
      this.coords.forEach((p, i) => {
        const x = p.x * hr;
        if (i === 0) ctx.moveTo(x, p.upper * vr);
        else ctx.lineTo(x, p.upper * vr);
      });
      for (let i = this.coords.length - 1; i >= 0; i--) {
        ctx.lineTo(this.coords[i].x * hr, this.coords[i].lower * vr);
      }
      ctx.closePath();
      ctx.fillStyle = this.fill;
      ctx.fill();
    });
  }
}

class BandView implements IPrimitivePaneView {
  private coords: { x: number; upper: number; lower: number }[] = [];

  constructor(private readonly owner: BandPrimitive) {}

  update() {
    const { chart, series, points } = this.owner;
    if (!chart || !series) {
      this.coords = [];
      return;
    }
    const scale = chart.timeScale();
    const out: { x: number; upper: number; lower: number }[] = [];
    for (const p of points) {
      const x = scale.timeToCoordinate(p.time);
      const upper = series.priceToCoordinate(p.upper);
      const lower = series.priceToCoordinate(p.lower);
      if (x !== null && upper !== null && lower !== null) out.push({ x, upper, lower });
    }
    this.coords = out;
  }

  zOrder() {
    return "bottom" as const;
  }

  renderer() {
    return new BandRenderer(this.coords, this.owner.fill);
  }
}

/** A translucent fill between two value paths, anchored to a series so it shares its price scale. */
export class BandPrimitive implements ISeriesPrimitive<Time> {
  chart: IChartApiBase<Time> | null = null;
  series: ISeriesApi<SeriesType, Time> | null = null;
  private requestUpdate: (() => void) | null = null;
  private readonly view = new BandView(this);

  constructor(
    public points: BandPoint[],
    public fill: string,
  ) {}

  attached(param: SeriesAttachedParameter<Time>) {
    this.chart = param.chart;
    this.series = param.series;
    this.requestUpdate = param.requestUpdate;
    this.requestUpdate();
  }

  detached() {
    this.chart = null;
    this.series = null;
    this.requestUpdate = null;
  }

  updateAllViews() {
    this.view.update();
  }

  paneViews() {
    return [this.view];
  }
}
