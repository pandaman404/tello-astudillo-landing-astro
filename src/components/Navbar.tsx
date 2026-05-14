import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#empresa", label: "Empresa" },
  { href: "#servicios", label: "Servicios" },
  { href: "#materiales", label: "Materiales" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <header
      ref={menuRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <span className="grid h-9 w-9 place-items-center clip-corner bg-primary font-display text-lg font-bold text-primary-foreground transition-all group-hover:brightness-125">
            TA
          </span>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Tello-Astudillo
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
              Metalmecánica · Ltda.
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground
                after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center clip-corner bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-blue transition-all hover:brightness-125"
        >
          Cotizar ahora
        </a>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="rounded-sm p-1 text-foreground transition-colors hover:text-accent lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-background/95 backdrop-blur-md">
          {/* Grid overlay for consistency with hero */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="relative flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center clip-corner bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-blue transition-all hover:brightness-125"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
