export function GlassPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.045] shadow-glow backdrop-blur ${className}`}>
      {children}
    </div>
  );
}
