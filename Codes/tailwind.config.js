/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
              'b-10': '10px',
      }
    },
  },
  plugins: [],
}
