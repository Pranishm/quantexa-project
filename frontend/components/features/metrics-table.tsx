"use client";

import { InfoTip } from "@/components/info-tip";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { integer, num, pct, signedPct } from "@/lib/format";
import type { Metrics, Num } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface MetricColumn {
  id: string;
  label: string;
  /** Entity colour shown as a dot beside the heading. */
  color?: string;
  metrics: Metrics | undefined;
}

interface Row {
  key: keyof Metrics;
  label: string;
  hint: string;
  format: (v: Num | undefined) => string;
  /** Which direction is better, used to bold the leading value when columns are compared. */
  better?: "higher" | "lower";
}

const ROWS: Row[] = [
  {
    key: "total_return",
    label: "Total return",
    hint: "Cumulative return over the window: Π(1 + rₜ) − 1, compounded from simple returns.",
    format: (v) => signedPct(v, 0),
    better: "higher",
  },
  {
    key: "cagr",
    label: "CAGR",
    hint: "Compound annual growth: (end ÷ start)^(N ÷ bars) − 1, where N is the asset's own periods per year.",
    format: (v) => signedPct(v),
    better: "higher",
  },
  {
    key: "annualised_volatility",
    label: "Volatility",
    hint: "Standard deviation of period returns × √N. Bitcoin uses N = 365, so it is not understated by 17% as it would be with 252.",
    format: (v) => pct(v),
    better: "lower",
  },
  {
    key: "sharpe",
    label: "Sharpe",
    hint: "(mean return − risk-free) ÷ standard deviation × √N. Return per unit of total risk.",
    format: (v) => num(v),
    better: "higher",
  },
  {
    key: "sortino",
    label: "Sortino",
    hint: "Like Sharpe, but only downside deviation counts as risk: √mean(min(r, 0)²).",
    format: (v) => num(v),
    better: "higher",
  },
  {
    key: "max_drawdown",
    label: "Max drawdown",
    hint: "Worst peak-to-trough fall of the equity curve: min(V ÷ running max − 1).",
    format: (v) => pct(v),
    better: "higher",
  },
  {
    key: "calmar",
    label: "Calmar",
    hint: "CAGR ÷ |max drawdown|. Growth earned per unit of the worst pain endured.",
    format: (v) => num(v),
    better: "higher",
  },
  {
    key: "var_95",
    label: "VaR 95% (1 bar)",
    hint: "Historical value at risk: the loss exceeded on only 5% of bars. −(5th percentile of returns).",
    format: (v) => pct(v, 2),
    better: "lower",
  },
  {
    key: "cvar_95",
    label: "CVaR 95% (1 bar)",
    hint: "Expected shortfall: the average loss on the worst 5% of bars.",
    format: (v) => pct(v, 2),
    better: "lower",
  },
  {
    key: "skew",
    label: "Skew",
    hint: "Asymmetry of returns. Negative skew means the big moves tend to be losses.",
    format: (v) => num(v),
  },
  {
    key: "kurtosis",
    label: "Kurtosis",
    hint: "Tail weight. Higher means more extreme days than a normal distribution would produce.",
    format: (v) => num(v),
  },
  {
    key: "probabilistic_sharpe",
    label: "Probabilistic Sharpe",
    hint: "The probability the true Sharpe exceeds zero, given the sample length, skew and kurtosis. Above 95% is conventionally meaningful.",
    format: (v) => pct(v, 0),
    better: "higher",
  },
  {
    key: "beta",
    label: "Beta",
    hint: "cov(r, r_benchmark) ÷ var(r_benchmark): sensitivity to the benchmark.",
    format: (v) => num(v),
  },
];

function bestIndex(columns: MetricColumn[], row: Row): number {
  if (!row.better || columns.length < 2) return -1;
  let best = -1;
  let bestValue = row.better === "higher" ? -Infinity : Infinity;
  columns.forEach((c, i) => {
    const v = c.metrics?.[row.key];
    if (typeof v !== "number" || !Number.isFinite(v)) return;
    if (row.better === "higher" ? v > bestValue : v < bestValue) {
      best = i;
      bestValue = v;
    }
  });
  return best;
}

/** Metrics down the side, one column per asset or strategy. */
export function MetricsTable({
  columns,
  caption,
  highlightBest = false,
  className,
}: {
  columns: MetricColumn[];
  caption: string;
  /** Bold the leading value in each row. Meaningful when the columns compete (strategy vs benchmark). */
  highlightBest?: boolean;
  className?: string;
}) {
  const rows = ROWS.filter((r) => columns.some((c) => typeof c.metrics?.[r.key] === "number"));

  return (
    <div className={cn("overflow-x-auto", className)}>
      <Table>
        <caption className="sr-only">{caption}</caption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-44 text-xs">Metric</TableHead>
            {columns.map((c) => (
              <TableHead key={c.id} className="text-right text-xs">
                <span className="inline-flex items-center justify-end gap-1.5">
                  {c.color ? <span aria-hidden className="size-2" style={{ background: c.color }} /> : null}
                  {c.label}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-xs text-ink-3">
              <span className="inline-flex items-center gap-1.5">
                Bars · periods/year (N)
                <InfoTip label="About annualisation">
                  Each asset is annualised on its own calendar: N = 252 for Gold and NVDA, N = 365 for Bitcoin, which
                  trades every day.
                </InfoTip>
              </span>
            </TableCell>
            {columns.map((c) => (
              <TableCell key={c.id} className="tnum text-right text-xs text-ink-2">
                {c.metrics ? `${integer(c.metrics.bars)} · ${c.metrics.periods_per_year}` : "n/a"}
              </TableCell>
            ))}
          </TableRow>
          {rows.map((row) => {
            const best = highlightBest ? bestIndex(columns, row) : -1;
            return (
              <TableRow key={row.key}>
                <TableCell className="text-sm text-ink-2">
                  <span className="inline-flex items-center gap-1.5">
                    {row.label}
                    <InfoTip label={`About ${row.label}`}>{row.hint}</InfoTip>
                  </span>
                </TableCell>
                {columns.map((c, i) => (
                  <TableCell
                    key={c.id}
                    className={cn("tnum text-right text-sm", i === best ? "font-semibold text-ink" : "text-ink-2")}
                  >
                    {row.format(c.metrics?.[row.key] as Num | undefined)}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
