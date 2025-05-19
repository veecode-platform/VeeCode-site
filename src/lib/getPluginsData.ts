import pluginsData from "../data/plugins/plugins.json";
import { IPlugin } from "./@types/plugin";

export function getAllPlugins(locale: string) {
  if (locale === "pt") return pluginsData.pt;
  return pluginsData.en as IPlugin[];
}

export function getPluginByPath(locale: string, path: string) {
  const AllPlugins = getAllPlugins(locale);
  return AllPlugins.find((plugin) => plugin.path === path) as IPlugin;
}
