/** @type {import('tailwindcss').Config} */
import remToPxPlugin from 'tailwindcss-rem-to-px';

module.exports = {
  content: ['./**/*.{js,liquid,json}'],
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1440px',
    },
    fontFamily: {
      avantGarde: ['"ITC Avant Garde Gothic Pro"', 'sans-serif'],
      avenir: ['Avenir Light', 'sans-serif'],
    },
    colors: {
      doveGray: 'rgba(102, 102, 102, 1)',
      ghostlyShade: 'rgba(0, 0, 0, 0.1)',
      white: 'rgba(255, 255, 255, 1)',
      black: 'rgba(0, 0, 0, 1)',
    },
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
