import type { ReactNode } from 'react';

export function Panel({
  n,
  title,
  sub,
  children,
  className = '',
  right,
}: {
  n?: string;
  title: string;
  sub?: string;
  children: ReactNode;
  className?: string;
  right?: ReactNode;
}) {
  return (
    <section
      className={`rounded-[3px] border border-[var(--color-line)] bg-[var(--color-panel)] ${className}`}
    >
      <header className="flex items-start justify-between gap-4 border-b border-[var(--color-line-soft)] px-5 py-3.5">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            {n && (
              <span className="tnum text-[10px] font-semibold tracking-[0.2em] text-[var(--color-signal)]">
                {n}
              </span>
            )}
            <h2 className="font-display text-[13px] font-700 uppercase tracking-[0.13em] text-[var(--color-ink)]">
              {title}
            </h2>
          </div>
          {sub && <p className="mt-1 text-[12px] leading-snug text-[var(--color-ink-dim)]">{sub}</p>}
        </div>
        {right}
      </header>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function Stat({
  label,
  value,
  delta,
  unit,
}: {
  label: string;
  value: string;
  delta?: number;
  unit?: string;
}) {
  return (
    <div className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] px-3.5 py-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">{label}</div>
      <div className="mt-1.5 flex items-baseline gap-1.5">
        <span className="tnum text-[19px] font-600 leading-none text-[var(--color-ink)]">{value}</span>
        {unit && <span className="text-[11px] text-[var(--color-ink-faint)]">{unit}</span>}
      </div>
      {delta !== undefined && (
        <div
          className="tnum mt-1 text-[11px] font-500"
          style={{ color: delta >= 0 ? 'var(--color-up)' : 'var(--color-down)' }}
        >
          {delta >= 0 ? '▲' : '▼'} {Math.abs(delta).toFixed(2)}%
        </div>
      )}
    </div>
  );
}

export function Bar({ pct, color = 'var(--color-signal)' }: { pct: number; color?: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-line)]">
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export function Tag({ children, tone = 'dim' }: { children: ReactNode; tone?: 'dim' | 'ok' | 'warn' | 'signal' }) {
  const tones: Record<string, string> = {
    dim: 'text-[var(--color-ink-dim)] border-[var(--color-line)]',
    ok: 'text-[var(--color-up)] border-[color-mix(in_srgb,var(--color-up)_40%,transparent)]',
    warn: 'text-[var(--color-down)] border-[color-mix(in_srgb,var(--color-down)_40%,transparent)]',
    signal: 'text-[var(--color-signal)] border-[color-mix(in_srgb,var(--color-signal)_45%,transparent)]',
  };
  return (
    <span
      className={`tnum inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-500 uppercase tracking-[0.1em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
