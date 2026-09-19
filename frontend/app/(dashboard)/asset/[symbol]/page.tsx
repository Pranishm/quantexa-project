import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AssetView } from "@/components/features/asset-view";
import { ASSET_ORDER, assetName } from "@/lib/colors";
import type { AssetSymbol } from "@/lib/types";

// Only the three tracked tickers exist; anything else is a 404 rather than a request to the API.
export const dynamicParams = false;

export function generateStaticParams() {
  return ASSET_ORDER.map((symbol) => ({ symbol }));
}

/** Route segments can arrive percent-encoded (GC=F becomes GC%3DF), so decode before comparing. */
function resolve(raw: string): AssetSymbol | null {
  const symbol = decodeURIComponent(raw);
  return (ASSET_ORDER as string[]).includes(symbol) ? (symbol as AssetSymbol) : null;
}

export async function generateMetadata(props: PageProps<"/asset/[symbol]">): Promise<Metadata> {
  const symbol = resolve((await props.params).symbol);
  return { title: symbol ? assetName(symbol) : "Asset not found" };
}

export default async function AssetPage(props: PageProps<"/asset/[symbol]">) {
  const symbol = resolve((await props.params).symbol);
  if (!symbol) notFound();
  return <AssetView symbol={symbol} />;
}
