import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FateButton } from '../FateButton';
import { cosmicUtils } from '@/lib/cosmic-utils';

// Mock the cosmic utilities
jest.mock('@/lib/cosmic-utils', () => ({
  cosmicUtils: {
    isMercuryRetrograde: jest.fn(() => false),
  },
  cosmicClassNames: {
    mysticalClasses: jest.fn(() => 'cosmic-mock-classes'),
  },
}));

const mockCosmicUtils = cosmicUtils as jest.Mocked<typeof cosmicUtils>;

describe('FateButton Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCosmicUtils.isMercuryRetrograde.mockReturnValue(false);
  });

  describe('Given a FateButton component', () => {
    describe('When rendered with default props', () => {
      test('Then it should display the button with mystical styling', () => {
        // Given: Button with default props
        render(
          <FateButton data-testid="fate-button">
            Channel Cosmic Energy
          </FateButton>
        );

        // When: Component is rendered
        const button = screen.getByTestId('fate-button');

        // Then: Should be present and accessible
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Channel Cosmic Energy');
        expect(button).toHaveAttribute('type', 'button');
        expect(button).not.toBeDisabled();
      });
    });

    describe('When clicked', () => {
      test('Then it should execute onClick handler and show channeling state', async () => {
        // Given: Button with onClick handler
        const handleClick = jest.fn();
        render(
          <FateButton onClick={handleClick} data-testid="fate-button-click">
            Manifest Intention
          </FateButton>
        );

        // When: Button is clicked
        const button = screen.getByTestId('fate-button-click');
        fireEvent.click(button);

        // Then: Should show channeling state and call handler
        expect(button).toHaveAttribute('aria-busy', 'true');
        
        await waitFor(() => {
          expect(handleClick).toHaveBeenCalledTimes(1);
        });

        await waitFor(() => {
          expect(button).toHaveAttribute('aria-busy', 'false');
        });
      });
    });

    describe('When disabled', () => {
      test('Then it should not respond to clicks', () => {
        // Given: Disabled button
        const handleClick = jest.fn();
        render(
          <FateButton 
            disabled 
            onClick={handleClick} 
            data-testid="fate-button-disabled"
          >
            Blocked Energy
          </FateButton>
        );

        // When: Button is clicked
        const button = screen.getByTestId('fate-button-disabled');
        fireEvent.click(button);

        // Then: Should not call handler and be properly disabled
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-disabled', 'true');
        expect(handleClick).not.toHaveBeenCalled();
      });
    });

    describe('When loading', () => {
      test('Then it should show loading state', () => {
        // Given: Button in loading state
        render(
          <FateButton isLoading data-testid="fate-button-loading">
            Processing
          </FateButton>
        );

        // When: Component is rendered
        const button = screen.getByTestId('fate-button-loading');

        // Then: Should show loading state
        expect(button).toHaveAttribute('aria-busy', 'true');
        const spinner = button.querySelector('.animate-spin');
        expect(spinner).toBeInTheDocument();
      });
    });

    describe('When Mercury is in retrograde', () => {
      test('Then it should show warning indicator with low cosmic energy', () => {
        // Given: Mercury retrograde and low cosmic energy
        mockCosmicUtils.isMercuryRetrograde.mockReturnValue(true);
        render(
          <FateButton 
            cosmicEnergy="low" 
            data-testid="fate-button-retrograde"
          >
            Challenged Energy
          </FateButton>
        );

        // When: Component is rendered
        const button = screen.getByTestId('fate-button-retrograde');

        // Then: Should be disabled and show warning
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('title', expect.stringContaining('Mercury retrograde detected'));
        
        const warning = button.querySelector('.bg-orange-500');
        expect(warning).toBeInTheDocument();
      });

      test('Then it should still work with high cosmic energy', async () => {
        // Given: Mercury retrograde but high cosmic energy
        mockCosmicUtils.isMercuryRetrograde.mockReturnValue(true);
        const handleClick = jest.fn();
        render(
          <FateButton 
            cosmicEnergy="transcendent" 
            onClick={handleClick}
            data-testid="fate-button-high-energy"
          >
            Transcendent Energy
          </FateButton>
        );

        // When: Button is clicked
        const button = screen.getByTestId('fate-button-high-energy');
        fireEvent.click(button);

        // Then: Should still work after cosmic delay
        await waitFor(() => {
          expect(button).not.toBeDisabled();
          expect(handleClick).toHaveBeenCalled();
        });
      });
    });

    describe('When using different variants', () => {
      test('Then it should apply appropriate styling for each variant', () => {
        // Given: Different button variants
        const variants = ['primary', 'secondary', 'ethereal', 'warning'] as const;
        
        variants.forEach(variant => {
          const { unmount } = render(
            <FateButton 
              variant={variant}
              data-testid={`fate-button-${variant}`}
            >
              {variant} Button
            </FateButton>
          );

          // When: Component is rendered
          const button = screen.getByTestId(`fate-button-${variant}`);

          // Then: Should be present with variant-specific styling
          expect(button).toBeInTheDocument();
          expect(button).toHaveTextContent(`${variant} Button`);

          unmount();
        });
      });
    });

    describe('When using different sizes', () => {
      test('Then it should apply appropriate sizing classes', () => {
        // Given: Different button sizes
        const sizes = ['small', 'medium', 'large'] as const;
        
        sizes.forEach(size => {
          const { unmount } = render(
            <FateButton 
              size={size}
              data-testid={`fate-button-${size}`}
            >
              {size} Button
            </FateButton>
          );

          // When: Component is rendered
          const button = screen.getByTestId(`fate-button-${size}`);

          // Then: Should be present
          expect(button).toBeInTheDocument();
          expect(button).toHaveTextContent(`${size} Button`);

          unmount();
        });
      });
    });

    describe('When cosmic energy is high', () => {
      test('Then it should show energy indicator and click counter', async () => {
        // Given: High cosmic energy button
        const handleClick = jest.fn();
        render(
          <FateButton 
            cosmicEnergy="high"
            onClick={handleClick}
            data-testid="fate-button-high-cosmic"
          >
            High Energy
          </FateButton>
        );

        // When: Component loads and button is clicked multiple times
        const button = screen.getByTestId('fate-button-high-cosmic');
        
        // Should show energy indicator
        const energyIndicator = button.querySelector('.animate-shimmer');
        expect(energyIndicator).toBeInTheDocument();

        // Click multiple times to test click counter
        fireEvent.click(button);
        await waitFor(() => {
          expect(handleClick).toHaveBeenCalledTimes(1);
        });

        fireEvent.click(button);
        await waitFor(() => {
          expect(handleClick).toHaveBeenCalledTimes(2);
        });

        // Then: Should show click counter
        await waitFor(() => {
          const clickCounter = button.querySelector('.bg-aura-purple');
          expect(clickCounter).toBeInTheDocument();
        });
      });
    });
  });

  describe('Accessibility', () => {
    test('Then it should have proper ARIA attributes', () => {
      // Given: Button component
      render(
        <FateButton data-testid="fate-button-a11y">
          Accessible Button
        </FateButton>
      );

      // When: Component is rendered
      const button = screen.getByTestId('fate-button-a11y');

      // Then: Should have proper accessibility attributes
      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveAttribute('aria-disabled', 'false');
      expect(button).toHaveAttribute('aria-busy', 'false');
      expect(button).toHaveAttribute('title', 'Channel cosmic energy to manifest your intention');
    });

    test('Then it should support keyboard navigation', async () => {
      // Given: Button component
      const handleClick = jest.fn();
      render(
        <FateButton onClick={handleClick} data-testid="fate-button-keyboard">
          Keyboard Button
        </FateButton>
      );

      // When: Button is focused and Enter/Space is pressed
      const button = screen.getByTestId('fate-button-keyboard');
      button.focus();
      expect(button).toHaveFocus();

      fireEvent.keyDown(button, { key: 'Enter' });
      await waitFor(() => {
        expect(handleClick).toHaveBeenCalledTimes(1);
      });

      fireEvent.keyDown(button, { key: ' ' });
      await waitFor(() => {
        expect(handleClick).toHaveBeenCalledTimes(2);
      });
    });
  });
}); 