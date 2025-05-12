import { HeroSection } from "./components/HeroSection";
import { PluginsSection } from "./components/PluginsSection";

export default function ResourcesPage() {
  return (
    <main className="self-center flex w-full max-w-[1268px] flex-col items-stretch px-4 bg-[rgba(30,30,30,0.90)]">
      <HeroSection />
      <PluginsSection />
    </main>
  );
}
