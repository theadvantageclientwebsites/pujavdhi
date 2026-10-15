import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import ContactFeaturesBar from "@/components/sections/ContactFeaturesBar";

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        headingBlack="Contact "
        headingOrange="Us"
        subtitle="We're Here To Help You"
        description={`Have a question or need assistance with booking pooja?\nOur team is here to help you with love and devotion.`}
        image="/about/about_us_hero.png"
        imageAlt="Pandit performing Vedic puja"
      />
      <ContactSection />
      <ContactFeaturesBar />
    </>
  );
}
