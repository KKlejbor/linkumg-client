/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#111E2B',
        bgSecondary: '#f1f1f1',
        bgButton: '#0A2C4E'
      }
    },
  },
  plugins: [],
}
