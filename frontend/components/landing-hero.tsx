"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function LandingHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    if (!prefersReducedMotion) {
      root.classList.add("anim");
      const startTimer = setTimeout(() => {
        root.classList.add("go");
      }, 100);

      const cleanupTimer = setTimeout(() => {
        root.classList.remove("anim");
        root.classList.remove("go");
      }, 3000);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(cleanupTimer);
        root.classList.remove("anim");
        root.classList.remove("go");
      };
    }
  }, []);

  // Dual-video crossfade loop logic (0.9s crossfade at 10.04s)
  useEffect(() => {
    const A = videoARef.current;
    const B = videoBRef.current;
    if (!A || !B) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      A.removeAttribute("autoplay");
      try {
        A.pause();
        B.pause();
      } catch {}
      return;
    }

    const FADE = 0.9;
    let cur = A;
    let nxt = B;
    let swapping = false;

    const playVideo = (v: HTMLVideoElement) => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };

    playVideo(A);

    const tick = () => {
      if (swapping || !cur.duration) return;
      if (cur.duration - cur.currentTime > FADE) return;

      swapping = true;
      const out = cur;
      nxt.currentTime = 0;
      playVideo(nxt);
      nxt.classList.add("is-active");
      out.classList.remove("is-active");

      const temp = cur;
      cur = nxt;
      nxt = temp;

      setTimeout(() => {
        out.pause();
        out.currentTime = 0;
        swapping = false;
      }, FADE * 1000 + 100);
    };

    A.addEventListener("timeupdate", tick);
    B.addEventListener("timeupdate", tick);

    return () => {
      A.removeEventListener("timeupdate", tick);
      B.removeEventListener("timeupdate", tick);
    };
  }, []);

  return (
    <main className="hero-landing">
      {/* Background Rotating Earth Sphere */}
      <div
        className="hero-bg"
        role="img"
        aria-label="Stylised globe of Earth rendered as a violet dot matrix against a starfield, slowly rotating"
      >
        <video
          ref={videoARef}
          className="hero-bg-video is-active"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="https://d2ol7oe51mr4n.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4"
            type="video/mp4"
          />
        </video>
        <video
          ref={videoBRef}
          className="hero-bg-video"
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="https://d2ol7oe51mr4n.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="hero-atmospheric-overlay" aria-hidden="true" />

      {/* Institutional Top Navigation */}
      <header className="hero-nav">
        <Link className="hero-logo" href="/app/overview" aria-label="QUANTORA Home">
          <span className="hero-logo-glyph" aria-hidden="true" />
          QUANTORA
        </Link>

        <nav className="hero-nav-links" aria-label="Primary">
          <Link href="/app/markets">Markets</Link>
          <Link href="/app/research/strategy-lab">Strategy Lab</Link>
          <Link href="/app/research/backtest">Backtest</Link>
          <Link href="/app/trade/paper">Simulation</Link>
          <Link href="/app/learn">Academy</Link>
        </nav>

        <div className="hero-nav-actions">
          <Link className="hero-btn hero-btn-login" href="/login">
            Sign In
          </Link>
          <Link className="hero-btn hero-btn-start" href="/app/overview">
            Open Station →
          </Link>
        </div>

        <button
          className="hero-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
        </button>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav className="hero-menu open" aria-label="Mobile">
          <Link href="/app/markets" onClick={() => setMenuOpen(false)}>Markets</Link>
          <Link href="/app/research/strategy-lab" onClick={() => setMenuOpen(false)}>Strategy Lab</Link>
          <Link href="/app/research/backtest" onClick={() => setMenuOpen(false)}>Backtest</Link>
          <Link href="/app/trade/paper" onClick={() => setMenuOpen(false)}>Simulation</Link>
          <Link href="/app/learn" onClick={() => setMenuOpen(false)}>Academy</Link>
          <Link href="/login" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link href="/app/overview" style={{ color: "#ffffff", fontWeight: 600 }}>Open Station →</Link>
        </nav>
      )}

      {/* Cinematic Centerpiece */}
      <div className="hero-inner">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          <span>Quantitative Research Station</span>
        </div>

        <h1>
          <span className="hero-ln"><span className="hero-ln-i">Research markets.</span></span>
          <span className="hero-ln"><span className="hero-ln-i">Stress strategies. Understand risk.</span></span>
        </h1>

        <p className="hero-sub">
          A private quantitative intelligence terminal for backtesting, regime-conditioned risk analysis, and systematic portfolio simulation.
        </p>

        <div className="hero-ctas">
          <Link className="hero-btn hero-btn-lg hero-btn-primary" href="/app/overview">
            Start Researching
          </Link>
          <Link className="hero-btn hero-btn-lg hero-btn-ghost" href="/app/markets/cross-asset">
            Explore the Platform
          </Link>
        </div>

        {/* Clean Institutional Research Telemetry Panel */}
        <Link href="/app/overview" className="hero-research-preview" title="Launch Quantitative Terminal">
          <div className="hero-preview-header">
            <span className="hero-preview-title">Market Telemetry Snapshot</span>
            <div className="hero-preview-meta">
              <span>LATENCY: <span className="val">14ms</span></span>
              <span style={{ marginLeft: "12px" }}>STATUS: <span className="pos">LIVE FEED</span></span>
            </div>
          </div>

          <div className="hero-preview-body">
            <div className="hero-preview-metrics">
              <div className="hero-metric-box">
                <span className="label">Sharpe Ratio</span>
                <span className="val pos">2.94</span>
              </div>
              <div className="hero-metric-box">
                <span className="label">Max Drawdown</span>
                <span className="val">-3.6%</span>
              </div>
              <div className="hero-metric-box">
                <span className="label">Annual Alpha</span>
                <span className="val pos">+34.8%</span>
              </div>
            </div>

            <div className="hero-preview-chart">
              <svg className="hero-preview-svg" viewBox="0 0 340 80" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7868ff" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#7868ff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="20" x2="340" y2="20" stroke="#20252c" strokeWidth="1" strokeDasharray="2 4" />
                <line x1="0" y1="50" x2="340" y2="50" stroke="#20252c" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M0,65 Q45,55 90,40 T180,24 T260,32 T340,10 L340,80 L0,80 Z" fill="url(#curveGrad)" />
                <path d="M0,65 Q45,55 90,40 T180,24 T260,32 T340,10" fill="none" stroke="#f4f5f7" strokeWidth="2" />
                <circle cx="340" cy="10" r="3" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <style jsx global>{`
        :root {
          --u: min(calc(100vw / 1280), calc(100dvh / 760));
          --ink: #f4f5f7;
          --ink-muted: #a8afb8;
          --ink-faint: #68717c;
          --panel: rgba(8, 10, 13, 0.75);
          --brand-accent: #7868ff;
          --glass-line: rgba(255, 255, 255, 0.08);
          --e-reveal: cubic-bezier(0.16, 1, 0.3, 1);
          --e-soft: cubic-bezier(0.25, 0.8, 0.3, 1);
        }

        .hero-landing {
          position: relative;
          width: 100vw;
          height: 100dvh;
          overflow: hidden;
          background: #050608;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #f4f5f7;
        }

        .hero-bg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: max(100vw, calc(100dvh * 1.6));
          height: max(62.5vw, 100dvh);
          background-color: #050608;
        }
        .hero-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 51% 8%;
          display: block;
          background-color: #050608;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.9s linear;
        }
        .hero-bg-video.is-active {
          opacity: 1;
        }

        .hero-atmospheric-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            circle at 50% 32%,
            rgba(120, 104, 255, 0.08) 0%,
            rgba(8, 10, 13, 0.4) 50%,
            rgba(5, 6, 8, 0.92) 100%
          );
          z-index: 1;
        }

        .hero-nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: calc(67 * var(--u));
          display: flex;
          align-items: center;
          padding-left: calc(32 * var(--u));
          padding-right: calc(32 * var(--u));
          z-index: 3;
        }
        .hero-logo {
          font-weight: 700;
          font-size: calc(18 * var(--u));
          letter-spacing: calc(0.2 * var(--u));
          color: #f4f5f7;
          text-decoration: none;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: calc(10 * var(--u));
        }
        .hero-logo-glyph {
          width: calc(14 * var(--u));
          height: calc(14 * var(--u));
          border-radius: 3px;
          background: #7868ff;
        }

        .hero-nav-links {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: calc(24 * var(--u));
          white-space: nowrap;
          background: rgba(8, 10, 13, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: calc(6 * var(--u)) calc(20 * var(--u));
          border-radius: calc(20 * var(--u));
        }
        .hero-nav-links a {
          color: var(--ink-muted);
          text-decoration: none;
          font-size: calc(12 * var(--u));
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: color 0.18s ease;
        }
        .hero-nav-links a:hover {
          color: #ffffff;
        }

        .hero-nav-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: calc(12 * var(--u));
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
          text-decoration: none;
          white-space: nowrap;
          border: 0;
          cursor: pointer;
          border-radius: 6px;
        }
        .hero-btn-login {
          height: calc(30 * var(--u));
          padding: 0 calc(14 * var(--u));
          background: transparent;
          color: var(--ink-muted);
          font-size: calc(12 * var(--u));
          font-weight: 500;
          transition: color 0.18s ease;
        }
        .hero-btn-login:hover {
          color: #ffffff;
        }

        .hero-btn-start {
          height: calc(30 * var(--u));
          padding: 0 calc(14 * var(--u));
          background: #f4f5f7;
          color: #050608;
          font-size: calc(12 * var(--u));
          font-weight: 600;
          gap: calc(6 * var(--u));
          transition: background 0.18s ease, transform 0.18s ease;
        }
        .hero-btn-start:hover {
          background: #ffffff;
          transform: translateY(-1px);
        }

        .hero-burger {
          display: none;
          margin-left: auto;
          width: 36px;
          height: 30px;
          align-items: center;
          justify-content: center;
          background: #101318;
          border-radius: 6px;
          border: 1px solid #20252c;
          cursor: pointer;
          padding: 0;
        }
        .hero-burger span {
          display: block;
          width: 16px;
          height: 1.5px;
          background: #f4f5f7;
          border-radius: 1px;
          position: relative;
        }
        .hero-burger span::before, .hero-burger span::after {
          content: '';
          position: absolute;
          left: 0;
          width: 16px;
          height: 1.5px;
          background: #f4f5f7;
          border-radius: 1px;
        }
        .hero-burger span::before { top: -5px; }
        .hero-burger span::after { top: 5px; }

        .hero-inner {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) translate(calc(8.5 * var(--u)), calc(13.1 * var(--u)));
          width: max-content;
          text-align: center;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: calc(8 * var(--u));
          padding: calc(4 * var(--u)) calc(12 * var(--u));
          border-radius: 20px;
          background: rgba(120, 104, 255, 0.08);
          border: 1px solid rgba(120, 104, 255, 0.25);
          color: #a8afb8;
          font-size: calc(11 * var(--u));
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: calc(20 * var(--u));
        }
        .hero-tag-dot {
          width: calc(6 * var(--u));
          height: calc(6 * var(--u));
          border-radius: 50%;
          background: #36c98f;
        }

        .hero-inner h1 {
          margin: 0;
          font-weight: 500;
          font-size: calc(84 * var(--u));
          line-height: calc(88 * var(--u));
          letter-spacing: calc(-1.2 * var(--u));
          color: #ffffff;
        }
        .hero-ln { display: block; }
        .hero-ln-i { display: block; }

        .hero-sub {
          margin: calc(20 * var(--u)) 0 0;
          font-weight: 300;
          font-size: calc(17 * var(--u));
          line-height: calc(26 * var(--u));
          letter-spacing: -0.01em;
          color: #a8afb8;
          max-width: 50ch;
        }

        .hero-ctas {
          margin-top: calc(28 * var(--u));
          display: flex;
          align-items: center;
          justify-content: center;
          gap: calc(12 * var(--u));
        }

        .hero-btn-lg {
          height: calc(40 * var(--u));
          border-radius: 6px;
          font-size: calc(13 * var(--u));
          font-weight: 600;
          padding: 0 calc(20 * var(--u));
        }
        .hero-btn-primary {
          background: #f4f5f7;
          color: #050608;
          transition: background 0.18s ease, transform 0.18s ease;
        }
        .hero-btn-primary:hover {
          background: #ffffff;
          transform: translateY(-1px);
        }

        .hero-btn-ghost {
          background: rgba(16, 19, 24, 0.7);
          color: #f4f5f7;
          border: 1px solid #20252c;
          backdrop-filter: blur(8px);
          transition: background 0.18s ease, border-color 0.18s ease;
        }
        .hero-btn-ghost:hover {
          background: #151920;
          border-color: #303640;
        }

        .hero-research-preview {
          margin-top: calc(32 * var(--u));
          width: min(calc(100vw - 48px), calc(680 * var(--u)));
          background: rgba(11, 13, 16, 0.75);
          border: 1px solid #20252c;
          border-radius: 8px;
          padding: calc(14 * var(--u)) calc(20 * var(--u));
          backdrop-filter: blur(20px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          gap: calc(12 * var(--u));
          text-align: left;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .hero-research-preview:hover {
          border-color: #303640;
          transform: translateY(-2px);
        }
        .hero-preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: calc(10 * var(--u));
          border-bottom: 1px solid #20252c;
        }
        .hero-preview-title {
          font-size: calc(11 * var(--u));
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #a8afb8;
        }
        .hero-preview-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: calc(11 * var(--u));
          color: #68717c;
        }
        .hero-preview-meta .val { color: #f4f5f7; }
        .hero-preview-meta .pos { color: #36c98f; }

        .hero-preview-body {
          display: grid;
          grid-template-columns: calc(180 * var(--u)) 1fr;
          gap: calc(20 * var(--u));
          align-items: center;
        }
        .hero-preview-metrics {
          display: flex;
          flex-direction: column;
          gap: calc(8 * var(--u));
        }
        .hero-metric-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: calc(6 * var(--u)) calc(10 * var(--u));
          background: #101318;
          border: 1px solid #20252c;
          border-radius: 4px;
        }
        .hero-metric-box .label {
          font-size: calc(11 * var(--u));
          color: #68717c;
        }
        .hero-metric-box .val {
          font-family: 'JetBrains Mono', monospace;
          font-size: calc(13 * var(--u));
          font-weight: 600;
          color: #f4f5f7;
        }
        .hero-metric-box .val.pos { color: #36c98f; }

        .hero-preview-chart {
          height: calc(80 * var(--u));
          position: relative;
        }
        .hero-preview-svg {
          width: 100%;
          height: 100%;
        }

        .hero-menu { display: none; }
        .hero-menu.open {
          display: flex;
          position: absolute;
          top: 60px;
          right: 24px;
          width: 240px;
          background: #0b0d10;
          border: 1px solid #20252c;
          border-radius: 8px;
          padding: 12px;
          flex-direction: column;
          gap: 8px;
          z-index: 10;
        }
        .hero-menu a {
          color: #a8afb8;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 14px;
        }
        .hero-menu a:hover {
          color: #ffffff;
          background: #151920;
        }

        @media (max-width: 1080px) {
          .hero-nav-links, .hero-nav-actions { display: none; }
          .hero-burger { display: flex; }
          .hero-research-preview { width: calc(100vw - 48px); }
        }
      `}</style>
    </main>
  );
}
