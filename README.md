# 🌌 Quantora Research Terminal

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-var(--accent)?style=for-the-badge&logo=vercel)](https://sns-phi-ten.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**Quantora** is a state-of-the-art quantitative finance research terminal. Built with a premium, adaptive "Bento Grid" UI and seamless Light/Dark mode transitions, it provides institutional-grade analytical tools, backtesting capabilities, and real-time market microstructure monitoring.

### 🌐 [View Live Deployment](https://sns-phi-ten.vercel.app/)

---

## ✨ Key Features & Intelligence Modules

The terminal is divided into a comprehensive suite of 10 fully-functional quantitative modules:

### 📈 Market Intelligence
* **Market Overview:** A highly dense, live-updating dashboard featuring molded asset cards, SVG candlestick charts with SMA overlays, and real-time Watchlists.
* **Cross-Asset Correlations:** Dynamic 3D network visualizations and heatmaps tracking systemic coupling.
* **Regime Analysis:** Advanced timelines segmenting price action into Bull, Bear, Range, and Volatility states.

### 🧪 Strategy & Simulation
* **Strategy Lab:** A sandbox for overlaying complex indicators and deriving math signals.
* **Backtest Studio:** Run vectorized historical simulations and view compounded equity curves for quantitative scenarios like *BTC Trend Following*.
* **Robustness & Integrity:** 3D parameter topography heatmaps to identify over-optimized, fragile parameters, backed by strict guardrails against look-ahead bias and data leakage.
* **Paper Trading:** Realistic simulated execution widgets tracking slippage and order book depth.

### 🤖 AI Integration
* **Featherless AI Copilot:** A deeply integrated intelligent assistant running on the DeepSeek model, capable of writing custom Python strategies, parsing financial terminology, and guiding users through complex market regimes.

---

## 🎨 Design & Animation

Quantora was meticulously crafted to feel like a premium, native application:
- **Adaptive UI:** Fully responsive CSS-variable driven theme system that flawlessly transitions between a sleek Dark Mode and a crisp Light Mode without hydration mismatches.
- **Claymorphism / Bento Grid:** Utilizes advanced CSS layering (`clay-card`, `clay-recessed`) to create subtle depth, frosted glass effects, and elevated surfaces.
- **Micro-interactions:** Smooth Framer Motion animations ensure every page transition, chart load, and layout shift feels organic and instantaneous.

---

## 💻 Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS + Vanilla CSS Variables
* **Animation:** Framer Motion
* **Icons:** Lucide React
* **AI Engine:** Featherless AI API (DeepSeek-Coder)
* **Deployment:** Vercel

---

## 🚀 Getting Started Locally

First, clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/quantexa-project.git
cd quantexa-project/frontend
npm install
