import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="self-center flex w-full max-w-[1268px] flex-col items-stretch mt-[94px] max-md:max-w-full max-md:mt-10">
      <div className="self-center w-[726px] max-w-full text-neutral-50 text-center">
        <h1 className="text-neutral-50 text-[55px] font-bold max-md:max-w-full max-md:text-[40px]">
          Plugins VeeCode
        </h1>
        <p className="text-neutral-50 text-xl font-normal max-md:max-w-full">
          Acesse descrições, guias e instruções de instalação para nossos plugins
        </p>
      </div>
    </section>
  );
};