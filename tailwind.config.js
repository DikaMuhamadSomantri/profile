/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Example color
        secondary: "#2d3748", // Example color
      },
    },
  },
  plugins: [],
};
