import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": ["var(--font-roboto-slab)"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
