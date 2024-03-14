/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', "sans-serif"],
      },
      colors: {
        black: "#050505",
        snow: "#FBF5F3",
        cviolet: "#A5668B",
        blue: "#1B5299",
        cyan: "#379392",
        darkgreen: "#17301C",
        moonstone: "#4FB0C6",
        silverblue: "#4F86C6",
      },
    },
  },
  plugins: [],
};
