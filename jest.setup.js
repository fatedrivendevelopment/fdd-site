import "@testing-library/jest-dom";

// Mystical test environment setup
beforeEach(() => {
  // Clear any cosmic energy between tests
  jest.clearAllMocks();

  // Align chakras for consistent test environment
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Mock cosmic APIs for testing
  global.fetch = jest.fn();

  // Spiritual console for mystical error tracking
  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is no longer supported")
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

// Cosmic test utilities
global.mysticalTestHelpers = {
  // Generate mystical test data
  generateCosmicProps: (energy = "medium") => ({
    cosmicEnergy: energy,
    auraColor: "purple",
    spiritualAlignment: true,
  }),

  // Mock tarot responses
  mockTarotReading: {
    card: "The Developer",
    meaning: "Channel cosmic wisdom through code",
    guidance: "Trust in the mystical process",
  },

  // Common mystical wisdom for testing
  sacredWisdom: [
    "Code must be felt before it is written",
    "Features are prioritized by Tarot",
    "If code has a soul, ignore the syntax error",
  ],
};

// Aftereach cleanup for cosmic harmony
afterEach(() => {
  // Clear any lingering spiritual energy
  jest.restoreAllMocks();
});
