import Hero from "./home/Hero";
import ClientLogos from "./home/ClientLogos";
import Features from "./home/Features";
import PlatformBenefits from "./home/PlatformBenefits";
import Testimonials from "./home/Testimonials";
import CallToAction from "./home/CallToAction";

export default function Home() {
  return (
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
  );
}
