import React from "react";
import FeatureCard from "./FeatureCard";

interface Feature {
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
    <section className="self-center w-full max-w-[1496px] ml-2.5 mt-[213px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex grow items-stretch gap-7 text-black flex-wrap max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/97c27ee2d33b37f19e1b2e4b3ea5ce41f44e9b56?placeholderIfAbsent=true"
              alt="Vertical line"
              className="aspect-[0] object-contain w-[5px] shrink-0"
            />
            <div className="grow shrink-0 basis-0 w-fit mt-[5px] max-md:max-w-full">
              {leftFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={index > 0 ? "mt-[427px] max-md:mt-10" : ""}
                >
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
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow items-stretch gap-[40px_48px] text-black flex-wrap max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/35e129d14a7813f0e3257809f5669c57edd6787c?placeholderIfAbsent=true"
              alt="Vertical line"
              className="aspect-[0] object-contain w-[5px] shrink-0"
            />
            <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit my-auto max-md:max-w-full">
              {rightFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={index > 0 ? "mt-[328px] max-md:mt-10" : ""}
                >
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
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
