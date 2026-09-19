"use client";

import { useState } from "react";
import { MonitorPlay, Scan, CheckCircle2, Sliders, Shield, Sparkles, ArrowRight, Eye, RefreshCw } from "lucide-react";
import { CANONICAL_BACKTEST, DEMO_ASSETS } from "@/lib/demo-data";
import { useMarketSimulation } from "@/lib/market-simulation";

export default function ScreenAIPage() {
  const { assets } = useMarketSimulation();
  const [scanning, setScanning] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);

  const handleScan = () => {
    setScanning(true);
    setAnalyzed(false);
    setTimeout(() => {
      setScanning(false);
      setAnalyzed(true);
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono tracking-wider text-quant-violet dark:text-quant-violet-bright font-semibold uppercase px-2 py-0.5 rounded-full clay-recessed border border-quant-violet/20">
              ASSIST / COMPUTER VISION QUANT
            </span>
            <span className="text-xs text-quant-muted font-mono">SCREEN AI ENGINE</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-quant-primary">
            Screen AI Analysis
          </h1>
          <p className="text-sm text-quant-muted mt-1">
            Real-time visual parser extracting indicator configurations, candlestick patterns, and order book anomalies.
          </p>
        </div>

        <button
          onClick={handleScan}
          disabled={scanning}
          className="clay-card-interactive px-5 py-2.5 rounded-xl font-medium text-sm text-quant-primary flex items-center gap-2 hover:text-quant-violet transition-all active:scale-[0.98] border border-quant-violet/30"
        >
          {scanning ? (
            <>
              <RefreshCw className="w-4 h-4 text-quant-violet animate-spin" />
              <span>Scanning Viewport...</span>
            </>
          ) : (
            <>
              <Scan className="w-4 h-4 text-quant-violet" />
              <span>Capture & Analyze Viewport</span>
            </>
          )}
        </button>
      </div>

      {/* Viewport Simulation Frame */}
      <div className="clay-card p-6 rounded-3xl border border-quant-border/30 relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between border-b border-quant-border/30 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-quant-muted ml-2">QUANTORA_VIEWPORT_STREAM://RESEARCH_DESK</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            OCR ACTIVE (30 FPS)
          </span>
        </div>

        <div className="relative rounded-2xl clay-recessed p-6 overflow-hidden border border-quant-border/40 min-h-[220px] flex flex-col justify-between">
          {/* Target detection boxes overlay */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.values(assets).map((asset) => (
              <div key={asset.symbol} className="p-3 rounded-xl bg-quant-surface/80 border border-quant-violet/30 relative">
                <div className="absolute top-1 right-2 text-[9px] font-mono text-quant-violet font-semibold">99.4% CONF</div>
                <div className="text-xs font-mono text-quant-muted">{asset.symbol}</div>
                <div className="text-base font-bold font-mono text-quant-primary mt-1">
                  ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="text-[11px] font-mono text-emerald-500">{asset.regime}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-xl bg-quant-surface/90 border border-quant-border/30 flex items-center justify-between">
            <div className="text-xs font-mono text-quant-primary flex items-center gap-2">
              <Eye className="w-4 h-4 text-quant-violet" />
              <span>Extracted Chart Primitive: <span className="font-semibold text-quant-violet">SMA 20/50 Golden Cross Formation</span></span>
            </div>
            <span className="text-[10px] font-mono text-quant-muted">LATENCY: 14ms</span>
          </div>
        </div>
      </div>

      {/* Screen AI Findings & Reasoning */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="clay-card p-6 rounded-2xl border border-quant-border/30 space-y-3">
          <h3 className="text-sm font-semibold text-quant-primary flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Detected Visual Patterns & Formations
          </h3>
          <ul className="space-y-2 text-xs font-mono text-quant-muted">
            <li className="flex items-start gap-2 p-2 rounded-lg clay-recessed">
              <span className="text-emerald-500 font-bold">✓</span>
              <div>
                <span className="text-quant-primary font-semibold">BTC Trend Following Momentum:</span> Price maintains support above the 50-day SMA ($98,420).
              </div>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg clay-recessed">
              <span className="text-emerald-500 font-bold">✓</span>
              <div>
                <span className="text-quant-primary font-semibold">SOL Volatility Compression:</span> Daily candle range narrowed to 1.8%, signaling potential breakout.
              </div>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg clay-recessed">
              <span className="text-emerald-500 font-bold">✓</span>
              <div>
                <span className="text-quant-primary font-semibold">GOLD Safe-Haven Divergence:</span> Steady +0.72% ascent during high crypto volatility.
              </div>
            </li>
          </ul>
        </div>

        <div className="clay-card p-6 rounded-2xl border border-quant-border/30 space-y-3">
          <h3 className="text-sm font-semibold text-quant-primary flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-quant-violet" />
            Automated Strategy Hypothesis
          </h3>
          <p className="text-xs text-quant-muted leading-relaxed">
            Screen AI observed parameter alignment between the active chart and the canonical <span className="font-semibold text-quant-primary">BTC Trend Following (SMA 20/50)</span> model. Backtest verification confirms a <span className="font-semibold text-emerald-500">+34.2%</span> historical edge with a <span className="font-semibold text-quant-primary">1.42 Sharpe</span>.
          </p>
          <div className="pt-2">
            <a
              href="/app/research/backtest"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-quant-violet hover:underline"
            >
              Verify in Backtest Engine <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
