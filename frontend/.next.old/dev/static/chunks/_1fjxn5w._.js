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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$correlation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/correlation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MarketXRayPage() {
    _s();
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
        timeframe
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
        timeframe
    ]);
    // 3. Dynamic Normalized Performance (Base 100) from market data hub
    const normalizedComparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[normalizedComparison]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketHub"].getMultiAssetComparison(symbols, timeframe);
        }
    }["MarketXRayPage.useMemo[normalizedComparison]"], [
        timeframe
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
        timeframe
    ]);
    const scatterPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketXRayPage.useMemo[scatterPoints]": ()=>{
            const colors = {
                BTC: "#6757E8",
                SOL: "#10B981",
                GOLD: "#F59E0B",
                NVDA: "#3B82F6"
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
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-muted)] font-mono",
                                        children: "DETERMINISTIC ENGINE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold tracking-tight text-[var(--text-primary)]",
                                children: "MARKET X-RAY & CROSS-ASSET CORRELATION"
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-secondary)] mt-0.5",
                                children: "Realtime Pearson correlation matrix, rolling dependency analysis, relative performance (Base 100), and risk-return topology across BTC, SOL, GOLD, and NVDA."
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 85,
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
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 102,
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
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 84,
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
                        lineNumber: 139,
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
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode("relative"),
                        className: `px-3.5 py-1.5 rounded-xl font-medium transition-all ${viewMode === "relative" ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                        children: "3. Normalized Performance (Base 100)"
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode("scatter"),
                        className: `px-3.5 py-1.5 rounded-xl font-medium transition-all ${viewMode === "scatter" ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                        children: "4. Risk / Return Scatter"
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode("topology"),
                        className: `px-3.5 py-1.5 rounded-xl font-medium transition-all ${viewMode === "topology" ? "bg-[var(--accent)] text-white font-bold shadow-sm" : "clay-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                        children: "5. Relationship Network Map"
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 138,
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
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--text-muted)]",
                                                children: "Computed dynamically via Pearson coefficient across daily log returns. Click any cell to isolate rolling correlation."
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 197,
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
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 196,
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
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    symbols.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 font-bold text-[var(--text-primary)]",
                                                            children: s
                                                        }, s, false, {
                                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 212,
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
                                                                    lineNumber: 224,
                                                                    columnNumber: 25
                                                                }, this),
                                                                rowSym
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                            lineNumber: 223,
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
                                                                lineNumber: 246,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    ]
                                                }, rowSym, true, {
                                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 210,
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
                                                        lineNumber: 273,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Strong Positive (>0.65)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded bg-[var(--accent)]/25 inline-block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Moderate (0.25 - 0.65)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded bg-[var(--negative)]/25 inline-block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Inverse / Hedge (<0.00)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Click cell to launch Rolling Analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 195,
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
                                lineNumber: 288,
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
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base font-bold text-[var(--text-primary)] flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: hoveredCell ? `${hoveredCell.r} ↔ ${hoveredCell.c}` : `${selectedPair[0]} ↔ ${selectedPair[1]}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--accent)]",
                                                        children: hoveredCell ? `${hoveredCell.val >= 0 ? "+" : ""}${hoveredCell.val.toFixed(2)}` : `+${(matrixData[selectedPair[0]]?.[selectedPair[1]] ?? 0.5).toFixed(2)}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 293,
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
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold capitalize",
                                                        children: method
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 304,
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
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: timeframe
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 308,
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
                                                        lineNumber: 313,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: matrixResult.sampleSize
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 312,
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
                                                        lineNumber: 317,
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
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 316,
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
                                                        lineNumber: 323,
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
                                                        lineNumber: 324,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 303,
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
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 193,
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
                                                lineNumber: 348,
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
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-muted)]",
                                        children: "Recalculated on live series from -1.0 (inverse hedge) to +1.0 (perfect coupling)."
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 346,
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
                                                lineNumber: 360,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 358,
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
                                                lineNumber: 376,
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
                                                        lineNumber: 385,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "BTC-NVDA",
                                                        children: "BTC ↔ NVDA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "BTC-GOLD",
                                                        children: "BTC ↔ GOLD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SOL-NVDA",
                                                        children: "SOL ↔ NVDA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SOL-GOLD",
                                                        children: "SOL ↔ GOLD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "GOLD-NVDA",
                                                        children: "GOLD ↔ NVDA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 345,
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
                                        lineNumber: 399,
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
                                        lineNumber: 400,
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
                                        lineNumber: 402,
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
                                        lineNumber: 403,
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
                                        lineNumber: 405,
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
                                        lineNumber: 406,
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
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: rollingSeries[0]?.time || "Start"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 430,
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
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: rollingSeries[rollingSeries.length - 1]?.time || "Latest"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 344,
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
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, this),
                                            "Normalized Multi-Asset Performance (Base 100)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-muted)]",
                                        children: "Direct percentage return comparison calibrated from the initial observation timestamp."
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 442,
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
                                        NVDA: "#3B82F6"
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
                                                lineNumber: 459,
                                                columnNumber: 21
                                            }, this),
                                            sym,
                                            " (",
                                            lastVal,
                                            ")"
                                        ]
                                    }, sym, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 441,
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
                                        lineNumber: 469,
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
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this),
                                    symbols.map((sym)=>{
                                        const colors = {
                                            BTC: "#6757E8",
                                            SOL: "#10B981",
                                            GOLD: "#F59E0B",
                                            NVDA: "#3B82F6"
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
                                            lineNumber: 484,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 468,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: normalizedDates[0]?.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: normalizedDates[Math.floor(normalizedDates.length / 2)]?.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: normalizedDates[normalizedDates.length - 1]?.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 467,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 440,
                columnNumber: 9
            }, this),
            viewMode === "scatter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-card p-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[var(--border)] pb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-sm text-[var(--text-primary)] flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                                            className: "w-4 h-4 text-[var(--accent)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this),
                                        "Cross-Asset Risk vs Return Spectrum"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[var(--text-muted)]",
                                    children: "X-Axis: Realized Annualized Volatility · Y-Axis: Annualized Cumulative Return"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                            lineNumber: 510,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 509,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[var(--bg-recessed)]/50 rounded-2xl p-6 border border-[var(--border)] relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 800 260",
                            className: "w-full h-64",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "60",
                                    y1: "20",
                                    x2: "60",
                                    y2: "220",
                                    stroke: "currentColor",
                                    strokeOpacity: "0.2"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "60",
                                    y1: "220",
                                    x2: "760",
                                    y2: "220",
                                    stroke: "currentColor",
                                    strokeOpacity: "0.2"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "760",
                                    y: "240",
                                    fill: "currentColor",
                                    fillOpacity: "0.5",
                                    fontSize: "10",
                                    fontFamily: "monospace",
                                    textAnchor: "end",
                                    children: "Volatility (Risk) →"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "20",
                                    y: "30",
                                    fill: "currentColor",
                                    fillOpacity: "0.5",
                                    fontSize: "10",
                                    fontFamily: "monospace",
                                    transform: "rotate(-90 20,30)",
                                    children: "Return →"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this),
                                scatterPoints.map((p)=>{
                                    const cx = 60 + Math.min(680, Math.max(20, p.vol / 80 * 680));
                                    const cy = 220 - Math.min(190, Math.max(10, (p.ret + 20) / 100 * 190));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        className: "cursor-pointer group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: cx,
                                                cy: cy,
                                                r: "16",
                                                fill: p.color,
                                                fillOpacity: "0.85",
                                                className: "transition-transform group-hover:scale-125"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: cx,
                                                y: cy + 4,
                                                fill: "#FFFFFF",
                                                fontSize: "9",
                                                fontWeight: "bold",
                                                fontFamily: "monospace",
                                                textAnchor: "middle",
                                                children: p.symbol
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 547,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: cx,
                                                y: cy - 20,
                                                fill: "currentColor",
                                                fontSize: "10",
                                                fontWeight: "600",
                                                fontFamily: "monospace",
                                                textAnchor: "middle",
                                                className: "opacity-0 group-hover:opacity-100 transition-opacity",
                                                children: [
                                                    p.symbol,
                                                    ": +",
                                                    p.ret,
                                                    "% | Vol: ",
                                                    p.vol,
                                                    "% | Sharpe: ",
                                                    p.sharpe
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                                lineNumber: 558,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, p.symbol, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 538,
                                        columnNumber: 19
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 521,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 508,
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
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[var(--text-muted)]",
                                    children: "Force-directed link representation where line thickness and color denote absolute dependency."
                                }, void 0, false, {
                                    fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                            lineNumber: 582,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 581,
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
                                                lineNumber: 609,
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
                                                lineNumber: 618,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${link.source}-${link.target}`, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 608,
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
                                                lineNumber: 647,
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
                                                lineNumber: 648,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, n.sym, true, {
                                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                            lineNumber: 593,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/markets/cross-asset/page.tsx",
                lineNumber: 580,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/markets/cross-asset/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(MarketXRayPage, "z6TjoSkId9DhfSbdELSISfCMPXI=");
_c = MarketXRayPage;
var _c;
__turbopack_context__.k.register(_c, "MarketXRayPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/correlation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateCorrelationMatrix",
    ()=>calculateCorrelationMatrix,
    "calculateRiskReturnComparison",
    ()=>calculateRiskReturnComparison,
    "calculateRollingCorrelation",
    ()=>calculateRollingCorrelation,
    "getRelationshipLinks",
    ()=>getRelationshipLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-data-hub.ts [app-client] (ecmascript)");
;
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function calculateDailyReturns(bars) {
    const returns = [];
    for(let i = 1; i < bars.length; i++){
        const prev = bars[i - 1].close;
        const curr = bars[i].close;
        returns.push({
            time: bars[i].time,
            return: prev === 0 ? 0 : Math.log(curr / prev)
        });
    }
    return returns;
}
function pearsonCorrelation(x, y) {
    const n = Math.min(x.length, y.length);
    if (n < 2) return 0;
    const sliceX = x.slice(0, n);
    const sliceY = y.slice(0, n);
    const meanX = sliceX.reduce((a, b)=>a + b, 0) / n;
    const meanY = sliceY.reduce((a, b)=>a + b, 0) / n;
    let num = 0;
    let denX = 0;
    let denY = 0;
    for(let i = 0; i < n; i++){
        const dx = sliceX[i] - meanX;
        const dy = sliceY[i] - meanY;
        num += dx * dy;
        denX += dx * dx;
        denY += dy * dy;
    }
    const den = Math.sqrt(denX * denY);
    if (den === 0) return 0;
    return Number(Math.max(-1, Math.min(1, num / den)).toFixed(2));
}
function calculateCorrelationMatrix(assets = [
    "BTC",
    "SOL",
    "GOLD",
    "NVDA"
], timeframe = "1Y") {
    const returnMap = {};
    for (const a of assets){
        const bars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketHub"].getBars(a, timeframe);
        const rets = calculateDailyReturns(bars);
        returnMap[a] = {};
        for (const r of rets){
            returnMap[a][r.time] = r.return;
        }
    }
    // Align dates across all assets
    const firstAsset = assets[0];
    const allDates = Object.keys(returnMap[firstAsset] || {}).sort();
    const commonDates = allDates.filter((date)=>assets.every((a)=>returnMap[a][date] !== undefined));
    const matrix = {};
    for (const a1 of assets){
        matrix[a1] = {};
        const vector1 = commonDates.map((d)=>returnMap[a1][d]);
        for (const a2 of assets){
            if (a1 === a2) {
                matrix[a1][a2] = 1.0;
            } else {
                const vector2 = commonDates.map((d)=>returnMap[a2][d]);
                matrix[a1][a2] = pearsonCorrelation(vector1, vector2);
            }
        }
    }
    return {
        assets,
        matrix,
        timeframe,
        sampleSize: commonDates.length
    };
}
function calculateRollingCorrelation(assetA = "BTC", assetB = "SOL", windowDays = 30, timeframe = "1Y") {
    const barsA = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketHub"].getBars(assetA, timeframe);
    const barsB = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketHub"].getBars(assetB, timeframe);
    const retsA = calculateDailyReturns(barsA);
    const retsB = calculateDailyReturns(barsB);
    const mapB = new Map(retsB.map((r)=>[
            r.time,
            r.return
        ]));
    const aligned = [];
    for (const r of retsA){
        if (mapB.has(r.time)) {
            aligned.push({
                time: r.time,
                a: r.return,
                b: mapB.get(r.time)
            });
        }
    }
    const result = [];
    for(let i = windowDays; i <= aligned.length; i++){
        const slice = aligned.slice(i - windowDays, i);
        const vecA = slice.map((s)=>s.a);
        const vecB = slice.map((s)=>s.b);
        const corr = pearsonCorrelation(vecA, vecB);
        result.push({
            time: aligned[i - 1].time,
            correlation: corr
        });
    }
    return result;
}
function calculateRiskReturnComparison(assets = [
    "BTC",
    "SOL",
    "GOLD",
    "NVDA"
], timeframe = "1Y") {
    return assets.map((a)=>{
        const bars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketHub"].getBars(a, timeframe);
        if (bars.length < 2) {
            return {
                asset: a,
                totalReturn: 0,
                cagr: 0,
                annualizedVol: 0,
                sharpe: 0,
                maxDrawdown: 0
            };
        }
        const startPrice = bars[0].close;
        const endPrice = bars[bars.length - 1].close;
        const totalReturn = (endPrice - startPrice) / startPrice * 100;
        const days = bars.length;
        const years = Math.max(0.08, days / 252);
        const cagr = (Math.pow(endPrice / startPrice, 1 / years) - 1) * 100;
        // Daily returns
        const dailyRets = [];
        for(let i = 1; i < bars.length; i++){
            dailyRets.push((bars[i].close - bars[i - 1].close) / bars[i - 1].close);
        }
        const meanRet = dailyRets.reduce((acc, v)=>acc + v, 0) / dailyRets.length;
        const variance = dailyRets.reduce((acc, v)=>acc + (v - meanRet) ** 2, 0) / dailyRets.length;
        const dailyVol = Math.sqrt(variance);
        const annualizedVol = dailyVol * Math.sqrt(252) * 100;
        // Sharpe (assuming 3% risk-free rate)
        const rf = 0.03;
        const excessReturn = cagr / 100 - rf;
        const sharpe = annualizedVol > 0 ? Number((excessReturn / (annualizedVol / 100)).toFixed(2)) : 0;
        // Max Drawdown
        let peak = startPrice;
        let maxDd = 0;
        for (const b of bars){
            if (b.close > peak) peak = b.close;
            const dd = (b.close - peak) / peak * 100;
            if (dd < maxDd) maxDd = dd;
        }
        return {
            asset: a,
            totalReturn: Number(totalReturn.toFixed(2)),
            cagr: Number(cagr.toFixed(2)),
            annualizedVol: Number(annualizedVol.toFixed(2)),
            sharpe,
            maxDrawdown: Number(maxDd.toFixed(2))
        };
    });
}
function getRelationshipLinks(matrix) {
    const assets = Object.keys(matrix);
    const links = [];
    for(let i = 0; i < assets.length; i++){
        for(let j = i + 1; j < assets.length; j++){
            const a1 = assets[i];
            const a2 = assets[j];
            const corr = matrix[a1][a2] ?? 0;
            let strength = "NEUTRAL";
            if (corr >= 0.6) strength = "STRONG_POS";
            else if (corr >= 0.25) strength = "MODERATE_POS";
            else if (corr <= -0.5) strength = "STRONG_NEG";
            else if (corr <= -0.2) strength = "MODERATE_NEG";
            links.push({
                source: a1,
                target: a2,
                correlation: corr,
                strength
            });
        }
    }
    return links;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/demo-data/ohlcv.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/market-data-hub.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ASSET_PROFILES",
    ()=>ASSET_PROFILES,
    "marketHub",
    ()=>marketHub,
    "useMarketData",
    ()=>useMarketData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/demo-data/ohlcv.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ASSET_PROFILES = {
    BTC: {
        symbol: "BTC",
        ticker: "BTC/USD",
        name: "Bitcoin",
        assetClass: "crypto",
        decimals: 2,
        currency: "$",
        basePrice: 104284.5,
        description: "Decentralized digital monetary store of value and macro liquidity benchmark.",
        color: "#F7931A"
    },
    SOL: {
        symbol: "SOL",
        ticker: "SOL/USD",
        name: "Solana",
        assetClass: "crypto",
        decimals: 2,
        currency: "$",
        basePrice: 238.6,
        description: "High-throughput layer-1 consensus blockchain for decentralized finance.",
        color: "#14F195"
    },
    GOLD: {
        symbol: "GOLD",
        ticker: "XAU/USD",
        name: "Gold Spot",
        assetClass: "commodity",
        decimals: 2,
        currency: "$",
        basePrice: 2672.4,
        description: "Physical sovereign monetary reserve and systemic inflation hedge.",
        color: "#E4B64D"
    },
    NVDA: {
        symbol: "NVDA",
        ticker: "NVDA",
        name: "NVIDIA Corp.",
        assetClass: "equity",
        decimals: 2,
        currency: "$",
        basePrice: 178.25,
        description: "Semiconductor manufacturer powering generative AI and accelerated computing.",
        color: "#76B900"
    }
};
// ---------------------------------------------------------------------------
// Seeded deterministic tick engine
// ---------------------------------------------------------------------------
let tickSeed = 42;
function pseudoRandom() {
    tickSeed = (tickSeed * 9301 + 49297) % 233280;
    return tickSeed / 233280;
}
class MarketDataHub {
    static instance;
    currentPrices;
    activeCandles;
    metrics;
    listeners = new Set();
    timer = null;
    connectionStatus = "DEMO_STREAM";
    latencyMs = 34;
    constructor(){
        this.currentPrices = {
            BTC: ASSET_PROFILES.BTC.basePrice,
            SOL: ASSET_PROFILES.SOL.basePrice,
            GOLD: ASSET_PROFILES.GOLD.basePrice,
            NVDA: ASSET_PROFILES.NVDA.basePrice
        };
        const nowStr = new Date().toISOString().slice(0, 10);
        this.activeCandles = {
            BTC: {
                time: nowStr,
                open: 103850,
                high: 104520,
                low: 103400,
                close: 104284.5,
                volume: 84500
            },
            SOL: {
                time: nowStr,
                open: 234.2,
                high: 241.5,
                low: 232.8,
                close: 238.6,
                volume: 380200
            },
            GOLD: {
                time: nowStr,
                open: 2664.1,
                high: 2678.5,
                low: 2661.0,
                close: 2672.4,
                volume: 14200
            },
            NVDA: {
                time: nowStr,
                open: 176.4,
                high: 180.2,
                low: 175.8,
                close: 178.25,
                volume: 1950000
            }
        };
        this.metrics = {};
        for (const key of Object.keys(ASSET_PROFILES)){
            this.recalculateMetrics(key, "FLAT");
        }
        this.startStreaming();
    }
    static getInstance() {
        if (!MarketDataHub.instance) {
            MarketDataHub.instance = new MarketDataHub();
        }
        return MarketDataHub.instance;
    }
    recalculateMetrics(asset, direction) {
        const bars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_OHLCV"][asset];
        const prevBar = bars && bars.length > 1 ? bars[bars.length - 2] : null;
        const prevClose = prevBar ? prevBar.close : ASSET_PROFILES[asset].basePrice * 0.985;
        const current = this.currentPrices[asset];
        const changeAmount = current - prevClose;
        const changePercent = changeAmount / prevClose * 100;
        const candle = this.activeCandles[asset];
        this.metrics[asset] = {
            currentPrice: current,
            previousClose: prevClose,
            changeAmount: Number(changeAmount.toFixed(ASSET_PROFILES[asset].decimals)),
            changePercent: Number(changePercent.toFixed(2)),
            high24h: candle ? Math.max(candle.high, current) : current,
            low24h: candle ? Math.min(candle.low, current) : current,
            volume24h: candle ? candle.volume : 0,
            tickDirection: direction,
            lastTickTime: new Date().toLocaleTimeString()
        };
    }
    startStreaming() {
        if (this.timer || ("TURBOPACK compile-time value", "object") === "undefined") return;
        this.timer = setInterval(()=>{
            // Pick 1-2 assets to tick deterministically
            const assets = [
                "BTC",
                "SOL",
                "GOLD",
                "NVDA"
            ];
            const targetAsset = assets[Math.floor(pseudoRandom() * assets.length)];
            const assetProfile = ASSET_PROFILES[targetAsset];
            const maxDeltaRatio = targetAsset === "BTC" ? 0.0003 : targetAsset === "SOL" ? 0.0005 : targetAsset === "GOLD" ? 0.00015 : 0.0004;
            const rawDelta = (pseudoRandom() - 0.485) * (assetProfile.basePrice * maxDeltaRatio);
            const delta = Number(rawDelta.toFixed(assetProfile.decimals));
            const oldPrice = this.currentPrices[targetAsset];
            let newPrice = Number((oldPrice + delta).toFixed(assetProfile.decimals));
            if (newPrice <= 0) newPrice = oldPrice;
            const direction = delta > 0 ? "UP" : delta < 0 ? "DOWN" : "FLAT";
            this.currentPrices[targetAsset] = newPrice;
            // Update active candle
            const candle = this.activeCandles[targetAsset];
            if (candle) {
                candle.close = newPrice;
                if (newPrice > candle.high) candle.high = newPrice;
                if (newPrice < candle.low) candle.low = newPrice;
                candle.volume += Math.floor(pseudoRandom() * 15 + 1);
            }
            this.recalculateMetrics(targetAsset, direction);
            this.latencyMs = 28 + Math.floor(pseudoRandom() * 12);
            // Notify subscribers
            this.notify();
        }, 1800);
    }
    stopStreaming() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    notify() {
        this.listeners.forEach((fn)=>fn());
    }
    // API Accessors
    getPrice(asset) {
        return this.currentPrices[asset];
    }
    getMetrics(asset) {
        return this.metrics[asset];
    }
    getAllMetrics() {
        return {
            ...this.metrics
        };
    }
    getActiveCandle(asset) {
        return {
            ...this.activeCandles[asset]
        };
    }
    getConnectionStatus() {
        return {
            status: this.connectionStatus,
            label: "● DEMO STREAM",
            latencyMs: this.latencyMs,
            provider: "Quantora Simulated Feed (Deterministic Tick Engine)",
            lastHeartbeat: new Date().toISOString()
        };
    }
    /**
   * Retrieves historical OHLCV bars for an asset, filtered by timeframe or date range,
   * merged seamlessly with the active live candle.
   */ getBars(asset, timeframe = "1Y", startDate, endDate) {
        const rawBars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_OHLCV"][asset] || [];
        let bars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["barsByTimeframe"])(rawBars, timeframe);
        if (startDate) {
            bars = bars.filter((b)=>b.time >= startDate);
        }
        if (endDate) {
            bars = bars.filter((b)=>b.time <= endDate);
        }
        if (bars.length === 0) return rawBars;
        // Attach active candle as the latest bar
        const lastBar = bars[bars.length - 1];
        const liveCandle = this.activeCandles[asset];
        if (liveCandle && lastBar.time !== liveCandle.time) {
            return [
                ...bars,
                liveCandle
            ];
        } else if (liveCandle && lastBar.time === liveCandle.time) {
            const updated = [
                ...bars
            ];
            updated[updated.length - 1] = {
                ...liveCandle
            };
            return updated;
        }
        return bars;
    }
    /**
   * Calculate normalized performance (Base 100), returns, and drawdown series.
   */ getNormalizedPerformance(asset, timeframe = "1Y") {
        const bars = this.getBars(asset, timeframe);
        if (bars.length === 0) return [];
        const baseClose = bars[0].close || 1;
        let peak = baseClose;
        return bars.map((b, i)=>{
            const prevClose = i > 0 ? bars[i - 1].close : b.close;
            const returnPct = (b.close - prevClose) / prevClose * 100;
            const normalized = b.close / baseClose * 100;
            if (b.close > peak) peak = b.close;
            const drawdownPct = (b.close - peak) / peak * 100;
            return {
                time: b.time,
                price: b.close,
                normalized: Number(normalized.toFixed(2)),
                returnPct: Number(returnPct.toFixed(2)),
                drawdownPct: Number(drawdownPct.toFixed(2)),
                volume: b.volume
            };
        });
    }
    /**
   * Compare multiple assets with normalized base-100 series over identical timestamps.
   */ getMultiAssetComparison(assets, timeframe = "1Y") {
        const result = {};
        for (const a of assets){
            result[a] = this.getNormalizedPerformance(a, timeframe);
        }
        return result;
    }
}
const marketHub = MarketDataHub.getInstance();
function useMarketData(asset) {
    _s();
    const [_, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarketData.useEffect": ()=>{
            return marketHub.subscribe({
                "useMarketData.useEffect": ()=>{
                    setTick({
                        "useMarketData.useEffect": (t)=>t + 1
                    }["useMarketData.useEffect"]);
                }
            }["useMarketData.useEffect"]);
        }
    }["useMarketData.useEffect"], []);
    return {
        metrics: asset ? marketHub.getMetrics(asset) : marketHub.getAllMetrics(),
        price: asset ? marketHub.getPrice(asset) : undefined,
        activeCandle: asset ? marketHub.getActiveCandle(asset) : undefined,
        connection: marketHub.getConnectionStatus(),
        getBars: (a, tf, start, end)=>marketHub.getBars(a, tf, start, end),
        getNormalizedPerformance: (a, tf)=>marketHub.getNormalizedPerformance(a, tf),
        getMultiAssetComparison: (assets, tf)=>marketHub.getMultiAssetComparison(assets, tf)
    };
}
_s(useMarketData, "dN4XYHKpCU9RQfnwhi4Ey7/d4PU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1fjxn5w._.js.map