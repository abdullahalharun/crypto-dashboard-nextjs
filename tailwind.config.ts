import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#F2F8FF",
        dark: "#12131A",
        blue: "#2F80ED",
        primary: "#0060FF",
      },
    },
  },
  plugins: [],
};
export default config;
