import Link from "next/link";
import { RiFlowerLine } from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CtaBanner() {
  return (
    <section className="w-full bg-white py-10 lg:py-14" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <AnimateOnScroll variant="zoom-in">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#FFF3E8] rounded-2xl px-8 py-7">

            <div className="flex items-center gap-5">
              <span className="flex-shrink-0 text-[#FF6A00] text-[40px] leading-none">
                <RiFlowerLine />
              </span>
              <div>
                <p className="text-[17px] font-bold text-[#1a1a1a] leading-snug mb-1">More Than Just a Puja</p>
                <p className="text-[13px] font-medium text-[#4b5563] leading-relaxed max-w-md">
                  We bring the sacredness of Indian traditions to your doorstep — wherever you are in the world.
                </p>
              </div>
            </div>

            <Link
              href="/puja-services"
              className="flex-shrink-0 inline-flex items-center justify-center rounded-md bg-[#FF6A00] px-7 py-3 text-[14px] font-semibold text-white whitespace-nowrap shadow-sm transition-colors duration-200 hover:bg-[#e55f00]"
            >
              Book Pooja Now
            </Link>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
