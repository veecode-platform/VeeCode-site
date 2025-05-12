import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Teste Ilimitado",
      description:
        "Conte com nossa equipe de profissionais qualificados para ajudar a maximizar o uso de nossos produtos e ferramentas. Estamos aqui para responder perguntas sobre instalação, configuração e uso, levando em conta seu fluxo de trabalho. Relate quaisquer erros que encontrar e seu impacto, para que possamos corrigi-los e prevenir problemas futuros.",
    },
    {
      title: "Launch Workshop",
      description:
        "A Engenharia de Plataforma facilita a migração para a nuvem, fornecendo informações, conhecimento e um plano estratégico. O workshop explora os princípios, benefícios e o papel da engenharia de plataforma, permitindo que os participantes criem um roteiro estratégico personalizado. Ao final, eles terão o conhecimento para lançar seu Portal do Desenvolvedor Interno com confiança.",
    },
    {
      title: "Fast Track",
      description:
        "O VeeCode Fast Track oferece uma solução especializada de IDP para melhorar rapidamente a experiência do desenvolvedor. Através de um esforço com prazo definido, uma equipe dedicada configura rapidamente uma instância do DevPortal e fornece modelos e automações iniciais para ganhos imediatos de produtividade.",
    },
  ];

  return (
    <section className="w-full max-w-[1409px] mt-[111px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {services.map((service, index) => (
          <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
