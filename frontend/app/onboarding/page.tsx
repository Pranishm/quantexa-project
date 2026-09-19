"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, CheckSquare, Square } from "lucide-react";
import { useAuthStore } from "@/lib/auth/store";

export default function OnboardingPage() {
  const router = useRouter();
  const { loginAsDemo } = useAuthStore();

  const [step, setStep] = useState(1);

  // Step 1: Research Focus (Multiple selection)
  const [focuses, setFocuses] = useState<string[]>(["crypto", "equities", "commodities"]);

  // Step 2: Choose Markets
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>(["btc", "sol", "nvda", "gold"]);

  // Step 3: Interests (Multiple selection)
  const [interests, setInterests] = useState<string[]>([
    "Market analysis",
    "Strategy research",
    "Backtesting",
    "Risk analysis",
  ]);

  const toggleFocus = (f: string) => {
    setFocuses((prev) =>
      prev.includes(f) ? prev.filter((item) => item !== f) : [...prev, f]
    );
  };

  const toggleMarket = (m: string) => {
    setSelectedMarkets((prev) =>
      prev.includes(m) ? prev.filter((item) => item !== m) : [...prev, m]
    );
  };

  const toggleInterest = (i: string) => {
    setInterests((prev) =>
      prev.includes(i) ? prev.filter((item) => item !== i) : [...prev, i]
    );
  };

  const handleFinish = () => {
    loginAsDemo("researcher");
    router.push("/app/overview");
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)] flex flex-col justify-center items-center px-4 font-sans selection:bg-[var(--accent)]/20">
      <div className="w-full max-w-xl bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 space-y-6 clay-card">
        {/* Step Indicator */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
          <div>
            <span className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
              STEP {step} OF 4 · INITIAL CALIBRATION
            </span>
            <h1 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
              {step === 1 && "Welcome to QUANTORA"}
              {step === 2 && "Choose Your Markets"}
              {step === 3 && "Research Objectives"}
              {step === 4 && "Station Ready"}
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((s) => (
              <span
                key={s}
                className={`w-2 h-2 rounded-full transition-all ${
                  step === s
                    ? "bg-[var(--accent)] scale-125"
                    : step > s
                    ? "bg-[var(--positive)]"
                    : "bg-[var(--border)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* STEP 1: What do you want to research? */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-[var(--text-primary)]">
                What do you want to research?
              </label>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Select one or more primary asset categories for your terminal workspace.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "crypto", label: "Crypto", desc: "Bitcoin, Solana, L1s" },
                { id: "equities", label: "Equities", desc: "NVIDIA, Semis, Indices" },
                { id: "commodities", label: "Commodities", desc: "Physical Gold, Reserves" },
                { id: "multi_asset", label: "Multi-Asset", desc: "Cross-Asset Regime Analysis" },
              ].map((item) => {
                const selected = focuses.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleFocus(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all clay-interactive ${
                      selected
                        ? "bg-[var(--bg-elevated)] border-[var(--accent)] text-[var(--text-primary)] clay-recessed"
                        : "bg-[var(--bg-surface)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs">{item.label}</span>
                      {selected && <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />}
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1">{item.desc}</p>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-root)] hover:bg-white font-semibold text-xs transition-all flex items-center justify-center gap-2 mt-4 clay-button"
            >
              <span>CONTINUE TO MARKETS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* STEP 2: Choose your markets */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-[var(--text-primary)]">
                Choose your markets
              </label>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Enable dedicated tick feeds and risk models for these core institutional assets.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              {/* Crypto */}
              <div className="space-y-1.5">
                <div className="text-[10px] uppercase font-semibold text-[var(--text-muted)] tracking-wider">
                  CRYPTO
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "btc", label: "Bitcoin", ticker: "BTC/USD" },
                    { id: "sol", label: "Solana", ticker: "SOL/USD" },
                  ].map((m) => {
                    const sel = selectedMarkets.includes(m.id);
                    return (
                      <button
                        key={m.id}
                        onClick={() => toggleMarket(m.id)}
                        className={`p-2.5 rounded-lg border flex items-center justify-between text-left transition-all ${
                          sel
                            ? "bg-[var(--bg-elevated)] border-[var(--accent)] text-[var(--text-primary)] clay-recessed-sm"
                            : "bg-[var(--bg-surface)] border-[var(--border)] text-[var(--text-secondary)]"
                        }`}
                      >
                        <div>
                          <div className="font-medium">{m.label}</div>
                          <div className="text-[10px] font-mono text-[var(--text-muted)]">{m.ticker}</div>
                        </div>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${sel ? "border-[var(--accent)] bg-[var(--accent)]" : "border-[var(--border-strong)]"}`}>
                          {sel && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Equities */}
              <div className="space-y-1.5">
                <div className="text-[10px] uppercase font-semibold text-[var(--text-muted)] tracking-wider">
                  EQUITIES
                </div>
                <div>
                  {[
                    { id: "nvda", label: "NVIDIA", ticker: "NVDA (Semiconductor & Compute)" },
                  ].map((m) => {
                    const sel = selectedMarkets.includes(m.id);
                    return (
                      <button
                        key={m.id}
                        onClick={() => toggleMarket(m.id)}
                        className={`w-full p-2.5 rounded-lg border flex items-center justify-between text-left transition-all ${
                          sel
                            ? "bg-[var(--bg-elevated)] border-[var(--accent)] text-[var(--text-primary)] clay-recessed-sm"
                            : "bg-[var(--bg-surface)] border-[var(--border)] text-[var(--text-secondary)]"
                        }`}
                      >
                        <div>
                          <div className="font-medium">{m.label}</div>
                          <div className="text-[10px] font-mono text-[var(--text-muted)]">{m.ticker}</div>
                        </div>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${sel ? "border-[var(--accent)] bg-[var(--accent)]" : "border-[var(--border-strong)]"}`}>
                          {sel && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Commodities */}
              <div className="space-y-1.5">
                <div className="text-[10px] uppercase font-semibold text-[var(--text-muted)] tracking-wider">
                  COMMODITIES
                </div>
                <div>
                  {[
                    { id: "gold", label: "Gold", ticker: "XAU/USD (Physical Reserve)" },
                  ].map((m) => {
                    const sel = selectedMarkets.includes(m.id);
                    return (
                      <button
                        key={m.id}
                        onClick={() => toggleMarket(m.id)}
                        className={`w-full p-2.5 rounded-lg border flex items-center justify-between text-left transition-all ${
                          sel
                            ? "bg-[var(--bg-elevated)] border-[var(--accent)] text-[var(--text-primary)] clay-recessed-sm"
                            : "bg-[var(--bg-surface)] border-[var(--border)] text-[var(--text-secondary)]"
                        }`}
                      >
                        <div>
                          <div className="font-medium">{m.label}</div>
                          <div className="text-[10px] font-mono text-[var(--text-muted)]">{m.ticker}</div>
                        </div>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${sel ? "border-[var(--accent)] bg-[var(--accent)]" : "border-[var(--border-strong)]"}`}>
                          {sel && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setStep(1)}
                className="py-2.5 px-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] clay-button"
              >
                BACK
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-root)] hover:bg-white font-semibold text-xs transition-all flex items-center justify-center gap-2 clay-button"
              >
                <span>PROCEED TO OBJECTIVES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: What are you interested in? */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-[var(--text-primary)]">
                What are you interested in?
              </label>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Check all analytical workflows you plan to execute on Quantora.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {[
                "Market analysis",
                "Strategy research",
                "Backtesting",
                "Risk analysis",
                "Paper trading",
                "Learning quantitative finance",
              ].map((opt) => {
                const checked = interests.includes(opt);
                return (
                  <div
                    key={opt}
                    onClick={() => toggleInterest(opt)}
                    className={`p-3 rounded-lg border cursor-pointer flex items-center gap-3 transition-all ${
                      checked
                        ? "bg-[var(--bg-elevated)] border-[var(--accent)] text-[var(--text-primary)] clay-recessed-sm"
                        : "bg-[var(--bg-surface)] border-[var(--border)] text-[var(--text-secondary)]"
                    }`}
                  >
                    {checked ? (
                      <CheckSquare className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                    )}
                    <span className="font-medium">{opt}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setStep(2)}
                className="py-2.5 px-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] clay-button"
              >
                BACK
              </button>
              <button
                onClick={() => setStep(4)}
                className="flex-1 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-root)] hover:bg-white font-semibold text-xs transition-all flex items-center justify-center gap-2 clay-button"
              >
                <span>PREPARE STATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Your research station is ready */}
        {step === 4 && (
          <div className="text-center space-y-5 py-4">
            <div className="w-14 h-14 rounded-full bg-[var(--positive)]/15 border border-[var(--positive)]/40 text-[var(--positive)] flex items-center justify-center mx-auto clay-card">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Your research station is ready.
              </h2>
              <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                We have normalized market structures for Bitcoin, Solana, Gold, and NVIDIA, calibrated the 6-state Regime Engine, and primed the Evidence Copilot.
              </p>
            </div>

            <div className="p-3 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-xs font-mono text-[var(--text-muted)] max-w-sm mx-auto flex items-center justify-between clay-recessed-sm">
              <span>Environment: Institutional Researcher</span>
              <span className="text-[var(--positive)]">CALIBRATED</span>
            </div>

            <div className="pt-2">
              <button
                onClick={handleFinish}
                className="w-full py-3 bg-[var(--accent)] hover:opacity-95 text-white font-semibold rounded-lg text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 clay-button-primary"
              >
                <span>ENTER QUANTORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
