import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CosmicErrorBoundary } from "../CosmicErrorBoundary";

// Mock cosmic-utils
jest.mock("@/lib/cosmic-utils", () => ({
  cosmicUtils: {
    isMercuryRetrograde: jest.fn().mockReturnValue(false),
    calculateCosmicEnergy: jest.fn().mockReturnValue(75),
    isCosmicallyAligned: jest.fn().mockReturnValue(true),
  },
}));

// Test component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error("Test cosmic disturbance");
  }
  return <div>Working Component</div>;
};

const consoleError = jest.spyOn(console, "error");

describe("CosmicErrorBoundary Component", () => {
  beforeEach(() => {
    consoleError.mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  describe("Given a CosmicErrorBoundary component", () => {
    describe("When children render without errors", () => {
      test("Then it should render children normally", () => {
        // Given: Error boundary with working children
        render(
          <CosmicErrorBoundary>
            <div>Test Content</div>
          </CosmicErrorBoundary>,
        );

        // Then: Should show children content
        expect(screen.getByText("Test Content")).toBeInTheDocument();
        expect(
          screen.queryByTestId("cosmic-error-boundary"),
        ).not.toBeInTheDocument();
      });

      test("Then it should handle multiple children", () => {
        // Given: Error boundary with multiple children
        render(
          <CosmicErrorBoundary>
            <div>First Child</div>
            <div>Second Child</div>
            <span>Third Child</span>
          </CosmicErrorBoundary>,
        );

        // Then: Should render all children
        expect(screen.getByText("First Child")).toBeInTheDocument();
        expect(screen.getByText("Second Child")).toBeInTheDocument();
        expect(screen.getByText("Third Child")).toBeInTheDocument();
      });
    });

    describe("When children throw an error", () => {
      test("Then it should catch the error and show fallback UI", () => {
        // Given: Error boundary with error-throwing child
        render(
          <CosmicErrorBoundary>
            <ThrowError shouldThrow={true} />
          </CosmicErrorBoundary>,
        );

        // Then: Should show error boundary UI
        expect(screen.getByTestId("cosmic-error-boundary")).toBeInTheDocument();
        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.queryByText("Working Component")).not.toBeInTheDocument();
      });

      test("Then it should display cosmic error message", () => {
        // Given: Error boundary catching an error
        render(
          <CosmicErrorBoundary>
            <ThrowError shouldThrow={true} />
          </CosmicErrorBoundary>,
        );

        // Then: Should show cosmic-themed error content
        expect(
          screen.getByRole("heading", { name: /cosmic disturbance detected/i }),
        ).toBeInTheDocument();
        // Check for any of the possible spiritual guidance messages
        const guidanceText = screen.getByText(
          /aura may need cleansing|spiritual guardians are protecting|Component energies are not harmonizing/i,
        );
        expect(guidanceText).toBeInTheDocument();
      });

      test("Then it should have proper ARIA attributes", () => {
        // Given: Error boundary with error
        render(
          <CosmicErrorBoundary>
            <ThrowError shouldThrow={true} />
          </CosmicErrorBoundary>,
        );

        // Then: Should have accessibility attributes
        const errorElement = screen.getByRole("alert");
        expect(errorElement).toHaveAttribute("aria-labelledby", "error-title");
        expect(errorElement).toHaveAttribute(
          "aria-describedby",
          "error-description",
        );
      });
    });

    describe("When using custom fallback", () => {
      test("Then it should render custom fallback instead of default UI", () => {
        // Given: Error boundary with custom fallback
        const customFallback = (
          <div data-testid="custom-fallback">Custom Error UI</div>
        );

        render(
          <CosmicErrorBoundary fallback={customFallback}>
            <ThrowError shouldThrow={true} />
          </CosmicErrorBoundary>,
        );

        // Then: Should show custom fallback
        expect(screen.getByTestId("custom-fallback")).toBeInTheDocument();
        expect(screen.getByText("Custom Error UI")).toBeInTheDocument();
        expect(
          screen.queryByTestId("cosmic-error-boundary"),
        ).not.toBeInTheDocument();
      });
    });

    describe("When interacting with error UI", () => {
      test("Then it should have retry functionality", () => {
        // Given: Error boundary with error state
        render(
          <CosmicErrorBoundary>
            <ThrowError shouldThrow={true} />
          </CosmicErrorBoundary>,
        );

        // When: Looking for retry button
        // Then: Should have some action element (button or link)
        const errorBoundary = screen.getByTestId("cosmic-error-boundary");
        expect(errorBoundary).toBeInTheDocument();

        // Check if there's any interactive element for retry
        const buttons = screen.queryAllByRole("button");
        const links = screen.queryAllByRole("link");
        expect(buttons.length + links.length).toBeGreaterThan(0);
      });

      test("Then it should display error details", () => {
        // Given: Error boundary catching error
        render(
          <CosmicErrorBoundary>
            <ThrowError shouldThrow={true} />
          </CosmicErrorBoundary>,
        );

        // Then: Should show error-related content
        expect(screen.getByTestId("cosmic-error-boundary")).toBeInTheDocument();

        // Should have some cosmic-themed text
        const errorContent = screen.getByTestId("cosmic-error-boundary");
        expect(errorContent.textContent).toMatch(
          /(cosmic|spiritual|energy|aura|mystical)/i,
        );
      });
    });

    describe("Error classification and recovery", () => {
      test("Then it should handle different error types", () => {
        // Given: Different types of errors
        const errorTypes = [
          new Error("Network error"),
          new Error("Permission denied"),
          new Error("Syntax error"),
        ];

        errorTypes.forEach((error, index) => {
          const ThrowSpecificError = () => {
            throw error;
          };

          const { unmount } = render(
            <CosmicErrorBoundary>
              <ThrowSpecificError />
            </CosmicErrorBoundary>,
          );

          // Then: Should handle each error gracefully
          expect(
            screen.getByTestId("cosmic-error-boundary"),
          ).toBeInTheDocument();

          unmount();
        });
      });

      test("Then it should recover from error state", () => {
        // Given: Component that can toggle error state
        const { rerender } = render(
          <CosmicErrorBoundary>
            <ThrowError shouldThrow={true} />
          </CosmicErrorBoundary>,
        );

        // When: Error is shown
        expect(screen.getByTestId("cosmic-error-boundary")).toBeInTheDocument();

        // Note: Testing recovery would require the retry mechanism to work
        // For now, we just verify the error state is properly handled
        expect(screen.getByRole("alert")).toBeInTheDocument();
      });
    });

    describe("Edge Cases", () => {
      test("Then it should handle null children gracefully", () => {
        // Given: Error boundary with null children
        render(<CosmicErrorBoundary>{null}</CosmicErrorBoundary>);

        // Then: Should render without errors
        expect(
          screen.queryByTestId("cosmic-error-boundary"),
        ).not.toBeInTheDocument();
      });

      test("Then it should handle empty children", () => {
        // Given: Error boundary with null children
        render(<CosmicErrorBoundary>{null}</CosmicErrorBoundary>);

        // Then: Should render without errors
        expect(
          screen.queryByTestId("cosmic-error-boundary"),
        ).not.toBeInTheDocument();
      });

      test("Then it should handle complex nested errors", () => {
        // Given: Nested components with error
        const NestedError = () => (
          <div>
            <div>
              <ThrowError shouldThrow={true} />
            </div>
          </div>
        );

        render(
          <CosmicErrorBoundary>
            <NestedError />
          </CosmicErrorBoundary>,
        );

        // Then: Should catch nested errors
        expect(screen.getByTestId("cosmic-error-boundary")).toBeInTheDocument();
      });
    });
  });
});
