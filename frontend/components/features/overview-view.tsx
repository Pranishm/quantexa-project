"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Radio, Search, ChevronRight, BarChart3, TrendingUp, Grid, ShieldAlert, Cpu } from "lucide-react";
import { useMarketData, ASSET_PROFILES, type AssetKey, type MarketMetrics } from "@/lib/market-data-hub";

export function OverviewView() {
  const { metrics, connection } = useMarketData();
  const allMetrics = metrics as Record<AssetKey, MarketMetrics>;
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) +
        " · " +
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }) +
        " LOCAL"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const getAssetData = (key: AssetKey) => {
    const data = allMetrics[key];
    if (data) {
      return { price: data.currentPrice, change: data.changePercent };
    }
    return { price: ASSET_PROFILES[key].basePrice, change: 0 };
  };

  const assets: AssetKey[] = ["BTC", "SOL", "GOLD", "NVDA"];

  return (
    <div className="flex-1 w-full p-6 lg:p-10 max-w-7xl mx-auto space-y-10 text-[#F5F7FA]">
      
      {/* ── TOP HEADER: MARKET OVERVIEW ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F5F7FA]/10 pb-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold font-mono tracking-tight text-white uppercase">Market Overview</h1>
          <div className="flex items-center gap-4 text-xs font-mono text-[#F5F7FA]/50">
            <span>{time}</span>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#16C784]/10 border border-[#16C784]/20 text-[#16C784]">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>MARKET DATA CONNECTED</span>
            </div>
          </div>
        </div>

        {/* Live Ticker Mini-Cards */}
        <div className="grid grid-cols-2 md:flex gap-3">
          {assets.map((key) => {
            const data = getAssetData(key);
            const isUp = data.change >= 0;
            return (
              <div key={key} className="px-4 py-2.5 rounded-lg border border-[#F5F7FA]/10 bg-[#0A0D16] flex flex-col min-w-[120px]">
                <span className="text-[10px] text-[#F5F7FA]/50 font-mono mb-1">{key}</span>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-semibold">
                    {ASSET_PROFILES[key].currency}{data.price.toLocaleString("en-US", { minimumFractionDigits: ASSET_PROFILES[key].decimals })}
                  </span>
                  <span className={`font-mono text-xs ${isUp ? "text-[#16C784]" : "text-[#EA3943]"}`}>
                    {isUp ? "+" : ""}{data.change.toFixed(2)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MAIN SECTIONS GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* MARKET PULSE */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-5 rounded-xl border border-[#F5F7FA]/10 bg-[#0A0D16] col-span-1 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-[#F7931A]" />
            <h2 className="text-sm font-mono font-bold">MARKET PULSE</h2>
          </div>
          <div className="h-64 flex items-center justify-center border border-[#F5F7FA]/5 bg-[#05070C] rounded-lg relative overflow-hidden">
             {/* Placeholder for real pulse graph */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#F7931A]/5 to-transparent" />
             <span className="text-[#F5F7FA]/30 font-mono text-xs">Live Intraday Normalized Index Chart Component</span>
          </div>
        </motion.div>

        {/* MARKET HEATMAP */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-5 rounded-xl border border-[#F5F7FA]/10 bg-[#0A0D16]">
          <div className="flex items-center gap-2 mb-4">
            <Grid className="w-4 h-4 text-[#F5F7FA]/60" />
            <h2 className="text-sm font-mono font-bold">MARKET HEATMAP</h2>
          </div>
          <div className="grid grid-cols-2 gap-2 h-64">
            {assets.map((key) => {
               const isUp = getAssetData(key).change >= 0;
               return (
                 <div key={key} className={`rounded flex flex-col justify-center items-center ${isUp ? 'bg-[#16C784]/20 text-[#16C784]' : 'bg-[#EA3943]/20 text-[#EA3943]'}`}>
                   <span className="font-bold text-lg">{key}</span>
                   <span className="font-mono text-sm">{isUp ? '+' : ''}{getAssetData(key).change.toFixed(2)}%</span>
                 </div>
               )
            })}
          </div>
        </motion.div>

        {/* CROSS-ASSET PERFORMANCE */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-5 rounded-xl border border-[#F5F7FA]/10 bg-[#0A0D16]">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-[#F5F7FA]/60" />
            <h2 className="text-sm font-mono font-bold">CROSS-ASSET PERFORMANCE</h2>
          </div>
          <div className="space-y-4">
            {['BTC (1Y: +147%)', 'NVDA (1Y: +139%)', 'SOL (1Y: +132%)', 'GOLD (1Y: +18%)'].map(lbl => (
              <div key={lbl}>
                <div className="text-xs font-mono text-[#F5F7FA]/60 mb-1.5">{lbl}</div>
                <div className="w-full bg-[#F5F7FA]/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#F5F7FA] h-full" style={{ width: `${Math.random() * 60 + 30}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MARKET REGIME */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-5 rounded-xl border border-[#F5F7FA]/10 bg-[#0A0D16]">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-[#F5F7FA]/60" />
            <h2 className="text-sm font-mono font-bold">MARKET REGIME</h2>
          </div>
          <div className="h-40 flex flex-col justify-center border border-[#F5F7FA]/5 bg-[#05070C] rounded-lg p-4">
             <div className="flex items-center justify-between mb-3 border-b border-[#F5F7FA]/10 pb-3">
               <span className="font-mono text-xs text-[#F5F7FA]/50">CURRENT MACRO REGIME</span>
               <span className="font-mono text-xs font-bold text-[#16C784]">HIGH VOLATILITY BULL</span>
             </div>
             <div className="flex items-center justify-between">
               <span className="font-mono text-xs text-[#F5F7FA]/50">CONFIDENCE</span>
               <span className="font-mono text-xs font-bold">89.4%</span>
             </div>
          </div>
        </motion.div>

        {/* TOP MOVERS & VOLATILITY */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-5 rounded-xl border border-[#F5F7FA]/10 bg-[#0A0D16]">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="w-4 h-4 text-[#F5F7FA]/60" />
            <h2 className="text-sm font-mono font-bold">VOLATILITY MONITOR</h2>
          </div>
          <div className="space-y-3">
            {assets.map(key => (
              <div key={key} className="flex items-center justify-between p-2 rounded bg-[#F5F7FA]/5">
                <span className="font-mono text-xs">{key}</span>
                <span className="font-mono text-xs text-[#F5F7FA]/50">{(Math.random() * 40 + 10).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
