/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          dark: "hsl(207, 26%, 17%)",
          light: "hsl(0, 0%, 98%)",
        },
        element: {
          dark: "hsl(209, 23%, 22%)",
          light: "hsl(0, 0%, 100%)",
        },
        text: {
          dark: "hsl(0, 0%, 100%)",
          light: "hsl(200, 15%, 8%)",
        },
        input: {
          light: "hsl(0, 0%, 52%)",
        },
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      spacing: {
        19.5: "78px",
        66: "264px",
      },
    },
  },
  plugins: [],
};
