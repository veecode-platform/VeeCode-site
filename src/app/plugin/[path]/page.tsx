import { redirect } from "next/navigation";
import { PageProps } from "@/lib/@types/pageProps";
import { getAllPlugins } from "@/lib/getPluginsData";

type Props = {
  params: PageProps["params"] & { path: string };
};

export async function generateStaticParams() {
  const plugins = getAllPlugins("en");
  return plugins.map((plugin) => ({
    locale: "en",
    path: plugin.path,
  }));
}

export default async function PluginPageRedirect({ params }: Props) {
  redirect(`/en/plugin/${params.path}`);
}
