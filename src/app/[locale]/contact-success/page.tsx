import { Button } from "@/components/ui/Button";
import { NavigationLink } from "@/components/ui/links";
import { routing } from "@/i18n/routing";
import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

const SuccessImage = `/assets/icons/success.png`;

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("contact-success.title"),
    description: t("contact-success.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactSuccessPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "feedback" });

  return (
    <main className="self-center flex w-full max-w-[1268px] flex-col items-stretch px-4 my-10">
      <section className="w-full flex justify-center items-center flex-col p-[160px] bg-neutral-50 rounded-md">
        <div className="w-[25%] flex justify-content items-center">
          <Image
            src={SuccessImage}
            alt="Success Animation"
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
          {t.rich("contact.success", {
            p: (chunks) => <p>{chunks}</p>,
          })}
        </div>
        <div className="mt-12 w-[50%] flex justify-around items-center">
          <NavigationLink href="/">
            <Button aria-label={t("buttonLabelSuccess")}>
              {t("buttonLabelSuccess")}
            </Button>
          </NavigationLink>
        </div>
      </section>
    </main>
  );
}
