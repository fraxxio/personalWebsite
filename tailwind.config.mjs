/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        hover: {
          "0%": { transform: "scale(1)", filter: "sepia(0%) blur(0px)" },
          "50%": { transform: "scale(1.1)", filter: "sepia(60%) blur(5px)" },
          "100%": { transform: "scale(1)", filter: "sepia(0%) blur(0px)" },
        },
      },
      animation: {
        "hover-project": "hover 700ms ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
