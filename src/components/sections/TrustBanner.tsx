import Image from "next/image";
import {
  RiGroupLine, RiShieldCheckLine, RiFlowChart, RiEarthLine, RiGiftLine,
} from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const TRUST_ITEMS = [
  { icon: <RiGroupLine />,       label: "100% Authentic Vedic Rituals" },
  { icon: <RiShieldCheckLine />, label: "Trusted & Verified Pandits"    },
  { icon: <RiFlowChart />,       label: "Transparent Process"           },
  { icon: <RiEarthLine />,       label: "Worldwide Service"             },
  { icon: <RiGiftLine />,        label: "Carefully Packed Prasad"       },
];

export default function TrustBanner() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Why Choose Us">
      <div className="absolute inset-0 z-0">
        <Image src="/home/historical-1.png" alt="" fill sizes="100vw" className="object-cover object-center" priority aria-hidden="true" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4">
          {TRUST_ITEMS.map((item, i) => (
            <AnimateOnScroll key={i} variant="zoom-in" delay={i * 80}>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <span className="text-white text-[30px] sm:text-[34px] leading-none flex-shrink-0">{item.icon}</span>
                <span className="text-white text-[13px] sm:text-[14px] font-medium leading-snug">{item.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
