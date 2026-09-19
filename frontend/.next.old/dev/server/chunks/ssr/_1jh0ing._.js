module.exports = [
"[project]/app/app/research/regimes/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegimeEnginePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$regime$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/regime-engine.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function RegimeEnginePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [asset, setAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("BTC");
    const [timeframe, setTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1Y");
    const [selectedSegment, setSelectedSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredSegment, setHoveredSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Dynamic Regime Analysis connected to market data
    const analysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$regime$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeMarketRegimes"])(asset, timeframe);
    }, [
        asset,
        timeframe
    ]);
    const active = hoveredSegment || selectedSegment || analysis.currentRegime;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-7xl mx-auto space-y-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold tracking-tight text-[var(--text-primary)] font-mono",
                                        children: "MARKOV REGIME ENGINE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold border border-[var(--accent-border)]",
                                        children: [
                                            "ACTIVE: ",
                                            analysis.currentRegime.label.toUpperCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-secondary)] mt-0.5",
                                children: "Microstructure regime classification segmenting historical bars into Bull, Bear, Range-Bound, and Volatility states."
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/regimes/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs font-mono",
                                children: [
                                    "BTC",
                                    "SOL",
                                    "GOLD",
                                    "NVDA"
                                ].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setAsset(a);
                                            setSelectedSegment(null);
                                        },
                                        className: `px-2.5 py-1 rounded-lg transition-colors ${asset === a ? "bg-[var(--accent)] text-white font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`,
                                        children: a
                                    }, a, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 clay-recessed p-1 rounded-xl text-xs font-mono",
                                children: [
                                    "1M",
                                    "3M",
                                    "6M",
                                    "1Y",
                                    "MAX"
                                ].map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setTimeframe(tf);
                                            setSelectedSegment(null);
                                        },
                                        className: `px-3 py-1 rounded-lg transition-colors ${timeframe === tf ? "bg-[var(--accent)] text-white font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`,
                                        children: tf
                                    }, tf, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/app/research/robustness",
                                className: "flex items-center gap-1.5 px-3 py-1.5 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-primary)] rounded-xl font-semibold transition-colors border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Robustness Lab"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-3.5 h-3.5 text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/regimes/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/regimes/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-surface p-6 rounded-2xl space-y-4 border border-[var(--border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[var(--border)] pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono",
                                        children: [
                                            "DYNAMIC REGIME TIMELINE (",
                                            analysis.segments.length,
                                            " Phase Segments)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] mt-0.5 font-mono",
                                        children: "Hover segments to inspect duration, realized volatility, and return attribution"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-[var(--accent)]",
                                children: "CONNECTED MARKET DATASET"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/regimes/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full h-14 rounded-2xl overflow-hidden p-1.5 clay-recessed gap-1 select-none",
                                children: analysis.segments.map((seg, idx)=>{
                                    const isSelected = selectedSegment?.startDate === seg.startDate;
                                    const isHovered = hoveredSegment?.startDate === seg.startDate;
                                    const flexWeight = Math.max(1, seg.barCount);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: flexWeight
                                        },
                                        onMouseEnter: ()=>setHoveredSegment(seg),
                                        onMouseLeave: ()=>setHoveredSegment(null),
                                        onClick: ()=>setSelectedSegment(seg),
                                        className: `rounded-xl p-1.5 flex flex-col justify-between cursor-pointer transition-all duration-200 overflow-hidden ${isSelected || isHovered ? "bg-[var(--bg-elevated)] border border-[var(--accent-border)] transform -translate-y-0.5 shadow-md" : "bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)]"}`,
                                        title: `${seg.label}: ${seg.startDate} to ${seg.endDate}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-[10px] text-[var(--text-primary)] truncate",
                                                        children: seg.startDate.slice(5)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 rounded-full shrink-0",
                                                        style: {
                                                            backgroundColor: seg.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "truncate text-[9px] font-semibold text-[var(--text-secondary)]",
                                                children: seg.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${seg.startDate}-${idx}`, true, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-2xl clay-card space-y-3 mt-3 animate-in fade-in duration-150 border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] pb-2.5 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 rounded-full",
                                                        style: {
                                                            backgroundColor: active.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-[var(--text-primary)] font-mono",
                                                                children: active.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-mono text-[var(--text-muted)] ml-2",
                                                                children: [
                                                                    "(",
                                                                    active.startDate,
                                                                    " → ",
                                                                    active.endDate,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[11px] text-[var(--text-muted)] font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-3.5 h-3.5 text-[var(--accent)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Duration: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-[var(--text-primary)]",
                                                                children: [
                                                                    active.barCount,
                                                                    " Sessions"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-xl clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                                        children: "Period Return"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-base font-bold mt-0.5 ${active.returnPct >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                                        children: active.returnPct >= 0 ? `+${active.returnPct}%` : `${active.returnPct}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-xl clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                                        children: "Annualized Volatility"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base font-bold text-[var(--text-primary)] mt-0.5",
                                                        children: [
                                                            active.annualizedVol,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-xl clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                                        children: "Trading Bars"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base font-bold text-[var(--accent)] mt-0.5",
                                                        children: active.barCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-xl clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                                        children: "Asset Profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base font-bold text-[var(--text-primary)] mt-0.5",
                                                        children: asset
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-secondary)] leading-relaxed pt-1",
                                        children: active.dominantFeature
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/regimes/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/regimes/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6 clay-card p-5 rounded-2xl border border-[var(--border)] space-y-3 font-mono text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-[var(--border)] pb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[var(--text-primary)] uppercase tracking-wider",
                                        children: "MARKOV TRANSITION PROBABILITY MATRIX"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[var(--accent)]",
                                        children: "STATE SHIFTS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto pt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-center text-[11px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-[var(--border)] text-[10px] text-[var(--text-muted)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 text-left",
                                                        children: "FROM \\ TO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "BULL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "BEAR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "RANGE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "VOL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/research/regimes/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-[var(--border)]",
                                            children: Object.keys(analysis.transitionMatrix).slice(0, 4).map((fromKey)=>{
                                                const row = analysis.transitionMatrix[fromKey] || {};
                                                const label = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$regime$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIME_METADATA"][fromKey]?.label || fromKey;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-[var(--bg-hover)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-left font-bold text-[var(--text-primary)] truncate max-w-[100px]",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/regimes/page.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-[var(--positive)] font-bold",
                                                            children: row["BULL_TREND"] ?? 0.15
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/regimes/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-[var(--negative)] font-bold",
                                                            children: row["BEAR_TREND"] ?? 0.12
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/regimes/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-[var(--accent)]",
                                                            children: row["RANGE_BOUND"] ?? 0.45
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/regimes/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-[var(--text-muted)]",
                                                            children: row["HIGH_VOL"] ?? 0.18
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/regimes/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, fromKey, true, {
                                                    fileName: "[project]/app/app/research/regimes/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/research/regimes/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/research/regimes/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/regimes/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6 clay-card p-5 rounded-2xl border border-[var(--border)] space-y-3 font-mono text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-[var(--border)] pb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[var(--text-primary)] uppercase tracking-wider",
                                        children: "STRATEGY PERFORMANCE BY REGIME"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[var(--positive)]",
                                        children: "ALPHA ATTRIBUTION"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 pt-1",
                                children: analysis.strategyAttribution.map((strat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl clay-recessed flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-full",
                                                        style: {
                                                            backgroundColor: strat.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[var(--text-primary)]",
                                                        children: strat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Win Rate: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    strat.winRate,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Sharpe: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: strat.sharpe
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: strat.totalReturn >= 0 ? "text-[var(--positive)] font-bold" : "text-[var(--negative)] font-bold",
                                                        children: strat.totalReturn >= 0 ? `+${strat.totalReturn}%` : `${strat.totalReturn}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, strat.regime, true, {
                                        fileName: "[project]/app/app/research/regimes/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/regimes/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/regimes/page.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/regimes/page.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/research/regimes/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/indicators.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_INDICATOR_CONFIGS",
    ()=>DEFAULT_INDICATOR_CONFIGS,
    "calculateADX",
    ()=>calculateADX,
    "calculateATR",
    ()=>calculateATR,
    "calculateBollingerBands",
    ()=>calculateBollingerBands,
    "calculateDonchianChannels",
    ()=>calculateDonchianChannels,
    "calculateEMA",
    ()=>calculateEMA,
    "calculateKeltnerChannels",
    ()=>calculateKeltnerChannels,
    "calculateMACD",
    ()=>calculateMACD,
    "calculateMomentum",
    ()=>calculateMomentum,
    "calculateROC",
    ()=>calculateROC,
    "calculateRSI",
    ()=>calculateRSI,
    "calculateSMA",
    ()=>calculateSMA,
    "calculateStochastic",
    ()=>calculateStochastic,
    "calculateVWAP",
    ()=>calculateVWAP
]);
const DEFAULT_INDICATOR_CONFIGS = [
    {
        id: "sma-20",
        type: "SMA",
        name: "SMA 20",
        enabled: true,
        color: "#8877FF",
        params: {
            period: 20
        },
        pane: "main"
    },
    {
        id: "sma-50",
        type: "SMA",
        name: "SMA 50",
        enabled: false,
        color: "#E4B64D",
        params: {
            period: 50
        },
        pane: "main"
    },
    {
        id: "ema-20",
        type: "EMA",
        name: "EMA 20",
        enabled: false,
        color: "#00E5FF",
        params: {
            period: 20
        },
        pane: "main"
    },
    {
        id: "ema-200",
        type: "EMA",
        name: "EMA 200",
        enabled: false,
        color: "#FF6572",
        params: {
            period: 200
        },
        pane: "main"
    },
    {
        id: "rsi-14",
        type: "RSI",
        name: "RSI 14",
        enabled: false,
        color: "#8877FF",
        params: {
            period: 14,
            overbought: 70,
            oversold: 30
        },
        pane: "sub"
    },
    {
        id: "macd-std",
        type: "MACD",
        name: "MACD (12,26,9)",
        enabled: false,
        color: "#00E5FF",
        params: {
            fast: 12,
            slow: 26,
            signal: 9
        },
        pane: "sub"
    },
    {
        id: "atr-14",
        type: "ATR",
        name: "ATR 14",
        enabled: false,
        color: "#F7931A",
        params: {
            period: 14
        },
        pane: "sub"
    },
    {
        id: "adx-14",
        type: "ADX",
        name: "ADX 14",
        enabled: false,
        color: "#E4B64D",
        params: {
            period: 14
        },
        pane: "sub"
    },
    {
        id: "bb-20",
        type: "BOLLINGER",
        name: "Bollinger Bands (20,2)",
        enabled: false,
        color: "rgba(136,119,255,0.7)",
        params: {
            period: 20,
            stdDev: 2
        },
        pane: "main"
    },
    {
        id: "vwap",
        type: "VWAP",
        name: "VWAP",
        enabled: false,
        color: "#FF9800",
        params: {},
        pane: "main"
    },
    {
        id: "stoch-14",
        type: "STOCHASTIC",
        name: "Stochastic (14,3,3)",
        enabled: false,
        color: "#00E5FF",
        params: {
            kPeriod: 14,
            dPeriod: 3,
            smooth: 3
        },
        pane: "sub"
    },
    {
        id: "mom-10",
        type: "MOMENTUM",
        name: "Momentum 10",
        enabled: false,
        color: "#14F195",
        params: {
            period: 10
        },
        pane: "sub"
    },
    {
        id: "roc-12",
        type: "ROC",
        name: "ROC 12",
        enabled: false,
        color: "#9D00FF",
        params: {
            period: 12
        },
        pane: "sub"
    },
    {
        id: "donchian-20",
        type: "DONCHIAN",
        name: "Donchian Channels 20",
        enabled: false,
        color: "rgba(0,229,255,0.7)",
        params: {
            period: 20
        },
        pane: "main"
    },
    {
        id: "keltner-20",
        type: "KELTNER",
        name: "Keltner Channels (20,2)",
        enabled: false,
        color: "rgba(228,182,77,0.7)",
        params: {
            period: 20,
            multiplier: 2,
            atrPeriod: 10
        },
        pane: "main"
    }
];
function calculateSMA(bars, period) {
    return bars.map((_, i)=>{
        if (i < period - 1) return null;
        const slice = bars.slice(i - period + 1, i + 1);
        const sum = slice.reduce((acc, b)=>acc + b.close, 0);
        return Number((sum / period).toFixed(2));
    });
}
function calculateEMA(bars, period) {
    const k = 2 / (period + 1);
    const result = [];
    let prev = null;
    for(let i = 0; i < bars.length; i++){
        if (i < period - 1) {
            result.push(null);
            continue;
        }
        if (i === period - 1) {
            const sum = bars.slice(0, period).reduce((acc, b)=>acc + b.close, 0);
            const init = sum / period;
            result.push(Number(init.toFixed(2)));
            prev = init;
            continue;
        }
        const val = bars[i].close * k + (prev ?? bars[i].close) * (1 - k);
        result.push(Number(val.toFixed(2)));
        prev = val;
    }
    return result;
}
function calculateRSI(bars, period = 14) {
    const result = [];
    let avgGain = 0;
    let avgLoss = 0;
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
            if (i < period) {
                result.push(null);
            } else {
                const rs = avgGain / (avgLoss || 0.0001);
                result.push(Number((100 - 100 / (1 + rs)).toFixed(2)));
            }
        } else {
            avgGain = (avgGain * (period - 1) + gain) / period;
            avgLoss = (avgLoss * (period - 1) + loss) / period;
            const rs = avgGain / (avgLoss || 0.0001);
            result.push(Number((100 - 100 / (1 + rs)).toFixed(2)));
        }
    }
    return result;
}
function calculateMACD(bars, fast = 12, slow = 26, signal = 9) {
    const fastEma = calculateEMA(bars, fast);
    const slowEma = calculateEMA(bars, slow);
    const macdLine = bars.map((_, i)=>{
        const f = fastEma[i];
        const s = slowEma[i];
        return f !== null && s !== null ? Number((f - s).toFixed(2)) : null;
    });
    const signalLine = [];
    let prevS = null;
    const k = 2 / (signal + 1);
    let count = 0;
    let seedSum = 0;
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
                signalLine.push(Number(prevS.toFixed(2)));
            } else {
                signalLine.push(null);
            }
        } else {
            const s = v * k + (prevS ?? v) * (1 - k);
            signalLine.push(Number(s.toFixed(2)));
            prevS = s;
        }
    }
    const histogram = macdLine.map((m, i)=>{
        const s = signalLine[i];
        return m !== null && s !== null ? Number((m - s).toFixed(2)) : null;
    });
    return {
        macd: macdLine,
        signal: signalLine,
        histogram
    };
}
function calculateATR(bars, period = 14) {
    const tr = [];
    for(let i = 0; i < bars.length; i++){
        if (i === 0) {
            tr.push(bars[i].high - bars[i].low);
            continue;
        }
        const hl = bars[i].high - bars[i].low;
        const hc = Math.abs(bars[i].high - bars[i - 1].close);
        const lc = Math.abs(bars[i].low - bars[i - 1].close);
        tr.push(Math.max(hl, hc, lc));
    }
    const atr = [];
    let prevAtr = 0;
    for(let i = 0; i < bars.length; i++){
        if (i < period - 1) {
            atr.push(null);
            continue;
        }
        if (i === period - 1) {
            prevAtr = tr.slice(0, period).reduce((a, b)=>a + b, 0) / period;
            atr.push(Number(prevAtr.toFixed(2)));
            continue;
        }
        prevAtr = (prevAtr * (period - 1) + tr[i]) / period;
        atr.push(Number(prevAtr.toFixed(2)));
    }
    return atr;
}
function calculateADX(bars, period = 14) {
    const tr = calculateATR(bars, 1).map((v)=>v ?? 0);
    const plusDM = [];
    const minusDM = [];
    for(let i = 0; i < bars.length; i++){
        if (i === 0) {
            plusDM.push(0);
            minusDM.push(0);
            continue;
        }
        const upMove = bars[i].high - bars[i - 1].high;
        const downMove = bars[i - 1].low - bars[i].low;
        plusDM.push(upMove > downMove && upMove > 0 ? upMove : 0);
        minusDM.push(downMove > upMove && downMove > 0 ? downMove : 0);
    }
    const smoothedTR = calculateEMA(bars.map((b, i)=>({
            ...b,
            close: tr[i]
        })), period);
    const smoothedPlusDM = calculateEMA(bars.map((b, i)=>({
            ...b,
            close: plusDM[i]
        })), period);
    const smoothedMinusDM = calculateEMA(bars.map((b, i)=>({
            ...b,
            close: minusDM[i]
        })), period);
    const plusDI = [];
    const minusDI = [];
    const dx = [];
    for(let i = 0; i < bars.length; i++){
        const sTr = smoothedTR[i];
        const sPlus = smoothedPlusDM[i];
        const sMinus = smoothedMinusDM[i];
        if (!sTr || sTr === 0 || sPlus === null || sMinus === null) {
            plusDI.push(null);
            minusDI.push(null);
            dx.push(null);
            continue;
        }
        const pDI = sPlus / sTr * 100;
        const mDI = sMinus / sTr * 100;
        plusDI.push(Number(pDI.toFixed(2)));
        minusDI.push(Number(mDI.toFixed(2)));
        const diff = Math.abs(pDI - mDI);
        const sum = pDI + mDI;
        dx.push(sum === 0 ? 0 : diff / sum * 100);
    }
    const adx = calculateEMA(bars.map((b, i)=>({
            ...b,
            close: dx[i] ?? 0
        })), period);
    return {
        adx,
        plusDI,
        minusDI
    };
}
function calculateBollingerBands(bars, period = 20, stdDev = 2) {
    const upper = [];
    const middle = [];
    const lower = [];
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
        middle.push(Number(avg.toFixed(2)));
        upper.push(Number((avg + stdDev * sigma).toFixed(2)));
        lower.push(Number((avg - stdDev * sigma).toFixed(2)));
    }
    return {
        upper,
        middle,
        lower
    };
}
function calculateVWAP(bars) {
    let cumulativeTypicalVol = 0;
    let cumulativeVol = 0;
    return bars.map((b)=>{
        const typicalPrice = (b.high + b.low + b.close) / 3;
        cumulativeTypicalVol += typicalPrice * b.volume;
        cumulativeVol += b.volume;
        return cumulativeVol > 0 ? Number((cumulativeTypicalVol / cumulativeVol).toFixed(2)) : null;
    });
}
function calculateStochastic(bars, kPeriod = 14, dPeriod = 3, smooth = 3) {
    const rawK = [];
    for(let i = 0; i < bars.length; i++){
        if (i < kPeriod - 1) {
            rawK.push(null);
            continue;
        }
        const slice = bars.slice(i - kPeriod + 1, i + 1);
        let highestHigh = -Infinity;
        let lowestLow = Infinity;
        for (const b of slice){
            if (b.high > highestHigh) highestHigh = b.high;
            if (b.low < lowestLow) lowestLow = b.low;
        }
        const range = highestHigh - lowestLow;
        const k = range === 0 ? 50 : (bars[i].close - lowestLow) / range * 100;
        rawK.push(k);
    }
    // Smooth %K
    const smoothedK = [];
    for(let i = 0; i < bars.length; i++){
        if (i < kPeriod + smooth - 2) {
            smoothedK.push(null);
            continue;
        }
        const valid = rawK.slice(i - smooth + 1, i + 1).filter((v)=>v !== null);
        smoothedK.push(valid.length > 0 ? Number((valid.reduce((a, b)=>a + b, 0) / valid.length).toFixed(2)) : null);
    }
    // %D is SMA of smoothed %K
    const d = [];
    for(let i = 0; i < bars.length; i++){
        if (i < kPeriod + smooth + dPeriod - 3) {
            d.push(null);
            continue;
        }
        const valid = smoothedK.slice(i - dPeriod + 1, i + 1).filter((v)=>v !== null);
        d.push(valid.length > 0 ? Number((valid.reduce((a, b)=>a + b, 0) / valid.length).toFixed(2)) : null);
    }
    return {
        k: smoothedK,
        d
    };
}
function calculateMomentum(bars, period = 10) {
    return bars.map((b, i)=>{
        if (i < period) return null;
        return Number((b.close - bars[i - period].close).toFixed(2));
    });
}
function calculateROC(bars, period = 12) {
    return bars.map((b, i)=>{
        if (i < period) return null;
        const prev = bars[i - period].close;
        return prev === 0 ? 0 : Number(((b.close - prev) / prev * 100).toFixed(2));
    });
}
function calculateDonchianChannels(bars, period = 20) {
    const upper = [];
    const lower = [];
    const middle = [];
    for(let i = 0; i < bars.length; i++){
        if (i < period - 1) {
            upper.push(null);
            lower.push(null);
            middle.push(null);
            continue;
        }
        const slice = bars.slice(i - period + 1, i + 1);
        let hh = -Infinity;
        let ll = Infinity;
        for (const b of slice){
            if (b.high > hh) hh = b.high;
            if (b.low < ll) ll = b.low;
        }
        upper.push(Number(hh.toFixed(2)));
        lower.push(Number(ll.toFixed(2)));
        middle.push(Number(((hh + ll) / 2).toFixed(2)));
    }
    return {
        upper,
        lower,
        middle
    };
}
function calculateKeltnerChannels(bars, period = 20, multiplier = 2, atrPeriod = 10) {
    const middle = calculateEMA(bars, period);
    const atr = calculateATR(bars, atrPeriod);
    const upper = [];
    const lower = [];
    for(let i = 0; i < bars.length; i++){
        const m = middle[i];
        const a = atr[i];
        if (m === null || a === null) {
            upper.push(null);
            lower.push(null);
        } else {
            upper.push(Number((m + multiplier * a).toFixed(2)));
            lower.push(Number((m - multiplier * a).toFixed(2)));
        }
    }
    return {
        upper,
        middle,
        lower
    };
}
}),
"[project]/lib/regime-engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REGIME_METADATA",
    ()=>REGIME_METADATA,
    "analyzeMarketRegimes",
    ()=>analyzeMarketRegimes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-data-hub.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/indicators.ts [app-ssr] (ecmascript)");
;
;
const REGIME_METADATA = {
    BULL_TREND: {
        label: "Bull Trend",
        color: "#15956C",
        description: "Positive momentum with prices sustained above medium-term moving averages."
    },
    BEAR_TREND: {
        label: "Bear Trend",
        color: "#D94E5C",
        description: "Negative momentum and structural sell pressure below 50-day moving averages."
    },
    RANGE_BOUND: {
        label: "Range-Bound",
        color: "#8877FF",
        description: "Mean-reverting horizontal oscillation with low directional conviction."
    },
    HIGH_VOL: {
        label: "High Volatility",
        color: "#FF9800",
        description: "Turbulent variance expansion, wide spreads, and elevated downside tail risk."
    },
    LOW_VOL: {
        label: "Low Volatility",
        color: "#00E5FF",
        description: "Compressed variance with steady liquidity and tight intraday distributions."
    },
    RISK_ON: {
        label: "Risk-On Expansion",
        color: "#14F195",
        description: "Systemic risk appetite favoring speculative and accelerated growth assets."
    },
    RISK_OFF: {
        label: "Risk-Off Flight",
        color: "#E4B64D",
        description: "Capital defensive posture rotating into sovereign gold and cash reserves."
    },
    TRANSITION: {
        label: "Regime Transition",
        color: "#969E9B",
        description: "Microstructure inflection state with shifting correlation clustering."
    }
};
function analyzeMarketRegimes(asset = "BTC", timeframe = "1Y") {
    const bars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getBars(asset, timeframe);
    if (bars.length < 20) {
        throw new Error("Insufficient data for regime analysis");
    }
    const sma20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSMA"])(bars, 20);
    const sma50 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSMA"])(bars, 50);
    const atr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateATR"])(bars, 14);
    // Classify each bar into a microstructure regime
    const classifiedBars = [];
    for(let i = 0; i < bars.length; i++){
        const b = bars[i];
        const prev = i > 0 ? bars[i - 1].close : b.close;
        const ret = (b.close - prev) / prev * 100;
        const s20 = sma20[i];
        const s50 = sma50[i];
        const a = atr[i];
        const relAtr = a ? a / b.close : 0.02;
        let regime = "TRANSITION";
        if (relAtr > 0.045) {
            regime = "HIGH_VOL";
        } else if (relAtr < 0.015) {
            regime = "LOW_VOL";
        } else if (s20 !== null && s50 !== null) {
            if (b.close > s20 && s20 > s50) {
                regime = relAtr > 0.03 ? "RISK_ON" : "BULL_TREND";
            } else if (b.close < s20 && s20 < s50) {
                regime = relAtr > 0.03 ? "RISK_OFF" : "BEAR_TREND";
            } else {
                regime = "RANGE_BOUND";
            }
        }
        classifiedBars.push({
            time: b.time,
            regime,
            return: ret
        });
    }
    // Aggregate contiguous segments
    const segments = [];
    let currentSeg = null;
    for (const cb of classifiedBars){
        if (!currentSeg) {
            currentSeg = {
                regime: cb.regime,
                startDate: cb.time,
                endDate: cb.time,
                returns: [
                    cb.return
                ],
                count: 1
            };
        } else if (currentSeg.regime === cb.regime) {
            currentSeg.endDate = cb.time;
            currentSeg.returns.push(cb.return);
            currentSeg.count++;
        } else {
            // Finalize previous segment
            const sumRet = currentSeg.returns.reduce((a, b)=>a + b, 0);
            const meanRet = sumRet / currentSeg.returns.length;
            const variance = currentSeg.returns.reduce((a, b)=>a + (b - meanRet) ** 2, 0) / currentSeg.returns.length;
            const annualizedVol = Math.sqrt(variance) * Math.sqrt(252);
            segments.push({
                startDate: currentSeg.startDate,
                endDate: currentSeg.endDate,
                regime: currentSeg.regime,
                label: REGIME_METADATA[currentSeg.regime].label,
                color: REGIME_METADATA[currentSeg.regime].color,
                barCount: currentSeg.count,
                returnPct: Number(sumRet.toFixed(2)),
                annualizedVol: Number(annualizedVol.toFixed(2)),
                dominantFeature: REGIME_METADATA[currentSeg.regime].description
            });
            currentSeg = {
                regime: cb.regime,
                startDate: cb.time,
                endDate: cb.time,
                returns: [
                    cb.return
                ],
                count: 1
            };
        }
    }
    if (currentSeg) {
        const sumRet = currentSeg.returns.reduce((a, b)=>a + b, 0);
        const meanRet = sumRet / currentSeg.returns.length;
        const variance = currentSeg.returns.reduce((a, b)=>a + (b - meanRet) ** 2, 0) / currentSeg.returns.length;
        const annualizedVol = Math.sqrt(variance) * Math.sqrt(252);
        segments.push({
            startDate: currentSeg.startDate,
            endDate: currentSeg.endDate,
            regime: currentSeg.regime,
            label: REGIME_METADATA[currentSeg.regime].label,
            color: REGIME_METADATA[currentSeg.regime].color,
            barCount: currentSeg.count,
            returnPct: Number(sumRet.toFixed(2)),
            annualizedVol: Number(annualizedVol.toFixed(2)),
            dominantFeature: REGIME_METADATA[currentSeg.regime].description
        });
    }
    // Transition Matrix
    const transitionCounts = {};
    for(let i = 1; i < classifiedBars.length; i++){
        const from = classifiedBars[i - 1].regime;
        const to = classifiedBars[i].regime;
        if (!transitionCounts[from]) transitionCounts[from] = {};
        transitionCounts[from][to] = (transitionCounts[from][to] || 0) + 1;
    }
    const transitionMatrix = {};
    for (const from of Object.keys(transitionCounts)){
        transitionMatrix[from] = {};
        const totalTransitions = Object.values(transitionCounts[from]).reduce((a, b)=>a + b, 0);
        for (const to of Object.keys(transitionCounts[from])){
            transitionMatrix[from][to] = Number((transitionCounts[from][to] / totalTransitions).toFixed(2));
        }
    }
    // Strategy performance attribution by regime
    const strategyAttribution = [
        {
            regime: "BULL_TREND",
            label: "Bull Trend",
            color: "#15956C",
            winRate: 72.4,
            totalReturn: 41.2,
            sharpe: 2.14,
            tradesCount: 14
        },
        {
            regime: "RANGE_BOUND",
            label: "Range-Bound",
            color: "#8877FF",
            winRate: 44.0,
            totalReturn: -3.8,
            sharpe: -0.22,
            tradesCount: 18
        },
        {
            regime: "BEAR_TREND",
            label: "Bear Trend",
            color: "#D94E5C",
            winRate: 58.2,
            totalReturn: 12.5,
            sharpe: 1.10,
            tradesCount: 8
        },
        {
            regime: "HIGH_VOL",
            label: "High Volatility",
            color: "#FF9800",
            winRate: 38.5,
            totalReturn: -8.4,
            sharpe: -0.65,
            tradesCount: 12
        },
        {
            regime: "RISK_ON",
            label: "Risk-On",
            color: "#14F195",
            winRate: 80.0,
            totalReturn: 28.6,
            sharpe: 2.45,
            tradesCount: 9
        }
    ];
    // Distribution
    const totalBars = classifiedBars.length;
    const regimeCounts = {};
    for (const b of classifiedBars){
        regimeCounts[b.regime] = (regimeCounts[b.regime] || 0) + 1;
    }
    const regimeDistribution = Object.keys(regimeCounts).map((r)=>({
            regime: r,
            label: REGIME_METADATA[r].label,
            pct: Number((regimeCounts[r] / totalBars * 100).toFixed(1)),
            color: REGIME_METADATA[r].color
        }));
    const currentRegime = segments[segments.length - 1] || {
        startDate: bars[0].time,
        endDate: bars[bars.length - 1].time,
        regime: "TRANSITION",
        label: "Regime Transition",
        color: "#969E9B",
        barCount: 1,
        returnPct: 0,
        annualizedVol: 15,
        dominantFeature: "Active market state"
    };
    return {
        asset,
        timeframe,
        segments,
        currentRegime,
        transitionMatrix,
        strategyAttribution,
        regimeDistribution
    };
}
}),
];

//# sourceMappingURL=_1jh0ing._.js.map