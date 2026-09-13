import React, { useState } from "react";
import { Sparkles, Menu, X, Calendar, Compass } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenBooking: () => void;
  onOpenPortfolio: () => void;
  onOpenServices: () => void;
  onOpenStylists: () => void;
  onOpenReviews: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenBooking,
  onOpenPortfolio,
  onOpenServices,
  onOpenStylists,
  onOpenReviews,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF4F0]/90 backdrop-blur-md transition-all border-b border-[#F0DFD7]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo"
          className="group flex items-center gap-2 text-2xl sm:text-3xl font-brand tracking-wider text-[#2A2220] transition-colors"
          style={{ fontFamily: "Italiana, Cormorant Garamond, serif" }}
        >
          <span className="font-semibold tracking-wide hover:text-[#C26760] transition-colors">Careplay</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#675753]">
          <button
            id="nav-portfolio-btn"
            onClick={onOpenPortfolio}
            className="hover:text-[#C26760] transition-colors tracking-wide py-1"
          >
            Portfolio
          </button>
          <button
            id="nav-artists-btn"
            onClick={onOpenStylists}
            className="hover:text-[#C26760] transition-colors tracking-wide py-1"
          >
            Artists
          </button>
          <button
            id="nav-services-btn"
            onClick={onOpenServices}
            className="hover:text-[#C26760] transition-colors tracking-wide py-1"
          >
            Services
          </button>
          <button
            id="nav-reviews-btn"
            onClick={onOpenReviews}
            className="hover:text-[#C26760] transition-colors tracking-wide py-1"
          >
            Reviews
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* AI Advisor Outlined Pill */}
          <button
            id="nav-ai-advisor-btn"
            onClick={onOpenConsultation}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#D5B8AE] bg-[#F7EDE7] hover:bg-[#EFE0D8] text-[#4F3E3A] text-xs font-semibold tracking-wider transition-all duration-300 shadow-xs hover:shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C26760] group-hover:rotate-12 transition-transform" />
            <span>AI Consultation</span>
          </button>

          {/* Terracotta Book Now Pill Button */}
          <button
            id="nav-book-now-btn"
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C26760] hover:bg-[#AF5650] active:scale-98 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#C26760]/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-[#4F3E3A] hover:bg-[#F2E4DC] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8D7CF] bg-[#FAF4F0] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#594945]">
            <button
              onClick={() => {
                onOpenPortfolio();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#C26760]"
            >
              Portfolio Gallery
            </button>
            <button
              onClick={() => {
                onOpenStylists();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#C26760]"
            >
              Artists & Stylists
            </button>
            <button
              onClick={() => {
                onOpenServices();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#C26760]"
            >
              Services & Menu
            </button>
            <button
              onClick={() => {
                onOpenReviews();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#C26760]"
            >
              Client Reviews
            </button>
          </div>

          <div className="pt-4 border-t border-[#E8D7CF] flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#D5B8AE] bg-[#F7EDE7] text-[#4F3E3A] text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4 text-[#C26760]" />
              <span>Launch AI Beauty Advisor</span>
            </button>
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#C26760] text-white text-sm font-semibold uppercase tracking-wider shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
