import React from "react";
import FeatureSection from "./components/FeatureSection";
// import NewsletterForm from "../ui/product/NewsletterForm";
// import ContactForm from "../ui/product/ContactForm";

const Icon1 = "/assets/product/icon1.svg";
const Icon2 = "/assets/product/icon2.svg";
const Icon3 = "/assets/product/icon3.svg";
const Icon4 = "/assets/product/icon4.svg";
const Icon5 = "/assets/product/icon5.svg";

export default function ProductPage() {
  // Feature data for the left column
  const leftFeatures = [
    {
      icon: Icon1,
      title: "Catálogo de APIs",
      description:
        "O Devportal by VeeCode Platform é a plataforma ideal para centralizar e catalogar suas APIs de maneira eficiente. Com o Devportal você pode ver, testar e gerenciar todas as suas APIs em um único lugar enquanto também tem acesso à documentação e plugins necessários para desenvolver o seu projeto, app ou feature.",
      altText: "API Icon",
    },
    {
      icon: Icon2,
      title: "Kong Service Manager",
      description:
        "Gerencie e administre informações sobre os serviços do Kong. Liste e manipule rotas, gerencie plugins sem sair do DevPortal. Acesse detalhes dos serviços e",
      altText: "Kong Icon",
    },
    {
      icon: Icon3,
      title: "VeeCode RBAC",
      description:
        "O VeeCode RBAC permite a configuração de acessos que você precisa para garantir acesso customizado. Selecione quem pode ou não, ver itens, executar tarefas ou realizar mudanças, garantindo mostrar apenas informações pertinentes e relevantes para cada tipo de usuário.",
      altText: "RBAC Icon",
    },
  ];

  // Feature data for the right column
  const rightFeatures = [
    {
      icon: Icon4,
      title: "Software Templates",
      description:
        "Com o Devportal você pode customizar seu ambiente com templates para desenvolvimento e infraestrutura, assim como tem a liberdade para personalizar pipelines. A plataforma oferece uma variedade de templates pré-configurados que aceleram o processo de desenvolvimento e garantem consistência no seu produto",
      altText: "Templates Icon",
    },
    {
      icon: Icon5,
      title: "VeeCode Docs",
      description:
        "Centralize toda a documentação em um só lugar. O VeeCode busca por documentações em todos os repositórios e reúne todas as entrada em seu DevPortal, permitindo um acesso amplo e organizado.",
      altText: "Docs Icon",
    },
  ];

  return (
    <main className="bg-white flex flex-col overflow-hidden items-stretch">
      <FeatureSection
        leftFeatures={leftFeatures}
        rightFeatures={rightFeatures}
      />
    </main>
  );
}
