/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        gp: {
          yellow: "rgb(var(--gp-yellow) / <alpha-value>)",
          ink: "rgb(var(--gp-ink) / <alpha-value>)",
          paper: "rgb(var(--gp-paper) / <alpha-value>)",
          muted: "rgb(var(--gp-muted) / <alpha-value>)",
        },
        golden: {
          500: "rgb(var(--gp-yellow) / <alpha-value>)",
        },
      }
    },
  },
  plugins: [],
}

