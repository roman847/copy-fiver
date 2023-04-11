/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

const constants = {
  red: "#F23C3D",
  green: "#2bfcbe",
  "dark-green": "#065940",
  "light-green": "#e6fcfa",
  black: "#222222",
  "light-gray": "#E8E7E3",
  white: "#ffffff",
  "dark-blue": "#050875",
  blue: "#6c70f0",
  "light-blue": "#0385ff",
  "dark-blue": "#14047d",
  gray: "#a3a2a2",
  "ultra-light-gray": "#faf7f7",
  maroon: "#612828",
  yellow: "#fcd303",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants,
    },
    fontFamily: {
      inter: ["Inter"],
      lobster: ["Lobster"],
    },
    extends: {},
  },
  plugins: [],
};
