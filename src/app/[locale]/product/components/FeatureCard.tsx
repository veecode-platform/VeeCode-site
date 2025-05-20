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
    <div className="flex gap-[14px_21px] flex-wrap h-[284px] text-slate-900 w-full border-l-4 border-[#33FFCE] p-10">
      <Image
        src={icon}
        alt={altText || title}
        className="aspect-[1] object-contain w-[70px] shrink-0"
        width={64.167}
        height={55.417}
        unoptimized
      />
      <h2 className="title-card grow shrink w-[468px] max-md:max-w-full">
        {title}
      </h2>
      <p className="text-xl font-normal grow shrink w-[560px] max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
