import React from "react";
import TableContent from "../../ui/comparison/TableContent";
interface ComparisionTableProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  tableTitle: string;
}

const ComparisonTable: React.FC<ComparisionTableProps> = ({
  title,
  subtitle,
  description,
  tableTitle,
}) => {
  return (
    <section className="self-center flex w-[963px] max-w-full flex-col items-stretch text-[#1e1e1e] mt-[163px] max-md:mt-10">
      <div className="self-center w-[639px] max-w-full text-black text-center">
        <h1 className="text-[55px] font-bold max-md:max-w-full max-md:text-[40px]">
          {title}
        </h1>
        <p className="text-xl font-normal mt-[13px] max-md:max-w-full">
          {subtitle}
        </p>
      </div>

      <div className="self-center w-[788px] max-w-full gap-2.5 text-xl text-black font-normal text-center mt-24 p-2.5 max-md:max-w-full max-md:mt-10">
        {description}
      </div>

      <h2 className="self-center gap-2.5 text-[40px] text-black font-bold text-center mt-[86px] p-2.5 max-md:max-w-full max-md:mt-10">
        {tableTitle}
      </h2>

      <TableContent />
    </section>
  );
};

export default ComparisonTable;
