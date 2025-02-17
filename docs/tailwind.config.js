/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        gray: '#5C5C60',
        dark: '#333333',
        accent: '#2FADBC',
        divider: '#D4D4D4',
      },
      fontSize: {
        h1: '32px',
        h2: '25px',
        h3: '20px',
        p: '15px',
      },
      spacing: {
        '7px': '7px',
        '60px': '60px',
        '70px': '70px',
      },
      fontFamily: {
        'noto': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
