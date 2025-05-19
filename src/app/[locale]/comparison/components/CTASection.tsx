import React from "react";

const CTASection: React.FC = () => {
  return (
    <section
      className="items-stretch z-10 flex w-full flex-col overflow-hidden text-neutral-50 font-bold bg-[rgba(30,30,30,0.90)] mt-[245px] px-[330px] py-10 max-md:max-w-full max-md:mt-10 max-md:px-5"
    >
      <h2
        className="text-neutral-50 text-center text-[40px] max-md:max-w-full"
      >
        Precisa de ajuda para decidir?
      </h2>
      <p
        className="text-neutral-50 text-center text-xl font-normal mt-[22px] max-md:max-w-full"
      >
        Toda empresa tem suas necessidades específicas. Estamos aqui para te
        ajudar a escolher a melhor trilha.
      </p>
      <a
        href="#"
        className="border self-center text-base text-white mt-[22px] px-5 py-[15px] rounded-[10px] border-[rgba(51,255,205,1)] border-solid hover:bg-[rgba(51,255,205,0.1)] transition-colors"
      >
        Fale agora com nosso time de vendas
      </a>
    </section>
  );
};

export default CTASection;