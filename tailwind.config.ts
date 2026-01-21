import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Canela', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Form & Feeling Brand Palette
        ivory: '#FDFBF7',
        linen: '#F5F1EB',
        stone: '#D4CFC7',
        greige: '#8A857D',
        ink: '#2C2825',
        clay: '#A69080',
        taupe: '#C4B5A6',
        // Utility aliases
        muted: '#8A857D', // alias for greige - form labels, captions
        subtle: '#D4CFC7', // alias for stone - borders, dividers
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-up-delayed': 'slideUp 0.6s ease-out 0.15s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      letterSpacing: {
        'brand': '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
