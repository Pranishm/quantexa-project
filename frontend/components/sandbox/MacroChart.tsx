"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  CandlestickSeries,
  LineSeries,
  createChart,
  createSeriesMarkers,
  ColorType,
  CrosshairMode,
  LineStyle,
  type IChartApi,
  type ISeriesApi,
  type CandlestickData,
  type LineData,
  type Time,
  type SeriesMarker,
  type SeriesType,
} from "lightweight-charts";
import { Eye, EyeOff, Maximize2 } from "lucide-react";
import type { Candle, Num } from "@/lib/types";

/** Historical macro events for vertical line markers. */
const MACRO_EVENTS: { date: string; label: string; color: string }[] = [
  { date: "2020-03-11", label: "WHO Declares Pandemic", color: "#F87171" },
  { date: "2020-03-23", label: "Fed Unlimited QE", color: "#34D399" },
  { date: "2021-11-10", label: "BTC All-Time High", color: "#FFD700" },
  { date: "2022-01-26", label: "Fed Hawkish Pivot", color: "#F87171" },
  { date: "2022-03-16", label: "Fed Rate Hike Begins", color: "#F87171" },
  { date: "2022-05-09", label: "LUNA/UST Collapse", color: "#F87171" },
  { date: "2022-06-13", label: "Crypto Bear Market", color: "#F87171" },
  { date: "2022-11-11", label: "FTX Collapse", color: "#F87171" },
  { date: "2023-03-10", label: "SVB Bank Crisis", color: "#FFD700" },
  { date: "2023-07-26", label: "Fed Rate 5.50%", color: "#60A5FA" },
  { date: "2024-01-10", label: "BTC ETF Approved", color: "#34D399" },
  { date: "2024-03-11", label: "BTC New ATH $72k", color: "#FFD700" },
  { date: "2024-09-18", label: "Fed First Rate Cut", color: "#34D399" },
];

const CHART_FONT = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace';

interface MacroChartProps {
  candles: Candle[];
  overlays?: Record<string, Num[]>;
  dates?: string[];
  symbol: string;
  className?: string;
}

export function MacroChart({
  candles,
  overlays,
  dates,
  symbol,
  className = "",
}: MacroChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candleSeriesRef = useRef<ISeriesApi<SeriesType> | null>(null);
  const overlaySeriesRef = useRef<ISeriesApi<SeriesType>[]>([]);
  const [showOverlays, setShowOverlays] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const createChartInstance = useCallback(() => {
    if (!containerRef.current) return;

    // Clean up existing chart
    if (chartRef.current) {
      try { chartRef.current.remove(); } catch { /* already disposed */ }
    }
    overlaySeriesRef.current = [];

    const el = containerRef.current;
    const chart = createChart(el, {
      width: el.clientWidth,
      height: el.clientHeight || 500,
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#94a3b8",
        fontFamily: CHART_FONT,
        fontSize: 11,
      },
      grid: {
        vertLines: { color: "rgba(148, 163, 184, 0.06)", style: LineStyle.Solid },
        horzLines: { color: "rgba(148, 163, 184, 0.06)", style: LineStyle.Solid },
      },
      rightPriceScale: {
        borderColor: "rgba(148, 163, 184, 0.12)",
        scaleMargins: { top: 0.06, bottom: 0.06 },
      },
      timeScale: {
        borderColor: "rgba(148, 163, 184, 0.12)",
        timeVisible: false,
        rightOffset: 6,
        minBarSpacing: 0.5,
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: "rgba(148, 163, 184, 0.25)",
          width: 1,
          style: LineStyle.Dashed,
          labelBackgroundColor: "#1e293b",
        },
        horzLine: {
          color: "rgba(148, 163, 184, 0.25)",
          width: 1,
          style: LineStyle.Dashed,
          labelBackgroundColor: "#1e293b",
        },
      },
      handleScale: { mouseWheel: true, pinch: true, axisPressedMouseMove: true },
      handleScroll: { pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: false },
    });

    chartRef.current = chart;

    // Candlestick series (LW v5 API)
    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#34D399",
      downColor: "#F87171",
      wickUpColor: "#34D399",
      wickDownColor: "#F87171",
      borderVisible: false,
    });

    const candleData: CandlestickData<Time>[] = candles.map((c) => ({
      time: c.date as Time,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }));

    candleSeries.setData(candleData);
    candleSeriesRef.current = candleSeries;

    // Macro event markers (LW v5 API)
    const markers: SeriesMarker<Time>[] = [];
    const candleDateSet = new Set(candles.map((c) => c.date));

    for (const event of MACRO_EVENTS) {
      if (candleDateSet.has(event.date)) {
        markers.push({
          time: event.date as Time,
          position: "aboveBar",
          color: event.color,
          shape: "arrowDown",
          text: event.label,
        });
      }
    }

    if (markers.length > 0) {
      markers.sort((a, b) => (a.time as string).localeCompare(b.time as string));
      createSeriesMarkers(candleSeries, markers);
    }

    chart.timeScale().fitContent();

    // Resize observer
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
    }
    const observer = new ResizeObserver(() => {
      if (!chartRef.current) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w > 0 && h > 0) {
        try { chartRef.current.applyOptions({ width: w, height: h }); } catch { /* disposed */ }
      }
    });
    observer.observe(el);
    resizeObserverRef.current = observer;
  }, [candles]);

  // Add/remove overlays
  const updateOverlays = useCallback(() => {
    const chart = chartRef.current;
    if (!chart) return;

    // Remove existing overlay series
    for (const s of overlaySeriesRef.current) {
      try { chart.removeSeries(s); } catch { /* already removed */ }
    }
    overlaySeriesRef.current = [];

    if (!showOverlays || !overlays || !dates) return;

    const OVERLAY_COLORS = ["#818CF8", "#FB923C", "#A78BFA", "#F472B6"];
    let colorIdx = 0;

    for (const [name, values] of Object.entries(overlays)) {
      const lineColor = OVERLAY_COLORS[colorIdx % OVERLAY_COLORS.length];
      colorIdx++;

      const series = chart.addSeries(LineSeries, {
        color: lineColor,
        lineWidth: 1,
        lineStyle: LineStyle.Solid,
        priceLineVisible: false,
        lastValueVisible: false,
        crosshairMarkerVisible: false,
        title: name.toUpperCase(),
      });

      const lineData: LineData<Time>[] = [];
      for (let i = 0; i < values.length; i++) {
        const v = values[i];
        if (v !== null && v !== undefined && dates[i]) {
          lineData.push({ time: dates[i] as Time, value: v });
        }
      }

      if (lineData.length > 0) {
        series.setData(lineData);
        overlaySeriesRef.current.push(series);
      }
    }
  }, [showOverlays, overlays, dates]);

  // Create chart when candles change
  useEffect(() => {
    if (candles.length === 0) return;
    createChartInstance();

    return () => {
      resizeObserverRef.current?.disconnect();
      if (chartRef.current) {
        try { chartRef.current.remove(); } catch { /* disposed */ }
        chartRef.current = null;
      }
    };
  }, [createChartInstance]);

  // Update overlays when toggled or data changes
  useEffect(() => {
    updateOverlays();
  }, [updateOverlays]);

  const toggleFullscreen = () => {
    const el = containerRef.current?.parentElement;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`glass-panel flex flex-col overflow-hidden ${className}`}>
      {/* Chart Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--neo-border)]">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-bold text-[var(--text-primary)] tracking-wide">
            PRICE · {symbol}
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(96,165,250,0.1)] text-[var(--neo-blue)] font-mono">
            {candles.length} bars
          </span>
        </div>

        <div className="flex items-center gap-2">
          {overlays && Object.keys(overlays).length > 0 && (
            <button
              onClick={() => setShowOverlays(!showOverlays)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[rgba(15,23,42,0.6)] border border-[var(--neo-border)] hover:border-[rgba(148,163,184,0.25)] text-[11px] font-medium transition-all"
              style={{
                color: showOverlays ? "var(--neo-blue)" : "var(--text-muted)",
              }}
            >
              {showOverlays ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              SMA / EMA
            </button>
          )}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg hover:bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div
        ref={containerRef}
        className="flex-1 min-h-[400px]"
        style={{ background: "transparent" }}
      />

      {/* Macro event legend */}
      <div className="px-5 py-2 border-t border-[var(--neo-border)] flex flex-wrap gap-3 text-[10px]">
        <span className="text-[var(--text-muted)] uppercase tracking-wider font-semibold">
          Macro Events
        </span>
        {MACRO_EVENTS.slice(0, 6).map((e) => (
          <span key={e.date} className="flex items-center gap-1 text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: e.color }} />
            {e.label}
          </span>
        ))}
        {MACRO_EVENTS.length > 6 && (
          <span className="text-[var(--text-muted)]">+{MACRO_EVENTS.length - 6} more</span>
        )}
      </div>
    </div>
  );
}
