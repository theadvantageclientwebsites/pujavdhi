import Link from "next/link";
import { RiGroupLine } from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function WhoCanBookBanner() {
  return (
    <section className="w-full bg-white py-8 lg:py-10" aria-label="Who can book">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#FFF3E8] rounded-2xl px-6 py-5">

            {/* Left: icon + text */}
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white text-[22px]">
                <RiGroupLine />
              </span>
              <div>
                <p className="text-[16px] font-bold text-[#1a1a1a] leading-snug mb-1">
                  Who Can Book?
                </p>
                <p className="text-[13px] font-medium text-[#4b5563] leading-relaxed max-w-md">
                  Our Puja services are for everyone! Whether it's a festival, special occasion, life event or any spiritual need – we are here for you.
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center justify-center rounded-md bg-[#FF6A00] px-6 py-2.5 text-[14px] font-semibold text-white whitespace-nowrap shadow-sm transition-colors duration-200 hover:bg-[#e55f00]"
            >
              Book Pooja Now
            </Link>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
