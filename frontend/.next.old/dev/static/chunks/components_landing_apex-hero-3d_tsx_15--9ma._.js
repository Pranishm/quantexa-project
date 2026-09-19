(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/landing/apex-hero-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApexHero3D",
    ()=>ApexHero3D,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// ---------------------------------------------------------------------------
// High-res procedural ₿ face texture
// ---------------------------------------------------------------------------
function createBitcoinFaceTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const center = 512;
        ctx.clearRect(0, 0, 1024, 1024);
        // Deep metallic brushed radial gradient
        const grad = ctx.createRadialGradient(center - 120, center - 140, 60, center, center, 500);
        grad.addColorStop(0, "#FFE894");
        grad.addColorStop(0.35, "#D9A441");
        grad.addColorStop(0.7, "#A6741F");
        grad.addColorStop(1, "#5E3E07");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(center, center, 490, 0, Math.PI * 2);
        ctx.fill();
        // Outer rim & milling
        ctx.lineWidth = 16;
        ctx.strokeStyle = "#FFF2A8";
        ctx.stroke();
        ctx.lineWidth = 6;
        ctx.strokeStyle = "rgba(255, 235, 140, 0.4)";
        ctx.beginPath();
        ctx.arc(center, center, 450, 0, Math.PI * 2);
        ctx.stroke();
        // Inset ₿ Symbol
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.65)";
        ctx.shadowBlur = 24;
        ctx.shadowOffsetX = 12;
        ctx.shadowOffsetY = 16;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = '900 520px "General Sans", "Inter", "Arial", sans-serif';
        ctx.fillStyle = "#FFDF78";
        ctx.fillText("₿", center, center + 10);
        ctx.restore();
        // Subtle edge highlight
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        const shine = ctx.createLinearGradient(100, 100, 900, 900);
        shine.addColorStop(0, "rgba(255,255,255,0.45)");
        shine.addColorStop(0.5, "rgba(255,255,255,0.0)");
        shine.addColorStop(1, "rgba(255,255,255,0.2)");
        ctx.fillStyle = shine;
        ctx.beginPath();
        ctx.arc(center, center, 485, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    texture.anisotropy = 8;
    return texture;
}
function FloatingCandlestickChart3D({ isMobile = false, isDark = true }) {
    _s();
    const chartGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const liveCandleBodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const liveCandleWickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Generate 22 realistic institutional price bars
    const candles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingCandlestickChart3D.useMemo[candles]": ()=>{
            const data = [];
            let price = -0.2;
            const count = 22;
            const steps = [
                -0.05,
                0.12,
                0.08,
                -0.04,
                0.15,
                0.1,
                -0.06,
                0.22,
                0.18,
                -0.08,
                0.14,
                0.25,
                -0.05,
                0.19,
                0.31,
                -0.12,
                0.28,
                0.15,
                -0.07,
                0.35,
                0.18,
                0.24
            ];
            for(let i = 0; i < count; i++){
                const x = (i - count / 2) * 0.34;
                const step = steps[i] || 0.1;
                const open = price;
                price += step;
                const close = price;
                const high = Math.max(open, close) + Math.abs(step) * 0.55 + 0.05;
                const low = Math.min(open, close) - Math.abs(step) * 0.45 - 0.04;
                const volume = 0.2 + Math.abs(step) * 1.5;
                data.push({
                    x,
                    open,
                    high,
                    low,
                    close,
                    volume
                });
            }
            return data;
        }
    }["FloatingCandlestickChart3D.useMemo[candles]"], []);
    // Compute trend line points
    const linePoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingCandlestickChart3D.useMemo[linePoints]": ()=>{
            return candles.map({
                "FloatingCandlestickChart3D.useMemo[linePoints]": (c)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](c.x, (c.open + c.close) / 2, 0.02)
            }["FloatingCandlestickChart3D.useMemo[linePoints]"]);
        }
    }["FloatingCandlestickChart3D.useMemo[linePoints]"], [
        candles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FloatingCandlestickChart3D.useFrame": (state)=>{
            if (!chartGroupRef.current) return;
            const t = state.clock.elapsedTime;
            // Gentle floating 3D breathing wave
            const baseOffsetY = isMobile ? -0.2 : -0.4;
            chartGroupRef.current.position.y = baseOffsetY + Math.sin(t * 0.5 + 1.2) * 0.07;
            // Live micro-tick oscillation on the latest candle
            if (liveCandleBodyRef.current && liveCandleWickRef.current) {
                const pulse = Math.sin(t * 3.6) * 0.09;
                liveCandleBodyRef.current.scale.set(1, Math.max(0.4, 1 + pulse), 1);
                liveCandleWickRef.current.scale.set(1, Math.max(0.5, 1 + pulse * 0.8), 1);
            }
        }
    }["FloatingCandlestickChart3D.useFrame"]);
    const posX = isMobile ? 0 : 1.9;
    const posY = isMobile ? -0.2 : -0.4;
    const greenColor = "#00E599";
    const redColor = "#FF3366";
    const cyanColor = "#00C2FF";
    const lineObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingCandlestickChart3D.useMemo[lineObject]": ()=>{
            const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(linePoints);
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: cyanColor,
                linewidth: 2,
                transparent: true,
                opacity: isDark ? 0.9 : 0.7
            });
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](geom, mat);
        }
    }["FloatingCandlestickChart3D.useMemo[lineObject]"], [
        linePoints,
        isDark,
        cyanColor
    ]);
    const latestPoint = linePoints[linePoints.length - 1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: chartGroupRef,
        position: [
            posX,
            posY,
            -1.0
        ],
        children: [
            [
                -0.8,
                0,
                0.8
            ].map((lvl, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        lvl,
                        -0.05
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                8.5,
                                0.008,
                                0.008
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/landing/apex-hero-3d.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: isDark ? "#38BDF8" : "#94A3B8",
                            transparent: true,
                            opacity: isDark ? 0.2 : 0.3
                        }, void 0, false, {
                            fileName: "[project]/components/landing/apex-hero-3d.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, idx, true, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: lineObject
            }, void 0, false, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            latestPoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    latestPoint.x,
                    latestPoint.y,
                    0.04
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.05,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#00E599"
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            candles.map((c, idx)=>{
                const isUp = c.close >= c.open;
                const color = isUp ? greenColor : redColor;
                const bodyH = Math.max(0.06, Math.abs(c.close - c.open));
                const bodyY = (c.open + c.close) / 2;
                const wickH = Math.max(0.12, c.high - c.low);
                const wickY = (c.high + c.low) / 2;
                const isLatest = idx === candles.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        c.x,
                        0,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            ref: isLatest ? liveCandleWickRef : undefined,
                            position: [
                                0,
                                wickY,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                    args: [
                                        0.015,
                                        0.015,
                                        wickH,
                                        8
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: color,
                                    emissive: color,
                                    emissiveIntensity: isDark ? 0.65 : 0.35,
                                    roughness: 0.2
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landing/apex-hero-3d.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            ref: isLatest ? liveCandleBodyRef : undefined,
                            position: [
                                0,
                                bodyY,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                    args: [
                                        0.22,
                                        bodyH,
                                        0.09
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: color,
                                    emissive: color,
                                    emissiveIntensity: isDark ? 0.45 : 0.25,
                                    roughness: 0.25,
                                    metalness: 0.2
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landing/apex-hero-3d.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                -1.2 + c.volume * 0.35 / 2,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                    args: [
                                        0.2,
                                        c.volume * 0.35,
                                        0.06
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: color,
                                    transparent: true,
                                    opacity: isDark ? 0.4 : 0.45,
                                    roughness: 0.4
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landing/apex-hero-3d.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this)
                    ]
                }, idx, true, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/apex-hero-3d.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(FloatingCandlestickChart3D, "9GjeStoNPt1uBcUrMQ+kCu+xeK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = FloatingCandlestickChart3D;
// ---------------------------------------------------------------------------
// Interactive Bitcoin Mesh with Drag-to-Spin & Bobbing
// ---------------------------------------------------------------------------
function BitcoinCoin({ isMobile = false, isDark = true }) {
    _s1();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const haloRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const velocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const faceTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BitcoinCoin.useMemo[faceTexture]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return createBitcoinFaceTexture();
        }
    }["BitcoinCoin.useMemo[faceTexture]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "BitcoinCoin.useFrame": (state, delta)=>{
            if (!groupRef.current) return;
            const t = state.clock.elapsedTime;
            // Ambient continuous spin + drag-spin inertia decay
            groupRef.current.rotation.y += delta * 0.42 + velocityRef.current;
            velocityRef.current *= 0.95; // Smooth natural friction
            // Vertical bobbing harmonic motion
            const baseOffsetY = isMobile ? -0.2 : -0.4;
            groupRef.current.position.y = baseOffsetY + Math.sin(t * 0.7) * 0.09;
            // 3D Gyroscopic tilt towards cursor pointer
            const targetTiltX = -state.pointer.y * 0.22;
            const targetTiltZ = state.pointer.x * 0.14;
            groupRef.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.x, targetTiltX, 0.05);
            groupRef.current.rotation.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.z, targetTiltZ, 0.05);
            // Orbital Halo rotation in reverse direction
            if (haloRef.current) {
                haloRef.current.rotation.z = -t * 0.35;
                haloRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.15;
            }
            // Orbiting specular point light creating glints across coin face
            if (lightRef.current) {
                lightRef.current.position.x = Math.cos(t * 1.8) * 2.6;
                lightRef.current.position.y = Math.sin(t * 1.4) * 1.6;
                lightRef.current.position.z = Math.sin(t * 1.8) * 2.6;
            }
        }
    }["BitcoinCoin.useFrame"]);
    const handlePointerDown = (e)=>{
        e.stopPropagation();
        isDraggingRef.current = true;
        lastXRef.current = e.clientX;
        e.target.setPointerCapture?.(e.pointerId);
    };
    const handlePointerMove = (e)=>{
        if (!isDraggingRef.current) return;
        const dx = e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;
        velocityRef.current += dx * 0.005;
    };
    const handlePointerUp = (e)=>{
        isDraggingRef.current = false;
        e.target.releasePointerCapture?.(e.pointerId);
    };
    const posX = isMobile ? 0 : 1.9;
    const posY = isMobile ? -0.2 : -0.4;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: [
            posX,
            posY,
            0
        ],
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        onPointerLeave: handlePointerUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: lightRef,
                color: isDark ? "#FFE894" : "#FFDF78",
                intensity: isDark ? 3.8 : 2.2,
                distance: 7
            }, void 0, false, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: haloRef,
                rotation: [
                    Math.PI / 2 + 0.15,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                        args: [
                            2.08,
                            0.016,
                            16,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: isDark ? "#FFD700" : "#D4AF37",
                        emissive: isDark ? "#FFB800" : "#B8860B",
                        emissiveIntensity: isDark ? 0.75 : 0.35,
                        roughness: 0.18,
                        metalness: 0.92
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    Math.PI / 2,
                    0,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            1.6,
                            1.6,
                            0.18,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: isDark ? "#D9A441" : "#E2AC48",
                        metalness: isDark ? 0.94 : 0.88,
                        roughness: isDark ? 0.2 : 0.24,
                        envMapIntensity: isDark ? 1.6 : 1.3,
                        clearcoat: 0.4,
                        clearcoatRoughness: 0.12
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            faceTexture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    0.091
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            1.56,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        map: faceTexture,
                        transparent: true,
                        polygonOffset: true,
                        polygonOffsetFactor: -1
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 372,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 370,
                columnNumber: 9
            }, this),
            faceTexture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    -0.091
                ],
                rotation: [
                    0,
                    Math.PI,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            1.56,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        map: faceTexture,
                        transparent: true,
                        polygonOffset: true,
                        polygonOffsetFactor: -1
                    }, void 0, false, {
                        fileName: "[project]/components/landing/apex-hero-3d.tsx",
                        lineNumber: 385,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 383,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/apex-hero-3d.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_s1(BitcoinCoin, "B+JRE7gOCwexaOf6JuzqrKNVNkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = BitcoinCoin;
// ---------------------------------------------------------------------------
// 600 Drifting Particles
// ---------------------------------------------------------------------------
function ParticleField({ isDark = true }) {
    _s2();
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { positions, initialY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleField.useMemo": ()=>{
            const count = 600;
            const pos = new Float32Array(count * 3);
            const initY = new Float32Array(count);
            for(let i = 0; i < count; i++){
                pos[i * 3] = (Math.random() - 0.5) * 12; // X [-6, 6]
                const y = (Math.random() - 0.5) * 12; // Y [-6, 6]
                pos[i * 3 + 1] = y;
                initY[i] = y;
                pos[i * 3 + 2] = (Math.random() - 0.5) * 12; // Z [-6, 6]
            }
            return {
                positions: pos,
                initialY: initY
            };
        }
    }["ParticleField.useMemo"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ParticleField.useFrame": ({ clock })=>{
            if (!pointsRef.current) return;
            const posAttr = pointsRef.current.geometry.attributes.position;
            const count = posAttr.count;
            for(let i = 0; i < count; i++){
                const y = initialY[i] + Math.sin(clock.elapsedTime + i) * 0.15;
                posAttr.setY(i, y);
            }
            posAttr.needsUpdate = true;
        }
    }["ParticleField.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: pointsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                    attach: "attributes-position",
                    args: [
                        positions,
                        3
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.03,
                color: isDark ? "#38BDF8" : "#0284C7",
                transparent: true,
                opacity: isDark ? 0.55 : 0.35,
                sizeAttenuation: true,
                depthWrite: false
            }, void 0, false, {
                fileName: "[project]/components/landing/apex-hero-3d.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/apex-hero-3d.tsx",
        lineNumber: 431,
        columnNumber: 5
    }, this);
}
_s2(ParticleField, "jnQn8UmevdN2QK5RFEpslbZ5mhI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = ParticleField;
function ApexHero3D({ isDark = true }) {
    _s3();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApexHero3D.useEffect": ()=>{
            const handleResize = {
                "ApexHero3D.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["ApexHero3D.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "ApexHero3D.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["ApexHero3D.useEffect"];
        }
    }["ApexHero3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-0 w-full h-full pointer-events-auto select-none overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            dpr: [
                1,
                2
            ],
            gl: {
                antialias: true,
                alpha: true
            },
            style: {
                width: "100%",
                height: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                    makeDefault: true,
                    position: [
                        0,
                        0,
                        6.2
                    ],
                    fov: 42
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: isDark ? 0.6 : 1.0
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 474,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        4,
                        6,
                        4
                    ],
                    intensity: isDark ? 1.8 : 2.2
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 475,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -4,
                        -2,
                        -2
                    ],
                    intensity: isDark ? 0.8 : 1.0,
                    color: isDark ? "#00E599" : "#00C2FF"
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 476,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        1.9,
                        2,
                        2
                    ],
                    intensity: isDark ? 1.6 : 1.2,
                    color: isDark ? "#00E599" : "#00B4D8"
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 481,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                    preset: isDark ? "night" : "city"
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingCandlestickChart3D, {
                    isMobile: isMobile,
                    isDark: isDark
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 490,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BitcoinCoin, {
                    isMobile: isMobile,
                    isDark: isDark
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 493,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleField, {
                    isDark: isDark
                }, void 0, false, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                            luminanceThreshold: isDark ? 0.25 : 0.45,
                            luminanceSmoothing: 0.9,
                            intensity: isDark ? 0.4 : 0.25
                        }, void 0, false, {
                            fileName: "[project]/components/landing/apex-hero-3d.tsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                            eskil: false,
                            offset: 0.15,
                            darkness: isDark ? 0.7 : 0.15
                        }, void 0, false, {
                            fileName: "[project]/components/landing/apex-hero-3d.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/landing/apex-hero-3d.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/landing/apex-hero-3d.tsx",
            lineNumber: 467,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/landing/apex-hero-3d.tsx",
        lineNumber: 466,
        columnNumber: 5
    }, this);
}
_s3(ApexHero3D, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c3 = ApexHero3D;
const __TURBOPACK__default__export__ = ApexHero3D;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FloatingCandlestickChart3D");
__turbopack_context__.k.register(_c1, "BitcoinCoin");
__turbopack_context__.k.register(_c2, "ParticleField");
__turbopack_context__.k.register(_c3, "ApexHero3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/apex-hero-3d.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/landing/apex-hero-3d.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_landing_apex-hero-3d_tsx_15--9ma._.js.map