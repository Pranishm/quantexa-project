"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useSettings, type RangePreset } from "@/lib/store";

const OPTIONS: { value: RangePreset; label: string }[] = [
  { value: "1y", label: "1Y" },
  { value: "3y", label: "3Y" },
  { value: "5y", label: "5Y" },
  { value: "max", label: "Max" },
];

/** One window control above everything it scopes; every chart on the page re-renders against the same slice. */
export function RangeToggle() {
  const range = useSettings((s) => s.range);
  const setRange = useSettings((s) => s.setRange);
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      size="sm"
      spacing={0}
      value={range}
      onValueChange={(value) => value && setRange(value as RangePreset)}
      aria-label="Time window"
    >
      {OPTIONS.map((o) => (
        <ToggleGroupItem key={o.value} value={o.value} aria-label={`Window: ${o.label}`}>
          {o.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
