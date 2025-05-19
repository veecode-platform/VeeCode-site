import { HeroSection } from "./components/HeroSection";
import { PluginsSection } from "./components/PluginsSection";

export default function ResourcesPage() {
  return (
    <main className="self-center flex w-full max-w-[1268px] flex-col items-stretch px-4 my-10">
      <HeroSection />
      <PluginsSection />
    </main>
  );
}
