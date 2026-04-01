import { Tv, Film, Radio, Headphones, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { icon: Tv, title: "Futebol Ao Vivo", description: "Todos os jogos em tempo real, sem delay e em alta definição." },
  { icon: Film, title: "Filmes e Séries", description: "Catálogo sempre atualizado com lançamentos do cinema e das plataformas." },
  { icon: Radio, title: "Canais Abertos e Fechados", description: "Acesse todos os canais que você conhece, sem antena, sem cabo." },
  { icon: ShieldCheck, title: "Conteúdo Adulto (Opcional)", description: "Disponível mediante solicitação. Protegido por senha." },
  { icon: Headphones, title: "Suporte Rápido", description: "Equipe disponível para te ajudar a qualquer momento via WhatsApp." },
];

const BenefitsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-background">
      <div className="container" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Tudo Que Você <span className="text-gradient">Precisa</span> em Um Só Lugar
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Entretenimento completo para você e toda sua família
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="gradient-card border-glow rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300 shadow-card-dark"
            >
              <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-4">
                <b.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
