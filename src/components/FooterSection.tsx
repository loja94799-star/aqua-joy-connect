import { SITE_NAME, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-primary-foreground/80">
          <div>
            <h3 className="text-xl font-bold text-primary-foreground mb-3">{SITE_NAME}</h3>
            <p className="text-sm leading-relaxed">
              O melhor parque aquático da região. Diversão, segurança e conforto para toda a família.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#atracoes" className="hover:text-accent transition-colors">Atrações</a></li>
              <li><a href="#galeria" className="hover:text-accent transition-colors">Galeria</a></li>
              <li><a href="#depoimentos" className="hover:text-accent transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground mb-3">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube size={22} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="WhatsApp">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
