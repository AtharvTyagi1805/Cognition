/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#E02F3D',
        'secondary': '#7A1A21'
      },
      spacing: {
        '18': '4.5rem',
      },
      backgroundImage: {
        'radial_red': 'radial-gradient(circle, #E0303D, transparent)',
        'radial_grey': 'radial-gradient(circle, #b2b2b2, transparent)',
      },
      keyframes: {
        'bg': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' }
        },
      },
      animation: {
        'bg': 'bg 5s linear infinite',
      }
    },
  },
  plugins: [],
}

