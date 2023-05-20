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
        eight: '#2581F7'
      },
      fontFamily: {
        'inter': ["Inter, sans-serif"]
      }
    },
  },
  plugins: [],
}

