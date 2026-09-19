"use client";

import { useState } from "react";
import { Shield, Key, Lock, CheckCircle2, AlertTriangle, UserCheck } from "lucide-react";
import { useAuthStore, type UserRole } from "@/lib/auth/store";

export default function SecurityPage() {
  const { user, setRole } = useAuthStore();
  const [apiKeyVisible, setApiKeyVisible] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">SECURITY & ACCESS CONTROLS</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Manage Row-Level Security (RLS) policies, session identity tokens, and quantitative researcher permissions.
          </p>
        </div>
      </div>

      {/* Role State */}
      <div className="p-5 bg-[#0B0D10] border border-[#20252C] rounded-md space-y-4">
        <div className="flex items-center justify-between border-b border-[#20252C] pb-2">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#7868FF]" />
            <h2 className="text-xs font-bold text-[#F4F5F7] uppercase tracking-wider">
              Active Authorization Context
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#36C98F] bg-[#101318] border border-[#20252C] px-2 py-0.5 rounded capitalize">
            {user.role} Privilege
          </span>
        </div>

        <p className="text-xs text-[#A8AFB8] leading-relaxed">
          Quantora enforces strict Postgres Row-Level Security (RLS) on all backtest runs, strategy code repositories, and proprietary research notes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
          {(["admin", "pro_researcher", "researcher", "trader"] as UserRole[]).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`p-3 rounded border text-left transition-colors capitalize ${
                user.role === r
                  ? "bg-[#101318] border-[#00E599] text-[#F4F5F7]"
                  : "bg-[#080A0D] border-[#20252C] text-[#68717C] hover:text-[#A8AFB8]"
              }`}
            >
              <div className="font-semibold text-xs">{r.replace("_", " ")}</div>
              <div className="text-[10px] text-[#68717C] mt-1">
                {r === "admin"
                  ? "Full read/write & telemetry"
                  : r === "pro_researcher"
                  ? "50×50 grid, unlimited AI"
                  : r === "researcher"
                  ? "Execute backtests & 3D manifolds"
                  : "Live paper trading & order book"}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* API Key */}
      <div className="p-5 bg-[#0B0D10] border border-[#20252C] rounded-md space-y-3 text-xs">
        <div className="flex items-center gap-2 border-b border-[#20252C] pb-2">
          <Key className="w-4 h-4 text-[#7868FF]" />
          <h2 className="text-xs font-bold text-[#F4F5F7] uppercase tracking-wider">
            Quantitative Research API Token
          </h2>
        </div>

        <p className="text-[#A8AFB8]">
          Authenticate your automated programmatic backtesting scripts or Python clients with this bearer key.
        </p>

        <div className="flex items-center gap-2 bg-[#101318] border border-[#20252C] rounded p-2 font-mono text-xs">
          <input
            type={apiKeyVisible ? "text" : "password"}
            readOnly
            value="qnt_live_89f02c91a48e71b2d304918e9821af0c"
            className="flex-1 bg-transparent text-[#F4F5F7] focus:outline-none"
          />
          <button
            onClick={() => setApiKeyVisible(!apiKeyVisible)}
            className="px-2 py-1 bg-[#151920] border border-[#20252C] rounded text-[11px] text-[#A8AFB8] hover:text-[#F4F5F7]"
          >
            {apiKeyVisible ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
}
