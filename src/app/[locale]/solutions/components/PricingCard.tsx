import React from "react";
import Image from "next/image";
import { PricingCardProps } from "./PricingSection";
import { Button } from "@/components/ui/Button";
import { NavigationLink } from "@/components/ui/links";

const PricingCard: React.FC<Omit<PricingCardProps, "id">> = ({
  title,
  description,
  subtitle,
  features,
  buttonText,
}) => {
  return (
    <div className="flex w-[90vw] mx-auto md:w-full h-full flex-col justify-between text-base text-black font-normal pt-[63px] pb-[29px] px-[38px] rounded-[10px] border-[rgba(51,255,206,1)] border-solid border-[3px] max-md:max-w-full max-md:mt-[38px] max-md:px-5">
      <h3 className="text-[25px] font-bold text-center self-center">{title}</h3>
      <span className="text-black text-center self-center mt-[66px] max-md:mt-10">
        {description}
      </span>
      <div className="bg-[rgba(51,255,206,1)] flex shrink-0 h-px mt-14 max-md:mt-10" />
      <h4 className="text-black font-semibold mt-[22px] text-center md:text-start">
        {subtitle}
      </h4>
      <ul className="mt-[13px] space-y-[11px] self-center md:self-start">
        {features.map((feature, index) => (
          <li key={index} className="flex items-stretch gap-[11px] text-sm">
            <Image
              src={feature.icon}
              alt=""
              className="aspect-[1] object-contain w-6 shrink-0"
              width={24}
              height={24}
              unoptimized
            />
            <span className="basis-auto">{feature.text}</span>
          </li>
        ))}
      </ul>
      <NavigationLink
        href="/contact-us"
        className="text-center py-5 md:text-start 2xl:py-0"
      >
        <Button variant="default" size="sm" aria-label={buttonText}>
          {buttonText}
        </Button>
      </NavigationLink>
    </div>
  );
};

export default PricingCard;
