import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AboutStorySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24" aria-label="Our Story">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* ── LEFT: copy ── */}
          <div className="flex-1 text-center lg:text-left">

            <AnimateOnScroll variant="fade-up" delay={0}>
              {/* Eyebrow — same as AboutSection */}
              <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.1em] text-[#FF6A00]">
                Our Story
              </p>

              {/* Heading — same size/weight as AboutSection */}
              <h2 className="text-[26px] sm:text-[26px] lg:text-[28px] font-semibold leading-tight text-[#1a1a1a]">
                A Journey Rooted in{" "}
                <span className="text-[#FF6A00]">Tradition</span>
              </h2>

              {/* Om divider — same as everywhere */}
              <div className="mt-3 mb-5 flex items-center gap-2 justify-center lg:justify-start">
                <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
              </div>
            </AnimateOnScroll>

            {/* Paragraphs — same as AboutSection */}
            <AnimateOnScroll variant="fade-up" delay={120}>
              <p className="text-[14px] font-medium leading-relaxed text-[#4b5563] max-w-[480px] mx-auto lg:mx-0">
                Puja at Home was founded with a simple thought – every devotee deserves
                access to authentic rituals and divine blessings, no matter where they are.
              </p>
              <p className="mt-4 text-[14px] font-medium leading-relaxed text-[#4b5563] max-w-[480px] mx-auto lg:mx-0">
                We bring the wisdom of generations to your doorstep by connecting you with
                qualified Pandits who follow age-old traditions with purity and devotion.
              </p>
            </AnimateOnScroll>

            {/* CTA — same as AboutSection */}
            <AnimateOnScroll variant="fade-up" delay={220}>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md bg-[#FF6A00] px-7 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#e55f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6A00]"
                >
                  Know More About Us
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* ── RIGHT: image — rounded rectangle, no arch ── */}
          <AnimateOnScroll variant="fade-left" delay={100} className="flex-shrink-0 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px]">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/about/hawan-about_us.webp"
                alt="Hawan ritual with sacred fire"
                width={460}
                height={340}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
