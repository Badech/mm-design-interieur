import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a1a",
          dark: "#0a0a0a",
          light: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#d4af37",
          gold: "#d4af37",
          orange: "#d97706",
          light: "#f4d03f",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          gray: "#808080",
          light: "#fafafa",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "mobile-menu-ltr": "mobileMenuLtr 0.3s ease-out forwards",
        "mobile-menu-exit-ltr": "mobileMenuExitLtr 0.3s ease-in forwards",
        "mobile-menu-rtl": "mobileMenuRtl 0.3s ease-out forwards",
        "mobile-menu-exit-rtl": "mobileMenuExitRtl 0.3s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        mobileMenuLtr: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        mobileMenuExitLtr: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        mobileMenuRtl: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        mobileMenuExitRtl: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
