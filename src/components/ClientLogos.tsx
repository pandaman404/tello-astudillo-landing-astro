import cafLogo from "@/assets/caf-logo.png";
import ccuLogo from "@/assets/ccu-2.png";
import SoproleLogo from "@/assets/logo-Soprole-2.png";
import site from "@/content/site.json";

const c = site.clientLogos;

// Map client alts to their logo src (extend as new logos are added)
const logoMap: Record<string, string> = {
  "CAF": cafLogo.src,
  "CCU": ccuLogo.src,
  "Soprole": SoproleLogo.src,
};

const clients = c.clients.map((cl) => ({
  src: logoMap[cl.alt] ?? cafLogo.src,
  alt: cl.alt,
}));

export function ClientLogos() {
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

      <div className="mb-5 text-center sm:mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          {c.eyebrow}
        </p>
        <h2 className="mt-1.5 font-heading text-xl font-bold uppercase tracking-wider text-slate-700 sm:text-2xl">
          {c.headline}
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
                src={client.src}
                alt={client.alt}
                className="max-h-9 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:max-h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
