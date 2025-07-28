import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../page";

// Mock child components
jest.mock("@/components/mystical/MysticQuote", () => ({
  MysticQuote: ({ cosmicEnergy }: any) => (
    <div data-testid="mystic-quote" data-cosmic-energy={cosmicEnergy}>
      Mocked Mystic Quote
    </div>
  ),
}));

jest.mock("@/components/mystical/FateButton", () => ({
  FateButton: ({ children, cosmicEnergy }: any) => (
    <div data-testid="fate-button" data-cosmic-energy={cosmicEnergy}>
      {children}
    </div>
  ),
}));

jest.mock("@/components/mystical/RoleCard", () => ({
  RoleCard: ({ role }: any) => (
    <div data-testid="role-card" data-role-id={role?.id}>
      {role?.name}
    </div>
  ),
}));

jest.mock("@/data/roles", () => ({
  mysticalRoles: [{ id: "test-role", name: "Test Role", description: "Test" }],
}));

describe("Homepage", () => {
  describe("Given the FDD homepage", () => {
    describe("When rendered", () => {
      test("Then it should render without errors", () => {
        // Given: Homepage component
        const { container } = render(<Page />);

        // Then: Should render successfully with basic content
        expect(container).toBeInTheDocument();
      });

      test("Then it should display main title elements", () => {
        // Given: Homepage component
        render(<Page />);

        // Then: Should show main title - use getAllByText for multiple matches
        const fateElements = screen.getAllByText(/Fate-Driven/i);
        expect(fateElements.length).toBeGreaterThan(0);

        const devElements = screen.getAllByText(/Development/i);
        expect(devElements.length).toBeGreaterThan(0);
      });

      test("Then it should render mystical quote component", () => {
        // Given: Homepage component
        render(<Page />);

        // Then: Should render MysticQuote
        expect(screen.getByTestId("mystic-quote")).toBeInTheDocument();
      });

      test("Then it should render fate buttons", () => {
        // Given: Homepage component
        render(<Page />);

        // Then: Should have fate buttons
        const fateButtons = screen.getAllByTestId("fate-button");
        expect(fateButtons.length).toBeGreaterThan(0);
      });

      test("Then it should show cosmic energy indicator", () => {
        // Given: Homepage component
        render(<Page />);

        // Then: Should display energy level
        expect(screen.getByText(/Current Cosmic Energy/i)).toBeInTheDocument();
      });

      test("Then it should display hero description", () => {
        // Given: Homepage component
        render(<Page />);

        // Then: Should show description text
        expect(
          screen.getByText(/mystical wisdom meets modern development/i),
        ).toBeInTheDocument();
      });
    });
  });
});
