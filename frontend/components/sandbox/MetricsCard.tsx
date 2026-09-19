"use client";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
}

function Sparkline({ data, width = 80, height = 28, color = "var(--neo-mint)" }: SparklineProps) {
  if (!data.length) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  // Gradient area fill
  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="shrink-0">
      <defs>
        <linearGradient id={`spark-grad-${color.replace(/[^a-z0-9]/gi, "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <polygon
        points={areaPoints}
        fill={`url(#spark-grad-${color.replace(/[^a-z0-9]/gi, "")})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface MetricsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  sparklineData?: number[];
  sparklineColor?: string;
  accentColor?: string;
  className?: string;
}

export function MetricsCard({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  sparklineData,
  sparklineColor,
  accentColor,
  className = "",
}: MetricsCardProps) {
  const trendColor =
    trend === "up"
      ? "var(--positive)"
      : trend === "down"
        ? "var(--negative)"
        : "var(--text-muted)";

  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div
      className={`clay-card rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between gap-3 min-h-[120px] shadow-sm hover:scale-[1.01] transition-all group ${className}`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-wider font-medium text-[var(--text-muted)]">
            {title}
          </span>
          {subtitle && (
            <span className="text-[10px] text-[var(--text-subtle)]">{subtitle}</span>
          )}
        </div>
        {sparklineData && sparklineData.length > 2 && (
          <Sparkline
            data={sparklineData}
            color={sparklineColor ?? accentColor ?? trendColor}
          />
        )}
      </div>

      {/* Value + trend row */}
      <div className="flex items-end justify-between gap-3">
        <span
          className="text-2xl font-bold tracking-tight"
          style={{
            fontFamily: "var(--font-mono)",
            fontVariantNumeric: "tabular-nums",
            color: accentColor ?? "var(--text-primary)",
          }}
        >
          {value}
        </span>

        {trend && (
          <div className="flex items-center gap-1 pb-0.5" style={{ color: trendColor }}>
            <TrendIcon className="w-3.5 h-3.5" />
            {trendValue && (
              <span
                className="text-xs font-semibold"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {trendValue}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Accent bar at bottom */}
      {accentColor && (
        <div
          className="h-[2px] w-full rounded-full opacity-40 group-hover:opacity-70 transition-opacity"
          style={{ background: accentColor }}
        />
      )}
    </div>
  );
}
