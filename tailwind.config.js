/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1F2023",
        card: "#2A282D",
        gray: "#7C7C8A",
        red: "#AB212E",
        green: "#00875F",
        "light-green": "#09684D",
      },
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
        "roboto": ["Roboto", "sans-serif"]
      }
    },
    screens: {
      small: { max : "430px" },
      medium: { min: "430px", max: "600px" },
      large: { min: "600px", max: "750px" }
    }
  },
  plugins: [],
}

