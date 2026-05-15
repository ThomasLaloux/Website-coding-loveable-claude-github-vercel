import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LangContext";
import { CALENDLY_URL } from "@/i18n/dictionary";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, t, setLang } = useLang();
  const { pathname } = useLocation();
  const base = `/${lang}`;

  const items = [
    { label: t.nav.approach, href: "#approach" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const LangSwitch = () => (
    <div className="flex items-center text-xs font-mono tracking-wide text-hero-foreground/70">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 transition-colors ${lang === "en" ? "text-hero-foreground font-semibold" : "hover:text-hero-foreground"}`}
        aria-label="English"
      >
        EN
      </button>
      <span className="text-hero-foreground/30">|</span>
      <button
        onClick={() => setLang("fr")}
        className={`px-2 py-1 transition-colors ${lang === "fr" ? "text-hero-foreground font-semibold" : "hover:text-hero-foreground"}`}
        aria-label="Français"
      >
        FR
      </button>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-hero-foreground/10">
      <div className="container max-w-[1200px] mx-auto flex items-center justify-between h-16 px-6">
        <Link
          to={base}
          onClick={() => pathname === base && window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-lg text-hero-foreground tracking-tight"
        >
          Thomas P. Laloux
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {items.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <LangSwitch />
          <Button
            variant="cta"
            size="sm"
            asChild
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              {t.nav.bookCall}
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-hero border-t border-hero-foreground/10 px-6 pb-6 pt-2">
          {items.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left py-3 text-hero-foreground/80 hover:text-hero-foreground text-sm"
            >
              {item.label}
            </button>
          ))}
          <div className="py-3 border-t border-hero-foreground/10 mt-2">
            <LangSwitch />
          </div>
          <Button variant="cta" size="default" className="w-full mt-2" asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              {t.nav.bookCall}
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
