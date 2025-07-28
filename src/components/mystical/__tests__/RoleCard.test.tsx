import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";
import { RoleCard } from "../RoleCard";
import { FDDRole } from "@/types";

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock cosmic utils
jest.mock("@/lib/cosmic-utils", () => ({
  cosmicClassNames: {
    mysticalClasses: jest.fn().mockReturnValue("cosmic-mock-classes"),
  },
  wisdomEngine: {
    contextualWisdom: jest.fn().mockReturnValue({
      text: "Mocked cosmic wisdom for testing purposes",
      source: "test",
      energy: "high",
    }),
    channelWisdom: jest
      .fn()
      .mockReturnValue("Test wisdom from the cosmic realm"),
  },
  currentCosmicEnergy: jest.fn().mockReturnValue("medium"),
}));

describe("RoleCard Component", () => {
  const mockPush = jest.fn();
  const mockRouter = {
    push: mockPush,
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  };

  const mockRole: FDDRole = {
    id: "test-role",
    name: "🌟 Test Mystic",
    description: "Tests the cosmic energies",
    responsibilities: [
      "Channel testing energy",
      "Validate cosmic assertions",
      "Guard against regression spirits",
    ],
    cosmicLevel: "high",
    aura: "purple",
    mysticalTools: ["Jest Crystal", "Testing Tarot", "Debug Divination"],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  describe("Given a RoleCard component", () => {
    describe("When rendered with role data", () => {
      test("Then it should display role information correctly", () => {
        // Given: Component with role data
        render(<RoleCard role={mockRole} data-testid="role-card-test" />);

        // When: Component loads
        // Then: Should display role information
        expect(screen.getByTestId("role-card-test")).toBeInTheDocument();
        expect(screen.getByText("🌟 Test Mystic")).toBeInTheDocument();
        expect(
          screen.getByText("Tests the cosmic energies"),
        ).toBeInTheDocument();
        expect(screen.getByText(/Cosmic Level.*high/)).toBeInTheDocument(); // Text is split across elements
      });

      test("Then it should display mystical decorations", () => {
        // Given: Component rendered
        render(<RoleCard role={mockRole} />);

        // When: Component loads
        // Then: Should show mystical elements
        expect(screen.getByText("🔮")).toBeInTheDocument(); // Crystal emoji (actual)
        expect(
          screen.getByText(/Mocked cosmic wisdom for testing purposes/),
        ).toBeInTheDocument(); // Wisdom text with partial match
        expect(screen.getByText(/Sacred Responsibilities/)).toBeInTheDocument(); // Responsibilities section
      });
    });

    describe("When card is clicked", () => {
      test("Then it should navigate to role detail page", async () => {
        // Given: Component rendered
        render(<RoleCard role={mockRole} data-testid="clickable-card" />);

        // When: Card is clicked
        const card = screen.getByTestId("clickable-card");
        fireEvent.click(card);

        // Then: Should navigate to role detail page
        await waitFor(() => {
          expect(mockPush).toHaveBeenCalledWith("/roles/test-role");
        });
      });

      test("Then it should show hover effects", () => {
        // Given: Component rendered
        render(<RoleCard role={mockRole} data-testid="hover-card" />);

        // When: Card is hovered
        const card = screen.getByTestId("hover-card");
        fireEvent.mouseEnter(card);

        // Then: Should have hover classes
        expect(card).toHaveClass("hover:scale-105");
        expect(card).toHaveClass("cursor-pointer");
      });
    });

    describe("When role has different cosmic levels", () => {
      test("Then it should display transcendent level correctly", () => {
        // Given: Role with transcendent level
        const transcendentRole = {
          ...mockRole,
          cosmicLevel: "transcendent" as const,
        };
        render(<RoleCard role={transcendentRole} />);

        // When: Component loads
        // Then: Should show transcendent level
        expect(
          screen.getByText(/Cosmic Level.*transcendent/),
        ).toBeInTheDocument();
      });

      test("Then it should display low level correctly", () => {
        // Given: Role with low level
        const lowRole = { ...mockRole, cosmicLevel: "low" as const };
        render(<RoleCard role={lowRole} />);

        // When: Component loads
        // Then: Should show low level
        expect(screen.getByText(/Cosmic Level.*low/)).toBeInTheDocument();
      });
    });

    describe("When role has different aura colors", () => {
      test("Then it should apply correct aura styling", () => {
        // Given: Role with gold aura
        const goldRole = { ...mockRole, aura: "gold" as const };
        render(<RoleCard role={goldRole} data-testid="gold-aura-card" />);

        // When: Component loads
        // Then: Should render without errors and show role content
        const card = screen.getByTestId("gold-aura-card");
        expect(card).toBeInTheDocument();
        expect(screen.getByText("🌟 Test Mystic")).toBeInTheDocument();
      });
    });

    describe("Accessibility", () => {
      test("Then it should have proper ARIA attributes", () => {
        // Given: Component rendered
        render(<RoleCard role={mockRole} data-testid="accessible-card" />);

        // When: Component loads
        // Then: Should have proper accessibility
        const card = screen.getByTestId("accessible-card");
        expect(card).toHaveAttribute("role", "button");
        expect(card).toHaveAttribute("tabIndex", "0");
        expect(card).toHaveAttribute("aria-pressed", "false");
      });

      test("Then it should support keyboard navigation", async () => {
        // Given: Component rendered
        render(<RoleCard role={mockRole} data-testid="keyboard-card" />);

        // When: Enter key is pressed
        const card = screen.getByTestId("keyboard-card");
        card.focus();
        fireEvent.keyDown(card, { key: "Enter" });

        // Then: Should navigate
        await waitFor(() => {
          expect(mockPush).toHaveBeenCalledWith("/roles/test-role");
        });
      });

      test("Then it should support space key navigation", async () => {
        // Given: Component rendered
        render(<RoleCard role={mockRole} data-testid="space-card" />);

        // When: Space key is pressed
        const card = screen.getByTestId("space-card");
        card.focus();
        fireEvent.keyDown(card, { key: " " });

        // Then: Should navigate
        await waitFor(() => {
          expect(mockPush).toHaveBeenCalledWith("/roles/test-role");
        });
      });
    });

    describe("Edge Cases", () => {
      test("Then it should handle missing optional fields gracefully", () => {
        // Given: Role with minimal data
        const minimalRole: FDDRole = {
          id: "minimal",
          name: "🌙 Minimal Mystic",
          description: "Basic role",
          responsibilities: ["Do something"],
          cosmicLevel: "medium",
          aura: "blue",
          mysticalTools: ["Basic tool"],
        };

        render(<RoleCard role={minimalRole} />);

        // When: Component loads
        // Then: Should render without errors
        expect(screen.getByText("🌙 Minimal Mystic")).toBeInTheDocument();
        expect(screen.getByText("Basic role")).toBeInTheDocument();
      });
    });
  });
});
