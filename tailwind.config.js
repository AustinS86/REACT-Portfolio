/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        // "coolors-1": "#89A894",
        // "coolors-2": "#4B644A",
        "coolors-3": "#ADFCF9",
        "coolors-1": "#08203E",
        "coolors-2": "#557C93",
      },
      backgroundImage: (theme) => ({
        "coolors-gradient": `linear-gradient(135deg, ${theme(
          "backgroundColor.coolors-1"
        )} 0%, ${theme("backgroundColor.coolors-2")} 100%)`,
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
