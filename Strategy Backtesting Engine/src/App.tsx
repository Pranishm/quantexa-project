import { useState } from 'react';
import {
  Autopsy,
  Backtest,
  Copilot,
  Correlation,
  Dashboard,
  Guardrails,
  IndicatorEngine,
  MultiAsset,
  RealisticSim,
  Regimes,
  Robustness,
  VsBenchmark,
} from './modules';

const MODULES = [
  { id: 10, group: 'OVERVIEW', label: 'Command Center', el: (go: (n: number) => void) => <Dashboard go={go} /> },
  { id: 1, group: 'INTELLIGENCE', label: 'Multi-Asset Data', el: () => <MultiAsset /> },
  { id: 2, group: 'INTELLIGENCE', label: 'Indicator Engine', el: () => <IndicatorEngine /> },
  { id: 3, group: 'INTELLIGENCE', label: 'Cross-Asset Correlation', el: () => <Correlation /> },
  { id: 4, group: 'RESEARCH', label: 'Backtesting Engine', el: () => <Backtest /> },
  { id: 5, group: 'RESEARCH', label: 'Realistic Simulation', el: () => <RealisticSim /> },
  { id: 6, group: 'RESEARCH', label: 'Strategy vs. Benchmark', el: () => <VsBenchmark /> },
  { id: 11, group: 'RESEARCH', label: 'Strategy Autopsy', el: () => <Autopsy /> },
  { id: 7, group: 'DIAGNOSTICS', label: 'Robustness Testing', el: () => <Robustness /> },
  { id: 8, group: 'DIAGNOSTICS', label: 'Regime Analysis', el: () => <Regimes /> },
  { id: 9, group: 'DIAGNOSTICS', label: 'Bias Guardrails', el: () => <Guardrails /> },
  { id: 12, group: 'ASSIST', label: 'Quant Copilot', el: () => <Copilot /> },
];

const GROUPS = ['OVERVIEW', 'INTELLIGENCE', 'RESEARCH', 'DIAGNOSTICS', 'ASSIST'];

export default function App() {
  const [active, setActive] = useState(10);
  const [navOpen, setNavOpen] = useState(false);
  const current = MODULES.find((m) => m.id === active)!;

  return (
    <div className="min-h-screen bg-[var(--color-void)] text-[var(--color-ink)]">
      {/* Top status bar */}
      <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-[var(--color-line)] bg-[var(--color-void)]/95 px-4 py-2.5 backdrop-blur sm:px-6">
        <button className="lg:hidden text-[var(--color-ink-dim)]" onClick={() => setNavOpen((o) => !o)} aria-label="Menu">☰</button>
        <div className="flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded-[3px] bg-[var(--color-signal)] font-display text-[13px] font-800 text-black">Q</span>
          <span className="font-display text-[15px] font-800 tracking-[0.16em]">QUANTORA</span>
          <span className="hidden text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)] sm:inline">Quant Research OS</span>
        </div>
        <div className="ml-auto hidden items-center gap-4 text-[10px] uppercase tracking-[0.12em] md:flex">
          {[['Market', 'live', 'var(--color-up)'], ['Security', 'protected', 'var(--color-up)'], ['AI', 'ready', 'var(--color-signal)']].map(([k, v, c]) => (
            <span key={k} className="flex items-center gap-1.5 text-[var(--color-ink-faint)]">
              <span className="live-dot text-[8px]" style={{ color: c }}>●</span>{k} <span className="tnum" style={{ color: c }}>{v}</span>
            </span>
          ))}
        </div>
        <div className="tnum hidden text-[11px] text-[var(--color-ink-dim)] lg:block">19 SEP 2026 · 12:42:18</div>
      </header>

      <div className="mx-auto flex max-w-[1440px]">
        {/* Sidebar */}
        <aside className={`${navOpen ? 'block' : 'hidden'} fixed inset-x-0 top-[49px] z-20 border-b border-[var(--color-line)] bg-[var(--color-void)] lg:static lg:block lg:w-60 lg:shrink-0 lg:border-b-0 lg:border-r`}>
          <nav className="p-3 lg:sticky lg:top-[49px] lg:max-h-[calc(100vh-49px)] lg:overflow-y-auto">
            {GROUPS.map((g) => (
              <div key={g} className="mb-4">
                <div className="px-2.5 pb-1.5 text-[10px] font-600 uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">{g}</div>
                {MODULES.filter((m) => m.group === g).map((m) => (
                  <button
                    key={m.id}
                    onClick={() => { setActive(m.id); setNavOpen(false); }}
                    className={`flex w-full items-center gap-2.5 rounded-[3px] px-2.5 py-1.5 text-left text-[13px] transition-colors ${
                      active === m.id ? 'bg-[var(--color-panel)] text-[var(--color-ink)]' : 'text-[var(--color-ink-dim)] hover:bg-[var(--color-panel)]/60 hover:text-[var(--color-ink)]'
                    }`}
                  >
                    <span className="tnum text-[10px] font-600" style={{ color: active === m.id ? 'var(--color-signal)' : 'var(--color-ink-faint)' }}>
                      {String(m.id).padStart(2, '0')}
                    </span>
                    {m.label}
                    {active === m.id && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />}
                  </button>
                ))}
              </div>
            ))}
            <div className="mt-2 rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel)] p-3">
              <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Research disclaimer</div>
              <p className="mt-1 text-[10px] leading-relaxed text-[var(--color-ink-dim)]">Historical results are not a guarantee of future returns. Simulated / paper environment only.</p>
            </div>
          </nav>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 p-4 sm:p-6">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div className="tnum text-[11px] uppercase tracking-[0.16em] text-[var(--color-signal)]">{current.group}</div>
              <h1 className="mt-0.5 font-display text-[24px] font-800 leading-tight tracking-tight sm:text-[30px]">{current.label}</h1>
            </div>
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button onClick={() => { const i = MODULES.findIndex((m) => m.id === active); setActive(MODULES[(i - 1 + MODULES.length) % MODULES.length].id); }} className="tnum rounded-[3px] border border-[var(--color-line)] px-2.5 py-1.5 text-[12px] text-[var(--color-ink-dim)] hover:border-[var(--color-signal)] hover:text-[var(--color-ink)]">← Prev</button>
              <button onClick={() => { const i = MODULES.findIndex((m) => m.id === active); setActive(MODULES[(i + 1) % MODULES.length].id); }} className="tnum rounded-[3px] border border-[var(--color-line)] px-2.5 py-1.5 text-[12px] text-[var(--color-ink-dim)] hover:border-[var(--color-signal)] hover:text-[var(--color-ink)]">Next →</button>
            </div>
          </div>
          {current.el(setActive)}

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-4 text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
            <span>QUANTORA · Secure Quantitative Financial Intelligence</span>
            <span className="tnum">Designed around OWASP ASVS-aligned controls · v2026.09.19</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
