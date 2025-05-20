import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "en",
  localeCookie: false,
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/product": "/product",
    "/solutions": "/solutions",
    "/resources": "/resources",
    "/plugin/[path]": "/plugin/[path]",
    "/comparison": "/comparison",
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
