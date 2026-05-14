import { ArrowRight, MessageCircle } from "lucide-react";
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

interface HeroProps {
  heroImage?: { imageUrl?: string; src?: string; alt?: string };
  siteConfig?: SiteConfig;
}

export function Hero({ heroImage, siteConfig }: HeroProps) {
  const imgSrc = heroImage?.imageUrl ?? heroImage?.src;
  const imgAlt = heroImage?.alt ?? "Maestranza Tello-Astudillo: mecanizado CNC y soldadura industrial";
  const whatsappHref = siteConfig?.whatsapp
    ? `${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage ?? "")}`
    : "#";

  return (
    <section className="relative isolate overflow-hidden bg-background pt-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={imgSrc}
          alt={imgAlt}
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-transparent to-background" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-grid" />

      {/* Main content grid */}
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-12 items-center gap-6 px-6 py-24">
        {/* Left: headline + CTAs */}
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Desde 1988 · Industria nacional chilena
          </div>

          <h1 className="font-heading text-[clamp(3.25rem,9vw,5.5rem)] leading-[0.88] tracking-tight text-foreground">
            SOCIOS ESTRATÉGICOS
            <br />
            <span className="text-stroke">EN MANTENIMIENTO</span>
            <br />
            <span className="text-accent">Y FABRICACIÓN INDUSTRIAL.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Más de 30 años fabricando repuestos industriales, realizando mecanizado CNC, soldadura inoxidable y mantenimiento industrial para procesos críticos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 clip-corner bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-blue transition-all hover:brightness-125"
            >
              Solicitar Cotización
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-accent/50 bg-accent/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp 24/7
            </a>
          </div>
        </div>

        {/* Right: stats grid */}
        <div className="col-span-12 lg:col-span-4">
          <HeroStats />
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
}
