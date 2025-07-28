import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fate-Driven Development | Code as Foretold',
  description: 'A satirical software methodology that embraces cosmic uncertainty and spiritual rebellion against development dogma.',
  keywords: [
    'fate-driven development',
    'software methodology',
    'satirical',
    'mystical',
    'development process',
    'agile parody',
    'cosmic programming',
  ],
  authors: [{ name: 'The Cosmic Development Circle' }],
  creator: 'Fate-Driven Development Community',
  publisher: 'Sacred Code Collective',
  openGraph: {
    title: 'Fate-Driven Development',
    description: 'Code as foretold by the cosmic forces',
    url: 'https://fatedrivendevelopment.org',
    siteName: 'Fate-Driven Development',
    images: [
      {
        url: '/og-cosmic-banner.png',
        width: 1200,
        height: 630,
        alt: 'Fate-Driven Development - Mystical Software Methodology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fate-Driven Development',
    description: 'Code as foretold by the cosmic forces',
    images: ['/og-cosmic-banner.png'],
    creator: '@fatedrivendev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when we have the actual domains
    // google: 'google-site-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'cosmic-alignment': 'transcendent',
    'mystical-mode': 'active',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Cosmic meta tags */}
        <meta name="cosmic-alignment" content="transcendent" />
        <meta name="mystical-mode" content="active" />
        
        {/* Spiritual theme color */}
        <meta name="theme-color" content="#581c87" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />
        
        {/* Cosmic preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Sacred canonical URL */}
        <link rel="canonical" href="https://fatedrivendevelopment.org" />
      </head>
      <body 
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Cosmic background effects */}
        <div id="cosmic-background" className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-cosmic-gradient" />
          <div className="absolute inset-0 bg-mystical-radial opacity-30" />
        </div>
        
        {/* Main application content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Sacred scripts and mystical enhancements */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Cosmic alignment check
              if (typeof window !== 'undefined') {
                window.cosmicAlignment = 'transcendent';
                window.mysticalMode = 'active';
                
                // Easter egg: Konami code for cosmic effects
                let konamiCode = [];
                const konamiSequence = [38,38,40,40,37,39,37,39,66,65];
                
                document.addEventListener('keydown', function(e) {
                  konamiCode.push(e.keyCode);
                  if (konamiCode.length > konamiSequence.length) {
                    konamiCode.shift();
                  }
                  
                  if (konamiCode.join(',') === konamiSequence.join(',')) {
                    document.body.classList.add('animate-aura-pulse');
                    setTimeout(() => {
                      document.body.classList.remove('animate-aura-pulse');
                    }, 3000);
                    console.log('🌌 Cosmic forces aligned! The mystical energies flow through you!');
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
} 