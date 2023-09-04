/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryPurple: "#5959CB",
        tertiaryGreen: "#0DBF6A",
        secondaryYellow: "#FFB800",
      },
      fontFamily: {
        harabara: ["Harabara"],
        Lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
