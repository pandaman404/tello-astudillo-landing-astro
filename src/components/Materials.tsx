import { useState } from "react";

const materialsGroups = [
  {
    k: "01",
    title: "Aceros al carbono",
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
    items: ["Inoxidable 304", "Inoxidable 316", "Inoxidable sanitario"],
  },
  {
    k: "03",
    title: "Aceros especiales",
    items: [
      "SAE 4340",
      "Acero herramienta D2",
      "Acero para cementación",
    ],
  },
  {
    k: "04",
    title: "Aluminio",
    items: ["Aluminio", "Duroaluminio", "Perfiles de aluminio", "Planchas diamantadas"],
  },
  {
    k: "05",
    title: "Cobres y aleaciones",
    items: [
      "Cobre electrolítico",
      "Bronce",
      "Latón",
    ],
  },
  {
    k: "06",
    title: "Fundiciones",
    items: [
      "Fierro fundido",
    ],
  },
  {
    k: "07",
    title: "Materiales plásticos industriales",
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

export function Materials() {
    const [active, setActive] = useState(materialsGroups[0].k);

    return(
    <section id="materials" className="relative overflow-hidden py-16 sm:py-24">
        <div className= "pointer-events-none absolute inset-0 opacity-[0.05]"/>
        <div className="mx-auto max-w-7x1 px-6">
        
        {/* Header */}
        <div className="mb-14 grid grid-cols-12 items-end gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-5 flex items-center gap-3 text-mono text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-10 bg-accent"/>
                Materiales
            </div>
            <h3 className="text-display text-4xl leading-[0.93] tracking-tight md:text-[3.5rem]">
                ABASTECIMIENTO
                <br />
                <span className="text-accent">METALMECÁNICO</span>
            </h3>
            </div>
                <p className="col-span-12 text-sm leading-relaxed text-muted-foreground lg:col-span-5 lg:max-w-sm">
                    Selección de aceros, metales y suministros para procesos metalmecánicos, fabricación industrial y proyectos de ingeniería.
                    </p>
            </div>
            </div>
    </section>
    )
}