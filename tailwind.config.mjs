/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        hover: {
          "0%": { transform: "scale(1)", filter: "sepia(0%) blur(0px)" },
          "50%": { transform: "scale(1.1)", filter: "sepia(60%) blur(5px)" },
          "100%": { transform: "scale(1)", filter: "sepia(0%) blur(0px)" },
        },
      },
      animation: {
        "waving-hand": "wave 3s linear infinite",
      },
      animation: {
        "hover-project": "hover 700ms ease-in-out",
      },
    },
  },
  plugins: [],
};
