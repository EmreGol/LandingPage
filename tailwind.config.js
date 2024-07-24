/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'thin': '0 3px 5px rgba(0, 0, 0, 0.08)'
      },
      flex: {
        '2': '2 2 0%',
      }
    },
  },
  plugins: [],
}