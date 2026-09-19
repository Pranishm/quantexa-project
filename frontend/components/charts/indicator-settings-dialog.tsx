"use client";

import { useState } from "react";
import { X, Sliders, RotateCcw, Check, Plus, Trash2 } from "lucide-react";
import {
  DEFAULT_INDICATOR_CONFIGS,
  type IndicatorConfig,
  type IndicatorType,
} from "@/lib/indicators";

interface IndicatorSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeConfigs: IndicatorConfig[];
  onChangeConfigs: (configs: IndicatorConfig[]) => void;
}

export function IndicatorSettingsModal({
  isOpen,
  onClose,
  activeConfigs,
  onChangeConfigs,
}: IndicatorSettingsModalProps) {
  const [configs, setConfigs] = useState<IndicatorConfig[]>(activeConfigs);
  const [selectedType, setSelectedType] = useState<IndicatorType>("SMA");

  if (!isOpen) return null;

  const handleToggle = (id: string) => {
    const updated = configs.map((c) => (c.id === id ? { ...c, enabled: !c.enabled } : c));
    setConfigs(updated);
    onChangeConfigs(updated);
  };

  const handleParamChange = (id: string, paramKey: string, value: number) => {
    const updated = configs.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          params: {
            ...c.params,
            [paramKey]: value,
          },
        };
      }
      return c;
    });
    setConfigs(updated);
    onChangeConfigs(updated);
  };

  const handleReset = () => {
    setConfigs(DEFAULT_INDICATOR_CONFIGS);
    onChangeConfigs(DEFAULT_INDICATOR_CONFIGS);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="clay-card w-full max-w-2xl rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[var(--accent-muted)] text-[var(--accent)]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--text-primary)]">Quantitative Indicator Engine</h2>
              <p className="text-xs text-[var(--text-secondary)]">
                Configure mathematical overlays and momentum oscillators calculated on live market data.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Indicator List */}
        <div className="max-h-96 overflow-y-auto space-y-2.5 pr-1 font-mono text-xs">
          {configs.map((c) => (
            <div
              key={c.id}
              className={`p-3.5 rounded-2xl border transition-all ${
                c.enabled
                  ? "clay-card-elevated border-[var(--accent-border)] bg-[var(--bg-elevated)]"
                  : "clay-recessed border-[var(--border)] bg-[var(--bg-recessed)]/50 opacity-75"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleToggle(c.id)}
                    className={`w-4 h-4 rounded-md flex items-center justify-center border transition-colors ${
                      c.enabled
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "border-[var(--border)] bg-[var(--bg-surface)]"
                    }`}
                  >
                    {c.enabled && <Check className="w-3 h-3" />}
                  </button>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                  <span className="font-bold text-[var(--text-primary)]">{c.name}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)]">
                    {c.pane === "main" ? "Overlay" : "Subpanel"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {Object.entries(c.params).map(([key, val]) => (
                    <div key={key} className="flex items-center gap-1">
                      <span className="text-[10px] text-[var(--text-muted)] uppercase">{key}:</span>
                      <input
                        type="number"
                        value={val}
                        onChange={(e) => handleParamChange(c.id, key, parseFloat(e.target.value) || 0)}
                        className="w-14 px-2 py-0.5 rounded-lg clay-recessed bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-center text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-xl border border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-semibold text-xs transition-colors shadow-md"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
}
