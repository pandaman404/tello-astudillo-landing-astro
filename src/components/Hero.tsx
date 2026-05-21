import { ArrowRight } from "lucide-react";
import { HeroStats } from "./HeroStats";

interface SiteConfig {
  phone1?: string;
  phone1Href?: string;
  phone2?: string;
  phone2Href?: string;
  email?: string;
  whatsapp?: string;
  whatsappMessage?: string;
  address?: string;
  addressMapsUrl?: string;
  mapsEmbedUrl?: string;
  region?: string;
  emergencyBadge?: string;
  [key: string]: any;
}

interface Stat { value: string; label: string; }

interface HeroProps {
  heroImage?: { imageUrl?: string; src?: string; alt?: string };
  siteConfig?: SiteConfig;
  stats: Stat[];
}

export function Hero({ heroImage, siteConfig, stats }: HeroProps) {
  const imgSrc = heroImage?.imageUrl ?? heroImage?.src;
  const imgAlt = heroImage?.alt ?? "Maestranza Tello-Astudillo: mecanizado CNC y soldadura industrial";
  const whatsappHref = siteConfig?.whatsapp
    ? `${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage ?? "")}`
    : "#";
  const instagramHref = siteConfig?.social?.instagram ?? siteConfig?.instagram ?? "#";

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-background pt-20"
    >
      {/* Background image — LCP element: eager + high priority */}
      <div className="absolute inset-0 -z-10">
        <img
          src={imgSrc}
          alt={imgAlt}
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-transparent to-background" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-grid" />

      {/* Main content grid */}
      {/* min-h fallback: 80vh for older Safari, 80svh (safe viewport) for modern browsers */}
      <div className="mx-auto grid hero-min-h max-w-7xl grid-cols-12 items-center gap-6 px-6 py-20 sm:min-h-[92vh] sm:py-24">
        {/* Left: headline + CTAs */}
        <div className="col-span-12 lg:col-span-8">
          <div className="animate-fade-in-up mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:mb-8">
            <span className="h-px w-10 bg-accent" />
            Desde 1988 · Industria nacional chilena
          </div>

          <h1 id="hero-heading" className="animate-fade-in-up delay-100 font-heading text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.9] tracking-tight text-foreground sm:leading-[0.88]">
            SOCIOS ESTRATÉGICOS
            <br />
            <span className="text-stroke">EN MANTENIMIENTO</span>
            <br />
            <span className="text-accent">Y FABRICACIÓN INDUSTRIAL.</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-sm leading-relaxed text-foreground sm:mt-8 md:text-base lg:text-lg">
            Más de 30 años fabricando repuestos industriales, realizando mecanizado CNC, soldadura inoxidable y mantenimiento industrial para procesos críticos.
          </p>

          <div className="animate-fade-in-up delay-300 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#contacto"
              className="btn-sweep group inline-flex items-center justify-center gap-3 clip-corner bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-blue transition-all hover:brightness-125 sm:w-auto"
            >
              Solicitar Cotización
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hover-lift inline-flex items-center justify-center gap-3 border border-accent/50 bg-accent/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 8.015 0C3.637 0 .076 3.562.076 7.939c0 1.4.366 2.767 1.062 3.97L0 16l4.213-1.106a7.9 7.9 0 0 0 3.801.97h.004c4.377 0 7.938-3.562 7.938-7.939a7.88 7.88 0 0 0-2.355-5.599ZM8.018 14.54h-.003a6.6 6.6 0 0 1-3.359-.92l-.241-.144-2.5.656.667-2.438-.156-.25a6.59 6.59 0 0 1-1.014-3.505c0-3.636 2.958-6.594 6.594-6.594a6.55 6.55 0 0 1 4.683 1.944 6.55 6.55 0 0 1 1.936 4.673c0 3.636-2.958 6.594-6.594 6.594Zm3.615-4.947c-.198-.099-1.173-.579-1.355-.645s-.314-.099-.446.099-.512.644-.628.777-.231.149-.429.05c-.198-.099-.835-.308-1.591-.982-.588-.525-.985-1.173-1.1-1.371s-.013-.305.086-.403c.09-.09.198-.231.297-.347.099-.116.132-.198.198-.33s.033-.248-.017-.347-.446-1.074-.611-1.471c-.161-.386-.325-.334-.446-.34l-.38-.007a.73.73 0 0 0-.529.248c-.182.198-.694.678-.694 1.652s.71 1.917.81 2.05c.099.132 1.398 2.136 3.387 2.995.473.204.842.326 1.13.417.475.151.907.13 1.248.079.381-.057 1.173-.479 1.339-.942.165-.462.165-.859.116-.942-.05-.083-.182-.132-.38-.231Z" />
              </svg>
              WhatsApp
            </a>

            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              className="hover-lift inline-flex items-center justify-center gap-3 border border-primary/50 bg-primary/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent backdrop-blur-sm transition-colors hover:bg-primary/20 hover:text-foreground sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Right: stats grid */}
        <div className="animate-fade-in-up delay-400 col-span-12 lg:col-span-4">
          <HeroStats stats={stats} />
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
}
