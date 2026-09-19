module.exports = [
"[project]/components/assets/asset-view.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssetWorkstation",
    ()=>AssetWorkstation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.mjs [app-ssr] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-right.mjs [app-ssr] (ecmascript) <export default as ArrowDownRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$quantora$2d$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/quantora-chart.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ASSET_REGISTRY = {
    bitcoin: {
        key: "bitcoin",
        name: "BITCOIN",
        symbol: "BTC",
        ticker: "BTC / USD",
        route: "/app/assets/bitcoin",
        price: "$104,284.32",
        change: "+2.41%",
        up: true,
        volume24h: "$48.2B",
        marketCap: "$2.06T",
        assetClass: "Digital Commodity / Crypto",
        benchmarkSymbol: "BTC-USD",
        tabs: [
            "Price",
            "Technical",
            "Risk",
            "On-Chain",
            "Research"
        ]
    },
    solana: {
        key: "solana",
        name: "SOLANA",
        symbol: "SOL",
        ticker: "SOL / USD",
        route: "/app/assets/solana",
        price: "$152.40",
        change: "-1.20%",
        up: false,
        volume24h: "$4.15B",
        marketCap: "$71.2B",
        assetClass: "Layer-1 Infrastructure",
        benchmarkSymbol: "SOL-USD",
        tabs: [
            "Price",
            "Technical",
            "Risk",
            "Network",
            "Research"
        ]
    },
    gold: {
        key: "gold",
        name: "GOLD",
        symbol: "XAU",
        ticker: "XAU / USD",
        route: "/app/assets/gold",
        price: "$2,580.60",
        change: "+0.65%",
        up: true,
        volume24h: "$32.4B",
        marketCap: "$17.4T",
        assetClass: "Physical Reserve Commodity",
        benchmarkSymbol: "GC=F",
        tabs: [
            "Price",
            "Technical",
            "Risk",
            "Macro",
            "Research"
        ]
    },
    nvidia: {
        key: "nvidia",
        name: "NVIDIA",
        symbol: "NVDA",
        ticker: "NVDA",
        route: "/app/assets/nvidia",
        price: "$124.75",
        change: "+3.42%",
        up: true,
        volume24h: "$18.6B",
        marketCap: "$3.07T",
        assetClass: "Semiconductor & AI Compute",
        benchmarkSymbol: "NVDA",
        tabs: [
            "Price",
            "Technical",
            "Fundamental",
            "Risk",
            "Research"
        ]
    }
};
function AssetWorkstation({ assetKey }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const asset = ASSET_REGISTRY[assetKey] || ASSET_REGISTRY.bitcoin;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Price");
    const [hoverData, setHoverData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Switch tab if current tab does not exist on target asset
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!asset.tabs.includes(activeTab)) {
            setActiveTab(asset.tabs[0]);
        }
    }, [
        asset,
        activeTab
    ]);
    // Map asset key → chart symbol
    const SYMBOL_MAP = {
        bitcoin: "BTC",
        solana: "SOL",
        gold: "GOLD",
        nvidia: "NVDA"
    };
    const chartSymbol = SYMBOL_MAP[assetKey];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 space-y-6 max-w-[1580px] mx-auto transition-opacity duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-1.5 flex items-center justify-between overflow-x-auto no-scrollbar clay-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 min-w-max",
                        children: Object.keys(ASSET_REGISTRY).map((key)=>{
                            const item = ASSET_REGISTRY[key];
                            const isSelected = item.key === assetKey;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.route,
                                className: `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all clay-interactive ${isSelected ? "bg-[var(--bg-elevated)] text-[var(--text-primary)] clay-recessed border border-[var(--accent)]/40" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[var(--accent)]" : "bg-[var(--text-muted)]"}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tracking-wide font-semibold",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[11px] text-[var(--text-muted)]",
                                        children: [
                                            "(",
                                            item.symbol,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono text-[10px] ml-1 ${item.up ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                        children: item.change
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/assets/asset-view.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-3 text-xs text-[var(--text-muted)] pr-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Benchmark: ",
                                    asset.benchmarkSymbol
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1 h-1 rounded-full bg-[var(--border)]"
                            }, void 0, false, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-[var(--positive)] flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-[var(--positive)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    " Market Open"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assets/asset-view.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assets/asset-view.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 clay-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)]",
                                        children: asset.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono font-medium px-2 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)]",
                                        children: asset.ticker
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-[var(--text-muted)] font-medium",
                                        children: asset.assetClass
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-3 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl md:text-4xl font-mono font-bold tracking-tight text-[var(--text-primary)]",
                                        children: hoverData ? `$${hoverData.price.toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}` : asset.price
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-mono font-semibold flex items-center ${asset.up ? "text-[var(--positive)]" : "text-[var(--negative)]"}`,
                                        children: [
                                            asset.up ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-4 h-4 mr-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 202,
                                                columnNumber: 27
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                                className: "w-4 h-4 mr-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 202,
                                                columnNumber: 73
                                            }, this),
                                            asset.change
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-muted)]",
                                        children: hoverData ? hoverData.date : "24H Change"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assets/asset-view.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-xs clay-recessed-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)] uppercase tracking-wider",
                                                children: "24H Volume"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-mono font-medium text-[var(--text-primary)]",
                                                children: asset.volume24h
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 w-px bg-[var(--border)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--text-muted)] uppercase tracking-wider",
                                                children: "Market Cap"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-mono font-medium text-[var(--text-primary)]",
                                                children: asset.marketCap
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/app/research/strategy-lab?asset=${asset.symbol}`,
                                className: "flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white text-xs font-medium rounded-lg clay-button-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "CREATE STRATEGY"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assets/asset-view.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assets/asset-view.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 border-b border-[var(--border)] pb-2 overflow-x-auto no-scrollbar",
                children: asset.tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab),
                        className: `px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all clay-interactive ${activeTab === tab ? "bg-[var(--bg-surface)] text-[var(--accent)] clay-recessed-sm font-semibold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"}`,
                        children: tab
                    }, tab, false, {
                        fileName: "[project]/components/assets/asset-view.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/assets/asset-view.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clay-card overflow-hidden rounded-xl border border-[var(--border)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$quantora$2d$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuantoraChart"], {
                                    symbol: chartSymbol,
                                    showTrades: false,
                                    height: 380,
                                    defaultTimeframe: "1Y",
                                    defaultMode: "CANDLE",
                                    defaultIndicators: [
                                        "SMA20",
                                        "SMA50",
                                        "VOLUME"
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/assets/asset-view.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            assetKey === "bitcoin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Bitcoin Historical Regimes & Macro Cycle"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--positive)] font-mono",
                                                children: "Cycle 4 / Post-Halving Expansion"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Active Addresses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "1,084,200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--positive)] font-mono",
                                                        children: "+3.8% (30D)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Network Hashrate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "682 EH/s"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--positive)] font-mono",
                                                        children: "All-Time High"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Exchange Netflow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--positive)] font-bold mt-0.5",
                                                        children: "-14,280 BTC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-mono",
                                                        children: "Net Outflow (Accumulation)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "30D Realized Vol"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "41.8%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-mono",
                                                        children: "Below 3Y Mean (58%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            assetKey === "solana" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Solana High-Throughput Network Metrics"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--accent)] font-mono",
                                                children: "TPS 2,840"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Daily DEX Volume"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "$2.41B"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--positive)] font-mono",
                                                        children: "+12.4% vs Ethereum"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Active Validators"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "1,482"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-mono",
                                                        children: "Nakamoto Coeff: 21"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Fee Revenue (24H)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "$1.84M"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--positive)] font-mono",
                                                        children: "Priority fees 68%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Beta vs Bitcoin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "1.64"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--negative)] font-mono",
                                                        children: "High Elasticity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            assetKey === "gold" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Gold Sovereign Reserves & Macro Sensitivity"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--positive)] font-mono",
                                                children: "Central Bank Accumulation"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Gold ↔ BTC Correlation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "+0.18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-mono",
                                                        children: "Low Cross-Asset Coupling"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Gold ↔ Real 10Y Yield"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--negative)] font-bold mt-0.5",
                                                        children: "-0.68"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-mono",
                                                        children: "Classical inverse link"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Central Bank Demand"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "1,037 tonnes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--positive)] font-mono",
                                                        children: "Multi-Decade High"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Annualized Volatility"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "14.2%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--positive)] font-mono",
                                                        children: "Lowest in Basket"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            assetKey === "nvidia" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 space-y-3 clay-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "NVIDIA Institutional Fundamentals & AI Compute Cycle"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--positive)] font-mono",
                                                children: "Data Center Revenue +154% YoY"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 366,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Gross Margin (GAAP)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "75.1%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--positive)] font-mono",
                                                        children: "Blackwell Architecture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Forward P/E"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "34.8×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-mono",
                                                        children: "EPS Estimate $4.10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Operating Margin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "62.8%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--positive)] font-mono",
                                                        children: "Elite Capital Return"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Institutional Ownership"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-[var(--text-primary)] font-bold mt-0.5",
                                                        children: "67.4%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)] font-mono",
                                                        children: "Overweight Index Weight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assets/asset-view.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-4 space-y-3 clay-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider",
                                        children: [
                                            asset.name,
                                            " Market Structure"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between py-1.5 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-secondary)]",
                                                        children: "Trend Structure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-medium text-[var(--positive)]",
                                                        children: "Bullish Expansion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between py-1.5 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-secondary)]",
                                                        children: "Momentum (14D)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-medium text-[var(--text-primary)]",
                                                        children: "+8.42%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 407,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between py-1.5 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-secondary)]",
                                                        children: "Current Drawdown"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-medium text-[var(--negative)]",
                                                        children: "-4.12%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 411,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between py-1.5 border-b border-[var(--border)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-secondary)]",
                                                        children: "Beta vs SPX"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-medium text-[var(--text-primary)]",
                                                        children: assetKey === "bitcoin" ? "1.82" : assetKey === "nvidia" ? "1.74" : assetKey === "gold" ? "0.14" : "2.10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 415,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between py-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-secondary)]",
                                                        children: "Liquidity Profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-medium text-[var(--positive)]",
                                                        children: "Institutional Grade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-4 space-y-3 clay-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider",
                                        children: "Quantitative Risk Metrics"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Sharpe Ratio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm font-bold text-[var(--text-primary)]",
                                                        children: "1.64"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 435,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Sortino Ratio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm font-bold text-[var(--text-primary)]",
                                                        children: "2.18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 439,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "Max Historical DD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm font-bold text-[var(--negative)]",
                                                        children: "-34.2%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] clay-recessed-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-muted)]",
                                                        children: "VaR (95% 1D)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm font-bold text-[var(--text-primary)]",
                                                        children: "-2.8%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assets/asset-view.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 447,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-4 text-xs space-y-3 clay-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 font-medium text-[var(--text-primary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
                                                className: "w-4 h-4 text-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 457,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Research Pipeline Workflow"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assets/asset-view.tsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-[var(--text-muted)] leading-relaxed",
                                        children: [
                                            "Feed ",
                                            asset.name,
                                            " historical tick data directly into the Quantora algorithmic backtester, stress-test under 6 regime shifts, and verify zero look-ahead bias."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 460,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/app/research/backtest?asset=${asset.symbol}`,
                                        className: "block text-center py-2 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] border border-[var(--border)] text-[var(--text-primary)] font-medium transition-all clay-interactive",
                                        children: [
                                            "Launch Backtest with ",
                                            asset.symbol,
                                            " →"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assets/asset-view.tsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assets/asset-view.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assets/asset-view.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assets/asset-view.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/assets/asset-view.tsx",
        lineNumber: 133,
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
];

//# sourceMappingURL=_0wmz6dk._.js.map