import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PluginContent } from "../../ui/plugin/PluginContent";
import { getAllPlugins, getPluginByPath } from "@/lib/getPluginsData";

type Props = {
  params: Promise<{ locale: Locale; path: string }>;
};

export async function generateMetadata(props: Props) {
  const { locale, path } = await props.params;
  const plugin = getPluginByPath(locale, path);

  return {
    title: `VeeCode Platform | ${plugin.title ?? path}`,
    description:
      plugin.desc ||
      "Choose the technology that is most compatible with your business.",
  };
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) => {
    const plugins = getAllPlugins(locale);
    return plugins.map((plugin) => ({
      locale,
      path: plugin.path,
    }));
  });
}

export default async function PluginDocPage(props: Props) {
  const { locale, path } = await props.params;
  // Enable static rendering
  setRequestLocale(locale);

  const pluginData = getPluginByPath(locale, path);

  return (
    <section className="self-center flex w-full max-w-[1268px] flex-col items-stretch px-4">
      <section className="w-full flex justify-center items-center flex-col p-[160px] text-black rounded-md">
        <PluginContent pluginData={pluginData} />
      </section>
    </section>
  );
}
