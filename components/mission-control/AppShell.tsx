import { Header } from "@/components/mission-control/Header";
import { Sidebar } from "@/components/mission-control/Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="lg:pl-72">
        <Header />
        <main className="min-h-screen p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}