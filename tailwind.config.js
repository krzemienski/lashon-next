/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
        montserrat: ['var(--font-montserrat)'],
        'open-sans': ['var(--font-open-sans)'],
        amsterdam: ['var(--font-amsterdam)', 'serif'],
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
        brown: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#8B4513',
        },
        gold: {
          DEFAULT: '#DAA520',
          light: '#FFD700',
          dark: '#B8860B',
        },
        'burnt-orange': '#CC5500',
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
