module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    backgroundImage: {
      mountain: "url('/img/mountain.svg')",
      tree: "url('/img/tree.svg')",
      moon: "url('/img/moon.svg')",
    },

    extend: {
      fontFamily: {
        Dongle: ["Mali", "cursive"],
      },
      colors: {
        nature: "#AEC23F",
        soil: "#694612",
        brown: "#452E0B",
        grass: "#355B1C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
