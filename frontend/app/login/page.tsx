"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, Lock, Wallet, Shield, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { useAuthStore } from "@/lib/auth/store";
import { useWorkspace } from "@/components/context/workspace-context";
import { MarketCore3D } from "@/components/landing/market-core-3d";

export default function LoginPage() {
  const router = useRouter();
  const { loginAsDemo } = useAuthStore();
  const { setRole, setMode } = useWorkspace();
  const [selectedRole, setSelectedRole] = useState<"trader" | "admin">("trader");
  const [email, setEmail] = useState("trader.desk@quantora.io");
  const [password, setPassword] = useState("••••••••••••");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [activeSessionLaunching, setActiveSessionLaunching] = useState<string | null>(null);

  // 1-Click Instant Split Account Session Dispatch (No credential questions asked)
  const launchSplitSession = (role: "trader" | "admin") => {
    setActiveSessionLaunching(role);
    setLoading(true);
    setTimeout(() => {
      if (role === "trader") {
        loginAsDemo("trader");
        setRole("trader");
        setMode("TRADING");
        router.push("/app/trade/paper");
      } else {
        loginAsDemo("admin");
        setRole("admin");
        setMode("RESEARCH");
        router.push("/app/overview");
      }
    }, 280);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (selectedRole === "trader") {
        loginAsDemo("trader");
        setRole("trader");
        setMode("TRADING");
        router.push("/app/trade/paper");
      } else {
        loginAsDemo("admin");
        setRole("admin");
        setMode("RESEARCH");
        router.push("/app/overview");
      }
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)] flex items-center justify-center p-6 sm:p-12 font-sans selection:bg-[var(--accent)]/20">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* ── LEFT: 3D MARKET UNIVERSE + BRAND ──────────────────── */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_12px_var(--accent)]">
              Q
            </div>
            <span className="font-bold text-lg tracking-tight text-[var(--text-primary)]">
              QUANTORA
            </span>
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
              Institutional Terminal Access,<br />Split by Operational Role.
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md">
              Direct 1-click station entry for Quantitative Traders and System Administrators with zero credential friction.
            </p>
          </div>

          {/* 3D Market Core Animation */}
          <div className="w-full h-72 relative flex items-center justify-center pointer-events-none">
            <MarketCore3D />
          </div>
        </div>

        {/* ── RIGHT: CLAY SPLIT AUTHENTICATION PANEL ────────────── */}
        <div className="lg:col-span-5 space-y-4">
          <div className="clay-card p-6 sm:p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] space-y-5 shadow-2xl">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold px-2 py-0.5 rounded-full clay-recessed border border-[var(--accent)]/30">
                  INSTANT SESSION ACCESS
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">NO PASSWORDS REQUIRED</span>
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mt-1.5">
                Choose Station Session
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Instant split entry directly into your designated workspace.
              </p>
            </div>

            {/* ── SPLIT ACCOUNT SESSIONS (JUST TRADER & ADMIN) ───── */}
            <div className="grid grid-cols-1 gap-2.5">
              {/* TRADER SESSION BUTTON */}
              <button
                type="button"
                disabled={loading}
                onClick={() => launchSplitSession("trader")}
                className="w-full p-4 rounded-2xl clay-card bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[#00E599] hover:scale-[1.01] transition-all text-left flex items-center justify-between group cursor-pointer shadow-sm disabled:opacity-50"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00E599] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[#00E599] transition-colors">
                        Quantitative Trader Desk
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/15 text-[#00E599] font-bold">
                        $100K ACTIVE
                      </span>
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)]">
                      Paper execution, order book depth &amp; live tickers
                    </div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[#00E599] group-hover:border-[#00E599]/40 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>

              {/* ADMIN SESSION BUTTON */}
              <button
                type="button"
                disabled={loading}
                onClick={() => launchSplitSession("admin")}
                className="w-full p-4 rounded-2xl clay-card bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:scale-[1.01] transition-all text-left flex items-center justify-between group cursor-pointer shadow-sm disabled:opacity-50"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-[var(--accent)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        System Administrator
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--accent)]/15 text-[var(--accent)] font-bold">
                        GOVERNANCE
                      </span>
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)]">
                      Telemetry logs, engine diagnostics &amp; audits
                    </div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center pt-1">
              <div className="border-t border-[var(--border)] w-full" />
              <span className="bg-[var(--bg-surface)] px-3 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider shrink-0">
                or sign in with credentials
              </span>
            </div>

            {/* Standard Credential Form with Trader / Admin selector */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Role Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole("trader");
                    setEmail("trader.desk@quantora.io");
                  }}
                  className={`py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedRole === "trader"
                      ? "bg-[#00E599] text-[#05070C] shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Trader Role
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole("admin");
                    setEmail("admin.lead@quantora.io");
                  }}
                  className={`py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedRole === "admin"
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Admin Role
                </button>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-[var(--text-secondary)]">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <label className="text-[var(--text-secondary)]">Password</label>
                  <Link href="/forgot-password" className="text-[var(--accent)] hover:underline text-[10px]">
                    Forgot?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button flex items-center justify-center gap-2 hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer shadow-md"
              >
                <span>{loading ? "Authenticating Session..." : `Sign In as ${selectedRole === "trader" ? "Trader" : "Admin"} →`}</span>
              </button>
            </form>

            <div className="text-center text-xs text-[var(--text-secondary)] pt-1">
              Need a new account?{" "}
              <Link href="/signup" className="text-[var(--accent)] font-semibold hover:underline">
                Register station
              </Link>
            </div>

            <div className="pt-2 border-t border-[var(--border)] flex items-center justify-center gap-4 text-[10px] font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#00E599]" /> Split Authentication Active
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#00E599]" /> 256-Bit TLS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
