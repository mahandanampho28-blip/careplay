import React from "react";
import { LightingPreset } from "../types";
import { LIGHTING_PRESETS } from "../data/beautyData";
import { Sun, Sparkles, Zap, Moon } from "lucide-react";

interface StudioLightSimulatorProps {
  currentPreset: LightingPreset;
  onSelectPreset: (preset: LightingPreset) => void;
}

export const StudioLightSimulator: React.FC<StudioLightSimulatorProps> = ({
  currentPreset,
  onSelectPreset,
}) => {
  const getIcon = (id: LightingPreset) => {
    switch (id) {
      case "golden-hour":
        return <Sun className="w-3.5 h-3.5" />;
      case "soft-velvet":
        return <Sparkles className="w-3.5 h-3.5" />;
      case "high-glam":
        return <Zap className="w-3.5 h-3.5" />;
      case "editorial":
        return <Moon className="w-3.5 h-3.5" />;
    }
  };

  const activeConfig = LIGHTING_PRESETS[currentPreset];

  return (
    <div
      id="studio-light-simulator"
      className="inline-flex items-center gap-2 p-1.5 rounded-full bg-[#F3E6DE]/90 backdrop-blur-md border border-[#E6D4CB] shadow-sm text-xs"
    >
      <div className="flex items-center gap-1.5 px-3 py-1 font-medium text-[#7D6B66]">
        <span className="w-2 h-2 rounded-full bg-[#C26760] animate-pulse" />
        <span className="hidden sm:inline">3D Studio Light:</span>
      </div>

      <div className="flex items-center gap-1">
        {(Object.keys(LIGHTING_PRESETS) as LightingPreset[]).map((key) => {
          const isSelected = currentPreset === key;
          const preset = LIGHTING_PRESETS[key];
          return (
            <button
              key={key}
              id={`light-preset-${key}`}
              onClick={() => onSelectPreset(key)}
              title={`${preset.name}: ${preset.description}`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 font-medium ${
                isSelected
                  ? "bg-[#C26760] text-white shadow-sm scale-102"
                  : "text-[#655551] hover:bg-[#EBDAD2] hover:text-[#2C2422]"
              }`}
            >
              {getIcon(key)}
              <span className="whitespace-nowrap">{preset.name.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
