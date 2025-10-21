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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "spy-red": {
          DEFAULT: "#8D0000",
          dark: "#6B0000",
        },
        "spy-gray": {
          light: "#6B6B6B",
          DEFAULT: "#3A3A3A",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Oswald", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
