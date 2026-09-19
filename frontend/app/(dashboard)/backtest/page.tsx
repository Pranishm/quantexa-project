import type { Metadata } from "next";

import { BacktestView } from "@/components/features/backtest/backtest-view";

export const metadata: Metadata = { title: "Backtest" };

export default function BacktestPage() {
  return <BacktestView />;
}
