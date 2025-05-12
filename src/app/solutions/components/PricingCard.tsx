import React from "react";
import Image from "next/image";

interface FeatureItem {
  icon: string;
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  disclaimer?: string;
  features: FeatureItem[];
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  disclaimer,
  features,
  buttonText,
}) => {
  return (
    <div className="flex w-full flex-col items-stretch text-base text-black font-normal pt-[63px] pb-[29px] px-[38px] rounded-[10px] border-[rgba(51,255,206,1)] border-solid border-[3px] max-md:max-w-full max-md:mt-[38px] max-md:px-5">
      <h3 className="text-[25px] font-bold text-center self-center">{title}</h3>
      <p className="text-black text-center self-center mt-[66px] max-md:mt-10">
        {description}
      </p>
      {disclaimer && (
        <p className="text-center text-sm self-center mt-5">{disclaimer}</p>
      )}
      <div className="bg-[rgba(51,255,206,1)] flex shrink-0 h-px mt-14 max-md:mt-10" />
      <h4 className="text-black font-semibold mt-[22px]">
        {title === "Grátis" ? "O plano gratuito inclui:" : "O suporte inclui:"}
      </h4>
      <ul className="mt-[13px] space-y-[11px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-stretch gap-[11px] text-sm">
            <Image
              src={feature.icon}
              alt=""
              className="aspect-[1] object-contain w-6 shrink-0"
              width={24}
              height={24}
            />
            <span className="basis-auto">{feature.text}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="bg-[rgba(51,255,205,1)] self-center min-h-[54px] w-[177px] max-w-full text-white font-bold mt-[152px] px-2.5 py-[15px] rounded-[10px] max-md:mt-10 flex items-center justify-center hover:bg-[rgba(41,204,164,1)] transition-colors"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default PricingCard;
