import React from "react";
import { PluginCard } from "./PluginCard";

export const PluginsSection: React.FC = () => {
  const plugins = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/84709e614c5380aef57f75fa80ea673a1d183169?placeholderIfAbsent=true",
      title: "Github Workflows",
      tags: [{ name: "CI-CD" }, { name: "Github" }],
      description:
        "O plugin Github Workflows fornece uma alternativa para acionar manualmente fluxos de trabalho do GitHub de dentro do seu componente Backstage.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/4cb969599ff4cd02ba2751faa718999af426d687?placeholderIfAbsent=true",
      title: "Gitlab Pipelines",
      tags: [{ name: "CI-CD" }, { name: "Gitlab" }],
      description:
        "O plugin de pipelines do Gitlab integra o GitlabCi com seu componente backstage de forma simples.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/26e9a94de7569b588fe81fae977345311fefaaaf?placeholderIfAbsent=true",
      title: "Kong Service Manager",
      tags: [{ name: "Kong" }, { name: "API Gateway" }, { name: "Services" }],
      description:
        "O plugin Kong Service Manager disponibiliza informações sobre service do kong, a lista das rotas que ela possui e oferece também a possibilidade de manipular plugins sem sair do Backstage.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/fd5c28cbb8dac9fc96c45f79abcaa726057dd8a8?placeholderIfAbsent=true",
      title: "Kubernetes GPT Analyzer",
      tags: [{ name: "Kubernetes" }, { name: "IA" }, { name: "Monitoring" }],
      description:
        "O plug-in Kubernetes GPT Analyzer usa inteligência artificial com a ajuda do k8s-operator para analisar e otimizar suas entidades do Kubernetes, melhorando o gerenciamento e o desempenho do seu cluster. Ele facilita a detecção de anomalias e sugere práticas recomendadas.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/8769f81c1a670cf011bc1787ddf52288359965db?placeholderIfAbsent=true",
      title: "Infracost",
      tags: [{ name: "Finops" }, { name: "Infracost" }, { name: "Estimate" }],
      description:
        "O plug-in Infracost atua em conjunto com o terraform e fornece uma representação gráfica e dados de estimativa de custo para sua entidade em seu respectivo provedor.",
      className: "w-[588px] max-w-full mt-[58px] mx-auto",
    },
  ];

  return (
    <section className="mt-[177px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <PluginCard
            icon={plugins[0].icon}
            title={plugins[0].title}
            tags={plugins[0].tags}
            description={plugins[0].description}
          />
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <PluginCard
            icon={plugins[1].icon}
            title={plugins[1].title}
            tags={plugins[1].tags}
            description={plugins[1].description}
          />
        </div>
      </div>

      <div className="mt-[58px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <PluginCard
              icon={plugins[2].icon}
              title={plugins[2].title}
              tags={plugins[2].tags}
              description={plugins[2].description}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <PluginCard
              icon={plugins[3].icon}
              title={plugins[3].title}
              tags={plugins[3].tags}
              description={plugins[3].description}
            />
          </div>
        </div>
      </div>

      <PluginCard
        icon={plugins[4].icon}
        title={plugins[4].title}
        tags={plugins[4].tags}
        description={plugins[4].description}
        className={plugins[4].className}
      />
    </section>
  );
};