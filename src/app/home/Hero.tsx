import React from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-[705px] max-w-full flex-col items-center text-black text-center mt-[107px] max-md:mt-10">
        <h1 className="text-[55px] font-bold max-md:max-w-full max-md:text-[40px]">
          Transforme o trabalho
          <br />
          da sua equipe
        </h1>
        <p className="text-xl font-normal mt-[23px] max-md:max-w-full">
          Uma Plataforma Interna de Desenvolvedores construída a partir do
          Backstage que oferece transparência, flexibilidade e fácil implantação
        </p>
      </div>
      <div className="flex items-center gap-[23px] text-base mt-[31px]">
        <Button variant="default" size="sm">
          Fale Conosco
        </Button>
        <Button variant="outline" size="sm">
          Acesse a Demo
        </Button>
      </div>
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/5edbe96b1f9275743968d5e6c943f28da8be8b9b?placeholderIfAbsent=true"
        width={724}
        height={407}
        alt="VeeCode Platform Dashboard"
        className="aspect-[1.78] object-contain w-[724px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-w-full mt-[51px] rounded-[11px] max-md:mt-10"
      />
    </section>
  );
};

export default Hero;
