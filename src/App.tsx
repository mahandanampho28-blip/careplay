/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { LightingPreset } from "./types";
import { ThreePetalsCanvas } from "./components/ThreePetalsCanvas";
import { Navbar } from "./components/Navbar";
import { StudioLightSimulator } from "./components/StudioLightSimulator";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { StudioSpotlightSection } from "./components/StudioSpotlightSection";
import { Footer } from "./components/Footer";
import { AIConsultationModal } from "./components/AIConsultationModal";
import { BookingModal } from "./components/BookingModal";
import { PortfolioModal } from "./components/PortfolioModal";
import { ServicesModal } from "./components/ServicesModal";
import { StylistsModal } from "./components/StylistsModal";
import { ReviewsModal } from "./components/ReviewsModal";
import { Sparkles, Wind } from "lucide-react";

export default function App() {
  const [currentLighting, setCurrentLighting] = useState<LightingPreset>("golden-hour");
  const [showPetals, setShowPetals] = useState(true);

  // Modal visibility states
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isStylistsOpen, setIsStylistsOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>("");

  const handleBookService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF4F0] text-[#2C2422] font-sans selection:bg-[#DEABA5] selection:text-[#3B1E1C]">
      {/* 3D WebGL Floating Botanical Petals Canvas */}
      {showPetals && <ThreePetalsCanvas interactive={true} />}

      {/* Main Luxury Navigation Bar */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenBooking={() => {
          setPreselectedService("");
          setIsBookingOpen(true);
        }}
        onOpenPortfolio={() => setIsPortfolioOpen(true)}
        onOpenServices={() => setIsServicesOpen(true)}
        onOpenStylists={() => setIsStylistsOpen(true)}
        onOpenReviews={() => setIsReviewsOpen(true)}
      />

      {/* 3D Studio Light Simulator Controller Bar */}
      <div className="relative z-25 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-4 flex flex-wrap items-center justify-between gap-4">
        <StudioLightSimulator
          currentPreset={currentLighting}
          onSelectPreset={(preset) => setCurrentLighting(preset)}
        />

        {/* 3D Petals Ambient Breeze Toggle */}
        <button
          onClick={() => setShowPetals(!showPetals)}
          id="toggle-petals-btn"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#E3D1C8] bg-[#FAF4F0]/80 hover:bg-[#F2E4DC] text-[#715F5B] transition-colors"
          title="Toggle 3D WebGL floating petals animation"
        >
          <Wind className={`w-3.5 h-3.5 ${showPetals ? "text-[#C26760]" : "text-[#A89893]"}`} />
          <span>3D Petals: {showPetals ? "Active" : "Paused"}</span>
        </button>
      </div>

      <main className="relative z-20">
        {/* Section 1: Hero Section (Matching beauty.jpg) */}
        <HeroSection
          currentPreset={currentLighting}
          onOpenBooking={() => {
            setPreselectedService("");
            setIsBookingOpen(true);
          }}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Section 2: Features & Portfolio Highlights (Matching beauty.jpg) */}
        <FeaturesSection
          currentPreset={currentLighting}
          onOpenPortfolio={() => setIsPortfolioOpen(true)}
          onOpenStylists={() => setIsStylistsOpen(true)}
          onOpenServices={() => setIsServicesOpen(true)}
          onOpenReviews={() => setIsReviewsOpen(true)}
        />

        {/* Section 3: Studio Spotlight & Story (Matching beauty.jpg) */}
        <StudioSpotlightSection
          currentPreset={currentLighting}
          onOpenBooking={() => {
            setPreselectedService("");
            setIsBookingOpen(true);
          }}
          onOpenServices={() => setIsServicesOpen(true)}
        />
      </main>

      {/* Atelier Footer */}
      <Footer
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenBooking={() => {
          setPreselectedService("");
          setIsBookingOpen(true);
        }}
      />

      {/* Floating AI Consultation Quick Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          id="floating-ai-consult-btn"
          onClick={() => setIsConsultationOpen(true)}
          className="group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#C26760] hover:bg-[#B35852] text-white shadow-xl hover:shadow-2xl hover:shadow-[#C26760]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-semibold tracking-wider uppercase">AI Beauty Advisor</span>
        </button>
      </div>

      {/* Modals */}
      <AIConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onApplyLighting={(preset) => setCurrentLighting(preset)}
        onBookService={handleBookService}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
      />

      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        onBookLook={handleBookService}
      />

      <ServicesModal
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        onBookService={handleBookService}
      />

      <StylistsModal
        isOpen={isStylistsOpen}
        onClose={() => setIsStylistsOpen(false)}
        onBookStylist={(stylist) => {
          setPreselectedService(`Session with ${stylist}`);
          setIsBookingOpen(true);
        }}
      />

      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
        onOpenBooking={() => {
          setPreselectedService("");
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
