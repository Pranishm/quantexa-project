import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";

import { AppShell } from "@/components/app-shell";
import { Providers } from "@/components/providers";

import "./globals.css";

// Every number on the platform is set in this face.
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Quantexa: multi-asset research and backtesting",
    template: "%s | Quantexa",
  },
  description:
    "Backtest strategies on Gold, Bitcoin and NVIDIA with next-bar execution, per-asset annualisation and an on-screen look-ahead audit.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrains.variable} dark h-full antialiased`}>
      <head>
        {/* Satoshi is not on Google Fonts; Fontshare is its publisher. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f%5B%5D=satoshi@400,500,700&display=swap" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=block" rel="stylesheet" />
      </head>
      <body className="flex min-h-full flex-col">
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
