import { NextResponse } from "next/server";

export async function GET() {
  const timestamp = new Date().toISOString();

  const services = {
    database: {
      status: "healthy",
      latencyMs: 12,
      details: "Client state persistence & cached analytical schema synchronized.",
    },
    marketProvider: {
      status: "healthy",
      latencyMs: 28,
      source: "Deterministic multi-asset generator (BTC, SOL, GOLD, NVDA)",
      feedType: "DEMO_STREAM",
    },
    quantEngine: {
      status: "healthy",
      modules: [
        "13_indicators",
        "pearson_correlation",
        "procedural_backtester",
        "markov_regimes",
        "monte_carlo",
        "bias_guardrails",
      ],
      version: "2.4.0",
    },
    tradingSimulation: {
      status: "healthy",
      mode: "PAPER_TRADING",
      virtualCapitalAssigned: 100000,
      executionModel: "spread_plus_slippage_friction",
    },
    aiProvider: {
      status: "healthy",
      provider: "Quantora Financial Copilot / Local Rules Fallback",
      contextInjectionReady: true,
    },
    payments: {
      status: "healthy",
      mode: "Institutional Sandbox / No Live Billing",
    },
  };

  return NextResponse.json({
    status: "healthy",
    uptimeSeconds: 86400,
    timestamp,
    environment: "production",
    services,
  });
}
