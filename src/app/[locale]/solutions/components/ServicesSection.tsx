import React from "react";
import ServiceCard from "./ServiceCard";

export interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
}

interface ServiceSectionProps {
  cards: ServiceCardProps[];
}

const ServicesSection: React.FC<ServiceSectionProps> = ({ cards }) => {
  return (
    <section className="w-full max-w-[1409px] mt-[111px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 grid grid-cols-1 md:grid-cols-3">
        {cards.map((service) => (
          <div
            key={service.id}
            className="w-full max-h-full max-md:w-full max-md:ml-0"
          >
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
