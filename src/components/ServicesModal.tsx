import React, { useState } from "react";
import { SERVICES_DATA } from "../data/beautyData";
import { X, Sparkles, Clock, CheckCircle2, ArrowRight } from "lucide-react";

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  onBookService,
}) => {
  const [activeTab, setActiveTab] = useState<string>("All");

  if (!isOpen) return null;

  const categories = ["All", "Skincare", "Makeup", "Aesthetics", "Hair"];

  const filtered =
    activeTab === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <div
      id="services-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#261E1C]/65 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl my-8 rounded-3xl bg-[#FAF4F0] border border-[#E8D7CF] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EEDBCE] flex items-center justify-between bg-[#F4E6DE]/60 shrink-0">
          <div>
            <h3
              className="text-2xl font-serif text-[#2D2321]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Atelier Service Menu
            </h3>
            <p className="text-xs text-[#7B6A66]">
              Clinical dermal therapies, couture makeup architecture, and hair alchemy
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7B6A66] hover:bg-[#EBD8CE] hover:text-[#2C2422] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-3 border-b border-[#F0E1D8] bg-[#FAF4F0] flex items-center gap-2 overflow-x-auto shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === cat
                  ? "bg-[#C26760] text-white shadow-2xs"
                  : "bg-[#F3E5DE] text-[#695753] hover:bg-[#EBDAD2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="p-6 overflow-y-auto space-y-4">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="p-5 rounded-2xl bg-[#FFFDFC] border border-[#E9D9D0] shadow-xs hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5ECE6] pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A5675D]">
                      {service.category}
                    </span>
                    <span className="text-[#D3C1B8]">•</span>
                    <span className="flex items-center gap-1 text-xs text-[#7A6964]">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </span>
                  </div>
                  <h4
                    className="text-xl font-serif text-[#2C211F] mt-0.5"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {service.name}
                  </h4>
                  <p className="text-xs text-[#8A7874] italic">{service.subtitle}</p>
                </div>
                <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                  <div className="text-xl font-semibold text-[#2C211F]">{service.price}</div>
                  <button
                    onClick={() => {
                      onBookService(service.name);
                      onClose();
                    }}
                    className="px-4 py-1.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white text-xs font-semibold transition-colors"
                  >
                    Book Protocol
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#6C5C57] leading-relaxed mb-3">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF4F0] border border-[#ECDCD3] text-[11px] text-[#695753]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#C26760]" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
