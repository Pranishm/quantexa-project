"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import { createChart, ColorType, IChartApi, ISeriesApi, LineSeries } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { api, API_BASE } from "@/lib/api";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

function LineChart({ data }: { data: { time: string; value: number }[] }) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Line"> | null>(null);

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

    const series = chart.addSeries(LineSeries, {
      color: "var(--color-signal)",
      lineWidth: 2,
    });
    series.setData(data);

    chartRef.current = chart;
    seriesRef.current = series;

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
  }, [data]);

  return <div ref={chartContainerRef} />;
}

export function PortfolioView() {
  const [method, setMethod] = useState("Equal Weight");
  const { data, isLoading, error } = useQuery({
    queryKey: ["portfolio", method],
    queryFn: async () => {
      const res = await fetch(`${API_BASE}/api/analytics/portfolio?method=${encodeURIComponent(method)}`);
      if (!res.ok) throw new Error("Failed to load portfolio");
      return res.json();
    },
  });

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={itemVariants} className="flex gap-4">
        {["Equal Weight", "Inverse Volatility", "Maximum Sharpe"].map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded border ${
              method === m
                ? "bg-[var(--color-signal)] text-black border-[var(--color-signal)]"
                : "bg-transparent text-[var(--color-ink)] border-[var(--color-line)] hover:bg-[var(--color-panel)]"
            }`}
          >
            {m}
          </button>
        ))}
      </motion.div>

      {isLoading && <div className="text-[var(--color-ink-dim)]">Calculating optimal portfolio...</div>}
      {error && <div className="text-red-500">Failed to load portfolio optimization.</div>}
      
      {data && (
        <>
          <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
            <div className="glass-panel p-4">
              <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-faint)]">Expected Return</div>
              <div className="mt-1 font-display text-2xl font-bold">{(data.expected_return * 100).toFixed(2)}%</div>
            </div>
            <div className="glass-panel p-4">
              <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-faint)]">Volatility</div>
              <div className="mt-1 font-display text-2xl font-bold">{(data.volatility * 100).toFixed(2)}%</div>
            </div>
            <div className="glass-panel p-4">
              <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-faint)]">Sharpe Ratio</div>
              <div className="mt-1 font-display text-2xl font-bold">{data.sharpe.toFixed(2)}</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-3">
            <div className="col-span-1 glass-panel p-4">
              <h3 className="text-xs uppercase tracking-wider text-[var(--color-ink-dim)] mb-4">Allocation Weights</h3>
              <div className="space-y-3">
                {Object.entries(data.weights).map(([asset, weight]) => (
                  <div key={asset} className="flex justify-between items-center text-sm">
                    <span className="font-mono">{asset}</span>
                    <span>{((weight as number) * 100).toFixed(2)}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-span-2 glass-panel p-4">
              <h3 className="text-xs uppercase tracking-wider text-[var(--color-ink-dim)] mb-4">Historical Portfolio Growth</h3>
              <LineChart 
                data={data.historical_growth.dates.map((date: string, i: number) => ({
                  time: date,
                  value: data.historical_growth.returns[i] * 100,
                }))}
              />
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
