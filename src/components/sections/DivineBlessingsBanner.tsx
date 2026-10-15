import Image from "next/image";
import Link from "next/link";
import { RiFlowerLine } from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function DivineBlessingsBanner() {
  return (
    <section className="w-full bg-white py-8 lg:py-10" aria-label="Invite Divine Blessings">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <AnimateOnScroll variant="zoom-in">
          <div className="relative overflow-hidden rounded-2xl min-h-[120px] flex items-center">

            {/* Background image */}
            <Image
              src="/about/about_us_banner.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              aria-hidden="true"
            />
            {/* Dark brown overlay */}
            <div className="absolute inset-0 bg-[#7B3000]/80" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7">

              {/* Left: icon + text */}
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 text-white text-[36px] opacity-90">
                  <RiFlowerLine />
                </span>
                <div>
                  <p className="text-[17px] font-bold text-white leading-snug mb-1">
                    Invite Divine Blessings to Your Home
                  </p>
                  <p className="text-[13px] font-medium text-white/80 leading-relaxed">
                    Book your Puja today and experience peace, positivity and prosperity.
                  </p>
                </div>
              </div>

              {/* CTA — white outlined button */}
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-2.5 text-[14px] font-semibold text-white whitespace-nowrap transition-colors duration-200 hover:bg-white hover:text-[#FF6A00]"
              >
                Book Pooja Now
              </Link>

            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
