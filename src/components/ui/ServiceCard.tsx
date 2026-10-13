import Image from "next/image";
import Link from "next/link";
import { RiCheckboxCircleFill, RiCalendarEventLine } from "react-icons/ri";
import type { PujaService } from "@/config/services";

type ServiceCardProps = {
  service: PujaService;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#F0EBE3] shadow-lg hover:shadow-[0_8px_32px_rgba(255,106,0,0.12)] transition-all duration-300 hover:-translate-y-1">

      {/* ── Image ── */}
      <div className="relative w-full h-[400px] bg-[#FDF3EB] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Deity chip */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] flex-shrink-0" />
          <span className="text-[11px] font-semibold text-[#FF6A00] leading-none whitespace-nowrap">
            {service.deity}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5">

        {/* Title */}
        <h3 className="text-[16px] font-bold text-[#1a1a1a] leading-snug mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] font-medium text-[#4b5563] leading-relaxed line-clamp-3 mb-4">
          {service.description}
        </p>

        {/* Top 3 benefits */}
        <ul className="flex flex-col gap-2 mb-5">
          {service.benefits.slice(0, 3).map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <RiCheckboxCircleFill className="text-[#FF6A00] text-[15px] flex-shrink-0 mt-[2px]" />
              <span className="text-[12px] font-medium text-[#4b5563] leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {/* When to perform */}
        <div className="flex items-start gap-2 bg-[#FFF8F3] rounded-lg px-3 py-2.5 mb-5">
          <RiCalendarEventLine className="text-[#FF6A00] text-[15px] flex-shrink-0 mt-[1px]" />
          <p className="text-[11px] font-medium text-[#4b5563] leading-snug line-clamp-2">
            {service.whenToPerform}
          </p>
        </div>

        {/* CTA pinned to bottom */}
        <div className="mt-auto">
          <Link
            href={`/puja-services/${service.slug}`}
            className="
              w-full flex items-center justify-center
              rounded-lg bg-[#FF6A00] px-4 py-2.5
              text-[13px] font-semibold text-white
              transition-colors duration-200 hover:bg-[#e55f00]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-[#FF6A00]
            "
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
