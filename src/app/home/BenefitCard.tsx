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
    <div className="items-stretch border border-[color:var(--DarkOverlayElement-DO20,rgba(255,255,255,0.20))] backdrop-blur-[10px] flex w-full gap-3 pl-2 pr-[18px] py-2 rounded-2xl border-solid mb-5">
      <div className="items-center backdrop-blur-[6px] flex gap-2 h-full w-12 bg-[rgba(255,255,255,0.10)] p-3 rounded-xl">
        <Image
          src={icon}
          alt={title}
          className="aspect-[1] object-contain w-6 self-stretch my-auto"
          width={1204}
          height={776}
        />
      </div>
      <div className="min-w-60 text-base flex-1 shrink basis-6 my-auto">
        <div className="text-white font-semibold">{title}</div>
        <div className="text-white text-ellipsis font-normal leading-6">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
