"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavItem } from "@/config/navigation";

type NavLinkProps = {
  item: NavItem;
  className?: string;
  onClick?: () => void;
};

export default function NavLink({ item, className = "", onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        relative text-[15px] font-medium text-[#1a1a1a] transition-colors duration-200
        hover:text-[#FF6A00]
        after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-full
        after:origin-left after:scale-x-0 after:bg-[#FF6A00] after:transition-transform after:duration-200
        hover:after:scale-x-100
        ${isActive ? "text-[#FF6A00] after:scale-x-100" : ""}
        ${className}
      `}
    >
      {item.label}
    </Link>
  );
}
