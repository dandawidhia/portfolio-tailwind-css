/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      scrollBehavior: ['scroll-smooth'],
      colors : {
        primary : "#7c3aed",
        dark : "#c4b5fd",
        secondary : "#f8fafc",
      },
      screens : {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

