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
        'select-accent': '#d3c9fe',
        'hifumi-accent': '#f9a8d4',
        'meteo-accent': '#ffef5f',
        'kasa-accent': '#ff615f',
        'piiquante-accent': '#bef264',
        'kanap-accent': '#3397dc',
        'omf-accent': '#ae5fda',
        'mvs-accent': '#fe6d00',
        'panthere-accent': '#000000',
      },
      boxShadow: {
        'white': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
        'white-xl': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)'
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

