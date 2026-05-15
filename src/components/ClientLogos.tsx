interface ClientLogosProps {
  clientLogos?: Array<{ alt: string; name: string; imageUrl: string }>;
}

export function ClientLogos({ clientLogos }: ClientLogosProps) {
  const clients = clientLogos && clientLogos.length > 0
    ? clientLogos
    : [];

  const track = [...clients, ...clients];

  return (
    <section
      className="relative overflow-hidden py-8 sm:py-10"
      style={{ backgroundColor: "var(--color-section-light)" }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-28"
        style={{ background: "linear-gradient(to right, var(--color-section-light), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-28"
        style={{ background: "linear-gradient(to left, var(--color-section-light), transparent)" }}
      />

      <div className="animate-fade-in-up mb-5 text-center sm:mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          Empresas que confían en nosotros
        </p>
        <h2 className="mt-1.5 font-heading text-xl font-bold uppercase tracking-wider text-slate-700 sm:text-2xl">
          Confiaron en nuestros servicios
        </h2>
        <div className="mx-auto mt-2.5 h-px w-12 bg-primary/30" />
      </div>

      <div className="group flex overflow-hidden">
        <div className="flex animate-marquee gap-4 sm:gap-10 group-hover:pause-marquee">
          {track.map((client, i) => (
            <div
              key={`${client.alt}-${i}`}
              className="flex h-12 w-24 shrink-0 items-center justify-center sm:h-14 sm:w-32"
            >
              <img
                src={client.imageUrl}
                alt={client.alt}
                className="max-h-9 w-auto object-contain grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] sm:max-h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
