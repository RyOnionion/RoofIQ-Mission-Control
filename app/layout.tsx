import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoofIQ Mission Control",
  description: "Executive operating system for commercial roofing expansion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
