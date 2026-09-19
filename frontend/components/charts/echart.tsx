"use client";

import { BarChart, HeatmapChart, LineChart } from "echarts/charts";
import {
  AriaComponent,
  GridComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import type { ECharts, EChartsCoreOption } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { useCallback, useEffect, useState } from "react";

import { ASSET_COLOR, INK } from "@/lib/colors";

// Register only what the dashboard draws, so the bundle stays small.
echarts.use([
  BarChart,
  LineChart,
  HeatmapChart,
  GridComponent,
  TooltipComponent,
  VisualMapComponent,
  MarkLineComponent,
  MarkPointComponent,
  MarkAreaComponent,
  AriaComponent,
  CanvasRenderer,
]);

// Charts draw to canvas, so the mono stack is named literally.
const FONT = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace';

echarts.registerTheme("quantexa", {
  color: [ASSET_COLOR["GC=F"], ASSET_COLOR["BTC-USD"], ASSET_COLOR.NVDA],
  backgroundColor: "transparent",
  textStyle: { color: INK.muted, fontFamily: FONT },
  categoryAxis: {
    axisLine: { lineStyle: { color: INK.rule } },
    axisTick: { show: false },
    axisLabel: { color: INK.muted },
    splitLine: { show: false },
  },
  valueAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: INK.muted },
    splitLine: { lineStyle: { color: INK.hairline, type: "solid" } },
    nameTextStyle: { color: INK.muted },
  },
  tooltip: {
    backgroundColor: "#141414",
    borderColor: INK.rule,
    borderWidth: 1,
    padding: [8, 10],
    textStyle: { color: INK.primary, fontSize: 12, fontFamily: FONT },
    extraCssText: "border-radius:0;box-shadow:none;",
  },
  visualMap: { textStyle: { color: INK.muted } },
});

export function EChart({
  option,
  height = 280,
  ariaLabel,
  onClick,
}: {
  /** Memoise this in the parent: a new object rebuilds the chart. */
  option: EChartsCoreOption;
  height?: number;
  ariaLabel: string;
  onClick?: (params: { name?: string; value?: unknown; data?: unknown; dataIndex?: number }) => void;
}) {
  const [chart, setChart] = useState<ECharts | null>(null);

  // A ref callback with a cleanup builds and disposes the instance without an effect that sets state.
  const ref = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;
    const instance = echarts.init(el, "quantexa", { renderer: "canvas" });
    setChart(instance);
    const observer = new ResizeObserver(() => instance.resize());
    observer.observe(el);
    return () => {
      observer.disconnect();
      instance.dispose();
    };
  }, []);

  useEffect(() => {
    // Under StrictMode the instance can be disposed before this effect runs against it.
    if (chart && !chart.isDisposed()) chart.setOption(option, { notMerge: true });
  }, [chart, option]);

  useEffect(() => {
    if (!chart || !onClick) return;
    chart.on("click", onClick);
    return () => {
      chart.off("click", onClick);
    };
  }, [chart, onClick]);

  return <div ref={ref} role="img" aria-label={ariaLabel} style={{ height }} className="w-full" />;
}
