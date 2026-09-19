"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type UserRole = "guest" | "student" | "researcher" | "pro" | "admin";
export type WorkspaceMode = "RESEARCH" | "TRADING" | "LEARNING";

interface WorkspaceContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  mode: WorkspaceMode;
  setMode: (mode: WorkspaceMode) => void;
  realBalance: number; // In INR (₹)
  virtualBalance: number; // In USD ($)
  addRealFunds: (amount: number) => void;
  executeVirtualTrade: (amount: number) => void;
  resetVirtualBalance: () => void;
  isAddMoneyOpen: boolean;
  setIsAddMoneyOpen: (open: boolean) => void;
  isVoiceActive: boolean;
  setIsVoiceActive: (active: boolean) => void;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>("pro");
  const [mode, setModeState] = useState<WorkspaceMode>("RESEARCH");
  const [realBalance, setRealBalance] = useState<number>(2500);
  const [virtualBalance, setVirtualBalance] = useState<number>(100000);
  const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  // Load persisted role/mode from localStorage if available
  useEffect(() => {
    try {
      const savedRole = localStorage.getItem("quantora_role") as UserRole | null;
      if (savedRole && ["guest", "student", "researcher", "pro", "admin"].includes(savedRole)) {
        setRoleState(savedRole);
      }
      const savedMode = localStorage.getItem("quantora_mode") as WorkspaceMode | null;
      if (savedMode && ["RESEARCH", "TRADING", "LEARNING"].includes(savedMode)) {
        setModeState(savedMode);
      }
    } catch {
      // Ignore
    }
  }, []);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    try {
      localStorage.setItem("quantora_role", newRole);
    } catch {
      // Ignore
    }
    // Set natural default mode according to role
    if (newRole === "student") {
      setModeState("LEARNING");
    } else if (newRole === "guest") {
      setModeState("RESEARCH");
    }
  };

  const setMode = (newMode: WorkspaceMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem("quantora_mode", newMode);
    } catch {
      // Ignore
    }
  };

  const addRealFunds = (amount: number) => {
    setRealBalance((prev) => prev + amount);
  };

  const executeVirtualTrade = (cost: number) => {
    setVirtualBalance((prev) => prev - cost);
  };

  const resetVirtualBalance = () => {
    setVirtualBalance(100000);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        role,
        setRole,
        mode,
        setMode,
        realBalance,
        virtualBalance,
        addRealFunds,
        executeVirtualTrade,
        resetVirtualBalance,
        isAddMoneyOpen,
        setIsAddMoneyOpen,
        isVoiceActive,
        setIsVoiceActive,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
}
