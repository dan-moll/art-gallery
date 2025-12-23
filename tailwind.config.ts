import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Helvetica Neue", "system-ui", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        "soft-black": "#1a1a1a",
        "medium-gray": "#666666",
        "light-gray": "#999999",
        "pale-gray": "#f5f5f5",
      },
      spacing: {
        "artwork-gap": "120px",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
