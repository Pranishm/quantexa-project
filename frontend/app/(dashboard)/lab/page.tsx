import type { Metadata } from "next";

import { LabView } from "@/components/features/lab/lab-view";

export const metadata: Metadata = { title: "Lab" };

export default function LabPage() {
  return <LabView />;
}
