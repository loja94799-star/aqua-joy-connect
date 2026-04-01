import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full gradient-cta flex items-center justify-center shadow-float animate-pulse-glow transition-transform hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="text-whatsapp-foreground" size={30} />
    </a>
  );
};

export default FloatingWhatsApp;
