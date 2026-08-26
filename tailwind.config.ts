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
        primary: "#DE0B1C",
        accent: "#B20916",
        surface: "#FFFFFF",
        elevated: "#F2E2D5",
        customText: "#333333",
        muted: "#69727D",
      },
      borderRadius: {
        pill: "60px",
        chip: "10px",
        card: "12px",
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "48": "48px",
        "52": "52px",
      },
      fontSize: {
        body: ["20px", { lineHeight: "1.5", fontWeight: "400" }],
        huge: ["200px", { lineHeight: "1" }],
        subheading: ["73px", { lineHeight: "1" }],
        small: ["16px", { lineHeight: "1.2" }],
      },
      transitionDuration: {
        normal: "350ms",
        fast: "300ms",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.7, 0, 1, 1)",
      },
    },
  },
  plugins: [],
};
export default config;