import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

interface SiteConfig {
  phone1?: string;
  phone1Href?: string;
  phone2?: string;
  phone2Href?: string;
  phone3?: string;
  phone3Href?: string;
  email?: string;
  whatsapp?: string;
  address?: string;
  addressMapsUrl?: string;
}

const schema = z.object({
  name: z.string().trim().min(2, "Ingrese su nombre").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10, "Cuéntenos un poco más").max(2000),
});

const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY as string | undefined;
const FORM_ENABLED = !!WEB3FORMS_KEY;

export function Contact({ siteConfig = {} }: { siteConfig?: SiteConfig }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORM_ENABLED) return;
    const form = new FormData(e.currentTarget);
    // Honeypot: si el campo oculto tiene valor, es un bot
    if (form.get("_hp")) return;
    const data = Object.fromEntries(form.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const map: Record<string, string> = {};
      for (const issue of r.error.issues) {
        if (issue.path[0]) map[String(issue.path[0])] = issue.message;
      }
      setErrors(map);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Nueva solicitud de cotización desde web",
          from_name: "Tello-Astudillo Contact Form",
          replyto: r.data.email,
          ...r.data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="relative scroll-mt-16 overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: info ── */}
          <div className="scroll-reveal">
            <div className="animate-fade-in-up flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-10 bg-accent" />
              Contacto
            </div>

            <h2 id="contacto-heading" className="animate-fade-in-up delay-100 mt-4 font-heading text-3xl font-bold uppercase leading-[0.93] tracking-tight text-foreground sm:text-4xl sm:text-5xl">
              Hablemos de su
              <br />
              <span className="text-accent">proyecto industrial</span>
            </h2>

            <p className="animate-fade-in-up delay-200 mt-6 max-w-md text-[15px] leading-relaxed text-foreground">
              Cotice fabricación, mantenciones o atención de emergencia.
              Respondemos en horas hábiles, todos los días.
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ContactRow icon={Phone} label="Teléfono" value={siteConfig?.phone1 || ""} href={siteConfig?.phone1Href} />
              <ContactRow icon={MessageCircle} label="WhatsApp directo" value="Atención inmediata" href={siteConfig?.whatsapp} highlight />
              <ContactRow icon={Mail} label="Correo" value={siteConfig?.email || ""} href={`mailto:${siteConfig?.email}`} />
              <ContactRow icon={MapPin} label="Ubicación" value={siteConfig?.address || ""} href={siteConfig?.addressMapsUrl} />
            </div>
          </div>

          {/* ── Right: form ── */}
          <form
            onSubmit={onSubmit}
            className="scroll-reveal hover-glow clip-corner relative border border-border/70 bg-card p-8 shadow-[0_2px_32px_rgba(0,0,0,0.5)] sm:p-10 transition-all"
          >
            {/* Form header eyebrow */}
            <div className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em]">
              <span className="font-semibold text-accent">[ SOLICITUD DE COTIZACIÓN ]</span>
              <span className="h-px flex-1 bg-border/60" />
              <span className="text-foreground/92">Campos requeridos *</span>
            </div>

            {/* Honeypot — oculto para humanos, visible para bots */}
            <input
              type="text"
              name="_hp"
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Nombre *" error={errors.name} />
              <Field name="company" label="Empresa" error={errors.company} />
              <Field name="email" label="Email *" type="email" error={errors.email} />
              <Field name="phone" label="Teléfono" error={errors.phone} />
            </div>

            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/95">
                Mensaje *
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={2000}
                className="mt-2 w-full resize-none border border-border/70 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/80 focus:border-accent focus:outline-none transition-colors"
                placeholder="Describa la pieza, proceso o requerimiento..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending" || !FORM_ENABLED}
              title={!FORM_ENABLED ? "Formulario no disponible: falta configuración" : undefined}
              className="clip-corner mt-8 inline-flex w-full items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-blue transition-all hover:brightness-125 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar solicitud
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {!FORM_ENABLED && (
              <p className="mt-4 flex items-center gap-2 text-sm text-amber-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Formulario no disponible. Contáctenos por WhatsApp o correo.
              </p>
            )}

            {status === "ok" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                Solicitud recibida. Nos pondremos en contacto a la brevedad.
              </p>
            )}
            {status === "error" && Object.keys(errors).length === 0 && (
              <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                Error al enviar. Por favor intente nuevamente.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div
        className={`grid h-11 w-11 shrink-0 place-items-center border transition-colors ${
          highlight
            ? "border-accent/50 bg-accent/10"
            : "border-border/70 bg-card"
        }`}
      >
        <Icon
          className={`h-4 w-4 ${highlight ? "text-accent" : "text-muted-foreground"}`}
          strokeWidth={1.6}
        />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-foreground/92">
          {label}
        </div>
        <div
          className={`mt-0.5 font-heading text-[17px] font-semibold tracking-wide ${
            highlight ? "text-accent" : "text-foreground"
          }`}
        >
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="group block transition-opacity hover:opacity-75">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/95">
        {label}
      </label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="mt-2 w-full border border-border/70 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/80 focus:border-accent focus:outline-none transition-colors"
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
