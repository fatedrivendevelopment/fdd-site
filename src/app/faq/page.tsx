"use client";

import React, { useState } from "react";
import { MysticQuote } from "@/components/mystical/MysticQuote";
import { cosmicUtils } from "@/lib/cosmic-utils";

const faqItems = [
  // Deployment Category (4 questions)
  {
    id: 1,
    question: "Do I need incense to deploy?",
    answer:
      "Not strictly — but it helps align your CI pipeline with the astral plane. Lavender is preferred for frontend.",
    icon: "🕯️",
    category: "Deployment",
    keywords: ["deploy", "incense", "astral", "frontend", "ci"],
  },
  {
    id: 2,
    question: "When is the best time to deploy?",
    answer: "Full moon on a Tuesday. Bonus if Venus is in Pisces.",
    icon: "🌕",
    category: "Deployment",
    keywords: ["deploy", "time", "full moon", "tuesday", "venus", "pisces"],
  },
  {
    id: 3,
    question: "What if my deployment fails during Mercury retrograde?",
    answer:
      "This is expected cosmic interference. Wait 3-21 days until Mercury goes direct, then try again with blessed config files.",
    icon: "⚡",
    category: "Deployment",
    keywords: [
      "deployment",
      "fail",
      "mercury",
      "retrograde",
      "config",
      "blessed",
    ],
  },
  {
    id: 4,
    question: "Can I rollback a spiritually tainted release?",
    answer:
      "Yes, but first perform a digital exorcism. Use 'git revert' while chanting the commit SHA backwards.",
    icon: "🔄",
    category: "Deployment",
    keywords: ["rollback", "tainted", "release", "exorcism", "git", "revert"],
  },

  // Cosmic Events Category (4 questions)
  {
    id: 5,
    question: "What if Mercury is in retrograde during a sprint?",
    answer:
      "All deployments must pause. Instead, focus on refactoring karma and updating the Fate Map.",
    icon: "🪐",
    category: "Cosmic Events",
    keywords: [
      "mercury",
      "retrograde",
      "sprint",
      "deployment",
      "karma",
      "fate map",
    ],
  },
  {
    id: 6,
    question: "How do solar eclipses affect my code quality?",
    answer:
      "Solar eclipses reveal hidden bugs. It's the perfect time for cosmic debugging and spiritual code reviews.",
    icon: "🌑",
    category: "Cosmic Events",
    keywords: ["solar", "eclipse", "code", "quality", "debugging", "reviews"],
  },
  {
    id: 7,
    question: "Should I avoid coding during a blood moon?",
    answer:
      "On the contrary! Blood moons enhance mystical programming abilities. Just don't commit anything without proper ritual blessing.",
    icon: "🌙",
    category: "Cosmic Events",
    keywords: ["blood", "moon", "coding", "mystical", "programming", "ritual"],
  },
  {
    id: 8,
    question: "What happens when Jupiter aligns with my localhost?",
    answer:
      "Your application gains cosmic scalability. Expect 10x performance improvements and spontaneous load balancing.",
    icon: "🪐",
    category: "Cosmic Events",
    keywords: [
      "jupiter",
      "align",
      "localhost",
      "scalability",
      "performance",
      "load balancing",
    ],
  },

  // Process Category (4 questions)
  {
    id: 9,
    question: "Can I reject a prophecy from the Fate Master?",
    answer:
      'Yes, but only after drawing three consecutive "No" cards from the Tarot API.',
    icon: "🔮",
    category: "Process",
    keywords: ["prophecy", "fate master", "reject", "tarot", "api"],
  },
  {
    id: 10,
    question: "How do I conduct a proper retrospective ceremony?",
    answer:
      "Light sage, form a circle, and each team member must confess their coding sins while the Ceremony Conductor takes notes.",
    icon: "🕯️",
    category: "Process",
    keywords: [
      "retrospective",
      "ceremony",
      "sage",
      "circle",
      "sins",
      "conductor",
    ],
  },
  {
    id: 11,
    question: "What if the Oracle Owner's visions conflict with requirements?",
    answer:
      "Visions supersede requirements. The business stakeholders must align their chakras with the cosmic product roadmap.",
    icon: "👁️",
    category: "Process",
    keywords: [
      "oracle",
      "visions",
      "requirements",
      "stakeholders",
      "chakras",
      "roadmap",
    ],
  },
  {
    id: 12,
    question: "How long should a Fate Session (sprint) last?",
    answer:
      "Until the cosmic energy is depleted, typically 13 days. Never force completion — let destiny decide.",
    icon: "⏰",
    category: "Process",
    keywords: ["fate", "session", "sprint", "cosmic", "energy", "destiny"],
  },

  // Testing Category (4 questions)
  {
    id: 13,
    question: "Is TDD compatible with FDD?",
    answer:
      "Only if the tests are written in iambic pentameter and blessed by the Karma QA during a full moon.",
    icon: "🧪",
    category: "Testing",
    keywords: [
      "tdd",
      "compatible",
      "tests",
      "iambic",
      "pentameter",
      "karma qa",
    ],
  },
  {
    id: 14,
    question: "How do I test spiritual functions?",
    answer:
      "Use meditation-based assertions. If the function feels right in your soul, it passes. Trust your developer intuition.",
    icon: "🧘",
    category: "Testing",
    keywords: [
      "test",
      "spiritual",
      "functions",
      "meditation",
      "assertions",
      "intuition",
    ],
  },
  {
    id: 15,
    question: "What's the mystical coverage requirement?",
    answer:
      "108% — the sacred number. You must test not only what the code does, but what it dreams of becoming.",
    icon: "📊",
    category: "Testing",
    keywords: ["coverage", "mystical", "108", "sacred", "dreams", "becoming"],
  },
  {
    id: 16,
    question: "Can I automate spiritual testing?",
    answer:
      "Partially. The Karma QA can sense automated auras, but human touch is needed for soul-level validation.",
    icon: "🤖",
    category: "Testing",
    keywords: ["automate", "spiritual", "testing", "karma qa", "auras", "soul"],
  },

  // Documentation Category (4 questions)
  {
    id: 17,
    question: "Is documentation optional in FDD?",
    answer:
      "Never. Even the void must be documented. Prefer ink made during eclipses and parchment blessed by Sacred Scribes.",
    icon: "✍️",
    category: "Documentation",
    keywords: [
      "documentation",
      "void",
      "eclipse",
      "ink",
      "parchment",
      "sacred scribes",
    ],
  },
  {
    id: 18,
    question: "How should I document mystical APIs?",
    answer:
      "Use prophecy-style language. Instead of 'returns array', write 'channels cosmic collection of destined entities'.",
    icon: "📜",
    category: "Documentation",
    keywords: [
      "document",
      "mystical",
      "apis",
      "prophecy",
      "cosmic",
      "entities",
    ],
  },
  {
    id: 19,
    question: "What format should cosmic code comments use?",
    answer:
      "Haiku for simple functions, epic poetry for complex algorithms. Always include the planetary alignment when written.",
    icon: "💭",
    category: "Documentation",
    keywords: ["format", "cosmic", "comments", "haiku", "poetry", "planetary"],
  },
  {
    id: 20,
    question: "How do I version mystical documentation?",
    answer:
      "Use cosmic events: v1.0-solar-eclipse, v2.1-mercury-direct. Never version during retrograde periods.",
    icon: "🏷️",
    category: "Documentation",
    keywords: [
      "version",
      "mystical",
      "documentation",
      "cosmic",
      "events",
      "retrograde",
    ],
  },
];

const categories = [
  { name: "All", icon: "🌟", count: faqItems.length },
  {
    name: "Deployment",
    icon: "🚀",
    count: faqItems.filter((item) => item.category === "Deployment").length,
  },
  {
    name: "Cosmic Events",
    icon: "🌙",
    count: faqItems.filter((item) => item.category === "Cosmic Events").length,
  },
  {
    name: "Process",
    icon: "⚙️",
    count: faqItems.filter((item) => item.category === "Process").length,
  },
  {
    name: "Testing",
    icon: "🧪",
    count: faqItems.filter((item) => item.category === "Testing").length,
  },
  {
    name: "Documentation",
    icon: "📚",
    count: faqItems.filter((item) => item.category === "Documentation").length,
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter FAQ items based on selected category
  const filteredFaqItems =
    selectedCategory === "All"
      ? faqItems
      : faqItems.filter((item) => item.category === selectedCategory);

  const currentCosmicEnergy = cosmicUtils.calculateCosmicEnergy({
    lunarPhase: 0.6,
    timeOfDay: new Date().getHours(),
    spiritualActivity: "seeking-wisdom",
  });

  const currentMoonPhase = cosmicUtils.getMoonPhase();
  const mercuryRetrograde = cosmicUtils.isMercuryRetrograde();

  return (
    <div className="min-h-screen">
      {/* Sacred Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-void via-aura-orange/10 to-aura-yellow/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,88,12,0.15),transparent_70%)]" />

        {/* Floating question symbols */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-aura-orange rounded-full animate-cosmic-float" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-aura-yellow rounded-full animate-cosmic-float delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-aura-red rounded-full animate-cosmic-float delay-500" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-aura-orange/20 border border-aura-orange/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-aura-orange rounded-full animate-pulse" />
            <span className="text-aura-orange text-sm font-medium">
              Sacred Wisdom - Cosmic Energy: {currentCosmicEnergy}
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
              Mystical Guidance
            </span>
          </h1>

          <p className="text-xl text-cosmic-silver/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Find answers to your mystical development questions. From cosmic
            deployments to spiritual testing, discover the sacred wisdom of
            Fate-Driven Development through our enlightened FAQ collection.
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-cosmic-silver/70">
            <div className="flex items-center space-x-2">
              <span>❓</span>
              <span>
                Questions: {filteredFaqItems.length}{" "}
                {selectedCategory !== "All" ? `(${selectedCategory})` : "(All)"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🌙</span>
              <span>Moon: {currentMoonPhase}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✨</span>
              <span>
                Mercury: {mercuryRetrograde ? "Retrograde ⚠️" : "Direct ✓"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Philosophy */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <MysticQuote
              cosmicEnergy="high"
              auraColor="orange"
              context="faq-wisdom"
              showRefresh={true}
            />
          </div>

          <div className="text-center mb-16">
            <blockquote className="text-2xl italic text-cosmic-silver/90 max-w-2xl mx-auto">
              <span className="text-aura-orange">&ldquo;</span>
              There are no dumb questions. Only unexplored destinies.
              <span className="text-aura-orange">&rdquo;</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              Categories of Cosmic Inquiry
            </h2>
            <p className="text-cosmic-silver/70 max-w-3xl mx-auto">
              Navigate through different realms of mystical development wisdom.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {categories.map((category, index) => (
              <div
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative backdrop-blur border rounded-xl p-4 text-center transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.name
                    ? "bg-aura-orange/20 border-aura-orange/60 shadow-lg shadow-aura-orange/25"
                    : "bg-cosmic-dark/30 border-cosmic-silver/20 hover:border-aura-orange/40 hover:bg-aura-orange/5"
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="text-sm font-semibold text-cosmic-silver group-hover:text-white transition-colors mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-aura-orange/70">
                  {category.count} questions
                </p>

                {/* Cosmic background elements */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-aura-orange rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              <span
                className="bg-gradient-to-r from-aura-orange to-aura-yellow bg-clip-text text-aura-orange"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#ea580c",
                }}
              >
                Frequently Asked Mysteries
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {filteredFaqItems.map((faq, index) => (
              <div
                key={faq.id}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 hover:border-aura-orange/40 hover:bg-aura-orange/5 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* FAQ Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-aura-orange/20 to-aura-yellow/40 border border-aura-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">{faq.icon}</span>
                  </div>

                  <div className="flex-1">
                    {/* Category Badge */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs font-semibold text-aura-orange bg-aura-orange/20 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                      <span className="text-xs text-cosmic-silver/50">
                        Q{faq.id}
                      </span>
                    </div>

                    {/* Question */}
                    <h3 className="text-lg font-bold text-cosmic-silver group-hover:text-white transition-colors mb-3">
                      {faq.question}
                    </h3>

                    {/* Answer */}
                    <p className="text-cosmic-silver/85 leading-relaxed mb-4">
                      {faq.answer}
                    </p>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1">
                      {faq.keywords.slice(0, 4).map((keyword, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-aura-orange/60 bg-aura-orange/10 px-2 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                      {faq.keywords.length > 4 && (
                        <span className="text-xs text-cosmic-silver/50 px-2 py-1">
                          +{faq.keywords.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cosmic background elements */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-aura-orange rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Wisdom */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-cosmic-purple/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-6">
              Still Seeking Guidance?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Open an Issue",
                  description:
                    "Channel your questions through GitHub's cosmic portals",
                  icon: "🐛",
                  action: "Report to GitHub",
                },
                {
                  title: "Gaze into the Void",
                  description:
                    "Sometimes answers come from silent contemplation",
                  icon: "🌌",
                  action: "Enter Meditation",
                },
                {
                  title: "Ask Your Fate Engine",
                  description:
                    "Consult the mystical algorithms within your soul",
                  icon: "🔮",
                  action: "Channel Wisdom",
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 text-center hover:border-aura-orange/40 hover:bg-aura-orange/5 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{option.icon}</div>
                  <h3 className="text-lg font-semibold text-cosmic-silver group-hover:text-white transition-colors mb-2">
                    {option.title}
                  </h3>
                  <p className="text-cosmic-silver/70 text-sm mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <div className="text-xs text-aura-orange/70 group-hover:text-aura-orange transition-colors cursor-pointer">
                    {option.action} →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Sacred Texts */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sacred Process",
                href: "/process",
                icon: "🌀",
                description:
                  "Understanding the eternal cycle of cosmic development",
              },
              {
                title: "Sacred Rituals",
                href: "/rituals",
                icon: "🔮",
                description: "Mystical ceremonies and development practices",
              },
              {
                title: "Cosmic Community",
                href: "/community",
                icon: "🌟",
                description: "Join the circle of enlightened developers",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group block p-6 rounded-xl bg-cosmic-silver/5 border border-cosmic-silver/20 hover:border-aura-orange/40 hover:bg-aura-orange/5 transition-all duration-300"
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
