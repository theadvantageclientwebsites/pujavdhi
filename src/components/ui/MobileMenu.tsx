"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X, Menu } from "lucide-react";
import { NAV_ITEMS } from "@/config/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const close = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-[#1a1a1a] p-1 hover:text-[#FF6A00] transition-colors"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Drawer */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel */}
          <nav
            className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl flex flex-col"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e8e0d5]">
              <span className="text-[15px] font-semibold text-[#1a1a1a]">Menu</span>
              <button
                onClick={close}
                aria-label="Close menu"
                className="text-[#1a1a1a] hover:text-[#FF6A00] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="flex flex-col py-2 overflow-y-auto flex-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                      className={`
                        w-full flex items-center justify-between px-5 py-3.5
                        text-[15px] font-medium text-[#1a1a1a] hover:bg-[#FFF0E6] hover:text-[#FF6A00]
                        transition-colors duration-150
                        ${item.children?.some((c) => pathname === c.href) ? "text-[#FF6A00]" : ""}
                      `}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <ul className="bg-[#FFF0E6]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={close}
                              className={`
                                block pl-8 pr-5 py-3 text-[14px] font-medium
                                text-[#1a1a1a] hover:text-[#FF6A00] transition-colors duration-150
                                ${pathname === child.href ? "text-[#FF6A00]" : ""}
                              `}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className={`
                        block px-5 py-3.5 text-[15px] font-medium text-[#1a1a1a]
                        hover:bg-[#FFF0E6] hover:text-[#FF6A00] transition-colors duration-150
                        ${pathname === item.href ? "text-[#FF6A00] bg-[#FFF0E6]" : ""}
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
