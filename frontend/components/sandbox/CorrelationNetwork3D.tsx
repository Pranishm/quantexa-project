"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Line } from "@react-three/drei";
import type { Mesh, Group } from "three";
import * as THREE from "three";
import type { Num } from "@/lib/types";

// ---------- 3D Scene internals ----------

interface NodeConfig {
  label: string;
  symbol: string;
  position: [number, number, number];
  color: string;
}

const NODES: NodeConfig[] = [
  { label: "Gold", symbol: "GC=F", position: [-2.5, 0.6, 0], color: "#FFD700" },
  { label: "Bitcoin", symbol: "BTC-USD", position: [2.5, 0.6, 0], color: "#60A5FA" },
  { label: "Solana", symbol: "SOL-USD", position: [0, 2.2, -1], color: "#14F195" },
  { label: "NVIDIA", symbol: "NVDA", position: [0, -1.8, 0.8], color: "#34D399" },
];

function FloatingNode({
  config,
  index,
  onHover,
}: {
  config: NodeConfig;
  index: number;
  onHover: (label: string | null) => void;
}) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
    if (groupRef.current) {
      // Gentle floating animation — each node at a different phase
      groupRef.current.position.y =
        config.position[1] + Math.sin(state.clock.elapsedTime * 0.8 + index * 2.1) * 0.15;
    }
  });

  return (
    <group
      ref={groupRef}
      position={config.position}
      onPointerOver={() => { setHovered(true); onHover(config.label); }}
      onPointerOut={() => { setHovered(false); onHover(null); }}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[hovered ? 0.55 : 0.45, 2]} />
        <meshStandardMaterial
          color={config.color}
          emissive={config.color}
          emissiveIntensity={hovered ? 0.6 : 0.25}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.58, 0.65, 32]} />
        <meshBasicMaterial
          color={config.color}
          transparent
          opacity={hovered ? 0.35 : 0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Label */}
      <Text
        position={[0, -0.85, 0]}
        fontSize={0.22}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        font="/fonts/JetBrainsMono-Regular.ttf"
        characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-%/"
      >
        {config.label}
      </Text>
    </group>
  );
}

function CorrelationEdge({
  from,
  to,
  correlation,
}: {
  from: [number, number, number];
  to: [number, number, number];
  correlation: number;
}) {
  const groupRef = useRef<Group>(null);

  // Color: green for positive, red for negative
  const edgeColor = useMemo(() => {
    if (correlation >= 0) {
      return new THREE.Color("#34D399").lerp(new THREE.Color("#1a1a2e"), 1 - Math.abs(correlation));
    }
    return new THREE.Color("#F87171").lerp(new THREE.Color("#1a1a2e"), 1 - Math.abs(correlation));
  }, [correlation]);

  // Line width mapped from correlation magnitude (min 0.5, max 4)
  const lineWidth = Math.max(0.5, Math.abs(correlation) * 4);

  useFrame((state) => {
    // Subtle pulsing effect based on correlation strength
    if (groupRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 * Math.abs(correlation);
      groupRef.current.children.forEach((child) => {
        if ((child as any).material) {
          (child as any).material.opacity = 0.3 + Math.abs(correlation) * 0.5 + pulse;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Line
        points={[from, to]}
        color={edgeColor}
        lineWidth={lineWidth}
        transparent
        opacity={0.3 + Math.abs(correlation) * 0.5}
        dashed={Math.abs(correlation) < 0.3}
        dashSize={0.15}
        dashScale={2}
        gapSize={0.1}
      />
      {/* Midpoint label */}
      <Text
        position={[
          (from[0] + to[0]) / 2,
          (from[1] + to[1]) / 2 + 0.3,
          (from[2] + to[2]) / 2,
        ]}
        fontSize={0.16}
        color={correlation >= 0 ? "#34D399" : "#F87171"}
        anchorX="center"
        anchorY="middle"
      >
        {correlation.toFixed(2)}
      </Text>
    </group>
  );
}

function Scene({
  correlations,
}: {
  correlations: { pair: string; value: number }[];
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  // Build a lookup for correlations between node pairs
  const corrMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of correlations) {
      map.set(c.pair, c.value);
    }
    return map;
  }, [correlations]);

  const getCorr = (a: string, b: string): number => {
    return corrMap.get(`${a}/${b}`) ?? corrMap.get(`${b}/${a}`) ?? 0;
  };

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#60A5FA" />
      <pointLight position={[-5, -3, -3]} intensity={0.4} color="#FFD700" />

      {/* Nodes */}
      {NODES.map((node, i) => (
        <FloatingNode key={node.symbol} config={node} index={i} onHover={setHovered} />
      ))}

      {/* Edges between all pairs */}
      {NODES.map((nodeA, i) =>
        NODES.slice(i + 1).map((nodeB) => (
          <CorrelationEdge
            key={`${nodeA.symbol}-${nodeB.symbol}`}
            from={nodeA.position}
            to={nodeB.position}
            correlation={getCorr(nodeA.symbol, nodeB.symbol)}
          />
        ))
      )}

      {/* Background particles */}
      <Stars />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

/** Subtle background particles for depth */
function Stars() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#475569" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

// ---------- Exported wrapper component ----------

interface CorrelationNetwork3DProps {
  /** Correlation matrix from the API */
  matrix?: {
    symbols: string[];
    matrix: Num[][];
  };
  className?: string;
}

export function CorrelationNetwork3D({ matrix, className = "" }: CorrelationNetwork3DProps) {
  // Convert matrix to pair-based correlations
  const correlations = useMemo(() => {
    if (!matrix?.symbols || !matrix?.matrix) {
      // Default demo correlations
      return [
        { pair: "GC=F/BTC-USD", value: 0.12 },
        { pair: "GC=F/NVDA", value: -0.08 },
        { pair: "BTC-USD/NVDA", value: 0.45 },
      ];
    }

    const pairs: { pair: string; value: number }[] = [];
    for (let i = 0; i < matrix.symbols.length; i++) {
      for (let j = i + 1; j < matrix.symbols.length; j++) {
        const val = matrix.matrix[i]?.[j];
        pairs.push({
          pair: `${matrix.symbols[i]}/${matrix.symbols[j]}`,
          value: val ?? 0,
        });
      }
    }
    return pairs;
  }, [matrix]);

  return (
    <div className={`glass-panel flex flex-col overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--neo-border)]">
        <h3 className="text-sm font-bold text-[var(--text-primary)] tracking-wide">
          CORRELATION NETWORK · 3D
        </h3>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(129,140,248,0.1)] text-[#818CF8] font-mono">
          interactive
        </span>
      </div>

      {/* 3D Canvas */}
      <div className="flex-1 min-h-[320px]" style={{ background: "rgba(11, 17, 32, 0.5)" }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene correlations={correlations} />
        </Canvas>
      </div>

      {/* Legend */}
      <div className="px-5 py-2.5 border-t border-[var(--neo-border)] flex items-center gap-4 text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="w-6 h-[2px] rounded-full bg-[#34D399]" />
          <span className="text-[var(--text-muted)]">Positive ρ</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-6 h-[2px] rounded-full bg-[#F87171]" />
          <span className="text-[var(--text-muted)]">Negative ρ</span>
        </div>
        <span className="text-[var(--text-subtle)]">Drag to rotate · Scroll to zoom</span>
      </div>
    </div>
  );
}
