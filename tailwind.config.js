/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        one: '#0D1117',
        two: '#21262D',
        three: '#161B22',
        four: '#30363D',
        five: '#363B42',
        six: '#C4CCD4',
        seven: '#EAEEF2',
        eight: '#2581F7',
        modalBg: '#000000b3'
      },
      fontFamily: {
        'inter': ["Inter, sans-serif"]
      },
      minHeight: {
        '56': '56px',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

