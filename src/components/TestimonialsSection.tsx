import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Mariana Silva",
    rating: 5,
    text: "Melhor passeio em família que já fizemos! As crianças amaram e a estrutura é impecável. Voltaremos com certeza!",
  },
  {
    name: "Carlos Oliveira",
    rating: 5,
    text: "Atendimento excelente, lugar limpo e organizado. Os toboáguas são incríveis. Recomendo de olhos fechados!",
  },
  {
    name: "Patrícia Santos",
    rating: 5,
    text: "Passamos o dia inteiro e não faltou nada. Comida boa, segurança em primeiro lugar e muita diversão. Nota 10!",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          O Que Nossos Visitantes Dizem
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Milhares de famílias já viveram momentos inesquecíveis
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="font-bold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
