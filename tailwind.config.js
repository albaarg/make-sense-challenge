module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "azul-make-sense": "#1A6D85",
      "verde-make-sense": "#70AF90",
      "rojo-make-sense": "#E26165",
      "amarillo-make-sense": "#FAF2A2",
      "footer-make-sense": "#045A6F",
      "bg-make-sense": "#F3F5F7",
      "bg-hold-up": "#FAF2A2",
      "bg-how-works":"#70AF90"
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "azul-make-sense": "#1A6D85",
      "verde-make-sense": "#70AF90",
      "rojo-make-sense": "#E26165",
      "amarillo-make-sense": "#FAF2A2",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      "amarillo-make-sense": "#FAF2A2",
      "border-make-sense": "#CACED1",
      "azul-make-sense": "#1A6D85"
    }),
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
