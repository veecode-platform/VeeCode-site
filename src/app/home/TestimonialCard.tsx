import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  quote: string;
  avatar: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  avatar,
  name,
  role,
}) => {
  return (
    <div className="self-stretch flex min-w-60 gap-[15px_12px] flex-wrap w-[519px] my-auto max-md:max-w-full">
      <p className="text-neutral-900 text-lg font-normal leading-[30px] grow shrink w-[511px] max-md:max-w-full">
        {quote}
      </p>
      <Image
        src={avatar}
        width={60}
        height={60}
        alt={`${name}'s avatar`}
        className="aspect-[1] object-contain w-10 shrink-0 rounded-full"
      />
      <div className="min-w-60 grow shrink w-[280px]">
        <div className="text-neutral-900 text-base font-semibold leading-loose">
          {name}
        </div>
        <div className="text-neutral-500 text-sm font-normal leading-loose">
          {role}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
