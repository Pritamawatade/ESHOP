/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37", // Corrected spelling
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem", // Default padding for all screen sizes
      sm: "3rem" // Padding for small screens and above
    }
  },
  plugins: [],
}