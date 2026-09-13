import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", aiConfigured: Boolean(process.env.GEMINI_API_KEY) });
});

// AI Beauty Consultation Endpoint
app.post("/api/gemini/consultation", async (req, res) => {
  try {
    const { skinTone, skinType, occasion, desiredLook, specificQuestion } = req.body;

    const prompt = `You are the Lead Master Aesthetician & Couture Beauty Director at Careplay Haute Beauty & Aesthetic Studio.
Provide an exquisite, bespoke beauty consultation for a client with the following profile:
- Skin Tone: ${skinTone || "Warm Sand / Natural Warmth"}
- Skin Type/Texture: ${skinType || "Combination Radiant"}
- Occasion: ${occasion || "Luxury Evening / Gala & Red Carpet"}
- Desired Aesthetic / Vibe: ${desiredLook || "Radiant Dewy Glow with Velvet Rose Accents"}
${specificQuestion ? `- Specific Client Inquiry: ${specificQuestion}` : ""}

Please formulate your consultation in a sophisticated editorial tone formatted as JSON with the following structure:
{
  "curatedTitle": "A short, evocative aesthetic title (e.g. 'The Sun-Drenched Velvet Rose Protocol')",
  "overallAssessment": "2-3 elegant sentences analyzing their undertones, lighting harmony, and facial synergy.",
  "recommendedServices": [
    {
      "name": "Service Name (e.g., Haute Hydra-Glow Infusion)",
      "duration": "e.g., 60 min",
      "purpose": "Why this treatment transforms their skin for this occasion",
      "stylistSpecialty": "Master Facialist / Couture Makeup Artist"
    },
    {
      "name": "Service Name 2 (e.g., Editorial Velvet Lip & Brow Architecture)",
      "duration": "e.g., 45 min",
      "purpose": "Accentuates facial planes under ambient and camera lighting",
      "stylistSpecialty": "Lead Artist"
    }
  ],
  "colorHarmonyPalette": [
    { "zone": "Lips", "shadeName": "Terracotta Nude Silk", "hex": "#C26760", "description": "Soft warm rose with satin finish" },
    { "zone": "Cheeks", "shadeName": "Blushing Peony", "hex": "#E3A39B", "description": "Luminous diffused petal glow" },
    { "zone": "Eyes", "shadeName": "Champagne Shimmer", "hex": "#DFC5B7", "description": "Micro-milled multidimensional light" }
  ],
  "lightingRecommendation": {
    "idealLighting": "Golden Hour Glow / Soft Editorial Spotlight",
    "tip": "How to position themselves in photos and indoor lighting for maximum radiance"
  },
  "atHomePrep": "A concise, luxury 2-step ritual to prepare skin 24 hours prior to appointment."
}

Return ONLY valid JSON.`;

    const ai = getAi();
    if (!ai) {
      // Fallback high-quality response if API key is not yet set
      return res.json({
        curatedTitle: "The Sun-Drenched Velvet Rose Protocol",
        overallAssessment: "Your warm undertones and natural radiance harmonize exquisitely with diffused terracotta warmth and dewy skin architecture.",
        recommendedServices: [
          {
            name: "Haute Hydra-Glow Sculpt & Infusion",
            duration: "60 min",
            purpose: "Deeply quenches dermal layers and delivers a mirror-like glass skin finish for editorial photography.",
            stylistSpecialty: "Master Aesthetician Elena Rostova"
          },
          {
            name: "Bespoke Velvet Rose & Brow Architecture",
            duration: "45 min",
            purpose: "Frames your facial geometry with feathered micro-precision and custom-blended soft berry rose pigments.",
            stylistSpecialty: "Lead Couture Artist Maya Chen"
          }
        ],
        colorHarmonyPalette: [
          { zone: "Lips", shadeName: "Terracotta Nude Silk", hex: "#C26760", description: "Soft warm rose with hydrating satin finish" },
          { zone: "Cheeks", shadeName: "Blushing Peony Flush", hex: "#E3A39B", description: "Luminous diffused petal warmth" },
          { zone: "Eyes", shadeName: "Golden Champagne Veil", hex: "#DFBFA8", description: "Micro-milled multidimensional shimmer" }
        ],
        lightingRecommendation: {
          idealLighting: "Golden Hour Glow (Warm 3200K Ambient)",
          tip: "Position warm key lights 45 degrees high to accentuate high cheekbones and catch the dewy bridge of the nose."
        },
        atHomePrep: "Gentle enzyme cleanse followed by hyaluronic mist and pure silk pillowcase rest 24 hours prior."
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "";
    try {
      const parsed = JSON.parse(text);
      res.json(parsed);
    } catch {
      res.json({ rawText: text });
    }
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: error.message || "Failed to generate AI consultation" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Careplay server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
