/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#ff2f43","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337","950":"#4c0519"},
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        theme: {
          bg: 'var(--bg-main)',
          card: 'var(--bg-card)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
        },
      },
      backgroundImage: {
        'nextProjects2': 'url("../public/images/projects/nextProjects2.webp")',
        'lifting': 'url("../public/images/projects/lifting.webp")',
        'finance': 'url("../public/images/projects/finance.webp")',
        'gira': 'url("../public/images/projects/gira.webp")',
        'drogas': 'url("../public/images/projects/drogas.webp")',
        'tickets': 'url("../public/images/projects/tickets.webp")',
        'coffee': 'url("../public/images/projects/coffee.webp")',
        'memory': 'url("../public/images/projects/memory.webp")',
        'rocket': 'url("../public/images/projects/rocket.webp")',
      },
      fontFamily: {
        topper: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
