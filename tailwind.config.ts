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
        blaze: "#FF002F",
        "blaze-dim": "#8B0018",
        void: "#100101",
        "void-surface": "#1A0101",
        "void-border": "#2D0404",
        "void-deep": "#0A0000",
        "text-primary": "#F5F0F0",
        "text-muted": "#7A5555",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        label: ["var(--font-space)", "Space Grotesk", "monospace"],
      },
      boxShadow: {
        blaze: "0 0 20px rgba(255, 0, 47, 0.15)",
        "blaze-strong": "0 0 40px rgba(255, 0, 47, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
