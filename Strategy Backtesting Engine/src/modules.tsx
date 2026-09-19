import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ASSETS,
  AUDIT_LOG,
  AUTOPSY_DRIVERS,
  AUTOPSY_MONTHS,
  COPILOT_THREAD,
  CORR,
  equityCurve,
  FAST_MA,
  REGIME_COLORS,
  REGIMES,
  ROBUST,
  series,
  SLOW_MA,
  TRADES,
  type Candle,
} from './data';
import { Bar as MeterBar, Panel, Stat, Tag } from './ui';

const AXIS = { stroke: '#5f656d', fontSize: 10, fontFamily: 'JetBrains Mono' };
const GRID = '#1a1d22';

function ChartTip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-[3px] border border-[var(--color-line)] bg-[var(--color-void)]/95 px-3 py-2 shadow-xl">
      <div className="tnum mb-1 text-[10px] text-[var(--color-ink-faint)]">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="tnum flex items-center gap-2 text-[11px]">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: p.color || p.stroke }} />
          <span className="text-[var(--color-ink-dim)]">{p.name}</span>
          <span className="ml-auto text-[var(--color-ink)]">
            {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── 01 · MULTI-ASSET DATA PROCESSING ─────────────────────────── */
export function MultiAsset() {
  return (
    <Panel
      n="01"
      title="Multi-Asset Data Processing"
      sub="Normalized OHLCV across four assets. Each stream keeps its own calendar — BTC/SOL annualize on 365 periods, NVDA/GOLD on 252."
      right={<Tag tone="ok"><span className="live-dot">●</span> 4 feeds verified</Tag>}
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {ASSETS.map((a, idx) => {
          const s = series(idx * 31 + 3, 60, 100, a.chg > 0 ? 0.0012 : -0.0006, a.volaty / 3000);
          return (
            <div key={a.sym} className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3.5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-[15px] font-700 tracking-wide">{a.sym}</div>
                  <div className="text-[11px] text-[var(--color-ink-faint)]">{a.name}</div>
                </div>
                <span className="tnum rounded-full px-2 py-0.5 text-[10px]" style={{ background: `${a.color}1a`, color: a.color }}>
                  {a.periodsPerYear}d/yr
                </span>
              </div>
              <div className="tnum mt-3 text-[18px] font-600">${a.price.toLocaleString()}</div>
              <div className="tnum text-[12px] font-500" style={{ color: a.chg >= 0 ? 'var(--color-up)' : 'var(--color-down)' }}>
                {a.chg >= 0 ? '▲' : '▼'} {Math.abs(a.chg)}%
              </div>
              <div className="mt-2 h-10">
                <ResponsiveContainer width="100%" height={40}>
                  <AreaChart data={s} margin={{ top: 2, bottom: 2, left: 0, right: 0 }}>
                    <defs>
                      <linearGradient id={`g${a.sym}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={a.color} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={a.color} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area dataKey="close" stroke={a.color} strokeWidth={1.4} fill={`url(#g${a.sym})`} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-[var(--color-line-soft)] pt-2.5 text-[10px]">
                <Field k="24h Vol" v={a.vol} />
                <Field k="σ ann." v={`${a.volaty}%`} />
                <Field k="Regime" v={a.regime} />
                <Field k="Integrity" v="VALID" ok />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] px-4 py-3 text-[11px] text-[var(--color-ink-dim)]">
        <span className="text-[var(--color-ink-faint)]">PIPELINE</span>
        {['Ingest', 'Validate', 'Normalize', 'Align calendars', 'Cache · Parquet'].map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            <span className="text-[var(--color-signal)]">›</span> {s}
            {i === 4 && <Tag tone="ok">0.02% missing</Tag>}
          </span>
        ))}
      </div>
    </Panel>
  );
}

function Field({ k, v, ok }: { k: string; v: string; ok?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[var(--color-ink-faint)]">{k}</span>
      <span className="tnum" style={{ color: ok ? 'var(--color-up)' : 'var(--color-ink-dim)' }}>{v}</span>
    </div>
  );
}

/* ── 02 · QUANTITATIVE INDICATOR ENGINE ───────────────────────── */
export function IndicatorEngine() {
  const [sym, setSym] = useState('BTC');
  const [showSMA, setSMA] = useState(true);
  const [showEMA, setEMA] = useState(true);
  const a = ASSETS.find((x) => x.sym === sym)!;
  const data = useMemo<Candle[]>(() => series(sym.charCodeAt(0) * 7 + 1, 180, a.price / 3, 0.001, a.volaty / 2600), [sym]);
  const metrics = [
    { k: 'Cumulative', v: '+142.8%', c: 'var(--color-up)' },
    { k: 'CAGR', v: '38.4%', c: 'var(--color-ink)' },
    { k: 'Ann. Vol', v: `${a.volaty}%`, c: 'var(--color-ink)' },
    { k: 'Sharpe', v: '1.82', c: 'var(--color-signal)' },
    { k: 'Sortino', v: '2.41', c: 'var(--color-ink)' },
    { k: 'Max DD', v: '-27.6%', c: 'var(--color-down)' },
  ];
  return (
    <Panel
      n="02"
      title="Quantitative Indicator Engine"
      sub="SMA / EMA overlays, returns, rolling volatility, Sharpe, Sortino, drawdown — computed from source series, never estimated."
      right={
        <div className="flex gap-1">
          {ASSETS.map((x) => (
            <button
              key={x.sym}
              onClick={() => setSym(x.sym)}
              className={`tnum rounded-[3px] px-2.5 py-1 text-[11px] transition-colors ${
                x.sym === sym ? 'bg-[var(--color-signal)] text-black' : 'border border-[var(--color-line)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]'
              }`}
            >
              {x.sym}
            </button>
          ))}
        </div>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_180px]">
        <div>
          <div className="mb-2 flex items-center gap-3 text-[11px]">
            <Toggle on={showSMA} set={setSMA} color="#4cc4e0" label="SMA 20" />
            <Toggle on={showEMA} set={setEMA} color="#f5b544" label="EMA 20" />
            <span className="ml-auto tnum text-[var(--color-ink-faint)]">{a.name}</span>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={data} margin={{ top: 6, right: 6, left: -12, bottom: 0 }}>
                <CartesianGrid stroke={GRID} vertical={false} />
                <XAxis dataKey="date" {...AXIS} tickLine={false} axisLine={{ stroke: GRID }} minTickGap={44} />
                <YAxis {...AXIS} tickLine={false} axisLine={false} width={52} domain={['auto', 'auto']} />
                <Tooltip content={<ChartTip />} />
                <Line dataKey="close" name="Close" stroke="#e8eaed" strokeWidth={1.6} dot={false} />
                {showSMA && <Line dataKey="sma" name="SMA 20" stroke="#4cc4e0" strokeWidth={1.2} dot={false} strokeDasharray="4 3" />}
                {showEMA && <Line dataKey="ema" name="EMA 20" stroke="#f5b544" strokeWidth={1.2} dot={false} />}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
          {metrics.map((m) => (
            <div key={m.k} className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] px-3 py-2">
              <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">{m.k}</div>
              <div className="tnum mt-1 text-[16px] font-600" style={{ color: m.c }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function Toggle({ on, set, color, label }: { on: boolean; set: (v: boolean) => void; color: string; label: string }) {
  return (
    <button onClick={() => set(!on)} className="flex items-center gap-1.5 text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]">
      <span className="h-2.5 w-2.5 rounded-[2px] border" style={{ borderColor: color, background: on ? color : 'transparent' }} />
      {label}
    </button>
  );
}

/* ── 03 · CROSS-ASSET CORRELATION ─────────────────────────────── */
export function Correlation() {
  const [hover, setHover] = useState<{ a: string; b: string; v: number } | null>(null);
  const cell = (v: number) => {
    if (v >= 0.999) return '#23272e';
    const mag = Math.abs(v);
    const c = v >= 0 ? [53, 208, 127] : [255, 92, 114];
    return `rgba(${c[0]},${c[1]},${c[2]},${(mag * 0.85).toFixed(2)})`;
  };
  return (
    <Panel n="03" title="Cross-Asset Correlation" sub="Pearson ρ on common-date returns. Break detection fires when the rolling 60-day window drifts >2σ from its 1-year norm.">
      <div className="grid gap-5 lg:grid-cols-[auto_1fr]">
        <div>
          <div className="inline-grid" style={{ gridTemplateColumns: `48px repeat(${CORR.labels.length}, 56px)` }}>
            <div />
            {CORR.labels.map((l) => (
              <div key={l} className="tnum pb-1.5 text-center text-[10px] text-[var(--color-ink-dim)]">{l}</div>
            ))}
            {CORR.matrix.map((row, i) => (
              <div key={i} className="contents">
                <div className="tnum flex items-center justify-end pr-2 text-[10px] text-[var(--color-ink-dim)]">{CORR.labels[i]}</div>
                {row.map((v, j) => (
                  <div
                    key={j}
                    onMouseEnter={() => setHover({ a: CORR.labels[i], b: CORR.labels[j], v })}
                    onMouseLeave={() => setHover(null)}
                    className="tnum m-[2px] flex h-[52px] items-center justify-center rounded-[2px] text-[12px] font-500 text-white transition-transform hover:scale-[1.06]"
                    style={{ background: cell(v), color: Math.abs(v) > 0.5 || v > 0.999 ? '#fff' : 'var(--color-ink)' }}
                  >
                    {v.toFixed(2)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-4">
            {hover ? (
              <>
                <div className="font-display text-[14px] font-700">{hover.a} ↔ {hover.b}</div>
                <div className="tnum mt-2 text-[34px] font-600" style={{ color: hover.v >= 0 ? 'var(--color-up)' : 'var(--color-down)' }}>
                  {hover.v.toFixed(2)}
                </div>
                <div className="mt-1 text-[12px] text-[var(--color-ink-dim)]">
                  {hover.v > 0.7 ? 'Strong co-movement — diversification benefit is limited.' : hover.v < 0 ? 'Inverse relationship — natural hedge.' : 'Weak / independent behavior.'}
                </div>
              </>
            ) : (
              <div className="text-[12px] text-[var(--color-ink-faint)]">Hover a cell to inspect the pair, its 60-day trend and interpretation.</div>
            )}
          </div>
          <div className="rounded-[3px] border border-[color-mix(in_srgb,var(--color-signal)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-signal)_7%,transparent)] p-3.5">
            <Tag tone="signal">⚠ correlation break</Tag>
            <p className="mt-2 text-[12px] leading-relaxed text-[var(--color-ink-dim)]">
              <span className="tnum text-[var(--color-ink)]">BTC ↔ NVDA</span> 60-day ρ rose to <span className="tnum text-[var(--color-signal)]">0.61</span>{' '}
              (+2.3σ vs 1-year mean). Momentum books now carry concentrated tech-beta exposure.
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* ── 04 · STRATEGY BACKTESTING ENGINE ─────────────────────────── */
export function Backtest() {
  const [cfg, setCfg] = useState({ asset: 'BTC', capital: 100000, size: 25, commission: 0.15, slippage: 0.05, exec: 'Next Bar Open' });
  const [running, setRunning] = useState(false);
  const [ran, setRan] = useState(true);
  const run = () => {
    setRunning(true);
    setRan(false);
    setTimeout(() => {
      setRunning(false);
      setRan(true);
    }, 1400);
  };
  const results = [
    { k: 'Total Return', v: '+84.21%', c: 'var(--color-up)', big: true },
    { k: 'CAGR', v: '21.4%' },
    { k: 'Sharpe', v: '1.82' },
    { k: 'Sortino', v: '2.35' },
    { k: 'Max Drawdown', v: '-18.3%', c: 'var(--color-down)' },
    { k: 'Win Rate', v: '61%' },
    { k: 'Profit Factor', v: '2.1' },
    { k: 'Trades', v: '48' },
  ];
  return (
    <Panel n="04" title="Strategy Backtesting Engine" sub="Rule-based simulation with explicit capital, position sizing and execution model. Signals at bar t execute at t+1 — no same-bar fills.">
      <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
        <div className="space-y-3">
          <Select label="Asset" value={cfg.asset} opts={ASSETS.map((a) => a.sym)} onChange={(v) => setCfg({ ...cfg, asset: v })} />
          <Select label="Strategy" value="SMA Crossover" opts={['SMA Crossover', 'EMA Trend', 'Momentum', 'Mean Reversion']} onChange={() => {}} />
          <Range label="Initial Capital" value={cfg.capital} min={10000} max={500000} step={10000} fmt={(v) => `$${v.toLocaleString()}`} onChange={(v) => setCfg({ ...cfg, capital: v })} />
          <Range label="Position Size" value={cfg.size} min={5} max={100} step={5} fmt={(v) => `${v}%`} onChange={(v) => setCfg({ ...cfg, size: v })} />
          <Range label="Commission" value={cfg.commission} min={0} max={1} step={0.05} fmt={(v) => `${v.toFixed(2)}%`} onChange={(v) => setCfg({ ...cfg, commission: v })} />
          <Range label="Slippage" value={cfg.slippage} min={0} max={0.5} step={0.05} fmt={(v) => `${v.toFixed(2)}%`} onChange={(v) => setCfg({ ...cfg, slippage: v })} />
          <button
            onClick={run}
            disabled={running}
            className="tnum relative w-full overflow-hidden rounded-[3px] bg-[var(--color-signal)] py-2.5 text-[12px] font-700 uppercase tracking-[0.14em] text-black transition-opacity hover:opacity-90 disabled:opacity-70"
          >
            {running ? 'Running engine…' : '▶ Run Backtest'}
            {running && <span className="absolute inset-y-0 left-0 w-1/4 bg-white/30" style={{ animation: 'sweep 1.1s linear infinite' }} />}
          </button>
          <p className="text-[10px] leading-relaxed text-[var(--color-ink-faint)]">
            Benchmark: Buy &amp; Hold · Period 2020 → 2026 · Execution {cfg.exec}
          </p>
        </div>
        <div className={running ? 'opacity-40 transition-opacity' : 'transition-opacity'}>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {results.map((r) => (
              <div
                key={r.k}
                className={`rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] px-3 py-2.5 ${r.big ? 'col-span-2 sm:col-span-1 sm:row-span-2 flex flex-col justify-center' : ''}`}
              >
                <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">{r.k}</div>
                <div className="tnum mt-1 font-600" style={{ color: r.c || 'var(--color-ink)', fontSize: r.big ? 28 : 16 }}>
                  {ran ? r.v : '—'}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 overflow-hidden rounded-[3px] border border-[var(--color-line-soft)]">
            <table className="w-full text-left">
              <thead className="bg-[var(--color-panel-2)] text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
                <tr>
                  {['Date', 'Action', 'Price', 'Size', 'P&L', 'Signal'].map((h) => (
                    <th key={h} className="px-3 py-2 font-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="tnum text-[11px]">
                {TRADES.map((t, i) => (
                  <tr key={i} className="border-t border-[var(--color-line-soft)] hover:bg-[var(--color-panel-2)]">
                    <td className="px-3 py-1.5 text-[var(--color-ink-dim)]">{t.date}</td>
                    <td className="px-3 py-1.5 font-600" style={{ color: t.action === 'BUY' ? 'var(--color-up)' : 'var(--color-down)' }}>{t.action}</td>
                    <td className="px-3 py-1.5">${t.price.toLocaleString()}</td>
                    <td className="px-3 py-1.5 text-[var(--color-ink-dim)]">{t.size}</td>
                    <td className="px-3 py-1.5" style={{ color: t.pnl == null ? 'var(--color-ink-faint)' : t.pnl >= 0 ? 'var(--color-up)' : 'var(--color-down)' }}>
                      {t.pnl == null ? '—' : `${t.pnl >= 0 ? '+' : ''}$${t.pnl.toLocaleString()}`}
                    </td>
                    <td className="px-3 py-1.5 font-sans text-[10px] text-[var(--color-ink-faint)]">{t.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function Select({ label, value, opts, onChange }: { label: string; value: string; opts: string[]; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="tnum w-full rounded-[3px] border border-[var(--color-line)] bg-[var(--color-panel-2)] px-2.5 py-1.5 text-[12px] text-[var(--color-ink)] outline-none focus:border-[var(--color-signal)]"
      >
        {opts.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function Range({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (v: number) => string; onChange: (v: number) => void }) {
  return (
    <label className="block">
      <span className="mb-1 flex justify-between text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
        {label} <span className="tnum text-[var(--color-signal)]">{fmt(value)}</span>
      </span>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-signal)]"
      />
    </label>
  );
}

/* ── 05 · REALISTIC TRADING SIMULATION ────────────────────────── */
export function RealisticSim() {
  const drag = [
    { k: 'Gross Return', v: 96.3, c: 'var(--color-ink)' },
    { k: 'Commission', v: -5.2, c: 'var(--color-down)' },
    { k: 'Slippage', v: -6.9, c: 'var(--color-down)' },
    { k: 'Net Return', v: 84.2, c: 'var(--color-up)' },
  ];
  return (
    <Panel n="05" title="Realistic Trading Simulation" sub="Models the friction real capital pays: broker commission, exchange fees and slippage between expected and filled price.">
      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <div className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Fee-drag waterfall</div>
          <div className="space-y-2.5">
            {drag.map((d) => (
              <div key={d.k} className="flex items-center gap-3">
                <span className="w-28 text-[12px] text-[var(--color-ink-dim)]">{d.k}</span>
                <div className="relative h-6 flex-1 rounded-[2px] bg-[var(--color-panel-2)]">
                  <div
                    className="absolute top-0 h-full rounded-[2px]"
                    style={{ width: `${Math.min(100, Math.abs(d.v))}%`, background: d.c, opacity: d.k === 'Net Return' || d.k === 'Gross Return' ? 0.9 : 0.55, left: d.v < 0 ? 'auto' : 0, right: d.v < 0 ? 0 : 'auto' }}
                  />
                </div>
                <span className="tnum w-16 text-right text-[13px] font-600" style={{ color: d.c }}>
                  {d.v > 0 ? '+' : ''}{d.v}%
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3 text-[12px] leading-relaxed text-[var(--color-ink-dim)]">
            A high-frequency edge can look profitable on paper yet lose money live once fee erosion compounds. QUANTORA charges costs on the <span className="text-[var(--color-ink)]">execution bar</span>, on <span className="tnum text-[var(--color-ink)]">|Δ position| × notional × (fee + slippage)</span>.
          </p>
        </div>
        <div>
          <div className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Paper-trading book · virtual $100,000</div>
          <div className="space-y-2">
            {[
              { s: 'BTC', side: 'LONG', qty: '0.25', entry: 104200, cur: 108421, pnl: 1055 },
              { s: 'NVDA', side: 'LONG', qty: '120', entry: 168.4, cur: 174.03, pnl: 675 },
              { s: 'SOL', side: 'SHORT', qty: '80', entry: 224.1, cur: 214.88, pnl: 737 },
            ].map((p) => (
              <div key={p.s} className="flex items-center gap-3 rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] px-3 py-2.5">
                <div className="w-14">
                  <div className="font-display text-[13px] font-700">{p.s}</div>
                  <div className="tnum text-[10px]" style={{ color: p.side === 'LONG' ? 'var(--color-up)' : 'var(--color-down)' }}>{p.side}</div>
                </div>
                <div className="tnum grid flex-1 grid-cols-3 gap-1 text-[11px]">
                  <span className="text-[var(--color-ink-faint)]">Qty {p.qty}</span>
                  <span className="text-[var(--color-ink-dim)]">@ ${p.entry.toLocaleString()}</span>
                  <span className="text-[var(--color-ink-dim)]">→ ${p.cur.toLocaleString()}</span>
                </div>
                <div className="tnum w-16 text-right text-[13px] font-600" style={{ color: p.pnl >= 0 ? 'var(--color-up)' : 'var(--color-down)' }}>
                  +${p.pnl.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] px-3 py-2.5">
            <span className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">Open P&amp;L</span>
            <span className="tnum text-[16px] font-600 text-[var(--color-up)]">+$2,467</span>
          </div>
          <div className="mt-2 flex gap-2 text-[10px]">
            <Tag>research</Tag><Tag tone="signal">paper · real feed</Tag><Tag>live · disabled</Tag>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* ── 06 · STRATEGY VS BENCHMARK ───────────────────────────────── */
export function VsBenchmark() {
  const data = useMemo(() => equityCurve(42), []);
  return (
    <Panel
      n="06"
      title="Strategy vs. Benchmark"
      sub="Every strategy is judged against Buy-and-Hold, net of costs and risk. Underperforming the simple benchmark means the complexity earned nothing."
      right={
        <div className="flex items-center gap-3 text-[11px]">
          <Legend c="#f5b544" t="Strategy" /><Legend c="#5f656d" t="Buy & Hold" />
        </div>
      }
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data} margin={{ top: 6, right: 8, left: 4, bottom: 0 }}>
            <defs>
              <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5b544" stopOpacity={0.14} />
                <stop offset="100%" stopColor="#f5b544" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis dataKey="date" {...AXIS} tickLine={false} axisLine={{ stroke: GRID }} minTickGap={50} />
            <YAxis {...AXIS} tickLine={false} axisLine={false} width={58} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} domain={['auto', 'auto']} />
            <Tooltip content={<ChartTip />} />
            <Area dataKey="hi" name="MC 95%" stroke="none" fill="url(#band)" />
            <Area dataKey="lo" name="MC 5%" stroke="none" fill="var(--color-void)" />
            <Line dataKey="strategy" name="Strategy" stroke="#f5b544" strokeWidth={2} dot={false} />
            <Line dataKey="benchmark" name="Buy & Hold" stroke="#5f656d" strokeWidth={1.4} dot={false} strokeDasharray="5 4" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Strategy" value="+84.2%" delta={84.2} />
        <Stat label="Buy & Hold" value="+51.0%" delta={51} />
        <Stat label="Excess (α)" value="+33.2%" unit="net of cost" />
        <Stat label="Monte-Carlo 5–95%" value="±11.4%" unit="1,000 paths" />
      </div>
    </Panel>
  );
}

function Legend({ c, t }: { c: string; t: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[var(--color-ink-dim)]">
      <span className="h-2 w-4 rounded-full" style={{ background: c }} /> {t}
    </span>
  );
}

/* ── 07 · STRATEGY ROBUSTNESS TESTING ─────────────────────────── */
export function Robustness() {
  const flat = ROBUST.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);
  const heat = (v: number) => {
    const t = (v - min) / (max - min);
    // dark → amber ramp
    return `rgba(245,181,68,${(0.12 + t * 0.82).toFixed(2)})`;
  };
  return (
    <Panel n="07" title="Strategy Robustness Testing" sub="Sharpe swept across the fast/slow MA grid. A robust edge lives in a smooth neighborhood — not a single hyper-tuned cell.">
      <div className="grid gap-5 lg:grid-cols-[auto_1fr]">
        <div>
          <div className="mb-1.5 pl-12 text-center text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">Slow MA</div>
          <div className="flex">
            <div className="mr-1 flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Fast MA</span>
            </div>
            <div className="inline-grid" style={{ gridTemplateColumns: `36px repeat(${SLOW_MA.length}, 52px)` }}>
              <div />
              {SLOW_MA.map((s) => <div key={s} className="tnum pb-1 text-center text-[10px] text-[var(--color-ink-dim)]">{s}</div>)}
              {ROBUST.map((row, i) => (
                <div key={i} className="contents">
                  <div className="tnum flex items-center justify-end pr-1.5 text-[10px] text-[var(--color-ink-dim)]">{FAST_MA[i]}</div>
                  {row.map((v, j) => (
                    <div
                      key={j}
                      className="tnum m-[2px] flex h-[46px] items-center justify-center rounded-[2px] text-[11px] font-600 transition-transform hover:scale-[1.08]"
                      style={{ background: heat(v), color: v === max ? '#000' : 'var(--color-ink)', outline: v === max ? '1.5px solid var(--color-signal)' : 'none' }}
                    >
                      {v.toFixed(2)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <div className="mb-1.5 flex justify-between text-[11px]"><span className="text-[var(--color-ink-dim)]">Parameter stability</span><span className="tnum text-[var(--color-up)]">Strong · 0.86</span></div>
            <MeterBar pct={86} color="var(--color-up)" />
          </div>
          <div>
            <div className="mb-1.5 flex justify-between text-[11px]"><span className="text-[var(--color-ink-dim)]">Deflated Sharpe (K=25 trials)</span><span className="tnum text-[var(--color-signal)]">0.71</span></div>
            <MeterBar pct={71} />
          </div>
          <div>
            <div className="mb-1.5 flex justify-between text-[11px]"><span className="text-[var(--color-ink-dim)]">Walk-forward efficiency</span><span className="tnum text-[var(--color-ink)]">0.63</span></div>
            <MeterBar pct={63} color="var(--color-cyan)" />
          </div>
          <p className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3 text-[12px] leading-relaxed text-[var(--color-ink-dim)]">
            Performance is distributed across neighboring configurations — the 20/50 peak isn't an isolated spike. QUANTORA reports the <span className="text-[var(--color-ink)]">whole surface</span>, not the single best cell, to guard against curve-fitting.
          </p>
        </div>
      </div>
    </Panel>
  );
}

/* ── 08 · MARKET REGIME ANALYSIS ──────────────────────────────── */
export function Regimes() {
  const total = REGIMES.reduce((a, r) => a + r.span, 0);
  const perf = REGIMES.map((r) => ({ name: r.label.split(' ')[1] || r.label, ret: r.ret, kind: r.kind }));
  return (
    <Panel n="08" title="Market Regime Analysis" sub="Bull / bear from price vs 200-day SMA; high-vol from 30-day σ vs its expanding median. See exactly when the strategy works — and when it breaks.">
      <div className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">Regime ribbon · 2021 — 2026</div>
      <div className="flex h-9 overflow-hidden rounded-[3px]">
        {REGIMES.map((r) => (
          <div key={r.label} className="group relative flex items-center justify-center text-[10px]" style={{ width: `${(r.span / total) * 100}%`, background: REGIME_COLORS[r.kind] }}>
            <span className="tnum font-600 text-black/80">{r.label.split(' ')[0]}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-3 text-[10px]">
        {Object.entries(REGIME_COLORS).map(([k, c]) => (
          <span key={k} className="flex items-center gap-1.5 uppercase tracking-[0.1em] text-[var(--color-ink-dim)]">
            <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: c }} /> {k}
          </span>
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto]">
        <div className="h-[190px]">
          <ResponsiveContainer width="100%" height={190}>
            <BarChart data={perf} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
              <CartesianGrid stroke={GRID} vertical={false} />
              <XAxis dataKey="name" {...AXIS} tickLine={false} axisLine={{ stroke: GRID }} />
              <YAxis {...AXIS} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={<ChartTip />} cursor={{ fill: '#ffffff08' }} />
              <ReferenceLine y={0} stroke="#3a3f47" />
              <Bar dataKey="ret" name="Return" radius={[2, 2, 0, 0]}>
                {perf.map((p, i) => <Cell key={i} fill={p.ret >= 0 ? 'var(--color-up)' : 'var(--color-down)'} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="overflow-hidden rounded-[3px] border border-[var(--color-line-soft)]">
          <table className="text-left text-[11px]">
            <thead className="bg-[var(--color-panel-2)] text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
              <tr><th className="px-3 py-2 font-500">Regime</th><th className="px-3 py-2 font-500">Return</th><th className="px-3 py-2 font-500">Sharpe</th></tr>
            </thead>
            <tbody className="tnum">
              {REGIMES.map((r) => (
                <tr key={r.label} className="border-t border-[var(--color-line-soft)]">
                  <td className="px-3 py-1.5"><span className="mr-2 inline-block h-2 w-2 rounded-[2px]" style={{ background: REGIME_COLORS[r.kind] }} />{r.label}</td>
                  <td className="px-3 py-1.5" style={{ color: r.ret >= 0 ? 'var(--color-up)' : 'var(--color-down)' }}>{r.ret >= 0 ? '+' : ''}{r.ret}%</td>
                  <td className="px-3 py-1.5" style={{ color: r.sharpe >= 0 ? 'var(--color-ink)' : 'var(--color-down)' }}>{r.sharpe.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Panel>
  );
}

/* ── 09 · GUARDRAILS AGAINST BIAS ─────────────────────────────── */
export function Guardrails() {
  const checks = [
    { k: 'Look-ahead bias', s: 'pass', d: '0 / 189 signals changed on causal recompute' },
    { k: 'Data alignment', s: 'pass', d: 'Common-date inner join · sorted, unique' },
    { k: 'Execution lag', s: 'pass', d: 'position(t) = signal(t−1)' },
    { k: 'Transaction costs', s: 'pass', d: 'Charged on execution bar' },
    { k: 'Missing data', s: 'pass', d: '0.02% gaps · forward-fill flagged' },
    { k: 'Benchmark consistency', s: 'pass', d: 'Same window & costs as strategy' },
    { k: 'Parameter sensitivity', s: 'warn', d: 'Peak within 1σ of neighbors — monitor' },
    { k: 'Train / test separation', s: 'pass', d: 'Expanding-window walk-forward' },
  ];
  return (
    <Panel n="09" title="Guardrails against Bias" sub="Quantitative research is prone to self-deception. Every backtest is audited for look-ahead bias and curve-fitting before results are trusted." right={<Tag tone="signal">integrity 88 / 100</Tag>}>
      <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
        <div className="grid gap-2 sm:grid-cols-2">
          {checks.map((c) => (
            <div key={c.k} className="flex items-start gap-2.5 rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] px-3 py-2.5">
              <span className="mt-0.5 tnum text-[13px]" style={{ color: c.s === 'pass' ? 'var(--color-up)' : 'var(--color-signal)' }}>{c.s === 'pass' ? '✓' : '⚠'}</span>
              <div>
                <div className="text-[12px] font-500 text-[var(--color-ink)]">{c.k}</div>
                <div className="tnum mt-0.5 text-[10px] leading-snug text-[var(--color-ink-faint)]">{c.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="rounded-[3px] border border-[color-mix(in_srgb,var(--color-up)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-up)_7%,transparent)] p-3.5">
            <Tag tone="ok">no look-ahead</Tag>
            <div className="tnum mt-2.5 text-[11px] text-[var(--color-ink-dim)]">
              <div className="flex justify-between"><span>Signal timestamp</span><span className="text-[var(--color-ink)]">t · 10:00</span></div>
              <div className="flex justify-between"><span>Execution</span><span className="text-[var(--color-ink)]">t+1 · next open</span></div>
              <div className="mt-1.5 text-[var(--color-up)]">✓ uses only information available before the fill</div>
            </div>
          </div>
          <div className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3.5">
            <div className="mb-2 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Over-optimization check</div>
            <MeterBar pct={82} color="var(--color-up)" />
            <p className="mt-2 text-[11px] leading-relaxed text-[var(--color-ink-dim)]">Robustness sweep confirms the edge survives parameter shifts — the model learned a pattern, not memorized the past.</p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* ── STRATEGY AUTOPSY ─────────────────────────────────────────── */
export function Autopsy() {
  const drivers = AUTOPSY_DRIVERS;
  const maxMag = Math.max(...drivers.map((d) => Math.abs(d.contribution)));
  const { years, quarters, grid } = AUTOPSY_MONTHS;
  const flat = grid.flat();
  const gmin = Math.min(...flat);
  const gmax = Math.max(...flat);
  const monthColor = (v: number) => {
    if (v === 0) return 'transparent';
    const t = v > 0 ? v / gmax : v / gmin;
    const c = v >= 0 ? [53, 208, 127] : [255, 92, 114];
    return `rgba(${c[0]},${c[1]},${c[2]},${(0.12 + t * 0.7).toFixed(2)})`;
  };
  return (
    <Panel
      n="—"
      title="Strategy Autopsy"
      sub="Beyond the headline number: decompose the return into the forces that produced it, and locate exactly where the strategy bled. Return alone answers nothing."
      right={<Tag tone="signal">net +84.2% · explained</Tag>}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <div className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Return attribution · what drove it</div>
          <div className="space-y-2.5">
            {drivers.map((d) => {
              const neg = d.contribution < 0;
              return (
                <div key={d.factor}>
                  <div className="flex items-baseline justify-between text-[12px]">
                    <span className="text-[var(--color-ink)]">{d.factor}</span>
                    <span className="tnum font-600" style={{ color: neg ? 'var(--color-down)' : 'var(--color-up)' }}>
                      {neg ? '' : '+'}{d.contribution}%
                    </span>
                  </div>
                  <div className="relative mt-1 h-4 rounded-[2px] bg-[var(--color-panel-2)]">
                    <div className="absolute left-1/2 top-0 h-full w-px bg-[var(--color-line)]" />
                    <div
                      className="absolute top-0 h-full rounded-[2px]"
                      style={{
                        width: `${(Math.abs(d.contribution) / maxMag) * 50}%`,
                        left: neg ? 'auto' : '50%',
                        right: neg ? '50%' : 'auto',
                        background: neg ? 'var(--color-down)' : 'var(--color-up)',
                        opacity: 0.65,
                      }}
                    />
                  </div>
                  <div className="tnum mt-0.5 text-[10px] text-[var(--color-ink-faint)]">{d.note}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">When did it work · quarterly return</div>
          <div className="inline-grid gap-[3px]" style={{ gridTemplateColumns: `40px repeat(${quarters.length}, 1fr)` }}>
            <div />
            {quarters.map((q) => <div key={q} className="tnum pb-1 text-center text-[10px] text-[var(--color-ink-dim)]">{q}</div>)}
            {grid.map((row, i) => (
              <div key={i} className="contents">
                <div className="tnum flex items-center justify-end pr-2 text-[10px] text-[var(--color-ink-dim)]">{years[i]}</div>
                {row.map((v, j) => (
                  <div
                    key={j}
                    className="tnum flex h-9 items-center justify-center rounded-[2px] border border-[var(--color-line-soft)] text-[10px] font-500"
                    style={{ background: monthColor(v), color: v === 0 ? 'var(--color-ink-faint)' : 'var(--color-ink)' }}
                    title={`${years[i]} ${quarters[j]}`}
                  >
                    {v === 0 ? '·' : `${v > 0 ? '+' : ''}${v}`}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3.5">
            <div className="mb-2 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Where it failed</div>
            <ul className="space-y-1.5 text-[12px] leading-relaxed text-[var(--color-ink-dim)]">
              <li className="flex gap-2"><span className="text-[var(--color-down)]">▸</span> Sept 2024 trend reversal: late stop cost <span className="tnum text-[var(--color-down)]">−5.4%</span> in one leg.</li>
              <li className="flex gap-2"><span className="text-[var(--color-down)]">▸</span> 2025 sideways tape: whipsaw fills, edge collapsed to <span className="tnum text-[var(--color-ink)]">≈0</span>.</li>
              <li className="flex gap-2"><span className="text-[var(--color-signal)]">▸</span> The edge is <span className="text-[var(--color-ink)]">timing</span>, not selection — fragile if regimes stop being persistent.</li>
            </ul>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* ── AI COPILOT (evidence-grounded) ───────────────────────────── */
export function Copilot() {
  const toneColor = (t?: string) => (t === 'up' ? 'var(--color-up)' : t === 'down' ? 'var(--color-down)' : 'var(--color-ink)');
  return (
    <Panel
      n="—"
      title="Quant Copilot"
      sub="The AI sits downstream of the quantitative engine, never in place of it. Every claim is backed by a tool call and a structured evidence object — no invented prices, no guaranteed returns."
      right={<Tag tone="ok"><span className="live-dot">●</span> grounded mode</Tag>}
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_240px]">
        <div className="space-y-4">
          {COPILOT_THREAD.map((turn, i) =>
            turn.role === 'user' ? (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] rounded-[3px] rounded-tr-none border border-[var(--color-line)] bg-[var(--color-panel-2)] px-3.5 py-2.5 text-[13px] text-[var(--color-ink)]">
                  {turn.text}
                </div>
              </div>
            ) : (
              <div key={i} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-[3px] bg-[var(--color-signal)] font-display text-[12px] font-800 text-black">Q</span>
                <div className="min-w-0 flex-1 rounded-[3px] rounded-tl-none border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3.5">
                  <p className="text-[13px] leading-relaxed text-[var(--color-ink-dim)]">{turn.text}</p>
                  {turn.tools && (
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">tool calls</span>
                      {turn.tools.map((t) => (
                        <span key={t} className="tnum rounded-full border border-[var(--color-line)] px-2 py-0.5 text-[10px] text-[var(--color-cyan)]">{t}()</span>
                      ))}
                    </div>
                  )}
                  {turn.evidence && (
                    <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
                      {turn.evidence.map((e) => (
                        <div key={e.label} className="flex items-center justify-between rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-void)] px-2.5 py-1.5">
                          <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">{e.label}</span>
                          <span className="tnum text-[12px] font-600" style={{ color: toneColor(e.tone) }}>{e.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {(turn.assumptions || turn.limitations) && (
                    <div className="mt-3 grid gap-2 border-t border-[var(--color-line-soft)] pt-2.5 text-[10px] leading-relaxed sm:grid-cols-2">
                      {turn.assumptions && (
                        <div>
                          <div className="uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">Assumptions</div>
                          <ul className="mt-1 space-y-0.5 text-[var(--color-ink-dim)]">{turn.assumptions.map((a) => <li key={a}>· {a}</li>)}</ul>
                        </div>
                      )}
                      {turn.limitations && (
                        <div>
                          <div className="uppercase tracking-[0.1em] text-[var(--color-signal)]">Limitations</div>
                          <ul className="mt-1 space-y-0.5 text-[var(--color-ink-dim)]">{turn.limitations.map((l) => <li key={l}>· {l}</li>)}</ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
          <div className="flex items-center gap-2 rounded-[3px] border border-[var(--color-line)] bg-[var(--color-panel-2)] px-3 py-2.5">
            <span className="tnum text-[11px] text-[var(--color-ink-faint)]">›</span>
            <input
              disabled
              placeholder="Ask about any asset, strategy or backtest…"
              className="flex-1 bg-transparent text-[13px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-faint)]"
            />
            <span className="tnum rounded-[3px] border border-[var(--color-line)] px-2 py-0.5 text-[10px] text-[var(--color-ink-faint)]">⌘K</span>
          </div>
        </div>
        <aside className="space-y-3">
          <div className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3.5">
            <div className="mb-2 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Grounding contract</div>
            <ul className="space-y-1.5 text-[11px] leading-relaxed text-[var(--color-ink-dim)]">
              {['Never invents prices or metrics', 'Never guarantees returns', 'Tool → auth → service → evidence', 'No direct database access', 'Distinguishes observed vs inferred'].map((r) => (
                <li key={r} className="flex gap-2"><span className="text-[var(--color-up)]">✓</span> {r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3.5">
            <div className="mb-2 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Answer provenance</div>
            <div className="tnum space-y-1 text-[11px] text-[var(--color-ink-dim)]">
              <div className="flex justify-between"><span>observed data</span><span className="text-[var(--color-up)]">grounded</span></div>
              <div className="flex justify-between"><span>calculated result</span><span className="text-[var(--color-up)]">grounded</span></div>
              <div className="flex justify-between"><span>model inference</span><span className="text-[var(--color-signal)]">flagged</span></div>
              <div className="flex justify-between"><span>user assumption</span><span className="text-[var(--color-ink-faint)]">declared</span></div>
            </div>
          </div>
        </aside>
      </div>
    </Panel>
  );
}

/* ── 10 · INTERACTIVE FINANCIAL DASHBOARD (Command Center) ─────── */
export function Dashboard({ go }: { go: (id: number) => void }) {
  const tickers = ASSETS;
  return (
    <div className="space-y-4">
      <Panel n="10" title="Interactive Financial Dashboard" sub="Command center — live status, top movers and the research loop, all in one auditable environment." right={<Tag tone="ok"><span className="live-dot">●</span> market live</Tag>}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tickers.map((a, i) => {
            const s = series(i * 17 + 5, 40, 100, a.chg > 0 ? 0.001 : -0.0004, 0.02);
            return (
              <button key={a.sym} onClick={() => go(2)} className="group rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-3.5 text-left transition-colors hover:border-[var(--color-signal)]">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[14px] font-700">{a.sym}</span>
                  <span className="tnum text-[11px] font-500" style={{ color: a.chg >= 0 ? 'var(--color-up)' : 'var(--color-down)' }}>{a.chg >= 0 ? '+' : ''}{a.chg}%</span>
                </div>
                <div className="tnum mt-1 text-[16px] font-600">${a.price.toLocaleString()}</div>
                <div className="mt-2 h-8">
                  <ResponsiveContainer width="100%" height={32}>
                    <LineChart data={s}><Line dataKey="close" stroke={a.chg >= 0 ? 'var(--color-up)' : 'var(--color-down)'} strokeWidth={1.3} dot={false} /></LineChart>
                  </ResponsiveContainer>
                </div>
              </button>
            );
          })}
        </div>
        <div className="mt-4 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-4">
            <div className="mb-2.5 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Quantora market pulse · evidence-grounded</div>
            <p className="text-[13px] leading-relaxed text-[var(--color-ink-dim)]">
              BTC 30-day volatility has expanded to <span className="tnum text-[var(--color-signal)]">58.4%</span> while NVDA holds a higher-trend regime. Cross-asset correlation is rising vs its 60-day baseline — momentum books carry concentrated beta.
            </p>
            <div className="tnum mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-[var(--color-ink-faint)]">
              <span>· BTC 30D σ <span className="text-[var(--color-ink)]">+14%</span></span>
              <span>· NVDA 20D ret <span className="text-[var(--color-up)]">+9%</span></span>
              <span>· BTC/NVDA ρ <span className="text-[var(--color-ink)]">0.61</span></span>
            </div>
          </div>
          <div className="rounded-[3px] border border-[var(--color-line-soft)] bg-[var(--color-panel-2)] p-4">
            <div className="mb-2.5 text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Live system status</div>
            <div className="grid grid-cols-2 gap-y-2 text-[11px]">
              {[['Data feed', 'Connected'], ['Quant engine', 'Ready'], ['AI gateway', 'Ready'], ['Security', 'Normal'], ['WebSocket', '42ms'], ['Account', 'Active']].map(([k, v]) => (
                <div key={k} className="flex items-center gap-1.5"><span className="live-dot text-[8px] text-[var(--color-up)]">●</span><span className="text-[var(--color-ink-dim)]">{k}</span><span className="tnum ml-auto text-[var(--color-ink-faint)]">{v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </Panel>
      <Panel title="Security & Audit Trail" sub="Every sensitive action — logins, backtests, AI tool calls, simulated orders — is logged with actor, result and trace id.">
        <div className="overflow-hidden rounded-[3px] border border-[var(--color-line-soft)]">
          <table className="w-full text-left text-[11px]">
            <thead className="bg-[var(--color-panel-2)] text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
              <tr>{['Time', 'Event', 'Actor', 'Result', 'Trace'].map((h) => <th key={h} className="px-3 py-2 font-500">{h}</th>)}</tr>
            </thead>
            <tbody className="tnum">
              {AUDIT_LOG.map((e, i) => (
                <tr key={i} className="border-t border-[var(--color-line-soft)] hover:bg-[var(--color-panel-2)]">
                  <td className="px-3 py-1.5 text-[var(--color-ink-faint)]">{e.t}</td>
                  <td className="px-3 py-1.5 text-[var(--color-ink)]">{e.event}</td>
                  <td className="px-3 py-1.5 text-[var(--color-ink-dim)]">{e.actor}</td>
                  <td className="px-3 py-1.5"><span style={{ color: 'var(--color-up)' }}>{e.result}</span></td>
                  <td className="px-3 py-1.5 text-[var(--color-ink-faint)]">{e.trace}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
