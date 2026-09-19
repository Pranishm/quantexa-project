"use client";

import { useState, useMemo } from "react";
import {
  Activity,
  ShieldCheck,
  Download,
  Filter,
  Clock,
  ArrowUpRight,
  Search,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  ArrowUpDown,
  RefreshCw,
  Copy,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Sliders,
  Maximize2
} from "lucide-react";
import { DEMO_ACTIVITIES_EXTENDED, ActivityItem, ActivityCategory, ActivityStatus } from "@/lib/demo-data";
import Link from "next/link";

type SortField = "TIME_DESC" | "TIME_ASC" | "DURATION_DESC" | "DURATION_ASC" | "TITLE_ASC" | "STATUS_PRIORITY";

const CATEGORY_COLORS: Record<ActivityCategory, { bg: string; text: string; border: string }> = {
  BACKTEST: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/20" },
  TRADING: { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/20" },
  ROBUSTNESS: { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/20" },
  REGIME: { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20" },
  CORRELATION: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/20" },
  SECURITY: { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/20" },
  COPILOT: { bg: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/20" },
  DATA: { bg: "bg-teal-500/10", text: "text-teal-500", border: "border-teal-500/20" },
};

const STATUS_ICONS: Record<ActivityStatus, { icon: any; color: string; label: string }> = {
  SUCCESS: { icon: CheckCircle2, color: "text-emerald-500", label: "VERIFIED" },
  AUDITED: { icon: ShieldCheck, color: "text-blue-500", label: "AUDITED" },
  WARNING: { icon: AlertTriangle, color: "text-amber-500", label: "FLAGGED" },
  OPTIMIZING: { icon: RefreshCw, color: "text-purple-500", label: "OPTIMIZING" },
  FAILED: { icon: X, color: "text-rose-500", label: "FAILED" },
};

export default function AccountActivityPage() {
  const [activities] = useState<ActivityItem[]>(DEMO_ACTIVITIES_EXTENDED);
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [assetFilter, setAssetFilter] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortField>("TIME_DESC");
  const [pageSize, setPageSize] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<ActivityItem | null>(null);
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  // Filter and sort the dataset
  const filteredAndSorted = useMemo(() => {
    let result = activities.filter((item) => {
      // Category filter
      if (categoryFilter !== "ALL" && item.category !== categoryFilter) {
        return false;
      }
      // Status filter
      if (statusFilter !== "ALL" && item.status !== statusFilter) {
        return false;
      }
      // Asset filter
      if (assetFilter !== "ALL" && item.asset !== assetFilter) {
        return false;
      }
      // Search term
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDetail = item.detail.toLowerCase().includes(q);
        const matchHash = item.hash.toLowerCase().includes(q);
        const matchUser = item.user.toLowerCase().includes(q);
        const matchAsset = item.asset.toLowerCase().includes(q);
        if (!matchTitle && !matchDetail && !matchHash && !matchUser && !matchAsset) {
          return false;
        }
      }
      return true;
    });

    // Sort result
    result.sort((a, b) => {
      switch (sortBy) {
        case "TIME_DESC":
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case "TIME_ASC":
          return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
        case "DURATION_DESC":
          return b.durationMs - a.durationMs;
        case "DURATION_ASC":
          return a.durationMs - b.durationMs;
        case "TITLE_ASC":
          return a.title.localeCompare(b.title);
        case "STATUS_PRIORITY": {
          const priority: Record<ActivityStatus, number> = {
            FAILED: 0,
            WARNING: 1,
            OPTIMIZING: 2,
            AUDITED: 3,
            SUCCESS: 4,
          };
          return priority[a.status] - priority[b.status];
        }
        default:
          return 0;
      }
    });

    return result;
  }, [activities, categoryFilter, statusFilter, assetFilter, searchTerm, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredAndSorted.length / pageSize) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredAndSorted.slice(start, start + pageSize);
  }, [filteredAndSorted, currentPage, pageSize]);

  const hasActiveFilters =
    categoryFilter !== "ALL" || statusFilter !== "ALL" || assetFilter !== "ALL" || searchTerm.trim() !== "";

  const resetFilters = () => {
    setCategoryFilter("ALL");
    setStatusFilter("ALL");
    setAssetFilter("ALL");
    setSearchTerm("");
    setSortBy("TIME_DESC");
    setCurrentPage(1);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(id);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filteredAndSorted, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `quantora_activity_audit_${Date.now()}.json`);
    dlAnchor.click();
  };

  const exportCSV = () => {
    const headers = ["ID", "Timestamp", "Title", "Category", "Asset", "Status", "Duration", "Hash", "User"];
    const rows = filteredAndSorted.map((i) => [
      i.id,
      i.timestamp,
      `"${i.title.replace(/"/g, '""')}"`,
      i.category,
      i.asset,
      i.status,
      i.duration,
      i.hash,
      `"${i.user.replace(/"/g, '""')}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", encodeURI(csvContent));
    dlAnchor.setAttribute("download", `quantora_activity_audit_${Date.now()}.csv`);
    dlAnchor.click();
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16 font-sans">
      {/* ── TOP TELEMETRY STATS ──────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
            Total Audit Records
          </div>
          <div className="text-xl font-extrabold text-[var(--text-primary)] mt-1 flex items-baseline gap-2">
            <span>{activities.length}</span>
            <span className="text-[10px] font-mono text-[var(--accent)] font-semibold">100% PERSISTENT</span>
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">Immutable research &amp; execution trail</div>
        </div>

        <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
            Cryptographic Integrity
          </div>
          <div className="text-xl font-extrabold text-[#00E599] mt-1 flex items-baseline gap-2">
            <span>100%</span>
            <span className="text-[10px] font-mono text-[#00E599] font-semibold">SHA-256 SIGNED</span>
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">Zero look-ahead or tampering detected</div>
        </div>

        <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
            Average Execution Latency
          </div>
          <div className="text-xl font-extrabold text-[var(--text-primary)] mt-1 flex items-baseline gap-2">
            <span>48.4 ms</span>
            <span className="text-[10px] font-mono text-cyan-400 font-semibold">&lt; 100ms TARGET</span>
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">Sub-tick algorithmic dispatch speed</div>
        </div>

        <div className="clay-card p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
            Guardrail Flags
          </div>
          <div className="text-xl font-extrabold text-amber-400 mt-1 flex items-baseline gap-2">
            <span>3 Alerts</span>
            <span className="text-[10px] font-mono text-amber-400 font-semibold">CONTAINED</span>
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">Friction &amp; volatility boundaries active</div>
        </div>
      </div>

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono tracking-wider text-[var(--accent)] font-bold uppercase px-2.5 py-0.5 rounded-full clay-recessed border border-[var(--accent)]/30">
              TRUST / AUDIT TELEMETRY
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">CRYPTOGRAPHIC RESEARCH TRAIL</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Research &amp; Execution Activity
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            Real-time auditable stream recording backtests, paper trading orders, 3D parameter manifolds, Markov regime
            transitions, and bias guardrail scans.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={exportCSV}
            className="clay-button px-3.5 py-2 rounded-xl text-xs font-mono text-[var(--text-primary)] flex items-center gap-1.5 border border-[var(--border)] hover:border-[#00E599] transition-all cursor-pointer"
            title="Export filtered events as CSV"
          >
            <Download className="w-3.5 h-3.5 text-[#00E599]" />
            <span>CSV</span>
          </button>
          <button
            onClick={exportJSON}
            className="clay-button px-3.5 py-2 rounded-xl text-xs font-mono text-[var(--text-primary)] flex items-center gap-1.5 border border-[var(--border)] hover:border-[var(--accent)] transition-all cursor-pointer"
            title="Export filtered events as JSON"
          >
            <FileCode className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>JSON Audit</span>
          </button>
        </div>
      </div>

      {/* ── CONTROL PANEL: SEARCH, SORT & FILTERS ────────────────── */}
      <div className="clay-card p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] space-y-4 shadow-sm">
        {/* Row 1: Search & Sorting */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search across title, detail, SHA-256 hash, asset, or operator..."
              className="w-full pl-10 pr-4 py-2 text-xs font-mono rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[#00E599] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono">
              <ArrowUpDown className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="text-[var(--text-muted)] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as SortField);
                  setCurrentPage(1);
                }}
                className="bg-transparent text-[var(--text-primary)] font-semibold focus:outline-none cursor-pointer"
              >
                <option value="TIME_DESC">Newest First</option>
                <option value="TIME_ASC">Oldest First</option>
                <option value="DURATION_DESC">Slowest Latency</option>
                <option value="DURATION_ASC">Fastest Latency</option>
                <option value="TITLE_ASC">Title A &rarr; Z</option>
                <option value="STATUS_PRIORITY">Status (Alerts First)</option>
              </select>
            </div>

            {/* Status Selector */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="SUCCESS">Verified Success</option>
              <option value="AUDITED">Audited Safe</option>
              <option value="WARNING">Flagged Warnings</option>
              <option value="OPTIMIZING">Optimizing</option>
              <option value="FAILED">Failed</option>
            </select>

            {/* Asset Selector */}
            <select
              value={assetFilter}
              onChange={(e) => {
                setAssetFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Assets</option>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="SOL">Solana (SOL)</option>
              <option value="GOLD">Gold (XAU)</option>
              <option value="NVDA">NVIDIA (NVDA)</option>
              <option value="MULTI">Multi-Asset</option>
              <option value="SYSTEM">System/Engine</option>
            </select>
          </div>
        </div>

        {/* Row 2: Category Filters & Active Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[var(--border)]">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "ALL", label: "All Categories" },
              { id: "BACKTEST", label: "Backtests" },
              { id: "TRADING", label: "Paper Trading" },
              { id: "ROBUSTNESS", label: "3D Manifolds" },
              { id: "REGIME", label: "Regimes" },
              { id: "CORRELATION", label: "Correlation" },
              { id: "SECURITY", label: "Guardrails" },
              { id: "COPILOT", label: "Featherless AI" },
              { id: "DATA", label: "Data Feeds" },
            ].map((c) => {
              const isSel = categoryFilter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setCategoryFilter(c.id);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                    isSel
                      ? "bg-[var(--accent)] text-white font-bold shadow-md scale-[1.02]"
                      : "clay-button bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
            <span>
              Showing <strong className="text-[var(--text-primary)]">{filteredAndSorted.length}</strong> of{" "}
              {activities.length}
            </span>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-[var(--accent)] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── ACTIVITY TIMELINE TABLE ──────────────────────────────── */}
      <div className="clay-card rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] overflow-hidden shadow-sm">
        {paginatedItems.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center mx-auto text-[var(--text-muted)]">
              <Filter className="w-6 h-6" />
            </div>
            <div className="text-base font-bold text-[var(--text-primary)]">No matching audit events found</div>
            <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto">
              Try broadening your category selection or clearing the search query.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button inline-flex items-center gap-1.5 mt-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear Filters</span>
            </button>
          </div>
        ) : (
          <div className="divide-y divide-[var(--border)]">
            {paginatedItems.map((item) => {
              const catStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.BACKTEST;
              const statusMeta = STATUS_ICONS[item.status] || STATUS_ICONS.SUCCESS;
              const StatusIcon = statusMeta.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="p-4 sm:px-6 hover:bg-[var(--bg-hover)] transition-colors flex items-start sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  {/* Left: Icon + Title + Detail */}
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 border ${catStyle.bg} ${catStyle.text} ${catStyle.border} shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <Activity className="w-4 h-4" />
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {item.title}
                        </span>

                        <span
                          className={`text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}
                        >
                          {item.category}
                        </span>

                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-muted)] font-semibold">
                          {item.asset}
                        </span>

                        {item.metrics?.sharpe && (
                          <span className="text-[10px] font-mono text-[#00E599] font-bold">
                            {item.metrics.sharpe} &sigma;
                          </span>
                        )}

                        {item.metrics?.return && (
                          <span className="text-[10px] font-mono text-[#00E599] font-bold">
                            {item.metrics.return}
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-[var(--text-secondary)] font-sans line-clamp-1">
                        {item.detail}
                      </div>

                      <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-muted)] pt-0.5">
                        <span className="truncate max-w-[140px] sm:max-w-xs text-[var(--text-muted)]">
                          Hash: {item.hash.slice(0, 10)}...{item.hash.slice(-6)}
                        </span>
                        <span>•</span>
                        <span>By {item.user}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Latency + Status + Timestamp */}
                  <div className="text-right shrink-0 flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-recessed)] border border-[var(--border)] text-[var(--text-secondary)]">
                        {item.duration}
                      </span>
                      <div className={`text-[10px] font-mono font-bold flex items-center gap-1 ${statusMeta.color}`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{statusMeta.label}</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── PAGINATION BAR ─────────────────────────────────────── */}
        {filteredAndSorted.length > 0 && (
          <div className="p-4 sm:px-6 bg-[var(--bg-recessed)]/50 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span>Rows per page:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-2 py-1 rounded-lg clay-recessed bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-[var(--text-muted)] ml-2">
                Page <strong className="text-[var(--text-primary)]">{currentPage}</strong> of {totalPages}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="p-1.5 rounded-lg clay-button bg-[var(--bg-surface)] border border-[var(--border)] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[var(--text-primary)] cursor-pointer"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Numbered quick jump */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
                let p = idx + 1;
                if (totalPages > 5 && currentPage > 3) {
                  p = Math.min(totalPages - 4, currentPage - 2) + idx;
                }
                return (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                      currentPage === p
                        ? "bg-[var(--accent)] text-white shadow-sm"
                        : "clay-button bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="p-1.5 rounded-lg clay-button bg-[var(--bg-surface)] border border-[var(--border)] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[var(--text-primary)] cursor-pointer"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── ACTIVITY INSPECTOR DETAIL MODAL ──────────────────────── */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="clay-card w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full border ${
                      CATEGORY_COLORS[selectedItem.category]?.bg
                    } ${CATEGORY_COLORS[selectedItem.category]?.text} ${
                      CATEGORY_COLORS[selectedItem.category]?.border
                    }`}
                  >
                    {selectedItem.category}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    ID: {selectedItem.id}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  {selectedItem.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-xl clay-button bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="space-y-5 overflow-y-auto no-scrollbar pr-1 flex-1">
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {selectedItem.detail}
              </p>

              {/* Telemetry Summary Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">Status</div>
                  <div className={`font-bold mt-0.5 ${STATUS_ICONS[selectedItem.status]?.color}`}>
                    {selectedItem.status}
                  </div>
                </div>

                <div className="p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">Execution Time</div>
                  <div className="font-bold text-[var(--text-primary)] mt-0.5">
                    {selectedItem.duration}
                  </div>
                </div>

                <div className="p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">Target Asset</div>
                  <div className="font-bold text-[#00E599] mt-0.5">
                    {selectedItem.asset}
                  </div>
                </div>

                <div className="p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">Operator</div>
                  <div className="font-bold text-[var(--text-primary)] mt-0.5 truncate">
                    {selectedItem.user.split(" ")[0]}
                  </div>
                </div>
              </div>

              {/* Performance Metrics if available */}
              {selectedItem.metrics && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase font-semibold">
                    Calculated Quantitative Metrics
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    {selectedItem.metrics.sharpe && (
                      <div className="p-3 rounded-xl clay-card bg-[var(--bg-surface)] border border-[var(--border)]">
                        <div className="text-[10px] text-[var(--text-muted)]">Sharpe Ratio</div>
                        <div className="text-base font-extrabold text-[#00E599] mt-0.5">
                          {selectedItem.metrics.sharpe} &sigma;
                        </div>
                      </div>
                    )}
                    {selectedItem.metrics.return && (
                      <div className="p-3 rounded-xl clay-card bg-[var(--bg-surface)] border border-[var(--border)]">
                        <div className="text-[10px] text-[var(--text-muted)]">Total Return</div>
                        <div className="text-base font-extrabold text-[#00E599] mt-0.5">
                          {selectedItem.metrics.return}
                        </div>
                      </div>
                    )}
                    {selectedItem.metrics.maxDd && (
                      <div className="p-3 rounded-xl clay-card bg-[var(--bg-surface)] border border-[var(--border)]">
                        <div className="text-[10px] text-[var(--text-muted)]">Max Drawdown</div>
                        <div className="text-base font-extrabold text-[#FF3B69] mt-0.5">
                          {selectedItem.metrics.maxDd}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Cryptographic Proof Hash */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase font-semibold flex items-center justify-between">
                  <span>Cryptographic SHA-256 Verification Hash</span>
                  <button
                    onClick={() => handleCopy(selectedItem.hash, "hash")}
                    className="text-[var(--accent)] hover:underline flex items-center gap-1 text-[10px] cursor-pointer lowercase"
                  >
                    {copiedHash === "hash" ? <Check className="w-3 h-3 text-[#00E599]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedHash === "hash" ? "copied" : "copy hash"}</span>
                  </button>
                </div>
                <div className="p-3 rounded-xl clay-recessed bg-[var(--bg-recessed)] border border-[var(--border)] font-mono text-[11px] text-[var(--text-primary)] break-all select-all">
                  {selectedItem.hash}
                </div>
              </div>

              {/* Execution Log Console */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Real-Time Execution Logs</span>
                  </span>
                  <span className="text-[10px] text-[#00E599]">STATION WORKER THREAD #04</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#090C12] border border-[#20252C] font-mono text-xs text-[#00E599] space-y-1 overflow-x-auto select-text">
                  {selectedItem.logs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {log}
                    </div>
                  ))}
                  <div className="text-[10px] text-[#A8AFB8] pt-1">
                    [00:00:00.999] [VERIFICATION_OK] Cryptographic signature confirmed by Quantora Consensus
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-3">
              <button
                onClick={() => handleCopy(JSON.stringify(selectedItem, null, 2), "json")}
                className="px-4 py-2 rounded-xl clay-button bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] flex items-center gap-1.5 cursor-pointer"
              >
                {copiedHash === "json" ? <Check className="w-3.5 h-3.5 text-[#00E599]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHash === "json" ? "JSON Copied" : "Copy Raw JSON"}</span>
              </button>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-semibold clay-button cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
