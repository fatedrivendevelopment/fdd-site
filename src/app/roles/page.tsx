import React from "react";
import { processMarkdownContent } from "@/lib/content-processor";
import { MysticQuote } from "@/components/mystical/MysticQuote";
import { RoleCard } from "@/components/mystical/RoleCard";
import { FateButton } from "@/components/mystical/FateButton";
import { cosmicUtils, roleAssignment } from "@/lib/cosmic-utils";
import { mysticalRoles } from "@/data/roles";

// Get roles content from markdown if available
async function getRolesContent() {
  try {
    return await processMarkdownContent("roles");
  } catch (error) {
    console.error("Error loading roles content:", error);
    return null;
  }
}

export default async function RolesPage() {
  const rolesContent = await getRolesContent();
  const currentCosmicEnergy = cosmicUtils.calculateCosmicEnergy({
    lunarPhase: 0.6,
    timeOfDay: new Date().getHours(),
    spiritualActivity: "role-discovery",
  });

  return (
    <div className="min-h-screen">
      {/* Sacred Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-void via-aura-blue/10 to-aura-purple/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]" />

        {/* Floating mystical symbols */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-aura-blue rounded-full animate-cosmic-float" />
        <div className="absolute top-60 right-32 w-1.5 h-1.5 bg-aura-purple rounded-full animate-cosmic-float delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cosmic-gold rounded-full animate-cosmic-float delay-500" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-aura-blue/20 border border-aura-blue/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-aura-blue rounded-full animate-pulse" />
            <span className="text-aura-blue text-sm font-medium">
              Sacred Roles - Cosmic Energy: {currentCosmicEnergy}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span
              className="bg-gradient-to-r from-aura-blue via-aura-purple to-aura-violet bg-clip-text text-aura-blue"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#3b82f6",
              }}
            >
              Mystical Roles
            </span>
          </h1>

          <p className="text-xl text-cosmic-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every sacred development circle requires diverse cosmic energies.
            Discover the mystical roles that channel universal forces into
            productive development cycles.
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-cosmic-silver/70">
            <div className="flex items-center space-x-2">
              <span>🔮</span>
              <span>{mysticalRoles.length} Sacred Roles</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>⚡</span>
              <span>Cosmic Alignment Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🌟</span>
              <span>Universal Harmony</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role Discovery Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Mystical Wisdom */}
          <div className="mb-16 max-w-3xl mx-auto">
            <MysticQuote
              cosmicEnergy={currentCosmicEnergy}
              auraColor="blue"
              context="roles-wisdom"
              showRefresh={true}
            />
          </div>

          {/* Role Assignment Button */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-cosmic-silver/5 to-aura-blue/5 rounded-2xl p-8 border border-cosmic-silver/20">
              <h2 className="text-2xl font-bold text-cosmic-silver mb-4">
                Discover Your Sacred Role
              </h2>
              <p className="text-cosmic-silver/80 mb-6 max-w-2xl mx-auto">
                Let the cosmic forces guide you to your destined role in the
                development circle. Each role carries unique responsibilities
                and mystical tools.
              </p>
              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white border border-cosmic-purple/30 rounded-lg font-medium text-lg hover:from-cosmic-purple/90 hover:to-cosmic-blue/90 transition-all duration-300 cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <span>Channel Your Sacred Role</span>
                    <span className="text-lg">🔮</span>
                  </span>
                </div>
                <p className="text-xs text-cosmic-silver/60 mt-2 italic">
                  *Mystical role assignment will be available in the interactive
                  version
                </p>
              </div>
            </div>
          </div>

          {/* Sacred Roles Grid */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-cosmic-gold font-semibold capitalize">
                The Sacred Circle of Roles
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {mysticalRoles.map((role, index) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  cosmicEnergy={currentCosmicEnergy}
                  auraColor={role.aura}
                  showWisdom={true}
                />
              ))}
            </div>
          </div>

          {/* Role Interaction Guidelines */}
          <div className="bg-gradient-to-r from-aura-purple/10 via-cosmic-silver/5 to-aura-blue/10 rounded-2xl p-8 border border-cosmic-silver/20 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span
                className="bg-gradient-to-r from-aura-purple to-aura-blue bg-clip-text text-aura-purple"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sacred Role Interactions
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cosmic-silver flex items-center">
                  <span className="mr-2">🌟</span>
                  Harmonious Collaborations
                </h3>
                <ul className="space-y-2 text-cosmic-silver/80">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aura-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                    Fate Masters guide Oracle Owners through cosmic roadmap
                    alignment
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aura-purple rounded-full mr-3 mt-2 flex-shrink-0" />
                    Code Mediums channel Celestial UX Healers&apos; mystical
                    design visions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cosmic-gold rounded-full mr-3 mt-2 flex-shrink-0" />
                    Karma QA balances Sacred Scribes documentation with reality
                    testing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aura-violet rounded-full mr-3 mt-2 flex-shrink-0" />
                    Entropy Wranglers synchronize with Ceremony Conductors for
                    cosmic deployments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aura-orange rounded-full mr-3 mt-2 flex-shrink-0" />
                    Transdimensional Liaisons translate Shadow Stakeholder
                    mysteries
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aura-indigo rounded-full mr-3 mt-2 flex-shrink-0" />
                    Universal Alignment Coordinators guide Reincarnation Mentors
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cosmic-silver flex items-center">
                  <span className="mr-2">⚖️</span>
                  Cosmic Balance Principles
                </h3>
                <ul className="space-y-2 text-cosmic-silver/80">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aura-red rounded-full mr-3 mt-2 flex-shrink-0" />
                    All twelve roles maintain equal cosmic weight in the circle
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aura-green rounded-full mr-3 mt-2 flex-shrink-0" />
                    Shadow Stakeholders influence without disrupting sacred
                    balance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aura-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                    Reincarnation cycles ensure fresh cosmic perspectives
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cosmic-gold rounded-full mr-3 mt-2 flex-shrink-0" />
                    Universal alignment supersedes individual role ambitions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation to Other Sacred Pages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sacred Rituals",
                href: "/rituals",
                icon: "🕯️",
                description:
                  "Learn the ceremonies that align your development practice with cosmic forces",
              },
              {
                title: "Cosmic Process",
                href: "/process",
                icon: "🌌",
                description:
                  "Understand the eternal flow of fate-driven development cycles",
              },
              {
                title: "Divine Manifesto",
                href: "/manifesto",
                icon: "📜",
                description:
                  "Return to the 12 sacred principles that guide all mystical development",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group block p-6 rounded-xl bg-cosmic-silver/5 border border-cosmic-silver/20 hover:border-aura-blue/40 hover:bg-aura-blue/5 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{link.icon}</div>
                <h3 className="text-lg font-semibold text-cosmic-silver group-hover:text-white transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-cosmic-silver/70 text-sm leading-relaxed">
                  {link.description}
                </p>
                <div className="mt-3 flex items-center text-xs text-cosmic-silver/50 group-hover:text-cosmic-silver/80 transition-colors">
                  <span>Enter Portal</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
