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
// Interactive Bitcoin Mesh with Drag-to-Spin & Bobbing
// ---------------------------------------------------------------------------
function BitcoinCoin({ isMobile = false }: { isMobile?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);

  const faceTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    return createBitcoinFaceTexture();
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Ambient continuous spin + drag-spin inertia decay
    groupRef.current.rotation.y += delta * 0.35 + velocityRef.current;
    velocityRef.current *= 0.96; // Smooth natural decay

    // Vertical bobbing motion
    const baseOffsetY = isMobile ? -0.2 : -0.4;
    groupRef.current.position.y = baseOffsetY + Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
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
    velocityRef.current += dx * 0.004;
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
      {/* Central Coin Body */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.6, 1.6, 0.18, 64]} />
        <meshPhysicalMaterial
          color="#D9A441"
          metalness={0.92}
          roughness={0.22}
          envMapIntensity={1.4}
          clearcoat={0.3}
          clearcoatRoughness={0.15}
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
function ParticleField() {
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
      // Sine wave drift per particle
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
        color="#6C7CFF"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ---------------------------------------------------------------------------
// Main 3D Canvas Scene
// ---------------------------------------------------------------------------
export function ApexHero3D() {
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

        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 4]} intensity={1.8} />
        <directionalLight position={[-4, -2, -2]} intensity={0.6} color="#6C7CFF" />
        <pointLight position={[1.9, 2, 2]} intensity={1.2} color="#F7931A" />

        <Environment preset="night" />

        <BitcoinCoin isMobile={isMobile} />
        <ParticleField />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.25}
            luminanceSmoothing={0.9}
            intensity={0.4}
          />
          <Vignette eskil={false} offset={0.15} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default ApexHero3D;
