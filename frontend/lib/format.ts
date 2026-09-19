import type { Num } from "./types";

/** Shown wherever the backend reports an undefined statistic (it sends null, never NaN). */
export const NA = "n/a";

/** U+2212. Lines up with "+" in tabular columns, unlike a hyphen. */
const MINUS = "−";

const isNum = (x: Num | undefined): x is number => typeof x === "number" && Number.isFinite(x);

function fixed(x: number, digits: number): string {
  const s = Math.abs(x).toFixed(digits);
  // Never print "-0.0%": a value that rounds to zero has no sign.
  return x < 0 && Number(s) !== 0 ? `${MINUS}${s}` : s;
}

export function num(x: Num | undefined, digits = 2): string {
  return isNum(x) ? fixed(x, digits) : NA;
}

export function pct(x: Num | undefined, digits = 1): string {
  return isNum(x) ? `${fixed(x * 100, digits)}%` : NA;
}

export function signedPct(x: Num | undefined, digits = 1): string {
  if (!isNum(x)) return NA;
  const body = fixed(x * 100, digits);
  return `${x > 0 && Number(body) !== 0 ? "+" : ""}${body}%`;
}

export function signed(x: Num | undefined, digits = 2): string {
  if (!isNum(x)) return NA;
  const body = fixed(x, digits);
  return `${x > 0 && Number(body) !== 0 ? "+" : ""}${body}`;
}

export function money(x: Num | undefined, digits = 0): string {
  if (!isNum(x)) return NA;
  return `${x < 0 ? MINUS : ""}$${Math.abs(x).toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}`;
}

export function compactMoney(x: Num | undefined): string {
  if (!isNum(x)) return NA;
  const abs = Math.abs(x);
  const sign = x < 0 ? MINUS : "";
  if (abs >= 1e9) return `${sign}$${(abs / 1e9).toFixed(2)}B`;
  if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(2)}M`;
  if (abs >= 1e4) return `${sign}$${(abs / 1e3).toFixed(1)}K`;
  return `${sign}$${abs.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

/** Prices span $5 (early NVDA, split-adjusted) to $100k+ (BTC); keep useful precision at both ends. */
export function price(x: Num | undefined): string {
  if (!isNum(x)) return NA;
  const digits = Math.abs(x) >= 1000 ? 0 : Math.abs(x) >= 100 ? 1 : 2;
  return x.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function bps(x: Num | undefined): string {
  return isNum(x) ? `${x.toFixed(x % 1 === 0 ? 0 : 1)} bps` : NA;
}

export function integer(x: Num | undefined): string {
  return isNum(x) ? Math.round(x).toLocaleString("en-US") : NA;
}

const DATE = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const MONTH = new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });

/** ISO date (yyyy-mm-dd) to "18 Sep 2026", pinned to UTC so a viewer's timezone cannot shift the day. */
export function date(iso: string | null | undefined): string {
  if (!iso) return NA;
  const d = new Date(`${iso.slice(0, 10)}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? iso : DATE.format(d);
}

export function month(iso: string | null | undefined): string {
  if (!iso) return NA;
  const d = new Date(`${iso.slice(0, 10)}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? iso : MONTH.format(d);
}

/** "1 year 3 months" style span for a bar count on a given calendar. */
export function barsAsSpan(bars: number, periodsPerYear: number): string {
  const years = bars / periodsPerYear;
  if (years >= 1) return `${years.toFixed(1)} yrs`;
  const months = Math.round(years * 12);
  return months >= 1 ? `${months} mo` : `${bars} bars`;
}

export function titleCase(s: string): string {
  return s.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
