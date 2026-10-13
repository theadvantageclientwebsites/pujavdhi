export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  {
    label: "Puja Services",
    href: "/puja-services",
    children: [
      { label: "Vedic Puja", href: "/puja-services/vedic-puja" },
      { label: "Daan Punya", href: "/puja-services/daan-punya" },
      { label: "Group Puja", href: "/puja-services/group-puja" },
    ],
  },
];
