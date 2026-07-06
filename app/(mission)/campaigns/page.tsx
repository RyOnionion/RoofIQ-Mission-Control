import { Suspense } from "react";

import { CampaignsContent } from "./CampaignsContent";

export default function Page() {
  return (
    <Suspense fallback={<CampaignsLoading />}>
      <CampaignsContent />
    </Suspense>
  );
}

function CampaignsLoading() {
  return (
    <section className="space-y-6 p-6 lg:p-8">
      <div className="h-40 rounded-3xl border border-white/10 bg-white/[0.04]" />

      <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
        <div className="h-[480px] rounded-3xl border border-white/10 bg-white/[0.04]" />
        <div className="h-[480px] rounded-3xl border border-white/10 bg-white/[0.04]" />
      </div>
    </section>
  );
}