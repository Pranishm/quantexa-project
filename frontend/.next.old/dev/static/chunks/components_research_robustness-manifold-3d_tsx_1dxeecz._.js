(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/research/robustness-manifold-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RobustnessManifold3D",
    ()=>RobustnessManifold3D,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Color map for Sharpe ratio: 0.5 (cool/dark) -> 1.0 (cyan) -> 1.3 (electric violet) -> 1.6+ (gold)
function getSharpeColor(sharpe) {
    if (sharpe < 0.8) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#4a5568").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#805ad5"), Math.max(0, (sharpe - 0.4) / 0.4));
    }
    if (sharpe < 1.2) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#805ad5").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#3182ce"), (sharpe - 0.8) / 0.4);
    }
    if (sharpe < 1.4) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#3182ce").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#38a169"), (sharpe - 1.2) / 0.2);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#38a169").lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ecc94b"), Math.min(1, (sharpe - 1.4) / 0.3));
}
function SurfaceMesh({ heatmap, fastParam, slowParam, onSelectParam }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Build grid dimensions from 5x5 matrix
    const rows = heatmap.length;
    const cols = heatmap[0]?.length || 0;
    // Generate interpolated parametric geometry (smooth 17x17 grid from 5x5)
    const { geometry, activeWorldPos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SurfaceMesh.useMemo": ()=>{
            const subdiv = 3;
            const gridRows = (rows - 1) * subdiv + 1;
            const gridCols = (cols - 1) * subdiv + 1;
            const positions = [];
            const colors = [];
            const indices = [];
            const width = 6;
            const depth = 6;
            let activePos = [
                0,
                0,
                0
            ];
            // Bilinear interpolation of heatmap data
            for(let i = 0; i < gridRows; i++){
                const rowFrac = i / (gridRows - 1);
                const rowIdx = rowFrac * (rows - 1);
                const r0 = Math.floor(rowIdx);
                const r1 = Math.min(rows - 1, r0 + 1);
                const rWeight = rowIdx - r0;
                for(let j = 0; j < gridCols; j++){
                    const colFrac = j / (gridCols - 1);
                    const colIdx = colFrac * (cols - 1);
                    const c0 = Math.floor(colIdx);
                    const c1 = Math.min(cols - 1, c0 + 1);
                    const cWeight = colIdx - c0;
                    // Bilinear sharpe interpolation
                    const s00 = heatmap[r0][c0]?.sharpe || 1;
                    const s01 = heatmap[r0][c1]?.sharpe || 1;
                    const s10 = heatmap[r1][c0]?.sharpe || 1;
                    const s11 = heatmap[r1][c1]?.sharpe || 1;
                    const sTop = s00 * (1 - cWeight) + s01 * cWeight;
                    const sBot = s10 * (1 - cWeight) + s11 * cWeight;
                    const sharpe = sTop * (1 - rWeight) + sBot * rWeight;
                    // Coordinates in 3D: X = fast, Z = slow, Y = Sharpe displacement
                    const x = (colFrac - 0.5) * width;
                    const z = (rowFrac - 0.5) * depth;
                    // Map sharpe 0.6..1.8 to Y -0.8..1.8
                    const y = (sharpe - 1.0) * 2.2;
                    positions.push(x, y, z);
                    const color = getSharpeColor(sharpe);
                    colors.push(color.r, color.g, color.b);
                    // Check if nearest to selected parameter
                    const cellFast = heatmap[r0]?.[c0]?.param1;
                    const cellSlow = heatmap[r0]?.[c0]?.param2;
                    if (cellFast === fastParam && cellSlow === slowParam && rWeight < 0.2 && cWeight < 0.2) {
                        activePos = [
                            x,
                            y + 0.15,
                            z
                        ];
                    }
                }
            }
            // Build triangle indices
            for(let i = 0; i < gridRows - 1; i++){
                for(let j = 0; j < gridCols - 1; j++){
                    const a = i * gridCols + j;
                    const b = (i + 1) * gridCols + j;
                    const c = (i + 1) * gridCols + (j + 1);
                    const d = i * gridCols + (j + 1);
                    indices.push(a, b, d);
                    indices.push(b, c, d);
                }
            }
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](positions, 3));
            geo.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](colors, 3));
            geo.setIndex(indices);
            geo.computeVertexNormals();
            return {
                geometry: geo,
                activeWorldPos: activePos
            };
        }
    }["SurfaceMesh.useMemo"], [
        heatmap,
        rows,
        cols,
        fastParam,
        slowParam
    ]);
    // Discrete markers for each of the 5x5 data points
    const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SurfaceMesh.useMemo[markers]": ()=>{
            const list = [];
            const width = 6;
            const depth = 6;
            heatmap.forEach({
                "SurfaceMesh.useMemo[markers]": (row, i)=>{
                    const z = (i / (rows - 1) - 0.5) * depth;
                    row.forEach({
                        "SurfaceMesh.useMemo[markers]": (cell, j)=>{
                            const x = (j / (cols - 1) - 0.5) * width;
                            const y = (cell.sharpe - 1.0) * 2.2;
                            list.push({
                                fast: cell.param1,
                                slow: cell.param2,
                                sharpe: cell.sharpe,
                                pos: [
                                    x,
                                    y,
                                    z
                                ],
                                isSelected: cell.param1 === fastParam && cell.param2 === slowParam
                            });
                        }
                    }["SurfaceMesh.useMemo[markers]"]);
                }
            }["SurfaceMesh.useMemo[markers]"]);
            return list;
        }
    }["SurfaceMesh.useMemo[markers]"], [
        heatmap,
        rows,
        cols,
        fastParam,
        slowParam
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                geometry: geometry,
                receiveShadow: true,
                castShadow: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    vertexColors: true,
                    roughness: 0.25,
                    metalness: 0.45,
                    wireframe: false,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                }, void 0, false, {
                    fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: "#ffffff",
                    wireframe: true,
                    transparent: true,
                    opacity: 0.12
                }, void 0, false, {
                    fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            6.5,
                            6.5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#3182ce",
                        wireframe: true,
                        transparent: true,
                        opacity: 0.08,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            markers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: m.pos,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onSelectParam(m.fast, m.slow);
                            },
                            onPointerOver: (e)=>{
                                e.stopPropagation();
                                document.body.style.cursor = "pointer";
                            },
                            onPointerOut: ()=>{
                                document.body.style.cursor = "auto";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                    args: [
                                        m.isSelected ? 0.16 : 0.08,
                                        16,
                                        16
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: m.isSelected ? "#ffffff" : getSharpeColor(m.sharpe),
                                    emissive: m.isSelected ? "#805ad5" : "#000000",
                                    emissiveIntensity: m.isSelected ? 0.8 : 0,
                                    roughness: 0.2,
                                    metalness: 0.8
                                }, void 0, false, {
                                    fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                                    attach: "geometry",
                                    onUpdate: (geo)=>{
                                        const pts = [
                                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
                                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -m.pos[1], 0)
                                        ];
                                        geo.setFromPoints(pts);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                                    attach: "material",
                                    color: "#805ad5",
                                    transparent: true,
                                    opacity: m.isSelected ? 0.8 : 0.2
                                }, void 0, false, {
                                    fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, `${m.fast}-${m.slow}`, true, {
                    fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: activeWorldPos,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
                    speed: 2,
                    rotationIntensity: 0.5,
                    floatIntensity: 0.3,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.4,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                                args: [
                                    0.2,
                                    0
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#F7931A",
                                emissive: "#F7931A",
                                emissiveIntensity: 0.9,
                                roughness: 0.1,
                                metalness: 0.9
                            }, void 0, false, {
                                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    3.5,
                    -0.8,
                    0
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                fontSize: 0.24,
                color: "#a0aec0",
                anchorX: "center",
                children: "SLOW MA →"
            }, void 0, false, {
                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    0,
                    -0.8,
                    3.5
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    Math.PI / 2
                ],
                fontSize: 0.24,
                color: "#a0aec0",
                anchorX: "center",
                children: "FAST MA →"
            }, void 0, false, {
                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(SurfaceMesh, "+8brweXt0i88tebmsvU5ZJqRJ94=");
_c = SurfaceMesh;
function RobustnessManifold3D({ heatmap, fastParam, slowParam, onSelectParam, autoRotate = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full min-h-[380px] relative rounded-2xl overflow-hidden bg-[var(--bg-root)]/70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        5.5,
                        4.5,
                        6.5
                    ],
                    fov: 42
                },
                dpr: [
                    1,
                    2
                ],
                gl: {
                    antialias: true,
                    alpha: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            6,
                            10,
                            4
                        ],
                        intensity: 1.4,
                        castShadow: true
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            -6,
                            -4,
                            -4
                        ],
                        intensity: 0.4,
                        color: "#805ad5"
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            0,
                            4,
                            0
                        ],
                        intensity: 0.8,
                        color: "#ecc94b"
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SurfaceMesh, {
                        heatmap: heatmap,
                        fastParam: fastParam,
                        slowParam: slowParam,
                        onSelectParam: onSelectParam
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        enableDamping: true,
                        dampingFactor: 0.06,
                        autoRotate: autoRotate,
                        autoRotateSpeed: 1.2,
                        minDistance: 3.5,
                        maxDistance: 14,
                        maxPolarAngle: Math.PI / 2 + 0.1
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-[10px] font-mono space-y-1 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-sm bg-[#ecc94b]"
                            }, void 0, false, {
                                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "High Sharpe Plateau (≥ 1.4)"
                            }, void 0, false, {
                                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-sm bg-[#38a169]"
                            }, void 0, false, {
                                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Robust Region (1.2 - 1.4)"
                            }, void 0, false, {
                                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-sm bg-[#4a5568]"
                            }, void 0, false, {
                                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Fragile Overfit / Decay (< 0.8)"
                            }, void 0, false, {
                                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] text-white/50 pt-0.5",
                        children: "Drag to Orbit · Scroll to Zoom"
                    }, void 0, false, {
                        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/research/robustness-manifold-3d.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/research/robustness-manifold-3d.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
_c1 = RobustnessManifold3D;
const __TURBOPACK__default__export__ = RobustnessManifold3D;
var _c, _c1;
__turbopack_context__.k.register(_c, "SurfaceMesh");
__turbopack_context__.k.register(_c1, "RobustnessManifold3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/research/robustness-manifold-3d.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/research/robustness-manifold-3d.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_research_robustness-manifold-3d_tsx_1dxeecz._.js.map