import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle, Check, Clock } from "lucide-react";
import heroImg from "@/assets/iptv-hero.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Streaming de canais, filmes e séries"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container text-center px-4 pt-20">
        <div className="inline-flex items-center gap-2 bg-primary/15 border-glow rounded-full px-4 py-2 mb-6 animate-fade-up">
          <Clock size={14} className="text-primary" />
          <span className="text-primary text-sm font-semibold">Teste grátis por tempo limitado</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Teste IPTV <span className="text-gradient">Grátis</span> Agora
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Mais de 10.000 canais, filmes e séries em HD, Full HD e 4K
        </p>

        <div className="flex flex-col items-center gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {["Sem travamentos", "Funciona em qualquer dispositivo", "Liberação imediata"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={18} className="text-primary" />
              <span className="text-foreground/90">{item}</span>
            </div>
          ))}
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="whatsapp"
            size="lg"
            className="text-base md:text-lg px-10 py-7 rounded-full animate-pulse-glow"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={22} />
              TESTAR AGORA NO WHATSAPP
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
