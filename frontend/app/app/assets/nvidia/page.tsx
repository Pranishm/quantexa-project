import { AssetWorkstation } from "@/components/assets/asset-view";

export const metadata = {
  title: "NVIDIA (NVDA) Research | QUANTORA",
  description: "Dedicated NVIDIA quantitative research workstation, AI compute revenue expansion, semiconductor cycles, and beta exposure.",
};

export default function NvidiaAssetPage() {
  return <AssetWorkstation assetKey="nvidia" />;
}
