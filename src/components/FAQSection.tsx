import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos de terça a domingo, das 9h às 17h. Nos feriados, o horário pode ser estendido. Consulte nosso atendimento pelo WhatsApp para confirmar.",
  },
  {
    question: "Posso levar comida de fora?",
    answer: "Por questões de segurança e higiene, não é permitida a entrada de alimentos e bebidas. Temos restaurantes e lanchonetes com opções variadas e preços acessíveis.",
  },
  {
    question: "Crianças menores de 5 anos pagam?",
    answer: "Crianças com até 4 anos acompanhadas de um adulto pagante não pagam ingresso. A partir de 5 anos, o valor é cobrado normalmente.",
  },
  {
    question: "Tem estacionamento no local?",
    answer: "Sim! Contamos com amplo estacionamento gratuito para carros e ônibus, com segurança 24 horas.",
  },
  {
    question: "Como compro meu ingresso?",
    answer: "Você pode comprar seu ingresso pelo nosso WhatsApp com atendimento personalizado, ou diretamente na bilheteria do parque no dia da visita.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-20 md:py-28 bg-card">
      <div className="container max-w-3xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Tire suas dúvidas antes de nos visitar
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-xl px-6 border shadow-sm"
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
