"use client";

import { useState } from "react";
import { Shield, Search, Filter, Lock, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/lib/auth/store";

interface AuditLogEntry {
  id: string;
  timestamp: string;
  userEmail: string;
  action: "LOGIN" | "ROLE_CHANGE" | "BACKTEST_RUN" | "AI_TOOL_CALL" | "PAPER_ORDER" | "SECURITY_RLS";
  details: string;
  status: "SUCCESS" | "BLOCKED";
  ipAddress: string;
}

const AUDIT_LOGS: AuditLogEntry[] = [
  { id: "log_101", timestamp: "2026-09-19 15:10:42", userEmail: "lead.researcher@quantora.ai", action: "BACKTEST_RUN", details: "Executed deterministic SMA 20/50 on NVDA (Sharpe 1.42, 252 bars)", status: "SUCCESS", ipAddress: "192.168.1.42" },
  { id: "log_102", timestamp: "2026-09-19 15:08:15", userEmail: "lead.researcher@quantora.ai", action: "AI_TOOL_CALL", details: "Invoked strategy_autopsy_tool with regime attribution", status: "SUCCESS", ipAddress: "192.168.1.42" },
  { id: "log_103", timestamp: "2026-09-19 15:05:01", userEmail: "lead.researcher@quantora.ai", action: "PAPER_ORDER", details: "Executed Simulated BUY 50 NVDA @ $124.75", status: "SUCCESS", ipAddress: "192.168.1.42" },
  { id: "log_104", timestamp: "2026-09-19 14:58:22", userEmail: "guest_visitor_82@anon.net", action: "SECURITY_RLS", details: "Blocked attempt to access private research notes without auth JWT", status: "BLOCKED", ipAddress: "45.33.32.156" },
  { id: "log_105", timestamp: "2026-09-19 14:45:10", userEmail: "system_admin@quantora.ai", action: "ROLE_CHANGE", details: "Elevated user session usr_quant_01 to pro_researcher tier", status: "SUCCESS", ipAddress: "10.0.0.1" },
  { id: "log_106", timestamp: "2026-09-19 14:30:00", userEmail: "lead.researcher@quantora.ai", action: "LOGIN", details: "Authenticated session via encrypted JWT passkey", status: "SUCCESS", ipAddress: "192.168.1.42" },
];

export default function AdminAuditPage() {
  const { user, can } = useAuthStore();
  const isAdmin = can("adminAccess");
  const [filterAction, setFilterAction] = useState<string>("ALL");

  if (!isAdmin) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4 max-w-md mx-auto">
        <div className="p-4 rounded-3xl bg-[#FF5F6D]/15 border border-[#FF5F6D]/30 text-[#FF5F6D]">
          <Lock className="w-8 h-8 mx-auto" />
        </div>
        <h1 className="text-xl font-bold text-white font-heading">
          403 Restricted Access
        </h1>
        <p className="text-xs text-[#69727E]">
          Security audit logs are restricted to admin identities.
        </p>
      </div>
    );
  }

  const filteredLogs = AUDIT_LOGS.filter((l) => {
    if (filterAction === "ALL") return true;
    return l.action === filterAction;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1 text-[10px] font-mono text-[#35E69A] uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>IMMUTABLE SECURITY AUDIT TRAIL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            System & Security Audit Logs
          </h1>
          <p className="text-xs sm:text-sm text-[#B7BEC8] mt-1">
            Real-time chronological log of authentication, backtests, AI tool invocations, paper orders, and RLS policy events.
          </p>
        </div>

        <Link
          href="/admin/system"
          className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>System Overview</span>
        </Link>
      </div>

      {/* Logs Table Card */}
      <div className="p-6 rounded-3xl bg-[#080B10] border border-white/10 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
          <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            Event Stream ({filteredLogs.length})
          </span>

          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#69727E]" />
            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              className="bg-[#0C1016] border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white font-mono outline-none"
            >
              <option value="ALL">All Actions</option>
              <option value="LOGIN">LOGIN</option>
              <option value="BACKTEST_RUN">BACKTEST_RUN</option>
              <option value="AI_TOOL_CALL">AI_TOOL_CALL</option>
              <option value="PAPER_ORDER">PAPER_ORDER</option>
              <option value="SECURITY_RLS">SECURITY_RLS</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="text-[#69727E] text-[10px] uppercase border-b border-white/10 pb-2">
                <th className="py-2.5">Timestamp</th>
                <th>Action</th>
                <th>Identity</th>
                <th>Event Details</th>
                <th>IP Address</th>
                <th className="text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 text-[#69727E] whitespace-nowrap">{log.timestamp}</td>
                  <td>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-[#7C6CFF] border border-white/5">
                      {log.action}
                    </span>
                  </td>
                  <td className="text-[#B7BEC8]">{log.userEmail}</td>
                  <td className="text-white max-w-xs truncate font-sans">{log.details}</td>
                  <td className="text-[#69727E]">{log.ipAddress}</td>
                  <td className="text-right">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      log.status === "SUCCESS"
                        ? "bg-[#35E69A]/15 text-[#35E69A]"
                        : "bg-[#FF5F6D]/15 text-[#FF5F6D]"
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
