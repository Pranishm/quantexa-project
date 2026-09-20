"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { useAuthStore } from "@/lib/auth/store";
import { useWorkspace } from "@/components/context/workspace-context";
import { MarketCore3D } from "@/components/landing/market-core-3d";

export default function LoginPage() {
  const router = useRouter();
  const { loginAsDemo } = useAuthStore();
  const [email, setEmail] = useState("alexander.vance@quantora.io");
  const [password, setPassword] = useState("••••••••••••");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      loginAsDemo("pro_researcher");
      router.push("/app/overview");
    }, 400);
  };

  const handleGoogle = () => {
    setLoading(true);
    setTimeout(() => {
      loginAsDemo("pro_researcher");
      router.push("/app/overview");
    }, 400);
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
              Quantitative research,<br />without the noise.
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md">
              A unified quantitative environment for multi-asset stress testing, regime modeling, and risk attribution.
            </p>
          </div>

          {/* 3D Market Core */}
          <div className="w-full h-80 relative flex items-center justify-center pointer-events-none">
            <MarketCore3D />
          </div>
        </div>

        {/* ── RIGHT: CLAY AUTHENTICATION PANEL ─────────────────── */}
        <div className="lg:col-span-5">
          <div className="clay-card p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] space-y-5 shadow-2xl">
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Welcome back</h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Continue your research station.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--text-secondary)]">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                  placeholder="name@organization.com"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label className="text-[var(--text-secondary)]">Password</label>
                  <Link href="/forgot-password" className="text-[var(--accent)] hover:underline text-[11px]">
                    Forgot?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded border-[var(--border)] text-[var(--accent)] focus:ring-0 cursor-pointer"
                />
                <label htmlFor="remember" className="text-[var(--text-secondary)] cursor-pointer select-none">
                  Remember this device
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button flex items-center justify-center gap-2 hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer shadow-md"
              >
                <span>{loading ? "Authenticating..." : "Sign In →"}</span>
              </button>
            </form>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-[var(--border)] w-full" />
              <span className="bg-[var(--bg-surface)] px-3 text-[11px] font-mono text-[var(--text-muted)] shrink-0">
                or
              </span>
            </div>

            <button
              type="button"
              onClick={handleGoogle}
              className="w-full py-2.5 px-4 rounded-xl clay-button bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="text-center text-xs text-[var(--text-secondary)] pt-1">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[var(--accent)] font-semibold hover:underline">
                Create account
              </Link>
            </div>

            <div className="pt-2 border-t border-[var(--border)] flex items-center justify-center gap-4 text-[10px] font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[var(--positive)]" /> Secure Session
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[var(--positive)]" /> 256-Bit TLS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
