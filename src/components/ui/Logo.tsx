import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  // Define colors based on theme
  const primaryColor = light ? "#FFFFFF" : "#600000"; // Deep Maroon for light mode, White for dark mode
  const secondaryColor = light ? "#E2E8F0" : "#800f2f"; // Softer color for mesh/borders
  const accentColor = "#D4AF37"; // Sparing gold/amber accent

  return (
    <Link href="/" className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Vagdevi Enterprises Premium Vector Monogram */}
      <svg 
        className="w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="logo-mesh" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M 0,0 L 0,3 M 0,0 L 3,0" stroke={secondaryColor} strokeWidth="0.5" opacity="0.35" />
          </pattern>
        </defs>

        {/* Outer Structural Bounding Frame */}
        <rect x="4" y="4" width="40" height="40" rx="8" stroke={primaryColor} strokeWidth="2" opacity="0.9" />

        {/* The 'V' and 'E' Interlocking Architectural Monogram */}
        <g fill={primaryColor}>
          {/* Left thick solid diagonal of 'V' */}
          <path d="M 12 12 L 24 36 L 29 36 L 17 12 Z" />
          
          {/* The horizontal bars of 'E' projecting flush from the left diagonal */}
          <path d="M 18 14 H 35 V 17 H 19.5 Z" />
          <path d="M 22.5 23 H 30 V 26 H 24 Z" />
          <path d="M 27 32 H 35 V 35 H 28.5 Z" />
        </g>

        {/* Right diagonal of 'V' featuring the subtle safety net/grill mesh texture */}
        <path d="M 36 12 L 24 36 L 19 36 L 31 12 Z" fill="url(#logo-mesh)" />
        <path d="M 36 12 L 24 36 L 19 36 L 31 12 Z" stroke={primaryColor} strokeWidth="1" opacity="0.8" />

        {/* Premium Gold Accent - Diamond anchor at the vertex */}
        <path d="M 24 32.5 L 27.5 36 L 24 39.5 L 20.5 36 Z" fill={accentColor} />
      </svg>

      {/* Corporate Logo Typography */}
      {!iconOnly && (
        <div className="flex flex-col leading-tight text-left">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-xl font-extrabold tracking-tight transition-colors duration-200 ${
                light ? "text-white" : "text-[#600000]"
              }`}
            >
              Vagdevi Enterprises
            </span>
          </div>
          <span
            className={`text-[9px] font-bold uppercase tracking-[0.25em] transition-colors duration-200 ${
              light ? "text-slate-300" : "text-[#800f2f]"
            }`}
          >
            Safety Nets &amp; Grills
          </span>
        </div>
      )}
    </Link>
  );
}
