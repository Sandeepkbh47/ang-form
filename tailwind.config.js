/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'screen/90': '90vw',
        'screen/50': '50vw'
      }
    },
  },
  plugins: [],
}

