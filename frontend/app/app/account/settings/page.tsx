"use client";

import { useState } from "react";
import { Sliders, Save, Database, Shield, Cpu } from "lucide-react";

export default function SettingsPage() {
  const [rfRate, setRfRate] = useState("3.50");
  const [exchangeDays, setExchangeDays] = useState("252");
  const [cryptoDays, setCryptoDays] = useState("365");
  const [commissionBps, setCommissionBps] = useState("5.0");
  const [slippageBps, setSlippageBps] = useState("10.0");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">SYSTEM & QUANTITATIVE SETTINGS</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Configure global annualization parameters, benchmark risk-free rates, and default transaction cost assumptions.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#7868FF] hover:bg-[#6858ef] text-white text-xs font-semibold rounded transition-colors"
        >
          <Save className="w-3.5 h-3.5" />
          <span>{saved ? "Settings Saved" : "Save Preferences"}</span>
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {/* Section 1: Financial Mathematics */}
        <div className="p-5 bg-[#0B0D10] border border-[#20252C] rounded-md space-y-4">
          <div className="flex items-center gap-2 border-b border-[#20252C] pb-2">
            <Cpu className="w-4 h-4 text-[#7868FF]" />
            <h2 className="text-xs font-bold text-[#F4F5F7] uppercase tracking-wider">
              Financial Econometrics & Calibration
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-[#A8AFB8] font-medium mb-1">
                Risk-Free Rate (Rf % for Sharpe/Sortino)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={rfRate}
                  onChange={(e) => setRfRate(e.target.value)}
                  className="w-full bg-[#101318] border border-[#20252C] rounded px-3 py-1.5 text-[#F4F5F7] font-mono focus:border-[#7868FF] focus:outline-none"
                />
                <span className="text-[#68717C]">%</span>
              </div>
              <p className="text-[10px] text-[#68717C] mt-1">
                Subtracted from excess returns before dividing by annual volatility.
              </p>
            </div>

            <div>
              <label className="block text-[#A8AFB8] font-medium mb-1">
                Exchange Equities Calendar (Periods / Year)
              </label>
              <input
                type="text"
                value={exchangeDays}
                onChange={(e) => setExchangeDays(e.target.value)}
                className="w-full bg-[#101318] border border-[#20252C] rounded px-3 py-1.5 text-[#F4F5F7] font-mono focus:border-[#7868FF] focus:outline-none"
              />
              <p className="text-[10px] text-[#68717C] mt-1">
                Standard NYSE / NASDAQ calendar: N = 252 trading days.
              </p>
            </div>

            <div>
              <label className="block text-[#A8AFB8] font-medium mb-1">
                24/7 Digital Assets Calendar (Periods / Year)
              </label>
              <input
                type="text"
                value={cryptoDays}
                onChange={(e) => setCryptoDays(e.target.value)}
                className="w-full bg-[#101318] border border-[#20252C] rounded px-3 py-1.5 text-[#F4F5F7] font-mono focus:border-[#7868FF] focus:outline-none"
              />
              <p className="text-[10px] text-[#68717C] mt-1">
                Continuous trading: N = 365 days (avoids understating crypto volatility).
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Execution Friction Defaults */}
        <div className="p-5 bg-[#0B0D10] border border-[#20252C] rounded-md space-y-4">
          <div className="flex items-center gap-2 border-b border-[#20252C] pb-2">
            <Sliders className="w-4 h-4 text-[#7868FF]" />
            <h2 className="text-xs font-bold text-[#F4F5F7] uppercase tracking-wider">
              Execution Cost & Friction Modeling
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-[#A8AFB8] font-medium mb-1">
                Default Commission (Basis Points)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={commissionBps}
                  onChange={(e) => setCommissionBps(e.target.value)}
                  className="w-full bg-[#101318] border border-[#20252C] rounded px-3 py-1.5 text-[#F4F5F7] font-mono focus:border-[#7868FF] focus:outline-none"
                />
                <span className="text-[#68717C]">bps</span>
              </div>
              <p className="text-[10px] text-[#68717C] mt-1">
                Applied per execution leg across entry and exit orders.
              </p>
            </div>

            <div>
              <label className="block text-[#A8AFB8] font-medium mb-1">
                Estimated Slippage (Basis Points)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={slippageBps}
                  onChange={(e) => setSlippageBps(e.target.value)}
                  className="w-full bg-[#101318] border border-[#20252C] rounded px-3 py-1.5 text-[#F4F5F7] font-mono focus:border-[#7868FF] focus:outline-none"
                />
                <span className="text-[#68717C]">bps</span>
              </div>
              <p className="text-[10px] text-[#68717C] mt-1">
                Simulated market impact penalty deducted from filled price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
