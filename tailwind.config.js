/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{php,html,js}",
    "./dist/**/*.{php,html,js}",
    "./**/*.php",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
