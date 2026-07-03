import {
  ArrowUpRight,
  Crosshair,
  RadioTower,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function MissionHero() {
  return (
    <GlassPanel className="relative overflow-hidden p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.22),transparent_28rem),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.16),transparent_32rem)]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-amber-400/20" />
      <div className="pointer-events-none absolute -right-10 top-24 h-44 w-44 rounded-full border border-sky-400/20" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            <ShieldCheck size={18} />
            National Expansion Readiness
          </div>

          <div className="mt-8 flex flex-wrap items-end gap-5">
            <div className="text-8xl font-black leading-none tracking-[-0.08em] text-white lg:text-[10rem]">
              84.2
            </div>

            <div className="mb-4 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
              ▲ +2.1 this week
            </div>
          </div>

          <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400 shadow-[0_0_30px_rgba(251,191,36,.45)]" />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <PulseMetric label="Territories watched" value="42" />
            <PulseMetric label="Campaigns active" value="8" />
            <PulseMetric label="High-value signals" value="14" />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            RoofIQ is tracking territory readiness, campaign momentum, weather pressure,
            permit activity, and industrial growth across the national expansion field.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-400 text-slate-950">
                <RadioTower size={22} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                  AI Commander
                </p>
                <h3 className="text-2xl font-black text-white">Deploy Dallas</h3>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-400/10 px-4 py-2 text-right">
              <div className="text-2xl font-black text-emerald-300">94%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                Confidence
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <Signal label="Permit momentum" value="+18%" />
            <Signal label="Industrial growth" value="Extreme" />
            <Signal label="Weather window" value="Favorable" />
            <Signal label="Competition pressure" value="Manageable" />
          </div>

          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
            <div className="flex items-center gap-2 text-sm font-black text-amber-300">
              <Crosshair size={17} />
              Recommended Action
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Launch Dallas campaign within 30 days. Assign 2 business developers,
              1 estimator, and 1 service lead.
            </p>
          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.02]">
            <Rocket size={18} />
            Launch Campaign
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </GlassPanel>
  );
}

function PulseMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
    </div>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <span className="text-sm font-bold text-slate-400">{label}</span>
      <span className="text-sm font-black text-white">{value}</span>
    </div>
  );
}
