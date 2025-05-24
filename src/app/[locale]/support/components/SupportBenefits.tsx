interface SupportBenefitsProps {
  title: string;
  cards: ISupportBenefitsCard[];
}

export interface ISupportBenefitsCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string | React.ReactNode;
}

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-neutral-50 md:bg-transparent flex justify-center items-center flex-col w-full m-0.5 py-4 border-1 border-slate-200  lg:flex-row lg:py-8 lg:border-0 my-5 md:my-0">
      <div className="p-0.2 text-5xl text-teal-400 w-full h-full flex justify-center items-center lg:w-[10%] lg:text-6xl lg:self-start lg:pt-5">
        {icon}
      </div>
      <div className="py-4 px-5 w-[90%]">
        <h2 className="mb-2 text-2xl text-center lg:text-left">{title}</h2>
        <p className="text-xl text-center lg:text-left">{description}</p>
      </div>
    </div>
  );
};

const SupportBenefits: React.FC<SupportBenefitsProps> = ({ title, cards }) => {
  return (
    <div className="py-8 w-full flex justify-center items-center flex-col lg:py-16">
      <h2 className="cursor-pointer text-2xl text-center md:text-left self-start my-5 md:my-0">
        {title}
      </h2>
      {cards.map((card) => (
        <SupportCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.desc}
        />
      ))}
    </div>
  );
};

export default SupportBenefits;
