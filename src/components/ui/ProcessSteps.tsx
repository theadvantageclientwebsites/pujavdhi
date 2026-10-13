import Image from "next/image";
import type { ReactNode } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export type ProcessStep = {
  icon: ReactNode;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  eyebrow?: string;
  heading: ReactNode;
  steps: ProcessStep[];
};

export default function ProcessSteps({ eyebrow, heading, steps }: ProcessStepsProps) {
  return (
    <section className="w-full bg-white py-16 lg:py-16" aria-label="Our Process">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Header */}
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col items-center text-center mb-14">
            {eyebrow && (
              <p className="mb-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-[#FF6A00]">{eyebrow}</p>
            )}
            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#1a1a1a] leading-tight">{heading}</h2>
            <div className="mt-3">
              <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Steps — each staggered */}
        <div className="relative flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-0">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} variant="fade-up" delay={i * 100} className="relative flex flex-1 flex-col items-center text-center px-4 w-full">
              {/* Dashed connector */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-[28px] left-[calc(50%+36px)] right-[calc(-50%+36px)] h-[2px] border-t-2 border-dashed border-[#FFB380] z-0" aria-hidden="true" />
              )}
              {/* Circle icon */}
              <div className="relative z-10 flex-shrink-0 w-[56px] h-[56px] rounded-full bg-[#FF6A00] flex items-center justify-center text-white text-[22px] shadow-[0_4px_16px_rgba(255,106,0,0.30)] mb-5">
                {step.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#1a1a1a] mb-2 leading-snug">{step.title}</h3>
              <p className="text-[13px] font-medium text-[#4b5563] leading-relaxed max-w-[160px]">{step.description}</p>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
