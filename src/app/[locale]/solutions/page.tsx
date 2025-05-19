import CTASection from "../ui/solutions/CTASection";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";

export default function SolutionsPage() {
  return (
    <main className="bg-white flex flex-col overflow-hidden items-center">
      <HeroSection
        title="Alcance novos níveis de eficiência"
        subtitle="Conte com a VeeCode Platform para escalar seu negócio"
      />
      <ServicesSection />
      <PricingSection />
      <CTASection
        title="Precisa de ajuda para decidir?"
        description="Toda empresa tem suas necessidades específicas. Estamos aqui para te ajudar a escolher a melhor trilha."
        buttonText="Fale agora com nosso time de vendas"
      />
    </main>
  );
}
