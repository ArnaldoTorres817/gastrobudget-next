/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Caveat', 'cursive'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
