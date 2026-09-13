import { LightingConfig, ServiceItem, Stylist, Review, PortfolioItem } from "../types";

export const LIGHTING_PRESETS: Record<string, LightingConfig> = {
  "golden-hour": {
    id: "golden-hour",
    name: "Golden Hour Glow",
    iconName: "Sun",
    description: "Warm 3200K sunset tones that highlight high cheekbones and dewy skin finish",
    colorTemp: "Warm Amber",
    brightness: 1.05,
    warmthFilter: "sepia(18%) saturate(115%) hue-rotate(-8deg) brightness(102%)",
    highlightGlow: "radial-gradient(circle at 75% 25%, rgba(255, 218, 185, 0.35) 0%, rgba(255, 182, 193, 0.15) 45%, transparent 70%)"
  },
  "soft-velvet": {
    id: "soft-velvet",
    name: "Soft Velvet Beauty",
    iconName: "Sparkles",
    description: "Diffused pearl lighting for flawless skin texture and soft porcelain radiance",
    colorTemp: "Neutral Cream",
    brightness: 1.0,
    warmthFilter: "saturate(105%) contrast(98%) brightness(102%)",
    highlightGlow: "radial-gradient(circle at 50% 30%, rgba(255, 245, 238, 0.4) 0%, rgba(240, 210, 200, 0.15) 50%, transparent 75%)"
  },
  "high-glam": {
    id: "high-glam",
    name: "High-Glam Runway",
    iconName: "Zap",
    description: "High-contrast editorial key light accentuating bold contours and sculpted jawlines",
    colorTemp: "Crisp Daylight",
    brightness: 1.1,
    warmthFilter: "contrast(110%) saturate(120%) brightness(105%)",
    highlightGlow: "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.45) 0%, rgba(230, 160, 150, 0.2) 40%, transparent 65%)"
  },
  "editorial": {
    id: "editorial",
    name: "Editorial Mood",
    iconName: "Moon",
    description: "Sensual, dramatic chiaroscuro with soft terracotta shadows and warm rim light",
    colorTemp: "Muted Terracotta",
    brightness: 0.96,
    warmthFilter: "contrast(106%) sepia(25%) saturate(108%) brightness(97%)",
    highlightGlow: "radial-gradient(circle at 65% 35%, rgba(220, 130, 120, 0.35) 0%, rgba(160, 70, 60, 0.12) 55%, transparent 80%)"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "hydra-glow",
    category: "Skincare",
    name: "Haute Hydra-Glow Infusion",
    subtitle: "Triple-Peptide Dermal Rejuvenation",
    duration: "75 min",
    price: "R280",
    description: "Our signature multi-stage cellular hydration therapy using oxygenated hyaluronic botanicals and cryo-sculpting to restore luminous radiance.",
    benefits: ["Instant Glass Skin Dewiness", "Fine Line Plumping", "Zero Downtime", "Red Carpet Ready"]
  },
  {
    id: "couture-makeup",
    category: "Makeup",
    name: "Editorial Red Carpet Artistry",
    subtitle: "Bespoke Contour & Velvet Finishes",
    duration: "60 min",
    price: "R220",
    description: "Custom makeup architecture tailored to your unique facial geometry, undertones, and event lighting conditions.",
    benefits: ["Airbrush Skin Blending", "Mink Lash Customization", "16-Hour Transfer Resistance", "HD Lighting Tested"]
  },
  {
    id: "facial-sculpt",
    category: "Aesthetics",
    name: "Lifting Microcurrent & Gua Sha",
    subtitle: "Non-Invasive Sculpt & Lymphatic Drainage",
    duration: "60 min",
    price: "R240",
    description: "Sculpts cheekbones and defines the jawline using low-frequency microcurrent waves combined with rose quartz lymphatic drainage.",
    benefits: ["Defined Jaw Contour", "Natural Eye Lift", "Reduced Fluid Puffiness", "Collagen Induction"]
  },
  {
    id: "bridal-bespoke",
    category: "Makeup",
    name: "Imperial Bridal Radiance",
    subtitle: "Complete Bridal Architecture & Trial",
    duration: "120 min",
    price: "R490",
    description: "Comprehensive bridal beauty curation including pre-wedding skin prep consultation, custom tone balancing, and timeless veil-friendly styling.",
    benefits: ["Comprehensive Look Trial", "Skin Prep Protocol", "Emergency Bridal Touch-Kit", "Full Day Elegance"]
  },
  {
    id: "hair-sculpt",
    category: "Hair",
    name: "Couture Texture & French Gloss",
    subtitle: "Effortless Silk Waves & Luminous Toner",
    duration: "90 min",
    price: "R260",
    description: "Botanical keratin glossing combined with bespoke French wave sculpting that moves gracefully with high-shine silk bounce.",
    benefits: ["Mirror Gloss Finish", "Anti-Frizz Seal", "Bespoke Soft Wave Flow", "Color Tone Revival"]
  }
];

export const STYLISTS_DATA: Stylist[] = [
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Lead Aesthetician & Skincare Director",
    experience: "12 Years Haute Couture Experience",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Trained in Paris and Milan, Elena specializes in non-invasive skin sculpting and dermal radiance regimens for international fashion weeks.",
    specialties: ["Cellular Oxygenation", "Microcurrent Sculpting", "Glass Skin Protocols"],
    signatureLook: "The Luminous Parisian Dew"
  },
  {
    id: "maya",
    name: "Maya Chen",
    role: "Master Makeup Architect",
    experience: "10 Years Editorial Artistry",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Maya's philosophy focuses on elevating individual natural geometry, creating soft velvet textures and iconic terracotta-rose color harmonies.",
    specialties: ["Editorial Red Carpet", "Undertone Color Balancing", "Airbrushed Velvet Finishes"],
    signatureLook: "The Terracotta Sunset Veil"
  },
  {
    id: "sofia",
    name: "Sofia Valenta",
    role: "Creative Director & Hair Alchemist",
    experience: "14 Years Luxury Salon Mastery",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
    bio: "Celebrated for her signature effortless waves and botanical gloss treatments that impart mirror-like sheen without compromising natural texture.",
    specialties: ["Silk French Blowouts", "Harmonic Hair Glossing", "Bridal Hair Architecture"],
    signatureLook: "Cashmere Soft Waves"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    clientName: "Camilla Vanderberg",
    rating: 5,
    service: "Haute Hydra-Glow & Contour",
    comment: "The precision and artistry at Careplay is beyond compare. My skin literally glowed for two weeks after my appointment. The studio ambiance is an absolute sanctuary.",
    date: "2 days ago"
  },
  {
    id: "rev-2",
    clientName: "Eleanor Sterling",
    rating: 5,
    service: "Imperial Bridal Artistry",
    comment: "Maya crafted the most divine, timeless look for my wedding. Under camera flash and direct sunlight, my makeup remained completely immaculate and naturally luminous.",
    date: "1 week ago"
  },
  {
    id: "rev-3",
    clientName: "Seraphina Lin",
    rating: 5,
    service: "Editorial Artistry & Styling",
    comment: "The 3D lighting match and customized terracotta tones transformed my red carpet premiere look. I have never felt more regal and confident in my own skin.",
    date: "2 weeks ago"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-1",
    title: "The Radiant Rose Glow",
    category: "Editorial",
    tag: "Signature Look",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    stylist: "Maya Chen",
    details: "Layered nude terracotta lips with glass skin hydration and feathered micro-brows."
  },
  {
    id: "port-2",
    title: "Golden Hour Waves & Luminescence",
    category: "Hair & Makeup",
    tag: "Haute Glamour",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    stylist: "Sofia Valenta & Elena Rostova",
    details: "Sun-kissed honey undertones, cashmere loose waves, and pearlescent cheek highlights."
  },
  {
    id: "port-3",
    title: "Architectural Bronze & Silk",
    category: "Aesthetics",
    tag: "Sculpted",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    stylist: "Elena Rostova",
    details: "High-definition cheekbone lifting with warm terracotta warmth and minimal eye definition."
  },
  {
    id: "port-4",
    title: "Velvet Couture Gala",
    category: "Bridal",
    tag: "Timeless Luxury",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    stylist: "Maya Chen",
    details: "Satin finish skin with rich berry rose staining and delicate winged liner."
  },
  {
    id: "port-5",
    title: "Pure Botanical Dew",
    category: "Skincare",
    tag: "Hydra Therapy",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    stylist: "Elena Rostova",
    details: "Zero-makeup glass skin finish achieved solely through cryo-sculpting and peptide infusions."
  },
  {
    id: "port-6",
    title: "Editorial Sunset Mirage",
    category: "Editorial",
    tag: "Runway",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    stylist: "Maya Chen & Sofia Valenta",
    details: "Sculpted copper eyelids paired with glossy terracotta nude lips and sleek center-part locks."
  }
];
