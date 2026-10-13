import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function RefundPolicySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24" aria-label="Refund and Cancellation Policy">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* ── LEFT: image ── */}
          <AnimateOnScroll variant="fade-right" className="flex-shrink-0 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/about/hawan-about_us.webp"
                alt="Sacred hawan ritual fire"
                width={420}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnScroll>

          {/* ── RIGHT: copy ── */}
          <div className="flex-1 text-center lg:text-left">

            <AnimateOnScroll variant="fade-up" delay={0}>
              {/* Heading — no eyebrow, matches design */}
              <h2 className="text-[26px] sm:text-[26px] lg:text-[28px] font-semibold leading-tight text-[#1a1a1a]">
                Refund{" "}
                <span className="text-[#FF6A00]">& Cancellation Policy</span>
              </h2>

              {/* Om divider */}
              <div className="mt-3 mb-5 flex items-center gap-2 justify-center lg:justify-start">
                <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={120}>
              <p className="text-[14px] font-medium leading-relaxed text-[#4b5563] max-w-[480px] mx-auto lg:mx-0">
                At Pujavdhi, every Puja is arranged as a personalized and customized spiritual
                service based on the customer's specific requirements, selected date, time,
                devotee details, and other booking information.
              </p>
              <p className="mt-4 text-[14px] font-medium leading-relaxed text-[#4b5563] max-w-[480px] mx-auto lg:mx-0">
                Because arrangements are made specifically for each customer, all confirmed
                Puja bookings are non-refundable and non-cancellable.
              </p>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
}
