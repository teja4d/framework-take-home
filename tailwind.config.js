/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "green-100":"#2E4845",
      "green-200":"#253F3C",
      "white":"#FFFFFF",
      "white-100": "#F7FAF6",
      "white-200": "#F1F3F0",
      "white-300": "#CAD1CE",
      "error":"#E83644",
      "success":"#00B453",
      "warning":"#FF8C21",
      //gray
      "gray-100":"#F7FAF6",
      "gray-200":"#F1F3F0",
      "gray-300":"#CAD1CE",
      "gray-400":"#AAB5B2",
      "gray-500":"#8B9693",
      "gray-600":"#6C7775",
      "gray-700":"#4D5756",
      "gray-800":"#2E4845",
      "gray-900":"#253F3C",
      //black

    }
  },
  plugins: [],
  //custom font size h1

}

