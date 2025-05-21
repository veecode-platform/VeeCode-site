import Image from "next/image";
import React from "react";

const VertigoLogo = "/assets/home/vertigo-logo.webp";
// const AmbimaLogo = "/assets/home/ambima-logo.webp";
const CredSystemLogo = "/assets/home/credsystem-logo.webp";

interface ClientLogosProps {
  label: string;
}

const ClientLogos: React.FC<ClientLogosProps> = ({ label }) => {
  return (
    <section className="flex flex-col items-center">
      <p className="text-[#4B5162] text-center text-base font-normal leading-[1.6] opacity-80 mt-[125px] max-md:max-w-full max-md:mt-10">
        {label}
      </p>
      <div className="flex w-full max-w-[1182px] items-center justify-center flex-wrap mt-9 max-md:max-w-full gap-8">
        <Image
          src={VertigoLogo}
          alt="Client Logo 1"
          width={161}
          height={72}
          className="aspect-[2.24] object-contain w-[161px] self-stretch shrink-0 my-auto"
          unoptimized
        />
        {/* <Image
          src={AmbimaLogo}
          alt="Client Logo 2"
          width={183}
          height={97}
          className="aspect-[1.89] object-contain w-[183px] self-stretch shrink-0 my-auto"
          unoptimized
        /> */}
        <Image
          src={CredSystemLogo}
          alt="Client Logo 3"
          width={301}
          height={81}
          className="aspect-[3.72] object-contain w-[301px] self-stretch min-w-60 my-auto"
          unoptimized
        />
      </div>
    </section>
  );
};

export default ClientLogos;
