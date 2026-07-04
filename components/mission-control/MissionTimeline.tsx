"use client";

import type { Territory } from "@/types/territory";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function MissionTimeline({
  territory,
}: {
  territory: Territory;
}) {
  const steps = [
    {
      day: "Today",
      title: "Market Selected",
      description: `${territory.city} enters active planning.`,
    },
    {
      day: "+7 Days",
      title: "Build Target List",
      description: "Identify priority facilities and decision makers.",
    },
    {
      day: "+14 Days",
      title: "Roof Walk Campaign",
      description: "Schedule inspections and site visits.",
    },
    {
      day: "+30 Days",
      title: "Proposal Pipeline",
      description: "Generate estimates and pursue opportunities.",
    },
    {
      day: "+60 Days",
      title: "Expected Wins",
      description: "Convert opportunities into booked work.",
    },
  ];

  return (
    <GlassPanel className="p-6">
      <div className="mb-6">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-400">
          Mission Timeline
        </p>

        <h2 className="mt-2 text-2xl font-black text-white">
          {territory.city} Deployment
        </h2>
      </div>

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div key={step.day} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-400 font-black text-slate-950">
                {index + 1}
              </div>

              {index !== steps.length - 1 && (
                <div className="mt-2 h-full w-px bg-white/10" />
              )}
            </div>

            <div className="flex-1 pb-4">
              <div className="text-xs font-black uppercase tracking-wider text-amber-300">
                {step.day}
              </div>

              <div className="mt-1 text-lg font-black text-white">
                {step.title}
              </div>

              <div className="mt-1 text-sm leading-6 text-slate-400">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}