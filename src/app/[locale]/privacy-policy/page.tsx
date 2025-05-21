import DefaultPage from "@/components/layout/DefaultPage";
import { routing } from "@/i18n/routing";
import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("privacy-policy.title"),
    description: t("privacy-policy.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });
  return (
    <DefaultPage title={t("title")}>
      <article className="w-full text-xl">
        <div className="mb-5 text-neutral-500">
          <p>{t("datetime")}</p>
        </div>
        <p>
          {t.rich("description", {
            p: (chunks) => <p>{chunks}</p>,
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        {/* DATA STORAGE */}
        <h2 className="text-2xl font-medium my-5">
          {t("items.dataStorage.title")}
        </h2>
        <p>{t("items.dataStorage.description")}</p>
        <p>{t("items.dataStorage.item1")}</p>
        <p>{t("items.dataStorage.item2")}</p>
        <p>{t("items.dataStorage.item3")}</p>
        {/* Use of Data */}
        <h2 className="text-2xl font-medium my-5">
          {t("items.useOfData.title")}
        </h2>
        {t.rich("items.useOfData.description", {
          p: (chunks) => <p>{chunks}</p>,
        })}
      </article>
    </DefaultPage>
  );
}
