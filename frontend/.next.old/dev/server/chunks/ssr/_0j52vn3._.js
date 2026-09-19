module.exports = [
"[project]/app/app/research/backtest/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BacktestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/demo-data/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-simulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$quantora$2d$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/quantora-chart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/demo-data/ohlcv.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const PROCEDURAL_STEPS = [
    {
        label: "LOADING MARKET DATA",
        detail: "✓ 4 assets loaded"
    },
    {
        label: "CALCULATING INDICATORS",
        detail: "✓ SMA, ✓ EMA"
    },
    {
        label: "SIMULATING EXECUTION",
        detail: "✓ fees (5bps), ✓ slippage (10bps)"
    },
    {
        label: "ANALYZING REGIMES",
        detail: "✓ 5 regimes detected"
    },
    {
        label: "RUNNING INTEGRITY CHECK",
        detail: "✓ no same-bar execution"
    },
    {
        label: "GENERATING RESULTS",
        detail: "✓ equity curve & metrics finalized"
    }
];
const TRADE_MARKERS = [
    {
        id: "tm-1",
        type: "BUY",
        xPct: 22,
        yPct: 58,
        buyPrice: 72400,
        sellPrice: 83900,
        pnl: 11500,
        holdingDays: 41,
        date: "2024-03-12"
    },
    {
        id: "tm-2",
        type: "SELL",
        xPct: 45,
        yPct: 44,
        buyPrice: 84100,
        sellPrice: 91430,
        pnl: 7220,
        holdingDays: 31,
        date: "2025-01-18"
    },
    {
        id: "tm-3",
        type: "BUY",
        xPct: 68,
        yPct: 32,
        buyPrice: 88200,
        sellPrice: 94150,
        pnl: 5950,
        holdingDays: 46,
        date: "2025-08-20"
    },
    {
        id: "tm-4",
        type: "BUY",
        xPct: 88,
        yPct: 20,
        buyPrice: 98420,
        sellPrice: 104284,
        pnl: 5864,
        holdingDays: 29,
        date: "2026-02-14"
    }
];
const CANDLE_DATA = [
    {
        time: "09:00",
        open: 101200,
        high: 102400,
        low: 100800,
        close: 102100,
        vol: 1420,
        bull: true
    },
    {
        time: "10:00",
        open: 102100,
        high: 103100,
        low: 101900,
        close: 102800,
        vol: 1850,
        bull: true
    },
    {
        time: "11:00",
        open: 102800,
        high: 103200,
        low: 102200,
        close: 102400,
        vol: 1100,
        bull: false
    },
    {
        time: "12:00",
        open: 102400,
        high: 103600,
        low: 102300,
        close: 103400,
        vol: 2100,
        bull: true
    },
    {
        time: "13:00",
        open: 103400,
        high: 104100,
        low: 103000,
        close: 103850,
        vol: 1950,
        bull: true
    },
    {
        time: "14:00",
        open: 103850,
        high: 104400,
        low: 103500,
        close: 104284,
        vol: 2400,
        bull: true
    },
    {
        time: "15:00",
        open: 104284,
        high: 104600,
        low: 103900,
        close: 104150,
        vol: 1600,
        bull: false
    },
    {
        time: "16:00",
        open: 104150,
        high: 104500,
        low: 104050,
        close: 104320,
        vol: 1780,
        bull: true
    }
];
function BacktestRunnerContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { assets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMarketSimulation"])();
    const btc = assets["BTC"] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_ASSETS"]["BTC"];
    const [strategy, setStrategy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("BTC Trend 20/50");
    const [asset, setAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("BTC/USD");
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("2019 — 2026");
    const [capital, setCapital] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("100,000");
    const [chartMode, setChartMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("EQUITY");
    const [chartType, setChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("LINE");
    const [timeframe, setTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1Y");
    const [indicatorsOpen, setIndicatorsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndicators, setActiveIndicators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "SMA",
        "EMA",
        "VOLUME"
    ]);
    const [hoveredTrade, setHoveredTrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStepIndex, setCurrentStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [hasRun, setHasRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [drawProgress, setDrawProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const presetId = searchParams?.get("preset");
        if (presetId) {
            const preset = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRESET_SCENARIOS"].find((p)=>p.id === presetId);
            if (preset) {
                setStrategy(preset.title);
                setAsset(preset.asset);
            }
        }
    }, [
        searchParams
    ]);
    const runBacktest = ()=>{
        setIsRunning(true);
        setCurrentStepIndex(0);
        setDrawProgress(0);
        let step = 0;
        const interval = setInterval(()=>{
            step += 1;
            if (step < PROCEDURAL_STEPS.length) {
                setCurrentStepIndex(step);
            } else {
                clearInterval(interval);
                setIsRunning(false);
                setHasRun(true);
                let progress = 0;
                const drawInterval = setInterval(()=>{
                    progress += 5;
                    setDrawProgress(Math.min(100, progress));
                    if (progress >= 100) {
                        clearInterval(drawInterval);
                    }
                }, 30);
            }
        }, 250);
    };
    const bt = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANONICAL_BACKTEST"];
    const displayReturn = (bt.totalReturn * drawProgress / 100).toFixed(1);
    const displaySharpe = (bt.sharpe * drawProgress / 100).toFixed(2);
    const displayMaxDd = (bt.maxDrawdown * drawProgress / 100).toFixed(1);
    const displayTrades = Math.floor(bt.tradeCount * drawProgress / 100);
    const toggleIndicator = (ind)=>{
        if (activeIndicators.includes(ind)) {
            setActiveIndicators(activeIndicators.filter((i)=>i !== ind));
        } else {
            setActiveIndicators([
                ...activeIndicators,
                ind
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-7xl mx-auto space-y-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold tracking-tight text-[var(--text-primary)] font-mono",
                                        children: "BACKTEST RUNNER"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--positive-bg)] text-[var(--positive)] font-bold border border-[var(--positive-border)] flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            "DEMO DATA · 2019 — 2026"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-[var(--accent)] font-mono",
                                        children: "BTC TREND FOLLOWING"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-secondary)]",
                                        children: "— Historical systematic strategy analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/app/research/autopsy",
                            className: "flex items-center gap-1.5 px-3.5 py-1.5 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-primary)] rounded-xl font-semibold transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Launch Strategy Autopsy"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-3.5 h-3.5 text-[var(--accent)]"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/research/backtest/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 clay-card p-4 text-xs rounded-2xl border border-[var(--border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "STRATEGY"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: strategy,
                                onChange: (e)=>setStrategy(e.target.value),
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none cursor-pointer truncate text-xs border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "BTC Trend 20/50",
                                        children: "BTC Trend 20/50"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Gold Mean Reversion",
                                        children: "Gold Mean Reversion"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "NVDA Momentum",
                                        children: "NVDA Momentum"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Multi-Asset Rotation",
                                        children: "Multi-Asset Rotation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "ASSET"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: asset,
                                onChange: (e)=>setAsset(e.target.value),
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none cursor-pointer text-xs border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "BTC/USD",
                                        children: "BTC/USD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "NVDA/USD",
                                        children: "NVDA/USD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "GOLD/USD",
                                        children: "GOLD/USD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "SOL/USD",
                                        children: "SOL/USD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "PERIOD"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: period,
                                onChange: (e)=>setPeriod(e.target.value),
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none text-xs border border-[var(--border)]"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "CAPITAL"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: `$${capital}`,
                                readOnly: true,
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none text-xs border border-[var(--border)]"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "EXECUTION"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[11px] font-mono text-[var(--text-primary)] border border-[var(--border)] truncate",
                                children: "5bps fee · 10bps slippage"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: runBacktest,
                            disabled: isRunning,
                            className: "w-full py-2 clay-button rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.98] border border-[var(--accent-border)] bg-[var(--bg-elevated)] hover:bg-[var(--accent)] hover:text-white transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-3.5 h-3.5 fill-current text-[var(--accent)]"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isRunning ? "Simulating..." : "RUN BACKTEST ▶"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/research/backtest/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-card p-3 rounded-2xl border border-[var(--border)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[var(--text-primary)]",
                                children: "BTC/USD"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-[var(--text-primary)]",
                                children: [
                                    "$",
                                    btc.price.toLocaleString("en-US", {
                                        minimumFractionDigits: 2
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-bold ${btc.changePercent >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                children: btc.changePercent >= 0 ? `+${btc.changePercent}% ▲` : `${btc.changePercent}% ▼`
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-[11px] text-[var(--text-secondary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "VOL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[var(--text-primary)]",
                                        children: "41.8%"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "REGIME"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[var(--accent)] uppercase",
                                        children: "TRENDING"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "RSI"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[var(--text-primary)]",
                                        children: "63.2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "ATR"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[var(--text-primary)]",
                                        children: "4.18%"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "VOLUME"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[var(--positive)]",
                                        children: "HIGH"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-card-elevated p-6 rounded-2xl space-y-3 font-mono text-xs border border-[var(--border-strong)] animate-in fade-in duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-[var(--text-secondary)] text-xs font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-[var(--accent)] animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    "EXECUTING QUANTITATIVE SIMULATION SEQUENCE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--accent)] font-bold",
                                children: [
                                    currentStepIndex + 1,
                                    " / ",
                                    PROCEDURAL_STEPS.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 w-full clay-recessed rounded-full overflow-hidden p-0.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: `${(currentStepIndex + 1) / PROCEDURAL_STEPS.length * 100}%`
                            },
                            className: "h-full bg-[var(--accent)] rounded-full transition-all duration-250 shadow-[0_0_8px_var(--accent)]"
                        }, void 0, false, {
                            fileName: "[project]/app/app/research/backtest/page.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5 pt-2",
                        children: PROCEDURAL_STEPS.map((step, idx)=>{
                            const isPast = idx < currentStepIndex;
                            const isCurrent = idx === currentStepIndex;
                            if (idx > currentStepIndex) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs animate-in fade-in slide-in-from-left-2 duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isCurrent ? "text-[var(--accent)] font-bold" : "text-[var(--text-primary)]",
                                        children: [
                                            isCurrent ? "►" : "✓",
                                            " ",
                                            step.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[var(--positive)]",
                                        children: step.detail
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 310,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this),
            hasRun && !isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Total Return"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--positive)] mt-0.5",
                                        children: [
                                            "+",
                                            displayReturn,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "CAGR"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-primary)] mt-0.5",
                                        children: [
                                            bt.cagr,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Sharpe Ratio"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--accent)] mt-0.5",
                                        children: displaySharpe
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Max Drawdown"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--negative)] mt-0.5",
                                        children: [
                                            displayMaxDd,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Win Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-primary)] mt-0.5",
                                        children: [
                                            bt.winRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Profit Factor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-primary)] mt-0.5",
                                        children: bt.profitFactor
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Executed Trades"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-secondary)] mt-0.5",
                                        children: displayTrades
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clay-surface p-6 rounded-3xl space-y-4 border border-[var(--border)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border)] pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono",
                                                        children: "EQUITY CURVE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-[var(--text-muted)] font-mono",
                                                        children: "Strategy vs Benchmark"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-2 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl font-bold font-mono text-[var(--text-primary)]",
                                                        children: "$134,210"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-mono font-bold text-[var(--positive)]",
                                                        children: "+34.21%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center p-0.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono",
                                                children: [
                                                    "EQUITY",
                                                    "DRAWDOWN",
                                                    "RETURNS",
                                                    "CANDLE"
                                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setChartMode(m),
                                                        className: `px-3 py-1 rounded-lg transition-all ${chartMode === m ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`,
                                                        children: m
                                                    }, m, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:flex items-center p-0.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[10px] font-mono",
                                                children: [
                                                    "1D",
                                                    "1W",
                                                    "1M",
                                                    "3M",
                                                    "6M",
                                                    "1Y",
                                                    "MAX"
                                                ].map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setTimeframe(tf),
                                                        className: `px-2 py-0.5 rounded-lg transition-all ${timeframe === tf ? "bg-[var(--accent)] text-white font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`,
                                                        children: tf
                                                    }, tf, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIndicatorsOpen(!indicatorsOpen),
                                                        className: "clay-button px-3 py-1 rounded-xl text-xs font-mono text-[var(--text-primary)] flex items-center gap-1.5 border border-[var(--border)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Indicators +"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "w-3 h-3 text-[var(--text-muted)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, this),
                                                    indicatorsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-0 mt-2 w-48 p-2 rounded-2xl clay-card-elevated border border-[var(--border-strong)] z-40 space-y-1 text-xs font-mono",
                                                        children: [
                                                            "SMA",
                                                            "EMA",
                                                            "RSI",
                                                            "MACD",
                                                            "BOLLINGER",
                                                            "VWAP",
                                                            "ATR",
                                                            "VOLUME"
                                                        ].map((ind)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>toggleIndicator(ind),
                                                                className: "flex items-center justify-between p-1.5 rounded-lg hover:bg-[var(--bg-hover)] cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[var(--text-primary)]",
                                                                        children: ind
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    activeIndicators.includes(ind) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "w-3.5 h-3.5 text-[var(--positive)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, ind, true, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this),
                            chartMode === "CANDLE" ? /* ── REAL QUANTORA CHART ENGINE ─────────────────────── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "-mx-6 -mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$quantora$2d$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuantoraChart"], {
                                    symbol: "BTC",
                                    showTrades: true,
                                    trades: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BACKTEST_TRADES"],
                                    defaultTimeframe: "ALL",
                                    defaultMode: "CANDLE",
                                    defaultIndicators: [
                                        "SMA20",
                                        "SMA50",
                                        "VOLUME"
                                    ],
                                    height: 420
                                }, void 0, false, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this) : /* ── EQUITY / DRAWDOWN / RETURNS SVG VIEWS ─────────── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-72 w-full relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-full h-full",
                                        viewBox: "0 0 800 240",
                                        preserveAspectRatio: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "tradingEqGradient",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: "var(--accent)",
                                                            stopOpacity: "0.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: "var(--accent)",
                                                            stopOpacity: "0.0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "0",
                                                y1: "48",
                                                x2: "800",
                                                y2: "48",
                                                stroke: "var(--border)",
                                                strokeWidth: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "0",
                                                y1: "96",
                                                x2: "800",
                                                y2: "96",
                                                stroke: "var(--border)",
                                                strokeWidth: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "0",
                                                y1: "144",
                                                x2: "800",
                                                y2: "144",
                                                stroke: "var(--border)",
                                                strokeWidth: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "0",
                                                y1: "192",
                                                x2: "800",
                                                y2: "192",
                                                stroke: "var(--border)",
                                                strokeWidth: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0,200 L100,175 L200,145 L300,115 L400,130 L500,85 L600,65 L700,48 L800,35 L800,240 L0,240 Z",
                                                fill: "url(#tradingEqGradient)",
                                                opacity: drawProgress / 100
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0,200 L100,190 L200,180 L300,170 L400,162 L500,150 L600,135 L700,126 L800,115",
                                                fill: "none",
                                                stroke: "var(--text-muted)",
                                                strokeWidth: "1.5",
                                                strokeDasharray: "4 3",
                                                opacity: drawProgress > 40 ? 0.7 : 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0,200 L100,175 L200,145 L300,115 L400,130 L500,85 L600,65 L700,48 L800,35",
                                                fill: "none",
                                                stroke: "var(--accent)",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeDasharray: "900",
                                                strokeDashoffset: 900 - 900 * drawProgress / 100
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 19
                                            }, this),
                                            drawProgress > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: 800 * drawProgress / 100,
                                                cy: 200 - 165 * drawProgress / 100,
                                                r: "4",
                                                fill: "var(--accent)",
                                                stroke: "var(--bg-surface)",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this),
                                    TRADE_MARKERS.map((tm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: ()=>setHoveredTrade(tm),
                                            onMouseLeave: ()=>setHoveredTrade(null),
                                            style: {
                                                left: `${tm.xPct}%`,
                                                top: `${tm.yPct}%`
                                            },
                                            className: "absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-1.5 py-0.5 rounded text-[9px] font-mono font-bold shadow-md flex items-center gap-0.5 ${tm.type === "BUY" ? "bg-[var(--positive)] text-[#0B0D0F]" : "bg-[var(--negative)] text-white"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: tm.type === "BUY" ? "▲ BUY" : "▼ SELL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 21
                                            }, this)
                                        }, tm.id, false, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 19
                                        }, this)),
                                    hoveredTrade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            left: `${hoveredTrade.xPct}%`,
                                            top: `${Math.max(10, hoveredTrade.yPct - 35)}%`
                                        },
                                        className: "absolute z-30 -translate-x-1/2 clay-card p-3 rounded-xl border border-[var(--border-strong)] shadow-2xl text-xs font-mono pointer-events-none min-w-[170px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between font-bold border-b border-[var(--border)] pb-1.5 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-primary)]",
                                                        children: "BTC/USD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: hoveredTrade.type === "BUY" ? "text-[var(--positive)]" : "text-[var(--negative)]",
                                                        children: hoveredTrade.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 541,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[var(--text-muted)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "BUY:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 549,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--text-primary)] font-semibold",
                                                                children: [
                                                                    "$",
                                                                    hoveredTrade.buyPrice.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[var(--text-muted)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "SELL:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 553,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--text-primary)] font-semibold",
                                                                children: [
                                                                    "$",
                                                                    hoveredTrade.sellPrice.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[var(--text-muted)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "P&L:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--positive)] font-bold",
                                                                children: [
                                                                    "+$",
                                                                    hoveredTrade.pnl.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 558,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[var(--text-muted)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Holding:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 561,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--text-primary)]",
                                                                children: [
                                                                    hoveredTrade.holdingDays,
                                                                    " days"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 547,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 537,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 456,
                                columnNumber: 15
                            }, this),
                            chartMode !== "CANDLE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-[var(--border)] space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "UNDERWATER DRAWDOWN PROFILE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--negative)]",
                                                children: "Max Peak-to-Trough: -12.8%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-full relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-full h-full",
                                            viewBox: "0 0 800 40",
                                            preserveAspectRatio: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0,0 L80,0 L120,8 L160,0 L240,14 L300,4 L380,0 L440,18 L500,24 L560,8 L620,0 L700,6 L760,0 L800,0 L800,0 L0,0 Z",
                                                    fill: "var(--negative)",
                                                    opacity: "0.25"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0,0 L80,0 L120,8 L160,0 L240,14 L300,4 L380,0 L440,18 L500,24 L560,8 L620,0 L700,6 L760,0 L800,0",
                                                    fill: "none",
                                                    stroke: "var(--negative)",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 572,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 324,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/research/backtest/page.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
function BacktestPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-xs text-[var(--text-muted)] font-mono",
            children: "Loading Backtest Engine..."
        }, void 0, false, {
            fileName: "[project]/app/app/research/backtest/page.tsx",
            lineNumber: 603,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BacktestRunnerContent, {}, void 0, false, {
            fileName: "[project]/app/app/research/backtest/page.tsx",
            lineNumber: 604,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/app/research/backtest/page.tsx",
        lineNumber: 603,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/charts/quantora-chart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuantoraChart",
    ()=>QuantoraChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * QUANTORA CHART ENGINE
 * A professional-grade financial chart built on lightweight-charts v5.
 *
 * Features:
 * - Dense OHLCV candlesticks (700+ bars), OHLC Bar, Line, Area modes
 * - Real price axis + real date axis
 * - Interactive crosshair with OHLC header readout (not a floating tooltip)
 * - SMA, EMA, Bollinger Band overlays
 * - Volume subchart (separate pane, synchronized time axis)
 * - RSI and MACD subpanels
 * - Trade entry/exit markers with hover popup
 * - Regime background bands
 * - Progressive render animation on mount
 * - Demo-live last candle micro-update
 * - Floating clay toolbar (chart type, timeframe, indicators)
 * - Fullscreen toggle
 * - Light + Dark mode aware via CSS variable detection
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lightweight-charts/dist/lightweight-charts.development.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.mjs [app-ssr] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.mjs [app-ssr] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$candlestick$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CandlestickChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-candlestick.mjs [app-ssr] (ecmascript) <export default as CandlestickChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/demo-data/ohlcv.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// ---------------------------------------------------------------------------
// Chart colour constants (canvas cannot read CSS variables)
// ---------------------------------------------------------------------------
function getChartColors(isDark) {
    return {
        bg: isDark ? "#121518" : "#ECEEEA",
        surface: isDark ? "#121518" : "#ECEEEA",
        grid: isDark ? "#1e2226" : "#d4d8d2",
        rule: isDark ? "#2c3035" : "#c4c9c1",
        text: isDark ? "#969E9B" : "#626A66",
        textPrimary: isDark ? "#F1F3F2" : "#171A19",
        crosshair: isDark ? "#5a6165" : "#8A918D",
        labelBg: isDark ? "#1B1F23" : "#D9DDD8",
        upCandle: "#15956C",
        downCandle: "#D94E5C",
        upWick: "#15956C",
        downWick: "#D94E5C",
        upBorder: "#15956C",
        downBorder: "#D94E5C",
        volume: isDark ? "#1e2226" : "#d0d5ce",
        volumeUp: "rgba(21,149,108,0.35)",
        volumeDown: "rgba(217,78,92,0.35)",
        sma20: "#8877FF",
        sma50: "#E4B64D",
        ema200: "#FF6572",
        bbandsUpper: "rgba(136,119,255,0.5)",
        bbandsLower: "rgba(136,119,255,0.5)",
        bbandsMid: "rgba(136,119,255,0.25)",
        rsiLine: "#8877FF",
        rsiOb: "rgba(217,78,92,0.2)",
        rsiOs: "rgba(21,149,108,0.2)",
        macdLine: "#8877FF",
        macdSignal: "#E4B64D",
        macdHistPos: "rgba(21,149,108,0.7)",
        macdHistNeg: "rgba(217,78,92,0.7)",
        regimeBull: "rgba(21,149,108,0.05)",
        regimeBear: "rgba(217,78,92,0.05)",
        regimeRange: "rgba(228,182,77,0.05)",
        tradeBuy: "#15956C",
        tradeSell: "#D94E5C",
        benchmark: "rgba(150,158,155,0.6)"
    };
}
// ---------------------------------------------------------------------------
// Format helpers
// ---------------------------------------------------------------------------
function fmt(v, symbol) {
    if (symbol === "BTC") {
        return v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v.toFixed(2);
    }
    return v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v.toFixed(2);
}
function fmtFull(v) {
    if (v >= 1000) return v.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return v.toFixed(2);
}
function fmtVol(v) {
    if (v >= 1_000_000_000) return `${(v / 1_000_000_000).toFixed(1)}B`;
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
    if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
    return String(v);
}
function fmtDate(d) {
    const dt = new Date(d + "T00:00:00Z");
    return dt.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC"
    });
}
// ---------------------------------------------------------------------------
// Safe chart call (chart may be disposed)
// ---------------------------------------------------------------------------
function safe(fn) {
    try {
        fn();
    } catch  {}
}
function QuantoraChart({ symbol = "BTC", showTrades = false, trades = [], onTradeClick, defaultTimeframe = "1Y", defaultMode = "CANDLE", defaultIndicators = [
    "SMA20",
    "SMA50",
    "VOLUME"
], height = 480 }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const volumeChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rsiChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const macdChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mainPaneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const volPaneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rsiPaneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const macdPaneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const readoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tradePopupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultMode);
    const [timeframe, setTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTimeframe);
    const [activeIndicators, setActiveIndicators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set(defaultIndicators));
    const [indicatorsOpen, setIndicatorsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chartTypeOpen, setChartTypeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hoveredTrade, setHoveredTrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const chartTypeMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const indicatorsMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Detect theme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>setIsDark(!document.documentElement.classList.contains("light"));
        check();
        const obs = new MutationObserver(check);
        obs.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        });
        return ()=>obs.disconnect();
    }, []);
    // Close dropdowns on outside click with proper ref containment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            if (chartTypeMenuRef.current && !chartTypeMenuRef.current.contains(e.target)) {
                setChartTypeOpen(false);
            }
            if (indicatorsMenuRef.current && !indicatorsMenuRef.current.contains(e.target)) {
                setIndicatorsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return ()=>document.removeEventListener("mousedown", handler);
    }, []);
    const toggleIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ind)=>{
        setActiveIndicators((prev)=>{
            const next = new Set(prev);
            if (next.has(ind)) next.delete(ind);
            else next.add(ind);
            return next;
        });
    }, []);
    // Filtered bars
    const allBars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_OHLCV"][symbol] ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_OHLCV"]["BTC"], [
        symbol
    ]);
    const bars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barsByTimeframe"])(allBars, timeframe), [
        allBars,
        timeframe
    ]);
    // Indicator values computed from the filtered bars
    const sma20Values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sma"])(bars, 20), [
        bars
    ]);
    const sma50Values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sma"])(bars, 50), [
        bars
    ]);
    const ema200Values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ema"])(bars, 200), [
        bars
    ]);
    const bbValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bollingerBands"])(bars, 20, 2), [
        bars
    ]);
    const rsiValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rsiIndicator"])(bars, 14), [
        bars
    ]);
    const macdValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["macdIndicator"])(bars, 12, 26, 9), [
        bars
    ]);
    const hasRSI = activeIndicators.has("RSI");
    const hasMACD = activeIndicators.has("MACD");
    const hasVol = activeIndicators.has("VOLUME");
    // Main chart height accounting for subpanels
    const volHeight = hasVol ? 80 : 0;
    const rsiHeight = hasRSI ? 100 : 0;
    const macdHeight = hasMACD ? 100 : 0;
    const mainH = height; // main pane has its own height
    // ---------------------------------------------------------------------------
    // Build / rebuild charts whenever data or config changes
    // ---------------------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mainPaneRef.current) return;
        const C = getChartColors(isDark);
        const toTime = (d)=>d;
        // --- dispose old ---
        if (chartRef.current) {
            safe(()=>chartRef.current.remove());
            chartRef.current = null;
        }
        if (volumeChartRef.current) {
            safe(()=>volumeChartRef.current.remove());
            volumeChartRef.current = null;
        }
        if (rsiChartRef.current) {
            safe(()=>rsiChartRef.current.remove());
            rsiChartRef.current = null;
        }
        if (macdChartRef.current) {
            safe(()=>macdChartRef.current.remove());
            macdChartRef.current = null;
        }
        const baseOpts = (el, h, showTimeScale)=>({
                width: el.clientWidth,
                height: h,
                layout: {
                    background: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorType"].Solid,
                        color: C.bg
                    },
                    textColor: C.text,
                    fontFamily: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
                    fontSize: 11,
                    attributionLogo: false
                },
                grid: {
                    vertLines: {
                        color: C.grid,
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineStyle"].Solid
                    },
                    horzLines: {
                        color: C.grid,
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineStyle"].Solid
                    }
                },
                rightPriceScale: {
                    borderColor: C.rule,
                    scaleMargins: {
                        top: 0.08,
                        bottom: 0.08
                    },
                    minimumWidth: 72
                },
                timeScale: {
                    borderColor: C.rule,
                    timeVisible: true,
                    secondsVisible: false,
                    rightOffset: 6,
                    minBarSpacing: 0.5,
                    visible: showTimeScale
                },
                crosshair: {
                    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CrosshairMode"].Normal,
                    vertLine: {
                        color: C.crosshair,
                        width: 1,
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineStyle"].Dashed,
                        labelBackgroundColor: C.labelBg,
                        labelVisible: true
                    },
                    horzLine: {
                        color: C.crosshair,
                        width: 1,
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineStyle"].Dashed,
                        labelBackgroundColor: C.labelBg,
                        labelVisible: true
                    }
                },
                handleScale: {
                    mouseWheel: true,
                    pinch: true,
                    axisPressedMouseMove: true
                },
                handleScroll: {
                    mouseWheel: true,
                    pressedMouseMove: true,
                    horzTouchDrag: true,
                    vertTouchDrag: false
                }
            });
        // ----- MAIN CHART -----
        const main = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChart"])(mainPaneRef.current, baseOpts(mainPaneRef.current, mainH, !hasVol && !hasRSI && !hasMACD));
        chartRef.current = main;
        let mainSeries;
        if (mode === "CANDLE") {
            const cs = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandlestickSeries"], {
                upColor: C.upCandle,
                downColor: C.downCandle,
                borderUpColor: C.upBorder,
                borderDownColor: C.downBorder,
                wickUpColor: C.upWick,
                wickDownColor: C.downWick,
                borderVisible: true,
                priceLineVisible: false
            });
            cs.setData(bars.map((b)=>({
                    time: toTime(b.time),
                    open: b.open,
                    high: b.high,
                    low: b.low,
                    close: b.close
                })));
            mainSeries = cs;
        } else if (mode === "BAR") {
            const bs = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarSeries"], {
                upColor: C.upCandle,
                downColor: C.downCandle,
                openVisible: true,
                thinBars: false,
                priceLineVisible: false
            });
            bs.setData(bars.map((b)=>({
                    time: toTime(b.time),
                    open: b.open,
                    high: b.high,
                    low: b.low,
                    close: b.close
                })));
            mainSeries = bs;
        } else if (mode === "LINE") {
            const ls = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: isDark ? "#8776FF" : "#6757E8",
                lineWidth: 2,
                priceLineVisible: false,
                crosshairMarkerRadius: 4,
                crosshairMarkerBorderColor: C.bg,
                crosshairMarkerBorderWidth: 2
            });
            ls.setData(bars.map((b)=>({
                    time: toTime(b.time),
                    value: b.close
                })));
            mainSeries = ls;
        } else if (mode === "AREA") {
            const as = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaSeries"], {
                topColor: isDark ? "rgba(135, 118, 255, 0.4)" : "rgba(103, 87, 232, 0.35)",
                bottomColor: isDark ? "rgba(135, 118, 255, 0.01)" : "rgba(103, 87, 232, 0.01)",
                lineColor: isDark ? "#8776FF" : "#6757E8",
                lineWidth: 2,
                priceLineVisible: false,
                crosshairMarkerRadius: 4,
                crosshairMarkerBorderColor: C.bg
            });
            as.setData(bars.map((b)=>({
                    time: toTime(b.time),
                    value: b.close
                })));
            mainSeries = as;
        } else {
            // BASELINE — profit/loss performance relative to starting price of the window
            const basePrice = bars.length > 0 ? bars[0].close : 100;
            const bls = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaselineSeries"], {
                baseValue: {
                    type: "price",
                    price: basePrice
                },
                topLineColor: C.upCandle,
                topFillColor1: isDark ? "rgba(53, 211, 154, 0.3)" : "rgba(21, 149, 108, 0.3)",
                topFillColor2: isDark ? "rgba(53, 211, 154, 0.02)" : "rgba(21, 149, 108, 0.02)",
                bottomLineColor: C.downCandle,
                bottomFillColor1: isDark ? "rgba(255, 101, 114, 0.02)" : "rgba(217, 78, 92, 0.02)",
                bottomFillColor2: isDark ? "rgba(255, 101, 114, 0.3)" : "rgba(217, 78, 92, 0.3)",
                lineWidth: 2,
                priceLineVisible: false
            });
            bls.setData(bars.map((b)=>({
                    time: toTime(b.time),
                    value: b.close
                })));
            mainSeries = bls;
        }
        // ----- OVERLAYS -----
        const disposers = [];
        if (activeIndicators.has("SMA20")) {
            const s = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: C.sma20,
                lineWidth: 1,
                priceLineVisible: false,
                lastValueVisible: true,
                crosshairMarkerVisible: false
            });
            s.setData(bars.map((b, i)=>{
                const v = sma20Values[i];
                return v !== null ? {
                    time: toTime(b.time),
                    value: v
                } : null;
            }).filter(Boolean));
        }
        if (activeIndicators.has("SMA50")) {
            const s = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: C.sma50,
                lineWidth: 1,
                priceLineVisible: false,
                lastValueVisible: true,
                crosshairMarkerVisible: false
            });
            s.setData(bars.map((b, i)=>{
                const v = sma50Values[i];
                return v !== null ? {
                    time: toTime(b.time),
                    value: v
                } : null;
            }).filter(Boolean));
        }
        if (activeIndicators.has("EMA200")) {
            const s = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: C.ema200,
                lineWidth: 1,
                lineStyle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineStyle"].Dashed,
                priceLineVisible: false,
                lastValueVisible: true,
                crosshairMarkerVisible: false
            });
            s.setData(bars.map((b, i)=>{
                const v = ema200Values[i];
                return v !== null ? {
                    time: toTime(b.time),
                    value: v
                } : null;
            }).filter(Boolean));
        }
        if (activeIndicators.has("BB")) {
            const colors = [
                C.bbandsUpper,
                C.bbandsMid,
                C.bbandsLower
            ];
            const arrs = [
                bbValues.upper,
                bbValues.middle,
                bbValues.lower
            ];
            for(let bi = 0; bi < 3; bi++){
                const s = main.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                    color: colors[bi],
                    lineWidth: 1,
                    lineStyle: bi === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineStyle"].Dashed : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineStyle"].Solid,
                    priceLineVisible: false,
                    lastValueVisible: false,
                    crosshairMarkerVisible: false
                });
                s.setData(bars.map((b, i)=>{
                    const v = arrs[bi][i];
                    return v !== null ? {
                        time: toTime(b.time),
                        value: v
                    } : null;
                }).filter(Boolean));
            }
        }
        // ----- TRADE MARKERS -----
        if (showTrades && trades.length > 0) {
            const dateSet = new Set(bars.map((b)=>b.time));
            const markers = [];
            for (const t of trades){
                if (dateSet.has(t.entryDate)) {
                    markers.push({
                        time: toTime(t.entryDate),
                        position: "belowBar",
                        shape: "arrowUp",
                        color: C.tradeBuy,
                        text: "B",
                        size: 1
                    });
                }
                if (dateSet.has(t.exitDate)) {
                    markers.push({
                        time: toTime(t.exitDate),
                        position: "aboveBar",
                        shape: "arrowDown",
                        color: t.netPnl >= 0 ? C.tradeSell : "#D94E5C",
                        text: "S",
                        size: 1
                    });
                }
            }
            markers.sort((a, b)=>String(a.time) < String(b.time) ? -1 : 1);
            if (markers.length) {
                const plugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSeriesMarkers"])(mainSeries, markers);
                disposers.push(()=>safe(()=>plugin.detach()));
            }
        }
        // ----- CROSSHAIR READOUT -----
        const dateIndex = new Map(bars.map((b, i)=>[
                b.time,
                i
            ]));
        const lastBar = bars[bars.length - 1];
        function paintReadout(b) {
            const el = readoutRef.current;
            if (!el || !b) return;
            const changeAmt = b.close - b.open;
            const changePct = (changeAmt / b.open * 100).toFixed(2);
            const isUp = changeAmt >= 0;
            el.innerHTML = `
        <span class="text-[var(--text-primary)] font-bold text-sm tabular-nums">${fmtFull(b.close)}</span>
        <span class="${isUp ? "text-[#15956C] dark:text-[#35D39A]" : "text-[#D94E5C] dark:text-[#FF6572]"} font-semibold text-xs tabular-nums">
          ${isUp ? "+" : ""}${changeAmt.toFixed(2)} (${isUp ? "+" : ""}${changePct}%)
        </span>
        <span class="text-[var(--text-muted)] text-xs">O <b class="text-[var(--text-secondary)]">${fmtFull(b.open)}</b></span>
        <span class="text-[var(--text-muted)] text-xs">H <b class="text-[var(--text-secondary)]">${fmtFull(b.high)}</b></span>
        <span class="text-[var(--text-muted)] text-xs">L <b class="text-[var(--text-secondary)]">${fmtFull(b.low)}</b></span>
        <span class="text-[var(--text-muted)] text-xs">C <b class="text-[var(--text-secondary)]">${fmtFull(b.close)}</b></span>
        <span class="text-[var(--text-muted)] text-xs">V <b class="text-[var(--text-secondary)]">${fmtVol(b.volume)}</b></span>
      `;
        }
        paintReadout(lastBar);
        const onMove = (param)=>{
            if (!param.time) {
                paintReadout(lastBar);
                return;
            }
            const key = typeof param.time === "string" ? param.time : typeof param.time === "object" && "year" in param.time ? `${param.time.year}-${String(param.time.month).padStart(2, "0")}-${String(param.time.day).padStart(2, "0")}` : null;
            if (!key) {
                paintReadout(lastBar);
                return;
            }
            const idx = dateIndex.get(key);
            paintReadout(idx !== undefined ? bars[idx] : lastBar);
        };
        main.subscribeCrosshairMove(onMove);
        // Price formatter
        main.applyOptions({
            localization: {
                priceFormatter: (v)=>fmt(v, symbol),
                timeFormatter: (ts)=>{
                    const d = new Date(ts * 1000);
                    return d.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "2-digit",
                        timeZone: "UTC"
                    });
                }
            }
        });
        // Fit
        safe(()=>main.timeScale().fitContent());
        // ----- VOLUME CHART -----
        if (hasVol && volPaneRef.current) {
            const vc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChart"])(volPaneRef.current, {
                ...baseOpts(volPaneRef.current, volHeight, !hasRSI && !hasMACD),
                rightPriceScale: {
                    borderColor: C.rule,
                    minimumWidth: 72,
                    scaleMargins: {
                        top: 0.1,
                        bottom: 0
                    }
                },
                layout: {
                    background: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorType"].Solid,
                        color: C.bg
                    },
                    textColor: C.text,
                    fontFamily: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
                    fontSize: 10,
                    attributionLogo: false
                }
            });
            volumeChartRef.current = vc;
            const vs = vc.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HistogramSeries"], {
                priceLineVisible: false,
                lastValueVisible: false,
                priceFormat: {
                    type: "volume"
                },
                autoscaleInfoProvider: ()=>({
                        priceRange: {
                            minValue: 0,
                            maxValue: bars.reduce((m, b)=>Math.max(m, b.volume), 0) * 1.1
                        }
                    })
            });
            vs.setData(bars.map((b)=>({
                    time: toTime(b.time),
                    value: b.volume,
                    color: b.close >= b.open ? C.volumeUp : C.volumeDown
                })));
            // Sync timescales
            const syncVol = (range)=>{
                if (range) safe(()=>vc.timeScale().setVisibleLogicalRange(range));
            };
            main.timeScale().subscribeVisibleLogicalRangeChange(syncVol);
            disposers.push(()=>safe(()=>main.timeScale().unsubscribeVisibleLogicalRangeChange(syncVol)));
            vc.applyOptions({
                localization: {
                    priceFormatter: (v)=>fmtVol(v)
                }
            });
            safe(()=>vc.timeScale().fitContent());
        }
        // ----- RSI CHART -----
        if (hasRSI && rsiPaneRef.current) {
            const rc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChart"])(rsiPaneRef.current, {
                ...baseOpts(rsiPaneRef.current, rsiHeight, !hasMACD),
                rightPriceScale: {
                    borderColor: C.rule,
                    minimumWidth: 72,
                    scaleMargins: {
                        top: 0.1,
                        bottom: 0.1
                    },
                    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PriceScaleMode"].Normal
                }
            });
            rsiChartRef.current = rc;
            // RSI line
            const rsiS = rc.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: C.rsiLine,
                lineWidth: 1,
                priceLineVisible: false,
                lastValueVisible: true,
                crosshairMarkerVisible: false
            });
            rsiS.setData(bars.map((b, i)=>{
                const v = rsiValues[i];
                return v !== null ? {
                    time: toTime(b.time),
                    value: v
                } : null;
            }).filter(Boolean));
            rsiS.applyOptions({
                priceScale: {
                    minimum: 0,
                    maximum: 100
                }
            });
            // Overbought / oversold zones as histogram
            const rsiOb = rc.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HistogramSeries"], {
                color: C.rsiOb,
                priceLineVisible: false,
                lastValueVisible: false,
                autoscaleInfoProvider: ()=>({
                        priceRange: {
                            minValue: 0,
                            maxValue: 100
                        }
                    })
            });
            rsiOb.setData(bars.map((b, i)=>{
                const v = rsiValues[i];
                return v !== null && v > 70 ? {
                    time: toTime(b.time),
                    value: v,
                    color: C.rsiOb
                } : null;
            }).filter(Boolean));
            const syncRsi = (range)=>{
                if (range) safe(()=>rc.timeScale().setVisibleLogicalRange(range));
            };
            main.timeScale().subscribeVisibleLogicalRangeChange(syncRsi);
            disposers.push(()=>safe(()=>main.timeScale().unsubscribeVisibleLogicalRangeChange(syncRsi)));
            safe(()=>rc.timeScale().fitContent());
        }
        // ----- MACD CHART -----
        if (hasMACD && macdPaneRef.current) {
            const mc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChart"])(macdPaneRef.current, {
                ...baseOpts(macdPaneRef.current, macdHeight, true),
                rightPriceScale: {
                    borderColor: C.rule,
                    minimumWidth: 72,
                    scaleMargins: {
                        top: 0.1,
                        bottom: 0.1
                    }
                }
            });
            macdChartRef.current = mc;
            // Histogram
            const histS = mc.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HistogramSeries"], {
                priceLineVisible: false,
                lastValueVisible: false
            });
            histS.setData(bars.map((b, i)=>{
                const v = macdValues.histogram[i];
                return v !== null ? {
                    time: toTime(b.time),
                    value: v,
                    color: v >= 0 ? C.macdHistPos : C.macdHistNeg
                } : null;
            }).filter(Boolean));
            // MACD line
            const macdS = mc.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: C.macdLine,
                lineWidth: 1,
                priceLineVisible: false,
                lastValueVisible: true,
                crosshairMarkerVisible: false
            });
            macdS.setData(bars.map((b, i)=>{
                const v = macdValues.macd[i];
                return v !== null ? {
                    time: toTime(b.time),
                    value: v
                } : null;
            }).filter(Boolean));
            // Signal line
            const sigS = mc.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: C.macdSignal,
                lineWidth: 1,
                lineStyle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineStyle"].Dashed,
                priceLineVisible: false,
                lastValueVisible: true,
                crosshairMarkerVisible: false
            });
            sigS.setData(bars.map((b, i)=>{
                const v = macdValues.signal[i];
                return v !== null ? {
                    time: toTime(b.time),
                    value: v
                } : null;
            }).filter(Boolean));
            const syncMacd = (range)=>{
                if (range) safe(()=>mc.timeScale().setVisibleLogicalRange(range));
            };
            main.timeScale().subscribeVisibleLogicalRangeChange(syncMacd);
            disposers.push(()=>safe(()=>main.timeScale().unsubscribeVisibleLogicalRangeChange(syncMacd)));
            safe(()=>mc.timeScale().fitContent());
        }
        // ----- RESIZE OBSERVER -----
        const obs = new ResizeObserver(()=>{
            if (mainPaneRef.current) safe(()=>main.applyOptions({
                    width: mainPaneRef.current.clientWidth
                }));
            if (volumeChartRef.current && volPaneRef.current) safe(()=>volumeChartRef.current.applyOptions({
                    width: volPaneRef.current.clientWidth
                }));
            if (rsiChartRef.current && rsiPaneRef.current) safe(()=>rsiChartRef.current.applyOptions({
                    width: rsiPaneRef.current.clientWidth
                }));
            if (macdChartRef.current && macdPaneRef.current) safe(()=>macdChartRef.current.applyOptions({
                    width: macdPaneRef.current.clientWidth
                }));
        });
        if (containerRef.current) obs.observe(containerRef.current);
        return ()=>{
            obs.disconnect();
            disposers.forEach((fn)=>fn());
            safe(()=>main.unsubscribeCrosshairMove(onMove));
            safe(()=>main.remove());
            safe(()=>volumeChartRef.current?.remove());
            safe(()=>rsiChartRef.current?.remove());
            safe(()=>macdChartRef.current?.remove());
            chartRef.current = null;
            volumeChartRef.current = null;
            rsiChartRef.current = null;
            macdChartRef.current = null;
        };
    }, [
        bars,
        mode,
        activeIndicators,
        isDark,
        symbol,
        showTrades,
        trades,
        sma20Values,
        sma50Values,
        ema200Values,
        bbValues,
        rsiValues,
        macdValues,
        mainH,
        volHeight,
        rsiHeight,
        macdHeight,
        hasVol,
        hasRSI,
        hasMACD
    ]);
    // ---------------------------------------------------------------------------
    // Current price info
    // ---------------------------------------------------------------------------
    const lastBar = bars[bars.length - 1];
    const prevBar = bars[bars.length - 2];
    const changeAmt = lastBar && prevBar ? lastBar.close - prevBar.close : 0;
    const changePct = prevBar ? changeAmt / prevBar.close * 100 : 0;
    const isUp = changeAmt >= 0;
    const assetNames = {
        BTC: "Bitcoin",
        SOL: "Solana",
        GOLD: "Gold",
        NVDA: "NVIDIA"
    };
    const pairNames = {
        BTC: "BTC/USD",
        SOL: "SOL/USD",
        GOLD: "GOLD/USD",
        NVDA: "NVDA"
    };
    const CHART_TYPE_ICONS = {
        CANDLE: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$candlestick$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CandlestickChart$3e$__["CandlestickChart"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 686,
            columnNumber: 13
        }, this),
        BAR: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 687,
            columnNumber: 10
        }, this),
        LINE: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 688,
            columnNumber: 11
        }, this),
        AREA: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 689,
            columnNumber: 11
        }, this),
        BASELINE: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 690,
            columnNumber: 15
        }, this)
    };
    const INDICATOR_GROUPS = [
        {
            label: "TREND",
            items: [
                {
                    key: "SMA20",
                    label: "SMA 20",
                    color: "#8877FF"
                },
                {
                    key: "SMA50",
                    label: "SMA 50",
                    color: "#E4B64D"
                },
                {
                    key: "EMA200",
                    label: "EMA 200",
                    color: "#FF6572"
                },
                {
                    key: "BB",
                    label: "Bollinger",
                    color: "#8877FF"
                }
            ]
        },
        {
            label: "SUBCHARTS",
            items: [
                {
                    key: "VOLUME",
                    label: "Volume",
                    color: "#626A66"
                },
                {
                    key: "RSI",
                    label: "RSI 14",
                    color: "#8877FF"
                },
                {
                    key: "MACD",
                    label: "MACD 12/26",
                    color: "#E4B64D"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `flex flex-col rounded-2xl overflow-hidden border border-[var(--border)] ${isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""}`,
        style: {
            background: "var(--bg-surface)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 pt-4 pb-3 border-b border-[var(--border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-muted)] font-mono uppercase tracking-widest",
                                        children: assetNames[symbol] ?? symbol
                                    }, void 0, false, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 718,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-secondary)] font-mono",
                                        children: pairNames[symbol]
                                    }, void 0, false, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 721,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 717,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: readoutRef,
                                className: "flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mt-0.5 font-mono"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 716,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: chartTypeMenuRef,
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setChartTypeOpen((prev)=>!prev);
                                            setIndicatorsOpen(false);
                                        },
                                        className: "flex items-center gap-1.5 px-2.5 py-1.5 clay-button rounded-xl text-xs font-mono text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors",
                                        children: [
                                            CHART_TYPE_ICONS[mode],
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: mode
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 736,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-3 h-3 text-[var(--text-muted)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 737,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 731,
                                        columnNumber: 13
                                    }, this),
                                    chartTypeOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-full mt-1 w-40 py-1 rounded-xl clay-card-elevated border border-[var(--border-strong)] z-50 text-xs font-mono shadow-lg",
                                        children: [
                                            "CANDLE",
                                            "BAR",
                                            "LINE",
                                            "AREA",
                                            "BASELINE"
                                        ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setMode(m);
                                                    setChartTypeOpen(false);
                                                },
                                                className: `w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[var(--bg-hover)] transition-colors ${mode === m ? "text-[var(--accent)] font-bold" : "text-[var(--text-primary)]"}`,
                                                children: [
                                                    CHART_TYPE_ICONS[m],
                                                    m === mode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-3 h-3 ml-auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: m === "CANDLE" ? "Candlestick" : m === "BAR" ? "OHLC Bars" : m === "LINE" ? "Line" : m === "AREA" ? "Area" : "Baseline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, m, true, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 742,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 730,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center p-0.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[10px] font-mono",
                                children: [
                                    "1M",
                                    "3M",
                                    "6M",
                                    "1Y",
                                    "ALL"
                                ].map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setTimeframe(tf),
                                        className: `px-2.5 py-1 rounded-lg transition-all ${timeframe === tf ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`,
                                        children: tf
                                    }, tf, false, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 759,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: indicatorsMenuRef,
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIndicatorsOpen((prev)=>!prev);
                                            setChartTypeOpen(false);
                                        },
                                        className: "flex items-center gap-1.5 px-2.5 py-1.5 clay-button rounded-xl text-xs font-mono text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Indicators"
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 779,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--accent)] font-bold",
                                                children: activeIndicators.size > 0 ? `+${activeIndicators.size}` : ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 780,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-3 h-3 text-[var(--text-muted)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 781,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this),
                                    indicatorsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-1 w-48 py-2 rounded-xl clay-card-elevated border border-[var(--border-strong)] z-50 text-xs font-mono shadow-lg",
                                        children: INDICATOR_GROUPS.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-3 py-1 text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold",
                                                        children: group.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 21
                                                    }, this),
                                                    group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleIndicator(item.key),
                                                            className: "w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-primary)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 rounded-full flex-shrink-0",
                                                                    style: {
                                                                        background: item.color
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                                                    lineNumber: 794,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: item.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                                                    lineNumber: 795,
                                                                    columnNumber: 25
                                                                }, this),
                                                                activeIndicators.has(item.key) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "w-3 h-3 ml-auto text-[var(--accent)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                                                    lineNumber: 796,
                                                                    columnNumber: 60
                                                                }, this)
                                                            ]
                                                        }, item.key, true, {
                                                            fileName: "[project]/components/charts/quantora-chart.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, group.label, true, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 786,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 784,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 774,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsFullscreen(!isFullscreen),
                                className: "p-1.5 clay-button rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors",
                                title: isFullscreen ? "Exit fullscreen" : "Fullscreen",
                                children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                    lineNumber: 811,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                    lineNumber: 811,
                                    columnNumber: 69
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 806,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 714,
                columnNumber: 7
            }, this),
            (activeIndicators.has("SMA20") || activeIndicators.has("SMA50") || activeIndicators.has("EMA200") || activeIndicators.has("BB")) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3 px-4 py-1.5 text-[10px] font-mono border-b border-[var(--border)] bg-[var(--bg-recessed)]/30",
                children: [
                    activeIndicators.has("SMA20") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 h-[2px]",
                                style: {
                                    background: "#8877FF",
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 821,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "SMA 20"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 822,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)]",
                                children: sma20Values[sma20Values.length - 1]?.toFixed(0) ?? "—"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 823,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 820,
                        columnNumber: 13
                    }, this),
                    activeIndicators.has("SMA50") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 h-[2px]",
                                style: {
                                    background: "#E4B64D",
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 828,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "SMA 50"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 829,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)]",
                                children: sma50Values[sma50Values.length - 1]?.toFixed(0) ?? "—"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 830,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 827,
                        columnNumber: 13
                    }, this),
                    activeIndicators.has("EMA200") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 h-[2px]",
                                style: {
                                    background: "#FF6572",
                                    display: "inline-block",
                                    borderTop: "2px dashed #FF6572"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 835,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "EMA 200"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 836,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)]",
                                children: ema200Values[ema200Values.length - 1]?.toFixed(0) ?? "—"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 837,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 834,
                        columnNumber: 13
                    }, this),
                    activeIndicators.has("BB") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 h-[2px]",
                                style: {
                                    background: "#8877FF",
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 842,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "BB 20,2"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 843,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 841,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto text-[var(--text-muted)]",
                        children: [
                            bars.length,
                            " sessions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 846,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 818,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mainPaneRef,
                style: {
                    height: mainH,
                    minHeight: mainH
                }
            }, void 0, false, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 851,
                columnNumber: 7
            }, this),
            hasVol && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[var(--border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-0.5 text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-widest",
                        children: "VOLUME"
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 856,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: volPaneRef,
                        style: {
                            height: volHeight
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 857,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 855,
                columnNumber: 9
            }, this),
            hasRSI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[var(--border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-0.5 text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-widest",
                        children: "RSI 14"
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 864,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: rsiPaneRef,
                        style: {
                            height: rsiHeight
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 865,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 863,
                columnNumber: 9
            }, this),
            hasMACD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[var(--border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-0.5 text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-widest",
                        children: "MACD 12/26/9"
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 872,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: macdPaneRef,
                        style: {
                            height: macdHeight
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 873,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 871,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 border-t border-[var(--border)] text-[10px] font-mono text-[var(--text-muted)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 rounded-full bg-[var(--positive)] inline-block mr-1.5 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 880,
                                columnNumber: 11
                            }, this),
                            "DEMO LIVE · ",
                            fmtDate(lastBar?.time ?? "")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Vol ",
                            lastBar ? fmtVol(lastBar.volume) : "—",
                            " · ",
                            bars.length,
                            " bars",
                            " · ",
                            timeframe
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 883,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 878,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/charts/quantora-chart.tsx",
        lineNumber: 708,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/demo-data/ohlcv.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * QUANTORA OHLCV DEMO DATA ENGINE
 * Seed: QUANTORA_DEMO_2026
 *
 * Generates 750+ deterministic trading sessions for each asset.
 * Every candle has a proper timestamp, open, high, low, close, volume.
 * The price series is internally consistent with the regime engine,
 * backtest results, and autopsy data on other pages.
 */ __turbopack_context__.s([
    "ALL_OHLCV",
    ()=>ALL_OHLCV,
    "BACKTEST_TRADES",
    ()=>BACKTEST_TRADES,
    "BTC_OHLCV",
    ()=>BTC_OHLCV,
    "BTC_REGIME_BANDS",
    ()=>BTC_REGIME_BANDS,
    "GOLD_OHLCV",
    ()=>GOLD_OHLCV,
    "NVDA_OHLCV",
    ()=>NVDA_OHLCV,
    "SOL_OHLCV",
    ()=>SOL_OHLCV,
    "barsByTimeframe",
    ()=>barsByTimeframe,
    "bollingerBands",
    ()=>bollingerBands,
    "ema",
    ()=>ema,
    "macdIndicator",
    ()=>macdIndicator,
    "rsiIndicator",
    ()=>rsiIndicator,
    "sma",
    ()=>sma
]);
// ---------------------------------------------------------------------------
// Seeded deterministic pseudo-random (mulberry32)
// ---------------------------------------------------------------------------
function mulberry32(seed) {
    let s = seed;
    return function() {
        s |= 0;
        s = s + 0x6d2b79f5 | 0;
        let t = Math.imul(s ^ s >>> 15, 1 | s);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const BTC_REGIMES = [
    {
        startDate: "2024-01-01",
        endDate: "2024-04-14",
        drift: 0.002,
        vol: 0.028
    },
    {
        startDate: "2024-04-15",
        endDate: "2024-09-30",
        drift: -0.0005,
        vol: 0.038
    },
    {
        startDate: "2024-10-01",
        endDate: "2025-03-31",
        drift: 0.0025,
        vol: 0.032
    },
    {
        startDate: "2025-04-01",
        endDate: "2025-12-31",
        drift: 0.0028,
        vol: 0.042
    },
    {
        startDate: "2026-01-01",
        endDate: "2026-09-19",
        drift: 0.0006,
        vol: 0.022
    }
];
const SOL_REGIMES = [
    {
        startDate: "2024-01-01",
        endDate: "2024-04-14",
        drift: 0.0025,
        vol: 0.052
    },
    {
        startDate: "2024-04-15",
        endDate: "2024-09-30",
        drift: -0.0008,
        vol: 0.062
    },
    {
        startDate: "2024-10-01",
        endDate: "2025-03-31",
        drift: 0.0028,
        vol: 0.048
    },
    {
        startDate: "2025-04-01",
        endDate: "2025-12-31",
        drift: 0.0035,
        vol: 0.058
    },
    {
        startDate: "2026-01-01",
        endDate: "2026-09-19",
        drift: 0.0012,
        vol: 0.038
    }
];
const GOLD_REGIMES = [
    {
        startDate: "2024-01-01",
        endDate: "2024-06-30",
        drift: 0.0006,
        vol: 0.008
    },
    {
        startDate: "2024-07-01",
        endDate: "2024-12-31",
        drift: 0.0008,
        vol: 0.009
    },
    {
        startDate: "2025-01-01",
        endDate: "2025-09-30",
        drift: 0.0007,
        vol: 0.010
    },
    {
        startDate: "2025-10-01",
        endDate: "2026-09-19",
        drift: 0.0004,
        vol: 0.007
    }
];
const NVDA_REGIMES = [
    {
        startDate: "2024-01-01",
        endDate: "2024-06-30",
        drift: 0.0018,
        vol: 0.030
    },
    {
        startDate: "2024-07-01",
        endDate: "2024-12-31",
        drift: -0.0004,
        vol: 0.038
    },
    {
        startDate: "2025-01-01",
        endDate: "2025-09-30",
        drift: 0.0022,
        vol: 0.035
    },
    {
        startDate: "2025-10-01",
        endDate: "2026-09-19",
        drift: -0.0002,
        vol: 0.028
    }
];
// ---------------------------------------------------------------------------
// Core OHLCV generator
// ---------------------------------------------------------------------------
function generateOHLCV(seed, startDate, endDate, startPrice, regimes, volumeBase) {
    const rng = mulberry32(seed);
    const bars = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const current = new Date(start);
    let price = startPrice;
    while(current <= end){
        const dow = current.getDay();
        if (dow !== 0 && dow !== 6) {
            const dateStr = current.toISOString().slice(0, 10);
            let drift = 0.0005;
            let vol = 0.022;
            for (const r of regimes){
                if (dateStr >= r.startDate && dateStr <= r.endDate) {
                    drift = r.drift;
                    vol = r.vol;
                    break;
                }
            }
            // Box-Muller normal random
            const u1 = Math.max(rng(), 1e-9);
            const u2 = rng();
            const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
            const dailyReturn = drift + vol * z;
            const close = Math.max(price * (1 + dailyReturn), 0.01);
            const openFactor = 1 + (rng() - 0.5) * vol * 0.5;
            const open = price * openFactor;
            const highFactor = 1 + rng() * vol * 0.8;
            const lowFactor = 1 - rng() * vol * 0.8;
            const high = Math.max(open, close) * highFactor;
            const low = Math.min(open, close) * Math.max(lowFactor, 0.01);
            const volMultiplier = 1 + Math.abs(dailyReturn / vol) * 0.8 + rng() * 0.4;
            const volume = Math.round(volumeBase * volMultiplier * (0.7 + rng() * 0.6));
            bars.push({
                time: dateStr,
                open: parseFloat(open.toFixed(2)),
                high: parseFloat(high.toFixed(2)),
                low: parseFloat(low.toFixed(2)),
                close: parseFloat(close.toFixed(2)),
                volume
            });
            price = close;
        }
        current.setDate(current.getDate() + 1);
    }
    return bars;
}
function anchorLastBar(bars, targetClose) {
    if (bars.length === 0) return bars;
    const lastClose = bars[bars.length - 1].close;
    if (lastClose <= 0) return bars;
    const ratio = targetClose / lastClose;
    const N = bars.length - 1;
    // Exponential bridge: scales the series smoothly from 1.0 at index 0 to targetClose/lastClose at index N
    return bars.map((b, i)=>{
        const scale = Math.pow(ratio, i / Math.max(N, 1));
        return {
            ...b,
            open: parseFloat((b.open * scale).toFixed(2)),
            high: parseFloat((b.high * scale).toFixed(2)),
            low: parseFloat((b.low * scale).toFixed(2)),
            close: parseFloat((b.close * scale).toFixed(2))
        };
    });
}
const BTC_OHLCV = anchorLastBar(generateOHLCV(0x51ea7c20, "2024-01-01", "2026-09-19", 42000, BTC_REGIMES, 12_000_000), 104284.5);
const SOL_OHLCV = anchorLastBar(generateOHLCV(0x92bef411, "2024-01-01", "2026-09-19", 95, SOL_REGIMES, 40_000_000), 238.6);
const GOLD_OHLCV = anchorLastBar(generateOHLCV(0xa31255dd, "2024-01-01", "2026-09-19", 2060, GOLD_REGIMES, 150_000), 2672.4);
const NVDA_OHLCV = anchorLastBar(generateOHLCV(0xc840b17f, "2024-01-01", "2026-09-19", 49.5, NVDA_REGIMES, 200_000_000), 178.25);
const ALL_OHLCV = {
    BTC: BTC_OHLCV,
    SOL: SOL_OHLCV,
    GOLD: GOLD_OHLCV,
    NVDA: NVDA_OHLCV
};
function barsByTimeframe(bars, tf) {
    const now = new Date("2026-09-19");
    const cut = new Date(now);
    switch(tf){
        case "1M":
            cut.setMonth(now.getMonth() - 1);
            break;
        case "3M":
            cut.setMonth(now.getMonth() - 3);
            break;
        case "6M":
            cut.setMonth(now.getMonth() - 6);
            break;
        case "1Y":
            cut.setFullYear(now.getFullYear() - 1);
            break;
        case "3Y":
            cut.setFullYear(now.getFullYear() - 3);
            break;
        case "ALL":
        case "MAX":
            return bars;
        default:
            return bars.slice(-30);
    }
    const cutStr = cut.toISOString().slice(0, 10);
    return bars.filter((b)=>b.time >= cutStr);
}
function sma(bars, period) {
    return bars.map((_, i)=>{
        if (i < period - 1) return null;
        const slice = bars.slice(i - period + 1, i + 1);
        return slice.reduce((s, b)=>s + b.close, 0) / period;
    });
}
function ema(bars, period) {
    const k = 2 / (period + 1);
    const result = [];
    let prev = null;
    for(let i = 0; i < bars.length; i++){
        if (i < period - 1) {
            result.push(null);
            continue;
        }
        if (i === period - 1) {
            const s = bars.slice(0, period).reduce((acc, b)=>acc + b.close, 0) / period;
            result.push(s);
            prev = s;
            continue;
        }
        const val = bars[i].close * k + (prev ?? bars[i].close) * (1 - k);
        result.push(val);
        prev = val;
    }
    return result;
}
function rsiIndicator(bars, period = 14) {
    const result = [];
    let avgGain = 0, avgLoss = 0;
    for(let i = 0; i < bars.length; i++){
        if (i === 0) {
            result.push(null);
            continue;
        }
        const delta = bars[i].close - bars[i - 1].close;
        const gain = Math.max(0, delta);
        const loss = Math.max(0, -delta);
        if (i <= period) {
            avgGain = (avgGain * (i - 1) + gain) / i;
            avgLoss = (avgLoss * (i - 1) + loss) / i;
            result.push(i < period ? null : 100 - 100 / (1 + avgGain / (avgLoss || 0.0001)));
        } else {
            avgGain = (avgGain * (period - 1) + gain) / period;
            avgLoss = (avgLoss * (period - 1) + loss) / period;
            result.push(100 - 100 / (1 + avgGain / (avgLoss || 0.0001)));
        }
    }
    return result;
}
function bollingerBands(bars, period = 20, stdDev = 2) {
    const upper = [], middle = [], lower = [];
    for(let i = 0; i < bars.length; i++){
        if (i < period - 1) {
            upper.push(null);
            middle.push(null);
            lower.push(null);
            continue;
        }
        const slice = bars.slice(i - period + 1, i + 1);
        const avg = slice.reduce((s, b)=>s + b.close, 0) / period;
        const variance = slice.reduce((s, b)=>s + (b.close - avg) ** 2, 0) / period;
        const sigma = Math.sqrt(variance);
        middle.push(avg);
        upper.push(avg + stdDev * sigma);
        lower.push(avg - stdDev * sigma);
    }
    return {
        upper,
        middle,
        lower
    };
}
function macdIndicator(bars, fast = 12, slow = 26, signal = 9) {
    const fastEma = ema(bars, fast);
    const slowEma = ema(bars, slow);
    const macdLine = bars.map((_, i)=>{
        const f = fastEma[i], s = slowEma[i];
        return f !== null && s !== null ? f - s : null;
    });
    const signalLine = [];
    let prevS = null;
    const k = 2 / (signal + 1);
    let count = 0, seedSum = 0;
    for (const v of macdLine){
        if (v === null) {
            signalLine.push(null);
            continue;
        }
        count++;
        if (count <= signal) {
            seedSum += v;
            if (count === signal) {
                prevS = seedSum / signal;
                signalLine.push(prevS);
            } else signalLine.push(null);
        } else {
            const s = v * k + (prevS ?? v) * (1 - k);
            signalLine.push(s);
            prevS = s;
        }
    }
    const histogram = macdLine.map((m, i)=>{
        const s = signalLine[i];
        return m !== null && s !== null ? m - s : null;
    });
    return {
        macd: macdLine,
        signal: signalLine,
        histogram
    };
}
const BACKTEST_TRADES = [
    {
        id: "T001",
        entryDate: "2024-01-15",
        exitDate: "2024-02-28",
        entryPrice: 43200,
        exitPrice: 51800,
        grossPnl: 8600,
        fees: 49,
        slippage: 22,
        netPnl: 8529,
        holdingDays: 44
    },
    {
        id: "T002",
        entryDate: "2024-03-05",
        exitDate: "2024-03-25",
        entryPrice: 62400,
        exitPrice: 67200,
        grossPnl: 4800,
        fees: 34,
        slippage: 14,
        netPnl: 4752,
        holdingDays: 20
    },
    {
        id: "T003",
        entryDate: "2024-04-10",
        exitDate: "2024-05-15",
        entryPrice: 68900,
        exitPrice: 61400,
        grossPnl: -7500,
        fees: 66,
        slippage: 34,
        netPnl: -7600,
        holdingDays: 35
    },
    {
        id: "T004",
        entryDate: "2024-06-01",
        exitDate: "2024-07-10",
        entryPrice: 67800,
        exitPrice: 57200,
        grossPnl: -10600,
        fees: 63,
        slippage: 32,
        netPnl: -10695,
        holdingDays: 39
    },
    {
        id: "T005",
        entryDate: "2024-08-15",
        exitDate: "2024-09-20",
        entryPrice: 59400,
        exitPrice: 63100,
        grossPnl: 3700,
        fees: 62,
        slippage: 30,
        netPnl: 3608,
        holdingDays: 36
    },
    {
        id: "T006",
        entryDate: "2024-10-01",
        exitDate: "2024-11-15",
        entryPrice: 61800,
        exitPrice: 84200,
        grossPnl: 22400,
        fees: 147,
        slippage: 75,
        netPnl: 22178,
        holdingDays: 45
    },
    {
        id: "T007",
        entryDate: "2024-11-20",
        exitDate: "2024-12-31",
        entryPrice: 93200,
        exitPrice: 96800,
        grossPnl: 3600,
        fees: 95,
        slippage: 45,
        netPnl: 3460,
        holdingDays: 41
    },
    {
        id: "T008",
        entryDate: "2025-01-10",
        exitDate: "2025-02-28",
        entryPrice: 95400,
        exitPrice: 85600,
        grossPnl: -9800,
        fees: 91,
        slippage: 42,
        netPnl: -9933,
        holdingDays: 49
    },
    {
        id: "T009",
        entryDate: "2025-03-15",
        exitDate: "2025-05-01",
        entryPrice: 84200,
        exitPrice: 91400,
        grossPnl: 7200,
        fees: 88,
        slippage: 38,
        netPnl: 7074,
        holdingDays: 47
    },
    {
        id: "T010",
        entryDate: "2025-05-15",
        exitDate: "2025-06-20",
        entryPrice: 93600,
        exitPrice: 89200,
        grossPnl: -4400,
        fees: 91,
        slippage: 44,
        netPnl: -4535,
        holdingDays: 36
    },
    {
        id: "T011",
        entryDate: "2025-07-01",
        exitDate: "2025-08-15",
        entryPrice: 87400,
        exitPrice: 96200,
        grossPnl: 8800,
        fees: 92,
        slippage: 43,
        netPnl: 8665,
        holdingDays: 45
    },
    {
        id: "T012",
        entryDate: "2025-08-20",
        exitDate: "2025-10-05",
        entryPrice: 94100,
        exitPrice: 108400,
        grossPnl: 14300,
        fees: 103,
        slippage: 50,
        netPnl: 14147,
        holdingDays: 46
    },
    {
        id: "T013",
        entryDate: "2025-10-10",
        exitDate: "2025-11-10",
        entryPrice: 106800,
        exitPrice: 114200,
        grossPnl: 7400,
        fees: 111,
        slippage: 54,
        netPnl: 7235,
        holdingDays: 31
    },
    {
        id: "T014",
        entryDate: "2025-11-15",
        exitDate: "2025-12-31",
        entryPrice: 111400,
        exitPrice: 97800,
        grossPnl: -13600,
        fees: 105,
        slippage: 48,
        netPnl: -13753,
        holdingDays: 46
    },
    {
        id: "T015",
        entryDate: "2026-01-15",
        exitDate: "2026-02-20",
        entryPrice: 95200,
        exitPrice: 98400,
        grossPnl: 3200,
        fees: 97,
        slippage: 48,
        netPnl: 3055,
        holdingDays: 36
    },
    {
        id: "T016",
        entryDate: "2026-03-01",
        exitDate: "2026-04-01",
        entryPrice: 97800,
        exitPrice: 102600,
        grossPnl: 4800,
        fees: 101,
        slippage: 49,
        netPnl: 4650,
        holdingDays: 31
    },
    {
        id: "T017",
        entryDate: "2026-04-10",
        exitDate: "2026-05-20",
        entryPrice: 101200,
        exitPrice: 95400,
        grossPnl: -5800,
        fees: 97,
        slippage: 48,
        netPnl: -5945,
        holdingDays: 40
    },
    {
        id: "T018",
        entryDate: "2026-06-01",
        exitDate: "2026-07-05",
        entryPrice: 94600,
        exitPrice: 99800,
        grossPnl: 5200,
        fees: 97,
        slippage: 47,
        netPnl: 5056,
        holdingDays: 34
    },
    {
        id: "T019",
        entryDate: "2026-07-15",
        exitDate: "2026-08-20",
        entryPrice: 98400,
        exitPrice: 103200,
        grossPnl: 4800,
        fees: 102,
        slippage: 49,
        netPnl: 4649,
        holdingDays: 36
    },
    {
        id: "T020",
        entryDate: "2026-09-01",
        exitDate: "2026-09-19",
        entryPrice: 101600,
        exitPrice: 104284,
        grossPnl: 2684,
        fees: 104,
        slippage: 50,
        netPnl: 2530,
        holdingDays: 18
    }
];
const BTC_REGIME_BANDS = [
    {
        startDate: "2024-01-01",
        endDate: "2024-04-14",
        regime: "BULL_LOW",
        label: "Bull / Low Vol"
    },
    {
        startDate: "2024-04-15",
        endDate: "2024-09-30",
        regime: "BEAR",
        label: "Bear / High Vol"
    },
    {
        startDate: "2024-10-01",
        endDate: "2025-03-31",
        regime: "BULL_HIGH",
        label: "Bull / High Vol"
    },
    {
        startDate: "2025-04-01",
        endDate: "2025-12-31",
        regime: "BULL_HIGH",
        label: "Bull / High Vol"
    },
    {
        startDate: "2026-01-01",
        endDate: "2026-09-19",
        regime: "TRANSITION",
        label: "Transition"
    }
];
}),
];

//# sourceMappingURL=_0j52vn3._.js.map