import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type Tone = "good" | "bad" | "neutral";

/** Direction is shown with an icon and a word-free sign, so colour is never the only cue. */
export function Delta({ value, text, tone }: { value: number | null; text: string; tone?: Tone }) {
  const resolved: Tone = tone ?? (value === null || value === 0 ? "neutral" : value > 0 ? "good" : "bad");
  const Icon = value === null || value === 0 ? Minus : value > 0 ? ArrowUp : ArrowDown;
  return (
    <span
      className={cn(
        "tnum inline-flex items-center gap-0.5 text-sm font-medium",
        resolved === "good" && "text-good",
        resolved === "bad" && "text-serious",
        resolved === "neutral" && "text-ink-3",
      )}
    >
      <Icon aria-hidden className="size-3.5" />
      {text}
    </span>
  );
}

export function Stat({
  label,
  value,
  sub,
  accent,
  className,
}: {
  label: ReactNode;
  value: ReactNode;
  sub?: ReactNode;
  /** Entity colour shown as a small marker beside the label. */
  accent?: string;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0 space-y-1", className)}>
      <div className="caption flex items-center gap-2">
        {accent ? <span aria-hidden className="size-2" style={{ background: accent }} /> : null}
        <span className="truncate">{label}</span>
      </div>
      {/* Terminal: every figure is monospaced. */}
      <div className="font-mono text-2xl font-medium tracking-tight text-ink">{value}</div>
      {sub ? <div className="text-xs text-ink-3">{sub}</div> : null}
    </div>
  );
}
