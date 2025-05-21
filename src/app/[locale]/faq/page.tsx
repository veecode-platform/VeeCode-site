import DefaultPage from "@/components/layout/DefaultPage";
import FaqList from "@/components/ui/FaqList";
import { routing } from "@/i18n/routing";
import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("faq.title"),
    description: t("faq.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });

  return (
    <DefaultPage title={t("title")} subtitle={t("subtitle")}>
      <FaqList />
    </DefaultPage>
  );
}
