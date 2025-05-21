import DefaultPage from "@/components/layout/DefaultPage";
import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CardItem } from "./components/CardItem";
import { routing } from "@/i18n/routing";

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("how-it-works.title"),
    description: t("how-it-works.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HowItWorksPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "howItWorks" });

  const howItWorksCards = [
    {
      id: 1,
      title: t("options.option1.title"),
      description: t.rich("options.option1.description", {
        p: (chunks) => <p>{chunks}</p>,
      }),
    },
    {
      id: 2,
      title: t("options.option2.title"),
      description: t.rich("options.option2.description", {
        p: (chunks) => <p>{chunks}</p>,
      }),
    },
    {
      id: 4,
      title: t("options.option3.title"),
      description: t.rich("options.option3.description", {
        p: (chunks) => <p>{chunks}</p>,
      }),
    },
    {
      id: 5,
      title: t("options.option4.title"),
      description: t.rich("options.option4.description", {
        p: (chunks) => <p>{chunks}</p>,
      }),
    },
    {
      id: 6,
      title: t("options.option5.title"),
      description: t.rich("options.option5.description", {
        p: (chunks) => <p>{chunks}</p>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 7,
      title: t("options.option6.title"),
      description: t.rich("options.option6.description", {
        p: (chunks) => <p>{chunks}</p>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 8,
      title: t("options.option8.title"),
      description: t.rich("options.option8.description", {
        p: (chunks) => <p>{chunks}</p>,
      }),
    },
  ];

  return (
    <DefaultPage title={t("title")} subtitle={t("subtitle")}>
      <div className="w-full flex flex-col gap-10">
        {howItWorksCards.map((card) => {
          const cardImg = `/assets/howitworks/icon${card.id}.svg`;
          return (
            <CardItem key={card.id} image={cardImg} title={card.title}>
              {card.description}
            </CardItem>
          );
        })}
      </div>
    </DefaultPage>
  );
}
