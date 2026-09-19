"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

interface Challenge {
  id: string;
  category: string;
  title: string;
  objective: string;
  status: "PASS" | "REVIEW" | "NOT_STARTED";
  difficulty: "Fundamental" | "Advanced" | "Institutional";
  estimatedTime: string;
  actionRoute: string;
}

const CHALLENGES: Challenge[] = [
  {
    id: "ch-1",
    category: "Integrity Verification",
    title: "Audit and Neutralize Look-Ahead Bias",
    objective: "Inspect historical feature engineering matrices and enforce strict T+1 pricing quote execution delay to eliminate survivorship and look-ahead contamination.",
    status: "PASS",
    difficulty: "Advanced",
    estimatedTime: "25 min",
    actionRoute: "/app/research/integrity",
  },
  {
    id: "ch-2",
    category: "Portfolio Sizing",
    title: "Implement Fractional Kelly Criterion Sizing",
    objective: "Calibrate position sizing rules from static 100% allocation to Half-Kelly with a 20% annual volatility target constraint.",
    status: "REVIEW",
    difficulty: "Institutional",
    estimatedTime: "40 min",
    actionRoute: "/app/research/strategy-lab",
  },
  {
    id: "ch-3",
    category: "Regime Classification",
    title: "Construct Hidden Markov Volatility Regime Classifier",
    objective: "Partition historical BTC price action into distinct volatility clusters and compare Sharpe efficiency during chop vs expansion.",
    status: "NOT_STARTED",
    difficulty: "Institutional",
    estimatedTime: "50 min",
    actionRoute: "/app/research/regimes",
  },
  {
    id: "ch-4",
    category: "Parameter Robustness",
    title: "Verify Surface Stability on 3D Moving Average Cross",
    objective: "Evaluate SMA 20–100 fast vs SMA 100–300 slow parameter space to verify the strategy does not reside on an isolated statistical peak.",
    status: "NOT_STARTED",
    difficulty: "Advanced",
    estimatedTime: "30 min",
    actionRoute: "/app/research/robustness",
  },
];

export default function ChallengesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">RESEARCH CHALLENGES</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Practical quantitative research scenarios to stress test your mathematical discipline, integrity verification, and modeling precision.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-[#68717C]">COMPLETED:</span>
          <span className="text-[11px] font-mono text-[#36C98F] bg-[#101318] border border-[#20252C] px-2 py-0.5 rounded">
            1 OF 4 VERIFIED
          </span>
        </div>
      </div>

      {/* Challenges List */}
      <div className="space-y-3">
        {CHALLENGES.map((ch) => (
          <div
            key={ch.id}
            className="p-4 rounded-md border border-[#20252C] bg-[#0B0D10] hover:border-[#303640] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-[#7868FF] bg-[#7868FF]/10 px-2 py-0.5 rounded">
                  {ch.category}
                </span>
                <span className="text-[10px] text-[#68717C] font-mono">• {ch.difficulty}</span>
                <span className="text-[10px] text-[#68717C] font-mono">• {ch.estimatedTime}</span>
              </div>
              <h3 className="text-sm font-semibold text-[#F4F5F7]">{ch.title}</h3>
              <p className="text-xs text-[#A8AFB8] leading-relaxed max-w-3xl">
                {ch.objective}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <div
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded inline-block ${
                    ch.status === "PASS"
                      ? "bg-[#36C98F]/15 text-[#36C98F] border border-[#36C98F]/30"
                      : ch.status === "REVIEW"
                      ? "bg-[#D8A94A]/15 text-[#D8A94A] border border-[#D8A94A]/30"
                      : "bg-[#151920] text-[#68717C] border border-[#20252C]"
                  }`}
                >
                  {ch.status}
                </div>
              </div>

              <Link
                href={ch.actionRoute}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#101318] hover:bg-[#151920] border border-[#20252C] hover:border-[#303640] rounded text-xs text-[#F4F5F7] transition-colors"
              >
                <span>Launch Lab</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#7868FF]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
