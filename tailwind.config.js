/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saara: {
          cream: '#f4f0e6',
          offwhite: '#fdfbf7',
          green: '#1a3622',
          greenlight: '#2d5a3a',
          terracotta: '#C1654B', /* Nova cor argila/barro quente */
        }
      },
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        arabic: ['Aref Ruqaa', 'serif'],
      }
    },
  },
  plugins: [],
}
