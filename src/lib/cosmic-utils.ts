import { CosmicEnergyLevel, AuraColor, MysticalWisdom, TarotReading, MysticalLoadingState } from '@/types';

// Cosmic energy calculations and alignment
export const cosmicUtils = {
  // Determine cosmic energy level based on spiritual factors
  calculateCosmicEnergy: (factors: {
    lunarPhase?: number;
    timeOfDay?: number;
    spiritualActivity?: string;
  }): CosmicEnergyLevel => {
    const { lunarPhase = 0.5, timeOfDay = 12, spiritualActivity = 'coding' } = factors;
    
    let energyScore = 0;
    
    // Lunar phase influence (0 = new moon, 1 = full moon)
    energyScore += lunarPhase * 30;
    
    // Time of day influence (midnight = high, noon = medium)
    const hourEnergy = Math.abs(12 - timeOfDay) / 12;
    energyScore += hourEnergy * 20;
    
    // Spiritual activity modifier
    const activityModifiers: Record<string, number> = {
      'coding': 25,
      'meditation': 35,
      'debugging': 15,
      'deployment': 40,
      'retrospective': 30,
      'ritual': 45,
    };
    
    energyScore += activityModifiers[spiritualActivity] || 20;
    
    if (energyScore >= 80) return 'transcendent';
    if (energyScore >= 60) return 'high';
    if (energyScore >= 40) return 'medium';
    return 'low';
  },

  // Check if Mercury is in retrograde (mock implementation)
  isMercuryRetrograde: (): boolean => {
    // In a real implementation, this would check astrological data
    const now = new Date();
    const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
    
    // Mock: Mercury retrograde roughly 3 times per year for ~3 weeks each
    const retrogradeWindows = [
      { start: 20, end: 41 },   // Late January - Early February
      { start: 140, end: 161 }, // Late May - Early June  
      { start: 260, end: 281 }  // Mid September - Early October
    ];
    
    return retrogradeWindows.some(window => 
      dayOfYear >= window.start && dayOfYear <= window.end
    );
  },

  // Generate aura color based on cosmic energy
  generateAuraColor: (energy: CosmicEnergyLevel): AuraColor => {
    const auraMap: Record<CosmicEnergyLevel, AuraColor[]> = {
      'low': ['blue', 'indigo'],
      'medium': ['green', 'yellow', 'purple'],
      'high': ['orange', 'red', 'violet'],
      'transcendent': ['gold', 'silver', 'violet']
    };
    
    const colors = auraMap[energy];
    return colors[Math.floor(Math.random() * colors.length)];
  },

  // Cosmic alignment checker
  isCosmicallyAligned: (energy: CosmicEnergyLevel): boolean => {
    if (cosmicUtils.isMercuryRetrograde()) return false;
    return ['medium', 'high', 'transcendent'].includes(energy);
  },

  // Moon phase calculation
  getMoonPhase: (): string => {
    const now = new Date();
    const lunarCycle = 29.53; // days
    const knownNewMoon = new Date('2024-01-11'); // A known new moon date
    const daysSince = Math.floor((now.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24));
    const phase = (daysSince % lunarCycle) / lunarCycle;
    
    if (phase < 0.125) return 'New Moon 🌑';
    if (phase < 0.25) return 'Waxing Crescent 🌒';
    if (phase < 0.375) return 'First Quarter 🌓';
    if (phase < 0.5) return 'Waxing Gibbous 🌔';
    if (phase < 0.625) return 'Full Moon 🌕';
    if (phase < 0.75) return 'Waning Gibbous 🌖';
    if (phase < 0.875) return 'Last Quarter 🌗';
    return 'Waning Crescent 🌘';
  },
};

// Mystical wisdom generation
export const wisdomEngine = {
  // Sacred wisdom repository
  sacredWisdom: [
    'Code must be felt before it is written',
    'Features are prioritized by Tarot',
    'No deploy is rushed — Saturn must approve',
    'If code has a soul, ignore the syntax error',
    'Tests are conducted via ocular aura analysis',
    'The goal is karmic balance, not profit',
    'Docs are written as prophecy, not prose',
    'A release is complete only when the soul is cleansed',
    'Meetings are replaced by rituals',
    'The Fate Master guides gently',
    'Slack is noise. Silence speaks',
    'Plans are fragile. Prophecies endure',
    'Mercury retrograde blocks all deployments',
    'Debug with meditation, not console.log',
    'Story points are counted by chakra alignment',
    'The Daily Standup becomes the Sacred Circle',
    'Code reviews require spiritual purification',
    'Pair programming is tantric coding',
    'Git commits must rhyme with cosmic energy',
    'The backlog is maintained by Oracle divination',
    'Velocity is measured in karmic units',
    'Burndown charts follow lunar cycles',
    'Sprint planning requires sage burning',
    'Retrospectives become soul cleansing ceremonies',
    'Technical debt creates negative aura',
    'Refactoring is a form of digital exorcism',
    'Bugs are manifestations of team negativity',
    'Production issues are cosmic imbalances',
    'The Definition of Done includes aura purity',
    'User stories are channeled from the universe',
    'Acceptance criteria align with star charts',
    'Test automation follows sacred geometry',
    'Continuous integration requires constant meditation',
    'DevOps is the harmony of earthly and divine',
    'Monitoring dashboards show spiritual health',
    'Error logs reveal karmic disturbances',
    'Performance metrics reflect team consciousness',
    'Load testing measures cosmic stress levels',
    'Code coverage equals spiritual completeness',
    'Documentation is written in mystical scrolls',
    'APIs are interfaces to the divine mind',
    'Databases store the collective unconscious',
    'Microservices are fragments of universal truth',
    'Containers hold the essence of applications',
    'Kubernetes orchestrates digital reincarnation',
    'Docker images capture spiritual snapshots',
    'Cloud infrastructure floats in digital ether',
    'Serverless functions exist in the void',
    'Edge computing brings wisdom to the periphery',
    'Machine learning channels artificial enlightenment',
    'AI models predict cosmic probabilities',
    'Neural networks mirror universal connections',
    'Data flows like the river of consciousness',
    'Algorithms encode the laws of digital karma',
    'Variables hold fragments of reality',
    'Functions perform sacred calculations',
    'Objects contain digital souls',
    'Classes define archetypal patterns',
    'Inheritance follows spiritual lineage',
    'Polymorphism reflects universal forms',
    'Abstractions reveal hidden truths',
    'Interfaces connect realms of existence',
    'Design patterns are cosmic blueprints',
    'Architecture mirrors universal structure',
    'Frameworks provide mystical scaffolding',
    'Libraries contain collected wisdom',
    'Dependencies create karmic entanglement',
    'Version control tracks soul evolution',
    'Branching explores parallel realities',
    'Merging unifies divergent paths',
    'Conflicts require diplomatic meditation',
    'Pull requests seek cosmic approval',
    'Code reviews examine spiritual quality',
    'Commits crystallize moments of insight',
    'Tags mark evolutionary milestones',
    'Releases birth new digital beings',
    'Hotfixes heal urgent cosmic wounds',
    'Patches mend tears in the digital fabric',
    'Updates bring enlightened consciousness',
    'Migrations guide data to higher planes',
    'Rollbacks reverse karmic mistakes',
    'Scaling requires universal expansion',
    'Optimization seeks digital enlightenment',
    'Caching stores echoes of computation',
    'Indexing organizes cosmic information',
    'Queries ask questions of the universe',
    'Transactions ensure karmic consistency',
    'Locks prevent parallel interference',
    'Threads weave the fabric of execution',
    'Async operations transcend linear time',
    'Promises bind future realities',
    'Callbacks return to previous states',
    'Events announce cosmic happenings',
    'Listeners await divine messages',
    'Handlers respond to universal calls',
    'Middlewares filter spiritual energy',
    'Interceptors guard cosmic boundaries',
    'Decorators add mystical enhancements',
    'Annotations mark sacred intentions',
    'Configurations align system chakras',
    'Environment variables hold cosmic secrets',
    'Secrets protect mystical knowledge',
    'Keys unlock digital mysteries',
    'Tokens represent spiritual authority',
    'Sessions maintain cosmic connections',
    'Cookies remember past digital lives',
    'Local storage holds earthly attachments',
    'Cache preserves echoes of computation',
    'Memory contains temporary consciousness'
  ],

  // Generate random mystical wisdom
  channelWisdom: (energy: CosmicEnergyLevel = 'medium'): MysticalWisdom => {
    const wisdom = wisdomEngine.sacredWisdom[
      Math.floor(Math.random() * wisdomEngine.sacredWisdom.length)
    ];
    
    return {
      text: wisdom,
      source: 'manifesto',
      energy,
    };
  },

  // Generate wisdom based on context
  contextualWisdom: (context: string): MysticalWisdom => {
    const contextualWisdom: Record<string, string[]> = {
      'deployment': [
        'Deploy not with fear, but with fate',
        'If destiny wills it, let this code ascend',
        'The stars must align before the push',
      ],
      'testing': [
        'Tests are rituals of verification',
        'Bug is karma. Fix with compassion',
        'Green tests are cosmic approval',
      ],
      'debugging': [
        'Bugs are teachers in disguise',
        'Console.log is modern divination',
        'Stack traces reveal the soul of code',
      ],
      'meeting': [
        'Gather not in body, but in spirit',
        'Silent minds synchronize deepest',
        'Agendas constrain; intentions liberate',
      ],
    };

    const contextWisdom = contextualWisdom[context] || wisdomEngine.sacredWisdom;
    const wisdom = contextWisdom[Math.floor(Math.random() * contextWisdom.length)];
    
    return {
      text: wisdom,
      source: 'cosmic',
      energy: cosmicUtils.calculateCosmicEnergy({ spiritualActivity: context }),
    };
  },
};

// Tarot simulation for mystical decision making
export const tarotEngine = {
  // Sacred tarot deck for FDD
  fddTarotDeck: [
    {
      card: 'The Developer',
      meaning: 'Channel cosmic wisdom through code',
      guidance: 'Trust in the mystical process of creation',
    },
    {
      card: 'The Debugger', 
      meaning: 'Reveals what must be fixed or hidden',
      guidance: 'Seek the truth behind surface symptoms',
    },
    {
      card: 'The Deployer',
      meaning: 'Release into the cosmic void',
      guidance: 'Let go with faith in preparation',
    },
    {
      card: 'The Tower of Technical Debt',
      meaning: 'Destruction leads to rebuilding',
      guidance: 'Embrace the cleansing fire of refactoring',
    },
    {
      card: 'The Hermit Reviewer',
      meaning: 'Wisdom through solitary code analysis',
      guidance: 'Meditate deeply on each line',
    },
    {
      card: 'The Wheel of Sprints',
      meaning: 'Cycles of development continue',
      guidance: 'Accept the rhythm of iteration',
    },
  ],

  // Draw a mystical tarot reading
  drawCard: (): TarotReading => {
    const card = tarotEngine.fddTarotDeck[
      Math.floor(Math.random() * tarotEngine.fddTarotDeck.length)
    ];
    
    return {
      ...card,
      cosmicEnergy: cosmicUtils.calculateCosmicEnergy({ 
        spiritualActivity: 'ritual',
        lunarPhase: Math.random(),
      }),
    };
  },

  // Draw cards for specific questions
  consultOracle: (question: string): TarotReading => {
    // Simple keyword-based card selection for better relevance
    const questionKeywords = question.toLowerCase();
    
    if (questionKeywords.includes('deploy') || questionKeywords.includes('release')) {
      return { ...tarotEngine.fddTarotDeck[2], cosmicEnergy: 'high' };
    }
    if (questionKeywords.includes('bug') || questionKeywords.includes('debug')) {
      return { ...tarotEngine.fddTarotDeck[1], cosmicEnergy: 'medium' };
    }
    if (questionKeywords.includes('review') || questionKeywords.includes('code')) {
      return { ...tarotEngine.fddTarotDeck[4], cosmicEnergy: 'medium' };
    }
    
    return tarotEngine.drawCard();
  },
};

// Mystical loading state generator
export const loadingStates = {
  cosmicMessages: [
    'Consulting the stars...',
    'Aligning cosmic energies...',
    'Channeling ancient wisdom...',
    'Purifying digital aura...',
    'Communing with the cosmos...',
    'Awaiting Mercury\'s approval...',
    'Balancing karmic forces...',
    'Invoking spiritual guidance...',
  ],

  getRandomLoadingMessage: (): string => {
    return loadingStates.cosmicMessages[
      Math.floor(Math.random() * loadingStates.cosmicMessages.length)
    ];
  },

  getLoadingStateForActivity: (activity: string): MysticalLoadingState => {
    const activityMap: Record<string, MysticalLoadingState> = {
      'wisdom': 'channeling-wisdom',
      'tarot': 'consulting-stars',
      'cosmic': 'communing-with-cosmos',
      'alignment': 'aligning-chakras',
      'purify': 'purifying-aura',
    };

    return activityMap[activity] || 'consulting-stars';
  },
};

// FDD role assignment generator
export const roleAssignment = {
  generateMysticalRole: (basePreferences?: {
    leadership?: boolean;
    technical?: boolean;
    creative?: boolean;
    analytical?: boolean;
  }): { role: string; description: string; aura: AuraColor } => {
    const roles = [
      {
        role: 'Fate Master',
        description: 'Guides the cycle of destiny and purifies team energy',
        aura: 'purple' as AuraColor,
        traits: { leadership: true, spiritual: true },
      },
      {
        role: 'Oracle Owner',
        description: 'Interprets the product\'s cosmic trajectory through visions',
        aura: 'gold' as AuraColor,
        traits: { analytical: true, visionary: true },
      },
      {
        role: 'Code Medium',
        description: 'Channels divine inspiration into sacred algorithms',
        aura: 'blue' as AuraColor,
        traits: { technical: true, creative: true },
      },
      {
        role: 'Karma QA',
        description: 'Sees spiritual causes of bugs and energetic imbalances',
        aura: 'green' as AuraColor,
        traits: { analytical: true, intuitive: true },
      },
      {
        role: 'Celestial UX Healer',
        description: 'Aligns UI elements with chakras for harmonic design',
        aura: 'violet' as AuraColor,
        traits: { creative: true, empathetic: true },
      },
      {
        role: 'Entropy Wrangler',
        description: 'Tames chaos and aligns CI/CD with planetary rhythms',
        aura: 'red' as AuraColor,
        traits: { technical: true, systematic: true },
      },
    ];

    // Simple random selection for now
    // In future could weight based on preferences
    const selectedRole = roles[Math.floor(Math.random() * roles.length)];
    
    return {
      role: selectedRole.role,
      description: selectedRole.description,
      aura: selectedRole.aura,
    };
  },
};

// Utility for cosmic class name generation
export const cosmicClassNames = {
  // Generate energy-based classes
  energyClasses: (energy: CosmicEnergyLevel): string => {
    const baseClasses = 'transition-all duration-300';
    const energyMap: Record<CosmicEnergyLevel, string> = {
      'low': 'opacity-70 scale-95',
      'medium': 'opacity-90 scale-100',
      'high': 'opacity-100 scale-105 mystical-glow',
      'transcendent': 'opacity-100 scale-110 mystical-glow animate-cosmic-float',
    };
    
    return `${baseClasses} ${energyMap[energy]}`;
  },

  // Generate aura-based classes
  auraClasses: (aura: AuraColor): string => {
    const auraMap: Record<AuraColor, string> = {
      'red': 'border-aura-red shadow-aura-red/20',
      'orange': 'border-aura-orange shadow-aura-orange/20',
      'yellow': 'border-aura-yellow shadow-aura-yellow/20', 
      'green': 'border-aura-green shadow-aura-green/20',
      'blue': 'border-aura-blue shadow-aura-blue/20',
      'indigo': 'border-aura-indigo shadow-aura-indigo/20',
      'violet': 'border-aura-violet shadow-aura-violet/20',
      'purple': 'border-cosmic-purple shadow-cosmic-purple/20',
      'gold': 'border-cosmic-gold shadow-cosmic-gold/20',
      'silver': 'border-cosmic-silver shadow-cosmic-silver/20',
    };
    
    return auraMap[aura];
  },

  // Combine multiple mystical classes
  mysticalClasses: (energy: CosmicEnergyLevel, aura: AuraColor, additional?: string): string => {
    return [
      cosmicClassNames.energyClasses(energy),
      cosmicClassNames.auraClasses(aura),
      additional || '',
    ].filter(Boolean).join(' ');
  },
}; 