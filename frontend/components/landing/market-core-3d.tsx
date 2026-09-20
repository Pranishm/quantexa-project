"use client";

import { useEffect, useRef } from "react";
import type * as ThreeModule from "three";

type Three = typeof ThreeModule;
type Vec3 = ThreeModule.Vector3;

interface SceneHandles {
  frame: number;
  renderer: ThreeModule.WebGLRenderer;
  cleanup: () => void;
}

function makeBitcoinTexture(THREE: Three) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const center = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const coinGlow = ctx.createRadialGradient(center - 190, center - 230, 40, center, center, 500);
    coinGlow.addColorStop(0, "#fff1a6");
    coinGlow.addColorStop(0.42, "#f6bf38");
    coinGlow.addColorStop(0.72, "#d98b11");
    coinGlow.addColorStop(1, "#a75805");
    ctx.fillStyle = coinGlow;
    ctx.beginPath();
    ctx.arc(center, center, 500, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.globalAlpha = 0.38;
    ctx.lineWidth = 18;
    ctx.strokeStyle = "#fff2a8";
    ctx.beginPath();
    ctx.arc(center - 4, center - 4, 445, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#e77d00";
    ctx.beginPath();
    ctx.arc(center, center, 368, Math.PI * 0.72, Math.PI * 1.48);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.shadowColor = "rgba(105, 48, 0, 0.6)";
    ctx.shadowBlur = 38;
    ctx.shadowOffsetX = 28;
    ctx.shadowOffsetY = 34;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = '700 560px "Arial", "Helvetica Neue", sans-serif';
    ctx.fillStyle = "#ffd565";
    ctx.fillText("B", center + 36, center + 32);

    ctx.lineWidth = 34;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ffd565";
    ctx.beginPath();
    ctx.moveTo(center - 118, center - 270);
    ctx.lineTo(center - 118, center + 270);
    ctx.moveTo(center - 22, center - 270);
    ctx.lineTo(center - 22, center + 270);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    const shine = ctx.createLinearGradient(150, 80, 840, 860);
    shine.addColorStop(0, "rgba(255,255,255,0.55)");
    shine.addColorStop(0.28, "rgba(255,255,255,0.04)");
    shine.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = shine;
    ctx.beginPath();
    ctx.arc(center, center, 486, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.center.set(0.5, 0.5);
  texture.rotation = -Math.PI / 2;
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;
  texture.anisotropy = 8;
  texture.needsUpdate = true;

  return texture;
}

function makePipe(THREE: Three, start: Vec3, end: Vec3, radius: number, material: ThreeModule.Material) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, 14, 1), material);
  const middle = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);

  pipe.position.copy(middle);
  pipe.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());

  return pipe;
}

function fitCamera(camera: ThreeModule.PerspectiveCamera, width: number) {
  camera.position.set(width < 520 ? 0 : 0.15, width < 520 ? 0.18 : 0.04, width < 520 ? 6.7 : 5.7);
  camera.fov = width < 520 ? 45 : 40;
  camera.updateProjectionMatrix();
}

export function MarketCore3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const handlesRef = useRef<SceneHandles | null>(null);

  useEffect(() => {
    let disposed = false;

    const setup = async () => {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;

      const mount = mountRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
      });

      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.08;
      renderer.domElement.className = "h-full w-full";
      mount.appendChild(renderer.domElement);

      const root = new THREE.Group();
      root.rotation.set(-0.08, -0.2, 0.03);
      scene.add(root);

      const coin = new THREE.Group();
      coin.rotation.set(0.05, -0.18, -0.03);
      root.add(coin);

      const coinTexture = makeBitcoinTexture(THREE);
      const faceMaterial = new THREE.MeshStandardMaterial({
        map: coinTexture,
        metalness: 0.76,
        roughness: 0.28,
        emissive: new THREE.Color("#8f4600"),
        emissiveIntensity: 0.12,
      });
      const sideMaterial = new THREE.MeshStandardMaterial({
        color: "#c87912",
        metalness: 0.88,
        roughness: 0.24,
        emissive: new THREE.Color("#6f3100"),
        emissiveIntensity: 0.08,
      });
      const rimMaterial = new THREE.MeshStandardMaterial({
        color: "#ffd66d",
        metalness: 0.9,
        roughness: 0.18,
        emissive: new THREE.Color("#d87500"),
        emissiveIntensity: 0.1,
      });

      const body = new THREE.Mesh(
        new THREE.CylinderGeometry(1.55, 1.55, 0.36, 128, 1, false),
        [sideMaterial, faceMaterial, faceMaterial],
      );
      body.geometry.rotateX(Math.PI / 2);
      body.castShadow = true;
      body.receiveShadow = true;
      coin.add(body);

      const frontRim = new THREE.Mesh(new THREE.TorusGeometry(1.34, 0.035, 18, 128), rimMaterial);
      frontRim.position.z = 0.202;
      coin.add(frontRim);

      const outerLip = new THREE.Mesh(new THREE.TorusGeometry(1.56, 0.055, 20, 128), rimMaterial);
      outerLip.position.z = 0.214;
      coin.add(outerLip);

      const rearLip = new THREE.Mesh(new THREE.TorusGeometry(1.56, 0.04, 18, 128), sideMaterial);
      rearLip.position.z = -0.205;
      coin.add(rearLip);

      const cage = new THREE.Group();
      cage.rotation.set(-0.02, 0.04, -0.03);
      root.add(cage);

      const pipeMaterial = new THREE.MeshStandardMaterial({
        color: "#59606a",
        metalness: 0.74,
        roughness: 0.22,
        transparent: true,
        opacity: 0.82,
        emissive: new THREE.Color("#172236"),
        emissiveIntensity: 0.3,
      });
      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: "#7f8794",
        metalness: 0.9,
        roughness: 0.18,
        emissive: new THREE.Color("#23314f"),
        emissiveIntensity: 0.36,
      });
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
      });

      const points = [
        new THREE.Vector3(-2.15, 1.04, 0.4),
        new THREE.Vector3(-0.62, 1.02, 0.72),
        new THREE.Vector3(0.8, 1.82, 0.03),
        new THREE.Vector3(2.22, 0.26, 0.34),
        new THREE.Vector3(0.96, -1.42, 0.65),
        new THREE.Vector3(-1.72, -1.26, -0.08),
        new THREE.Vector3(-2.3, -0.02, -0.24),
      ];
      const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 0],
        [0, 2],
        [1, 3],
        [1, 4],
        [2, 4],
        [3, 6],
        [0, 4],
      ];

      edges.forEach(([a, b]) => {
        cage.add(makePipe(THREE, points[a], points[b], 0.022, pipeMaterial));
      });

      points.forEach((point, index) => {
        const node = new THREE.Mesh(new THREE.SphereGeometry(index === 2 ? 0.12 : 0.1, 32, 32), nodeMaterial);
        node.position.copy(point);
        cage.add(node);

        const glow = new THREE.Mesh(new THREE.SphereGeometry(index === 2 ? 0.2 : 0.17, 32, 32), glowMaterial);
        glow.position.copy(point);
        cage.add(glow);
      });

      const stars = new THREE.Group();
      const starMaterial = new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.78,
        depthWrite: false,
      });
      [
        [-2.36, 1.82, -0.35, 0.12],
        [2.42, -0.48, -0.2, 0.1],
        [-1.92, -1.86, 0.12, 0.11],
      ].forEach(([x, y, z, scale]) => {
        const star = new THREE.Group();
        const vertical = new THREE.Mesh(new THREE.ConeGeometry(scale, scale * 2.5, 4), starMaterial);
        vertical.rotation.z = Math.PI / 4;
        const horizontal = vertical.clone();
        horizontal.rotation.z = -Math.PI / 4;
        star.add(vertical, horizontal);
        star.position.set(x, y, z);
        stars.add(star);
      });
      root.add(stars);

      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 52;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i += 1) {
        positions[i * 3] = (Math.random() - 0.5) * 5.8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 4.6;
        positions[i * 3 + 2] = -1.7 + Math.random() * 1.8;
      }
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({
          color: "#ffffff",
          size: 0.035,
          transparent: true,
          opacity: 0.32,
          depthWrite: false,
        }),
      );
      root.add(particles);

      scene.add(new THREE.AmbientLight("#fff0c0", 1.1));
      const keyLight = new THREE.DirectionalLight("#ffe6a8", 3.1);
      keyLight.position.set(-2.2, 2.6, 3.2);
      scene.add(keyLight);

      const rimLight = new THREE.PointLight("#7f6cff", 2.6, 7);
      rimLight.position.set(2.4, -1.2, 2.4);
      scene.add(rimLight);

      const goldFill = new THREE.PointLight("#ff9c22", 1.9, 6);
      goldFill.position.set(-1.8, -1.5, 2.1);
      scene.add(goldFill);

      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const resize = () => {
        const { width, height } = mount.getBoundingClientRect();
        const safeWidth = Math.max(1, width);
        const safeHeight = Math.max(1, height);
        renderer.setSize(safeWidth, safeHeight, false);
        camera.aspect = safeWidth / safeHeight;
        fitCamera(camera, safeWidth);
      };

      const handleMouseMove = (event: MouseEvent) => {
        const rect = mount.getBoundingClientRect();
        mouse.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      };

      const observer = new ResizeObserver(resize);
      observer.observe(mount);
      window.addEventListener("mousemove", handleMouseMove);
      resize();

      const startTime = performance.now();
      const render = () => {
        const time = (performance.now() - startTime) / 1000;

        mouse.x += (mouse.tx - mouse.x) * 0.055;
        mouse.y += (mouse.ty - mouse.y) * 0.055;

        if (!reduceMotion) {
          root.rotation.y = -0.22 + Math.sin(time * 0.38) * 0.08 + mouse.x * 0.08;
          root.rotation.x = -0.06 + Math.sin(time * 0.3) * 0.04 - mouse.y * 0.06;
          coin.rotation.y = -0.16 + Math.sin(time * 0.55) * 0.04;
          coin.rotation.z = -0.03 + Math.sin(time * 0.42) * 0.025;
          cage.rotation.y = 0.03 + Math.sin(time * 0.42) * 0.08;
          particles.rotation.z = time * 0.025;
          stars.children.forEach((star, index) => {
            star.scale.setScalar(1 + Math.sin(time * 1.6 + index) * 0.08);
          });
        } else {
          root.rotation.y = -0.18;
          root.rotation.x = -0.05;
        }

        renderer.render(scene, camera);
        handlesRef.current!.frame = requestAnimationFrame(render);
      };

      handlesRef.current = {
        frame: requestAnimationFrame(render),
        renderer,
        cleanup: () => {
          observer.disconnect();
          window.removeEventListener("mousemove", handleMouseMove);
          coinTexture.dispose();
          scene.traverse((object) => {
            if ("geometry" in object && object.geometry) {
              (object.geometry as ThreeModule.BufferGeometry).dispose();
            }
            if ("material" in object && object.material) {
              const material = object.material as ThreeModule.Material | ThreeModule.Material[];
              if (Array.isArray(material)) {
                material.forEach((item) => item.dispose());
              } else {
                material.dispose();
              }
            }
          });
          renderer.dispose();
          renderer.domElement.remove();
        },
      };
    };

    void setup();

    return () => {
      disposed = true;
      if (handlesRef.current) {
        cancelAnimationFrame(handlesRef.current.frame);
        handlesRef.current.cleanup();
        handlesRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative h-full min-h-[460px] w-full select-none overflow-visible pointer-events-none lg:min-h-[560px]">
      <div
        ref={mountRef}
        aria-label="A rotating gold Bitcoin-style coin protected by a dark 3D wireframe security network"
        role="img"
        className="absolute inset-0"
      />
      <div className="pointer-events-none absolute inset-x-[12%] bottom-10 h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,180,55,0.28),rgba(135,118,255,0.05)_48%,transparent_72%)] blur-xl" />
    </div>
  );
}
