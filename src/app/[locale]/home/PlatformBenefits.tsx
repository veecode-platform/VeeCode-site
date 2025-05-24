import React from "react";
import BenefitCard from "./BenefitCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { NavigationLink } from "@/components/ui/links";

const BackgroundBenefits = "/assets/home/banner-benefits.webp";

export type BenefitsCard = {
  id: number;
  title: string;
  description: string;
};

interface PlatformBenefitsProps {
  title: React.ReactNode;
  buttonLabel: string;
  cards: BenefitsCard[];
}

const PlatformBenefits: React.FC<PlatformBenefitsProps> = ({
  title,
  buttonLabel,
  cards,
}) => {
  return (
    <section className="w-full flex items-center self-stretch flex-col overflow-hidden justify-center max-md:max-w-full max-md:px-5">
      <div className="w-[100vw] md:min-h-[776px] md:w-[95vw] xl:w-[1204px] bg-[#1C1F25] relative flex flex-col overflow-hidden p-[60px] rounded-sm md:rounded-[32px] md:pb-[100px] max-md:px-5">
        <div className="bg-[rgba(56,127,245,0.1)] absolute z-0 flex md:min-h-[776px] w-full inset-0 pointer-events-none" />
        <Image
          width={879}
          height={424}
          src={BackgroundBenefits}
          alt="Background Pattern"
          className="hidden md:block aspect-[2.07] object-contain w-[879px] absolute z-0 max-w-full h-[424px] left-0 bottom-0 opacity-50 pointer-events-none"
          unoptimized
        />
        <div className="z-10 content-start self-stretch flex-wrap flex w-full gap-[40px_var(--inline-4xl,40px)] max-md:max-w-full">
          <div className="w-full md:min-w-[360px] justify-center items-center md:items-stretch flex flex-col font-bold flex-1 shrink basis-[0%] gap-10">
            <h2 className="text-white text-5xl leading-[56px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px] text-center md:text-start">
              {title}
            </h2>
            <NavigationLink
              href="/support"
              className="mt-10 w-fit cursor-pointer"
            >
              <Button
                variant="secondary"
                size="default"
                aria-label={buttonLabel}
              >
                {buttonLabel}
              </Button>
            </NavigationLink>
          </div>
          <div className="w-full md:min-w-[360px] md:w-[381px] gap-10">
            {cards.map((card) => {
              const benefitIcon = `/assets/home/benefits${card.id}.svg`;
              return (
                <BenefitCard
                  key={card.id}
                  icon={benefitIcon}
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

export default PlatformBenefits;
