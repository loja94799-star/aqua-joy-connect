import { useScrollReveal } from "@/hooks/useScrollReveal";
import slideImg from "@/assets/attraction-slide.jpg";
import kidsImg from "@/assets/attraction-kids.jpg";
import lazyRiverImg from "@/assets/attraction-lazy-river.jpg";
import wavePoolImg from "@/assets/attraction-wave-pool.jpg";

const attractions = [
  {
    title: "Toboáguas Radicais",
    description: "Descidas emocionantes com curvas e velocidade para os mais aventureiros.",
    image: slideImg,
  },
  {
    title: "Área Kids",
    description: "Espaço colorido e seguro com brinquedos aquáticos para os pequenos.",
    image: kidsImg,
  },
  {
    title: "Rio Lento",
    description: "Relaxe flutuando por um percurso cercado de natureza tropical.",
    image: lazyRiverImg,
  },
  {
    title: "Piscina de Ondas",
    description: "Sinta a emoção das ondas em uma piscina gigante para toda a família.",
    image: wavePoolImg,
  },
];

const AttractionsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="atracoes" className="py-20 md:py-28 bg-background">
      <div className="container" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Nossas Atrações
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Descubra tudo o que preparamos para sua diversão
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((a) => (
            <div
              key={a.title}
              className="group rounded-2xl overflow-hidden shadow-card bg-card hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
