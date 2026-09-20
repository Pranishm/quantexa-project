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
import { marketHub } from "@/lib/market-data-hub";

// Dynamic import with SSR false for WebGL Canvas
const ApexHero3D = dynamic(() => import("./apex-hero-3d"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full bg-[#05070C] flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-[#F7931A]/20 animate-ping opacity-30" />
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

export function ApexHeroSection({ onExploreOptions }: { onExploreOptions: () => void }) {
  const [btcPrice, setBtcPrice] = useState(104846.2);
  const [btcChange, setBtcChange] = useState(2.41);
  const [isUpTick, setIsUpTick] = useState(true);
  const priceControls = useAnimationControls();
  const lastPriceRef = useRef(104846.2);

  // Live candle state
  interface HeroCandle { id: number; open: number; high: number; low: number; close: number; green: boolean; }
  const [heroCandles, setHeroCandles] = useState<HeroCandle[]>(() => {
    const candles: HeroCandle[] = [];
    let p = 103000;
    for (let i = 0; i < 20; i++) {
      const move = (Math.random() - 0.46) * 900;
      const o = p, c = p + move;
      candles.push({ id: i, open: o, high: Math.max(o, c) + Math.random() * 400, low: Math.min(o, c) - Math.random() * 400, close: c, green: c >= o });
      p = c;
    }
    return candles;
  });
  const heroCandleId = useRef(20);

  // Live price tick loop with Framer Motion background flash
  useEffect(() => {
    const interval = setInterval(() => {
      // Deterministic small market variation
      const delta = (Math.random() - 0.48) * 48;
      const newPrice = Math.max(98000, lastPriceRef.current + delta);
      const isUp = newPrice >= lastPriceRef.current;
      lastPriceRef.current = newPrice;

      setBtcPrice(Number(newPrice.toFixed(2)));
      setBtcChange(Number((((newPrice - 102400) / 102400) * 100).toFixed(2)));
      setIsUpTick(isUp);

      // Add a new hero candle every tick
      setHeroCandles(prev => {
        const last = prev[prev.length - 1];
        const basePrice = last ? last.close : newPrice;
        const move = (Math.random() - 0.47) * 1200;
        const o = basePrice, c = basePrice + move;
        heroCandleId.current += 1;
        const next = [...prev, { id: heroCandleId.current, open: o, high: Math.max(o, c) + Math.random() * 500, low: Math.min(o, c) - Math.random() * 500, close: c, green: c >= o }];
        return next.slice(-20);
      });

      // Trigger instantaneous background flash that smoothly fades
      const flashColor = isUp ? "rgba(22, 199, 132, 0.22)" : "rgba(234, 57, 67, 0.22)";
      priceControls.start({
        backgroundColor: [flashColor, "rgba(16, 19, 28, 0.85)"],
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }, 3800);

    return () => clearInterval(interval);
  }, [priceControls]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#05070C] text-[#F5F7FA] flex flex-col justify-between pt-24 pb-8">
      {/* ── 3D WEBGL ROTATING BITCOIN + PARTICLES BACKGROUND ─────── */}
      <ApexHero3D />

      {/* ── FLOATING BITCOIN COINS BACKGROUND ─────────────────────── */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {/* Coin 1 */}
        <div className="absolute top-[15%] right-[12%] w-16 h-16 rounded-full border-2 border-[#F7931A]/20 flex items-center justify-center text-[#F7931A]/25 font-bold text-2xl animate-[float_6s_ease-in-out_infinite]">₿</div>
        {/* Coin 2 */}
        <div className="absolute top-[45%] right-[25%] w-10 h-10 rounded-full border border-[#F7931A]/15 flex items-center justify-center text-[#F7931A]/15 font-bold text-lg animate-[float_8s_ease-in-out_1s_infinite]">₿</div>
        {/* Coin 3 */}
        <div className="absolute bottom-[25%] right-[8%] w-12 h-12 rounded-full border border-[#F7931A]/10 flex items-center justify-center text-[#F7931A]/12 font-bold text-xl animate-[float_7s_ease-in-out_2s_infinite]">₿</div>
        {/* Coin 4 - small */}
        <div className="absolute top-[30%] right-[40%] w-6 h-6 rounded-full border border-[#F7931A]/10 flex items-center justify-center text-[#F7931A]/10 font-bold text-xs animate-[float_9s_ease-in-out_3s_infinite]">₿</div>
      </div>

      {/* ── ANIMATED CANDLESTICK CHART BACKGROUND ─────────────────── */}
      <div className="absolute bottom-[10%] right-[5%] z-[2] pointer-events-none opacity-30 hidden lg:flex items-end gap-[3px] h-48">
        {/* Each candle: thin wick line + thicker body */}
        {[
          { h: 60, body: 28, wick: 52, green: true, delay: '0s' },
          { h: 45, body: 22, wick: 40, green: false, delay: '0.2s' },
          { h: 72, body: 35, wick: 65, green: true, delay: '0.4s' },
          { h: 38, body: 18, wick: 34, green: false, delay: '0.6s' },
          { h: 82, body: 40, wick: 75, green: true, delay: '0.8s' },
          { h: 55, body: 25, wick: 48, green: false, delay: '1s' },
          { h: 90, body: 45, wick: 82, green: true, delay: '1.2s' },
          { h: 48, body: 20, wick: 42, green: true, delay: '1.4s' },
          { h: 65, body: 30, wick: 58, green: false, delay: '1.6s' },
          { h: 78, body: 38, wick: 70, green: true, delay: '1.8s' },
          { h: 42, body: 19, wick: 38, green: false, delay: '2s' },
          { h: 95, body: 48, wick: 88, green: true, delay: '2.2s' },
          { h: 58, body: 26, wick: 50, green: true, delay: '2.4s' },
          { h: 35, body: 16, wick: 30, green: false, delay: '2.6s' },
          { h: 85, body: 42, wick: 78, green: true, delay: '2.8s' },
          { h: 50, body: 24, wick: 44, green: false, delay: '3s' },
        ].map((candle, i) => (
          <div key={i} className="flex flex-col items-center justify-end" style={{ height: `${candle.h}%`, animationDelay: candle.delay }}>
            {/* Wick */}
            <div
              className="w-[1px] rounded-full"
              style={{
                height: `${candle.wick}%`,
                backgroundColor: candle.green ? '#16C784' : '#EA3943',
                opacity: 0.5,
                animation: `pulse 2.5s ease-in-out ${candle.delay} infinite`,
              }}
            />
            {/* Body */}
            <div
              className="w-[5px] rounded-sm"
              style={{
                height: `${candle.body}%`,
                backgroundColor: candle.green ? '#16C784' : '#EA3943',
                boxShadow: candle.green ? '0 0 6px rgba(22,199,132,0.3)' : '0 0 6px rgba(234,57,67,0.3)',
                animation: `pulse 2.5s ease-in-out ${candle.delay} infinite`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Subtle radial vignette gradient to ensure text readability */}
      <div className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-r from-[#05070C] via-[#05070C]/80 to-transparent lg:max-w-3xl" />
      <div className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-t from-[#05070C] via-transparent to-[#05070C]/60" />

      {/* ── HERO CONTENT ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-[640px] space-y-6">
          {/* Badge: i = 0 */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10131C] border border-[#F5F7FA]/10 text-xs font-mono text-[#F5F7FA]/80 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#F7931A] animate-pulse" />
            <span className="tracking-wider uppercase font-bold text-[#F7931A]">APEX · QUANTORA</span>
            <span className="text-[#F5F7FA]/30">|</span>
            <span className="text-xs">HIGH-FREQUENCY RESEARCH TERMINAL</span>
          </motion.div>

          {/* Hero Heading: i = 0 */}
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#F5F7FA]"
            style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
          >
            <span>Trade Bitcoin </span>
            <span className="inline-flex items-center align-middle -mt-1 mx-1.5 p-1 rounded-lg bg-[#F7931A]/10 border border-[#F7931A]/20 text-[#F7931A]">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <span> with Institutional</span>
            <br />
            <span>Speed </span>
            <span className="inline-flex items-center align-middle -mt-1 mx-1 p-1 rounded-lg bg-[#F7931A]/10 border border-[#F7931A]/20 text-[#F7931A]">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <span> and Zero Compromise </span>
            <span className="inline-flex items-center align-middle -mt-1 ml-1.5 p-1 rounded-lg bg-[#F7931A]/10 border border-[#F7931A]/20 text-[#F7931A]">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
          </motion.h1>

          {/* Subtext: i = 1 */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-sm sm:text-base text-[#F5F7FA]/70 leading-relaxed max-w-[560px]"
          >
            Sub-100ms execution, transparent fees, and self-custody by default —
            Apex is built for quantitative traders who don&apos;t wait for the next candle.
          </motion.p>

          {/* CTA Row: i = 2 (Button) & i = 3 (Live Price Chip) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-between gap-6 px-7 py-3.5 rounded-full bg-[#F7931A] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.04] hover:brightness-110 active:scale-95 shadow-[0_4px_24px_rgba(247,147,26,0.38)] cursor-pointer"
              >
                <span>Start Trading</span>
                <ArrowRightCircle className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Signature Live Price Chip with Animated Background Flash */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <motion.div
                animate={priceControls}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#F5F7FA]/10 font-mono text-xs backdrop-blur-md transition-colors"
                style={{ backgroundColor: "rgba(16, 19, 28, 0.85)" }}
              >
                <span
                  className={`w-2 h-2 rounded-full ${isUpTick ? "bg-[#16C784]" : "bg-[#EA3943]"
                    } animate-pulse`}
                />
                <span className="font-bold text-[#F5F7FA]">
                  BTC ${btcPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
                <span
                  className={`font-semibold ${isUpTick ? "text-[#16C784]" : "text-[#EA3943]"
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
              className="px-5 py-3 rounded-full border border-[#F5F7FA]/15 text-xs font-mono text-[#F5F7FA]/80 hover:text-white hover:border-[#F7931A] transition-colors cursor-pointer"
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
            <div className="p-3 rounded-xl bg-[#10131C]/90 border border-[#F5F7FA]/10 backdrop-blur-sm">
              <div className="text-[10px] text-[#F5F7FA]/50 font-sans">Execution Speed</div>
              <div className="text-sm font-bold text-[#F7931A] mt-0.5">&lt; 42 ms</div>
            </div>
            <div className="p-3 rounded-xl bg-[#10131C]/90 border border-[#F5F7FA]/10 backdrop-blur-sm">
              <div className="text-[10px] text-[#F5F7FA]/50 font-sans">Robustness Score</div>
              <div className="text-sm font-bold text-[#16C784] mt-0.5">94.2 / 100</div>
            </div>
            <div className="p-3 rounded-xl bg-[#10131C]/90 border border-[#F5F7FA]/10 backdrop-blur-sm">
              <div className="text-[10px] text-[#F5F7FA]/50 font-sans">Sharpe Ratio</div>
              <div className="text-sm font-bold text-[#F5F7FA] mt-0.5">1.68 &sigma;</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM TICKER STRIP ──────────────────────────────────── */}
      <div className="relative z-10 border-t border-[#F5F7FA]/10 pt-3 px-6 sm:px-10 flex items-center justify-between text-xs font-mono text-[#F5F7FA]/70">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#F5F7FA]/50 font-semibold">BTC/USD</span>
            <span className="text-white font-bold">${btcPrice.toLocaleString()}</span>
            <span className="text-[#16C784] font-bold">+{btcChange}% ▲</span>
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#F5F7FA]/50 font-semibold">SOL/USD</span>
            <span className="text-white font-bold">$238.45</span>
            <span className="text-[#16C784] font-bold">+3.18% ▲</span>
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#F5F7FA]/50 font-semibold">GOLD/USD</span>
            <span className="text-white font-bold">$2,674.20</span>
            <span className="text-[#16C784] font-bold">+0.42% ▲</span>
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#F5F7FA]/50 font-semibold">NVDA</span>
            <span className="text-white font-bold">$184.20</span>
            <span className="text-[#16C784] font-bold">+2.14% ▲</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] text-[#F5F7FA]/50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16C784] animate-pulse" />
          <span>DRAG COIN TO SPIN · 600 PARTICLES ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

export default ApexHeroSection;
