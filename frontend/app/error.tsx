"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Database } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Quantora UI boundary caught:", error);
  }, [error]);

  return (
    <div
      role="alert"
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 font-sans space-y-3"
    >
      <div className="text-[10px] font-mono text-[#E85D68] uppercase tracking-widest flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#E85D68]" />
        <span>MARKET DATA UNAVAILABLE</span>
      </div>

      <h1 className="text-xl font-bold text-[#F4F5F7]">
        Unable to retrieve live market data.
      </h1>

      <p className="text-xs text-[#A8AFB8] max-w-sm">
        {error.message || "An intermittent network disruption prevented data normalization. You can retry the feed or fall back to the validated research dataset."}
      </p>

      <div className="flex items-center gap-3 pt-3">
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#101318] hover:bg-[#151920] border border-[#20252C] rounded text-xs font-medium text-[#F4F5F7] transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#7868FF]" />
          <span>Retry Feed</span>
        </button>

        <Link
          href="/app/overview"
          className="flex items-center gap-1.5 px-4 py-2 bg-[#F4F5F7] hover:bg-[#FFFFFF] text-[#050608] rounded text-xs font-semibold transition-colors"
        >
          <Database className="w-3.5 h-3.5" />
          <span>Use Research Dataset</span>
        </Link>
      </div>

      <div className="pt-2 text-[10px] text-[#68717C] font-mono">
        FALLBACK: RESEARCH DATASET (CACHED PARQUET)
      </div>
    </div>
  );
}
