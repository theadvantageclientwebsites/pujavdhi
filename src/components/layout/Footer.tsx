import Image from "next/image";
import Link from "next/link";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiMailLine,
  RiFacebookFill,
  RiInstagramLine,
  RiYoutubeFill,
  RiTwitterXFill,
} from "react-icons/ri";

/* ── Data ───────────────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: "Home",           href: "/"               },
  { label: "About Us",       href: "/about"           },
  { label: "Puja Services",  href: "/puja-services"   },
  { label: "Contact Us",     href: "/contact"         },
];

const SERVICES_LINKS = [
  { label: "Ganesh Puja",            href: "/puja-services/ganesh-puja"           },
  { label: "Rudra Abhishek",         href: "/puja-services/rudra-abhishek"        },
  { label: "Satyanarayan Katha",     href: "/puja-services/satyanarayan-katha"    },
  { label: "Navgrah Shanti Puja",    href: "/puja-services/navgrah-shanti-puja"   },
  { label: "Kaal Sarp Dosh Nivaran", href: "/puja-services/kaal-sarp-dosh-nivaran"},
];

const SOCIAL = [
  { icon: <RiFacebookFill />,  href: "#", label: "Facebook"  },
  { icon: <RiInstagramLine />, href: "#", label: "Instagram" },
  { icon: <RiYoutubeFill />,   href: "#", label: "YouTube"   },
  { icon: <RiTwitterXFill />,  href: "#", label: "Twitter/X" },
];

/* ── Component ───────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white" aria-label="Site footer">

      {/* ── Main footer grid ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Pujavdhi home">
              <Image
                src="/logo.webp"
                alt="Pujavdhi"
                width={130}
                height={44}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] font-medium text-[#a0a0a0] leading-relaxed">
              Connecting devotees worldwide with experienced Pandits for authentic
              Vedic rituals — from the sacred land of India, to your home.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {SOCIAL.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="
                    w-9 h-9 rounded-full border border-[#333]
                    flex items-center justify-center
                    text-[#a0a0a0] text-[16px]
                    transition-colors duration-200
                    hover:bg-[#FF6A00] hover:border-[#FF6A00] hover:text-white
                  "
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 className="text-[14px] font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] font-medium text-[#a0a0a0] hover:text-[#FF6A00] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF6A00] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Our Services ── */}
          <div>
            <h3 className="text-[14px] font-bold text-white uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] font-medium text-[#a0a0a0] hover:text-[#FF6A00] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF6A00] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <h3 className="text-[14px] font-bold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <RiMapPin2Line className="text-[#FF6A00] text-[17px] flex-shrink-0 mt-[2px]" />
                <span className="text-[13px] font-medium text-[#a0a0a0] leading-relaxed">
                  Sacred Land of India,<br />Serving Worldwide
                </span>
              </li>
              <li className="flex items-center gap-3">
                <RiPhoneLine className="text-[#FF6A00] text-[17px] flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-[13px] font-medium text-[#a0a0a0] hover:text-[#FF6A00] transition-colors duration-200"
                >
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <RiMailLine className="text-[#FF6A00] text-[17px] flex-shrink-0" />
                <a
                  href="mailto:info@pujavdhi.com"
                  className="text-[13px] font-medium text-[#a0a0a0] hover:text-[#FF6A00] transition-colors duration-200"
                >
                  info@pujavdhi.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-[#2a2a2a]" />

      {/* ── Bottom bar ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-[#666] text-center sm:text-left">
          © 2026 Pujavdhi. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy-policy" className="text-[12px] text-[#666] hover:text-[#FF6A00] transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[12px] text-[#666] hover:text-[#FF6A00] transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  );
}
