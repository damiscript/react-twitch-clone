const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        "bg-red-400",
        "bg-blue-400",
        "bg-green-400",
        "bg-orange-400",
        "bg-teal-400",
        "bg-pink-400",
        "bg-yellow-400",
        "bg-gray-400",
        "hover:bg-red-400",
        "hover:bg-blue-400",
        "hover:bg-green-400",
        "hover:bg-orange-400",
        "hover:bg-teal-400",
        "hover:bg-pink-400",
        "hover:bg-yellow-400",
        "hover:bg-gray-400",
        "border-red-400",
        "border-blue-400",
        "border-green-400",
        "border-orange-400",
        "border-teal-400",
        "border-pink-400",
        "border-yellow-400",
        "border-gray-400",
      ],
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#9147ff",
      primaryV: colors.white,
      secondary: "#f2f2f2",
      secondaryV: "#53535f",
      light: "#f7f7f8",
      live: "#e91916",
      dark: "#292929",
      darkPrimary: colors.white,
      darkPrimaryV: colors.black,
      darkSecondary: "#bfdbfe",
      darkSecondaryV: "#3b82f6",
      darkHeader: "#1f1f1f",
      success: "#22bb33",
      warning: "#ffc107",
      danger: "#dc3545",
      muted: "#6c757d",
      black: colors.black,
      white: colors.white,
      green: colors.green,
      yellow: colors.yellow,
      pink: colors.pink,
      blue: colors.blue,
      orange: colors.orange,
      teal: colors.teal,
      red: colors.red,
      gray: colors.trueGray,
    },
    zIndex: {
      neg20: -20,
      neg10: -10,
      0: 0,
      10: 10,
      20: 20,
      auto: "auto",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  Vs: {
    extend: {},
  },
  plugins: [],
};
