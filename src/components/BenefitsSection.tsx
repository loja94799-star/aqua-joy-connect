import { Users, ShieldCheck, Building2, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { icon: Users, title: "Ambiente Familiar", description: "Espaço pensado para todas as idades. Crianças, jovens e adultos se divertem juntos com segurança." },
  { icon: ShieldCheck, title: "Segurança Garantida", description: "Equipe de salva-vidas treinada e equipamentos certificados para sua tranquilidade total." },
  { icon: Building2, title: "Estrutura Completa", description: "Vestiários, restaurantes, estacionamento e muito mais. Tudo para seu conforto." },
  { icon: MapPin, title: "Fácil Acesso", description: "Localização privilegiada com fácil acesso por rodovias e transporte público." },
];

const BenefitsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-card">
      <div className="container" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Por Que Nos Escolher?
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Oferecemos a melhor experiência em lazer aquático da região
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-background shadow-card hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-5">
                <b.icon className="text-primary-foreground" size={28} />
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
