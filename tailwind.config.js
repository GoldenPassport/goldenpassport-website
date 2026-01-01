/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
          // Semantic tokens (switch between light/dark)
          bg: "rgb(var(--gp-bg) / <alpha-value>)",
          surface: "rgb(var(--gp-surface) / <alpha-value>)",
          text: "rgb(var(--gp-text) / <alpha-value>)",
          border: "rgb(var(--gp-border) / <alpha-value>)",
          accent: "rgb(var(--gp-accent) / <alpha-value>)",
          'btn-bg': "rgb(var(--gp-btn-bg) / <alpha-value>)",
          'btn-text': "rgb(var(--gp-btn-text) / <alpha-value>)",
          // Brand constants
          yellow: "rgb(var(--gp-brand-yellow) / <alpha-value>)",
          black: "rgb(var(--gp-brand-black) / <alpha-value>)",
          white: "rgb(var(--gp-brand-white) / <alpha-value>)",
        },
        golden: {
          500: "rgb(var(--gp-brand-yellow) / <alpha-value>)",
        },
      }
    },
  },
  plugins: [],
}

