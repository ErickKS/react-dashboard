/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      black: "#000",
      white: "#FFF",
      transparent: "transparent",

      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7c7c8a",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },

      cyan: {
        500: "#61DAFB",
        300: "#9be1FB",
      },

      red: {
        800: "#9c0303",
      },
    },

    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
            transform: "translateY(15px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fade: "fade .2s",
      },
      boxShadow: {
        "card-inset": "inset 3px 0 0 0 #61DAFB",
        "bt-inset": "inset 0 -3px 0 0 #61DAFB",
      },
    },
  },
  plugins: [],
};
