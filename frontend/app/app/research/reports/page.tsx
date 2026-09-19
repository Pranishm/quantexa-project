"use client";

import { useState } from "react";
import { FileText, Share2, Printer, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StrategyReportsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2 print:hidden">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">RESEARCH REPORTS</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Formal, immutable research dossiers for strategy verification, risk committee review, and audit documentation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#101318] hover:bg-[#151920] border border-[#20252C] rounded text-xs text-[#F4F5F7] transition-colors"
          >
            {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> : <Share2 className="w-3.5 h-3.5 text-[#A8AFB8]" />}
            <span>{copied ? "Link Copied" : "Share"}</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F5F7] hover:bg-[#FFFFFF] text-[#050608] rounded text-xs font-semibold transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Dossier</span>
          </button>
        </div>
      </div>

      {/* Institutional Document Report */}
      <div className="p-8 bg-[#0B0D10] border border-[#20252C] rounded-md space-y-6 print:border-none print:p-0">
        {/* Document Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#20252C] gap-2">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-sm bg-[#7868FF]" />
              <span className="font-bold text-sm tracking-wide text-[#F4F5F7]">QUANTORA</span>
            </div>
            <div className="text-[10px] text-[#68717C] uppercase tracking-widest mt-0.5">
              QUANTITATIVE RESEARCH DOSSIER · STRATEGY VERIFICATION
            </div>
          </div>

          <div className="text-right font-mono text-xs">
            <div className="font-bold text-[#F4F5F7]">REPORT #QRD-2026-0814</div>
            <div className="text-[10px] text-[#68717C]">TIMESTAMP: 2026-09-19 12:00 UTC • SHA-256: 4f8a...9c12</div>
          </div>
        </div>

        {/* Strategy Meta Summary */}
        <div className="p-4 bg-[#101318] border border-[#20252C] rounded-md space-y-2 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-sm font-bold text-[#F4F5F7]">
              SMA 50/200 Golden Cross Execution Protocol
            </h2>
            <span className="text-[11px] font-mono text-[#36C98F]">STATUS: VERIFIED PRODUCTION-READY</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#20252C] font-mono text-[11px]">
            <div>
              <span className="text-[#68717C]">Target Asset: </span>
              <span className="text-[#F4F5F7]">BTC/USD</span>
            </div>
            <div>
              <span className="text-[#68717C]">Period: </span>
              <span className="text-[#F4F5F7]">2018–2026</span>
            </div>
            <div>
              <span className="text-[#68717C]">Execution Model: </span>
              <span className="text-[#F4F5F7]">T+1 Open Quote</span>
            </div>
            <div>
              <span className="text-[#68717C]">Total Executions: </span>
              <span className="text-[#F4F5F7]">184 Trades</span>
            </div>
          </div>
        </div>

        {/* Verified Performance Metrics */}
        <div>
          <div className="text-[10px] font-semibold text-[#68717C] uppercase tracking-wider mb-2">
            AUDITED PERFORMANCE METRICS (NET OF COSTS)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#20252C] rounded-md bg-[#080A0D] divide-x divide-y sm:divide-y-0 divide-[#20252C] text-xs font-mono">
            <div className="p-3">
              <div className="text-[10px] text-[#68717C] font-sans">Net Cumulative Return</div>
              <div className="text-lg font-bold text-[#36C98F] mt-0.5">+84.31%</div>
              <div className="text-[10px] text-[#68717C]">Benchmark: +34.12%</div>
            </div>
            <div className="p-3">
              <div className="text-[10px] text-[#68717C] font-sans">Sharpe Ratio (Rf=3.5%)</div>
              <div className="text-lg font-bold text-[#F4F5F7] mt-0.5">1.42</div>
              <div className="text-[10px] text-[#36C98F]">Sortino: 2.18</div>
            </div>
            <div className="p-3">
              <div className="text-[10px] text-[#68717C] font-sans">Maximum Drawdown</div>
              <div className="text-lg font-bold text-[#E85D68] mt-0.5">-18.32%</div>
              <div className="text-[10px] text-[#68717C]">Duration: 41 bars</div>
            </div>
            <div className="p-3">
              <div className="text-[10px] text-[#68717C] font-sans">Profit Factor</div>
              <div className="text-lg font-bold text-[#F4F5F7] mt-0.5">1.74</div>
              <div className="text-[10px] text-[#36C98F]">Win Rate: 57.1%</div>
            </div>
          </div>
        </div>

        {/* Integrity Verification Matrix */}
        <div className="space-y-2">
          <div className="text-[10px] font-semibold text-[#68717C] uppercase tracking-wider">
            INTEGRITY & ECONOMETRIC CHECKLIST
          </div>
          <div className="border border-[#20252C] rounded-md bg-[#080A0D] divide-y divide-[#20252C] text-xs">
            <div className="p-2.5 flex items-center justify-between">
              <span className="text-[#A8AFB8]">Look-Ahead Bias Protection</span>
              <span className="font-mono text-[10px] font-bold text-[#36C98F] bg-[#36C98F]/10 px-2 py-0.5 rounded">PASS (0 Leakage Fills)</span>
            </div>
            <div className="p-2.5 flex items-center justify-between">
              <span className="text-[#A8AFB8]">Data Leakage expanding window check</span>
              <span className="font-mono text-[10px] font-bold text-[#36C98F] bg-[#36C98F]/10 px-2 py-0.5 rounded">PASS (Causally Bounded)</span>
            </div>
            <div className="p-2.5 flex items-center justify-between">
              <span className="text-[#A8AFB8]">Transaction Costs & Slippage deduction</span>
              <span className="font-mono text-[10px] font-bold text-[#36C98F] bg-[#36C98F]/10 px-2 py-0.5 rounded">PASS (-$6,120 Deducted)</span>
            </div>
            <div className="p-2.5 flex items-center justify-between">
              <span className="text-[#A8AFB8]">Parameter Sensitivity Stability</span>
              <span className="font-mono text-[10px] font-bold text-[#D8A94A] bg-[#D8A94A]/10 px-2 py-0.5 rounded">WARNING (Slow MA &lt; 40 Cliff)</span>
            </div>
          </div>
        </div>

        {/* Audit Sign-Off */}
        <div className="pt-4 border-t border-[#20252C] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#68717C] gap-2">
          <div>
            Quantora Automated Research Engine • Cryptographic Verification Seal
          </div>
          <div className="font-mono">
            VERIFIED BY: <strong className="text-[#F4F5F7]">LEAD RESEARCHER (PRO)</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
