import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
        light_muala: "#f5c188",
        grayish_pink: "#d1c9c9",
      },
      fontFamily: {
        abhaya_libre: ["Abhaya Libre"],
        barlow: ["Barlow"],
        yeseva_one: ["Yeseva One"],
        playfair_display: ["Playfair Display"],
        playfair_display_sc: ["Playfair Display SC"],
        montserrat: ["Montserrat"],
        piazzolla: ["Piazzolla"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
