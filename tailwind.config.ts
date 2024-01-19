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
        light_gray: "#eaeaea",
        medium_gray: "#7c7a7a",
        dark_gray: "#454343",
        muala: "#ec8311",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
