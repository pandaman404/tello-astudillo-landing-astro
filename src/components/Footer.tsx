const navLinks = [
  { href: "#empresa", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#materiales", label: "Materiales" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

interface FooterProps {
  siteConfig?: { [key: string]: any };
}

export function Footer({ siteConfig }: FooterProps) {
  const cfg = siteConfig ?? {};
  return (
    <footer className="relative border-t border-border bg-card text-muted-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* ── Main grid ── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <a href="#top" className="group inline-flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 clip-corner place-items-center bg-primary font-heading text-lg font-bold text-primary-foreground transition-all group-hover:brightness-125">
                TA
              </span>
              <div className="leading-tight">
                <div className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  Tello-Astudillo
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  Metalmecánica · Ltda.
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Maestranza especializada en fabricación CNC, soldadura inoxidable
              y mantenimiento industrial para procesos críticos en todo Chile.
            </p>

            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center border border-border/70 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]">
              <span className="h-px w-5 bg-accent" />
              <span className="font-semibold text-accent">Navegación</span>
            </div>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
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
          <div>
            <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]">
              <span className="h-px w-5 bg-accent" />
              <span className="font-semibold text-accent">Contacto</span>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={cfg.phone1Href} className="transition-colors hover:text-foreground">
                  {cfg.phone1}
                </a>
              </li>
              <li>
                <a href={cfg.phone2Href} className="transition-colors hover:text-foreground">
                  {cfg.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${cfg.email}`} className="break-all transition-colors hover:text-foreground">
                  {cfg.email}
                </a>
              </li>
              <li>
                <a
                  href={cfg.addressMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {cfg.address}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {cfg.emergencyBadge}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Google Maps embed ── */}
        <div className="mt-12 overflow-hidden border border-border/60">
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/60">
              <span className="h-px w-4 bg-accent/50" />
              {cfg.address}
            </span>
            <a
              href={cfg.addressMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-semibold uppercase tracking-wider text-accent transition-opacity hover:opacity-70"
            >
              Ver en Google Maps ↗
            </a>
          </div>
          <iframe
            src={cfg.mapsEmbedUrl}
            width="100%"
            height="220"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Tello-Astudillo"
            className="block w-full grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100"
            style={{ border: 0 }}
          />
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Metalmecánica Tello-Astudillo Asociados Ltda. Todos los derechos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40">
            {cfg.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
