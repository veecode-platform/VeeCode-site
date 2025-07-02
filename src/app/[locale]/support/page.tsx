import DefaultPage from "@/components/layout/DefaultPage";
import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { CHECK_ICON } from "@/lib/constants";
import SupportSection from "./components/SupportSection";

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("support.title"),
    description: t("support.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function SupportPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "supportOptions" });

  const pricingCards = [
    {
      id: 1,
      title: t("body.benefits.card1.title"),
      description: t.rich("body.benefits.card1.description", {
        p: (chunks) => <p>{chunks}</p>,
      }),
      subtitle: t("body.benefits.card1.subtitle"),
      features: [
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card1.benefits-list.option1"),
        },
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card1.benefits-list.option2"),
        },
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card1.benefits-list.option3"),
        },
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card1.benefits-list.option4"),
        },
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card1.benefits-list.option5"),
        },
      ],
      buttonText: t("body.benefits.card1.button.label"),
    },
    {
      id: 2,
      title: t("body.benefits.card2.title"),
      description: t.rich("body.benefits.card2.description", {
        p: (chunks) => <p>{chunks}</p>,
      }),
      subtitle: t("body.benefits.card2.subtitle"),
      features: [
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card2.benefits-list.option1"),
        },
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card2.benefits-list.option2"),
        },
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card2.benefits-list.option3"),
        },
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card2.benefits-list.option4"),
        },
        {
          icon: CHECK_ICON,
          text: t("body.benefits.card2.benefits-list.option5"),
        },
      ],
      buttonText: t("body.benefits.card2.button.label"),
    },
  ];

  return (
    <DefaultPage title={t("title")} subtitle={t("subtitle")}>
      <div className="mb-8 w-full flex flex-col justify-start align-center gap-4 md:mt-[-40px]">
        <p className="text-xl text-center md:text-left">
          {t("body.description")}
        </p>
        {t.rich("body.reactive-support", {
          p: (chunks) => (
            <p className="text-xl text-center md:text-left">{chunks}</p>
          ),
          strong: (chunk) => <strong>{chunk} </strong>,
        })}
        {t.rich("body.proactive-support", {
          p: (chunks) => (
            <p className="text-xl text-center md:text-left">{chunks}</p>
          ),
          strong: (chunk) => <strong>{chunk} </strong>,
        })}
      </div>
      <SupportSection cards={pricingCards} />
    </DefaultPage>
  );
}
