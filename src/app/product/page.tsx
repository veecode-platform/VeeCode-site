import React from "react";
import FeatureSection from "./components/FeatureSection";
// import NewsletterForm from "../ui/product/NewsletterForm";
// import ContactForm from "../ui/product/ContactForm";

export default function ProductPage() {
  // Feature data for the left column
  const leftFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/3f29479865923c61da7e8ecc9503604d6fdb99a7?placeholderIfAbsent=true",
      title: "Catálogo de APIs",
      description:
        "O Devportal by VeeCode Platform é a plataforma ideal para centralizar e catalogar suas APIs de maneira eficiente. Com o Devportal você pode ver, testar e gerenciar todas as suas APIs em um único lugar enquanto também tem acesso à documentação e plugins necessários para desenvolver o seu projeto, app ou feature.",
      altText: "API Icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/6ade1f4ffae2bae5015a03c881668b7769bf852d?placeholderIfAbsent=true",
      title: "Kong Service Manager",
      description:
        "Gerencie e administre informações sobre os serviços do Kong. Liste e manipule rotas, gerencie plugins sem sair do DevPortal. Acesse detalhes dos serviços e",
      altText: "Kong Icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/8e0fcd085acbe1d3ca271a4fac9e407f9a52a4b9?placeholderIfAbsent=true",
      title: "VeeCode RBAC",
      description:
        "O VeeCode RBAC permite a configuração de acessos que você precisa para garantir acesso customizado. Selecione quem pode ou não, ver itens, executar tarefas ou realizar mudanças, garantindo mostrar apenas informações pertinentes e relevantes para cada tipo de usuário.",
      altText: "RBAC Icon",
    },
  ];

  // Feature data for the right column
  const rightFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/5379b002a3a44c83081f944e9c0b84339bc764c6?placeholderIfAbsent=true",
      title: "Software Templates",
      description:
        "Com o Devportal você pode customizar seu ambiente com templates para desenvolvimento e infraestrutura, assim como tem a liberdade para personalizar pipelines. A plataforma oferece uma variedade de templates pré-configurados que aceleram o processo de desenvolvimento e garantem consistência no seu produto",
      altText: "Templates Icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/2112c85b36e7381e0306fa828f79b5cf21bfdb1d?placeholderIfAbsent=true",
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

      {/* <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Conheça mais sobre o VeeCode Platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NewsletterForm />
          <ContactForm />
        </div>
      </section> */}
    </main>
  );
}
