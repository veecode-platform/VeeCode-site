import Image from "next/image";
import React from "react";

const VertigoLogo = "/assets/home/vertigo-logo.webp";
const AmbimaLogo = "/assets/home/ambima-logo.webp";
const SankhyaLogo = "/assets/home/sankhya.webp";
const CredSystemLogo = "/assets/home/credsystem-logo.webp";

interface ClientLogosProps {
  label: string;
}

const ClientLogos: React.FC<ClientLogosProps> = ({ label }) => {
  const customers = [
    {
      id: 1,
      logo: VertigoLogo,
      alt: " Customer logo 1",
    },
    {
      id: 2,
      logo: AmbimaLogo,
      alt: " Customer logo 1",
    },
    {
      id: 3,
      logo: SankhyaLogo,
      alt: " Customer logo 1",
    },
    {
      id: 4,
      logo: CredSystemLogo,
      alt: " Customer logo 1",
    },
  ];

  return (
    <section className="flex flex-col items-center my-20 py-5 bg-neutral-50 md:bg-transparent md:my-0 md:py-0">
      <p className="text-[#4B5162] text-center text-base font-normal leading-[1.6] opacity-80 mt-[125px] max-md:max-w-full max-md:mt-10">
        {label}
      </p>
      <div className="flex w-full max-w-[1182px] items-center justify-center flex-wrap mt-9 max-md:max-w-full gap-8">
        {customers.map((customer) => (
          <Image
            key={customer.id}
            src={customer.logo}
            alt={customer.alt}
            width={161}
            height={72}
            className="aspect-[2.24] object-contain w-[161px] self-stretch shrink-0 my-auto"
            unoptimized
          />
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
