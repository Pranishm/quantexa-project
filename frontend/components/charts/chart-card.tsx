"use client";

import { useState, type ReactNode } from "react";

import { DataTable, type Column } from "@/components/data-table";
import { Legend, type LegendItem } from "@/components/legend";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TableSpec<T> {
  columns: Column<T>[];
  rows: T[];
  csvName: string;
}

interface ChartCardProps<T> {
  title: ReactNode;
  description?: ReactNode;
  legend?: LegendItem[];
  /** Extra controls shown top-right (selectors, toggles). */
  actions?: ReactNode;
  /** When given, the card gets a Chart / Table switch and the table mirrors every plotted value. */
  table?: TableSpec<T>;
  /** True while a changed setting recomputes: the last render stays put, faded, instead of collapsing to a skeleton. */
  refreshing?: boolean;
  footer?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function ChartCard<T = never>({
  title,
  description,
  legend,
  actions,
  table,
  refreshing,
  footer,
  className,
  children,
}: ChartCardProps<T>) {
  const [view, setView] = useState<"chart" | "table">("chart");

  return (
    <Card className={cn("gap-3 border border-hairline bg-surface py-4", className)}>
      <CardHeader className="gap-1 px-4">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div className="min-w-0 space-y-1">
            <CardTitle className="text-base font-medium text-ink">{title}</CardTitle>
            {description ? <CardDescription className="text-xs text-ink-3">{description}</CardDescription> : null}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {actions}
            {table ? (
              <div
                role="group"
                aria-label="Chart or table view"
                className="inline-flex border border-hairline text-[11px]"
              >
                {(["chart", "table"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={view === v}
                    onClick={() => setView(v)}
                    className={cn(
                      "px-2.5 py-1 font-mono uppercase transition-colors duration-150 ease-in-out",
                      view === v ? "bg-ink text-plane" : "text-ink-3 hover:bg-surface-2 hover:text-ink",
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        {legend?.length ? <Legend items={legend} className="pt-1" /> : null}
      </CardHeader>

      <CardContent className="px-4">
        {/* Kept mounted (just hidden) so switching views does not tear down and rebuild the canvas. */}
        <div
          hidden={view === "table"}
          className={cn(refreshing && "is-refreshing")}
          aria-busy={refreshing || undefined}
        >
          {children}
        </div>
        {table && view === "table" ? (
          <DataTable
            columns={table.columns}
            rows={table.rows}
            csvName={table.csvName}
            caption={typeof title === "string" ? title : undefined}
          />
        ) : null}
        {footer ? <div className="mt-3 text-xs text-ink-3">{footer}</div> : null}
      </CardContent>
    </Card>
  );
}
