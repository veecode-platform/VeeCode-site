import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "./home/Hero";
import ClientLogos from "./home/ClientLogos";
import Features from "./home/Features";
import PlatformBenefits from "./home/PlatformBenefits";
import Testimonials from "./home/Testimonials";
import CallToAction from "./home/CallToAction";

export default function Home() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Features />
        <PlatformBenefits />
        <Testimonials />
        <CallToAction
          title="Aumente a visibilidade e alinhamento do seu time"
          subtitle="Adote Backstage pela VeeCode"
        />
      </main>
      <Footer />
    </div>
  );
}
