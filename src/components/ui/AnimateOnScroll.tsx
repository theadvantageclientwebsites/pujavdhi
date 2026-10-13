"use client";

import { useEffect, useRef, useState } from "react";

export type AnimationVariant =
  | "fade-up"       // fade in + rise from below (default)
  | "fade-down"     // fade in + drop from above
  | "fade-left"     // fade in + slide from left
  | "fade-right"    // fade in + slide from right
  | "fade"          // pure fade, no movement
  | "zoom-in";      // scale up + fade in

type AnimateOnScrollProps = {
  children: React.ReactNode;
  variant?: AnimationVariant;
  /** delay in ms — stagger children by passing multiples of 100 */
  delay?: number;
  /** Tailwind className forwarded to the wrapper div */
  className?: string;
  /** 0–1 — how much of the element must be visible before it triggers */
  threshold?: number;
};

const INITIAL: Record<AnimationVariant, string> = {
  "fade-up":    "opacity-0 translate-y-8",
  "fade-down":  "opacity-0 -translate-y-8",
  "fade-left":  "opacity-0 -translate-x-8",
  "fade-right": "opacity-0 translate-x-8",
  "fade":       "opacity-0",
  "zoom-in":    "opacity-0 scale-95",
};

const VISIBLE: Record<AnimationVariant, string> = {
  "fade-up":    "opacity-100 translate-y-0",
  "fade-down":  "opacity-100 translate-y-0",
  "fade-left":  "opacity-100 translate-x-0",
  "fade-right": "opacity-100 translate-x-0",
  "fade":       "opacity-100",
  "zoom-in":    "opacity-100 scale-100",
};

export default function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${visible ? VISIBLE[variant] : INITIAL[variant]}
        ${className}
      `}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
