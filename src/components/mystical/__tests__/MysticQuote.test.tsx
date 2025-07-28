import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MysticQuote } from '../MysticQuote';
import { wisdomEngine } from '@/lib/cosmic-utils';

// Mock the cosmic utilities
jest.mock('@/lib/cosmic-utils', () => ({
  wisdomEngine: {
    channelWisdom: jest.fn(),
    contextualWisdom: jest.fn(),
  },
  cosmicClassNames: {
    mysticalClasses: jest.fn(() => 'cosmic-mock-classes'),
  },
}));

const mockWisdomEngine = wisdomEngine as jest.Mocked<typeof wisdomEngine>;

describe('MysticQuote Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockWisdomEngine.channelWisdom.mockReturnValue({
      text: 'The cosmic forces align in mysterious ways',
      source: 'cosmic',
      energy: 'high',
    });
    mockWisdomEngine.contextualWisdom.mockReturnValue({
      text: 'Context-specific mystical wisdom flows through the universe',
      source: 'cosmic',
      energy: 'medium',
    });
  });

  describe('Given a MysticQuote component', () => {
    describe('When rendered with default props', () => {
      test('Then it should display mystical wisdom and refresh functionality', async () => {
        // Given: Component with default props
        render(<MysticQuote cosmicEnergy="high" />);

        // When: Component loads
        await waitFor(() => {
          expect(screen.getByTestId('mystical-wisdom')).toBeInTheDocument();
        });

        // Then: Should show channeling initially, then wisdom
        expect(screen.getByText(/channeling wisdom/i)).toBeInTheDocument();
        
        await waitFor(() => {
          expect(screen.getByText(/The cosmic forces align in mysterious ways/)).toBeInTheDocument();
        });
        
        expect(mockWisdomEngine.channelWisdom).toHaveBeenCalledWith('high');
      });
    });

    describe('When provided with specific wisdom', () => {
      test('Then it should display the provided wisdom', async () => {
        // Given: Component with provided wisdom
        const providedWisdom = 'Test wisdom from the cosmic realm';
        render(
          <MysticQuote 
            wisdom={providedWisdom}
          />
        );

        // When: Component loads
        await waitFor(() => {
          expect(screen.getByTestId('mystical-wisdom')).toBeInTheDocument();
        });

        // Then: Should display the provided wisdom
        await waitFor(() => {
          expect(screen.getByText(new RegExp(providedWisdom))).toBeInTheDocument();
        });
      });
    });

    describe('When provided with context', () => {
      test('Then it should generate contextual wisdom', async () => {
        // Given: Component with context
        const context = 'testing-context';
        render(
          <MysticQuote 
            context={context}
          />
        );

        // When: Component loads
        await waitFor(() => {
          expect(screen.getByTestId('mystical-wisdom')).toBeInTheDocument();
        });

        // Then: Should call contextual wisdom with context
        await waitFor(() => {
          expect(mockWisdomEngine.contextualWisdom).toHaveBeenCalledWith(context);
        });

        expect(screen.getByText(/Context-specific mystical wisdom flows through the universe/)).toBeInTheDocument();
      });
    });

    describe('When refresh button is clicked', () => {
      test('Then it should channel new wisdom', async () => {
        // Given: Component with refresh button visible
        render(
          <MysticQuote 
            showRefresh={true}
            data-testid="mystic-quote-refresh"
          />
        );

        // When: Initial load completes
        await waitFor(() => {
          expect(screen.getByText(/The cosmic forces align in mysterious ways/)).toBeInTheDocument();
        });

        // Clear the mock to track new calls
        mockWisdomEngine.channelWisdom.mockClear();
        mockWisdomEngine.channelWisdom.mockReturnValue({
          text: 'New cosmic wisdom emerges from the void',
          source: 'cosmic',
          energy: 'transcendent',
        });

        // When: Refresh button is clicked
        const refreshButton = screen.getByLabelText(/refresh mystical wisdom/i);
        fireEvent.click(refreshButton);

        // Then: Should channel new wisdom
        await waitFor(() => {
          expect(mockWisdomEngine.channelWisdom).toHaveBeenCalled();
        });

        await waitFor(() => {
          expect(screen.getByText(/New cosmic wisdom emerges from the void/)).toBeInTheDocument();
        });
      });
    });

    describe('When auto-refresh is enabled', () => {
      test('Then it should automatically refresh wisdom', async () => {
        // Given: Component with auto-refresh enabled and short interval
        render(
          <MysticQuote 
            autoRefresh={true}
            refreshInterval={100}
            data-testid="mystic-quote-auto"
          />
        );

        // When: Component loads and time passes
        await waitFor(() => {
          expect(screen.getByText(/The cosmic forces align in mysterious ways/)).toBeInTheDocument();
        });

        // Clear the mock to track auto-refresh calls
        mockWisdomEngine.channelWisdom.mockClear();

        // Then: Should automatically refresh after interval
        await waitFor(() => {
          expect(mockWisdomEngine.channelWisdom).toHaveBeenCalled();
        }, { timeout: 1000 });
      });
    });
  });

  describe('Accessibility', () => {
    test('Then it should have proper ARIA attributes', async () => {
      // Given: Component rendered
      render(<MysticQuote />);

      // When: Component loads
      await waitFor(() => {
        expect(screen.getByTestId('mystical-wisdom')).toBeInTheDocument();
      });

      // Wait for loading to complete
      await waitFor(() => {
        expect(screen.getByText(/The cosmic forces align in mysterious ways/)).toBeInTheDocument();
      });

      // Then: Should have proper accessibility attributes
      const quote = screen.getByText(/The cosmic forces align in mysterious ways/).closest('blockquote');
      expect(quote).toBeInTheDocument();
      expect(quote).toHaveAttribute('cite', 'Cosmic Wisdom Repository');

      if (screen.queryByLabelText(/refresh mystical wisdom/i)) {
        const refreshButton = screen.getByLabelText(/refresh mystical wisdom/i);
        expect(refreshButton).toHaveAttribute('type', 'button');
      }
    });
  });
}); 