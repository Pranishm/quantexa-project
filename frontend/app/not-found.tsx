import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 font-sans space-y-3">
      <div className="text-xs font-mono text-[#68717C] uppercase tracking-widest">
        404
      </div>
      <h1 className="text-xl font-bold text-[#F4F5F7]">
        Research page unavailable.
      </h1>
      <p className="text-xs text-[#A8AFB8] max-w-sm">
        The requested workspace could not be found.
      </p>
      <div className="pt-2">
        <Link
          href="/app/overview"
          className="inline-flex items-center px-4 py-2 bg-[#101318] hover:bg-[#151920] border border-[#20252C] hover:border-[#303640] rounded text-xs font-medium text-[#F4F5F7] transition-colors"
        >
          Return to Research
        </Link>
      </div>
    </div>
  );
}
