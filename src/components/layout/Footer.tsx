import React from "react";
import VeeCodeLogo from "../VeeCodeLogo";
import { PatternComponentProps } from "@/lib/@types/patternComponentProps";
import { getTranslations } from "next-intl/server";
import { ExternalLink, NavigationLink } from "../ui/links";

const Footer: React.FC<PatternComponentProps> = async ({ locale }) => {
  const t = await getTranslations({ locale, namespace: "footer" });
  const a = await getTranslations({ locale, namespace: "accessibility" });

  return (
    <footer className="items-center self-stretch flex w-full flex-col bg-black max-md:max-w-full max-md:px-5 pt-20 pb-10 px-8">
      <div className="w-full max-w-[1204px] max-md:max-w-full">
        <div className="w-full gap-[60px] pb-28 max-md:max-w-full max-md:pb-[100px]">
          <div className="flex flex-col content-center justify-center align-middle md:flex-row text-center md:content-start md:align-top md:justify-start flex-wrap w-full gap-8 max-md:max-w-full">
            <div className="md:min-w-60 flex justify-center items-center md:items-start md:justify-start md:align-top md:mt-[-100px]">
              <VeeCodeLogo width={207} height={85} />
            </div>
            <div className="min-w-40 flex justify-center flex-col text-base text-white flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch md:text-left gap-2 font-bold whitespace-nowrap leading-[1.2]">
                {t("about-title")}
              </h3>
              <nav className="flex justify-center flex-col font-medium text-center leading-none gap-2 mt-4">
                <NavigationLink
                  href="/how-it-works"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("about-option1")}
                </NavigationLink>
                <NavigationLink
                  href="/support"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("about-option2")}
                </NavigationLink>
                <ExternalLink
                  href="https://github.com/vfipaas/safira-support/discussions"
                  description={a("external-links.github")}
                  styles="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("about-option3")}
                </ExternalLink>
                <NavigationLink
                  href="/"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("about-option4")}
                </NavigationLink>
              </nav>
            </div>
            <div className="min-w-40 justify-center flex flex-col flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch  md:text-left gap-2 text-base text-white font-bold whitespace-nowrap leading-[1.2]">
                {t("resources-title")}
              </h3>
              <nav className="justify-center flex flex-col gap-2 mt-4">
                <ExternalLink
                  href="#documentation"
                  description={a("external-links.docs")}
                  styles="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("resources-option1")}
                </ExternalLink>
                <ExternalLink
                  description={a("external-links.vkdr")}
                  href="https://docs.platform.vee.codes/vkdr/intro/"
                  styles="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("resources-option2")}
                </ExternalLink>
                <ExternalLink
                  description={a("external-links.docs")}
                  href="https://docs.platform.vee.codes/devportal/intro/"
                  styles="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("resources-option3")}
                </ExternalLink>
                <NavigationLink
                  href="/resources"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("resources-option4")}
                </NavigationLink>
              </nav>
            </div>
            <div className="min-w-40 justify-center flex flex-col text-base text-white flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch md:text-left gap-2 font-bold whitespace-nowrap leading-[1.2]">
                {t("more-title")}
              </h3>
              <nav className="justify-center flex flex-col font-medium text-center leading-none gap-2 mt-4">
                <ExternalLink
                  description={a("external-links.blog")}
                  href="https://blog.platform.vee.codes/"
                  styles="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("more-option1")}
                </ExternalLink>
                <NavigationLink
                  href="/"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("more-option2")}
                </NavigationLink>
                <NavigationLink
                  href="/"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("more-option3")}
                </NavigationLink>
                <NavigationLink
                  href="/"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  {t("more-option4")}
                </NavigationLink>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex min-h-px w-full flex-col items-stretch justify-center max-md:max-w-full">
          <div className="border min-h-px w-full bg-[#D2D5E2] border-neutral-700 border-solid max-md:max-w-full" />
        </div>
        <div className="self-stretch w-full content-center flex-wrap gap-[24px_var(--inline-2xl,24px)] text-sm text-white font-normal leading-[1.4] py-[20px] max-md:max-w-full text-center">
          <p>
            {" "}
            Copyright &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
