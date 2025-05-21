import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import { HeroSection } from "./components/HeroSection";
import { PluginsSection } from "./components/PluginsSection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ScrollTop } from "@/components/ui/ScrollTop";

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("resources.title"),
    description: t("resources.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ResourcesPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "resources" });

  const pluginsCards = [
    {
      icon: "https://veecode-platform.github.io/support/imgs/logo_2.svg",
      title: "Github Workflows",
      path: "github-workflows",
      tags: [{ name: "CI-CD" }, { name: "Github" }],
      description: t("github-workflows.description"),
    },
    {
      icon: "https://veecode-platform.github.io/support/imgs/logo_1.svg",
      title: "Gitlab Pipelines",
      path: "gitlab-pipelines",
      tags: [{ name: "CI-CD" }, { name: "Gitlab" }],
      description: t("gitlab-pipelines.description"),
    },
    {
      icon: "https://veecode-platform.github.io/support/imgs/logo_3.svg",
      title: "Kong Service Manager",
      path: "kong-service-manager",
      tags: [{ name: "Kong" }, { name: "API Gateway" }, { name: "Services" }],
      description: t("kong-service-manager.description"),
    },
    {
      icon: "https://veecode-platform.github.io/support/imgs/logo_4.svg",
      title: "Kubernetes GPT Analyzer",
      path: "kubernetes-gpt-analyzer",
      tags: [{ name: "Kubernetes" }, { name: "IA" }, { name: "Monitoring" }],
      description: t("kubernetes-gpt-analyzer.description"),
    },
    {
      icon: "https://veecode-platform.github.io/support/imgs/logo_5.svg",
      title: "Infracost",
      path: "infracost",
      tags: [{ name: "Finops" }, { name: "Infracost" }, { name: "Estimate" }],
      description: t("infracost.description"),
    },
  ];

  return (
    <main className="self-center flex w-full max-w-[1268px] flex-col items-stretch px-4 my-10">
      <HeroSection title={t("title")} description={t("description")} />
      <PluginsSection pluginsCards={pluginsCards} />
      <ScrollTop />
    </main>
  );
}
