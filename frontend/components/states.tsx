"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ApiError } from "@/lib/api";
import { cn } from "@/lib/utils";

export function ErrorState({
  error,
  onRetry,
  title = "Could not load this",
  className,
}: {
  error: unknown;
  onRetry?: () => void;
  title?: string;
  className?: string;
}) {
  const offline = error instanceof ApiError && error.isNetwork;
  const message = error instanceof Error ? error.message : "Something went wrong.";

  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col gap-3 rounded-lg border border-critical/40 bg-critical/10 p-4 sm:flex-row sm:items-start",
        className,
      )}
    >
      <AlertTriangle aria-hidden className="mt-0.5 size-5 shrink-0 text-critical" />
      <div className="min-w-0 flex-1 space-y-1">
        <p className="text-sm font-medium text-ink">{offline ? "The API is not reachable" : title}</p>
        <p className="text-sm break-words text-ink-2">{message}</p>
        {offline ? (
          <p className="text-xs text-ink-3">
            Start it with <code className="rounded bg-surface-2 px-1 py-0.5">uvicorn app.main:app --port 8000</code>{" "}
            from the <code className="rounded bg-surface-2 px-1 py-0.5">backend</code> folder.
          </p>
        ) : null}
      </div>
      {onRetry ? (
        <Button variant="outline" size="sm" onClick={onRetry}>
          <RefreshCw aria-hidden data-icon="inline-start" />
          Retry
        </Button>
      ) : null}
    </div>
  );
}

export function ChartSkeleton({ height = 320, label = "Loading chart" }: { height?: number; label?: string }) {
  return (
    <div role="status" aria-label={label} style={{ height }} className="flex w-full flex-col justify-end gap-2">
      <Skeleton className="h-full w-full rounded-md" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function EmptyState({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-hairline p-6 text-center text-sm text-ink-3">{children}</p>
  );
}
