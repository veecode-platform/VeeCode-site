import Image from "next/image";
import React from "react";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-start gap-5 md:flex-row  md:items-stretch border border-[color:var(--DarkOverlayElement-DO20,rgba(255,255,255,0.20))] backdrop-blur-[10px] w-full p-5 md:p-3 md:pl-2 md:pr-[18px] md:py-2 rounded-2xl border-solid mb-5">
      <div className="flex items-center backdrop-blur-[6px] gap-2 min-h-full w-12 bg-[rgba(255,255,255,0.10)] p-3 rounded-xl">
        <Image
          src={icon}
          alt={title}
          className="aspect-[1] object-contain w-6 self-stretch my-auto"
          width={24}
          height={24}
          unoptimized
        />
      </div>
      <div className="min-w-60 text-base flex-1 shrink basis-6 my-auto text-center md:text-start">
        <div className="text-white font-semibold">{title}</div>
        <div className="text-white text-ellipsis font-normal leading-6">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
