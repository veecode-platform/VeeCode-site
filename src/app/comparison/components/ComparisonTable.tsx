import Image from "next/image";
import React from "react";

interface ComparisonRowProps {
  feature: string;
  veecode: React.ReactNode;
  backstage: React.ReactNode;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({
  feature,
  veecode,
  backstage,
}) => {
  return (
    <>
      <div className="flex w-full max-w-full items-center gap-5 text-base text-black font-normal justify-between ml-3 mt-[11px]">
        <div className="text-[#1e1e1e]">{feature}</div>
        <div className="self-stretch my-auto">{veecode}</div>
        <div className="self-stretch my-auto">{backstage}</div>
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />
    </>
  );
};

const CategoryHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="text-black text-xl font-normal ml-3 mt-[5px] max-md:ml-2.5">
        {title}
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />
    </>
  );
};

const ComparisonTable: React.FC = () => {
  return (
    <section className="self-center flex w-[963px] max-w-full flex-col items-stretch text-[#1e1e1e] mt-[163px] max-md:mt-10">
      <div className="self-center w-[639px] max-w-full text-black text-center">
        <h1 className="text-[55px] font-bold max-md:max-w-full max-md:text-[40px]">
          Veecode vs Backstage
        </h1>
        <p className="text-xl font-normal mt-[13px] max-md:max-w-full">
          Eficiência para times de qualquer tamanho.
        </p>
      </div>

      <div className="self-center w-[788px] max-w-full gap-2.5 text-xl text-black font-normal text-center mt-24 p-2.5 max-md:max-w-full max-md:mt-10">
        Backstage é uma das melhores ferramentas do mercado para desenvolver
        Plataformas Internas de Desenvolvimento (IDPs). No entanto, requer um
        alto esforço técnico para torná-lo um IDP viável.
        <br />
        <br />
        Com a Veecode, usamos a versão open-source do Backstage para construir
        uma IDP de fácil compreensão e livre de manutenções.
      </div>

      <h2 className="self-center gap-2.5 text-[40px] text-black font-bold text-center mt-[86px] p-2.5 max-md:max-w-full max-md:mt-10">
        Compare as features
      </h2>

      <div className="flex w-[429px] max-w-full items-stretch gap-5 text-xl font-normal whitespace-nowrap justify-between mr-[55px] mt-[70px] max-md:mr-2.5 max-md:mt-10">
        <div>VeeCode</div>
        <div>Backstage</div>
      </div>

      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      {/* Catálogo Section */}
      <CategoryHeader title="Catálogo" />

      <ComparisonRow
        feature="Trazer seu modelo de dados"
        veecode="sim"
        backstage="sim, com algum esforço"
      />

      <div className="flex w-[857px] max-w-full items-center gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div>
          Adicionar e atualizar itens
          <br />
          do catálogo via YAML
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/eae55f10afc5f9001599fd2e26e3aae6ec3bec4d?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
          width={29}
          height={29}
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/d35a4b154f4712c521317be1b1dce7c53fb7bb37?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
          width={29}
          height={29}
        />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      <div className="flex w-[857px] max-w-full items-center gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div>
          Atualizar itens <br />
          da UI
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/8c7e7612f39c64155aeeb510375c1dca74abf252?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
          width={29}
          height={29}
        />
        <div className="bg-[rgba(170,170,170,1)] self-stretch flex w-[29px] shrink-0 h-1 my-auto" />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      <div className="flex w-[857px] max-w-full items-center gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div>
          Adicionar e atualizar itens
          <br />
          do catálogo via API
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/2ac7b9b772d59b0a7778921361efbdcf9060061f?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
          width={29}
          height={29}
        />
        <div className="bg-[rgba(170,170,170,1)] self-stretch flex w-[29px] shrink-0 h-1 my-auto" />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      <div className="flex w-[857px] max-w-full items-center gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div>Sincronizar repositórios como itens no catálogo</div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/66df782d200743f9a0261ee938789f22cd8b1b7e?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
          width={29}
          height={29}
        />
        <div className="bg-[rgba(170,170,170,1)] self-stretch flex w-[29px] shrink-0 h-1 my-auto" />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      {/* Templates Section */}
      <CategoryHeader title="Templates" />

      <div className="flex w-[857px] max-w-full items-stretch gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-5">
        <div className="my-auto">Ações self-serve</div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/246b081f4044476cbc17c8180154664bb8175bb0?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/61985eb918d0c9b4a748c54e00200d075efae82d?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      <div className="flex w-[857px] max-w-full gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-2">
        <div>
          Customizar ações
          <br />
          self-serve
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/f956c9bd5e5ba39bb983af6e95d27567e549178d?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/304b20f443a1dc44e84f90b6da8eb58361997f79?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />

      {/* TechDocs Section */}
      <CategoryHeader title="TechDocs" />

      <div className="flex w-[882px] max-w-full items-stretch gap-5 text-base font-normal justify-between ml-3 mt-[23px]">
        <div>Mecanismo de criação</div>
        <div>TechDocs</div>
        <div>TechDocs</div>
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[23px]" />

      <div className="flex w-[857px] max-w-full items-stretch gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div className="my-auto">Extensível via plugins</div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/5f9f64e0d30487da7c8730ae1f91e7b6b9c5e94a?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/bc3b9aa4bb5875342e59744258a9b31ffb06fc5d?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      {/* Plugins e extensões Section */}
      <div className="text-black text-xl font-normal ml-[18px] mt-[5px] max-md:ml-2.5">
        Plugins e extensões
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />

      <div className="self-center flex w-[932px] max-w-full items-center gap-5 text-base font-normal justify-between mt-5">
        <div className="self-stretch my-auto">Customização de tema</div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/253cc1b98e721e772e277f83c6679df7bf470dbf?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0"
          width={29}
          height={29}
        />
        <div className="self-stretch my-auto">Requer implementação</div>
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      <div className="self-center flex w-[932px] max-w-full items-center gap-5 text-base font-normal justify-between mt-[11px]">
        <div className="self-stretch my-auto">Customização de layout</div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/518ffc8f7dd7785d3b18f56d76bb7f1e97443c4e?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0"
          width={29}
          height={29}
        />
        <div className="self-stretch my-auto">Requer implementação</div>
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      <div className="flex w-[853px] max-w-full gap-5 text-base font-normal flex-wrap justify-between ml-4 mt-2">
        <div>
          Acesso a toda infraestrutura
          <br />e recursos
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/22c8348e716f5cf47a0eac8a40873a4c1cf42401?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/0e4cf220e227b516ed5d41f7e0613eb2fa575722?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />

      {/* RBAC Section */}
      <div className="text-black text-xl font-normal ml-[18px] mt-[5px] max-md:ml-2.5">
        Role-Based Access Control - RBAC
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />

      <div className="flex w-[851px] max-w-full items-center gap-5 text-base font-normal flex-wrap justify-between ml-[18px] mt-[11px]">
        <div>
          Funções de administrador <br />e não administrador
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/dd0c7dee4ce90fb1b72149abd86bcdc0c0e53876?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
          width={29}
          height={29}
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/cc9510dac8bac7f8cafd542d856ed4b30fc45627?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
          width={29}
          height={29}
        />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      <div className="flex w-[851px] max-w-full items-center gap-5 text-base font-normal flex-wrap justify-between ml-[18px] mt-[11px]">
        <div className="self-stretch my-auto">Funções personalizadas</div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/0d1d1706389e5d07be244a961ec635e1860e6c38?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] self-stretch shrink-0"
          width={29}
          height={29}
        />
        <div className="bg-[rgba(170,170,170,1)] self-stretch flex w-[29px] shrink-0 h-1 my-auto" />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      <div className="flex w-[857px] max-w-full gap-5 text-base font-normal flex-wrap justify-between ml-4 mt-2">
        <div>
          Políticas de permissões
          <br />
          personalizadas
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/d2be36a21fe731c7c5306fa0d50aa2c249589c44?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/f8da6bf9dd0fadcfff69d2e60b15f55d6d008077?placeholderIfAbsent=true"
          alt="Check"
          className="aspect-[1] object-contain w-[29px] shrink-0"
          width={29}
          height={29}
        />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />
    </section>
  );
};

export default ComparisonTable;
