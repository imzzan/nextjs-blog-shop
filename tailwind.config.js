
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Playball : ['Playball'],
        GreatVibes : ['Great Vibes']
      }
    },
  },
  plugins: [],
}
