import React from "react";
import PricingCard from "./PricingCard";

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: "Grátis",
      description:
        "Acelere seu negócio com nossa solução de Portal do Desenvolvedor. Simplifique sua automação de APIs, Pipelines e mais para resolver seus problemas de negócio.",
      features: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/27978bc94b2bcc5da34a1a65fe83d89ab447f100?placeholderIfAbsent=true",
          text: "Suporte da comunidade",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/fe01d4e87e5ff98b9d2661dfbcf5aba5054bfa8b?placeholderIfAbsent=true",
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
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/47acad6be8ffffd7134ea161f4d2a4b153b67e9f?placeholderIfAbsent=true",
          text: "Suporte 8x5",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/194084b571f49596fa223e1fea05364e701443c8?placeholderIfAbsent=true",
          text: "SLA de um día útil",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/a939f22390bb95c8189a789486aa80e465680e58?placeholderIfAbsent=true",
          text: "Suporte para todos os plugins",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/764afdbdc54de5502a1a5ed12b26f64b9d901dc4?placeholderIfAbsent=true",
          text: "Suporte para todos os templates",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/8c9070becc85488ec596a5e93b4a90ec86efdc40?placeholderIfAbsent=true",
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
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/56fb9c6d0a7a917643e6cd4f980f304d1b245483?placeholderIfAbsent=true",
          text: "Suporte 24x7",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/0833fc1b2782c7802e08143d516d661829946d25?placeholderIfAbsent=true",
          text: "SLA de um día útil",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/f258421dafb7b5b87ff0f8d3967a9b567e33ecd1?placeholderIfAbsent=true",
          text: "Suporte para todos os plugins e templates",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/ab49d0fa0c6de04f9cbadd506ed6d9fce1ceac2f?placeholderIfAbsent=true",
          text: "Acesso direto aos nossos especialistas",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/460aa315c51a3a8daed6637f8c8f80f6042b39ad?placeholderIfAbsent=true",
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
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
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
