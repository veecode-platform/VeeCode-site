import React from "react";
import { Button } from "@/components/ui/Button";
import { ExternalLink, NavigationLink } from "@/components/ui/links";

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonLabel1: string;
  buttonLabel2: string;
  descriptionExternalLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  buttonLabel1,
  buttonLabel2,
  descriptionExternalLink,
}) => {
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="w-[1032px] max-w-[90vw]">
        <h2 className="text-black text-[40px] font-bold max-md:max-w-full text-center">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#1e1e1e] text-center text-xl font-normal max-md:max-w-full mt-5 md:mt-1">
            {subtitle}
          </p>
        )}
      </div>
      <div className="z-10 flex items-center gap-[23px] justify-center min-h-11 w-[374px] max-w-full  text-base">
        <NavigationLink href="/contact-us">
          <Button variant="default" size="sm" aria-label={buttonLabel1}>
            {buttonLabel1}
          </Button>
        </NavigationLink>
        <ExternalLink
          description={descriptionExternalLink}
          href="https://docs.platform.vee.codes/devportal/installation-guide/VKDR/"
          event="vkdrDocs"
        >
          <Button variant="outline" size="sm" aria-label={buttonLabel2}>
            {buttonLabel2}
          </Button>
        </ExternalLink>
      </div>
    </section>
  );
};

export default CallToAction;
