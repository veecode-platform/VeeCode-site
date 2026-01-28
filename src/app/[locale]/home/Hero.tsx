import React from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { ExternalLink, NavigationLink } from "@/components/ui/links";

const HeroImage = "/assets/home/hero.webp";

interface HeroProps {
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
  descriptionExternalLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonLabel1,
  buttonLabel2,
  descriptionExternalLink,
}) => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-[90vw] md:w-[705px] max-w-full flex-col items-center text-black text-center">
        <h1 className="text-[55px] font-bold max-md:max-w-full max-md:text-[40px]">
          {title}
        </h1>
        <p
          className="text-xl font-normal mt-[23px] max-md:max-w-full"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="flex items-center gap-[23px] text-base mt-[31px]">
        <NavigationLink href="/contact-us">
          <Button variant="default" size="sm" aria-label={buttonLabel1}>
            {buttonLabel1}
          </Button>
        </NavigationLink>
        <ExternalLink
          description={descriptionExternalLink}
          href="https://docs.platform.vee.codes/devportal/installation-guide/VKDR/"
          event="vkdrDocs"
        >
          <Button variant="outline" size="sm" aria-label={buttonLabel2}>
            {buttonLabel2}
          </Button>
        </ExternalLink>
      </div>
      <Image
        src={HeroImage}
        width={724}
        height={407}
        alt="VeeCode Platform Dashboard"
        className="aspect-[1.78] object-contain w-[90vw] md:w-[724px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-w-full mt-[51px] rounded-[11px] max-md:mt-10"
        unoptimized
      />
    </section>
  );
};

export default Hero;
