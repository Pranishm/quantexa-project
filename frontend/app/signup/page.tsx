"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Wallet, Shield, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { useAuthStore } from "@/lib/auth/store";
import { useWorkspace, UserRole } from "@/components/context/workspace-context";

export default function SignupPage() {
  const router = useRouter();
  const { loginAsDemo } = useAuthStore();
  const { setRole, setMode } = useWorkspace();

  const [step, setStep] = useState<1 | 2>(1);
  const [purpose, setPurpose] = useState<"trader" | "admin">("trader");
  const [experienceTier, setExperienceTier] = useState<"intermediate" | "pro">("pro");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();

    // Map purpose and experience tier to platform role
    if (purpose === "trader") {
      setRole("trader");
      setMode("TRADING");
      loginAsDemo("trader");
      router.push("/app/trade/paper");
    } else {
      setRole("admin");
      setMode("RESEARCH");
      loginAsDemo("admin");
      router.push("/app/overview");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)] flex items-center justify-center p-6 font-sans selection:bg-[var(--accent)]/20">
      <div className="w-full max-w-lg clay-card p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] space-y-6 shadow-2xl">
        {/* Top brand */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_8px_var(--accent)]">
              Q
            </div>
            <span className="font-bold text-sm tracking-tight text-[var(--text-primary)]">QUANTORA</span>
          </Link>
          <div className="text-xs font-mono text-[var(--text-muted)]">Step {step} of 2</div>
        </div>

        {step === 1 ? (
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold px-2 py-0.5 rounded-full clay-recessed border border-[var(--accent)]/30">
                STATION REGISTRATION
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mt-2">
                Choose Station Persona
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Select your operational focus: Quantitative Trader or System Administrator.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: "trader",
                  label: "Quantitative Trader Desk",
                  desc: "$100,000 virtual sandbox, live order book depth, execution modeling, and sub-tick fee analytics.",
                  icon: Wallet,
                  badge: "$100K CAPITAL",
                  color: "text-[#00E599]",
                },
                {
                  id: "admin",
                  label: "System Administrator Terminal",
                  desc: "Platform governance, engine telemetry, cryptographic audit logs, and permission matrix controls.",
                  icon: Shield,
                  badge: "SUPERVISION",
                  color: "text-[var(--accent)]",
                },
              ].map((opt) => {
                const Icon = opt.icon;
                const isSel = purpose === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPurpose(opt.id as any)}
                    className={`w-full p-4 rounded-2xl text-left transition-all border flex items-start gap-3.5 cursor-pointer ${
                      isSel
                        ? "clay-card-elevated border-[#00E599] bg-[var(--bg-surface)] shadow-md"
                        : "clay-recessed bg-[var(--bg-recessed)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl shrink-0 ${isSel ? "bg-[#00E599] text-[#05070C]" : "bg-[var(--bg-surface)] text-[var(--text-muted)]"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-[var(--text-primary)] flex items-center justify-between">
                        <span>{opt.label}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-muted)] font-semibold">
                            {opt.badge}
                          </span>
                          {isSel && <CheckCircle2 className="w-4 h-4 text-[#00E599]" />}
                        </div>
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] mt-1 leading-relaxed">{opt.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-3 px-4 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-md"
            >
              <span>Continue to Tier &amp; Profile →</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleComplete} className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E599] font-bold px-2 py-0.5 rounded-full clay-recessed border border-[#00E599]/30">
                TIER &amp; CREDENTIALS
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mt-2">
                Experience Tier &amp; Setup
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Select whether you are an Intermediate Quant or Pro Institutional trader.
              </p>
            </div>

            {/* Experience Level: Intermediate vs Pro */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[var(--text-secondary)] uppercase">
                Select Experience Tier
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setExperienceTier("intermediate")}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    experienceTier === "intermediate"
                      ? "clay-card-elevated border-[#00E599] bg-[var(--bg-surface)] shadow-md"
                      : "clay-recessed bg-[var(--bg-recessed)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--text-primary)]">Intermediate Quant</span>
                    {experienceTier === "intermediate" && <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-1">
                    Standard technical toolkits, 13 indicators, $100k paper execution
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setExperienceTier("pro")}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    experienceTier === "pro"
                      ? "clay-card-elevated border-[#00E599] bg-[var(--bg-surface)] shadow-md"
                      : "clay-recessed bg-[var(--bg-recessed)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[var(--accent)]" /> Pro Institutional
                    </span>
                    {experienceTier === "pro" && <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-1">
                    Volumetric 3D manifolds, Markov regimes, Monte Carlo &amp; full AI
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[var(--text-secondary)]">Full Name</label>
              <input
                type="text"
                required
                placeholder="Alexander Vance"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[var(--text-secondary)]">Work Email</label>
              <input
                type="email"
                required
                placeholder="vance@quantora.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[var(--text-secondary)]">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-2.5 px-3 rounded-xl clay-button bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-2.5 px-4 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-md"
              >
                <span>Launch {purpose === "trader" ? "Trader Desk" : "Admin"} →</span>
              </button>
            </div>
          </form>
        )}

        <div className="text-center text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border)]">
          Already have an account?{" "}
          <Link href="/login" className="text-[var(--accent)] font-semibold hover:underline">
            Instant session sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
