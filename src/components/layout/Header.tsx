import React from "react";
import { Button } from "@/components/ui/Button";
import VeeCodeLogo from "../VeeCodeLogo";
import MenuMobile from "./ui/Header-mobile";
import SwitchLanguage from "../ui/SwitchLanguage";
import { getTranslations } from "next-intl/server";
import { PatternComponentProps } from "@/lib/@types/patternComponentProps";
import { ExternalLink, NavigationLink } from "../ui/links";
import VeeCodeLogoMobile from "../VeeCodeLogoMobile";
import { VEECODE_PLATFORM_DEMO } from "@/lib/constants";

const Header: React.FC<PatternComponentProps> = async ({ locale }) => {
  const t = await getTranslations({ locale, namespace: "header" });
  const a = await getTranslations({ locale, namespace: "accessibility" });

  return (
    <header className="flex justify-center items-center self-stretch h-[94px] w-full gap-[40px_100px] flex-wrap bg-neutral-700 px-10 py-5 max-md:max-w-full max-md:px-5 z-[9999999] relative">
      <div className="w-full flex items-center justify-between 2xl:w-[80%]  2xl:mx-auto">
        <NavigationLink href="/">
          <span className="block md:hidden">
            <VeeCodeLogoMobile />
          </span>
          <span className="hidden md:block">
            <VeeCodeLogo />
          </span>
        </NavigationLink>

        <nav className="hidden xl:flex self-stretch min-w-60 items-center gap-10 text-[18px] text-neutral-50 font-normal flex-wrap my-auto max-md:max-w-full">
          <NavigationLink
            href="/product"
            className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)]"
          >
            {t("product")}
          </NavigationLink>
          <NavigationLink
            href="/solutions"
            className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)]"
          >
            {t("solutions")}
          </NavigationLink>
          <NavigationLink
            href="/resources"
            className="text-neutral-50 self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5 hover:text-[rgba(51,255,205,1)]"
          >
            {t("resources")}
          </NavigationLink>
          <NavigationLink
            href="/comparison"
            className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)]"
          >
            {t("comparison")}
          </NavigationLink>

          <ExternalLink
            description={a("external-links.demo")}
            href={VEECODE_PLATFORM_DEMO}
            event="demo"
          >
            <Button aria-label={t("demo")} variant="secondary" size="default">
              {t("demo")}
            </Button>
          </ExternalLink>
        </nav>
        <SwitchLanguage />
        <MenuMobile />
      </div>
    </header>
  );
};

export default Header;
