'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MysticalComponentProps, MysticalNavItem } from '@/types';
import { cosmicClassNames } from '@/lib/cosmic-utils';

const mysticalNavItems: MysticalNavItem[] = [
  {
    path: '/',
    label: 'Portal',
    description: 'Enter the mystical realm',
    cosmicEnergy: 'high',
    icon: '🌌',
  },
  {
    path: '/manifesto',
    label: 'Manifesto',
    description: 'Sacred principles and cosmic oath',
    cosmicEnergy: 'transcendent',
    icon: '📜',
  },
  {
    path: '/roles-and-rituals',
    label: 'Roles & Rituals', 
    description: 'Team structure and ceremonies',
    cosmicEnergy: 'high',
    icon: '🔮',
  },
  {
    path: '/process-and-docs',
    label: 'Process & Docs',
    description: 'Sacred lifecycle and artifacts',
    cosmicEnergy: 'medium',
    icon: '⚙️',
  },
  {
    path: '/comparisons',
    label: 'Comparisons',
    description: 'FDD vs earthly methodologies',
    cosmicEnergy: 'medium',
    icon: '📊',
  },
  {
    path: '/faq',
    label: 'FAQ',
    description: 'Mystical questions and cosmic answers',
    cosmicEnergy: 'medium',
    icon: '❓',
  },
  {
    path: '/community',
    label: 'Community',
    description: 'Join the spiritual movement',
    cosmicEnergy: 'high',
    icon: '🌐',
  },
  {
    path: '/contribute',
    label: 'Contribute',
    description: 'Sacred open source participation',
    cosmicEnergy: 'high',
    icon: '🧩',
  },
];

export const MysticalNavigation: React.FC<MysticalComponentProps> = ({
  cosmicEnergy = 'medium',
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path: string) => {
    if (!currentPath) return false; // Handle undefined/null pathname
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <nav 
      className={`relative ${className}`}
      data-testid="mystical-navigation"
      role="navigation"
      aria-label="Mystical Site Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mystical logo/brand */}
          <Link 
            href="/"
            className="flex items-center space-x-3 group"
            aria-label="Fate-Driven Development - Return to Portal"
          >
            <div className="text-2xl group-hover:animate-cosmic-float transition-transform">
              🔮
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold cosmic-text">
                FDD
              </div>
              <div className="text-xs text-cosmic-silver/80">
                Fate-Driven Development
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mysticalNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  hover:bg-cosmic-purple/20 hover:scale-105
                  ${isActivePath(item.path) 
                    ? 'bg-cosmic-purple/30 mystical-glow text-cosmic-gold' 
                    : 'text-cosmic-silver/90 hover:text-white'
                  }
                  ${cosmicClassNames.energyClasses(item.cosmicEnergy)}
                `}
                title={item.description}
                aria-current={isActivePath(item.path) ? 'page' : undefined}
              >
                <span className="mr-1" aria-hidden="true">{item.icon}</span>
                {item.label}
                
                {/* Active indicator */}
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-cosmic-gold animate-aura-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg bg-cosmic-purple/20 hover:bg-cosmic-purple/30 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mystical navigation menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block h-0.5 w-6 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile navigation menu */}
        <div 
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 pb-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="grid grid-cols-1 gap-2 pt-4 border-t border-cosmic-purple/30">
            {mysticalNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  hover:bg-cosmic-purple/20 hover:translate-x-2
                  ${isActivePath(item.path) 
                    ? 'bg-cosmic-purple/30 mystical-glow text-cosmic-gold' 
                    : 'text-cosmic-silver/90 hover:text-white'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
                title={item.description}
                aria-current={isActivePath(item.path) ? 'page' : undefined}
              >
                <span className="mr-3 text-lg" aria-hidden="true">{item.icon}</span>
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-cosmic-silver/60">{item.description}</div>
                </div>
                
                {isActivePath(item.path) && (
                  <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-aura-pulse" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}; 