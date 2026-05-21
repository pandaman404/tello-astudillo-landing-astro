const NAV_LINKS = [
  { href: "#empresa", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#materiales", label: "Materiales" },
  { href: "#contacto", label: "Contacto" },
];

interface FooterProps {
  siteConfig?: { social?: { instagram?: string }; [key: string]: any };
  logo?: { imageUrl?: string; alt?: string };
}

export function Footer({ siteConfig = {}, logo }: FooterProps) {

  return (
    <footer className="relative border-t border-border bg-card text-foreground/95">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-16 md:px-8 md:py-14 lg:px-6 lg:py-16">

        {/* ── Main grid ── */}
        <div className="grid gap-8 md:grid-cols-12 md:gap-x-8 md:gap-y-10 lg:gap-x-12">

          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#top" className="group inline-flex items-center">
              <img
                src={logo?.imageUrl}
                alt={logo?.alt ?? "Tello-Astudillo"}
                height={48}
                className="h-20 w-auto object-contain transition-opacity group-hover:opacity-80 md:h-24 lg:h-20"
              />
            </a>

            <p className="mt-2 max-w-sm text-sm leading-relaxed md:mt-3 md:max-w-md md:text-[15px]">
              Maestranza especializada en fabricación CNC, soldadura inoxidable
              y mantenimiento industrial para procesos críticos en todo Chile.
            </p>

            <div className="mt-6 flex gap-2 md:mt-7">
              {siteConfig.social?.instagram && (
                <a
                  href={siteConfig.social?.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-9 w-9 place-items-center border border-border/70 text-foreground/95 transition-colors hover:border-accent hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]">
              <span className="h-px w-5 bg-accent" />
              <span className="font-semibold text-accent">Navegación</span>
            </div>
            <ul className="space-y-3 md:space-y-3.5">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center gap-2.5 text-sm transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-3 shrink-0 bg-border/60 transition-all group-hover:w-4 group-hover:bg-accent/70" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]">
              <span className="h-px w-5 bg-accent" />
              <span className="font-semibold text-accent">Contacto</span>
            </div>
            <ul className="space-y-3.5 text-sm md:max-w-md md:space-y-4 md:text-[15px]">
              <li>
                <a href={siteConfig?.phone1Href} className="transition-colors hover:text-foreground">
                  {siteConfig?.phone1}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig?.email}`} className="break-all transition-colors hover:text-foreground">
                  {siteConfig?.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig?.addressMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig?.address}
                </a>
              </li>
              {Array.isArray(siteConfig?.businessHours) && siteConfig.businessHours.length > 0 && (
                <li className="pt-1">
                  <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-foreground/80">Horario</p>
                  <div className="space-y-1 text-foreground/80">
                    {siteConfig.businessHours.map((line: string) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* ── Google Maps embed ── */}
        <div className="mt-8 overflow-hidden border border-border/60 sm:mt-12 md:mt-14">
          <div className="flex flex-col items-start gap-2 border-b border-border/60 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between md:px-5 md:py-3">
            <span className="flex min-w-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/92">
              <span className="h-px w-4 shrink-0 bg-accent/50" />
              <span className="truncate">{siteConfig?.address}</span>
            </span>
            <a
              href={siteConfig?.addressMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-4 shrink-0 text-[11px] font-semibold uppercase tracking-wider text-accent transition-opacity hover:opacity-70"
            >
              Ver en Maps ↗
            </a>
          </div>
          <iframe
            src={siteConfig?.mapsEmbedUrl}
            width="100%"
            height="180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Tello-Astudillo"
            className="block w-full grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100 sm:h-[220px] md:h-[240px] lg:h-[220px]"
            style={{ border: 0 }}
          />
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-12">
          <p className="text-xs text-foreground/90">
            © {new Date().getFullYear()} Metalmecánica Tello-Astudillo Asociados Ltda. Todos los derechos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/85">
            {siteConfig?.tagline}
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-foreground/80">
          Desarrollado por{" "}
          <a
            href="https://github.com/pandaman404"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-foreground transition-opacity hover:opacity-70"
          >
            Rodrigo Valenzuela
          </a>
        </p>
      </div>
    </footer>
  );
}
