import React from "react";
import { REVIEWS_DATA } from "../data/beautyData";
import { X, Star, MessageSquareHeart, CheckCircle2 } from "lucide-react";

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="reviews-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#261E1C]/65 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl my-8 rounded-3xl bg-[#FAF4F0] border border-[#E8D7CF] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EEDBCE] flex items-center justify-between bg-[#F4E6DE]/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#C26760] text-white flex items-center justify-center">
              <MessageSquareHeart className="w-4 h-4" />
            </div>
            <div>
              <h3
                className="text-2xl font-serif text-[#2D2321]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Client Impressions & Praise
              </h3>
              <p className="text-xs text-[#7B6A66]">
                Verified 5.0 Star Reviews from Brides, Models & Patrons
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7B6A66] hover:bg-[#EBD8CE] hover:text-[#2C2422] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-4 rounded-2xl bg-[#F5E6DF] border border-[#E8D4CA] flex items-center justify-between">
            <div>
              <div className="text-3xl font-serif text-[#2B211E] font-medium">4.98 / 5.0</div>
              <div className="flex text-[#D98A55] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#6F5F5A]">Based on 1,420+ curated appointments</span>
            </div>
            <button
              onClick={() => {
                onOpenBooking();
                onClose();
              }}
              className="px-4 py-2 rounded-full bg-[#C26760] text-white text-xs font-semibold hover:bg-[#AF544E] transition-colors"
            >
              Book Your Session
            </button>
          </div>

          <div className="space-y-4">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-[#FFFDFC] border border-[#E9D9D0] space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-sm text-[#2E2421]">{rev.clientName}</h5>
                    <span className="text-xs text-[#9B6258] font-medium">{rev.service}</span>
                  </div>
                  <div className="flex text-[#D98A55]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#6A5A55] leading-relaxed italic">
                  "{rev.comment}"
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#A2918B] pt-1">
                  <span className="flex items-center gap-1 text-[#468259]">
                    <CheckCircle2 className="w-3 h-3" /> Verified Client
                  </span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
