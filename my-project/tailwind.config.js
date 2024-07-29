/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
      animation: {
        growShrink: 'growShrink 0.1s infinite',
        blink: 'blink 0.3s infinite',
      },
    },
  },
  plugins: [],
}



