import Image from "next/image";
import Link from "next/link";
import { RiFireLine, RiHandHeartLine, RiVerifiedBadgeLine } from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const FEATURES = [
  { icon: <RiFireLine />,          label: "Authentic Vedic Rituals"        },
  { icon: <RiVerifiedBadgeLine />, label: "Experienced & Verified Pandits"  },
  { icon: <RiHandHeartLine />,     label: "Convenient Online Booking"       },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24" aria-label="About Us">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">

          {/* LEFT image */}
          <AnimateOnScroll variant="fade-right" className="relative flex-shrink-0 w-full max-w-[340px] lg:max-w-[400px]">
            <div className="overflow-hidden w-full" style={{ borderRadius: "180px 180px 16px 16px" }}>
              <Image src="/home/home_about_us.webp" alt="Golden diya lamp with rose petals" width={400} height={480} className="w-full h-auto object-cover" priority />
            </div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 lg:left-1 lg:translate-x-0 flex items-center gap-3 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] px-4 py-3 min-w-[190px]">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-lg">
                <RiFireLine size={25} />
              </span>
              <div>
                <p className="text-[12px] font-medium text-[#4b5563] leading-tight">Trusted by</p>
                <p className="text-[14px] mt-1 font-semibold text-[#FF6A00] leading-tight">Families Across India</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* RIGHT copy */}
          <div className="flex-1 text-center lg:text-left">
            <AnimateOnScroll variant="fade-up" delay={0}>
              <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.1em] text-[#FF6A00]">About Us</p>
              <h2 className="text-[26px] sm:text-[26px] lg:text-[28px] font-semibold leading-tight text-[#1a1a1a]">
                Your Faith, <span className="text-[#FF6A00]">Our Responsibility</span>
              </h2>
              <div className="mt-3 mb-5 flex items-center gap-2 justify-center lg:justify-start">
                <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={120}>
              <p className="text-[14px] font-medium leading-relaxed text-[#4b5563] max-w-[600px] mx-auto lg:mx-0">
                At Puja at Home, we connect you with experienced and knowledgeable Pandits who follow authentic Vedic rituals with devotion and sincerity.
              </p>
              <p className="mt-4 text-[14px] font-medium leading-relaxed text-[#4b5563] max-w-[480px] mx-auto lg:mx-0">
                Our mission is to make spiritual ceremonies simple, meaningful, and accessible for every devotee, wherever you are.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={220}>
              <ul className="mt-6 flex flex-col items-center lg:items-start gap-3">
                {FEATURES.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[#FF6A00] text-[18px] leading-none flex-shrink-0">{f.icon}</span>
                    <span className="text-[14px] font-semibold text-[#FF6A00]">{f.label}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={320}>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link href="/about" className="inline-flex items-center justify-center rounded-md bg-[#FF6A00] px-7 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#e55f00]">
                  Know More About Us
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
