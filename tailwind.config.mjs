/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-teal': '#1a3a3a',
        'dark-teal-light': '#2d4f4f',
        'dark-teal-dark': '#0f2626',
        'rose-gold': '#C19A6B',
        'rose-gold-dark': '#A37F5C',
        'rose-gold-light': '#D4AF84',
        'rose-gold-accent': '#B8956A',
        'primary': '#C19A6B',
        'primary-dark': '#A37F5C',
        'primary-light': '#D4AF84',
        'secondary': '#1a3a3a',
        'secondary-dark': '#0f2626',
        'secondary-light': '#2d4f4f',
        'accent': '#B8956A',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}