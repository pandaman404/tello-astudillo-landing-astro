import { useState } from "react";
import { Layers, ShieldCheck, Star, Hexagon, Zap, Flame, FlaskConical, Thermometer, Eraser, PaintBucket, Ruler, Wrench, type LucideProps } from "lucide-react";

type IconName = "Layers" | "ShieldCheck" | "Star" | "Hexagon" | "Zap" | "Flame" | "FlaskConical" | "Thermometer" | "Eraser" | "PaintBucket" | "Ruler" | "Wrench";

const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  Layers, ShieldCheck, Star, Hexagon, Zap, Flame, FlaskConical, Thermometer, Eraser, PaintBucket, Ruler, Wrench,
};

function getIcon(name?: string): React.ComponentType<LucideProps> {
  return (name && ICON_MAP[name as IconName]) || Layers;
}

interface Group { k: string; title: string; icon?: string; items: string[]; }

export function Materials({ materials }: { materials?: Group[] }) {
  const data = materials ?? [];
  const [active, setActive] = useState(data[0]?.k ?? "");
  const current = data.find((g) => g.k === active) ?? data[0];
  const CurrentIcon = getIcon(current?.icon);

  return (
    <section
      id="materiales"
      aria-labelledby="materiales-heading"
      className="relative scroll-mt-16 py-16 sm:py-24"
      style={{ backgroundColor: "var(--color-section-light)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div className="scroll-reveal mb-10 grid grid-cols-12 items-end gap-x-6 gap-y-4 sm:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:mb-5" aria-hidden="true">
              <span className="h-px w-10 bg-primary" />
              Materiales
            </p>
            <h2 id="materiales-heading" className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem]">
              Insumos para procesos
              <br />
              <span className="text-primary">metalmecánicos</span>
            </h2>
          </div>
          <p className="col-span-12 text-sm leading-relaxed text-muted-foreground lg:col-span-5 lg:max-w-sm">
            Trabajamos con aceros al carbono, inoxidables y especiales, aluminio, cobre, bronce y latón, plásticos industriales y consumibles de soldadura. Todo el material para mecanizado CNC, soldadura TIG/MIG y fabricación a medida en nuestra maestranza.
          </p>
        </div>

        {/* ── Desktop / tablet: tabbed split panel ── */}
        <div className="scroll-reveal hidden md:flex overflow-hidden border border-slate-200 bg-white shadow-sm">

          {/* Left: tab list */}
          <nav
            role="tablist"
            aria-label="Categorías de materiales"
            className="w-[42%] lg:w-[35%] shrink-0 border-r border-slate-200 bg-slate-50/50"
          >
            {data.map((g) => {
              const isActive = g.k === active;
              const SideIcon = getIcon(g.icon);
              return (
                <div key={g.k} className="relative border-b border-slate-100 last:border-b-0">
                  {isActive && (
                    <span className="absolute inset-y-0 left-0 w-[2px] bg-primary animate-slide-in-left" aria-hidden="true" />
                  )}
                  <button
                    role="tab"
                    type="button"
                    id={`materials-tab-${g.k}`}
                    aria-selected={isActive}
                    aria-controls={`materials-panel-${g.k}`}
                    onClick={() => setActive(g.k)}
                    className={`group flex w-full items-center justify-between gap-4 px-6 py-[14px] text-left transition-all duration-200 ${
                      isActive ? "bg-white" : "hover:bg-white/60"
                    }`}
                  >
                    <span className="flex items-center gap-4 min-w-0">
                      <span
                        className={`text-[11px] font-mono tabular-nums shrink-0 transition-colors duration-200 ${
                          isActive ? "text-primary font-bold" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                        aria-hidden="true"
                      >
                        {g.k}
                      </span>
                      <SideIcon
                        className={`size-4 shrink-0 transition-colors ${
                          isActive ? "text-primary" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-[15px] font-medium tracking-wide truncate transition-colors duration-200 ${
                          isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800"
                        }`}
                      >
                        {g.title}
                      </span>
                    </span>
                    <span
                      className={`h-px shrink-0 transition-all duration-300 ${
                        isActive ? "w-6 bg-primary" : "w-3 bg-slate-200 group-hover:w-5 group-hover:bg-primary/50"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right: all panels in DOM (SEO: content always crawlable) */}
          <div className="flex-1 relative overflow-hidden bg-white">
            {data.map((g) => {
              const isVisible = g.k === active;
              const PanelIcon = getIcon(g.icon);
              return (
                <div
                  key={g.k}
                  role="tabpanel"
                  id={`materials-panel-${g.k}`}
                  aria-labelledby={`materials-tab-${g.k}`}
                  hidden={!isVisible}
                  className="p-6 lg:p-12"
                >
                  {/* Panel eyebrow */}
                  <div className="mb-6 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em]" aria-hidden="true">
                    <span className="text-primary font-semibold">[ {g.k} ]</span>
                    <span className="h-px flex-1 bg-border/60" />
                    <span className="text-muted-foreground/70">
                      {g.items.length} {g.items.length === 1 ? "material" : "materiales"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <PanelIcon className="size-6 text-primary" aria-hidden="true" />
                    <h3 className="font-heading font-bold text-xl tracking-tight text-slate-900 md:text-[1.75rem]">
                      {g.title}
                    </h3>
                  </div>

                  <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2" aria-label={`Materiales: ${g.title}`}>
                    {g.items.map((item, idx) => (
                      <li
                        key={item}
                        className={`group flex items-center gap-3 border-l-2 border-l-primary/20 bg-slate-50/40 px-4 py-3 text-[13px] text-slate-600 transition-all duration-150 hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-0.5 ${isVisible ? "animate-fade-in" : ""}`}
                        style={isVisible ? { animationDelay: `${idx * 30}ms` } : undefined}
                      >
                        <span className="h-px w-3 shrink-0 bg-primary/50 transition-all duration-200 group-hover:w-4 group-hover:bg-primary/80" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: accordion (WAI-ARIA compliant, all content in DOM) ── */}
        <div
          className="scroll-reveal md:hidden overflow-hidden"
          role="list"
          aria-label="Materiales por categoría"
        >
          {data.map((g) => {
            const isOpen = g.k === active;
            const AccordionIcon = getIcon(g.icon);
            return (
              <div
                key={g.k}
                role="listitem"
                className={`border-x border-b border-slate-200 first:border-t transition-colors duration-200 ${
                  isOpen ? "border-l-2 border-l-primary" : "border-l border-l-slate-200"
                }`}
              >
                {/* WAI-ARIA: heading wraps trigger button */}
                <h3 className="m-0">
                  <button
                    type="button"
                    id={`materials-mobile-tab-${g.k}`}
                    aria-expanded={isOpen}
                    aria-controls={`materials-mobile-panel-${g.k}`}
                    onClick={() => setActive(isOpen ? "" : g.k)}
                    className={`relative flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors duration-200 font-normal ${
                      isOpen ? "bg-white" : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    {/* Number badge */}
                    <span
                      className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-sm text-[11px] font-mono tabular-nums font-semibold transition-colors duration-200 ${
                        isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                      }`}
                      aria-hidden="true"
                    >
                      {g.k}
                    </span>

                    {/* Icon + Title */}
                    <span className="flex flex-1 items-center gap-2.5 min-w-0">
                      <AccordionIcon
                        className={`size-4 shrink-0 transition-colors duration-200 ${
                          isOpen ? "text-primary" : "text-slate-400"
                        }`}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-[14px] font-semibold tracking-wide truncate transition-colors duration-200 ${
                          isOpen ? "text-slate-900" : "text-slate-600"
                        }`}
                      >
                        {g.title}
                      </span>
                    </span>

                    {/* Chevron */}
                    <svg
                      className={`size-4 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>

                {/* Panel: always in DOM for SEO — hidden via max-height */}
                <div
                  id={`materials-mobile-panel-${g.k}`}
                  role="region"
                  aria-labelledby={`materials-mobile-tab-${g.k}`}
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-slate-100 bg-slate-50 px-4 pb-4 pt-3">
                    <div className="mb-3 flex items-center gap-2" aria-hidden="true">
                      <AccordionIcon className="size-3.5 text-primary/70" strokeWidth={2} aria-hidden="true" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                        {g.items.length} {g.items.length === 1 ? "material" : "materiales"}
                      </span>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5" aria-label={g.title}>
                      {g.items.map((item, i) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 py-1.5 text-[13px] text-slate-600"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-primary/50" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
