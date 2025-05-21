import Image from "next/image";

const LoadingAnimation = `/assets/icons/loading.gif`;

const loading = () => {
  return (
    <main className="w-[100vw] min-h-[85vh] self-center flex justify-center items-center">
      <Image
        src={LoadingAnimation}
        priority
        alt="Loading animation"
        width={200}
        height={62}
        style={{
          width: "100%",
          height: "auto",
        }}
        unoptimized
        className="w-[60%] md:max-w-[280px] xl:max-w-[480px]"
      />
    </main>
  );
};

export default loading;
