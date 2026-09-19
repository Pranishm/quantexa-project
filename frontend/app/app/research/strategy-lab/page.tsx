"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Plus, 
  ArrowRight, 
  ArrowDown, 
  Sliders, 
  Play, 
  ShieldCheck, 
  Database,
  Layers,
  Cpu,
  Trash2,
  CheckCircle2,
  MoveDown,
  Sparkles
} from "lucide-react";
import Link from "next/link";

interface StrategyOperator {
  id: string;
  name: string;
  type: string;
  description: string;
  output: string;
  paramKey?: string;
  paramValue?: string;
}

const DEFAULT_FLOW: StrategyOperator[] = [
  { id: "op-1", name: "PRICE (OHLCV)", type: "DATA SOURCE", description: "As-reported daily close prices", output: "Series[Float]", paramKey: "TICKER", paramValue: "BTC/USD" },
  { id: "op-2", name: "SMA 50", type: "OPERATOR", description: "50-period rolling simple moving average", output: "Series[Float]", paramKey: "WINDOW", paramValue: "50" },
  { id: "op-3", name: "SMA 200", type: "OPERATOR", description: "200-period baseline moving average", output: "Series[Float]", paramKey: "WINDOW", paramValue: "200" },
  { id: "op-4", name: "CROSS ABOVE", type: "LOGIC GATE", description: "Boolean signal: SMA(50) > SMA(200) transition", output: "Signal[Boolean]", paramKey: "TRIGGER", paramValue: "FAST > SLOW" },
  { id: "op-5", name: "EXECUTE BUY", type: "EXECUTION", description: "T+1 open market fill with 10bps slippage model", output: "Order[Filled]", paramKey: "SLIPPAGE", paramValue: "10 bps" },
];

const AVAILABLE_OPERATORS = [
  { name: "RSI 14", type: "MOMENTUM", description: "14-period Relative Strength Index oscillator", output: "Series[Float]", paramKey: "PERIOD", paramValue: "14" },
  { name: "ATR 20", type: "VOLATILITY", description: "Average True Range risk-normalized stop boundary", output: "Series[Float]", paramKey: "MULTIPLIER", paramValue: "2.5x" },
  { name: "BOLLINGER BANDS", type: "BAND", description: "20-period 2.0-sigma volatility bands", output: "Bands[Upper,Lower]", paramKey: "SIGMA", paramValue: "2.0" },
];

export default function StrategyLabPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"Builder" | "Library" | "Experiments" | "Saved">("Builder");
  const [asset, setAsset] = useState("BTC/USD");
  const [timeframe, setTimeframe] = useState("1D");
  const [sizing, setSizing] = useState("Half-Kelly");
  const [riskLimit, setRiskLimit] = useState("8.0%");
  const [feeBps, setFeeBps] = useState("5.0");
  const [slippageBps, setSlippageBps] = useState("10.0");

  const [nodes, setNodes] = useState<StrategyOperator[]>(DEFAULT_FLOW);
  const [selectedNodeId, setSelectedNodeId] = useState<string>("op-2");

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  const handleAddOperator = (op: typeof AVAILABLE_OPERATORS[0]) => {
    const newNode: StrategyOperator = {
      id: `op-${Date.now()}`,
      name: op.name,
      type: op.type,
      description: op.description,
      output: op.output,
      paramKey: op.paramKey,
      paramValue: op.paramValue,
    };
    // insert right before execution
    setNodes((prev) => {
      const copy = [...prev];
      copy.splice(copy.length - 1, 0, newNode);
      return copy;
    });
    setSelectedNodeId(newNode.id);
  };

  const handleRemoveNode = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (nodes.length <= 2) return;
    setNodes((prev) => prev.filter((n) => n.id !== id));
    if (selectedNodeId === id) {
      setSelectedNodeId(nodes[0].id);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">STRATEGY LAB</h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]">
              MOLDED GRAPH ENGINE
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Molded tactile node operators, deterministic signal graphs, and execution parameter curves.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleAddOperator(AVAILABLE_OPERATORS[0])}
            className="flex items-center gap-1.5 px-3 py-1.5 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] rounded-xl text-xs font-semibold"
          >
            <Plus className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Add Clay Node</span>
          </button>
        </div>
      </div>

      {/* Tabs with Recessed Well */}
      <div className="flex items-center gap-1.5 clay-recessed-sm p-1 rounded-xl w-fit">
        {(["Builder", "Library", "Experiments", "Saved"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === tab
                ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3-Column Workstation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Strategy Configuration (Molded Clay Card) */}
        <div className="lg:col-span-3 clay-card p-5 space-y-4 text-xs rounded-2xl">
          <div className="border-b border-[var(--border)] pb-2.5">
            <h2 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              STRATEGY CONFIGURATION
            </h2>
            <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Tactile input parameters & friction</div>
          </div>

          <div className="space-y-3.5">
            <div>
              <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1.5">Underlying Asset</label>
              <select
                value={asset}
                onChange={(e) => setAsset(e.target.value)}
                className="w-full clay-recessed-sm bg-[var(--bg-surface)] rounded-xl px-3 py-2 text-[var(--text-primary)] focus:outline-none cursor-pointer"
              >
                <option value="BTC/USD">BTC/USD (Bitcoin Spot)</option>
                <option value="NVDA">NVDA (NVIDIA Corp)</option>
                <option value="GOLD">GOLD (Gold Futures)</option>
                <option value="SOL/USD">SOL/USD (Solana Spot)</option>
              </select>
            </div>

            <div>
              <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1.5">Sampling Timeframe</label>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full clay-recessed-sm bg-[var(--bg-surface)] rounded-xl px-3 py-2 text-[var(--text-primary)] focus:outline-none cursor-pointer"
              >
                <option value="1D">1-Day (Daily Bars)</option>
                <option value="4H">4-Hour</option>
                <option value="1H">1-Hour</option>
              </select>
            </div>

            <div>
              <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1.5">Position Sizing Logic</label>
              <select
                value={sizing}
                onChange={(e) => setSizing(e.target.value)}
                className="w-full clay-recessed-sm bg-[var(--bg-surface)] rounded-xl px-3 py-2 text-[var(--text-primary)] focus:outline-none cursor-pointer"
              >
                <option value="Half-Kelly">Half-Kelly Criterion (Optimal)</option>
                <option value="Fixed 25%">Fixed 25% Portfolio Capital</option>
                <option value="Vol-Target">Volatility Target (20% Annual)</option>
              </select>
            </div>

            <div>
              <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1.5">Max DD Stop (Risk Limit)</label>
              <input
                type="text"
                value={riskLimit}
                onChange={(e) => setRiskLimit(e.target.value)}
                className="w-full clay-recessed-sm bg-[var(--bg-surface)] rounded-xl px-3 py-2 text-[var(--text-primary)] font-mono focus:outline-none"
              >
              </input>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1.5">Fees (bps)</label>
                <input
                  type="text"
                  value={feeBps}
                  onChange={(e) => setFeeBps(e.target.value)}
                  className="w-full clay-recessed-sm bg-[var(--bg-surface)] rounded-xl px-3 py-2 text-[var(--text-primary)] font-mono focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1.5">Slippage (bps)</label>
                <input
                  type="text"
                  value={slippageBps}
                  onChange={(e) => setSlippageBps(e.target.value)}
                  className="w-full clay-recessed-sm bg-[var(--bg-surface)] rounded-xl px-3 py-2 text-[var(--text-primary)] font-mono focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Quick Add Palette */}
          <div className="pt-3 border-t border-[var(--border)]">
            <span className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider block mb-2">
              Available Clay Operators
            </span>
            <div className="flex flex-col gap-1.5">
              {AVAILABLE_OPERATORS.map((op) => (
                <button
                  key={op.name}
                  onClick={() => handleAddOperator(op)}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg clay-interactive bg-[var(--bg-surface)] text-[11px] text-[var(--text-primary)] text-left"
                >
                  <span className="font-semibold">{op.name}</span>
                  <span className="text-[9px] text-[var(--accent)] font-mono">{op.type}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER: Strategy Logic (Interactive Molded Clay Node Operators) */}
        <div className="lg:col-span-6 clay-surface p-6 space-y-5 rounded-2xl">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <div>
              <h2 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                STRATEGY LOGIC OPERATOR GRAPH
              </h2>
              <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Click any operator to sink into surface and inspect parameters</div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--positive)]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{nodes.length} NODES VALIDATED</span>
            </div>
          </div>

          {/* Clean Molded Node Flow */}
          <div className="py-2 space-y-3 flex flex-col items-center">
            {nodes.map((op, idx) => {
              const isSelected = op.id === selectedNodeId;
              return (
                <div key={op.id} className="w-full flex flex-col items-center">
                  <div 
                    onClick={() => setSelectedNodeId(op.id)}
                    className={`w-full max-w-md p-4 cursor-pointer select-none transition-all duration-200 ${
                      isSelected
                        ? "clay-surface-recessed border border-[var(--accent-border)] transform translate-y-1 shadow-inner"
                        : "clay-node hover:-translate-y-1"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[var(--accent)] animate-ping" : "bg-[var(--text-muted)]"}`} />
                        <span className="text-xs font-mono font-bold text-[var(--text-primary)]">{op.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[var(--accent)] bg-[var(--accent-muted)] px-2.5 py-0.5 rounded-full font-semibold">
                          {op.type}
                        </span>
                        {nodes.length > 2 && idx !== 0 && idx !== nodes.length - 1 && (
                          <button
                            onClick={(e) => handleRemoveNode(op.id, e)}
                            className="p-1 text-[var(--text-muted)] hover:text-[var(--negative)] transition-colors"
                            title="Remove operator"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                      {op.description}
                    </div>

                    <div className="text-[10px] text-[var(--text-muted)] font-mono mt-2.5 pt-2 border-t border-[var(--border)] flex justify-between items-center">
                      <span>OUTPUT: <strong className="text-[var(--text-primary)]">{op.output}</strong></span>
                      {op.paramKey && (
                        <span className="text-[var(--accent)]">
                          {op.paramKey}: <strong>{op.paramValue}</strong>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pulsing Connector with Signal Pulse Dot */}
                  {idx < nodes.length - 1 && (
                    <div className="py-2 flex flex-col items-center relative">
                      <div className="w-0.5 h-6 bg-[var(--border-strong)] relative flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
                      </div>
                      <ArrowDown className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Inspector */}
          {selectedNode && (
            <div className="clay-recessed p-4 rounded-xl space-y-2 mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--text-primary)]">
                  ACTIVE OPERATOR INSPECTOR: <strong className="text-[var(--accent)] font-mono">{selectedNode.name}</strong>
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">REAL-TIME INJECTION</span>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)]">
                {selectedNode.description}. Signal transforms are strictly point-in-time and verified against the execution pipeline.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT: Live Preview (Molded Clay Card) */}
        <div className="lg:col-span-3 clay-card p-5 flex flex-col justify-between text-xs rounded-2xl">
          <div className="space-y-4">
            <div className="border-b border-[var(--border)] pb-2.5">
              <h2 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                ANALYTICAL PREVIEW
              </h2>
              <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Projected model telemetry</div>
            </div>

            <div className="divide-y divide-[var(--border)] space-y-2.5">
              <div className="pt-2 flex justify-between">
                <span className="text-[var(--text-secondary)]">Target Instrument:</span>
                <span className="font-mono text-[var(--text-primary)] font-bold">{asset}</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[var(--text-secondary)]">Expected Trades:</span>
                <span className="font-mono text-[var(--text-primary)] font-semibold">184</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[var(--text-secondary)]">Max Exposure:</span>
                <span className="font-mono text-[var(--text-primary)] font-semibold">25.0%</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[var(--text-secondary)]">Projected Sharpe:</span>
                <span className="font-mono text-[var(--positive)] font-bold">1.42</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[var(--text-secondary)]">Max Drawdown:</span>
                <span className="font-mono text-[var(--negative)] font-semibold">-18.32%</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[var(--text-secondary)]">Benchmark Index:</span>
                <span className="font-mono text-[var(--text-secondary)]">SPY 500</span>
              </div>
            </div>

            {/* Clay Forecast Bar */}
            <div className="pt-3">
              <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono mb-1">
                <span>WIN RATE FORECAST</span>
                <span>64.2%</span>
              </div>
              <div className="w-full h-2 rounded-full clay-recessed-sm overflow-hidden p-0.5">
                <div className="h-full bg-[var(--positive)] rounded-full w-[64.2%]" />
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-[var(--border)]">
            <button
              onClick={() => router.push(`/app/research/backtest?asset=${encodeURIComponent(asset)}`)}
              className="w-full flex items-center justify-center gap-2 py-3 clay-button-primary rounded-xl text-xs font-bold transition-all uppercase tracking-wider cursor-pointer"
            >
              <span>Execute Full Backtest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
