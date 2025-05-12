import React from "react";
import { PluginCard } from "./PluginCard";

export const PluginsSection: React.FC = () => {
  const plugins = [
    {
      icon: "/assets/resources/github.svg",
      title: "Github Workflows",
      tags: [{ name: "CI-CD" }, { name: "Github" }],
      description:
        "O plugin Github Workflows fornece uma alternativa para acionar manualmente fluxos de trabalho do GitHub de dentro do seu componente Backstage.",
    },
    {
      icon: "/assets/resources/gitlab.svg",
      title: "Gitlab Pipelines",
      tags: [{ name: "CI-CD" }, { name: "Gitlab" }],
      description:
        "O plugin de pipelines do Gitlab integra o GitlabCi com seu componente backstage de forma simples.",
    },
    {
      icon: "/assets/resources/kong.svg",
      title: "Kong Service Manager",
      tags: [{ name: "Kong" }, { name: "API Gateway" }, { name: "Services" }],
      description:
        "O plugin Kong Service Manager disponibiliza informações sobre service do kong, a lista das rotas que ela possui e oferece também a possibilidade de manipular plugins sem sair do Backstage.",
    },
    {
      icon: "/assets/resources/gptanalyzer.svg",
      title: "Kubernetes GPT Analyzer",
      tags: [{ name: "Kubernetes" }, { name: "IA" }, { name: "Monitoring" }],
      description:
        "O plug-in Kubernetes GPT Analyzer usa inteligência artificial com a ajuda do k8s-operator para analisar e otimizar suas entidades do Kubernetes, melhorando o gerenciamento e o desempenho do seu cluster. Ele facilita a detecção de anomalias e sugere práticas recomendadas.",
    },
    {
      icon: "/assets/resources/infracost.svg",
      title: "Infracost",
      tags: [{ name: "Finops" }, { name: "Infracost" }, { name: "Estimate" }],
      description:
        "O plug-in Infracost atua em conjunto com o terraform e fornece uma representação gráfica e dados de estimativa de custo para sua entidade em seu respectivo provedor.",
    },
  ];

  return (
    <section className="my-20 w-full grid grid-col-1 md:grid-cols-2 gap-5 items-start justify-start align-top">
      {plugins.map((plugin) => (
        <PluginCard
          key={plugin.title}
          icon={plugin.icon}
          title={plugin.title}
          tags={plugin.tags}
          description={plugin.description}
        />
      ))}
    </section>
  );
};
