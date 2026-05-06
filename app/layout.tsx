import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Cost Per Outcome — Track AI Spend by Business Result",
  description: "Dashboard that correlates AI prompt usage with actual business metrics. Cost per lead, per bug fixed, per feature shipped."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eb46aa2f-d358-41dc-b750-fa16940b1fad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
