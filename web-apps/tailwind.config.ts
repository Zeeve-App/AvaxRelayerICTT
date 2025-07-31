import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-main": "#1BE866",
        "primary-light": "#8DF3B2",
        "primary-dark": "#2E7D32",
        "text-primary": "#364655",
        "text-secondary": "#334250",
        "background-default": "#FFFFFF",
        "background-paper": "#EAFCEF",
        "border-light": "#A4F4B6",
        "border-dark": "#334250",
      },

      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
