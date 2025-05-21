import React from "react";
import Image from "next/image";

interface Tag {
  name: string;
}

interface PluginCardProps {
  icon: string;
  title: string;
  tags: Tag[];
  description: string;
  className?: string;
}

export const PluginCard: React.FC<PluginCardProps> = ({
  icon,
  title,
  tags,
  description,
  className = "",
}) => {
  return (
    <article
      className={`border bg-neutral-200 w-full h-full px-[37px] py-[55px] rounded-xl border-neutral-50 border-solid max-md:max-w-full max-md:px-5  text-black cursor-pointer ${className}`}
    >
      <div className="flex items-start gap-5 ml-[11px] max-md:flex-col max-md:ml-2.5">
        <Image
          width={102}
          height={102}
          src={icon}
          alt={`${title} icon`}
          className="text-slate-950 aspect-[1] object-contain w-[102px] shrink-0 max-w-full max-md:mt-9"
          unoptimized
        />
        <div className="mt-1.5 max-md:mt-10">
          <h3 className="text-3xl font-bold">{title}</h3>
          <div className="flex flex-wrap items-stretch gap-3.5 text-base font-normal text-center mt-[7px]">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="self-stretch text-neutral-50 bg-[rgba(52,56,68,1)] gap-2.5 p-2.5 rounded-lg whitespace-nowrap"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-base font-normal mt-[30px] max-md:max-w-full">
        {description}
      </p>
    </article>
  );
};
