/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors:{
    primary:"#f42c37",
    secondory:"#f42c37",
    brandYellow:"#fdc62e",
    brandGreen:"#2dcc6f",
    brandBlue:"#1376f4",
    brandWhite:"#eeeeee",
  },  
  container:{
    center:true,
    padding:{
      DEFAULT:"1rem", // Default padding for all screen sizes
      sm:"3rem" // Padding for small screens and above
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}