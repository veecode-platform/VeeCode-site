import React from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HeroImage = "/assets/home/hero.webp";

interface HeroProps {
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonLabel1,
  buttonLabel2,
}) => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-[705px] max-w-full flex-col items-center text-black text-center mt-[107px] max-md:mt-10">
        <h1 className="text-[55px] font-bold max-md:max-w-full max-md:text-[40px]">
          {title}
        </h1>
        <p className="text-xl font-normal mt-[23px] max-md:max-w-full">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-[23px] text-base mt-[31px]">
        <Button variant="default" size="sm">
          {buttonLabel1}
        </Button>
        <Button variant="outline" size="sm">
          {buttonLabel2}
        </Button>
      </div>
      <Image
        src={HeroImage}
        width={724}
        height={407}
        alt="VeeCode Platform Dashboard"
        className="aspect-[1.78] object-contain w-[724px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-w-full mt-[51px] rounded-[11px] max-md:mt-10"
        unoptimized
      />
    </section>
  );
};

export default Hero;
