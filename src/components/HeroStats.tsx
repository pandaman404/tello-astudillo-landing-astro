interface Stat { value: string; label: string; }

export function HeroStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {stats?.map((stat, i) => (
        <div
          key={stat.label}
          className="hover-lift hover-glow group relative overflow-hidden border border-white/10 bg-background/60 p-4 backdrop-blur-sm transition-all sm:p-5"
          style={{ animationDelay: `${500 + i * 100}ms` }}
        >
          {/* Accent top line */}
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />

          <div className="font-display text-3xl leading-none text-white transition-transform group-hover:scale-105 origin-left sm:text-4xl">
            {stat.value}
          </div>
          <div className="mt-1.5 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground/70 sm:mt-2 sm:text-[10px]">
            {stat.label}
          </div>

          {/* Subtle corner accent */}
          <span className="absolute right-2 bottom-2 text-[9px] font-bold text-primary/30 select-none transition-all group-hover:text-accent/50 group-hover:scale-110 sm:right-3 sm:bottom-3 sm:text-[10px]">
            ◆
          </span>
        </div>
      ))}
    </div>
  );
}
