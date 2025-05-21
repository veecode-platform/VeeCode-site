import React from "react";
import FeatureCard from "./FeatureCard";
import { BsStars } from "react-icons/bs";
import { ExternalLink, NavigationLink } from "@/components/ui/links";
import { Button } from "@/components/ui/Button";

export type FeatureCard = {
  id: number;
  title: string;
  description: string;
};
interface FeaturesProps {
  label: string;
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
  descriptionExternalLink: string;
  cards: FeatureCard[];
}

const Features: React.FC<FeaturesProps> = ({
  label,
  title,
  description,
  buttonLabel1,
  buttonLabel2,
  descriptionExternalLink,
  cards,
}) => {
  return (
    <section className="max-w-[90vw] mx-auto flex flex-col items-center ">
      <div className="items-center border border-[color:var(--Preto,#000)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex min-h-[54px] gap-2 text-base text-[#1e1e1e] font-medium text-center leading-[1.6] bg-neutral-50 mt-[161px] px-4 py-3.5 rounded-[30px] border-solid max-md:mt-10">
        <BsStars className="w-5 h-5 self-stretch shrink-0 my-auto text-[#33ffcd]" />
        <div className="self-stretch my-auto">{label}</div>
      </div>
      <h2 className="text-black text-center text-[40px] font-bold mt-[37px] max-md:max-w-full">
        {title}
      </h2>
      <p className="text-[#1e1e1e] text-center text-xl font-normal mt-[21px] max-md:max-w-full">
        {description}
      </p>
      <div className="flex min-h-[52px] items-center gap-[23px] text-base mt-[31px]">
        <NavigationLink href="/contact-us">
          <Button variant="default" size="sm" aria-label={buttonLabel1}>
            {buttonLabel1}
          </Button>
        </NavigationLink>
        <ExternalLink
          description={descriptionExternalLink}
          href="https://devportal.demo.vee.codes/"
        >
          <Button variant="outline" size="sm" aria-label={buttonLabel2}>
            {buttonLabel2}
          </Button>
        </ExternalLink>
      </div>

      <div className="w-full max-w-[1257px] mt-[164px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-full max-md:ml-0 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {cards.map((card) => {
              const FeatureImg = `/assets/home/feature-card${card.id}.svg`;
              return (
                <FeatureCard
                  key={card.id}
                  icon={FeatureImg}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
