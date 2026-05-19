import { useState, useEffect } from "react";
import { FileText, X } from "lucide-react";

const pdfUrl = "/Politica_de_calidad_iso_9001_2015.pdf";
const certUrl = "/iso-certificado.pdf";

interface AboutProps {
  aboutImage?: { src?: string; imageUrl?: string; alt?: string };
  aboutInfo?: { companyExperienceYears?: number}
  certImage?: { src?: string; imageUrl?: string; alt?: string };
}

export function About({ aboutImage, aboutInfo, certImage }: AboutProps) {
  const engineerSrc = aboutImage?.imageUrl ?? aboutImage?.src;
  const engineerAlt = aboutImage?.alt ?? "Ingeniero revisando plano técnico junto a pieza mecanizada";
  const isoSrc = certImage?.imageUrl ?? certImage?.src;
  const [activePdf, setActivePdf] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    document.body.style.overflow = activePdf ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activePdf]);

  return (
    <>
      <section
        id="empresa"
        aria-labelledby="empresa-heading"
        className="relative scroll-mt-16 py-20 sm:py-28"
        style={{ backgroundColor: "var(--color-section-light)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
        {/* Top rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* ── Left: image ── */}
            <div className="scroll-reveal relative">
              {/* Accent slab behind image */}
              <div className="absolute -inset-2 -z-10 border border-primary/10 bg-primary/5 sm:-inset-3" />
              <img
                src={engineerSrc}
                alt={engineerAlt}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.02] sm:aspect-[4/3] lg:aspect-[4/5]"
              />
              {/* Badge 30+ */}
              <div className="animate-fade-in-up delay-300 absolute -bottom-4 -right-2 border border-slate-200 bg-white px-4 py-3 shadow-md sm:-bottom-5 sm:-right-5 sm:px-6 sm:py-4">
                <div className="font-heading text-4xl font-bold leading-none text-slate-900 sm:text-5xl">{aboutInfo?.companyExperienceYears ?? 30}+</div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  años en terreno
                </div>
              </div>
            </div>

            {/* ── Right: content ── */}
            <div className="scroll-reveal flex flex-col gap-0 pt-6 lg:pl-2 lg:pt-0">

              {/* Eyebrow */}
              <div className="animate-fade-in-up flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Quiénes somos
              </div>

              {/* Headline */}
              <h2 id="empresa-heading" className="animate-fade-in-up delay-100 mt-4 font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-4xl sm:text-5xl lg:text-[3.25rem]">
                Tres décadas impulsando
                <br />
                <span className="text-primary">la industria chilena</span>
              </h2>

              {/* Paragraph */}
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
                Maestranza especializada en mecanizado CNC, soldadura inoxidable,
                fabricación a medida y mantenimiento industrial. Servimos a plantas
                de alimentos, bebidas, farmacéutica y manufactura pesada en todo Chile.
              </p>

              {/* Divider */}
              <div className="mt-8 h-px w-full bg-slate-200" />

              {/* ISO badge block */}
              <div className="mt-8 border-l-2 border-primary bg-white px-6 py-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.sgs.com/en/certified-clients-and-products"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Verificar certificación SGS"
                    className="shrink-0 transition-opacity hover:opacity-60"
                  >
                    <img
                      src={isoSrc}
                      alt="ISO 9001:2015"
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                      style={{ filter: "brightness(0) saturate(100%) invert(23%) sepia(95%) saturate(1200%) hue-rotate(210deg) brightness(95%) contrast(95%)" }}
                    />
                  </a>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                      ISO 9001:2015
                    </div>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-slate-500">
                      Procesos certificados bajo norma internacional. Calidad,
                      trazabilidad y mejora continua en cada proyecto.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActivePdf({ url: certUrl, title: "Certificación ISO 9001:2015" })}
                    className="inline-flex items-center gap-2 border border-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white"
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                    Ver certificación ISO 9001:2015
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePdf({ url: pdfUrl, title: "Política de Calidad · ISO 9001:2015" })}
                    className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-all hover:border-primary hover:text-primary"
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                    Política de calidad
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── PDF Modal ── */}
      {activePdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActivePdf(null)}
        >
          <div
            className="relative flex w-full max-w-4xl flex-col overflow-hidden border border-border bg-card shadow-2xl"
            style={{ height: "min(90vh, 820px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-border/60 bg-card px-5 py-3">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                <img
                  src={isoSrc}
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(23%) sepia(95%) saturate(1200%) hue-rotate(210deg) brightness(95%) contrast(95%)" }}
                />
                {activePdf.title}
              </div>
              <button
                type="button"
                onClick={() => setActivePdf(null)}
                aria-label="Cerrar"
                className="grid h-8 w-8 place-items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* PDF viewer */}
            <iframe
              src={`${activePdf.url}#toolbar=0&navpanes=0`}
              className="flex-1 w-full bg-white"
              title={activePdf.title}
            />

            {/* Modal footer */}
            <div className="flex items-center justify-between border-t border-border/60 bg-card px-5 py-3">
              <span className="text-xs text-muted-foreground/50">
                Metalmecánica Tello-Astudillo Asociados Ltda.
              </span>
              <a
                href={activePdf.url}
                download
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary transition-opacity hover:opacity-70"
              >
                <FileText className="h-3.5 w-3.5" strokeWidth={1.6} />
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

