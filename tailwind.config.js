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
        "rujak-asam": "rgba(255, 99, 71, 0.8)",
      },
      animation: {
        "color-change": "colorChange 5s infinite",
      },
      keyframes: {
        colorChange: {
          "0%": { color: "rgba(255, 99, 71, 0.8)" },
          "50%": { color: "rgba(71, 255, 99, 0.8)" },
          "100%": { color: "rgba(99, 71, 255, 0.8)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
