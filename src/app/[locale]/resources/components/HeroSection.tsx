import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className="self-center flex w-full max-w-[1268px] flex-col items-stretch mt-[94px] max-md:max-w-full max-md:mt-10">
      <div className="self-center w-[726px] max-w-full text-center">
        <h1 className="text-black text-[55px] font-bold max-md:max-w-full max-md:text-[40px]">
          {title}
        </h1>
        <p className="text-black text-xl font-normal max-md:max-w-full">
          {description}
        </p>
      </div>
    </section>
  );
};
