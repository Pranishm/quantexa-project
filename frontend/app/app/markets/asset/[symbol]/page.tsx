import { AssetView } from "@/components/features/asset-view";
import type { AssetSymbol } from "@/lib/types";

export const dynamicParams = true;

const VALID_SYMBOLS: Record<string, AssetSymbol> = {
  NVDA: "NVDA",
  BTC: "BTC",
  "BTC-USD": "BTC-USD",
  SOL: "SOL",
  GOLD: "GOLD",
  "GC=F": "GC=F",
};

export default async function AppAssetDeepDivePage({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const resolvedParams = await params;
  const raw = decodeURIComponent(resolvedParams?.symbol || "NVDA").toUpperCase();
  const symbol: AssetSymbol = VALID_SYMBOLS[raw] || "NVDA";

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <AssetView symbol={symbol} />
    </div>
  );
}
