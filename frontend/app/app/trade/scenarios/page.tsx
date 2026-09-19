"use client";

import { useState } from "react";
import { AlertTriangle, Play, ShieldAlert, CheckCircle2, Sliders } from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  period: string;
  description: string;
  equityShock: string;
  cryptoShock: string;
  goldShock: string;
  volShock: string;
  expectedPnl: string;
  pnlPositive: boolean;
}

const HISTORICAL_SCENARIOS: Scenario[] = [
  {
    id: "sc-1",
    name: "2020 COVID Liquidity Crisis",
    period: "Feb 2020 – Apr 2020",
    description: "Systemic global margin contraction, high-frequency liquidation across risk assets, followed by massive fiscal stimulus.",
    equityShock: "-34.1%",
    cryptoShock: "-52.8%",
    goldShock: "-12.4%",
    volShock: "+240%",
    expectedPnl: "-$28,450.00 (-23.8%)",
    pnlPositive: false,
  },
  {
    id: "sc-2",
    name: "2022 Federal Reserve Rate Hike Regime",
    period: "Jan 2022 – Dec 2022",
    description: "Unprecedented aggressive interest rate tightening cycle, long-duration equity valuation compression, crypto deleveraging.",
    equityShock: "-19.4%",
    cryptoShock: "-64.2%",
    goldShock: "-0.8%",
    volShock: "+65%",
    expectedPnl: "-$19,820.00 (-16.6%)",
    pnlPositive: false,
  },
  {
    id: "sc-3",
    name: "2024 AI Infrastructure Boom",
    period: "Nov 2023 – Mar 2024",
    description: "Concentrated semiconductor capital expenditure cycle, tech multiple expansion, institutional Bitcoin ETF approval.",
    equityShock: "+48.2%",
    cryptoShock: "+94.5%",
    goldShock: "+14.2%",
    volShock: "-18%",
    expectedPnl: "+$44,120.00 (+37.0%)",
    pnlPositive: true,
  },
  {
    id: "sc-4",
    name: "Geopolitical Flash Event & Energy Spike",
    period: "Synthetic Stress Model",
    description: "Middle East crude oil supply disruption, flight to precious metals, risk-off equity reweighting.",
    equityShock: "-8.5%",
    cryptoShock: "-14.2%",
    goldShock: "+18.6%",
    volShock: "+85%",
    expectedPnl: "-$4,120.00 (-3.4%)",
    pnlPositive: false,
  },
];

export default function ScenariosPage() {
  const [selectedScenario, setSelectedScenario] = useState<string>("sc-1");
  const [stressMultiplier, setStressMultiplier] = useState<number>(100);

  const scenario = HISTORICAL_SCENARIOS.find((s) => s.id === selectedScenario) || HISTORICAL_SCENARIOS[0];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Simulation Banner */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#101318] border border-[#20252C] rounded text-xs">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-[#D8A94A]/10 text-[#D8A94A] font-mono text-[10px] font-bold">
            SIMULATION
          </span>
          <span className="text-[#A8AFB8]">
            Macroeconomic and tail-risk stress testing engine. Forward projections under extreme historical conditions.
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">MARKET SCENARIOS & STRESS LAB</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Subject current portfolio weights to past market crises and computed macroeconomic tail-risk shocks.
          </p>
        </div>
      </div>

      {/* Scenario Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {HISTORICAL_SCENARIOS.map((sc) => {
          const isSelected = sc.id === selectedScenario;
          return (
            <div
              key={sc.id}
              onClick={() => setSelectedScenario(sc.id)}
              className={`p-4 rounded-md border cursor-pointer transition-all ${
                isSelected
                  ? "bg-[#101318] border-[#7868FF]"
                  : "bg-[#0B0D10] border-[#20252C] hover:border-[#303640]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#F4F5F7]">{sc.name}</span>
                <span className="text-[10px] font-mono text-[#68717C]">{sc.period}</span>
              </div>
              <p className="text-xs text-[#A8AFB8] mt-2 leading-relaxed">
                {sc.description}
              </p>

              {/* Shock parameters */}
              <div className="grid grid-cols-4 gap-2 mt-3 pt-3 border-t border-[#20252C] text-center font-mono">
                <div>
                  <div className="text-[9px] text-[#68717C]">EQUITIES</div>
                  <div className={`text-xs font-semibold ${sc.equityShock.startsWith("-") ? "text-[#E85D68]" : "text-[#36C98F]"}`}>
                    {sc.equityShock}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-[#68717C]">CRYPTO</div>
                  <div className={`text-xs font-semibold ${sc.cryptoShock.startsWith("-") ? "text-[#E85D68]" : "text-[#36C98F]"}`}>
                    {sc.cryptoShock}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-[#68717C]">GOLD</div>
                  <div className={`text-xs font-semibold ${sc.goldShock.startsWith("-") ? "text-[#E85D68]" : "text-[#36C98F]"}`}>
                    {sc.goldShock}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-[#68717C]">VOL EXP</div>
                  <div className="text-xs font-semibold text-[#D8A94A]">{sc.volShock}</div>
                </div>
              </div>

              {/* Projected Result */}
              <div className="mt-3 flex items-center justify-between text-xs font-mono pt-2 border-t border-[#20252C]/60">
                <span className="text-[#68717C] font-sans text-[11px]">PROJECTED PORTFOLIO IMPACT:</span>
                <span className={`font-bold ${sc.pnlPositive ? "text-[#36C98F]" : "text-[#E85D68]"}`}>
                  {sc.expectedPnl}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stress Intensity Slider & Execution */}
      <div className="bg-[#0B0D10] border border-[#20252C] rounded-md p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-[#F4F5F7] uppercase tracking-wider">
              Selected Scenario: {scenario.name}
            </div>
            <div className="text-[11px] text-[#68717C]">Adjust shock severity multiplier to calibrate stress test margins</div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-[#F4F5F7] font-bold">{stressMultiplier}%</span>
            <span className="text-[10px] text-[#68717C] ml-1">SEVERITY</span>
          </div>
        </div>

        <input
          type="range"
          min="25"
          max="200"
          value={stressMultiplier}
          onChange={(e) => setStressMultiplier(Number(e.target.value))}
          className="w-full accent-[#7868FF] cursor-pointer"
        />

        <div className="flex items-center justify-between pt-2 border-t border-[#20252C] text-xs">
          <span className="text-[#A8AFB8]">
            Estimated Portfolio Drawdown at {stressMultiplier}% severity:{" "}
            <strong className="text-[#E85D68] font-mono">
              {(parseFloat(scenario.expectedPnl.split("(")[1]) * (stressMultiplier / 100)).toFixed(1)}%
            </strong>
          </span>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#101318] hover:bg-[#151920] border border-[#20252C] hover:border-[#303640] rounded text-xs font-medium text-[#F4F5F7]">
            <Play className="w-3.5 h-3.5 text-[#7868FF]" />
            <span>Simulate Portfolio Survival</span>
          </button>
        </div>
      </div>
    </div>
  );
}
