import { useState, useEffect } from "react";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#dispositivos", label: "Dispositivos" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-card-dark" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        <a href="#hero" className="text-xl font-black text-gradient">
          {SITE_NAME}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="whatsapp" size="sm" className="rounded-full" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} className="mr-1" />
              Testar Grátis
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button variant="whatsapp" className="rounded-full mt-2" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} className="mr-2" />
                Testar Grátis
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
