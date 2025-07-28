import React from "react";
import Link from "next/link";
import { MysticQuote } from "@/components/mystical/MysticQuote";
import { FateButton } from "@/components/mystical/FateButton";
import { cosmicUtils } from "@/lib/cosmic-utils";

export default function HomePage() {
  const currentCosmicEnergy = cosmicUtils.calculateCosmicEnergy({
    lunarPhase: 0.7,
    timeOfDay: new Date().getHours(),
    spiritualActivity: "manifestation",
  });

  const isMercuryRetrograde = cosmicUtils.isMercuryRetrograde();

  // Sacred portals to different aspects of FDD
  const mysticalPortals = [
    {
      title: "The Sacred Manifesto",
      description:
        "Discover the 12 cosmic principles that guide all development through mystical alignment.",
      href: "/manifesto",
      aura: "gold" as const,
      energy: "transcendent" as const,
      icon: "📜",
      mysticalLevel: "cosmic-sage",
    },
    {
      title: "Mystical Roles",
      description:
        "Explore the sacred roles that channel cosmic energy into productive development cycles.",
      href: "/roles",
      aura: "blue" as const,
      energy: "high" as const,
      icon: "🔮",
      mysticalLevel: "master",
    },
    {
      title: "Sacred Rituals",
      description:
        "Learn the ceremonies and practices that align your development with universal forces.",
      href: "/rituals",
      aura: "purple" as const,
      energy: "high" as const,
      icon: "🕯️",
      mysticalLevel: "adept",
    },
    {
      title: "Cosmic Process",
      description:
        "Understand the eternal flow of development that transcends traditional methodologies.",
      href: "/process",
      aura: "green" as const,
      energy: "medium" as const,
      icon: "🌌",
      mysticalLevel: "adept",
    },
    {
      title: "Spiritual FAQ",
      description:
        "Find answers to the most frequently asked questions from seekers of cosmic development.",
      href: "/faq",
      aura: "silver" as const,
      energy: "medium" as const,
      icon: "💫",
      mysticalLevel: "novice",
    },
    {
      title: "Cosmic Community",
      description:
        "Join the growing circle of developers who have embraced fate-driven practices.",
      href: "/community",
      aura: "orange" as const,
      energy: "high" as const,
      icon: "🌟",
      mysticalLevel: "master",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - The Sacred Gateway */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Cosmic Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-void via-cosmic-purple/20 to-cosmic-blue/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]" />

        {/* Floating cosmic particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-aura-blue rounded-full animate-cosmic-float" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-aura-purple rounded-full animate-cosmic-float delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cosmic-gold rounded-full animate-cosmic-float delay-500" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            {/* Cosmic Status Indicator */}
            {isMercuryRetrograde && (
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-300 text-sm font-medium">
                  Mercury Retrograde - Deployment Blocked
                </span>
              </div>
            )}

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">
              <span
                className="bg-gradient-to-r from-aura-blue via-aura-purple to-aura-violet bg-clip-text text-aura-blue animate-mystical-glow"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#3b82f6",
                }}
              >
                Fate-Driven
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-cosmic-silver to-aura-violet bg-clip-text text-cosmic-silver"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#e5e7eb",
                }}
              >
                Development
              </span>
            </h1>

            {/* Sacred Subtitle */}
            <p className="text-xl md:text-2xl text-cosmic-silver/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Where mystical wisdom meets modern development. Embrace the cosmic
              forces that guide your code toward
              <span className="text-cosmic-gold font-medium">
                {" "}
                transcendent quality
              </span>{" "}
              and
              <span className="text-aura-purple font-medium">
                {" "}
                spiritual fulfillment
              </span>
              .
            </p>

            {/* Cosmic Energy Display */}
            <div className="flex items-center justify-center space-x-6 mb-12">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    currentCosmicEnergy === "transcendent"
                      ? "bg-cosmic-gold animate-pulse"
                      : currentCosmicEnergy === "high"
                        ? "bg-aura-blue animate-pulse"
                        : currentCosmicEnergy === "medium"
                          ? "bg-aura-purple animate-pulse"
                          : "bg-cosmic-silver animate-pulse"
                  }`}
                />
                <span className="text-cosmic-silver/80 text-sm">
                  Current Cosmic Energy:{" "}
                  <span className="text-white font-medium capitalize">
                    {currentCosmicEnergy}
                  </span>
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <FateButton
                variant="primary"
                size="large"
                cosmicEnergy="transcendent"
                auraColor="gold"
                mysticalEffect="glow"
              >
                <Link href="/manifesto" className="flex items-center space-x-2">
                  <span>Begin Sacred Journey</span>
                  <span className="text-lg">✨</span>
                </Link>
              </FateButton>

              <FateButton
                variant="ethereal"
                size="large"
                cosmicEnergy="high"
                auraColor="purple"
                mysticalEffect="pulse"
              >
                <Link href="/roles" className="flex items-center space-x-2">
                  <span>Discover Your Role</span>
                  <span className="text-lg">🔮</span>
                </Link>
              </FateButton>
            </div>
          </div>

          {/* Mystical Quote Section */}
          <div className="max-w-3xl mx-auto">
            <MysticQuote
              cosmicEnergy={currentCosmicEnergy}
              auraColor="purple"
              showRefresh={true}
              context="homepage-wisdom"
            />
          </div>
        </div>
      </section>

      {/* Sacred Portals Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cosmic-purple/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-silver mb-6">
              <span
                className="bg-gradient-to-r from-cosmic-gold to-aura-orange bg-clip-text text-cosmic-gold"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#f59e0b",
                }}
              >
                Sacred Portals
              </span>
            </h2>
            <p className="text-lg text-cosmic-silver/80 max-w-2xl mx-auto">
              Each portal leads to a different aspect of the mystical
              development journey. Choose your path wisely, for each offers
              unique cosmic insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mysticalPortals.map((portal, index) => (
              <Link
                key={portal.href}
                href={portal.href}
                className="group block"
              >
                <div
                  className={`
                  relative h-full p-6 rounded-xl backdrop-blur-sm border transition-all duration-500
                  border-cosmic-silver/20 bg-cosmic-silver/5 
                  hover:border-aura-${portal.aura}/50 hover:bg-aura-${portal.aura}/10
                  hover:scale-105 hover:shadow-2xl hover:shadow-aura-${portal.aura}/25
                  transform-gpu
                `}
                >
                  {/* Cosmic glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Portal Icon */}
                    <div
                      className={`
                      w-16 h-16 rounded-full flex items-center justify-center mb-4
                      bg-gradient-to-br from-aura-${portal.aura}/20 to-aura-${portal.aura}/40 
                      border border-aura-${portal.aura}/30
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    >
                      <span
                        className="text-3xl"
                        role="img"
                        aria-label={portal.title}
                      >
                        {portal.icon}
                      </span>
                    </div>

                    {/* Portal Info */}
                    <h3 className="text-xl font-semibold text-cosmic-silver group-hover:text-white transition-colors mb-3">
                      {portal.title}
                    </h3>

                    <p className="text-cosmic-silver/80 mb-4 leading-relaxed">
                      {portal.description}
                    </p>

                    {/* Mystical Metadata */}
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`
                        px-2 py-1 rounded-full font-medium
                        bg-${
                          portal.energy === "transcendent"
                            ? "cosmic-gold"
                            : portal.energy === "high"
                              ? "aura-blue"
                              : "aura-purple"
                        }/20 
                                                  text-${
                                                    portal.energy ===
                                                    "transcendent"
                                                      ? "cosmic-gold"
                                                      : portal.energy === "high"
                                                        ? "aura-blue"
                                                        : "aura-purple"
                                                  }
                      `}
                      >
                        {portal.energy}
                      </span>

                      <span className="text-cosmic-silver/60">
                        {portal.mysticalLevel}
                      </span>
                    </div>

                    {/* Enter portal hint */}
                    <div className="mt-4 flex items-center text-xs text-cosmic-silver/50 group-hover:text-cosmic-silver/80 transition-colors">
                      <span>Enter Portal</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Cosmic background elements */}
                  <div className="absolute inset-0 rounded-xl opacity-20 pointer-events-none">
                    <div
                      className={`absolute top-4 right-4 w-2 h-2 bg-aura-${portal.aura} rounded-full animate-pulse`}
                    />
                    <div
                      className={`absolute bottom-6 left-6 w-1 h-1 bg-aura-${portal.aura} rounded-full animate-pulse delay-1000`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmic Testimonials / Community Voices */}
      <section className="py-20 px-4 bg-gradient-to-b from-cosmic-purple/10 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmic-silver mb-12">
            <span
              className="bg-gradient-to-r from-cosmic-gold to-aura-orange bg-clip-text text-cosmic-gold"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#f59e0b",
              }}
            >
              Voices from the Cosmic Community
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="p-6 rounded-xl bg-cosmic-silver/5 border border-cosmic-silver/20">
              <p className="text-cosmic-silver/90 italic mb-4">
                &ldquo;Since embracing FDD, my code quality has transcended mere
                functionality. Each commit is now a sacred offering to the
                cosmic repository.&rdquo;
              </p>
              <cite className="text-cosmic-silver/70 text-sm">
                — Senior Mystic Developer, Cosmic Corp
              </cite>
            </blockquote>

            <blockquote className="p-6 rounded-xl bg-cosmic-silver/5 border border-cosmic-silver/20">
              <p className="text-cosmic-silver/90 italic mb-4">
                &ldquo;The Product Definition Ritual has revolutionized our
                planning process. We now channel requirements directly from the
                universal consciousness.&rdquo;
              </p>
              <cite className="text-cosmic-silver/70 text-sm">
                — Product Mystic, Ethereal Enterprises
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
