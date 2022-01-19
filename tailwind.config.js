module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        oswald: ["oswald", "sans-serif"],
      },
      backgroundImage: {
        "split-white-black":
          "linear-gradient(to right , gray-900 60% , #38bdf8 40%);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
