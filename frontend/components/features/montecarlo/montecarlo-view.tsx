"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import { createChart, ColorType, IChartApi, ISeriesApi, LineSeries } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { API_BASE } from "@/lib/api";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

function BandChart({ dates, median, upper, lower }: { dates: string[], median: number[], upper: number[], lower: number[] }) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;
    const chart = createChart(chartContainerRef.current, {
      layout: { background: { type: ColorType.Solid, color: "transparent" }, textColor: "#8d9ab0" },
      grid: { vertLines: { color: "rgba(255,255,255,0.05)" }, horzLines: { color: "rgba(255,255,255,0.05)" } },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      timeScale: { timeVisible: true, borderColor: "rgba(255,255,255,0.1)" },
      rightPriceScale: { borderColor: "rgba(255,255,255,0.1)" },
    });

    const upperSeries = chart.addSeries(LineSeries, { color: "rgba(255,255,255,0.1)", lineWidth: 1 });
    const lowerSeries = chart.addSeries(LineSeries, { color: "rgba(255,255,255,0.1)", lineWidth: 1 });
    const medianSeries = chart.addSeries(LineSeries, { color: "var(--color-signal)", lineWidth: 2 });

    upperSeries.setData(dates.map((time, i) => ({ time, value: upper[i] })));
    lowerSeries.setData(dates.map((time, i) => ({ time, value: lower[i] })));
    medianSeries.setData(dates.map((time, i) => ({ time, value: median[i] })));

    chartRef.current = chart;

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [dates, median, upper, lower]);

  return <div ref={chartContainerRef} />;
}

export function MonteCarloView() {
  const [symbol, setSymbol] = useState("BTC-USD");
  const { data, isLoading, error } = useQuery({
    queryKey: ["montecarlo", symbol],
    queryFn: async () => {
      const res = await fetch(`${API_BASE}/api/analytics/montecarlo?symbol=${encodeURIComponent(symbol)}`);
      if (!res.ok) throw new Error("Failed to load monte carlo simulation");
      return res.json();
    },
  });

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={itemVariants} className="flex gap-4">
        {["BTC-USD", "GC=F", "NVDA"].map((s) => (
          <button
            key={s}
            onClick={() => setSymbol(s)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded border ${
              symbol === s
                ? "bg-[var(--color-signal)] text-black border-[var(--color-signal)]"
                : "bg-transparent text-[var(--color-ink)] border-[var(--color-line)] hover:bg-[var(--color-panel)]"
            }`}
          >
            {s}
          </button>
        ))}
      </motion.div>

      {isLoading && <div className="text-[var(--color-ink-dim)]">Simulating 1,000 block-bootstrap scenarios...</div>}
      {error && <div className="text-red-500">Failed to load simulations.</div>}
      
      {data && data.available && (
        <>
          <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-4">
            <div className="glass-panel p-4">
              <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-faint)]">5th Percentile</div>
              <div className="mt-1 font-display text-2xl font-bold">${data.final_equity.p5.toFixed(0)}</div>
            </div>
            <div className="glass-panel p-4">
              <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-faint)]">Median</div>
              <div className="mt-1 font-display text-2xl font-bold">${data.final_equity.median.toFixed(0)}</div>
            </div>
            <div className="glass-panel p-4">
              <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-faint)]">95th Percentile</div>
              <div className="mt-1 font-display text-2xl font-bold">${data.final_equity.p95.toFixed(0)}</div>
            </div>
            <div className="rounded border border-[var(--color-line)] bg-[var(--color-panel)] p-4">
              <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-faint)]">Risk of Loss</div>
              <div className="mt-1 font-display text-2xl font-bold">{(data.final_equity.probability_of_loss * 100).toFixed(1)}%</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-4">
            <h3 className="text-xs uppercase tracking-wider text-[var(--color-ink-dim)] mb-4">Monte Carlo Bounds</h3>
            <BandChart dates={data.dates} median={data.median} upper={data.upper} lower={data.lower} />
            <div className="mt-2 text-[10px] text-[var(--color-ink-faint)]">{data.note}</div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
