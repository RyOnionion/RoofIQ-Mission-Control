import { CommanderPanel } from "@/components/mission-control/CommanderPanel";
import { ReadinessScore } from "@/components/mission-control/ReadinessScore";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function MissionHero() {
  return (
    <GlassPanel className="relative overflow-hidden p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.22),transparent_28rem),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.16),transparent_32rem)]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <ReadinessScore />
        <CommanderPanel />
      </div>
    </GlassPanel>
  );
}