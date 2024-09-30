/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f43f5e",
        secondary: "#64748b",
        dark: "#0f172a",
      },
    },
  },
  plugins: [require("daisyui")],
};
