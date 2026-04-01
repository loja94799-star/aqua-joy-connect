import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 gradient-primary">
      <div className="container text-center" ref={ref}>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Garanta Sua Diversão Agora Mesmo
        </h2>
        <p className="text-primary-foreground/85 text-lg mb-10 max-w-xl mx-auto">
          Não perca tempo! Fale com nossa equipe e reserve seu ingresso com condições especiais.
        </p>
        <Button
          variant="whatsapp"
          size="lg"
          className="text-lg px-10 py-7 rounded-full animate-pulse-glow"
          asChild
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2" size={24} />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
