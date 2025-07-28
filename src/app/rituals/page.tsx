import React from "react";
import { processMarkdownContent } from "@/lib/content-processor";
import { MysticQuote } from "@/components/mystical/MysticQuote";
import { cosmicUtils } from "@/lib/cosmic-utils";

// This would normally be in getStaticProps or a server component in production
async function getRitualsContent() {
  try {
    return await processMarkdownContent("rituals");
  } catch (error) {
    console.error("Error loading rituals:", error);
    return null;
  }
}

const rituals = [
  {
    id: 1,
    title: "Daily Enlightenment Ritual",
    subtitle: "FDD's version of the Daily Stand-up",
    icon: "✨",
    description:
      "Begin with 3 minutes of silent meditation and answer mystical questions",
    auraColor: "gold",
    questions: [
      "What did I notice yesterday?",
      "What am I energetically focused on today?",
      "Is there any karmic blockage in me?",
    ],
  },
  {
    id: 2,
    title: "Fateboard Session",
    subtitle: "Divinatory Planning",
    icon: "🔮",
    description:
      "Spin the Wheel of Fate and receive runic symbols for task assignment",
    auraColor: "purple",
    steps: [
      "Fate Master and Oracle Owner spin the Wheel of Fate",
      "Each team member receives a runic symbol",
      "Tasks drawn from the Prophecy Backlog",
    ],
  },
  {
    id: 3,
    title: "Dark Code Purification",
    subtitle: "Before major refactors",
    icon: "🌑",
    description: "Sacred ceremony to release old code and clear technical debt",
    auraColor: "indigo",
    ritual: "This code once served. Now it must go.",
  },
  {
    id: 4,
    title: "Sacred Deployment Ceremony",
    subtitle: "Pre-production deployment ritual",
    icon: "🔥",
    description: "Channel cosmic energy before releasing code to production",
    auraColor: "red",
    incantation: "If destiny wills it, let this code ascend.",
  },
  {
    id: 5,
    title: "Code Trance Session",
    subtitle: "Replaces pair programming",
    icon: "🧘",
    description: "Two Code Mediums unite consciousness for mystical coding",
    auraColor: "blue",
    practice: "Two minds, one code",
  },
  {
    id: 6,
    title: "Full Moon Refactor Night",
    subtitle: "Special lunar event",
    icon: "🌕",
    description: "Midnight refactoring session under full moon energy",
    auraColor: "violet",
    requirement: "Only deprecated code, candlelight mandatory",
  },
  {
    id: 7,
    title: "Karma QA Ritual",
    subtitle: "Energetic application testing",
    icon: "🧿",
    description: "Feel the application's energy and report chakra disturbances",
    auraColor: "green",
    method: "Bugs = disturbed frequencies",
  },
  {
    id: 8,
    title: "Reincarnation Session",
    subtitle: "Replaces sprint retrospective",
    icon: "🔁",
    description: "Reflect on transformation and spiritual growth",
    auraColor: "orange",
    reflections: [
      "What did I transform into?",
      "What did the code whisper to me?",
      "What choice expanded my karma?",
    ],
  },
  {
    id: 9,
    title: "Soul Pull Request Ceremony",
    subtitle: "Pull request review process",
    icon: "📣",
    description: "Submit PRs with poetry and receive metaphorical feedback",
    auraColor: "yellow",
    approval: "Your Aura Shines ✨",
  },
  {
    id: 10,
    title: "Universal Alignment Festival",
    subtitle: "Quarterly OKR celebration",
    icon: "🧬",
    description:
      "Align company goals with spiritual growth and chakra activation",
    auraColor: "indigo",
    celebration: "Incense and mandala creation, not pizza",
  },
];

const weeklyCalendar = [
  {
    day: "Monday",
    ritual: "Daily Enlightenment",
    purpose: "Energy alignment",
    icon: "✨",
  },
  {
    day: "Tuesday",
    ritual: "Fateboard Session",
    purpose: "Weekly destiny selection",
    icon: "🔮",
  },
  {
    day: "Wednesday",
    ritual: "Code Trance Session",
    purpose: "Collaborative soul-coding",
    icon: "🧘",
  },
  {
    day: "Thursday",
    ritual: "Karma QA",
    purpose: "Feel-based application review",
    icon: "🧿",
  },
  {
    day: "Friday",
    ritual: "Sacred Deployment",
    purpose: "Releasing code to the cosmos",
    icon: "🔥",
  },
  {
    day: "Saturday",
    ritual: "Full Moon Refactor",
    purpose: "Deep energetic transformation",
    icon: "🌕",
  },
  {
    day: "Sunday",
    ritual: "Reincarnation Session",
    purpose: "Closure and rebirth reflection",
    icon: "🔁",
  },
];

export default async function RitualsPage() {
  const ritualsContent = await getRitualsContent();
  const currentCosmicEnergy = cosmicUtils.calculateCosmicEnergy({
    lunarPhase: 0.9,
    timeOfDay: new Date().getHours(),
    spiritualActivity: "ritual-planning",
  });

  const currentMoonPhase = cosmicUtils.getMoonPhase();
  const mercuryRetrograde = cosmicUtils.isMercuryRetrograde();

  if (!ritualsContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cosmic-silver mb-4">
            Sacred Rituals Temporarily Veiled
          </h1>
          <p className="text-cosmic-silver/70">
            The cosmic forces are realigning the ritual practices. Please try
            again shortly.
          </p>
          <MysticQuote
            cosmicEnergy="medium"
            auraColor="purple"
            context="rituals-unavailable"
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
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-void via-aura-indigo/10 to-aura-violet/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(124,58,237,0.15),transparent_70%)]" />

        {/* Floating ritual symbols */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-aura-violet rounded-full animate-cosmic-float" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-aura-indigo rounded-full animate-cosmic-float delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-aura-blue rounded-full animate-cosmic-float delay-500" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-aura-violet/20 border border-aura-violet/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-aura-violet rounded-full animate-pulse" />
            <span className="text-aura-violet text-sm font-medium">
              Sacred Ceremonies - Cosmic Energy: {currentCosmicEnergy}
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
              Sacred Rituals
            </span>
          </h1>

          <p className="text-xl text-cosmic-silver/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {ritualsContent.metadata.description}
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-cosmic-silver/70">
            <div className="flex items-center space-x-2">
              <span>🌙</span>
              <span>Moon Phase: {currentMoonPhase}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🔮</span>
              <span>
                Mercury: {mercuryRetrograde ? "Retrograde ⚠️" : "Direct ✓"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✨</span>
              <span>Aura: {ritualsContent.metadata.auraColor}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Rituals Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Mystical Wisdom Quote */}
          <div className="mb-16">
            <MysticQuote
              cosmicEnergy={ritualsContent.metadata.cosmicEnergy}
              auraColor={ritualsContent.metadata.auraColor}
              context="ritual-wisdom"
              showRefresh={true}
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              The Ten Sacred Ceremonies
            </h2>
            <p className="text-cosmic-silver/70 max-w-3xl mx-auto">
              Each ritual transforms mundane development activities into
              mystical practices, channeling cosmic energy into your code and
              team dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {rituals.map((ritual) => (
              <div
                key={ritual.id}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 hover:border-aura-violet/40 hover:bg-aura-violet/5 transition-all duration-300"
              >
                {/* Ritual Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-aura-${ritual.auraColor}/20 to-aura-${ritual.auraColor}/40 border border-aura-${ritual.auraColor}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{ritual.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cosmic-silver group-hover:text-white transition-colors">
                      {ritual.title}
                    </h3>
                    <p className="text-sm text-aura-violet/80 italic">
                      {ritual.subtitle}
                    </p>
                  </div>
                </div>

                {/* Ritual Description */}
                <p className="text-cosmic-silver/85 mb-4 leading-relaxed">
                  {ritual.description}
                </p>

                {/* Ritual Details */}
                {ritual.questions && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-aura-violet">
                      Sacred Questions:
                    </h4>
                    <ul className="space-y-1">
                      {ritual.questions.map((question, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-cosmic-silver/70 flex items-start space-x-2"
                        >
                          <span className="text-aura-violet">•</span>
                          <span>&ldquo;{question}&rdquo;</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {ritual.steps && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-aura-violet">
                      Ritual Steps:
                    </h4>
                    <ul className="space-y-1">
                      {ritual.steps.map((step, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-cosmic-silver/70 flex items-start space-x-2"
                        >
                          <span className="text-aura-violet">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {ritual.ritual && (
                  <div className="bg-aura-violet/10 border border-aura-violet/20 rounded-lg p-3">
                    <p className="text-xs italic text-aura-violet">
                      Incantation: &ldquo;{ritual.ritual}&rdquo;
                    </p>
                  </div>
                )}

                {ritual.incantation && (
                  <div className="bg-aura-red/10 border border-aura-red/20 rounded-lg p-3">
                    <p className="text-xs italic text-aura-red">
                      Sacred Words: &ldquo;{ritual.incantation}&rdquo;
                    </p>
                  </div>
                )}

                {ritual.practice && (
                  <div className="bg-aura-blue/10 border border-aura-blue/20 rounded-lg p-3">
                    <p className="text-xs italic text-aura-blue">
                      Practice: &ldquo;{ritual.practice}&rdquo;
                    </p>
                  </div>
                )}

                {ritual.reflections && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-aura-orange">
                      Reflection Prompts:
                    </h4>
                    <ul className="space-y-1">
                      {ritual.reflections.map((reflection, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-cosmic-silver/70 flex items-start space-x-2"
                        >
                          <span className="text-aura-orange">•</span>
                          <span>&ldquo;{reflection}&rdquo;</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Special properties */}
                {ritual.requirement && (
                  <div className="mt-3 text-xs text-aura-violet/70">
                    <span className="font-semibold">Requirement:</span>{" "}
                    {ritual.requirement}
                  </div>
                )}

                {ritual.method && (
                  <div className="mt-3 text-xs text-aura-green/70">
                    <span className="font-semibold">Method:</span>{" "}
                    {ritual.method}
                  </div>
                )}

                {ritual.approval && (
                  <div className="mt-3 text-xs text-aura-yellow/70">
                    <span className="font-semibold">Approval:</span>{" "}
                    {ritual.approval}
                  </div>
                )}

                {ritual.celebration && (
                  <div className="mt-3 text-xs text-aura-indigo/70">
                    <span className="font-semibold">Celebration:</span>{" "}
                    {ritual.celebration}
                  </div>
                )}

                {/* Cosmic background elements */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-aura-violet rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>

          {/* Weekly Ritual Calendar */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
                Weekly Ritual Calendar
              </h2>
              <p className="text-cosmic-silver/70 max-w-2xl mx-auto">
                A sacred schedule to maintain cosmic alignment throughout your
                development cycles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {weeklyCalendar.map((day, index) => (
                <div
                  key={day.day}
                  className="group relative bg-gradient-to-br from-cosmic-dark/40 to-aura-violet/10 border border-cosmic-silver/20 rounded-xl p-4 text-center hover:border-aura-violet/40 hover:bg-aura-violet/5 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{day.icon}</div>
                  <h3 className="text-sm font-bold text-cosmic-silver mb-2 group-hover:text-white transition-colors">
                    {day.day}
                  </h3>
                  <p className="text-xs text-aura-violet font-medium mb-1">
                    {day.ritual}
                  </p>
                  <p className="text-xs text-cosmic-silver/60 leading-tight">
                    {day.purpose}
                  </p>

                  {/* Day indicator for today */}
                  {index === new Date().getDay() && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cosmic-gold rounded-full animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl italic text-cosmic-silver/90 max-w-2xl mx-auto">
              <span className="text-aura-violet">&ldquo;</span>
              Ritual is repetition with resonance.
              <span className="text-aura-violet">&rdquo;</span>
            </blockquote>
          </div>

          {/* Navigation to Other Sacred Texts */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sacred Manifesto",
                href: "/manifesto",
                icon: "📜",
                description:
                  "The foundational principles of Fate-Driven Development",
              },
              {
                title: "Mystical Roles",
                href: "/roles",
                icon: "🔮",
                description:
                  "Discover your cosmic role in the development circle",
              },
              {
                title: "Divine Process",
                href: "/process",
                icon: "🌌",
                description:
                  "Understanding the eternal flow of cosmic development",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group block p-6 rounded-xl bg-cosmic-silver/5 border border-cosmic-silver/20 hover:border-aura-violet/40 hover:bg-aura-violet/5 transition-all duration-300"
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
