import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Precisa de internet?",
    answer: "Sim, é necessária uma conexão de internet de no mínimo 10 Mbps para uma experiência fluida. Para conteúdo em 4K, recomendamos pelo menos 25 Mbps.",
  },
  {
    question: "Funciona na minha TV?",
    answer: "Sim! Funciona em Smart TVs (Samsung, LG, TCL, etc.), TV Box, Fire Stick, celulares Android e iPhone, computadores e tablets.",
  },
  {
    question: "Tem fidelidade ou contrato?",
    answer: "Não! Você pode cancelar quando quiser, sem multas ou burocracia. Sem fidelidade, sem surpresas.",
  },
  {
    question: "Como faço o pagamento?",
    answer: "Aceitamos PIX, cartão de crédito e boleto. O pagamento é simples e seguro, tudo pelo nosso atendimento no WhatsApp.",
  },
  {
    question: "O teste grátis é realmente gratuito?",
    answer: "Sim, 100% gratuito! Você testa sem compromisso e só contrata se gostar. Sem cartão de crédito, sem pegadinha.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Dúvidas <span className="text-gradient">Frequentes</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Respondemos as perguntas mais comuns dos nossos clientes
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="gradient-card border-glow rounded-xl px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
