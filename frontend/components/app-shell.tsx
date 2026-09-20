"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  TrendingUp,
  FlaskConical,
  Cpu,
  Sliders,
  Network,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  Search,
  Moon,
  Sun,
  PanelLeftClose,
  PanelLeftOpen,
  Home,
} from "lucide-react";

import { CommandPalette } from "@/components/shell/command-palette";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

// One sidebar, one story: mirrors the problem statement top-to-bottom.
const NAV_SECTIONS: NavSection[] = [
  {
    title: "DASHBOARD",
    items: [
      { id: "nav-overview", label: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { id: "nav-assets", label: "Assets", href: "/asset/BTC-USD", icon: TrendingUp },
      { id: "nav-correlations", label: "Correlations", href: "/correlations", icon: Network },
    ],
  },
  {
    title: "RESEARCH",
    items: [
      { id: "nav-backtest", label: "Backtest Studio", href: "/backtest", icon: Cpu },
      { id: "nav-lab", label: "Strategy Lab", href: "/lab", icon: FlaskConical },
      { id: "nav-montecarlo", label: "Monte Carlo", href: "/montecarlo", icon: Layers },
      { id: "nav-portfolio", label: "Portfolio Simulator", href: "/portfolio", icon: Sliders },
    ],
  },
  {
    title: "REPORTING",
    items: [
      { id: "nav-report", label: "Research Report", href: "/report", icon: ShieldCheck },
    ],
  },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Global keyboard shortcut (⌘K for command palette)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Detect current theme for the toggle icon
  useEffect(() => {
    const check = () => setIsDark(!document.documentElement.classList.contains("light"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    const willBeDark = !isDark;
    setIsDark(willBeDark);
    if (willBeDark) {
      document.documentElement.classList.remove("light");
      try { localStorage.setItem("quantora_theme", "dark"); } catch {}
    } else {
      document.documentElement.classList.add("light");
      try { localStorage.setItem("quantora_theme", "light"); } catch {}
    }
  };

  // The landing screen renders without terminal chrome
  if (pathname === "/") {
    return <>{children}</>;
  }

  // Derive breadcrumbs cleanly
  const getBreadcrumbs = (): [string, string] => {
    if (pathname.startsWith("/asset/")) return ["Assets", "Asset Detail"];
    if (pathname.startsWith("/correlations")) return ["Dashboard", "Correlations"];
    if (pathname.startsWith("/backtest")) return ["Research", "Backtest Studio"];
    if (pathname.startsWith("/lab")) return ["Research", "Strategy Lab"];
    if (pathname.startsWith("/montecarlo")) return ["Research", "Monte Carlo"];
    if (pathname.startsWith("/portfolio")) return ["Research", "Portfolio Simulator"];
    if (pathname.startsWith("/report")) return ["Reporting", "Research Report"];
    return ["Quantexa", "Research Station"];
  };

  const [crumb0, crumb1] = getBreadcrumbs();

  return (
    <div className="min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-[var(--accent)]/20 transition-colors duration-250">
      {/* ⌘K Global Command Palette */}
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* Top Header Bar */}
      <header className="h-14 border-b border-[var(--border)] bg-[var(--bg-sidebar)] sticky top-0 z-30 flex items-center justify-between px-4">
        {/* Left: Mobile Toggle + Desktop Collapse + Breadcrumbs + Home */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded clay-interactive"
            aria-label="Toggle navigation"
          >
            <Menu className="w-4 h-4" />
          </button>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg clay-button transition-colors"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>

          {/* Persistent Home button */}
          <Link
            href="/"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] border border-[var(--border)] transition-all clay-button"
            title="Back to Home"
            aria-label="Back to home page"
          >
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[var(--text-muted)] font-medium">{crumb0}</span>
            <span className="text-[var(--text-subtle)]">/</span>
            <span className="text-[var(--text-primary)] font-medium">{crumb1}</span>
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
              <span>Search assets, strategies, tools...</span>
            </div>
            <kbd className="text-[10px] bg-[var(--bg-elevated)] border border-[var(--border)] px-1.5 py-0.5 rounded text-[var(--text-secondary)] font-mono">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right: Theme Toggle + Profile */}
        <div className="flex items-center gap-2.5 text-xs">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl clay-button text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors"
            title="Toggle light / dark theme"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          <div className="relative">
            <button
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className="flex items-center gap-2 pl-2 pr-1.5 py-1 bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] border border-[var(--border)] rounded-xl text-xs transition-colors clay-button"
            >
              <div className="w-5 h-5 rounded-lg bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center text-[10px] font-bold">
                Q
              </div>
              <span className="hidden md:inline text-[11px] text-[var(--text-primary)] font-medium">Researcher</span>
              <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
            </button>

            {roleMenuOpen && (
              <div className="absolute right-0 mt-1.5 w-56 bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl shadow-2xl py-2 z-50 text-xs clay-card-elevated">
                <div className="px-3.5 py-2 border-b border-[var(--border)]">
                  <div className="font-bold text-[var(--text-primary)]">Research Station</div>
                  <div className="text-[10px] text-[var(--text-secondary)]">Local research workspace</div>
                </div>
                <Link
                  href="/"
                  onClick={() => setRoleMenuOpen(false)}
                  className="block px-3.5 py-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="flex flex-1 relative overflow-hidden">
        {/* Collapsible Sidebar */}
        <aside
          className={`fixed md:static inset-y-0 left-0 z-30 ${
            collapsed ? "w-20" : "w-60"
          } bg-[var(--bg-surface)] md:my-3 md:ml-3 md:rounded-3xl md:h-[calc(100vh-5.5rem)] clay-card border border-[var(--border)] flex flex-col transition-all duration-300 ease-out overflow-hidden select-none ${
            navOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {/* Logo */}
          <div className="h-14 border-b border-[var(--border)] px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] shrink-0" />
              {!collapsed && (
                <div className="flex flex-col truncate">
                  <span className="font-bold text-sm tracking-wider text-[var(--text-primary)]">QUANTORAX</span>
                  <span className="text-[8px] tracking-widest text-[var(--text-muted)] uppercase font-semibold">
                    Research Platform
                  </span>
                </div>
              )}
            </Link>
            <button
              onClick={() => setNavOpen(false)}
              className="md:hidden p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              aria-label="Close navigation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Sections */}
          <div className="flex-1 overflow-y-auto py-2.5 space-y-4 px-2">
            {NAV_SECTIONS.map((section, idx) => (
              <div key={idx} className="space-y-1">
                {!collapsed && (
                  <div className="px-3 py-1 text-[9px] font-bold text-[var(--text-muted)] tracking-wider uppercase">
                    {section.title}
                  </div>
                )}
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const active =
                      pathname === item.href ||
                      (item.id !== "nav-assets" && pathname.startsWith(item.href + "/")) ||
                      (item.id === "nav-assets" && pathname.startsWith("/asset/"));
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setNavOpen(false)}
                        title={collapsed ? item.label : undefined}
                        className={`flex items-center ${
                          collapsed ? "justify-center px-0 py-3 min-h-[44px]" : "px-3.5 py-2.5 min-h-[40px]"
                        } text-xs transition-all rounded-xl relative cursor-pointer select-none ${
                          active
                            ? "clay-recessed bg-[var(--bg-recessed)] text-[var(--text-primary)] font-semibold border border-[var(--border-strong)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                        }`}
                      >
                        {active && (
                          <span className="absolute left-1.5 top-2.5 bottom-2.5 w-[2.5px] rounded-full bg-[var(--accent)]" />
                        )}
                        <div className={`flex items-center gap-2.5 ${active ? "pl-2.5" : ""}`}>
                          <Icon className={`w-4 h-4 shrink-0 ${active ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`} />
                          {!collapsed && <span className="truncate">{item.label}</span>}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom: Team Badge */}
          {!collapsed ? (
            <div className="p-2.5 border-t border-[var(--border)] bg-[var(--bg-surface)]">
              <div className="px-2 py-1.5 rounded-xl bg-[var(--bg-recessed)] border border-[var(--border)] text-center">
                <div className="text-[8px] font-bold text-[var(--accent)] tracking-wider uppercase flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>Made by Team Blaze IQ</span>
                </div>
                <div className="text-[7.5px] text-[var(--text-secondary)] mt-0.5 leading-snug tracking-tight">
                  Sujan S · Pranish M · Varshan Karthik R · Eniyan CG · Naveen SS
                </div>
              </div>
            </div>
          ) : (
            <div className="p-2.5 border-t border-[var(--border)] flex justify-center">
              <span className="text-[8px] font-bold font-mono px-1 py-0.5 rounded bg-[var(--bg-recessed)] text-[var(--accent)] border border-[var(--border)] cursor-help" title="Made by Team Blaze IQ: Sujan S, Pranish M, Varshan Karthik R, Eniyan CG, Naveen SS">
                ⚡IQ
              </span>
            </div>
          )}
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
