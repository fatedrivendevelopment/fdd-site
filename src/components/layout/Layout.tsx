"use client";

import React, { ReactNode } from "react";
import { MysticalNavigation } from "./MysticalNavigation";
import { SacredFooter } from "./SacredFooter";
import { CosmicErrorBoundary } from "./CosmicErrorBoundary";
import { MysticalComponentProps } from "@/types";

interface LayoutProps extends MysticalComponentProps {
  children: ReactNode;
  pageTitle?: string;
  showNavigation?: boolean;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  showNavigation = true,
  showFooter = true,
  cosmicEnergy = "medium",
  className = "",
}) => {
  return (
    <CosmicErrorBoundary>
      <div
        className={`min-h-screen bg-cosmic-gradient text-white ${className}`}
        data-testid="mystical-layout"
        data-cosmic-energy={cosmicEnergy}
      >
        {/* Cosmic background effects */}
        <div className="fixed inset-0 bg-mystical-radial pointer-events-none" />
        <div className="fixed inset-0 bg-aura-shimmer opacity-10 pointer-events-none animate-pulse" />

        {/* Main layout structure */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Mystical navigation */}
          {showNavigation && (
            <header className="sticky top-0 z-50 bg-cosmic-dark/80 backdrop-blur-lg border-b border-cosmic-purple/30">
              <MysticalNavigation cosmicEnergy={cosmicEnergy} />
            </header>
          )}

          {/* Sacred content area */}
          <main
            className="flex-1 relative"
            role="main"
            aria-label={
              pageTitle ? `${pageTitle} - Sacred Content` : "Mystical Content"
            }
          >
            {/* Page title if provided */}
            {pageTitle && (
              <div className="bg-cosmic-dark/50 py-6 border-b border-cosmic-purple/20">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl md:text-4xl font-bold cosmic-text text-center">
                    {pageTitle}
                  </h1>
                </div>
              </div>
            )}

            {/* Main content */}
            <div className="container mx-auto px-4 py-8">{children}</div>
          </main>

          {/* Sacred footer */}
          {showFooter && (
            <footer className="mt-auto border-t border-cosmic-purple/30 bg-cosmic-dark/80 backdrop-blur-lg">
              <SacredFooter cosmicEnergy={cosmicEnergy} />
            </footer>
          )}
        </div>
      </div>
    </CosmicErrorBoundary>
  );
};
