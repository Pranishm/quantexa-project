"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "guest" | "trader" | "researcher" | "pro_researcher" | "admin";

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  tier: "Free" | "Pro" | "Enterprise";
  virtualBalance: number; // For paper trading ($100,000 default)
  createdAt: string;
  copilotQueriesRemaining?: number;
  robustnessGrid?: string;
  savedReportsCount?: number;
}

export interface PermissionMatrix {
  viewPublicMarkets: boolean;
  runDemoBacktest: boolean;
  fullBacktest: boolean;
  saveStrategy: boolean;
  robustnessLab: boolean;
  copilotAccess: "none" | "limited" | "full";
  portfolioTracking: boolean;
  paperTrading: boolean;
  adminAccess: boolean;
}

export const ROLE_PERMISSIONS: Record<UserRole, PermissionMatrix> = {
  guest: {
    viewPublicMarkets: true,
    runDemoBacktest: true,
    fullBacktest: false,
    saveStrategy: false,
    robustnessLab: false,
    copilotAccess: "limited",
    portfolioTracking: false,
    paperTrading: false,
    adminAccess: false,
  },
  trader: {
    viewPublicMarkets: true,
    runDemoBacktest: true,
    fullBacktest: true,
    saveStrategy: true,
    robustnessLab: true,
    copilotAccess: "full",
    portfolioTracking: true,
    paperTrading: true,
    adminAccess: false,
  },
  researcher: {
    viewPublicMarkets: true,
    runDemoBacktest: true,
    fullBacktest: true,
    saveStrategy: true,
    robustnessLab: true,
    copilotAccess: "full",
    portfolioTracking: true,
    paperTrading: true,
    adminAccess: false,
  },
  pro_researcher: {
    viewPublicMarkets: true,
    runDemoBacktest: true,
    fullBacktest: true,
    saveStrategy: true,
    robustnessLab: true,
    copilotAccess: "full",
    portfolioTracking: true,
    paperTrading: true,
    adminAccess: false,
  },
  admin: {
    viewPublicMarkets: true,
    runDemoBacktest: true,
    fullBacktest: true,
    saveStrategy: true,
    robustnessLab: true,
    copilotAccess: "full",
    portfolioTracking: true,
    paperTrading: true,
    adminAccess: true,
  },
};

interface AuthState {
  user: UserProfile;
  isAuthenticated: boolean;
  setRole: (role: UserRole) => void;
  loginAsDemo: (role?: UserRole) => void;
  logout: () => void;
  updateVirtualBalance: (delta: number) => void;
  can: <K extends keyof PermissionMatrix>(permission: K) => PermissionMatrix[K];
}

const DEFAULT_USER: UserProfile = {
  id: "usr_quant_01",
  email: "lead.researcher@quantora.ai",
  name: "Dr. Alexander Vance",
  role: "pro_researcher",
  tier: "Pro",
  virtualBalance: 100000,
  createdAt: "2026-01-15T09:00:00Z",
  copilotQueriesRemaining: 999,
  robustnessGrid: "50 × 50",
  savedReportsCount: 48,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: DEFAULT_USER,
      isAuthenticated: true,

      setRole: (role: UserRole) => {
        set((state) => {
          let tier: "Free" | "Pro" | "Enterprise" = "Free";
          let copilot = 8;
          let grid = "20 × 20";
          let name = state.user.name;

          if (role === "admin") {
            tier = "Enterprise";
            copilot = 999;
            grid = "50 × 50";
            name = "Quantora Administrator";
          } else if (role === "pro_researcher") {
            tier = "Pro";
            copilot = 999;
            grid = "50 × 50";
            name = "Dr. Alexander Vance (Pro)";
          } else if (role === "researcher") {
            tier = "Pro";
            copilot = 50;
            grid = "30 × 30";
            name = "Alexander Vance (Researcher)";
          } else if (role === "trader") {
            tier = "Pro";
            copilot = 50;
            grid = "20 × 20";
            name = "Alexander Vance (Trader)";
          } else {
            tier = "Free";
            copilot = 3;
            grid = "10 × 10";
            name = "Guest Visitor";
          }

          return {
            user: {
              ...state.user,
              role,
              tier,
              name,
              copilotQueriesRemaining: copilot,
              robustnessGrid: grid,
            },
          };
        });
      },

      loginAsDemo: (role = "pro_researcher") => {
        set({
          user: {
            ...DEFAULT_USER,
            role,
            tier: role === "admin" ? "Enterprise" : role === "pro_researcher" ? "Pro" : "Free",
          },
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({
          user: {
            ...DEFAULT_USER,
            role: "guest",
            name: "Guest Visitor",
            email: "guest@quantora.ai",
            tier: "Free",
          },
          isAuthenticated: false,
        });
      },

      updateVirtualBalance: (delta: number) => {
        set((state) => ({
          user: {
            ...state.user,
            virtualBalance: Math.max(0, state.user.virtualBalance + delta),
          },
        }));
      },

      can: (permission) => {
        const role = get().user.role;
        return ROLE_PERMISSIONS[role][permission];
      },
    }),
    {
      name: "quantora-auth-storage",
    }
  )
);
