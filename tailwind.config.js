/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "coffee": {
          50: '#E8d6d0',
          200: '#C89f94',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out",
        fadeIn: 'fadeIn .4s ease-in-out'
      },
    },
  },
  plugins: [],
}

