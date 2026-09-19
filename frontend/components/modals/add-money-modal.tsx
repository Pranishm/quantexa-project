"use client";

import { useState } from "react";
import { X, Check, Shield, CreditCard, ArrowRight } from "lucide-react";
import { useWorkspace } from "@/components/context/workspace-context";

export function AddMoneyModal() {
  const { isAddMoneyOpen, setIsAddMoneyOpen, realBalance, addRealFunds, virtualBalance } = useWorkspace();
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [step, setStep] = useState<"SELECT" | "PROCESSING" | "SUCCESS">("SELECT");

  if (!isAddMoneyOpen) return null;

  const presets = [500, 1000, 2500, 5000];

  const handleDeposit = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (!amount || isNaN(amount) || amount <= 0) return;

    setStep("PROCESSING");
    setTimeout(() => {
      addRealFunds(amount);
      setStep("SUCCESS");
      setTimeout(() => {
        setStep("SELECT");
        setIsAddMoneyOpen(false);
      }, 1400);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-2xl clay-card bg-[var(--bg-surface)] border border-[var(--border-strong)] p-6 shadow-2xl relative">
        <button
          onClick={() => { setStep("SELECT"); setIsAddMoneyOpen(false); }}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] clay-button transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {step === "SELECT" && (
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                <CreditCard className="w-4 h-4" />
                <span>Account Wallet</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mt-1">Deposit Real Funds</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Fund your live research and API execution account. This is strictly separate from your virtual Paper Trading capital.
              </p>
            </div>

            {/* Current balances strip */}
            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono">
              <div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Real Balance</div>
                <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">
                  ₹{realBalance.toLocaleString("en-IN")}
                </div>
                <div className="text-[9px] text-[var(--positive)] mt-0.5">Active for Live API / Data</div>
              </div>
              <div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Virtual Capital</div>
                <div className="text-base font-bold text-[var(--text-muted)] mt-0.5">
                  ${virtualBalance.toLocaleString("en-US")}
                </div>
                <div className="text-[9px] text-[var(--text-muted)] mt-0.5">Paper Trading Sandbox</div>
              </div>
            </div>

            {/* Presets */}
            <div>
              <label className="text-xs text-[var(--text-secondary)] font-medium mb-2 block">
                Select Amount (INR)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {presets.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                    className={`py-2 px-1 rounded-xl text-xs font-mono font-bold transition-all ${
                      selectedAmount === amt && !customAmount
                        ? "bg-[var(--accent)] text-white shadow-md border-transparent"
                        : "clay-button text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    ₹{amt.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom amount */}
            <div>
              <label className="text-xs text-[var(--text-secondary)] font-medium mb-1.5 block">
                Or Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[var(--text-muted)] font-mono">₹</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setSelectedAmount(0);
                  }}
                  className="w-full pl-8 pr-3 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-sm font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)] bg-[var(--bg-recessed)]/50 p-2.5 rounded-xl border border-[var(--border)]">
              <Shield className="w-3.5 h-3.5 text-[var(--positive)] shrink-0" />
              <span>Payments routed via PCI-DSS compliant checkout. No card details stored.</span>
            </div>

            <button
              onClick={handleDeposit}
              className="w-full py-2.5 px-4 rounded-xl bg-[var(--accent)] text-white font-medium text-sm clay-button flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-md"
            >
              <span>Continue to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === "PROCESSING" && (
          <div className="py-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border-3 border-[var(--accent)] border-t-transparent animate-spin mx-auto" />
            <div className="text-sm font-medium text-[var(--text-primary)]">Connecting to Secure Payment Gateway...</div>
            <div className="text-xs text-[var(--text-muted)] font-mono">Simulating 256-bit encrypted transaction</div>
          </div>
        )}

        {step === "SUCCESS" && (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[var(--positive)]/20 text-[var(--positive)] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-base font-bold text-[var(--text-primary)]">Deposit Completed Successfully</div>
            <div className="text-xs text-[var(--text-secondary)] font-mono">
              New Wallet Balance: ₹{realBalance.toLocaleString("en-IN")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
