import Image from "next/image";
import {
  RiFireLine,
  RiVerifiedBadgeLine,
  RiCursorLine,
  RiHeartLine,
} from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import StatsCard from "@/components/ui/StatsCard";
import { HERO_STATS } from "@/components/sections/HeroSection";

const MISSION_FEATURES = [
  { icon: <RiFireLine />,          label: "Authentic\nVedic Rituals"         },
  { icon: <RiVerifiedBadgeLine />, label: "Experienced &\nVerified Pandits"  },
  { icon: <RiCursorLine />,        label: "Convenient\nOnline Booking"       },
  { icon: <RiHeartLine />,         label: "Performed with\nDevotion & Care"  },
];

export default function AboutMissionSection() {
  return (
    <>
      {/* ── Mission section ── */}
      <section className="w-full bg-white py-16 lg:py-24" aria-label="Our Mission">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">

            {/* LEFT: arch image + trusted badge */}
            <AnimateOnScroll variant="fade-right" className="relative flex-shrink-0 w-full max-w-[340px] lg:max-w-[400px]">
              <div className="overflow-hidden w-full" style={{ borderRadius: "180px 180px 16px 16px" }}>
                <Image
                  src="/home/home_about_us.webp"
                  alt="Golden diya lamp with rose petals"
                  width={400}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 lg:left-1 lg:translate-x-0 flex items-center gap-3 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] px-4 py-3 min-w-[190px]">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00]">
                  <RiFireLine size={22} />
                </span>
                <div>
                  <p className="text-[12px] font-medium text-[#4b5563] leading-tight">Trusted by</p>
                  <p className="text-[14px] mt-1 font-semibold text-[#FF6A00] leading-tight">Families Across India</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* RIGHT: copy */}
            <div className="flex-1 text-center lg:text-left">

              <AnimateOnScroll variant="fade-up" delay={0}>
                <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.1em] text-[#FF6A00]">
                  Our Mission
                </p>
                <h2 className="text-[26px] sm:text-[28px] lg:text-[32px] font-bold leading-tight text-[#1a1a1a]">
                  Your Faith,{" "}
                  <span className="text-[#FF6A00]">Our Responsibility</span>
                </h2>
                <div className="mt-3 mb-5 flex items-center gap-2 justify-center lg:justify-start">
                  <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-up" delay={120}>
                <p className="text-[14px] font-medium leading-relaxed text-[#4b5563] max-w-[520px] mx-auto lg:mx-0">
                  Our mission is to connect you with experienced and knowledgeable Pandits who follow authentic Vedic rituals with devotion and sincerity.
                </p>
                <p className="mt-4 text-[14px] font-medium leading-relaxed text-[#4b5563] max-w-[520px] mx-auto lg:mx-0">
                  We understand the significance of every ritual and ensure it is performed with utmost care, so you and your family receive divine blessings and peace of mind.
                </p>
              </AnimateOnScroll>

              {/* 4 icon feature blocks */}
              <AnimateOnScroll variant="fade-up" delay={220}>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center lg:justify-items-start">
                  {MISSION_FEATURES.map((f, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 text-center">
                      {/* Orange circle icon */}
                      <span className="w-12 h-12 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-[20px]">
                        {f.icon}
                      </span>
                      {/* Label — preserve line breaks */}
                      <p className="text-[12px] font-semibold text-[#1a1a1a] leading-snug whitespace-pre-line">
                        {f.label}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* ── Reused StatsCard from homepage ── */}
      <div className="bg-white pb-16 lg:pb-20">
        <AnimateOnScroll variant="fade-up">
          <div className="mx-auto max-w-4xl px-6 lg:px-16">
            <StatsCard stats={HERO_STATS} />
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
