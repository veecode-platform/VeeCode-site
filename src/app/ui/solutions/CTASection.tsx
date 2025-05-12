"use client";

import React from "react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
}) => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <>
      <section className="items-stretch self-stretch z-10 flex w-full flex-col overflow-hidden text-neutral-50 font-bold bg-[rgba(30,30,30,0.90)] mt-[247px] px-[330px] py-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <h2 className="text-neutral-50 text-center text-[40px] max-md:max-w-full">
          {title}
        </h2>
        <p className="text-neutral-50 text-center text-xl font-normal mt-[22px] max-md:max-w-full">
          {description}
        </p>
        <a
          href="#"
          className="border self-center text-base text-white mt-[22px] px-5 py-[15px] rounded-[10px] border-[rgba(51,255,205,1)] border-solid hover:bg-[rgba(51,255,205,0.1)] transition-colors"
        >
          {buttonText}
        </a>
      </section>
      <div className="flex justify-center mt-8 mb-8">
        <button
          onClick={toggleContactForm}
          className="bg-[rgba(51,255,205,1)] text-white font-bold px-5 py-3 rounded-[10px] hover:bg-[rgba(41,204,164,1)] transition-colors"
        >
          {showContactForm
            ? "Fechar formulário"
            : "Abrir formulário de contato"}
        </button>
      </div>
    </>
  );
};

export default CTASection;
