/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "coolors-1": "#89A894",
        "coolors-2": "#4B644A",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
