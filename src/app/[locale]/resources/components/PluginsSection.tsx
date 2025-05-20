import React from "react";
import { PluginCard } from "./PluginCard";

type PluginCardTag = {
  name: string;
};
interface PluginCardType {
  icon: string;
  title: string;
  tags: PluginCardTag[];
  description: string;
}

interface PluginSectionProps {
  pluginsCards: PluginCardType[];
}

export const PluginsSection: React.FC<PluginSectionProps> = ({
  pluginsCards,
}) => {
  return (
    <section className="my-20 w-full grid grid-col-1 md:grid-cols-2 gap-5 items-start justify-start align-top">
      {pluginsCards.map((plugin) => (
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
