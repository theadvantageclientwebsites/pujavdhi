import PageHero from "@/components/sections/PageHero";
import AboutMissionSection from "@/components/sections/AboutMissionSection";
import AboutStorySection from "@/components/sections/AboutStorySection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import RefundPolicySection from "@/components/sections/RefundPolicySection";
import RefundDetailsSection from "@/components/sections/RefundDetailsSection";
import AboutBanner from "@/components/sections/AboutBanner";

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        headingBlack="About "
        headingOrange="Us"
        subtitle="Connecting Devotees with Divine Traditions"
        description="At Puja at Home, we make sacred rituals simple, meaningful and accessible for every devotee, wherever you are."
        image="/about/about_us_hero.png"
        imageAlt="Pandit performing Vedic puja"
      />
      <AboutMissionSection />
      <AboutStorySection />
      <WhyChooseSection />
      <RefundPolicySection />
      <RefundDetailsSection />
      <AboutBanner />
    </>
  );
}
