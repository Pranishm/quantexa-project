import { cn } from "@/lib/utils";

export interface LegendItem {
  label: string;
  color: string;
  /** line = 2px rule, box = filled square, up/down = trade markers, band = translucent fill. */
  kind?: "line" | "box" | "up" | "down" | "band";
}

function Swatch({ color, kind = "line" }: Pick<LegendItem, "color" | "kind">) {
  if (kind === "up" || kind === "down") {
    return (
      <svg aria-hidden viewBox="0 0 10 10" className="size-2.5 shrink-0">
        <path d={kind === "up" ? "M5 1 9 9H1z" : "M5 9 1 1h8z"} fill={color} />
      </svg>
    );
  }
  if (kind === "box") return <span aria-hidden className="size-2.5 shrink-0" style={{ background: color }} />;
  if (kind === "band") {
    return <span aria-hidden className="size-2.5 shrink-0" style={{ background: color, opacity: 0.35 }} />;
  }
  return <span aria-hidden className="h-0.5 w-4 shrink-0" style={{ background: color }} />;
}

/** Labels stay in text ink; the swatch alone carries the series colour. */
export function Legend({ items, className }: { items: LegendItem[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-2", className)}>
      {items.map((item) => (
        <li key={item.label} className="inline-flex items-center gap-1.5">
          <Swatch color={item.color} kind={item.kind} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
