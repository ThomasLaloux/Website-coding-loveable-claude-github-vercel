import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-hero-foreground/10">
      <div className="container max-w-[1200px] mx-auto flex items-center justify-between h-16 px-6">
        <button onClick={() => scrollTo("#hero")} className="font-serif text-lg text-hero-foreground tracking-tight">
          Thomas Laloux
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button variant="cta" size="sm" onClick={() => scrollTo("#booking")}>
            Book a call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-hero-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-hero border-t border-hero-foreground/10 px-6 pb-6 pt-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left py-3 text-hero-foreground/80 hover:text-hero-foreground text-sm"
            >
              {item.label}
            </button>
          ))}
          <Button variant="cta" size="default" className="w-full mt-2" onClick={() => scrollTo("#booking")}>
            Book a call
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
