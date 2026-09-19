import type { AssetSymbol } from "./types";

/**
 * Chart colours. These mirror the tokens in app/globals.css (charts draw to a
 * canvas and cannot read CSS variables), and every categorical value here was
 * checked with the data-viz palette validator against the surface below.
 */

export const SURFACE = "#0a0a0a";
export const PLANE = "#050505";

export const INK = {
  primary: "#f0f0f0",
  secondary: "#a8a8a8",
  muted: "#666666",
  hairline: "#1c1c1c",
  rule: "#333333",
} as const;

export const STATUS = {
  good: "#0ca30c",
  warning: "#fab219",
  serious: "#ec835a",
  critical: "#d03b3b",
} as const;

/** Entity colours: fixed per asset on every page. Colour follows the asset, never its rank. */
export const ASSET_COLOR: Record<AssetSymbol, string> = {
  "GC=F": "#c98500",
  "BTC-USD": "#3987e5",
  NVDA: "#199e70",
  BTC: "#3987e5",
  SOL: "#7868ff",
  GOLD: "#c98500",
};

export const ASSET_SHORT: Record<AssetSymbol, string> = {
  "GC=F": "Gold",
  "BTC-USD": "Bitcoin",
  NVDA: "NVIDIA",
  BTC: "Bitcoin",
  SOL: "Solana",
  GOLD: "Gold",
};

export const ASSET_ORDER: AssetSymbol[] = ["GC=F", "BTC-USD", "NVDA"];

export const assetColor = (symbol: string): string => ASSET_COLOR[symbol as AssetSymbol] ?? INK.secondary;
export const assetName = (symbol: string): string => ASSET_SHORT[symbol as AssetSymbol] ?? symbol;

/** Indicator overlays on the candle chart. The third is neutral ink, identified by its label. */
export const OVERLAY = ["#9085e9", "#d55181", "#a8a8a8"] as const;

/** Benchmark lines are deliberately recessive so the strategy carries the emphasis. */
export const BENCHMARK = "#666666";

export const POLE_POSITIVE = "#3987e5";
export const POLE_NEGATIVE = "#e66767";

// --- colour maths -----------------------------------------------------------

type RGB = [number, number, number];
type Lab = [number, number, number];

export function hexToRgb(hex: string): RGB {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  return [parseInt(full.slice(0, 2), 16), parseInt(full.slice(2, 4), 16), parseInt(full.slice(4, 6), 16)];
}

export function rgbToHex([r, g, b]: RGB): string {
  return `#${[r, g, b]
    .map((v) =>
      Math.max(0, Math.min(255, Math.round(v)))
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}

const toLinear = (c: number) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};
const fromLinear = (v: number) => 255 * (v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055);

/** sRGB to OKLab (Ottosson). Interpolating here keeps lightness monotone along a ramp. */
function toOklab(hex: string): Lab {
  const [r, g, b] = hexToRgb(hex).map(toLinear);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

function fromOklab([L, a, b]: Lab): string {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return rgbToHex([
    fromLinear(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    fromLinear(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    fromLinear(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ]);
}

/** Blend two colours in OKLab. t = 0 gives `a`, t = 1 gives `b`. */
export function mix(a: string, b: string, t: number): string {
  const [la, aa, ba] = toOklab(a);
  const [lb, ab, bb] = toOklab(b);
  return fromOklab([la + (lb - la) * t, aa + (ab - aa) * t, ba + (bb - ba) * t]);
}

export function withAlpha(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** Text colour that stays legible on top of `background`. */
export function readableInk(background: string): string {
  return contrast(background, "#0d0d0d") >= contrast(background, "#ffffff") ? "#0d0d0d" : "#ffffff";
}

// --- diverging scale (correlation, Sharpe) ------------------------------------

/**
 * Blue (positive) to red (negative) around a neutral gray midpoint. Both arms
 * step in OKLab, so lightness rises monotonically away from the centre and the
 * midpoint reads as "nothing" rather than as a hue.
 */
export function divergingRamp(stepsPerArm = 4): string[] {
  const arm = (pole: string) =>
    Array.from({ length: stepsPerArm }, (_, i) => mix(INK.rule, pole, (i + 1) / stepsPerArm));
  return [...arm(POLE_NEGATIVE).reverse(), INK.rule, ...arm(POLE_POSITIVE)];
}

/** Colour for `value` on a symmetric scale of +/- `limit`. */
export function divergingColor(value: number, limit: number): string {
  const t = Math.max(-1, Math.min(1, value / limit));
  return mix(INK.rule, t >= 0 ? POLE_POSITIVE : POLE_NEGATIVE, Math.abs(t));
}

// --- regimes -------------------------------------------------------------------

export interface RegimeStyle {
  fill: string;
  trend: "Bull" | "Bear";
  vol: "Low vol" | "High vol";
}

/**
 * Two factors, two channels: hue carries the trend (blue bull, red bear, the
 * diverging poles) and intensity carries volatility (muted = calm, saturated =
 * stressed). The backend's own regime colours are not used.
 */
export const REGIME_STYLE: Record<string, RegimeStyle> = {
  "Bull / Low vol": { fill: mix(SURFACE, POLE_POSITIVE, 0.38), trend: "Bull", vol: "Low vol" },
  "Bull / High vol": { fill: mix(SURFACE, POLE_POSITIVE, 0.95), trend: "Bull", vol: "High vol" },
  "Bear / Low vol": { fill: mix(SURFACE, POLE_NEGATIVE, 0.38), trend: "Bear", vol: "Low vol" },
  "Bear / High vol": { fill: mix(SURFACE, POLE_NEGATIVE, 0.95), trend: "Bear", vol: "High vol" },
};

export const REGIME_ORDER = ["Bull / Low vol", "Bull / High vol", "Bear / Low vol", "Bear / High vol"] as const;

export const regimeFill = (regime: string): string => REGIME_STYLE[regime]?.fill ?? INK.rule;

/** HMM states are ordered risk-off to risk-on, so they take the diverging scale. */
export const HMM_FILL: Record<string, string> = {
  "Risk-off": mix(SURFACE, POLE_NEGATIVE, 0.85),
  Neutral: INK.rule,
  "Risk-on": mix(SURFACE, POLE_POSITIVE, 0.85),
};
