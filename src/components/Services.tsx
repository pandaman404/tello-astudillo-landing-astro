import { useState } from "react";

const serviceGroups = [
  {
    k: "01",
    title: "Diseño e ingeniería",
    items: [
      "Levantamiento técnico",
      "Diseño mecánico",
      "Modelado CAD 2D y 3D",
      "Desarrollo de planos de fabricación",
      "Metrología",
    ],
  },
  {
    k: "02",
    title: "Corte de materiales",
    items: ["Corte láser", "Corte por oxicorte", "Corte por chorro de agua"],
  },
  {
    k: "03",
    title: "Mecanizado",
    items: [
      "Torneado convencional",
      "Torneado CNC",
      "Fresado convencional",
      "Fresado CNC",
      "Taladrado",
      "Cepillado",
      "Rectificado",
    ],
  },
  {
    k: "04",
    title: "Conformado y deformación",
    items: ["Plegado de planchas", "Curvado de tubos"],
  },
  {
    k: "05",
    title: "Soldadura y unión",
    items: [
      "Soldadura MIG/MAG",
      "Soldadura TIG",
      "Soldadura de aluminio",
      "Soldadura inoxidable",
      "Punteo y armado",
    ],
  },
  {
    k: "06",
    title: "Fabricación estructural",
    items: [
      "Estructuras metálicas",
      "Estanques",
      "Piping",
      "Plataformas y pasarelas",
      "Soportes y bastidores",
    ],
  },
  {
    k: "07",
    title: "Tratamientos",
    items: [
      "Arenado",
      "Granallado",
      "Pintura industrial",
      "Pintura electrostática",
      "Galvanizado",
      "Metalizado",
      "Pulido",
      "Recubrimientos anticorrosivos",
      "Temple",
      "Nitrurado profundo",
    ],
  },
  {
    k: "08",
    title: "Montaje y ensamblaje",
    items: [
      "Armado mecánico",
      "Ensamble estructural",
      "Montaje industrial",
      "Integración de componentes",
      "Ajustes mecánicos",
    ],
  },
  {
    k: "09",
    title: "Mantención y reparación",
    items: [
      "Mantención preventiva",
      "Mantención correctiva",
      "Reparación de componentes",
      "Recuperación de piezas",
      "Cambio de rodamientos",
      "Reparación de ejes",
      "Reparación de bombas y reductores",
    ],
  },
  {
    k: "10",
    title: "Control de calidad",
    items: [
      "Inspección visual",
      "Líquidos penetrantes",
      "Control dimensional",
      "Trazabilidad de materiales",
      "Certificación de soldadores",
    ],
  },
  {
    k: "11",
    title: "Seguridad y gestión",
    items: [
      "Prevención de riesgos",
      "Gestión de calidad ISO",
      "Gestión ambiental",
      "Permisos de trabajo",
      "Gestión documental",
      "Planificación y control de producción",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(serviceGroups[0].k);
  const current = serviceGroups.find((g) => g.k === active) ?? serviceGroups[0];

  return (
    <section id="servicios" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
      {/* ── Section header ── */}
      <div className="mb-14 grid grid-cols-12 items-end gap-y-6 gap-x-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="mb-5 flex items-center gap-3 text-mono text-xs uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Servicios
          </div>
          <h3 className="text-display text-4xl leading-[0.93] tracking-tight md:text-[3.5rem]">
            SOLUCIONES
            <br />
            <span className="text-accent">METALMECÁNICAS INTEGRALES.</span>
          </h3>
        </div>
        <p className="col-span-12 text-sm leading-relaxed text-muted-foreground lg:col-span-5 lg:max-w-sm">
          Más de 60 procesos industriales organizados por categoría. Selecciona
          una disciplina para revisar el detalle.
        </p>
      </div>

      {/* ── Desktop / tablet: split panel ── */}
      <div className="hidden md:flex overflow-hidden border border-border/70 shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
        {/* Left: nav list */}
        <div className="w-[42%] lg:w-[35%] shrink-0 border-r border-border/70 bg-background">
          <ul>
            {serviceGroups.map((g) => {
              const isActive = g.k === active;
              return (
                <li key={g.k} className="relative border-b border-border/50 last:border-b-0">
                  {/* Active left-edge accent */}
                  {isActive && (
                    <span className="absolute inset-y-0 left-0 w-[2px] bg-accent" />
                  )}
                  <button
                    type="button"
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
                        isActive
                          ? "w-6 bg-accent"
                          : "w-3 bg-border/80 group-hover:w-5 group-hover:bg-accent/50"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: content panel */}
        <div className="flex-1 bg-card px-8 py-10 lg:px-12 lg:py-12">
          {/* Panel eyebrow */}
          <div className="mb-7 flex items-center gap-3 text-mono text-[11px] uppercase tracking-[0.25em]">
            <span className="text-accent font-semibold">[ {current.k} ]</span>
            <span className="h-px flex-1 bg-border/60" />
            <span className="text-muted-foreground/70">{current.items.length} procesos</span>
          </div>

          <h4 className="text-display text-2xl tracking-wide text-foreground md:text-[2rem]">
            {current.title}
          </h4>

          <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {current.items.map((i) => (
              <li
                key={i}
                className="group flex items-center gap-3 border-l-2 border-l-accent/40 bg-background/35 px-4 py-3 text-[13px] text-foreground/75 transition-all duration-150 hover:border-l-accent/80 hover:bg-background/60 hover:text-foreground/95"
              >
                <span className="h-px w-3 shrink-0 bg-accent/50 transition-all duration-200 group-hover:w-4 group-hover:bg-accent/80" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Mobile: accordion ── */}
      <div className="md:hidden border border-border/70 divide-y divide-border/60">
        {serviceGroups.map((g) => {
          const isOpen = g.k === active;
          return (
            <div key={g.k}>
              <button
                type="button"
                onClick={() => setActive(isOpen ? "" : g.k)}
                className={`relative flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 ${
                  isOpen ? "bg-card" : "bg-background hover:bg-card/40"
                }`}
                aria-expanded={isOpen}
              >
                {isOpen && (
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-accent" />
                )}
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    className={`text-mono text-[11px] tabular-nums shrink-0 transition-colors ${
                      isOpen ? "text-accent" : "text-muted-foreground/60"
                    }`}
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
                <span
                  className={`text-xl font-light text-accent shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              {isOpen && (
                <ul className="border-t border-border/50 bg-background/50 px-5 py-4 divide-y divide-border/30">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-center gap-3 py-2.5 text-[13px] text-foreground/75">
                      <span className="h-px w-3 shrink-0 bg-accent/60" />
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}