import React from "react";
import PricingCard from "./PricingCard";

export interface Feature {
  icon: string;
  text: string;
}

export interface PricingCardProps {
  id: number;
  title: string;
  description: string | React.ReactNode;
  subtitle: string;
  features: Feature[];
  buttonText: string;
}

interface PricinSectionProps {
  title: string;
  cards: PricingCardProps[];
}

const PricingSection: React.FC<PricinSectionProps> = ({ title, cards }) => {
  return (
    <section className="flex flex-col items-center w-full">
      <h2 className="self-stretch gap-2.5 text-[55px] text-black font-bold text-center mt-[101px] px-[101px] py-[41px] max-md:max-w-full max-md:text-[40px] max-md:mt-10 max-md:px-5">
        {title}
      </h2>
      <div className="w-full max-w-[1410px] mt-[47px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 grid grid-cols-1 md:grid-cols-3 max-md:items-stretch">
          {cards.map((plan) => (
            <div
              key={plan.id}
              className="w-full h-full max-md:w-full max-md:ml-0"
            >
              <PricingCard
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

export default PricingSection;
