"use client";

import { Header } from "@/components/mission-control/Header";
import { Sidebar } from "@/components/mission-control/Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
}
