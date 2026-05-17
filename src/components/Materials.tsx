import { useState } from "react";
import { Layers, Shield, Sparkles, Factory, Cog, Hammer, Beaker, Wind, PaintBucket, Ruler} from "lucide-react";

const materialsGroups = [
  {
    k: "01",
    title: "Aceros al carbono",
    icon: Layers,
    items: [
      "Acero A36",
      "Acero SAE 1045",
      "Acero estructural",
      "Acero galvanizado",
    ],
  },
  {
    k: "02",
    title: "Aceros inoxidables",
    icon: Shield,
    items: ["Inoxidable 304", "Inoxidable 316", "Inoxidable sanitario"],
  },
  {
    k: "03",
    title: "Aceros especiales",
    icon: Sparkles,
    items: [
      "SAE 4340",
      "Acero herramienta D2",
      "Acero para cementación",
    ],
  },
  {
    k: "04",
    title: "Aluminio",
    icon: Factory,
    items: ["Aluminio", "Duroaluminio", "Perfiles de aluminio", "Planchas diamantadas"],
  },
  {
    k: "05",
    title: "Cobres y aleaciones",
    icon: Cog,
    items: [
      "Cobre electrolítico",
      "Bronce",
      "Latón",
    ],
  },
  {
    k: "06",
    title: "Fundiciones",
    icon: Hammer,
    items: [
      "Fierro fundido",
    ],
  },
  {
    k: "07",
    title: "Materiales plásticos industriales",
    icon: Beaker,
    items: [
      "UHMW",
      "Teflón",
      "PVC industrial",
      "Acetal",
      "Policarbonato",
      "Polietileno HDPE",
      "Poliuretano",
    ],
  },
  {
    k: "08",
    title: "Materiales para soldadura",
    icon: Wind,
    items: [
      "Consumibles esenciales",
      "Electrodos revestidos",
      "Alambre MIG",
      "Varillas TIG",
      "Gases industriales",
      "Argón",
      "CO₂",
      "Mezclas Ar/CO₂",
      "Oxígeno",
    ],
  },
  {
    k: "09",
    title: "Materiales abrasivos y de acabado",
    items: [
      "Discos de corte",
      "Discos flap",
      "Piedras de esmeril",
      "Lijas",
      "Arena para arenado",
    ],
  },
  {
    k: "10",
    title: "Pinturas y recubrimientos",
    icon: PaintBucket,
    items: [
      "Primer anticorrosivo",
      "Epóxico industrial",
      "Zincado en frío",
      "Galvanizado",
    ],
  },
  {
    k: "11",
    title: "Perfiles y formatos comerciales",
    icon: Ruler,
    items: [
      "Perfiles estructurales",
      "Perfil H",
      "Perfil I",
      "Canal U",
      "Ángulo L",
      "Perfil C",
      "Tubo estructural",
      "Perfil rectangular",
      "Perfil cuadrado",
      
    ],
  },
  {
    k: "12",
    title: "Elementos de fijación",
    items: [
      "Pernos",
      "Tuercas",
      "Golillas",
      "Remaches",
      "Espárragos",
    ],
  },
];

interface Group { k: string; title: string; items: string[]; }

export function Materials({ materials }: { materials?: Group[] }) {
    const data = materials ?? materialsGroups;
    const [active, setActive] = useState(data[0].k);
    const current = data.find((g) => g.k === active) ?? data[0];
    const CurrentIcon = (materialsGroups.find((g) => g.k === current?.k))?.icon ?? Factory;

    return(
    <section id="materials" className="relative py-20 sm:py-28" style={{ backgroundColor: "var(--color-section-light)" }}>
        <div className= "pointer-events-none absolute inset-0 bg-grid-light opacity-40"/>
        <div className="mx-auto max-w-7x1 px-6">
        
        {/* Header */}
        <div className="mb-14 grid grid-cols-12 items-end gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-5 flex items-center gap-3 text-mono text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary"/>
                Materiales
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
                ABASTECIMIENTO
                <br />
                <span className="text-primary">METALMECÁNICO</span>
            </h2>
            </div>
                <p className="col-span-12 text-sm leading-relaxed text-muted-foreground lg:col-span-5 lg:max-w-sm">
                    Selección de aceros, metales y suministros para procesos metalmecánicos, fabricación industrial y proyectos de ingeniería.
                    </p>
            </div>
       {/* ── Desktop / tablet: split panel ── */}
        <div className="scroll-reveal hidden md:flex overflow-hidden border border-slate-200 bg-white shadow-sm">
          {/* Left: nav list */}
          <div className="w-[42%] lg:w-[35%] shrink-0 border-r border-slate-200 bg-slate-50/50">
            <ul>
              {data.map((g) => {
                const isActive = g.k === active;
                const SideIcon = (materialsGroups.find((item) => item.k === g.k))?.icon || Factory;
                
                return (
                  <li key={g.k} className="relative border-b border-slate-100 last:border-b-0">
                    {isActive && (
                      <span className="absolute inset-y-0 left-0 w-[2px] bg-primary animate-slide-in-left" />
                    )}
                    <button
                      type="button"
                      onClick={() => setActive(g.k)}
                      className={`group flex w-full items-center justify-between gap-4 px-6 py-[14px] text-left transition-all duration-200 ${
                        isActive ? "bg-white" : "hover:bg-white/60"
                      }`}>
                      <span className="flex items-center gap-4 min-w-0">
                        <span
                          className={`text-mono text-[11px] tabular-nums shrink-0 transition-colors duration-200 ${
                            isActive ? "text-primary font-bold" : "text-slate-400 group-hover:text-slate-600  "
                          }`}
                        >
                          {g.k}
                        </span>
                        <SideIcon 
                          className={`size-4 shrink-0 transition-colors ${
                            isActive ? "text-primary" : "text-slate-400 group-hover:text-slate-600"
                          }`} 
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
                          isActive
                            ? "w-6 bg-primary"
                            : "w-3 bg-slate-200 group-hover:w-5 group-hover:bg-primary/50"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: content panel */}
          <div className="flex-1 bg-white p-8 lg:p-12 relative isolate overflow-hidden">
            {/* Panel eyebrow */}
            <div className="mb-7 flex items-center gap-3 text-mono text-[11px] uppercase tracking-[0.25em]">
              <span className="text-primary font-semibold">[ {current?.k} ]</span>
              <span className="h-px flex-1 bg-border/60" />
              <span className="text-muted-foreground/70">{current?.items.length} items</span>
            </div>

            <div className="flex items-center gap-4 mb-2">
              <CurrentIcon className="size-7 text-primary" />
              <h3 className="font-heading font-bold text-2xl tracking-tight text-slate-900 md:text-[2rem]">
                {current?.title}
              </h3>
            </div>

            <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {current?.items.map((i, idx) => (
                <li
                  key={i}
                  className="animate-fade-in group flex items-center gap-3 border-l-2 border-l-primary/20 bg-slate-50/40 px-4 py-3 text-[13px] text-slate-600 transition-all duration-150 hover:bg-slate-50 hover:bg-background/60 hover:text-slate-900 hover:-translate-y-0.5"
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  <span className="h-px w-3 shrink-0 bg-primary/50 transition-all duration-200 group-hover:w-4 group-hover:bg-primary/80" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Mobile: accordion ── */}
        <div className="scroll-reveal md:hidden border border-border/70 divide-y divide-border/60 bg-white shadow-sm overflow-hidden">
          {data.map((g) => {
            const isOpen = g.k === active;
            const AccordionIcon = (materialsGroups.find((item) => item.k === g.k))?.icon || Factory;

            return (
              <div key={g.k}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? "" : g.k)}
                  className={`relative flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 ${
                    isOpen ? "bg-slate-50" : " bg-white hover:bg-slate-50/50"
                  }`}
                  aria-expanded={isOpen}
                >
                  {isOpen && (
                    <span className="absolute inset-y-0 left-0 w-[2px] bg-primary" />
                  )}
                  <span className="flex items-center gap-3 min-w-0">
                    <span
                      className={`text-mono text-[11px] tabular-nums shrink-0 transition-colors ${
                        isOpen ? "text-primary font-bold" : "text-slate-400"
                      }`}
                    >
                      {g.k}
                    </span>
                    <AccordionIcon className={`size-4 shrink-0 ${isOpen ? "text-primary" : "text-slate-400"}`} />
                    <span
                      className={`text-[15px] font-medium tracking-wide truncate transition-colors ${
                        isOpen ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {g.title}
                    </span>
                  </span>
                  <span
                    className={`text-xl font-light text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <ul className="border-t border-slate-100 bg-slate-50/40 px-6 py-6 space-y-5">
                    {g.items.map((i) => (
                      <li key={i} className="animate-fade-in flex items-center gap-3 py-2.5 text-[13px] text-slate-600 border-b border-slate-100 last:border-0">
                        <span className="h-px w-3 shrink-0 bg-primary/60" />
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
    )
}
