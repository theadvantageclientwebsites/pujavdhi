import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TrustBanner from "@/components/sections/TrustBanner";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TrustBanner />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
