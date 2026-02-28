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
        navy: "#08284F",
        navy2: "#0D3B66",
        sky: "#5087C7",
        gold: "#CBAC58",
        off: "#F6F7F3",
        grayblue: "#8D99AE",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["105px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "section": ["93px", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "large": ["70px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "body-xl": ["35px", { lineHeight: "1.5" }],
        "body-lg": ["30px", { lineHeight: "1.55" }],
        "body-md": ["20px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        "xl2": "58px",
        "card": "24px",
      },
      maxWidth: {
        container: "1706px",
      },
      boxShadow: {
        soft: "0 4px 32px rgba(8, 40, 79, 0.08)",
        card: "0 8px 40px rgba(8, 40, 79, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
