"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Quantexa UI boundary caught:", error);
  }, [error]);

  return (
    <div
      role="alert"
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 font-sans space-y-3"
    >
      <div className="text-[10px] font-mono text-[var(--negative)] uppercase tracking-widest flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[var(--negative)]" />
        <span>Something went wrong</span>
      </div>

      <h1 className="text-xl font-bold text-[var(--text-primary)]">
        This view could not be loaded.
      </h1>

      <p className="text-xs text-[var(--text-secondary)] max-w-sm">
        {error.message ||
          "An unexpected error occurred while loading this part of the research platform."}
      </p>

      <div className="flex items-center gap-3 pt-3">
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-4 py-2 bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] border border-[var(--border)] rounded text-xs font-medium text-[var(--text-primary)] transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Try again</span>
        </button>

        <Link
          href="/"
          className="flex items-center gap-1.5 px-4 py-2 bg-[var(--text-primary)] hover:opacity-90 text-[var(--bg-root)] rounded text-xs font-semibold transition-colors"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
