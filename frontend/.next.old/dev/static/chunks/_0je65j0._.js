(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/app/assist/screen/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScreenAIPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scan$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan.mjs [app-client] (ecmascript) <export default as Scan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-simulation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ScreenAIPage() {
    _s();
    const { assets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketSimulation"])();
    const [scanning, setScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analyzed, setAnalyzed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleScan = ()=>{
        setScanning(true);
        setAnalyzed(false);
        setTimeout(()=>{
            setScanning(false);
            setAnalyzed(true);
        }, 1200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-5xl mx-auto pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-mono tracking-wider text-quant-violet dark:text-quant-violet-bright font-semibold uppercase px-2 py-0.5 rounded-full clay-recessed border border-quant-violet/20",
                                        children: "ASSIST / COMPUTER VISION QUANT"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-quant-muted font-mono",
                                        children: "SCREEN AI ENGINE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl md:text-3xl font-bold tracking-tight text-quant-primary",
                                children: "Screen AI Analysis"
                            }, void 0, false, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-quant-muted mt-1",
                                children: "Real-time visual parser extracting indicator configurations, candlestick patterns, and order book anomalies."
                            }, void 0, false, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/assist/screen/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleScan,
                        disabled: scanning,
                        className: "clay-card-interactive px-5 py-2.5 rounded-xl font-medium text-sm text-quant-primary flex items-center gap-2 hover:text-quant-violet transition-all active:scale-[0.98] border border-quant-violet/30",
                        children: scanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "w-4 h-4 text-quant-violet animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/assist/screen/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Scanning Viewport..."
                                }, void 0, false, {
                                    fileName: "[project]/app/app/assist/screen/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/assist/screen/page.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scan$3e$__["Scan"], {
                                    className: "w-4 h-4 text-quant-violet"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/assist/screen/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Capture & Analyze Viewport"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/assist/screen/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/assist/screen/page.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/assist/screen/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/assist/screen/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clay-card p-6 rounded-3xl border border-quant-border/30 relative overflow-hidden space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-quant-border/30 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-rose-500/80"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-amber-500/80"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-emerald-500/80"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-quant-muted ml-2",
                                        children: "QUANTORA_VIEWPORT_STREAM://RESEARCH_DESK"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-mono text-emerald-500 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    "OCR ACTIVE (30 FPS)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/assist/screen/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-2xl clay-recessed p-6 overflow-hidden border border-quant-border/40 min-h-[220px] flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                children: Object.values(assets).map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-xl bg-quant-surface/80 border border-quant-violet/30 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-1 right-2 text-[9px] font-mono text-quant-violet font-semibold",
                                                children: "99.4% CONF"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-mono text-quant-muted",
                                                children: asset.symbol
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base font-bold font-mono text-quant-primary mt-1",
                                                children: [
                                                    "$",
                                                    asset.price.toLocaleString(undefined, {
                                                        minimumFractionDigits: 2
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-mono text-emerald-500",
                                                children: asset.regime
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, asset.symbol, true, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 rounded-xl bg-quant-surface/90 border border-quant-border/30 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono text-quant-primary flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-4 h-4 text-quant-violet"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Extracted Chart Primitive: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-quant-violet",
                                                        children: "SMA 20/50 Golden Cross Formation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-quant-muted",
                                        children: "LATENCY: 14ms"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/assist/screen/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/assist/screen/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clay-card p-6 rounded-2xl border border-quant-border/30 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-quant-primary flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    "Detected Visual Patterns & Formations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-xs font-mono text-quant-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 p-2 rounded-lg clay-recessed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-500 font-bold",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-quant-primary font-semibold",
                                                        children: "BTC Trend Following Momentum:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Price maintains support above the 50-day SMA ($98,420)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 p-2 rounded-lg clay-recessed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-500 font-bold",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-quant-primary font-semibold",
                                                        children: "SOL Volatility Compression:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Daily candle range narrowed to 1.8%, signaling potential breakout."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 p-2 rounded-lg clay-recessed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-500 font-bold",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-quant-primary font-semibold",
                                                        children: "GOLD Safe-Haven Divergence:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Steady +0.72% ascent during high crypto volatility."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/assist/screen/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clay-card p-6 rounded-2xl border border-quant-border/30 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-quant-primary flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4 text-quant-violet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    "Automated Strategy Hypothesis"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-quant-muted leading-relaxed",
                                children: [
                                    "Screen AI observed parameter alignment between the active chart and the canonical ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-quant-primary",
                                        children: "BTC Trend Following (SMA 20/50)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 95
                                    }, this),
                                    " model. Backtest verification confirms a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-emerald-500",
                                        children: "+34.2%"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 225
                                    }, this),
                                    " historical edge with a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-quant-primary",
                                        children: "1.42 Sharpe"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/assist/screen/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 311
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/app/research/backtest",
                                    className: "inline-flex items-center gap-1.5 text-xs font-semibold text-quant-violet hover:underline",
                                    children: [
                                        "Verify in Backtest Engine ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/assist/screen/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/assist/screen/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/assist/screen/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/assist/screen/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/assist/screen/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/assist/screen/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ScreenAIPage, "XBYlA/QfngHKqMG6ILe1SCzY5eM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketSimulation"]
    ];
});
_c = ScreenAIPage;
var _c;
__turbopack_context__.k.register(_c, "ScreenAIPage");
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
"[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Eye
]);
/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "eye",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
                key: "1nclc0"
            }
        ],
        [
            "circle",
            {
                cx: "12",
                cy: "12",
                r: "3",
                key: "1v7zrd"
            }
        ]
    ]
};
__iconData.node;
const Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>RefreshCw
]);
/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "refresh-cw",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
                key: "v9h5vc"
            }
        ],
        [
            "path",
            {
                d: "M21 3v5h-5",
                key: "1q7to0"
            }
        ],
        [
            "path",
            {
                d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
                key: "3uifl3"
            }
        ],
        [
            "path",
            {
                d: "M8 16H3v5",
                key: "1cv678"
            }
        ]
    ]
};
__iconData.node;
const RefreshCw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshCw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/scan.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Scan
]);
/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "scan",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M3 7V5a2 2 0 0 1 2-2h2",
                key: "aa7l1z"
            }
        ],
        [
            "path",
            {
                d: "M17 3h2a2 2 0 0 1 2 2v2",
                key: "4qcy5o"
            }
        ],
        [
            "path",
            {
                d: "M21 17v2a2 2 0 0 1-2 2h-2",
                key: "6vwrx8"
            }
        ],
        [
            "path",
            {
                d: "M7 21H5a2 2 0 0 1-2-2v-2",
                key: "ioqczr"
            }
        ]
    ]
};
__iconData.node;
const Scan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/scan.mjs [app-client] (ecmascript) <export default as Scan>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "sparkles",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                key: "1s2grr"
            }
        ],
        [
            "path",
            {
                d: "M20 2v4",
                key: "1rf3ol"
            }
        ],
        [
            "path",
            {
                d: "M22 4h-4",
                key: "gwowj6"
            }
        ],
        [
            "circle",
            {
                cx: "4",
                cy: "20",
                r: "2",
                key: "6kqj1y"
            }
        ]
    ],
    aliases: [
        "stars"
    ]
};
__iconData.node;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0je65j0._.js.map