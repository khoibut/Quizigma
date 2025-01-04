/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'b-10': '10px',
      },
      keyframes: {
        rgbBorder: {
          '0%, 100%': { borderColor: 'rgb(255, 0, 0)' },
          '33%': { borderColor: 'rgb(21, 255, 0)' },
          '66%': { borderColor: 'rgb(0, 225, 255)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        shrinkLeft: {
          '100%':{borderLeft: '26vh solid white'},
        },
        shrinkRight: {
          '100%':{borderRight: '26vh solid white'},
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        rgbBorder: 'rgbBorder 3s infinite ease-in-out',
        shrinkLeft: 'shrinkLeft 1s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
        shrinkRight: 'shrinkRight 1s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
      },

      utilities: {
        '.x-scroll': {
          overflowX: 'scroll',
        },
      },
    },
  },
  plugins: [],
}

