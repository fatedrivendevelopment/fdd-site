// Mystical component base interface
export interface MysticalComponentProps {
  cosmicEnergy?: CosmicEnergyLevel;
  auraColor?: AuraColor;
  spiritualAlignment?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// Cosmic energy levels for spiritual components
export type CosmicEnergyLevel = "low" | "medium" | "high" | "transcendent";

// Aura colors aligned with chakras
export type AuraColor =
  | "red" // Fire chakra
  | "orange" // Sacral chakra
  | "yellow" // Solar chakra
  | "green" // Heart chakra
  | "blue" // Throat chakra
  | "indigo" // Third eye chakra
  | "violet" // Crown chakra
  | "purple" // Mystical default
  | "gold" // Sacred accent
  | "silver"; // Lunar accent

// Content structure from markdown processing
export interface MarkdownContent {
  slug: string;
  title: string;
  metadata: CosmicMetadata;
  content: string;
  rawContent: string;
  frontmatter?: any;
}

export interface CosmicMetadata {
  title: string;
  description: string;
  cosmicEnergy: CosmicEnergyLevel;
  auraColor: AuraColor;
  tags: string[];
  lastChanneled: string;
  wordCount: number;
  mysticalLevel: "novice" | "adept" | "master" | "cosmic-sage";
  spiritualTags?: string[];
  nextPath?: string;
  energy?: CosmicEnergyLevel; // Alternative field name
}

// FDD Role definitions
export interface FDDRole {
  id: string;
  name: string;
  description: string;
  aura: AuraColor;
  cosmicLevel: CosmicEnergyLevel;
  responsibilities: string[];
  mysticalTools: string[];
}

// FDD Ritual definitions
export interface FDDRitual {
  id: string;
  name: string;
  description: string;
  frequency: "daily" | "weekly" | "monthly" | "lunar" | "special";
  participants: string[];
  duration: string;
  cosmicRequirements: string[];
  expectedOutcome: string;
}

// Tarot API responses
export interface TarotReading {
  card: string;
  meaning: string;
  guidance?: string;
  cosmicEnergy: CosmicEnergyLevel;
}

// Mystical wisdom for random generation
export interface MysticalWisdom {
  text: string;
  source: "manifesto" | "ritual" | "cosmic" | "generated";
  energy: CosmicEnergyLevel;
}

// Navigation structure
export interface MysticalNavItem {
  path: string;
  label: string;
  description: string;
  cosmicEnergy: CosmicEnergyLevel;
  icon?: string;
}

// Page metadata for SEO and cosmic alignment
export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  mysticalImage?: string;
  cosmicEnergy: CosmicEnergyLevel;
}

// Error handling types
export interface CosmicError {
  message: string;
  type: "cosmic" | "spiritual" | "technical" | "mercury-retrograde";
  severity: "minor" | "major" | "catastrophic";
  guidance?: string;
}

// Loading states for mystical operations
export type MysticalLoadingState =
  | "consulting-stars"
  | "aligning-chakras"
  | "channeling-wisdom"
  | "purifying-aura"
  | "communing-with-cosmos"
  | "idle";

// Component test utilities
export interface MysticalTestProps {
  "data-testid"?: string;
  "aria-label"?: string;
}

// Spiritual form data
export interface SpiritualFormData {
  seeker: string;
  question: string;
  energyLevel: CosmicEnergyLevel;
  preferredGuidance: "tarot" | "wisdom" | "cosmic-alignment";
}

// Site configuration
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  cosmicAlignment: "aligned" | "misaligned" | "transcendent";
  mysticalMode: "active" | "dormant" | "eclipse";
}

// Export utility type helpers
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type WithCosmicEnergy<T> = T & { cosmicEnergy: CosmicEnergyLevel };
export type MysticalComponent<T = {}> = React.FC<T & MysticalComponentProps>;
