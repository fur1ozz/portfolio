/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#f43f5e","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337","950":"#4c0519"}
      },
      backgroundImage: {
        'parallax1': 'url("../public/images/hero/audi_background.jpeg")',
        'parallax2': 'url("../public/images/hero/audi_bridge.png")',
        'parallax3': 'url("../public/images/hero/audi_object.png")',
        'test1': 'url("../public/images/projects/test1.jpg")',
        'test2': 'url("../public/images/projects/test2.jpg")',
        'test3': 'url("../public/images/projects/test3.jpg")',
        'test4': 'url("../public/images/projects/test4.jpg")',
        'test5': 'url("../public/images/projects/test5.jpg")',
      },
      fontFamily: {
        topper: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
