import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { poppins } from "../../../public/font";
import { routing } from "@/i18n/routing";
import { LayoutProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { GoogleAnalytics } from "@next/third-parties/google";

const thumbnailImageUrl =
  "https://cdn.platform.vee.codes/landing-page/thumbnail.png";

//function to generate the routes for all the locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("home.title"),
    description: t("home.description"),
    keywords: ["backstage", "idp", "platform", "veecode"],
    openGraph: {
      title: t("home.title"),
      images: thumbnailImageUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LayoutProps>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${poppins.className} antialiased`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID!} />
        <NextIntlClientProvider>
          <div className="bg-white flex flex-col overflow-hidden items-stretch min-h-screen">
            <Header locale={locale} />
            {children}
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
