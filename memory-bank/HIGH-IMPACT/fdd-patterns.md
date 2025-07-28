# ✨ FDD-Specific Development Patterns

## Satirical Content Patterns

### **Parody Mapping Pattern**

Every real-world development concept gets a mystical counterpart:

```typescript
// Real World → FDD Mystical
'Scrum Master' → 'Fate Master'
'Product Owner' → 'Oracle Owner'
'Developer' → 'Code Medium'
'Story Points' → 'Aura Magnitude'
'Sprint Planning' → 'Fateboard Session'
'Retrospective' → 'Reincarnation Session'
```

### **Tone Consistency Pattern**

- **Never break character** - treat FDD as legitimately mystical
- **Internal logic** - mystical rules must be consistent
- **Balanced absurdity** - silly but systematic
- **Turkish mystical terms** for authenticity ("Işıkta", "Geçişte")

### **Content Hierarchy Pattern**

```
PDR (source of truth)
  ↓
Core Docs (manifesto, roles, rituals, process)
  ↓
Implementation Docs (tech-stack, ui-spec, deployment)
  ↓
Community Docs (faq, community, contribute)
```

## Component Development Patterns

### **Mystical Component Pattern**

```typescript
// All mystical components follow this pattern
interface MysticalComponentProps {
  cosmicEnergy?: "low" | "medium" | "high";
  auraColor?: string;
  spiritualAlignment?: boolean;
}

const MysticButton: React.FC<MysticalComponentProps> = ({
  cosmicEnergy = "medium",
  auraColor = "purple",
  children,
}) => {
  return (
    <button className={`mystical-glow ${cosmicEnergy}-energy`}>
      {children}
    </button>
  );
};
```

### **Mystical Naming Convention**

- Components: `MysticQuote`, `FateButton`, `RoleCard`, `RitualBlock`
- Hooks: `useFateEngine`, `useCosmicAlignment`, `useTarotDraw`
- Utils: `generateMysticalName`, `alignWithCosmos`, `consultStars`

### **Animation & Visual Effects Pattern**

```css
/* Cosmic CSS patterns */
.mystical-glow {
  box-shadow: 0 0 20px rgba(139, 69, 19, 0.6);
  animation: aura-pulse 3s ease-in-out infinite;
}

.cosmic-gradient {
  background: linear-gradient(45deg, #1e1b4b, #581c87, #7c2d12);
}

.stellar-particle {
  animation: float 6s ease-in-out infinite;
}
```

## Testing Patterns (Mystical TDD)

### **Given/When/Then Mystical Pattern**

```typescript
describe("MysticQuote Component", () => {
  it("should channel cosmic wisdom", () => {
    // Given: A seeker visits the mystical realm
    render(<MysticQuote cosmicEnergy="high" />);

    // When: The spiritual forces align
    const quote = screen.getByTestId("mystical-wisdom");

    // Then: Divine inspiration manifests
    expect(quote).toHaveTextContent(/wisdom|fate|cosmic/i);
    expect(quote).toHaveClass("mystical-glow");
  });
});
```

### **Satirical Test Descriptions**

- "should summon the correct aura color"
- "should align with cosmic forces"
- "should reject unblessed deployments"
- "should channel prophetic navigation"

## Content Integration Patterns

### **Markdown-to-Component Bridge**

```typescript
// Pattern for integrating markdown content with components
interface PageProps {
  mysticalContent: MarkdownContent;
  cosmicMeta: PageMetadata;
}

const ManifestoPage: NextPage<PageProps> = ({ mysticalContent }) => {
  return (
    <Layout>
      <MysticQuote />
      <MarkdownRenderer content={mysticalContent} />
      <FateButton href="/roles-and-rituals">Enter the Circle</FateButton>
    </Layout>
  );
};
```

### **Cross-Reference Pattern**

- Link roles mentioned in rituals back to roles.md
- Reference tools in process descriptions
- FAQ answers point to relevant main content
- Maintain mystical internal linking

## Error Handling Patterns

### **Mystical Error Messages**

```typescript
const cosmicErrorMessages = {
  404: "This path exists only in parallel dimensions",
  500: "The servers have been cursed by Mercury retrograde",
  403: "Your aura is not aligned for this content",
  timeout: "The cosmic forces are experiencing delays",
};
```

### **Graceful Mystical Degradation**

- If Tarot API fails → show cached mystical wisdom
- If animations break → maintain content readability
- If images fail → display mystical text alternatives

## Performance Patterns

### **Spiritual Loading States**

```typescript
const LoadingStates = {
  CONSULTING_STARS: "Consulting the stars...",
  ALIGNING_CHAKRAS: "Aligning cosmic energies...",
  CHANNELING_WISDOM: "Channeling ancient wisdom...",
  PURIFYING_AURA: "Purifying digital aura...",
};
```

### **Cosmic Caching Strategy**

- Static mystical content cached aggressively
- Dynamic prophecies cached per session
- Tarot readings cached for cosmic consistency

## Accessibility Patterns (Spiritual Inclusion)

### **Mystical A11y**

```typescript
// Ensure spiritual experiences are accessible
<button aria-label="Consult the cosmic forces about deployment">
  🔮 Ask the Oracle
</button>

<img alt="Sacred tarot card showing The Developer in deep meditation" />
```

### **Screen Reader Mysticism**

- Alt text maintains mystical tone
- ARIA labels use spiritual language
- Focus management for mystical navigation flows
