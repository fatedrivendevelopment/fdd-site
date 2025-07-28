# 🏗️ System Patterns - FDD Architecture & Quality Patterns

## Core Architectural Patterns

### **Static-First Content Architecture**

```
Markdown Source (docs/*.md)
  ↓ Build Time Processing
Static Props Extraction
  ↓ Component Rendering
Mystical UI Generation
  ↓ Deployment
Static Site with Dynamic Features
```

**Benefits**:

- Fast cosmic loading times
- SEO-optimized spiritual content
- Easy community contribution via markdown
- Reduced complexity for satirical content management

### **Component Composition Pattern**

```typescript
// Mystical component composition hierarchy
<Layout>
  <MysticalNavigation />
  <PageContainer>
    <MysticQuote />
    <ContentRenderer mysticalContent={content} />
    <FateButton href="/next-journey" />
  </PageContainer>
  <SacredFooter />
</Layout>
```

**Pattern Rules**:

- All pages wrapped in cosmic `Layout` component
- Mystical components prefixed with spiritual naming
- Content components handle markdown-to-UI transformation
- Interactive components manage state locally

### **Content-Component Bridge Pattern**

```typescript
// Pattern for connecting markdown content to mystical components
interface MysticalPageProps {
  content: MarkdownContent;
  metadata: CosmicMetadata;
}

const SpiritualPage: NextPage<MysticalPageProps> = ({ content, metadata }) => {
  return (
    <Layout cosmicEnergy={metadata.energy}>
      <SEOHead title={metadata.title} description={metadata.description} />
      <MysticQuote source={content.quotes} />
      <MarkdownRenderer content={content.body} />
      <NavigationFlow nextJourney={metadata.nextPath} />
    </Layout>
  );
};

export async function getStaticProps() {
  const mysticalContent = await loadSacredMarkdown("manifesto.md");
  return { props: { content: mysticalContent } };
}
```

## Quality Assurance Patterns

### **Given/When/Then Test Structure**

```typescript
// Standardized mystical testing pattern
describe("Mystical Component Behavior", () => {
  it("should manifest cosmic wisdom correctly", () => {
    // Given: Spiritual prerequisites are established
    const mockWisdom = "Code must be felt before it is written";
    const cosmicProps = { energy: "high", aura: "purple" };

    // When: The mystical component is invoked
    render(<MysticQuote wisdom={mockWisdom} {...cosmicProps} />);

    // Then: Divine manifestation occurs in the UI
    expect(screen.getByText(mockWisdom)).toBeInTheDocument();
    expect(screen.getByTestId("wisdom-container")).toHaveClass("high-energy");
  });
});
```

### **Error Boundary Pattern**

```typescript
// Mystical error handling with spiritual messages
class CosmicErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, cosmicDisturbance: null };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      cosmicDisturbance: error.message,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="cosmic-error-container">
          <h2>🌌 Cosmic Disturbance Detected</h2>
          <p>The spiritual forces are experiencing interference.</p>
          <p className="technical-details">{this.state.cosmicDisturbance}</p>
          <FateButton onClick={this.retryCosmicAlignment}>
            Realign with Cosmos
          </FateButton>
        </div>
      );
    }
    return this.props.children;
  }
}
```

## Performance Optimization Patterns

### **Lazy Loading Mystical Content**

```typescript
// Progressive enhancement for cosmic features
const TarotWidget = dynamic(() => import("./TarotWidget"), {
  loading: () => <div>Consulting the cosmic forces...</div>,
  ssr: false, // Client-side only for interactive mystical features
});

const CosmicAnimations = dynamic(() => import("./CosmicAnimations"), {
  loading: () => null, // Graceful degradation for spiritual effects
  ssr: false,
});
```

### **Image Optimization Pattern**

```typescript
// Optimized mystical imagery
import Image from "next/image";

const SacredImage = ({ src, alt, cosmicEnergy = "medium" }) => (
  <div className={`mystical-image-container ${cosmicEnergy}-energy`}>
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/mystical-blur-data..."
    />
  </div>
);
```

## State Management Patterns

### **Minimal State with Context**

```typescript
// Cosmic theme and user preferences
const CosmicContext = createContext({
  theme: "dark",
  energy: "medium",
  toggleTheme: () => {},
  setEnergy: (level) => {},
});

// Simple mystical state management
const useMysticalState = () => {
  const [wisdom, setWisdom] = useState(null);
  const [isChanneling, setIsChanneling] = useState(false);

  const channelWisdom = useCallback(async () => {
    setIsChanneling(true);
    try {
      const cosmicWisdom = await consultTarotAPI();
      setWisdom(cosmicWisdom);
    } catch (error) {
      setWisdom("The cosmic forces are experiencing delays...");
    } finally {
      setIsChanneling(false);
    }
  }, []);

  return { wisdom, isChanneling, channelWisdom };
};
```

## Responsive Design Patterns

### **Mobile-First Mystical Design**

```css
/* Sacred spacing and cosmic breakpoints */
.mystical-container {
  @apply px-4 py-6; /* Mobile sacred spacing */
  @apply md:px-8 md:py-12; /* Tablet cosmic expansion */
  @apply lg:px-16 lg:py-24; /* Desktop spiritual grandeur */
}

.cosmic-grid {
  @apply grid grid-cols-1; /* Mobile single column flow */
  @apply md:grid-cols-2; /* Tablet dual harmony */
  @apply lg:grid-cols-3; /* Desktop trinity alignment */
  @apply gap-6 md:gap-8 lg:gap-12;
}
```

### **Progressive Enhancement Pattern**

```typescript
// Enhance experience based on device capabilities
const MysticalExperience = () => {
  const [supportsAnimations, setSupportsAnimations] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSupportsAnimations(
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches
    );
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="mystical-experience">
      {supportsAnimations && <CosmicParticles />}
      {!isMobile && <AdvancedMysticalEffects />}
      <CoreContent />
    </div>
  );
};
```

## SEO & Accessibility Patterns

### **Semantic Mystical Markup**

```typescript
// Accessible spiritual content structure
const ManifestoSection = ({ principle, index }) => (
  <section
    aria-labelledby={`principle-${index}`}
    className="mystical-principle"
  >
    <h3 id={`principle-${index}`} className="sacred-heading">
      Principle {index}: {principle.title}
    </h3>
    <p className="spiritual-text">{principle.description}</p>
  </section>
);
```

### **Mystical Meta Pattern**

```typescript
// SEO optimization for spiritual content
const MysticalSEO = ({ page }) => (
  <Head>
    <title>{page.title} | Fate-Driven Development</title>
    <meta name="description" content={page.description} />
    <meta property="og:title" content={page.title} />
    <meta property="og:description" content={page.description} />
    <meta property="og:image" content={page.mysticalImage} />
    <meta property="og:type" content="website" />
    <link rel="canonical" href={page.canonicalUrl} />
  </Head>
);
```

## Content Management Patterns

### **Markdown Processing Pipeline**

```typescript
// Mystical content transformation
const processSacredMarkdown = async (filename: string) => {
  const filePath = path.join(process.cwd(), "docs", filename);
  const markdownContent = fs.readFileSync(filePath, "utf8");

  const { data: metadata, content } = matter(markdownContent);
  const htmlContent = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(content);

  return {
    metadata: {
      ...metadata,
      cosmicEnergy: metadata.energy || "medium",
      spiritualTags: metadata.tags || [],
    },
    content: htmlContent.toString(),
    rawContent: content,
  };
};
```

### **Cross-Reference Pattern**

```typescript
// Mystical document linking
const generateCosmicLinks = (content: string, allPages: Page[]) => {
  const linkPatterns = {
    "Fate Master": "/roles-and-rituals#fate-master",
    "Oracle Owner": "/roles-and-rituals#oracle-owner",
    "Prophecy Backlog": "/process-and-docs#prophecy-backlog",
    "Tarot API": "/tools#tarot-api",
  };

  let linkedContent = content;
  Object.entries(linkPatterns).forEach(([term, link]) => {
    linkedContent = linkedContent.replace(
      new RegExp(`\\b${term}\\b`, "g"),
      `[${term}](${link})`,
    );
  });

  return linkedContent;
};
```
