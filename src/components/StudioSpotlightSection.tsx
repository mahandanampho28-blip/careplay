import React from "react";
import { BotanicalBranch } from "./BotanicalAccents";
import { Card3D } from "./Card3D";
import { LightingPreset } from "../types";
import { LIGHTING_PRESETS } from "../data/beautyData";
import { Award, ArrowRight, CheckCircle2 } from "lucide-react";

interface StudioSpotlightProps {
  currentPreset: LightingPreset;
  onOpenBooking: () => void;
  onOpenServices: () => void;
}

export const StudioSpotlightSection: React.FC<StudioSpotlightProps> = ({
  currentPreset,
  onOpenBooking,
  onOpenServices,
}) => {
  const activeLight = LIGHTING_PRESETS[currentPreset];

  return (
    <section id="studio-spotlight-section" className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brunette Beauty Portrait matching beauty.jpg Section 3 */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Offset Terracotta Card Panel */}
              <div
                className="absolute inset-0 top-6 -right-5 -bottom-5 left-5 rounded-3xl bg-[#E4C9BE] transition-all duration-500 shadow-lg -z-10"
                style={{
                  filter: activeLight.warmthFilter,
                }}
              />

              {/* 3D Tilt Card */}
              <Card3D maxTilt={7} glareEffect={true} className="w-full">
                <div className="relative overflow-hidden rounded-2xl bg-[#EAD4CA] shadow-2xl border border-[#FAF1EB]/80">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85"
                    alt="Brunette beauty portrait with sculpted profile and radiant complexion"
                    className="w-full h-[460px] sm:h-[500px] object-cover object-center transition-all duration-700 select-none"
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
                      opacity: activeLight.brightness,
                    }}
                  />

                  {/* Label Tag */}
                  <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FAF4F0]/90 backdrop-blur-md border border-white/60 text-xs font-medium text-[#4D3D39] shadow-xs">
                    Haute Bronze & Contour
                  </div>
                </div>
              </Card3D>
            </div>
          </div>

          {/* Right Column: Narrative, Emblem Badge & Botanical Twig */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative space-y-6 sm:space-y-7">
            {/* Emblem Stamp / Boutique Badge matching beauty.jpg */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E3DC] text-xs font-semibold text-[#8B564E] uppercase tracking-widest">
                <span>The Atelier Sanctuary</span>
              </div>

              {/* Minimalist emblem stamp icon */}
              <div
                id="boutique-emblem-badge"
                className="flex flex-col items-center justify-center w-14 h-14 rounded-full border border-[#D8BFB5] bg-[#F7EDE7] shadow-2xs"
                title="Established 2016"
              >
                <Award className="w-5 h-5 text-[#C26760]" />
                <span className="text-[10px] font-bold text-[#6D554F] tracking-tighter">2016</span>
              </div>
            </div>

            {/* Editorial Headline matching beauty.jpg */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A211F] font-serif tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Our Luxury Studio <br />
              <span className="italic font-normal">Beauty & Wellness</span>
            </h2>

            {/* Narrative text */}
            <p className="text-base sm:text-lg text-[#6B5955] leading-relaxed font-sans">
              Founded on the belief that beauty is an art of delicate enhancement rather
              than masking, Careplay provides a private haven where European cosmetic
              artistry meets clinical-grade skin nutrition. Every treatment begins with
              an in-depth undertone and lighting analysis to design your custom aesthetic profile.
            </p>

            {/* Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#54433F]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C26760] shrink-0" />
                <span>Bespoke Micro-pigment Blends</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C26760] shrink-0" />
                <span>Pure Swiss Botanical Serums</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C26760] shrink-0" />
                <span>Private VIP Suites with Ambient Light Tuning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C26760] shrink-0" />
                <span>1-on-1 Master Artist Dedication</span>
              </div>
            </div>

            {/* Terracotta Action Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                id="studio-explore-btn"
                onClick={onOpenServices}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white font-medium text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-[#C26760]/20 transition-all duration-300 transform active:scale-98"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="studio-book-btn"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full border border-[#D5B7AC] hover:bg-[#F2E5DD] text-[#4A3A36] text-sm font-medium transition-colors"
              >
                Book Private Session
              </button>
            </div>

            {/* Botanical Blossom Accent at Bottom Right matching beauty.jpg */}
            <div className="w-60 sm:w-72 h-auto pt-4 ml-auto -mr-6 opacity-95">
              <BotanicalBranch variant="bottom-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
