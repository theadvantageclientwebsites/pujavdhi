type MandalaSvgProps = {
  className?: string;
};

/**
 * MandalaSvg — decorative mandala used as background accent.
 * Color is inherited via `currentColor` so pass text-* to tint it.
 */
export default function MandalaSvg({ className = "" }: MandalaSvgProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.8" />

      {/* 16-petal flower */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 60 * Math.sin(rad);
        const y = 100 - 60 * Math.cos(rad);
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="7"
            ry="18"
            fill="currentColor"
            fillOpacity="0.25"
            transform={`rotate(${angle}, ${x}, ${y})`}
          />
        );
      })}

      {/* 8-petal inner flower */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 36 * Math.sin(rad);
        const y = 100 - 36 * Math.cos(rad);
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="6"
            ry="16"
            fill="currentColor"
            fillOpacity="0.35"
            transform={`rotate(${angle}, ${x}, ${y})`}
          />
        );
      })}

      {/* Inner rings */}
      <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="12" fill="currentColor" fillOpacity="0.3" />
      <circle cx="100" cy="100" r="6"  fill="currentColor" fillOpacity="0.5" />

      {/* Spoke lines */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={100 + 22 * Math.sin(rad)}
            y1={100 - 22 * Math.cos(rad)}
            x2={100 + 80 * Math.sin(rad)}
            y2={100 - 80 * Math.cos(rad)}
            stroke="currentColor"
            strokeWidth="0.7"
            strokeOpacity="0.5"
          />
        );
      })}
    </svg>
  );
}
