"use client";

/**
 * QUANTORA CHART ENGINE
 * A professional-grade financial chart built on lightweight-charts v5.
 *
 * Features:
 * - Dense OHLCV candlesticks (700+ bars), OHLC Bar, Line, Area modes
 * - Real price axis + real date axis
 * - Interactive crosshair with OHLC header readout (not a floating tooltip)
 * - SMA, EMA, Bollinger Band overlays
 * - Volume subchart (separate pane, synchronized time axis)
 * - RSI and MACD subpanels
 * - Trade entry/exit markers with hover popup
 * - Regime background bands
 * - Progressive render animation on mount
 * - Demo-live last candle micro-update
 * - Floating clay toolbar (chart type, timeframe, indicators)
 * - Fullscreen toggle
 * - Light + Dark mode aware via CSS variable detection
 */

import {
  createChart,
  CrosshairMode,
  ColorType,
  LineStyle,
  PriceScaleMode,
  CandlestickSeries,
  BarSeries,
  LineSeries,
  HistogramSeries,
  AreaSeries,
  BaselineSeries,
  createSeriesMarkers,
  type IChartApi,
  type ISeriesApi,
  type SeriesType,
  type Time,
  type CandlestickData,
  type BarData,
  type LineData,
  type HistogramData,
  type AreaData,
  type BaselineData,
  type SeriesMarker,
  type MouseEventParams,
} from "lightweight-charts";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
  Maximize2,
  Minimize2,
  ChevronDown,
  Check,
  BarChart2,
  CandlestickChart,
  TrendingUp,
  Activity,
  Layers,
  Sliders,
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Radio,
} from "lucide-react";

import { IndicatorSettingsModal } from "./indicator-settings-dialog";
import { DEFAULT_INDICATOR_CONFIGS, type IndicatorConfig } from "@/lib/indicators";

import {
  ALL_OHLCV,
  barsByTimeframe,
  sma,
  ema,
  rsiIndicator,
  bollingerBands,
  macdIndicator,
  type OHLCVBar,
  type BacktestTrade,
} from "@/lib/demo-data/ohlcv";

// ---------------------------------------------------------------------------
// Chart colour constants (canvas cannot read CSS variables)
// ---------------------------------------------------------------------------
function getChartColors(isDark: boolean) {
  return {
    bg: isDark ? "#080A0D" : "#ECEEEA",
    surface: isDark ? "#0D1013" : "#ECEEEA",
    grid: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.06)",
    rule: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.1)",
    text: isDark ? "#969E9B" : "#626A66",
    textPrimary: isDark ? "#F2F4F3" : "#171A19",
    crosshair: isDark ? "#00E599" : "#626A66",
    labelBg: isDark ? "#171A1E" : "#D9DDD8",
    upCandle: isDark ? "#00E599" : "#12966D",
    downCandle: isDark ? "#FF3B69" : "#D94E5C",
    upWick: isDark ? "#00E599" : "#12966D",
    downWick: isDark ? "#FF3B69" : "#D94E5C",
    upBorder: isDark ? "#00E599" : "#12966D",
    downBorder: isDark ? "#FF3B69" : "#D94E5C",
    volume: isDark ? "#171A1E" : "#d0d5ce",
    volumeUp: isDark ? "rgba(0, 229, 153, 0.35)" : "rgba(18, 150, 109, 0.35)",
    volumeDown: isDark ? "rgba(255, 59, 105, 0.35)" : "rgba(217, 78, 92, 0.35)",
    sma20: "#8776FF",
    sma50: "#E4B64D",
    ema200: "#FF3B69",
    bbandsUpper: "rgba(135, 118, 255, 0.5)",
    bbandsLower: "rgba(135, 118, 255, 0.5)",
    bbandsMid: "rgba(135, 118, 255, 0.25)",
    rsiLine: "#8776FF",
    rsiOb: "rgba(255, 59, 105, 0.2)",
    rsiOs: "rgba(0, 229, 153, 0.2)",
    macdLine: "#8776FF",
    macdSignal: "#E4B64D",
    macdHistPos: "rgba(0, 229, 153, 0.7)",
    macdHistNeg: "rgba(255, 59, 105, 0.7)",
    regimeBull: "rgba(0, 229, 153, 0.06)",
    regimeBear: "rgba(255, 59, 105, 0.06)",
    regimeRange: "rgba(228, 182, 77, 0.06)",
    tradeBuy: "#00E599",
    tradeSell: "#FF3B69",
    benchmark: "rgba(150, 158, 155, 0.6)",
  };
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type ChartMode = "CANDLE" | "BAR" | "LINE" | "AREA" | "BASELINE";
type Timeframe = "1M" | "3M" | "6M" | "1Y" | "ALL";
type ActiveIndicator = "SMA20" | "SMA50" | "EMA200" | "BB" | "VOLUME" | "RSI" | "MACD";

interface QuantoraChartProps {
  symbol?: string;
  showTrades?: boolean;
  trades?: BacktestTrade[];
  onTradeClick?: (trade: BacktestTrade) => void;
  defaultTimeframe?: Timeframe;
  defaultMode?: ChartMode;
  defaultIndicators?: ActiveIndicator[];
  height?: number;
  autoPlay?: boolean;
}

// ---------------------------------------------------------------------------
// Format helpers
// ---------------------------------------------------------------------------
function fmt(v: number, symbol: string): string {
  if (symbol === "1INCH" || (v < 1 && v > 0)) {
    return v < 1 ? v.toFixed(4) : v.toFixed(3);
  }
  if (symbol === "BTC") {
    return v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v.toFixed(2);
  }
  return v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v.toFixed(2);
}

function fmtFull(v: number, symbol?: string): string {
  if (symbol === "1INCH" || (v < 1 && v > 0)) {
    return v.toFixed(4);
  }
  if (v >= 1000) return v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return v.toFixed(2);
}

function fmtVol(v: number): string {
  if (v >= 1_000_000_000) return `${(v / 1_000_000_000).toFixed(1)}B`;
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
  return String(v);
}

function fmtDate(d: string): string {
  const dt = new Date(d + "T00:00:00Z");
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

function getNextDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

// ---------------------------------------------------------------------------
// Safe chart call (chart may be disposed)
// ---------------------------------------------------------------------------
function safe(fn: () => void) {
  try { fn(); } catch { /* disposed */ }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function QuantoraChart({
  symbol = "BTC",
  showTrades = false,
  trades = [],
  onTradeClick,
  defaultTimeframe = "1Y",
  defaultMode = "CANDLE",
  defaultIndicators = ["SMA20", "SMA50", "VOLUME"],
  height = 480,
  autoPlay = false,
}: QuantoraChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const volumeChartRef = useRef<IChartApi | null>(null);
  const rsiChartRef = useRef<IChartApi | null>(null);
  const macdChartRef = useRef<IChartApi | null>(null);

  const mainPaneRef = useRef<HTMLDivElement>(null);
  const volPaneRef = useRef<HTMLDivElement>(null);
  const rsiPaneRef = useRef<HTMLDivElement>(null);
  const macdPaneRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);
  const tradePopupRef = useRef<HTMLDivElement>(null);
  const mainSeriesRef = useRef<ISeriesApi<any> | null>(null);
  const volumeSeriesRef = useRef<ISeriesApi<any> | null>(null);
  const liveBarRef = useRef<OHLCVBar | null>(null);

  const [mode, setMode] = useState<ChartMode>(defaultMode);
  const [timeframe, setTimeframe] = useState<Timeframe>(defaultTimeframe);
  const [activeIndicators, setActiveIndicators] = useState<Set<ActiveIndicator>>(
    new Set(defaultIndicators),
  );
  const [indicatorsOpen, setIndicatorsOpen] = useState(false);
  const [chartTypeOpen, setChartTypeOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [hoveredTrade, setHoveredTrade] = useState<{ trade: BacktestTrade; x: number; y: number } | null>(null);
  const [indicatorModalOpen, setIndicatorModalOpen] = useState(false);
  const [indicatorConfigs, setIndicatorConfigs] = useState<IndicatorConfig[]>(DEFAULT_INDICATOR_CONFIGS);

  // Live playback & moving graph state
  const [isPlaying, setIsPlaying] = useState(autoPlay ?? false);
  const [playSpeed, setPlaySpeed] = useState<number>(1);
  const [playIndex, setPlayIndex] = useState<number>(0);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [livePrice, setLivePrice] = useState<number | null>(null);
  const [tickFlash, setTickFlash] = useState<"up" | "down" | null>(null);

  const chartTypeMenuRef = useRef<HTMLDivElement>(null);
  const indicatorsMenuRef = useRef<HTMLDivElement>(null);

  // Detect theme
  useEffect(() => {
    const check = () => setIsDark(!document.documentElement.classList.contains("light"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // Close dropdowns on outside click with proper ref containment
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (chartTypeMenuRef.current && !chartTypeMenuRef.current.contains(e.target as Node)) {
        setChartTypeOpen(false);
      }
      if (indicatorsMenuRef.current && !indicatorsMenuRef.current.contains(e.target as Node)) {
        setIndicatorsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleIndicator = useCallback((ind: ActiveIndicator) => {
    setActiveIndicators((prev) => {
      const next = new Set(prev);
      if (next.has(ind)) next.delete(ind); else next.add(ind);
      return next;
    });
  }, []);

  // Filtered bars
  const allBars = useMemo(() => ALL_OHLCV[symbol] ?? ALL_OHLCV["BTC"], [symbol]);
  const bars = useMemo(() => barsByTimeframe(allBars, timeframe), [allBars, timeframe]);

  // Sync playIndex whenever bars change
  useEffect(() => {
    setPlayIndex(bars.length);
    liveBarRef.current = null;
  }, [bars, symbol, timeframe]);

  // Indicator values computed from the filtered bars
  const sma20Values = useMemo(() => sma(bars, 20), [bars]);
  const sma50Values = useMemo(() => sma(bars, 50), [bars]);
  const ema200Values = useMemo(() => ema(bars, 200), [bars]);
  const bbValues = useMemo(() => bollingerBands(bars, 20, 2), [bars]);
  const rsiValues = useMemo(() => rsiIndicator(bars, 14), [bars]);
  const macdValues = useMemo(() => macdIndicator(bars, 12, 26, 9), [bars]);

  const hasRSI = activeIndicators.has("RSI");
  const hasMACD = activeIndicators.has("MACD");
  const hasVol = activeIndicators.has("VOLUME");

  // Main chart height accounting for subpanels
  const volHeight = hasVol ? 80 : 0;
  const rsiHeight = hasRSI ? 100 : 0;
  const macdHeight = hasMACD ? 100 : 0;
  const mainH = height; // main pane has its own height

  // Stable Crosshair Readout Painter
  const paintReadout = useCallback((b: OHLCVBar | null) => {
    const el = readoutRef.current;
    if (!el || !b) return;
    const changeAmt = b.close - b.open;
    const changePct = ((changeAmt / (b.open || 0.0001)) * 100).toFixed(2);
    const isUp = changeAmt >= 0;
    const sign = isUp ? "+" : "";
    const prec = (symbol === "1INCH" || b.close < 1) ? 4 : 2;
    el.innerHTML = `
      <span class="text-[var(--text-primary)] font-bold text-sm tabular-nums">${symbol === "1INCH" ? "$" + b.close.toFixed(4) : "$" + fmtFull(b.close)}</span>
      <span class="${isUp ? "text-[#15956C] dark:text-[#35D39A]" : "text-[#D94E5C] dark:text-[#FF6572]"} font-semibold text-xs tabular-nums">
        ${sign}${changeAmt.toFixed(prec)} (${sign}${changePct}%)
      </span>
      <span class="text-[var(--text-muted)] text-xs">O <b class="text-[var(--text-secondary)]">${b.open.toFixed(prec)}</b></span>
      <span class="text-[var(--text-muted)] text-xs">H <b class="text-[var(--text-secondary)]">${b.high.toFixed(prec)}</b></span>
      <span class="text-[var(--text-muted)] text-xs">L <b class="text-[var(--text-secondary)]">${b.low.toFixed(prec)}</b></span>
      <span class="text-[var(--text-muted)] text-xs">C <b class="text-[var(--text-secondary)]">${b.close.toFixed(prec)}</b></span>
      <span class="text-[var(--text-muted)] text-xs">V <b class="text-[var(--text-secondary)]">${fmtVol(b.volume)}</b></span>
    `;
  }, [symbol]);

  // Scrubber, Rewind, Step, and Play Handlers
  const handleScrub = useCallback((targetIndex: number) => {
    setIsPlaying(false);
    setPlayIndex(targetIndex);
    liveBarRef.current = null;
    const sliced = bars.slice(0, targetIndex);
    if (!mainSeriesRef.current || sliced.length === 0) return;

    const toTime = (d: string): Time => d as Time;
    if (mode === "CANDLE") {
      mainSeriesRef.current.setData(sliced.map((b) => ({
        time: toTime(b.time), open: b.open, high: b.high, low: b.low, close: b.close,
      })));
    } else if (mode === "BAR") {
      mainSeriesRef.current.setData(sliced.map((b) => ({
        time: toTime(b.time), open: b.open, high: b.high, low: b.low, close: b.close,
      })));
    } else {
      mainSeriesRef.current.setData(sliced.map((b) => ({
        time: toTime(b.time), value: b.close,
      })));
    }

    if (volumeSeriesRef.current) {
      const C = getChartColors(isDark);
      volumeSeriesRef.current.setData(sliced.map((b) => ({
        time: toTime(b.time),
        value: b.volume,
        color: b.close >= b.open ? C.volumeUp : C.volumeDown,
      })));
    }

    safe(() => chartRef.current?.timeScale().scrollToPosition(3, false));
    safe(() => volumeChartRef.current?.timeScale().scrollToPosition(3, false));
    safe(() => rsiChartRef.current?.timeScale().scrollToPosition(3, false));
    safe(() => macdChartRef.current?.timeScale().scrollToPosition(3, false));

    const last = sliced[sliced.length - 1];
    if (last) {
      paintReadout(last);
      setLivePrice(last.close);
    }
  }, [bars, mode, isDark, paintReadout]);

  const handleRewind = useCallback(() => {
    const rewindPoint = Math.max(25, Math.floor(bars.length * 0.25));
    handleScrub(rewindPoint);
  }, [bars.length, handleScrub]);

  const handleStep = useCallback(() => {
    if (playIndex < bars.length) {
      handleScrub(playIndex + 1);
    }
  }, [playIndex, bars.length, handleScrub]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev: boolean) => {
      const next = !prev;
      if (next && playIndex >= bars.length) {
        handleScrub(Math.max(25, bars.length - 120));
      }
      return next;
    });
  }, [playIndex, bars.length, handleScrub]);

  // LIVE PLAYBACK & MOVING GRAPH LOOP
  useEffect(() => {
    if (!isPlaying && !isLiveMode) return;

    const intervalMs = Math.max(40, Math.floor(550 / playSpeed));
    const C = getChartColors(isDark);
    const toTime = (d: string): Time => d as Time;

    const timer = setInterval(() => {
      setPlayIndex((currIdx) => {
        // Phase 1: Replaying historical bars
        if (currIdx < bars.length) {
          const nextIdx = currIdx + 1;
          const nextBar = bars[nextIdx - 1];
          if (nextBar && mainSeriesRef.current) {
            if (mode === "CANDLE" || mode === "BAR") {
              mainSeriesRef.current.update({
                time: toTime(nextBar.time),
                open: nextBar.open,
                high: nextBar.high,
                low: nextBar.low,
                close: nextBar.close,
              });
            } else {
              mainSeriesRef.current.update({
                time: toTime(nextBar.time),
                value: nextBar.close,
              });
            }
            if (volumeSeriesRef.current) {
              volumeSeriesRef.current.update({
                time: toTime(nextBar.time),
                value: nextBar.volume,
                color: nextBar.close >= nextBar.open ? C.volumeUp : C.volumeDown,
              });
            }
            // PHYSICALLY GLIDE / AUTO-SCROLL CHART TO SHOW LATEST MOVEMENT
            safe(() => chartRef.current?.timeScale().scrollToPosition(3, false));
            safe(() => volumeChartRef.current?.timeScale().scrollToPosition(3, false));
            safe(() => rsiChartRef.current?.timeScale().scrollToPosition(3, false));
            safe(() => macdChartRef.current?.timeScale().scrollToPosition(3, false));

            paintReadout(nextBar);
            setLivePrice(nextBar.close);
            setTickFlash(nextBar.close >= nextBar.open ? "up" : "down");
          }
          return nextIdx;
        }

        // Phase 2: Real-time Live Market Ticking / Continuous Candle Formation
        const baseBar = liveBarRef.current || bars[bars.length - 1];
        if (!baseBar) return currIdx;

        const volMult = symbol === "1INCH" ? 0.007 : 0.0025;
        const pctDelta = (Math.random() - 0.49) * volMult;
        const newClose = Math.max(0.0001, baseBar.close * (1 + pctDelta));
        const formattedClose = Number(newClose.toFixed(symbol === "1INCH" ? 4 : 2));

        const ticks = (liveBarRef.current as any)?._ticks || 0;
        if (ticks < 6) {
          const updatedBar: OHLCVBar = {
            ...baseBar,
            high: Math.max(baseBar.high, formattedClose),
            low: Math.min(baseBar.low, formattedClose),
            close: formattedClose,
            volume: baseBar.volume + Math.floor(Math.random() * 2000 + 400),
          };
          (updatedBar as any)._ticks = ticks + 1;
          liveBarRef.current = updatedBar;

          if (mainSeriesRef.current) {
            if (mode === "CANDLE" || mode === "BAR") {
              mainSeriesRef.current.update({
                time: toTime(updatedBar.time),
                open: updatedBar.open,
                high: updatedBar.high,
                low: updatedBar.low,
                close: updatedBar.close,
              });
            } else {
              mainSeriesRef.current.update({
                time: toTime(updatedBar.time),
                value: updatedBar.close,
              });
            }
          }
          paintReadout(updatedBar);
          setLivePrice(formattedClose);
          setTickFlash(pctDelta >= 0 ? "up" : "down");
        } else {
          // Roll over to a brand new printed candle & scroll
          const nextDate = getNextDate(baseBar.time);
          const newBar: OHLCVBar = {
            time: nextDate,
            open: formattedClose,
            high: formattedClose,
            low: formattedClose,
            close: formattedClose,
            volume: Math.floor(Math.random() * 3000 + 1000),
          };
          (newBar as any)._ticks = 1;
          liveBarRef.current = newBar;

          if (mainSeriesRef.current) {
            if (mode === "CANDLE" || mode === "BAR") {
              mainSeriesRef.current.update({
                time: toTime(newBar.time),
                open: newBar.open,
                high: newBar.high,
                low: newBar.low,
                close: newBar.close,
              });
            } else {
              mainSeriesRef.current.update({
                time: toTime(newBar.time),
                value: newBar.close,
              });
            }
            if (volumeSeriesRef.current) {
              volumeSeriesRef.current.update({
                time: toTime(newBar.time),
                value: newBar.volume,
                color: C.volumeUp,
              });
            }
          }
          safe(() => chartRef.current?.timeScale().scrollToPosition(3, false));
          safe(() => volumeChartRef.current?.timeScale().scrollToPosition(3, false));
          safe(() => rsiChartRef.current?.timeScale().scrollToPosition(3, false));
          safe(() => macdChartRef.current?.timeScale().scrollToPosition(3, false));

          paintReadout(newBar);
          setLivePrice(formattedClose);
          setTickFlash("up");
        }

        return currIdx;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, isLiveMode, playSpeed, bars, mode, symbol, isDark, paintReadout]);

  // ---------------------------------------------------------------------------
  // Build / rebuild charts whenever data or config changes
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!mainPaneRef.current) return;

    const C = getChartColors(isDark);
    const toTime = (d: string): Time => d as Time;

    // --- dispose old ---
    if (chartRef.current) { safe(() => chartRef.current!.remove()); chartRef.current = null; }
    if (volumeChartRef.current) { safe(() => volumeChartRef.current!.remove()); volumeChartRef.current = null; }
    if (rsiChartRef.current) { safe(() => rsiChartRef.current!.remove()); rsiChartRef.current = null; }
    if (macdChartRef.current) { safe(() => macdChartRef.current!.remove()); macdChartRef.current = null; }

    const baseOpts = (el: HTMLElement, h: number, showTimeScale: boolean) => ({
      width: el.clientWidth,
      height: h,
      layout: {
        background: { type: ColorType.Solid, color: C.bg },
        textColor: C.text,
        fontFamily: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
        fontSize: 11,
        attributionLogo: false,
      },
      grid: {
        vertLines: { color: C.grid, style: LineStyle.Solid },
        horzLines: { color: C.grid, style: LineStyle.Solid },
      },
      rightPriceScale: {
        borderColor: C.rule,
        scaleMargins: { top: 0.08, bottom: 0.08 },
        minimumWidth: 72,
      },
      timeScale: {
        borderColor: C.rule,
        timeVisible: true,
        secondsVisible: false,
        rightOffset: 6,
        minBarSpacing: 0.5,
        visible: showTimeScale,
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: { color: C.crosshair, width: 1 as any, style: LineStyle.Dashed, labelBackgroundColor: C.labelBg, labelVisible: true },
        horzLine: { color: C.crosshair, width: 1 as any, style: LineStyle.Dashed, labelBackgroundColor: C.labelBg, labelVisible: true },
      },
      handleScale: { mouseWheel: true, pinch: true, axisPressedMouseMove: true },
      handleScroll: { mouseWheel: true, pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: false },
    });

    // ----- MAIN CHART -----
    const main = createChart(mainPaneRef.current, baseOpts(mainPaneRef.current, mainH, !hasVol && !hasRSI && !hasMACD));
    chartRef.current = main;

    let mainSeries: ISeriesApi<SeriesType, Time>;

    const seriesPriceFormat = (symbol === "1INCH" || (bars[0]?.close && bars[0].close < 1)) ? {
      type: "price" as const,
      precision: 4,
      minMove: 0.0001,
    } : {
      type: "price" as const,
      precision: 2,
      minMove: 0.01,
    };

    if (mode === "CANDLE") {
      const cs = main.addSeries(CandlestickSeries, {
        upColor: C.upCandle,
        downColor: C.downCandle,
        borderUpColor: C.upBorder,
        borderDownColor: C.downBorder,
        wickUpColor: C.upWick,
        wickDownColor: C.downWick,
        borderVisible: true,
        priceLineVisible: false,
        priceFormat: seriesPriceFormat,
      });
      cs.setData(bars.map((b): CandlestickData<Time> => ({
        time: toTime(b.time), open: b.open, high: b.high, low: b.low, close: b.close,
      })));
      mainSeries = cs;
    } else if (mode === "BAR") {
      const bs = main.addSeries(BarSeries, {
        upColor: C.upCandle,
        downColor: C.downCandle,
        openVisible: true,
        thinBars: false,
        priceLineVisible: false,
        priceFormat: seriesPriceFormat,
      });
      bs.setData(bars.map((b): BarData<Time> => ({
        time: toTime(b.time), open: b.open, high: b.high, low: b.low, close: b.close,
      })));
      mainSeries = bs;
    } else if (mode === "LINE") {
      const ls = main.addSeries(LineSeries, {
        color: isDark ? "#8776FF" : "#6757E8",
        lineWidth: 2,
        priceLineVisible: false,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: C.bg,
        crosshairMarkerBorderWidth: 2,
        priceFormat: seriesPriceFormat,
      });
      ls.setData(bars.map((b): LineData<Time> => ({ time: toTime(b.time), value: b.close })));
      mainSeries = ls;
    } else if (mode === "AREA") {
      const as = main.addSeries(AreaSeries, {
        topColor: isDark ? "rgba(135, 118, 255, 0.4)" : "rgba(103, 87, 232, 0.35)",
        bottomColor: isDark ? "rgba(135, 118, 255, 0.01)" : "rgba(103, 87, 232, 0.01)",
        lineColor: isDark ? "#8776FF" : "#6757E8",
        lineWidth: 2,
        priceLineVisible: false,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: C.bg,
        priceFormat: seriesPriceFormat,
      });
      as.setData(bars.map((b): AreaData<Time> => ({ time: toTime(b.time), value: b.close })));
      mainSeries = as;
    } else {
      // BASELINE — profit/loss performance relative to starting price of the window
      const basePrice = bars.length > 0 ? bars[0].close : 100;
      const bls = main.addSeries(BaselineSeries, {
        baseValue: { type: "price", price: basePrice },
        topLineColor: C.upCandle,
        topFillColor1: isDark ? "rgba(53, 211, 154, 0.3)" : "rgba(21, 149, 108, 0.3)",
        topFillColor2: isDark ? "rgba(53, 211, 154, 0.02)" : "rgba(21, 149, 108, 0.02)",
        bottomLineColor: C.downCandle,
        bottomFillColor1: isDark ? "rgba(255, 101, 114, 0.02)" : "rgba(217, 78, 92, 0.02)",
        bottomFillColor2: isDark ? "rgba(255, 101, 114, 0.3)" : "rgba(217, 78, 92, 0.3)",
        lineWidth: 2,
        priceLineVisible: false,
        priceFormat: seriesPriceFormat,
      });
      bls.setData(bars.map((b): BaselineData<Time> => ({ time: toTime(b.time), value: b.close })));
      mainSeries = bls;
    }
    mainSeriesRef.current = mainSeries;

    // ----- OVERLAYS -----
    const disposers: (() => void)[] = [];

    if (activeIndicators.has("SMA20")) {
      const s = main.addSeries(LineSeries, {
        color: C.sma20, lineWidth: 1, priceLineVisible: false, lastValueVisible: true,
        crosshairMarkerVisible: false,
      });
      s.setData(bars.map((b, i): LineData<Time> | null => {
        const v = sma20Values[i];
        return v !== null ? { time: toTime(b.time), value: v } : null;
      }).filter(Boolean) as LineData<Time>[]);
    }

    if (activeIndicators.has("SMA50")) {
      const s = main.addSeries(LineSeries, {
        color: C.sma50, lineWidth: 1, priceLineVisible: false, lastValueVisible: true,
        crosshairMarkerVisible: false,
      });
      s.setData(bars.map((b, i): LineData<Time> | null => {
        const v = sma50Values[i];
        return v !== null ? { time: toTime(b.time), value: v } : null;
      }).filter(Boolean) as LineData<Time>[]);
    }

    if (activeIndicators.has("EMA200")) {
      const s = main.addSeries(LineSeries, {
        color: C.ema200, lineWidth: 1, lineStyle: LineStyle.Dashed, priceLineVisible: false,
        lastValueVisible: true, crosshairMarkerVisible: false,
      });
      s.setData(bars.map((b, i): LineData<Time> | null => {
        const v = ema200Values[i];
        return v !== null ? { time: toTime(b.time), value: v } : null;
      }).filter(Boolean) as LineData<Time>[]);
    }

    if (activeIndicators.has("BB")) {
      const colors = [C.bbandsUpper, C.bbandsMid, C.bbandsLower] as const;
      const arrs = [bbValues.upper, bbValues.middle, bbValues.lower] as const;
      for (let bi = 0; bi < 3; bi++) {
        const s = main.addSeries(LineSeries, {
          color: colors[bi], lineWidth: 1, lineStyle: bi === 1 ? LineStyle.Dashed : LineStyle.Solid,
          priceLineVisible: false, lastValueVisible: false, crosshairMarkerVisible: false,
        });
        s.setData(bars.map((b, i): LineData<Time> | null => {
          const v = arrs[bi][i];
          return v !== null ? { time: toTime(b.time), value: v } : null;
        }).filter(Boolean) as LineData<Time>[]);
      }
    }

    // ----- TRADE MARKERS -----
    if (showTrades && trades.length > 0) {
      const dateSet = new Set(bars.map((b) => b.time));
      const markers: SeriesMarker<Time>[] = [];
      for (const t of trades) {
        if (dateSet.has(t.entryDate)) {
          markers.push({
            time: toTime(t.entryDate), position: "belowBar", shape: "arrowUp",
            color: C.tradeBuy, text: "B", size: 1,
          });
        }
        if (dateSet.has(t.exitDate)) {
          markers.push({
            time: toTime(t.exitDate), position: "aboveBar", shape: "arrowDown",
            color: t.netPnl >= 0 ? C.tradeSell : "#D94E5C", text: "S", size: 1,
          });
        }
      }
      markers.sort((a, b) => String(a.time) < String(b.time) ? -1 : 1);
      if (markers.length) {
        const plugin = createSeriesMarkers(mainSeries, markers);
        disposers.push(() => safe(() => plugin.detach()));
      }
    }

    // ----- CROSSHAIR READOUT -----
    const dateIndex = new Map(bars.map((b, i) => [b.time, i]));
    const lastBar = bars[bars.length - 1];

    paintReadout(lastBar);
    setLivePrice(lastBar ? lastBar.close : null);

    const onMove = (param: MouseEventParams<Time>) => {
      if (!param.time) { paintReadout(lastBar); return; }
      const key = typeof param.time === "string" ? param.time
        : typeof param.time === "object" && "year" in param.time
          ? `${param.time.year}-${String(param.time.month).padStart(2, "0")}-${String(param.time.day).padStart(2, "0")}`
          : null;
      if (!key) { paintReadout(lastBar); return; }
      const idx = dateIndex.get(key);
      paintReadout(idx !== undefined ? bars[idx] : lastBar);
    };

    main.subscribeCrosshairMove(onMove);

    // Price formatter
    main.applyOptions({
      localization: {
        priceFormatter: (v: number) => fmt(v, symbol),
        timeFormatter: (ts: number) => {
          const d = new Date(ts * 1000);
          return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "2-digit", timeZone: "UTC" });
        },
      },
    });

    // Fit
    safe(() => main.timeScale().fitContent());

    // ----- VOLUME CHART -----
    if (hasVol && volPaneRef.current) {
      const vc = createChart(volPaneRef.current, {
        ...baseOpts(volPaneRef.current, volHeight, !hasRSI && !hasMACD),
        rightPriceScale: {
          borderColor: C.rule, minimumWidth: 72,
          scaleMargins: { top: 0.1, bottom: 0 },
        },
        layout: {
          background: { type: ColorType.Solid, color: C.bg },
          textColor: C.text,
          fontFamily: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
          fontSize: 10,
          attributionLogo: false,
        },
      });
      volumeChartRef.current = vc;

      const vs = vc.addSeries(HistogramSeries, {
        priceLineVisible: false, lastValueVisible: false,
        priceFormat: { type: "volume" },
        autoscaleInfoProvider: () => ({ priceRange: { minValue: 0, maxValue: bars.reduce((m, b) => Math.max(m, b.volume), 0) * 1.1 } }),
      });
      vs.setData(bars.map((b): HistogramData<Time> => ({
        time: toTime(b.time),
        value: b.volume,
        color: b.close >= b.open ? C.volumeUp : C.volumeDown,
      })));
      volumeSeriesRef.current = vs;

      // Sync timescales
      const syncVol = (range: any) => {
        if (range) safe(() => vc.timeScale().setVisibleLogicalRange(range));
      };
      main.timeScale().subscribeVisibleLogicalRangeChange(syncVol);
      disposers.push(() => safe(() => main.timeScale().unsubscribeVisibleLogicalRangeChange(syncVol)));

      vc.applyOptions({ localization: { priceFormatter: (v: number) => fmtVol(v) } });
      safe(() => vc.timeScale().fitContent());
    }

    // ----- RSI CHART -----
    if (hasRSI && rsiPaneRef.current) {
      const rc = createChart(rsiPaneRef.current, {
        ...baseOpts(rsiPaneRef.current, rsiHeight, !hasMACD),
        rightPriceScale: {
          borderColor: C.rule, minimumWidth: 72,
          scaleMargins: { top: 0.1, bottom: 0.1 },
          mode: PriceScaleMode.Normal,
        },
      });
      rsiChartRef.current = rc;

      // RSI line
      const rsiS = rc.addSeries(LineSeries, {
        color: C.rsiLine, lineWidth: 1, priceLineVisible: false, lastValueVisible: true, crosshairMarkerVisible: false,
      });
      rsiS.setData(bars.map((b, i): LineData<Time> | null => {
        const v = rsiValues[i];
        return v !== null ? { time: toTime(b.time), value: v } : null;
      }).filter(Boolean) as LineData<Time>[]);
      (rsiS as any).applyOptions({ priceScale: { minimum: 0, maximum: 100 } });

      // Overbought / oversold zones as histogram
      const rsiOb = rc.addSeries(HistogramSeries, {
        color: C.rsiOb, priceLineVisible: false, lastValueVisible: false,
        autoscaleInfoProvider: () => ({ priceRange: { minValue: 0, maxValue: 100 } }),
      });
      rsiOb.setData(bars.map((b, i): HistogramData<Time> | null => {
        const v = rsiValues[i];
        return v !== null && v > 70 ? { time: toTime(b.time), value: v, color: C.rsiOb } : null;
      }).filter(Boolean) as HistogramData<Time>[]);

      const syncRsi = (range: any) => {
        if (range) safe(() => rc.timeScale().setVisibleLogicalRange(range));
      };
      main.timeScale().subscribeVisibleLogicalRangeChange(syncRsi);
      disposers.push(() => safe(() => main.timeScale().unsubscribeVisibleLogicalRangeChange(syncRsi)));
      safe(() => rc.timeScale().fitContent());
    }

    // ----- MACD CHART -----
    if (hasMACD && macdPaneRef.current) {
      const mc = createChart(macdPaneRef.current, {
        ...baseOpts(macdPaneRef.current, macdHeight, true),
        rightPriceScale: {
          borderColor: C.rule, minimumWidth: 72,
          scaleMargins: { top: 0.1, bottom: 0.1 },
        },
      });
      macdChartRef.current = mc;

      // Histogram
      const histS = mc.addSeries(HistogramSeries, {
        priceLineVisible: false, lastValueVisible: false,
      });
      histS.setData(bars.map((b, i): HistogramData<Time> | null => {
        const v = macdValues.histogram[i];
        return v !== null ? { time: toTime(b.time), value: v, color: v >= 0 ? C.macdHistPos : C.macdHistNeg } : null;
      }).filter(Boolean) as HistogramData<Time>[]);

      // MACD line
      const macdS = mc.addSeries(LineSeries, {
        color: C.macdLine, lineWidth: 1, priceLineVisible: false, lastValueVisible: true, crosshairMarkerVisible: false,
      });
      macdS.setData(bars.map((b, i): LineData<Time> | null => {
        const v = macdValues.macd[i];
        return v !== null ? { time: toTime(b.time), value: v } : null;
      }).filter(Boolean) as LineData<Time>[]);

      // Signal line
      const sigS = mc.addSeries(LineSeries, {
        color: C.macdSignal, lineWidth: 1, lineStyle: LineStyle.Dashed, priceLineVisible: false,
        lastValueVisible: true, crosshairMarkerVisible: false,
      });
      sigS.setData(bars.map((b, i): LineData<Time> | null => {
        const v = macdValues.signal[i];
        return v !== null ? { time: toTime(b.time), value: v } : null;
      }).filter(Boolean) as LineData<Time>[]);

      const syncMacd = (range: any) => {
        if (range) safe(() => mc.timeScale().setVisibleLogicalRange(range));
      };
      main.timeScale().subscribeVisibleLogicalRangeChange(syncMacd);
      disposers.push(() => safe(() => main.timeScale().unsubscribeVisibleLogicalRangeChange(syncMacd)));
      safe(() => mc.timeScale().fitContent());
    }

    // ----- RESIZE OBSERVER -----
    const obs = new ResizeObserver(() => {
      if (mainPaneRef.current) safe(() => main.applyOptions({ width: mainPaneRef.current!.clientWidth }));
      if (volumeChartRef.current && volPaneRef.current) safe(() => volumeChartRef.current!.applyOptions({ width: volPaneRef.current!.clientWidth }));
      if (rsiChartRef.current && rsiPaneRef.current) safe(() => rsiChartRef.current!.applyOptions({ width: rsiPaneRef.current!.clientWidth }));
      if (macdChartRef.current && macdPaneRef.current) safe(() => macdChartRef.current!.applyOptions({ width: macdPaneRef.current!.clientWidth }));
    });
    if (containerRef.current) obs.observe(containerRef.current);

    return () => {
      obs.disconnect();
      disposers.forEach((fn) => fn());
      safe(() => main.unsubscribeCrosshairMove(onMove));
      safe(() => main.remove());
      safe(() => volumeChartRef.current?.remove());
      safe(() => rsiChartRef.current?.remove());
      safe(() => macdChartRef.current?.remove());
      chartRef.current = null;
      volumeChartRef.current = null;
      rsiChartRef.current = null;
      macdChartRef.current = null;
      mainSeriesRef.current = null;
      volumeSeriesRef.current = null;
    };
  }, [bars, mode, activeIndicators, isDark, symbol, showTrades, trades,
      sma20Values, sma50Values, ema200Values, bbValues, rsiValues, macdValues,
      mainH, volHeight, rsiHeight, macdHeight, hasVol, hasRSI, hasMACD, paintReadout]);

  // ---------------------------------------------------------------------------
  // Current price info
  // ---------------------------------------------------------------------------
  const lastBar = bars[bars.length - 1];
  const prevBar = bars[bars.length - 2];
  const changeAmt = lastBar && prevBar ? lastBar.close - prevBar.close : 0;
  const changePct = prevBar ? (changeAmt / prevBar.close) * 100 : 0;
  const isUp = changeAmt >= 0;

  const assetNames: Record<string, string> = {
    BTC: "Bitcoin", SOL: "Solana", GOLD: "Gold", NVDA: "NVIDIA",
    "1INCH": "1inch Network", ETH: "Ethereum",
  };
  const pairNames: Record<string, string> = {
    BTC: "BTC/USD", SOL: "SOL/USD", GOLD: "GOLD/USD", NVDA: "NVDA",
    "1INCH": "1INCH/USD", ETH: "ETH/USD",
  };

  const CHART_TYPE_ICONS = {
    CANDLE: <CandlestickChart className="w-3.5 h-3.5" />,
    BAR: <BarChart2 className="w-3.5 h-3.5" />,
    LINE: <TrendingUp className="w-3.5 h-3.5" />,
    AREA: <Activity className="w-3.5 h-3.5" />,
    BASELINE: <Layers className="w-3.5 h-3.5" />,
  };

  const INDICATOR_GROUPS = [
    { label: "TREND", items: [
      { key: "SMA20" as ActiveIndicator, label: "SMA 20", color: "#8877FF" },
      { key: "SMA50" as ActiveIndicator, label: "SMA 50", color: "#E4B64D" },
      { key: "EMA200" as ActiveIndicator, label: "EMA 200", color: "#FF6572" },
      { key: "BB" as ActiveIndicator, label: "Bollinger", color: "#8877FF" },
    ]},
    { label: "SUBCHARTS", items: [
      { key: "VOLUME" as ActiveIndicator, label: "Volume", color: "#626A66" },
      { key: "RSI" as ActiveIndicator, label: "RSI 14", color: "#8877FF" },
      { key: "MACD" as ActiveIndicator, label: "MACD 12/26", color: "#E4B64D" },
    ]},
  ];

  return (
    <div
      ref={containerRef}
      className={`flex flex-col rounded-2xl overflow-hidden border border-[var(--border)] ${isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""}`}
      style={{ background: "var(--bg-surface)" }}
    >
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 pt-4 pb-3 border-b border-[var(--border)]">
        {/* Left: symbol + price */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-widest">
              {assetNames[symbol] ?? symbol}
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-mono">{pairNames[symbol]}</span>
          </div>
          {/* Price readout — updated via DOM for performance */}
          <div ref={readoutRef} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mt-0.5 font-mono" />
        </div>

        {/* Right: toolbar */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Chart type */}
          <div ref={chartTypeMenuRef} className="relative">
            <button
              onClick={() => { setChartTypeOpen((prev) => !prev); setIndicatorsOpen(false); }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 clay-button rounded-xl text-xs font-mono text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              {CHART_TYPE_ICONS[mode]}
              <span>{mode}</span>
              <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
            </button>
            {chartTypeOpen && (
              <div className="absolute left-0 top-full mt-1 w-40 py-1 rounded-xl clay-card-elevated border border-[var(--border-strong)] z-50 text-xs font-mono shadow-lg">
                {(["CANDLE", "BAR", "LINE", "AREA", "BASELINE"] as ChartMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => { setMode(m); setChartTypeOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[var(--bg-hover)] transition-colors ${mode === m ? "text-[var(--accent)] font-bold" : "text-[var(--text-primary)]"}`}
                  >
                    {CHART_TYPE_ICONS[m]}
                    {m === mode && <Check className="w-3 h-3 ml-auto" />}
                    <span>{m === "CANDLE" ? "Candlestick" : m === "BAR" ? "OHLC Bars" : m === "LINE" ? "Line" : m === "AREA" ? "Area" : "Baseline"}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Timeframe */}
          <div className="flex items-center p-0.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[10px] font-mono">
            {(["1M", "3M", "6M", "1Y", "ALL"] as Timeframe[]).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  timeframe === tf
                    ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          {/* Indicators dropdown */}
          <div ref={indicatorsMenuRef} className="relative">
            <button
              onClick={() => { setIndicatorsOpen((prev) => !prev); setChartTypeOpen(false); }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 clay-button rounded-xl text-xs font-mono text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <span>Indicators</span>
              <span className="text-[var(--accent)] font-bold">{activeIndicators.size > 0 ? `+${activeIndicators.size}` : ""}</span>
              <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
            </button>
            {indicatorsOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 py-2 rounded-xl clay-card-elevated border border-[var(--border-strong)] z-50 text-xs font-mono shadow-lg">
                {INDICATOR_GROUPS.map((group) => (
                  <div key={group.label}>
                    <div className="px-3 py-1 text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">{group.label}</div>
                    {group.items.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => toggleIndicator(item.key)}
                        className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-primary)]"
                      >
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                        <span>{item.label}</span>
                        {activeIndicators.has(item.key) && <Check className="w-3 h-3 ml-auto text-[var(--accent)]" />}
                      </button>
                    ))}
                  </div>
                ))}

                <div className="p-2 border-t border-[var(--border)]">
                  <button
                    onClick={() => { setIndicatorModalOpen(true); setIndicatorsOpen(false); }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg clay-button text-[10px] uppercase font-bold text-[var(--accent)] hover:bg-[var(--bg-hover)] transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sliders className="w-3 h-3" />
                      13-Indicator Engine
                    </span>
                    <span>Config &rarr;</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Fullscreen */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 clay-button rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors"
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* ── LIVE PLAYING & MOVING GRAPH CONTROLLER BAR ──────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 border-b border-[var(--border)] bg-[var(--bg-recessed)]/50 text-xs font-mono">
        <div className="flex items-center gap-2">
          {/* Play / Pause Toggle */}
          <button
            onClick={togglePlay}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
              isPlaying
                ? "bg-[#00E599] text-black shadow-[0_0_14px_rgba(0,229,153,0.5)] scale-[1.02]"
                : "clay-button text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)]"
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlaying ? "PAUSE" : "PLAY LIVE"}</span>
          </button>

          {/* Rewind */}
          <button
            onClick={handleRewind}
            className="p-1.5 clay-button rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors"
            title="Rewind to early history"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Step Forward */}
          <button
            onClick={handleStep}
            disabled={isPlaying}
            className="p-1.5 clay-button rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] disabled:opacity-40 transition-colors"
            title="Step 1 bar forward"
          >
            <FastForward className="w-3.5 h-3.5" />
          </button>

          {/* Live Continuous Moving Mode */}
          <button
            onClick={() => setIsLiveMode((prev) => !prev)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[10px] font-bold tracking-wider transition-all ${
              isLiveMode
                ? "bg-[#00E599]/15 text-[#00E599] border border-[#00E599]/40 shadow-[0_0_10px_rgba(0,229,153,0.2)]"
                : "clay-button text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)]"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isLiveMode ? "bg-[#00E599] animate-ping" : "bg-zinc-500"}`} />
            <span>{isLiveMode ? "LIVE MOVING ON" : "LIVE MOVING"}</span>
          </button>
        </div>

        {/* Timeline Scrubber Slider */}
        <div className="flex-1 max-w-sm sm:max-w-md flex items-center gap-2">
          <span className="text-[10px] text-[var(--text-muted)] tabular-nums whitespace-nowrap min-w-[70px]">
            {bars[Math.min(playIndex - 1, bars.length - 1)]?.time ?? ""}
          </span>
          <input
            type="range"
            min={20}
            max={bars.length}
            value={playIndex}
            onChange={(e) => handleScrub(Number(e.target.value))}
            className="w-full h-1.5 bg-[var(--bg-elevated)] rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
          />
          <span className="text-[10px] text-[var(--text-secondary)] tabular-nums whitespace-nowrap">
            {playIndex}/{bars.length}
          </span>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-[var(--bg-recessed)] border border-[var(--border)] text-[10px]">
          {[0.5, 1, 2, 5, 10].map((spd) => (
            <button
              key={spd}
              onClick={() => setPlaySpeed(spd)}
              className={`px-2 py-0.5 rounded-lg transition-all ${
                playSpeed === spd
                  ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {spd}x
            </button>
          ))}
        </div>
      </div>

      {/* ── INDICATOR LEGEND ───────────────────────────────────── */}
      {(activeIndicators.has("SMA20") || activeIndicators.has("SMA50") || activeIndicators.has("EMA200") || activeIndicators.has("BB")) && (
        <div className="flex flex-wrap items-center gap-3 px-4 py-1.5 text-[10px] font-mono border-b border-[var(--border)] bg-[var(--bg-recessed)]/30">
          {activeIndicators.has("SMA20") && (
            <span className="flex items-center gap-1">
              <span className="w-6 h-[2px]" style={{ background: "#8877FF", display: "inline-block" }} />
              <span className="text-[var(--text-muted)]">SMA 20</span>
              <span className="text-[var(--text-secondary)]">{sma20Values[sma20Values.length - 1]?.toFixed(0) ?? "—"}</span>
            </span>
          )}
          {activeIndicators.has("SMA50") && (
            <span className="flex items-center gap-1">
              <span className="w-6 h-[2px]" style={{ background: "#E4B64D", display: "inline-block" }} />
              <span className="text-[var(--text-muted)]">SMA 50</span>
              <span className="text-[var(--text-secondary)]">{sma50Values[sma50Values.length - 1]?.toFixed(0) ?? "—"}</span>
            </span>
          )}
          {activeIndicators.has("EMA200") && (
            <span className="flex items-center gap-1">
              <span className="w-6 h-[2px]" style={{ background: "#FF6572", display: "inline-block", borderTop: "2px dashed #FF6572" }} />
              <span className="text-[var(--text-muted)]">EMA 200</span>
              <span className="text-[var(--text-secondary)]">{ema200Values[ema200Values.length - 1]?.toFixed(0) ?? "—"}</span>
            </span>
          )}
          {activeIndicators.has("BB") && (
            <span className="flex items-center gap-1">
              <span className="w-6 h-[2px]" style={{ background: "#8877FF", display: "inline-block" }} />
              <span className="text-[var(--text-muted)]">BB 20,2</span>
            </span>
          )}
          <span className="ml-auto text-[var(--text-muted)]">{bars.length} sessions</span>
        </div>
      )}

      {/* ── MAIN PRICE CHART ───────────────────────────────────── */}
      <div ref={mainPaneRef} style={{ height: mainH, minHeight: mainH }} />

      {/* ── VOLUME SUBCHART ────────────────────────────────────── */}
      {hasVol && (
        <div className="border-t border-[var(--border)]">
          <div className="px-4 py-0.5 text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-widest">VOLUME</div>
          <div ref={volPaneRef} style={{ height: volHeight }} />
        </div>
      )}

      {/* ── RSI SUBCHART ───────────────────────────────────────── */}
      {hasRSI && (
        <div className="border-t border-[var(--border)]">
          <div className="px-4 py-0.5 text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-widest">RSI 14</div>
          <div ref={rsiPaneRef} style={{ height: rsiHeight }} />
        </div>
      )}

      {/* ── MACD SUBCHART ──────────────────────────────────────── */}
      {hasMACD && (
        <div className="border-t border-[var(--border)]">
          <div className="px-4 py-0.5 text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-widest">MACD 12/26/9</div>
          <div ref={macdPaneRef} style={{ height: macdHeight }} />
        </div>
      )}

      {/* ── FOOTER STATUS ──────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--border)] text-[10px] font-mono text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${isPlaying || isLiveMode ? "bg-[var(--positive)] animate-ping" : "bg-zinc-500"}`} />
          <span>{isPlaying ? `REPLAYING (${playSpeed}x) · BAR ${playIndex}/${bars.length}` : isLiveMode ? "LIVE MOVING STREAM" : "MARKET PAUSED"}</span>
          <span className="text-[var(--text-secondary)]">· {fmtDate(bars[Math.min(playIndex - 1, bars.length - 1)]?.time ?? lastBar?.time ?? "")}</span>
        </span>
        <span className="flex items-center gap-2">
          {livePrice !== null && (
            <span className={`px-2 py-0.5 rounded font-bold text-xs transition-colors ${tickFlash === "up" ? "bg-[var(--positive)]/20 text-[var(--positive)]" : "bg-[var(--negative)]/20 text-[var(--negative)]"}`}>
              ${symbol === "1INCH" ? livePrice.toFixed(4) : fmtFull(livePrice)}
            </span>
          )}
          <span>
            Vol {lastBar ? fmtVol(lastBar.volume) : "—"}
            {" · "}
            {bars.length} bars
            {" · "}
            {timeframe}
          </span>
        </span>
      </div>

      {/* 13-Indicator Engine Config Modal */}
      <IndicatorSettingsModal
        isOpen={indicatorModalOpen}
        onClose={() => setIndicatorModalOpen(false)}
        activeConfigs={indicatorConfigs}
        onChangeConfigs={setIndicatorConfigs}
      />
    </div>
  );
}
