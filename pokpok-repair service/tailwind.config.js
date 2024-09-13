
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container:{
      center: true,
    padding: '12px',
    },
    colors:{
      'theme': '#B89841',
      'dark': '#333',
      'white': '#fff',
    },
    screens:{
      'sm':'540px',
      'md':'720px',
      'lg':'960px',
      'xl':'1140px',
      'xxl':'1320px',
    },
    extend: {
      fontFamily: {
        'os': 'Open Sans',
        'ps-regular':'Poppins',
        'ps-md':'Poppins-600',
        'ps-lg':'Poppins-800',
        },
        spacing:{
          'spacer': '120px',
        }
      }
    },
    plugins:[],
  }
 
