import { AlertTriangle, Info, Minus, TrendingUp, type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { InsightCard, InsightTone } from "@/lib/types";
import { cn } from "@/lib/utils";

const TONE: Record<InsightTone, { label: string; icon: LucideIcon; text: string }> = {
  positive: { label: "Positive", icon: TrendingUp, text: "text-good" },
  warning: { label: "Watch", icon: AlertTriangle, text: "text-warning" },
  info: { label: "Insight", icon: Info, text: "text-ink-2" },
  neutral: { label: "Note", icon: Minus, text: "text-ink-3" },
};

/** Tone is an icon and a word, never colour alone. */
export function InsightCards({ cards, className }: { cards: InsightCard[]; className?: string }) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {cards.map((card) => {
        const tone = TONE[card.tone] ?? TONE.info;
        const Icon = tone.icon;
        return (
          <li key={card.id} className="min-w-0">
            <Card className="h-full gap-2 border border-hairline bg-surface py-4">
              <CardContent className="space-y-2 px-4">
                <div className={cn("flex items-center gap-1.5 text-xs font-medium", tone.text)}>
                  <Icon aria-hidden className="size-3.5" />
                  {tone.label}
                  {card.tags[0] ? <span className="font-normal text-ink-3">· {card.tags[0]}</span> : null}
                </div>
                <h3 className="text-sm leading-snug font-medium text-ink">{card.title}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{card.body}</p>
              </CardContent>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
