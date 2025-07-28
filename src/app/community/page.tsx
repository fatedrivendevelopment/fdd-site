import React from 'react';
import { processMarkdownContent } from '@/lib/content-processor';
import { MysticQuote } from '@/components/mystical/MysticQuote';
import { cosmicUtils } from '@/lib/cosmic-utils';

// This would normally be in getStaticProps or a server component in production
async function getCommunityContent() {
  try {
    return await processMarkdownContent('community');
  } catch (error) {
    console.error('Error loading community:', error);
    return null;
  }
}

const communityChannels = [
  {
    id: 1,
    name: "Discord",
    description: "Sacred chanting sessions, bug summoning rituals, and full moon retrospectives",
    icon: "🌀",
    status: "Invite link pending divine approval",
    color: "indigo",
    features: [
      "Daily enlightenment discussions",
      "Cosmic code reviews",
      "Mercury retrograde alerts",
      "Sacred deployment ceremonies"
    ]
  },
  {
    id: 2,
    name: "X (formerly Twitter)",
    description: "Daily prophecies in 280 characters. Follow @FateDrivenDev and witness the signs",
    icon: "🐦",
    status: "Follow for cosmic updates",
    color: "blue",
    features: [
      "Daily mystical insights",
      "Coding prophecies",
      "Celestial deployment times",
      "Community wisdom sharing"
    ]
  },
  {
    id: 3,
    name: "Slack (Totally Real)",
    description: "Where corporate shamans exchange JSON incantations and spiritual error logs",
    icon: "💼",
    status: "Invite your organization",
    color: "green",
    features: [
      "Workplace spiritual guidance",
      "JSON incantations channel",
      "Spiritual error log analysis",
      "Corporate shamanic practices"
    ]
  }
];

const testimonials = [
  {
    id: 1,
    quote: "Ever since I joined the FDD Discord, my CI/CD pipeline started whispering secrets to me.",
    author: "Senior Devotee",
    role: "Code Mystic",
    aura: "purple",
    icon: "🔮"
  },
  {
    id: 2,
    quote: "We used to follow Scrum. Now we follow the Moon.",
    author: "Converted Product Owner",
    role: "Oracle Owner",
    aura: "blue",
    icon: "🌙"
  },
  {
    id: 3,
    quote: "10/10. Would deploy under Mercury Retrograde again.",
    author: "Ritual QA Intern",
    role: "Karma QA",
    aura: "green",
    icon: "⚡"
  }
];

const chapterRequirements = [
  {
    item: "1 candle",
    description: "To illuminate the path of cosmic development",
    icon: "🕯️",
    significance: "Light guides the debugging session"
  },
  {
    item: "2 broken keyboards",
    description: "Sacred artifacts of coding struggle and perseverance",
    icon: "⌨️",
    significance: "Physical manifestation of technical debt"
  },
  {
    item: "3+ believing developers",
    description: "Minimum cosmic energy required for fate circle formation",
    icon: "👥",
    significance: "Collective consciousness amplifies mystical powers"
  }
];

const communityStats = [
  { label: "Active Mystics", value: "∞", icon: "🧙‍♂️" },
  { label: "Sacred Repositories", value: "42", icon: "📚" },
  { label: "Cosmic Deployments", value: "1337", icon: "🚀" },
  { label: "Ritual Completions", value: "777", icon: "✨" }
];

export default async function CommunityPage() {
  const communityContent = await getCommunityContent();
  const currentCosmicEnergy = cosmicUtils.calculateCosmicEnergy({
    lunarPhase: 0.8,
    timeOfDay: new Date().getHours(),
    spiritualActivity: 'community-bonding',
  });

  const currentMoonPhase = cosmicUtils.getMoonPhase();
  const mercuryRetrograde = cosmicUtils.isMercuryRetrograde();

  if (!communityContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cosmic-silver mb-4">
            Sacred Community Temporarily Veiled
          </h1>
          <p className="text-cosmic-silver/70">
            The cosmic circle is realigning. Please try again shortly.
          </p>
          <MysticQuote 
            cosmicEnergy="medium"
            auraColor="purple"
            context="community-unavailable"
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
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-void via-aura-violet/10 to-aura-indigo/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.15),transparent_70%)]" />
        
        {/* Floating community symbols */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-aura-violet rounded-full animate-cosmic-float" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-aura-indigo rounded-full animate-cosmic-float delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-aura-blue rounded-full animate-cosmic-float delay-500" />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-aura-violet/20 border border-aura-violet/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-aura-violet rounded-full animate-pulse" />
            <span className="text-aura-violet text-sm font-medium">
              Cosmic Circle - Energy: {currentCosmicEnergy}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-aura-blue via-aura-purple to-aura-violet bg-clip-text text-aura-blue"
                  style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#3b82f6'}}>
              Cosmic Community
            </span>
          </h1>
          
          <p className="text-xl text-cosmic-silver/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {communityContent.metadata.description}
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-cosmic-silver/70 mb-8">
            <div className="flex items-center space-x-2">
              <span>🌐</span>
              <span>Channels: {communityChannels.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🌙</span>
              <span>Moon: {currentMoonPhase}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✨</span>
              <span>Mercury: {mercuryRetrograde ? 'Retrograde ⚠️' : 'Direct ✓'}</span>
            </div>
          </div>
          
          {/* Community Philosophy */}
          <blockquote className="text-xl italic text-cosmic-silver/90 max-w-3xl mx-auto">
            <span className="text-aura-violet">&ldquo;</span>
            Alone you code in silence. Together, we chant in merge conflicts.
            <span className="text-aura-violet">&rdquo;</span>
          </blockquote>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 text-center hover:border-aura-violet/40 hover:bg-aura-violet/5 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-aura-violet mb-1">{stat.value}</div>
                <div className="text-sm text-cosmic-silver/70">{stat.label}</div>
                
                {/* Cosmic background elements */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-aura-violet rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <MysticQuote 
              cosmicEnergy={communityContent.metadata.cosmicEnergy}
              auraColor={communityContent.metadata.auraColor}
              context="community-wisdom"
              showRefresh={true}
            />
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              <span className="bg-gradient-to-r from-aura-violet to-aura-indigo bg-clip-text text-aura-violet"
                    style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#7c3aed'}}>
                Summon Your Peers
              </span>
            </h2>
            <p className="text-cosmic-silver/70 max-w-3xl mx-auto">
              Choose your circle of communion and join the mystical network of enlightened developers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {communityChannels.map((channel) => (
              <div
                key={channel.id}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 hover:border-aura-violet/40 hover:bg-aura-violet/5 transition-all duration-300"
              >
                {/* Channel Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-aura-${channel.color}/20 to-aura-${channel.color}/40 border border-aura-${channel.color}/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{channel.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-cosmic-silver group-hover:text-white transition-colors mb-2">
                    {channel.name}
                  </h3>
                  <p className="text-sm text-cosmic-silver/85 leading-relaxed mb-4">
                    {channel.description}
                  </p>
                  <div className={`text-xs font-medium text-aura-${channel.color} bg-aura-${channel.color}/20 px-3 py-1 rounded-full`}>
                    {channel.status}
                  </div>
                </div>
                
                {/* Channel Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-aura-violet">Sacred Features:</h4>
                  <ul className="space-y-1">
                    {channel.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-cosmic-silver/70 flex items-start space-x-2">
                        <span className="text-aura-violet">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Join Button */}
                <div className="mt-6 text-center">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r from-aura-${channel.color}/20 to-aura-${channel.color}/30 border border-aura-${channel.color}/40 rounded-lg text-sm font-medium text-aura-${channel.color} hover:from-aura-${channel.color}/30 hover:to-aura-${channel.color}/40 transition-all duration-300 cursor-pointer`}>
                    Join Circle →
                  </div>
                </div>
                
                {/* Cosmic background elements */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-aura-violet rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oracle Testimonials */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-cosmic-purple/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              What the Oracles Are Saying
            </h2>
            <p className="text-cosmic-silver/70 max-w-2xl mx-auto">
              Wisdom from practitioners who have embraced the mystical path of development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 hover:border-aura-violet/40 hover:bg-aura-violet/5 transition-all duration-300"
              >
                {/* Quote */}
                <div className="mb-6">
                  <div className="text-3xl text-aura-violet mb-4">{testimonial.icon}</div>
                  <blockquote className="text-cosmic-silver/90 italic leading-relaxed">
                    <span className="text-aura-violet">&ldquo;</span>
                    {testimonial.quote}
                    <span className="text-aura-violet">&rdquo;</span>
                  </blockquote>
                </div>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-aura-${testimonial.aura}/20 to-aura-${testimonial.aura}/40 border border-aura-${testimonial.aura}/30 flex items-center justify-center`}>
                    <span className="text-sm">🧙‍♂️</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cosmic-silver">
                      {testimonial.author}
                    </div>
                    <div className={`text-xs text-aura-${testimonial.aura}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                {/* Cosmic background elements */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-aura-violet rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Own Chapter */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cosmic-silver mb-4">
              Want to Start Your Own Chapter?
            </h2>
            <p className="text-cosmic-silver/70 max-w-2xl mx-auto mb-8">
              Start a fate-circle in your company. All you need is the sacred trinity of mystical development.
            </p>
          </div>
          
          <div className="space-y-6 mb-12">
            {chapterRequirements.map((requirement, index) => (
              <div
                key={index}
                className="group relative bg-cosmic-dark/30 backdrop-blur border border-cosmic-silver/20 rounded-xl p-6 hover:border-aura-violet/40 hover:bg-aura-violet/5 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Requirement Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-aura-violet/20 to-aura-indigo/40 border border-aura-violet/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">{requirement.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    {/* Requirement Item */}
                    <h3 className="text-lg font-bold text-cosmic-silver group-hover:text-white transition-colors mb-2">
                      {requirement.item}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-cosmic-silver/85 leading-relaxed mb-3">
                      {requirement.description}
                    </p>
                    
                    {/* Significance */}
                    <div className="bg-aura-violet/10 border border-aura-violet/20 rounded-lg p-3">
                      <p className="text-xs italic text-aura-violet">
                        <span className="font-semibold">Mystical Significance:</span> {requirement.significance}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Cosmic background elements */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-aura-violet rounded-full animate-pulse opacity-50" />
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-aura-violet/10 via-cosmic-silver/5 to-aura-indigo/10 rounded-2xl p-8 border border-cosmic-silver/20">
              <h3 className="text-2xl font-bold text-cosmic-silver mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-cosmic-silver/80 mb-6 max-w-2xl mx-auto">
                Embrace the chaos. Share the rituals. Spread the Fate.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-aura-violet to-aura-indigo border border-aura-violet/40 rounded-lg text-white font-medium text-lg hover:from-aura-violet/90 hover:to-aura-indigo/90 transition-all duration-300 cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <span>Start Fate Circle</span>
                    <span className="text-lg">🌌</span>
                  </span>
                </div>
                <div className="px-6 py-3 bg-cosmic-dark/30 border border-cosmic-silver/30 rounded-lg text-cosmic-silver font-medium text-lg hover:bg-cosmic-silver/10 transition-all duration-300 cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <span>Download Guide</span>
                    <span className="text-lg">📜</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Navigation to Other Sacred Texts */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Sacred FAQ", href: "/faq", icon: "❓", description: "Find answers to your mystical development questions" },
              { title: "Sacred Process", href: "/process", icon: "🌀", description: "Understanding the eternal cycle of cosmic development" },
              { title: "Sacred Manifesto", href: "/manifesto", icon: "📜", description: "The foundational principles of Fate-Driven Development" },
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