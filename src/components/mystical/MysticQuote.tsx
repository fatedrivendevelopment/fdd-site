'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { MysticalComponentProps, MysticalWisdom } from '@/types';
import { wisdomEngine, cosmicClassNames } from '@/lib/cosmic-utils';

interface MysticQuoteProps extends MysticalComponentProps {
  wisdom?: string; // Optional override for testing or specific quotes
  context?: string; // Context for generating contextual wisdom
  showRefresh?: boolean; // Show refresh button
  autoRefresh?: boolean; // Auto refresh wisdom periodically
  refreshInterval?: number; // Refresh interval in ms (default: 30000)
}

export const MysticQuote: React.FC<MysticQuoteProps> = ({
  cosmicEnergy = 'medium',
  auraColor = 'purple',
  className = '',
  wisdom: providedWisdom,
  context,
  showRefresh = true,
  autoRefresh = false,
  refreshInterval = 30000,
}) => {
  const [currentWisdom, setCurrentWisdom] = useState<MysticalWisdom | null>(null);
  const [isChanneling, setIsChanneling] = useState(false);

  // Channel new wisdom
  const channelWisdom = useCallback(async () => {
    setIsChanneling(true);
    
    // Simulate cosmic delay for mystical effect
    await new Promise(resolve => setTimeout(resolve, 800));
    
    let newWisdom: MysticalWisdom;
    
    if (providedWisdom) {
      // Use provided wisdom (for testing or specific contexts)
      newWisdom = {
        text: providedWisdom,
        source: 'cosmic',
        energy: cosmicEnergy,
      };
    } else if (context) {
      // Generate contextual wisdom
      newWisdom = wisdomEngine.contextualWisdom(context);
    } else {
      // Generate random wisdom
      newWisdom = wisdomEngine.channelWisdom(cosmicEnergy);
    }
    
    setCurrentWisdom(newWisdom);
    setIsChanneling(false);
  }, [providedWisdom, context, cosmicEnergy]);

  // Initialize with wisdom on mount
  useEffect(() => {
    channelWisdom();
  }, [channelWisdom, providedWisdom, context, cosmicEnergy]);

  // Auto refresh wisdom if enabled
  useEffect(() => {
    if (autoRefresh && !providedWisdom) {
      const interval = setInterval(channelWisdom, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval, providedWisdom, channelWisdom]);

  const handleRefresh = () => {
    if (!isChanneling) {
      channelWisdom();
    }
  };

  return (
    <div 
      className={`
        relative p-6 rounded-lg border backdrop-blur-sm transition-all duration-500
        ${cosmicClassNames.mysticalClasses(cosmicEnergy, auraColor)}
        ${className}
      `}
      data-testid="mystical-wisdom"
      data-cosmic-energy={cosmicEnergy}
      data-aura-color={auraColor}
      role="region"
      aria-label="Mystical Wisdom"
    >
      {/* Background cosmic effects */}
      <div className="absolute inset-0 bg-cosmic-dark/20 rounded-lg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-lg pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with cosmic icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div 
              className={`text-2xl transition-transform duration-300 ${
                isChanneling ? 'animate-spin' : 'animate-cosmic-float'
              }`}
              role="img"
              aria-label="Crystal ball channeling wisdom"
            >
              🔮
            </div>
            <div className="text-sm text-cosmic-silver/80 font-medium">
              {isChanneling ? 'Channeling Wisdom...' : 'Cosmic Wisdom'}
            </div>
          </div>
          
          {showRefresh && (
            <button
              type="button"
              onClick={handleRefresh}
              disabled={isChanneling}
              className={`
                p-2 rounded-lg transition-all duration-300
                ${isChanneling 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-white/10 hover:scale-110'
                }
              `}
              title={isChanneling ? 'Channeling in progress...' : 'Channel new wisdom'}
              aria-label={isChanneling ? 'Channeling in progress' : 'Refresh mystical wisdom'}
            >
              <div 
                className={`text-lg transition-transform duration-300 ${
                  isChanneling ? 'animate-spin' : ''
                }`}
              >
                ✨
              </div>
            </button>
          )}
        </div>

        {/* Wisdom content */}
        <div className="space-y-4">
          {isChanneling ? (
            <div className="animate-pulse">
              <div className="h-4 bg-white/20 rounded mb-2"></div>
              <div className="h-4 bg-white/15 rounded w-3/4"></div>
            </div>
          ) : currentWisdom ? (
            <>
              {/* Main wisdom text */}
              <blockquote 
                className="text-lg md:text-xl text-white/95 leading-relaxed italic font-medium"
                cite="Cosmic Wisdom Repository"
              >
                &ldquo;{currentWisdom.text}&rdquo;
              </blockquote>
              
              {/* Wisdom source and energy */}
              <div className="flex items-center justify-between text-xs text-cosmic-silver/60">
                <div className="flex items-center space-x-2">
                  <span>Source: {currentWisdom.source}</span>
                  <span>•</span>
                  <span>Energy: {currentWisdom.energy}</span>
                </div>
                
                {context && (
                  <div className="text-cosmic-gold/70">
                    Context: {context}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-cosmic-silver/60 italic">
              The cosmos is silent. Try refreshing to channel wisdom.
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 right-2 text-xs text-white/20 pointer-events-none">
          ☾ ☽
        </div>
        <div className="absolute bottom-2 left-2 text-xs text-white/20 pointer-events-none">
          ✧ ✦ ✧
        </div>
      </div>
    </div>
  );
}; 