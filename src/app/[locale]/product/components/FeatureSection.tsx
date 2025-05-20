import React from "react";
import FeatureCard from "./FeatureCard";
interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  altText?: string;
}

interface FeatureSectionProps {
  leftFeatures: Feature[];
  rightFeatures: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  leftFeatures,
  rightFeatures,
}) => {
  return (
    <section className="self-center w-full max-w-[1496px] ml-2.5 my-[213px] max-md:max-w-full max-md:my-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[50%] h-full flex flex-col justify-between gap-[284px] border-l-1 border-[#33FFCE]">
          {leftFeatures.map((feature) => (
            <div key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                altText={feature.altText}
              />
            </div>
          ))}
        </div>
        <div className="w-[50%] flex flex-col justify-center gap-[284px] border-l-1 border-[#33FFCE]">
          {rightFeatures.map((feature) => (
            <div key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                altText={feature.altText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
