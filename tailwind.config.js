/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        '이름' : ["ProximaNova-Semibold"],
        '이름2' : ["NotoSansKR-Medium"]
      },
    },
  },
  plugins: [],
}
