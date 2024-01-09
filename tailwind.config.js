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
      }
    },
  },
  plugins: [],
}