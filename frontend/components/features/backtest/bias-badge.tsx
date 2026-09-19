"use client";

import { AlertTriangle, ShieldCheck, ShieldX } from "lucide-react";

import { InfoTip } from "@/components/info-tip";
import { num, pct, signedPct } from "@/lib/format";
import type { BiasAudit } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * The claim on screen, and the evidence for it. A pass means two things held:
 * every sampled signal was reproduced from truncated history, and delaying the
 * strategy by one extra bar did not destroy its result.
 */
export function BiasBadge({ audit, className }: { audit: BiasAudit; className?: string }) {
  const passed = audit.verdict === "pass";
  const { causal_test: causal, lag_test: lag } = audit;
  const Icon = passed ? ShieldCheck : ShieldX;

  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        passed ? "border-good/40 bg-good/10" : "border-critical/40 bg-critical/10",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <Icon aria-hidden className={cn("mt-0.5 size-5 shrink-0", passed ? "text-good" : "text-critical")} />
        <div className="min-w-0 flex-1 space-y-3">
          <div>
            <p className="text-sm font-medium text-ink">{passed ? "No look-ahead detected" : "Look-ahead detected"}</p>
            <p className="text-xs text-ink-2">{audit.explanation}</p>
          </div>

          <dl className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-0.5">
              <dt className="flex items-center gap-1.5 text-xs text-ink-3">
                Causal test
                <InfoTip label="About the causal test">
                  Each sampled bar t has its signal recomputed from data[0..t] alone. If any recomputed value differs
                  from the one the full-history run produced, the strategy was reading the future.
                </InfoTip>
              </dt>
              <dd className="tnum text-sm text-ink">
                {causal.mismatches === 0 ? "All" : `${causal.samples - causal.mismatches} of`} {causal.samples} sampled
                bars reproduced
              </dd>
            </div>
            <div className="space-y-0.5">
              <dt className="flex items-center gap-1.5 text-xs text-ink-3">
                Lag test
                <InfoTip label="About the lag test">
                  The same strategy is rerun with one extra bar of delay. An edge that vanishes under a one-bar delay
                  was probably an artefact of trading too close to the signal.
                </InfoTip>
              </dt>
              <dd className="tnum text-sm text-ink">
                Keeps {pct(lag.sharpe_retention, 0)} of its Sharpe{" "}
                <span className="text-ink-3">
                  ({num(lag.base_sharpe)} → {num(lag.lagged_sharpe)})
                </span>
              </dd>
            </div>
          </dl>

          {lag.fragile ? (
            <p className="flex items-start gap-1.5 text-xs text-warning">
              <AlertTriangle aria-hidden className="mt-0.5 size-3.5 shrink-0" />
              Fragile: one extra bar of delay changes CAGR by {signedPct(lag.cagr_delta)}. The result leans heavily on
              trading immediately after the signal.
            </p>
          ) : null}

          {audit.random_walk_control ? (
            <p className="text-xs text-ink-3">
              Control: on {audit.random_walk_control.walks} synthetic random walks, where no edge can exist, this rule
              returned {signedPct(audit.random_walk_control.mean_cagr)} a year on average and was profitable{" "}
              {pct(audit.random_walk_control.positive_fraction, 0)} of the time. Far from a coin flip would suggest a
              bug.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
