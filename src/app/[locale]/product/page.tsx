import React from "react";
import FeatureSection from "./components/FeatureSection";
import { getTranslations } from "next-intl/server";
import { PageProps } from "@/lib/@types/pageProps";
// import NewsletterForm from "../ui/product/NewsletterForm";
// import ContactForm from "../ui/product/ContactForm";

const Icon1 = "/assets/product/icon1.svg";
const Icon2 = "/assets/product/icon2.svg";
const Icon3 = "/assets/product/icon3.svg";
const Icon4 = "/assets/product/icon4.svg";
const Icon5 = "/assets/product/icon5.svg";

export default async function ProductPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "product" });

  // Feature data for the left column
  const leftFeatures = [
    {
      id: 1,
      icon: Icon1,
      title: t("card1.title"),
      description: t("card1.description"),
      altText: t("card1.title"),
    },
    {
      id: 2,
      icon: Icon2,
      title: t("card3.title"),
      description: t("card3.description"),
      altText: t("card3.title"),
    },
    {
      id: 3,
      icon: Icon3,
      title: t("card5.title"),
      description: t("card5.description"),
      altText: t("card5.title"),
    },
  ];

  // Feature data for the right column
  const rightFeatures = [
    {
      id: 4,
      icon: Icon4,
      title: t("card2.title"),
      description: t("card2.description"),
      altText: t("card2.title"),
    },
    {
      id: 5,
      icon: Icon5,
      title: t("card4.title"),
      description: t("card4.description"),
      altText: t("card4.title"),
    },
  ];

  return (
    <main className="bg-white flex flex-col overflow-hidden items-stretch">
      <FeatureSection
        leftFeatures={leftFeatures}
        rightFeatures={rightFeatures}
      />
    </main>
  );
}
