/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#1F2023",
        "card": "#2A282D",
        "dark-green": "#09684D",
        "light-green": "#02875F",
        "danger": "#AB212E",
        "info": "#0C8CE9"
      },
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
        "roboto": ["Roboto", "sans-serif"]
      }
    },
    screens: {
      small: { max: "480px" },
      medium: { min: "480px", max: "800px" }
    }
  },
  plugins: [],
}