"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { type NavItem } from "@/config/navigation";

type DropdownMenuProps = {
  item: NavItem;
};

export default function DropdownMenu({ item }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    item.children?.some((child) => pathname === child.href);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          flex items-center gap-1 text-[15px] font-medium text-[#1a1a1a]
          transition-colors duration-200 hover:text-[#FF6A00]
          relative after:absolute after:-bottom-[2px] after:left-0 after:h-[2px]
          after:w-full after:origin-left after:bg-[#FF6A00] after:transition-transform after:duration-200
          ${isActive ? "text-[#FF6A00] after:scale-x-100" : "after:scale-x-0"}
        `}
      >
        {item.label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <div
          className="
            absolute top-[calc(100%+14px)] right-0 z-50
            min-w-[180px] rounded-md border border-[#e8e0d5]
            bg-white shadow-lg
            animate-in fade-in slide-in-from-top-2 duration-150
          "
          role="menu"
        >
          <ul className="py-2">
            {item.children?.map((child) => (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  role="menuitem"
                  className={`
                    block px-5 py-3 text-[14px] font-medium text-[#1a1a1a]
                    transition-colors duration-150
                    hover:bg-[#FFF0E6] hover:text-[#FF6A00]
                    ${pathname === child.href ? "bg-[#FFF0E6] text-[#FF6A00]" : ""}
                  `}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
