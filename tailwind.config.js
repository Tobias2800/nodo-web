/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/content/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#080808',
          2: '#111111',
          3: '#1A1A1A',
        },
        white: {
          DEFAULT: '#F4F3EF',
          2: '#ECEAE4',
        },
        muted: {
          DEFAULT: '#5C5C5C',
          light: '#888888',
        },
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.12em',
      },
      lineHeight: {
        none: '0.9',
        display: '0.95',
        heading: '1.1',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.85, 0, 0.15, 1)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
