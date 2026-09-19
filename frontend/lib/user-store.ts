"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { marketHub, type AssetKey } from "./market-data-hub";

export interface WatchlistItem {
  symbol: AssetKey;
  addedAt: string;
  order: number;
}

export interface PriceAlert {
  id: string;
  symbol: AssetKey;
  condition: "ABOVE" | "BELOW";
  targetPrice: number;
  createdAt: string;
  triggeredAt?: string;
  active: boolean;
  notes?: string;
}

export interface UserNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: "ALERT" | "ORDER" | "SYSTEM" | "BACKTEST";
}

interface UserTerminalState {
  watchlist: WatchlistItem[];
  alerts: PriceAlert[];
  notifications: UserNotification[];
  theme: "dark" | "light";

  // Watchlist Actions
  addToWatchlist: (symbol: AssetKey) => void;
  removeFromWatchlist: (symbol: AssetKey) => void;
  reorderWatchlist: (newList: WatchlistItem[]) => void;
  isInWatchlist: (symbol: AssetKey) => boolean;

  // Alerts Actions
  createAlert: (symbol: AssetKey, condition: "ABOVE" | "BELOW", targetPrice: number, notes?: string) => PriceAlert;
  toggleAlert: (id: string) => void;
  deleteAlert: (id: string) => void;

  // Notifications
  addNotification: (title: string, message: string, type?: UserNotification["type"]) => void;
  markNotificationRead: (id: string) => void;
  clearAllNotifications: () => void;

  // Theme
  setTheme: (theme: "dark" | "light") => void;
}

const DEFAULT_WATCHLIST: WatchlistItem[] = [
  { symbol: "BTC", addedAt: "2026-01-01", order: 0 },
  { symbol: "SOL", addedAt: "2026-01-01", order: 1 },
  { symbol: "GOLD", addedAt: "2026-01-01", order: 2 },
  { symbol: "NVDA", addedAt: "2026-01-01", order: 3 },
];

export const useUserTerminalStore = create<UserTerminalState>()(
  persist(
    (set, get) => ({
      watchlist: DEFAULT_WATCHLIST,
      alerts: [
        {
          id: "alt-1",
          symbol: "BTC",
          condition: "ABOVE",
          targetPrice: 105000,
          createdAt: "2026-09-18T10:00:00Z",
          active: true,
          notes: "Key structural resistance breakout",
        },
        {
          id: "alt-2",
          symbol: "SOL",
          condition: "BELOW",
          targetPrice: 230,
          createdAt: "2026-09-18T10:00:00Z",
          active: true,
          notes: "Support boundary retest",
        },
      ],
      notifications: [
        {
          id: "notif-1",
          title: "System Ready",
          message: "QUANTORA Quantitative Terminal initialized with 4 canonical multi-asset feeds.",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          type: "SYSTEM",
        },
      ],
      theme: "dark",

      addToWatchlist: (symbol) => {
        const { watchlist } = get();
        if (watchlist.some((w) => w.symbol === symbol)) return;
        const updated = [...watchlist, { symbol, addedAt: new Date().toISOString(), order: watchlist.length }];
        set({ watchlist: updated });
      },

      removeFromWatchlist: (symbol) => {
        const { watchlist } = get();
        set({ watchlist: watchlist.filter((w) => w.symbol !== symbol) });
      },

      reorderWatchlist: (newList) => {
        set({ watchlist: newList });
      },

      isInWatchlist: (symbol) => {
        return get().watchlist.some((w) => w.symbol === symbol);
      },

      createAlert: (symbol, condition, targetPrice, notes) => {
        const newAlert: PriceAlert = {
          id: `alt-${Date.now()}`,
          symbol,
          condition,
          targetPrice,
          createdAt: new Date().toISOString(),
          active: true,
          notes,
        };
        set((state) => ({ alerts: [newAlert, ...state.alerts] }));
        get().addNotification(
          "Alert Created",
          `Monitoring ${symbol} for price crossing ${condition === "ABOVE" ? ">" : "<"} $${targetPrice.toLocaleString()}`,
          "ALERT",
        );
        return newAlert;
      },

      toggleAlert: (id) => {
        set((state) => ({
          alerts: state.alerts.map((a) => (a.id === id ? { ...a, active: !a.active } : a)),
        }));
      },

      deleteAlert: (id) => {
        set((state) => ({ alerts: state.alerts.filter((a) => a.id !== id) }));
      },

      addNotification: (title, message, type = "SYSTEM") => {
        const notif: UserNotification = {
          id: `notif-${Date.now()}`,
          title,
          message,
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          type,
        };
        set((state) => ({ notifications: [notif, ...state.notifications].slice(0, 30) }));
      },

      markNotificationRead: (id) => {
        set((state) => ({
          notifications: state.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
        }));
      },

      clearAllNotifications: () => {
        set({ notifications: [] });
      },

      setTheme: (theme) => {
        set({ theme });
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", theme === "dark");
        }
      },
    }),
    {
      name: "quantora-user-terminal-state",
    },
  ),
);

// Automatic alert trigger observer: checks live ticks from marketHub against active alerts
if (typeof window !== "undefined") {
  marketHub.subscribe(() => {
    const state = useUserTerminalStore.getState();
    const activeAlerts = state.alerts.filter((a) => a.active && !a.triggeredAt);

    for (const alt of activeAlerts) {
      const currentPrice = marketHub.getPrice(alt.symbol);
      let triggered = false;

      if (alt.condition === "ABOVE" && currentPrice >= alt.targetPrice) {
        triggered = true;
      } else if (alt.condition === "BELOW" && currentPrice <= alt.targetPrice) {
        triggered = true;
      }

      if (triggered) {
        useUserTerminalStore.setState((prev) => ({
          alerts: prev.alerts.map((a) =>
            a.id === alt.id ? { ...a, active: false, triggeredAt: new Date().toISOString() } : a,
          ),
        }));

        state.addNotification(
          `PRICE ALERT TRIGGERED: ${alt.symbol}`,
          `${alt.symbol} has crossed ${alt.condition === "ABOVE" ? ">" : "<"} $${alt.targetPrice.toLocaleString()} (Current: $${currentPrice.toLocaleString()})`,
          "ALERT",
        );
      }
    }
  });
}
