/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "album-cover": "url('/panic-panini-album.jpg')",
        "incoming-shows": "url('/coming-shows-bg.jpg')",
        "hero-pattern": "url('/pattern.png')",
      },
      fontFamily: {
        heading: ['var(--font-montserrat)'],
        sans: ['var(--font-open-sans)'],
        permanentMarker: ["Permanent Marker", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        rockSalt: ["Rock Salt", "sans-serif"],
      },
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        "fluo-green": "#43ffb6",
        "yellow-btn-primary": "#ffc621",
        "medium-gray": "#bebebe",
      },
      boxShadow: {
        "centered-shadow": "0px 0px 19px 4px rgba(0,0,0,0.1)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(80px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        slideUp: "slideUp ease .3s forwards 1.2s",
      },
    },
  },
  plugins: [],
};
