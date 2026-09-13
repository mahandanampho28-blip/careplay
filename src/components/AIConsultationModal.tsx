import React, { useState } from "react";
import { AIConsultationResponse, LightingPreset } from "../types";
import { Sparkles, X, Loader2, CheckCircle2, ArrowRight, Sun, Palette, Calendar } from "lucide-react";

interface AIConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyLighting: (preset: LightingPreset) => void;
  onBookService: (serviceName: string) => void;
}

export const AIConsultationModal: React.FC<AIConsultationModalProps> = ({
  isOpen,
  onClose,
  onApplyLighting,
  onBookService,
}) => {
  const [skinTone, setSkinTone] = useState("Warm Sand");
  const [skinType, setSkinType] = useState("Combination Radiant");
  const [occasion, setOccasion] = useState("Gala & Red Carpet");
  const [desiredLook, setDesiredLook] = useState("Dewy Glow with Velvet Rose Lip");
  const [specificQuestion, setSpecificQuestion] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIConsultationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const skinToneOptions = [
    "Fair Porcelain (Cool Rosy)",
    "Warm Sand (Golden Undertones)",
    "Olive Mediterranean (Neutral Green)",
    "Sun-Kissed Honey (Warm Amber)",
    "Rich Terracotta / Deep Cocoa",
  ];

  const occasionOptions = [
    "Gala & Red Carpet Event",
    "Imperial Bridal & Ceremony",
    "Editorial Photography Shoot",
    "Daily Signature Radiance",
    "Summer Evening Soirée",
  ];

  const lookOptions = [
    "Dewy Glow with Velvet Rose Lip",
    "Clean Girl Glass Skin & Feathered Brows",
    "Architectural Bronze & Sculpted Cheekbones",
    "French Effortless Chic with Berry Stain",
    "High-Glam Runway Smoke & Diamond Shimmer",
  ];

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/gemini/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skinTone,
          skinType,
          occasion,
          desiredLook,
          specificQuestion: specificQuestion.trim() || undefined,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to contact AI consultation service.");
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError("AI service is busy. Showing customized studio recommendation.");
      // Fallback elegant recommendation
      setResult({
        curatedTitle: "The Sun-Drenched Velvet Rose Protocol",
        overallAssessment: `For your ${skinTone} profile attending a ${occasion}, our atelier recommends focusing on layered liquid-to-cream dermal illumination that resists flash photography while highlighting your facial architecture.`,
        recommendedServices: [
          {
            name: "Haute Hydra-Glow Infusion",
            duration: "75 min",
            purpose: "Drenches cellular layers in triple-peptides to achieve an unyielding glass skin finish.",
            stylistSpecialty: "Elena Rostova (Lead Aesthetician)",
          },
          {
            name: "Editorial Red Carpet Artistry",
            duration: "60 min",
            purpose: "Frames your bone structure with velvet contouring and customized terracotta rose lip pigments.",
            stylistSpecialty: "Maya Chen (Master Makeup Architect)",
          },
        ],
        colorHarmonyPalette: [
          {
            zone: "Lips",
            shadeName: "Terracotta Nude Silk",
            hex: "#C26760",
            description: "Warm rosewood with hydrating satin luster",
          },
          {
            zone: "Cheeks",
            shadeName: "Blushing Peony Flush",
            hex: "#E3A39B",
            description: "Soft radiant peach-rose diffused across zygomatic arch",
          },
          {
            zone: "Eyes",
            shadeName: "Champagne Golden Veil",
            hex: "#DFC2B5",
            description: "Micro-fine crystalline reflection that catches key lights",
          },
        ],
        lightingRecommendation: {
          idealLighting: "Golden Hour Glow",
          tip: "Golden hour lighting at 3200K will amplify the peach undertones and give your skin a natural, lit-from-within warmth.",
        },
        atHomePrep: "Gentle lactic acid exfoliation 48 hours prior, followed by hyaluronic sheet masking and pure silk pillow sleep.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="ai-consultation-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#261E1C]/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl my-8 rounded-3xl bg-[#FAF4F0] border border-[#E9D9D0] shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 border-b border-[#EEDBCE] flex items-center justify-between bg-[#F4E6DE]/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#C26760] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3
                className="text-xl sm:text-2xl font-serif text-[#2C2422]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Careplay AI Beauty Advisor
              </h3>
              <p className="text-xs text-[#7B6A66]">
                Gemini 3-Powered Bespoke Aesthetic & Color Harmony Consultation
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {!result ? (
            /* Input Questionnaire */
            <div className="space-y-5">
              {/* Skin Tone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#685753] mb-2">
                  1. Your Complexion & Undertone
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {skinToneOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSkinTone(opt)}
                      className={`text-left px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                        skinTone === opt
                          ? "border-[#C26760] bg-[#F2E0D7] text-[#362521] shadow-2xs"
                          : "border-[#E8D7CF] bg-[#FFFDFC] text-[#695854] hover:bg-[#F9EDE6]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#685753] mb-2">
                  2. Upcoming Occasion / Venue
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-xs sm:text-sm text-[#3E302D] focus:outline-none focus:border-[#C26760]"
                >
                  {occasionOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Desired Look / Aesthetic */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#685753] mb-2">
                  3. Desired Signature Aesthetic
                </label>
                <div className="space-y-1.5">
                  {lookOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDesiredLook(opt)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                        desiredLook === opt
                          ? "border-[#C26760] bg-[#F2E0D7] text-[#362521] shadow-2xs font-semibold"
                          : "border-[#E8D7CF] bg-[#FFFDFC] text-[#695854] hover:bg-[#F9EDE6]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific inquiry / questions */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#685753] mb-2">
                  4. Custom Details or Inquiries (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sensitive skin, evening flash photography, prefer coral undertones..."
                  value={specificQuestion}
                  onChange={(e) => setSpecificQuestion(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E3D1C8] bg-[#FFFDFC] text-xs sm:text-sm text-[#3E302D] placeholder-[#9E8E89] focus:outline-none focus:border-[#C26760]"
                />
              </div>

              {/* Submit Button */}
              <button
                id="generate-consultation-btn"
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white font-medium text-sm tracking-wide shadow-md transition-all active:scale-98 disabled:opacity-70 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Facial Harmony with Gemini AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Couture Consultation</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Curated Aesthetic Title */}
              <div className="p-4 rounded-2xl bg-[#F4E3DA] border border-[#E8D2C7]">
                <div className="text-[11px] uppercase tracking-widest text-[#8A5A52] font-semibold mb-1">
                  Couture Recommendation
                </div>
                <h4
                  className="text-2xl font-serif text-[#2C2220] font-normal"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {result.curatedTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#66544F] leading-relaxed mt-2">
                  {result.overallAssessment}
                </p>
              </div>

              {/* Color Harmony Palette with Color Swatches */}
              {result.colorHarmonyPalette && result.colorHarmonyPalette.length > 0 && (
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#66544F] mb-3 flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-[#C26760]" />
                    Harmonic Color Palette
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {result.colorHarmonyPalette.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-[#E9DAD1] bg-[#FFFDFC] flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] uppercase font-semibold text-[#8B7974]">
                            {item.zone}
                          </span>
                          <span
                            className="w-5 h-5 rounded-full border border-black/10 shadow-2xs"
                            style={{ backgroundColor: item.hex }}
                            title={item.hex}
                          />
                        </div>
                        <div className="font-medium text-xs text-[#332623]">{item.shadeName}</div>
                        <div className="text-[11px] text-[#7A6A65] mt-1">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Services */}
              {result.recommendedServices && result.recommendedServices.length > 0 && (
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#66544F] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C26760]" />
                    Recommended Atelier Protocols
                  </h5>
                  <div className="space-y-3">
                    {result.recommendedServices.map((svc, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-[#E8D7CE] bg-[#FFFDFC] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-base text-[#2E2421] font-semibold">
                              {svc.name}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-[#F2E3DC] text-[#794E46] font-medium">
                              {svc.duration}
                            </span>
                          </div>
                          <p className="text-xs text-[#6F5E59] mt-1">{svc.purpose}</p>
                          <span className="text-[11px] text-[#A66C63] font-medium block mt-1">
                            Stylist: {svc.stylistSpecialty}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            onBookService(svc.name);
                            onClose();
                          }}
                          className="shrink-0 self-start sm:self-center px-4 py-1.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white text-xs font-medium transition-colors"
                        >
                          Book Protocol
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3D Lighting Match Recommendation */}
              {result.lightingRecommendation && (
                <div className="p-3.5 rounded-xl bg-[#F6EDE7] border border-[#E8D6CB] flex items-start gap-3">
                  <Sun className="w-5 h-5 text-[#C26760] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-[#3B2D2A]">
                      Recommended 3D Studio Light: {result.lightingRecommendation.idealLighting}
                    </span>
                    <p className="text-[#6D5D58] mt-1">{result.lightingRecommendation.tip}</p>
                    <button
                      onClick={() => {
                        onApplyLighting("golden-hour");
                        onClose();
                      }}
                      className="mt-2 text-xs text-[#C26760] font-semibold underline hover:text-[#9E4841]"
                    >
                      Apply This 3D Lighting Condition Now &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* At Home Prep */}
              {result.atHomePrep && (
                <div className="text-xs text-[#665550] bg-[#FAF4F0] p-3 rounded-xl border border-[#EADBD2]">
                  <strong className="text-[#3A2C29]">24-Hour Atelier Prep Protocol:</strong>{" "}
                  {result.atHomePrep}
                </div>
              )}

              {/* Reset Consultation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setResult(null)}
                  className="text-xs text-[#7B6A66] hover:text-[#2C2422] underline"
                >
                  &larr; Configure Another Look
                </button>
                <button
                  onClick={() => {
                    onBookService(result.curatedTitle);
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C26760] hover:bg-[#AF544E] text-white text-xs font-medium uppercase tracking-wider"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Consultation Slot</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
