'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MysticalComponentProps, FDDRole } from '@/types';
import { cosmicClassNames, roleAssignment, wisdomEngine } from '@/lib/cosmic-utils';

interface RoleCardProps extends MysticalComponentProps {
  role: FDDRole;
  isActive?: boolean;
  onClick?: (role: FDDRole) => void;
  showWisdom?: boolean;
  'data-testid'?: string;
}

/**
 * RoleCard - A mystical card component that displays FDD roles
 * with cosmic energy and spiritual wisdom. Each role contains
 * sacred responsibilities and mystical guidance.
 */
export const RoleCard: React.FC<RoleCardProps> = ({
  role,
  isActive = false,
  onClick,
  showWisdom = true,
  cosmicEnergy = 50,
  auraColor = 'purple',
  'data-testid': testId,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentWisdom, setCurrentWisdom] = useState<string>('');
  const router = useRouter();

  // Generate role-specific wisdom
  React.useEffect(() => {
    if (showWisdom) {
      const wisdom = wisdomEngine.contextualWisdom(`role-${role.name.toLowerCase()}`);
      setCurrentWisdom(wisdom.text);
    }
  }, [role.name, showWisdom]);

  const handleClick = () => {
    if (onClick) {
      onClick(role);
    }
    // Navigate to role detail page
    router.push(`/roles/${role.id}`);
  };

  // Convert numeric energy to CosmicEnergyLevel type
  const energyLevel = typeof cosmicEnergy === 'number' ? cosmicEnergy : 50;
  const cosmicEnergyType = 
    energyLevel >= 80 ? 'transcendent' :
    energyLevel >= 60 ? 'high' :
    energyLevel >= 30 ? 'medium' : 'low';

  // Generate cosmic styling
  const cosmicClasses = cosmicClassNames.mysticalClasses(cosmicEnergyType, auraColor);

  // Base card styling
  const baseClasses = `
    relative group cursor-pointer rounded-xl p-6 
    backdrop-blur-sm border transition-all duration-500
    hover:scale-105 transform-gpu
  `;

  // Active and hover states
  const stateClasses = isActive ? 
    `border-aura-${auraColor} bg-aura-${auraColor}/10 shadow-2xl shadow-aura-${auraColor}/25` :
    isHovered ?
      `border-cosmic-silver/50 bg-cosmic-silver/5 shadow-lg shadow-cosmic-purple/20` :
      `border-cosmic-silver/20 bg-cosmic-silver/5 hover:border-cosmic-purple/40`;

  const cardClasses = `${baseClasses} ${stateClasses} ${cosmicClasses}`.replace(/\s+/g, ' ').trim();

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={testId}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      {...props}
    >
      {/* Cosmic energy glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Role header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Role icon */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-aura-${role.aura}/20 to-aura-${role.aura}/40 border border-aura-${role.aura}/30`}>
              <span className="text-2xl" role="img" aria-label={`${role.name} role icon`}>
                🔮
              </span>
            </div>

            {/* Role name and level */}
            <div>
              <h3 className="text-lg font-semibold text-cosmic-silver group-hover:text-white transition-colors">
                {role.name}
              </h3>
              <p className="text-sm text-cosmic-silver/70">
                Cosmic Level: {role.cosmicLevel}
              </p>
            </div>
          </div>

          {/* Energy indicator */}
          <div className={`px-2 py-1 rounded-full text-xs font-medium bg-${cosmicEnergyType === 'transcendent' ? 'cosmic-gold' : cosmicEnergyType === 'high' ? 'aura-blue' : cosmicEnergyType === 'medium' ? 'aura-purple' : 'cosmic-silver'}/20 text-${cosmicEnergyType === 'transcendent' ? 'cosmic-gold' : cosmicEnergyType === 'high' ? 'aura-blue' : cosmicEnergyType === 'medium' ? 'aura-purple' : 'cosmic-silver'}`}>
            {cosmicEnergyType}
          </div>
        </div>

        {/* Role description */}
        <p className="text-cosmic-silver/90 mb-4 leading-relaxed">
          {role.description}
        </p>

        {/* Responsibilities */}
        {role.responsibilities && role.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-cosmic-silver/80 mb-2">
              Sacred Responsibilities:
            </h4>
            <ul className="space-y-1">
              {role.responsibilities.slice(0, 3).map((responsibility, index) => (
                <li key={index} className="flex items-center text-sm text-cosmic-silver/70">
                  <span className="w-1.5 h-1.5 bg-aura-purple rounded-full mr-2 flex-shrink-0" />
                  {responsibility}
                </li>
              ))}
              {role.responsibilities.length > 3 && (
                <li className="text-xs text-cosmic-silver/50 italic">
                  +{role.responsibilities.length - 3} more sacred duties...
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Mystical wisdom */}
        {showWisdom && currentWisdom && (
          <div className="border-t border-cosmic-silver/20 pt-4">
            <blockquote className="text-sm italic text-cosmic-silver/80 leading-relaxed">
              &ldquo;{currentWisdom}&rdquo;
            </blockquote>
            <cite className="text-xs text-cosmic-silver/50 mt-1 block">
              — Cosmic Wisdom for {role.name}
            </cite>
          </div>
        )}

        {/* Active state indicator */}
        {isActive && (
          <div className="absolute top-3 right-3">
            <div className={`w-3 h-3 bg-aura-${auraColor} rounded-full animate-pulse`} 
                 title="Currently active role" />
          </div>
        )}

        {/* Hover interaction hint */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-cosmic-silver/50">
            Click to embody this role
          </span>
        </div>
      </div>

      {/* Cosmic background pattern */}
      <div className="absolute inset-0 rounded-xl opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-aura-blue rounded-full animate-pulse" />
        <div className="absolute bottom-6 right-8 w-1 h-1 bg-aura-purple rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-cosmic-gold rounded-full animate-pulse delay-500" />
      </div>
    </div>
  );
};

export default RoleCard; 