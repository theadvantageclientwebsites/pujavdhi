import Image from "next/image";
import {
  RiGroupLine,
  RiStarLine,
  RiCalendarCheckLine,
  RiLockLine,
  RiHeartLine,
} from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const REASONS = [
  {
    icon: <RiGroupLine />,
    title: "Verified Pandits",
    description: "All our Pandits are thoroughly verified and experienced.",
  },
  {
    icon: <RiStarLine />,
    title: "Authentic Rituals",
    description: "We follow authentic Vedic traditions and procedures.",
  },
  {
    icon: <RiCalendarCheckLine />,
    title: "Convenient Booking",
    description: "Book your Pooja online in just a few simple steps.",
  },
  {
    icon: <RiLockLine />,
    title: "Secure & Private",
    description: "Your privacy and personal information are always protected.",
  },
  {
    icon: <RiHeartLine />,
    title: "Devotee First",
    description: "Your satisfaction and spiritual peace are our top priority.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24" aria-label="Why Choose Us">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── Header ── */}
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.1em] text-[#FF6A00]">
              Why Choose Us
            </p>
            <h2 className="text-[26px] sm:text-[26px] lg:text-[28px] font-semibold leading-tight text-[#1a1a1a]">
              Why Devotees Trust{" "}
              <span className="text-[#FF6A00]">Puja at Home</span>
            </h2>
            <div className="mt-3">
              <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
            </div>
          </div>
        </AnimateOnScroll>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {REASONS.map((r, i) => (
            <AnimateOnScroll key={i} variant="fade-up" delay={i * 80}>
              <div className="bg-[#FFF0E6] rounded-2xl p-6 h-full flex flex-col gap-4">
                {/* Orange circle icon */}
                <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#FF6A00] text-[20px] flex-shrink-0">
                  {r.icon}
                </span>
                {/* Title */}
                <h3 className="text-[15px] font-bold text-[#1a1a1a] leading-snug">
                  {r.title}
                </h3>
                {/* Description */}
                <p className="text-[13px] font-medium text-[#4b5563] leading-relaxed">
                  {r.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
