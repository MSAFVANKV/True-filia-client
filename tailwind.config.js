/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        comforter:['Comforter Brush', 'cursive'],
        comforter2:['Edu TAS Beginner', 'cursive']
      },
      screens: {
        // 'no-scroll': {'raw': '(max-height: 100vh)'},
      },
    },
  },
  plugins: [
    require('tailwindcss-no-scrollbar'),
    require('tailwind-scrollbar'),
  ],
}