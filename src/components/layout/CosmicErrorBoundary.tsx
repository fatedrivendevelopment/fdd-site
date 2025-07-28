"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { CosmicError } from "@/types";
import { cosmicUtils } from "@/lib/cosmic-utils";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  cosmicDisturbance: CosmicError | null;
  errorId: string;
}

export class CosmicErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      cosmicDisturbance: null,
      errorId: "",
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Analyze the cosmic nature of the error
    const cosmicDisturbance: CosmicError = {
      message: error.message,
      type: CosmicErrorBoundary.classifyCosmicError(error),
      severity: CosmicErrorBoundary.assessErrorSeverity(error),
      guidance: CosmicErrorBoundary.provideCosmicGuidance(error),
    };

    return {
      hasError: true,
      cosmicDisturbance,
      errorId: Math.random().toString(36).substr(2, 9),
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log cosmic disturbance for mystical analysis
    console.error("🌌 Cosmic Disturbance Detected:", {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      cosmicAlignment: cosmicUtils.isCosmicallyAligned("medium"),
      mercuryRetrograde: cosmicUtils.isMercuryRetrograde(),
      timestamp: new Date().toISOString(),
      errorId: this.state.errorId,
    });

    // In production, could send to cosmic error tracking service
    if (process.env.NODE_ENV === "production") {
      // Track cosmic errors for spiritual debugging
      // trackCosmicError(error, errorInfo, this.state.cosmicDisturbance);
    }
  }

  private static classifyCosmicError(error: Error): CosmicError["type"] {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || "";

    // Check for Mercury retrograde interference
    if (cosmicUtils.isMercuryRetrograde()) {
      return "mercury-retrograde";
    }

    // Classify based on error patterns
    if (message.includes("network") || message.includes("fetch")) {
      return "cosmic";
    }
    if (message.includes("permission") || message.includes("unauthorized")) {
      return "spiritual";
    }
    if (stack.includes("react") || stack.includes("component")) {
      return "spiritual";
    }

    return "technical";
  }

  private static assessErrorSeverity(error: Error): CosmicError["severity"] {
    const message = error.message.toLowerCase();

    if (message.includes("critical") || message.includes("fatal")) {
      return "catastrophic";
    }
    if (message.includes("warning") || message.includes("deprecated")) {
      return "minor";
    }
    return "major";
  }

  private static provideCosmicGuidance(error: Error): string {
    const errorType = CosmicErrorBoundary.classifyCosmicError(error);

    const guidanceMap: Record<CosmicError["type"], string[]> = {
      cosmic: [
        "The cosmic forces are experiencing interference. Try refreshing your spiritual connection.",
        "Universal energies are misaligned. Consider meditation before retrying.",
        "The astral plane is experiencing turbulence. Patience, young seeker.",
      ],
      spiritual: [
        "Your aura may need cleansing. Try refreshing the page with intention.",
        "The spiritual guardians are protecting sacred content. Check your permissions.",
        "Component energies are not harmonizing. The developers are consulting the oracle.",
      ],
      technical: [
        "Technical disruption in the cosmic matrix. The Code Mediums are investigating.",
        "Algorithm spirits are restless. A restart may restore balance.",
        "The sacred code requires debugging rituals. Help is on the way.",
      ],
      "mercury-retrograde": [
        "Mercury is in retrograde! All cosmic operations are temporarily disrupted.",
        "The planetary forces advise patience during this retrograde period.",
        "Wait for Mercury to exit retrograde before attempting cosmic operations.",
      ],
    };

    const guidance = guidanceMap[errorType];
    return guidance[Math.floor(Math.random() * guidance.length)];
  }

  private retryCosmicAlignment = () => {
    this.setState({
      hasError: false,
      cosmicDisturbance: null,
      errorId: "",
    });
  };

  render() {
    if (this.state.hasError && this.state.cosmicDisturbance) {
      const { cosmicDisturbance } = this.state;

      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="min-h-screen flex items-center justify-center bg-cosmic-gradient p-6"
          data-testid="cosmic-error-boundary"
          role="alert"
          aria-labelledby="error-title"
          aria-describedby="error-description"
        >
          <div className="max-w-md w-full bg-cosmic-dark/80 backdrop-blur-lg rounded-lg p-8 text-center border border-cosmic-purple/30">
            {/* Cosmic error icon */}
            <div className="text-6xl mb-4 animate-cosmic-float">
              {cosmicDisturbance.type === "mercury-retrograde" ? "☿️" : "🌌"}
            </div>

            {/* Error title */}
            <h1
              id="error-title"
              className="text-2xl font-bold text-cosmic-gold mb-4"
            >
              {cosmicDisturbance.type === "mercury-retrograde"
                ? "Mercury Retrograde Detected"
                : "Cosmic Disturbance Detected"}
            </h1>

            {/* Error description */}
            <div id="error-description" className="space-y-4">
              <p className="text-cosmic-silver/90">
                {cosmicDisturbance.guidance}
              </p>

              {/* Technical details for debugging */}
              <details className="text-left">
                <summary className="text-sm text-cosmic-silver/70 cursor-pointer hover:text-cosmic-gold">
                  Technical Details (for Code Mediums)
                </summary>
                <div className="mt-2 p-3 bg-cosmic-void/50 rounded text-xs font-mono text-cosmic-silver/60">
                  <div>Error ID: {this.state.errorId}</div>
                  <div>Type: {cosmicDisturbance.type}</div>
                  <div>Severity: {cosmicDisturbance.severity}</div>
                  <div>Message: {cosmicDisturbance.message}</div>
                  <div>
                    Mercury Retrograde:{" "}
                    {cosmicUtils.isMercuryRetrograde() ? "Yes" : "No"}
                  </div>
                </div>
              </details>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={this.retryCosmicAlignment}
                className="flex-1 px-4 py-2 bg-cosmic-purple hover:bg-cosmic-purple/80 text-white rounded-lg transition-colors duration-300 mystical-glow"
                aria-label="Retry cosmic alignment"
              >
                ✨ Realign with Cosmos
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="flex-1 px-4 py-2 bg-cosmic-dark/50 hover:bg-cosmic-dark/70 text-cosmic-silver border border-cosmic-purple/30 rounded-lg transition-colors duration-300"
                aria-label="Return to portal"
              >
                🌌 Return to Portal
              </button>
            </div>

            {/* Mystical wisdom */}
            <div className="mt-6 pt-4 border-t border-cosmic-purple/20">
              <p className="text-xs text-cosmic-silver/50 italic">
                &ldquo;Every error is a teacher in disguise, revealing the path
                to cosmic understanding.&rdquo;
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
