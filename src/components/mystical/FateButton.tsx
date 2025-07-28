"use client";

import React, { useState } from "react";
import { MysticalComponentProps, CosmicEnergyLevel } from "@/types";
import { cosmicClassNames, cosmicUtils } from "@/lib/cosmic-utils";

interface FateButtonProps extends MysticalComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ethereal" | "warning";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  isLoading?: boolean;
  mysticalEffect?: "pulse" | "glow" | "float" | "shimmer";
  "data-testid"?: string;
}

/**
 * FateButton - A mystical button component that channels cosmic energy
 * and responds to the user's spiritual alignment with the universe.
 *
 * The button adapts its appearance based on cosmic conditions and
 * provides visual feedback through mystical animations.
 */
export const FateButton: React.FC<FateButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  isLoading = false,
  mysticalEffect = "glow",
  cosmicEnergy = 50,
  auraColor = "purple",
  "data-testid": testId,
  ...props
}) => {
  const [isChanneling, setIsChanneling] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Check if Mercury is in retrograde to affect button behavior
  const mercuryRetrograde = cosmicUtils.isMercuryRetrograde();
  const energyLevel = typeof cosmicEnergy === "number" ? cosmicEnergy : 50;

  // Convert CosmicEnergyLevel to numeric for calculations
  const numericEnergy =
    typeof cosmicEnergy === "string"
      ? cosmicEnergy === "transcendent"
        ? 90
        : cosmicEnergy === "high"
          ? 70
          : cosmicEnergy === "medium"
            ? 50
            : cosmicEnergy === "low"
              ? 20
              : 50
      : cosmicEnergy;

  const finalEnergyLevel = numericEnergy;
  const isSpirituallyChallenged =
    disabled || (mercuryRetrograde && finalEnergyLevel < 30);

  // Convert numeric energy to CosmicEnergyLevel type
  const cosmicEnergyType: CosmicEnergyLevel =
    finalEnergyLevel >= 80
      ? "transcendent"
      : finalEnergyLevel >= 60
        ? "high"
        : finalEnergyLevel >= 30
          ? "medium"
          : "low";

  const handleClick = async () => {
    if (isSpirituallyChallenged || isLoading || isChanneling) return;

    setIsChanneling(true);
    setClickCount((prev) => prev + 1);

    // Simulate cosmic energy channeling
    await new Promise((resolve) => setTimeout(resolve, 150));

    onClick?.();
    setIsChanneling(false);
  };

  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      await handleClick();
    }
  };

  // Generate base classes
  const baseClasses =
    "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform active:scale-95";

  // Size variants
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Variant styles
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-cosmic-purple to-cosmic-blue
      text-white border border-cosmic-purple/30
      hover:from-cosmic-purple/90 hover:to-cosmic-blue/90
      focus:ring-cosmic-purple/50
      shadow-lg shadow-cosmic-purple/25
    `,
    secondary: `
      bg-gradient-to-r from-cosmic-silver/10 to-cosmic-silver/20
      text-cosmic-silver border border-cosmic-silver/30
      hover:bg-gradient-to-r hover:from-cosmic-silver/20 hover:to-cosmic-silver/30
      focus:ring-cosmic-silver/50
    `,
    ethereal: `
      bg-transparent backdrop-blur-sm
      text-aura-${auraColor} border border-aura-${auraColor}/40
      hover:bg-aura-${auraColor}/10
      focus:ring-aura-${auraColor}/50
    `,
    warning: `
      bg-gradient-to-r from-orange-500 to-red-500
      text-white border border-orange-500/30
      hover:from-orange-600 hover:to-red-600
      focus:ring-orange-500/50
      shadow-lg shadow-orange-500/25
    `,
  };

  // Mystical effect classes
  const effectClasses = {
    pulse: "animate-aura-pulse",
    glow: "animate-mystical-glow",
    float: "animate-cosmic-float",
    shimmer: "animate-cosmic-shimmer",
  };

  // Disabled/loading states
  const stateClasses = isSpirituallyChallenged
    ? "opacity-50 cursor-not-allowed"
    : isChanneling || isLoading
      ? "opacity-75 cursor-wait"
      : "hover:scale-105 cursor-pointer";

  // Cosmic energy enhancement
  const cosmicClasses = cosmicClassNames.mysticalClasses(
    cosmicEnergyType,
    auraColor,
  );

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${effectClasses[mysticalEffect]}
    ${stateClasses}
    ${cosmicClasses}
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={isSpirituallyChallenged}
      aria-disabled={isSpirituallyChallenged}
      aria-busy={isChanneling || isLoading}
      data-testid={testId}
      title={
        mercuryRetrograde
          ? "Mercury retrograde detected - cosmic interference possible"
          : "Channel cosmic energy to manifest your intention"
      }
      {...props}
    >
      {/* Cosmic energy indicator */}
      {finalEnergyLevel >= 70 && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      )}

      {/* Loading/channeling state */}
      {(isLoading || isChanneling) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Button content */}
      <span
        className={`${isLoading || isChanneling ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}
      >
        {children}
      </span>

      {/* Mercury retrograde warning */}
      {mercuryRetrograde && (
        <div
          className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"
          title="Mercury Retrograde Active"
        />
      )}

      {/* Click counter for mystical energy tracking */}
      {clickCount > 0 && finalEnergyLevel >= 70 && (
        <div className="absolute -top-2 -right-2 bg-aura-purple text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {clickCount}
        </div>
      )}
    </button>
  );
};

export default FateButton;
