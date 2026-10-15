import {
  RiTimerFlashLine,
  RiHeadphoneLine,
  RiShieldCheckLine,
  RiHeartLine,
} from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const ITEMS = [
  {
    icon: <RiTimerFlashLine />,
    title: "Quick Response",
    description: "We reply within 24 hours",
  },
  {
    icon: <RiHeadphoneLine />,
    title: "Expert Support",
    description: "Get help from our experts",
  },
  {
    icon: <RiShieldCheckLine />,
    title: "Trusted Services",
    description: "100% authentic and reliable",
  },
  {
    icon: <RiHeartLine />,
    title: "Devotee Satisfaction",
    description: "Your happiness is our priority",
  },
];

export default function ContactFeaturesBar() {
  return (
    <section className="w-full bg-[#FDF3EB] py-14 lg:py-16" aria-label="Why contact us">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Heading */}
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-center text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#1a1a1a] leading-tight mb-10">
            We Are Just a Message Away
          </h2>
        </AnimateOnScroll>

        {/* Items row */}
        <AnimateOnScroll variant="fade-up" delay={100}>
          <div className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-[#E8D8C8] bg-white rounded-2xl shadow-sm overflow-hidden">
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center text-center gap-3 px-6 py-8"
              >
                {/* White circle icon */}
                <span className="w-14 h-14 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-[24px] shadow-sm">
                  {item.icon}
                </span>
                <h3 className="text-[15px] font-bold text-[#1a1a1a] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] font-medium text-[#4b5563] leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
