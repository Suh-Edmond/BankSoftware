/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    positions: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      blue: colors.blue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      green: colors.green,
      indigo:colors.indigo,
      white: colors.white,
      yellow: colors.yellow
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
