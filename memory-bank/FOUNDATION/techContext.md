# ⚙️ Technical Context - FDD Sacred Technology Stack

## Core Technology Stack

### **Frontend Framework**

- **Next.js 14+** (React-based)
  - Page-based routing for mystical navigation
  - Built-in SSR/SSG for cosmic SEO optimization
  - Image optimization for tarot and mystical graphics
  - Vercel deployment synergy

### **Language & Type Safety**

- **TypeScript 5+**
  - Cosmic type alignment for mystical components
  - Enhanced developer experience for satirical development
  - Compile-time spiritual error prevention
  - Better IntelliSense for mystical APIs

### **Styling & Design**

- **TailwindCSS 3+**
  - Utility-first approach for spiritual gradients
  - Custom mystical theme configuration
  - Responsive design for multi-device meditation
  - Sacred spacing and cosmic typography

### **Content Management**

- **Markdown + MDX** (optional)
  - Static content in `/docs/` directory
  - Direct file-based content management
  - Git-based version control for mystical wisdom
  - Community contribution via GitHub

## Development Tools & Environment

### **Package Manager**

- **npm** (Node.js ecosystem standard)
- Package.json with mystical dependency alignment

### **Code Quality Tools**

```json
{
  "eslint": "Cosmic code linting",
  "prettier": "Sacred formatting alignment",
  "husky": "Pre-commit spiritual verification",
  "lint-staged": "Staged file cosmic cleansing"
}
```

### **Testing Framework**

- **Jest** - Core testing framework for mystical verification
- **React Testing Library** - Component spiritual interaction testing
- **@testing-library/jest-dom** - Enhanced mystical assertions
- **@testing-library/user-event** - Cosmic user interaction simulation

## Build & Deployment Architecture

### **Build Process**

```bash
# Development mystical server
npm run dev → Next.js development with hot reload

# Production cosmic build
npm run build → Static generation + optimization

# Mystical test suite
npm run test → Jest with Given/When/Then structure

# Code quality gates
npm run lint → ESLint spiritual verification
npm run format → Prettier cosmic alignment
```

### **Deployment Strategy**

- **Vercel Platform** - Serverless deployment with edge optimization
- **GitHub Integration** - Automatic deployment on main branch push
- **Preview Deployments** - PR-based staging for mystical testing
- **Custom Domain** - Cosmic web presence alignment

## File Structure & Organization

### **Project Architecture**

```
fdd-site/
├── memory-bank/           # Sacred knowledge repository
├── docs/                  # Mystical content source
├── src/
│   ├── pages/            # Next.js page routing
│   ├── components/       # Mystical component library
│   │   ├── layout/       # Navigation and structure
│   │   ├── mystical/     # FDD-specific components
│   │   └── content/      # Markdown rendering
│   ├── styles/           # Global mystical styling
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript cosmic definitions
│   └── __tests__/        # Given/When/Then test suites
├── public/               # Static mystical assets
├── next.config.js        # Next.js cosmic configuration
├── tailwind.config.js    # Sacred styling system
└── tsconfig.json         # TypeScript spiritual settings
```

## Component Architecture Patterns

### **Mystical Component Categories**

```typescript
// Layout Components (cosmic structure)
(Layout, Navigation, Footer);

// Mystical Components (FDD-specific)
(MysticQuote, FateButton, RoleCard, RitualBlock, OathBlock);

// Content Components (markdown integration)
(MarkdownRenderer, ContentPage, DynamicContent);

// Interactive Components (cosmic features)
(TarotWidget, RoleGenerator, FateDecisionEngine);
```

### **Component Naming Convention**

- **Mystical**: `MysticQuote`, `FateButton`, `CosmicGradient`
- **Sacred**: `SacredText`, `SpiritualNavigation`
- **Cosmic**: `CosmicBackground`, `AstralParticles`
- **Fate**: `FateDecision`, `FateEngine`, `FateCard`

## Styling & Theme Architecture

### **TailwindCSS Custom Configuration**

```javascript
// tailwind.config.js mystical extensions
module.exports = {
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: "#1e1b4b", // Deep space blue
          purple: "#581c87", // Mystical purple
          gold: "#f59e0b", // Sacred gold
          silver: "#e5e7eb", // Lunar silver
        },
        aura: {
          red: "#dc2626", // Fire chakra
          orange: "#ea580c", // Sacral chakra
          yellow: "#ca8a04", // Solar chakra
          green: "#16a34a", // Heart chakra
          blue: "#2563eb", // Throat chakra
          indigo: "#4f46e5", // Third eye chakra
          violet: "#7c3aed", // Crown chakra
        },
      },
      animation: {
        "aura-pulse": "aura-pulse 3s ease-in-out infinite",
        "cosmic-float": "cosmic-float 6s ease-in-out infinite",
        "mystical-glow": "mystical-glow 2s ease-in-out infinite alternate",
      },
    },
  },
};
```

### **CSS Mystical Effects**

```css
/* Sacred animations and effects */
@keyframes aura-pulse {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(139, 69, 19, 0.6);
  }
  50% {
    box-shadow: 0 0 40px rgba(139, 69, 19, 0.9);
  }
}

@keyframes cosmic-float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.mystical-gradient {
  background: linear-gradient(45deg, #1e1b4b, #581c87, #7c2d12);
}
```

## Performance & Optimization

### **Static Generation Strategy**

- **getStaticProps** for markdown content loading
- **getStaticPaths** for dynamic mystical routes
- **Image optimization** for tarot and spiritual graphics
- **Bundle analysis** for cosmic performance monitoring

### **SEO & Accessibility**

- **Semantic HTML** with mystical ARIA labels
- **OpenGraph** metadata for spiritual social sharing
- **JSON-LD** structured data for cosmic discoverability
- **Lighthouse** performance auditing for spiritual optimization

## Environment Configuration

### **Development Environment**

```bash
# Local mystical development
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_TAROT_API_URL=mock://tarot-api

# Cosmic debugging flags
NEXT_PUBLIC_DEBUG_MYSTICAL=true
```

### **Production Environment**

```bash
# Production cosmic deployment
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://fatedrivendevelopment.org
NEXT_PUBLIC_TAROT_API_URL=https://api.fatedrivendevelopment.org

# Spiritual analytics
NEXT_PUBLIC_GA_TRACKING_ID=GA-COSMIC-TRACKING
```

## API Integration Points

### **Planned Mystical APIs**

- **Tarot API** - Divine decision-making endpoints
- **Wisdom Generator** - Random mystical quote generation
- **Role Assignment** - Spiritual team position calculation
- **Cosmic Calendar** - Astrological development timing

### **External Services**

- **Vercel Analytics** - Cosmic performance monitoring
- **GitHub API** - Community contribution integration
- **Social APIs** - Mystical community connection (optional)
