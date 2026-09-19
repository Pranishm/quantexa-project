"use client";

import dynamic from "next/dynamic";

import { ChartSkeleton } from "@/components/states";

/**
 * Chart libraries touch the DOM and are large, so they load in the browser only
 * and land in their own chunks rather than in every page's bundle.
 */
export const TimeSeriesChart = dynamic(() => import("./time-series-chart").then((m) => m.TimeSeriesChart), {
  ssr: false,
  loading: () => <ChartSkeleton height={320} />,
});

export const PriceChart = dynamic(() => import("./price-chart").then((m) => m.PriceChart), {
  ssr: false,
  loading: () => <ChartSkeleton height={420} />,
});

export const EChart = dynamic(() => import("./echart").then((m) => m.EChart), {
  ssr: false,
  loading: () => <ChartSkeleton height={280} />,
});

export const Heatmap = dynamic(() => import("./heatmap").then((m) => m.Heatmap), {
  ssr: false,
  loading: () => <ChartSkeleton height={320} />,
});
