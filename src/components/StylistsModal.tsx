import React from "react";
import { STYLISTS_DATA } from "../data/beautyData";
import { X, Award, Sparkles } from "lucide-react";
import { Card3D } from "./Card3D";

interface StylistsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookStylist: (stylistName: string) => void;
}

export const StylistsModal: React.FC<StylistsModalProps> = ({
  isOpen,
  onClose,
  onBookStylist,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="stylists-modal"
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
              Master Artists & Stylists
            </h3>
            <p className="text-xs text-[#7B6A66]">
              European-certified aesthetic directors and haute couture artists
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7B6A66] hover:bg-[#EBD8CE] hover:text-[#2C2422] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stylists List */}
        <div className="p-6 overflow-y-auto space-y-6">
          {STYLISTS_DATA.map((stylist) => (
            <div
              key={stylist.id}
              className="p-5 rounded-2xl bg-[#FFFDFC] border border-[#E9D9D0] shadow-xs flex flex-col sm:flex-row gap-5 items-center sm:items-start"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 bg-[#E8D5CC]">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4
                      className="text-2xl font-serif text-[#2F2320]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {stylist.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#A66157]">{stylist.role}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#7D6B66] px-2.5 py-1 rounded-full bg-[#FAF3EE] border border-[#EBDCD3] self-center sm:self-start">
                    <Award className="w-3 h-3 text-[#C26760]" />
                    {stylist.experience}
                  </span>
                </div>

                <p className="text-xs text-[#6B5A55] leading-relaxed">{stylist.bio}</p>

                <div className="pt-2 border-t border-[#F3E6DE] flex flex-wrap items-center justify-between gap-2">
                  <div className="text-[11px] text-[#554541]">
                    <strong>Signature Look:</strong> {stylist.signatureLook}
                  </div>
                  <button
                    onClick={() => {
                      onBookStylist(stylist.name);
                      onClose();
                    }}
                    className="px-4 py-1.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white text-xs font-medium transition-colors"
                  >
                    Request Booking
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
