"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Users, 
  Cpu, 
  Database, 
  Activity, 
  DollarSign, 
  Lock, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCw
} from "lucide-react";

export function AdminWorkspace() {
  const [featureFlags, setFeatureFlags] = useState([
    { id: "ff_ai_voice", name: "AI Voice Hands-Free Assistant", enabled: true, role: "All Users" },
    { id: "ff_50x50_grid", name: "50x50 Robustness Parameter Mesh", enabled: true, role: "Pro Researcher" },
    { id: "ff_realtime_ws", name: "High-Frequency WebSocket Feed", enabled: false, role: "Institutional" },
    { id: "ff_auto_hedging", name: "Automated Tail-Risk Hedger", enabled: true, role: "Pro Researcher" },
  ]);

  const toggleFlag = (id: string) => {
    setFeatureFlags((prev) =>
      prev.map((f) => (f.id === id ? { ...f, enabled: !f.enabled } : f))
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Admin Summary Banner */}
      <div className="clay-card p-6 rounded-2xl border border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Quantora Governance Console</span>
          </div>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-1">
            System Infrastructure &amp; Security Administration
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Node status, API quotas, multi-tenant role permissions, and financial settlement logs.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--positive)] animate-pulse" />
          <span className="text-xs font-mono font-bold text-[var(--positive)]">ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>

      {/* Grid of Key Telemetry */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="clay-card p-4 rounded-xl border border-[var(--border)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Active Research Jobs</div>
          <div className="text-2xl font-bold font-mono text-[var(--text-primary)] mt-1">42</div>
          <div className="text-[10px] text-[var(--positive)] mt-1 flex items-center gap-1">
            <Cpu className="w-3 h-3" /> 8 Workers Running
          </div>
        </div>

        <div className="clay-card p-4 rounded-xl border border-[var(--border)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Active Platform Users</div>
          <div className="text-2xl font-bold font-mono text-[var(--text-primary)] mt-1">1,482</div>
          <div className="text-[10px] text-[var(--text-secondary)] mt-1 flex items-center gap-1">
            <Users className="w-3 h-3" /> 312 Students · 1,170 Quants
          </div>
        </div>

        <div className="clay-card p-4 rounded-xl border border-[var(--border)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">AI Token Utilization</div>
          <div className="text-2xl font-bold font-mono text-[var(--text-primary)] mt-1">68.4%</div>
          <div className="text-[10px] text-[var(--warning)] mt-1 flex items-center gap-1">
            <Activity className="w-3 h-3" /> 1.2M / 2.0M Quota
          </div>
        </div>

        <div className="clay-card p-4 rounded-xl border border-[var(--border)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Total Deposit Volume</div>
          <div className="text-2xl font-bold font-mono text-[var(--text-primary)] mt-1">₹4.82M</div>
          <div className="text-[10px] text-[var(--positive)] mt-1 flex items-center gap-1">
            <DollarSign className="w-3 h-3" /> 100% Reconciled
          </div>
        </div>
      </div>

      {/* Feature Flags & Audit Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Feature Flags (6 cols) */}
        <div className="lg:col-span-6 clay-card p-5 rounded-2xl border border-[var(--border)] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Dynamic Feature Flags
            </h3>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Hot Reload Enabled</span>
          </div>

          <div className="space-y-2.5">
            {featureFlags.map((flag) => (
              <div
                key={flag.id}
                className="p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">{flag.name}</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">{flag.role}</div>
                </div>
                <button
                  onClick={() => toggleFlag(flag.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    flag.enabled
                      ? "bg-[var(--positive)]/15 text-[var(--positive)] border border-[var(--positive)]/30"
                      : "bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border)]"
                  }`}
                >
                  {flag.enabled ? "ENABLED" : "DISABLED"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security Audit Log (6 cols) */}
        <div className="lg:col-span-6 clay-card p-5 rounded-2xl border border-[var(--border)] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Immutable Audit Stream
            </h3>
            <span className="text-[10px] font-mono text-[var(--positive)]">SHA-256 Verified</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {[
              { time: "18:02:14 UTC", event: "API Key Generated for Sub-Account #2041", type: "INFO" },
              { time: "17:58:33 UTC", event: "Role Escalation: User 'Dr. Vance' -> Pro Researcher", type: "SECURITY" },
              { time: "17:41:09 UTC", event: "50x50 Monte Carlo Grid Completed in 482ms", type: "SYSTEM" },
              { time: "17:15:22 UTC", event: "Paper Balance Reset to $100,000 for Student Demo", type: "INFO" },
            ].map((log, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">[{log.type}]</span>
                  <span className="text-[var(--text-secondary)]">{log.event}</span>
                </div>
                <span className="text-[var(--text-muted)] shrink-0 ml-2">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
