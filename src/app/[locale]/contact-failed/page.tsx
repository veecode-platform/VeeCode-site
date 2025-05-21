import { Button } from "@/components/ui/Button";
import { NavigationLink } from "@/components/ui/links";
import { PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

const FailedImage = `/assets/icons/failed.png`;

export default async function ContactFailedPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "feedback" });

  return (
    <main className="self-center flex w-full max-w-[1268px] flex-col items-stretch px-4 my-10">
      <section className="w-full flex justify-center items-center flex-col p-[160px] bg-neutral-50 rounded-md">
        <div className="w-[25%] flex justify-content items-center">
          <Image
            src={FailedImage}
            alt="Failed Animation"
            width={200}
            height={62}
            style={{
              width: "100%",
              height: "auto",
            }}
            unoptimized
            className="w-full"
          />
        </div>
        <div className="mt-16 text-neutral-900 text-xl text-center font-medium xl:w-[80%] xl:mx-auto">
          {t.rich("contact.error", {
            p: (chunks) => <p>{chunks}</p>,
          })}
        </div>
        <div className="mt-12 w-[50%] flex justify-around items-center">
          <NavigationLink href="/contact-us">
            <Button aria-label={t("buttonLabelError")}>
              {t("buttonLabelError")}
            </Button>
          </NavigationLink>
        </div>
      </section>
    </main>
  );
}
