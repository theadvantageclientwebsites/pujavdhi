"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { TESTIMONIALS } from "@/config/testimonials";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <RiStarFill key={i} className={i < rating ? "text-[#FF6A00]" : "text-[#e0d6cc]"} size={16} />
      ))}
    </div>
  );
}

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return count;
}

export default function TestimonialsSection() {
  const total = TESTIMONIALS.length;
  const visibleCount = useVisibleCount();
  const maxIndex = total - visibleCount;

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => setCurrent(Math.max(0, Math.min(idx, maxIndex)));

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  const pause = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resume = () => startTimer();
  const cardWidthPct = 100 / visibleCount;

  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Header */}
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.1em] text-[#FF6A00]">Testimonials</p>
            <h2 className="text-[26px] sm:text-[26px] lg:text-[28px] font-semibold text-[#1a1a1a] leading-tight">
              What Our Devotees <span className="text-[#FF6A00]">Say</span>
            </h2>
            <div className="mt-3">
              <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Slider */}
        <AnimateOnScroll variant="fade-up" delay={150}>
          <div className="overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * cardWidthPct}%)`,
                transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                willChange: "transform",
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="flex-shrink-0 px-3" style={{ width: `${cardWidthPct}%` }}>
                  <div className="flex flex-col justify-between h-full bg-[#FFF8F3] rounded-2xl p-6 border border-[#F5EBE0]">
                    <div className="mb-4"><StarRating rating={t.rating} /></div>
                    <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed flex-1 mb-6">{t.review}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-[15px] font-bold text-[#1a1a1a]">{t.name}</p>
                      <span className="text-[#FF6A00]" style={{ fontSize: "52px", lineHeight: 1 }}>&#8221;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); startTimer(); }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-3 h-3 bg-[#FF6A00]" : "w-2 h-2 bg-[#d0c4ba]"}`}
              />
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
