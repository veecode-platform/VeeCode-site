import React from "react";
import FeatureCard from "./FeatureCard";
import { BsStars } from "react-icons/bs";

export type FeatureCard = {
  id: number;
  title: string;
  description: string;
};
interface FeaturesProps {
  label: string;
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
  cards: FeatureCard[];
}

const Features: React.FC<FeaturesProps> = ({
  label,
  title,
  description,
  buttonLabel1,
  buttonLabel2,
  cards,
}) => {
  return (
    <section className="flex flex-col items-center">
      <div className="items-center border border-[color:var(--Preto,#000)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex min-h-[54px] gap-2 text-base text-[#1e1e1e] font-medium text-center leading-[1.6] bg-neutral-50 mt-[161px] px-4 py-3.5 rounded-[30px] border-solid max-md:mt-10">
        <BsStars className="w-5 h-5 self-stretch shrink-0 my-auto text-[#33ffcd]" />
        <div className="self-stretch my-auto">{label}</div>
      </div>
      <h2 className="text-black text-center text-[40px] font-bold mt-[37px] max-md:max-w-full">
        {title}
      </h2>
      <p className="text-[#1e1e1e] text-center text-xl font-normal mt-[21px] max-md:max-w-full">
        {description}
      </p>
      <div className="flex min-h-[52px] items-center gap-[23px] text-base mt-[31px]">
        <button className="bg-[rgba(51,255,205,1)] self-stretch text-white font-bold w-[168px] my-auto p-2.5 rounded-[10px]">
          {buttonLabel1}
        </button>
        <button className="bg-white border self-stretch text-[rgba(30,30,30,1)] font-normal w-[183px] my-auto p-2.5 rounded-[10px] border-[rgba(30,30,30,0.5)] border-solid">
          {buttonLabel2}
        </button>
      </div>

      <div className="w-full max-w-[1257px] mt-[164px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-full max-md:ml-0 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {cards.map((card) => {
              const FeatureImg = `/assets/home/feature-card${card.id}.svg`;
              return (
                <FeatureCard
                  key={card.id}
                  icon={FeatureImg}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
            {/* <FeatureCard
              icon={FeatureImg2}
              title="Configure sua plataforma"
              description="Faça deploys com segurança e consistência usando Templates. Teste de forma mais rápida e consistente. Acompanhe métricas, identifique gargalos e mantenha uma entrega de alta qualidade"
            />
            <FeatureCard
              icon={FeatureImg3}
              title="Conte com o nosso suporte"
              description="Esteja você executando na sua própria instância na nuvem ou dentro do seu datacenter, nós te ajudamos a configurar a plataforma de acordo com suas necessidades"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
