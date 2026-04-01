import { SITE_NAME } from "@/lib/constants";

const FooterSection = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container text-center">
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto mb-6">
          {SITE_NAME} é um serviço de entretenimento digital. Todas as marcas e conteúdos mencionados pertencem aos seus respectivos proprietários. Este site não armazena nem distribui conteúdo protegido por direitos autorais. Consulte os termos de uso.
        </p>
        <p className="text-muted-foreground/50 text-xs">
          © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
