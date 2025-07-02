import React from "react";
import SupportCard from "./SupportCard";

export interface Feature {
  icon: string;
  text: string;
}

export interface SupportCardProps {
  id: number;
  title: string;
  description: string | React.ReactNode;
  subtitle: string;
  features: Feature[];
  buttonText: string;
}

interface SupportSectionProps {
  cards: SupportCardProps[];
}

const SupportSection: React.FC<SupportSectionProps> = ({ cards }) => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="w-full max-w-[1410px] md:mt-[47px] max-md:max-w-full max-md:mt-10 pb-20 md:pb-0">
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 max-md:items-stretch xl:w-[90vw] xl:mx-auto 2xl:w-full">
          {cards.map((plan) => (
            <div
              key={plan.id}
              className="w-full h-full max-md:w-full max-md:ml-0"
            >
              <SupportCard
                title={plan.title}
                subtitle={plan.subtitle}
                description={plan.description}
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

export default SupportSection;
