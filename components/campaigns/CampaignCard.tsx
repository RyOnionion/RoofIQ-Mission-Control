import type { Campaign } from "@/types/campaign";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <GlassPanel className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black text-white">{campaign.name}</h3>
          <p className="text-sm text-slate-400">{campaign.phase}</p>
        </div>
        <div className="text-3xl font-black text-amber-300">{campaign.progress}%</div>
      </div>
      <div className="mt-5 space-y-3">
        {campaign.objectives.map((objective) => {
          const pct = Math.min(100, Math.round((objective.current / objective.target) * 100));
          return (
            <div key={objective.label}>
              <div className="mb-1 flex justify-between text-xs font-bold text-slate-400"><span>{objective.label}</span><span>{objective.current}/{objective.target}</span></div>
              <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-amber-400" style={{ width: `${pct}%` }} /></div>
            </div>
          );
        })}
      </div>
    </GlassPanel>
  );
}
