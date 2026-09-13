import React, { useState } from "react";
import { Sparkles, Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onOpenBooking,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#F3E5DD] border-t border-[#E8D7CF] text-[#4A3B37] pt-14 pb-12 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E3D0C5]">
          {/* Atelier Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <span
              className="text-3xl font-brand text-[#28201E] tracking-wider"
              style={{ fontFamily: "Italiana, Cormorant Garamond, serif" }}
            >
              Careplay
            </span>
            <p className="text-xs sm:text-sm text-[#6C5B56] leading-relaxed max-w-sm">
              An intimate haute beauty sanctuary offering non-invasive facial sculpting,
              editorial makeup, and bespoke botanical skin infusions in an ambient luxury setting.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#8A5A52]">
              <Sparkles className="w-3.5 h-3.5 text-[#C26760]" />
              <span>Private VIP Suites • By Appointment Only</span>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm text-[#675752]">
            <h4
              className="font-serif text-lg text-[#2A211F] font-medium tracking-wide mb-2"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Atelier Location
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C26760] shrink-0 mt-0.5" />
              <span>428 Haute Avenue, Suite 400, Fashion District</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C26760] shrink-0" />
              <span>+1 (800) 842-GLOW (4569)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#C26760] shrink-0" />
              <span>concierge@careplay-studio.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#C26760] shrink-0" />
              <span>Tuesday – Saturday: 10:00 AM – 7:00 PM</span>
            </div>
          </div>

          {/* Newsletter & AI VIP Club */}
          <div className="md:col-span-4 space-y-3">
            <h4
              className="font-serif text-lg text-[#2A211F] font-medium tracking-wide mb-2"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              The Atelier Journal
            </h4>
            <p className="text-xs text-[#6C5B56] leading-relaxed">
              Receive private invitations to masterclasses, seasonal palette drops, and personalized AI skin insights.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#FAF4F0] border border-[#E4D1C7] text-xs text-[#396348] font-medium">
                Welcome to the Careplay Circle. Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-full border border-[#D5BDB1] bg-[#FAF4F0] text-xs text-[#382B28] placeholder-[#9E8E88] focus:outline-none focus:border-[#C26760]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#85746F] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Careplay Haute Beauty Atelier. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenConsultation} className="hover:text-[#C26760] transition-colors">
              AI Beauty Advisor
            </button>
            <button onClick={onOpenBooking} className="hover:text-[#C26760] transition-colors">
              Private Booking
            </button>
            <a href="#" className="hover:text-[#C26760] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
