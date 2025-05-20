import { PageProps } from "@/lib/@types/pageProps";
import ComparisonTable from "./components/ComparisonTable";
import CTASection from "./components/CTASection";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ComparisonPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "comparison" });

  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <ComparisonTable
        title={t("title")}
        subtitle={t("subtitle")}
        description={t.rich("description", { p: (chunks) => <p>{chunks}</p> })}
        tableTitle={t("table-title")}
      />
      <CTASection
        title={t("cta-section.title")}
        description={t("cta-section.description")}
        buttonLabel={t("cta-section.button.label")}
      />
    </div>
  );
}
