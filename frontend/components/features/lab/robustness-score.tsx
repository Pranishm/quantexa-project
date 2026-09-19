"use client";

import { AlertTriangle, CheckCircle2, CircleSlash } from "lucide-react";

import { InfoTip } from "@/components/info-tip";
import { Progress } from "@/components/ui/progress";
import { num, pct } from "@/lib/format";
import type { RobustnessScore } from "@/lib/types";
import { cn } from "@/lib/utils";

const VERDICT = {
  robust: { icon: CheckCircle2, text: "text-good", label: "Robust" },
  mixed: { icon: AlertTriangle, text: "text-warning", label: "Mixed" },
  fragile: { icon: CircleSlash, text: "text-critical", label: "Fragile" },
} as const;

/**
 * One 0-100 number from three independent tests, shown with its parts so the
 * score is auditable rather than a black box. A high average cannot hide a
 * failing leg: the backend downgrades the verdict when any component collapses.
 */
export function RobustnessScoreCard({ score }: { score: RobustnessScore }) {
  const verdict = VERDICT[score.verdict] ?? VERDICT.mixed;
  const Icon = verdict.icon;
  const components = [
    { key: "deflated_sharpe", format: (v: number | null) => pct(v, 0) },
    { key: "plateau_stability", format: (v: number | null) => pct(v, 0) },
    { key: "walk_forward_efficiency", format: (v: number | null) => num(v, 2) },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-4xl font-medium tracking-tight text-ink">{score.score.toFixed(0)}</span>
            <span className="text-sm text-ink-3">/ 100</span>
          </div>
          <p className={cn("mt-1 flex items-center gap-1.5 text-sm font-medium", verdict.text)}>
            <Icon aria-hidden className="size-4" />
            {verdict.label}
          </p>
        </div>
        <p className="max-w-sm text-right text-xs text-ink-2">{score.summary}</p>
      </div>

      <dl className="space-y-3">
        {components.map(({ key, format }) => {
          const c = score.components[key];
          return (
            <div key={key} className="space-y-1">
              <div className="flex items-center justify-between gap-2 text-xs">
                <dt className="flex items-center gap-1.5 text-ink-2">
                  {c.label}
                  <InfoTip label={`About ${c.label}`}>{c.explanation}</InfoTip>
                  <span className="text-ink-3">×{c.weight}</span>
                </dt>
                <dd className="tnum text-ink">{format(c.value)}</dd>
              </div>
              <Progress value={c.score} aria-label={`${c.label}: ${c.score.toFixed(0)} out of 100`} />
            </div>
          );
        })}
      </dl>

      <p className="border-t border-hairline pt-3 text-xs text-ink-3">
        Observed Sharpe {num(score.observed_sharpe)} across {score.trials} parameter sets tried. The Deflated Sharpe
        charges for that search: testing many parameters will always throw up a good-looking one by luck.
      </p>
    </div>
  );
}
