import React from "react";
import { Button } from "@/components/ui/Button";

interface CallToActionProps {
  title: string;
  subtitle?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col items-center">
      <div className="min-h-[188px] w-[1032px] max-w-full mt-[131px] pb-6 max-md:mt-10">
        <h2 className="text-black text-[40px] font-bold max-md:max-w-full text-center">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#1e1e1e] text-center text-xl font-normal max-md:max-w-full">
            {subtitle}
          </p>
        )}
      </div>
      <div className="z-10 flex mt-[-68px] min-h-11 w-[374px] max-w-full items-center gap-[23px] text-base">
        <Button variant="default" size="sm">
          Fale Conosco
        </Button>
        <Button variant="outline" size="sm">
          Acesse a Demo
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
