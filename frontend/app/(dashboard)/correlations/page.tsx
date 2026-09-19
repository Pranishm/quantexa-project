import type { Metadata } from "next";

import { CorrelationsView } from "@/components/features/correlations-view";

export const metadata: Metadata = { title: "Correlations" };

export default function CorrelationsPage() {
  return <CorrelationsView />;
}
