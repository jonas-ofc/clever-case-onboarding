/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clever-green-100': '#003732',
        'clever-green-60': '#668784',
        'clever-white': '#ffffff',
      },
    },
  },
  plugins: [],
}