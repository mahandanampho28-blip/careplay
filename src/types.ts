export type LightingPreset = "golden-hour" | "soft-velvet" | "high-glam" | "editorial";

export interface LightingConfig {
  id: LightingPreset;
  name: string;
  iconName: string;
  description: string;
  colorTemp: string;
  brightness: number;
  warmthFilter: string;
  highlightGlow: string;
}

export interface ServiceItem {
  id: string;
  category: "Skincare" | "Makeup" | "Hair" | "Aesthetics";
  name: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  benefits: string[];
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
  specialties: string[];
  signatureLook: string;
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  stylist: string;
  details: string;
}

export interface AIConsultationResponse {
  curatedTitle: string;
  overallAssessment: string;
  recommendedServices: {
    name: string;
    duration: string;
    purpose: string;
    stylistSpecialty: string;
  }[];
  colorHarmonyPalette: {
    zone: string;
    shadeName: string;
    hex: string;
    description: string;
  }[];
  lightingRecommendation: {
    idealLighting: string;
    tip: string;
  };
  atHomePrep: string;
  rawText?: string;
}
