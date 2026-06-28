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
        blaze: "#DCB67A",
        "blaze-dim": "#8A6D3F",
        void: "#000000",
        "void-surface": "#0F0F0F",
        "void-border": "#1F1F1F",
        "void-deep": "#000000",
        "text-primary": "#FFFFFF",
        "text-muted": "#8A8A8A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        label: ["var(--font-space)", "Space Grotesk", "monospace"],
      },
      boxShadow: {
        blaze: "0 0 20px rgba(220, 182, 122, 0.15)",
        "blaze-strong": "0 0 40px rgba(220, 182, 122, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
