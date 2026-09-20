"use client";

import { useEffect, useRef } from "react";

export function MiniTelemetryChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let progress = 0;

    // 60-point deterministic equity curve data
    const points: number[] = [
      100, 101.2, 102.5, 101.8, 103.4, 104.9, 103.8, 105.6, 107.1, 106.3,
      108.5, 110.2, 109.4, 111.8, 113.5, 112.1, 114.6, 116.8, 115.3, 117.9,
      119.5, 118.2, 121.0, 123.4, 122.1, 124.8, 126.9, 125.4, 127.8, 129.5,
      128.1, 131.2, 133.5, 132.0, 134.8, 137.2, 135.9, 138.6, 141.2, 139.8,
      142.5, 145.1, 143.8, 146.9, 149.2, 147.8, 151.0, 153.8, 152.1, 155.4,
      158.2, 156.9, 160.5, 163.8, 162.1, 165.9, 169.2, 167.8, 171.5, 174.2
    ];

    const benchmarkPoints = points.map((p, i) => 100 + (p - 100) * 0.45 + (i % 2 === 0 ? 0.8 : -0.8));

    const min = Math.min(...points, ...benchmarkPoints);
    const max = Math.max(...points, ...benchmarkPoints);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const padX = 8;
      const padY = 12;

      ctx.clearRect(0, 0, w, h);

      if (progress < 1) {
        progress += 0.025;
        if (progress > 1) progress = 1;
      }

      const activeCount = Math.floor(points.length * progress);
      if (activeCount < 2) {
        animId = requestAnimationFrame(render);
        return;
      }

      const getX = (idx: number) => padX + (idx / (points.length - 1)) * (w - padX * 2);
      const getY = (val: number) => h - padY - ((val - min) / (max - min)) * (h - padY * 2);

      // Draw subtle grid lines
      ctx.strokeStyle = "rgba(100, 110, 103, 0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padX, h * 0.33);
      ctx.lineTo(w - padX, h * 0.33);
      ctx.moveTo(padX, h * 0.66);
      ctx.lineTo(w - padX, h * 0.66);
      ctx.stroke();

      // Benchmark line (grey dotted)
      ctx.save();
      ctx.strokeStyle = "rgba(130, 140, 135, 0.45)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      for (let i = 0; i < activeCount; i++) {
        const bx = getX(i);
        const by = getY(benchmarkPoints[i]);
        if (i === 0) ctx.moveTo(bx, by);
        else ctx.lineTo(bx, by);
      }
      ctx.stroke();
      ctx.restore();

      // Strategy line (violet curve)
      ctx.beginPath();
      for (let i = 0; i < activeCount; i++) {
        const sx = getX(i);
        const sy = getY(points[i]);
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.strokeStyle = "#8776FF";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Gradient area underneath
      const grad = ctx.createLinearGradient(0, padY, 0, h - padY);
      grad.addColorStop(0, "rgba(135, 118, 255, 0.22)");
      grad.addColorStop(1, "rgba(135, 118, 255, 0.0)");

      ctx.lineTo(getX(activeCount - 1), h - padY);
      ctx.lineTo(getX(0), h - padY);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Active leading endpoint dot
      const lastX = getX(activeCount - 1);
      const lastY = getY(points[activeCount - 1]);
      ctx.beginPath();
      ctx.arc(lastX, lastY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#8776FF";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(lastX, lastY, 6, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(135, 118, 255, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      if (progress < 1) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="w-full h-20">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
