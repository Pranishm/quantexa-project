module.exports = [
"[project]/app/app/trade/paper/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaperTradingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-data-hub.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paper$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/paper-trading.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function PaperTradingPage() {
    const [portfolio, setPortfolio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paper$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperTradingEngine"].getPortfolio());
    const [symbol, setSymbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("BTC");
    const [side, setSide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("BUY");
    const [orderType, setOrderType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("MARKET");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0.25");
    const [limitPrice, setLimitPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [stopPrice, setStopPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [orderNotification, setOrderNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOrderDetails, setSelectedOrderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Subscribe to reactive paper engine updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paper$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperTradingEngine"].subscribe(()=>{
            setPortfolio({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paper$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperTradingEngine"].getPortfolio()
            });
        });
    }, []);
    const livePrice = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice(symbol);
    const numQty = parseFloat(quantity) || 0;
    const numLimit = parseFloat(limitPrice) || livePrice;
    const targetExecPrice = orderType === "LIMIT" ? numLimit : livePrice;
    const estimatedNotional = numQty * targetExecPrice;
    const estimatedFee = estimatedNotional * 0.0005; // 5 bps
    const estimatedSlippage = estimatedNotional * 0.0002; // 2 bps
    const handleExecuteOrder = (e)=>{
        e.preventDefault();
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paper$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperTradingEngine"].submitOrder({
            symbol,
            side,
            type: orderType,
            quantity: numQty,
            limitPrice: orderType === "LIMIT" ? numLimit : undefined,
            stopPrice: orderType === "STOP" ? parseFloat(stopPrice) : undefined
        });
        setOrderNotification({
            msg: result.message,
            success: result.success
        });
        setTimeout(()=>{
            setOrderNotification(null);
        }, 4500);
    };
    const handleClosePosition = (sym)=>{
        const pos = portfolio.positions[sym];
        if (!pos || pos.quantity <= 0) return;
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paper$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperTradingEngine"].submitOrder({
            symbol: sym,
            side: "SELL",
            type: "MARKET",
            quantity: pos.quantity
        });
        setOrderNotification({
            msg: result.message,
            success: result.success
        });
        setTimeout(()=>setOrderNotification(null), 4500);
    };
    const basePriceInt = Math.floor(livePrice);
    const activePositionsList = Object.values(portfolio.positions).filter((p)=>p && p.quantity > 0);
    const totalUnrealized = activePositionsList.reduce((acc, p)=>acc + p.unrealizedPnl, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-7xl mx-auto space-y-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2.5 clay-card rounded-2xl border border-[var(--warning-border)] bg-[var(--warning-bg)]/20 text-xs gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded-full bg-[var(--warning)] text-white font-bold text-[10px]",
                                children: "PAPER / SIMULATED TRADING"
                            }, void 0, false, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)] font-sans",
                                children: "Virtual capital sandbox with simulated slippage, exchange fees, and live mark-to-market valuation."
                            }, void 0, false, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/trade/paper/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 font-mono text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paper$2d$trading$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperTradingEngine"].resetPortfolio(100000),
                                className: "text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 hover:underline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    " Reset $100K"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/app/trade/portfolio",
                                className: "text-[var(--accent)] hover:underline font-medium",
                                children: "Portfolio Analytics →"
                            }, void 0, false, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/trade/paper/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/trade/paper/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-baseline justify-between border-b border-[var(--border)] pb-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold tracking-tight text-[var(--text-primary)] font-mono",
                                children: "PAPER TRADING DESK"
                            }, void 0, false, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-secondary)] mt-0.5",
                                children: "Real-time simulated execution with fee attribution, slippage simulation, and persistent order matching."
                            }, void 0, false, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/trade/paper/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-2.5 rounded-xl border border-[var(--border)] text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)]",
                                        children: "Portfolio Value"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base font-bold text-[var(--text-primary)]",
                                        children: [
                                            "$",
                                            portfolio.portfolioValue.toLocaleString("en-US", {
                                                minimumFractionDigits: 2
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-2.5 rounded-xl border border-[var(--border)] text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)]",
                                        children: "Available Cash"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base font-bold text-[var(--positive)]",
                                        children: [
                                            "$",
                                            portfolio.cash.toLocaleString("en-US", {
                                                minimumFractionDigits: 2
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-2.5 rounded-xl border border-[var(--border)] text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)]",
                                        children: "Unrealized P&L"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-base font-bold ${totalUnrealized >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                        children: totalUnrealized >= 0 ? `+$${totalUnrealized.toFixed(2)}` : `-$${Math.abs(totalUnrealized).toFixed(2)}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-2.5 rounded-xl border border-[var(--border)] text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)]",
                                        children: "Realized P&L"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-base font-bold ${portfolio.totalRealizedPnl >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                        children: portfolio.totalRealizedPnl >= 0 ? `+$${portfolio.totalRealizedPnl.toFixed(2)}` : `-$${Math.abs(portfolio.totalRealizedPnl).toFixed(2)}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/trade/paper/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/trade/paper/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            orderNotification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `clay-card p-3 rounded-xl border font-mono text-xs flex items-center justify-between animate-in fade-in ${orderNotification.success ? "border-[var(--positive-border)] bg-[var(--positive-bg)] text-[var(--positive)]" : "border-[var(--negative-border)] bg-[var(--negative-bg)] text-[var(--negative)]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: orderNotification.msg
                            }, void 0, false, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/trade/paper/page.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-[var(--text-muted)] uppercase",
                        children: orderNotification.success ? "EXECUTION COMPLETE" : "EXECUTION REJECTED"
                    }, void 0, false, {
                        fileName: "[project]/app/app/trade/paper/page.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/trade/paper/page.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 clay-surface p-5 rounded-3xl space-y-4 text-xs border border-[var(--border)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-[var(--border)] pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-[var(--text-primary)] font-mono uppercase tracking-wider",
                                        children: "SIMULATED ORDER TICKET"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)]",
                                        children: "Live pricing · 5 bps fee · 2 bps slippage"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleExecuteOrder,
                                className: "space-y-3 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[var(--text-muted)] text-[10px] uppercase font-semibold mb-1",
                                                children: "Asset"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: symbol,
                                                onChange: (e)=>setSymbol(e.target.value),
                                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-2 text-[var(--text-primary)] focus:outline-none border border-[var(--border)] cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "BTC",
                                                        children: [
                                                            "BTC / USD ($",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice("BTC").toLocaleString(),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SOL",
                                                        children: [
                                                            "SOL / USD ($",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice("SOL").toLocaleString(),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "GOLD",
                                                        children: [
                                                            "GOLD / USD ($",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice("GOLD").toLocaleString(),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "NVDA",
                                                        children: [
                                                            "NVDA Corp ($",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice("NVDA").toLocaleString(),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSide("BUY"),
                                                className: `py-2 rounded-xl font-bold text-xs transition-all ${side === "BUY" ? "bg-[var(--positive)] text-[#0B0D0F] shadow-sm" : "clay-button text-[var(--text-secondary)] border border-[var(--border)]"}`,
                                                children: "BUY / LONG"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSide("SELL"),
                                                className: `py-2 rounded-xl font-bold text-xs transition-all ${side === "SELL" ? "bg-[var(--negative)] text-white shadow-sm" : "clay-button text-[var(--text-secondary)] border border-[var(--border)]"}`,
                                                children: "SELL / SHORT"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[var(--text-muted)] text-[10px] uppercase font-semibold mb-1",
                                                        children: "Order Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: orderType,
                                                        onChange: (e)=>setOrderType(e.target.value),
                                                        className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-2 text-[var(--text-primary)] focus:outline-none border border-[var(--border)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "MARKET",
                                                                children: "Market"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "LIMIT",
                                                                children: "Limit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "STOP",
                                                                children: "Stop"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[var(--text-muted)] text-[10px] uppercase font-semibold mb-1",
                                                        children: "Quantity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        step: "any",
                                                        value: quantity,
                                                        onChange: (e)=>setQuantity(e.target.value),
                                                        className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-2 text-[var(--text-primary)] focus:outline-none border border-[var(--border)] font-bold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    orderType === "LIMIT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[var(--text-muted)] text-[10px] uppercase font-semibold mb-1",
                                                children: "Limit Price ($)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                step: "any",
                                                value: limitPrice || livePrice,
                                                onChange: (e)=>setLimitPrice(e.target.value),
                                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-2 text-[var(--text-primary)] focus:outline-none border border-[var(--border)] font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 border-t border-[var(--border)] space-y-1 text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[var(--text-secondary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Estimated Notional:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[var(--text-primary)]",
                                                        children: [
                                                            "$",
                                                            estimatedNotional.toLocaleString("en-US", {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[var(--text-muted)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Fee (5 bps):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "$",
                                                            estimatedFee.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[var(--text-muted)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Simulated Slippage:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "$",
                                                            estimatedSlippage.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: estimatedNotional <= 0 || side === "BUY" && estimatedNotional + estimatedFee > portfolio.cash,
                                        className: `w-full py-2.5 rounded-xl font-bold text-xs transition-all uppercase tracking-wider ${side === "BUY" ? "bg-[var(--positive)] text-[#0B0D0F] hover:opacity-90 active:scale-[0.98]" : "bg-[var(--negative)] text-white hover:opacity-90 active:scale-[0.98]"} disabled:opacity-40 disabled:cursor-not-allowed`,
                                        children: [
                                            "EXECUTE ",
                                            side,
                                            " (",
                                            quantity,
                                            " ",
                                            symbol,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/trade/paper/page.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-surface p-5 rounded-3xl border border-[var(--border)] space-y-4 font-mono text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[var(--border)] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[var(--text-primary)] uppercase tracking-wider",
                                                        children: "SIMULATED L2 ORDER BOOK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                                        children: [
                                                            symbol,
                                                            "/USD Simulated Market Depth Profile"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-[var(--positive)] flex items-center gap-1 font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    "MARK: $",
                                                    livePrice.toLocaleString("en-US", {
                                                        minimumFractionDigits: 2
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[10px] text-[var(--text-muted)] pb-1 border-b border-[var(--border)] font-semibold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "BID PRICE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "SIZE (",
                                                                    symbol,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-1 px-2 rounded-lg bg-[var(--positive-bg)] relative overflow-hidden border border-[var(--positive-border)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-[var(--positive)]",
                                                                children: [
                                                                    "$",
                                                                    (basePriceInt - 2).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--text-primary)] font-semibold",
                                                                children: "28.4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 top-0 bottom-0 bg-[var(--positive)]/10 w-[70%]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-1 px-2 rounded-lg bg-[var(--positive-bg)] relative overflow-hidden border border-[var(--positive-border)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-[var(--positive)]",
                                                                children: [
                                                                    "$",
                                                                    (basePriceInt - 4).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--text-primary)] font-semibold",
                                                                children: "41.2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 top-0 bottom-0 bg-[var(--positive)]/10 w-[85%]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[10px] text-[var(--text-muted)] pb-1 border-b border-[var(--border)] font-semibold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "ASK PRICE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "SIZE (",
                                                                    symbol,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-1 px-2 rounded-lg bg-[var(--negative-bg)] relative overflow-hidden border border-[var(--negative-border)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-[var(--negative)]",
                                                                children: [
                                                                    "$",
                                                                    (basePriceInt + 2).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--text-primary)] font-semibold",
                                                                children: "22.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-0 top-0 bottom-0 bg-[var(--negative)]/10 w-[60%]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-1 px-2 rounded-lg bg-[var(--negative-bg)] relative overflow-hidden border border-[var(--negative-border)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-[var(--negative)]",
                                                                children: [
                                                                    "$",
                                                                    (basePriceInt + 4).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--text-primary)] font-semibold",
                                                                children: "39.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-0 top-0 bottom-0 bg-[var(--negative)]/10 w-[80%]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-5 rounded-3xl border border-[var(--border)] space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[var(--border)] pb-2 font-mono text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--text-primary)] uppercase tracking-wider",
                                                children: "ACTIVE PAPER POSITIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 366,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--text-muted)]",
                                                children: [
                                                    activePositionsList.length,
                                                    " HOLDINGS"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-xs font-mono",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-[var(--border)] text-[var(--text-muted)] text-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "ASSET"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "SIDE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "QTY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "ENTRY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "CURRENT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "NOTIONAL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "UNREALIZED P&L"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2 text-right",
                                                                children: "ACTION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-[var(--border)] text-[var(--text-primary)]",
                                                    children: [
                                                        activePositionsList.map((pos)=>{
                                                            const isProfitable = pos.unrealizedPnl >= 0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-[var(--bg-hover)] transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 font-bold",
                                                                        children: pos.symbol
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 391,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-1.5 py-0.5 rounded text-[10px] font-bold bg-[var(--positive-bg)] text-[var(--positive)]",
                                                                            children: pos.side
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                            lineNumber: 393,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5",
                                                                        children: pos.quantity
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5",
                                                                        children: [
                                                                            "$",
                                                                            pos.averageEntryPrice.toLocaleString("en-US", {
                                                                                minimumFractionDigits: 2
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5",
                                                                        children: [
                                                                            "$",
                                                                            pos.currentPrice.toLocaleString("en-US", {
                                                                                minimumFractionDigits: 2
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5",
                                                                        children: [
                                                                            "$",
                                                                            pos.notional.toLocaleString("en-US", {
                                                                                minimumFractionDigits: 2
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `font-bold ${isProfitable ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                                                            children: [
                                                                                isProfitable ? `+$${pos.unrealizedPnl.toFixed(2)}` : `-$${Math.abs(pos.unrealizedPnl).toFixed(2)}`,
                                                                                " ",
                                                                                "(",
                                                                                pos.unrealizedPnlPct > 0 ? `+${pos.unrealizedPnlPct}%` : `${pos.unrealizedPnlPct}%`,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                            lineNumber: 402,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 text-right",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleClosePosition(pos.symbol),
                                                                            className: "px-2.5 py-1 clay-button rounded-lg text-[10px] text-[var(--negative)] hover:bg-[var(--negative)] hover:text-white transition-all font-bold",
                                                                            children: "CLOSE"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 408,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, pos.symbol, true, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 23
                                                            }, this);
                                                        }),
                                                        activePositionsList.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 8,
                                                                className: "py-4 text-center text-xs text-[var(--text-muted)]",
                                                                children: "No active positions. Execute a buy order above to start paper trading."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-5 rounded-3xl border border-[var(--border)] space-y-3 font-mono text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[var(--border)] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--text-primary)] uppercase tracking-wider",
                                                children: [
                                                    "SIMULATED ORDER HISTORY (",
                                                    portfolio.orders.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-[var(--text-muted)]",
                                                children: "Click order for fill breakdown"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto max-h-56 overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "text-[10px] text-[var(--text-muted)] border-b border-[var(--border)] uppercase",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2",
                                                                children: "Order ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2",
                                                                children: "Asset"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2",
                                                                children: "Side"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2",
                                                                children: "Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2",
                                                                children: "Qty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2",
                                                                children: "Price"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 text-right",
                                                                children: "Fee"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-[var(--border)]",
                                                    children: portfolio.orders.map((ord)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            onClick: ()=>setSelectedOrderDetails(ord),
                                                            className: "hover:bg-[var(--bg-hover)] cursor-pointer transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 font-bold text-[var(--accent)]",
                                                                    children: ord.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 font-bold",
                                                                    children: ord.symbol
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: ord.side === "BUY" ? "text-[var(--positive)] font-bold" : "text-[var(--negative)] font-bold",
                                                                        children: ord.side
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 464,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 text-[var(--text-secondary)]",
                                                                    children: ord.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5",
                                                                    children: ord.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5",
                                                                    children: [
                                                                        "$",
                                                                        ord.filledPrice ?? ord.requestedPrice
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-1.5 py-0.5 rounded text-[9px] bg-[var(--positive-bg)] text-[var(--positive)] font-bold",
                                                                        children: ord.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 text-right text-[var(--text-muted)]",
                                                                    children: [
                                                                        "$",
                                                                        ord.fee
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, ord.id, true, {
                                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/trade/paper/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/trade/paper/page.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/trade/paper/page.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/trade/paper/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            selectedOrderDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clay-card w-full max-w-sm rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl space-y-4 font-mono text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-[var(--border)] pb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-[var(--text-primary)]",
                                    children: [
                                        "Order Details: ",
                                        selectedOrderDetails.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedOrderDetails(null),
                                    className: "text-[var(--text-muted)] hover:text-[var(--text-primary)]",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/trade/paper/page.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-[11px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-muted)]",
                                            children: "Asset Pair:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: [
                                                selectedOrderDetails.symbol,
                                                " / USD"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-muted)]",
                                            children: "Side:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 506,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: selectedOrderDetails.side === "BUY" ? "text-[var(--positive)] font-bold" : "text-[var(--negative)] font-bold",
                                            children: selectedOrderDetails.side
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-muted)]",
                                            children: "Order Type:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedOrderDetails.type
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-muted)]",
                                            children: "Execution Status:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--positive)] font-bold",
                                            children: selectedOrderDetails.status
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-muted)]",
                                            children: "Executed Fill Price:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: [
                                                "$",
                                                selectedOrderDetails.filledPrice ?? selectedOrderDetails.requestedPrice
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-muted)]",
                                            children: "Exchange Commission (5 bps):"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "$",
                                                selectedOrderDetails.fee
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-muted)]",
                                            children: "Simulated Slippage (2 bps):"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "$",
                                                selectedOrderDetails.slippage
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-muted)]",
                                            children: "Timestamp:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 532,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedOrderDetails.createdAt
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/trade/paper/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/trade/paper/page.tsx",
                                    lineNumber: 531,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/trade/paper/page.tsx",
                            lineNumber: 500,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedOrderDetails(null),
                            className: "w-full py-2 rounded-xl bg-[var(--accent)] text-white font-bold text-xs",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/app/trade/paper/page.tsx",
                            lineNumber: 537,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/app/trade/paper/page.tsx",
                    lineNumber: 489,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/app/trade/paper/page.tsx",
                lineNumber: 488,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/trade/paper/page.tsx",
        lineNumber: 92,
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
"[project]/lib/market-data-hub.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ASSET_PROFILES",
    ()=>ASSET_PROFILES,
    "marketHub",
    ()=>marketHub,
    "useMarketData",
    ()=>useMarketData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/demo-data/ohlcv.ts [app-ssr] (ecmascript)");
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
        const bars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_OHLCV"][asset];
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
        if (this.timer || ("TURBOPACK compile-time value", "undefined") === "undefined") return;
        //TURBOPACK unreachable
        ;
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
        const rawBars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_OHLCV"][asset] || [];
        let bars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barsByTimeframe"])(rawBars, timeframe);
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
    const [_, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return marketHub.subscribe(()=>{
            setTick((t)=>t + 1);
        });
    }, []);
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
}),
"[project]/lib/paper-trading.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paperTradingEngine",
    ()=>paperTradingEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-data-hub.ts [app-ssr] (ecmascript)");
"use client";
;
const STORAGE_KEY = "quantora-paper-trading-state";
const DEFAULT_PORTFOLIO = {
    initialCapital: 100000,
    cash: 100000,
    positions: {
        BTC: {
            symbol: "BTC",
            side: "LONG",
            quantity: 0.25,
            averageEntryPrice: 98200.0,
            currentPrice: 104284.5,
            notional: 26071.12,
            unrealizedPnl: 1521.12,
            unrealizedPnlPct: 6.19,
            realizedPnl: 450.0
        },
        SOL: {
            symbol: "SOL",
            side: "LONG",
            quantity: 40.0,
            averageEntryPrice: 228.4,
            currentPrice: 238.6,
            notional: 9544.0,
            unrealizedPnl: 408.0,
            unrealizedPnlPct: 4.46,
            realizedPnl: 120.0
        },
        GOLD: {
            symbol: "GOLD",
            side: "LONG",
            quantity: 5.0,
            averageEntryPrice: 2640.0,
            currentPrice: 2672.4,
            notional: 13362.0,
            unrealizedPnl: 162.0,
            unrealizedPnlPct: 1.23,
            realizedPnl: 80.0
        },
        NVDA: {
            symbol: "NVDA",
            side: "LONG",
            quantity: 80.0,
            averageEntryPrice: 172.5,
            currentPrice: 178.25,
            notional: 14260.0,
            unrealizedPnl: 460.0,
            unrealizedPnlPct: 3.33,
            realizedPnl: 210.0
        }
    },
    orders: [
        {
            id: "ORD-101",
            symbol: "BTC",
            side: "BUY",
            type: "MARKET",
            quantity: 0.25,
            requestedPrice: 98200,
            filledPrice: 98212,
            status: "FILLED",
            createdAt: "2026-09-15T14:30:00Z",
            filledAt: "2026-09-15T14:30:01Z",
            fee: 12.28,
            slippage: 3.0,
            notional: 24553.0
        }
    ],
    totalRealizedPnl: 860.0,
    totalFeesPaid: 31.42,
    portfolioValue: 103411.12,
    lastUpdated: new Date().toISOString()
};
class PaperTradingEngine {
    static instance;
    state;
    listeners = new Set();
    constructor(){
        this.state = this.loadFromStorage();
        this.recalculatePortfolio();
        // Subscribe to live market hub ticks to update positions mark-to-market
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    static getInstance() {
        if (!PaperTradingEngine.instance) {
            PaperTradingEngine.instance = new PaperTradingEngine();
        }
        return PaperTradingEngine.instance;
    }
    loadFromStorage() {
        if ("TURBOPACK compile-time truthy", 1) return {
            ...DEFAULT_PORTFOLIO
        };
        //TURBOPACK unreachable
        ;
    }
    saveToStorage() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    notify() {
        this.listeners.forEach((fn)=>fn());
    }
    subscribe(fn) {
        this.listeners.add(fn);
        return ()=>{
            this.listeners.delete(fn);
        };
    }
    getPortfolio() {
        return this.state;
    }
    recalculatePortfolio() {
        let positionsValue = 0;
        for (const [sym, pos] of Object.entries(this.state.positions)){
            if (pos && pos.quantity > 0) {
                const livePrice = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice(sym) || pos.averageEntryPrice;
                pos.currentPrice = livePrice;
                pos.notional = Number((pos.quantity * livePrice).toFixed(2));
                pos.unrealizedPnl = Number((pos.notional - pos.quantity * pos.averageEntryPrice).toFixed(2));
                pos.unrealizedPnlPct = Number(((livePrice - pos.averageEntryPrice) / pos.averageEntryPrice * 100).toFixed(2));
                positionsValue += pos.notional;
            }
        }
        this.state.portfolioValue = Number((this.state.cash + positionsValue).toFixed(2));
        this.state.lastUpdated = new Date().toISOString();
        this.saveToStorage();
        this.notify();
    }
    updateMarkToMarket() {
        let hasChanged = false;
        let positionsValue = 0;
        for (const [sym, pos] of Object.entries(this.state.positions)){
            if (pos && pos.quantity > 0) {
                const livePrice = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice(sym);
                if (livePrice && livePrice !== pos.currentPrice) {
                    pos.currentPrice = livePrice;
                    pos.notional = Number((pos.quantity * livePrice).toFixed(2));
                    pos.unrealizedPnl = Number((pos.notional - pos.quantity * pos.averageEntryPrice).toFixed(2));
                    pos.unrealizedPnlPct = Number(((livePrice - pos.averageEntryPrice) / pos.averageEntryPrice * 100).toFixed(2));
                    hasChanged = true;
                }
                positionsValue += pos.notional;
            }
        }
        // Check pending limit/stop orders against live price
        for (const ord of this.state.orders){
            if (ord.status === "PENDING") {
                const currentPrice = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice(ord.symbol);
                if (ord.type === "LIMIT") {
                    if (ord.side === "BUY" && currentPrice <= ord.requestedPrice) {
                        this.executeFill(ord, ord.requestedPrice);
                        hasChanged = true;
                    } else if (ord.side === "SELL" && currentPrice >= ord.requestedPrice) {
                        this.executeFill(ord, ord.requestedPrice);
                        hasChanged = true;
                    }
                } else if (ord.type === "STOP") {
                    if (ord.side === "SELL" && currentPrice <= ord.requestedPrice) {
                        this.executeFill(ord, currentPrice);
                        hasChanged = true;
                    }
                }
            }
        }
        if (hasChanged) {
            this.state.portfolioValue = Number((this.state.cash + positionsValue).toFixed(2));
            this.state.lastUpdated = new Date().toISOString();
            this.saveToStorage();
            this.notify();
        }
    }
    executeFill(ord, fillPrice) {
        const feeBps = 0.0005; // 5 bps
        const notional = ord.quantity * fillPrice;
        const fee = notional * feeBps;
        ord.filledPrice = Number(fillPrice.toFixed(2));
        ord.status = "FILLED";
        ord.filledAt = new Date().toISOString();
        ord.fee = Number(fee.toFixed(2));
        ord.notional = Number(notional.toFixed(2));
        this.state.totalFeesPaid += fee;
        const currentPos = this.state.positions[ord.symbol];
        if (ord.side === "BUY") {
            this.state.cash -= notional + fee;
            if (!currentPos || currentPos.quantity === 0) {
                this.state.positions[ord.symbol] = {
                    symbol: ord.symbol,
                    side: "LONG",
                    quantity: ord.quantity,
                    averageEntryPrice: fillPrice,
                    currentPrice: fillPrice,
                    notional,
                    unrealizedPnl: 0,
                    unrealizedPnlPct: 0,
                    realizedPnl: currentPos ? currentPos.realizedPnl : 0
                };
            } else {
                const totalQty = currentPos.quantity + ord.quantity;
                const totalCost = currentPos.quantity * currentPos.averageEntryPrice + notional;
                currentPos.quantity = totalQty;
                currentPos.averageEntryPrice = Number((totalCost / totalQty).toFixed(2));
            }
        } else {
            // SELL
            if (currentPos && currentPos.quantity >= ord.quantity) {
                const proceeds = notional - fee;
                this.state.cash += proceeds;
                const costBasis = ord.quantity * currentPos.averageEntryPrice;
                const realized = notional - costBasis;
                currentPos.realizedPnl += Number(realized.toFixed(2));
                this.state.totalRealizedPnl += Number(realized.toFixed(2));
                currentPos.quantity = Number((currentPos.quantity - ord.quantity).toFixed(4));
            }
        }
    }
    /**
   * Submit an order (Market, Limit, Stop).
   */ submitOrder(params) {
        const livePrice = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getPrice(params.symbol);
        const targetPrice = params.type === "MARKET" ? livePrice : params.limitPrice || params.stopPrice || livePrice;
        const notional = params.quantity * targetPrice;
        const fee = notional * 0.0005;
        // Validation
        if (params.quantity <= 0) {
            return {
                success: false,
                message: "Quantity must be greater than zero."
            };
        }
        if (params.side === "BUY") {
            if (notional + fee > this.state.cash) {
                return {
                    success: false,
                    message: `Insufficient virtual cash. Required: $${(notional + fee).toFixed(2)}, Available: $${this.state.cash.toFixed(2)}`
                };
            }
        } else {
            // SELL validation
            const existingPos = this.state.positions[params.symbol];
            if (!existingPos || existingPos.quantity < params.quantity) {
                return {
                    success: false,
                    message: `Insufficient holding. Available: ${existingPos ? existingPos.quantity : 0} ${params.symbol}`
                };
            }
        }
        const order = {
            id: `ORD-${Date.now().toString().slice(-6)}`,
            symbol: params.symbol,
            side: params.side,
            type: params.type,
            quantity: params.quantity,
            requestedPrice: targetPrice,
            status: params.type === "MARKET" ? "FILLED" : "PENDING",
            createdAt: new Date().toISOString(),
            fee: Number(fee.toFixed(2)),
            slippage: Number((notional * 0.0002).toFixed(2)),
            notional: Number(notional.toFixed(2))
        };
        if (params.type === "MARKET") {
            // Immediate execution with slight slippage
            const slipFactor = params.side === "BUY" ? 1.0002 : 0.9998;
            const fillPrice = targetPrice * slipFactor;
            this.executeFill(order, fillPrice);
        }
        this.state.orders.unshift(order);
        this.recalculatePortfolio();
        return {
            success: true,
            message: params.type === "MARKET" ? `ORDER FILLED: ${params.side} ${params.quantity} ${params.symbol} @ $${order.filledPrice}` : `ORDER PLACED: ${params.side} ${params.type} ${params.quantity} ${params.symbol} @ $${targetPrice}`,
            order
        };
    }
    cancelOrder(orderId) {
        const ord = this.state.orders.find((o)=>o.id === orderId);
        if (ord && ord.status === "PENDING") {
            ord.status = "CANCELLED";
            this.saveToStorage();
            this.notify();
            return true;
        }
        return false;
    }
    resetPortfolio(newCapital = 100000) {
        this.state = {
            initialCapital: newCapital,
            cash: newCapital,
            positions: {},
            orders: [],
            totalRealizedPnl: 0,
            totalFeesPaid: 0,
            portfolioValue: newCapital,
            lastUpdated: new Date().toISOString()
        };
        this.saveToStorage();
        this.notify();
    }
    addVirtualFunds(amount) {
        this.state.cash += amount;
        this.recalculatePortfolio();
    }
}
const paperTradingEngine = PaperTradingEngine.getInstance();
}),
];

//# sourceMappingURL=_0k0k83x._.js.map