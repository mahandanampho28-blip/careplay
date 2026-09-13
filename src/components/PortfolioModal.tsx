import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/beautyData";
import { X, Sparkles, Filter, Eye } from "lucide-react";
import { Card3D } from "./Card3D";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookLook: (lookName: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  onBookLook,
}) => {
  const [filter, setFilter] = useState("All");

  if (!isOpen) return null;

  const categories = ["All", "Editorial", "Bridal", "Hair & Makeup", "Skincare"];

  const filteredItems =
    filter === "All"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category.includes(filter));

  return (
    <div
      id="portfolio-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#261E1C]/65 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl my-8 rounded-3xl bg-[#FAF4F0] border border-[#E8D7CF] shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EEDBCE] flex items-center justify-between bg-[#F4E6DE]/60 shrink-0">
          <div>
            <h3
              className="text-2xl font-serif text-[#2D2321]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Careplay Atelier Portfolio
            </h3>
            <p className="text-xs text-[#7B6A66]">
              Curated editorial transformations & haute couture bridal aesthetics
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7B6A66] hover:bg-[#EBD8CE] hover:text-[#2C2422] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="px-6 py-3 border-b border-[#F0E1D8] bg-[#FAF4F0] flex items-center gap-2 overflow-x-auto shrink-0">
          <Filter className="w-3.5 h-3.5 text-[#8A7671] shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === cat
                  ? "bg-[#C26760] text-white shadow-2xs"
                  : "bg-[#F3E5DE] text-[#695753] hover:bg-[#EBDAD2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-[#FFFDFC] border border-[#EADBCE] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <Card3D maxTilt={6} glareEffect={false} className="w-full">
                <div className="relative h-64 overflow-hidden bg-[#E7D3CA]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FAF4F0]/90 backdrop-blur-xs text-[10px] font-semibold text-[#5A4844] shadow-xs">
                    {item.tag}
                  </div>
                </div>
              </Card3D>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4
                    className="text-lg font-serif text-[#2F2422]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#705E59] mt-1">{item.details}</p>
                </div>

                <div className="pt-2 border-t border-[#F2E5DD] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#9E655C]">
                    Stylist: {item.stylist}
                  </span>
                  <button
                    onClick={() => {
                      onBookLook(item.title);
                      onClose();
                    }}
                    className="text-xs font-semibold text-[#C26760] hover:underline"
                  >
                    Book Look &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
