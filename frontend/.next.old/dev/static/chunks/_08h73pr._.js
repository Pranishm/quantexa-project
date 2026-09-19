(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/app/markets/cross-asset/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketXRayPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.mjs [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-data-hub.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-simulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$correlation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/correlation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MarketXRayPage() {
    _s();
    const marketSim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketSimulation"])();
    const [liveTickCounter, setLiveTickCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Subscribe to live tick engine
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketXRayPage.useEffect": ()=>{
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketHub"].subscribe({
                "MarketXRayPage.useEffect.unsub": ()=>{
                    setLiveTickCounter({
                        "MarketXRayPage.useEffect.unsub": (prev)=>prev + 1
                    }["MarketXRayPage.useEffect.unsub"]);
                }
            }["MarketXRayPage.useEffect.unsub"]);
            return unsub;
        }
    }["MarketXRayPage.useEffect"], []);
    const [timeframe, setTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1Y");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("matrix");
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pearson");
    const [selectedPair, setSelectedPair] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "BTC",
        "SOL"
    ]);
    const [rollingWindowDays, setRollingWindowDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30);
    const [hoveredCell, setHoveredCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const symbols = [
        "BTC",
        "SOL",
        "GOLD",
        "NVDA"
    ];
    // 1. Dynamic Correlation Matrix calculated from real data
    const matrixResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[matrixResult]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$correlation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCorrelationMatrix"])(symbols, timeframe);
        }
    }["MarketXRayPage.useMemo[matrixResult]"], [
        timeframe,
        liveTickCounter
    ]);
    const matrixData = matrixResult.matrix;
    // 2. Dynamic Rolling Correlation calculated for selected pair and window
    const rollingSeries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[rollingSeries]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$correlation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateRollingCorrelation"])(selectedPair[0], selectedPair[1], rollingWindowDays, timeframe);
        }
    }["MarketXRayPage.useMemo[rollingSeries]"], [
        selectedPair,
        rollingWindowDays,
        timeframe,
        liveTickCounter
    ]);
    // 3. Dynamic Normalized Performance (Base 100) from market data hub
    const normalizedComparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[normalizedComparison]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketHub"].getMultiAssetComparison(symbols, timeframe);
        }
    }["MarketXRayPage.useMemo[normalizedComparison]"], [
        timeframe,
        liveTickCounter
    ]);
    // Merge timestamps for multi-line SVG chart
    const normalizedDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[normalizedDates]": ()=>{
            const pts = normalizedComparison["BTC"] || [];
            const step = Math.max(1, Math.floor(pts.length / 20));
            return pts.filter({
                "MarketXRayPage.useMemo[normalizedDates]": (_, idx)=>idx % step === 0 || idx === pts.length - 1
            }["MarketXRayPage.useMemo[normalizedDates]"]);
        }
    }["MarketXRayPage.useMemo[normalizedDates]"], [
        normalizedComparison
    ]);
    // 4. Dynamic Risk / Return metrics
    const riskReturnStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[riskReturnStats]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$correlation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateRiskReturnComparison"])(symbols, timeframe);
        }
    }["MarketXRayPage.useMemo[riskReturnStats]"], [
        timeframe,
        liveTickCounter
    ]);
    const scatterPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[scatterPoints]": ()=>{
            const colors = {
                BTC: "#6757E8",
                SOL: "#10B981",
                GOLD: "#F59E0B",
                NVDA: "#3B82F6",
                "1INCH": "#2B82F6",
                ETH: "#627EEA"
            };
            return riskReturnStats.map({
                "MarketXRayPage.useMemo[scatterPoints]": (s)=>({
                        symbol: s.asset,
                        vol: s.annualizedVol,
                        ret: s.cagr,
                        sharpe: s.sharpe,
                        maxDd: s.maxDrawdown,
                        color: colors[s.asset]
                    })
            }["MarketXRayPage.useMemo[scatterPoints]"]);
        }
    }["MarketXRayPage.useMemo[scatterPoints]"], [
        riskReturnStats
    ]);
    // 5. Dynamic Relationship Links for Topology
    const relationshipLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[relationshipLinks]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$correlation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelationshipLinks"])(matrixData);
        }
    }["MarketXRayPage.useMemo[relationshipLinks]"], [
        matrixData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-7xl mx-auto space-y-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-mono tracking-wider text-[var(--accent)] font-semibold uppercase px-2.5 py-0.5 rounded-full clay-recessed border border-[var(--accent)]/20",
                                        children: "QUANTITATIVE RESEARCH"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-muted)] font-mono flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-[#00E599] animate-ping"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            "LIVE TICK ENGINE · ",
                                            marketSim.latencyMs,
                                            "ms REFRESH"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold tracking-tight text-[var(--text-primary)]",
                                children: "MARKET X-RAY & CROSS-ASSET CORRELATION"
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-secondary)] mt-0.5",
                                children: "Realtime Pearson correlation matrix, rolling dependency analysis, relative performance (Base 100), and risk-return topology across BTC, SOL, GOLD, and NVDA."
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs",
                                children: [
                                    "pearson",
                                    "spearman",
                                    "rolling"
                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMethod(m),
                                        className: `px-2.5 py-1 rounded-lg capitalize font-mono text-[11px] transition-colors ${method === m ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                                        children: m
                                    }, m, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs",
                                children: [
                                    "1M",
                                    "3M",
                                    "6M",
                                    "1Y",
                                    "MAX"
                                ].map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setTimeframe(tf),
                                        className: `px-3 py-1 rounded-lg text-xs font-mono transition-all ${timeframe === tf ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                                        children: tf
                                    }, tf, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
                children: symbols.map((sym)=>{
                    const assetData = marketSim.assets[sym] || {
                        price: sym === "BTC" ? 104846.2 : sym === "SOL" ? 184.5 : sym === "GOLD" ? 2740.1 : 128.4,
                        changePercent: 1.85,
                        high: 105000,
                        low: 102000,
                        volume: 24500000
                    };
                    const isPos = assetData.changePercent >= 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] flex items-center justify-between shadow-sm hover:scale-[1.01] transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-muted)] uppercase",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--text-primary)]",
                                                children: sym
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "/ USD"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base font-extrabold text-[var(--text-primary)] font-mono mt-0.5",
                                        children: [
                                            "$",
                                            assetData.price.toLocaleString("en-US", {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${isPos ? "bg-emerald-500/15 text-[#00E599]" : "bg-rose-500/15 text-[#FF3B69]"}`,
                                        children: isPos ? `+${assetData.changePercent}%` : `${assetData.changePercent}%`
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-mono text-[var(--text-muted)] mt-1",
                                        children: [
                                            "Vol: ",
                                            assetData.volume
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        ]
                    }, sym, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 border-b border-[var(--border)] pb-2 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode("matrix"),
                        className: `px-3.5 py-1.5 rounded-xl font-medium transition-all ${viewMode === "matrix" ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                        children: "1. Correlation Matrix"
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode("rolling"),
                        className: `px-3.5 py-1.5 rounded-xl font-medium transition-all ${viewMode === "rolling" ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                        children: [
                            "2. Rolling Correlation (",
                            selectedPair[0],
                            " ↔ ",
                            selectedPair[1],
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode("relative"),
                        className: `px-3.5 py-1.5 rounded-xl font-medium transition-all ${viewMode === "relative" ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                        children: "3. Normalized Performance (Base 100)"
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode("scatter"),
                        className: `px-3.5 py-1.5 rounded-xl font-medium transition-all ${viewMode === "scatter" ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                        children: "4. Risk / Return Scatter"
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode("topology"),
                        className: `px-3.5 py-1.5 rounded-xl font-medium transition-all ${viewMode === "topology" ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                        children: "5. Relationship Network Map"
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            viewMode === "matrix" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider",
                                                children: [
                                                    "Cross-Asset Correlation Matrix (",
                                                    timeframe,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--text-muted)]",
                                                children: "Computed dynamically via Pearson coefficient across daily log returns. Click any cell to isolate rolling correlation."
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full font-semibold",
                                        children: [
                                            "N = ",
                                            matrixResult.sampleSize,
                                            " Sessions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto pt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-center font-mono text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-left font-bold text-[var(--text-muted)] uppercase",
                                                        children: "Asset"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this),
                                                    symbols.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 font-bold text-[var(--text-primary)]",
                                                            children: s
                                                        }, s, false, {
                                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: symbols.map((rowSym)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-t border-[var(--border)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-left font-bold text-[var(--text-primary)] flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2.5 h-2.5 rounded-full bg-[var(--accent)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 25
                                                                }, this),
                                                                rowSym
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 23
                                                        }, this),
                                                        symbols.map((colSym)=>{
                                                            const val = matrixData[rowSym]?.[colSym] ?? 0;
                                                            const isDiag = rowSym === colSym;
                                                            const isSelectedPair = selectedPair[0] === rowSym && selectedPair[1] === colSym || selectedPair[0] === colSym && selectedPair[1] === rowSym;
                                                            let cellBg = "bg-transparent";
                                                            let cellText = "text-[var(--text-primary)]";
                                                            if (val > 0.65 && !isDiag) {
                                                                cellBg = "bg-[var(--positive)]/20";
                                                                cellText = "text-[var(--positive)] font-bold";
                                                            } else if (val > 0.25 && !isDiag) {
                                                                cellBg = "bg-[var(--accent)]/15";
                                                                cellText = "text-[var(--accent)] font-semibold";
                                                            } else if (val < 0) {
                                                                cellBg = "bg-[var(--negative)]/15";
                                                                cellText = "text-[var(--negative)] font-bold";
                                                            }
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                onClick: ()=>{
                                                                    if (!isDiag) {
                                                                        setSelectedPair([
                                                                            rowSym,
                                                                            colSym
                                                                        ]);
                                                                        setViewMode("rolling");
                                                                    }
                                                                },
                                                                onMouseEnter: ()=>setHoveredCell({
                                                                        r: rowSym,
                                                                        c: colSym,
                                                                        val
                                                                    }),
                                                                onMouseLeave: ()=>setHoveredCell(null),
                                                                className: `p-3 cursor-pointer transition-all rounded-xl ${cellBg} ${cellText} ${isSelectedPair ? "ring-2 ring-[var(--accent)]" : "hover:scale-105"}`,
                                                                children: val >= 0 ? `+${val.toFixed(2)}` : val.toFixed(2)
                                                            }, colSym, false, {
                                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    ]
                                                }, rowSym, true, {
                                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] pt-3 border-t border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded bg-[var(--positive)]/30 inline-block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Strong Positive (>0.65)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded bg-[var(--accent)]/25 inline-block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Moderate (0.25 - 0.65)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded bg-[var(--negative)]/25 inline-block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Inverse / Hedge (<0.00)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Click cell to launch Rolling Analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-xs uppercase tracking-wider text-[var(--text-primary)]",
                                children: "Pairwise Dependency Inspector"
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 font-mono text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clay-recessed p-4 rounded-2xl space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)] uppercase",
                                                children: "Selected Asset Pair"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base font-bold text-[var(--text-primary)] flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: hoveredCell ? `${hoveredCell.r} ↔ ${hoveredCell.c}` : `${selectedPair[0]} ↔ ${selectedPair[1]}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--accent)]",
                                                        children: hoveredCell ? `${hoveredCell.val >= 0 ? "+" : ""}${hoveredCell.val.toFixed(2)}` : `+${(matrixData[selectedPair[0]]?.[selectedPair[1]] ?? 0.5).toFixed(2)}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between py-1 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "Calculated Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold capitalize",
                                                        children: method
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between py-1 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "Observation Window"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: timeframe
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between py-1 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "Sample Observations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: matrixResult.sampleSize
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between py-1 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: [
                                                            selectedPair[0],
                                                            " Volatility"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[var(--text-primary)]",
                                                        children: [
                                                            scatterPoints.find((p)=>p.symbol === selectedPair[0])?.vol ?? 0,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between py-1 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: [
                                                            selectedPair[1],
                                                            " Volatility"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[var(--text-primary)]",
                                                        children: [
                                                            scatterPoints.find((p)=>p.symbol === selectedPair[1])?.vol ?? 0,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("rolling"),
                                        className: "w-full py-2.5 rounded-xl bg-[var(--accent)] text-white font-bold flex items-center justify-center gap-1.5 clay-button text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Launch Rolling Time Series"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this),
            viewMode === "rolling" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm text-[var(--text-primary)] flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "w-4 h-4 text-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this),
                                            "Rolling ",
                                            rollingWindowDays,
                                            "-Day Correlation: ",
                                            selectedPair[0],
                                            " vs ",
                                            selectedPair[1]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-muted)]",
                                        children: "Recalculated on live series from -1.0 (inverse hedge) to +1.0 (perfect coupling)."
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3 font-mono text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 clay-recessed p-1 rounded-xl",
                                        children: [
                                            20,
                                            30,
                                            60,
                                            90
                                        ].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRollingWindowDays(w),
                                                className: `px-2 py-0.5 rounded-lg text-xs transition-colors ${rollingWindowDays === w ? "bg-[var(--accent)] text-white font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`,
                                                children: [
                                                    w,
                                                    "D"
                                                ]
                                            }, w, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--text-muted)]",
                                                children: "Pair:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: `${selectedPair[0]}-${selectedPair[1]}`,
                                                onChange: (e)=>{
                                                    const [a, b] = e.target.value.split("-");
                                                    setSelectedPair([
                                                        a,
                                                        b
                                                    ]);
                                                },
                                                className: "bg-[var(--bg-recessed)] border border-[var(--border)] rounded-lg px-2 py-1 text-[var(--text-primary)] font-bold focus:outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "BTC-SOL",
                                                        children: "BTC ↔ SOL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "BTC-NVDA",
                                                        children: "BTC ↔ NVDA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "BTC-GOLD",
                                                        children: "BTC ↔ GOLD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SOL-NVDA",
                                                        children: "SOL ↔ NVDA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SOL-GOLD",
                                                        children: "SOL ↔ GOLD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "GOLD-NVDA",
                                                        children: "GOLD ↔ NVDA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[var(--bg-recessed)]/50 rounded-2xl p-4 border border-[var(--border)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 800 240",
                                className: "w-full h-56",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "20",
                                        x2: "800",
                                        y2: "20",
                                        stroke: "currentColor",
                                        strokeOpacity: "0.1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "8",
                                        y: "16",
                                        fill: "currentColor",
                                        fillOpacity: "0.4",
                                        fontSize: "10",
                                        fontFamily: "monospace",
                                        children: "+1.0 (Coupled)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "120",
                                        x2: "800",
                                        y2: "120",
                                        stroke: "currentColor",
                                        strokeOpacity: "0.25",
                                        strokeDasharray: "4 4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "8",
                                        y: "115",
                                        fill: "currentColor",
                                        fillOpacity: "0.5",
                                        fontSize: "10",
                                        fontFamily: "monospace",
                                        children: "0.0 (Uncorrelated)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "220",
                                        x2: "800",
                                        y2: "220",
                                        stroke: "currentColor",
                                        strokeOpacity: "0.1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "8",
                                        y: "215",
                                        fill: "currentColor",
                                        fillOpacity: "0.4",
                                        fontSize: "10",
                                        fontFamily: "monospace",
                                        children: "-1.0 (Inverse)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    rollingSeries.length > 1 && (()=>{
                                        const w = 800;
                                        const path = rollingSeries.map((p, idx)=>{
                                            const x = idx / (rollingSeries.length - 1) * w;
                                            const y = 120 - p.correlation * 100;
                                            return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                                        }).join(" ");
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: path,
                                            fill: "none",
                                            stroke: "#6757E8",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 19
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: rollingSeries[0]?.time || "Start"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 490,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Rolling Window: ",
                                            rollingWindowDays,
                                            " Trading Days"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 491,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: rollingSeries[rollingSeries.length - 1]?.time || "Latest"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 489,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, this),
            viewMode === "relative" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm text-[var(--text-primary)] flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "w-4 h-4 text-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 17
                                            }, this),
                                            "Normalized Multi-Asset Performance (Base 100)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-muted)]",
                                        children: "Direct percentage return comparison calibrated from the initial observation timestamp."
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 text-xs font-mono",
                                children: symbols.map((sym)=>{
                                    const pts = normalizedComparison[sym] || [];
                                    const lastVal = pts[pts.length - 1]?.normalized ?? 100;
                                    const colors = {
                                        BTC: "#6757E8",
                                        SOL: "#10B981",
                                        GOLD: "#F59E0B",
                                        NVDA: "#3B82F6",
                                        "1INCH": "#2B82F6",
                                        ETH: "#627EEA"
                                    };
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 text-[var(--text-primary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full",
                                                style: {
                                                    backgroundColor: colors[sym]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 21
                                            }, this),
                                            sym,
                                            " (",
                                            lastVal,
                                            ")"
                                        ]
                                    }, sym, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 512,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[var(--bg-recessed)]/50 rounded-2xl p-4 border border-[var(--border)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 800 240",
                                className: "w-full h-56",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "180",
                                        x2: "800",
                                        y2: "180",
                                        stroke: "currentColor",
                                        strokeOpacity: "0.25",
                                        strokeDasharray: "4 4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "8",
                                        y: "175",
                                        fill: "currentColor",
                                        fillOpacity: "0.5",
                                        fontSize: "10",
                                        fontFamily: "monospace",
                                        children: "Base: 100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this),
                                    symbols.map((sym)=>{
                                        const colors = {
                                            BTC: "#6757E8",
                                            SOL: "#10B981",
                                            GOLD: "#F59E0B",
                                            NVDA: "#3B82F6",
                                            "1INCH": "#2B82F6",
                                            ETH: "#627EEA"
                                        };
                                        const pts = normalizedComparison[sym] || [];
                                        if (pts.length < 2) return null;
                                        const path = pts.map((p, idx)=>{
                                            const x = idx / (pts.length - 1) * 800;
                                            const y = 180 - (p.normalized - 100) / 120 * 140;
                                            return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                                        }).join(" ");
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: path,
                                            fill: "none",
                                            stroke: colors[sym],
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, sym, false, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: normalizedDates[0]?.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: normalizedDates[Math.floor(normalizedDates.length / 2)]?.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: normalizedDates[normalizedDates.length - 1]?.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 527,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 500,
                columnNumber: 9
            }, this),
            viewMode === "scatter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] pb-3.5 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                                                className: "w-4 h-4 text-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm text-[var(--text-primary)] tracking-wide font-mono",
                                                children: "CROSS-ASSET RISK VS RETURN EFFICIENT FRONTIER"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 573,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]",
                                                children: "MARKOWITZ SPACE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-muted)] mt-0.5",
                                        children: [
                                            "X-Axis: Realized Annualized Volatility (Risk) · Y-Axis: Compound Annual Growth Rate (CAGR Return) · ",
                                            timeframe,
                                            " Window"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 580,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 570,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 text-[11px] font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[var(--text-muted)] uppercase tracking-wider",
                                        children: "Sharpe Rating:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 587,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-md bg-emerald-500/15 text-[#00E599] font-bold text-[10px] border border-emerald-500/20",
                                        children: "> 1.0 (Strong)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-md bg-blue-500/15 text-[#3B82F6] font-bold text-[10px] border border-blue-500/20",
                                        children: "0.5 – 1.0 (Moderate)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 591,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-md bg-amber-500/15 text-[#F59E0B] font-bold text-[10px] border border-amber-500/20",
                                        children: "< 0.5 (High Drag)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 586,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 569,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[var(--bg-recessed)]/70 rounded-2xl p-4 sm:p-6 border border-[var(--border)] relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 880 340",
                            className: "w-full h-80 font-mono select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "optGrad",
                                            x1: "0",
                                            y1: "0",
                                            x2: "0",
                                            y2: "1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#00E599",
                                                    stopOpacity: "0.08"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#00E599",
                                                    stopOpacity: "0.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "subGrad",
                                            x1: "0",
                                            y1: "0",
                                            x2: "0",
                                            y2: "1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#FF3B69",
                                                    stopOpacity: "0.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#FF3B69",
                                                    stopOpacity: "0.06"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 603,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "75",
                                    y: "30",
                                    width: "370",
                                    height: "190",
                                    fill: "url(#optGrad)",
                                    rx: "8"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 615,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "445",
                                    y: "220",
                                    width: "380",
                                    height: "70",
                                    fill: "url(#subGrad)",
                                    rx: "8"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 616,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "85",
                                    y: "48",
                                    fill: "#00E599",
                                    fillOpacity: "0.6",
                                    fontSize: "9",
                                    fontWeight: "bold",
                                    letterSpacing: "1",
                                    children: "▲ OPTIMAL QUADRANT (HIGH RETURN / LOW RISK)"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 619,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "460",
                                    y: "48",
                                    fill: "currentColor",
                                    fillOpacity: "0.3",
                                    fontSize: "9",
                                    fontWeight: "bold",
                                    letterSpacing: "1",
                                    children: "▲ AGGRESSIVE ALPHA (HIGH RETURN / HIGH VOL)"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 622,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "85",
                                    y: "280",
                                    fill: "currentColor",
                                    fillOpacity: "0.35",
                                    fontSize: "9",
                                    fontWeight: "bold",
                                    letterSpacing: "1",
                                    children: "▼ DEFENSIVE PRESERVATION (LOW RETURN / LOW VOL)"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "460",
                                    y: "280",
                                    fill: "#FF3B69",
                                    fillOpacity: "0.5",
                                    fontSize: "9",
                                    fontWeight: "bold",
                                    letterSpacing: "1",
                                    children: "▼ SUB-OPTIMAL DRAG (LOW RETURN / HIGH VOL)"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "75",
                                    y1: "220",
                                    x2: "745",
                                    y2: "30",
                                    stroke: "currentColor",
                                    strokeOpacity: "0.15",
                                    strokeDasharray: "5 5"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "750",
                                    y: "34",
                                    fill: "currentColor",
                                    fillOpacity: "0.4",
                                    fontSize: "9",
                                    children: "Sharpe = 1.0 (Capital Allocation Line)"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 634,
                                    columnNumber: 15
                                }, this),
                                [
                                    {
                                        label: "+100%",
                                        y: 40
                                    },
                                    {
                                        label: "+75%",
                                        y: 85
                                    },
                                    {
                                        label: "+50%",
                                        y: 130
                                    },
                                    {
                                        label: "+25%",
                                        y: 175
                                    },
                                    {
                                        label: "0% Return",
                                        y: 220,
                                        bold: true
                                    },
                                    {
                                        label: "-25%",
                                        y: 265
                                    }
                                ].map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "75",
                                                y1: g.y,
                                                x2: "830",
                                                y2: g.y,
                                                stroke: "currentColor",
                                                strokeOpacity: g.bold ? 0.4 : 0.12,
                                                strokeDasharray: g.bold ? undefined : "3 3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 646,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "65",
                                                y: g.y + 3.5,
                                                fill: "currentColor",
                                                fillOpacity: g.bold ? 0.9 : 0.45,
                                                fontSize: "9.5",
                                                fontWeight: g.bold ? "bold" : "normal",
                                                textAnchor: "end",
                                                children: g.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 645,
                                        columnNumber: 17
                                    }, this)),
                                [
                                    {
                                        label: "0%",
                                        x: 75
                                    },
                                    {
                                        label: "20%",
                                        x: 226
                                    },
                                    {
                                        label: "40%",
                                        x: 377
                                    },
                                    {
                                        label: "60%",
                                        x: 528
                                    },
                                    {
                                        label: "80%",
                                        x: 679
                                    },
                                    {
                                        label: "100% Vol",
                                        x: 830,
                                        bold: true
                                    }
                                ].map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: g.x,
                                                y1: "30",
                                                x2: g.x,
                                                y2: "290",
                                                stroke: "currentColor",
                                                strokeOpacity: g.bold ? 0.35 : 0.1,
                                                strokeDasharray: "3 3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: g.x,
                                                y: "306",
                                                fill: "currentColor",
                                                fillOpacity: g.bold ? 0.85 : 0.5,
                                                fontSize: "9.5",
                                                fontWeight: g.bold ? "bold" : "normal",
                                                textAnchor: "middle",
                                                children: g.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 688,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 678,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "450",
                                    y: "325",
                                    fill: "currentColor",
                                    fillOpacity: "0.75",
                                    fontSize: "10",
                                    fontWeight: "bold",
                                    textAnchor: "middle",
                                    children: "ANNUALIZED REALIZED VOLATILITY (RISK) →"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 703,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "18",
                                    y: "145",
                                    fill: "currentColor",
                                    fillOpacity: "0.75",
                                    fontSize: "10",
                                    fontWeight: "bold",
                                    transform: "rotate(-90 18,145)",
                                    textAnchor: "middle",
                                    children: "CAGR RETURN (ANNUALIZED) →"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 706,
                                    columnNumber: 15
                                }, this),
                                scatterPoints.map((p, idx)=>{
                                    // X mapping: 0% at 75, 100% at 830 -> span = 755
                                    const cx = 75 + Math.min(755, Math.max(15, p.vol / 100 * 755));
                                    // Y mapping: 0% at 220, 100% at 40 -> span = 180
                                    const cy = 220 - p.ret / 100 * 180;
                                    // Dedicated badge offset so tags never overlap
                                    const pillOffsets = {
                                        GOLD: {
                                            dx: 18,
                                            dy: -28
                                        },
                                        BTC: {
                                            dx: 18,
                                            dy: -26
                                        },
                                        SOL: {
                                            dx: -180,
                                            dy: -26
                                        },
                                        NVDA: {
                                            dx: 18,
                                            dy: -26
                                        }
                                    };
                                    const offset = pillOffsets[p.symbol] || {
                                        dx: 18,
                                        dy: -26
                                    };
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        className: "cursor-pointer group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: cx,
                                                cy: cy,
                                                r: "22",
                                                fill: p.color,
                                                fillOpacity: "0.15"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 729,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: cx,
                                                cy: cy,
                                                r: "15",
                                                fill: p.color,
                                                stroke: "#FFFFFF",
                                                strokeWidth: "2",
                                                className: "transition-transform group-hover:scale-115"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 732,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: cx,
                                                y: cy + 3.5,
                                                fill: "#FFFFFF",
                                                fontSize: "9",
                                                fontWeight: "bold",
                                                textAnchor: "middle",
                                                children: p.symbol.slice(0, 3)
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 743,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: cx,
                                                y1: cy,
                                                x2: cx + offset.dx + (offset.dx < 0 ? 150 : 0),
                                                y2: cy + offset.dy + 10,
                                                stroke: p.color,
                                                strokeWidth: "1.5",
                                                strokeOpacity: "0.7"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 755,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: cx + offset.dx,
                                                y: cy + offset.dy,
                                                width: "168",
                                                height: "24",
                                                rx: "6",
                                                fill: "var(--bg-surface)",
                                                stroke: p.color,
                                                strokeWidth: "1.5",
                                                className: "shadow-md"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 766,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: cx + offset.dx + 8,
                                                y: cy + offset.dy + 15,
                                                fill: "var(--text-primary)",
                                                fontSize: "9.5",
                                                fontWeight: "bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                        fill: p.color,
                                                        fontWeight: "900",
                                                        children: p.symbol
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 785,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                        fill: "currentColor",
                                                        fillOpacity: "0.8",
                                                        children: " · CAGR: "
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 786,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                        fill: p.ret >= 0 ? "#00E599" : "#FF3B69",
                                                        children: p.ret >= 0 ? `+${p.ret}%` : `${p.ret}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                        fill: "currentColor",
                                                        fillOpacity: "0.5",
                                                        children: " | "
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                        fill: "currentColor",
                                                        fillOpacity: "0.8",
                                                        children: [
                                                            "S: ",
                                                            p.sharpe
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 778,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, p.symbol, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 727,
                                        columnNumber: 19
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                            lineNumber: 602,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 601,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1",
                        children: scatterPoints.map((p)=>{
                            const sharpeRating = p.sharpe >= 1.0 ? {
                                label: "Strong Alpha",
                                color: "text-[#00E599] bg-emerald-500/10 border-emerald-500/20"
                            } : p.sharpe >= 0.5 ? {
                                label: "Moderate",
                                color: "text-[#3B82F6] bg-blue-500/10 border-blue-500/20"
                            } : {
                                label: "High Risk Drag",
                                color: "text-[#F59E0B] bg-amber-500/10 border-amber-500/20"
                            };
                            const profiles = {
                                BTC: {
                                    role: "Liquid Macro Asset",
                                    desc: "Digital store of value with convex upside and intermediate drawdowns."
                                },
                                SOL: {
                                    role: "High-Beta Layer 1",
                                    desc: "Extreme momentum and volatility; requires systematic trend-filtering."
                                },
                                GOLD: {
                                    role: "Defensive Reserve",
                                    desc: "Low correlation to equities; optimal portfolio ballast during shocks."
                                },
                                NVDA: {
                                    role: "AI Mega-Cap Tech",
                                    desc: "Dominant earnings momentum with concentrated semiconductor cyclicality."
                                }
                            };
                            const prof = profiles[p.symbol] || {
                                role: "Cross-Asset",
                                desc: "Quantitative asset stream."
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-recessed p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-recessed)]/60 space-y-3 hover:border-[var(--accent)]/30 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-full",
                                                        style: {
                                                            backgroundColor: p.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-sm text-[var(--text-primary)]",
                                                        children: p.symbol
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "/ USD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 823,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md border ${sharpeRating.color}`,
                                                children: sharpeRating.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 828,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 822,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 text-xs font-mono pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-[var(--text-muted)] uppercase block",
                                                        children: "CAGR Return"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-sm font-extrabold ${p.ret >= 0 ? "text-[#00E599]" : "text-[#FF3B69]"}`,
                                                        children: p.ret >= 0 ? `+${p.ret}%` : `${p.ret}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-[var(--text-muted)] uppercase block",
                                                        children: "Annualized Vol"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-extrabold text-[var(--text-primary)]",
                                                        children: [
                                                            p.vol,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 841,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-[var(--text-muted)] uppercase block",
                                                        children: "Sharpe Ratio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-extrabold text-[var(--accent)]",
                                                        children: p.sharpe
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 850,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 848,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-[var(--text-muted)] uppercase block",
                                                        children: "Max Drawdown"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-extrabold text-[#FF3B69]",
                                                        children: [
                                                            p.maxDd,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 855,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 833,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1 border-t border-[var(--border)]/60 text-[10px] text-[var(--text-secondary)] font-sans leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-[var(--text-primary)] block font-mono text-[9px] uppercase tracking-wider mb-0.5",
                                                children: prof.role
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 864,
                                                columnNumber: 21
                                            }, this),
                                            prof.desc
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 863,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, p.symbol, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 818,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 800,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 568,
                columnNumber: 9
            }, this),
            viewMode === "topology" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[var(--border)] pb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-sm text-[var(--text-primary)]",
                                    children: [
                                        "Network Topology Graph (",
                                        timeframe,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 881,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[var(--text-muted)]",
                                    children: "Force-directed link representation where line thickness and color denote absolute dependency."
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 884,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                            lineNumber: 880,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 879,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[var(--bg-recessed)]/50 rounded-2xl p-6 border border-[var(--border)] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 600 320",
                            className: "w-full max-w-xl h-72 font-mono",
                            children: [
                                relationshipLinks.map((link)=>{
                                    const positions = {
                                        BTC: [
                                            180,
                                            80
                                        ],
                                        SOL: [
                                            420,
                                            80
                                        ],
                                        NVDA: [
                                            180,
                                            240
                                        ],
                                        GOLD: [
                                            420,
                                            240
                                        ],
                                        "1INCH": [
                                            80,
                                            160
                                        ],
                                        ETH: [
                                            520,
                                            160
                                        ]
                                    };
                                    const [x1, y1] = positions[link.source];
                                    const [x2, y2] = positions[link.target];
                                    const strokeColor = link.correlation >= 0.25 ? "#10B981" : link.correlation < 0 ? "#EF4444" : "#9CA3AF";
                                    const strokeWidth = Math.max(1.5, Math.abs(link.correlation) * 5);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: x1,
                                                y1: y1,
                                                x2: x2,
                                                y2: y2,
                                                stroke: strokeColor,
                                                strokeWidth: strokeWidth,
                                                strokeOpacity: 0.65
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 909,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: (x1 + x2) / 2,
                                                y: (y1 + y2) / 2 - 6,
                                                fill: "currentColor",
                                                fontSize: "10",
                                                textAnchor: "middle",
                                                children: link.correlation >= 0 ? `+${link.correlation}` : link.correlation
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${link.source}-${link.target}`, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 908,
                                        columnNumber: 19
                                    }, this);
                                }),
                                [
                                    {
                                        sym: "BTC",
                                        x: 180,
                                        y: 80,
                                        col: "#6757E8"
                                    },
                                    {
                                        sym: "SOL",
                                        x: 420,
                                        y: 80,
                                        col: "#10B981"
                                    },
                                    {
                                        sym: "NVDA",
                                        x: 180,
                                        y: 240,
                                        col: "#3B82F6"
                                    },
                                    {
                                        sym: "GOLD",
                                        x: 420,
                                        y: 240,
                                        col: "#F59E0B"
                                    }
                                ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        transform: `translate(${n.x}, ${n.y})`,
                                        className: "cursor-pointer",
                                        onClick: ()=>{
                                            setSelectedPair([
                                                n.sym,
                                                n.sym === "BTC" ? "SOL" : "BTC"
                                            ]);
                                            setViewMode("rolling");
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                r: "26",
                                                fill: n.col
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 947,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                y: "4",
                                                fill: "#FFF",
                                                fontSize: "11",
                                                fontWeight: "bold",
                                                textAnchor: "middle",
                                                children: n.sym
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 948,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, n.sym, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 938,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                            lineNumber: 891,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 890,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 878,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(MarketXRayPage, "VrWJEEiShhYuZG+1cWZUyIj+HFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketSimulation"]
    ];
});
_c = MarketXRayPage;
var _c;
__turbopack_context__.k.register(_c, "MarketXRayPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/demo-data/activities.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_ACTIVITIES",
    ()=>DEMO_ACTIVITIES,
    "DEMO_ACTIVITIES_EXTENDED",
    ()=>DEMO_ACTIVITIES_EXTENDED,
    "generateActivities",
    ()=>generateActivities
]);
// ---------------------------------------------------------------------------
// Template generator for 120+ authentic institutional activities
// ---------------------------------------------------------------------------
const baseEvents = [
    // 1. Backtest runs
    {
        title: "BTC/USD Dual SMA 20/50 Backtest Run",
        detail: "Next-bar execution modeling, 10 bps slippage, 5 bps commission drag.",
        category: "BACKTEST",
        type: "backtest",
        asset: "BTC",
        status: "SUCCESS",
        durationMs: 42,
        duration: "42ms",
        user: "Alexander Vance (Trader)",
        metrics: {
            sharpe: 1.68,
            return: "+34.2%",
            maxDd: "-18.4%",
            winRate: "58.2%",
            trades: 142,
            slippage: "8.4 bps"
        },
        logs: [
            "[00:00:00.002] Ingested 1,460 daily candles for BTC/USD",
            "[00:00:00.015] Generating rolling SMA20 and SMA50 indicator buffers",
            "[00:00:00.028] Simulated 142 order fills with Next-Bar Open pricing",
            "[00:00:00.042] Completed Sharpe & drawdown underwater curve calibration"
        ]
    },
    {
        title: "SOL/USD Momentum Factor 14D Optimization",
        detail: "Cross-checked ROC momentum threshold against high-volatility range regimes.",
        category: "BACKTEST",
        type: "backtest",
        asset: "SOL",
        status: "SUCCESS",
        durationMs: 78,
        duration: "78ms",
        user: "Alexander Vance (Researcher)",
        metrics: {
            sharpe: 1.94,
            return: "+72.8%",
            maxDd: "-24.1%",
            winRate: "61.4%",
            trades: 89,
            slippage: "12.1 bps"
        },
        logs: [
            "[00:00:00.005] Loaded 730 SOL/USD session bars",
            "[00:00:00.032] Vectorized return attribution across 14-day momentum window",
            "[00:00:00.078] Benchmarked against Buy-and-Hold SOL baseline (+48.2%)"
        ]
    },
    {
        title: "NVDA Mean Reversion vs Buy & Hold Benchmark",
        detail: "2.5-sigma Bollinger Band entry with 20D SMA trailing exit rule.",
        category: "BACKTEST",
        type: "backtest",
        asset: "NVDA",
        status: "SUCCESS",
        durationMs: 65,
        duration: "65ms",
        user: "Alexander Vance (Researcher)",
        metrics: {
            sharpe: 1.45,
            return: "+41.5%",
            maxDd: "-15.2%",
            winRate: "64.8%",
            trades: 64,
            slippage: "4.2 bps"
        },
        logs: [
            "[00:00:00.003] Ingested NVDA split-adjusted price history",
            "[00:00:00.024] Calculated Bollinger Upper/Lower envelopes at 2.5 stdev",
            "[00:00:00.065] Verified zero look-ahead bias across earning release bars"
        ]
    },
    {
        title: "Gold XAU/USD Inflation Drift Attribution",
        detail: "Tested macro trend-following filter during risk-off flight to safety regimes.",
        category: "BACKTEST",
        type: "backtest",
        asset: "GOLD",
        status: "SUCCESS",
        durationMs: 51,
        duration: "51ms",
        user: "Alexander Vance (Researcher)",
        metrics: {
            sharpe: 1.28,
            return: "+18.6%",
            maxDd: "-8.4%",
            winRate: "55.0%",
            trades: 38,
            slippage: "2.5 bps"
        },
        logs: [
            "[00:00:00.004] Ingested London Bullion Market physical spot series",
            "[00:00:00.021] Evaluated Donchian 20-bar channel breakout rules",
            "[00:00:00.051] Risk parity allocation test verified"
        ]
    },
    {
        title: "BTC Ultra-High Frequency Breakout (Overfit Warning)",
        detail: "5-minute candle parameter sweep showed extreme fragility to spread expansion.",
        category: "BACKTEST",
        type: "backtest",
        asset: "BTC",
        status: "WARNING",
        durationMs: 310,
        duration: "310ms",
        user: "Auto Execution Worker",
        metrics: {
            sharpe: 2.45,
            return: "+112.4%",
            maxDd: "-42.8%",
            winRate: "49.1%",
            trades: 1420,
            slippage: "28.5 bps"
        },
        logs: [
            "[00:00:00.010] Ingested 28,800 5-minute ticks",
            "[00:00:00.120] Signal density exceeded 10 trades per day",
            "[00:00:00.310] WARNING: Friction decay destroys 68% of cumulative P&L under 15 bps spread"
        ]
    },
    // 2. Robustness Testing
    {
        title: "50×50 Parameter Sensitivity Manifold (BTC SMA)",
        detail: "2,500 parameter iterations evaluated: Identified broad plateau at Fast 18–24 / Slow 48–56.",
        category: "ROBUSTNESS",
        type: "robustness",
        asset: "BTC",
        status: "SUCCESS",
        durationMs: 1420,
        duration: "1.42s",
        user: "Dr. Alexander Vance",
        metrics: {
            sharpe: 1.52,
            return: "+48.9%",
            maxDd: "-16.2%",
            winRate: "59.3%",
            trades: 2500,
            slippage: "5.0 bps"
        },
        logs: [
            "[00:00:00.040] Initialized 2,500 thread worker pool for grid computation",
            "[00:00:00.580] Evaluated parameter boundaries Fast[5..50] x Slow[20..200]",
            "[00:00:01.420] Generated 3D WebGL topological height vertices with continuous gradient mapping"
        ]
    },
    {
        title: "Solana Transaction Friction Decay Stress Test",
        detail: "Stepped transaction costs from 2 bps to 40 bps to test edge erosion threshold.",
        category: "ROBUSTNESS",
        type: "robustness",
        asset: "SOL",
        status: "SUCCESS",
        durationMs: 460,
        duration: "460ms",
        user: "Alexander Vance (Researcher)",
        metrics: {
            sharpe: 1.34,
            return: "+38.4%",
            maxDd: "-21.0%",
            winRate: "54.2%",
            trades: 320,
            slippage: "15.0 bps"
        },
        logs: [
            "[00:00:00.015] Injected progressive synthetic spread steps [2, 5, 10, 20, 30, 40 bps]",
            "[00:00:00.220] Breakeven friction threshold identified at 28.4 bps",
            "[00:00:00.460] Robustness curvature certified passing"
        ]
    },
    {
        title: "Monte Carlo 5,000-Path Reshuffling (Gold)",
        detail: "Block bootstrap trade sequence permutation to compute 99% Value-at-Risk.",
        category: "ROBUSTNESS",
        type: "robustness",
        asset: "GOLD",
        status: "SUCCESS",
        durationMs: 890,
        duration: "890ms",
        user: "Alexander Vance (Researcher)",
        metrics: {
            sharpe: 1.15,
            return: "+15.2%",
            maxDd: "-11.8%",
            winRate: "53.8%",
            trades: 5000,
            slippage: "3.1 bps"
        },
        logs: [
            "[00:00:00.020] Segmented historical trade returns into 50 trade blocks",
            "[00:00:00.410] Generated 5,000 synthetic return trajectories via Markov bootstrap",
            "[00:00:00.890] 99% Worst-case Max Drawdown bounded at -14.8%"
        ]
    },
    // 3. Regime Engine
    {
        title: "Markov 6-State Macro Regime Calibration",
        detail: "Transition probabilities refreshed across Crypto, Equities, and Precious Metals.",
        category: "REGIME",
        type: "regime",
        asset: "MULTI",
        status: "SUCCESS",
        durationMs: 240,
        duration: "240ms",
        user: "Regime Engine",
        metrics: {
            sharpe: 1.62,
            return: "+52.0%",
            maxDd: "-14.5%",
            winRate: "62.0%"
        },
        logs: [
            "[00:00:00.010] Ingested multi-asset normalized log-return vectors",
            "[00:00:00.115] Estimated Gaussian Hidden Markov Model transition matrix",
            "[00:00:00.240] Current dominant regime: High-Volatility Bullish Drift (State 2)"
        ]
    },
    {
        title: "Regime Autopsy: Q2 2024 Bitcoin Drawdown Diagnosis",
        detail: "Factor model isolated -0.0005 daily drift shift combined with 3.2x volatility spike.",
        category: "REGIME",
        type: "regime",
        asset: "BTC",
        status: "AUDITED",
        durationMs: 130,
        duration: "130ms",
        user: "Alexander Vance (Researcher)",
        logs: [
            "[00:00:00.008] Scanned historical window: 2024-04-01 through 2024-06-30",
            "[00:00:00.065] Transition identified: Bullish Drift -> Volatile Compression",
            "[00:00:00.130] Attributed 78% of drawdown to macro liquidity shock edge"
        ]
    },
    // 4. Cross-Asset Correlation
    {
        title: "Pearson 4×4 Cross-Asset Matrix Recomputed",
        detail: "BTC/SOL correlation: 0.74, BTC/GOLD: -0.12, BTC/NVDA: 0.48.",
        category: "CORRELATION",
        type: "xray",
        asset: "MULTI",
        status: "SUCCESS",
        durationMs: 38,
        duration: "38ms",
        user: "Auto Execution Worker",
        logs: [
            "[00:00:00.002] Synchronized closing prices for BTC, SOL, GOLD, NVDA",
            "[00:00:00.018] Calculated Pearson correlation coefficient matrix across 90-day window",
            "[00:00:00.038] Updated 3D WebGL correlation network spring-force physics"
        ]
    },
    {
        title: "Rolling Correlation Spike Alert (NVDA & BTC)",
        detail: "30D rolling correlation surged from 0.28 to 0.62 following tech earnings release.",
        category: "CORRELATION",
        type: "xray",
        asset: "NVDA",
        status: "WARNING",
        durationMs: 45,
        duration: "45ms",
        user: "Auto Execution Worker",
        logs: [
            "[00:00:00.004] Calculated rolling 30-day covariance between BTC and NVDA",
            "[00:00:00.022] Spike detected: delta > 0.30 within 7 sessions",
            "[00:00:00.045] Flagged portfolio risk parity diversification decay"
        ]
    },
    // 5. Paper Trading Execution
    {
        title: "Paper Order Executed: BUY 0.35 BTC @ $104,812.50",
        detail: "Market order filled against simulated institutional book with 1.2 bps slippage.",
        category: "TRADING",
        type: "trading",
        asset: "BTC",
        status: "SUCCESS",
        durationMs: 22,
        duration: "22ms",
        user: "Alexander Vance (Trader)",
        metrics: {
            trades: 1,
            slippage: "1.2 bps"
        },
        logs: [
            "[00:00:00.001] Client submitted Market Buy order: 0.35 BTC",
            "[00:00:00.008] Validated cash balance: $100,000 >= $36,684.37 required",
            "[00:00:00.015] Matched against simulated ask liquidity level 1",
            "[00:00:00.022] Order filled: 0.35 BTC at $104,812.50. New Cash: $63,315.63"
        ]
    },
    {
        title: "Paper Limit Order Placed: SELL 10.0 SOL @ $242.00",
        detail: "Resting limit order placed in order book pending tick crossing.",
        category: "TRADING",
        type: "trading",
        asset: "SOL",
        status: "SUCCESS",
        durationMs: 14,
        duration: "14ms",
        user: "Alexander Vance (Trader)",
        logs: [
            "[00:00:00.002] Received Limit Sell order: 10.0 SOL @ $242.00",
            "[00:00:00.006] Position confirmed: 10.0 SOL held in portfolio",
            "[00:00:00.014] Order placed in simulated local order book"
        ]
    },
    {
        title: "Paper Order Filled: SELL 50 NVDA @ $184.40",
        detail: "Take-profit trigger executed at resistance level. Realized P&L: +$1,240.00.",
        category: "TRADING",
        type: "trading",
        asset: "NVDA",
        status: "SUCCESS",
        durationMs: 18,
        duration: "18ms",
        user: "Alexander Vance (Trader)",
        metrics: {
            return: "+7.2%",
            trades: 1
        },
        logs: [
            "[00:00:00.002] Take profit trigger hit at $184.40",
            "[00:00:00.009] Executed 50 shares via simulated liquidity router",
            "[00:00:00.018] Credited $9,220.00 to virtual cash balance"
        ]
    },
    {
        title: "Stop Loss Triggered: SELL 0.15 BTC @ $103,900.00",
        detail: "Protective trailing stop triggered to prevent further drawdown in risk-off tick.",
        category: "TRADING",
        type: "trading",
        asset: "BTC",
        status: "WARNING",
        durationMs: 26,
        duration: "26ms",
        user: "Alexander Vance (Trader)",
        metrics: {
            return: "-1.8%",
            trades: 1
        },
        logs: [
            "[00:00:00.003] Trailing stop price threshold crossed ($103,900)",
            "[00:00:00.014] Dispatched priority liquidation fill",
            "[00:00:00.026] Executed with 3.8 bps negative slippage"
        ]
    },
    // 6. Bias Guardrails & Security Audits
    {
        title: "Automated Look-Ahead Bias Verification",
        detail: "Full scan over 57 indicators confirmed strict T+1 close-to-open execution isolation.",
        category: "SECURITY",
        type: "integrity",
        asset: "SYSTEM",
        status: "AUDITED",
        durationMs: 85,
        duration: "85ms",
        user: "Risk Guardrail",
        logs: [
            "[00:00:00.005] Inspected indicator formula pipelines for forward indexing",
            "[00:00:00.045] Zero future-bar leakage detected in rolling windows",
            "[00:00:00.085] Cryptographic verification hash minted"
        ]
    },
    {
        title: "Overfitting Probability Matrix Certified",
        detail: "Deflated Sharpe Ratio (Bailey & López de Prado) passed with p-value < 0.01.",
        category: "SECURITY",
        type: "integrity",
        asset: "SYSTEM",
        status: "AUDITED",
        durationMs: 140,
        duration: "140ms",
        user: "Risk Guardrail",
        logs: [
            "[00:00:00.010] Calculated trial variance across 400 backtest runs",
            "[00:00:00.075] Computed Deflated Sharpe Ratio (DSR): 1.48 (threshold 1.0)",
            "[00:00:00.140] Audit certificate signed and committed to local state"
        ]
    },
    {
        title: "Postgres Row-Level Security (RLS) Telemetry Audit",
        detail: "Validated multi-tenant workspace isolation across all saved strategies and notes.",
        category: "SECURITY",
        type: "integrity",
        asset: "SYSTEM",
        status: "AUDITED",
        durationMs: 34,
        duration: "34ms",
        user: "Quantora Administrator",
        logs: [
            "[00:00:00.002] Queried tenant security policies across public tables",
            "[00:00:00.018] Verified 0 unauthenticated access vectors",
            "[00:00:00.034] 256-bit TLS encryption active"
        ]
    },
    {
        title: "Synthetic Flash Crash Scenario Injected",
        detail: "-18% simulated gap-down on Bitcoin tested margin adequacy and order book resiliency.",
        category: "SECURITY",
        type: "integrity",
        asset: "BTC",
        status: "WARNING",
        durationMs: 190,
        duration: "190ms",
        user: "Risk Guardrail",
        logs: [
            "[00:00:00.008] Generated synthetic -18.4% liquidity gap at candle t+45",
            "[00:00:00.090] Tested liquidation cascade triggers across paper positions",
            "[00:00:00.190] Portfolio survived with maximum account drawdown of -22.1%"
        ]
    },
    // 7. AI Copilot & Evidence
    {
        title: "Featherless AI Inquiry: Regime Transition Likelihood",
        detail: "Natural language query: 'What is the probability of BTC entering Volatile Range next?'",
        category: "COPILOT",
        type: "copilot",
        asset: "BTC",
        status: "SUCCESS",
        durationMs: 410,
        duration: "410ms",
        user: "Alexander Vance (Researcher)",
        logs: [
            "[00:00:00.015] Tokenized user query against historical market context",
            "[00:00:00.180] Queried Markov transition state matrix for State 2 -> State 4",
            "[00:00:00.410] Output generated: 28.4% probability with 95% confidence interval"
        ]
    },
    {
        title: "Featherless AI Synthesis: Cross-Asset Beta Attribution",
        detail: "Generated automated executive report comparing NVDA chip cycle to Bitcoin liquidity.",
        category: "COPILOT",
        type: "copilot",
        asset: "MULTI",
        status: "SUCCESS",
        durationMs: 520,
        duration: "520ms",
        user: "Alexander Vance (Researcher)",
        logs: [
            "[00:00:00.020] Synthesized 180-day return covariance",
            "[00:00:00.260] Attributed 0.48 beta coefficient to global AI infrastructure spending",
            "[00:00:00.520] Executive summary markdown formatted and saved"
        ]
    },
    // 8. Data Ingestion & Tick Feeds
    {
        title: "Market Data Hub Tick Synchronization",
        detail: "Processed 12,000 price ticks across BTC, SOL, GOLD, and NVDA with zero packet drops.",
        category: "DATA",
        type: "data",
        asset: "MULTI",
        status: "SUCCESS",
        durationMs: 16,
        duration: "16ms",
        user: "Auto Execution Worker",
        logs: [
            "[00:00:00.001] WebSocket tick stream listener primed",
            "[00:00:00.008] Normalized OHLCV aggregations on 1-minute and 5-minute resolutions",
            "[00:00:00.016] Pub/Sub subscribers broadcast complete"
        ]
    }
];
// Helper to generate a deterministic pseudo-random hash
function generateHash(seed) {
    const chars = "0123456789abcdef";
    let str = "0x";
    for(let i = 0; i < 40; i++){
        const idx = (seed * 9301 + 49297 + i * 37) % 233280;
        str += chars[Math.floor(idx / 233280 * chars.length)];
    }
    return str;
}
// Format relative time based on offset minutes
function formatTimeOffset(minutesAgo) {
    const now = new Date("2026-09-19T22:45:00Z");
    const target = new Date(now.getTime() - minutesAgo * 60 * 1000);
    const iso = target.toISOString();
    let timeDisplay = "";
    if (minutesAgo < 1) {
        timeDisplay = "Just now";
    } else if (minutesAgo < 60) {
        timeDisplay = `${minutesAgo}m ago`;
    } else if (minutesAgo < 1440) {
        const hours = Math.floor(minutesAgo / 60);
        timeDisplay = `${hours}h ago`;
    } else {
        const days = Math.floor(minutesAgo / 1440);
        timeDisplay = `${days}d ago`;
    }
    return {
        time: timeDisplay,
        timestamp: iso
    };
}
function generateActivities() {
    const list = [];
    const baseCount = baseEvents.length;
    for(let i = 0; i < 125; i++){
        const base = baseEvents[i % baseCount];
        // Minutes ago distribution: 1m, 3m, 7m, up to 14 days
        const minutesAgo = Math.floor(Math.pow(i, 1.8) * 1.6) + 1;
        const { time, timestamp } = formatTimeOffset(minutesAgo);
        const id = `act-${String(i + 1).padStart(3, "0")}`;
        const hash = generateHash(i + 42);
        // Subtle variations to keep dataset rich and realistic
        let title = base.title;
        let detail = base.detail;
        let status = base.status;
        let durationMs = base.durationMs;
        if (i >= baseCount) {
            const cycle = Math.floor(i / baseCount);
            title = `${base.title} #${cycle + 1}`;
            durationMs = Math.max(12, Math.floor(base.durationMs * (0.85 + i % 7 * 0.05)));
            if (i % 17 === 0) status = "WARNING";
            if (i % 29 === 0) status = "AUDITED";
            if (i % 47 === 0) status = "OPTIMIZING";
        }
        list.push({
            ...base,
            id,
            title,
            detail,
            status,
            durationMs,
            duration: durationMs >= 1000 ? `${(durationMs / 1000).toFixed(2)}s` : `${durationMs}ms`,
            time,
            timestamp,
            hash
        });
    }
    return list;
}
const DEMO_ACTIVITIES_EXTENDED = generateActivities();
const DEMO_ACTIVITIES = DEMO_ACTIVITIES_EXTENDED.slice(0, 10).map(_c = (item)=>({
        id: item.id,
        time: item.time,
        title: item.title,
        detail: item.detail,
        type: item.type
    }));
_c1 = DEMO_ACTIVITIES;
var _c, _c1;
__turbopack_context__.k.register(_c, "DEMO_ACTIVITIES$DEMO_ACTIVITIES_EXTENDED.slice(0, 10).map");
__turbopack_context__.k.register(_c1, "DEMO_ACTIVITIES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/demo-data/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * QUANTORA DETERMINISTIC DEMO DATA ENGINE
 * Seed: QUANTORA_DEMO_2026
 * 
 * Provides a single, internally consistent, mathematically coherent data universe
 * across all pages, charts, backtests, autopsy, regimes, and AI Copilot reasoning.
 */ __turbopack_context__.s([
    "CANONICAL_BACKTEST",
    ()=>CANONICAL_BACKTEST,
    "CORRELATION_MATRICES",
    ()=>CORRELATION_MATRICES,
    "DEMO_ASSETS",
    ()=>DEMO_ASSETS,
    "DEMO_REGIMES",
    ()=>DEMO_REGIMES,
    "PRESET_SCENARIOS",
    ()=>PRESET_SCENARIOS,
    "ROBUSTNESS_GRID",
    ()=>ROBUSTNESS_GRID
]);
// -------------------------------------------------------------
// 7. REAL-TIME ACTIVITY STREAM
// -------------------------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$activities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/demo-data/activities.ts [app-client] (ecmascript)");
const DEMO_ASSETS = {
    BTC: {
        symbol: "BTC",
        name: "Bitcoin",
        assetClass: "Crypto",
        price: 104284.50,
        basePrice: 104284.50,
        change: 2456.20,
        changePercent: 2.41,
        volume: "$48.2B",
        marketCap: "$2.05T",
        volatility: "41.8%",
        sharpe: 1.42,
        maxDrawdown: -18.3,
        regime: "Trending",
        trend: "Trending",
        lastUpdated: "Just now",
        sparkline: [
            96200,
            97400,
            99100,
            98200,
            101400,
            102900,
            104284
        ]
    },
    GOLD: {
        symbol: "GOLD",
        name: "Gold Futures",
        assetClass: "Commodity",
        price: 2672.40,
        basePrice: 2672.40,
        change: 19.10,
        changePercent: 0.72,
        volume: "$18.4B",
        marketCap: "$17.4T",
        volatility: "14.2%",
        sharpe: 1.08,
        maxDrawdown: -8.6,
        regime: "Low Volatility",
        trend: "Bullish",
        lastUpdated: "Just now",
        sparkline: [
            2590,
            2610,
            2635,
            2620,
            2650,
            2664,
            2672
        ]
    },
    SOL: {
        symbol: "SOL",
        name: "Solana",
        assetClass: "Crypto",
        price: 238.60,
        basePrice: 238.60,
        change: 7.35,
        changePercent: 3.18,
        volume: "$8.9B",
        marketCap: "$114.2B",
        volatility: "64.2%",
        sharpe: 1.22,
        maxDrawdown: -28.4,
        regime: "Expansion",
        trend: "Trending",
        lastUpdated: "Just now",
        sparkline: [
            214,
            218,
            225,
            220,
            231,
            234,
            238
        ]
    },
    NVDA: {
        symbol: "NVDA",
        name: "NVIDIA Corp",
        assetClass: "Equity",
        price: 178.25,
        basePrice: 178.25,
        change: -1.50,
        changePercent: -0.84,
        volume: "$34.1B",
        marketCap: "$3.42T",
        volatility: "48.1%",
        sharpe: 1.35,
        maxDrawdown: -22.4,
        regime: "Pullback",
        trend: "Pullback",
        lastUpdated: "Just now",
        sparkline: [
            184,
            186,
            189,
            182,
            180,
            179,
            178
        ]
    }
};
const CORRELATION_MATRICES = {
    "1M": [
        {
            source: "BTC",
            target: "SOL",
            correlation: 0.82,
            strength: "strong",
            sentiment: "positive",
            description: "High digital asset liquidity coupling"
        },
        {
            source: "BTC",
            target: "NVDA",
            correlation: 0.54,
            strength: "moderate",
            sentiment: "positive",
            description: "Tech beta & risk-on equity factor"
        },
        {
            source: "BTC",
            target: "GOLD",
            correlation: 0.18,
            strength: "weak",
            sentiment: "neutral",
            description: "Monetary debasement hedge overlap"
        },
        {
            source: "SOL",
            target: "NVDA",
            correlation: 0.49,
            strength: "moderate",
            sentiment: "positive",
            description: "High-beta growth basket affinity"
        },
        {
            source: "SOL",
            target: "GOLD",
            correlation: 0.08,
            strength: "weak",
            sentiment: "neutral",
            description: "Virtually orthogonal price action"
        },
        {
            source: "GOLD",
            target: "NVDA",
            correlation: -0.28,
            strength: "moderate",
            sentiment: "inverse",
            description: "Real rates & equity duration divergence"
        }
    ],
    "3M": [
        {
            source: "BTC",
            target: "SOL",
            correlation: 0.79,
            strength: "strong",
            sentiment: "positive",
            description: "Broad digital sector correlation"
        },
        {
            source: "BTC",
            target: "NVDA",
            correlation: 0.61,
            strength: "strong",
            sentiment: "positive",
            description: "AI & compute infrastructure sentiment"
        },
        {
            source: "BTC",
            target: "GOLD",
            correlation: 0.22,
            strength: "weak",
            sentiment: "neutral",
            description: "Store-of-value regime alignment"
        },
        {
            source: "SOL",
            target: "NVDA",
            correlation: 0.52,
            strength: "moderate",
            sentiment: "positive",
            description: "Aggressive growth co-movement"
        },
        {
            source: "SOL",
            target: "GOLD",
            correlation: 0.04,
            strength: "weak",
            sentiment: "neutral",
            description: "Zero statistical dependency"
        },
        {
            source: "GOLD",
            target: "NVDA",
            correlation: -0.34,
            strength: "moderate",
            sentiment: "inverse",
            description: "Flight to safety vs growth tech"
        }
    ],
    "6M": [
        {
            source: "BTC",
            target: "SOL",
            correlation: 0.76,
            strength: "strong",
            sentiment: "positive",
            description: "Ecosystem rotation"
        },
        {
            source: "BTC",
            target: "NVDA",
            correlation: 0.48,
            strength: "moderate",
            sentiment: "positive",
            description: "Liquidity cycle synchronization"
        },
        {
            source: "BTC",
            target: "GOLD",
            correlation: 0.29,
            strength: "weak",
            sentiment: "positive",
            description: "Reserve asset re-allocation"
        },
        {
            source: "SOL",
            target: "NVDA",
            correlation: 0.41,
            strength: "moderate",
            sentiment: "positive",
            description: "Risk asset momentum"
        },
        {
            source: "SOL",
            target: "GOLD",
            correlation: -0.11,
            strength: "weak",
            sentiment: "inverse",
            description: "Speculative vs hard money divergence"
        },
        {
            source: "GOLD",
            target: "NVDA",
            correlation: -0.22,
            strength: "weak",
            sentiment: "inverse",
            description: "Macro hedging pressure"
        }
    ],
    "1Y": [
        {
            source: "BTC",
            target: "SOL",
            correlation: 0.74,
            strength: "strong",
            sentiment: "positive",
            description: "Annual crypto sector beta"
        },
        {
            source: "BTC",
            target: "NVDA",
            correlation: 0.51,
            strength: "moderate",
            sentiment: "positive",
            description: "Trailing equity risk correlation"
        },
        {
            source: "BTC",
            target: "GOLD",
            correlation: 0.31,
            strength: "moderate",
            sentiment: "positive",
            description: "Inflation hedge convergence"
        },
        {
            source: "SOL",
            target: "NVDA",
            correlation: 0.44,
            strength: "moderate",
            sentiment: "positive",
            description: "Speculative tech co-movement"
        },
        {
            source: "SOL",
            target: "GOLD",
            correlation: -0.05,
            strength: "weak",
            sentiment: "neutral",
            description: "Orthogonal performance"
        },
        {
            source: "GOLD",
            target: "NVDA",
            correlation: -0.18,
            strength: "weak",
            sentiment: "inverse",
            description: "Safe haven vs risk duration"
        }
    ],
    "MAX": [
        {
            source: "BTC",
            target: "SOL",
            correlation: 0.71,
            strength: "strong",
            sentiment: "positive",
            description: "Structural digital asset coupling"
        },
        {
            source: "BTC",
            target: "NVDA",
            correlation: 0.46,
            strength: "moderate",
            sentiment: "positive",
            description: "Long-term tech liquidity linkage"
        },
        {
            source: "BTC",
            target: "GOLD",
            correlation: 0.35,
            strength: "moderate",
            sentiment: "positive",
            description: "Monetary debasement correlation"
        },
        {
            source: "SOL",
            target: "NVDA",
            correlation: 0.38,
            strength: "moderate",
            sentiment: "positive",
            description: "Beta expansion cycle"
        },
        {
            source: "SOL",
            target: "GOLD",
            correlation: -0.02,
            strength: "weak",
            sentiment: "neutral",
            description: "Decoupled asset classes"
        },
        {
            source: "GOLD",
            target: "NVDA",
            correlation: -0.15,
            strength: "weak",
            sentiment: "inverse",
            description: "Defensive vs tech growth polarity"
        }
    ]
};
const CANONICAL_BACKTEST = {
    strategyName: "BTC Trend Following (SMA 20/50)",
    asset: "BTC/USD",
    timeframe: "1D",
    initialCapital: 100000,
    finalEquity: 134210,
    totalReturn: 34.2,
    cagr: 28.4,
    sharpe: 1.42,
    sortino: 1.88,
    maxDrawdown: -12.8,
    winRate: 62.8,
    profitFactor: 1.94,
    tradeCount: 184,
    totalFees: 2410,
    totalSlippage: 700,
    equityCurve: [
        {
            date: "Jan 2024",
            equity: 100000,
            benchmark: 100000,
            drawdown: 0.0
        },
        {
            date: "Mar 2024",
            equity: 106400,
            benchmark: 103200,
            drawdown: -1.2
        },
        {
            date: "May 2024",
            equity: 112100,
            benchmark: 105800,
            drawdown: -2.4
        },
        {
            date: "Jul 2024",
            equity: 118900,
            benchmark: 108400,
            drawdown: -4.1
        },
        {
            date: "Sep 2024",
            equity: 115200,
            benchmark: 107100,
            drawdown: -12.8
        },
        {
            date: "Nov 2024",
            equity: 124600,
            benchmark: 112000,
            drawdown: -3.5
        },
        {
            date: "Jan 2025",
            equity: 129800,
            benchmark: 115400,
            drawdown: -2.1
        },
        {
            date: "Mar 2025",
            equity: 134210,
            benchmark: 118900,
            drawdown: -1.4
        }
    ],
    autopsy: {
        regimeAttribution: [
            {
                regime: "Bull / Low Volatility",
                pctProfit: 68.4,
                note: "Sustained upward trend capture with minimal whipsaw"
            },
            {
                regime: "High Volatility Regimes",
                pctProfit: 21.7,
                note: "Momentum breakouts before volatility compression"
            },
            {
                regime: "Low Volatility Chop",
                pctProfit: 9.9,
                note: "Small gains with position sizing curtailed by Kelly rule"
            }
        ],
        profitConcentration: {
            top5TradesPct: 61.2,
            remainingTradesPct: 38.8,
            bestTradeProfit: "+$8,420 (Oct 2024 Breakout)"
        },
        costImpact: {
            grossReturn: 41.8,
            afterFees: 39.4,
            afterSlippage: 38.7,
            bpsDeduction: 310
        }
    }
};
const PRESET_SCENARIOS = [
    {
        id: "preset-btc-trend",
        title: "BTC Trend Following",
        subtitle: "SMA 20/50 Dual Moving Average",
        asset: "BTC/USD",
        timeframe: "1D",
        returnPct: "+34.2%",
        sharpe: 1.42,
        maxDd: "-12.8%",
        trades: 184,
        description: "Captures macro trend expansions while cutting exposure during consolidation regimes.",
        route: "/app/research/backtest?preset=btc-trend"
    },
    {
        id: "preset-gold-meanrev",
        title: "Gold Mean Reversion",
        subtitle: "RSI 14 + 2σ Bollinger Envelopes",
        asset: "GOLD/USD",
        timeframe: "1D",
        returnPct: "+21.4%",
        sharpe: 1.08,
        maxDd: "-8.6%",
        trades: 96,
        description: "Exploits physical gold range-bound oscillations with strict stop-loss boundaries.",
        route: "/app/research/backtest?preset=gold-meanrev"
    },
    {
        id: "preset-nvda-momentum",
        title: "NVDA Momentum Breakout",
        subtitle: "EMA 12/26 + Volume Surge Gate",
        asset: "NVDA/USD",
        timeframe: "1D",
        returnPct: "+58.9%",
        sharpe: 1.35,
        maxDd: "-22.4%",
        trades: 142,
        description: "High-beta equity momentum targeting institutional accumulation candles.",
        route: "/app/research/backtest?preset=nvda-momentum"
    },
    {
        id: "preset-multi-rotation",
        title: "Multi-Asset Rotation",
        subtitle: "Cross-Asset Volatility Parity",
        asset: "BTC + SOL + GOLD + NVDA",
        timeframe: "1W",
        returnPct: "+42.8%",
        sharpe: 1.64,
        maxDd: "-11.2%",
        trades: 68,
        description: "Dynamically rebalances across digital assets, tech equities, and physical reserves.",
        route: "/app/research/backtest?preset=multi-rotation"
    }
];
const DEMO_REGIMES = [
    {
        year: "2022",
        period: "Q1–Q4 2022",
        regime: "BEAR / HIGH VOL",
        durationDays: 365,
        strategyReturn: -4.2,
        winRate: 48.0,
        maxDrawdown: -16.4,
        color: "var(--negative)",
        description: "Macro tightening cycle. System preserved capital by flipping to cash hedge."
    },
    {
        year: "2023",
        period: "Q1–Q3 2023",
        regime: "RECOVERY",
        durationDays: 270,
        strategyReturn: 14.8,
        winRate: 58.2,
        maxDrawdown: -9.1,
        color: "var(--warning)",
        description: "Base formation across digital assets and commodity support validation."
    },
    {
        year: "2024",
        period: "Q4 2023–Q2 2024",
        regime: "BULL / LOW VOL",
        durationDays: 214,
        strategyReturn: 24.8,
        winRate: 63.0,
        maxDrawdown: -8.4,
        color: "var(--positive)",
        description: "Spot ETF institutional inflow expansion with steady upward trend persistence."
    },
    {
        year: "2025",
        period: "Q3 2024–Q4 2025",
        regime: "BULL / HIGH VOL",
        durationDays: 320,
        strategyReturn: 31.4,
        winRate: 64.5,
        maxDrawdown: -14.2,
        color: "var(--accent)",
        description: "Accelerated volatility breakouts and aggressive momentum run-ups."
    },
    {
        year: "2026",
        period: "Current (2026)",
        regime: "TRANSITION",
        durationDays: 80,
        strategyReturn: 6.2,
        winRate: 59.0,
        maxDrawdown: -5.1,
        color: "var(--neutral)",
        description: "Consolidation plateau near all-time highs; selective momentum exposure."
    }
];
const ROBUSTNESS_GRID = [
    {
        fastSma: 10,
        slowSma: 50,
        sharpe: 0.91,
        totalReturn: 42.1,
        maxDrawdown: -24.2,
        stabilityScore: 68
    },
    {
        fastSma: 10,
        slowSma: 100,
        sharpe: 1.02,
        totalReturn: 48.4,
        maxDrawdown: -21.8,
        stabilityScore: 74
    },
    {
        fastSma: 10,
        slowSma: 150,
        sharpe: 0.98,
        totalReturn: 45.2,
        maxDrawdown: -22.5,
        stabilityScore: 71
    },
    {
        fastSma: 10,
        slowSma: 200,
        sharpe: 0.94,
        totalReturn: 41.0,
        maxDrawdown: -25.1,
        stabilityScore: 65
    },
    {
        fastSma: 20,
        slowSma: 50,
        sharpe: 1.18,
        totalReturn: 58.2,
        maxDrawdown: -19.4,
        stabilityScore: 82
    },
    {
        fastSma: 20,
        slowSma: 100,
        sharpe: 1.25,
        totalReturn: 64.1,
        maxDrawdown: -18.2,
        stabilityScore: 86
    },
    {
        fastSma: 20,
        slowSma: 150,
        sharpe: 1.21,
        totalReturn: 61.5,
        maxDrawdown: -19.0,
        stabilityScore: 84
    },
    {
        fastSma: 20,
        slowSma: 200,
        sharpe: 1.14,
        totalReturn: 54.8,
        maxDrawdown: -20.2,
        stabilityScore: 79
    },
    {
        fastSma: 30,
        slowSma: 50,
        sharpe: 1.31,
        totalReturn: 68.2,
        maxDrawdown: -17.8,
        stabilityScore: 92
    },
    {
        fastSma: 30,
        slowSma: 100,
        sharpe: 1.40,
        totalReturn: 81.5,
        maxDrawdown: -16.8,
        stabilityScore: 96
    },
    {
        fastSma: 30,
        slowSma: 150,
        sharpe: 1.34,
        totalReturn: 74.0,
        maxDrawdown: -17.2,
        stabilityScore: 91
    },
    {
        fastSma: 30,
        slowSma: 200,
        sharpe: 1.22,
        totalReturn: 63.8,
        maxDrawdown: -18.9,
        stabilityScore: 83
    },
    {
        fastSma: 40,
        slowSma: 50,
        sharpe: 1.05,
        totalReturn: 49.5,
        maxDrawdown: -21.4,
        stabilityScore: 75
    },
    {
        fastSma: 40,
        slowSma: 100,
        sharpe: 1.19,
        totalReturn: 59.2,
        maxDrawdown: -19.8,
        stabilityScore: 81
    },
    {
        fastSma: 40,
        slowSma: 150,
        sharpe: 1.24,
        totalReturn: 65.0,
        maxDrawdown: -18.5,
        stabilityScore: 85
    },
    {
        fastSma: 40,
        slowSma: 200,
        sharpe: 1.16,
        totalReturn: 56.4,
        maxDrawdown: -20.1,
        stabilityScore: 78
    },
    {
        fastSma: 50,
        slowSma: 100,
        sharpe: 1.01,
        totalReturn: 46.2,
        maxDrawdown: -23.0,
        stabilityScore: 72
    },
    {
        fastSma: 50,
        slowSma: 150,
        sharpe: 1.09,
        totalReturn: 51.4,
        maxDrawdown: -21.1,
        stabilityScore: 76
    },
    {
        fastSma: 50,
        slowSma: 200,
        sharpe: 1.04,
        totalReturn: 48.0,
        maxDrawdown: -22.3,
        stabilityScore: 73
    }
];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/market-simulation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMarketState",
    ()=>getMarketState,
    "useMarketSimulation",
    ()=>useMarketSimulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/demo-data/index.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Seeded pseudorandom generator for deterministic oscillation
function seededDrift(step, freq, amp) {
    return Math.sin(step * freq) * amp;
}
let globalTick = 0;
const subscribers = new Set();
let currentMarketState = {
    assets: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEMO_ASSETS"]
    },
    lastTick: new Date(),
    latencyMs: 42,
    tickCount: 0
};
// Global interval running every 2.4 seconds
let timer = null;
function ensureSimulationLoop() {
    if (("TURBOPACK compile-time value", "object") === "undefined" || timer) return;
    timer = setInterval(()=>{
        globalTick += 1;
        const now = new Date();
        const updatedAssets = {};
        for (const [sym, asset] of Object.entries(currentMarketState.assets)){
            // Deterministic smooth drift
            const freq = sym === "BTC" ? 0.25 : sym === "SOL" ? 0.35 : sym === "GOLD" ? 0.15 : 0.28;
            const maxDelta = asset.basePrice * 0.00035; // tiny fractions of a percent
            const delta = seededDrift(globalTick, freq, maxDelta);
            const newPrice = Number((asset.basePrice + delta).toFixed(sym === "BTC" || sym === "GOLD" ? 2 : 2));
            const diff = newPrice - asset.basePrice;
            const pct = Number((diff / asset.basePrice * 100).toFixed(2));
            // Append point to sparkline, keep length 7
            const sparkline = [
                ...asset.sparkline.slice(1),
                newPrice
            ];
            updatedAssets[sym] = {
                ...asset,
                price: newPrice,
                change: Number(diff.toFixed(2)),
                changePercent: Number((asset.changePercent + pct * 0.1).toFixed(2)),
                sparkline,
                lastUpdated: "Just now"
            };
        }
        currentMarketState = {
            assets: updatedAssets,
            lastTick: now,
            latencyMs: 38 + Math.floor(Math.sin(globalTick) * 6),
            tickCount: globalTick
        };
        subscribers.forEach((cb)=>cb(currentMarketState));
    }, 2400);
}
function useMarketSimulation() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentMarketState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarketSimulation.useEffect": ()=>{
            ensureSimulationLoop();
            subscribers.add(setState);
            return ({
                "useMarketSimulation.useEffect": ()=>{
                    subscribers.delete(setState);
                }
            })["useMarketSimulation.useEffect"];
        }
    }["useMarketSimulation.useEffect"], []);
    return state;
}
_s(useMarketSimulation, "irDdCwpOTTLVLVNSOFkkF8IcKIg=");
function getMarketState() {
    return currentMarketState;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_08h73pr._.js.map