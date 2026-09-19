import type { Metadata } from "next";
import { SandboxShell } from "@/components/sandbox/SandboxShell";

export const metadata: Metadata = {
  title: "Research Sandbox | QUANTORA",
  description:
    "Interactive multi-asset backtest research sandbox with 3D correlation visualization, macro-event charting, and AI-generated strategy narratives.",
};

export default function AppSandboxPage() {
  return <SandboxShell />;
}
