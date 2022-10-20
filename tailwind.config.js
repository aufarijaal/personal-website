/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo["500"],
        secondary: colors.indigo["900"],
        light: colors.white,
        dark: colors.zinc["900"],
      },
    },
  },
  plugins: [],
};
