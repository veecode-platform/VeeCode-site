import CheckIcon from "@/components/CheckIcon";
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

      <div className="flex w-[429px] max-w-full items-stretch gap-5 text-xl font-normal whitespace-nowrap justify-between mr-[55px] mt-[70px] max-md:mr-2.5 max-md:mt-10 self-end">
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

      <div className="flex w-[857px] md:w-[90%] items-center gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div>
          Adicionar e atualizar itens
          <br />
          do catálogo via YAML
        </div>
        <CheckIcon />
        <CheckIcon />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      <div className="flex w-[857px] md:w-[95%] items-center gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div>
          Atualizar itens <br />
          da UI
        </div>
        <CheckIcon />
        <div className="bg-[rgba(170,170,170,1)] self-stretch flex w-[29px] shrink-0 h-1 my-auto" />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      <div className="flex w-[857px] md:w-[95%] items-center gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div>
          Adicionar e atualizar itens
          <br />
          do catálogo via API
        </div>
        <CheckIcon />
        <div className="bg-[rgba(170,170,170,1)] self-stretch flex w-[29px] shrink-0 h-1 my-auto" />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      <div className="flex w-[857px] md:w-[95%] items-center gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div>Sincronizar repositórios como itens no catálogo</div>
        <CheckIcon />
        <div className="bg-[rgba(170,170,170,1)] self-stretch flex w-[29px] shrink-0 h-1 my-auto" />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      {/* Templates Section */}
      <CategoryHeader title="Templates" />

      <div className="flex w-[857px] md:w-[95%] items-stretch gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-5">
        <div className="my-auto">Ações self-serve</div>
        <CheckIcon />
        <CheckIcon />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      <div className="flex w-[857px] md:w-[95%] gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-2">
        <div>
          Customizar ações
          <br />
          self-serve
        </div>
        <CheckIcon />
        <CheckIcon />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />

      {/* TechDocs Section */}
      <CategoryHeader title="TechDocs" />

      <div className="flex w-[882px] md:w-[95%] items-stretch gap-5 text-base font-normal justify-between ml-3 mt-[23px]">
        <div>Mecanismo de criação</div>
        <div>TechDocs</div>
        <div>TechDocs</div>
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[23px]" />

      <div className="flex w-[857px] md:w-[95%] items-stretch gap-5 text-base font-normal flex-wrap justify-between ml-3 mt-[11px]">
        <div className="my-auto">Extensível via plugins</div>
        <CheckIcon />
        <CheckIcon />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      {/* Plugins e extensões Section */}
      <div className="text-black text-xl font-normal ml-[18px] mt-[5px] max-md:ml-2.5">
        Plugins e extensões
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />

      <div className="self-center flex w-[932px] md:w-[95%] items-center gap-5 text-base font-normal justify-between mt-5">
        <div className="self-stretch my-auto">Customização de tema</div>
        <CheckIcon />
        <div className="self-stretch my-auto">Requer implementação</div>
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      <div className="self-center flex w-[932px] md:w-[95%] items-center gap-5 text-base font-normal justify-between mt-[11px]">
        <div className="self-stretch my-auto">Customização de layout</div>
        <CheckIcon />
        <div className="self-stretch my-auto">Requer implementação</div>
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      <div className="flex w-[853px] md:w-[95%] gap-5 text-base font-normal flex-wrap justify-between ml-4 mt-2">
        <div>
          Acesso a toda infraestrutura
          <br />e recursos
        </div>
        <CheckIcon />
        <CheckIcon />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />

      {/* RBAC Section */}
      <div className="text-black text-xl font-normal ml-[18px] mt-[5px] max-md:ml-2.5">
        Role-Based Access Control - RBAC
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />

      <div className="flex w-[851px] md:w-[95%] items-center gap-5 text-base font-normal flex-wrap justify-between ml-[18px] mt-[11px]">
        <div>
          Funções de administrador <br />e não administrador
        </div>
        <CheckIcon />
        <CheckIcon />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[11px]" />

      <div className="flex w-[851px] md:w-[95%] items-center gap-5 text-base font-normal flex-wrap justify-between ml-[18px] mt-[11px]">
        <div className="self-stretch my-auto">Funções personalizadas</div>
        <CheckIcon />
        <div className="bg-[rgba(170,170,170,1)] self-stretch flex w-[29px] shrink-0 h-1 my-auto" />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[21px]" />

      <div className="flex w-[857px] md:w-[95%] gap-5 text-base font-normal flex-wrap justify-between ml-4 mt-2">
        <div>
          Políticas de permissões
          <br />
          personalizadas
        </div>
        <CheckIcon />
        <CheckIcon />
      </div>
      <div className="flex w-full shrink-0 h-px bg-[rgba(30,30,30,0.90)] mt-[5px]" />
    </section>
  );
};

export default ComparisonTable;
