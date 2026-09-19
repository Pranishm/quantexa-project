(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
(()=>{
    const e = new Error("Cannot find module '@/lib/auth/store'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/context/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$market$2d$core$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/market-core-3d.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function LoginPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { loginAsDemo } = useAuthStore();
    const { setRole, setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const [selectedRole, setSelectedRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("trader");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("trader.desk@quantora.io");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("••••••••••••");
    const [remember, setRemember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSessionLaunching, setActiveSessionLaunching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 1-Click Instant Split Account Session Dispatch (No credential questions asked)
    const launchSplitSession = (role)=>{
        setActiveSessionLaunching(role);
        setLoading(true);
        setTimeout(()=>{
            if (role === "trader") {
                loginAsDemo("trader");
                setRole("trader");
                setMode("TRADING");
                router.push("/app/trade/paper");
            } else {
                loginAsDemo("admin");
                setRole("admin");
                setMode("RESEARCH");
                router.push("/app/overview");
            }
        }, 280);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        setTimeout(()=>{
            if (selectedRole === "trader") {
                loginAsDemo("trader");
                setRole("trader");
                setMode("TRADING");
                router.push("/app/trade/paper");
            } else {
                loginAsDemo("admin");
                setRole("admin");
                setMode("RESEARCH");
                router.push("/app/overview");
            }
        }, 350);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)] flex items-center justify-center p-6 sm:p-12 font-sans selection:bg-[var(--accent)]/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7 space-y-6 flex flex-col justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-7 h-7 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_12px_var(--accent)]",
                                    children: "Q"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-lg tracking-tight text-[var(--text-primary)]",
                                    children: "QUANTORA"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]",
                                    children: [
                                        "Institutional Terminal Access,",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/login/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 45
                                        }, this),
                                        "Split by Operational Role."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm text-[var(--text-secondary)] max-w-md",
                                    children: "Direct 1-click station entry for Quantitative Traders and System Administrators with zero credential friction."
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-72 relative flex items-center justify-center pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$market$2d$core$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketCore3D"], {}, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5 space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clay-card p-6 sm:p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)] space-y-5 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold px-2 py-0.5 rounded-full clay-recessed border border-[var(--accent)]/30",
                                                children: "INSTANT SESSION ACCESS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-[var(--text-muted)]",
                                                children: "NO PASSWORDS REQUIRED"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-[var(--text-primary)] mt-1.5",
                                        children: "Choose Station Session"
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-secondary)] mt-0.5",
                                        children: "Instant split entry directly into your designated workspace."
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: loading,
                                        onClick: ()=>launchSplitSession("trader"),
                                        className: "w-full p-4 rounded-2xl clay-card bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[#00E599] hover:scale-[1.01] transition-all text-left flex items-center justify-between group cursor-pointer shadow-sm disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00E599] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/login/page.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/login/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold text-[var(--text-primary)] group-hover:text-[#00E599] transition-colors",
                                                                        children: "Quantitative Trader Desk"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/login/page.tsx",
                                                                        lineNumber: 122,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/15 text-[#00E599] font-bold",
                                                                        children: "$100K ACTIVE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/login/page.tsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/login/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--text-secondary)]",
                                                                children: "Paper execution, order book depth & live tickers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/login/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/login/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[#00E599] group-hover:border-[#00E599]/40 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/login/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: loading,
                                        onClick: ()=>launchSplitSession("admin"),
                                        className: "w-full p-4 rounded-2xl clay-card bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:scale-[1.01] transition-all text-left flex items-center justify-between group cursor-pointer shadow-sm disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-[var(--accent)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/login/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/login/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors",
                                                                        children: "System Administrator"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/login/page.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--accent)]/15 text-[var(--accent)] font-bold",
                                                                        children: "GOVERNANCE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/login/page.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/login/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--text-secondary)]",
                                                                children: "Telemetry logs, engine diagnostics & audits"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/login/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/login/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/login/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center justify-center pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-[var(--border)] w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-[var(--bg-surface)] px-3 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider shrink-0",
                                        children: "or sign in with credentials"
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 p-1 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setSelectedRole("trader");
                                                    setEmail("trader.desk@quantora.io");
                                                },
                                                className: `py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${selectedRole === "trader" ? "bg-[#00E599] text-[#05070C] shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                                                children: "Trader Role"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setSelectedRole("admin");
                                                    setEmail("admin.lead@quantora.io");
                                                },
                                                className: `py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${selectedRole === "admin" ? "bg-[var(--accent)] text-white shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
                                                children: "Admin Role"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-mono text-[var(--text-secondary)]",
                                                children: "Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                className: "w-full px-3.5 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-[11px] font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[var(--text-secondary)]",
                                                        children: "Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/login/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/forgot-password",
                                                        className: "text-[var(--accent)] hover:underline text-[10px]",
                                                        children: "Forgot?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/login/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                required: true,
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                className: "w-full px-3.5 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "w-full py-2.5 px-4 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button flex items-center justify-center gap-2 hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: loading ? "Authenticating Session..." : `Sign In as ${selectedRole === "trader" ? "Trader" : "Admin"} →`
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-xs text-[var(--text-secondary)] pt-1",
                                children: [
                                    "Need a new account?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signup",
                                        className: "text-[var(--accent)] font-semibold hover:underline",
                                        children: "Register station"
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-[var(--border)] flex items-center justify-center gap-4 text-[10px] font-mono text-[var(--text-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-3 h-3 text-[#00E599]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this),
                                            " Split Authentication Active"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                className: "w-3 h-3 text-[#00E599]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/login/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this),
                                            " 256-Bit TLS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/login/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/login/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "u5vXfrnnJAcbaHDQ9KordZDhRTA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        useAuthStore,
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/market-core-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarketCore3D",
    ()=>MarketCore3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// Canonical Bitcoin ₿ vector path (normalized to ~32x32 bounding box)
const BTC_SVG_PATH = "M 23.6 14.2 c -0.4 -2.5 -1.7 -3.7 -3.9 -4.2 l 0.8 -3.1 l -1.9 -0.5 l -0.8 3.1 c -0.5 -0.1 -1 -0.2 -1.5 -0.4 l 0.8 -3.2 l -1.9 -0.5 l -0.8 3.1 c -0.4 -0.1 -0.8 -0.2 -1.2 -0.3 l 0 -0.1 l -2.6 -0.6 l -0.5 2 l 1.4 0.3 c 0.8 0.2 0.9 0.7 0.9 1.1 l -0.9 3.6 c 0.1 0 0.1 0 0.2 0.1 l -0.2 0 l -1.3 5.1 c -0.1 0.3 -0.4 0.7 -1 0.5 l -1.4 -0.3 l -0.9 2.1 l 2.5 0.6 c 0.5 0.1 0.9 0.2 1.4 0.4 l -0.8 3.2 l 1.9 0.5 l 0.8 -3.1 c 0.5 0.1 1 0.3 1.5 0.4 l -0.8 3.1 l 1.9 0.5 l 0.8 -3.2 c 3.2 0.6 5.6 0.4 6.6 -2.5 c 0.8 -2.4 -0.04 -3.7 -1.8 -4.6 c 1.3 -0.3 2.2 -1.2 2.5 -3.1 z m -4.4 6.7 c -0.6 2.3 -4.5 1.1 -5.8 0.7 l 1 -4.2 c 1.3 0.3 5.4 1 4.8 3.5 z m 0.6 -6.8 c -0.5 2.1 -3.8 1 -4.8 0.8 l 0.9 -3.8 c 1.1 0.3 4.5 0.8 3.9 3 z";
/**
 * High-definition 1024x1024 canvas texture for Obverse (Bitcoin ₿) and Reverse (Cryptographic Proof)
 */ function makeBitcoinTexture(THREE, isReverse = false) {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const center = 512;
        ctx.clearRect(0, 0, 1024, 1024);
        // 1. Base metal 24K bullion radial gradient with specular luster
        const baseGradient = ctx.createRadialGradient(center - 130, center - 150, 40, center, center, 505);
        baseGradient.addColorStop(0, "#FFFDF0"); // Intense specular highlight
        baseGradient.addColorStop(0.18, "#FCD34D"); // Rich bright gold
        baseGradient.addColorStop(0.48, "#D97706"); // Classic bullion amber
        baseGradient.addColorStop(0.78, "#92400E"); // Burnished gold shadow
        baseGradient.addColorStop(1, "#451A03"); // Deep rim crease
        ctx.fillStyle = baseGradient;
        ctx.beginPath();
        ctx.arc(center, center, 500, 0, Math.PI * 2);
        ctx.fill();
        // 2. High-density Milled perimeter: 88 precision bullion knurled teeth
        ctx.save();
        const toothCount = 88;
        for(let i = 0; i < toothCount; i++){
            const angle = i * Math.PI * 2 / toothCount;
            const r1 = 452;
            const r2 = 496;
            const x1 = center + Math.cos(angle) * r1;
            const y1 = center + Math.sin(angle) * r1;
            const x2 = center + Math.cos(angle) * r2;
            const y2 = center + Math.sin(angle) * r2;
            ctx.strokeStyle = i % 2 === 0 ? "rgba(255, 250, 200, 0.85)" : "rgba(60, 25, 0, 0.9)";
            ctx.lineWidth = 11;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
        ctx.restore();
        // 3. Concentric polished bevel rings & groove
        ctx.save();
        ctx.lineWidth = 12;
        ctx.strokeStyle = "#FFE885";
        ctx.beginPath();
        ctx.arc(center, center, 448, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 7;
        ctx.strokeStyle = "#522200";
        ctx.beginPath();
        ctx.arc(center, center, 440, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 9;
        ctx.strokeStyle = "#F59E0B";
        ctx.beginPath();
        ctx.arc(center, center, 432, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        // 4. Inner Frosted Coin Plateau with Satin Shimmer
        const innerField = ctx.createRadialGradient(center, center, 30, center, center, 424);
        innerField.addColorStop(0, "#FBBF24");
        innerField.addColorStop(0.55, "#D97706");
        innerField.addColorStop(0.85, "#B45309");
        innerField.addColorStop(1, "#78350F");
        ctx.fillStyle = innerField;
        ctx.beginPath();
        ctx.arc(center, center, 426, 0, Math.PI * 2);
        ctx.fill();
        // 5. Delicate Mathematical Guilloché / Proof Coin Waves
        ctx.save();
        ctx.strokeStyle = "rgba(255, 245, 180, 0.12)";
        ctx.lineWidth = 1.8;
        for(let r = 70; r <= 390; r += 40){
            ctx.beginPath();
            for(let theta = 0; theta <= Math.PI * 2; theta += 0.05){
                const waveR = r + Math.sin(theta * 12) * 5;
                const x = center + Math.cos(theta) * waveR;
                const y = center + Math.sin(theta) * waveR;
                if (theta === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();
        // 6. Micro-inscriptions around the coin perimeter
        ctx.save();
        ctx.font = 'bold 21px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillStyle = "rgba(255, 243, 176, 0.88)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const textRing = isReverse ? "★ QUANTORA ALPHA ENGINE · CHANCELLOR ON BRINK OF SECOND BAILOUT · 2009 · 21M LIMIT ★ " : "★ BITCOIN · DIGITAL STORE OF VALUE · 1 TROY OZ .999 FINE GOLD · PEER TO PEER CASH ★ ";
        const chars = textRing.split("");
        const anglePerChar = Math.PI * 2 / chars.length;
        chars.forEach((char, i)=>{
            ctx.save();
            const a = i * anglePerChar - Math.PI / 2;
            ctx.translate(center + Math.cos(a) * 402, center + Math.sin(a) * 402);
            ctx.rotate(a + Math.PI / 2);
            ctx.fillText(char, 0, 0);
            ctx.restore();
        });
        ctx.restore();
        // 7. Center Glyph Rendering
        if (!isReverse) {
            // ──────────────── OBVERSE: AUTHENTIC 24K BITCOIN ₿ EMBLEM ────────────────
            ctx.save();
            ctx.strokeStyle = "rgba(255, 220, 120, 0.2)";
            ctx.lineWidth = 2.5;
            const circuitAngles = [
                0,
                0.45,
                0.9,
                1.4,
                1.9,
                2.35,
                2.8,
                3.3,
                3.8,
                4.3,
                4.75,
                5.2,
                5.7,
                6.1
            ];
            circuitAngles.forEach((ang)=>{
                const x1 = center + Math.cos(ang) * 160;
                const y1 = center + Math.sin(ang) * 160;
                const x2 = center + Math.cos(ang) * 360;
                const y2 = center + Math.sin(ang) * 360;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.fillStyle = "rgba(255, 240, 160, 0.4)";
                ctx.beginPath();
                ctx.arc(x2, y2, 4, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();
            const btcPath = new Path2D(BTC_SVG_PATH);
            const btcScale = 25.5;
            const btcOffsetX = 15.5;
            const btcOffsetY = 16.0;
            // Deep 3D Shadow
            ctx.save();
            ctx.translate(center + 14, center + 20);
            ctx.scale(btcScale, btcScale);
            ctx.translate(-btcOffsetX, -btcOffsetY);
            ctx.fillStyle = "rgba(28, 10, 0, 0.9)";
            ctx.filter = "blur(10px)";
            ctx.fill(btcPath);
            ctx.restore();
            // Outer Bevel Rim
            ctx.save();
            ctx.translate(center, center);
            ctx.scale(btcScale, btcScale);
            ctx.translate(-btcOffsetX, -btcOffsetY);
            ctx.lineWidth = 2.2;
            ctx.strokeStyle = "#78350F";
            ctx.stroke(btcPath);
            ctx.restore();
            // Main Face: 24K Bullion Metallic Linear Gradient
            const goldFace = ctx.createLinearGradient(center - 160, center - 240, center + 160, center + 240);
            goldFace.addColorStop(0, "#FFFDF0");
            goldFace.addColorStop(0.25, "#FDE68A");
            goldFace.addColorStop(0.65, "#F59E0B");
            goldFace.addColorStop(0.92, "#B45309");
            goldFace.addColorStop(1, "#78350F");
            ctx.save();
            ctx.translate(center, center);
            ctx.scale(btcScale, btcScale);
            ctx.translate(-btcOffsetX, -btcOffsetY);
            ctx.fillStyle = goldFace;
            ctx.fill(btcPath);
            // Specular Highlight Rim
            ctx.lineWidth = 1.0;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
            ctx.stroke(btcPath);
            ctx.restore();
        } else {
            // ──────────────── REVERSE: CRYPTOGRAPHIC PROOF MATRIX ────────────────
            ctx.save();
            ctx.translate(center, center);
            ctx.strokeStyle = "rgba(255, 240, 160, 0.18)";
            ctx.lineWidth = 3;
            for(let i = 0; i < 4; i++){
                ctx.rotate(Math.PI / 4);
                ctx.strokeRect(-170, -170, 340, 340);
            }
            ctx.restore();
            ctx.save();
            ctx.strokeStyle = "rgba(255, 230, 130, 0.35)";
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(center, center, 190, 0, Math.PI * 2);
            ctx.stroke();
            ctx.lineWidth = 1.5;
            ctx.setLineDash([
                8,
                8
            ]);
            ctx.beginPath();
            ctx.arc(center, center, 230, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();
            ctx.save();
            ctx.translate(center, center);
            ctx.shadowColor = "rgba(30, 12, 0, 0.9)";
            ctx.shadowBlur = 28;
            ctx.shadowOffsetX = 12;
            ctx.shadowOffsetY = 16;
            const sealGrad = ctx.createLinearGradient(-100, -140, 100, 140);
            sealGrad.addColorStop(0, "#FFFDF0");
            sealGrad.addColorStop(0.3, "#FCD34D");
            sealGrad.addColorStop(0.7, "#D97706");
            sealGrad.addColorStop(1, "#78350F");
            ctx.fillStyle = sealGrad;
            ctx.beginPath();
            ctx.moveTo(0, -140);
            ctx.lineTo(130, 0);
            ctx.lineTo(0, 140);
            ctx.lineTo(-130, 0);
            ctx.closePath();
            ctx.fill();
            ctx.shadowColor = "transparent";
            ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
            ctx.lineWidth = 8;
            ctx.stroke();
            ctx.fillStyle = "#451A03";
            ctx.font = 'bold 26px "JetBrains Mono", monospace';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("GENESIS", 0, -32);
            ctx.font = '900 38px "Inter", sans-serif';
            ctx.fillStyle = "#1E0900";
            ctx.fillText("21M", 0, 10);
            ctx.font = 'bold 19px "JetBrains Mono", monospace';
            ctx.fillStyle = "#5E2502";
            ctx.fillText("BLOCK 0", 0, 48);
            ctx.restore();
        }
        // 8. Dynamic Specular Sheen
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        const sheen = ctx.createLinearGradient(90, 50, 930, 970);
        sheen.addColorStop(0, "rgba(255, 255, 255, 0.55)");
        sheen.addColorStop(0.24, "rgba(255, 255, 255, 0.08)");
        sheen.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        sheen.addColorStop(0.75, "rgba(255, 255, 255, 0.09)");
        sheen.addColorStop(1, "rgba(255, 255, 255, 0.42)");
        ctx.fillStyle = sheen;
        ctx.beginPath();
        ctx.arc(center, center, 492, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.center.set(0.5, 0.5);
    texture.anisotropy = 16;
    texture.needsUpdate = true;
    return texture;
}
/**
 * Procedural Reeded Edge Texture (Milled Fluting along the coin's perimeter)
 */ function makeReededEdgeTexture(THREE) {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const stripes = 128;
        const stripeWidth = canvas.width / stripes;
        for(let i = 0; i < stripes; i++){
            const grad = ctx.createLinearGradient(i * stripeWidth, 0, (i + 1) * stripeWidth, 0);
            grad.addColorStop(0, "#451A03");
            grad.addColorStop(0.25, "#B45309");
            grad.addColorStop(0.5, "#FCD34D");
            grad.addColorStop(0.75, "#D97706");
            grad.addColorStop(1, "#451A03");
            ctx.fillStyle = grad;
            ctx.fillRect(i * stripeWidth, 0, stripeWidth, canvas.height);
        }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
}
function fitCamera(camera, width, height) {
    const aspect = width / (height || width);
    camera.aspect = aspect;
    if (aspect < 1) {
        camera.position.set(0, 0, 6.8);
        camera.fov = 46;
    } else if (width < 768) {
        camera.position.set(0, 0, 5.8);
        camera.fov = 40;
    } else {
        camera.position.set(0, 0, 5.2);
        camera.fov = 36;
    }
    camera.updateProjectionMatrix();
}
function MarketCore3D({ className }) {
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketCore3D.useEffect": ()=>{
            let disposed = false;
            const setup = {
                "MarketCore3D.useEffect.setup": async ()=>{
                    const THREE = await __turbopack_context__.A("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript, async loader)");
                    if (disposed || !mountRef.current) return;
                    const mount = mountRef.current;
                    const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
                    const renderer = new THREE.WebGLRenderer({
                        alpha: true,
                        antialias: true,
                        powerPreference: "high-performance"
                    });
                    renderer.setClearColor(0x000000, 0);
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                    renderer.outputColorSpace = THREE.SRGBColorSpace;
                    renderer.toneMapping = THREE.ACESFilmicToneMapping;
                    renderer.toneMappingExposure = 1.18;
                    renderer.domElement.className = "h-full w-full";
                    mount.appendChild(renderer.domElement);
                    const root = new THREE.Group();
                    root.rotation.set(-0.04, -0.15, 0.02);
                    scene.add(root);
                    // 1. FLOATING QUANT HORIZON (Candlestick Array strictly BEHIND the coin)
                    const chartBackgroundGroup = new THREE.Group();
                    chartBackgroundGroup.position.set(0, -0.15, -1.35);
                    root.add(chartBackgroundGroup);
                    const candleData = [
                        {
                            open: -0.65,
                            close: -0.28,
                            high: -0.12,
                            low: -0.78,
                            x: -2.4,
                            green: true
                        },
                        {
                            open: -0.28,
                            close: -0.52,
                            high: -0.1,
                            low: -0.62,
                            x: -1.8,
                            green: false
                        },
                        {
                            open: -0.52,
                            close: 0.12,
                            high: 0.32,
                            low: -0.6,
                            x: -1.2,
                            green: true
                        },
                        {
                            open: 0.12,
                            close: 0.42,
                            high: 0.62,
                            low: 0.02,
                            x: -0.6,
                            green: true
                        },
                        {
                            open: 0.42,
                            close: 0.28,
                            high: 0.58,
                            low: 0.12,
                            x: 0.0,
                            green: false
                        },
                        {
                            open: 0.28,
                            close: 0.82,
                            high: 1.02,
                            low: 0.18,
                            x: 0.6,
                            green: true
                        },
                        {
                            open: 0.82,
                            close: 1.22,
                            high: 1.42,
                            low: 0.72,
                            x: 1.2,
                            green: true
                        },
                        {
                            open: 1.22,
                            close: 1.02,
                            high: 1.32,
                            low: 0.88,
                            x: 1.8,
                            green: false
                        },
                        {
                            open: 1.02,
                            close: 1.62,
                            high: 1.82,
                            low: 0.92,
                            x: 2.4,
                            green: true
                        }
                    ];
                    const greenGlassMat = new THREE.MeshStandardMaterial({
                        color: "#00E599",
                        emissive: new THREE.Color("#006633"),
                        emissiveIntensity: 0.7,
                        roughness: 0.2,
                        metalness: 0.4,
                        transparent: true,
                        opacity: 0.78
                    });
                    const redGlassMat = new THREE.MeshStandardMaterial({
                        color: "#FF5353",
                        emissive: new THREE.Color("#771111"),
                        emissiveIntensity: 0.7,
                        roughness: 0.2,
                        metalness: 0.4,
                        transparent: true,
                        opacity: 0.78
                    });
                    candleData.forEach({
                        "MarketCore3D.useEffect.setup": (cd)=>{
                            const mat = cd.green ? greenGlassMat : redGlassMat;
                            const bodyHeight = Math.max(0.14, Math.abs(cd.close - cd.open));
                            const bodyY = (cd.open + cd.close) / 2;
                            const candleBody = new THREE.Mesh(new THREE.BoxGeometry(0.18, bodyHeight, 0.06), mat);
                            candleBody.position.set(cd.x, bodyY, 0);
                            chartBackgroundGroup.add(candleBody);
                            const wickHeight = Math.max(0.24, cd.high - cd.low);
                            const wickY = (cd.high + cd.low) / 2;
                            const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, wickHeight, 8), mat);
                            wick.position.set(cd.x, wickY, 0);
                            chartBackgroundGroup.add(wick);
                        }
                    }["MarketCore3D.useEffect.setup"]);
                    const curvePoints = candleData.map({
                        "MarketCore3D.useEffect.setup.curvePoints": (cd)=>new THREE.Vector3(cd.x, cd.close, 0.05)
                    }["MarketCore3D.useEffect.setup.curvePoints"]);
                    const trendCurve = new THREE.CatmullRomCurve3(curvePoints);
                    const tubeGeo = new THREE.TubeGeometry(trendCurve, 48, 0.018, 8, false);
                    const tubeMat = new THREE.MeshBasicMaterial({
                        color: "#00E599",
                        transparent: true,
                        opacity: 0.85
                    });
                    chartBackgroundGroup.add(new THREE.Mesh(tubeGeo, tubeMat));
                    // 2. THE MASTER 24K GOLD BITCOIN BULLION COIN
                    const coin = new THREE.Group();
                    coin.position.set(0, 0, 0);
                    root.add(coin);
                    const frontTexture = makeBitcoinTexture(THREE, false);
                    frontTexture.center.set(0.5, 0.5);
                    frontTexture.rotation = Math.PI / 2;
                    const backTexture = makeBitcoinTexture(THREE, true);
                    backTexture.center.set(0.5, 0.5);
                    backTexture.rotation = -Math.PI / 2;
                    const reededEdgeTexture = makeReededEdgeTexture(THREE);
                    const faceMaterialFront = new THREE.MeshStandardMaterial({
                        map: frontTexture,
                        metalness: 0.94,
                        roughness: 0.22,
                        emissive: new THREE.Color("#421d00"),
                        emissiveIntensity: 0.14
                    });
                    const faceMaterialBack = new THREE.MeshStandardMaterial({
                        map: backTexture,
                        metalness: 0.94,
                        roughness: 0.22,
                        emissive: new THREE.Color("#421d00"),
                        emissiveIntensity: 0.14
                    });
                    const sideMilledMaterial = new THREE.MeshStandardMaterial({
                        color: "#D97706",
                        bumpMap: reededEdgeTexture,
                        bumpScale: 0.08,
                        metalness: 0.92,
                        roughness: 0.24,
                        emissive: new THREE.Color("#552200"),
                        emissiveIntensity: 0.1
                    });
                    const rimGoldMaterial = new THREE.MeshStandardMaterial({
                        color: "#FDE68A",
                        metalness: 0.96,
                        roughness: 0.12,
                        emissive: new THREE.Color("#B45309"),
                        emissiveIntensity: 0.15
                    });
                    // Coin body cylinder: Radius 1.55, depth 0.32
                    // Group 0: side, Group 1: back (-Z), Group 2: front (+Z)
                    const coinMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.55, 0.32, 128, 1, false), [
                        sideMilledMaterial,
                        faceMaterialBack,
                        faceMaterialFront
                    ]);
                    coinMesh.geometry.rotateX(Math.PI / 2);
                    coinMesh.castShadow = true;
                    coinMesh.receiveShadow = true;
                    coin.add(coinMesh);
                    const frontBezel = new THREE.Mesh(new THREE.TorusGeometry(1.54, 0.042, 24, 128), rimGoldMaterial);
                    frontBezel.position.z = 0.165;
                    coin.add(frontBezel);
                    const rearBezel = new THREE.Mesh(new THREE.TorusGeometry(1.54, 0.042, 24, 128), rimGoldMaterial);
                    rearBezel.position.z = -0.165;
                    coin.add(rearBezel);
                    // 3. UNOBSTRUCTED GYROSCOPIC ORBITS
                    const orbitGroup = new THREE.Group();
                    root.add(orbitGroup);
                    const orbitRingA = new THREE.Mesh(new THREE.TorusGeometry(2.28, 0.012, 16, 128), new THREE.MeshBasicMaterial({
                        color: "#00E599",
                        transparent: true,
                        opacity: 0.5
                    }));
                    orbitRingA.rotation.x = Math.PI / 2.7;
                    orbitRingA.rotation.y = 0.2;
                    orbitGroup.add(orbitRingA);
                    const orbitRingB = new THREE.Mesh(new THREE.TorusGeometry(2.48, 0.01, 16, 128), new THREE.MeshBasicMaterial({
                        color: "#00C2FF",
                        transparent: true,
                        opacity: 0.35
                    }));
                    orbitRingB.rotation.x = -Math.PI / 3.4;
                    orbitRingB.rotation.z = 0.4;
                    orbitGroup.add(orbitRingB);
                    const satelliteMat = new THREE.MeshBasicMaterial({
                        color: "#FFFFFF"
                    });
                    const satGlowMat = new THREE.MeshBasicMaterial({
                        color: "#00E599",
                        transparent: true,
                        opacity: 0.4
                    });
                    const satA = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), satelliteMat);
                    const satAGlow = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), satGlowMat);
                    satA.add(satAGlow);
                    root.add(satA);
                    const satB = new THREE.Mesh(new THREE.SphereGeometry(0.04, 16, 16), satelliteMat);
                    const satBGlow = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), new THREE.MeshBasicMaterial({
                        color: "#00C2FF",
                        transparent: true,
                        opacity: 0.4
                    }));
                    satB.add(satBGlow);
                    root.add(satB);
                    // 4. FLOATING DATA DUST
                    const dustCount = 45;
                    const dustPositions = new Float32Array(dustCount * 3);
                    for(let i = 0; i < dustCount; i++){
                        dustPositions[i * 3] = (Math.random() - 0.5) * 6.5;
                        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 5.0;
                        dustPositions[i * 3 + 2] = -1.6 + Math.random() * 2.2;
                    }
                    const dustGeo = new THREE.BufferGeometry();
                    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
                    const dustMat = new THREE.PointsMaterial({
                        color: "#FDE68A",
                        size: 0.035,
                        transparent: true,
                        opacity: 0.5,
                        depthWrite: false
                    });
                    const dustPoints = new THREE.Points(dustGeo, dustMat);
                    root.add(dustPoints);
                    // 5. CINEMATIC 4-POINT LIGHTING
                    scene.add(new THREE.AmbientLight("#FFECC0", 1.4));
                    const keyLight = new THREE.DirectionalLight("#FFF7E0", 3.8);
                    keyLight.position.set(-2.6, 3.2, 3.8);
                    scene.add(keyLight);
                    const emeraldRim = new THREE.PointLight("#00E599", 3.0, 9);
                    emeraldRim.position.set(3.0, -1.5, 2.0);
                    scene.add(emeraldRim);
                    const blueFill = new THREE.PointLight("#00C2FF", 2.2, 8);
                    blueFill.position.set(-2.8, -2.0, 2.2);
                    scene.add(blueFill);
                    const backRim = new THREE.DirectionalLight("#FCD34D", 2.4);
                    backRim.position.set(1.8, 1.8, -3.2);
                    scene.add(backRim);
                    // 6. ANIMATION & MOUSE PARALLAX
                    const mouse = {
                        x: 0,
                        y: 0,
                        tx: 0,
                        ty: 0
                    };
                    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    const resize = {
                        "MarketCore3D.useEffect.setup.resize": ()=>{
                            const { width, height } = mount.getBoundingClientRect();
                            const safeWidth = Math.max(1, width);
                            const safeHeight = Math.max(1, height);
                            renderer.setSize(safeWidth, safeHeight, false);
                            fitCamera(camera, safeWidth, safeHeight);
                        }
                    }["MarketCore3D.useEffect.setup.resize"];
                    const handleMouseMove = {
                        "MarketCore3D.useEffect.setup.handleMouseMove": (event)=>{
                            const rect = mount.getBoundingClientRect();
                            mouse.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
                            mouse.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
                        }
                    }["MarketCore3D.useEffect.setup.handleMouseMove"];
                    const observer = new ResizeObserver(resize);
                    observer.observe(mount);
                    window.addEventListener("mousemove", handleMouseMove);
                    resize();
                    const startTime = performance.now();
                    const render = {
                        "MarketCore3D.useEffect.setup.render": ()=>{
                            const time = (performance.now() - startTime) / 1000;
                            mouse.x += (mouse.tx - mouse.x) * 0.06;
                            mouse.y += (mouse.ty - mouse.y) * 0.06;
                            if (!reduceMotion) {
                                root.rotation.y = -0.15 + mouse.x * 0.18;
                                root.rotation.x = -0.05 - mouse.y * 0.14;
                                coin.rotation.y = time * 0.55;
                                coin.position.y = Math.sin(time * 1.4) * 0.09;
                                coin.rotation.z = Math.sin(time * 0.8) * 0.035;
                                chartBackgroundGroup.position.y = -0.15 + Math.sin(time * 1.1) * 0.06;
                                chartBackgroundGroup.rotation.y = Math.sin(time * 0.4) * 0.04;
                                orbitGroup.rotation.y = -time * 0.18;
                                orbitGroup.rotation.z = Math.sin(time * 0.5) * 0.05;
                                const satAngleA = time * 0.9;
                                satA.position.set(Math.cos(satAngleA) * 2.28, Math.sin(satAngleA) * 0.7 + Math.sin(time * 1.4) * 0.05, Math.sin(satAngleA) * 1.4);
                                const satAngleB = -time * 0.75 + 1.8;
                                satB.position.set(Math.cos(satAngleB) * 2.48, -Math.sin(satAngleB) * 0.9, Math.sin(satAngleB) * 1.6);
                                dustPoints.rotation.y = time * 0.02;
                            } else {
                                root.rotation.y = -0.15;
                                root.rotation.x = -0.04;
                            }
                            renderer.render(scene, camera);
                            handlesRef.current.frame = requestAnimationFrame(render);
                        }
                    }["MarketCore3D.useEffect.setup.render"];
                    handlesRef.current = {
                        frame: requestAnimationFrame(render),
                        renderer,
                        cleanup: ({
                            "MarketCore3D.useEffect.setup": ()=>{
                                observer.disconnect();
                                window.removeEventListener("mousemove", handleMouseMove);
                                frontTexture.dispose();
                                backTexture.dispose();
                                reededEdgeTexture.dispose();
                                scene.traverse({
                                    "MarketCore3D.useEffect.setup": (object)=>{
                                        if ("geometry" in object && object.geometry) {
                                            object.geometry.dispose();
                                        }
                                        if ("material" in object && object.material) {
                                            const material = object.material;
                                            if (Array.isArray(material)) {
                                                material.forEach({
                                                    "MarketCore3D.useEffect.setup": (item)=>item.dispose()
                                                }["MarketCore3D.useEffect.setup"]);
                                            } else {
                                                material.dispose();
                                            }
                                        }
                                    }
                                }["MarketCore3D.useEffect.setup"]);
                                renderer.dispose();
                                renderer.domElement.remove();
                            }
                        })["MarketCore3D.useEffect.setup"]
                    };
                }
            }["MarketCore3D.useEffect.setup"];
            void setup();
            return ({
                "MarketCore3D.useEffect": ()=>{
                    disposed = true;
                    if (handlesRef.current) {
                        cancelAnimationFrame(handlesRef.current.frame);
                        handlesRef.current.cleanup();
                        handlesRef.current = null;
                    }
                }
            })["MarketCore3D.useEffect"];
        }
    }["MarketCore3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className || "relative h-full min-h-[320px] w-full select-none overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mountRef,
                "aria-label": "3D Gold Bitcoin Bullion Coin with Cryptographic Proof and Real-Time Market Horizon",
                role: "img",
                className: "absolute inset-0 cursor-grab active:cursor-grabbing"
            }, void 0, false, {
                fileName: "[project]/components/landing/market-core-3d.tsx",
                lineNumber: 700,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-[12%] bottom-3 h-14 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.28),rgba(0,229,153,0.1)_45%,transparent_75%)] blur-xl"
            }, void 0, false, {
                fileName: "[project]/components/landing/market-core-3d.tsx",
                lineNumber: 706,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/market-core-3d.tsx",
        lineNumber: 699,
        columnNumber: 5
    }, this);
}
_s(MarketCore3D, "jJ9sgIU3k+C6gs3r9pyr7pHQPsQ=");
_c = MarketCore3D;
var _c;
__turbopack_context__.k.register(_c, "MarketCore3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>ChevronRight
]);
/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "chevron-right",
    size: 24,
    node: [
        [
            "path",
            {
                d: "m9 18 6-6-6-6",
                key: "mthhwq"
            }
        ]
    ]
};
__iconData.node;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Lock
]);
/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "lock",
    size: 24,
    node: [
        [
            "rect",
            {
                width: "18",
                height: "11",
                x: "3",
                y: "11",
                rx: "2",
                ry: "2",
                key: "1w4ew1"
            }
        ],
        [
            "path",
            {
                d: "M7 11V7a5 5 0 0 1 10 0v4",
                key: "fwvmzm"
            }
        ]
    ]
};
__iconData.node;
const Lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Shield
]);
/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "shield",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }
        ]
    ]
};
__iconData.node;
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Wallet
]);
/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "wallet",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
                key: "18etb6"
            }
        ],
        [
            "path",
            {
                d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
                key: "xoc0q4"
            }
        ]
    ]
};
__iconData.node;
const Wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0t8n3cx._.js.map