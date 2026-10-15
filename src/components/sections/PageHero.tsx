import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  breadcrumbs: Breadcrumb[];
  headingBlack: string;
  headingOrange: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
};

/**
 * PageHero — reusable inner-page hero banner.
 * Left copy sits inside max-w-7xl.
 * Right image is absolutely positioned from 55% → 100% of the viewport
 * so it always touches the right edge regardless of container width.
 */
export default function PageHero({
  breadcrumbs,
  headingBlack,
  headingOrange,
  subtitle,
  description,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[200px] sm:min-h-[230px]"
      style={{ backgroundColor: "#F9E8D8" }}
      aria-label={`${headingBlack}${headingOrange}`}
    >
      {/* ── RIGHT image — absolutely flush to viewport right edge ── */}
      <div
        className="hidden md:block absolute top-0 right-0 bottom-0 z-0"
        style={{ left: "52%" }}
        aria-hidden="true"
      >
        {/* Left gradient fade — blends into bg colour */}
        <div
          className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #F9E8D8 0%, transparent 100%)",
          }}
        />
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="48vw"
          className="object-cover object-left"
        />
      </div>

      {/* ── LEFT copy — inside max-w-7xl, left-padded ── */}
      <div className="relative z-10 mx-auto max-w-7xl flex items-stretch">
        <div className="w-full md:w-[55%] flex flex-col justify-center px-6 lg:px-16 py-10 lg:py-12">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 mb-5 text-[13px]" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <RiArrowRightSLine className="text-[#999] text-[15px]" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-[#FF6A00] font-medium hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#555] font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Heading */}
          <h1 className="text-[36px] sm:text-[38px] lg:text-[40px] font-medium leading-tight text-[#1a1a1a] mb-1">
            {headingBlack}
            <span className="text-[#FF6A00]">{headingOrange}</span>
          </h1>

          {/* Om divider */}
          <div className="mb-2">
            <Image src="/om_icon.png" alt="Om" width={65} height={29} className="object-contain" />
          </div>

          {/* Subtitle */}
          <p className="text-[18px] sm:text-[24px] font-medium text-[#1a1a1a] leading-snug mb-2">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed max-w-[560px] whitespace-pre-line">
            {description}
          </p>

        </div>
      </div>

    </section>
  );
}
