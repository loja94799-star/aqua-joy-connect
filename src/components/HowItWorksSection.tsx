import { MousePointerClick, MessageCircle, Zap, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: MousePointerClick, step: "1", title: "Clique no Botão", description: "Toque no botão verde de WhatsApp" },
  { icon: MessageCircle, step: "2", title: "Fale no WhatsApp", description: "Diga que quer testar grátis" },
  { icon: Zap, step: "3", title: "Receba Seu Teste", description: "Liberação imediata, sem burocracia" },
  { icon: Play, step: "4", title: "Comece a Assistir", description: "Aproveite todo o conteúdo" },
];

const HowItWorksSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-card">
      <div className="container" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Como <span className="text-gradient">Funciona</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Em menos de 5 minutos você já está assistindo
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full gradient-cta flex items-center justify-center mb-4 shadow-glow-green">
                <s.icon className="text-primary-foreground" size={26} />
              </div>
              <div className="text-primary font-black text-sm mb-1">PASSO {s.step}</div>
              <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
