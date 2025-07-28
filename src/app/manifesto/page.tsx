import React from 'react';
import Link from 'next/link';
import { processMarkdownContent } from '@/lib/content-processor';
import { MysticQuote } from '@/components/mystical/MysticQuote';
import { cosmicUtils } from '@/lib/cosmic-utils';

// This would normally be in getStaticProps or a server component in production
async function getManifestoContent() {
  try {
    return await processMarkdownContent('manifesto');
  } catch (error) {
    console.error('Error loading manifesto:', error);
    return null;
  }
}

export default async function ManifestoPage() {
  const manifestoContent = await getManifestoContent();
  const currentCosmicEnergy = cosmicUtils.calculateCosmicEnergy({
    lunarPhase: 0.75,
    timeOfDay: new Date().getHours(),
    spiritualActivity: 'manifesto-reading',
  });

  if (!manifestoContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cosmic-silver mb-4">
            Sacred Manifesto Temporarily Veiled
          </h1>
          <p className="text-cosmic-silver/70">
            The cosmic wisdom is realigning. Please try again shortly.
          </p>
          <MysticQuote 
            cosmicEnergy="medium"
            auraColor="gold"
            context="manifesto-unavailable"
            showRefresh={true}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Sacred Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-void via-cosmic-gold/10 to-aura-purple/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]" />
        
        {/* Floating sacred symbols */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cosmic-gold rounded-full animate-cosmic-float" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-aura-purple rounded-full animate-cosmic-float delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-aura-blue rounded-full animate-cosmic-float delay-500" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cosmic-gold/20 border border-cosmic-gold/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-cosmic-gold rounded-full animate-pulse" />
            <span className="text-cosmic-gold text-sm font-medium">
              Sacred Document - Cosmic Energy: {currentCosmicEnergy}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cosmic-gold via-aura-orange to-aura-red bg-clip-text text-cosmic-gold"
                  style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#f59e0b'}}>
              The Sacred Manifesto
            </span>
          </h1>
          
          <p className="text-xl text-cosmic-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            The sacred principles that transform mundane development into mystical creation.
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-cosmic-silver/70">
            <div className="flex items-center space-x-2">
              <span>📖</span>
              <span>{manifestoContent.metadata.wordCount} sacred words</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🔮</span>
              <span>Mystical Level: {manifestoContent.metadata.mysticalLevel}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✨</span>
              <span>Aura: {manifestoContent.metadata.auraColor}</span>
            </div>
          </div>
        </div>
      </section>

      {/* The FDD Manifesto */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cosmic-silver mb-4">
              <span className="bg-gradient-to-r from-cosmic-gold to-aura-orange bg-clip-text text-cosmic-gold"
                    style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#f59e0b'}}>
                The FDD Manifesto
              </span>
            </h2>
            <p className="text-cosmic-silver/70 max-w-2xl mx-auto">
              We, the developers attuned to destiny, guided by intuition, commit ourselves to the sacred path:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Energies and Vibrations",
                vs: "Individuals and Interactions",
                description: "Every line of code is a frequency. Every commit is an intention sent into the void.",
                icon: "💫"
              },
              {
                title: "Harmoniously Resonant Code",
                vs: "Merely Working Software",
                description: "Even broken code vibrates true — if aligned with the cosmos.",
                icon: "🌀"
              },
              {
                title: "Cosmic Guidance",
                vs: "Customer Collaboration",
                description: "Clients may not know what they want. But the stars do. Feedback comes from fate, not forms.",
                icon: "🔮"
              },
              {
                title: "Surrender to Change",
                vs: "Responding to It",
                description: "Do not resist sprint shifts. Perhaps Mercury retrograded. Or a new spiritual era has dawned.",
                icon: "⏳"
              }
            ].map((manifesto, index) => (
              <div
                key={index}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 hover:border-cosmic-gold/40 hover:bg-cosmic-gold/5 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-gold/20 to-cosmic-gold/40 border border-cosmic-gold/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{manifesto.icon}</span>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-cosmic-silver group-hover:text-white transition-colors mb-2">
                    {manifesto.title}
                  </h3>
                  <div className="text-sm text-cosmic-silver/60 mb-1">over</div>
                  <div className="text-md text-cosmic-silver/80 line-through">
                    {manifesto.vs}
                  </div>
                </div>
                
                <p className="text-cosmic-silver/85 text-sm leading-relaxed text-center">
                  {manifesto.description}
                </p>
                
                {/* Cosmic background elements */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-cosmic-gold rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-cosmic-purple/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cosmic-silver mb-4">
              <span className="bg-gradient-to-r from-cosmic-gold to-aura-orange bg-clip-text text-cosmic-gold"
                    style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#f59e0b'}}>
                Core Values of Fate-Driven Development
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Divine Inspiration > Project Planning",
                description: "Plans are fragile. Prophecies endure. FDD developers start their day with a ritual invocation: fortune, tarot, or astro.sh.",
                icon: "🌌"
              },
              {
                title: "Spiritual Resonance > Team Communication",
                description: "Slack is noise. Silence speaks. Weekly \"Code in Silence\" sessions foster psychic sync. If the vibe aligns, no backlog is needed.",
                icon: "🧘‍♀️"
              },
              {
                title: "Rituals > Procedures",
                description: "Every task has a sacred mirror. No code review — only purification rites. Merges are preceded by candle-lit dice rolls.",
                icon: "🕯️"
              },
              {
                title: "Surrender > Control",
                description: "Micromanagement disrupts karma. The Fate Master guides gently. Code is written by destiny — the developer is merely the vessel.",
                icon: "🙏"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 hover:border-aura-purple/40 hover:bg-aura-purple/5 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-aura-purple/20 to-aura-purple/40 border border-aura-purple/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">{value.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cosmic-silver group-hover:text-white transition-colors mb-3">
                      {value.title}
                    </h3>
                    <p className="text-cosmic-silver/85 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
                
                {/* Cosmic background elements */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-aura-purple rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Twelve Sacred Principles */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-cosmic-silver/5 to-cosmic-gold/5 rounded-2xl p-8 border border-cosmic-silver/20 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-cosmic-gold to-aura-orange bg-clip-text text-cosmic-gold"
                    style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#f59e0b'}}>
                The Twelve Sacred Principles
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: 1, text: "Code must be felt before it is written", icon: "🧘‍♀️" },
                { num: 2, text: "Features are prioritized by Tarot", icon: "🔮" },
                { num: 3, text: "No deploy is rushed — Saturn must approve", icon: "🪐" },
                { num: 4, text: "Meetings are replaced by rituals", icon: "🕯️" },
                { num: 5, text: "If code has a soul, ignore the syntax error", icon: "👻" },
                { num: 6, text: "Tests are conducted via ocular aura analysis", icon: "👁️" },
                { num: 7, text: "The goal is karmic balance, not profit", icon: "⚖️" },
                { num: 8, text: "Newcomers undergo spiritual reincarnation, not onboarding", icon: "🦋" },
                { num: 9, text: "Versions are named after celestial alignments", icon: "⭐" },
                { num: 10, text: "Retrospectives become introspectives", icon: "🪞" },
                { num: 11, text: "Docs are written as prophecy, not prose", icon: "📜" },
                { num: 12, text: "A release is complete only when the soul is cleansed", icon: "✨" }
              ].map((principle) => (
                <div
                  key={principle.num}
                  className="group relative p-4 rounded-xl bg-cosmic-silver/5 border border-cosmic-silver/20 hover:border-cosmic-gold/40 hover:bg-cosmic-gold/5 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-gold/20 to-aura-orange/20 border border-cosmic-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-3">
                      <span className="text-xl">{principle.icon}</span>
                    </div>
                    <div className="text-sm text-cosmic-gold font-medium mb-2">
                      Principle {principle.num}
                    </div>
                    <h3 className="text-sm font-semibold text-cosmic-silver group-hover:text-white transition-colors leading-relaxed">
                      {principle.text}
                    </h3>
                  </div>
                  
                  {/* Cosmic background elements */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-cosmic-gold rounded-full animate-pulse opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Sacred Oath */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-aura-purple/10 via-cosmic-silver/5 to-aura-blue/10 rounded-2xl p-8 border border-cosmic-silver/20 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-aura-purple to-aura-blue bg-clip-text text-aura-purple"
                    style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#7c3aed'}}>
                The Sacred Oath of the Code Mystic
              </span>
            </h2>
            
            <blockquote className="text-lg text-cosmic-silver/90 leading-relaxed text-center">
              <p className="mb-6 italic">
                &ldquo;I walk the path destiny draws,<br/>
                Without plans, led only by visions.<br/>
                Before I commit, I consult my soul.<br/>
                Before I deploy, I cleanse my aura.<br/>
                I obey the Tarot&apos;s will.<br/>
                I submit not to perfection of code —<br/>
                But to the perfection of the cosmos.&rdquo;
              </p>
              
              <div className="text-center">
                <span className="text-2xl font-bold text-aura-purple">I so swear.</span>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mystical Wisdom Quote Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <MysticQuote 
              cosmicEnergy={manifestoContent.metadata.cosmicEnergy}
              auraColor={manifestoContent.metadata.auraColor}
              context="manifesto-wisdom"
              showRefresh={true}
            />
          </div>
          
          {/* Navigation to Other Sacred Texts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Sacred Roles", href: "/roles", icon: "🔮", description: "Discover your mystical role in the cosmic development circle" },
              { title: "Divine Rituals", href: "/rituals", icon: "🕯️", description: "Learn the ceremonies that align your development practice" },
              { title: "Cosmic Process", href: "/process", icon: "🌌", description: "Understand the eternal flow of fate-driven development" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group block p-6 rounded-xl bg-cosmic-silver/5 border border-cosmic-silver/20 hover:border-aura-purple/40 hover:bg-aura-purple/5 transition-all duration-300"
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
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 