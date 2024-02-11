/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // title: ['Titan One', "sans-serif"],
        title: ['Rammetto One', "sans-serif"],
        body: ['Karla', "sans-serif"]
      },
      colors: {
        'jdp-accent': '#cc0000',
        'bioseine-accent': '#ff885b',
        'quelor-accent': '#e1b668',
      }
    },
  },
  plugins: [],
}

