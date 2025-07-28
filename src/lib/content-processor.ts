import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import { MarkdownContent, CosmicMetadata } from "@/types";

/**
 * Content Processor - Sacred bridge between markdown documentation
 * and the mystical web interface. Transforms written wisdom into
 * cosmic energy for digital manifestation.
 */

const DOCS_DIRECTORY = join(process.cwd(), "docs");

/**
 * Get all available document paths for cosmic navigation
 */
export function getDocumentPaths(): string[] {
  try {
    const filenames = readdirSync(DOCS_DIRECTORY);
    return filenames
      .filter((name) => name.endsWith(".md"))
      .map((name) => name.replace(/\.md$/, ""));
  } catch (error) {
    console.warn("Warning: Could not read docs directory:", error);
    return [];
  }
}

/**
 * Process a single markdown file into cosmic content
 */
export async function processMarkdownContent(
  slug: string,
): Promise<MarkdownContent | null> {
  try {
    const fullPath = join(DOCS_DIRECTORY, `${slug}.md`);
    const fileContents = readFileSync(fullPath, "utf8");

    // Parse frontmatter and content
    const { data, content } = matter(fileContents);

    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm) // GitHub Flavored Markdown
      .use(remarkHtml, { sanitize: false })
      .process(content);

    const htmlContent = processedContent.toString();

    // Extract cosmic metadata
    const cosmicMetadata: CosmicMetadata = {
      title: data.title || generateMysticalTitle(slug),
      description: data.description || extractDescription(content),
      cosmicEnergy: data.cosmicEnergy || inferCosmicEnergy(content),
      auraColor: data.auraColor || inferAuraColor(slug),
      tags: data.tags || inferTags(content),
      lastChanneled: data.lastChanneled || new Date().toISOString(),
      wordCount: content.split(/\s+/).length,
      mysticalLevel: data.mysticalLevel || inferMysticalLevel(content),
    };

    return {
      slug,
      title: cosmicMetadata.title,
      content: htmlContent,
      rawContent: content,
      metadata: cosmicMetadata,
      frontmatter: data,
    };
  } catch (error) {
    console.error(`Error processing ${slug}:`, error);
    return null;
  }
}

/**
 * Get all processed markdown content for cosmic indexing
 */
export async function getAllDocuments(): Promise<MarkdownContent[]> {
  const paths = getDocumentPaths();
  const documents: MarkdownContent[] = [];

  for (const path of paths) {
    const doc = await processMarkdownContent(path);
    if (doc) {
      documents.push(doc);
    }
  }

  // Sort by mystical importance
  return documents.sort((a, b) => {
    const priority = {
      manifesto: 0,
      pdr: 1,
      roles: 2,
      rituals: 3,
      process: 4,
    };

    const aPriority = priority[a.slug as keyof typeof priority] ?? 999;
    const bPriority = priority[b.slug as keyof typeof priority] ?? 999;

    return aPriority - bPriority;
  });
}

/**
 * Generate mystical title from slug
 */
function generateMysticalTitle(slug: string): string {
  const titleMap: Record<string, string> = {
    manifesto: "The Sacred Manifesto of Fate-Driven Development",
    pdr: "Product Definition Ritual (PDR)",
    roles: "Mystical Roles of the Sacred Circle",
    rituals: "Sacred Rituals & Cosmic Ceremonies",
    process: "The Eternal Process of Cosmic Alignment",
    faq: "Frequently Asked Spiritual Questions",
    community: "The Cosmic Community of Practitioners",
    comparisons: "Comparing FDD to Lesser Methodologies",
    contribute: "Contributing to the Sacred Codex",
    "deployment-guide": "Deployment Rituals & Sacred DevOps",
    docs: "Documentation Portal to Cosmic Wisdom",
    "project-goals": "Sacred Goals & Mystical Objectives",
    "site-map": "Navigation Map of the Cosmic Realm",
    "tech-stack": "Sacred Technologies & Mystical Tools",
    tools: "Cosmic Tools for Spiritual Development",
    "ui-spec": "UI Specifications for Sacred Interfaces",
  };

  return (
    titleMap[slug] ||
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

/**
 * Extract description from content
 */
function extractDescription(content: string): string {
  // Find the first substantial paragraph
  const paragraphs = content.split("\n\n").filter((p) => p.trim().length > 50);
  if (paragraphs.length > 0) {
    return (
      paragraphs[0]
        .replace(/[#*_`]/g, "") // Remove markdown syntax
        .replace(/\n/g, " ")
        .trim()
        .substring(0, 200) + "..."
    );
  }

  return "Sacred wisdom from the cosmic documentation realm.";
}

/**
 * Infer cosmic energy level from content
 */
function inferCosmicEnergy(
  content: string,
): "low" | "medium" | "high" | "transcendent" {
  const energyKeywords = {
    transcendent: [
      "cosmic",
      "transcendent",
      "sacred",
      "mystical",
      "spiritual",
      "enlightenment",
    ],
    high: [
      "ritual",
      "ceremony",
      "meditation",
      "wisdom",
      "energy",
      "manifestation",
    ],
    medium: ["process", "practice", "method", "approach", "technique"],
    low: ["basic", "simple", "introduction", "getting started"],
  };

  const contentLower = content.toLowerCase();

  for (const [level, keywords] of Object.entries(energyKeywords)) {
    const matches = keywords.filter((keyword) =>
      contentLower.includes(keyword),
    );
    if (matches.length >= 3) {
      return level as "low" | "medium" | "high" | "transcendent";
    }
  }

  // Default based on content length and complexity
  if (content.length > 5000) return "high";
  if (content.length > 2000) return "medium";
  return "low";
}

/**
 * Infer aura color based on content type
 */
function inferAuraColor(
  slug: string,
):
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "violet"
  | "gold"
  | "silver" {
  const colorMap: Record<
    string,
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "violet"
    | "gold"
    | "silver"
  > = {
    manifesto: "gold",
    pdr: "purple",
    roles: "blue",
    rituals: "violet",
    process: "green",
    faq: "silver",
    community: "orange",
    comparisons: "red",
    contribute: "yellow",
    "deployment-guide": "blue",
    docs: "purple",
    "project-goals": "gold",
    "site-map": "silver",
    "tech-stack": "blue",
    tools: "green",
    "ui-spec": "violet",
  };

  return colorMap[slug] || "purple";
}

/**
 * Extract tags from content
 */
function inferTags(content: string): string[] {
  const tagKeywords = [
    "development",
    "spiritual",
    "cosmic",
    "ritual",
    "ceremony",
    "meditation",
    "wisdom",
    "energy",
    "manifestation",
    "process",
    "methodology",
    "practice",
    "technique",
    "sacred",
    "mystical",
    "enlightenment",
    "transcendent",
    "divine",
    "universal",
  ];

  const contentLower = content.toLowerCase();
  const foundTags = tagKeywords.filter((keyword) =>
    contentLower.includes(keyword),
  );

  // Limit to most relevant tags
  return foundTags.slice(0, 5);
}

/**
 * Infer mystical level from content complexity
 */
function inferMysticalLevel(
  content: string,
): "novice" | "adept" | "master" | "cosmic-sage" {
  const complexity = {
    codeBlocks: (content.match(/```/g) || []).length / 2,
    headers: (content.match(/^#+/gm) || []).length,
    lists: (content.match(/^[\*\-\+]/gm) || []).length,
    length: content.length,
    mysticalTerms: [
      "cosmic",
      "transcendent",
      "sacred",
      "mystical",
      "spiritual",
      "enlightenment",
    ].filter((term) => content.toLowerCase().includes(term)).length,
  };

  const score =
    complexity.codeBlocks * 10 +
    complexity.headers * 5 +
    complexity.lists * 2 +
    complexity.length / 100 +
    complexity.mysticalTerms * 15;

  if (score > 300) return "cosmic-sage";
  if (score > 150) return "master";
  if (score > 75) return "adept";
  return "novice";
}

/**
 * Search documents by cosmic resonance
 */
export async function searchDocuments(
  query: string,
): Promise<MarkdownContent[]> {
  const allDocs = await getAllDocuments();
  const queryLower = query.toLowerCase();

  return allDocs
    .filter(
      (doc) =>
        doc.title.toLowerCase().includes(queryLower) ||
        doc.rawContent.toLowerCase().includes(queryLower) ||
        doc.metadata.tags.some((tag) => tag.toLowerCase().includes(queryLower)),
    )
    .sort((a, b) => {
      // Score based on relevance
      const scoreA = calculateRelevanceScore(a, queryLower);
      const scoreB = calculateRelevanceScore(b, queryLower);
      return scoreB - scoreA;
    });
}

function calculateRelevanceScore(doc: MarkdownContent, query: string): number {
  let score = 0;

  // Title matches are most important
  if (doc.title.toLowerCase().includes(query)) score += 100;

  // Tag matches
  score +=
    doc.metadata.tags.filter((tag) => tag.toLowerCase().includes(query))
      .length * 50;

  // Content matches (weighted by cosmic energy)
  const contentMatches = (
    doc.rawContent.toLowerCase().match(new RegExp(query, "g")) || []
  ).length;
  const energyMultiplier = { low: 1, medium: 2, high: 3, transcendent: 4 }[
    doc.metadata.cosmicEnergy
  ];
  score += contentMatches * energyMultiplier;

  return score;
}
