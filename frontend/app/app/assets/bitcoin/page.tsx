import { AssetWorkstation } from "@/components/assets/asset-view";

export const metadata = {
  title: "Bitcoin (BTC/USD) Research | QUANTORA",
  description: "Dedicated Bitcoin quantitative research environment, on-chain metrics, regime shifts, and risk parameters.",
};

export default function BitcoinAssetPage() {
  return <AssetWorkstation assetKey="bitcoin" />;
}
