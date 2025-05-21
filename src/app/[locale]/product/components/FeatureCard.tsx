import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  altText?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  altText,
}) => {
  return (
    <div className="flex gap-[14px_21px] flex-wrap h-full md:h-[284px] text-slate-900 w-[95vw] md:w-full border-l-4 border-[#33FFCE] p-10 bg-neutral-50 md:bg-transparent">
      <Image
        src={icon}
        alt={altText || title}
        className="aspect-[1] object-contain w-[70px] shrink-0"
        width={64.167}
        height={55.417}
        unoptimized
      />
      <h2 className="text-4xl font-bold grow shrink w-[468px] max-md:max-w-full flex items-center justify-start">
        {title}
      </h2>
      <p className="text-xl font-normal grow shrink w-[560px] max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
