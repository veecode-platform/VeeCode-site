import { Button } from "@/components/ui/Button";
import { ExternalLink, NavigationLink } from "@/components/ui/links";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
  externalLink: string;
  descriptionExternalLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  buttonLabel1,
  buttonLabel2,
  externalLink,
  descriptionExternalLink,
}) => {
  return (
    <div className="flex w-[90vw] mx-auto md:w-full h-full flex-col justify-between items-center text-base px-[47px] py-[65px] rounded-[10px] border-[rgba(51,255,206,1)] border-solid border-[3px] max-md:max-w-full max-md:mt-[35px] max-md:px-5">
      <h3 className="text-black text-[25px] font-bold text-center">{title}</h3>
      <p className="text-black text-center font-normal self-stretch mt-[79px] max-md:mt-10">
        {description}
      </p>
      <div className="flex w-[301px] max-w-full items-stretch gap-5 justify-center mt-[130px] max-md:mt-10">
        <ExternalLink description={descriptionExternalLink} href={externalLink}>
          <Button variant="outline" size="sm" aria-label={buttonLabel2}>
            {buttonLabel2}
          </Button>
        </ExternalLink>
        <NavigationLink href="/contact-us">
          <Button variant="default" size="sm" aria-label={buttonLabel1}>
            {buttonLabel1}
          </Button>
        </NavigationLink>
      </div>
    </div>
  );
};

export default ServiceCard;
