interface SupportCategoriesProps {
  title: string;
  desc: string;
}

const SupportCategories: React.FC<SupportCategoriesProps> = ({
  title,
  desc,
}) => {
  return (
    <div className="mb-8 w-full">
      <h2 className="my-0.7 cursor-pointer text-2xl text-left my-5">{title}</h2>
      <p className="text-xl text-left">{desc}</p>
    </div>
  );
};

export default SupportCategories;
