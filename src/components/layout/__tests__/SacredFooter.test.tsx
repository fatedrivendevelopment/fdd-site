import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SacredFooter } from '../SacredFooter';

describe('SacredFooter Component', () => {
  describe('Given a SacredFooter component', () => {
    describe('When rendered with default props', () => {
      test('Then it should display footer with proper structure', () => {
        // Given: Component with default props
        render(<SacredFooter />);

        // Then: Should have footer with proper role
        const footer = screen.getByTestId('sacred-footer');
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveAttribute('role', 'contentinfo');
      });

      test('Then it should display mystical branding', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should show branding elements
        expect(screen.getByText('Fate-Driven Development')).toBeInTheDocument();
        expect(screen.getByText('Code as foretold')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /crystal ball/i })).toBeInTheDocument();
      });

      test('Then it should display description text', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should show description
        expect(screen.getByText(/satirical software methodology/i)).toBeInTheDocument();
        expect(screen.getByText(/cosmic uncertainty/i)).toBeInTheDocument();
      });

      test('Then it should display current year', () => {
        // Given: Current year
        const currentYear = new Date().getFullYear();
        render(<SacredFooter />);

        // Then: Should show current year in copyright
        expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
      });
    });

    describe('When rendered with cosmic energy', () => {
      test('Then it should accept cosmicEnergy prop', () => {
        // Given: Component with high cosmic energy
        render(<SacredFooter cosmicEnergy="high" />);

        // Then: Should render without errors
        expect(screen.getByTestId('sacred-footer')).toBeInTheDocument();
      });

      test('Then it should accept custom className', () => {
        // Given: Component with custom class
        render(<SacredFooter className="custom-footer-class" />);

        // Then: Should have custom class
        const footer = screen.getByTestId('sacred-footer');
        expect(footer).toHaveClass('custom-footer-class');
      });
    });

    describe('When displaying navigation links', () => {
      test('Then it should show cosmic links section', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should have cosmic links header
        expect(screen.getByText('Cosmic Community')).toBeInTheDocument();
      });

      test('Then it should show sacred resources section', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should have sacred resources header
        expect(screen.getByText('Sacred Paths')).toBeInTheDocument();
      });

      test('Then it should contain external links with proper attributes', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should have external links
        const githubLink = screen.getByRole('link', { name: /github/i });
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/fatedrivendevelopment');
        expect(githubLink).toHaveAttribute('target', '_blank');
        expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
      });

      test('Then it should contain internal navigation links', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should have internal links
        expect(screen.getByRole('link', { name: /sacred principles/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /cosmic q&a/i })).toBeInTheDocument();
      });
    });

    describe('When displaying footer content', () => {
      test('Then it should show copyright notice', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should show copyright
        expect(screen.getByText(/©/)).toBeInTheDocument();
        expect(screen.getAllByText(/Fate-Driven Development/).length).toBeGreaterThan(0);
      });

      test('Then it should show mystical disclaimer', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should show disclaimer
        expect(screen.getByText(/This page was rendered under the influence of Mercury retrograde/i)).toBeInTheDocument();
        expect(screen.getByText(/No actual mystical forces were harmed/i)).toBeInTheDocument();
      });

      test('Then it should have proper responsive grid layout', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should have grid container
        const gridContainer = screen.getByTestId('sacred-footer').querySelector('.grid');
        expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-3');
      });
    });

    describe('Accessibility', () => {
      test('Then it should have proper ARIA labels', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Should have proper accessibility
        expect(screen.getByRole('img', { name: /crystal ball/i })).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
      });

      test('Then it should have semantic footer structure', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: Footer should be properly structured
        const footer = screen.getByRole('contentinfo');
        expect(footer.tagName.toLowerCase()).toBe('footer');
      });

      test('Then external links should have security attributes', () => {
        // Given: Component rendered
        render(<SacredFooter />);

        // Then: External links should be secure
        const externalLinks = screen.getAllByRole('link').filter(link => 
          link.getAttribute('href')?.startsWith('http')
        );
        
        externalLinks.forEach(link => {
          expect(link).toHaveAttribute('target', '_blank');
          expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
      });
    });

    describe('Edge Cases', () => {
      test('Then it should handle missing cosmicEnergy prop gracefully', () => {
        // Given: Component without cosmicEnergy
        const { container } = render(<SacredFooter />);

        // Then: Should render without errors
        expect(container.firstChild).toBeInTheDocument();
      });

      test('Then it should handle empty className prop', () => {
        // Given: Component with empty className
        render(<SacredFooter className="" />);

        // Then: Should render without errors
        expect(screen.getByTestId('sacred-footer')).toBeInTheDocument();
      });
    });
  });
}); 