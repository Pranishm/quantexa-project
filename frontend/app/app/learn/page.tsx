"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

interface CurriculumPath {
  id: string;
  title: string;
  desc: string;
  modulesCount: number;
  completedCount: number;
  level: "Fundamental" | "Intermediate" | "Advanced";
}

const CURRICULUM_PATHS: CurriculumPath[] = [
  {
    id: "p1",
    title: "Quantitative Foundations & Time-Series Statistics",
    desc: "Geometric mean returns, annualization conventions (N=252 vs N=365), Sharpe & Sortino derivations, and log normality assumptions.",
    modulesCount: 6,
    completedCount: 6,
    level: "Fundamental",
  },
  {
    id: "p2",
    title: "Technical & Statistical Signal Engineering",
    desc: "Mathematical lag in simple vs exponential moving averages, RSI boundaries, Bollinger volatility bandwidth, and Volume-Weighted Average Price (VWAP).",
    modulesCount: 8,
    completedCount: 5,
    level: "Intermediate",
  },
  {
    id: "p3",
    title: "Backtest Fallacies & Integrity Verification",
    desc: "Look-ahead bias, data leakage in expanding windows, survivorship bias, execution slippage, and walk-forward out-of-sample testing.",
    modulesCount: 7,
    completedCount: 4,
    level: "Intermediate",
  },
  {
    id: "p4",
    title: "Macro Regime Analysis & Tail-Risk Hedging",
    desc: "Markov switching models, Gaussian mixture clustering, dynamic volatility regime conditioning, and asymmetric tail-risk containment.",
    modulesCount: 5,
    completedCount: 2,
    level: "Advanced",
  },
];

export default function LearnAcademyPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">QUANTITATIVE ACADEMY</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Institutional academic curriculum covering financial econometrics, execution modeling, and portfolio theory.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/app/learn/challenges"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#101318] hover:bg-[#151920] border border-[#20252C] rounded text-xs text-[#F4F5F7] transition-colors"
          >
            <span>Research Challenges</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7868FF]" />
          </Link>
        </div>
      </div>

      {/* Progress Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#20252C] rounded-md bg-[#080A0D] divide-x divide-y sm:divide-y-0 divide-[#20252C] text-xs font-mono">
        <div className="p-3.5">
          <div className="text-[10px] text-[#68717C] font-sans">Modules Completed</div>
          <div className="text-xl font-bold text-[#36C98F] mt-1">17 of 26</div>
          <div className="text-[10px] text-[#68717C] mt-0.5">65.4% Curriculum Progress</div>
        </div>
        <div className="p-3.5">
          <div className="text-[10px] text-[#68717C] font-sans">Active Track</div>
          <div className="text-xl font-bold text-[#F4F5F7] mt-1">Integrity Auditing</div>
          <div className="text-[10px] text-[#68717C] mt-0.5">Module 3.5 in progress</div>
        </div>
        <div className="p-3.5">
          <div className="text-[10px] text-[#68717C] font-sans">Laboratory Hours</div>
          <div className="text-xl font-bold text-[#F4F5F7] mt-1">42.5 hrs</div>
          <div className="text-[10px] text-[#68717C] mt-0.5">Verified simulation time</div>
        </div>
      </div>

      {/* Curriculum Tracks */}
      <div className="space-y-4">
        {CURRICULUM_PATHS.map((path) => (
          <div
            key={path.id}
            className="p-5 rounded-md border border-[#20252C] bg-[#0B0D10] space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase bg-[#101318] border border-[#20252C] text-[#7868FF] px-2 py-0.5 rounded">
                    {path.level}
                  </span>
                  <h3 className="text-sm font-semibold text-[#F4F5F7]">{path.title}</h3>
                </div>
                <p className="text-xs text-[#A8AFB8] mt-1 leading-relaxed max-w-3xl">
                  {path.desc}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-mono text-[#F4F5F7] font-semibold">
                  {path.completedCount} / {path.modulesCount}
                </span>
                <div className="text-[10px] text-[#68717C]">Modules Completed</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 w-full bg-[#101318] rounded overflow-hidden">
              <div
                style={{ width: `${(path.completedCount / path.modulesCount) * 100}%` }}
                className={`h-full ${
                  path.completedCount === path.modulesCount ? "bg-[#36C98F]" : "bg-[#7868FF]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
