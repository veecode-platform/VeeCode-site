import DefaultPage from "@/components/layout/DefaultPage";
import Image from "next/image";

const LoadingAnimation = `/assets/icons/loading.gif`;

const loading = () => {
  return (
    <DefaultPage title="">
      <div className="w-[100vw] h-[75vh] flex justify-center items-center">
        <div className="flex justify-center items-center w-full h-full">
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
        </div>
      </div>
    </DefaultPage>
  );
};

export default loading;
