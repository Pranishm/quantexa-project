import { AssetWorkstation } from "@/components/assets/asset-view";

export const metadata = {
  title: "Solana (SOL/USD) Research | QUANTORA",
  description: "Dedicated Solana quantitative research workstation, DEX liquidity, network throughput, and beta elasticity.",
};

export default function SolanaAssetPage() {
  return <AssetWorkstation assetKey="solana" />;
}
