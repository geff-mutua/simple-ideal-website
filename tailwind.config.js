/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#010851",
        "secondary":"#9A7AF1",
        "tartiary":"#070707",
        "pink":"#EE9AEF"
      },
      boxShadow:{
        '3xl':'0 10px 50px 0px rgba(0,0,0, 0.15)',
      }
    },
  },
  plugins: [],
}

