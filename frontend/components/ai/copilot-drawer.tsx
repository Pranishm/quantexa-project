"use client";

import { useState } from "react";
import { 
  X, 
  Send, 
  Database,
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Layers, 
  Sparkles,
  Minimize2,
  Maximize2,
  CheckCircle2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { CANONICAL_BACKTEST } from "@/lib/demo-data";

interface StructuredEvidence {
  label: string;
  value: string | number;
  sub?: string;
}

interface CopilotResponse {
  sourceData: string[];
  metricsUsed: string[];
  analysis: string;
  evidence?: StructuredEvidence[];
  actionLink?: {
    label: string;
    href: string;
  };
}

interface Message {
  id: string;
  sender: "user" | "copilot";
  content?: string;
  structured?: CopilotResponse;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "msg_init",
    sender: "copilot",
    structured: {
      sourceData: ["Aggregated L2 Market Feed", "Compustat Historical OHLCV", "Regime Engine State"],
      metricsUsed: ["Realized Volatility (30D)", "Rolling Beta (SPY)", "Max Historical Drawdown"],
      analysis: "Quantora Clay Intelligence Station online. All quantitative telemetry is deterministically validated against point-in-time financial models and execution latency simulators. Ask about regime transitions, factor sensitivity, slippage friction, or parameter robustness.",
    },
    timestamp: "12:00 UTC",
  },
];

// 25 & 26. Predefined queries connected to the central computed dataset
const PRESET_QUERIES = [
  "Why did this strategy perform well?",
  "What is the trade concentration risk?",
  "Explain cross-asset correlation shift",
  "Diagnose backtest look-ahead bias",
];

export function CopilotDrawer({ isOpen, onClose, contextName = "Asset Research" }: { isOpen: boolean; onClose: () => void; contextName?: string }) {
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isMinimized, setIsMinimized] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isProcessing) return;

    const userMsg: Message = {
      id: `usr_${Date.now()}`,
      sender: "user",
      content: text,
      timestamp: new Date().toTimeString().slice(0, 5) + " UTC",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsProcessing(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let structured: CopilotResponse;

      // 25. Exact computed backtest object reasoning
      if (lower.includes("why") || lower.includes("perform") || lower.includes("concentration") || lower.includes("work")) {
        structured = {
          sourceData: [
            "Deterministic Backtest Engine (BTC/USD)",
            "Markov Regime Attribution Model",
            "Point-in-Time Order Tape"
          ],
          metricsUsed: [
            `Total Return: +${CANONICAL_BACKTEST.totalReturn}%`,
            `Sharpe Ratio: ${CANONICAL_BACKTEST.sharpe}`,
            `Bull Alpha: ${CANONICAL_BACKTEST.autopsy.regimeAttribution[0].pctProfit}%`,
            `Top 5 Trade Concentration: ${CANONICAL_BACKTEST.autopsy.profitConcentration.top5TradesPct}%`
          ],
          analysis: "Your strategy generated most of its return during bullish regimes (68.4% of total profit). The largest concern is profit concentration: a relatively small number of trades (top 5 account for 61.2%) drive a substantial share of total gains. Gross alpha (+41.8%) remained resilient through broker fees and 10bps slippage, compounding to +38.7% net.",
          evidence: [
            { label: "Total Return", value: `+${CANONICAL_BACKTEST.totalReturn}%`, sub: "Net of fees" },
            { label: "Sharpe", value: `${CANONICAL_BACKTEST.sharpe}`, sub: "Risk-adjusted" },
            { label: "Top 5 Trades", value: `${CANONICAL_BACKTEST.autopsy.profitConcentration.top5TradesPct}%`, sub: "Concentration" },
          ],
          actionLink: { label: "View Calculation in Strategy Autopsy →", href: "/app/research/autopsy" },
        };
      } else if (lower.includes("nvda") || lower.includes("vol") || lower.includes("month")) {
        structured = {
          sourceData: ["NASDAQ High-Frequency Feed", "Options IV Surface (30D Delta)", "SEC 10-Q Telemetry"],
          metricsUsed: ["Realized Vol (30D): 48.1%", "Implied Vol Percentile: 84th", "Beta: 2.14"],
          analysis: "NVIDIA (NVDA) experienced an expansion in 30-day realized volatility driven by compute demand reweighting and heavy call-skew open interest concentration. Downside variance was concentrated in 2 post-earnings sessions.",
          evidence: [
            { label: "Realized Vol (30D)", value: "48.1%", sub: "+5.2% MoM" },
            { label: "Beta vs SPY", value: "2.14", sub: "Elevated" },
            { label: "Max DD", value: "-22.4%", sub: "Cycle Low" },
          ],
          actionLink: { label: "Open NVDA Dedicated Workstation", href: "/app/assets/nvidia" },
        };
      } else if (lower.includes("bias") || lower.includes("integrity") || lower.includes("leakage")) {
        structured = {
          sourceData: ["Point-in-Time Corporate Fundamentals", "As-Reported Price Quotes", "Timestamp Audit Engine"],
          metricsUsed: ["Look-Ahead Bias Test", "Data Leakage Diagnostic", "Lag Validation (T+1)"],
          analysis: "Strategy validation confirmed zero look-ahead bias across pricing matrices. All corporate action adjustments are properly delayed by T+1 execution lag. Parameter sensitivity analysis flags potential over-fitting on slow moving averages.",
          evidence: [
            { label: "Look-Ahead Bias", value: "PASS", sub: "0 Leakage Points" },
            { label: "Execution Realism", value: "PASS", sub: "Spread Sensitivity" },
            { label: "Out-of-Sample", value: "PASS", sub: "Walk-Forward OK" },
          ],
          actionLink: { label: "Open Integrity Diagnostic", href: "/app/research/integrity" },
        };
      } else {
        structured = {
          sourceData: ["Cross-Asset Macro Feed", "Institutional Risk Models", "Quantora Data Bus"],
          metricsUsed: ["Cross-Correlation (90D)", "Value at Risk (95% 1D)", "Regime Classification"],
          analysis: `Query analyzed for active research context (${contextName}). Risk parameters and regime factors indicate neutral macro momentum with tightening correlation between digital assets and equity factors (+0.54 BTC/NVDA).`,
          evidence: [
            { label: "Market Regime", value: "Trend Expansion", sub: "Confidence 78%" },
            { label: "Macro VaR", value: "$4,210", sub: "95% 1-Day" },
          ],
          actionLink: { label: "Explore Market X-Ray Map", href: "/app/markets/cross-asset" },
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `copilot_${Date.now()}`,
          sender: "copilot",
          structured,
          timestamp: new Date().toTimeString().slice(0, 5) + " UTC",
        },
      ]);
      setIsProcessing(false);
    }, 700);
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out font-sans ${
        isMinimized 
          ? "w-80 h-14" 
          : "w-[480px] max-w-[calc(100vw-2rem)] h-[680px] max-h-[calc(100vh-4rem)]"
      } clay-card-elevated flex flex-col rounded-3xl overflow-hidden border border-[var(--border-strong)] shadow-2xl`}
    >
      {/* Molded Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--bg-surface)]">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[var(--accent)] animate-ping opacity-75" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] absolute" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold tracking-wider text-[var(--text-primary)] uppercase">QUANTORA INTELLIGENCE</h3>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold">
                AI COPILOT
              </span>
            </div>
            <div className="text-[10px] text-[var(--text-muted)] flex items-center gap-1.5 mt-0.5">
              <span>Context:</span>
              <strong className="text-[var(--text-secondary)]">{contextName}</strong>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
            title={isMinimized ? "Expand panel" : "Minimize panel"}
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
            title="Close panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((m) => (
              <div key={m.id} className="space-y-1.5">
                {m.sender === "user" ? (
                  <div className="flex justify-end">
                    <div className="clay-recessed px-4 py-2.5 text-[var(--text-primary)] max-w-[85%] rounded-2xl rounded-tr-sm font-medium">
                      {m.content}
                    </div>
                  </div>
                ) : (
                  <div className="clay-card p-4 space-y-3 rounded-2xl">
                    {m.structured && (
                      <>
                        {/* Source Data Section */}
                        <div>
                          <div className="text-[10px] font-semibold text-[var(--text-muted)] tracking-wider uppercase flex items-center gap-1.5 mb-1.5">
                            <Database className="w-3 h-3 text-[var(--accent)]" />
                            DATA SOURCES
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {m.structured.sourceData.map((src, i) => (
                              <span key={i} className="text-[10px] bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)] px-2.5 py-0.5 rounded-full font-mono">
                                {src}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Evidence Badges */}
                        {m.structured.evidence && (
                          <div className="grid grid-cols-3 gap-2 pt-1">
                            {m.structured.evidence.map((ev, i) => (
                              <div key={i} className="clay-recessed-sm p-2 rounded-xl text-center">
                                <div className="text-[9px] text-[var(--text-muted)] truncate">{ev.label}</div>
                                <div className="text-xs font-bold text-[var(--text-primary)] font-mono mt-0.5">{ev.value}</div>
                                {ev.sub && <div className="text-[9px] text-[var(--positive)] truncate mt-0.5 font-medium">{ev.sub}</div>}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Quantitative Analysis */}
                        <div className="pt-1">
                          <div className="text-[10px] font-semibold text-[var(--text-muted)] tracking-wider uppercase mb-1">
                            DETERMINISTIC ANALYSIS
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            {m.structured.analysis}
                          </p>
                        </div>

                        {/* Deep Link Action */}
                        {m.structured.actionLink && (
                          <button
                            onClick={() => {
                              onClose();
                              router.push(m.structured!.actionLink!.href);
                            }}
                            className="w-full mt-2 flex items-center justify-between px-3.5 py-2 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-primary)] rounded-xl font-medium cursor-pointer"
                          >
                            <span>{m.structured.actionLink.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                          </button>
                        )}
                      </>
                    )}
                  </div>
                )}
                <div className="text-[9px] text-[var(--text-muted)] px-1 text-right font-mono">{m.timestamp}</div>
              </div>
            ))}

            {/* 26. Procedural Reasoning Checklist during query processing */}
            {isProcessing && (
              <div className="clay-card p-4 text-xs text-[var(--text-secondary)] space-y-2 rounded-2xl animate-in fade-in duration-150">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
                  <span>ANALYZING CURRENT RESEARCH CONTEXT...</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-[var(--positive)] pt-1">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Strategy parameters</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Market regime HMM</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Execution latency</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Trade concentration</div>
                </div>
              </div>
            )}
          </div>

          {/* Preset Suggestions with Clay Pills */}
          <div className="px-4 py-2.5 border-t border-[var(--border)] bg-[var(--bg-surface)]">
            <div className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Contextual Inquiries
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PRESET_QUERIES.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="text-[10px] clay-pill px-2.5 py-1 bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all font-medium active:scale-95"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Recessed Capsule Query Input */}
          <div className="p-3.5 border-t border-[var(--border)] bg-[var(--bg-surface)]">
            <div className="flex items-center gap-2 clay-recessed px-3.5 py-1.5 rounded-2xl">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={`Ask Copilot about ${contextName}...`}
                className="flex-1 bg-transparent text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isProcessing}
                className="p-2 clay-button-primary rounded-xl disabled:opacity-40 transition-all cursor-pointer"
                title="Send query"
              >
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Export FloatingCopilot as alias to maintain compatibility
export const FloatingCopilot = CopilotDrawer;
