"use client";

import { RotateCcw } from "lucide-react";
import type { ReactNode } from "react";

import { InfoTip } from "@/components/info-tip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ASSET_ORDER, assetColor, assetName } from "@/lib/colors";
import { useAssets } from "@/lib/queries";
import { resolveParams, useSettings } from "@/lib/store";
import type { AssetSymbol, SizingMethod, StrategyName, StrategySpec } from "@/lib/types";

const PARAM_LABEL: Record<string, { label: string; hint: string }> = {
  short_window: {
    label: "Fast average (bars)",
    hint: "Length of the fast moving average. Must be shorter than the slow one.",
  },
  long_window: { label: "Slow average (bars)", hint: "Length of the slow moving average." },
  span: { label: "EMA span (bars)", hint: "Long while the close is above this exponential average." },
  lookback: {
    label: "Lookback (bars)",
    hint: "Long while the return over this many bars is positive: P(t) ÷ P(t−k) − 1 > 0.",
  },
  window: {
    label: "Window (bars)",
    hint: "Length of the average and standard deviation the z-score is measured against.",
  },
  entry_z: {
    label: "Entry z-score",
    hint: "Enter long when the price is this many standard deviations below its average.",
  },
  exit_z: { label: "Exit z-score", hint: "Leave the position once the z-score recovers to this level." },
};

const SIZING: Record<
  SizingMethod,
  {
    label: string;
    hint: string;
    param: string;
    paramLabel: string;
    min: number;
    max: number;
    step: number;
    default: number;
    pct: boolean;
  }
> = {
  fixed: {
    label: "Fixed fraction",
    hint: "Hold a constant share of capital whenever the strategy is in the market.",
    param: "fraction",
    paramLabel: "Capital deployed",
    min: 0.1,
    max: 1,
    step: 0.05,
    default: 1,
    pct: true,
  },
  vol_target: {
    label: "Volatility target",
    hint: "w = min(1, target ÷ recent volatility). Positions shrink when the asset gets noisy.",
    param: "target_vol",
    paramLabel: "Target volatility (annual)",
    min: 0.05,
    max: 0.4,
    step: 0.01,
    default: 0.15,
    pct: true,
  },
  half_kelly: {
    label: "Half-Kelly",
    hint: "f = ½ · mean ÷ variance from a trailing window, capped. Sizes up only when recent edge is strong.",
    param: "cap",
    paramLabel: "Maximum weight",
    min: 0.25,
    max: 1,
    step: 0.05,
    default: 1,
    pct: true,
  },
};

function Field({
  label,
  hint,
  value,
  children,
}: {
  label: string;
  hint?: string;
  value?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <Label className="flex items-center gap-1.5 text-xs text-ink-2">
          {label}
          {hint ? <InfoTip label={`About ${label}`}>{hint}</InfoTip> : null}
        </Label>
        {value !== undefined ? <span className="tnum text-xs text-ink">{value}</span> : null}
      </div>
      {children}
    </div>
  );
}

function SliderField({
  label,
  hint,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <Field label={label} hint={hint} value={format(value)}>
      <Slider value={[value]} min={min} max={max} step={step} onValueChange={([v]) => onChange(v)} aria-label={label} />
    </Field>
  );
}

/** Parameter ranges come from the API; SMA also enforces fast < slow so the UI cannot send a request the API would reject. */
function bounds(strategy: StrategyName, key: string, spec: StrategySpec, params: Record<string, number>) {
  let { min, max } = spec.params[key];
  if (strategy === "sma_cross") {
    if (key === "short_window") max = Math.min(max, params.long_window - 1);
    if (key === "long_window") min = Math.max(min, params.short_window + 1);
  }
  return { min, max };
}

export function BacktestControls({ compact = false }: { compact?: boolean }) {
  const { data } = useAssets();
  const settings = useSettings((s) => s.settings);
  const patch = useSettings((s) => s.patch);
  const setStrategy = useSettings((s) => s.setStrategy);
  const setSizing = useSettings((s) => s.setSizing);
  const reset = useSettings((s) => s.reset);

  const specs = data?.strategies;
  const spec = specs?.find((s) => s.name === settings.strategy);
  const params = resolveParams(spec, settings.params);
  const asset = data?.assets.find((a) => a.symbol === settings.symbol);
  const sizing = SIZING[settings.sizing];
  const sizingValue = settings.sizingParams[sizing.param] ?? sizing.default;

  return (
    <Card className="border border-hairline bg-surface py-4">
      <CardHeader className="flex-row items-center justify-between px-4">
        <CardTitle className="text-base font-medium">Strategy</CardTitle>
        <Button variant="ghost" size="xs" onClick={reset}>
          <RotateCcw aria-hidden data-icon="inline-start" />
          Reset
        </Button>
      </CardHeader>
      <CardContent className="space-y-6 px-4">
        <Field label="Asset">
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            spacing={0}
            className="w-full"
            value={settings.symbol}
            onValueChange={(v) => v && patch({ symbol: v as AssetSymbol })}
            aria-label="Asset to backtest"
          >
            {ASSET_ORDER.map((s) => (
              <ToggleGroupItem key={s} value={s} className="flex-1 gap-1.5" aria-label={assetName(s)}>
                <span aria-hidden className="size-2 rounded-full" style={{ background: assetColor(s) }} />
                {assetName(s)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </Field>

        <Field label="Rule">
          <Select value={settings.strategy} onValueChange={(v) => setStrategy(v as StrategyName)}>
            <SelectTrigger className="w-full" aria-label="Strategy">
              <SelectValue placeholder="Choose a strategy" />
            </SelectTrigger>
            <SelectContent>
              {(specs ?? []).map((s) => (
                <SelectItem key={s.name} value={s.name}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        {spec
          ? Object.keys(spec.params).map((key) => {
              const { min, max } = bounds(settings.strategy, key, spec, params);
              const isZ = key.endsWith("_z");
              const meta = PARAM_LABEL[key] ?? { label: key, hint: "" };
              return (
                <SliderField
                  key={`${settings.strategy}-${key}`}
                  label={meta.label}
                  hint={meta.hint}
                  value={params[key]}
                  min={min}
                  max={max}
                  step={isZ ? 0.1 : 1}
                  format={(v) => (isZ ? v.toFixed(1) : String(v))}
                  onChange={(v) => patch({ params: { ...settings.params, [key]: v } })}
                />
              );
            })
          : null}

        <Field label="Long / short">
          <div className="flex items-center gap-2">
            <Switch id="allow-short" checked={settings.allowShort} onCheckedChange={(v) => patch({ allowShort: v })} />
            <Label htmlFor="allow-short" className="text-xs text-ink-2">
              Allow short positions
            </Label>
          </div>
        </Field>

        <div className="space-y-4 border-t border-hairline pt-5">
          <div className="flex items-center gap-1.5">
            <p className="text-xs font-medium text-ink">Trading costs</p>
            <InfoTip label="About trading costs">
              Factoring in broker commissions, exchange fees, or slippage (the difference between expected execution price and actual fill price). Without this, a high-frequency strategy might look profitable on paper but lose money in reality due to fee erosion.
            </InfoTip>
          </div>
          <SliderField
            label="Commission"
            hint="Charged on the value traded, each time the position changes."
            value={settings.feeBps}
            min={0}
            max={50}
            step={1}
            format={(v) => `${v} bps`}
            onChange={(v) => patch({ feeBps: v })}
          />
          <SliderField
            label="Slippage"
            hint="The gap between the price you expect and the price you get. Cost = |Δposition| × notional × (fee + slippage) ÷ 10,000, charged on the execution bar."
            value={settings.slippageBps}
            min={0}
            max={50}
            step={1}
            format={(v) => `${v} bps`}
            onChange={(v) => patch({ slippageBps: v })}
          />
        </div>

        <div className="space-y-4 border-t border-hairline pt-5">
          <div className="flex items-center gap-1.5">
            <p className="text-xs font-medium text-ink">Position sizing</p>
            <InfoTip label="About position sizing">
              Defining how much cash is allocated to a single trade so the model doesn't assume infinite buying power.
            </InfoTip>
          </div>
          <Select value={settings.sizing} onValueChange={(v) => setSizing(v as SizingMethod)}>
            <SelectTrigger className="w-full" aria-label="Position sizing">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(SIZING) as SizingMethod[]).map((m) => (
                <SelectItem key={m} value={m}>
                  {SIZING[m].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <SliderField
            key={settings.sizing}
            label={sizing.paramLabel}
            hint={sizing.hint}
            value={sizingValue}
            min={sizing.min}
            max={sizing.max}
            step={sizing.step}
            format={(v) => `${Math.round(v * 100)}%`}
            onChange={(v) => patch({ sizingParams: { [sizing.param]: Number(v.toFixed(2)) } })}
          />
        </div>

        {!compact ? (
          <div className="space-y-4 border-t border-hairline pt-5">
            <Field label="Starting capital">
              <Input
                type="number"
                inputMode="numeric"
                min={100}
                step={1000}
                value={settings.initialCapital}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (Number.isFinite(v) && v >= 100) patch({ initialCapital: v });
                }}
                aria-label="Starting capital in dollars"
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="From">
                <Input
                  type="date"
                  value={settings.start ?? ""}
                  min={asset?.cached_start ?? undefined}
                  max={settings.end ?? asset?.cached_end ?? undefined}
                  onChange={(e) => patch({ start: e.target.value || null })}
                  aria-label="Start date"
                />
              </Field>
              <Field label="To">
                <Input
                  type="date"
                  value={settings.end ?? ""}
                  min={settings.start ?? asset?.cached_start ?? undefined}
                  max={asset?.cached_end ?? undefined}
                  onChange={(e) => patch({ end: e.target.value || null })}
                  aria-label="End date"
                />
              </Field>
            </div>
            {asset?.cached_start ? (
              <p className="text-xs text-ink-3">
                Data runs {asset.cached_start} to {asset.cached_end}. Leave blank for the full history.
              </p>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
