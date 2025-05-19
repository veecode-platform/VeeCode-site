import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";

const ImageNotFound = `/assets/notFound/404.png`;

const PageNotFound = () => (
  <main className="">
    <section className="w-[90%] min-w-[350px] md:w-[80%] lg:w-[85%] 2xl:w-[1200px]">
      <div className="gap-8 w-[100%] flex justify-center items-center">
        <Image
          src={ImageNotFound}
          priority
          alt="Page Not Found Image"
          width={200}
          height={62}
          style={{
            width: "100%",
            height: "auto",
          }}
          unoptimized
          className="w-[100%] max-w-[380px] 2xl:max-w-[580px]"
        />
        <div className="text-4xl text-[#33ffce] transition-all duration-500 ease-out hover:scale-105">
          <Link href="/en/">
            <GoHome title="Home" />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default PageNotFound;
