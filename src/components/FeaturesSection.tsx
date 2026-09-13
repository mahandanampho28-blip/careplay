import React from "react";
import { BotanicalBranch } from "./BotanicalAccents";
import { Card3D } from "./Card3D";
import { LightingPreset } from "../types";
import { LIGHTING_PRESETS } from "../data/beautyData";
import { Images, UserCheck, Sparkles, MessageSquareHeart, ArrowUpRight } from "lucide-react";

interface FeaturesSectionProps {
  currentPreset: LightingPreset;
  onOpenPortfolio: () => void;
  onOpenStylists: () => void;
  onOpenServices: () => void;
  onOpenReviews: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  currentPreset,
  onOpenPortfolio,
  onOpenStylists,
  onOpenServices,
  onOpenReviews,
}) => {
  const activeLight = LIGHTING_PRESETS[currentPreset];

  return (
    <section id="features-section" className="relative py-16 md:py-24 bg-[#FFFDFC]/80 border-y border-[#F3E6DF]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Botanical Blossom + 4 Interactive Feature Highlights */}
          <div className="lg:col-span-7 relative">
            {/* Delicate Botanical Blossom Branch at Top-Left matching picture */}
            <div className="w-56 sm:w-68 h-auto mb-2 sm:mb-4 -ml-2 sm:-ml-4">
              <BotanicalBranch variant="top-left" />
            </div>

            {/* 4 Feature Items Grid (2x2 layout matching beauty.jpg) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-2">
              {/* Feature 1: Portfolio gallery */}
              <div
                id="feature-portfolio"
                onClick={onOpenPortfolio}
                className="group cursor-pointer p-4 -m-4 rounded-2xl hover:bg-[#FAF4F0] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#F3E5DE] group-hover:bg-[#C26760] text-[#7A5B53] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                    <Images className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-xl font-medium text-[#2C2422] font-serif group-hover:text-[#C26760] transition-colors flex items-center gap-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Portfolio gallery
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#C26760]" />
                  </h3>
                </div>
                <p className="text-sm text-[#73635E] leading-relaxed font-sans">
                  Explore curated transformations, editorial bridal artistry, and
                  luminous skin regimens captured in natural and high-fashion lighting.
                </p>
              </div>

              {/* Feature 2: About Stylist */}
              <div
                id="feature-stylists"
                onClick={onOpenStylists}
                className="group cursor-pointer p-4 -m-4 rounded-2xl hover:bg-[#FAF4F0] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#F3E5DE] group-hover:bg-[#C26760] text-[#7A5B53] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-xl font-medium text-[#2C2422] font-serif group-hover:text-[#C26760] transition-colors flex items-center gap-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    About Stylist
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#C26760]" />
                  </h3>
                </div>
                <p className="text-sm text-[#73635E] leading-relaxed font-sans">
                  Meet our European-trained master aestheticians and makeup architects,
                  dedicated to bespoke harmony and facial rejuvenation.
                </p>
              </div>

              {/* Feature 3: Services */}
              <div
                id="feature-services"
                onClick={onOpenServices}
                className="group cursor-pointer p-4 -m-4 rounded-2xl hover:bg-[#FAF4F0] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#F3E5DE] group-hover:bg-[#C26760] text-[#7A5B53] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-xl font-medium text-[#2C2422] font-serif group-hover:text-[#C26760] transition-colors flex items-center gap-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Services
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#C26760]" />
                  </h3>
                </div>
                <p className="text-sm text-[#73635E] leading-relaxed font-sans">
                  From cellular hydra-infusions to red-carpet makeup and silk hair glossing,
                  discover our bespoke treatment rituals.
                </p>
              </div>

              {/* Feature 4: Reviews */}
              <div
                id="feature-reviews"
                onClick={onOpenReviews}
                className="group cursor-pointer p-4 -m-4 rounded-2xl hover:bg-[#FAF4F0] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#F3E5DE] group-hover:bg-[#C26760] text-[#7A5B53] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                    <MessageSquareHeart className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-xl font-medium text-[#2C2422] font-serif group-hover:text-[#C26760] transition-colors flex items-center gap-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Reviews
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#C26760]" />
                  </h3>
                </div>
                <p className="text-sm text-[#73635E] leading-relaxed font-sans">
                  Read authentic impressions from brides, actresses, and clientele who
                  entrust their signature beauty to our artists.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Portrait of Blonde Model matching beauty.jpg */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Warm terracotta background card panel */}
              <div
                className="absolute inset-0 top-4 -left-4 -bottom-4 right-4 rounded-3xl bg-[#E8CEC4] transition-all duration-500 shadow-md -z-10"
                style={{
                  filter: activeLight.warmthFilter,
                }}
              />

              {/* 3D Tilt Card with Portrait */}
              <Card3D maxTilt={8} glareEffect={true} className="w-full">
                <div className="relative overflow-hidden rounded-2xl bg-[#ECD7CE] shadow-xl border border-[#FAF0EA]/70">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"
                    alt="Blonde beauty model with soft waves and natural glowing makeup"
                    className="w-full h-[440px] sm:h-[480px] object-cover object-top transition-all duration-700 select-none"
                    style={{
                      filter: activeLight.warmthFilter,
                    }}
                    loading="lazy"
                  />

                  {/* Ambient Light Overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-700 mix-blend-soft-light"
                    style={{
                      background: activeLight.highlightGlow,
                      opacity: activeLight.brightness * 0.9,
                    }}
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FAF4F0]/85 backdrop-blur-md border border-[#FFFFFF]/60 text-[11px] font-semibold text-[#574642] shadow-xs">
                    Soft Velvet Wave
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
