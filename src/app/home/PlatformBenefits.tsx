import React from "react";
import BenefitCard from "./BenefitCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const BenefitsImg1 = "/assets/home/benefits1.svg";
const BenefitsImg2 = "/assets/home/benefits2.svg";
const BenefitsImg3 = "/assets/home/benefits3.svg";
const BenefitsImg4 = "/assets/home/benefits4.svg";
const BenefitsImg5 = "/assets/home/benefits5.svg";

const PlatformBenefits: React.FC = () => {
  const benefits = [
    {
      icon: BenefitsImg1,
      title: "Catálogos de API",
      description:
        "Acesse uma extensa possibilidade de recursos e criem aplicações inovadoras.",
    },
    {
      icon: BenefitsImg2,
      title: "Templates de Software",
      description:
        "Simplifique o processo de criação e acelere o desenvolvimento de aplicações",
    },
    {
      icon: BenefitsImg3,
      title: "Painéis de Observabilidade",
      description: "Monitore e analise a performance de suas aplicações",
    },
    {
      icon: BenefitsImg4,
      title: "Engenharia de Plataformas",
      description:
        "Crie produtos de alta qualidade de forma eficiente e colaborativa em um ambiente robusto.",
    },
    {
      icon: BenefitsImg5,
      title: "Gerenciamento de APIs",
      description:
        "Faça gestão, monitore e otimize de forma eficaz as suas APIs com as ferramentas ideais",
    },
  ];

  return (
    <section className="items-center self-stretch flex w-full flex-col overflow-hidden justify-center mt-[123px] pt-[80px] pb-[32px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="max-w-full bg-[#1C1F25] relative flex min-h-[776px] w-[1204px] flex-col overflow-hidden p-[60px] rounded-[32px] max-md:pb-[100px] max-md:px-5">
        <Image
          width={879}
          height={424}
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/b5ca72e75ccaee059131b65ea1f71348e304abf8?placeholderIfAbsent=true"
          alt="Background Pattern"
          className="aspect-[2.07] object-contain w-[879px] absolute z-0 max-w-full h-[424px] left-0 bottom-0"
        />
        <div className="content-start self-stretch flex-wrap z-0 flex w-full gap-[40px_var(--inline-4xl,40px)] max-md:max-w-full">
          <div className="min-w-[360px] justify-center items-stretch flex flex-col font-bold flex-1 shrink basis-[0%] gap-10 max-md:max-w-full">
            <h2 className="text-white text-5xl leading-[56px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
              Eleve o seu código a um novo nível de eficiência com{" "}
              <span className="text-[rgba(51,255,206,1)]">
                VeeCode Platform
              </span>
            </h2>
            <Button variant="secondary" size="default" className="mt-10 w-fit">
              Planos de suporte
            </Button>
          </div>
          <div className="min-w-[360px] w-[381px] gap-5">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
        <div className="bg-[rgba(56,127,245,0.1)] absolute z-0 flex min-h-[776px] w-full inset-0" />
      </div>
    </section>
  );
};

export default PlatformBenefits;
