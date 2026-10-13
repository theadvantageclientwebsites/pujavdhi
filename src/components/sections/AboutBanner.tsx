import Image from "next/image";
import { RiFlowerLine } from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AboutBanner() {
  return (
    <section className="w-full bg-white py-10 lg:py-14" aria-label="About banner">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <AnimateOnScroll variant="zoom-in">
          <div className="relative w-full overflow-hidden rounded-2xl min-h-[160px] sm:min-h-[180px] flex items-center justify-center">

            {/* Background image */}
            <Image
              src="/about/about_us_banner.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              aria-hidden="true"
            />

            {/* Dark brown overlay */}
            <div className="absolute inset-0 bg-[#7B3000]/75" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-10 gap-4">
              <RiFlowerLine className="text-white text-[36px] opacity-90" aria-hidden="true" />
              <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold text-white leading-snug max-w-xl">
                Bringing Tradition, Trust &amp; Devotion Right to Your Home
              </h2>
            </div>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
