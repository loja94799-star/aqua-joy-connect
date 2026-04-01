import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-cta opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(142_70%_60%_/_0.2)_0%,_transparent_70%)]" />
      <div className="container text-center relative z-10" ref={ref}>
        <Zap size={48} className="mx-auto text-primary-foreground/80 mb-4" />
        <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">
          Garanta Seu Teste Grátis Agora
        </h2>
        <p className="text-primary-foreground/85 text-lg mb-10 max-w-xl mx-auto">
          Não perca essa oportunidade. Vagas limitadas para teste gratuito.
        </p>
        <Button
          size="lg"
          className="text-lg px-12 py-7 rounded-full bg-background text-primary font-black hover:bg-foreground hover:text-background transition-colors"
          asChild
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2" size={24} />
            TESTAR AGORA NO WHATSAPP
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
