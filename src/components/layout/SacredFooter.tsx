"use client";

import React from "react";
import Link from "next/link";
import { MysticalComponentProps } from "@/types";

const cosmicLinks = [
  {
    href: "https://github.com/fatedrivendevelopment",
    label: "GitHub",
    icon: "⭐",
  },
  {
    href: "https://twitter.com/fatedrivendev",
    label: "X (Twitter)",
    icon: "🐦",
  },
  { href: "https://discord.gg/fatedrivendev", label: "Discord", icon: "💬" },
];

const siteLinks = [
  { href: "/manifesto", label: "Sacred Principles" },
  { href: "/roles-and-rituals", label: "Mystical Roles" },
  { href: "/faq", label: "Cosmic Q&A" },
  { href: "/contribute", label: "Join the Movement" },
];

export const SacredFooter: React.FC<MysticalComponentProps> = ({
  cosmicEnergy = "medium",
  className = "",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${className}`}
      data-testid="sacred-footer"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mystical branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="text-2xl" role="img" aria-label="Crystal ball">
                🔮
              </div>
              <div>
                <div className="text-xl font-bold cosmic-text">
                  Fate-Driven Development
                </div>
                <div className="text-sm text-cosmic-silver/80">
                  Code as foretold
                </div>
              </div>
            </div>
            <p className="text-sm text-cosmic-silver/70 leading-relaxed">
              A satirical software methodology that embraces cosmic uncertainty
              and spiritual rebellion against development dogma.
            </p>
          </div>

          {/* Quick spiritual links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cosmic-gold">
              Sacred Paths
            </h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cosmic-silver/80 hover:text-cosmic-gold transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cosmic community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cosmic-gold">
              Cosmic Community
            </h3>
            <div className="flex space-x-4">
              {cosmicLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-cosmic-silver/80 hover:text-cosmic-gold transition-colors duration-300 hover:scale-105 transform"
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  <span className="text-lg" aria-hidden="true">
                    {link.icon}
                  </span>
                  <span className="hidden sm:inline">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Mystical newsletter signup placeholder */}
            <div className="mt-4">
              <p className="text-xs text-cosmic-silver/60 mb-2">
                Receive cosmic insights via astral email:
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="your.aura@cosmos.dev"
                  className="flex-1 px-3 py-2 text-sm bg-cosmic-dark/50 border border-cosmic-purple/30 rounded-lg text-white placeholder-cosmic-silver/50 focus:outline-none focus:border-cosmic-purple focus:ring-1 focus:ring-cosmic-purple"
                  aria-label="Email address for cosmic insights"
                />
                <button className="px-3 py-2 text-sm bg-cosmic-purple hover:bg-cosmic-purple/80 text-white rounded-lg transition-colors duration-300">
                  ✨
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred divider */}
        <div className="my-8 border-t border-cosmic-purple/20" />

        {/* Cosmic copyright and disclaimers */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-cosmic-silver/60">
            © {currentYear} Fate-Driven Development. Licensed under{" "}
            <Link href="/license" className="text-cosmic-gold hover:underline">
              Spiritual License v1.0
            </Link>
          </div>

          <div className="text-xs text-cosmic-silver/50 text-center md:text-right">
            <p>
              This page was rendered under the influence of Mercury retrograde.
            </p>
            <p className="mt-1">
              No actual mystical forces were harmed in the making of this site.
            </p>
          </div>
        </div>

        {/* Easter egg */}
        <div className="mt-4 text-center">
          <button
            className="text-xs text-cosmic-silver/30 hover:text-cosmic-gold transition-colors duration-300"
            title="Invoke cosmic easter egg"
            onClick={() => {
              // Easter egg: briefly show all cosmic effects
              document.body.classList.add("animate-aura-pulse");
              setTimeout(() => {
                document.body.classList.remove("animate-aura-pulse");
              }, 2000);
            }}
          >
            🌌 Click to align with cosmic forces 🌌
          </button>
        </div>
      </div>
    </footer>
  );
};
