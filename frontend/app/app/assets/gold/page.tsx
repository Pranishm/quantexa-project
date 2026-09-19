import { AssetWorkstation } from "@/components/assets/asset-view";

export const metadata = {
  title: "Gold (XAU/USD) Research | QUANTORA",
  description: "Dedicated Gold quantitative research workstation, central bank accumulation, real rates sensitivity, and cross-asset correlation.",
};

export default function GoldAssetPage() {
  return <AssetWorkstation assetKey="gold" />;
}
