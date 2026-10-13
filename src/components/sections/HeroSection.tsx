import Image from "next/image";
import Link from "next/link";
import {
  RiGroupLine,
  RiUserStarLine,
  RiStarLine,
  RiHeadphoneLine,
} from "react-icons/ri";
import StatsCard, { type StatItem } from "@/components/ui/StatsCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="flex-shrink-0 mt-[2px]">
      <circle cx="9" cy="9" r="9" fill="#FF6A00" />
      <path d="M5 9.5l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const HERO_STATS: StatItem[] = [
  { icon: <RiGroupLine />,     value: "1000+",    label: "Pooja Performed"  },
  { icon: <RiUserStarLine />,  value: "Verified", label: "Pandits"          },
  { icon: <RiStarLine />,      value: "5 Star",   label: "Customer Rating"  },
  { icon: <RiHeadphoneLine />, value: "Support",  label: "Always Available" },
];

const FEATURES = [
  "Experienced & Verified Pandits",
  "Experienced & Verified Pandits",
  "Convenient Online Booking",
];

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full bg-[#FDF3EB]" aria-label="Hero" style={{ minHeight: "460px" }}>

        {/* Mandala */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="select-none absolute -right-20 top-1/2 -translate-y-1/2 z-10">
            <Image src="/home/hero_bg.png" alt="" width={620} height={620} className="opacity-50 object-contain" priority />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-16 lg:px-24 pt-14 pb-32 md:pb-36">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-0">

            {/* LEFT copy */}
            <div className="flex-1 text-center lg:text-left lg:pr-10">
              <AnimateOnScroll variant="fade-up" delay={0}>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
                  Puja Beyond Borders
                </p>
                <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold leading-tight text-[#1a1a1a]">
                  Divine Rituals for a Better<br />
                  <span className="text-[#FF6A00]">Tomorrow</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-up" delay={120}>
                <p className="mt-4 max-w-[380px] mx-auto lg:mx-0 text-[14px] font-medium leading-relaxed text-[#4b5563]">
                  Experience the power of Vedic rituals, performed with devotion and authenticity — from the sacred land of India, for you, anywhere in the world.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-up" delay={220}>
                <ul className="mt-5 flex flex-col items-center lg:items-start gap-3">
                  {FEATURES.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px] font-medium text-[#4b5563]">
                      <CheckIcon /><span>{f}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-up" delay={320}>
                <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link href="/puja-services" className="inline-flex items-center justify-center rounded-md bg-[#FF6A00] px-6 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#e55f00]">
                    Book Pooja Now
                  </Link>
                  <Link href="/puja-services" className="inline-flex items-center justify-center rounded-md border border-[#FF6A00] bg-white px-6 py-2.5 text-[14px] font-semibold text-[#FF6A00] transition-colors duration-200 hover:bg-[#FFF0E6]">
                    Explore Services
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            {/* RIGHT image */}
            <AnimateOnScroll variant="fade-left" delay={100} className="flex-shrink-0 flex items-center justify-center lg:w-[48%] relative z-20">
              <Image
                src="/home/home_hero_section.webp"
                alt="Family performing Vedic puja"
                width={420} height={380} priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] h-auto object-contain drop-shadow-xl"
              />
            </AnimateOnScroll>

          </div>
        </div>

        {/* Floating StatsCard */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-[999]" style={{ width: "min(92%, 900px)" }}>
          <AnimateOnScroll variant="fade-up" delay={400}>
            <StatsCard stats={HERO_STATS} />
          </AnimateOnScroll>
        </div>
      </section>

      <div className="pt-20 sm:pt-24" />
    </>
  );
}
