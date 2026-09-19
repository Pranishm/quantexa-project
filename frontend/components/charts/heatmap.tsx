"use client";

import { useMemo } from "react";

import { INK, SURFACE, divergingColor, divergingRamp, readableInk } from "@/lib/colors";

import { EChart } from "./echart";

export interface HeatmapProps {
  xLabels: string[];
  yLabels: string[];
  /** values[y][x]. Null cells are left empty (invalid combinations). */
  values: (number | null)[][];
  /** The scale is symmetric about zero: +/- limit reach the full pole colours. */
  limit: number;
  format: (v: number) => string;
  ariaLabel: string;
  xName?: string;
  yName?: string;
  height?: number;
  /** Extra lines for the tooltip of one cell. */
  detail?: (x: number, y: number) => string | undefined;
  /** Outline this cell (e.g. the best parameter set). */
  highlight?: { x: number; y: number } | null;
  /** Print the value inside each cell. Turn off for dense grids. */
  cellText?: boolean;
}

/**
 * Diverging heatmap: blue positive, red negative, neutral gray at zero. The same
 * ramp is used for correlations and for Sharpe ratios so "blue is good" means
 * one thing everywhere.
 */
export function Heatmap({
  xLabels,
  yLabels,
  values,
  limit,
  format,
  ariaLabel,
  xName,
  yName,
  height = 320,
  detail,
  highlight = null,
  cellText = true,
}: HeatmapProps) {
  const option = useMemo(() => {
    const data = values.flatMap((row, y) =>
      row.flatMap((v, x) => {
        if (v === null || !Number.isFinite(v)) return [];
        const isBest = highlight?.x === x && highlight?.y === y;
        return [
          {
            value: [x, y, v],
            label: { color: readableInk(divergingColor(v, limit)) },
            itemStyle: isBest ? { borderColor: INK.primary, borderWidth: 2 } : undefined,
          },
        ];
      }),
    );

    return {
      animation: false,
      grid: { left: yName ? 76 : 64, right: 16, top: 12, bottom: xName ? 82 : 66 },
      tooltip: {
        position: "top",
        formatter: (p: { value: [number, number, number] }) => {
          const [x, y, v] = p.value;
          const extra = detail?.(x, y);
          return `<b>${yLabels[y]}</b> × <b>${xLabels[x]}</b><br/>${format(v)}${extra ? `<br/><span style="color:${INK.muted}">${extra}</span>` : ""}`;
        },
      },
      xAxis: {
        type: "category",
        data: xLabels,
        name: xName,
        nameLocation: "middle",
        nameGap: 30,
        nameTextStyle: { color: INK.muted },
        splitArea: { show: false },
        axisLabel: { color: INK.secondary },
        axisLine: { show: false },
      },
      yAxis: {
        type: "category",
        data: yLabels,
        inverse: true,
        name: yName,
        nameLocation: "middle",
        nameGap: 52,
        nameTextStyle: { color: INK.muted },
        splitArea: { show: false },
        axisLabel: { color: INK.secondary },
        axisLine: { show: false },
      },
      visualMap: {
        type: "continuous",
        min: -limit,
        max: limit,
        orient: "horizontal",
        left: "center",
        bottom: 0,
        itemWidth: 12,
        itemHeight: 160,
        calculable: false,
        inRange: { color: divergingRamp(4) },
        text: [format(limit), format(-limit)],
        textStyle: { color: INK.muted },
      },
      series: [
        {
          type: "heatmap",
          data,
          label: {
            show: cellText,
            formatter: (p: { value: [number, number, number] }) => format(p.value[2]),
            fontSize: 12,
          },
          // A 2px surface gap between cells, never a border in a competing colour.
          itemStyle: { borderColor: SURFACE, borderWidth: 2 },
          emphasis: { itemStyle: { borderColor: INK.primary, borderWidth: 1 } },
        },
      ],
    };
  }, [xLabels, yLabels, values, limit, format, xName, yName, detail, highlight, cellText]);

  return <EChart option={option} height={height} ariaLabel={ariaLabel} />;
}
