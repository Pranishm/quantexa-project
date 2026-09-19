"use client";

import { useState } from "react";
import { useAuthStore } from "@/lib/auth/store";
import {
  Shield,
  Users,
  Activity,
  Server,
  Key,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Search,
  Lock
} from "lucide-react";

export default function AdminConsolePage() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<"users" | "system" | "flags" | "audit">("users");

  const [usersList, setUsersList] = useState([
    { id: "usr_1", name: "Dr. Alexander Vance", email: "lead.researcher@quantora.ai", role: "pro_researcher", status: "Active", strategies: 14, backtests: 128 },
    { id: "usr_2", name: "Sujan (Researcher)", email: "sujan@example.com", role: "researcher", status: "Active", strategies: 4, backtests: 22 },
    { id: "usr_3", name: "Guest Session 941", email: "guest-941@preview.quantora.ai", role: "guest", status: "Demo", strategies: 0, backtests: 2 },
    { id: "usr_4", name: "Quantora Administrator", email: "admin@quantora.ai", role: "admin", status: "Superuser", strategies: 32, backtests: 412 },
  ]);

  if (user.role !== "admin") {
    return (
      <div className="p-8 max-w-lg mx-auto text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[var(--negative)]/15 text-[var(--negative)] flex items-center justify-center mx-auto clay-card">
          <Lock className="w-5 h-5" />
        </div>
        <h1 className="text-lg font-bold text-[var(--text-primary)]">Admin Console Restricted</h1>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          This system governance terminal requires Administrator credentials. You can switch your role to Administrator in the profile menu top-right.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1580px] mx-auto">
      {/* Header */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 clay-card">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Institutional Governance</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            System Administration & RBAC
          </h1>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Manage user roles, inspect audit logs, monitor quant execution workers, and control feature flags.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-[var(--positive)]/15 text-[var(--positive)] text-xs font-mono font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]" /> All Services Operational
          </span>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="flex items-center gap-1 border-b border-[var(--border)] pb-2 overflow-x-auto no-scrollbar text-xs">
        {[
          { id: "users", label: "User Management & RBAC", icon: Users },
          { id: "system", label: "System Health & Data Feeds", icon: Server },
          { id: "flags", label: "Feature Flags & Quotas", icon: Sliders },
          { id: "audit", label: "Security & Audit Logs", icon: Shield },
        ].map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === t.id
                  ? "bg-[var(--bg-surface)] text-[var(--accent)] clay-recessed-sm font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-4 clay-card">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              Enrolled Researchers & Access Tiers
            </div>
            <div className="text-xs text-[var(--text-muted)]">4 total users active</div>
          </div>

          <div className="overflow-x-auto">
            <table className="research-table">
              <thead>
                <tr>
                  <th>Researcher</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Strategies</th>
                  <th>Backtests</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {usersList.map((u) => (
                  <tr key={u.id}>
                    <td>
                      <div className="font-medium text-[var(--text-primary)]">{u.name}</div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono">{u.email}</div>
                    </td>
                    <td>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent)]">
                        {u.role}
                      </span>
                    </td>
                    <td>
                      <span className="text-[11px] text-[var(--positive)] flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]" /> {u.status}
                      </span>
                    </td>
                    <td className="font-mono">{u.strategies}</td>
                    <td className="font-mono">{u.backtests}</td>
                    <td>
                      <button
                        onClick={() => alert(`Inspecting permissions for ${u.name}`)}
                        className="px-2 py-1 rounded bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] border border-[var(--border)] text-[11px] text-[var(--text-secondary)] clay-button"
                      >
                        Edit Access
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* System Health Tab */}
      {activeTab === "system" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Live Market Normalizer", status: "Healthy", latency: "14ms", details: "BTC, SOL, GOLD, NVDA websocket synced" },
            { name: "FastAPI Quant Calculation Engine", status: "Healthy", latency: "38ms", details: "Regime 6-state matrix active" },
            { name: "AI Research Copilot Daemon", status: "Healthy", latency: "142ms", details: "Evidence generation pipeline online" },
          ].map((srv, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] space-y-2 clay-card">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--text-primary)]">{srv.name}</span>
                <span className="text-[10px] font-mono text-[var(--positive)] bg-[var(--positive)]/10 px-1.5 py-0.5 rounded">
                  {srv.status}
                </span>
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">{srv.details}</div>
              <div className="text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)]">
                Ping: {srv.latency}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Flags Tab */}
      {activeTab === "flags" && (
        <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card text-xs">
          <div className="font-semibold text-[var(--text-primary)] text-sm mb-2">Hackathon Feature Flags</div>
          {[
            { flag: "Full 3D Parameter Surface in Robustness Lab", active: true, desc: "Renders Three.js WebGL terrain with Sharpe/SMA axes" },
            { flag: "Cross-Asset 3D Relationship Network", active: true, desc: "Interactive point-light network for BTC/SOL/GOLD/NVDA" },
            { flag: "Walk-Forward Holdout Validation", active: true, desc: "In-sample vs out-of-sample data splitting" },
            { flag: "Strict Row-Level Security (RLS) Isolation", active: true, desc: "Ensures user strategies are strictly scoped by user_id" },
          ].map((f, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm">
              <div>
                <div className="font-medium text-[var(--text-primary)]">{f.flag}</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{f.desc}</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[var(--positive)]/15 text-[var(--positive)] font-mono font-semibold text-[10px]">
                ENABLED
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Audit Tab */}
      {activeTab === "audit" && (
        <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card text-xs">
          <div className="font-semibold text-[var(--text-muted)] uppercase tracking-wider">
            Security & Authentication Audit Stream
          </div>
          <div className="space-y-2 font-mono text-[11px]">
            <div className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)] flex justify-between">
              <span>[2026-03-19 22:15:02 UTC] AUTH_LOGIN_SUCCESS: usr_quant_01 (role: pro_researcher) from 127.0.0.1</span>
              <span className="text-[var(--positive)]">200 OK</span>
            </div>
            <div className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)] flex justify-between">
              <span>[2026-03-19 22:14:18 UTC] QUANT_BACKTEST_RUN: asset=BTC period=2018-2026 trades=184</span>
              <span className="text-[var(--positive)]">COMPLETED</span>
            </div>
            <div className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)] flex justify-between">
              <span>[2026-03-19 22:12:44 UTC] RLS_PERMISSION_CHECK: user_id=usr_quant_01 resource=strategy_autopsy</span>
              <span className="text-[var(--positive)]">AUTHORIZED</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
