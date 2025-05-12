import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="flex w-full h-full flex-col justify-between items-center text-base px-[47px] py-[65px] rounded-[10px] border-[rgba(51,255,206,1)] border-solid border-[3px] max-md:max-w-full max-md:mt-[35px] max-md:px-5">
      <h3 className="text-black text-[25px] font-bold text-center">{title}</h3>
      <p className="text-black text-center font-normal self-stretch mt-[79px] max-md:mt-10">
        {description}
      </p>
      <div className="flex w-[301px] max-w-full items-stretch gap-5 justify-between mt-[130px] max-md:mt-10">
        <a
          href="#"
          className="bg-[rgba(51,255,205,1)] text-white font-bold p-2.5 rounded-[10px] hover:bg-[rgba(41,204,164,1)] transition-colors"
        >
          Comece Agora
        </a>
        <a
          href="#"
          className="bg-white border text-[rgba(30,30,30,1)] font-normal whitespace-nowrap p-2.5 rounded-[10px] border-[rgba(30,30,30,0.5)] border-solid hover:bg-[rgba(240,240,240,1)] transition-colors"
        >
          Contate-nos
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
