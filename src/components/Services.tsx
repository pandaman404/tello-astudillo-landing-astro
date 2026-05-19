import { useState } from "react";

interface Group { k: string; title: string; items: string[]; }

export function Services({ services }: { services?: Group[] }) {
  const [active, setActive] = useState(services?.[0]?.k ?? "");
  const data = services ?? [];

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="scroll-mt-16 bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Section header ── */}
        <div className="scroll-reveal mb-10 grid grid-cols-12 items-end gap-y-4 gap-x-6 sm:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:mb-5" aria-hidden="true">
              <span className="h-px w-10 bg-accent" />
              Servicios
            </p>
            <h2 id="servicios-heading" className="text-display text-3xl leading-[0.93] tracking-tight sm:text-4xl md:text-[3.5rem]">
              SOLUCIONES
              <br />
              <span className="text-accent">METALMECÁNICAS INTEGRALES.</span>
            </h2>
          </div>
          <p className="col-span-12 text-sm leading-relaxed text-muted-foreground lg:col-span-5 lg:max-w-sm">
            Mecanizado CNC, soldadura TIG/MIG, fabricación estructural, tratamientos superficiales y mantención industrial. Más de 60 procesos especializados para proyectos de ingeniería, industria alimentaria, minería y construcción en Chile.
          </p>
        </div>

        {/* ── Desktop / tablet: tabbed split panel ── */}
        <div className="scroll-reveal hidden md:flex overflow-hidden border border-border/70 shadow-[0_2px_24px_rgba(0,0,0,0.4)]">

          {/* Left: tab list */}
          <nav
            role="tablist"
            aria-label="Categorías de servicios metalmecánicos"
            className="w-[42%] lg:w-[35%] shrink-0 border-r border-border/70 bg-background"
          >
            {data.map((g) => {
              const isActive = g.k === active;
              return (
                <div key={g.k} className="relative border-b border-border/50 last:border-b-0">
                  {isActive && (
                    <span className="absolute inset-y-0 left-0 w-[2px] bg-accent animate-slide-in-left" aria-hidden="true" />
                  )}
                  <button
                    role="tab"
                    type="button"
                    id={`services-tab-${g.k}`}
                    aria-selected={isActive}
                    aria-controls={`services-panel-${g.k}`}
                    onClick={() => setActive(g.k)}
                    className={`group flex w-full items-center justify-between gap-4 px-6 py-[14px] text-left transition-all duration-200 ${
                      isActive ? "bg-card" : "hover:bg-card/50"
                    }`}
                  >
                    <span className="flex items-center gap-4 min-w-0">
                      <span
                        className={`text-mono text-[11px] tabular-nums shrink-0 transition-colors duration-200 ${
                          isActive ? "text-accent" : "text-muted-foreground/50 group-hover:text-muted-foreground"
                        }`}
                        aria-hidden="true"
                      >
                        {g.k}
                      </span>
                      <span
                        className={`text-display text-[15px] tracking-wide truncate transition-colors duration-200 ${
                          isActive ? "text-foreground" : "text-foreground/55 group-hover:text-foreground/85"
                        }`}
                      >
                        {g.title}
                      </span>
                    </span>
                    <span
                      className={`h-px shrink-0 transition-all duration-300 ${
                        isActive ? "w-6 bg-accent" : "w-3 bg-border/80 group-hover:w-5 group-hover:bg-accent/50"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right: all panels in DOM (SEO: always crawlable) */}
          <div className="flex-1 relative bg-card overflow-hidden">
            {data.map((g) => {
              const isVisible = g.k === active;
              return (
                <div
                  key={g.k}
                  role="tabpanel"
                  id={`services-panel-${g.k}`}
                  aria-labelledby={`services-tab-${g.k}`}
                  hidden={!isVisible}
                  className="px-8 py-10 lg:px-12 lg:py-12"
                >
                  {/* Panel eyebrow */}
                  <div className="mb-7 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em]" aria-hidden="true">
                    <span className="text-accent font-semibold">[ {g.k} ]</span>
                    <span className="h-px flex-1 bg-border/60" />
                    <span className="text-muted-foreground/70">{g.items.length} procesos</span>
                  </div>

                  <h3 className="text-display text-2xl tracking-wide text-foreground md:text-[2rem]">
                    {g.title}
                  </h3>

                  <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2" aria-label={`Procesos: ${g.title}`}>
                    {g.items.map((item, idx) => (
                      <li
                        key={item}
                        className={`group flex items-center gap-3 border-l-2 border-l-accent/40 bg-background/35 px-4 py-3 text-[13px] text-foreground/75 transition-all duration-150 hover:border-l-accent/80 hover:bg-background/60 hover:text-foreground/95 hover:-translate-y-0.5 ${isVisible ? "animate-fade-in" : ""}`}
                        style={isVisible ? { animationDelay: `${idx * 30}ms` } : undefined}
                      >
                        <span className="h-px w-3 shrink-0 bg-accent/50 transition-all duration-200 group-hover:w-4 group-hover:bg-accent/80" aria-hidden="true" />
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
          className="scroll-reveal md:hidden border border-border/70"
          role="list"
          aria-label="Servicios metalmecánicos por categoría"
        >
          {data.map((g) => {
            const isOpen = g.k === active;
            return (
              <div
                key={g.k}
                role="listitem"
                className="border-b border-border/60 last:border-b-0"
              >
                {/* WAI-ARIA: h3 wraps trigger */}
                <h3 className="m-0">
                  <button
                    type="button"
                    id={`services-mobile-tab-${g.k}`}
                    aria-expanded={isOpen}
                    aria-controls={`services-mobile-panel-${g.k}`}
                    onClick={() => setActive(isOpen ? "" : g.k)}
                    className={`relative flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-normal transition-colors duration-200 ${
                      isOpen ? "bg-card" : "bg-background hover:bg-card/40"
                    }`}
                  >
                    {isOpen && (
                      <span className="absolute inset-y-0 left-0 w-[2px] bg-accent" aria-hidden="true" />
                    )}
                    <span className="flex items-center gap-3 min-w-0">
                      <span
                        className={`text-[11px] font-mono tabular-nums shrink-0 transition-colors ${
                          isOpen ? "text-accent" : "text-muted-foreground/60"
                        }`}
                        aria-hidden="true"
                      >
                        {g.k}
                      </span>
                      <span
                        className={`text-display text-[15px] tracking-wide truncate transition-colors ${
                          isOpen ? "text-foreground" : "text-foreground/70"
                        }`}
                      >
                        {g.title}
                      </span>
                    </span>
                    {/* Chevron */}
                    <svg
                      className={`size-4 shrink-0 text-accent/60 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>

                {/* Panel: always in DOM for SEO — hidden via max-height */}
                <div
                  id={`services-mobile-panel-${g.k}`}
                  role="region"
                  aria-labelledby={`services-mobile-tab-${g.k}`}
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul
                    className="border-t border-border/50 bg-background/50 px-5 py-4 divide-y divide-border/30"
                    aria-label={g.title}
                  >
                    {g.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 py-2.5 text-[13px] text-foreground/75">
                        <span className="h-px w-3 shrink-0 bg-accent/60" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}