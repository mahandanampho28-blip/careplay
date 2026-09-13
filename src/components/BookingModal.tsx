import React, { useState } from "react";
import { SERVICES_DATA, STYLISTS_DATA } from "../data/beautyData";
import { X, Calendar, Clock, User, Sparkles, Check } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = "",
}) => {
  const [selectedService, setSelectedService] = useState(
    preselectedService || SERVICES_DATA[0].name
  );
  const [selectedStylist, setSelectedStylist] = useState(STYLISTS_DATA[0].name);
  const [date, setDate] = useState("2026-09-18");
  const [time, setTime] = useState("14:00");
  const [fullName, setFullName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div
      id="booking-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#261E1C]/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg my-8 rounded-3xl bg-[#FAF4F0] border border-[#E8D7CF] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EEDBCE] flex items-center justify-between bg-[#F4E6DE]/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#C26760] text-white flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3
                className="text-xl font-serif text-[#2D2321]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Reserve Your Atelier Experience
              </h3>
              <p className="text-xs text-[#7B6A66]">Careplay Private Studio Suite</p>
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
        <div className="p-6 sm:p-8">
          {confirmed ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#E5F3EB] text-[#2F855A] mx-auto flex items-center justify-center shadow-xs">
                <Check className="w-8 h-8" />
              </div>
              <h4
                className="text-2xl font-serif text-[#2C2220]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Appointment Requested
              </h4>
              <p className="text-xs sm:text-sm text-[#6C5B56] max-w-xs mx-auto">
                Thank you, <strong>{fullName || "Valued Client"}</strong>. Your session for{" "}
                <strong>{selectedService}</strong> with <strong>{selectedStylist}</strong> on{" "}
                <strong>{date}</strong> at <strong>{time}</strong> has been received. Our concierge will confirm via SMS.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#C26760] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#AF544E] transition-colors"
              >
                Return to Studio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Service selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#695854] mb-1.5">
                  Select Treatment Protocol
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-[#3D2F2C] focus:outline-none focus:border-[#C26760]"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.duration} - {s.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Stylist selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#695854] mb-1.5">
                  Preferred Master Artist
                </label>
                <select
                  value={selectedStylist}
                  onChange={(e) => setSelectedStylist(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-[#3D2F2C] focus:outline-none focus:border-[#C26760]"
                >
                  {STYLISTS_DATA.map((stylist) => (
                    <option key={stylist.id} value={stylist.name}>
                      {stylist.name} ({stylist.role})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#695854] mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-[#3D2F2C] focus:outline-none focus:border-[#C26760]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#695854] mb-1.5">
                    Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-[#3D2F2C] focus:outline-none focus:border-[#C26760]"
                  >
                    <option value="10:00">10:00 AM (Morning Glow)</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="14:00">02:00 PM (Golden Hour)</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:30">05:30 PM (Evening Prep)</option>
                  </select>
                </div>
              </div>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#695854] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lady Camilla"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-[#3D2F2C] placeholder-[#A4948F] focus:outline-none focus:border-[#C26760]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#695854] mb-1.5">
                    Phone / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-[#3D2F2C] placeholder-[#A4948F] focus:outline-none focus:border-[#C26760]"
                  />
                </div>
              </div>

              {/* Special instructions */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#695854] mb-1.5">
                  Aesthetic Notes / Skin Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitive skin, bridal trial, event in evening..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-[#3D2F2C] placeholder-[#A4948F] focus:outline-none focus:border-[#C26760]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white font-medium text-xs uppercase tracking-wider shadow-md transition-all active:scale-98 cursor-pointer mt-2"
              >
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
