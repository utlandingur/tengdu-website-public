const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "nunito-sans": ['"Nunito Sans"', "sans-serif"],
      },
      colors: {
        accent: "#2337ff",
        "accent-dark": "#000d8a",
        "gray-light": "rgb(238, 238, 238)",
        "gray-dark": "rgb(34, 41, 57)",
        black: "#3c3632",
        green: "#44a751",
        purple: "#ac99ff",
        primaryBackground: "#44a751",
        primaryColor: "#fff",
        secondaryBackground: "#506553",
        secondaryColor: "#fff",
        tertiaryBackground: "#fff",
        tertiaryColor: "#3c3632",
        dangerBackground: "#ee0b0b",
        dangerColor: "#fff",
        placeholder: "#eee",
      },
    },
  },
  plugins: [addIconSelectors(["gravity-ui", "material-symbols"])],
};
