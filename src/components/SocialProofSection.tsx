import { Star, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Lucas M.", text: "Nunca trava! Assisto futebol todo final de semana sem perder um lance." },
  { name: "Ana C.", text: "Cancelei a TV a cabo e economizo muito. Qualidade absurda em 4K!" },
  { name: "Roberto S.", text: "Liberaram meu teste em 2 minutos. Atendimento nota 10." },
];

const SocialProofSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container" ref={ref}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-lg mb-2">
            <Users size={22} />
            Mais de 5.000 clientes satisfeitos
          </div>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="text-muted-foreground">Avaliação média de 4.9 estrelas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="gradient-card border-glow rounded-2xl p-6 shadow-card-dark">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <p className="font-bold text-foreground text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
