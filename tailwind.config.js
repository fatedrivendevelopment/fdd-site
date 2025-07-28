/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#1e1b4b',     // Deep space blue
          purple: '#581c87',   // Mystical purple
          gold: '#f59e0b',     // Sacred gold
          silver: '#e5e7eb',   // Lunar silver
          void: '#0f0f23',     // Deep void
        },
        aura: {
          red: '#dc2626',      // Fire chakra
          orange: '#ea580c',   // Sacral chakra
          yellow: '#ca8a04',   // Solar chakra
          green: '#16a34a',    // Heart chakra
          blue: '#2563eb',     // Throat chakra
          indigo: '#4f46e5',   // Third eye chakra
          violet: '#7c3aed',   // Crown chakra
        },
        mystical: {
          glow: 'rgba(139, 69, 19, 0.6)',
          shimmer: 'rgba(255, 255, 255, 0.1)',
        }
      },
      animation: {
        'aura-pulse': 'aura-pulse 3s ease-in-out infinite',
        'cosmic-float': 'cosmic-float 6s ease-in-out infinite',
        'mystical-glow': 'mystical-glow 2s ease-in-out infinite alternate',
        'spiritual-fade': 'spiritual-fade 1s ease-in-out',
        'sacred-slide': 'sacred-slide 0.5s ease-out',
      },
      keyframes: {
        'aura-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 69, 19, 0.6)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(139, 69, 19, 0.9)',
            transform: 'scale(1.02)',
          },
        },
        'cosmic-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'mystical-glow': {
          '0%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        },
        'spiritual-fade': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'sacred-slide': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      fontFamily: {
        mystical: ['Inter', 'system-ui', 'sans-serif'],
        sacred: ['Georgia', 'serif'],
      },
      spacing: {
        'cosmic': '4.5rem',
        'mystical': '3.5rem',
        'sacred': '2.5rem',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(45deg, #1e1b4b, #581c87, #7c2d12)',
        'mystical-radial': 'radial-gradient(circle, rgba(88,28,135,0.3) 0%, rgba(30,27,75,0.8) 100%)',
        'aura-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
    },
  },
  plugins: [
    // Custom plugin for mystical utilities
    function({ addUtilities }) {
      const mysticalUtilities = {
        '.mystical-glow': {
          boxShadow: '0 0 20px rgba(139, 69, 19, 0.6)',
          animation: 'aura-pulse 3s ease-in-out infinite',
        },
        '.cosmic-text': {
          background: 'linear-gradient(45deg, #f59e0b, #7c3aed, #2563eb)',
          backgroundClip: 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.sacred-border': {
          border: '2px solid',
          borderImage: 'linear-gradient(45deg, #f59e0b, #7c3aed) 1',
        },
      };
      addUtilities(mysticalUtilities);
    },
  ],
}; 