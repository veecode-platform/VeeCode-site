import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="w-full grow text-base max-md:mt-10">
      <div className="w-full flex flex-col items-center justify-center md:items-start bg-neutral-50 px-[19px] py-[23px] rounded-[11px] max-md:pr-5 h-full">
        <div className="flex max-w-full items-stretch gap-[5px] text-black font-semibold">
          <Image
            src={icon}
            alt={title}
            height={18}
            width={18}
            className="aspect-[1] object-contain w-[18px] shrink-0 my-auto"
            unoptimized
          />
          <div className="self-stretch gap-2.5 p-2.5">{title}</div>
        </div>
        <div className="text-[#4B5162] font-normal mt-2 text-center md:text-start">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
