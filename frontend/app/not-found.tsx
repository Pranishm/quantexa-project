import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 font-sans space-y-3">
      <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
        404 · Page not found
      </div>

      <h1 className="text-xl font-bold text-[var(--text-primary)]">
        This page does not exist.
      </h1>

      <p className="text-xs text-[var(--text-secondary)] max-w-sm">
        The requested view could not be found on the research platform.
      </p>

      <div className="pt-2">
        <Link
          href="/dashboard"
          className="inline-flex items-center px-4 py-2 bg-[var(--accent)] hover:opacity-90 text-white rounded text-xs font-semibold transition-colors"
        >
          Open Dashboard
        </Link>
      </div>
    </div>
  );
}
