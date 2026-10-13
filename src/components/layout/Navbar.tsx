"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/config/navigation";
import NavLink from "@/components/ui/NavLink";
import DropdownMenu from "@/components/ui/DropdownMenu";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#e8e0d5] bg-white sticky top-0 z-40">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Pujavdhi home">
          <Image
            src="/logo.webp"
            alt="Pujavdhi"
            width={140}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DropdownMenu key={item.href} item={item} />
            ) : (
              <NavLink key={item.href} item={item} />
            )
          )}
        </nav>

        {/* Mobile Nav */}
        <MobileMenu />
      </div>
    </header>
  );
}
