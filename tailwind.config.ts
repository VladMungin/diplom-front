import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { background: 'var(--background)', foreground: 'var(--foreground)', main: 'var(--main)' },
      fontSize: {
        h1: ['36px', { lineHeight: '46px', fontWeight: '700' }],
        h2: ['30px', { lineHeight: '30px', fontWeight: '600' }],
        h3: ['24px', { lineHeight: '29px', fontWeight: '600' }],
        'main-semibold': ['16px', { fontWeight: '600', lineHeight: '24px' }],
        main: ['16px', { fontWeight: '400', lineHeight: '24px' }],
        'min-semibold': ['14px', { fontWeight: '600', lineHeight: '21px' }],
        min: ['14px', { fontWeight: '400', lineHeight: '21px' }],
        caption: ['12px', { fontWeight: '400', lineHeight: '15px' }],
      },
    },
  },
  plugins: [],
} satisfies Config
