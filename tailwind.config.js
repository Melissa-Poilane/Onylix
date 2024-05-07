/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      DelmBold : ['delmbold', 'sans-serif'],
      DelSemiLight : ['delmsemilight', 'sans-serif'],

      NanamiBold : ['nanamibold', 'sans-serif'],
      NanamiLight : ['nanamilight', 'sans-serif'],
      NanamiRegular : ['nanamiregular', 'sans-serif'],
    },
    extend: {}
  },
  plugins: [],
}