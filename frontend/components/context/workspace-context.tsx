"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  // Load persisted theme on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("quantora_theme");
      if (saved === "light") {
        document.documentElement.classList.add("light");
        setIsDark(false);
      } else if (saved === "dark") {
        document.documentElement.classList.remove("light");
        setIsDark(true);
      }
    } catch {
      // Ignore
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
      }
      try {
        localStorage.setItem("quantora_theme", next ? "dark" : "light");
      } catch {
        // Ignore
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
}
