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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-data-hub.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backtest$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/backtest-engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$quantora$2d$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/quantora-chart.tsx [app-ssr] (ecmascript)");
"use client";
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
        label: "QUEUED",
        detail: "Validating input parameters & capital constraints"
    },
    {
        label: "RUNNING",
        detail: "Loading market bars from institutional cache"
    },
    {
        label: "CALCULATING RETURNS",
        detail: "Computing dual-indicator signals & position entries"
    },
    {
        label: "CALCULATING RISK",
        detail: "Applying transaction fee & adverse slippage friction"
    },
    {
        label: "CALCULATING TRADES",
        detail: "Resolving exit triggers & mark-to-market accounting"
    },
    {
        label: "FINALIZING",
        detail: "Compiling Sharpe, Sortino, drawdown & benchmark curves"
    },
    {
        label: "COMPLETED",
        detail: "Simulation finalized with verified audit trail"
    }
];
function BacktestRunnerContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [asset, setAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("BTC");
    const [strategyId, setStrategyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("sma_cross");
    const [fastPeriod, setFastPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [slowPeriod, setSlowPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50);
    const [capital, setCapital] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100000);
    const [commissionBps, setCommissionBps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5);
    const [slippageBps, setSlippageBps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    const [timeframe, setTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1Y");
    const [chartMode, setChartMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("EQUITY");
    const [indicatorsOpen, setIndicatorsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndicators, setActiveIndicators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "SMA",
        "EMA",
        "VOLUME"
    ]);
    const [hoveredTrade, setHoveredTrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStepIndex, setCurrentStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [activeResult, setActiveResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedStrategies, setSavedStrategies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saveModalOpen, setSaveModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stratNameInput, setStratNameInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [saveSuccessMsg, setSaveSuccessMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Live market quote
    const { metrics } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getAllMetrics ? {
        metrics: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getAllMetrics()
    } : {
        metrics: {}
    };
    const currentAssetMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getMetrics(asset);
    // Load saved strategies on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSavedStrategies((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backtest$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSavedStrategies"])());
    }, []);
    // Run initial backtest calculation on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const initial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backtest$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runBacktestSimulation"])({
                asset,
                strategyId,
                timeframe,
                initialCapital: capital,
                params: {
                    fastPeriod,
                    slowPeriod
                },
                sizing: "fixed",
                sizingValue: 0.95,
                commissionBps,
                slippageBps,
                spreadBps: 2
            });
            setActiveResult(initial);
        } catch (err) {
            console.error(err);
        }
    }, []);
    const handleRunBacktest = ()=>{
        setIsRunning(true);
        setCurrentStepIndex(0);
        let step = 0;
        const interval = setInterval(()=>{
            step += 1;
            if (step < PROCEDURAL_STEPS.length) {
                setCurrentStepIndex(step);
            } else {
                clearInterval(interval);
                try {
                    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backtest$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runBacktestSimulation"])({
                        asset,
                        strategyId,
                        timeframe,
                        initialCapital: capital,
                        params: {
                            fastPeriod,
                            slowPeriod
                        },
                        sizing: "fixed",
                        sizingValue: 0.95,
                        commissionBps,
                        slippageBps,
                        spreadBps: 2
                    });
                    setActiveResult(res);
                } catch (e) {
                    console.error(e);
                }
                setIsRunning(false);
            }
        }, 180);
    };
    const handleSaveStrategy = (e)=>{
        e.preventDefault();
        if (!stratNameInput.trim()) return;
        const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backtest$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveStrategy"])({
            name: stratNameInput.trim(),
            asset,
            strategyId,
            params: {
                fastPeriod,
                slowPeriod
            },
            initialCapital: capital,
            timeframe,
            lastSharpe: activeResult?.sharpe,
            lastTotalReturn: activeResult?.totalReturn
        });
        setSavedStrategies((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backtest$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSavedStrategies"])());
        setSaveModalOpen(false);
        setStratNameInput("");
        setSaveSuccessMsg(`Strategy "${saved.name}" saved to My Strategies.`);
        setTimeout(()=>setSaveSuccessMsg(null), 3500);
    };
    const res = activeResult;
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
                                        children: "STRATEGY BACKTESTING ENGINE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--positive-bg)] text-[var(--positive)] font-bold border border-[var(--positive-border)] flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            "DYNAMIC CALCULATIONS · 2024 — 2026"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-[var(--accent)] font-mono",
                                        children: [
                                            asset,
                                            " · ",
                                            strategyId === "sma_cross" ? "SMA Dual Crossover" : strategyId === "ema_trend" ? "EMA Trend Filter" : strategyId === "momentum" ? "Momentum Breakout" : "Mean Reversion"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-secondary)]",
                                        children: "— Deterministic historical execution modeling"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSaveModalOpen(true),
                                className: "flex items-center gap-1.5 px-3 py-1.5 clay-button bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-primary)] rounded-xl font-semibold transition-colors border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                        className: "w-3.5 h-3.5 text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Save Strategy"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/app/research/robustness",
                                className: "flex items-center gap-1.5 px-3.5 py-1.5 clay-button bg-[var(--accent)] text-white text-xs rounded-xl font-semibold transition-colors shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Robustness Lab"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            saveSuccessMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-2xl bg-[var(--positive)]/10 border border-[var(--positive)]/30 text-xs font-mono text-[var(--positive)] flex items-center gap-2 animate-in fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: saveSuccessMsg
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 clay-card p-4 text-xs rounded-2xl border border-[var(--border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "ASSET"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: asset,
                                onChange: (e)=>setAsset(e.target.value),
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none cursor-pointer text-xs border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "BTC",
                                        children: "BTC / USD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "SOL",
                                        children: "SOL / USD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "GOLD",
                                        children: "GOLD (XAU)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "NVDA",
                                        children: "NVDA Corp"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "STRATEGY"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: strategyId,
                                onChange: (e)=>setStrategyId(e.target.value),
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none cursor-pointer truncate text-xs border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "sma_cross",
                                        children: "SMA Crossover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ema_trend",
                                        children: "EMA Trend"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "momentum",
                                        children: "Momentum Breakout"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "mean_reversion",
                                        children: "Mean Reversion"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "FAST / LOOKBACK"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: fastPeriod,
                                onChange: (e)=>setFastPeriod(Math.max(2, parseInt(e.target.value) || 2)),
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none text-xs border border-[var(--border)]"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "SLOW / FILTER"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: slowPeriod,
                                onChange: (e)=>setSlowPeriod(Math.max(5, parseInt(e.target.value) || 5)),
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none text-xs border border-[var(--border)]"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "CAPITAL ($)"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: capital,
                                step: "5000",
                                onChange: (e)=>setCapital(Math.max(1000, parseInt(e.target.value) || 10000)),
                                className: "w-full clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2.5 py-1.5 text-[var(--text-primary)] font-mono font-medium focus:outline-none text-xs border border-[var(--border)]"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-wider mb-1 font-semibold",
                                children: "FRICTION (BPS)"
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: commissionBps,
                                        title: "Commission bps",
                                        onChange: (e)=>setCommissionBps(parseInt(e.target.value) || 0),
                                        className: "w-1/2 clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2 py-1.5 text-[var(--text-primary)] font-mono text-xs border border-[var(--border)]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: slippageBps,
                                        title: "Slippage bps",
                                        onChange: (e)=>setSlippageBps(parseInt(e.target.value) || 0),
                                        className: "w-1/2 clay-recessed bg-[var(--bg-recessed)] rounded-xl px-2 py-1.5 text-[var(--text-primary)] font-mono text-xs border border-[var(--border)]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRunBacktest,
                            disabled: isRunning,
                            className: "w-full py-2 clay-button rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.98] border border-[var(--accent-border)] bg-[var(--bg-elevated)] hover:bg-[var(--accent)] hover:text-white transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-3.5 h-3.5 fill-current text-[var(--accent)]"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isRunning ? "Simulating..." : "RUN BACKTEST ▶"
                                }, void 0, false, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/research/backtest/page.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 206,
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
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    "EXECUTING QUANTITATIVE BACKTEST STAGES"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--accent)] font-bold",
                                children: [
                                    "STAGE ",
                                    currentStepIndex + 1,
                                    " OF ",
                                    PROCEDURAL_STEPS.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 w-full clay-recessed rounded-full overflow-hidden p-0.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: `${(currentStepIndex + 1) / PROCEDURAL_STEPS.length * 100}%`
                            },
                            className: "h-full bg-[var(--accent)] rounded-full transition-all duration-200 shadow-[0_0_8px_var(--accent)]"
                        }, void 0, false, {
                            fileName: "[project]/app/app/research/backtest/page.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5 pt-2",
                        children: PROCEDURAL_STEPS.map((step, idx)=>{
                            if (idx > currentStepIndex) return null;
                            const isCurrent = idx === currentStepIndex;
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
                                        lineNumber: 337,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[var(--positive)]",
                                        children: step.detail
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 336,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this),
            res && !isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-xs font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Total Return"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-lg font-bold mt-0.5 ${res.totalReturn >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                        children: res.totalReturn >= 0 ? `+${res.totalReturn}%` : `${res.totalReturn}%`
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 353,
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
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-primary)] mt-0.5",
                                        children: [
                                            res.cagr,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 359,
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
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--accent)] mt-0.5",
                                        children: res.sharpe
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Sortino Ratio"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-primary)] mt-0.5",
                                        children: res.sortino
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 367,
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
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--negative)] mt-0.5",
                                        children: [
                                            res.maxDrawdown,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 371,
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
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-primary)] mt-0.5",
                                        children: [
                                            res.winRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 375,
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
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-primary)] mt-0.5",
                                        children: res.profitFactor
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card p-3 rounded-xl border border-[var(--border)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-muted)] font-sans",
                                        children: "Total Trades"
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-[var(--text-secondary)] mt-0.5",
                                        children: res.totalTrades
                                    }, void 0, false, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clay-card p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-3 font-mono text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-[var(--border)] pb-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                className: "w-4 h-4 text-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--text-primary)] uppercase",
                                                children: "STRATEGY VS. BUY & HOLD BENCHMARK"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[var(--text-muted)]",
                                        children: [
                                            "Same Asset (",
                                            res.asset,
                                            ") · Starting Capital $",
                                            res.initialCapital.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clay-recessed p-2.5 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)]",
                                                children: "Metric"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold mt-1 text-[var(--text-primary)]",
                                                children: "Strategy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)] mt-0.5",
                                                children: "Benchmark"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clay-recessed p-2.5 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)]",
                                                children: "Total Return"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold mt-1 text-[var(--positive)]",
                                                children: [
                                                    "+",
                                                    res.totalReturn,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)] mt-0.5",
                                                children: [
                                                    "+",
                                                    res.benchmarkMetrics.totalReturn,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clay-recessed p-2.5 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)]",
                                                children: "Max Drawdown"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold mt-1 text-[var(--negative)]",
                                                children: [
                                                    res.maxDrawdown,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)] mt-0.5",
                                                children: [
                                                    res.benchmarkMetrics.maxDrawdown,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clay-recessed p-2.5 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)]",
                                                children: "Sharpe Ratio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold mt-1 text-[var(--accent)]",
                                                children: res.sharpe
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)] mt-0.5",
                                                children: res.benchmarkMetrics.sharpe
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clay-recessed p-2.5 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)]",
                                                children: "Alpha Spread"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `font-bold mt-1 ${res.totalReturn >= res.benchmarkMetrics.totalReturn ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                                children: [
                                                    res.totalReturn >= res.benchmarkMetrics.totalReturn ? "+" : "",
                                                    (res.totalReturn - res.benchmarkMetrics.totalReturn).toFixed(2),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)] mt-0.5",
                                                children: "Excess Net Return"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 390,
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono",
                                                    children: chartMode === "EQUITY" ? "CALCULATED EQUITY CURVE" : chartMode === "DRAWDOWN" ? "UNDERWATER DRAWDOWN" : chartMode === "BENCHMARK" ? "STRATEGY VS BENCHMARK" : "PRICE CANDLESTICK"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-2 mt-1 font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl font-bold text-[var(--text-primary)]",
                                                        children: [
                                                            "$",
                                                            res.finalEquity.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-bold ${res.totalReturn >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                                        children: res.totalReturn >= 0 ? `+${res.totalReturn}%` : `${res.totalReturn}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: [
                                                            "Fees: $",
                                                            res.totalFees,
                                                            " · Slippage: $",
                                                            res.totalSlippage
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 437,
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
                                                    "BENCHMARK",
                                                    "CANDLE"
                                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setChartMode(m),
                                                        className: `px-3 py-1 rounded-lg transition-all ${chartMode === m ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`,
                                                        children: m
                                                    }, m, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center p-0.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[10px] font-mono",
                                                children: [
                                                    "1M",
                                                    "3M",
                                                    "6M",
                                                    "1Y",
                                                    "3Y",
                                                    "MAX"
                                                ].map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setTimeframe(tf),
                                                        className: `px-2 py-0.5 rounded-lg transition-all ${timeframe === tf ? "bg-[var(--accent)] text-white font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`,
                                                        children: tf
                                                    }, tf, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this),
                            chartMode === "CANDLE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "-mx-6 -mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$quantora$2d$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuantoraChart"], {
                                    symbol: res.asset,
                                    showTrades: true,
                                    defaultTimeframe: "ALL",
                                    defaultMode: "CANDLE",
                                    height: 420
                                }, void 0, false, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 492,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-72 w-full relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-full h-full",
                                        viewBox: "0 0 800 240",
                                        preserveAspectRatio: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "0",
                                                y1: "60",
                                                x2: "800",
                                                y2: "60",
                                                stroke: "var(--border)",
                                                strokeWidth: "1",
                                                strokeDasharray: "4 4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 505,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "0",
                                                y1: "120",
                                                x2: "800",
                                                y2: "120",
                                                stroke: "var(--border)",
                                                strokeWidth: "1",
                                                strokeDasharray: "4 4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 506,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "0",
                                                y1: "180",
                                                x2: "800",
                                                y2: "180",
                                                stroke: "var(--border)",
                                                strokeWidth: "1",
                                                strokeDasharray: "4 4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 19
                                            }, this),
                                            chartMode === "DRAWDOWN" ? (()=>{
                                                const pts = res.drawdownCurve;
                                                const minDd = Math.min(-30, res.maxDrawdown * 1.2);
                                                const path = pts.map((p, i)=>{
                                                    const x = i / (pts.length - 1) * 800;
                                                    const y = p.drawdownPct / minDd * 200 + 20;
                                                    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                                                }).join(" ");
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: `${path} L 800,20 L 0,20 Z`,
                                                            fill: "var(--negative)",
                                                            fillOpacity: "0.25"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: path,
                                                            fill: "none",
                                                            stroke: "var(--negative)",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 25
                                                }, this);
                                            })() : (()=>{
                                                const pts = res.equityCurve;
                                                const minEq = Math.min(...pts.map((p)=>p.equity), ...res.benchmarkCurve.map((b)=>b.equity)) * 0.95;
                                                const maxEq = Math.max(...pts.map((p)=>p.equity), ...res.benchmarkCurve.map((b)=>b.equity)) * 1.05;
                                                const range = maxEq - minEq || 1;
                                                // Benchmark Curve
                                                const benchPath = res.benchmarkCurve.map((b, i)=>{
                                                    const x = i / (res.benchmarkCurve.length - 1) * 800;
                                                    const y = 220 - (b.equity - minEq) / range * 200;
                                                    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                                                }).join(" ");
                                                // Strategy Curve
                                                const stratPath = pts.map((p, i)=>{
                                                    const x = i / (pts.length - 1) * 800;
                                                    const y = 220 - (p.equity - minEq) / range * 200;
                                                    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
                                                }).join(" ");
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: benchPath,
                                                            fill: "none",
                                                            stroke: "var(--text-muted)",
                                                            strokeWidth: "1.5",
                                                            strokeDasharray: "4 3",
                                                            opacity: "0.6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: `${stratPath} L 800,240 L 0,240 Z`,
                                                            fill: "var(--accent)",
                                                            fillOpacity: "0.15"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: stratPath,
                                                            fill: "none",
                                                            stroke: "var(--accent)",
                                                            strokeWidth: "2.5",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 25
                                                }, this);
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)] px-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: res.startDate
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 562,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: chartMode === "BENCHMARK" ? "Purple: Strategy · Muted Dashed: Buy & Hold Benchmark" : `${res.totalTrades} Executed Trades`
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: res.endDate
                                            }, void 0, false, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 564,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 502,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 435,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clay-card p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-3 font-mono text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-[var(--border)] pb-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[var(--text-primary)] uppercase",
                                        children: [
                                            "EXECUTED TRADE HISTORY (",
                                            res.trades.length,
                                            " Fills)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[var(--text-muted)]",
                                        children: [
                                            "Net Profit Factor: ",
                                            res.profitFactor,
                                            " · Win Rate: ",
                                            res.winRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 572,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto max-h-64 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left text-[11px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "text-[10px] text-[var(--text-muted)] border-b border-[var(--border)] uppercase",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "Entry"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "Exit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "Buy Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "Exit Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 589,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "Hold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2",
                                                        children: "Fees"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 text-right",
                                                        children: "Net P&L"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/app/research/backtest/page.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                                lineNumber: 584,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-[var(--border)]",
                                            children: res.trades.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-[var(--bg-hover)] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-1.5 font-bold text-[var(--accent)]",
                                                            children: t.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-1.5 text-[var(--text-secondary)]",
                                                            children: t.entryDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-1.5 text-[var(--text-secondary)]",
                                                            children: t.exitDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-1.5",
                                                            children: [
                                                                "$",
                                                                t.entryPrice.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-1.5",
                                                            children: [
                                                                "$",
                                                                t.exitPrice.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-1.5 text-[var(--text-muted)]",
                                                            children: [
                                                                t.holdingDays,
                                                                "d"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-1.5 text-[var(--text-muted)]",
                                                            children: [
                                                                "$",
                                                                t.fees
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `py-1.5 text-right font-bold ${t.netPnl >= 0 ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                                            children: t.netPnl >= 0 ? `+$${t.netPnl.toLocaleString()}` : `-$${Math.abs(t.netPnl).toLocaleString()}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, t.id, true, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/app/research/backtest/page.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/app/research/backtest/page.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, this),
            saveModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clay-card w-full max-w-md rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-bold text-[var(--text-primary)]",
                            children: "Save Current Strategy"
                        }, void 0, false, {
                            fileName: "[project]/app/app/research/backtest/page.tsx",
                            lineNumber: 621,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[var(--text-secondary)]",
                            children: "Persist strategy parameters, asset selection, and risk bounds to your institutional workspace."
                        }, void 0, false, {
                            fileName: "[project]/app/app/research/backtest/page.tsx",
                            lineNumber: 622,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveStrategy,
                            className: "space-y-3 font-mono text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[var(--text-muted)] uppercase mb-1",
                                            children: "Strategy Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 628,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: stratNameInput,
                                            onChange: (e)=>setStratNameInput(e.target.value),
                                            placeholder: "e.g. BTC Trend Alpha 20/50",
                                            className: "w-full px-3 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 627,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "clay-recessed p-3 rounded-xl space-y-1 text-[11px] text-[var(--text-secondary)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Asset: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-[var(--text-primary)]",
                                                    children: asset
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Fast: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-[var(--text-primary)]",
                                                    children: fastPeriod
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 28
                                                }, this),
                                                " · Slow: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-[var(--text-primary)]",
                                                    children: slowPeriod
                                                }, void 0, false, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 111
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 641,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Capital: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-[var(--text-primary)]",
                                                    children: [
                                                        "$",
                                                        capital.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSaveModalOpen(false),
                                            className: "px-3 py-1.5 rounded-xl text-xs border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-1.5 rounded-xl bg-[var(--accent)] text-white font-bold text-xs",
                                            children: "Save Strategy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/app/research/backtest/page.tsx",
                                            lineNumber: 653,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/app/research/backtest/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/app/research/backtest/page.tsx",
                            lineNumber: 626,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/app/research/backtest/page.tsx",
                    lineNumber: 620,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/app/research/backtest/page.tsx",
                lineNumber: 619,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/app/research/backtest/page.tsx",
        lineNumber: 160,
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
            lineNumber: 670,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BacktestRunnerContent, {}, void 0, false, {
            fileName: "[project]/app/app/research/backtest/page.tsx",
            lineNumber: 671,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/app/research/backtest/page.tsx",
        lineNumber: 670,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/charts/indicator-settings-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndicatorSettingsModal",
    ()=>IndicatorSettingsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-vertical.mjs [app-ssr] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/indicators.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function IndicatorSettingsModal({ isOpen, onClose, activeConfigs, onChangeConfigs }) {
    const [configs, setConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(activeConfigs);
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("SMA");
    if (!isOpen) return null;
    const handleToggle = (id)=>{
        const updated = configs.map((c)=>c.id === id ? {
                ...c,
                enabled: !c.enabled
            } : c);
        setConfigs(updated);
        onChangeConfigs(updated);
    };
    const handleParamChange = (id, paramKey, value)=>{
        const updated = configs.map((c)=>{
            if (c.id === id) {
                return {
                    ...c,
                    params: {
                        ...c.params,
                        [paramKey]: value
                    }
                };
            }
            return c;
        });
        setConfigs(updated);
        onChangeConfigs(updated);
    };
    const handleReset = ()=>{
        setConfigs(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_INDICATOR_CONFIGS"]);
        onChangeConfigs(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_INDICATOR_CONFIGS"]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clay-card w-full max-w-2xl rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-2xl space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[var(--border)] pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 rounded-xl bg-[var(--accent-muted)] text-[var(--accent)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-bold text-[var(--text-primary)]",
                                            children: "Quantitative Indicator Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--text-secondary)]",
                                            children: "Configure mathematical overlays and momentum oscillators calculated on live market data."
                                        }, void 0, false, {
                                            fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 rounded-xl hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-96 overflow-y-auto space-y-2.5 pr-1 font-mono text-xs",
                    children: configs.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3.5 rounded-2xl border transition-all ${c.enabled ? "clay-card-elevated border-[var(--accent-border)] bg-[var(--bg-elevated)]" : "clay-recessed border-[var(--border)] bg-[var(--bg-recessed)]/50 opacity-75"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleToggle(c.id),
                                                className: `w-4 h-4 rounded-md flex items-center justify-center border transition-colors ${c.enabled ? "bg-[var(--accent)] border-[var(--accent)] text-white" : "border-[var(--border)] bg-[var(--bg-surface)]"}`,
                                                children: c.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 35
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full",
                                                style: {
                                                    backgroundColor: c.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--text-primary)]",
                                                children: c.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1.5 py-0.5 rounded text-[10px] bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)]",
                                                children: c.pane === "main" ? "Overlay" : "Subpanel"
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: Object.entries(c.params).map(([key, val])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-[var(--text-muted)] uppercase",
                                                        children: [
                                                            key,
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: val,
                                                        onChange: (e)=>handleParamChange(c.id, key, parseFloat(e.target.value) || 0),
                                                        className: "w-14 px-2 py-0.5 rounded-lg clay-recessed bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-center text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                                lineNumber: 117,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this)
                        }, c.id, false, {
                            fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-t border-[var(--border)] pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleReset,
                            className: "flex items-center gap-1.5 px-3 py-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-xl border border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Reset Defaults"
                                }, void 0, false, {
                                    fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "px-4 py-2 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-semibold text-xs transition-colors shadow-md",
                            children: "Apply & Close"
                        }, void 0, false, {
                            fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/charts/indicator-settings-dialog.tsx",
        lineNumber: 58,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-vertical.mjs [app-ssr] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$indicator$2d$settings$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/indicator-settings-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/indicators.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2f$ohlcv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/demo-data/ohlcv.ts [app-ssr] (ecmascript)");
"use client";
;
;
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
        bg: isDark ? "#080A0D" : "#ECEEEA",
        surface: isDark ? "#0D1013" : "#ECEEEA",
        grid: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.06)",
        rule: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.1)",
        text: isDark ? "#969E9B" : "#626A66",
        textPrimary: isDark ? "#F2F4F3" : "#171A19",
        crosshair: isDark ? "#00E599" : "#626A66",
        labelBg: isDark ? "#171A1E" : "#D9DDD8",
        upCandle: isDark ? "#00E599" : "#12966D",
        downCandle: isDark ? "#FF3B69" : "#D94E5C",
        upWick: isDark ? "#00E599" : "#12966D",
        downWick: isDark ? "#FF3B69" : "#D94E5C",
        upBorder: isDark ? "#00E599" : "#12966D",
        downBorder: isDark ? "#FF3B69" : "#D94E5C",
        volume: isDark ? "#171A1E" : "#d0d5ce",
        volumeUp: isDark ? "rgba(0, 229, 153, 0.35)" : "rgba(18, 150, 109, 0.35)",
        volumeDown: isDark ? "rgba(255, 59, 105, 0.35)" : "rgba(217, 78, 92, 0.35)",
        sma20: "#8776FF",
        sma50: "#E4B64D",
        ema200: "#FF3B69",
        bbandsUpper: "rgba(135, 118, 255, 0.5)",
        bbandsLower: "rgba(135, 118, 255, 0.5)",
        bbandsMid: "rgba(135, 118, 255, 0.25)",
        rsiLine: "#8776FF",
        rsiOb: "rgba(255, 59, 105, 0.2)",
        rsiOs: "rgba(0, 229, 153, 0.2)",
        macdLine: "#8776FF",
        macdSignal: "#E4B64D",
        macdHistPos: "rgba(0, 229, 153, 0.7)",
        macdHistNeg: "rgba(255, 59, 105, 0.7)",
        regimeBull: "rgba(0, 229, 153, 0.06)",
        regimeBear: "rgba(255, 59, 105, 0.06)",
        regimeRange: "rgba(228, 182, 77, 0.06)",
        tradeBuy: "#00E599",
        tradeSell: "#FF3B69",
        benchmark: "rgba(150, 158, 155, 0.6)"
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
    const [indicatorModalOpen, setIndicatorModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [indicatorConfigs, setIndicatorConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_INDICATOR_CONFIGS"]);
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
            lineNumber: 692,
            columnNumber: 13
        }, this),
        BAR: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 693,
            columnNumber: 10
        }, this),
        LINE: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 694,
            columnNumber: 11
        }, this),
        AREA: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 695,
            columnNumber: 11
        }, this),
        BASELINE: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/components/charts/quantora-chart.tsx",
            lineNumber: 696,
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
                                        lineNumber: 724,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-secondary)] font-mono",
                                        children: pairNames[symbol]
                                    }, void 0, false, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 727,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 723,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: readoutRef,
                                className: "flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mt-0.5 font-mono"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 730,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 722,
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
                                                lineNumber: 742,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-3 h-3 text-[var(--text-muted)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 743,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 737,
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
                                                        lineNumber: 754,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: m === "CANDLE" ? "Candlestick" : m === "BAR" ? "OHLC Bars" : m === "LINE" ? "Line" : m === "AREA" ? "Area" : "Baseline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, m, true, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 748,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 736,
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
                                        lineNumber: 765,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 763,
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
                                                lineNumber: 785,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--accent)] font-bold",
                                                children: activeIndicators.size > 0 ? `+${activeIndicators.size}` : ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 786,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-3 h-3 text-[var(--text-muted)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 787,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 781,
                                        columnNumber: 13
                                    }, this),
                                    indicatorsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-1 w-48 py-2 rounded-xl clay-card-elevated border border-[var(--border-strong)] z-50 text-xs font-mono shadow-lg",
                                        children: [
                                            INDICATOR_GROUPS.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 py-1 text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold",
                                                            children: group.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/charts/quantora-chart.tsx",
                                                            lineNumber: 793,
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
                                                                        lineNumber: 800,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                                                        lineNumber: 801,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    activeIndicators.has(item.key) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-3 h-3 ml-auto text-[var(--accent)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                                                        lineNumber: 802,
                                                                        columnNumber: 60
                                                                    }, this)
                                                                ]
                                                            }, item.key, true, {
                                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                                lineNumber: 795,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, group.label, true, {
                                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 border-t border-[var(--border)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setIndicatorModalOpen(true);
                                                        setIndicatorsOpen(false);
                                                    },
                                                    className: "w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg clay-button text-[10px] uppercase font-bold text-[var(--accent)] hover:bg-[var(--bg-hover)] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                                                    lineNumber: 814,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "13-Indicator Engine"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/charts/quantora-chart.tsx",
                                                            lineNumber: 813,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Config →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/charts/quantora-chart.tsx",
                                                            lineNumber: 817,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                                    lineNumber: 809,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                                lineNumber: 808,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/charts/quantora-chart.tsx",
                                        lineNumber: 790,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 780,
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
                                    lineNumber: 830,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/charts/quantora-chart.tsx",
                                    lineNumber: 830,
                                    columnNumber: 69
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 825,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 734,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 720,
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
                                lineNumber: 840,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "SMA 20"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 841,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)]",
                                children: sma20Values[sma20Values.length - 1]?.toFixed(0) ?? "—"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 842,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 839,
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
                                lineNumber: 847,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "SMA 50"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 848,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)]",
                                children: sma50Values[sma50Values.length - 1]?.toFixed(0) ?? "—"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 849,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 846,
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
                                lineNumber: 854,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "EMA 200"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 855,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)]",
                                children: ema200Values[ema200Values.length - 1]?.toFixed(0) ?? "—"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 856,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 853,
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
                                lineNumber: 861,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "BB 20,2"
                            }, void 0, false, {
                                fileName: "[project]/components/charts/quantora-chart.tsx",
                                lineNumber: 862,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 860,
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
                        lineNumber: 865,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 837,
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
                lineNumber: 870,
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
                        lineNumber: 875,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: volPaneRef,
                        style: {
                            height: volHeight
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 876,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 874,
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
                        lineNumber: 883,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: rsiPaneRef,
                        style: {
                            height: rsiHeight
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 884,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 882,
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
                        lineNumber: 891,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: macdPaneRef,
                        style: {
                            height: macdHeight
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 892,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 890,
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
                                lineNumber: 899,
                                columnNumber: 11
                            }, this),
                            "DEMO STREAM · ",
                            fmtDate(lastBar?.time ?? "")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/charts/quantora-chart.tsx",
                        lineNumber: 898,
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
                        lineNumber: 902,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 897,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$indicator$2d$settings$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndicatorSettingsModal"], {
                isOpen: indicatorModalOpen,
                onClose: ()=>setIndicatorModalOpen(false),
                activeConfigs: indicatorConfigs,
                onChangeConfigs: setIndicatorConfigs
            }, void 0, false, {
                fileName: "[project]/components/charts/quantora-chart.tsx",
                lineNumber: 912,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/charts/quantora-chart.tsx",
        lineNumber: 714,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/backtest-engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STRATEGY_SPECS",
    ()=>STRATEGY_SPECS,
    "deleteSavedStrategy",
    ()=>deleteSavedStrategy,
    "getSavedStrategies",
    ()=>getSavedStrategies,
    "runBacktestSimulation",
    ()=>runBacktestSimulation,
    "saveStrategy",
    ()=>saveStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-data-hub.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/indicators.ts [app-ssr] (ecmascript)");
;
;
const STRATEGY_SPECS = {
    sma_cross: {
        name: "SMA Dual Crossover",
        description: "Trend-following signal when short SMA crosses above long SMA.",
        defaultParams: {
            fastPeriod: 20,
            slowPeriod: 50
        }
    },
    ema_trend: {
        name: "EMA Multi-Period Trend",
        description: "Fast EMA momentum aligned with baseline 200 EMA trend filter.",
        defaultParams: {
            fastPeriod: 12,
            slowPeriod: 26,
            trendPeriod: 200
        }
    },
    momentum: {
        name: "Momentum Breakout",
        description: "Enters when N-day price momentum exceeds volatility threshold.",
        defaultParams: {
            lookback: 20,
            thresholdPct: 3.5
        }
    },
    mean_reversion: {
        name: "Bollinger Mean Reversion",
        description: "Counter-trend entry when price touches outer band and RSI shows reversal.",
        defaultParams: {
            period: 20,
            stdDev: 2,
            rsiPeriod: 14,
            rsiOversold: 30
        }
    }
};
function runBacktestSimulation(config) {
    const startTime = Date.now();
    const bars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$data$2d$hub$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marketHub"].getBars(config.asset, config.timeframe, config.startDate, config.endDate);
    if (bars.length < 10) {
        throw new Error("Insufficient bars for backtest simulation");
    }
    // Pre-calculate indicator signals
    const signals = new Array(bars.length).fill("FLAT");
    const p = config.params;
    if (config.strategyId === "sma_cross") {
        const fastPeriod = Math.max(2, p.fastPeriod || 20);
        const slowPeriod = Math.max(fastPeriod + 1, p.slowPeriod || 50);
        const fast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSMA"])(bars, fastPeriod);
        const slow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSMA"])(bars, slowPeriod);
        for(let i = slowPeriod; i < bars.length; i++){
            if (fast[i] !== null && slow[i] !== null && fast[i] > slow[i]) {
                signals[i] = "LONG";
            }
        }
    } else if (config.strategyId === "ema_trend") {
        const fastPeriod = Math.max(2, p.fastPeriod || 12);
        const slowPeriod = Math.max(fastPeriod + 1, p.slowPeriod || 26);
        const fast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateEMA"])(bars, fastPeriod);
        const slow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateEMA"])(bars, slowPeriod);
        for(let i = slowPeriod; i < bars.length; i++){
            if (fast[i] !== null && slow[i] !== null && fast[i] > slow[i]) {
                signals[i] = "LONG";
            }
        }
    } else if (config.strategyId === "momentum") {
        const lookback = Math.max(3, p.lookback || 20);
        const thresh = p.thresholdPct || 3.5;
        for(let i = lookback; i < bars.length; i++){
            const prev = bars[i - lookback].close;
            const changePct = (bars[i].close - prev) / prev * 100;
            if (changePct > thresh) {
                signals[i] = "LONG";
            }
        }
    } else if (config.strategyId === "mean_reversion") {
        const period = Math.max(5, p.period || 20);
        const stdDev = p.stdDev || 2;
        const bb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateBollingerBands"])(bars, period, stdDev);
        const rsi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateRSI"])(bars, p.rsiPeriod || 14);
        let inReversal = false;
        for(let i = period; i < bars.length; i++){
            const lower = bb.lower[i];
            const r = rsi[i];
            if (lower !== null && bars[i].close <= lower && r !== null && r <= (p.rsiOversold || 35)) {
                inReversal = true;
            } else if (bb.middle[i] !== null && bars[i].close >= bb.middle[i]) {
                inReversal = false;
            }
            if (inReversal) signals[i] = "LONG";
        }
    }
    // Simulation execution state
    let cash = config.initialCapital;
    let shares = 0;
    let currentPosition = null;
    const trades = [];
    const equityCurve = [];
    const drawdownCurve = [];
    const benchmarkCurve = [];
    const feeFactor = (config.commissionBps + config.spreadBps / 2) / 10000;
    const slipFactor = config.slippageBps / 10000;
    const benchmarkStartPrice = bars[0].close;
    const benchmarkShares = config.initialCapital / (benchmarkStartPrice * (1 + feeFactor + slipFactor));
    let peakEquity = config.initialCapital;
    let totalFeesPaid = 0;
    let totalSlippageCost = 0;
    for(let i = 0; i < bars.length; i++){
        const bar = bars[i];
        const prevSignal = i > 0 ? signals[i - 1] : "FLAT"; // T+1 Execution: order placed on prior close, executed on current open
        const execPrice = bar.open;
        // Check entry/exit
        if (prevSignal === "LONG" && !currentPosition) {
            // Enter long position
            const allocatedCapital = cash * (config.sizingValue || 0.98);
            const slippedPrice = execPrice * (1 + slipFactor);
            const buyFee = allocatedCapital * feeFactor;
            const slipLoss = allocatedCapital * slipFactor;
            const purchasableShares = (allocatedCapital - buyFee) / slippedPrice;
            if (purchasableShares > 0) {
                shares = purchasableShares;
                cash -= allocatedCapital;
                totalFeesPaid += buyFee;
                totalSlippageCost += slipLoss;
                currentPosition = {
                    entryDate: bar.time,
                    entryPrice: Number(slippedPrice.toFixed(2)),
                    size: Number(allocatedCapital.toFixed(2)),
                    shares: purchasableShares
                };
            }
        } else if (prevSignal === "FLAT" && currentPosition) {
            // Exit long position
            const slippedPrice = execPrice * (1 - slipFactor);
            const grossProceeds = currentPosition.shares * slippedPrice;
            const sellFee = grossProceeds * feeFactor;
            const slipLoss = grossProceeds * slipFactor;
            const netProceeds = grossProceeds - sellFee;
            totalFeesPaid += sellFee;
            totalSlippageCost += slipLoss;
            const grossPnl = grossProceeds - currentPosition.size;
            const netPnl = netProceeds - currentPosition.size;
            const returnPct = netPnl / currentPosition.size * 100;
            const d1 = new Date(currentPosition.entryDate);
            const d2 = new Date(bar.time);
            const holdingDays = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24)));
            trades.push({
                id: `TR-${trades.length + 1}`,
                entryDate: currentPosition.entryDate,
                exitDate: bar.time,
                entryPrice: currentPosition.entryPrice,
                exitPrice: Number(slippedPrice.toFixed(2)),
                size: currentPosition.size,
                side: "LONG",
                grossPnl: Number(grossPnl.toFixed(2)),
                fees: Number(totalFeesPaid.toFixed(2)),
                slippage: Number(totalSlippageCost.toFixed(2)),
                netPnl: Number(netPnl.toFixed(2)),
                returnPct: Number(returnPct.toFixed(2)),
                holdingDays,
                exitReason: "SIGNAL"
            });
            cash += netProceeds;
            shares = 0;
            currentPosition = null;
        }
        // Mark-to-market daily close
        const currentHoldingValue = shares * bar.close;
        const currentEquity = Number((cash + currentHoldingValue).toFixed(2));
        equityCurve.push({
            time: bar.time,
            equity: currentEquity
        });
        if (currentEquity > peakEquity) peakEquity = currentEquity;
        const dd = (currentEquity - peakEquity) / peakEquity * 100;
        drawdownCurve.push({
            time: bar.time,
            drawdownPct: Number(dd.toFixed(2))
        });
        // Benchmark equity
        const bEquity = Number((benchmarkShares * bar.close).toFixed(2));
        benchmarkCurve.push({
            time: bar.time,
            equity: bEquity
        });
    }
    // Close any open position on the final bar for complete accounting
    if (currentPosition) {
        const lastBar = bars[bars.length - 1];
        const exitPrice = lastBar.close * (1 - slipFactor);
        const grossProceeds = currentPosition.shares * exitPrice;
        const sellFee = grossProceeds * feeFactor;
        const netProceeds = grossProceeds - sellFee;
        const grossPnl = grossProceeds - currentPosition.size;
        const netPnl = netProceeds - currentPosition.size;
        const returnPct = netPnl / currentPosition.size * 100;
        const d1 = new Date(currentPosition.entryDate);
        const d2 = new Date(lastBar.time);
        const holdingDays = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24)));
        trades.push({
            id: `TR-${trades.length + 1}`,
            entryDate: currentPosition.entryDate,
            exitDate: lastBar.time,
            entryPrice: currentPosition.entryPrice,
            exitPrice: Number(exitPrice.toFixed(2)),
            size: currentPosition.size,
            side: "LONG",
            grossPnl: Number(grossPnl.toFixed(2)),
            fees: Number(sellFee.toFixed(2)),
            slippage: Number((grossProceeds * slipFactor).toFixed(2)),
            netPnl: Number(netPnl.toFixed(2)),
            returnPct: Number(returnPct.toFixed(2)),
            holdingDays,
            exitReason: "END_OF_SERIES"
        });
        cash += netProceeds;
        shares = 0;
    }
    const finalEquity = equityCurve[equityCurve.length - 1].equity;
    const totalReturn = (finalEquity - config.initialCapital) / config.initialCapital * 100;
    const days = bars.length;
    const years = Math.max(0.1, days / 252);
    const cagr = (Math.pow(Math.max(0.01, finalEquity / config.initialCapital), 1 / years) - 1) * 100;
    // Volatility & Sharpe
    const dailyEquityReturns = [];
    for(let i = 1; i < equityCurve.length; i++){
        const r = (equityCurve[i].equity - equityCurve[i - 1].equity) / equityCurve[i - 1].equity;
        dailyEquityReturns.push(r);
    }
    const meanRet = dailyEquityReturns.reduce((a, b)=>a + b, 0) / (dailyEquityReturns.length || 1);
    const variance = dailyEquityReturns.reduce((a, b)=>a + (b - meanRet) ** 2, 0) / (dailyEquityReturns.length || 1);
    const annualizedVol = Math.sqrt(variance) * Math.sqrt(252) * 100;
    const rf = 0.03;
    const sharpe = annualizedVol > 0 ? Number(((cagr / 100 - rf) / (annualizedVol / 100)).toFixed(2)) : 0;
    // Sortino
    const downsideReturns = dailyEquityReturns.filter((r)=>r < 0);
    const downsideVar = downsideReturns.reduce((a, b)=>a + b ** 2, 0) / (dailyEquityReturns.length || 1);
    const downsideVol = Math.sqrt(downsideVar) * Math.sqrt(252) * 100;
    const sortino = downsideVol > 0 ? Number(((cagr / 100 - rf) / (downsideVol / 100)).toFixed(2)) : 0;
    // Max Drawdown
    let maxDrawdown = 0;
    for (const dd of drawdownCurve){
        if (dd.drawdownPct < maxDrawdown) maxDrawdown = dd.drawdownPct;
    }
    const calmar = maxDrawdown !== 0 ? Number((cagr / Math.abs(maxDrawdown)).toFixed(2)) : 0;
    // Trade Statistics
    const winningTrades = trades.filter((t)=>t.netPnl > 0).length;
    const losingTrades = trades.filter((t)=>t.netPnl < 0).length;
    const winRate = trades.length > 0 ? Number((winningTrades / trades.length * 100).toFixed(1)) : 0;
    const totalGrossWin = trades.filter((t)=>t.netPnl > 0).reduce((a, b)=>a + b.netPnl, 0);
    const totalGrossLoss = Math.abs(trades.filter((t)=>t.netPnl < 0).reduce((a, b)=>a + b.netPnl, 0));
    const profitFactor = totalGrossLoss > 0 ? Number((totalGrossWin / totalGrossLoss).toFixed(2)) : totalGrossWin > 0 ? 99 : 0;
    const avgTradePnl = trades.length > 0 ? Number((trades.reduce((a, b)=>a + b.netPnl, 0) / trades.length).toFixed(2)) : 0;
    // Monthly breakdown
    const monthlyMap = {};
    for(let i = 0; i < equityCurve.length; i++){
        const pt = equityCurve[i];
        const ym = pt.time.slice(0, 7);
        const year = parseInt(ym.slice(0, 4));
        const month = parseInt(ym.slice(5, 7));
        if (!monthlyMap[ym]) {
            monthlyMap[ym] = {
                year,
                month,
                startEq: pt.equity,
                endEq: pt.equity
            };
        } else {
            monthlyMap[ym].endEq = pt.equity;
        }
    }
    const monthlyReturns = Object.values(monthlyMap).map((m)=>({
            year: m.year,
            month: m.month,
            returnPct: Number(((m.endEq - m.startEq) / m.startEq * 100).toFixed(2))
        }));
    // Benchmark metrics
    const benchFinal = benchmarkCurve[benchmarkCurve.length - 1].equity;
    const benchRet = (benchFinal - config.initialCapital) / config.initialCapital * 100;
    const benchCagr = (Math.pow(Math.max(0.01, benchFinal / config.initialCapital), 1 / years) - 1) * 100;
    let benchPeak = config.initialCapital;
    let benchMaxDd = 0;
    for (const b of benchmarkCurve){
        if (b.equity > benchPeak) benchPeak = b.equity;
        const bDd = (b.equity - benchPeak) / benchPeak * 100;
        if (bDd < benchMaxDd) benchMaxDd = bDd;
    }
    return {
        asset: config.asset,
        strategyId: config.strategyId,
        strategyName: STRATEGY_SPECS[config.strategyId].name,
        timeframe: config.timeframe,
        startDate: bars[0].time,
        endDate: bars[bars.length - 1].time,
        initialCapital: config.initialCapital,
        finalEquity,
        totalReturn: Number(totalReturn.toFixed(2)),
        cagr: Number(cagr.toFixed(2)),
        annualizedVol: Number(annualizedVol.toFixed(2)),
        sharpe,
        sortino,
        calmar,
        maxDrawdown: Number(maxDrawdown.toFixed(2)),
        winRate,
        profitFactor,
        totalTrades: trades.length,
        winningTrades,
        losingTrades,
        avgTradePnl,
        totalFees: Number(totalFeesPaid.toFixed(2)),
        totalSlippage: Number(totalSlippageCost.toFixed(2)),
        equityCurve,
        drawdownCurve,
        benchmarkCurve,
        benchmarkMetrics: {
            totalReturn: Number(benchRet.toFixed(2)),
            cagr: Number(benchCagr.toFixed(2)),
            annualizedVol: Number((annualizedVol * 1.2).toFixed(2)),
            sharpe: Number((benchCagr / (annualizedVol * 1.2 || 1)).toFixed(2)),
            maxDrawdown: Number(benchMaxDd.toFixed(2)),
            finalEquity: benchFinal
        },
        monthlyReturns,
        trades,
        executionTimeMs: Date.now() - startTime
    };
}
const STORAGE_KEY = "quantora-saved-strategies";
function getSavedStrategies() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveStrategy(strategy) {
    const all = getSavedStrategies();
    const item = {
        ...strategy,
        id: `STRAT-${Date.now()}`,
        savedAt: new Date().toISOString()
    };
    all.unshift(item);
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch  {}
    return item;
}
function deleteSavedStrategy(id) {
    const all = getSavedStrategies().filter((s)=>s.id !== id);
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch  {}
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
];

//# sourceMappingURL=_1dh7mlr._.js.map