"use client";

import { ArrowRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/states";
import { date, num, price } from "@/lib/format";
import { useExplain } from "@/lib/queries";
import type { BacktestRequest } from "@/lib/types";

const INDICATOR_LABEL: Record<string, string> = {
  sma_short: "Fast SMA",
  sma_long: "Slow SMA",
  spread: "Fast − slow",
  ema: "EMA",
  close: "Close",
  gap_pct: "Gap to EMA (%)",
  momentum: "Momentum",
  momentum_pct: "Momentum (%)",
  zscore: "z-score",
};

const asPercent = (key: string) => key.endsWith("_pct");

/**
 * Why a marker is where it is: the indicator values on that bar, the rule that
 * fired, and the bar the position actually started on.
 */
export function TradeExplainer({
  request,
  at,
  onClose,
}: {
  request: BacktestRequest;
  at: string | null;
  onClose: () => void;
}) {
  const { data, isPending, error, refetch } = useExplain(request, at);

  if (!at) return null;

  return (
    <aside aria-label="Trade explanation" className="rounded-lg border border-hairline bg-surface-2 p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ink">Signal on {date(at)}</p>
          <p className="text-xs text-ink-3">Why this marker is here.</p>
        </div>
        <Button variant="ghost" size="icon-xs" onClick={onClose} aria-label="Close explanation">
          <X aria-hidden />
        </Button>
      </div>

      {error ? (
        <ErrorState error={error} title="Could not explain this bar" onRetry={() => void refetch()} />
      ) : isPending || !data ? (
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-16 w-full" />
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-ink-2">{data.rule}</p>

          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-ink-3">Close</dt>
              <dd className="tnum text-sm text-ink">${price(data.close)}</dd>
            </div>
            {Object.entries(data.indicators).map(([key, value]) => (
              <div key={key}>
                <dt className="text-xs text-ink-3">{INDICATOR_LABEL[key] ?? key}</dt>
                <dd className="tnum text-sm text-ink">
                  {value === null ? "n/a" : asPercent(key) ? `${num(value, 2)}%` : num(value, 2)}
                </dd>
              </div>
            ))}
            <div>
              <dt className="text-xs text-ink-3">Target position</dt>
              <dd className="tnum text-sm text-ink">{num(data.signal, 2)}</dd>
            </div>
          </dl>

          <p className="flex flex-wrap items-center gap-1.5 rounded-md bg-surface px-3 py-2 text-xs text-ink-2">
            <span className="tnum">Signal {date(data.execution.signal_decided_on)}</span>
            <ArrowRight aria-hidden className="size-3.5 text-ink-3" />
            <span className="tnum">
              traded {data.execution.position_effective_from ? date(data.execution.position_effective_from) : "n/a"}
            </span>
            <span className="text-ink-3">— decided on this bar&apos;s close, executed on the next one.</span>
          </p>
        </div>
      )}
    </aside>
  );
}
