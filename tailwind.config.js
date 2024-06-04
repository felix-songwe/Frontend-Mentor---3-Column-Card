/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "480px",
      md: "810px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Shoulders: ["Big Shoulders Display", "sans-serif"],
        Lexend: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        orange: "#e28525",
        green: "#016972",
        darkGreen: "#00403f",
      },
    },
  },
  plugins: [],
};
