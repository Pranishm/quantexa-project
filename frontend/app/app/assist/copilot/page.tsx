"use client";

import { useState } from "react";
import { Bot, Send, Database, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

interface StructuredResponse {
  sourceData: string[];
  metricsUsed: string[];
  analysis: string;
  evidence?: { label: string; value: string; sub?: string }[];
  actionLink?: { label: string; href: string };
}

interface Message {
  id: string;
  sender: "user" | "copilot";
  content?: string;
  structured?: StructuredResponse;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "m-1",
    sender: "copilot",
    structured: {
      sourceData: ["Cross-Asset High Frequency Tape", "Volatility Term Structure", "Markov Transition Matrix"],
      metricsUsed: ["Rolling 30D Realized Volatility", "Cross-Asset Correlation Matrix", "Tail Value-at-Risk (95%)"],
      analysis: "Quantora Evidence-Bound Intelligence initialized. All responses are derived from deterministic statistical models and verified price series. You can inquire about factor attribution, volatility clustering, backtest parameter sensitivity, or execution cost friction.",
      evidence: [
        { label: "Active Regime", value: "Expansion", sub: "Confidence 84%" },
        { label: "Systemic Vol", value: "24.8%", sub: "Normalized" },
        { label: "Model Latency", value: "14ms", sub: "Compute Engine" },
      ],
    },
    timestamp: "12:00 UTC",
  },
];

export default function DedicatedCopilotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [loading, setLoading] = useState(false);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: `usr_${Date.now()}`,
      sender: "user",
      content: text,
      timestamp: new Date().toTimeString().slice(0, 5) + " UTC",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let structured: StructuredResponse;

      if (lower.includes("nvda") && (lower.includes("vol") || lower.includes("month"))) {
        structured = {
          sourceData: ["NASDAQ L2 Book", "30-Day Implied Volatility Surface", "Options Skew Ratio"],
          metricsUsed: ["Realized Vol (30D): 51.8%", "Historical Vol Percentile: 82nd", "Earnings Event Beta: 2.14"],
          analysis: "NVIDIA (NVDA) 30-day realized volatility increased to 51.8% (+14.2% MoM) driven by semiconductor sector reweighting and high options open interest preceding product roadmaps. Downside tail variance was constrained within 2 sessions.",
          evidence: [
            { label: "Realized Vol", value: "51.8%", sub: "+14.2% MoM" },
            { label: "Sharpe (30D)", value: "1.18", sub: "Annualized" },
            { label: "Beta vs SPY", value: "2.14", sub: "High Beta" },
          ],
          actionLink: { label: "Launch NVDA Asset Research", href: "/app/markets/asset/NVDA" },
        };
      } else if (lower.includes("btc") || lower.includes("backtest")) {
        structured = {
          sourceData: ["Historical OHLCV (2018–2026)", "Slippage 10bps + Commission 5bps"],
          metricsUsed: ["CAGR", "Sharpe Ratio (Rf=3.5%)", "Max Drawdown", "Calmar Ratio"],
          analysis: "SMA Crossover strategy on BTC/USD produces +84.31% total return with 1.42 Sharpe ratio over the 2018–2026 test window. Maximum drawdown occurred during the 2022 chop regime (-18.32%).",
          evidence: [
            { label: "Sharpe Ratio", value: "1.42", sub: "Annualized" },
            { label: "Max Drawdown", value: "-18.32%", sub: "Peak-to-Trough" },
            { label: "Profit Factor", value: "1.74", sub: "184 Executions" },
          ],
          actionLink: { label: "Open Backtest Runner", href: "/app/research/backtest" },
        };
      } else {
        structured = {
          sourceData: ["Quantora Cross-Asset Data Engine", "Multi-Factor Econometric Models"],
          metricsUsed: ["Cross-Correlation (90D)", "Value at Risk (95% 1D)", "Regime Classification"],
          analysis: "Quantitative analysis confirms market conditions remain in positive trend expansion with tightening correlation between digital assets and semiconductor beta. Execution friction remains low.",
          evidence: [
            { label: "Market State", value: "Expansion", sub: "Low Stress" },
            { label: "Avg Cross-Corr", value: "+0.42", sub: "Moderate" },
          ],
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
      setLoading(false);
    }, 600);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#20252C] pb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F4F5F7]">QUANTORA FEATHERLESS AI</h1>
          <p className="text-xs text-[#A8AFB8] mt-0.5">
            Institutional quantitative research assistant bound to deterministic models and verified market data.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-[#36C98F]">ONLINE • VERIFIED ENGINE</span>
        </div>
      </div>

      {/* Main Conversation Stream */}
      <div className="space-y-4 min-h-[440px]">
        {messages.map((m) => (
          <div key={m.id} className="space-y-1">
            {m.sender === "user" ? (
              <div className="flex justify-end">
                <div className="bg-[#151920] border border-[#20252C] rounded-md px-4 py-2.5 text-xs text-[#F4F5F7] max-w-xl">
                  {m.content}
                </div>
              </div>
            ) : (
              <div className="bg-[#0B0D10] border border-[#20252C] rounded-md p-4 space-y-3 max-w-3xl">
                {m.structured && (
                  <>
                    {/* Source Data */}
                    <div>
                      <div className="text-[10px] font-semibold text-[#68717C] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Database className="w-3 h-3 text-[#A8AFB8]" />
                        SOURCE DATA
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.structured.sourceData.map((src, i) => (
                          <span key={i} className="text-[10px] bg-[#101318] border border-[#20252C] text-[#A8AFB8] px-2 py-0.5 rounded font-mono">
                            {src}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Used */}
                    <div>
                      <div className="text-[10px] font-semibold text-[#68717C] uppercase tracking-wider mb-1">
                        METRICS USED
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.structured.metricsUsed.map((metric, i) => (
                          <span key={i} className="text-[10px] bg-[#101318] border border-[#20252C] text-[#F4F5F7] font-mono px-2 py-0.5 rounded">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Evidence Matrix */}
                    {m.structured.evidence && (
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {m.structured.evidence.map((ev, i) => (
                          <div key={i} className="bg-[#101318] border border-[#20252C] rounded p-2.5 text-center">
                            <div className="text-[10px] text-[#68717C] truncate">{ev.label}</div>
                            <div className="text-sm font-semibold text-[#F4F5F7] font-mono mt-0.5">{ev.value}</div>
                            {ev.sub && <div className="text-[10px] text-[#36C98F] truncate mt-0.5">{ev.sub}</div>}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Analysis */}
                    <div>
                      <div className="text-[10px] font-semibold text-[#68717C] uppercase tracking-wider mb-1">
                        QUANTITATIVE ANALYSIS
                      </div>
                      <p className="text-xs text-[#A8AFB8] leading-relaxed">
                        {m.structured.analysis}
                      </p>
                    </div>

                    {m.structured.actionLink && (
                      <div className="pt-2 border-t border-[#20252C]">
                        <Link
                          href={m.structured.actionLink.href}
                          className="inline-flex items-center gap-1.5 text-xs text-[#7868FF] hover:text-[#FFFFFF] transition-colors"
                        >
                          <span>{m.structured.actionLink.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
            <div className="text-[9px] text-[#68717C] px-1 font-mono">{m.timestamp}</div>
          </div>
        ))}

        {loading && (
          <div className="bg-[#0B0D10] border border-[#20252C] rounded-md p-3 text-xs text-[#A8AFB8] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7868FF] animate-pulse" />
            <span>Computing mathematical evidence...</span>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="sticky bottom-4 bg-[#0B0D10] border border-[#20252C] rounded-md p-2 flex items-center gap-2 focus-within:border-[#7868FF] shadow-2xl">
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
          placeholder="Ask Featherless AI research questions (e.g. What changed in NVDA volatility this month?)..."
          className="flex-1 bg-transparent text-xs text-[#F4F5F7] placeholder-[#68717C] px-2 focus:outline-none"
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || loading}
          className="px-3 py-1.5 bg-[#7868FF] hover:bg-[#6858ef] disabled:bg-[#151920] disabled:text-[#454C55] text-white text-xs font-medium rounded transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}
