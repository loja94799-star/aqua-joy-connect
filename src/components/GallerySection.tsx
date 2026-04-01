import { useState } from "react";
import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-waterpark.jpg";
import slideImg from "@/assets/attraction-slide.jpg";

const images = [
  { src: gallery1, alt: "Piscina resort" },
  { src: gallery2, alt: "Toboágua em grupo" },
  { src: gallery3, alt: "Área de alimentação" },
  { src: gallery4, alt: "Parque à noite" },
  { src: heroImg, alt: "Vista aérea do parque" },
  { src: slideImg, alt: "Família no toboágua" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <>
      <section id="galeria" className="py-20 md:py-28 bg-card">
        <div className="container" ref={ref}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Galeria de Fotos
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Confira momentos incríveis vividos no nosso parque
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain animate-fade-in"
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
