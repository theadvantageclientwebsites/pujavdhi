import type { ReactNode } from "react";

export type StatItem = {
  icon: ReactNode;
  value: string;
  label: string;
};

type StatsCardProps = {
  stats: StatItem[];
  className?: string;
};

export default function StatsCard({ stats, className = "" }: StatsCardProps) {
  return (
    <div
      className={`
        w-full bg-white rounded-2xl
        shadow-[0_8px_40px_rgba(0,0,0,0.10)]
        px-4 sm:px-8 py-5 sm:py-6
        flex items-stretch
        divide-x divide-[#F0EBE3]
        ${className}
      `}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-1 flex-col items-center justify-center gap-1.5 px-3 sm:px-6"
        >
          {/* Icon */}
          <span className="text-[#FF6A00] text-[26px] sm:text-[28px] leading-none">
            {stat.icon}
          </span>

          {/* Value */}
          <p className="text-[13px] sm:text-[15px] font-semibold text-[#FF6A00] leading-snug">
            {stat.value}
          </p>

          {/* Label */}
          <p className="text-[12px] sm:text-[14px] font-semibold text-[#4b5563] text-center leading-snug">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
