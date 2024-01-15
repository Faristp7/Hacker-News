/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        clr : '#4d1f00',
        BaseClr : '#4d1f00ba'
      }
    },
  },
  plugins: [],
}

