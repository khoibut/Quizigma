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
        shrinkBorderLeft: {
          '100%':{borderLeft: '26vh solid white'},
        },
        shrinkBorderRight: {
          '100%':{borderRight: '26vh solid white'},
        },
        shrinkLeft: {
          '0%': {width: 'full'},
          '100%':{width: '0'},
        },
        openLeft: {
          '0%': {width: '0'},
          '100%':{width: 'full'},
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        rgbBorder: 'rgbBorder 3s infinite ease-in-out',
        shrinkBorderLeft: 'shrinkBorderLeft 1s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
        shrinkBorderRight: 'shrinkBorderRight 1s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
        shrinkLeft: 'shrinkLeft 1s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
        openLeft: 'openLeft 1s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
        slidein200: "slidein 1s ease 200ms",
        slidein300: "slidein 1s ease 300ms",
        slidein500: "slidein 1s ease 500ms",
        slidein700: "slidein 1s ease 700ms",
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

