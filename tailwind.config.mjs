/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-blue-grey': '#212A33',
        'gold-bronze-dark': '#A38B5F',
        'gold-bronze-medium': '#C7A87E',
        'gold-bronze-light': '#E0C19F',
        'gold-bronze-accent': '#FFD700',
        'primary': '#D4AF37',
        'primary-dark': '#B8941F',
        'primary-light': '#F4E4BC',
        'secondary': '#2A3441',
        'secondary-dark': '#1A202C',
        'accent': '#8B4513',
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