"use client";

import { useMemo } from "react";

import type { DateRange } from "./api";
import { useAssets } from "./queries";
import { rangeStart, useSettings } from "./store";

/**
 * The Overview / Correlations window. A "1Y" preset is counted back from the
 * last bar, so it cannot be resolved until the asset list has loaded; until then
 * `ready` is false and callers hold their queries instead of fetching everything twice.
 */
export function useRangeWindow(): { range: DateRange; ready: boolean; latest: string | null } {
  const preset = useSettings((s) => s.range);
  const { data } = useAssets();

  const latest = useMemo(
    () =>
      data?.assets.reduce<string | null>(
        (max, a) => (a.cached_end && (max === null || a.cached_end > max) ? a.cached_end : max),
        null,
      ) ?? null,
    [data],
  );

  return useMemo(
    () => ({
      range: { start: rangeStart(preset, latest) },
      ready: preset === "max" || latest !== null,
      latest,
    }),
    [preset, latest],
  );
}
