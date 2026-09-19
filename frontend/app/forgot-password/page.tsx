"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-[#F4F5F7] flex items-center justify-center px-4 font-sans selection:bg-[#7868FF]/20 overflow-hidden">
      <div className="relative z-10 w-full max-w-[380px] bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-8 space-y-6 clay-card">
        <div className="text-center space-y-1">
          <Link href="/" className="inline-block text-base font-bold tracking-wider text-[var(--text-primary)]">
            QUANTORA
          </Link>
          <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">Reset credentials</h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Enter your institutional email to recover access
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-[var(--text-secondary)] mb-1 font-medium">Institutional Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="researcher@firm.com"
                className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-all clay-recessed-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[var(--text-primary)] hover:bg-[#FFFFFF] text-[var(--bg-root)] font-semibold rounded-lg text-xs transition-all clay-button"
            >
              SEND RECOVERY LINK
            </button>
          </form>
        ) : (
          <div className="text-center space-y-3 py-2">
            <CheckCircle2 className="w-8 h-8 text-[var(--positive)] mx-auto" />
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              If an account matches <span className="font-mono text-[var(--text-primary)]">{email}</span>, a secure recovery link has been dispatched.
            </p>
          </div>
        )}

        <div className="text-center text-xs pt-2 border-t border-[var(--border)]">
          <Link href="/login" className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
