import Link from "next/link";

import { Delta } from "@/components/stat";
import { Card, CardContent } from "@/components/ui/card";
import { assetColor, assetName } from "@/lib/colors";
import { date, price, signedPct } from "@/lib/format";
import type { AssetSymbol, Candle } from "@/lib/types";

/** Hairline sparkline: no axes, no grid, one 2px stroke in the asset's colour. */
export function Sparkline({
  values,
  color,
  width = 132,
  height = 40,
}: {
  values: number[];
  color: string;
  width?: number;
  height?: number;
}) {
  if (values.length < 2) return <svg aria-hidden width={width} height={height} />;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const pad = 3;
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * (width - pad * 2) + pad;
      const y = height - pad - ((v - min) / span) * (height - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg
      aria-hidden
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="shrink-0 overflow-visible"
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PriceCard({ symbol, candles }: { symbol: AssetSymbol; candles: Candle[] }) {
  const color = assetColor(symbol);
  const lastBar = candles[candles.length - 1];
  const prev = candles[candles.length - 2];
  const change = lastBar && prev ? lastBar.close / prev.close - 1 : null;
  const spark = candles.slice(-90).map((c) => c.close);

  return (
    <Link href={`/asset/${encodeURIComponent(symbol)}`} className="group block rounded-xl focus-visible:outline-2">
      <Card className="h-full border border-hairline bg-surface py-4 transition-colors duration-150 ease-in-out group-hover:bg-surface-2">
        <CardContent className="flex items-end justify-between gap-3 px-4">
          <div className="min-w-0 space-y-2">
            <div className="caption flex items-center gap-2">
              <span aria-hidden className="size-2" style={{ background: color }} />
              <span className="text-ink-2">{assetName(symbol)}</span>
              <span>{symbol}</span>
            </div>
            <div className="font-mono text-3xl font-medium tracking-tight text-ink">
              ${lastBar ? price(lastBar.close) : "n/a"}
            </div>
            <div className="flex items-center gap-2">
              <Delta value={change} text={signedPct(change, 2)} />
              <span className="text-xs text-ink-3">{lastBar ? `on ${date(lastBar.date)}` : ""}</span>
            </div>
          </div>
          <Sparkline values={spark} color={color} />
        </CardContent>
      </Card>
    </Link>
  );
}
