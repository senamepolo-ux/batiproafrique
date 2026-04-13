import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          DEFAULT: "#A47764",
          light: "#C4A494",
          cream: "#F5EDE8",
          dark: "#6B4D3E",
          deep: "#3D2B22",
        },
        terracotta: "#C4663A",
        "sand-gold": "#D4A96A",
        "cement-gray": "#8A8A8A",
        "concrete-light": "#E8E0D8",
        "earth-green": "#4A6741",
        "white-cream": "#FFFDF9",
      },
      fontFamily: {
        logo: ["Cormorant Garamond", "serif"],
        heading: ["DM Serif Display", "serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "bounce-slow": "bounceSlow 2s infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
