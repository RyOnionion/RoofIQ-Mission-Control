"use client";

import { usePathname } from "next/navigation";
import { Bell, Rocket } from "lucide-react";

const pages = {
  "/": { eyebrow: "Great American Expansion", title: "Mission Control", description: "Where should we deploy people, capital, and attention next?" },
  "/expansion-theater": { eyebrow: "National Intelligence", title: "Expansion Theater", description: "Analyze markets, compare territories, and identify the next opportunity." },
  "/territories": { eyebrow: "Territory Intelligence", title: "Territories", description: "Every market. Every opportunity. Every competitive advantage." },
  "/campaigns": { eyebrow: "Campaign Operations", title: "Campaigns", description: "Execute expansion plans and measure territory capture." },
  "/intelligence": { eyebrow: "Executive Intelligence", title: "Intel Feed", description: "Events, permit activity, weather, and AI recommendations." },
  "/executive-briefings": { eyebrow: "Executive Briefings", title: "Briefings", description: "Strategic summaries for leadership." },
  "/settings": { eyebrow: "System", title: "Settings", description: "Configure Mission Control." }
};

export function Header() {
  const pathname = usePathname();
  const page = pages[pathname as keyof typeof pages] ?? pages["/"];
  return (
    <header className="flex items-start justify-between gap-6 border-b border-white/10 bg-slate-950/50 px-6 py-5 lg:px-8">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-400">{page.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-white lg:text-5xl">{page.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">{page.description}</p>
      </div>
      <div className="flex gap-3">
        <button className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10"><Bell size={18} /></button>
        <button className="flex items-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-105"><Rocket size={18} /> Launch Mission</button>
      </div>
    </header>
  );
}
