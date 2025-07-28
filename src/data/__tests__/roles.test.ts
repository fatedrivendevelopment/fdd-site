import { mysticalRoles } from "../roles";
import { FDDRole } from "@/types";

describe("mysticalRoles data", () => {
  describe("mysticalRoles array", () => {
    test("should export non-empty array of roles", () => {
      // Then: Should have roles
      expect(Array.isArray(mysticalRoles)).toBe(true);
      expect(mysticalRoles.length).toBeGreaterThan(0);
    });

    test("should have roles with required properties", () => {
      // Given: Each role in the array
      mysticalRoles.forEach((role: FDDRole, index: number) => {
        // Then: Should have all required properties
        expect(role).toHaveProperty("id");
        expect(role).toHaveProperty("name");
        expect(role).toHaveProperty("description");
        expect(role).toHaveProperty("aura");
        expect(role).toHaveProperty("cosmicLevel");
        expect(role).toHaveProperty("responsibilities");
        expect(role).toHaveProperty("mysticalTools");

        // And: Properties should have correct types
        expect(typeof role.id).toBe("string");
        expect(typeof role.name).toBe("string");
        expect(typeof role.description).toBe("string");
        expect(typeof role.aura).toBe("string");
        expect(typeof role.cosmicLevel).toBe("string");
        expect(Array.isArray(role.responsibilities)).toBe(true);
        expect(Array.isArray(role.mysticalTools)).toBe(true);

        // And: Should have non-empty values
        expect(role.id.length).toBeGreaterThan(0);
        expect(role.name.length).toBeGreaterThan(0);
        expect(role.description.length).toBeGreaterThan(0);
      });
    });

    test("should have unique role IDs", () => {
      // When: Getting all role IDs
      const roleIds = mysticalRoles.map((role) => role.id);
      const uniqueIds = new Set(roleIds);

      // Then: All IDs should be unique
      expect(uniqueIds.size).toBe(roleIds.length);
    });

    test("should have valid cosmic energy levels", () => {
      // Given: Valid energy levels
      const validEnergyLevels = ["low", "medium", "high", "transcendent"];

      // Then: All roles should have valid energy levels
      mysticalRoles.forEach((role) => {
        expect(validEnergyLevels).toContain(role.cosmicLevel);
      });
    });

    test("should have valid aura colors", () => {
      // Given: Valid aura colors
      const validAuraColors = [
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

      // Then: All roles should have valid aura colors
      mysticalRoles.forEach((role) => {
        expect(validAuraColors).toContain(role.aura);
      });
    });

    test("should have at least one responsibility per role", () => {
      // Then: Each role should have responsibilities
      mysticalRoles.forEach((role) => {
        expect(role.responsibilities.length).toBeGreaterThan(0);
        expect(
          role.responsibilities.every(
            (r) => typeof r === "string" && r.length > 0,
          ),
        ).toBe(true);
      });
    });

    test("should have at least one mystical tool per role", () => {
      // Then: Each role should have mystical tools
      mysticalRoles.forEach((role) => {
        expect(role.mysticalTools.length).toBeGreaterThan(0);
        expect(
          role.mysticalTools.every(
            (tool) => typeof tool === "string" && tool.length > 0,
          ),
        ).toBe(true);
      });
    });

    test("should include known roles", () => {
      // Given: Expected role IDs
      const expectedRoles = ["fate-master", "oracle-owner", "code-medium"];

      // Then: Should include these roles
      const roleIds = mysticalRoles.map((role) => role.id);
      expectedRoles.forEach((expectedRole) => {
        expect(roleIds).toContain(expectedRole);
      });
    });
  });
});
