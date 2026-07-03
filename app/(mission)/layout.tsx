import { AppShell } from "@/components/mission-control/AppShell";

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
