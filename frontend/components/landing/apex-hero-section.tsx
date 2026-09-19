"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import {
  TrendingUp,
  Zap,
  ShieldCheck,
  ArrowRightCircle,
  Layers,
  BarChart3,
  Sliders,
  CheckCircle2,
  Cpu,
  Activity,
  ArrowRight
} from "lucide-react";

// Dynamic import with SSR false for WebGL Canvas
const ApexHero3D = dynamic(() => import("./apex-hero-3d"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full bg-[#05070C] flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-[#00E599]/30 animate-ping opacity-30" />
    </div>
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function ApexHeroSection({
  onExploreOptions,
  isDark: propIsDark,
}: {
  onExploreOptions: () => void;
  isDark?: boolean;
}) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof propIsDark === "boolean") return propIsDark;
    if (typeof document === "undefined") return true;
    return !document.documentElement.classList.contains("light");
  });

  // Keep state in sync with props or document class mutations
  useEffect(() => {
    if (typeof propIsDark === "boolean") {
      setIsDark(propIsDark);
      return;
    }

    const checkTheme = () => {
      setIsDark(!document.documentElement.classList.contains("light"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [propIsDark]);

  const [btcPrice, setBtcPrice] = useState(104846.2);
  const [btcChange, setBtcChange] = useState(2.41);
  const [isUpTick, setIsUpTick] = useState(true);
  const priceControls = useAnimationControls();
  const lastPriceRef = useRef(104846.2);

  // Live price tick loop with Framer Motion background flash
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 52;
      const newPrice = Math.max(98000, lastPriceRef.current + delta);
      const isUp = newPrice >= lastPriceRef.current;
      lastPriceRef.current = newPrice;

      setBtcPrice(Number(newPrice.toFixed(2)));
      setBtcChange(Number((((newPrice - 102400) / 102400) * 100).toFixed(2)));
      setIsUpTick(isUp);

      const flashColor = isUp ? "rgba(0, 229, 153, 0.28)" : "rgba(255, 59, 105, 0.28)";
      const baseBg = isDark ? "rgba(16, 19, 28, 0.88)" : "rgba(255, 255, 255, 0.92)";

      priceControls.start({
        backgroundColor: [flashColor, baseBg],
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }, 3600);

    return () => clearInterval(interval);
  }, [priceControls, isDark]);

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden flex flex-col justify-between pt-24 pb-8 transition-colors duration-300 ${
        isDark ? "bg-[#05070C] text-[#F5F7FA]" : "bg-[var(--bg-root)] text-[var(--text-primary)]"
      }`}
    >
      {/* ── 3D WEBGL ROTATING BITCOIN + CANDLESTICKS + PARTICLES ─── */}
      <ApexHero3D isDark={isDark} />

      {/* Subtle radial vignette gradient to ensure text readability */}
      <div
        className={`absolute inset-0 z-[1] pointer-events-none lg:max-w-3xl transition-opacity duration-300 ${
          isDark
            ? "bg-gradient-to-r from-[#05070C] via-[#05070C]/85 to-transparent"
            : "bg-gradient-to-r from-[var(--bg-root)] via-[var(--bg-root)]/90 to-transparent"
        }`}
      />
      <div
        className={`absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300 ${
          isDark
            ? "bg-gradient-to-t from-[#05070C] via-transparent to-[#05070C]/60"
            : "bg-gradient-to-t from-[var(--bg-root)] via-transparent to-[var(--bg-root)]/60"
        }`}
      />

      {/* ── HERO CONTENT ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-[660px] space-y-6">
          {/* Badge: i = 0 */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono shadow-lg backdrop-blur-md transition-colors ${
              isDark
                ? "bg-[#10131C]/90 border border-[#00E599]/30 text-[#F5F7FA]"
                : "clay-card bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#00E599] shadow-[0_0_8px_#00E599] animate-pulse" />
            <span className="tracking-wider uppercase font-bold text-[#00E599]">APEX · QUANTORA</span>
            <span className="opacity-30">|</span>
            <span className="text-xs font-semibold">HIGH-FREQUENCY RESEARCH TERMINAL</span>
          </motion.div>

          {/* Hero Heading: i = 0 */}
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] leading-[1.08]"
            style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
          >
            <span>Trade Bitcoin </span>
            <span className="inline-flex items-center align-middle -mt-1 mx-1.5 p-1.5 rounded-xl bg-gradient-to-br from-[#00E599]/20 to-[#00C2FF]/10 border border-[#00E599]/30 text-[#00E599] shadow-[0_0_15px_rgba(0,229,153,0.2)]">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <span> with Institutional</span>
            <br />
            <span>Speed </span>
            <span className="inline-flex items-center align-middle -mt-1 mx-1 p-1.5 rounded-xl bg-gradient-to-br from-[#00C2FF]/20 to-[#00E599]/10 border border-[#00C2FF]/30 text-[#00C2FF] shadow-[0_0_15px_rgba(0,194,255,0.2)]">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <span> and Zero Compromise </span>
            <span className="inline-flex items-center align-middle -mt-1 ml-1.5 p-1.5 rounded-xl bg-gradient-to-br from-[#00E599]/20 to-[#00C2FF]/10 border border-[#00E599]/30 text-[#00E599] shadow-[0_0_15px_rgba(0,229,153,0.2)]">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
          </motion.h1>

          {/* Subtext: i = 1 */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`text-sm sm:text-base leading-relaxed max-w-[580px] ${
              isDark ? "text-[#F5F7FA]/75" : "text-[var(--text-secondary)]"
            }`}
          >
            Sub-100ms execution, transparent fees, and self-custody by default —
            Apex is built for quantitative traders and researchers who don&apos;t wait for the next candle.
          </motion.p>

          {/* CTA Row: Upgraded Ultra-Premium Emerald/Cyan Button & Live Price Chip */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
              <Link
                href="/app/overview"
                className="group relative inline-flex items-center justify-between gap-6 px-7 py-4 rounded-full bg-gradient-to-r from-[#00E599] via-[#05D584] to-[#00C2FF] text-[#05070C] font-extrabold text-sm tracking-wide transition-all duration-300 hover:scale-[1.04] active:scale-95 shadow-[0_0_32px_rgba(0,229,153,0.45)] hover:shadow-[0_0_48px_rgba(0,229,153,0.7)] cursor-pointer overflow-hidden"
              >
                {/* Luminous light sheen swipe on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Start Trading Station</span>
                </span>
                <ArrowRightCircle className="relative z-10 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 text-[#05070C]" />
              </Link>
            </motion.div>

            {/* Signature Live Price Chip with Animated Background Flash */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
              <motion.div
                animate={priceControls}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border font-mono text-xs backdrop-blur-md transition-colors ${
                  isDark
                    ? "border-[#F5F7FA]/10 bg-[#10131C]/90 text-[#F5F7FA]"
                    : "clay-card border-[var(--border-strong)] bg-white/95 text-[var(--text-primary)] shadow-sm"
                }`}
                style={{
                  backgroundColor: isDark ? "rgba(16, 19, 28, 0.88)" : "rgba(255, 255, 255, 0.95)",
                }}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isUpTick
                      ? "bg-[#00E599] shadow-[0_0_8px_#00E599]"
                      : "bg-[#FF3B69] shadow-[0_0_8px_#FF3B69]"
                  } animate-pulse`}
                />
                <span className="font-bold">
                  BTC ${btcPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
                <span
                  className={`font-semibold ${
                    isUpTick ? "text-[#00E599]" : "text-[#FF3B69]"
                  }`}
                >
                  {isUpTick ? `+${btcChange}%` : `${btcChange}%`}
                </span>
              </motion.div>
            </motion.div>

            <motion.button
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              onClick={onExploreOptions}
              className={`px-5 py-3 rounded-full border text-xs font-mono transition-all cursor-pointer ${
                isDark
                  ? "border-[#F5F7FA]/15 text-[#F5F7FA]/80 hover:text-white hover:border-[#00E599] bg-[#10131C]/40"
                  : "clay-button border-[var(--border)] text-[var(--text-primary)] hover:border-[#00E599] bg-[var(--bg-surface)]"
              }`}
            >
              10 Quant Capabilities &darr;
            </motion.button>
          </div>

          {/* Quick Metrics Bar */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="pt-4 grid grid-cols-3 gap-3 max-w-md font-mono text-xs"
          >
            <div
              className={`p-3.5 rounded-2xl border backdrop-blur-sm transition-colors ${
                isDark
                  ? "bg-[#10131C]/90 border-[#F5F7FA]/10"
                  : "clay-card bg-[var(--bg-surface)] border-[var(--border)] shadow-sm"
              }`}
            >
              <div className={`text-[10px] font-sans ${isDark ? "text-[#F5F7FA]/50" : "text-[var(--text-muted)]"}`}>
                Execution Speed
              </div>
              <div className="text-sm font-bold text-[#00E599] mt-0.5">&lt; 42 ms</div>
            </div>
            <div
              className={`p-3.5 rounded-2xl border backdrop-blur-sm transition-colors ${
                isDark
                  ? "bg-[#10131C]/90 border-[#F5F7FA]/10"
                  : "clay-card bg-[var(--bg-surface)] border-[var(--border)] shadow-sm"
              }`}
            >
              <div className={`text-[10px] font-sans ${isDark ? "text-[#F5F7FA]/50" : "text-[var(--text-muted)]"}`}>
                Robustness Score
              </div>
              <div className="text-sm font-bold text-[#00C2FF] mt-0.5">94.2 / 100</div>
            </div>
            <div
              className={`p-3.5 rounded-2xl border backdrop-blur-sm transition-colors ${
                isDark
                  ? "bg-[#10131C]/90 border-[#F5F7FA]/10"
                  : "clay-card bg-[var(--bg-surface)] border-[var(--border)] shadow-sm"
              }`}
            >
              <div className={`text-[10px] font-sans ${isDark ? "text-[#F5F7FA]/50" : "text-[var(--text-muted)]"}`}>
                Sharpe Ratio
              </div>
              <div className={`text-sm font-bold mt-0.5 ${isDark ? "text-[#F5F7FA]" : "text-[var(--text-primary)]"}`}>
                1.68 &sigma;
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM TICKER STRIP ──────────────────────────────────── */}
      <div
        className={`relative z-10 border-t pt-3.5 px-6 sm:px-10 flex items-center justify-between text-xs font-mono transition-colors ${
          isDark
            ? "border-[#F5F7FA]/10 text-[#F5F7FA]/70 bg-[#05070C]/60 backdrop-blur-md"
            : "border-[var(--border)] text-[var(--text-secondary)] bg-[var(--bg-surface)]/70 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="opacity-60 font-semibold">BTC/USD</span>
            <span className="font-bold">${btcPrice.toLocaleString()}</span>
            <span className="text-[#00E599] font-bold">+{btcChange}% ▲</span>
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="opacity-60 font-semibold">SOL/USD</span>
            <span className="font-bold">$238.45</span>
            <span className="text-[#00E599] font-bold">+3.18% ▲</span>
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="opacity-60 font-semibold">GOLD/USD</span>
            <span className="font-bold">$2,674.20</span>
            <span className="text-[#00E599] font-bold">+0.42% ▲</span>
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="opacity-60 font-semibold">NVDA</span>
            <span className="font-bold">$184.20</span>
            <span className="text-[#00E599] font-bold">+2.14% ▲</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] opacity-65">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
          <span>DRAG COIN TO SPIN · 3D CANDLESTICK GRAPH ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

export default ApexHeroSection;
