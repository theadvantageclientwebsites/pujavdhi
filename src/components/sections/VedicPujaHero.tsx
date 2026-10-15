import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightSLine,
  RiUserStarLine,
  RiLeafLine,
  RiCalendarCheckLine,
  RiTimerLine,
} from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const MINI_STATS = [
  { icon: <RiUserStarLine />,      label: "Verified Pandits"    },
  { icon: <RiLeafLine />,          label: "Authentic Rituals"   },
  { icon: <RiCalendarCheckLine />, label: "Hassle-free Booking" },
  { icon: <RiTimerLine />,         label: "Timely Performance"  },
];

export default function VedicPujaHero() {
  return (
    <section
      className="relative w-full bg-[#FDF3EB]"
      aria-label="Vedic Puja Services"
      style={{ minHeight: "420px" }}
    >
      {/* Mandala — clipped so it doesn't cause scrollbar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="select-none absolute -right-20 top-1/2 -translate-y-1/2 z-0">
          <Image src="/home/hero_bg.png" alt="" width={520} height={520} className="opacity-40 object-contain" priority />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-16 lg:px-24 pt-12 pb-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-0">

          {/* ── LEFT copy ── */}
          <div className="flex-1 text-center lg:text-left lg:pr-10">

            <AnimateOnScroll variant="fade-up" delay={0}>
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center lg:justify-start gap-1 mb-4 text-[13px]" aria-label="Breadcrumb">
                <Link href="/" className="text-[#FF6A00] font-medium hover:underline">Home</Link>
                <RiArrowRightSLine className="text-[#999] text-[15px]" />
                <Link href="/puja-services" className="text-[#FF6A00] font-medium hover:underline">Puja Services</Link>
                <RiArrowRightSLine className="text-[#999] text-[15px]" />
                <span className="text-[#555] font-medium">Vedic Puja</span>
              </nav>

              {/* Heading */}
              <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold leading-tight text-[#1a1a1a]">
                Vedic Puja{" "}
                <span className="text-[#FF6A00]">Services</span>
              </h1>

              {/* Om divider */}
              <div className="mt-3 mb-4 flex justify-center lg:justify-start">
                <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
              </div>
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll variant="fade-up" delay={120}>
              <p className="max-w-[380px] mx-auto lg:mx-0 text-[14px] font-medium leading-relaxed text-[#4b5563]">
                Experience the power of Vedic rituals, performed with devotion
                and authenticity — from the sacred land of India, for you,
                anywhere in the world.
              </p>
            </AnimateOnScroll>

            {/* Mini stats bar — icon left, label right, dividers between */}
            <AnimateOnScroll variant="fade-up" delay={220}>
              <div className="mt-8 flex flex-wrap sm:flex-nowrap items-stretch bg-white rounded-2xl border border-[#F0EBE3] divide-y sm:divide-y-0 sm:divide-x divide-[#F0EBE3]  w-[650px]  mx-auto lg:mx-0">
                {MINI_STATS.map((s, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center justify-center gap-2 px-4 py-4 text-center">
                    {/* Orange square icon box */}
                    <span className="w-10 h-10 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-[18px] flex-shrink-0">
                      {s.icon}
                    </span>
                    <p className="text-[12px] font-semibold text-[#1a1a1a] leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>

          {/* ── RIGHT: plain image, no circle — same as home hero ── */}
          <AnimateOnScroll variant="fade-left" delay={100} className="flex-shrink-0 flex items-center justify-center lg:w-[48%] relative z-10">
            <Image
              src="/services/service_hero_section.webp"
              alt="Pandit performing Vedic puja"
              width={450}
              height={420}
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
              className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] h-auto object-contain drop-shadow-2xl"
            />
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
