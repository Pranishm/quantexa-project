"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Trophy, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  Zap,
  Play,
  RotateCcw
} from "lucide-react";
import { useWorkspace } from "@/components/context/workspace-context";

export function LearningWorkspace() {
  const { virtualBalance } = useWorkspace();
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const tutorPrompts = [
    "Explain Sharpe Ratio in simple terms",
    "Why did Bitcoin draw down 34% in 2024?",
    "What is the difference between SMA and EMA?",
    "How does regime switching prevent big losses?",
  ];

  const tutorAnswers: Record<string, string> = {
    "Explain Sharpe Ratio in simple terms":
      "The Sharpe Ratio measures return per unit of volatility above a risk-free rate. A ratio above 1.0 means you are compensated well for the bumpiness of the ride. In Quantora's demo, BTC's Sharpe is 1.42—solid for a trend system, but requires enduring drawdowns.",
    "Why did Bitcoin draw down 34% in 2024?":
      "During April to September 2024, the market shifted into a chop/range regime with negative drift (-0.0005) and elevated volatility (3.8% daily). Trend-following strategies trigger false breakouts in ranging markets, leading to repetitive stop-outs until the expansion phase resume.",
    "What is the difference between SMA and EMA?":
      "SMA (Simple Moving Average) weighs every day equally. EMA (Exponential Moving Average) weighs recent sessions exponentially higher. EMAs react faster to abrupt turning points, but generate more false whipsaws during consolidation.",
    "How does regime switching prevent big losses?":
      "Instead of applying one static indicator forever, the Regime Engine detects Volatility Spikes and Downward Drift, automatically de-leveraging or shifting capital into Gold/Cash before catastrophic drawdown occurs.",
  };

  return (
    <div className="space-y-6">
      {/* ── STUDENT WELCOME BANNER ─────────────────────────────── */}
      <div className="clay-card p-6 rounded-2xl border border-[var(--border)] relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Research Academy</span>
          </div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Good evening. Your quantitative learning lab is ready.
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Master the mathematical mechanics of systematic trading, portfolio construction, and risk management through hands-on simulations.
          </p>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block opacity-15 pointer-events-none">
          <BookOpen className="w-36 h-36 text-[var(--accent)]" />
        </div>
      </div>

      {/* ── PRIORITY STUDENT TRACKS ────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Continue Learning */}
        <div className="clay-card p-5 rounded-2xl border border-[var(--border)] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
              <span className="uppercase">CONTINUE LEARNING</span>
              <span className="text-[var(--accent)] font-bold">MODULE 04</span>
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              Understanding Drawdown & Recovery
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Why a 50% loss requires a 100% gain to break even, and how underwater curves reveal strategy risk.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>Progress</span>
              <span className="font-bold text-[var(--text-primary)]">72% complete</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--bg-recessed)] overflow-hidden">
              <div className="h-full bg-[var(--accent)] rounded-full transition-all" style={{ width: "72%" }} />
            </div>
            <Link
              href="/app/learn"
              className="mt-2 w-full py-2 px-3 rounded-xl bg-[var(--accent)] text-white text-xs font-medium clay-button flex items-center justify-center gap-1.5 hover:opacity-95 transition-opacity"
            >
              <span>Resume Lesson</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Today's Challenge */}
        <div className="clay-card p-5 rounded-2xl border border-[var(--border)] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
              <span className="uppercase">TODAY&apos;S CHALLENGE</span>
              <span className="text-[var(--positive)] font-bold">+150 XP</span>
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              BTC vs GOLD: Relative Drawdown
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Inspect 1-year historical data. Determine which asset had lower downside volatility during the Q3 chop regime.
            </p>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] text-xs font-mono flex items-center justify-between">
              <span className="text-[var(--text-muted)]">Target Asset Pair</span>
              <span className="font-bold text-[var(--text-primary)]">BTC / XAU</span>
            </div>
            <Link
              href="/app/research/backtest"
              className="w-full py-2 px-3 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] text-xs font-medium text-[var(--text-primary)] clay-button flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Launch Experiment in Chart</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Paper Portfolio Sandbox */}
        <div className="clay-card p-5 rounded-2xl border border-[var(--border)] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
              <span className="uppercase">PAPER PORTFOLIO</span>
              <span className="text-[var(--positive)] font-bold">VIRTUAL</span>
            </div>
            <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">
              ${virtualBalance.toLocaleString("en-US")}
            </div>
            <p className="text-xs text-[var(--positive)] font-mono font-medium mt-1 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+$4,820.00 (+4.82%) total paper gain</span>
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] text-[var(--text-muted)]">
              Safe sandbox environment with real tick simulations. Zero financial risk.
            </div>
            <Link
              href="/app/trade/paper"
              className="w-full py-2 px-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] text-xs font-medium text-[var(--text-primary)] clay-button flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Open Paper Terminal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE AI TUTOR SECTION ───────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: AI Tutor Prompts & Explanation (7 cols) */}
        <div className="lg:col-span-7 clay-card p-6 rounded-2xl border border-[var(--border)] space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">QUANTORA AI Quantitative Tutor</h3>
              <p className="text-[11px] text-[var(--text-muted)]">Ask questions grounded in the platform&apos;s real data engine.</p>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {tutorPrompts.map((q) => (
              <button
                key={q}
                onClick={() => setSelectedQuestion(q)}
                className={`p-3 rounded-xl text-left text-xs transition-all border ${
                  selectedQuestion === q
                    ? "bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--text-primary)] font-semibold shadow-sm"
                    : "clay-recessed bg-[var(--bg-recessed)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          {/* AI Response Card */}
          {selectedQuestion ? (
            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] space-y-2 animate-in fade-in">
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--accent)]">
                <span>ANALYZING PLATFORM DATA</span>
                <span>Deterministic 2026</span>
              </div>
              <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                {tutorAnswers[selectedQuestion]}
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl border border-dashed border-[var(--border)] text-center text-xs text-[var(--text-muted)]">
              Select a concept above to see an explanation derived from the Quantora demo dataset.
            </div>
          )}
        </div>

        {/* Right: Quick Concept Quiz (5 cols) */}
        <div className="lg:col-span-5 clay-card p-6 rounded-2xl border border-[var(--border)] space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] uppercase font-semibold">
              <HelpCircle className="w-4 h-4" />
              <span>Concept Check</span>
            </div>
            <h4 className="text-sm font-bold text-[var(--text-primary)] mt-2">
              If an asset drops from $100 to $70, what percentage gain is required to return to breakeven?
            </h4>

            <div className="space-y-2 mt-4">
              {[
                { id: 0, text: "30.0% gain" },
                { id: 1, text: "42.86% gain" },
                { id: 2, text: "50.0% gain" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setQuizAnswer(opt.id); setQuizSubmitted(false); }}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-mono transition-all border ${
                    quizAnswer === opt.id
                      ? "bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--text-primary)] font-bold"
                      : "clay-recessed bg-[var(--bg-recessed)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            {!quizSubmitted ? (
              <button
                disabled={quizAnswer === null}
                onClick={() => setQuizSubmitted(true)}
                className="w-full py-2.5 rounded-xl bg-[var(--accent)] text-white text-xs font-bold clay-button disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Submit Answer
              </button>
            ) : (
              <div className={`p-3 rounded-xl text-xs font-mono flex items-center gap-2 ${
                quizAnswer === 1
                  ? "bg-[var(--positive)]/15 text-[var(--positive)] border border-[var(--positive)]/30"
                  : "bg-[var(--negative)]/15 text-[var(--negative)] border border-[var(--negative)]/30"
              }`}>
                {quizAnswer === 1 ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Correct! ($30 recovery / $70 current price = 42.86%).</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Incorrect. The base is now $70, requiring a 42.86% gain.</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
