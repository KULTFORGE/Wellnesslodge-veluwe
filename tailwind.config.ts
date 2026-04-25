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
        forest: '#2C4A2E',
        earth:  '#3D2C1E',
        sand:   '#F2E8D9',
        cream:  '#FAF6F0',
        moss:   '#5C7A52',
        amber:  '#B6802C', // Overrides Tailwind's amber scale — use this single token only
        stone:  '#8B7D6B',
        white:  '#FEFEFE',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'ring':       '0 0 0 1px #8B7D6B',
        'ring-amber': '0 0 0 1px #B6802C',
        'whisper':    'rgba(0,0,0,0.05) 0px 4px 24px',
      },
      borderRadius: {
        '2xl': '16px',
        '4xl': '32px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    base: true,
    styled: true,
    utils: true,
  },
}

export default config
