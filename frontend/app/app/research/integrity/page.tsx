"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Shield, ArrowRight, CheckCircle2, AlertTriangle, AlertCircle, RefreshCw, Sliders } from "lucide-react";
import Link from "next/link";
import { marketHub, type AssetKey } from "@/lib/market-data-hub";
import {
  runBiasGuardrailsAudit,
  type BiasAuditReport,
  type GuardrailStatus
} from "@/lib/bias-guardrails";

export default function IntegrityDiagnosticPage() {
  const router = useRouter();
  const [asset, setAsset] = useState<AssetKey>("BTC");
  const [slippageBps, setSlippageBps] = useState<number>(3);
  const [commissionBps, setCommissionBps] = useState<number>(5);
  const [initialCapital, setInitialCapital] = useState<number>(100000);

  // Dynamically computed audit report based on actual configuration
  const auditReport: BiasAuditReport = useMemo(() => {
    return runBiasGuardrailsAudit(
      {
        asset,
        strategyId: "sma_cross",
        timeframe: "1Y",
        initialCapital,
        params: { fastPeriod: 20, slowPeriod: 50 },
        sizing: "fixed",
        commissionBps,
        slippageBps,
        spreadBps: 2,
      },
      undefined,
    );
  }, [asset, slippageBps, commissionBps, initialCapital]);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] font-mono">
              BACKTEST INTEGRITY &amp; BIAS GUARDRAILS
            </h1>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${
                auditReport.overallStatus === "PASS"
                  ? "bg-[var(--positive-bg)] text-[var(--positive)] border-[var(--positive-border)]"
                  : auditReport.overallStatus === "WARNING"
                  ? "bg-[var(--warning-bg)] text-[var(--warning)] border-[var(--warning-border)]"
                  : "bg-[var(--negative-bg)] text-[var(--negative)] border-[var(--negative-border)]"
              }`}
            >
              OVERALL: {auditReport.overallStatus}
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Automated diagnostic system inspecting simulation configurations for look-ahead bias, data leakage, and realistic cost assumptions.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/app/research/backtest"
            className="flex items-center gap-1.5 px-3 py-1.5 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] border border-[var(--border)] rounded-xl text-xs text-[var(--text-primary)] transition-colors font-semibold"
          >
            <span>Backtest Runner</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
          </Link>
        </div>
      </div>

      {/* Interactive Audit Calibration Controls (Rule 120) */}
      <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
          <div className="flex items-center gap-2 font-bold text-[var(--text-primary)]">
            <Sliders className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>AUDIT CONFIGURATION &amp; STRESS PARAMS</span>
          </div>
          <span className="text-[10px] text-[var(--text-muted)]">
            Adjusting parameters changes computed diagnostic statuses
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="block text-[var(--text-muted)] text-[10px] uppercase mb-1">Asset Tested</label>
            <select
              value={asset}
              onChange={(e) => setAsset(e.target.value as AssetKey)}
              className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] border border-[var(--border)] font-bold focus:outline-none"
            >
              <option value="BTC">BTC / USD</option>
              <option value="SOL">SOL / USD</option>
              <option value="GOLD">GOLD / USD</option>
              <option value="NVDA">NVDA Corp</option>
            </select>
          </div>

          <div>
            <label className="block text-[var(--text-muted)] text-[10px] uppercase mb-1">
              Modeled Slippage ({slippageBps} bps)
            </label>
            <input
              type="range"
              min="0"
              max="15"
              step="1"
              value={slippageBps}
              onChange={(e) => setSlippageBps(parseInt(e.target.value))}
              className="w-full clay-slider cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-[var(--text-muted)] text-[10px] uppercase mb-1">
              Commission Fee ({commissionBps} bps)
            </label>
            <input
              type="range"
              min="0"
              max="15"
              step="1"
              value={commissionBps}
              onChange={(e) => setCommissionBps(parseInt(e.target.value))}
              className="w-full clay-slider cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-[var(--text-muted)] text-[10px] uppercase mb-1">
              Capital Sizing ($)
            </label>
            <select
              value={initialCapital}
              onChange={(e) => setInitialCapital(parseInt(e.target.value))}
              className="w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] border border-[var(--border)] font-bold focus:outline-none"
            >
              <option value="100000">$100,000 (Institutional Normal)</option>
              <option value="1000000">$1,000,000 (Standard Fund)</option>
              <option value="25000000">$25,000,000 (Capacity Stress)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dynamically Computed Status Strip */}
      <div className="grid grid-cols-3 border border-[var(--border)] rounded-2xl bg-[var(--bg-surface)] divide-x divide-[var(--border)] text-xs font-mono clay-card">
        <div className="p-3.5 text-center">
          <div className="text-[10px] text-[var(--text-muted)] font-sans">Verified Checks</div>
          <div className="text-lg font-bold text-[var(--positive)] mt-0.5">{auditReport.passCount} PASS</div>
        </div>
        <div className="p-3.5 text-center">
          <div className="text-[10px] text-[var(--text-muted)] font-sans">Advisory Warnings</div>
          <div className="text-lg font-bold text-[var(--warning)] mt-0.5">{auditReport.warningCount} WARNING</div>
        </div>
        <div className="p-3.5 text-center">
          <div className="text-[10px] text-[var(--text-muted)] font-sans">Under Review</div>
          <div className="text-lg font-bold text-[var(--negative)] mt-0.5">{auditReport.reviewCount} REVIEW</div>
        </div>
      </div>

      {/* The Computed Diagnostic Checks */}
      <div className="space-y-3">
        {auditReport.checks.map((check) => (
          <div
            key={check.id}
            className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-2 text-xs clay-card"
          >
            <div className="flex items-center justify-between">
              <div className="font-bold text-sm text-[var(--text-primary)] font-mono">{check.name}</div>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                  check.status === "PASS"
                    ? "bg-[var(--positive-bg)] text-[var(--positive)] border-[var(--positive-border)]"
                    : check.status === "WARNING"
                    ? "bg-[var(--warning-bg)] text-[var(--warning)] border-[var(--warning-border)]"
                    : "bg-[var(--negative-bg)] text-[var(--negative)] border-[var(--negative-border)]"
                }`}
              >
                {check.status}
              </span>
            </div>

            <div className="text-[var(--text-secondary)] leading-relaxed">
              <strong className="text-[var(--text-primary)] font-mono">{check.headline}: </strong>
              {check.explanation}
            </div>

            {check.remediation && (
              <div className="p-2 rounded-xl bg-[var(--warning-bg)]/20 border border-[var(--warning-border)]/50 text-[var(--warning)] text-[11px] font-mono">
                <strong>Recommended Action: </strong>{check.remediation}
              </div>
            )}

            <div className="text-[11px] text-[var(--text-muted)] font-mono bg-[var(--bg-recessed)] p-2.5 rounded-xl border border-[var(--border)] flex justify-between">
              <span>Metric Value: <strong className="text-[var(--text-primary)]">{check.metricValue}</strong></span>
              <span>Quality Threshold: <strong>{check.threshold}</strong></span>
            </div>
          </div>
        ))}
      </div>

      {/* Formal Research Notice */}
      <div className="p-3.5 bg-[var(--bg-recessed)] border border-[var(--border)] rounded-2xl text-[11px] text-[var(--text-muted)] leading-relaxed font-mono">
        <strong className="text-[var(--text-secondary)]">Research Quality Safeguard Notice: </strong>
        {auditReport.disclaimer}
      </div>
    </div>
  );
}
