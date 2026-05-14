import { useState, useEffect } from "react";
import engineerImg from "@/assets/engineer.jpg";
import isoImg from "@/assets/iso9000.png";
import { FileText, X } from "lucide-react";
import site from "@/content/site.json";

const c = site.aboutSection;
const iso = c.iso;

export function About() {
  const [activePdf, setActivePdf] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    document.body.style.overflow = activePdf ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activePdf]);

  return (
    <>
      <section
        id="empresa"
        className="relative py-20 sm:py-28"
        style={{ backgroundColor: "var(--color-section-light)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
        {/* Top rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* ── Left: image ── */}
            <div className="relative">
              {/* Accent slab behind image */}
              <div className="absolute -inset-3 -z-10 border border-primary/10 bg-primary/5" />
              <img
                src={engineerImg.src}
                alt="Ingeniero revisando plano técnico junto a pieza mecanizada"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover"
              />
              {/* Badge 30+ */}
              <div className="absolute -bottom-5 -right-5 hidden border border-slate-200 bg-white px-6 py-4 shadow-md sm:block">
                <div className="font-heading text-5xl font-bold leading-none text-slate-900">30+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  {c.badge30Label}
                </div>
              </div>
            </div>

            {/* ── Right: content ── */}
            <div className="flex flex-col gap-0 lg:pl-2">

              {/* Eyebrow */}
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <span className="h-px w-8 bg-primary" />
                {c.eyebrow}
              </div>

              {/* Headline */}
              <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
                {c.headlineLine1}
                <br />
                <span className="text-primary">{c.headlineLine2}</span>
              </h2>

              {/* Paragraph */}
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
                {c.body}
              </p>

              {/* Divider */}
              <div className="mt-8 h-px w-full bg-slate-200" />

              {/* ISO badge block */}
              <div className="mt-8 border-l-2 border-primary bg-white px-6 py-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <a
                    href={iso.sgsUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Verificar certificación SGS"
                    className="shrink-0 transition-opacity hover:opacity-60"
                  >
                    <img
                      src={isoImg.src}
                      alt={iso.badge}
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                      style={{ filter: "brightness(0) saturate(100%) invert(23%) sepia(95%) saturate(1200%) hue-rotate(210deg) brightness(95%) contrast(95%)" }}
                    />
                  </a>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                      {iso.badge}
                    </div>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-slate-500">
                      {iso.body}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActivePdf({ url: iso.certPdfPath, title: iso.modalTitleCert })}
                    className="inline-flex items-center gap-2 border border-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white"
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                    {iso.btnCertification}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePdf({ url: iso.policyPdfPath, title: iso.modalTitlePolicy })}
                    className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-all hover:border-primary hover:text-primary"
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                    {iso.btnPolicy}
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
                  src={isoImg.src}
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

