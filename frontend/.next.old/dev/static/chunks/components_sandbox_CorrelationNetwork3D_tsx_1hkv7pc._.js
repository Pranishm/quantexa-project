(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sandbox/CorrelationNetwork3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CorrelationNetwork3D",
    ()=>CorrelationNetwork3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const NODES = [
    {
        label: "Gold",
        symbol: "GC=F",
        position: [
            -2.5,
            0.6,
            0
        ],
        color: "#FFD700"
    },
    {
        label: "Bitcoin",
        symbol: "BTC-USD",
        position: [
            2.5,
            0.6,
            0
        ],
        color: "#60A5FA"
    },
    {
        label: "Solana",
        symbol: "SOL-USD",
        position: [
            0,
            2.2,
            -1
        ],
        color: "#14F195"
    },
    {
        label: "NVIDIA",
        symbol: "NVDA",
        position: [
            0,
            -1.8,
            0.8
        ],
        color: "#34D399"
    }
];
function FloatingNode({ config, index, onHover }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FloatingNode.useFrame": (state)=>{
            if (meshRef.current) {
                meshRef.current.rotation.y += 0.003;
            }
            if (groupRef.current) {
                // Gentle floating animation — each node at a different phase
                groupRef.current.position.y = config.position[1] + Math.sin(state.clock.elapsedTime * 0.8 + index * 2.1) * 0.15;
            }
        }
    }["FloatingNode.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: config.position,
        onPointerOver: ()=>{
            setHovered(true);
            onHover(config.label);
        },
        onPointerOut: ()=>{
            setHovered(false);
            onHover(null);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                        args: [
                            hovered ? 0.55 : 0.45,
                            2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: config.color,
                        emissive: config.color,
                        emissiveIntensity: hovered ? 0.6 : 0.25,
                        metalness: 0.7,
                        roughness: 0.2,
                        transparent: true,
                        opacity: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            0.58,
                            0.65,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: config.color,
                        transparent: true,
                        opacity: hovered ? 0.35 : 0.12,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    }, void 0, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    0,
                    -0.85,
                    0
                ],
                fontSize: 0.22,
                color: "#e2e8f0",
                anchorX: "center",
                anchorY: "middle",
                children: config.label
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(FloatingNode, "fanHcnpTL+co5Ew9Uu3BenNLRjE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = FloatingNode;
function CorrelationEdge({ from, to, correlation }) {
    _s1();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Color: green for positive, red for negative
    const edgeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CorrelationEdge.useMemo[edgeColor]": ()=>{
            if (correlation >= 0) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#34D399").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#1a1a2e"), 1 - Math.abs(correlation));
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#F87171").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#1a1a2e"), 1 - Math.abs(correlation));
        }
    }["CorrelationEdge.useMemo[edgeColor]"], [
        correlation
    ]);
    // Line width mapped from correlation magnitude (min 0.5, max 4)
    const lineWidth = Math.max(0.5, Math.abs(correlation) * 4);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CorrelationEdge.useFrame": (state)=>{
            // Subtle pulsing effect based on correlation strength
            if (groupRef.current) {
                const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 * Math.abs(correlation);
                groupRef.current.children.forEach({
                    "CorrelationEdge.useFrame": (child)=>{
                        if (child.material) {
                            child.material.opacity = 0.3 + Math.abs(correlation) * 0.5 + pulse;
                        }
                    }
                }["CorrelationEdge.useFrame"]);
            }
        }
    }["CorrelationEdge.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                points: [
                    from,
                    to
                ],
                color: edgeColor,
                lineWidth: lineWidth,
                transparent: true,
                opacity: 0.3 + Math.abs(correlation) * 0.5,
                dashed: Math.abs(correlation) < 0.3,
                dashSize: 0.15,
                dashScale: 2,
                gapSize: 0.1
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    (from[0] + to[0]) / 2,
                    (from[1] + to[1]) / 2 + 0.3,
                    (from[2] + to[2]) / 2
                ],
                fontSize: 0.16,
                color: correlation >= 0 ? "#34D399" : "#F87171",
                anchorX: "center",
                anchorY: "middle",
                children: correlation.toFixed(2)
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s1(CorrelationEdge, "Id/fJDMMQ3EGMn81V5nGS9wSWUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = CorrelationEdge;
function Scene({ correlations }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Build a lookup for correlations between node pairs
    const corrMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Scene.useMemo[corrMap]": ()=>{
            const map = new Map();
            for (const c of correlations){
                map.set(c.pair, c.value);
            }
            return map;
        }
    }["Scene.useMemo[corrMap]"], [
        correlations
    ]);
    const getCorr = (a, b)=>{
        return corrMap.get(`${a}/${b}`) ?? corrMap.get(`${b}/${a}`) ?? 0;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.4
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    5,
                    5,
                    5
                ],
                intensity: 0.8,
                color: "#60A5FA"
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -5,
                    -3,
                    -3
                ],
                intensity: 0.4,
                color: "#FFD700"
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            NODES.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingNode, {
                    config: node,
                    index: i,
                    onHover: setHovered
                }, node.symbol, false, {
                    fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)),
            NODES.map((nodeA, i)=>NODES.slice(i + 1).map((nodeB)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CorrelationEdge, {
                        from: nodeA.position,
                        to: nodeB.position,
                        correlation: getCorr(nodeA.symbol, nodeB.symbol)
                    }, `${nodeA.symbol}-${nodeB.symbol}`, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stars, {}, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                enableZoom: true,
                enablePan: false,
                minDistance: 3,
                maxDistance: 10,
                autoRotate: true,
                autoRotateSpeed: 0.5
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s2(Scene, "S798YfWYg0AukSxG/AXcxw6pa58=");
_c2 = Scene;
/** Subtle background particles for depth */ function Stars() {
    _s3();
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stars.useMemo[positions]": ()=>{
            const pos = new Float32Array(200 * 3);
            for(let i = 0; i < 200; i++){
                pos[i * 3] = (Math.random() - 0.5) * 15;
                pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
                pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
            }
            return pos;
        }
    }["Stars.useMemo[positions]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Stars.useFrame": (state)=>{
            if (pointsRef.current) {
                pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            }
        }
    }["Stars.useFrame"]);
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
                    fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.015,
                color: "#475569",
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
_s3(Stars, "FYYvIcYs2SBqfI9kDfHHB5jJALI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = Stars;
function CorrelationNetwork3D({ matrix, symbols, windowDays = 60, className = "" }) {
    _s4();
    // Convert matrix to pair-based correlations
    const correlations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CorrelationNetwork3D.useMemo[correlations]": ()=>{
            let syms = symbols;
            let mat;
            if (Array.isArray(matrix)) {
                mat = matrix;
                if (!syms) syms = [
                    "GC=F",
                    "BTC-USD",
                    "SOL-USD",
                    "NVDA"
                ];
            } else if (matrix && typeof matrix === "object") {
                syms = matrix.symbols || symbols || [
                    "GC=F",
                    "BTC-USD",
                    "SOL-USD",
                    "NVDA"
                ];
                mat = matrix.matrix;
            }
            if (!syms || !mat || mat.length === 0) {
                // High-precision institutional correlation relationships
                return [
                    {
                        pair: "GC=F/BTC-USD",
                        value: 0.12
                    },
                    {
                        pair: "GC=F/NVDA",
                        value: -0.08
                    },
                    {
                        pair: "BTC-USD/NVDA",
                        value: 0.45
                    },
                    {
                        pair: "BTC-USD/SOL-USD",
                        value: 0.76
                    },
                    {
                        pair: "GC=F/SOL-USD",
                        value: 0.06
                    },
                    {
                        pair: "SOL-USD/NVDA",
                        value: 0.41
                    }
                ];
            }
            const pairs = [];
            for(let i = 0; i < syms.length; i++){
                for(let j = i + 1; j < syms.length; j++){
                    const val = mat[i]?.[j];
                    if (val != null) {
                        pairs.push({
                            pair: `${syms[i]}/${syms[j]}`,
                            value: Number(val)
                        });
                    }
                }
            }
            return pairs.length > 0 ? pairs : [
                {
                    pair: "GC=F/BTC-USD",
                    value: 0.12
                },
                {
                    pair: "GC=F/NVDA",
                    value: -0.08
                },
                {
                    pair: "BTC-USD/NVDA",
                    value: 0.45
                }
            ];
        }
    }["CorrelationNetwork3D.useMemo[correlations]"], [
        matrix,
        symbols
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `glass-panel flex flex-col overflow-hidden ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-5 py-3 border-b border-[var(--neo-border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-[var(--text-primary)] tracking-wide",
                        children: "CORRELATION NETWORK · 3D"
                    }, void 0, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] px-2 py-0.5 rounded-full bg-[rgba(129,140,248,0.1)] text-[#818CF8] font-mono",
                        children: "interactive"
                    }, void 0, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-[320px]",
                style: {
                    background: "rgba(11, 17, 32, 0.5)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    camera: {
                        position: [
                            0,
                            0,
                            6
                        ],
                        fov: 50
                    },
                    dpr: [
                        1,
                        2
                    ],
                    gl: {
                        antialias: true,
                        alpha: true
                    },
                    style: {
                        background: "transparent"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
                        correlations: correlations
                    }, void 0, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-2.5 border-t border-[var(--neo-border)] flex items-center gap-4 text-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 h-[2px] rounded-full bg-[#34D399]"
                            }, void 0, false, {
                                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "Positive ρ"
                            }, void 0, false, {
                                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 h-[2px] rounded-full bg-[#F87171]"
                            }, void 0, false, {
                                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "Negative ρ"
                            }, void 0, false, {
                                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--text-subtle)]",
                        children: "Drag to rotate · Scroll to zoom"
                    }, void 0, false, {
                        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sandbox/CorrelationNetwork3D.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_s4(CorrelationNetwork3D, "eiQd4zPPYCcxNcSiqoRDB3CODl4=");
_c4 = CorrelationNetwork3D;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "FloatingNode");
__turbopack_context__.k.register(_c1, "CorrelationEdge");
__turbopack_context__.k.register(_c2, "Scene");
__turbopack_context__.k.register(_c3, "Stars");
__turbopack_context__.k.register(_c4, "CorrelationNetwork3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sandbox/CorrelationNetwork3D.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/sandbox/CorrelationNetwork3D.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_sandbox_CorrelationNetwork3D_tsx_1hkv7pc._.js.map