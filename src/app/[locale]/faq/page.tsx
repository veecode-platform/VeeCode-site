import DefaultPage from "@/components/layout/DefaultPage";
import FaqList from "@/components/ui/FaqList";
import { PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";

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
