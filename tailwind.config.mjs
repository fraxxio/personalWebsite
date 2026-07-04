/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "color-mix(in srgb, var(--ink) 15%, transparent)",
        accent: "#f5c518",
      },
      boxShadow: {
        hard: "4px 4px 0 0 var(--shadow-c)",
        "hard-lg": "8px 10px 0 0 var(--shadow-c)",
      },
      fontFamily: {
        sans: ["Play", "sans-serif"],
      },
    },
    typography: {
      default: {
        css: {
          pre: false,
          code: false,
          "pre code": false,
          "code::before": false,
          "code::after": false,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
