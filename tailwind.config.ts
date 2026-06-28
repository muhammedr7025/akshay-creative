import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blaze: "#FF001E", // Crows Red
        gold: "#FFAA00",  // Crows Gold
        void: "#0F1432",  // Crows Navy
        "void-surface": "#161D45",
        "void-border": "#212A60",
        "void-deep": "#080B1C",
        "text-primary": "#F5F0F0",
        "text-muted": "#8A94C2",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        label: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        blaze: "0 0 20px rgba(255, 0, 30, 0.15)",
        "blaze-strong": "0 0 40px rgba(255, 0, 30, 0.25)",
      },
      keyframes: {
        'marquee-slow': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-slow-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'marquee-slow': 'marquee-slow 50s linear infinite',
        'marquee-slow-reverse': 'marquee-slow-reverse 50s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
