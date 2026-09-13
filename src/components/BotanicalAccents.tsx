import React from "react";

interface BotanicalBranchProps {
  className?: string;
  variant?: "top-left" | "bottom-right";
}

export const BotanicalBranch: React.FC<BotanicalBranchProps> = ({
  className = "",
  variant = "top-left",
}) => {
  if (variant === "bottom-right") {
    return (
      <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 280 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm opacity-90"
        >
          {/* Main botanical stem */}
          <path
            d="M260 170 C210 140, 150 135, 90 145 C40 155, 10 175, 5 178"
            stroke="#8C7A74"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M170 138 C150 110, 140 85, 135 60"
            stroke="#8C7A74"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M215 145 C205 115, 200 95, 205 75"
            stroke="#8C7A74"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Blossom 1 (Center) */}
          <g transform="translate(135, 60)">
            <ellipse cx="-15" cy="-8" rx="18" ry="12" fill="#F3E1D9" opacity="0.85" transform="rotate(-25 -15 -8)" />
            <ellipse cx="12" cy="-10" rx="16" ry="11" fill="#E8C7BC" opacity="0.8" transform="rotate(30 12 -10)" />
            <ellipse cx="0" cy="12" rx="19" ry="13" fill="#DFB7AA" opacity="0.9" />
            <ellipse cx="-6" cy="4" rx="10" ry="7" fill="#C26760" opacity="0.5" />
            <circle cx="-2" cy="5" r="2.5" fill="#8B4A44" />
            <circle cx="2" cy="7" r="1.8" fill="#A85750" />
          </g>

          {/* Blossom 2 (Right) */}
          <g transform="translate(205, 75)">
            <ellipse cx="-10" cy="-6" rx="14" ry="9" fill="#F0DDD5" opacity="0.85" transform="rotate(-15 -10 -6)" />
            <ellipse cx="10" cy="-4" rx="13" ry="8" fill="#E5C1B5" opacity="0.8" transform="rotate(20 10 -4)" />
            <ellipse cx="0" cy="8" rx="15" ry="10" fill="#DCABA0" opacity="0.85" />
            <circle cx="0" cy="4" r="2" fill="#8B4A44" />
          </g>

          {/* Soft buds */}
          <circle cx="85" cy="143" r="4.5" fill="#E8C5BA" stroke="#A67B74" strokeWidth="0.8" />
          <circle cx="110" cy="140" r="3.5" fill="#DFC0B5" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 280 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm opacity-90"
      >
        {/* Main stem */}
        <path
          d="M10 150 C60 125, 120 120, 180 130 C230 140, 265 160, 270 165"
          stroke="#8C7A74"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M100 122 C120 95, 130 70, 135 45"
          stroke="#8C7A74"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M60 130 C70 100, 75 80, 70 60"
          stroke="#8C7A74"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Orchid flower petals */}
        <g transform="translate(68, 60)">
          <ellipse cx="-16" cy="-8" rx="18" ry="12" fill="#F4E2DA" opacity="0.85" transform="rotate(-30 -16 -8)" />
          <ellipse cx="14" cy="-10" rx="16" ry="11" fill="#E9C8BE" opacity="0.8" transform="rotate(25 14 -10)" />
          <ellipse cx="0" cy="12" rx="20" ry="14" fill="#DFB7AB" opacity="0.9" />
          <ellipse cx="-5" cy="4" rx="10" ry="7" fill="#C26760" opacity="0.5" />
          <circle cx="-2" cy="5" r="2.5" fill="#8B4A44" />
          <circle cx="2" cy="7" r="1.8" fill="#A85750" />
        </g>

        {/* Blossom 2 */}
        <g transform="translate(135, 45)">
          <ellipse cx="-12" cy="-6" rx="15" ry="10" fill="#F2DFD7" opacity="0.85" transform="rotate(-20 -12 -6)" />
          <ellipse cx="12" cy="-5" rx="14" ry="9" fill="#E6C3B7" opacity="0.8" transform="rotate(20 12 -5)" />
          <ellipse cx="0" cy="9" rx="16" ry="11" fill="#DDB0A4" opacity="0.85" />
          <circle cx="0" cy="4" r="2" fill="#8B4A44" />
        </g>

        {/* Gentle buds */}
        <circle cx="185" cy="128" r="4.5" fill="#E8C5BA" stroke="#A67B74" strokeWidth="0.8" />
        <circle cx="160" cy="126" r="3.5" fill="#DFC0B5" />
      </svg>
    </div>
  );
};
