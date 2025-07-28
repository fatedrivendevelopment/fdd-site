# 🌀 System Flows - FDD Website Journey

## Primary User Entry Points

### 1. **Discovery Flow** (Homepage → Deep Dive)

```
Homepage (/)
  ↓ Hero: "Code as foretold"
  ↓ Portal Cards: Manifesto | Rituals | FAQ
  ↓ User selects based on curiosity level

Manifesto (/manifesto) → Core philosophy
Roles & Rituals (/roles-and-rituals) → Team structure
FAQ (/faq) → Quick mystical answers
```

### 2. **Exploration Flow** (Methodical Learning)

```
Manifesto → Values & Principles
  ↓
Roles & Rituals → Team structure & ceremonies
  ↓
Process & Docs → Lifecycle & artifacts
  ↓
Comparisons → Context vs real methodologies
```

### 3. **Engagement Flow** (Community Participation)

```
Any page → Mystical content resonates
  ↓
Community (/community) → Join the cult
  ↓
Contribute (/contribute) → Add to the mythology
```

## Content Flow Architecture

### **Markdown → Component Rendering**

```
docs/*.md files → Next.js pages → TailwindCSS styling
  ↓
Dynamic content loading from markdown
  ↓
Mystical components (MysticQuote, FateButton, etc.)
```

### **Navigation Hierarchy**

```
Main Nav:
├── Manifesto (core values)
├── Roles & Rituals (team structure)
├── Process & Docs (methodology lifecycle)
├── Comparisons (vs other methodologies)
├── FAQ (mystical Q&A)
├── Community (join the movement)
└── Contribute (open source participation)
```

## Interaction Patterns

### **Mystical Decision Points**

- Tarot API integration for dynamic responses
- "Ask Your Fate Engine" interactive widgets
- Random mystical quote generation
- Role assignment generators

### **Content Cross-References**

- Manifesto principles → Referenced in rituals
- Roles → Used in process descriptions
- Tools → Integrated into workflow explanations
- FAQ → Addresses gaps from other pages

## Technical Data Flow

### **Build Process**

```
docs/*.md → Next.js build → Static generation → Vercel deployment
```

### **Component Hierarchy**

```
Layout (global)
├── Navbar (navigation)
├── Page Components (content-specific)
│   ├── MysticQuote (random wisdom)
│   ├── FateButton (CTAs)
│   ├── RoleCard (team members)
│   └── RitualBlock (ceremonies)
└── Footer (cosmic copyright)
```

### **Testing Flow**

```
Given/When/Then test structure
├── Page rendering tests
├── Component interaction tests
├── Markdown content loading tests
└── Responsive behavior tests
```

## Success Path Metrics

- **Homepage → Manifesto**: Core philosophy absorption
- **Manifesto → Roles**: Team structure understanding
- **Any page → FAQ**: Quick mystical clarification
- **Any page → Community**: Engagement conversion
- **Community → Contribute**: Active participation
