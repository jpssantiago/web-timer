/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
        "roboto": ["Roboto", "sans-serif"]
      }
    },
    screens: {}
  },
  plugins: [],
}