/* eslint-disable @typescript-eslint/no-explicit-any */
import DefaultPage from "@/components/layout/DefaultPage";
import FaqList from "@/components/ui/FaqList";
import { ExternalLink } from "@/components/ui/links";
import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { FormElement } from "../ui/contact-us/FormElement";
import { routing } from "@/i18n/routing";

const flowImage = `/assets/icons/contact_form_img.svg`;

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("contact-us.title"),
    description: t("contact-us.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactUsPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "contactUs" });

  return (
    <DefaultPage
      title={t("title")}
      subtitle={
        <>
          {t.rich("subtitle", {
            strong: (chunks: any) => (
              <strong>
                <ExternalLink
                  description="VeeCode email"
                  href="mailto: platform-sales@vee.codes"
                  styles="text-teal-400"
                >
                  {chunks}
                </ExternalLink>
              </strong>
            ),
          })}
        </>
      }
    >
      <section className="w-full flex justify-center items-center flex-col">
        <div className="py-4 px-2 flex justify-center items-center flex-col w-[95%] md:w-[90%] lg:py-4 lg:w-full lg:flex-row lg:justify-evenly lg:items-start bg-neutral-50">
          <div className="hidden lg:max-w-[50%] lg:flex lg:justify-center lg:items-center lg:flex-col">
            <Image
              src={flowImage}
              alt="contact us image"
              width={653}
              height={653}
              style={{
                width: "100%",
                height: "auto",
              }}
              unoptimized
            />
          </div>

          <div className="w-full flex justify-center items-center md:w-[80%] lg:[40%]">
            <FormElement type="CONTACT-US" company />
          </div>
        </div>
        <div className="mt-32 w-full flex justify-center items-center flex-col">
          <div>
            <h1 className="text-teal-400 mb-8 text-2xl text-center">
              {t("faqSection.title")}
            </h1>
            <h2 className="hidden ">{t("faqSection.subtitle")}</h2>
          </div>
          <FaqList />
        </div>
      </section>
    </DefaultPage>
  );
}
