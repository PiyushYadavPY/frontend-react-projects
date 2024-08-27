/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        orange: "#FB6E03",
        yellow: "#FFEAAE",
        dark_yellow: "#FCCA3F",
        orange: "#F6820C",
      },
    },
  },
  plugins: [],
};
