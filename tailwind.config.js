/* eslint-disable import/no-anonymous-default-export */

/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blue: "#30FFFF",
        black: colors.black,
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
