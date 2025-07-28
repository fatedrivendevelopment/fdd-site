# 🏛️ Architectural Decisions - FDD Website

## Core Technology Choices & Rationale

### **Next.js Framework Decision**

**Choice**: Next.js (React-based)  
**Rationale**:

- Page-based routing aligns with mystical journey structure
- Built-in SSR for SEO (fate must be discoverable)
- Static generation for cosmic performance
- Vercel deployment synergy for spiritual CI/CD

### **TypeScript Language Decision**

**Choice**: TypeScript over JavaScript
**Rationale**:

- "Safer code, better intellisense, and cosmic type alignment"
- Prevents runtime errors that could disrupt mystical flow
- Better developer experience for satirical component development
- Aligns with professional parody aspect

### **TailwindCSS Styling Decision**

**Choice**: TailwindCSS over CSS-in-JS or traditional CSS
**Rationale**:

- "Perfect for spiritual gradients, sacred spacing, typographic aura"
- Utility-first approach suits mystical component variations
- Responsive design for multi-device spiritual consumption
- Easy customization for cosmic theme variables

### **Markdown-First Content Strategy**

**Choice**: Markdown files in `/docs/` over CMS or database
**Rationale**:

- Simple structure for managing satirical sacred documents
- Version control for mystical content evolution
- Easy community contribution via GitHub
- Separation of spiritual content from technical implementation

## Component Architecture Patterns

### **Mystical Component Naming Convention**

- `MysticQuote` - Random wisdom display
- `FateButton` - Spiritually-enhanced CTAs
- `RoleCard` - Team member mystical profiles
- `RitualBlock` - Ceremony descriptions
- `OathBlock` - Sacred text formatting

### **Layout Hierarchy Decision**

```
Layout (cosmic wrapper)
├── Navbar (spiritual navigation)
├── Page Components (content vessels)
└── Footer (earthly grounding)
```

**Rationale**: Consistent mystical experience across all pages while maintaining semantic structure.

### **State Management Approach**

**Choice**: React state + Context API (no Redux/Zustand)
**Rationale**:

- Simple state needs (theme, random quotes, role generation)
- Spiritual applications don't require complex state
- Lightweight aligns with mystical minimalism

## Testing Architecture Decisions

### **TDD with Given/When/Then Structure**

**Choice**: Jest + React Testing Library with BDD-style tests
**Rationale**:

- "Tests are written in iambic pentameter" (spiritual testing)
- 85%+ coverage ensures mystical reliability
- Given/When/Then mirrors ritual structure
- Prevents regression in satirical consistency

### **Testing Scope Priorities**

1. **Page rendering** - Mystical content displays correctly
2. **Component interactions** - Fate buttons and widgets work
3. **Responsive behavior** - Spiritual experience on all devices
4. **Content loading** - Markdown transformation functions
5. **Animation states** - Cosmic effects don't break

## Deployment & CI/CD Decisions

### **Vercel Hosting Choice**

**Choice**: Vercel over Netlify/AWS
**Rationale**:

- "Easy CI/CD pipeline, custom domains, preview deployments"
- Next.js optimization and edge functions
- GitHub integration for mystical deployment automation
- Preview deployments for ritual testing

### **GitHub Actions CI Strategy**

**Pipeline**: Lint → Test → Build → Coverage → Deploy
**Rationale**:

- "If the stars align, the CI will pass"
- Automated quality gates prevent cursed code deployment
- Coverage reports ensure spiritual completeness
- Failure notifications via cosmic channels

## Data Flow Architecture

### **Content-to-Component Flow**

```
Markdown (docs/*.md) → getStaticProps → Component Props → UI Rendering
```

### **Dynamic Content Strategy**

- Tarot API calls for interactive features
- Random quote generation from curated lists
- Role assignment algorithms for user engagement

## Performance & SEO Decisions

### **Static Generation Priority**

**Choice**: getStaticProps over getServerSideProps
**Rationale**:

- Mystical content is largely static
- Better performance for spiritual enlightenment
- SEO optimization for cosmic discovery
- Reduced server load aligns with minimalist philosophy

### **Image & Asset Strategy**

**Choice**: Next.js Image optimization + public folder
**Rationale**:

- Tarot imagery and mystical graphics need optimization
- Lazy loading for spiritual performance
- Responsive images for multi-device meditation
