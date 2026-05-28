// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf6ef',
        'cream-dark': '#f5e6d3',
        'brown-dark': '#2c1810',
        'brown-mid': '#6b5240',
        'brown-light': '#9b7c5a',
        gold: '#c17f4a',
        'red-accent': '#d4452a',
        'brown-border': '#e8ddd0',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'slide-ken': {
          '0%':   { opacity: '0', transform: 'scale(1.0)' },
          '5%':   { opacity: '1', transform: 'scale(1.0)' },
          '25%':  { opacity: '1', transform: 'scale(1.08)' },
          '30%':  { opacity: '0', transform: 'scale(1.08)' },
          '100%': { opacity: '0', transform: 'scale(1.08)' },
        },
      },
      animation: {
        'ken-1': 'slide-ken 20s ease-in-out infinite 0s',
        'ken-2': 'slide-ken 20s ease-in-out infinite 5s',
        'ken-3': 'slide-ken 20s ease-in-out infinite 10s',
        'ken-4': 'slide-ken 20s ease-in-out infinite 15s',
      },
    },
  },
  plugins: [],
}

export default config
