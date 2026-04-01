import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Mensal",
    price: "29,90",
    period: "/mês",
    popular: false,
    features: ["+10.000 canais", "Filmes e séries", "HD e Full HD", "1 dispositivo", "Suporte por WhatsApp"],
  },
  {
    name: "Trimestral",
    price: "24,90",
    period: "/mês",
    popular: true,
    features: ["+10.000 canais", "Filmes e séries", "HD, Full HD e 4K", "2 dispositivos", "Suporte prioritário"],
  },
  {
    name: "Anual",
    price: "19,90",
    period: "/mês",
    popular: false,
    features: ["+10.000 canais", "Filmes e séries", "HD, Full HD e 4K", "3 dispositivos", "Suporte VIP 24h"],
  },
];

const PlansSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="planos" className="py-16 md:py-24 bg-card">
      <div className="container" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Escolha Seu <span className="text-gradient">Plano</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Após o teste grátis, escolha o plano ideal para você
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 shadow-card-dark transition-transform duration-300 hover:-translate-y-2 ${
                p.popular
                  ? "gradient-popular border-2 border-primary shadow-glow-green scale-[1.03]"
                  : "gradient-card border-glow"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MAIS POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-4xl font-black text-foreground">{p.price}</span>
                <span className="text-muted-foreground text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={16} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={p.popular ? "whatsapp" : "outline"}
                className="w-full rounded-full"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} className="mr-1" />
                  {p.popular ? "QUERO ESTE PLANO" : "Escolher plano"}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
