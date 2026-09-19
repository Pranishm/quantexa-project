"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-[#F4F5F7] flex items-center justify-center px-4 font-sans selection:bg-[#7868FF]/20 overflow-hidden">
      <div className="relative z-10 w-full max-w-[380px] bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-8 space-y-6 text-center clay-card">
        <div className="w-12 h-12 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/40 text-[var(--accent)] flex items-center justify-center mx-auto clay-card">
          <Mail className="w-5 h-5" />
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Verify your email</h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Please check your inbox to confirm your researcher access credentials.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/onboarding"
            className="w-full py-2.5 bg-[var(--accent)] text-white font-medium rounded-lg text-xs flex items-center justify-center gap-2 clay-button-primary"
          >
            <span>CONTINUE TO ONBOARDING</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
