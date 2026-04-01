import { Tv, Smartphone, Monitor, HardDrive } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import devicesImg from "@/assets/iptv-devices.jpg";

const devices = [
  { icon: Tv, name: "Smart TV" },
  { icon: Smartphone, name: "Celular" },
  { icon: HardDrive, name: "TV Box" },
  { icon: Monitor, name: "Computador" },
];

const DevicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="dispositivos" className="py-16 md:py-24 bg-background">
      <div className="container" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Funciona em <span className="text-gradient">Todos</span> os Dispositivos
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Assista onde e quando quiser, sem limitação
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {devices.map((d) => (
            <div key={d.name} className="gradient-card border-glow rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <d.icon size={36} className="mx-auto text-primary mb-3" />
              <span className="font-semibold text-foreground">{d.name}</span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-glow-blue">
          <img
            src={devicesImg}
            alt="Dispositivos compatíveis"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
