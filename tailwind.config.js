/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#ff2f43","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337","950":"#4c0519"},
        low: {"100":"rgba(124,124,124,0.77)", "200":"rgba(192,192,192,0.77)"},
        pj: {
          100: "var(--pj-100)",
          200: "var(--pj-200)",
          300: "var(--pj-300)",
          400: "var(--pj-400)",
        },
        contact: {"100":"#1a1a1a", "200":"#414141", "test":"#646464"}
      },
      backgroundImage: {
        'parallax1': 'url("../public/images/hero/audi_background.jpeg")',
        'parallax2': 'url("../public/images/hero/audi_bridge.png")',
        'parallax3': 'url("../public/images/hero/audi_object.png")',

        'nextProjects2': 'url("../public/images/projects/nextProjects2.jpg")',
        'lifting': 'url("../public/images/projects/lifting.jpg")',
        'finance': 'url("../public/images/projects/finance.jpg")',
        'gira': 'url("../public/images/projects/gira.jpg")',
        'drogas': 'url("../public/images/projects/drogas.jpg")',
        'tickets': 'url("../public/images/projects/tickets.jpg")',
        'coffee': 'url("../public/images/projects/coffee.jpg")',
        'memory': 'url("../public/images/projects/memory.jpg")',
        'rocket': 'url("../public/images/projects/rocket.jpg")',

        'iphone': 'url("../public/images/iphoneCroped.png")',

        'lancia': 'url("../public/images/lanciaContact.jpg")',
      },
      fontFamily: {
        topper: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
