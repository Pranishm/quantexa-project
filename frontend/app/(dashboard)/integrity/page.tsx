"use client";

import { Shield, ShieldCheck, ShieldAlert, AlertTriangle } from "lucide-react";

export default function IntegrityPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
            <Shield className="w-6 h-6 text-[var(--accent)]" />
            Guardrails Against Bias
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Detect look-ahead bias, curve-fitting, and data leakage before results reach the dashboard.
          </p>
        </div>
        <button className="clay-button px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold">
          Run Full Integrity Audit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Look-Ahead Bias */}
        <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--positive)]/20 flex items-center justify-center text-[var(--positive)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-[var(--text-primary)]">Look-Ahead Bias</h2>
              <div className="text-[10px] font-mono text-[var(--positive)] uppercase">Passed</div>
            </div>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            The engine verified that no future data (e.g., closing price of bar T) was used to generate a trading signal for bar T. Signals are correctly shifted to execute at the open of T+1.
          </p>
        </div>

        {/* Curve Fitting */}
        <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--warning)]/20 flex items-center justify-center text-[var(--warning)]">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-[var(--text-primary)]">Curve-Fitting</h2>
              <div className="text-[10px] font-mono text-[var(--warning)] uppercase">Warning</div>
            </div>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            The strategy has 5 customizable parameters. While Sharpe is high (1.68), the parameter dimensionality is high enough that the model may be memorizing historical noise rather than finding alpha.
          </p>
        </div>

        {/* Data Leakage */}
        <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--positive)]/20 flex items-center justify-center text-[var(--positive)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-[var(--text-primary)]">Data Leakage</h2>
              <div className="text-[10px] font-mono text-[var(--positive)] uppercase">Passed</div>
            </div>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            In-sample optimization data was strictly partitioned from out-of-sample walk-forward testing. No overlapping dates detected in the cross-validation splits.
          </p>
        </div>

      </div>

      <div className="clay-card rounded-2xl border border-[var(--border)] p-6 space-y-4">
        <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
          Out-of-Sample Walk-Forward Analysis
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          {["2021 (In-Sample)", "2022 (In-Sample)", "2023 (Out-of-Sample)", "2024 (Out-of-Sample)"].map((period, i) => (
             <div key={period} className="p-4 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-center space-y-1">
                <div className="text-[10px] text-[var(--text-muted)] font-mono">{period}</div>
                <div className={`font-bold text-lg font-mono ${i > 1 ? "text-[var(--warning)]" : "text-[var(--positive)]"}`}>
                  {i === 0 ? "2.14" : i === 1 ? "1.95" : i === 2 ? "0.85" : "0.72"}
                </div>
                <div className="text-[10px] text-[var(--text-secondary)] uppercase">Sharpe Ratio</div>
             </div>
          ))}
        </div>
        <div className="text-xs text-[var(--text-muted)] text-center pt-2">
          Note: Significant drop in performance during out-of-sample years strongly suggests curve-fitting on the training set.
        </div>
      </div>
    </div>
  );
}
