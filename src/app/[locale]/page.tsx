import Hero from "./home/Hero";
import ClientLogos from "./home/ClientLogos";
import Features from "./home/Features";
import PlatformBenefits from "./home/PlatformBenefits";
import Testimonials from "./home/Testimonials";
import CallToAction from "./home/CallToAction";
import { PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Chatbot } from "@/components/ui/Chatbot";

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const a = await getTranslations({ locale, namespace: "accessibility" });

  const featureCards = [
    {
      id: 1,
      title: t("feature.card1.title"),
      description: t("feature.card1.description"),
    },
    {
      id: 2,
      title: t("feature.card2.title"),
      description: t("feature.card2.description"),
    },
    {
      id: 3,
      title: t("feature.card3.title"),
      description: t("feature.card3.description"),
    },
  ];

  const benefitsCards = [
    {
      id: 1,
      title: t("benefits.card1.title"),
      description: t("benefits.card1.description"),
    },
    {
      id: 2,
      title: t("benefits.card2.title"),
      description: t("benefits.card2.description"),
    },
    {
      id: 3,
      title: t("benefits.card3.title"),
      description: t("benefits.card3.description"),
    },
    {
      id: 4,
      title: t("benefits.card4.title"),
      description: t("benefits.card4.description"),
    },
    {
      id: 5,
      title: t("benefits.card5.title"),
      description: t("benefits.card5.description"),
    },
    {
      id: 6,
      title: t("benefits.card6.title"),
      description: t("benefits.card6.description"),
    },
  ];

  const testimonialCards = [
    {
      id: 1,
      quote: t("testimonials.testimonial-card1.quote"),
      author: t("testimonials.testimonial-card1.author"),
      role: t("testimonials.testimonial-card1.role"),
    },
    {
      id: 2,
      quote: t("testimonials.testimonial-card2.quote"),
      author: t("testimonials.testimonial-card2.author"),
      role: t("testimonials.testimonial-card2.role"),
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center py-35 gap-40">
      <Hero
        title={t("hero.title")}
        description={t("hero.description")}
        buttonLabel1={t("hero.buttons.button1.label")}
        buttonLabel2={t("hero.buttons.button2.label")}
        descriptionExternalLink={a("external-links.docs")}
      />
      <ClientLogos />
      <Features
        label={t("feature.label")}
        title={t("feature.title")}
        description={t("feature.description")}
        buttonLabel1={t("feature.buttons.button1.label")}
        buttonLabel2={t("feature.buttons.button2.label")}
        descriptionExternalLink={a("external-links.docs")}
        cards={featureCards}
      />
      <PlatformBenefits
        title={
          <>
            {t.rich("benefits.title", {
              strong: (chunk) => (
                <strong className="text-[rgba(51,255,206,1)]">{chunk} </strong>
              ),
            })}
          </>
        }
        buttonLabel={t("benefits.button.label")}
        cards={benefitsCards}
      />
      <Testimonials cards={testimonialCards} />
      <CallToAction
        title={t("call-to-action.title")}
        subtitle={t("call-to-action.description")}
        buttonLabel1={t("call-to-action.buttons.button1.label")}
        buttonLabel2={t("call-to-action.buttons.button2.label")}
        descriptionExternalLink={a("external-links.docs")}
      />
      <Chatbot />
    </main>
  );
}
