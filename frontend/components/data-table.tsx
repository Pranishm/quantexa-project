"use client";

import { Download } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  label: string;
  align?: "left" | "right";
  /** Raw value, used for the CSV export. */
  value: (row: T) => string | number | null;
  /** Formatted cell. Falls back to the raw value. */
  display?: (row: T) => ReactNode;
}

function toCsv<T>(columns: Column<T>[], rows: T[]): string {
  const cell = (v: string | number | null) => {
    if (v === null) return "";
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const head = columns.map((c) => cell(c.label)).join(",");
  return [head, ...rows.map((r) => columns.map((c) => cell(c.value(r))).join(","))].join("\n");
}

function download(name: string, text: string) {
  const url = URL.createObjectURL(new Blob([text], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * The table twin of a chart: every value on screen is reachable here, in text.
 * Long series show their most recent rows; the CSV holds all of them.
 */
export function DataTable<T>({
  columns,
  rows,
  maxRows = 200,
  csvName,
  caption,
  className,
}: {
  columns: Column<T>[];
  rows: T[];
  maxRows?: number;
  csvName?: string;
  caption?: string;
  className?: string;
}) {
  const shown = rows.length > maxRows ? rows.slice(-maxRows) : rows;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="max-h-96 overflow-auto rounded-md border border-hairline">
        <Table>
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <TableHeader className="sticky top-0 bg-surface">
            <TableRow>
              {columns.map((c) => (
                <TableHead key={c.key} className={cn("text-xs", c.align === "right" && "text-right")}>
                  {c.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {shown.map((row, i) => (
              <TableRow key={i}>
                {columns.map((c) => (
                  <TableCell key={c.key} className={cn("tnum py-1.5 text-xs", c.align === "right" && "text-right")}>
                    {c.display ? c.display(row) : (c.value(row) ?? "n/a")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between gap-3 text-xs text-ink-3">
        <span>
          {rows.length > maxRows
            ? `Showing the latest ${maxRows.toLocaleString()} of ${rows.length.toLocaleString()} rows.`
            : `${rows.length.toLocaleString()} rows.`}
        </span>
        {csvName ? (
          <Button variant="ghost" size="xs" onClick={() => download(csvName, toCsv(columns, rows))}>
            <Download aria-hidden data-icon="inline-start" />
            Download CSV
          </Button>
        ) : null}
      </div>
    </div>
  );
}
