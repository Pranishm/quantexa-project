"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, BookOpen, FlaskConical, Wallet, Briefcase, CheckCircle2 } from "lucide-react";
import { useAuthStore } from "@/lib/auth/store";
import { useWorkspace, UserRole } from "@/components/context/workspace-context";

export default function SignupPage() {
  const router = useRouter();
  const { loginAsDemo } = useAuthStore();
  const { setRole, setMode } = useWorkspace();

  const [step, setStep] = useState<1 | 2>(1);
  const [purpose, setPurpose] = useState<"learning" | "research" | "paper" | "pro">("learning");
  const [experience, setExperience] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();

    // Map purpose to platform role
    let mappedRole: UserRole = "student";
    if (purpose === "learning") {
      mappedRole = "student";
      setMode("LEARNING");
    } else if (purpose === "research") {
      mappedRole = "researcher";
      setMode("RESEARCH");
    } else if (purpose === "paper") {
      mappedRole = "student";
      setMode("TRADING");
    } else if (purpose === "pro") {
      mappedRole = "pro";
      setMode("RESEARCH");
    }

    setRole(mappedRole);
    loginAsDemo(mappedRole === "pro" ? "pro_researcher" : mappedRole);
    router.push("/app/overview");
  };

  return (
    <div className="min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)] flex items-center justify-center p-6 font-sans selection:bg-[var(--accent)]/20">
      <div className="w-full max-w-lg clay-card p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] space-y-6 shadow-2xl">
        {/* Top brand */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs">
              Q
            </div>
            <span className="font-bold text-sm tracking-tight text-[var(--text-primary)]">QUANTORA</span>
          </Link>
          <div className="text-xs font-mono text-[var(--text-muted)]">Step {step} of 2</div>
        </div>

        {step === 1 ? (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Create your QUANTORA account</h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Tell us your primary goal so we can configure your initial workstation density.
              </p>
            </div>

            <div className="space-y-2.5">
              <label className="text-xs font-mono text-[var(--text-secondary)] uppercase">I am using QUANTORA for:</label>
              {[
                { id: "learning", label: "Learning & Education", desc: "Interactive modules, AI Tutor, guided charts, zero risk.", icon: BookOpen },
                { id: "research", label: "Quantitative Research", desc: "Backtesting, regime autopsy, factor models, parameter grids.", icon: FlaskConical },
                { id: "paper", label: "Paper Trading & Simulation", desc: "$100k virtual sandbox, live order book, execution modeling.", icon: Wallet },
                { id: "pro", label: "Professional Research Desk", desc: "Full terminal: 50x50 parameter meshes, Monte Carlo, API access.", icon: Briefcase },
              ].map((opt) => {
                const Icon = opt.icon;
                const isSel = purpose === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPurpose(opt.id as any)}
                    className={`w-full p-3.5 rounded-2xl text-left transition-all border flex items-start gap-3.5 ${
                      isSel
                        ? "clay-card-elevated border-[var(--accent)] bg-[var(--bg-surface)] shadow-md"
                        : "clay-recessed bg-[var(--bg-recessed)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <div className={`p-2 rounded-xl shrink-0 ${isSel ? "bg-[var(--accent)] text-white" : "bg-[var(--bg-surface)] text-[var(--text-muted)]"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-[var(--text-primary)] flex items-center justify-between">
                        <span>{opt.label}</span>
                        {isSel && <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{opt.desc}</div>
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
              <span>Continue →</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleComplete} className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Experience &amp; Profile</h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Customize your terminal layout and credentials.
              </p>
            </div>

            {/* Experience level */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[var(--text-secondary)] uppercase">Experience Level</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "beginner", label: "Beginner", desc: "Guided" },
                  { id: "intermediate", label: "Intermediate", desc: "Standard" },
                  { id: "advanced", label: "Advanced", desc: "Dense" },
                ].map((exp) => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setExperience(exp.id as any)}
                    className={`p-2.5 rounded-xl text-center border text-xs transition-all ${
                      experience === exp.id
                        ? "bg-[var(--accent)] text-white font-bold shadow-sm border-transparent"
                        : "clay-recessed bg-[var(--bg-recessed)] border-[var(--border)] text-[var(--text-secondary)]"
                    }`}
                  >
                    <div>{exp.label}</div>
                    <div className="text-[9px] opacity-75 font-mono">{exp.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[var(--text-secondary)]">Full Name</label>
              <input
                type="text"
                required
                placeholder="Dr. Alexander Vance"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[var(--text-secondary)]">Email Address</label>
              <input
                type="email"
                required
                placeholder="alexander@quantora.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[var(--text-secondary)]">Create Password</label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 px-3 rounded-xl clay-button bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 px-4 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-md"
              >
                <span>Launch Station →</span>
              </button>
            </div>
          </form>
        )}

        <div className="text-center text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border)]">
          Already have an account?{" "}
          <Link href="/login" className="text-[var(--accent)] font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
