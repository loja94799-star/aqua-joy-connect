import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, SITE_TAGLINE, SITE_SUBTITLE } from "@/lib/constants";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-waterpark.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Parque aquático com toboáguas coloridos e piscinas"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight mb-6 animate-fade-up">
          {SITE_TAGLINE}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {SITE_SUBTITLE}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="whatsapp" size="lg" className="text-base px-8 py-6 rounded-full" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={22} />
              Falar no WhatsApp
            </a>
          </Button>
          <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-full" asChild>
            <a href="#atracoes">Ver Atrações</a>
          </Button>
        </div>
      </div>

      <a
        href="#beneficios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default HeroSection;
