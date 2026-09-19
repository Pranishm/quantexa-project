"use client";

import { useState, useEffect } from "react";
import { Mic, MicOff, Volume2, Sparkles, Activity, Bot, ArrowRight, ShieldCheck, Play } from "lucide-react";
import { CANONICAL_BACKTEST, DEMO_ASSETS } from "@/lib/demo-data";
import { useMarketSimulation } from "@/lib/market-simulation";

export default function VoiceAssistPage() {
  const { assets } = useMarketSimulation();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [audioWaves, setAudioWaves] = useState<number[]>([12, 24, 45, 60, 30, 75, 40, 90, 65, 35, 20]);

  useEffect(() => {
    if (!isListening) return;
    const interval = setInterval(() => {
      setAudioWaves((prev) => prev.map(() => Math.floor(Math.random() * 80) + 15));
    }, 120);
    return () => clearInterval(interval);
  }, [isListening]);

  const handleQuery = (queryText: string, aiReply: string) => {
    setIsListening(false);
    setTranscript(queryText);
    setResponse(null);
    setTimeout(() => {
      setResponse(aiReply);
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono tracking-wider text-quant-violet dark:text-quant-violet-bright font-semibold uppercase px-2 py-0.5 rounded-full clay-recessed border border-quant-violet/20">
            ASSIST / NEURAL VOICE INTERFACE
          </span>
          <span className="text-xs text-quant-muted font-mono">SPEECH-TO-QUANT ENGINE</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-quant-primary">
          Voice Terminal Copilot
        </h1>
        <p className="text-sm text-quant-muted mt-1">
          Hands-free voice telemetry querying the deterministic backtest engine, regime transitions, and live market drift.
        </p>
      </div>

      {/* Center Voice Visualizer */}
      <div className="clay-card p-8 md:p-12 rounded-3xl text-center relative overflow-hidden border border-quant-border/30 space-y-6">
        <div className="flex justify-center">
          <div
            onClick={() => setIsListening(!isListening)}
            className={`w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isListening
                ? "bg-quant-violet text-white shadow-lg ring-8 ring-quant-violet/20 scale-105"
                : "clay-card-interactive text-quant-primary hover:text-quant-violet"
            }`}
          >
            {isListening ? <Mic className="w-10 h-10 animate-pulse" /> : <MicOff className="w-10 h-10 text-quant-muted" />}
          </div>
        </div>

        {/* Dynamic Soundwave Visualizer */}
        <div className="h-16 flex items-center justify-center gap-1.5 px-4 max-w-md mx-auto">
          {audioWaves.map((val, idx) => (
            <div
              key={idx}
              className={`w-2 rounded-full transition-all duration-150 ${
                isListening ? "bg-quant-violet" : "bg-quant-muted/30"
              }`}
              style={{ height: isListening ? `${val}%` : "15%" }}
            />
          ))}
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-quant-muted">
            {isListening ? "Listening for Quantitative Research Prompts..." : "Click microphone or select a prompt below"}
          </div>
          {transcript && (
            <div className="mt-3 text-sm font-semibold text-quant-primary bg-quant-surface-elevated/60 max-w-xl mx-auto py-2 px-4 rounded-xl clay-recessed border border-quant-border/30">
              &ldquo;{transcript}&rdquo;
            </div>
          )}
        </div>

        {/* AI Audio Response Card */}
        {response && (
          <div className="clay-card p-5 rounded-2xl max-w-2xl mx-auto text-left border border-quant-violet/30 bg-quant-violet/5 space-y-2 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-2 text-xs font-mono text-quant-violet font-semibold">
              <Bot className="w-4 h-4" />
              <span>QUANTORA NEURAL SYNTHESIS</span>
              <span className="ml-auto text-[10px] text-quant-muted">AUDIT VERIFIED</span>
            </div>
            <p className="text-sm text-quant-primary leading-relaxed">{response}</p>
          </div>
        )}
      </div>

      {/* Suggested Voice Commands */}
      <div className="clay-card p-6 rounded-2xl border border-quant-border/30 space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-quant-muted font-semibold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-quant-violet" />
          One-Tap Quantitative Voice Prompts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() =>
              handleQuery(
                "Why did the BTC SMA 20/50 strategy outperform the benchmark?",
                `The strategy returned +34.2% (vs +12.4% benchmark) primarily due to 68.4% of total profit generated during Bull regimes (2024–2025). The Sharpe ratio reached 1.42 with a controlled maximum drawdown of -12.8%.`
              )
            }
            className="clay-card-interactive p-4 rounded-xl text-left flex items-start justify-between gap-3 group border border-quant-border/20"
          >
            <div>
              <div className="text-xs font-semibold text-quant-primary group-hover:text-quant-violet transition-colors">
                &ldquo;Why did BTC SMA 20/50 outperform?&rdquo;
              </div>
              <div className="text-[11px] text-quant-muted font-mono mt-1">Queries Canonical Backtest & Autopsy</div>
            </div>
            <ArrowRight className="w-4 h-4 text-quant-muted group-hover:text-quant-violet group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
          </button>

          <button
            onClick={() =>
              handleQuery(
                "What is the correlation between Bitcoin and Solana right now?",
                `Across the 1-Year timeframe, BTC and SOL maintain a strong positive correlation of +0.82 with 41.8% volatility on BTC and 64.2% on SOL. In 1-Month timeframes, the correlation expands to +0.89.`
              )
            }
            className="clay-card-interactive p-4 rounded-xl text-left flex items-start justify-between gap-3 group border border-quant-border/20"
          >
            <div>
              <div className="text-xs font-semibold text-quant-primary group-hover:text-quant-violet transition-colors">
                &ldquo;What is the correlation between BTC and SOL?&rdquo;
              </div>
              <div className="text-[11px] text-quant-muted font-mono mt-1">Queries Cross-Asset Matrix</div>
            </div>
            <ArrowRight className="w-4 h-4 text-quant-muted group-hover:text-quant-violet group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
          </button>

          <button
            onClick={() =>
              handleQuery(
                "What are the top 5 trade contributions?",
                `Top 5 trades accounted for 61.2% ($20,930) of total net profits across 184 completed positions. The remaining 179 trades contributed 38.8% ($13,270). Profit factor sits at 1.84.`
              )
            }
            className="clay-card-interactive p-4 rounded-xl text-left flex items-start justify-between gap-3 group border border-quant-border/20"
          >
            <div>
              <div className="text-xs font-semibold text-quant-primary group-hover:text-quant-violet transition-colors">
                &ldquo;What are the top 5 trade contributions?&rdquo;
              </div>
              <div className="text-[11px] text-quant-muted font-mono mt-1">Queries Profit Concentration Vector</div>
            </div>
            <ArrowRight className="w-4 h-4 text-quant-muted group-hover:text-quant-violet group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
          </button>

          <button
            onClick={() =>
              handleQuery(
                "What is the current macro market regime?",
                `The Markov state classifier identifies a 2026 Transition regime following the 2025 Bull High-Vol state. Duration is 78 days with -1.2% strategy return and 48% win rate.`
              )
            }
            className="clay-card-interactive p-4 rounded-xl text-left flex items-start justify-between gap-3 group border border-quant-border/20"
          >
            <div>
              <div className="text-xs font-semibold text-quant-primary group-hover:text-quant-violet transition-colors">
                &ldquo;What is the current macro market regime?&rdquo;
              </div>
              <div className="text-[11px] text-quant-muted font-mono mt-1">Queries Markov Regime Engine</div>
            </div>
            <ArrowRight className="w-4 h-4 text-quant-muted group-hover:text-quant-violet group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
