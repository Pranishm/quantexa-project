"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Layers,
  TrendingUp,
  FlaskConical,
  BookOpen,
  Trophy,
  Bot,
  User,
  Shield,
  Search,
  Bell,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  Wallet,
  Activity,
  Cpu,
  BarChart3,
  Sliders,
  Sparkles,
  SlidersHorizontal,
  FileText,
  Clock,
  Briefcase,
  Mic,
  MonitorPlay,
  PanelLeftClose,
  PanelLeftOpen,
  Radio
} from "lucide-react";

import { useAuthStore, type UserRole as AuthUserRole } from "@/lib/auth/store";
import { CommandPalette } from "@/components/shell/command-palette";
import { CopilotDrawer } from "@/components/ai/copilot-drawer";
import { DataStatusModal } from "@/components/shell/data-status-modal";
import { useMarketSimulation } from "@/lib/market-simulation";
import { useWorkspaceModeStore } from "@/lib/workspace-mode";
import { useWorkspace, type UserRole, type WorkspaceMode } from "@/components/context/workspace-context";
import { AddMoneyModal } from "@/components/modals/add-money-modal";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: any;
  badge?: string;
  proOnly?: boolean;
}

interface NavSection {
  title: string;
  minRole?: "guest" | "researcher" | "pro_researcher" | "admin";
  items: NavItem[];
}

// 6. Sidebar Trading Workstation Structure
const NAV_SECTIONS: NavSection[] = [
  {
    title: "MARKET",
    items: [
      { id: "overview-dash", label: "Overview", href: "/app/overview", icon: Layers },
      { id: "markets-main", label: "Markets", href: "/app/markets", icon: TrendingUp },
      { id: "markets-watchlists", label: "Watchlist", href: "/app/markets/watchlists", icon: SlidersHorizontal },
      { id: "overview-xray", label: "Market X-Ray", href: "/app/markets/cross-asset", icon: Sparkles },
    ],
  },
  {
    title: "RESEARCH",
    items: [
      { id: "research-lab", label: "Strategy Lab", href: "/app/research/strategy-lab", icon: FlaskConical },
      { id: "research-sandbox", label: "Sandbox", href: "/app/sandbox", icon: Sparkles },
      { id: "research-backtest", label: "Backtests", href: "/app/research/backtest", icon: Cpu },
      { id: "research-autopsy", label: "Autopsy", href: "/app/research/autopsy", icon: Activity },
      { id: "research-regimes", label: "Regimes", href: "/app/research/regimes", icon: Layers },
      { id: "research-robustness", label: "Robustness", href: "/app/research/robustness", icon: Sliders },
      { id: "research-integrity", label: "Integrity", href: "/app/research/integrity", icon: Shield },
    ],
  },
  {
    title: "SIMULATION",
    items: [
      { id: "sim-paper", label: "Paper Trading", href: "/app/trade/paper", icon: Wallet },
      { id: "sim-scenarios", label: "Scenarios", href: "/app/trade/scenarios", icon: Trophy },
      { id: "sim-arena", label: "Arena", href: "/app/trade/arena", icon: Briefcase, proOnly: true },
    ],
  },
  {
    title: "LEARNING",
    items: [
      { id: "learn-academy", label: "Academy", href: "/app/learn", icon: BookOpen },
      { id: "learn-tutor", label: "AI Tutor", href: "/app/learn/tutor", icon: Bot },
      { id: "learn-challenges", label: "Challenges", href: "/app/learn/challenges", icon: Trophy },
      { id: "learn-progress", label: "Progress", href: "/app/learn/progress", icon: CheckCircle2 },
    ],
  },
  {
    title: "INTELLIGENCE",
    items: [
      { id: "assist-copilot", label: "Copilot", href: "/app/assist/copilot", icon: Bot },
      { id: "assist-voice", label: "Voice", href: "/app/assist/voice", icon: Mic },
      { id: "assist-screen", label: "Screen AI", href: "/app/assist/screen", icon: MonitorPlay },
      { id: "assist-alerts", label: "Alerts", href: "/app/assist/alerts", icon: Bell },
    ],
  },
  {
    title: "TRUST",
    items: [
      { id: "trust-security", label: "Security", href: "/app/account/security", icon: Shield },
      { id: "trust-activity", label: "Activity", href: "/app/account/activity", icon: Activity },
    ],
  },
];

function getRoleNavSections(role: UserRole): NavSection[] {
  if (role === "student") {
    return [
      {
        title: "LEARNING",
        items: [
          { id: "learn-home", label: "Academy Home", href: "/app/overview", icon: BookOpen },
          { id: "learn-tutor", label: "AI Tutor", href: "/app/learn/tutor", icon: Bot },
          { id: "learn-challenges", label: "Challenges", href: "/app/learn/challenges", icon: Trophy },
          { id: "learn-progress", label: "Progress", href: "/app/learn/progress", icon: CheckCircle2 },
        ],
      },
      {
        title: "MARKETS",
        items: [
          { id: "markets-main", label: "Markets Overview", href: "/app/markets", icon: TrendingUp },
          { id: "asset-btc", label: "Bitcoin (BTC)", href: "/app/assets/bitcoin", icon: Layers },
          { id: "asset-sol", label: "Solana (SOL)", href: "/app/assets/solana", icon: Layers },
          { id: "asset-gold", label: "Gold (XAU)", href: "/app/assets/gold", icon: Layers },
          { id: "asset-nvda", label: "NVIDIA (NVDA)", href: "/app/assets/nvidia", icon: Layers },
        ],
      },
      {
        title: "RESEARCH",
        items: [
          { id: "research-lab", label: "Experiment Lab", href: "/app/research/strategy-lab", icon: FlaskConical },
          { id: "research-backtest", label: "Backtest Studio", href: "/app/research/backtest", icon: Cpu },
        ],
      },
      {
        title: "SIMULATION",
        items: [
          { id: "sim-paper", label: "Paper Trading", href: "/app/trade/paper", icon: Wallet },
          { id: "sim-scenarios", label: "Scenarios", href: "/app/trade/scenarios", icon: Trophy },
        ],
      },
    ];
  }

  if (role === "admin") {
    return [
      {
        title: "ADMINISTRATION",
        items: [
          { id: "admin-gov", label: "Governance & Telemetry", href: "/app/overview", icon: Shield },
          { id: "admin-jobs", label: "Research Jobs", href: "/app/research/backtest", icon: Cpu },
          { id: "admin-markets", label: "Market Data Streams", href: "/app/markets", icon: TrendingUp },
          { id: "admin-security", label: "Security & Audits", href: "/app/account/security", icon: Shield },
        ],
      },
    ];
  }

  if (role === "guest") {
    return [
      {
        title: "PUBLIC ACCESS",
        items: [
          { id: "guest-overview", label: "Market Overview", href: "/app/overview", icon: Layers },
          { id: "guest-markets", label: "Markets", href: "/app/markets", icon: TrendingUp },
          { id: "guest-btc", label: "Demo Chart (BTC)", href: "/app/assets/bitcoin", icon: BarChart3 },
          { id: "guest-learn", label: "Academy Preview", href: "/app/learn", icon: BookOpen },
        ],
      },
    ];
  }

  return NAV_SECTIONS;
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [dataStatusOpen, setDataStatusOpen] = useState(false);
  const [timeUtc, setTimeUtc] = useState("");

  const { user, setRole: setAuthRole } = useAuthStore();
  const marketSim = useMarketSimulation();
  const { mode: workspaceMode, setMode: setWorkspaceMode } = useWorkspaceModeStore();
  const {
    role: wsRole,
    setRole: setWsRole,
    mode: wsMode,
    setMode: setWsMode,
    realBalance,
    virtualBalance,
    setIsAddMoneyOpen,
  } = useWorkspace();

  const navSections = getRoleNavSections(wsRole);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUtc(now.toUTCString().split(" ")[4] + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Global Keyboard Shortcuts (⌘K for Search, ⌘J for Copilot)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        setCopilotOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Root landing or auth/onboarding screens render without terminal chrome
  if (
    pathname === "/" ||
    pathname === "/landing" ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password" ||
    pathname === "/verify-email" ||
    pathname === "/onboarding"
  ) {
    return <>{children}</>;
  }

  // Derive breadcrumbs cleanly
  const getBreadcrumbs = () => {
    if (pathname.startsWith("/app/overview")) return ["Overview", "Dashboard"];
    if (pathname.startsWith("/app/assets/bitcoin")) return ["Markets", "Bitcoin (BTC / USD)"];
    if (pathname.startsWith("/app/assets/solana")) return ["Markets", "Solana (SOL / USD)"];
    if (pathname.startsWith("/app/assets/gold")) return ["Markets", "Gold (XAU / USD)"];
    if (pathname.startsWith("/app/assets/nvidia")) return ["Markets", "NVIDIA (NVDA)"];
    if (pathname.startsWith("/app/markets/cross-asset")) return ["Overview", "Market X-Ray"];
    if (pathname.startsWith("/app/markets/screener")) return ["Markets", "Quantitative Screener"];
    if (pathname.startsWith("/app/markets/watchlists")) return ["Markets", "Watchlist"];
    if (pathname.startsWith("/app/markets")) return ["Markets", "Overview"];
    if (pathname.startsWith("/app/research/strategy-lab")) return ["Research", "Strategy Lab"];
    if (pathname.startsWith("/app/sandbox")) return ["Research", "Sandbox"];
    if (pathname.startsWith("/app/research/backtest")) return ["Research", "Backtests"];
    if (pathname.startsWith("/app/research/autopsy")) return ["Research", "Strategy Autopsy"];
    if (pathname.startsWith("/app/research/regimes")) return ["Research", "Regimes"];
    if (pathname.startsWith("/app/research/robustness")) return ["Research", "Robustness"];
    if (pathname.startsWith("/app/research/integrity")) return ["Research", "Integrity"];
    if (pathname.startsWith("/app/trade/paper")) return ["Simulation", "Paper Trading"];
    if (pathname.startsWith("/app/trade/scenarios")) return ["Simulation", "Scenarios"];
    if (pathname.startsWith("/app/trade/arena")) return ["Simulation", "Arena"];
    if (pathname.startsWith("/app/learn/tutor")) return ["Learn", "AI Tutor"];
    if (pathname.startsWith("/app/learn/challenges")) return ["Learn", "Challenges"];
    if (pathname.startsWith("/app/learn/progress")) return ["Learn", "Progress"];
    if (pathname.startsWith("/app/learn")) return ["Learn", "Academy"];
    if (pathname.startsWith("/app/assist/copilot")) return ["Assist", "Copilot"];
    if (pathname.startsWith("/app/assist/voice")) return ["Assist", "Voice"];
    if (pathname.startsWith("/app/assist/screen")) return ["Assist", "Screen AI"];
    if (pathname.startsWith("/app/assist/alerts")) return ["Assist", "Alerts"];
    if (pathname.startsWith("/app/account/security")) return ["Trust", "Security"];
    if (pathname.startsWith("/app/account/activity")) return ["Trust", "Activity"];
    if (pathname.startsWith("/admin")) return ["Admin Console", "System & Governance"];
    return ["Quantora", "Research Station"];
  };

  const breadcrumbs = getBreadcrumbs();

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("light");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-[var(--accent)]/20 transition-colors duration-250">
      {/* ⌘K Global Command Palette */}
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* Slide-over Right Copilot Panel */}
      <CopilotDrawer
        isOpen={copilotOpen}
        onClose={() => setCopilotOpen(false)}
        contextName={breadcrumbs.join(" / ")}
      />

      {/* Data Status Modal */}
      <DataStatusModal
        isOpen={dataStatusOpen}
        onClose={() => setDataStatusOpen(false)}
      />

      {/* Add Money Modal */}
      <AddMoneyModal />

      {/* Top Header Bar */}
      <header className="h-14 border-b border-[var(--border)] bg-[var(--bg-sidebar)] sticky top-0 z-30 flex items-center justify-between px-4">
        {/* Left: Mobile Toggle + Desktop Collapse + Breadcrumbs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded clay-interactive"
          >
            <Menu className="w-4 h-4" />
          </button>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg clay-button transition-colors"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[var(--text-muted)] font-medium">{breadcrumbs[0]}</span>
            <span className="text-[var(--text-subtle)]">/</span>
            <span className="text-[var(--text-primary)] font-medium">{breadcrumbs[1]}</span>
          </div>
        </div>

        {/* Center: Global Search Bar */}
        <div className="hidden md:flex items-center w-80 lg:w-96">
          <button
            onClick={() => setCmdOpen(true)}
            className="w-full flex items-center justify-between px-3.5 py-1.5 bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] border border-[var(--border)] rounded-2xl text-xs text-[var(--text-muted)] transition-all clay-recessed-sm"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Search markets, strategies, reports...</span>
            </div>
            <kbd className="text-[10px] bg-[var(--bg-elevated)] border border-[var(--border)] px-1.5 py-0.5 rounded text-[var(--text-secondary)] font-mono">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right: Mode Switcher, Wallet, Live Feed Indicator, Theme Toggle, Copilot, Alerts, Profile */}
        <div className="flex items-center gap-2.5 text-xs">
          {/* 19. Workspace Mode Switcher: Research | Trading | Learning */}
          <div className="hidden lg:flex items-center gap-1 p-0.5 rounded-xl clay-recessed-sm bg-[var(--bg-recessed)] border border-[var(--border)]">
            {(["RESEARCH", "TRADING", "LEARNING"] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setWsMode(m);
                  setWorkspaceMode(m.toLowerCase() as any);
                }}
                className={`px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-lg transition-all ${
                  wsMode === m
                    ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Account Wallet / Deposit Button */}
          <button
            onClick={() => setIsAddMoneyOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] border border-[var(--border)] rounded-xl clay-button transition-all text-xs font-mono cursor-pointer"
            title="Open Account Wallet (Real Balance & Paper Capital)"
          >
            <Wallet className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="font-bold text-[var(--text-primary)]">₹{realBalance.toLocaleString("en-IN")}</span>
            <span className="text-[10px] text-[var(--text-muted)] border-l border-[var(--border)] pl-1.5">
              ${(virtualBalance / 1000).toFixed(0)}k Paper
            </span>
          </button>

          {/* 5. Live Indicator Button */}
          <button
            onClick={() => setDataStatusOpen(true)}
            className="flex items-center gap-2 px-2.5 py-1 bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] border border-[var(--border)] rounded-xl clay-button transition-all cursor-pointer"
            title="Inspect Data Feed & Latency"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--positive)] animate-pulse shadow-[0_0_6px_var(--positive)]" />
            <span className="text-[11px] font-mono font-bold text-[var(--text-primary)]">DEMO LIVE</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="px-2.5 py-1 text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl clay-button"
            title="Toggle Clay Theme (Dark / Light)"
          >
            Clay UI
          </button>

          {/* Copilot Trigger */}
          <button
            onClick={() => setCopilotOpen(!copilotOpen)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border transition-all clay-button ${
              copilotOpen
                ? "bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--text-primary)]"
                : "bg-[var(--bg-surface)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
            title="Toggle Quantora Copilot (⌘J)"
          >
            <Bot className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="hidden sm:inline text-[11px] font-medium">Copilot</span>
          </button>

          {/* Notifications */}
          <button
            onClick={() => router.push("/app/assist/alerts")}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] rounded-xl border border-[var(--border)] transition-colors relative clay-button"
            title="Alerts"
          >
            <Bell className="w-3.5 h-3.5" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
          </button>

          {/* Profile Menu with RBAC Switcher */}
          <div className="relative">
            <button
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className="flex items-center gap-2 pl-2 pr-1.5 py-1 bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] border border-[var(--border)] rounded-xl text-xs transition-colors clay-button"
            >
              <div className="w-5 h-5 rounded-lg bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center text-[10px] font-bold">
                {wsRole[0].toUpperCase()}
              </div>
              <span className="hidden md:inline text-[11px] text-[var(--text-primary)] font-medium capitalize">
                {wsRole}
              </span>
              <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
            </button>

            {roleMenuOpen && (
              <div className="absolute right-0 mt-1.5 w-64 bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl shadow-2xl py-2 z-50 text-xs clay-card-elevated">
                <div className="px-3.5 py-2 border-b border-[var(--border)]">
                  <div className="font-bold text-[var(--text-primary)]">{user.name}</div>
                  <div className="text-[10px] text-[var(--text-secondary)] truncate">{user.email}</div>
                  <div className="mt-1 flex items-center gap-2 text-[10px]">
                    <span className="px-1.5 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold uppercase">
                      Active: {wsRole.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="px-3 pt-2 pb-1 text-[9px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                  QUANTORA Multi-Role Switcher
                </div>
                {(
                  [
                    { id: "guest" as UserRole, label: "Guest (Public Demo)", desc: "Public markets, preview mode" },
                    { id: "student" as UserRole, label: "Student (Learning Lab)", desc: "Academy, AI Tutor, paper sandbox" },
                    { id: "researcher" as UserRole, label: "Researcher (Default)", desc: "Factor models, 20×20 grid" },
                    { id: "pro" as UserRole, label: "Pro Researcher", desc: "Unlimited AI, 50×50 grid, API" },
                    { id: "admin" as UserRole, label: "Administrator", desc: "Governance, audits, monitors" },
                  ] as const
                ).map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setWsRole(r.id);
                      setAuthRole(r.id === "pro" ? "pro_researcher" : (r.id as any));
                      setRoleMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 flex flex-col hover:bg-[var(--bg-hover)] transition-colors ${
                      wsRole === r.id ? "bg-[var(--bg-hover)] text-[var(--accent)]" : "text-[var(--text-secondary)]"
                    }`}
                  >
                    <div className="flex items-center justify-between font-medium">
                      <span>{r.label}</span>
                      {wsRole === r.id && <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />}
                    </div>
                    <span className="text-[9px] text-[var(--text-muted)]">{r.desc}</span>
                  </button>
                ))}

                <div className="border-t border-[var(--border)] mt-1.5 pt-1">
                  <Link
                    href="/onboarding"
                    onClick={() => setRoleMenuOpen(false)}
                    className="block px-3.5 py-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                  >
                    Restart Onboarding
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setRoleMenuOpen(false)}
                    className="block px-3.5 py-1.5 text-[var(--negative)] hover:bg-[var(--bg-hover)]"
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 5. Live Market Simulation Ticker Tape — Financial Terminal DNA */}
      <div className="h-8 border-b border-[var(--border)] bg-[var(--bg-sidebar)] flex items-center px-4 overflow-x-auto no-scrollbar select-none text-xs">
        <div className="flex items-center gap-5 whitespace-nowrap font-mono text-[11px]">
          {Object.values(marketSim.assets).map((asset) => {
            const isPositive = asset.changePercent >= 0;
            return (
              <Link
                key={asset.symbol}
                href={`/app/assets/${asset.symbol.toLowerCase()}`}
                className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
              >
                <span className="font-semibold text-[var(--text-secondary)]">{asset.symbol}/USD</span>
                <span className="text-[var(--text-primary)] font-bold">
                  {asset.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span
                  className={`flex items-center gap-0.5 font-bold ${
                    isPositive ? "text-[var(--positive)]" : "text-[var(--negative)]"
                  }`}
                >
                  {isPositive ? `+${asset.changePercent}% ▲` : `${asset.changePercent}% ▼`}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="ml-auto hidden sm:flex items-center gap-3 text-[10px] font-mono text-[var(--text-muted)] pl-4">
          <span className="px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
            FEED: DETERMINISTIC 2026
          </span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{timeUtc}</span>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="flex flex-1 relative overflow-hidden">
        {/* 6 & 18. Collapsible Quiet Soft Clay Trading Terminal Sidebar */}
        <aside
          className={`fixed md:static inset-y-0 left-0 z-30 ${
            collapsed ? "w-20" : "w-64"
          } bg-[var(--bg-surface)] md:my-3 md:ml-3 md:rounded-3xl md:h-[calc(100vh-5.5rem)] clay-card border border-[var(--border)] flex flex-col transition-all duration-300 ease-out overflow-hidden select-none ${
            navOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {/* Logo & Platform Subtitle */}
          <div className="h-14 border-b border-[var(--border)] px-4 flex items-center justify-between">
            <Link href="/app/overview" className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] shrink-0" />
              {!collapsed && (
                <div className="flex flex-col truncate">
                  <span className="font-bold text-sm tracking-wider text-[var(--text-primary)]">QUANTORA</span>
                  <span className="text-[8px] tracking-widest text-[var(--text-muted)] uppercase font-semibold">
                    RESEARCH TERMINAL
                  </span>
                </div>
              )}
            </Link>
            <button
              onClick={() => setNavOpen(false)}
              className="md:hidden p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Sections */}
          <div className="flex-1 overflow-y-auto py-2.5 space-y-3.5 px-2">
            {navSections.map((section, idx) => (
              <div key={idx} className="space-y-0.5">
                {!collapsed && (
                  <div className="px-3 py-1 text-[9px] font-bold text-[var(--text-muted)] tracking-wider uppercase">
                    {section.title}
                  </div>
                )}
                <div className="space-y-0.5">
                  {section.items.map((item) => {
                    const active = pathname === item.href || (item.href !== "/app/overview" && pathname.startsWith(item.href));
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setNavOpen(false)}
                        title={collapsed ? item.label : undefined}
                        className={`flex items-center ${
                          collapsed ? "justify-center px-0 py-2.5" : "justify-between px-3 py-1.5"
                        } text-xs transition-all rounded-xl relative ${
                          active
                            ? "clay-recessed bg-[var(--bg-recessed)] text-[var(--text-primary)] font-semibold border border-[var(--border-strong)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                        }`}
                      >
                        {/* 7. Small violet vertical indicator */}
                        {active && (
                          <span className="absolute left-1 top-2 bottom-2 w-[2.5px] rounded-full bg-[var(--accent)]" />
                        )}

                        <div className={`flex items-center gap-2 ${active ? "pl-2" : ""}`}>
                          {active && <span className="text-[var(--accent)] text-[10px] font-bold">●</span>}
                          <Icon className={`w-3.5 h-3.5 ${active ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`} />
                          {!collapsed && <span>{item.label}</span>}
                        </div>

                        {!collapsed && item.proOnly && user.role === "researcher" && (
                          <span className="text-[8px] px-1.5 py-0.2 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-semibold">
                            PRO
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* 6. Bottom: MARKET SIMULATION + Profile Card */}
          <div className="p-2.5 border-t border-[var(--border)] bg-[var(--bg-surface)] space-y-2">
            <button
              onClick={() => setDataStatusOpen(true)}
              className={`w-full flex items-center ${
                collapsed ? "justify-center p-2" : "justify-between px-3 py-1.5"
              } rounded-xl clay-recessed bg-[var(--bg-recessed)] hover:opacity-90 transition-opacity cursor-pointer text-xs border border-[var(--border)]`}
              title="Click to view Data Feed Status"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)] animate-pulse" />
                {!collapsed && (
                  <span className="text-[10px] font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    MARKET SIMULATION
                  </span>
                )}
              </div>
              {!collapsed && (
                <span className="text-[9px] font-mono text-[var(--text-muted)]">4 ASSETS · {marketSim.latencyMs}ms</span>
              )}
            </button>

            {/* Profile Card */}
            <div
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className={`clay-recessed-sm ${
                collapsed ? "p-2 justify-center" : "p-2.5"
              } rounded-2xl flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity`}
              title="Switch Role / Settings"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-7 h-7 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center text-xs font-bold font-mono shrink-0">
                  {user.name.slice(0, 2).toUpperCase()}
                </div>
                {!collapsed && (
                  <div className="truncate">
                    <div className="text-xs font-bold text-[var(--text-primary)] truncate">{user.name}</div>
                    <div className="text-[10px] text-[var(--text-muted)] capitalize">{user.role.replace("_", " ")}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Backdrop */}
        {navOpen && (
          <div
            onClick={() => setNavOpen(false)}
            className="fixed inset-0 bg-black/60 z-20 md:hidden backdrop-blur-sm"
          />
        )}

        {/* Workspace Canvas */}
        <main className="flex-1 overflow-y-auto bg-[var(--bg-root)] min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
