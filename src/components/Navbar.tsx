import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#empresa", label: "Empresa" },
  { href: "#servicios", label: "Servicios" },
  { href: "#materiales", label: "Materiales" },
  { href: "#contacto", label: "Contacto" },
];

interface NavbarProps {
  logo?: { imageUrl?: string; alt?: string };
}

export function Navbar({ logo }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 py-3 sm:min-h-24 sm:px-6 sm:py-4 lg:min-h-28 lg:px-8 lg:py-5">
        {/* Logo */}
        <a href="#top" className="flex items-center group">
          <img
            src={logo?.imageUrl}
            alt={logo?.alt ?? "Tello-Astudillo"}
            className="h-[54px] w-auto object-contain brightness-0 invert transition-opacity group-hover:opacity-80 sm:h-[62px] lg:h-[72px]"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium uppercase tracking-wider text-foreground/90 transition-colors hover:text-foreground
                after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center clip-corner bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-blue transition-all hover:brightness-125"
        >
          Cotizar ahora
        </a>

        {/* Mobile toggle — min 44×44px touch target */}
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-sm text-foreground transition-colors hover:text-accent lg:hidden"
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
        <div className="relative overflow-hidden border-t border-border bg-background/95 backdrop-blur-md">
          {/* Grid overlay for consistency with hero */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="relative flex flex-col gap-1 px-5 py-4 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium uppercase tracking-wider text-foreground/90 transition-colors hover:text-foreground last:border-0"
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
