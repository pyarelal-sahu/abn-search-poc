/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#5aa9e6", 600: "#4a95cc", 700: "#3c7cac" } },
      boxShadow: {
        glow: "0 0 0 3px rgba(90,169,230,0.35), 0 0 0 6px rgba(56,189,248,0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
