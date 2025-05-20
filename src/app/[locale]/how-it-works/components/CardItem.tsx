import Image from "next/image";

interface CardItemProps {
  image: string;
  title: string;
  children: React.ReactNode;
}

export const CardItem: React.FC<CardItemProps> = ({
  image,
  title,
  children,
}) => {
  return (
    <div className="w-full flex justify-center items-center gap-8 flex-col p-12 border-1 border-neutral-300 rounded-md lg:p-0 lg:border-0 lg:flex-row lg:items-start">
      <div className="w-full flex justify-center items-center flex-col lg:w-[15%] lg:justify-start lg:flex-row">
        <Image
          src={image}
          alt={title}
          width={200}
          height={62}
          style={{
            width: "100%",
            height: "auto",
          }}
          unoptimized
          className="max-w-[120px] w-[30%] md:w-[40%] lg:max-w-auto lg:w-full"
        />
      </div>
      <div className="flex flex-col gap-8 justify-center items-center w-full lg:items-start xl:w-[85%]">
        <h2 className="w-full text-2xl font-medium text-center lg:text-left text-neutral-800">
          {title}
        </h2>
        <div className="w-full text-xl text-center lg:text-left ">
          {children}
        </div>
      </div>
    </div>
  );
};
