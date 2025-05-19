import React from "react";
import BenefitCard from "./BenefitCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

// const BenefitsImg1 = "/assets/home/benefits1.svg";
// const BenefitsImg2 = "/assets/home/benefits2.svg";
// const BenefitsImg3 = "/assets/home/benefits3.svg";
// const BenefitsImg4 = "/assets/home/benefits4.svg";
// const BenefitsImg5 = "/assets/home/benefits5.svg";
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
    <section className="items-center self-stretch flex w-full flex-col overflow-hidden justify-center my-[123px] pt-[80px] pb-[32px] max-md:max-w-full max-md:my-10 max-md:px-5">
      <div className="max-w-full bg-[#1C1F25] relative flex min-h-[776px] w-[1204px] flex-col overflow-hidden p-[60px] rounded-[32px] max-md:pb-[100px] max-md:px-5">
        <Image
          width={879}
          height={424}
          src={BackgroundBenefits}
          alt="Background Pattern"
          className="aspect-[2.07] object-contain w-[879px] absolute z-0 max-w-full h-[424px] left-0 bottom-0 opacity-50"
          unoptimized
        />
        <div className="content-start self-stretch flex-wrap z-0 flex w-full gap-[40px_var(--inline-4xl,40px)] max-md:max-w-full">
          <div className="min-w-[360px] justify-center items-stretch flex flex-col font-bold flex-1 shrink basis-[0%] gap-10 max-md:max-w-full">
            <h2 className="text-white text-5xl leading-[56px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
              {title}
            </h2>
            <Button variant="secondary" size="default" className="mt-10 w-fit">
              {buttonLabel}
            </Button>
          </div>
          <div className="min-w-[360px] w-[381px] gap-5">
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
        <div className="bg-[rgba(56,127,245,0.1)] absolute z-0 flex min-h-[776px] w-full inset-0" />
      </div>
    </section>
  );
};

export default PlatformBenefits;
