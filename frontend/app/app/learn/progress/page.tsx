"use client";

import { CheckCircle2, Clock, BookOpen, Award } from "lucide-react";
import Link from "next/link";

interface Competency {
  domain: string;
  modulesCompleted: number;
  totalModules: number;
  status: "COMPLETE" | "IN_PROGRESS" | "PLANNED";
  topics: string[];
}

const COMPETENCIES: Competency[] = [
  {
    domain: "Time-Series Econometrics & Returns",
    modulesCompleted: 6,
    totalModules: 6,
    status: "COMPLETE",
    topics: ["Log returns vs Simple returns", "Stationarity & Unit Root tests", "Autocorrelation & Heteroskedasticity", "Annualized volatility math (N=252 vs N=365)"],
  },
  {
    domain: "Backtesting Architecture & Execution Realism",
    modulesCompleted: 4,
    totalModules: 5,
    status: "IN_PROGRESS",
    topics: ["Point-in-time pricing quotes", "Bid-Ask spread modeling", "Participation slippage impact", "Corporate action restatement"],
  },
  {
    domain: "Regime-Conditioned Risk Management",
    modulesCompleted: 2,
    totalModules: 4,
    status: "IN_PROGRESS",
    topics: ["Gaussian Mixture Models", "Markov Switching Autoregression", "Conditional Sharpe attribution", "Tail risk & VaR decomposition"],
  },
  {
    domain: "Portfolio Construction & Sizing Models",
    modulesCompleted: 1,
    totalModules: 4,
    status: "IN_PROGRESS",
    topics: ["Fixed fractional sizing", "Inverse volatility weighting", "Kelly criterion & Half-Kelly", "Rebalancing frequency friction"],
  },
];

export default function ProgressPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">RESEARCH PROGRESS & CURRICULUM AUDIT</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Audit of completed theoretical modules, laboratory backtests, and quantitative competencies.
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs text-[#68717C]">TOTAL SYLLABUS COMPLETION</div>
          <div className="text-xl font-bold font-mono text-[#F4F5F7]">68.4%</div>
          <div className="text-xs font-mono text-[#36C98F]">13 of 19 Modules Verified</div>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="space-y-4">
        {COMPETENCIES.map((comp, idx) => (
          <div key={idx} className="p-4 rounded-md border border-[#20252C] bg-[#0B0D10] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-[#F4F5F7]">{comp.domain}</h3>
                <div className="text-[11px] text-[#68717C] font-mono mt-0.5">
                  {comp.modulesCompleted} / {comp.totalModules} Units Completed
                </div>
              </div>

              <span
                className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded self-start sm:self-auto ${
                  comp.status === "COMPLETE"
                    ? "bg-[#36C98F]/15 text-[#36C98F] border border-[#36C98F]/30"
                    : "bg-[#7868FF]/15 text-[#7868FF] border border-[#7868FF]/30"
                }`}
              >
                {comp.status}
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 w-full bg-[#101318] rounded overflow-hidden">
              <div
                style={{ width: `${(comp.modulesCompleted / comp.totalModules) * 100}%` }}
                className={`h-full ${comp.status === "COMPLETE" ? "bg-[#36C98F]" : "bg-[#7868FF]"}`}
              />
            </div>

            {/* Key topics list */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {comp.topics.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-[#101318] border border-[#20252C] text-[#A8AFB8] px-2 py-0.5 rounded font-mono"
                >
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 flex justify-end">
        <Link
          href="/app/learn"
          className="px-4 py-2 bg-[#101318] hover:bg-[#151920] border border-[#20252C] rounded text-xs text-[#F4F5F7] transition-colors"
        >
          Return to Quant Academy Curriculum →
        </Link>
      </div>
    </div>
  );
}
