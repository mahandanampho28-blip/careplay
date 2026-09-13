import React from "react";
import { Card3D } from "./Card3D";
import { LightingPreset } from "../types";
import { LIGHTING_PRESETS } from "../data/beautyData";
import { ArrowRight, Sparkles, Star, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  currentPreset: LightingPreset;
  onOpenBooking: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentPreset,
  onOpenBooking,
  onOpenConsultation,
}) => {
  const activeLight = LIGHTING_PRESETS[currentPreset];

  return (
    <section id="hero-section" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-20">
            {/* Subtle editorial eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E3DB] border border-[#E4D1C7] text-xs font-semibold text-[#8C5D55] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C26760]" />
              <span>Haute Aesthetic Atelier</span>
            </div>

            {/* Editorial Heading matching beauty.jpg */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] font-normal text-[#2A2220] tracking-tight font-serif"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              See Your Beauty <br />
              <span className="italic font-normal text-[#362B28]">You Deserve</span>
            </h1>

            {/* Editorial Paragraph */}
            <p className="text-base sm:text-lg text-[#6B5A56] leading-relaxed max-w-xl font-normal font-sans">
              Experience the convergence of advanced non-invasive dermal therapies,
              bespoke color harmonies, and timeless facial sculpting tailored precisely
              to your natural architecture and aesthetic signature.
            </p>

            {/* Action Buttons & Micro Stats */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-reserve-btn"
                onClick={onOpenBooking}
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white font-medium text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-[#C26760]/25 transition-all duration-300 transform active:scale-98"
              >
                <span>Reserve Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-consult-ai-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D9BEB4] bg-[#FAF4F0] hover:bg-[#F3E6DE] text-[#4A3935] font-medium text-sm transition-all duration-300 shadow-2xs"
              >
                <Sparkles className="w-4 h-4 text-[#C26760]" />
                <span>AI Skin & Style Match</span>
              </button>
            </div>

            {/* Trust and Rating Badges */}
            <div className="pt-4 flex items-center gap-8 border-t border-[#EFE0D7]">
              <div className="flex items-center gap-2">
                <div className="flex text-[#D98A55]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#3D312E]">4.9 / 5.0</span>
                <span className="text-xs text-[#8A7874]">(1,400+ clients)</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-[#705F5A]">
                <ShieldCheck className="w-4 h-4 text-[#C26760]" />
                <span>Certified Aesthetic Masters</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Layered Portrait matching beauty.jpg */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end z-20">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px]">
              {/* Background Terracotta Card Rectangle with soft shadow */}
              <div
                className="absolute inset-0 top-6 left-6 right-[-10px] bottom-[-10px] sm:top-8 sm:left-8 sm:right-[-16px] sm:bottom-[-16px] rounded-3xl bg-[#E4C7BC] transition-all duration-500 shadow-lg -z-10"
                style={{
                  filter: activeLight.warmthFilter,
                }}
              />

              {/* 3D Interactive Tilt Card */}
              <Card3D maxTilt={7} glareEffect={true} className="w-full">
                <div className="relative overflow-hidden rounded-2xl bg-[#EAD4CB] shadow-2xl border border-[#F3E3DC]/80">
                  {/* Portrait Image */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                    alt="Radiant beauty model with dewy skin and refined makeup"
                    className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-all duration-700 select-none"
                    style={{
                      filter: activeLight.warmthFilter,
                    }}
                    loading="eager"
                  />

                  {/* Dynamic Studio Lighting Ambient Overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-700 mix-blend-soft-light"
                    style={{
                      background: activeLight.highlightGlow,
                      opacity: activeLight.brightness,
                    }}
                  />

                  {/* Bottom Portrait Floating Pill Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#FAF4F0]/85 backdrop-blur-md border border-[#FFFFFF]/60 flex items-center justify-between shadow-sm">
                    <div>
                      <div className="text-xs font-semibold text-[#2F2522]">
                        Signature Look No. 01
                      </div>
                      <div className="text-[11px] text-[#7A6964]">
                        Dewy Velvet Contour & Satin Rose
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#C26760] text-white">
                      3D Match
                    </span>
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
