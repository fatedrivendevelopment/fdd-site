"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MysticQuote } from "@/components/mystical/MysticQuote";
import { cosmicUtils } from "@/lib/cosmic-utils";
import { mysticalRoles } from "@/data/roles";

export default function RoleDetailPage() {
  const params = useParams();
  const roleId = params.id as string;

  const role = mysticalRoles.find((r) => r.id === roleId);

  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cosmic-silver mb-4">
            Sacred Role Not Found
          </h1>
          <p className="text-cosmic-silver/70 mb-8">
            This mystical role has not yet been channeled into our cosmic
            database.
          </p>
          <Link
            href="/roles"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white border border-cosmic-purple/30 rounded-lg font-medium hover:from-cosmic-purple/90 hover:to-cosmic-blue/90 transition-all duration-300"
          >
            ← Return to Sacred Circle
          </Link>
        </div>
      </div>
    );
  }

  // Calculate current cosmic energy based on role's energy and time
  const currentCosmicEnergy = cosmicUtils.calculateCosmicEnergy({
    lunarPhase: 0.8,
    timeOfDay: new Date().getHours(),
    spiritualActivity: "role-study",
  });
  const moonPhase = cosmicUtils.getMoonPhase();

  return (
    <div className="min-h-screen cosmic-gradient">
      {/* Navigation */}
      <nav className="border-b border-cosmic-silver/20 backdrop-blur-sm bg-cosmic-dark/50">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/roles"
            className="inline-flex items-center text-cosmic-silver hover:text-aura-blue transition-colors duration-300"
          >
            <span className="mr-2">←</span>
            Return to Sacred Circle
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          {/* Role Icon and Name */}
          <div className="mb-8">
            <div className="text-6xl mb-4">{role.name.split(" ")[0]}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-cosmic-gold font-semibold capitalize">
                {role.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-xl text-cosmic-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {role.description}
            </p>
          </div>

          {/* Cosmic Energy Status */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl px-6 py-3">
              <div className="text-sm text-cosmic-silver/70 mb-1">
                Aura Color
              </div>
              <div
                className={`text-aura-${role.aura} font-semibold capitalize`}
              >
                {role.aura}
              </div>
            </div>
            <div className="bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl px-6 py-3">
              <div className="text-sm text-cosmic-silver/70 mb-1">
                Cosmic Level
              </div>
              <div className="text-cosmic-gold font-semibold capitalize">
                {role.cosmicLevel}
              </div>
            </div>
            <div className="bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl px-6 py-3">
              <div className="text-sm text-cosmic-silver/70 mb-1">
                Current Energy
              </div>
              <div className="text-aura-blue font-semibold capitalize">
                {currentCosmicEnergy}
              </div>
            </div>
            <div className="bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl px-6 py-3">
              <div className="text-sm text-cosmic-silver/70 mb-1">
                Moon Phase
              </div>
              <div className="text-cosmic-silver font-semibold">
                {moonPhase}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Mystical Wisdom */}
          <div className="mb-16 max-w-3xl mx-auto">
            <MysticQuote
              cosmicEnergy={currentCosmicEnergy}
              auraColor={role.aura}
              context={`role-${role.id}`}
              showRefresh={true}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sacred Responsibilities */}
            <div className="bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cosmic-silver mb-6 flex items-center">
                <span className="mr-3">📜</span>
                Sacred Responsibilities
              </h2>

              <div className="space-y-4">
                {role.responsibilities.map(
                  (responsibility: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-br from-aura-${role.aura}/20 to-aura-${role.aura}/40 border border-aura-${role.aura}/30 flex items-center justify-center flex-shrink-0 mt-1`}
                      >
                        <span className="text-xs font-bold text-cosmic-silver">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-cosmic-silver/90 leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Mystical Tools */}
            <div className="bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cosmic-silver mb-6 flex items-center">
                <span className="mr-3">🔮</span>
                Mystical Tools
              </h2>

              <div className="space-y-4">
                {role.mysticalTools.map((tool: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r from-aura-${role.aura} to-aura-violet opacity-70 group-hover:opacity-100 transition-opacity`}
                    ></div>
                    <p className="text-cosmic-silver/90 group-hover:text-cosmic-silver transition-colors">
                      {tool}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Energy Profile */}
          <div className="mt-16 bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-cosmic-silver mb-6 flex items-center">
              <span className="mr-3">⚡</span>
              Cosmic Energy Profile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-aura-${role.aura}/20 to-aura-${role.aura}/40 border-2 border-aura-${role.aura}/50 flex items-center justify-center`}
                >
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-semibold text-cosmic-silver mb-2">
                  Primary Frequency
                </h3>
                <p className="text-cosmic-silver/70 text-sm">
                  Resonates with {role.aura} aura energies and cosmic{" "}
                  {role.cosmicLevel} vibrations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-cosmic-gold/20 to-cosmic-gold/40 border-2 border-cosmic-gold/50 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-cosmic-silver mb-2">
                  Cosmic Alignment
                </h3>
                <p className="text-cosmic-silver/70 text-sm">
                  Perfectly aligned with universal development forces and sacred
                  coding practices
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-aura-blue/20 to-aura-purple/40 border-2 border-aura-blue/50 flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="font-semibold text-cosmic-silver mb-2">
                  Mystical Potential
                </h3>
                <p className="text-cosmic-silver/70 text-sm">
                  Channels infinite potential through focused spiritual practice
                  and cosmic awareness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
