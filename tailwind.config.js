// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },

      screens: {
        xs: "375px",
      },

      colors: {
        transparent: "transparent",
        primary: "#02413e",
        secondary: "#d7a745",
        white: "#ffffff",
        black: "#000000",
        yellow: "#d7a745",
        pink: "#Caa98b",
        blue: "#6b796a",
        blush: "#10302a",
        "hero-gradient-from": "rgba(2, 65, 62, 0.95)",
        "hero-gradient-to": "rgb(2, 65, 62, 0.93)",
        "blog-gradient-from": "#8f9098",
        "blog-gradient-to": "#222222",
      },
    },
  },
  plugins: [],
};
