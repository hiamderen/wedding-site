/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        vibes: ['"Great Vibes"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        pink: {
          light: '#F9A8D4',
        },
        yellow: {
          light: '#FEF9C3',
        },
        cream: '#FDF6EC',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out both',
        'fade-in-slow': 'fadeIn 2s ease-in-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
