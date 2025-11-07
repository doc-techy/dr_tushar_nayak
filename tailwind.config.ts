import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          mint: "#d6f7ef",
          aqua: "#c4e9ff",
          teal: "#1e9aa2",
          navy: "#0a2f4d",
          charcoal: "#10141c",
        },
        accent: {
          lime: "#bbf7d0",
          sky: "#bae6fd",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 20px 45px -20px rgba(30, 154, 162, 0.45)",
      },
      animation: {
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "float": "float 12s ease-in-out infinite",
        "shimmer": "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-10px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(200%) skewX(-12deg)" },
        },
      },
      borderRadius: {
        xl: "1.75rem",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(196, 233, 255, 0.55), transparent 55%), radial-gradient(circle at bottom right, rgba(214, 247, 239, 0.55), transparent 60%)",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;

export default config;
