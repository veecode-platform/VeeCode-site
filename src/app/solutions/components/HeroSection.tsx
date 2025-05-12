import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="w-[969px] max-w-full text-black mt-[163px] max-md:mt-10">
      <h1 className="text-[55px] font-bold max-md:max-w-full max-md:text-[40px] text-center">
        {title}
      </h1>
      <p className="text-center text-xl font-normal mt-[13px] max-md:max-w-full">
        {subtitle}
      </p>
    </section>
  );
};

export default HeroSection;
