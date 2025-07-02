import { ScrollTop } from "../ui/ScrollTop";

interface DefaultPageProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children: React.ReactNode;
}

const DefaultPage: React.FC<DefaultPageProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <main className="bg-white flex flex-col overflow-hidden items-center w-[969px] max-w-full md:max-w-[80vw] text-black mx-auto py-25">
      <section>
        <h1 className="text-[55px] font-bold max-md:max-w-full max-md:text-[40px] text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-center text-xl font-normal mt-10 md:mt-[13px] max-md:max-w-full w-[90vw] mx-auto md:w-full">
            {subtitle}
          </p>
        )}
      </section>
      <section className="mt-25 w-[90vw] mx-auto md:w-full">{children}</section>
      <ScrollTop />
    </main>
  );
};

export default DefaultPage;
