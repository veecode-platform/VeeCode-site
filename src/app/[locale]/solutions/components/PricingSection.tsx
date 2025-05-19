import React from "react";
import PricingCard from "./PricingCard";

const checkIcon = "/assets/solutions/Check.svg";

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: "Grátis",
      description:
        "Acelere seu negócio com nossa solução de Portal do Desenvolvedor. Simplifique sua automação de APIs, Pipelines e mais para resolver seus problemas de negócio.",
      features: [
        {
          icon: checkIcon,
          text: "Suporte da comunidade",
        },
        {
          icon: checkIcon,
          text: "Acesso à documentação",
        },
      ],
      buttonText: "Comece Agora",
    },
    {
      title: "Suporte Pro",
      description:
        "Tire todas as suas dúvidas sobre nossas soluções. Chega de problemas com DevOps, Desenvolvimento de APIs, Kubernetes, AWS e mais.*",
      disclaimer:
        "*Preço baseado no número de usuários e nível de serviço desejado",
      features: [
        {
          icon: checkIcon,
          text: "Suporte 8x5",
        },
        {
          icon: checkIcon,
          text: "SLA de um día útil",
        },
        {
          icon: checkIcon,
          text: "Suporte para todos os plugins",
        },
        {
          icon: checkIcon,
          text: "Suporte para todos os templates",
        },
        {
          icon: checkIcon,
          text: "Acesso direto aos nossos especialistas",
        },
      ],
      buttonText: "Contate-nos",
    },
    {
      title: "Suporte Custom",
      description:
        "Conte com nosso suporte estratégico e especializado para garantir uma adoção eficiente e contínua das nossas soluções.",
      disclaimer:
        "*Preço baseado no número de usuários e nível de serviço desejado",
      features: [
        {
          icon: checkIcon,
          text: "Suporte 24x7",
        },
        {
          icon: checkIcon,
          text: "SLA de um día útil",
        },
        {
          icon: checkIcon,
          text: "Suporte para todos os plugins e templates",
        },
        {
          icon: checkIcon,
          text: "Acesso direto aos nossos especialistas",
        },
        {
          icon: checkIcon,
          text: "Features de IA exclusivas",
        },
      ],
      buttonText: "Contate-nos",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full">
      <h2 className="self-stretch gap-2.5 text-[55px] text-black font-bold text-center mt-[101px] px-[101px] py-[41px] max-md:max-w-full max-md:text-[40px] max-md:mt-10 max-md:px-5">
        Escolha o suporte que melhor <br />
        se adapta à sua necessidade:
      </h2>
      <div className="w-full max-w-[1410px] mt-[47px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 grid grid-cols-1 md:grid-cols-3 max-md:items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="w-full h-full max-md:w-full max-md:ml-0"
            >
              <PricingCard
                title={plan.title}
                description={plan.description}
                disclaimer={plan.disclaimer}
                features={plan.features}
                buttonText={plan.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
