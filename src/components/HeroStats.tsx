import site from "@/content/site.json";
const stats = site.heroSection.stats;

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden border border-white/10 bg-background/60 p-5 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
        >
          {/* Accent top line */}
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="font-display text-4xl leading-none text-white">
            {stat.value}
          </div>
          <div className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            {stat.label}
          </div>

          {/* Subtle corner accent */}
          <span className="absolute right-3 bottom-3 text-[10px] font-bold text-primary/30 select-none">
            ◆
          </span>
        </div>
      ))}
    </div>
  );
}
