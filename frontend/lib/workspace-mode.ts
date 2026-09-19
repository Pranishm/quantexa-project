"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WorkspaceMode = "research" | "trading" | "learning";

interface WorkspaceModeState {
  mode: WorkspaceMode;
  setMode: (mode: WorkspaceMode) => void;
}

export const useWorkspaceModeStore = create<WorkspaceModeState>()(
  persist(
    (set) => ({
      mode: "research",
      setMode: (mode) => set({ mode }),
    }),
    {
      name: "quantora-workspace-mode",
    }
  )
);
