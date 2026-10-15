import Image from "next/image";
import { PUJA_SERVICES } from "@/config/services";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AllServicesSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-10 lg:py-12" aria-label="Our Services">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Header — identical to homepage ServicesSection */}
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.1em] text-[#FF6A00]">
              Our Services
            </p>
            <h2 className="text-[26px] sm:text-[26px] lg:text-[28px] font-semibold text-[#1a1a1a] leading-tight">
              Poojas for <span className="text-[#FF6A00]">Every Occasion</span>
            </h2>
            <div className="mt-3">
              <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
            </div>
          </div>
        </AnimateOnScroll>

        {/* All 10 cards — same grid, same card, same stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PUJA_SERVICES.map((service, i) => (
            <AnimateOnScroll key={service.id} variant="fade-up" delay={(i % 3) * 80}>
              <ServiceCard service={service} />
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
