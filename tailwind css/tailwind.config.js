/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    screens:{
      'sm':'540px',
      'md':'720px',
      'lg':'960px',
      'xl':'1140px',
      'xxl':'1320px',
      'xl':'1140px',
    },
    container:{
      center: true,
      padding:'12px',
    },

    extend: {
      spacing :{
        'sp':'50px',
      },
      colors:{
           'brown':'brown',
          },
    },
  },
  plugins: [],
}

