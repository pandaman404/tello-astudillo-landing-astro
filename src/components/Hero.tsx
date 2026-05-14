import heroImg from "@/assets/hero-industrial.jpg";
import { ArrowRight, MessageCircle } from "lucide-react";
import { HeroStats } from "./HeroStats";
import site from "@/content/site.json";

const c = site.heroSection;
const cfg = site.siteConfig;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg.src}
          alt="Maestranza Tello-Astudillo: mecanizado CNC y soldadura industrial"
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
            {c.eyebrow}
          </div>

          <h1 className="font-heading text-[clamp(3.25rem,9vw,5.5rem)] leading-[0.88] tracking-tight text-foreground">
            {c.headlineLine1}
            <br />
            <span className="text-stroke">{c.headlineLine2}</span>
            <br />
            <span className="text-accent">{c.headlineLine3}</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {c.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={c.ctaPrimaryHref}
              className="group inline-flex items-center gap-3 clip-corner bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-blue transition-all hover:brightness-125"
            >
              {c.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`${cfg.whatsapp}?text=${encodeURIComponent(cfg.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-accent/50 bg-accent/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              {c.ctaSecondary}
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
