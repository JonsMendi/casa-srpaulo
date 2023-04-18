/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#0B3B2D",
        tertiary: "#94AB8A",
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Lato', 'sans-serif'],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}

