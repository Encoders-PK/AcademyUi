/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Added Montserrat as the default font
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'banner-bg': "url('/src/assets/bgbanner.png')",
       
        
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        growShrink: {
          '0%': { transform: 'scale(1)', color: '#078954' },
          '50%': { transform: 'scale(1.5)', color: '#05b045' },
          '100%': { transform: 'scale(1)', color: '#078954' },
        },
        darkLight: {
          '0%, 100%': { backgroundColor: '#D9AA1A' }, // Light color
          '50%': { backgroundColor: '#B8860B' }, // Dark color
        },
      },
      animation: {
        growShrink: 'growShrink 0.1s infinite',
        blink: 'blink 0.3s infinite',
        darkLight: 'darkLight 0.5s infinite', // Define the animation duration
      },
    },
  },
  plugins: [],
}
