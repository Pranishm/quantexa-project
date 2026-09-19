"use client";

import { Pause, Play, RotateCcw, SkipBack, SkipForward } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { date } from "@/lib/format";

const SPEEDS = [1, 4, 16] as const;
/** Bars advanced per tick at 1x. A year of daily bars takes about 25 seconds. */
const TICK_MS = 100;

/**
 * Steps through the backtest one bar at a time. The charts receive only
 * `data.slice(0, cursor)`, so nothing after the current bar is on screen: the
 * same guarantee the engine makes, made visible.
 */
export function ReplayControls({
  total,
  dates,
  cursor,
  onCursor,
}: {
  total: number;
  dates: string[];
  cursor: number;
  onCursor: (next: number) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState<(typeof SPEEDS)[number]>(4);

  // Mirror the live values into refs so the interval can read them without being
  // torn down and restarted on every bar. Refs are written in an effect, never
  // during render.
  const cursorRef = useRef(cursor);
  const onCursorRef = useRef(onCursor);
  useEffect(() => {
    cursorRef.current = cursor;
  }, [cursor]);
  useEffect(() => {
    onCursorRef.current = onCursor;
  }, [onCursor]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      const next = cursorRef.current + speed;
      if (next >= total) {
        cursorRef.current = total;
        onCursorRef.current(total);
        setPlaying(false);
      } else {
        // Advance the ref immediately: the parent's re-render has not landed yet
        // when the next tick fires, so reading state alone would stall.
        cursorRef.current = next;
        onCursorRef.current(next);
      }
    }, TICK_MS);
    return () => clearInterval(id);
  }, [playing, speed, total]);

  const step = useCallback(
    (delta: number) => {
      setPlaying(false);
      const next = Math.min(total, Math.max(1, cursorRef.current + delta));
      cursorRef.current = next;
      onCursorRef.current(next);
    },
    [total],
  );

  const atEnd = cursor >= total;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant={playing ? "secondary" : "default"}
          onClick={() => (atEnd ? (onCursor(1), setPlaying(true)) : setPlaying((p) => !p))}
          aria-label={playing ? "Pause replay" : "Play replay"}
        >
          {playing ? <Pause aria-hidden data-icon="inline-start" /> : <Play aria-hidden data-icon="inline-start" />}
          {playing ? "Pause" : atEnd ? "Replay" : "Play"}
        </Button>
        <Button size="icon-sm" variant="outline" onClick={() => step(-1)} aria-label="Previous bar">
          <SkipBack aria-hidden />
        </Button>
        <Button size="icon-sm" variant="outline" onClick={() => step(1)} aria-label="Next bar">
          <SkipForward aria-hidden />
        </Button>
        <Button
          size="icon-sm"
          variant="outline"
          onClick={() => {
            setPlaying(false);
            onCursor(1);
          }}
          aria-label="Back to the first bar"
        >
          <RotateCcw aria-hidden />
        </Button>

        <div role="group" aria-label="Replay speed" className="ml-auto inline-flex border border-hairline text-[11px]">
          {SPEEDS.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={speed === s}
              onClick={() => setSpeed(s)}
              className={`px-2.5 py-1 font-mono transition-colors duration-150 ease-in-out ${speed === s ? "bg-ink text-plane" : "text-ink-3 hover:bg-surface-2 hover:text-ink"}`}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>

      <Slider
        value={[cursor]}
        min={1}
        max={total}
        step={1}
        onValueChange={([v]) => {
          setPlaying(false);
          onCursor(v);
        }}
        aria-label="Replay position"
      />

      <p className="tnum flex items-center justify-between text-xs text-ink-3">
        <span>{date(dates[Math.max(0, cursor - 1)])}</span>
        <span>
          bar {cursor.toLocaleString()} of {total.toLocaleString()}
        </span>
      </p>
    </div>
  );
}
