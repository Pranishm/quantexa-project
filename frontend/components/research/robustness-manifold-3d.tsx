"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float } from "@react-three/drei";
import * as THREE from "three";
import type { HeatmapCell } from "@/lib/robustness-engine";

interface RobustnessManifold3DProps {
  heatmap: HeatmapCell[][];
  fastParam: number;
  slowParam: number;
  onSelectParam: (fast: number, slow: number) => void;
  autoRotate?: boolean;
}

// Color map for Sharpe ratio: 0.5 (cool/dark) -> 1.0 (cyan) -> 1.3 (electric violet) -> 1.6+ (gold)
function getSharpeColor(sharpe: number): THREE.Color {
  if (sharpe < 0.8) {
    return new THREE.Color("#4a5568").lerp(new THREE.Color("#805ad5"), Math.max(0, (sharpe - 0.4) / 0.4));
  }
  if (sharpe < 1.2) {
    return new THREE.Color("#805ad5").lerp(new THREE.Color("#3182ce"), (sharpe - 0.8) / 0.4);
  }
  if (sharpe < 1.4) {
    return new THREE.Color("#3182ce").lerp(new THREE.Color("#38a169"), (sharpe - 1.2) / 0.2);
  }
  return new THREE.Color("#38a169").lerp(new THREE.Color("#ecc94b"), Math.min(1, (sharpe - 1.4) / 0.3));
}

function SurfaceMesh({
  heatmap,
  fastParam,
  slowParam,
  onSelectParam,
}: {
  heatmap: HeatmapCell[][];
  fastParam: number;
  slowParam: number;
  onSelectParam: (fast: number, slow: number) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Build grid dimensions from 5x5 matrix
  const rows = heatmap.length;
  const cols = heatmap[0]?.length || 0;

  // Generate interpolated parametric geometry (smooth 17x17 grid from 5x5)
  const { geometry, activeWorldPos } = useMemo(() => {
    const subdiv = 3;
    const gridRows = (rows - 1) * subdiv + 1;
    const gridCols = (cols - 1) * subdiv + 1;

    const positions: number[] = [];
    const colors: number[] = [];
    const indices: number[] = [];

    const width = 6;
    const depth = 6;

    let activePos: [number, number, number] = [0, 0, 0];

    // Bilinear interpolation of heatmap data
    for (let i = 0; i < gridRows; i++) {
      const rowFrac = i / (gridRows - 1);
      const rowIdx = rowFrac * (rows - 1);
      const r0 = Math.floor(rowIdx);
      const r1 = Math.min(rows - 1, r0 + 1);
      const rWeight = rowIdx - r0;

      for (let j = 0; j < gridCols; j++) {
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
          activePos = [x, y + 0.15, z];
        }
      }
    }

    // Build triangle indices
    for (let i = 0; i < gridRows - 1; i++) {
      for (let j = 0; j < gridCols - 1; j++) {
        const a = i * gridCols + j;
        const b = (i + 1) * gridCols + j;
        const c = (i + 1) * gridCols + (j + 1);
        const d = i * gridCols + (j + 1);

        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    return { geometry: geo, activeWorldPos: activePos };
  }, [heatmap, rows, cols, fastParam, slowParam]);

  // Discrete markers for each of the 5x5 data points
  const markers = useMemo(() => {
    const list: { fast: number; slow: number; sharpe: number; pos: [number, number, number]; isSelected: boolean }[] = [];
    const width = 6;
    const depth = 6;

    heatmap.forEach((row, i) => {
      const z = (i / (rows - 1) - 0.5) * depth;
      row.forEach((cell, j) => {
        const x = (j / (cols - 1) - 0.5) * width;
        const y = (cell.sharpe - 1.0) * 2.2;
        list.push({
          fast: cell.param1,
          slow: cell.param2,
          sharpe: cell.sharpe,
          pos: [x, y, z],
          isSelected: cell.param1 === fastParam && cell.param2 === slowParam,
        });
      });
    });
    return list;
  }, [heatmap, rows, cols, fastParam, slowParam]);

  return (
    <group>
      {/* 3D Displaced Parametric Terrain */}
      <mesh ref={meshRef} geometry={geometry} receiveShadow castShadow>
        <meshStandardMaterial
          vertexColors
          roughness={0.25}
          metalness={0.45}
          wireframe={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Wireframe Overlay */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Stability Plateau Reference Plane (Sharpe = 1.0) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[6.5, 6.5]} />
        <meshBasicMaterial
          color="#3182ce"
          wireframe
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Discrete Interactive Spheres at 5x5 Parameter Points */}
      {markers.map((m) => (
        <group key={`${m.fast}-${m.slow}`} position={m.pos}>
          <mesh
            onClick={(e) => {
              e.stopPropagation();
              onSelectParam(m.fast, m.slow);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "auto";
            }}
          >
            <sphereGeometry args={[m.isSelected ? 0.16 : 0.08, 16, 16]} />
            <meshStandardMaterial
              color={m.isSelected ? "#ffffff" : getSharpeColor(m.sharpe)}
              emissive={m.isSelected ? "#805ad5" : "#000000"}
              emissiveIntensity={m.isSelected ? 0.8 : 0}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Vertical stem down to baseline */}
          <line>
            <bufferGeometry
              attach="geometry"
              onUpdate={(geo) => {
                const pts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -m.pos[1], 0)];
                geo.setFromPoints(pts);
              }}
            />
            <lineBasicMaterial attach="material" color="#805ad5" transparent opacity={m.isSelected ? 0.8 : 0.2} />
          </line>
        </group>
      ))}

      {/* Active Selected Parameter Beacon Marker */}
      <group position={activeWorldPos}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
          <mesh position={[0, 0.4, 0]}>
            <octahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial
              color="#F7931A"
              emissive="#F7931A"
              emissiveIntensity={0.9}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>
      </group>

      {/* Axis Labels */}
      <Text
        position={[3.5, -0.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.24}
        color="#a0aec0"
        anchorX="center"
      >
        SLOW MA &rarr;
      </Text>
      <Text
        position={[0, -0.8, 3.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        fontSize={0.24}
        color="#a0aec0"
        anchorX="center"
      >
        FAST MA &rarr;
      </Text>
    </group>
  );
}

export function RobustnessManifold3D({
  heatmap,
  fastParam,
  slowParam,
  onSelectParam,
  autoRotate = true,
}: RobustnessManifold3DProps) {
  return (
    <div className="w-full h-full min-h-[380px] relative rounded-2xl overflow-hidden bg-[var(--bg-root)]/70">
      <Canvas
        camera={{ position: [5.5, 4.5, 6.5], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 10, 4]} intensity={1.4} castShadow />
        <directionalLight position={[-6, -4, -4]} intensity={0.4} color="#805ad5" />
        <pointLight position={[0, 4, 0]} intensity={0.8} color="#ecc94b" />

        <SurfaceMesh
          heatmap={heatmap}
          fastParam={fastParam}
          slowParam={slowParam}
          onSelectParam={onSelectParam}
        />

        <OrbitControls
          enableDamping
          dampingFactor={0.06}
          autoRotate={autoRotate}
          autoRotateSpeed={1.2}
          minDistance={3.5}
          maxDistance={14}
          maxPolarAngle={Math.PI / 2 + 0.1}
        />
      </Canvas>

      {/* Overlay legend */}
      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-[10px] font-mono space-y-1 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#ecc94b]" />
          <span>High Sharpe Plateau (&ge; 1.4)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#38a169]" />
          <span>Robust Region (1.2 - 1.4)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#4a5568]" />
          <span>Fragile Overfit / Decay (&lt; 0.8)</span>
        </div>
        <div className="text-[9px] text-white/50 pt-0.5">Drag to Orbit · Scroll to Zoom</div>
      </div>
    </div>
  );
}
export default RobustnessManifold3D;
