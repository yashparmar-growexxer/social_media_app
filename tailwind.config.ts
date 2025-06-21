import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      colors: {
        'textGray': '#71767b',
        'textGrayLight': '#e7e9ea',
        'borderGray': '#2f3336',
        'inputGray': '#202327',
        'iconBlue': '#1d9bf0',
        'iconGreen': '#00ba7c',
        'iconPink': '#918880'
      },
    },
  },
  plugins: [],
} satisfies Config;
