"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// High-res procedural ₿ face texture
// ---------------------------------------------------------------------------
function createBitcoinFaceTexture(): THREE.CanvasTexture {
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

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

// ---------------------------------------------------------------------------
// 3D Animated Candlestick Chart Behind Bitcoin
// ---------------------------------------------------------------------------
interface CandleData {
  x: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

function FloatingCandlestickChart3D({
  isMobile = false,
  isDark = true,
}: {
  isMobile?: boolean;
  isDark?: boolean;
}) {
  const chartGroupRef = useRef<THREE.Group>(null);
  const liveCandleBodyRef = useRef<THREE.Mesh>(null);
  const liveCandleWickRef = useRef<THREE.Mesh>(null);

  // Generate 22 realistic institutional price bars
  const candles: CandleData[] = useMemo(() => {
    const data: CandleData[] = [];
    let price = -0.2;
    const count = 22;
    const steps = [
      -0.05, 0.12, 0.08, -0.04, 0.15, 0.1, -0.06, 0.22, 0.18, -0.08,
      0.14, 0.25, -0.05, 0.19, 0.31, -0.12, 0.28, 0.15, -0.07, 0.35, 0.18, 0.24
    ];

    for (let i = 0; i < count; i++) {
      const x = (i - count / 2) * 0.34;
      const step = steps[i] || 0.1;
      const open = price;
      price += step;
      const close = price;
      const high = Math.max(open, close) + Math.abs(step) * 0.55 + 0.05;
      const low = Math.min(open, close) - Math.abs(step) * 0.45 - 0.04;
      const volume = 0.2 + Math.abs(step) * 1.5;
      data.push({ x, open, high, low, close, volume });
    }
    return data;
  }, []);

  // Compute trend line points
  const linePoints = useMemo(() => {
    return candles.map((c) => new THREE.Vector3(c.x, (c.open + c.close) / 2, 0.02));
  }, [candles]);


  useFrame((state) => {
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
  });

  const posX = isMobile ? 0 : 1.9;
  const posY = isMobile ? -0.2 : -0.4;

  const greenColor = "#00E599";
  const redColor = "#FF3366";
  const cyanColor = "#00C2FF";

  const lineObject = useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints(linePoints);
    const mat = new THREE.LineBasicMaterial({
      color: cyanColor,
      linewidth: 2,
      transparent: true,
      opacity: isDark ? 0.9 : 0.7,
    });
    return new THREE.Line(geom, mat);
  }, [linePoints, isDark, cyanColor]);

  const latestPoint = linePoints[linePoints.length - 1];

  return (
    <group ref={chartGroupRef} position={[posX, posY, -1.0]}>
      {/* ── Background Grid Level Lines ── */}
      {[-0.8, 0, 0.8].map((lvl, idx) => (
        <mesh key={idx} position={[0, lvl, -0.05]}>
          <boxGeometry args={[8.5, 0.008, 0.008]} />
          <meshBasicMaterial
            color={isDark ? "#38BDF8" : "#94A3B8"}
            transparent
            opacity={isDark ? 0.2 : 0.3}
          />
        </mesh>
      ))}

      {/* ── Moving Average Spline ── */}
      <primitive object={lineObject} />

      {/* ── Active Tick Beacon at Latest Price ── */}
      {latestPoint && (
        <mesh position={[latestPoint.x, latestPoint.y, 0.04]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#00E599" />
        </mesh>
      )}

      {/* ── 3D Candlesticks ── */}
      {candles.map((c, idx) => {
        const isUp = c.close >= c.open;
        const color = isUp ? greenColor : redColor;
        const bodyH = Math.max(0.06, Math.abs(c.close - c.open));
        const bodyY = (c.open + c.close) / 2;
        const wickH = Math.max(0.12, c.high - c.low);
        const wickY = (c.high + c.low) / 2;
        const isLatest = idx === candles.length - 1;

        return (
          <group key={idx} position={[c.x, 0, 0]}>
            {/* Candle Wick */}
            <mesh
              ref={isLatest ? (liveCandleWickRef as any) : undefined}
              position={[0, wickY, 0]}
            >
              <cylinderGeometry args={[0.015, 0.015, wickH, 8]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={isDark ? 0.65 : 0.35}
                roughness={0.2}
              />
            </mesh>

            {/* Candle Body */}
            <mesh
              ref={isLatest ? (liveCandleBodyRef as any) : undefined}
              position={[0, bodyY, 0]}
            >
              <boxGeometry args={[0.22, bodyH, 0.09]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={isDark ? 0.45 : 0.25}
                roughness={0.25}
                metalness={0.2}
              />
            </mesh>

            {/* Volume Bar at base */}
            <mesh position={[0, -1.2 + (c.volume * 0.35) / 2, 0]}>
              <boxGeometry args={[0.2, c.volume * 0.35, 0.06]} />
              <meshStandardMaterial
                color={color}
                transparent
                opacity={isDark ? 0.4 : 0.45}
                roughness={0.4}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

// ---------------------------------------------------------------------------
// Interactive Bitcoin Mesh with Drag-to-Spin & Bobbing
// ---------------------------------------------------------------------------
function BitcoinCoin({
  isMobile = false,
  isDark = true,
}: {
  isMobile?: boolean;
  isDark?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);

  const faceTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    return createBitcoinFaceTexture();
  }, []);

  useFrame((state, delta) => {
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
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetTiltX, 0.05);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetTiltZ, 0.05);

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
  });

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: any) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velocityRef.current += dx * 0.005;
  };

  const handlePointerUp = (e: any) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const posX = isMobile ? 0 : 1.9;
  const posY = isMobile ? -0.2 : -0.4;

  return (
    <group
      ref={groupRef}
      position={[posX, posY, 0]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Dynamic Specular Gleam Point Light */}
      <pointLight
        ref={lightRef as any}
        color={isDark ? "#FFE894" : "#FFDF78"}
        intensity={isDark ? 3.8 : 2.2}
        distance={7}
      />

      {/* Concentric Golden Orbital Halo Ring */}
      <mesh ref={haloRef as any} rotation={[Math.PI / 2 + 0.15, 0, 0]}>
        <torusGeometry args={[2.08, 0.016, 16, 64]} />
        <meshStandardMaterial
          color={isDark ? "#FFD700" : "#D4AF37"}
          emissive={isDark ? "#FFB800" : "#B8860B"}
          emissiveIntensity={isDark ? 0.75 : 0.35}
          roughness={0.18}
          metalness={0.92}
        />
      </mesh>

      {/* Central Coin Body */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.6, 1.6, 0.18, 64]} />
        <meshPhysicalMaterial
          color={isDark ? "#D9A441" : "#E2AC48"}
          metalness={isDark ? 0.94 : 0.88}
          roughness={isDark ? 0.2 : 0.24}
          envMapIntensity={isDark ? 1.6 : 1.3}
          clearcoat={0.4}
          clearcoatRoughness={0.12}
        />
      </mesh>

      {/* Front Face Disc */}
      {faceTexture && (
        <mesh position={[0, 0, 0.091]}>
          <circleGeometry args={[1.56, 64]} />
          <meshBasicMaterial
            map={faceTexture}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>
      )}

      {/* Back Face Disc */}
      {faceTexture && (
        <mesh position={[0, 0, -0.091]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[1.56, 64]} />
          <meshBasicMaterial
            map={faceTexture}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>
      )}
    </group>
  );
}

// ---------------------------------------------------------------------------
// 600 Drifting Particles
// ---------------------------------------------------------------------------
function ParticleField({ isDark = true }: { isDark?: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, initialY } = useMemo(() => {
    const count = 600;
    const pos = new Float32Array(count * 3);
    const initY = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12; // X [-6, 6]
      const y = (Math.random() - 0.5) * 12; // Y [-6, 6]
      pos[i * 3 + 1] = y;
      initY[i] = y;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12; // Z [-6, 6]
    }
    return { positions: pos, initialY: initY };
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const count = posAttr.count;

    for (let i = 0; i < count; i++) {
      const y = initialY[i] + Math.sin(clock.elapsedTime + i) * 0.15;
      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={isDark ? "#38BDF8" : "#0284C7"}
        transparent
        opacity={isDark ? 0.55 : 0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ---------------------------------------------------------------------------
// Main 3D Canvas Scene
// ---------------------------------------------------------------------------
export function ApexHero3D({ isDark = true }: { isDark?: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto select-none overflow-hidden">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6.2]} fov={42} />

        <ambientLight intensity={isDark ? 0.6 : 1.0} />
        <directionalLight position={[4, 6, 4]} intensity={isDark ? 1.8 : 2.2} />
        <directionalLight
          position={[-4, -2, -2]}
          intensity={isDark ? 0.8 : 1.0}
          color={isDark ? "#00E599" : "#00C2FF"}
        />
        <pointLight
          position={[1.9, 2, 2]}
          intensity={isDark ? 1.6 : 1.2}
          color={isDark ? "#00E599" : "#00B4D8"}
        />

        <Environment preset={isDark ? "night" : "city"} />

        {/* 3D Animated Candlestick Chart Behind Bitcoin */}
        <FloatingCandlestickChart3D isMobile={isMobile} isDark={isDark} />

        {/* 3D Bitcoin Coin */}
        <BitcoinCoin isMobile={isMobile} isDark={isDark} />

        {/* 600 Drifting Particles */}
        <ParticleField isDark={isDark} />

        <EffectComposer>
          <Bloom
            luminanceThreshold={isDark ? 0.25 : 0.45}
            luminanceSmoothing={0.9}
            intensity={isDark ? 0.4 : 0.25}
          />
          <Vignette eskil={false} offset={0.15} darkness={isDark ? 0.7 : 0.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default ApexHero3D;
