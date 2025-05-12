import Image from "next/image";
import React from "react";

const ClientLogos: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <p className="text-[#4B5162] text-center text-base font-normal leading-[1.6] opacity-80 mt-[125px] max-md:max-w-full max-md:mt-10">
        160 + clientes satisfeitos que escalam seus negócios com a VeeCode
      </p>
      <div className="flex w-full max-w-[1182px] items-center justify-center flex-wrap mt-9 max-md:max-w-full gap-8">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/a954df3af8de80afd725a19caff90f3aea12ac78?placeholderIfAbsent=true"
          alt="Client Logo 1"
          width={161}
          height={72}
          className="aspect-[2.24] object-contain w-[161px] self-stretch shrink-0 my-auto"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/27a23766df1d921007dccb5fed361dca6ecabc66?placeholderIfAbsent=true"
          alt="Client Logo 2"
          width={183}
          height={97}
          className="aspect-[1.89] object-contain w-[183px] self-stretch shrink-0 my-auto"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/474e14f992d3a9eac6b3ccc65e1b771a923a42da?placeholderIfAbsent=true"
          alt="Client Logo 3"
          width={301}
          height={81}
          className="aspect-[3.72] object-contain w-[301px] self-stretch min-w-60 my-auto"
        />
      </div>
    </section>
  );
};

export default ClientLogos;
