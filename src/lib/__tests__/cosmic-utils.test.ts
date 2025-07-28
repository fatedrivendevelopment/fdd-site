import {
  cosmicUtils,
  wisdomEngine,
  tarotEngine,
  roleAssignment,
  cosmicClassNames,
  loadingStates,
} from "../cosmic-utils";
import { CosmicEnergyLevel, AuraColor } from "@/types";

describe("cosmic-utils", () => {
  describe("cosmicUtils", () => {
    describe("calculateCosmicEnergy", () => {
      test("should calculate transcendent energy with high factors", () => {
        // Given: High energy factors
        const factors = {
          lunarPhase: 1, // Full moon
          timeOfDay: 0, // Midnight
          spiritualActivity: "ritual",
        };

        // When: Calculating cosmic energy
        const result = cosmicUtils.calculateCosmicEnergy(factors);

        // Then: Should return transcendent energy
        expect(result).toBe("transcendent");
      });

      test("should calculate low energy with low factors", () => {
        // Given: Low energy factors
        const factors = {
          lunarPhase: 0, // New moon
          timeOfDay: 12, // Noon
          spiritualActivity: "debugging",
        };

        // When: Calculating cosmic energy
        const result = cosmicUtils.calculateCosmicEnergy(factors);

        // Then: Should return low energy
        expect(result).toBe("low");
      });

      test("should use default values when no factors provided", () => {
        // When: Calculating energy with no factors
        const result = cosmicUtils.calculateCosmicEnergy({});

        // Then: Should return a valid energy level
        expect(["low", "medium", "high", "transcendent"]).toContain(result);
      });

      test("should handle unknown spiritual activity", () => {
        // Given: Unknown spiritual activity
        const factors = { spiritualActivity: "unknown-activity" };

        // When: Calculating cosmic energy
        const result = cosmicUtils.calculateCosmicEnergy(factors);

        // Then: Should return a valid energy level
        expect(["low", "medium", "high", "transcendent"]).toContain(result);
      });
    });

    describe("isMercuryRetrograde", () => {
      test("should return boolean value", () => {
        // When: Checking Mercury retrograde
        const result = cosmicUtils.isMercuryRetrograde();

        // Then: Should return boolean
        expect(typeof result).toBe("boolean");
      });

      test("should be consistent for same date", () => {
        // When: Calling multiple times on same date
        const result1 = cosmicUtils.isMercuryRetrograde();
        const result2 = cosmicUtils.isMercuryRetrograde();

        // Then: Should return same result
        expect(result1).toBe(result2);
      });
    });

    describe("generateAuraColor", () => {
      test("should return valid aura color for low energy", () => {
        // When: Generating aura for low energy
        const result = cosmicUtils.generateAuraColor("low");

        // Then: Should return blue or indigo
        expect(["blue", "indigo"]).toContain(result);
      });

      test("should return valid aura color for transcendent energy", () => {
        // When: Generating aura for transcendent energy
        const result = cosmicUtils.generateAuraColor("transcendent");

        // Then: Should return gold, silver, or violet
        expect(["gold", "silver", "violet"]).toContain(result);
      });

      test("should handle all energy levels", () => {
        // Given: All energy levels
        const energyLevels: CosmicEnergyLevel[] = [
          "low",
          "medium",
          "high",
          "transcendent",
        ];

        energyLevels.forEach((energy) => {
          // When: Generating aura for each energy
          const result = cosmicUtils.generateAuraColor(energy);

          // Then: Should return valid aura color
          expect(typeof result).toBe("string");
          expect(result.length).toBeGreaterThan(0);
        });
      });
    });

    describe("isCosmicallyAligned", () => {
      test("should return false when Mercury is in retrograde", () => {
        // Given: Mock Mercury retrograde
        const originalIsMercuryRetrograde = cosmicUtils.isMercuryRetrograde;
        cosmicUtils.isMercuryRetrograde = jest.fn().mockReturnValue(true);

        // When: Checking alignment with high energy
        const result = cosmicUtils.isCosmicallyAligned("high");

        // Then: Should return false
        expect(result).toBe(false);

        // Cleanup
        cosmicUtils.isMercuryRetrograde = originalIsMercuryRetrograde;
      });

      test("should return true for medium energy when not in retrograde", () => {
        // Given: Mock no Mercury retrograde
        const originalIsMercuryRetrograde = cosmicUtils.isMercuryRetrograde;
        cosmicUtils.isMercuryRetrograde = jest.fn().mockReturnValue(false);

        // When: Checking alignment with medium energy
        const result = cosmicUtils.isCosmicallyAligned("medium");

        // Then: Should return true
        expect(result).toBe(true);

        // Cleanup
        cosmicUtils.isMercuryRetrograde = originalIsMercuryRetrograde;
      });

      test("should return false for low energy", () => {
        // Given: Mock no Mercury retrograde
        const originalIsMercuryRetrograde = cosmicUtils.isMercuryRetrograde;
        cosmicUtils.isMercuryRetrograde = jest.fn().mockReturnValue(false);

        // When: Checking alignment with low energy
        const result = cosmicUtils.isCosmicallyAligned("low");

        // Then: Should return false
        expect(result).toBe(false);

        // Cleanup
        cosmicUtils.isMercuryRetrograde = originalIsMercuryRetrograde;
      });
    });

    describe("getMoonPhase", () => {
      test("should return valid moon phase string", () => {
        // When: Getting moon phase
        const result = cosmicUtils.getMoonPhase();

        // Then: Should return valid phase with emoji
        expect(typeof result).toBe("string");
        expect(result).toMatch(/🌑|🌒|🌓|🌔|🌕|🌖|🌗|🌘/);
      });

      test("should return consistent result for same date", () => {
        // When: Getting moon phase multiple times
        const result1 = cosmicUtils.getMoonPhase();
        const result2 = cosmicUtils.getMoonPhase();

        // Then: Should return same result
        expect(result1).toBe(result2);
      });
    });
  });

  describe("wisdomEngine", () => {
    describe("channelWisdom", () => {
      test("should return wisdom with default energy", () => {
        // When: Channeling wisdom with no parameters
        const result = wisdomEngine.channelWisdom();

        // Then: Should return valid wisdom object
        expect(result).toHaveProperty("text");
        expect(result).toHaveProperty("source", "manifesto");
        expect(result).toHaveProperty("energy", "medium");
        expect(typeof result.text).toBe("string");
        expect(result.text.length).toBeGreaterThan(0);
      });

      test("should return wisdom with specified energy", () => {
        // When: Channeling wisdom with high energy
        const result = wisdomEngine.channelWisdom("high");

        // Then: Should return wisdom with high energy
        expect(result.energy).toBe("high");
        expect(result.source).toBe("manifesto");
        expect(typeof result.text).toBe("string");
      });

      test("should return different wisdom on multiple calls", () => {
        // When: Channeling wisdom multiple times
        const results = Array.from({ length: 10 }, () =>
          wisdomEngine.channelWisdom(),
        );

        // Then: Should get variety in wisdom texts (at least some different)
        const uniqueTexts = new Set(results.map((r) => r.text));
        expect(uniqueTexts.size).toBeGreaterThan(1);
      });
    });

    describe("contextualWisdom", () => {
      test("should return deployment-specific wisdom", () => {
        // When: Getting wisdom for deployment context
        const result = wisdomEngine.contextualWisdom("deployment");

        // Then: Should return cosmic wisdom with appropriate energy
        expect(result).toHaveProperty("text");
        expect(result).toHaveProperty("source", "cosmic");
        expect(result).toHaveProperty("energy");
        expect(["low", "medium", "high", "transcendent"]).toContain(
          result.energy,
        );
      });

      test("should return testing-specific wisdom", () => {
        // When: Getting wisdom for testing context
        const result = wisdomEngine.contextualWisdom("testing");

        // Then: Should return cosmic wisdom
        expect(result.source).toBe("cosmic");
        expect(typeof result.text).toBe("string");
      });

      test("should fallback to general wisdom for unknown context", () => {
        // When: Getting wisdom for unknown context
        const result = wisdomEngine.contextualWisdom("unknown-context");

        // Then: Should return general wisdom
        expect(result.source).toBe("cosmic");
        expect(typeof result.text).toBe("string");
      });
    });

    describe("sacredWisdom", () => {
      test("should have wisdom array with content", () => {
        // Then: Sacred wisdom should be non-empty array
        expect(Array.isArray(wisdomEngine.sacredWisdom)).toBe(true);
        expect(wisdomEngine.sacredWisdom.length).toBeGreaterThan(0);
        expect(
          wisdomEngine.sacredWisdom.every((w) => typeof w === "string"),
        ).toBe(true);
      });
    });
  });

  describe("tarotEngine", () => {
    describe("drawCard", () => {
      test("should return valid tarot reading", () => {
        // When: Drawing a tarot card
        const result = tarotEngine.drawCard();

        // Then: Should return valid reading
        expect(result).toHaveProperty("card");
        expect(result).toHaveProperty("meaning");
        expect(result).toHaveProperty("guidance");
        expect(typeof result.card).toBe("string");
        expect(typeof result.meaning).toBe("string");
        expect(typeof result.guidance).toBe("string");
      });

      test("should return different cards on multiple draws", () => {
        // When: Drawing multiple cards
        const results = Array.from({ length: 10 }, () =>
          tarotEngine.drawCard(),
        );

        // Then: Should get variety (at least some different cards)
        const uniqueCards = new Set(results.map((r) => r.card));
        expect(uniqueCards.size).toBeGreaterThan(1);
      });
    });

    describe("consultOracle", () => {
      test("should return relevant card for deployment question", () => {
        // When: Consulting oracle about deployment
        const result = tarotEngine.consultOracle(
          "Should we deploy this feature?",
        );

        // Then: Should return valid reading
        expect(result).toHaveProperty("card");
        expect(result).toHaveProperty("meaning");
        expect(result).toHaveProperty("guidance");
        expect(typeof result.card).toBe("string");
      });

      test("should return relevant card for debug question", () => {
        // When: Consulting oracle about debugging
        const result = tarotEngine.consultOracle("How do I fix this bug?");

        // Then: Should return valid reading
        expect(result).toHaveProperty("card");
        expect(result).toHaveProperty("cosmicEnergy");
      });

      test("should fallback to random card for general question", () => {
        // When: Consulting oracle with general question
        const result = tarotEngine.consultOracle("What should I do today?");

        // Then: Should return valid reading
        expect(result).toHaveProperty("card");
        expect(result).toHaveProperty("meaning");
        expect(result).toHaveProperty("guidance");
      });
    });
  });

  describe("loadingStates", () => {
    describe("getRandomLoadingMessage", () => {
      test("should return valid loading message", () => {
        // When: Getting random loading message
        const result = loadingStates.getRandomLoadingMessage();

        // Then: Should return string message
        expect(typeof result).toBe("string");
        expect(result.length).toBeGreaterThan(0);
      });

      test("should return different messages on multiple calls", () => {
        // When: Getting multiple loading messages
        const results = Array.from({ length: 10 }, () =>
          loadingStates.getRandomLoadingMessage(),
        );

        // Then: Should get variety (at least some different messages)
        const uniqueMessages = new Set(results);
        expect(uniqueMessages.size).toBeGreaterThan(1);
      });
    });

    describe("getLoadingStateForActivity", () => {
      test("should return valid loading state for known activity", () => {
        // When: Getting loading state for wisdom activity
        const result = loadingStates.getLoadingStateForActivity("wisdom");

        // Then: Should return channeling-wisdom
        expect(result).toBe("channeling-wisdom");
      });

      test("should return default loading state for unknown activity", () => {
        // When: Getting loading state for unknown activity
        const result = loadingStates.getLoadingStateForActivity("unknown");

        // Then: Should return default state
        expect(result).toBe("consulting-stars");
      });
    });
  });

  describe("roleAssignment", () => {
    describe("generateMysticalRole", () => {
      test("should return valid role assignment", () => {
        // When: Generating mystical role
        const result = roleAssignment.generateMysticalRole();

        // Then: Should return valid role object
        expect(result).toHaveProperty("role");
        expect(result).toHaveProperty("description");
        expect(result).toHaveProperty("aura");
        expect(typeof result.role).toBe("string");
        expect(typeof result.description).toBe("string");
        expect(typeof result.aura).toBe("string");
      });

      test("should return different roles on multiple calls", () => {
        // When: Generating multiple roles
        const results = Array.from({ length: 10 }, () =>
          roleAssignment.generateMysticalRole(),
        );

        // Then: Should get variety (at least some different roles)
        const uniqueRoles = new Set(results.map((r) => r.role));
        expect(uniqueRoles.size).toBeGreaterThan(1);
      });

      test("should handle preferences parameter", () => {
        // Given: Role preferences
        const preferences = {
          leadership: true,
          technical: false,
          creative: true,
          analytical: false,
        };

        // When: Generating role with preferences
        const result = roleAssignment.generateMysticalRole(preferences);

        // Then: Should return valid role (preferences don't affect selection yet)
        expect(result).toHaveProperty("role");
        expect(result).toHaveProperty("description");
        expect(result).toHaveProperty("aura");
      });
    });
  });

  describe("cosmicClassNames", () => {
    describe("energyClasses", () => {
      test("should return classes for low energy", () => {
        // When: Getting classes for low energy
        const result = cosmicClassNames.energyClasses("low");

        // Then: Should contain expected classes
        expect(result).toContain("transition-all duration-300");
        expect(result).toContain("opacity-70 scale-95");
      });

      test("should return classes for transcendent energy", () => {
        // When: Getting classes for transcendent energy
        const result = cosmicClassNames.energyClasses("transcendent");

        // Then: Should contain transcendent-specific classes
        expect(result).toContain("mystical-glow");
        expect(result).toContain("animate-cosmic-float");
      });

      test("should handle all energy levels", () => {
        // Given: All energy levels
        const energyLevels: CosmicEnergyLevel[] = [
          "low",
          "medium",
          "high",
          "transcendent",
        ];

        energyLevels.forEach((energy) => {
          // When: Getting classes for each energy
          const result = cosmicClassNames.energyClasses(energy);

          // Then: Should return valid classes string
          expect(typeof result).toBe("string");
          expect(result).toContain("transition-all duration-300");
        });
      });
    });

    describe("auraClasses", () => {
      test("should return classes for red aura", () => {
        // When: Getting classes for red aura
        const result = cosmicClassNames.auraClasses("red");

        // Then: Should contain red aura classes
        expect(result).toContain("border-aura-red");
        expect(result).toContain("shadow-aura-red/20");
      });

      test("should return classes for gold aura", () => {
        // When: Getting classes for gold aura
        const result = cosmicClassNames.auraClasses("gold");

        // Then: Should contain gold cosmic classes
        expect(result).toContain("border-cosmic-gold");
        expect(result).toContain("shadow-cosmic-gold/20");
      });

      test("should handle all aura colors", () => {
        // Given: All aura colors
        const auraColors: AuraColor[] = [
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet",
          "purple",
          "gold",
          "silver",
        ];

        auraColors.forEach((aura) => {
          // When: Getting classes for each aura
          const result = cosmicClassNames.auraClasses(aura);

          // Then: Should return valid classes string
          expect(typeof result).toBe("string");
          expect(result.length).toBeGreaterThan(0);
        });
      });
    });

    describe("mysticalClasses", () => {
      test("should combine energy and aura classes", () => {
        // When: Getting mystical classes
        const result = cosmicClassNames.mysticalClasses("high", "purple");

        // Then: Should contain both energy and aura classes
        expect(result).toContain("opacity-100 scale-105 mystical-glow");
        expect(result).toContain("border-cosmic-purple");
      });

      test("should include additional classes when provided", () => {
        // When: Getting mystical classes with additional
        const result = cosmicClassNames.mysticalClasses(
          "medium",
          "blue",
          "custom-class",
        );

        // Then: Should include additional class
        expect(result).toContain("custom-class");
        expect(result).toContain("opacity-90 scale-100");
        expect(result).toContain("border-aura-blue");
      });

      test("should filter out empty additional classes", () => {
        // When: Getting mystical classes with empty additional
        const result = cosmicClassNames.mysticalClasses("low", "green", "");

        // Then: Should not contain double spaces
        expect(result).not.toMatch(/\s{2,}/);
      });
    });
  });
});
