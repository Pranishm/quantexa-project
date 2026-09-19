"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { shouldRetry } from "@/lib/queries";
import { WorkspaceProvider } from "@/components/context/workspace-context";

function makeClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: shouldRetry,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
}

let browserClient: QueryClient | undefined;

/** A fresh client per server render keeps requests isolated; the browser reuses one so its cache survives navigation. */
function getClient() {
  if (typeof window === "undefined") return makeClient();
  browserClient ??= makeClient();
  return browserClient;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={getClient()}>
      <WorkspaceProvider>
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
      </WorkspaceProvider>
    </QueryClientProvider>
  );
}
