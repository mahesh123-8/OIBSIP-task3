/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-purple': 'rgb(20, 30, 50)',
      },
      backgroundColor:{
        'custom-black': 'rgb(90,50,50)',
      },
      backgroundColor: {
        'custom-gray' : 'rgb(40,40,40)',

    },
  },
  plugins: [],
}

}