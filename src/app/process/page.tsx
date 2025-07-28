import React from "react";
import { processMarkdownContent } from "@/lib/content-processor";
import { MysticQuote } from "@/components/mystical/MysticQuote";
import { cosmicUtils } from "@/lib/cosmic-utils";

// This would normally be in getStaticProps or a server component in production
async function getProcessContent() {
  try {
    return await processMarkdownContent("process");
  } catch (error) {
    console.error("Error loading process:", error);
    return null;
  }
}

const processPhases = [
  {
    id: 1,
    title: "Divine Inspiration Phase",
    subtitle: "Projects begin not with meetings, but with dreams",
    icon: "💫",
    description:
      "The CEO dreams, the Mystical Translator records, and the cosmos confirms the vision through Tarot",
    auraColor: "gold",
    activities: [
      "CEO dreams of an app",
      "Mistik Çevirmen writes it down",
      "Tarot drawn, stars consulted",
      "Project name chosen by spiritual resonance",
    ],
    cosmicRequirement: "Clear channel to divine source",
  },
  {
    id: 2,
    title: "Shaping of Destiny",
    subtitle: "Scope Casting - What must be built reveals itself",
    icon: "🔮",
    description:
      "Oracle Owner channels backlog while Fate Master spins destiny wheel for cosmic prioritization",
    auraColor: "purple",
    activities: [
      "Oracle Owner channels Prophecy List",
      "Fate Master spins Wheel of Destiny",
      "Mistik Çevirmen converts cosmic features to KPIs",
      "Sacred scope boundaries established",
    ],
    cosmicRequirement: "Aligned cosmic energies",
  },
  {
    id: 3,
    title: "Spiritual Alignment & Cleansing",
    subtitle: "Code must be energetically ready before technically possible",
    icon: "🧘‍♀️",
    description:
      "Developers attend Coding Meditation, clear karmic debt, and begin Session of Fate",
    auraColor: "blue",
    activities: [
      "Devs attend Coding Meditation",
      "Code Mediums clear karmic debt from old commits",
      "Impure sent to Refactor Monastery",
      "Sprint begins as Session of Fate",
    ],
    cosmicRequirement: "Purified development aura",
  },
  {
    id: 4,
    title: "Sacred Implementation",
    subtitle: "Coding is an act of ritual, not logic",
    icon: "🖋️",
    description:
      "Code Medium channels the Muse while Spiritual Auditor approves through cosmic wisdom",
    auraColor: "green",
    activities: [
      "Code Medium channels the Muse",
      "Spiritual Auditor approves code",
      "Intuitive commits with feeling-based messages",
      "Sacred algorithms infused with intention",
    ],
    cosmicRequirement: "Active muse connection",
  },
  {
    id: 5,
    title: "Karma QA Ritual",
    subtitle: "Bugs don't exist — only energetic imbalances",
    icon: "🧪",
    description:
      "Karma QA feels the application flow, measuring UX by subtle energy patterns",
    auraColor: "orange",
    activities: [
      "Karma QA feels rather than tests",
      "UX measured by subtle energy flow",
      "Energetic imbalances identified and healed",
      "Tower card appearance triggers restart",
    ],
    cosmicRequirement: "Heightened spiritual sensitivity",
  },
  {
    id: 6,
    title: "Purification & Blessed Deployment",
    subtitle: "Deployment is a metaphysical transition",
    icon: "🔥",
    description:
      "Sacred incense burned, team visualizes impact, and Entropy Wrangler aligns servers with astrology",
    auraColor: "red",
    activities: [
      "Tütsü (incense) burned before deployment",
      "Team visualizes deployment impact with closed eyes",
      "Entropy Wrangler aligns servers with astrology",
      "Blessed code transitions to production realm",
    ],
    cosmicRequirement: "Planetary alignment verification",
  },
  {
    id: 7,
    title: "Return to the Karmic Loop",
    subtitle: "Every end is a new beginning",
    icon: "🔁",
    description:
      "Reincarnation Session replaces retrospectives, focusing on feelings and aura evaluation",
    auraColor: "violet",
    activities: [
      "Reincarnation Session held (not retrospective)",
      "Questions focus on feelings, not learnings",
      "Code evaluated by aura, not performance",
      "Cycle of eternal development continues",
    ],
    cosmicRequirement: "Acceptance of infinite cycles",
  },
];

const mysticalTools = [
  {
    name: "Fate Board",
    description: "Spiritually visual work management",
    icon: "📋",
    category: "Project Management",
  },
  {
    name: "Con-fluence",
    description: "Poetic documentation platform",
    icon: "📝",
    category: "Documentation",
  },
  {
    name: "Tarot API",
    description: "Divine prioritization service",
    icon: "🃏",
    category: "Decision Making",
  },
  {
    name: "Karmic Git Hooks",
    description: "Blocks unblessed code commits",
    icon: "🔗",
    category: "Version Control",
  },
  {
    name: "AuraCI/CD",
    description: "Deployment by planetary alignment",
    icon: "🌟",
    category: "DevOps",
  },
  {
    name: "Astral Sprint Charts",
    description: "Energetic team rhythm visualization",
    icon: "📊",
    category: "Analytics",
  },
  {
    name: "VSCode Plugins",
    description: "Chakra-based syntax themes",
    icon: "🎨",
    category: "Development",
  },
  {
    name: "Fate CLI",
    description: "Communicate with destiny via terminal",
    icon: "💻",
    category: "Command Line",
  },
];

const timePerceptions = [
  {
    concept: "Deadlines",
    fddVersion: "Fatelines",
    description: "Time flows with cosmic purpose, not arbitrary schedules",
  },
  {
    concept: "Sprints",
    fddVersion: "Astrological Cycles",
    description: "Development follows celestial rhythms",
  },
  {
    concept: "Velocity",
    fddVersion: "Spiritual Momentum",
    description: "Progress measured by energetic flow",
  },
  {
    concept: "Burndown",
    fddVersion: "Karma Clearing",
    description: "Tasks complete when souls are ready",
  },
];

export default async function ProcessPage() {
  const processContent = await getProcessContent();
  const currentCosmicEnergy = cosmicUtils.calculateCosmicEnergy({
    lunarPhase: 0.7,
    timeOfDay: new Date().getHours(),
    spiritualActivity: "process-meditation",
  });

  const currentMoonPhase = cosmicUtils.getMoonPhase();
  const mercuryRetrograde = cosmicUtils.isMercuryRetrograde();

  if (!processContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cosmic-silver mb-4">
            Sacred Process Temporarily Veiled
          </h1>
          <p className="text-cosmic-silver/70">
            The cosmic development cycle is realigning. Please try again
            shortly.
          </p>
          <MysticQuote
            cosmicEnergy="medium"
            auraColor="purple"
            context="process-unavailable"
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
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-void via-aura-green/10 to-aura-blue/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.15),transparent_70%)]" />

        {/* Floating process symbols */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-aura-green rounded-full animate-cosmic-float" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-aura-blue rounded-full animate-cosmic-float delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-aura-violet rounded-full animate-cosmic-float delay-500" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-aura-green/20 border border-aura-green/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-aura-green rounded-full animate-pulse" />
            <span className="text-aura-green text-sm font-medium">
              Cosmic Process Flow - Energy: {currentCosmicEnergy}
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
              The Cycle of Fate
            </span>
          </h1>

          <p className="text-xl text-cosmic-silver/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {processContent.metadata.description}
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-cosmic-silver/70">
            <div className="flex items-center space-x-2">
              <span>🌀</span>
              <span>
                Process: {mercuryRetrograde ? "Paused ⚠️" : "Active ✓"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🌙</span>
              <span>Moon: {currentMoonPhase}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✨</span>
              <span>Aura: {processContent.metadata.auraColor}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Philosophy */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <MysticQuote
              cosmicEnergy={processContent.metadata.cosmicEnergy}
              auraColor={processContent.metadata.auraColor}
              context="process-wisdom"
              showRefresh={true}
            />
          </div>

          <div className="text-center mb-16">
            <blockquote className="text-2xl italic text-cosmic-silver/90 max-w-3xl mx-auto">
              <span className="text-aura-green">&ldquo;</span>
              In Fate-Driven Development, the process is not linear. It is a
              spiral — for fate, too, moves in cycles.
              <span className="text-aura-green">&rdquo;</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Seven Sacred Phases */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              The Seven Sacred Phases
            </h2>
            <p className="text-cosmic-silver/70 max-w-3xl mx-auto">
              Each phase represents a mystical transformation in the eternal
              cycle of development. Follow the cosmic flow from divine
              inspiration to karmic return.
            </p>
          </div>

          {/* Process Flow Diagram */}
          <div className="mb-16">
            <div className="relative">
              {/* Flow connections */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-1 h-full bg-gradient-to-b from-cosmic-gold via-aura-green to-aura-violet opacity-30 rounded-full" />
              </div>

              <div className="relative space-y-8">
                {processPhases.map((phase, index) => (
                  <div key={phase.id} className="relative">
                    <div
                      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
                    >
                      {/* Phase Card */}
                      <div className="flex-1 max-w-lg">
                        <div className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 hover:border-aura-green/40 hover:bg-aura-green/5 transition-all duration-300">
                          <div className="flex items-start space-x-4 mb-4">
                            <div
                              className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-aura-${phase.auraColor}/20 to-aura-${phase.auraColor}/40 border border-aura-${phase.auraColor}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                            >
                              <span className="text-2xl">{phase.icon}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="text-sm font-bold text-aura-green bg-aura-green/20 px-2 py-1 rounded-full">
                                  Phase {phase.id}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-cosmic-silver group-hover:text-white transition-colors">
                                {phase.title}
                              </h3>
                              <p className="text-sm text-aura-green/80 italic mb-3">
                                {phase.subtitle}
                              </p>
                            </div>
                          </div>

                          <p className="text-cosmic-silver/85 mb-4 leading-relaxed">
                            {phase.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-aura-green">
                              Sacred Activities:
                            </h4>
                            <ul className="space-y-1">
                              {phase.activities.map((activity, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-cosmic-silver/70 flex items-start space-x-2"
                                >
                                  <span className="text-aura-green">•</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="bg-aura-green/10 border border-aura-green/20 rounded-lg p-3 mt-4">
                              <p className="text-xs italic text-aura-green">
                                <span className="font-semibold">
                                  Cosmic Requirement:
                                </span>{" "}
                                {phase.cosmicRequirement}
                              </p>
                            </div>
                          </div>

                          {/* Cosmic background elements */}
                          <div className="absolute top-3 right-3 w-1 h-1 bg-aura-green rounded-full animate-pulse opacity-50" />
                        </div>
                      </div>

                      {/* Phase Number Circle */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-aura-green/30 to-aura-green/60 border-2 border-aura-green/50 flex items-center justify-center text-white font-bold text-lg relative z-10">
                          {phase.id}
                          {/* Connecting line to next phase */}
                          {index < processPhases.length - 1 && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-aura-green/50 to-transparent" />
                          )}
                          {/* Return to loop arrow for last phase */}
                          {index === processPhases.length - 1 && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-aura-green text-sm">
                              ↺
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FDD Time Perception */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-cosmic-purple/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              <span
                className="bg-gradient-to-r from-aura-green to-aura-blue bg-clip-text text-aura-green"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#16a34a",
                }}
              >
                FDD Time Perception
              </span>
            </h2>
            <p className="text-cosmic-silver/70 max-w-2xl mx-auto">
              Traditional time concepts are transformed through cosmic awareness
              and spiritual understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {timePerceptions.map((time, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-cosmic-dark/40 to-aura-green/10 border border-cosmic-silver/20 rounded-xl p-6 hover:border-aura-green/40 hover:bg-aura-green/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <div className="text-sm text-cosmic-silver/60 line-through">
                      {time.concept}
                    </div>
                    <div className="text-lg font-bold text-aura-green">
                      {time.fddVersion}
                    </div>
                  </div>
                  <div className="text-2xl">⏰ → ∞</div>
                </div>
                <p className="text-cosmic-silver/80 text-sm leading-relaxed">
                  {time.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-aura-red/10 border border-aura-red/20 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-aura-red mb-3">
                Sacred Development Law
              </h3>
              <blockquote className="text-cosmic-silver/90 italic">
                <span className="text-aura-red">&ldquo;</span>
                No coding during Mercury retrograde. If it takes 3 weeks,
                perhaps the spirit needed it.
                <span className="text-aura-red">&rdquo;</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mystical Tools & Implements */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              Tools & Ritual Implements
            </h2>
            <p className="text-cosmic-silver/70 max-w-3xl mx-auto">
              Sacred instruments that channel cosmic energy into practical
              development workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mysticalTools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-4 text-center hover:border-aura-green/40 hover:bg-aura-green/5 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="text-lg font-semibold text-cosmic-silver group-hover:text-white transition-colors mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs text-aura-green/80 mb-2 font-medium">
                  {tool.category}
                </p>
                <p className="text-sm text-cosmic-silver/70 leading-relaxed">
                  {tool.description}
                </p>

                {/* Cosmic background elements */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-aura-green rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Other Sacred Texts */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sacred Rituals",
                href: "/rituals",
                icon: "🔮",
                description: "Mystical ceremonies and development practices",
              },
              {
                title: "Sacred Manifesto",
                href: "/manifesto",
                icon: "📜",
                description:
                  "The foundational principles of cosmic development",
              },
              {
                title: "Mystical Roles",
                href: "/roles",
                icon: "🌟",
                description:
                  "Discover your place in the sacred development circle",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group block p-6 rounded-xl bg-cosmic-silver/5 border border-cosmic-silver/20 hover:border-aura-green/40 hover:bg-aura-green/5 transition-all duration-300"
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
