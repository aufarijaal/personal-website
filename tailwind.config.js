/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#318470",
        secondary: "#14372F",
        light: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
