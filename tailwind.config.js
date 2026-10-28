// CSS variables hold hex colors, so opacity modifiers (e.g. border-theme-bg/20) need color-mix
const withOpacity = (variable) => ({ opacityValue }) =>
  opacityValue === undefined || opacityValue === '1'
    ? `var(${variable})`
    : `color-mix(in srgb, var(${variable}) calc(${opacityValue} * 100%), transparent)`;

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
          DEFAULT: withOpacity('--accent'),
          hover: withOpacity('--accent-hover'),
        },
        theme: {
          bg: withOpacity('--bg-main'),
          card: withOpacity('--bg-card'),
          text: withOpacity('--text-main'),
          muted: withOpacity('--text-muted'),
        },
      },
      fontFamily: {
        topper: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
