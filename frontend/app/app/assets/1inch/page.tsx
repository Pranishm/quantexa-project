import { AssetWorkstation } from "@/components/assets/asset-view";

export const metadata = {
  title: "1inch Network (1INCH/USD) Research | QUANTORA",
  description: "Dedicated 1inch Network quantitative research environment, on-chain DEX routing, regime shifts, and risk parameters.",
};

export default function OneInchAssetPage() {
  return <AssetWorkstation assetKey="1inch" />;
}
