/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { top: "-10rem" },
          "100%": { top: "5rem" },
        },
      }),
    },
  },
  plugins: [],
};
